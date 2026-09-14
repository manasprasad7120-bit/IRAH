<?php
declare(strict_types=1);

/**
 * Contact-form mail endpoint for the IRAH Solution SPA.
 *
 * The React form (src/lib/sendEnquiry.js) POSTs JSON here, same origin. This
 * file hands the enquiry to Hostinger's SMTP server using the mailbox's own
 * credentials, so the message is properly authenticated and aligns with the
 * domain's SPF/DKIM records.
 *
 * This deliberately does NOT use PHP's mail(), which the old site relied on.
 * mail() drops the message into the local queue unauthenticated and reports
 * success either way - the most likely reason old enquiries were being filed
 * as spam or dropped outright.
 *
 * Credentials live in mail-config.php, which is NOT in git. See
 * mail-config.example.php in the repo root for the template and where to put
 * it. Nothing secret is in this file.
 */

// ---------------------------------------------------------------------------
// Request guards
// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Same-origin POST of application/json triggers no preflight, but answer one
// anyway so the endpoint still works if the site is ever served elsewhere.
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    header('Allow: POST, OPTIONS');
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST, OPTIONS');
    fail(405, 'Method not allowed.');
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

// Preferred location is one level ABOVE public_html, where no HTTP request can
// reach it even if PHP execution ever breaks. Falls back to sitting next to
// this file, which is still safe (PHP is executed, never served as source).
$configPaths = [__DIR__ . '/../mail-config.php', __DIR__ . '/mail-config.php'];

$config = null;
foreach ($configPaths as $path) {
    if (is_readable($path)) {
        $config = require $path;
        break;
    }
}

if (!is_array($config)) {
    error_log('[send.php] mail-config.php not found. Looked in: ' . implode(', ', $configPaths));
    fail(500, 'The contact form is not configured. Please email us directly.');
}

foreach (['host', 'port', 'username', 'password', 'to'] as $key) {
    if (empty($config[$key])) {
        error_log("[send.php] mail-config.php is missing '$key'.");
        fail(500, 'The contact form is not configured. Please email us directly.');
    }
}

// ---------------------------------------------------------------------------
// Rate limiting
// ---------------------------------------------------------------------------
// Crude but effective: the React form strips its honeypot field before sending,
// so there is no bot signal to check server-side. Cap submissions per IP.

$maxPerWindow = (int) ($config['max_per_hour'] ?? 5);
$window       = 3600;
$ip           = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$stampFile    = sys_get_temp_dir() . '/irah-enq-' . hash('sha256', $ip) . '.json';

$stamps = [];
if (is_readable($stampFile)) {
    $decoded = json_decode((string) file_get_contents($stampFile), true);
    if (is_array($decoded)) {
        $stamps = $decoded;
    }
}

$now    = time();
$stamps = array_values(array_filter($stamps, static fn($t) => is_int($t) && $t > $now - $window));

if (count($stamps) >= $maxPerWindow) {
    fail(429, 'Too many enquiries from this connection. Please try again later, or email us directly.');
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------

$raw = file_get_contents('php://input', false, null, 0, 65536); // 64 KB ceiling
$in  = json_decode((string) $raw, true);

if (!is_array($in)) {
    fail(400, 'Could not read the submission.');
}

// Only these fields are accepted; anything else the client sends is ignored.
$fields = ['name', 'email', 'organisation', 'role', 'intent', 'stage', 'timeline', 'budget', 'message'];

$values = [];
foreach ($fields as $field) {
    $values[$field] = is_scalar($in[$field] ?? null) ? trim((string) $in[$field]) : '';
}

// Server-side validation, mirroring src/components/ContactForm.jsx. The client
// checks are for UX; these are the ones that actually matter.
$intents = ['redis', 'ai', 'software', 'blockchain', 'government', 'affiliate', 'other'];

if (mb_strlen($values['name']) < 2) {
    fail(422, 'Please enter your full name.');
}
if (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Please enter a valid email.');
}
if (!in_array($values['intent'], $intents, true)) {
    fail(422, 'Please select the conversation type.');
}
if (mb_strlen($values['message']) < 20) {
    fail(422, 'Please add a little more detail.');
}

// ---------------------------------------------------------------------------
// Compose
// ---------------------------------------------------------------------------

$labels = [
    'name'         => 'Name',
    'email'        => 'Email',
    'organisation' => 'Organisation',
    'role'         => 'Role / designation',
    'intent'       => 'Conversation type',
    'stage'        => 'Project stage',
    'timeline'     => 'Expected timeline',
    'budget'       => 'Indicative budget',
    'message'      => 'Message',
];

$body = '';
foreach ($labels as $field => $label) {
    $body .= $label . ': ' . ($values[$field] !== '' ? $values[$field] : '-') . "\r\n";
}
$body .= "\r\n-- \r\n";
$body .= 'Sent from the contact form on ' . ($_SERVER['HTTP_HOST'] ?? 'the website') . "\r\n";
$body .= 'IP: ' . $ip . "\r\n";
$body .= 'Received: ' . gmdate('D, d M Y H:i:s') . " +0000\r\n";

// Same subject line the old PHP handler used, so existing inbox filters survive.
$subject = 'New IRAH enquiry - ' . $values['intent'];

try {
    smtpSend($config, $subject, $body, $values['email'], $values['name']);
} catch (Throwable $e) {
    // The reason goes to the server log, never to the browser.
    error_log('[send.php] SMTP failure: ' . $e->getMessage());
    fail(502, 'We could not send the message. Please email us directly.');
}

// Only record the attempt once it actually succeeded, so a server-side outage
// does not burn the visitor's allowance.
$stamps[] = $now;
@file_put_contents($stampFile, json_encode($stamps), LOCK_EX);

echo json_encode(['ok' => true]);
exit;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Send one message over an authenticated SMTP connection.
 *
 * Written against sockets directly rather than pulling in PHPMailer, so there
 * is no vendor/ directory to keep in sync across FTP deploys.
 */
function smtpSend(array $cfg, string $subject, string $body, string $replyTo, string $replyName): void
{
    $host    = (string) $cfg['host'];
    $port    = (int) $cfg['port'];
    $secure  = strtolower((string) ($cfg['secure'] ?? ($port === 465 ? 'ssl' : 'tls')));
    $timeout = (int) ($cfg['timeout'] ?? 20);

    $transport = $secure === 'ssl' ? "ssl://$host:$port" : "tcp://$host:$port";

    $context = stream_context_create([
        'ssl' => ['verify_peer' => true, 'verify_peer_name' => true, 'SNI_enabled' => true],
    ]);

    $fh = @stream_socket_client($transport, $errNo, $errStr, $timeout, STREAM_CLIENT_CONNECT, $context);
    if (!$fh) {
        throw new RuntimeException("connect to $transport failed: $errStr ($errNo)");
    }
    stream_set_timeout($fh, $timeout);

    try {
        smtpExpect($fh, [220]);

        $ehloName = $_SERVER['HTTP_HOST'] ?? 'localhost';
        $ehloName = preg_replace('/[^A-Za-z0-9.\-]/', '', explode(':', $ehloName)[0]) ?: 'localhost';

        smtpCmd($fh, "EHLO $ehloName", [250]);

        // STARTTLS upgrade for port 587. Port 465 is already wrapped in TLS.
        if ($secure === 'tls') {
            smtpCmd($fh, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($fh, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('STARTTLS negotiation failed');
            }
            smtpCmd($fh, "EHLO $ehloName", [250]); // must re-introduce after upgrade
        }

        smtpCmd($fh, 'AUTH LOGIN', [334]);
        smtpCmd($fh, base64_encode((string) $cfg['username']), [334]);
        smtpCmd($fh, base64_encode((string) $cfg['password']), [235]);

        // Envelope sender must be the authenticated mailbox; Hostinger rejects
        // anything else. The visitor's address goes in Reply-To instead.
        smtpCmd($fh, 'MAIL FROM:<' . $cfg['username'] . '>', [250]);
        smtpCmd($fh, 'RCPT TO:<' . $cfg['to'] . '>', [250, 251]);
        smtpCmd($fh, 'DATA', [354]);

        fwrite($fh, buildMessage($cfg, $subject, $body, $replyTo, $replyName) . "\r\n.\r\n");
        smtpExpect($fh, [250]);

        smtpCmd($fh, 'QUIT', [221]);
    } finally {
        fclose($fh);
    }
}

/** Assemble RFC 5322 headers plus a base64 UTF-8 body. */
function buildMessage(array $cfg, string $subject, string $body, string $replyTo, string $replyName): string
{
    $from     = (string) $cfg['username'];
    $fromName = (string) ($cfg['from_name'] ?? 'IRAH Solution Website');
    $domain   = substr($from, (int) strpos($from, '@') + 1);

    // Base64 the body so no line can begin with "." (no dot-stuffing needed)
    // and non-ASCII input - the rupee sign in the budget field, accented names -
    // survives intact.
    $headers = [
        'Date'                      => gmdate('D, d M Y H:i:s') . ' +0000',
        'Message-ID'                => '<' . bin2hex(random_bytes(12)) . '@' . $domain . '>',
        'From'                      => encodeName($fromName) . " <$from>",
        'To'                        => '<' . $cfg['to'] . '>',
        'Reply-To'                  => encodeName($replyName) . ' <' . $replyTo . '>',
        'Subject'                   => encodeHeader($subject),
        'MIME-Version'              => '1.0',
        'Content-Type'              => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => 'base64',
        'Auto-Submitted'            => 'auto-generated',
    ];

    $out = '';
    foreach ($headers as $key => $value) {
        // Strip any CR/LF a field could smuggle in - header-injection guard.
        $out .= $key . ': ' . str_replace(["\r", "\n"], '', $value) . "\r\n";
    }

    return $out . "\r\n" . chunk_split(base64_encode($body), 76, "\r\n");
}

/** RFC 2047 encoded-word, so UTF-8 survives in Subject and display names. */
function encodeHeader(string $text): string
{
    // Plain ASCII needs no encoding; anything with a high byte does.
    return preg_match('/[\x80-\xFF]/', $text)
        ? '=?UTF-8?B?' . base64_encode($text) . '?='
        : $text;
}

function encodeName(string $name): string
{
    $name = str_replace(['"', "\r", "\n"], '', $name);
    return $name === '' ? '' : '"' . encodeHeader($name) . '"';
}

function smtpCmd($fh, string $command, array $expect): string
{
    fwrite($fh, $command . "\r\n");
    return smtpExpect($fh, $expect);
}

/** Read one (possibly multi-line) SMTP reply and assert its status code. */
function smtpExpect($fh, array $expect): string
{
    $response = '';
    while (($line = fgets($fh, 515)) !== false) {
        $response .= $line;
        // "250-" means more lines follow; "250 " is the last one.
        if (strlen($line) < 4 || $line[3] !== '-') {
            break;
        }
    }

    if ($response === '') {
        throw new RuntimeException('no reply from server (timeout?)');
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expect, true)) {
        throw new RuntimeException('expected ' . implode('/', $expect) . ', got: ' . trim($response));
    }

    return $response;
}

/** Emit a JSON error the React form can display, and stop. */
function fail(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

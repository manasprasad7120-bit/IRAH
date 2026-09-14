<?php

/**
 * Template for the contact-form mail credentials.
 *
 * DO NOT fill this file in and commit it. Instead:
 *
 *   1. Create the mailbox in hPanel > Emails (e.g. contact@irahsolution.com).
 *   2. Copy this file's contents into a new file named mail-config.php.
 *   3. Upload it via hPanel > File Manager to the directory that CONTAINS
 *      public_html - i.e. alongside public_html, not inside it:
 *
 *          /home/uXXXXXXXX/
 *            |- mail-config.php   <-- here
 *            |- public_html/
 *                 |- index.html
 *                 |- send.php
 *
 *      send.php looks for ../mail-config.php first, then ./mail-config.php.
 *      The parent directory is preferred because no HTTP request can reach it
 *      even if PHP execution is ever misconfigured.
 *
 * mail-config.php is gitignored, and the FTP deploy never deletes files it did
 * not upload, so it survives every deploy untouched.
 */

return [
    // Hostinger's outgoing mail server. Confirm under
    // hPanel > Emails > your domain > Configuration settings.
    'host' => 'smtp.hostinger.com',

    // 465 with 'ssl' is the recommended pairing. Use 587 with 'tls' only if
    // your host blocks 465 outbound.
    'port'   => 465,
    'secure' => 'ssl', // 'ssl' for 465, 'tls' for 587 (STARTTLS)

    // The full mailbox address and its password. This mailbox is both the
    // authenticating account and the envelope sender, which is what makes the
    // message pass SPF/DKIM for your domain.
    'username' => 'contact@irahsolution.com',
    'password' => 'the-mailbox-password',

    // Where enquiries are delivered. Usually the same as 'username', but it can
    // be any address - e.g. a personal inbox while you are testing.
    'to' => 'contact@irahsolution.com',

    // Display name on the From header.
    'from_name' => 'IRAH Solution Website',

    // Submissions allowed per IP per hour before the endpoint returns 429.
    'max_per_hour' => 5,

    // Socket timeout in seconds.
    'timeout' => 20,
];

# IRAH Solution — React

The site, previously a set of PHP pages, is now a React single-page app built with Vite.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

No PHP, database or web-server stack is needed.

## Layout

```
index.html                 shell: stylesheet, favicon, Organization JSON-LD
src/main.jsx               entry
src/App.jsx                route table
src/components/            Layout, Header, Footer, Background, wizard, forms…
src/pages/                 one component per former .php page
src/lib/routeMeta.js       per-route <title>/description/pageKey (replaces the PHP page vars)
src/lib/capabilitySets.js  hero capability-lane content
src/lib/posts.js           insight article content
public/assets/             original css, images, video and PDF briefs, unchanged
legacy-php/                the previous PHP site, kept for reference
```

`assets/css/styles.css` is used as-is — no styling was rewritten.

## URLs

Pages now use clean paths (`/about`, `/redis-government`) instead of `/about.php`.
Old `.php` links redirect to the matching route, and `public/sitemap.xml` was updated.

Because it is a single-page app, whatever hosts `dist/` must rewrite unknown paths to
`index.html`, or deep links will 404. Examples:

- Apache: `FallbackResource /index.html`
- Nginx: `try_files $uri $uri/ /index.html;`
- Netlify/Vercel: SPA rewrite to `/index.html`

## Contact form

The React form keeps the same fields, validation order and messages as the old PHP
handler, plus the honeypot, then POSTs JSON — see `src/lib/sendEnquiry.js`.

A browser cannot speak SMTP (no raw TCP sockets, and a mailbox password in a `VITE_*`
variable would be readable in the bundle), so delivery goes through an HTTP endpoint.

### Default: `send.php` on the same origin

`public/send.php` is deployed next to `index.html` and sends through the domain's own
mailbox over authenticated SMTP. Credentials live in `mail-config.php` **on the server**,
which is gitignored and never uploaded by CI — copy `mail-config.example.php`, fill it in,
and place it in the directory *containing* `public_html`.

This deliberately does not use PHP's `mail()`, which the old site used. `mail()` sends
unauthenticated from the shared host and returns success as soon as the message is queued,
so failures and spam-filing were invisible. SMTP auth against the real mailbox makes the
mail align with the domain's SPF/DKIM.

Server-side it revalidates every field (the client checks are only for UX), rate-limits
per IP, and returns `{ok: false, error}` with a displayable reason for validation and
rate-limit rejections. Real SMTP errors go to the PHP error log, never to the browser.

### Optional overrides

Set either in `.env` (template in `.env.example`) to bypass `send.php`:

- `VITE_WEB3FORMS_KEY` — access key from web3forms.com. Takes priority if set.
- `VITE_CONTACT_ENDPOINT` — any other URL taking a JSON POST.

Never put SMTP or mailbox credentials in a `VITE_*` variable — Vite inlines them into the
JS at build time, so everything in the bundle is public.

In local dev there is no PHP, so `/send.php` 404s and the form reports a send failure.
That is intentional: it must never claim to have delivered an enquiry it did not deliver.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and uploads `dist/` to
Hostinger over FTPS. Required repo secrets: `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`.
No mail secret is needed — the credentials are server-side.

`public/.htaccess` ships in the build and handles SPA routing, so deep links and refreshes
resolve instead of 404ing. It serves real files first, which is why any leftover `.php`
files from the old site must be deleted from `public_html` — otherwise `/about.php` serves
the old page instead of redirecting into the React route.

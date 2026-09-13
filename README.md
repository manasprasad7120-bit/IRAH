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

The old handler used PHP `mail()`. The React form keeps the same fields, validation
order and messages, plus the honeypot, and then POSTs JSON to `VITE_CONTACT_ENDPOINT`
(see `.env.example` and `src/lib/sendEnquiry.js`).

With no endpoint configured the submission is logged to the console and the visitor is
taken to `/thank-you` — nothing is emailed. Point `VITE_CONTACT_ENDPOINT` at a mail
service or your own API before launch.

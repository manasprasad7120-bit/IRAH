// Replacement for the old PHP mail() handler.
//
// A browser cannot speak SMTP - there are no raw TCP sockets in JS, and a
// mailbox password in a VITE_* variable would be readable in the bundle. So the
// form POSTs JSON to an HTTP endpoint, and that endpoint does the sending.
//
// By default that endpoint is /send.php, deployed alongside the SPA on the same
// origin. It authenticates against the domain's own mailbox over SMTP, which is
// what makes the mail pass SPF/DKIM - unlike the old mail() call, which sent
// unauthenticated and reported success regardless.
//
// Overrides, in priority order:
//
//   1. VITE_WEB3FORMS_KEY    - access key from web3forms.com, if you would
//                              rather not run an endpoint at all.
//   2. VITE_CONTACT_ENDPOINT - any other URL accepting a JSON POST (Formspree,
//                              a serverless function, a different path).
//
// In local dev there is no PHP, so /send.php 404s and the form reports a send
// failure. That is intentional: it must never claim to have delivered an
// enquiry it did not deliver.

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const DEFAULT_ENDPOINT = '/send.php'

export async function sendEnquiry(values) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || DEFAULT_ENDPOINT

  // Same subject line the PHP handler used, for web3forms only - send.php
  // builds its own headers server-side.
  const payload = accessKey
    ? {
        access_key: accessKey,
        subject: `New IRAH enquiry - ${values.intent}`,
        from_name: values.name,
        replyto: values.email,
        ...values,
      }
    : values

  try {
    const res = await fetch(accessKey ? WEB3FORMS_URL : endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      // send.php returns a displayable reason for validation and rate-limit
      // rejections; anything else falls back to the form's generic message.
      const reason = await res
        .json()
        .then((d) => d?.error)
        .catch(() => null)
      return { ok: false, delivered: false, error: reason || null }
    }

    return { ok: true, delivered: true }
  } catch {
    return { ok: false, delivered: false, error: null }
  }
}

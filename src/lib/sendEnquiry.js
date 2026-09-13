// Replacement for the old PHP mail() handler in contact.php.
//
// Set VITE_CONTACT_ENDPOINT to an address that accepts a JSON POST
// (your own API, a serverless function, Formspree, etc.). Until it is set,
// submissions are validated client-side, logged, and treated as accepted so
// the thank-you flow still works in local development.
export async function sendEnquiry(values) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

  if (!endpoint) {
    // TODO: wire VITE_CONTACT_ENDPOINT to a real mail service before launch.
    console.warn('[contact] VITE_CONTACT_ENDPOINT is not set - enquiry was not delivered:', values)
    return { ok: true, delivered: false }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    })
    if (!res.ok) return { ok: false, delivered: false }
    return { ok: true, delivered: true }
  } catch {
    return { ok: false, delivered: false }
  }
}

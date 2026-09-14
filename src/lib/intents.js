// The single source of truth for the contact form's "Conversation type" field.
//
// Every `/contact?intent=…` link on the site must use one of these values. An
// unrecognised value used to leave the select blank on a required field, which
// silently broke the Solution Architect hand-off and the product-page CTAs.
export const INTENTS = [
  ['ai', 'AI/ML platform'],
  ['software', 'Enterprise software'],
  ['blockchain', 'Blockchain / traceability'],
  ['government', 'Government / PSU programme'],
  ['affiliate', 'Affiliate growth'],
  ['other', 'Other'],
]

const VALUES = INTENTS.map(([value]) => value)

// Returns the intent if the form can actually display it, otherwise ''.
export function normaliseIntent(value) {
  return VALUES.includes(value) ? value : ''
}

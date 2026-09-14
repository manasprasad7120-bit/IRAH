import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { INTENTS, normaliseIntent } from '../lib/intents'
import { sendEnquiry } from '../lib/sendEnquiry'

const STAGES = [
  'Exploring',
  'Requirements defined',
  'PoC planned',
  'Tender / procurement',
  'Existing system modernisation',
]

const TIMELINES = ['Immediate', '1-3 months', '3-6 months', '6-12 months', 'Planning only']

const BUDGETS = [
  'Under ₹25 lakh',
  '₹25 lakh - ₹1 crore',
  '₹1 crore - ₹5 crore',
  'Above ₹5 crore',
  'To be determined',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  // Ignore an unrecognised ?intent= (old bookmark, stale campaign link) rather than
  // pushing an unmatched value into the select and blanking a required field.
  const initialIntent = normaliseIntent(params.get('intent'))
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    intent: initialIntent,
    stage: '',
    timeline: '',
    budget: '',
    message: '',
    website: '', // honeypot
  })

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))

  // Same validation order and messages as the old PHP handler.
  const submit = async (e) => {
    e.preventDefault()
    if (values.website) return

    if (values.name.trim().length < 2) return setError('Please enter your full name.')
    if (!EMAIL_RE.test(values.email.trim())) return setError('Please enter a valid email.')
    if (!values.intent) return setError('Please select the conversation type.')
    if (values.message.trim().length < 20) return setError('Please add a little more detail.')

    setError('')
    setSending(true)
    const { website, ...payload } = values
    const res = await sendEnquiry(payload)
    setSending(false)

    // send.php returns a specific reason for rate limits and server-side
    // validation; show that in preference to the generic message.
    if (res.ok) navigate('/thank-you')
    else
      setError(
        res.error || 'We could not send the message. Please email contact@irahsolution.com.',
      )
  }

  return (
    <form className="contact-form enterprise-form" onSubmit={submit} noValidate>
      <input
        className="hp"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={set('website')}
      />
      {error && <div className="form-alert">{error}</div>}
      <div className="form-grid">
        <label>
          <span>Full name *</span>
          <input name="name" value={values.name} onChange={set('name')} required />
        </label>
        <label>
          <span>Work email *</span>
          <input type="email" name="email" value={values.email} onChange={set('email')} required />
        </label>
        <label>
          <span>Organisation</span>
          <input name="organisation" value={values.organisation} onChange={set('organisation')} />
        </label>
        <label>
          <span>Role / designation</span>
          <input name="role" value={values.role} onChange={set('role')} />
        </label>
        <label>
          <span>Conversation type *</span>
          <select name="intent" value={values.intent} onChange={set('intent')} required>
            <option value="">Select</option>
            {INTENTS.map(([v, n]) => (
              <option value={v} key={v}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Project stage</span>
          <select name="stage" value={values.stage} onChange={set('stage')}>
            <option value="">Select</option>
            {STAGES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Expected timeline</span>
          <select name="timeline" value={values.timeline} onChange={set('timeline')}>
            <option value="">Select</option>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Indicative budget</span>
          <select name="budget" value={values.budget} onChange={set('budget')}>
            <option value="">Prefer not to say</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <label className="full">
          <span>What are you trying to achieve? *</span>
          <textarea
            name="message"
            rows="7"
            value={values.message}
            onChange={set('message')}
            required
          />
        </label>
      </div>
      <div className="form-submit">
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? 'Sending…' : 'Send enquiry'}
        </button>
        <p>By submitting, you agree that IRAH may contact you about this enquiry.</p>
      </div>
    </form>
  )
}

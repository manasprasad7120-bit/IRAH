import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { normaliseIntent } from '../lib/intents'

const STAGES = [
  {
    step: 'STEP 1',
    question: 'What type of organisation are you?',
    options: [
      ['Government', 'Government Department'],
      ['PSU', 'PSU / System Integrator'],
      ['Enterprise', 'Large Enterprise'],
      ['Growth', 'Growth-led Brand'],
    ],
  },
  {
    step: 'STEP 2',
    question: 'What are you trying to improve?',
    options: [
      ['Performance', 'Application performance'],
      ['AI', 'Intelligent automation'],
      ['Trust', 'Traceability and trust'],
      ['Portal', 'Digital platform or portal'],
      ['Growth', 'Customer acquisition'],
    ],
  },
  {
    step: 'STEP 3',
    question: 'What operating constraint matters most?',
    options: [
      ['Scale', 'High traffic and scale'],
      ['Field', 'Field and offline use'],
      ['Security', 'Security and audit'],
      ['Legacy', 'Legacy integration'],
      ['Speed', 'Fast launch'],
    ],
  },
  {
    step: 'STEP 4',
    question: 'What outcome do you need first?',
    options: [
      ['PoC', 'Measured PoC'],
      ['Pilot', 'Controlled pilot'],
      ['Build', 'Full platform build'],
      ['Modernise', 'Modernisation roadmap'],
    ],
  },
]

// Step-2 answers are display values, not contact-form intents, so map across
// rather than passing "Performance"/"AI" straight into the URL. normaliseIntent
// keeps a typo here from reaching the form as an unmatched value.
const INTENT_BY_NEED = {
  Performance: 'software',
  AI: 'ai',
  Trust: 'blockchain',
  Portal: 'software',
  Growth: 'affiliate',
}

function intentFor(need, org) {
  const fallback = org === 'Government' || org === 'PSU' ? 'government' : 'other'
  return normaliseIntent(INTENT_BY_NEED[need]) || fallback
}

// Recommendation logic, ported from showResult() in assets/js/app.js.
function recommend(answers) {
  const [org, need, constraint, outcome] = answers
  let title = 'Enterprise platform discovery'
  let copy =
    'A focused discovery should define users, workflows, data, constraints, architecture and measurable success gates before build.'
  let stack = ['Product discovery', 'Enterprise architecture', 'Security', 'Delivery governance']

  if (need === 'Performance') {
    title = 'Application acceleration PoC'
    copy =
      'Baseline one high-impact workload, design a safe in-memory caching pattern, test resilience and measure latency plus database-load improvement before scale.'
    stack = ['In-memory caching', 'Observability', 'API integration', 'Failover testing']
  } else if (need === 'AI') {
    title = 'Governed AI platform pilot'
    copy =
      'Select one decision or document workflow, establish trusted data, deploy a human-reviewed AI service and measure accuracy, speed and adoption.'
    stack = ['Document AI / RAG', 'MLOps', 'Human review', 'Analytics']
  } else if (need === 'Trust') {
    title = 'Blockchain traceability pilot'
    copy =
      'Define the event model, participating roles, verification flow and evidence requirements before introducing a permissioned trust ledger.'
    stack = ['Provenance', 'Field app', 'QR verification', 'Permissioned ledger']
  } else if (need === 'Portal') {
    title = 'Digital platform modernisation'
    copy =
      'Create a modular experience and integration architecture, then validate one end-to-end citizen or departmental workflow.'
    stack = ['Web & mobile', 'API gateway', 'Workflow', 'Command dashboard']
  } else if (need === 'Growth') {
    title = 'Affiliate growth control system'
    copy =
      'Define the validated outcome, instrument server-side attribution, onboard governed supply and scale by customer value rather than raw volume.'
    stack = ['S2S attribution', 'Publisher ops', 'Fraud controls', 'Reconciliation']
  }

  return {
    title,
    stack,
    // No specific need selected falls back to the org type, then to "Other".
    intent: intentFor(need, org),
    body: `For ${org || 'your organisation'}, prioritise ${
      constraint || 'operating constraints'
    } and begin with a ${outcome || 'measured first stage'}. ${copy}`,
  }
}

export default function ArchitectWizard() {
  const [answers, setAnswers] = useState([])
  const wizardRef = useRef(null)
  const resultRef = useRef(null)

  const current = answers.length + 1
  const finished = answers.length >= STAGES.length
  const result = finished ? recommend(answers) : null

  const choose = (value) => {
    const next = [...answers, value]
    setAnswers(next)
    if (next.length >= STAGES.length) {
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0)
    }
  }

  const restart = () => {
    setAnswers([])
    wizardRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="architect-wizard" id="architectWizard" ref={wizardRef}>
      <div className="wizard-progress">
        {[1, 2, 3, 4].map((n, i) => (
          <span key={n} className={i < current ? 'active' : undefined}>
            {n}
          </span>
        ))}
      </div>
      {STAGES.map((stage, i) => (
        <div
          key={stage.step}
          className={`wizard-stage${!finished && i === answers.length ? ' active' : ''}`}
          data-stage={i + 1}
        >
          <small>{stage.step}</small>
          <h2>{stage.question}</h2>
          <div className="wizard-options">
            {stage.options.map(([value, label]) => (
              <button key={label} onClick={() => choose(value)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="architect-result" id="architectResult" hidden={!finished} ref={resultRef}>
        <span className="eyebrow">Recommended path</span>
        <h2 id="resultTitle">{result ? result.title : 'Enterprise platform discovery'}</h2>
        <p id="resultCopy">{result?.body}</p>
        <div className="result-stack" id="resultStack">
          {result?.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="actions">
          <Link
            className="btn btn-primary"
            id="resultContact"
            to={`/contact?intent=${encodeURIComponent(result ? result.intent : 'other')}`}
          >
            Discuss this solution
          </Link>
          <button className="btn btn-secondary" id="restartWizard" type="button" onClick={restart}>
            Start again
          </button>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'

const STEPS = [
  { no: '01', label: 'Discovery', hint: 'Mandate, users, baseline', copy: 'Define the mandate, users, operating constraints, data reality, baseline performance and measurable success criteria.' },
  { no: '02', label: 'Architecture', hint: 'Experience, data, security', copy: 'Design experience, integrations, data ownership, security, infrastructure, resilience and operating responsibilities.' },
  { no: '03', label: 'Prototype', hint: 'Validate highest risk', copy: 'Validate the highest-risk assumptions quickly through working interaction and technical slices.' },
  { no: '04', label: 'PoC', hint: 'Measure technical proof', copy: 'Measure technical and business evidence against agreed gates before production commitment.', title: 'Proof of Concept' },
  { no: '05', label: 'Pilot', hint: 'Real users and data', copy: 'Use real users, real data and controlled scope to prove adoption, support and operational behaviour.' },
  { no: '06', label: 'Scale', hint: 'Migration and adoption', copy: 'Plan migration, capacity, training, rollout waves, governance and service-level ownership.' },
  { no: '07', label: 'Operate', hint: 'SLA, alerts, support', copy: 'Run the platform with observability, incident response, maintenance, support and accountable service levels.' },
  { no: '08', label: 'Improve', hint: 'Evidence-led roadmap', copy: 'Use product analytics, user feedback, operating evidence and roadmap governance for continuous improvement.' },
]

export default function BuildShowcase() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <div className="build-showcase" id="buildShowcase">
      {STEPS.map((s, i) => (
        <button
          key={s.no}
          className={i === active ? 'active' : undefined}
          onClick={() => setActive(i)}
        >
          <span>{s.no}</span>
          <b>{s.label}</b>
          <small>{s.hint}</small>
        </button>
      ))}
      <div className="build-detail" id="buildDetail">
        <h3>{step.title || step.label}</h3>
        <p>{step.copy}</p>
      </div>
    </div>
  )
}

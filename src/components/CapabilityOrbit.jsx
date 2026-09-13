import { useState } from 'react'

const CAPS = [
  ['build', 'Build', 'Design and deliver modular enterprise platforms, citizen applications and data products with clear operating ownership.'],
  ['modernise', 'Modernise', 'Replace fragile legacy experiences through APIs, phased migration and controlled change.'],
  ['scale', 'Scale', 'Move from pilot to multi-region or national operation with capacity, training and support.'],
  ['optimise', 'Optimise', 'Use telemetry, analytics and testing to improve cost, speed, reliability and adoption.'],
  ['secure', 'Secure', 'Embed identity, access, audit, privacy, resilience and incident readiness into design.'],
  ['integrate', 'Integrate', 'Connect legacy applications, registries, devices and partner systems through governed APIs.'],
  ['automate', 'Automate', 'Remove repetitive work using workflow engines, AI assistance and event-driven processes.'],
  ['analyse', 'Analyse', 'Turn operational data into dashboards, alerts, prediction and decision support.'],
  ['govern', 'Govern', 'Define ownership, policy, approval, lineage and evidence across the platform.'],
  ['monitor', 'Monitor', 'Observe service levels, latency, errors, security, business outcomes and user experience.'],
]

export default function CapabilityOrbit() {
  const [active, setActive] = useState('build')
  const current = CAPS.find(([key]) => key === active)

  return (
    <div className="capability-orbit" id="capabilityOrbit">
      {CAPS.map(([key, label]) => (
        <button
          key={key}
          className={key === active ? 'active' : undefined}
          onClick={() => setActive(key)}
        >
          {label}
        </button>
      ))}
      <div className="orbit-copy" id="orbitCopy">
        <h3>{current[1]}</h3>
        <p>{current[2]}</p>
      </div>
    </div>
  )
}

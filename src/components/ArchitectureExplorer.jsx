import { useState } from 'react'

const LAYERS = [
  {
    label: 'Citizen & Staff',
    title: 'Experience layer',
    copy: 'Accessible web, mobile, assisted-service, field and command interfaces designed around actual roles and connectivity conditions.',
    stack: 'Web · Mobile · IVR · Offline-first',
  },
  {
    label: 'Experience API',
    title: 'Integration and workflow',
    copy: 'Identity, consent, validation, API orchestration, events and process routing connect every channel to trusted services.',
    stack: 'API Gateway · IAM · Workflow · Events',
  },
  {
    label: 'Redis',
    title: 'Real-time performance',
    copy: 'Redis accelerates repeated reads, sessions, queues, streams and short-lived state while observability protects production behaviour.',
    stack: 'Cache · Sessions · Streams · Search',
  },
  {
    label: 'AI Services',
    title: 'Intelligence services',
    copy: 'OCR, RAG, computer vision, prediction, anomaly detection and decision support operate through governed model services.',
    stack: 'OCR · RAG · Vision · Prediction',
  },
  {
    label: 'Trust Ledger',
    title: 'Trust and provenance',
    copy: 'Signed events and permissioned records create verifiable history where multiple parties need controlled, tamper-evident evidence.',
    stack: 'Provenance · Audit · Credentials',
  },
  {
    label: 'Core Systems',
    title: 'Systems of record',
    copy: 'Departmental applications, ERP, registries and databases remain authoritative while modern services reduce coupling and risk.',
    stack: 'ERP · Registries · Databases',
  },
  {
    label: 'Command View',
    title: 'Command and operations',
    copy: 'Role-based dashboards surface service levels, alerts, business outcomes and operational exceptions for timely action.',
    stack: 'Dashboards · Alerts · SLOs · Audit',
  },
]

export default function ArchitectureExplorer() {
  const [selected, setSelected] = useState(null)
  const layer = selected === null ? null : LAYERS[selected]

  return (
    <div className="architecture-explorer" id="architectureExplorer">
      <div className="architecture-stack">
        {LAYERS.map((l, i) => (
          <button
            key={l.label}
            className={i === selected ? 'active' : undefined}
            onClick={() => setSelected(i)}
          >
            {l.label}
          </button>
        ))}
      </div>
      <aside className="architecture-panel" id="architecturePanel">
        {layer ? (
          <>
            <small>SELECTED LAYER</small>
            <h3>{layer.title}</h3>
            <p>{layer.copy}</p>
            <div className="stack-tags">
              {layer.stack.split(' · ').map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </>
        ) : (
          <>
            <small>SELECT A LAYER</small>
            <h3>Enterprise architecture</h3>
            <p>Explore how experience, performance, intelligence, trust and operations work together.</p>
            <div className="stack-tags">
              <span>API-first</span>
              <span>Secure by design</span>
              <span>Observable</span>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

import { Link } from 'react-router-dom'

const ITEMS = [
  ['Prototype', 'Government Knowledge Agent', 'Grounded multilingual assistant for circulars, schemes, policies and departmental knowledge.'],
  ['Reference architecture', 'Resilience Blueprint', 'Patterns for cache-aside, sessions, failover, observability and safe degradation.'],
  ['Research initiative', 'Traceability Intelligence', 'Combining field evidence, anomaly models and signed provenance for high-risk supply chains.'],
  ['Prototype', 'Digital Twin Operations', 'Operational visualisation for assets, facilities and service systems.'],
  ['Reference implementation', 'Document AI Pipeline', 'OCR, classification, extraction, human review and searchable knowledge.'],
  ['Prototype', 'Citizen Service Copilot', 'Guided service discovery and form assistance with auditable handoff.'],
]

export default function IrahLabs() {
  return (
    <>
      <section className="hero hero-inner">
        <div className="container narrow">
          <span className="eyebrow">IRAH Labs</span>
          <h1 className="gradient">Research initiatives, prototypes and reusable accelerators.</h1>
          <p>
            A transparent space for ideas under development. Items are clearly labelled as
            prototype, reference implementation or research initiative.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/contact">
              Discuss a project
            </Link>
            <Link className="btn btn-secondary" to="/case-studies">
              View work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {ITEMS.map(([status, title, copy]) => (
            <article className="card" key={title}>
              <span className="lab-status">{status}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

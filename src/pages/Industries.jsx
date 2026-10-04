import { Link } from 'react-router-dom'

const BULLETS = [
  'AI/ML opportunity mapping',
  'Application acceleration architecture',
  'Blockchain or audit controls where justified',
  'Modular software and integration roadmap',
  'PoC success metrics and scale plan',
]

const SECTORS = [
  ['education', 'Education', 'Education', 'Student information, assessment, content, grants, teacher workflows, analytics and high-traffic portals.'],
  ['agriculture', 'Agriculture', 'Agriculture', 'Seed lineage, subsidy workflows, equipment access, advisories, inspection and market intelligence.'],
  ['healthcare', 'Healthcare', 'Healthcare', 'Facility systems, equipment tracking, claims, referrals, dashboards and citizen access.'],
  ['power', 'Power & Utilities', 'Power & Utilities', 'Consumer services, outage workflows, asset intelligence, demand visibility and field operations.'],
  ['smart-cities', 'Smart Cities', 'Smart Cities', 'Command centres, grievance systems, permits, mobility, water and integrated urban data.'],
  ['telecom', 'Telecom', 'Telecom', 'Subscriber systems, partner operations, network analytics and digital service platforms.'],
  ['finance', 'Financial Services', 'Financial Services', 'Onboarding, risk, fraud, transactions, customer intelligence and high-performance experiences.'],
  ['manufacturing', 'Manufacturing', 'Manufacturing', 'Quality, traceability, maintenance, warehouse, supplier and production intelligence.'],
  ['logistics', 'Logistics', 'Logistics', 'Fleet, route, warehouse, proof-of-delivery and control-tower systems.'],
  ['public-safety', 'Public Safety', 'Public Safety', 'Emergency response, command, incident workflows, evidence and operational dashboards.'],
  ['agentic-ai', 'Agentic AI & Automation', 'Agentic AI & Automation', 'Multi-agent workflows, tool orchestration, enterprise process automation, human-in-the-loop approvals, guardrails and observability.'],
  ['retail', 'Retail & Commerce', 'Retail & Commerce', 'Customer growth, order intelligence, loyalty, attribution and supply-chain visibility.'],
]

export default function Industries() {
  return (
    <>
      <section className="hero hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Industries</span>
          <h1 className="gradient">Technology patterns shaped around sector reality.</h1>
          <p>
            Each industry page combines pain points, AI opportunities, performance needs, trust
            controls, software modules and measurable outcomes.
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
        <div className="container industry-detail-grid">
          {SECTORS.map(([id, eyebrow, heading, copy]) => (
            <article id={id} className="card industry-detail" key={id}>
              <span className="eyebrow">{eyebrow}</span>
              <h2>{heading}</h2>
              <p>{copy}</p>
              <ul>
                {BULLETS.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

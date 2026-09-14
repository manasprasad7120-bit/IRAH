import { Link } from 'react-router-dom'

const BRIEFS = [
  ['irah-enterprise-capability.pdf', 'Enterprise Capability', 'AI, software, blockchain and delivery model.'],
  ['ai-government-brief.pdf', 'AI for Government', 'Use cases, controls and implementation approach.'],
  ['affiliate-growth-brief.pdf', 'Affiliate Growth', 'Attribution, partner operations and quality governance.'],
]

export default function Downloads() {
  return (
    <>
      <section className="hero hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Download centre</span>
          <h1 className="gradient">Briefs designed for decision-makers.</h1>
          <p>
            Use these concise capability notes to begin internal discussions, technical discovery
            and PoC planning.
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
        <div className="container grid-4">
          {BRIEFS.map(([file, title, copy]) => (
            <a className="card download-card" href={`/assets/downloads/${file}`} download key={file}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span>Download PDF ↓</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'

export default function Resources() {
  return (
    <>
      <section className="hero hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Knowledge Hub</span>
          <h1 className="gradient">Architecture, strategy and implementation guidance.</h1>
          <p>
            Decision-focused resources for leaders, architects, programme teams and growth
            operators.
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
          <Link className="card" to="/blogs">
            <h3>Technical insights</h3>
            <p>Deep dives into AI, blockchain, offline-first apps and attribution.</p>
          </Link>
          <Link className="card" to="/downloads">
            <h3>Capability briefs</h3>
            <p>Download concise, presentation-ready overviews for internal discussion.</p>
          </Link>
          <Link className="card" to="/case-studies">
            <h3>Solution briefs</h3>
            <p>
              See how challenges translate into architecture, implementation and measurable
              decisions.
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function CaseStudies() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Case studies &amp; solution blueprints</span>
            <h1 className="gradient">Clear problems. Practical architecture. Measurable outcomes.</h1>
            <p className="hero-lead">
              Explore how IRAH approaches government performance, traceability, enterprise software
              and affiliate growth challenges.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Discuss your use case
              </Link>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Link className="card" to="/case-redis-government">
              <span className="card-no">GOVERNMENT PERFORMANCE</span>
              <h3>Redis PoC blueprint</h3>
              <p>
                A controlled approach to reducing latency and database pressure in a high-traffic
                public application.
              </p>
            </Link>
            <Link className="card" to="/case-affiliate-scale">
              <span className="card-no">PERFORMANCE GROWTH</span>
              <h3>Affiliate scale with controls</h3>
              <p>
                Attribution, source transparency, fraud governance and reconciliation for
                multi-partner acquisition.
              </p>
            </Link>
            <Link className="card" to="/bharat-food-assure">
              <span className="card-no">FOOD TRACEABILITY</span>
              <h3>Bharat Food Assure</h3>
              <p>
                A solution blueprint for product authenticity, field inspection and consumer
                verification.
              </p>
            </Link>
            <Link className="card" to="/seed-traceability">
              <span className="card-no">AGRICULTURE</span>
              <h3>Seed Traceability</h3>
              <p>A national-scale model for lineage, certification, distribution and farmer trust.</p>
            </Link>
          </div>
          <p className="disclaimer">
            Case studies must distinguish verified delivered results from proposed architecture, PoC
            outcomes or illustrative targets.
          </p>
        </div>
      </section>
    </>
  )
}

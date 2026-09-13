import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function SeedTraceability() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Seed Traceability</span>
            <h1 className="gradient">Protect seed lineage from source to farmer.</h1>
            <p className="hero-lead">
              A digital platform for lot genealogy, certification, processing, distribution,
              verification and risk analytics across the formal seed chain.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact?intent=seed">
                Discuss a pilot
              </Link>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Lineage</span>
              <h2>Track every generation and transformation.</h2>
            </div>
            <p>
              Seed quality depends on identity, purity, controlled multiplication and verifiable
              handling. The platform links each downstream lot to its authorised upstream source.
            </p>
          </div>
          <div className="flow-map large">
            <div>Nucleus</div>
            <i>→</i>
            <div>Breeder</div>
            <i>→</i>
            <div>Foundation</div>
            <i>→</i>
            <div>Certified</div>
            <i>→</i>
            <div>Dealer</div>
            <i>→</i>
            <div>Farmer</div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <h3>Lot genealogy</h3>
              <p>
                Parent-child lineage, variety, class, producer, field, harvest and processing
                records.
              </p>
            </div>
            <div className="card">
              <h3>Certification workflow</h3>
              <p>Inspection, sampling, testing, approval, labels and certificate references.</p>
            </div>
            <div className="card">
              <h3>QR verification</h3>
              <p>
                Farmer-friendly product and lot verification with assisted channels where needed.
              </p>
            </div>
            <div className="card">
              <h3>Offline field app</h3>
              <p>
                Capture inspections and movement in low-connectivity areas, then synchronise safely.
              </p>
            </div>
            <div className="card">
              <h3>AI risk signals</h3>
              <p>
                Unusual volume, geography, repeated scans, lineage gaps and inconsistent timing.
              </p>
            </div>
            <div className="card">
              <h3>Regulatory dashboards</h3>
              <p>Production, movement, inventory, risk, complaints and enforcement views.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function Blockchain() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Blockchain platforms</span>
            <h1 className="gradient">
              Make critical records verifiable, traceable and harder to manipulate.
            </h1>
            <p className="hero-lead">
              We design permissioned blockchain and tamper-evident systems for provenance,
              certificates, supply chains, documents and multi-stakeholder workflows.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Discuss a blockchain platform
              </Link>
              <Link className="btn btn-secondary" to="/products">
                Explore traceability products
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
              <span className="eyebrow">Use cases</span>
              <h2>Blockchain where shared trust is the problem.</h2>
            </div>
            <p>
              We do not apply blockchain to every database. We use it when several parties need a
              shared, auditable record and no single participant should be able to rewrite history
              unnoticed.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Supply-chain provenance</h3>
              <p>
                Signed events across manufacturers, processors, logistics partners, distributors and
                retailers.
              </p>
            </div>
            <div className="card">
              <h3>Certificate verification</h3>
              <p>
                Digitally verifiable academic, training, quality, inspection and compliance
                credentials.
              </p>
            </div>
            <div className="card">
              <h3>Document integrity</h3>
              <p>Hash-based proof that a record existed in a specific form at a specific time.</p>
            </div>
            <div className="card">
              <h3>Asset lifecycle</h3>
              <p>
                Ownership, maintenance, warranty, movement and disposal records for high-value
                assets.
              </p>
            </div>
            <div className="card">
              <h3>Land and registry support</h3>
              <p>
                Tamper-evident event trails supporting existing authoritative registries and
                workflows.
              </p>
            </div>
            <div className="card">
              <h3>Inter-agency workflows</h3>
              <p>
                Shared state transitions with role-based access, auditability and independent
                verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Architecture</span>
            <h2>Permissioned by default. Integrated by design.</h2>
            <p>
              Government and enterprise deployments typically require identity-aware participation,
              privacy controls, predictable performance and integration with existing systems. We
              combine application services, off-chain data stores and signed ledger events rather
              than putting sensitive data directly on-chain.
            </p>
            <ul className="check-list">
              <li>Permissioned participants and role policies</li>
              <li>Off-chain storage for sensitive or large data</li>
              <li>Digital signatures and cryptographic hashes</li>
              <li>API integration with portals, ERP and mobile apps</li>
              <li>Operational monitoring and recovery procedures</li>
            </ul>
          </div>
          <div className="architecture">
            <div className="arch-col">
              <div className="arch-node">Web &amp; mobile apps</div>
              <div className="arch-node">Department systems</div>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-col">
              <div className="arch-node accent">Application &amp; workflow layer</div>
              <div className="arch-tags">
                <span>Identity</span>
                <span>Rules</span>
                <span>APIs</span>
              </div>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-col">
              <div className="arch-node">Operational database</div>
              <div className="arch-node">Permissioned ledger</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

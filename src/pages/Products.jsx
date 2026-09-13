import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function Products() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Product platforms</span>
            <h1 className="gradient">
              AI and blockchain products for authenticity, lineage and public trust.
            </h1>
            <p className="hero-lead">
              IRAH’s product portfolio addresses high-friction supply chains where field usability,
              data quality and tamper-evident records must work together.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Request a product discussion
              </Link>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Link className="card product-card" to="/bharat-food-assure">
              <span>PRODUCT 01</span>
              <h2>Bharat Food Assure</h2>
              <p>
                Authentication, traceability, inspection and analytics for packaged food and related
                supply chains.
              </p>
              <ul className="mini-list">
                <li>Unique product identity and QR verification</li>
                <li>AI-led anomaly and counterfeit signals</li>
                <li>Signed supply-chain events</li>
                <li>Consumer and inspector interfaces</li>
                <li>Recall and enforcement support</li>
              </ul>
            </Link>
            <Link className="card product-card" to="/seed-traceability">
              <span>PRODUCT 02</span>
              <h2>Seed Traceability</h2>
              <p>
                Digital lineage and verification from source seed through certification, processing,
                distribution and farmer use.
              </p>
              <ul className="mini-list">
                <li>Nucleus-to-certified lineage</li>
                <li>Lot, batch and certification records</li>
                <li>QR and assisted verification</li>
                <li>Offline field workflows</li>
                <li>Analytics for regulators and producers</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function BharatFoodAssure() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Bharat Food Assure</span>
            <h1 className="gradient">A digital trust layer for food authenticity and traceability.</h1>
            <p className="hero-lead">
              Bharat Food Assure connects product identity, supply-chain events, inspection
              workflows, AI-led risk signals and consumer verification in one platform.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact?intent=bfa">
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
              <span className="eyebrow">The problem</span>
              <h2>
                Counterfeits and weak traceability damage consumers, brands and enforcement.
              </h2>
            </div>
            <p>
              Disconnected records make it difficult to verify origin, isolate risk, manage recalls
              and build evidence across the supply chain.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Product identity</h3>
              <p>
                Unique digital identity linked to manufacturer, product, batch and packaging
                information.
              </p>
            </div>
            <div className="card">
              <h3>Supply-chain events</h3>
              <p>
                Manufacture, dispatch, receipt, transfer, sale, return and inspection events
                recorded with role and time.
              </p>
            </div>
            <div className="card">
              <h3>Consumer verification</h3>
              <p>
                Simple scan flow showing authenticity status, product details and safe reporting
                channels.
              </p>
            </div>
            <div className="card">
              <h3>AI risk engine</h3>
              <p>
                Duplicate scans, impossible travel, velocity, geography and behavioural anomalies.
              </p>
            </div>
            <div className="card">
              <h3>Inspector tools</h3>
              <p>
                Field verification, evidence capture, seizure/notice workflows and case linkage.
              </p>
            </div>
            <div className="card">
              <h3>Analytics &amp; recall</h3>
              <p>
                Risk maps, chain-of-custody views, affected-lot identification and action tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">User ecosystem</span>
              <h2>One platform, role-specific experiences.</h2>
            </div>
          </div>
          <div className="logo-wall">
            <span>Manufacturers</span>
            <span>Distributors</span>
            <span>Retailers</span>
            <span>Inspectors</span>
            <span>Regulators</span>
            <span>Consumers</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Technology</span>
            <h2>AI for signals. Blockchain for evidence. Apps for adoption.</h2>
            <p>
              The operational database serves day-to-day workflows. AI services identify suspicious
              patterns. Signed event proofs create tamper evidence. Offline-capable applications
              support real field conditions.
            </p>
          </div>
          <div className="flow-map">
            <div>Create identity</div>
            <i>→</i>
            <div>Record movement</div>
            <i>→</i>
            <div>Scan &amp; verify</div>
            <i>→</i>
            <div>Detect anomalies</div>
            <i>→</i>
            <div>Investigate</div>
          </div>
        </div>
      </section>
    </>
  )
}

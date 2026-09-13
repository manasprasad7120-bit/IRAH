import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function Services() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Enterprise software engineering</span>
            <h1 className="gradient">
              Design, build and modernise systems that teams can actually operate.
            </h1>
            <p className="hero-lead">
              From portals and mobile apps to APIs, data platforms, integrations and cloud-native
              services, IRAH delivers end-to-end software around measurable user and operational
              outcomes.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Discuss a software project
              </Link>
              <Link className="btn btn-secondary" to="/government-solutions">
                Government solutions
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
              <span className="eyebrow">Services</span>
              <h2>One delivery team across product, engineering and operations.</h2>
            </div>
            <p>
              We can own a complete build or contribute specialist modules within a larger
              programme.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Product discovery &amp; UX</h3>
              <p>
                User journeys, requirements, service blueprints, wireframes, prototypes and design
                systems.
              </p>
            </div>
            <div className="card">
              <h3>Web &amp; mobile applications</h3>
              <p>
                Responsive portals, dashboards, Android/iOS applications and offline-capable field
                tools.
              </p>
            </div>
            <div className="card">
              <h3>API &amp; integration</h3>
              <p>
                REST/event interfaces, identity, payments, messaging, legacy systems and partner
                integrations.
              </p>
            </div>
            <div className="card">
              <h3>Data engineering</h3>
              <p>
                Ingestion, transformation, quality, warehouses, lakehouse patterns and analytics
                services.
              </p>
            </div>
            <div className="card">
              <h3>Cloud &amp; DevOps</h3>
              <p>
                Environment automation, CI/CD, containers, observability, backup and release
                governance.
              </p>
            </div>
            <div className="card">
              <h3>Application modernisation</h3>
              <p>Performance, modularisation, caching, security hardening and progressive migration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Architecture principles</span>
            <h2>Modular, secure and observable from day one.</h2>
            <ul className="check-list">
              <li>Clear separation of user experience, business services and data</li>
              <li>API-first integration with versioning and governance</li>
              <li>Security controls mapped to users, data and environments</li>
              <li>Performance budgets and capacity assumptions</li>
              <li>Logs, metrics, traces and operational dashboards</li>
              <li>Automated testing and controlled releases</li>
            </ul>
          </div>
          <div className="code-card">
            <div>
              <span>DELIVERY MANIFEST</span>
              <b>READY</b>
            </div>
            <code>
              01 / Define outcomes
              <br />
              02 / Map users &amp; workflows
              <br />
              03 / Design architecture
              <br />
              04 / Build in testable increments
              <br />
              05 / Validate security &amp; performance
              <br />
              06 / Deploy with runbooks
              <br />
              07 / Measure &amp; improve
            </code>
          </div>
        </div>
      </section>
    </>
  )
}

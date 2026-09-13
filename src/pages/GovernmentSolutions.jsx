import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function GovernmentSolutions() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Government &amp; PSU solutions</span>
            <h1 className="gradient">
              Technology programmes built for accountability, interoperability and scale.
            </h1>
            <p className="hero-lead">
              IRAH supports state governments, PSUs and public institutions across discovery,
              solution design, PoC, implementation, stakeholder coordination, training and
              operations.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Discuss a government project
              </Link>
              <Link className="btn btn-secondary" to="/case-studies">
                See solution examples
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
              <span className="eyebrow">Engagement areas</span>
              <h2>Where software meets public delivery.</h2>
            </div>
            <p>
              We focus on programmes where multiple departments, field teams, citizens, vendors and
              technology systems must work together reliably.
            </p>
          </div>
          <div className="usecase-grid">
            <div className="usecase">
              <span>01</span>
              <h3>Citizen service portals</h3>
              <p>Application, workflow, payment, status, notification and grievance modules.</p>
            </div>
            <div className="usecase">
              <span>02</span>
              <h3>Education platforms</h3>
              <p>
                Institution data, attendance, assessment, content, dashboards and high-traffic
                acceleration.
              </p>
            </div>
            <div className="usecase">
              <span>03</span>
              <h3>Agriculture systems</h3>
              <p>
                Seed lineage, farmer services, equipment access, field data and supply-chain
                monitoring.
              </p>
            </div>
            <div className="usecase">
              <span>04</span>
              <h3>Health &amp; asset systems</h3>
              <p>
                Facility, equipment, inventory, maintenance, inspection and service-level tracking.
              </p>
            </div>
            <div className="usecase">
              <span>05</span>
              <h3>Command &amp; monitoring</h3>
              <p>Real-time data ingestion, geospatial dashboards, alerts and coordinated response.</p>
            </div>
            <div className="usecase">
              <span>06</span>
              <h3>Enterprise modernisation</h3>
              <p>
                Legacy integration, API layers, caching, analytics, cloud readiness and
                observability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">PSU collaboration</span>
              <h2>Designed to complement prime integrators and public-sector partners.</h2>
            </div>
            <p>
              IRAH can contribute specialist architecture, software modules, AI/ML, blockchain,
              Redis performance engineering, product design and programme support within a larger
              consortium or system-integration structure.
            </p>
          </div>
          <div className="logo-wall">
            <span>ITI Limited</span>
            <span>TCIL</span>
            <span>System Integrators</span>
            <span>State IT Departments</span>
            <span>Mission Directorates</span>
            <span>Implementation Agencies</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Lifecycle</span>
              <h2>From departmental need to sustainable operations.</h2>
            </div>
            <p>
              A clear lifecycle prevents a good prototype from becoming an unsupported production
              burden.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <b>DISCOVER</b>
              <h3>Requirements &amp; baseline</h3>
              <p>Stakeholders, data, systems, policies, constraints and success measures.</p>
            </div>
            <div className="timeline-item">
              <b>DESIGN</b>
              <h3>Architecture &amp; plan</h3>
              <p>Modules, integrations, security, hosting, rollout and ownership model.</p>
            </div>
            <div className="timeline-item">
              <b>DELIVER</b>
              <h3>Build &amp; pilot</h3>
              <p>Agile increments, user testing, training, performance and security tests.</p>
            </div>
            <div className="timeline-item">
              <b>OPERATE</b>
              <h3>Scale &amp; improve</h3>
              <p>SLAs, monitoring, incident management, change control and capacity planning.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

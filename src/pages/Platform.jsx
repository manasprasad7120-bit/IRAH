import { Link } from 'react-router-dom'

export default function Platform() {
  return (
    <>
      <section className="hero hero-inner">
        <div className="container narrow">
          <span className="eyebrow">IRAH Platform</span>
          <h1 className="gradient">
            A unified system for intelligent, trusted and observable software.
          </h1>
          <p>
            IRAH Platform brings together experience design, AI/ML, Redis, blockchain, data
            engineering, cloud and operations within one accountable delivery model.
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
        <div className="container">
          <div className="feature-matrix">
            <div>
              <b>Experience layer</b>
              <span>Citizen portals, employee apps, mobile, IVR and assisted channels.</span>
            </div>
            <div>
              <b>Intelligence layer</b>
              <span>
                Document AI, RAG, vision, prediction, recommendation and anomaly detection.
              </span>
            </div>
            <div>
              <b>Performance layer</b>
              <span>Redis caching, sessions, streams, queues and real-time state.</span>
            </div>
            <div>
              <b>Trust layer</b>
              <span>
                Provenance, certificates, identity, audit history and controlled workflows.
              </span>
            </div>
            <div>
              <b>Integration layer</b>
              <span>API gateways, event buses, adapters and legacy-system connection.</span>
            </div>
            <div>
              <b>Operations layer</b>
              <span>
                Observability, SRE, security, backups, DR and service-level management.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2>Built as modular accelerators, not a locked monolith.</h2>
          <p className="lead-left">
            Each capability can be introduced independently through a PoC or combined into a larger
            platform programme. This allows departments and enterprises to prove value early,
            manage risk and scale in controlled stages.
          </p>
        </div>
      </section>
    </>
  )
}

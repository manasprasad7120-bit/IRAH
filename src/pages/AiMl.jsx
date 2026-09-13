import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function AiMl() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">AI/ML engineering</span>
            <h1 className="gradient">
              Turn data into decisions—and decisions into better services.
            </h1>
            <p className="hero-lead">
              We build production-grade AI systems around real workflows: document intelligence,
              computer vision, forecasting, anomaly detection, citizen assistance, RAG and
              operational analytics.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Discuss an AI use case
              </Link>
              <a className="btn btn-secondary" href="#capabilities">
                View capabilities
              </a>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2>Applied AI for government and enterprise.</h2>
            </div>
            <p>
              Our focus is not a demonstration model. It is a governed, measurable system integrated
              with existing data, applications and human decision processes.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Document intelligence</h3>
              <p>
                OCR, classification, extraction, validation and workflow routing for forms,
                certificates, invoices and legacy records.
              </p>
            </div>
            <div className="card">
              <h3>Computer vision</h3>
              <p>
                Inspection, counterfeit detection, label validation, asset monitoring and visual
                quality control.
              </p>
            </div>
            <div className="card">
              <h3>Predictive analytics</h3>
              <p>
                Demand forecasting, risk scoring, capacity planning, early-warning models and
                service prioritisation.
              </p>
            </div>
            <div className="card">
              <h3>RAG &amp; knowledge systems</h3>
              <p>
                Grounded assistants for policies, manuals, circulars, project documents and
                departmental knowledge.
              </p>
            </div>
            <div className="card">
              <h3>Anomaly &amp; fraud detection</h3>
              <p>
                Behavioural signals, velocity rules and machine-learning models to identify
                suspicious transactions and patterns.
              </p>
            </div>
            <div className="card">
              <h3>Decision dashboards</h3>
              <p>
                Role-based analytics, geospatial views, alerts and explanation layers for
                administrators and field teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Responsible delivery</span>
              <h2>Governance is part of the architecture.</h2>
            </div>
            <p>
              For public-sector AI, accuracy alone is not enough. Systems must be explainable,
              reviewable, secure and designed around human accountability.
            </p>
          </div>
          <div className="grid-4">
            <div className="check-card">
              <h3>Human oversight</h3>
              <p>Critical decisions remain reviewable with escalation and override paths.</p>
            </div>
            <div className="check-card">
              <h3>Data governance</h3>
              <p>Purpose limitation, access controls, lineage, retention and quality checks.</p>
            </div>
            <div className="check-card">
              <h3>Model monitoring</h3>
              <p>Drift, false positives, bias indicators, latency and service availability.</p>
            </div>
            <div className="check-card">
              <h3>Secure integration</h3>
              <p>API controls, identity, audit logs, encryption and environment separation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Delivery model</span>
              <h2>From data audit to production operations.</h2>
            </div>
            <p>We reduce risk by proving value in stages.</p>
          </div>
          <div className="timeline detailed">
            <div className="timeline-item">
              <b>01</b>
              <h3>Problem framing</h3>
              <p>Users, decisions, baseline metrics and failure impact.</p>
            </div>
            <div className="timeline-item">
              <b>02</b>
              <h3>Data readiness</h3>
              <p>Availability, quality, labels, privacy and integration constraints.</p>
            </div>
            <div className="timeline-item">
              <b>03</b>
              <h3>Prototype</h3>
              <p>Rapid model and workflow validation using representative data.</p>
            </div>
            <div className="timeline-item">
              <b>04</b>
              <h3>PoC</h3>
              <p>Controlled deployment with agreed technical and business metrics.</p>
            </div>
            <div className="timeline-item">
              <b>05</b>
              <h3>Hardening</h3>
              <p>Security, load, failure testing, monitoring and operational runbooks.</p>
            </div>
            <div className="timeline-item">
              <b>06</b>
              <h3>Scale</h3>
              <p>Phased rollout, training, governance reviews and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

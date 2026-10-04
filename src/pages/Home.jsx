import { Link } from 'react-router-dom'
import ArchitectureExplorer from '../components/ArchitectureExplorer'
import BuildShowcase from '../components/BuildShowcase'
import CapabilityOrbit from '../components/CapabilityOrbit'
import CapabilityShell from '../components/CapabilityShell'

const SIGNAL_DELAYS = ['.2s', '.8s', '1.3s', '.5s', '1.7s', '1.1s', '.4s', '1.5s', '.9s', '1.9s', '.7s', '1.2s']

const CATEGORIES = [
  'E-commerce & marketplaces',
  'Fintech & lending',
  'Digital payments',
  'Wealth & investing',
  'OTT & entertainment',
  'Online gaming',
  'Consumer retail',
  'Quick-service restaurants',
]

const INDUSTRIES = [
  ['education', 'Education'],
  ['agriculture', 'Agriculture'],
  ['healthcare', 'Healthcare'],
  ['power', 'Power & Utilities'],
  ['smart-cities', 'Smart Cities'],
  ['telecom', 'Telecom'],
  ['finance', 'Financial Services'],
  ['manufacturing', 'Manufacturing'],
  ['logistics', 'Logistics'],
  ['public-safety', 'Public Safety'],
  ['agentic-ai', 'Agentic AI & Automation'],
  ['retail', 'Retail'],
]

export default function Home() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Enterprise technology for public impact</span>
            <h1 className="gradient">
              Build intelligent platforms.
              <br />
              Operate with trust.
            </h1>
            <p className="hero-lead">
              IRAH Solution designs enterprise software that combines AI/ML, blockchain and
              cloud engineering for governments, PSUs and large organisations—supported by
              measurable delivery, operational ownership and accountable growth systems.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/solution-architect">
                Design your solution
              </Link>
              <Link className="btn btn-secondary" to="/platform">
                Explore the platform
              </Link>
            </div>
          </div>
          <div className="hero-console command-center phase9-console">
            <div className="console-head">
              <span>IRAH / ENTERPRISE COMMAND</span>
              <b>ACTIVE</b>
            </div>
            <div className="metric-ticker">
              <span>AI</span>
              <i />
              <span>BLOCKCHAIN</span>
              <i />
              <span>SOFTWARE</span>
              <i />
              <span>OPERATIONS</span>
            </div>
            <div className="live-grid live-grid-6">
              <div>
                <small>PLATFORM LAYERS</small>
                <strong data-counter="7">0</strong>
                <i>integrated</i>
              </div>
              <div>
                <small>DELIVERY GATES</small>
                <strong data-counter="8">0</strong>
                <i>controlled</i>
              </div>
              <div>
                <small>INDUSTRIES</small>
                <strong data-counter="12">0</strong>
                <i>solution patterns</i>
              </div>
              <div>
                <small>TRUST MODEL</small>
                <strong>Zero → Scale</strong>
                <i>measured path</i>
              </div>
              <div>
                <small>OPERATING VIEW</small>
                <strong>24×7</strong>
                <i>observable</i>
              </div>
              <div>
                <small>ENGAGEMENT</small>
                <strong>PoC → Run</strong>
                <i>end to end</i>
              </div>
            </div>
            <div className="signal-grid" id="signalGrid">
              {SIGNAL_DELAYS.map((d, i) => (
                <span key={i} style={{ '--d': d }} />
              ))}
            </div>
            <CapabilityShell />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">IRAH Platform</span>
              <h2>One operating model across build, modernise, scale and govern.</h2>
            </div>
            <p>
              We connect product strategy, architecture, software engineering, data, AI, trust
              systems and operations so complex programmes can move from mandate to measurable
              production outcomes.
            </p>
          </div>
          <CapabilityOrbit />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Enterprise architecture explorer</span>
              <h2>See the complete operating journey.</h2>
            </div>
            <p>
              Click any layer to understand its role, the engineering decisions behind it and the
              outcomes it protects.
            </p>
          </div>
          <ArchitectureExplorer />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Build showcase</span>
              <h2>From mandate to measurable operations.</h2>
            </div>
            <p>A clear delivery path reduces programme risk and creates evidence before scale.</p>
          </div>
          <BuildShowcase />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our platforms</span>
              <h2>Focused systems, not generic service lists.</h2>
            </div>
          </div>
          <div className="platform-showcase">
            <Link to="/government-solutions">
              <span>01</span>
              <h3>Government Platform</h3>
              <p>Citizen services, departmental workflows, command views and field operations.</p>
            </Link>
            <Link to="/redis-government">
              <span>02</span>
              <h3>Redis Performance Platform</h3>
              <p>Low-latency caching, session state, rate limiting and application acceleration.</p>
            </Link>
            <Link to="/ai-ml">
              <span>03</span>
              <h3>Enterprise AI Platform</h3>
              <p>Document AI, RAG, vision, prediction, anomaly detection and MLOps.</p>
            </Link>
            <Link to="/blockchain">
              <span>04</span>
              <h3>Blockchain Trust Platform</h3>
              <p>Provenance, credentials, audit history and multi-party workflows.</p>
            </Link>
            <Link to="/products">
              <span>05</span>
              <h3>Traceability Platform</h3>
              <p>Field apps, QR verification, lineage, analytics and recall controls.</p>
            </Link>
            <Link to="/affiliate-marketing">
              <span>06</span>
              <h3>Affiliate Growth Platform</h3>
              <p>Attribution, partner operations, fraud controls and reconciliation.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">India operating map</span>
              <h2>Designed for diverse users, networks and state-level realities.</h2>
            </div>
            <p>
              The map is illustrative and demonstrates how modular platform patterns can be deployed
              by state, department, PSU or enterprise network.
            </p>
          </div>
          <div className="india-experience">
            <svg viewBox="0 0 640 700" role="img" aria-label="Illustrative India network map">
              <path
                className="india-shape"
                d="M287 32l76 34 38 74 62 41-18 82 51 69-30 75-79 50-28 94-54 117-52-85-58-58-10-81-45-60 28-90-25-74 62-68 18-84z"
              />
              <g className="map-nodes">
                <circle cx="310" cy="105" r="8" />
                <circle cx="230" cy="220" r="7" />
                <circle cx="382" cy="235" r="7" />
                <circle cx="285" cy="350" r="9" />
                <circle cx="420" cy="380" r="7" />
                <circle cx="245" cy="470" r="7" />
                <circle cx="325" cy="555" r="8" />
              </g>
              <g className="map-lines">
                <path d="M310 105L230 220L285 350L245 470L325 555" />
                <path d="M310 105L382 235L420 380L325 555" />
                <path d="M230 220L382 235L285 350L420 380" />
              </g>
            </svg>
            <div className="map-cards">
              <article>
                <small>STATE PLATFORM</small>
                <h3>Modular deployment</h3>
                <p>
                  Common core with configurable departmental workflows, roles and language support.
                </p>
              </article>
              <article>
                <small>FIELD OPERATIONS</small>
                <h3>Offline-first execution</h3>
                <p>
                  Capture, validate and synchronise evidence where connectivity is inconsistent.
                </p>
              </article>
              <article>
                <small>COMMAND VIEW</small>
                <h3>Shared operational truth</h3>
                <p>Track service levels, exceptions, outcomes and geographic patterns.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Product demonstrations</span>
              <h2>See how platform ideas translate into working experiences.</h2>
            </div>
          </div>
          <div className="demo-grid">
            <article className="demo-card">
              <div className="demo-screen ai-demo">
                <div className="demo-toolbar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="doc-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="extract-card">
                  <b>Document AI</b>
                  <em>OCR → classify → extract → review</em>
                </div>
              </div>
              <h3>AI document workflow</h3>
              <p>Illustrative interface for multilingual extraction, validation and human review.</p>
            </article>
            <article className="demo-card">
              <div className="demo-screen trace-demo">
                <div className="trace-route">
                  <span>Origin</span>
                  <i />
                  <span>Batch</span>
                  <i />
                  <span>Transfer</span>
                  <i />
                  <span>Verify</span>
                </div>
                <div className="qr-sim" />
              </div>
              <h3>Traceability workflow</h3>
              <p>
                Illustrative lineage, transfer and verification flow for field and enterprise users.
              </p>
            </article>
            <article className="demo-card">
              <div className="demo-screen perf-demo">
                <div className="latency-bars">
                  {['82%', '65%', '42%', '24%', '16%'].map((h) => (
                    <i key={h} style={{ '--h': h }} />
                  ))}
                </div>
                <div className="cache-pulse">CACHE HIT</div>
              </div>
              <h3>Application acceleration view</h3>
              <p>
                Illustrative baseline and optimisation dashboard for latency, load and hit ratio.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Industries</span>
              <h2>Purpose-built patterns for complex public and enterprise domains.</h2>
            </div>
            <Link className="text-link" to="/industries">
              Explore all industries →
            </Link>
          </div>
          <div className="industry-grid">
            {INDUSTRIES.map(([id, label]) => (
              <Link to={`/industries#${id}`} key={id}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Portfolio experience</span>
              <h2>Growth and technology experience across demanding categories.</h2>
            </div>
            <p>
              Our teams have run performance and platform programmes in categories where volume,
              compliance and unit economics are all under pressure at the same time.
            </p>
          </div>
          <div className="logo-wall">
            {CATEGORIES.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          <div className="logo-wall psu-wall">
            <span>State Governments</span>
            <span>Public Sector Undertakings</span>
            <span>State IT Departments</span>
            <span>System Integrators</span>
            <span>Implementation Agencies</span>
          </div>
          <p className="disclaimer">
            These describe the categories and types of organisation IRAH is built to serve. Named
            client references are shared directly, on request, under NDA.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Featured work</span>
              <h2>Detailed frameworks for performance and accountable growth.</h2>
            </div>
          </div>
          <div className="grid-2">
            <Link className="case-teaser" to="/seed-traceability">
              <span>AGRICULTURE / TRACEABILITY</span>
              <h3>Lineage you can verify from breeder to farmer</h3>
              <p>
                Lot genealogy, certification workflow, offline field capture, QR verification and
                regulatory analytics.
              </p>
              <b>Explore the platform →</b>
            </Link>
            <Link className="case-teaser" to="/redis-government">
              <span>GOVERNMENT / PERFORMANCE</span>
              <h3>Accelerate high-traffic public services with Redis</h3>
              <p>Workload discovery, measured PoCs, cache strategy, resilience and production-readiness controls.</p>
              <b>Explore Redis approach →</b>
            </Link>
            <Link className="case-teaser" to="/case-affiliate-scale">
              <span>AFFILIATE / GROWTH</span>
              <h3>Attribution, partner quality and commercial control</h3>
              <p>
                Publisher operations, S2S evidence, fraud controls, cohort economics and
                reconciliation.
              </p>
              <b>Explore case framework →</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container band">
          <div>
            <span className="eyebrow">Start with one measurable problem</span>
            <h2>Use IRAH Solution Architect.</h2>
            <p>
              Select your organisation, challenge and desired outcome. The site will recommend a
              practical platform path, technology stack and next action.
            </p>
          </div>
          <Link className="btn btn-primary" to="/solution-architect">
            Design my solution
          </Link>
        </div>
      </section>
    </>
  )
}

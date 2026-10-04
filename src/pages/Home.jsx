import { Link } from 'react-router-dom'
import ArchitectureExplorer from '../components/ArchitectureExplorer'
import BuildShowcase from '../components/BuildShowcase'
import CapabilityOrbit from '../components/CapabilityOrbit'

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
            <span className="eyebrow">IRAH · Enterprise Agentic AI Engineering</span>
            <h1 className="gradient">Build AI systems that move enterprise work forward.</h1>
            <p className="hero-lead">
              IRAH designs, builds and deploys enterprise AI and technology solutions for businesses,
              governments and PSUs—from coordinated agents and workflow automation to citizen-service
              platforms, secure integrations, observability and production operations.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">Discuss an enterprise use case</Link>
              <Link className="btn btn-secondary" to="/agentic-ai">Explore Agentic AI</Link>
              <Link className="btn btn-secondary" to="/government-solutions">Government &amp; PSU solutions</Link>
            </div>
            <div className="trust-strip">
              <span>Multi-agent systems</span>
              <span>Government &amp; PSU programmes</span>
              <span>Governance &amp; observability</span>
            </div>
          </div>
          <div className="agentic-visual home-agentic-visual">
            <div className="agentic-visual-head"><span>ENTERPRISE AI SYSTEM</span><b>DESIGNED TO OPERATE</b></div>
            <div className="agentic-node agentic-request"><small>BUSINESS INPUT</small><strong>Goals · Data · Workflow</strong><span>Understand the task and constraints</span></div>
            <div className="agentic-connector">↓</div>
            <div className="agentic-node agentic-orchestrator"><small>COORDINATION</small><strong>Agent orchestration layer</strong><span>Plan · Route · Track · Validate</span></div>
            <div className="agentic-branches">
              <div className="agentic-node"><strong>Knowledge</strong><span>Approved sources</span></div>
              <div className="agentic-node"><strong>Actions</strong><span>Connected tools</span></div>
              <div className="agentic-node"><strong>Review</strong><span>Human oversight</span></div>
            </div>
            <div className="agentic-connector">↓</div>
            <div className="agentic-node agentic-operations"><strong>Enterprise operations</strong><span>Security · Traces · Evaluation · Monitoring</span></div>
            <p className="agentic-caption">Illustrative architecture · Tailored to each workflow and risk profile</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Government &amp; PSU solutions</span>
            <h2>Technology built for public delivery, accountability and scale.</h2>
            <p>
              Support citizen services, departmental workflows, field operations, command views and
              legacy modernisation—with a delivery approach shaped around public-sector requirements.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/government-solutions">Explore Government &amp; PSU solutions</Link>
              <Link className="btn btn-secondary" to="/contact">Discuss a government project</Link>
            </div>
          </div>
          <div className="check-list">
            <p><strong>Citizen services</strong><br />Portals, applications, status tracking and grievance workflows.</p>
            <p><strong>Department and field operations</strong><br />Data capture, case coordination, monitoring and exception handling.</p>
            <p><strong>Modernisation and integration</strong><br />APIs, legacy systems, analytics, performance and operational support.</p>
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
              <span className="eyebrow">Enterprise solutions</span>
              <h2>From intelligent workflows to dependable production systems.</h2>
            </div>
          </div>
          <div className="platform-showcase">
            <Link to="/agentic-ai">
              <span>01</span>
              <h3>Agentic AI Systems</h3>
              <p>Multi-agent orchestration, enterprise tools, governed workflows and evaluation.</p>
            </Link>
            <Link to="/case-agentic-sdlc">
              <span>02</span>
              <h3>Agentic SDLC Platform</h3>
              <p>Coordinate requirements, design, development, testing, deployment and monitoring.</p>
            </Link>
            <Link to="/government-solutions">
              <span>03</span>
              <h3>Government Platform</h3>
              <p>Citizen services, departmental workflows, command views and field operations.</p>
            </Link>
            <Link to="/redis-government">
              <span>04</span>
              <h3>Redis Performance Platform</h3>
              <p>Low-latency caching, session state, rate limiting and application acceleration.</p>
            </Link>
            <Link to="/ai-ml">
              <span>05</span>
              <h3>Enterprise AI Platform</h3>
              <p>Document AI, RAG, vision, prediction, anomaly detection and MLOps.</p>
            </Link>
            <Link to="/blockchain">
              <span>06</span>
              <h3>Blockchain Trust Platform</h3>
              <p>Provenance, credentials, audit history and multi-party workflows.</p>
            </Link>
            <Link to="/products">
              <span>07</span>
              <h3>Traceability Platform</h3>
              <p>Field apps, QR verification, lineage, analytics and recall controls.</p>
            </Link>
            <Link to="/affiliate-marketing">
              <span>08</span>
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
              <h2>Public-sector delivery and enterprise engineering in practice.</h2>
            </div>
          </div>
          <div className="grid-2">
            <Link className="case-teaser" to="/case-agentic-sdlc">
              <span>AGENTIC AI / SOFTWARE DELIVERY</span>
              <h3>Coordinate the software delivery lifecycle with specialist agents</h3>
              <p>Explore an orchestration pattern for requirements, design, development, testing, deployment and monitoring.</p>
              <b>Explore the SDLC platform →</b>
            </Link>
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

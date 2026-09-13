import { Link } from 'react-router-dom'

export default function CaseRedisGovernment() {
  return (
    <>
      <section className="hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Case framework / Redis</span>
          <h1 className="gradient">
            A measured path from application bottleneck to production-ready performance.
          </h1>
          <p className="hero-lead">
            A government application may not need a database replacement. It may need a carefully
            designed real-time data layer, verified against an agreed workload and operated with the
            same discipline as the core system.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/contact?intent=redis">
              Request a Redis PoC
            </Link>
            <a className="btn btn-secondary" href="/assets/downloads/redis-government-brief.pdf">
              Download brief
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-summary-grid">
            <article>
              <small>THE CHALLENGE</small>
              <h2>Peak load, repeated reads and fragile user experience</h2>
              <p>
                High-volume public applications often serve repeated data, maintain large numbers of
                sessions, process short-lived state and wait on the primary database for work that
                does not need durable storage on every request.
              </p>
            </article>
            <article>
              <small>THE PRINCIPLE</small>
              <h2>Prove value before changing production</h2>
              <p>
                The framework begins with a baseline, identifies a safe workload, defines measurable
                success criteria, and tests architecture, security, failover and operating readiness
                before scale.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Baseline assessment</span>
              <h2>Measure the system that exists today.</h2>
            </div>
          </div>
          <div className="grid-4">
            <article className="card">
              <h3>Latency profile</h3>
              <p>P50, P95 and P99 response time by endpoint, transaction and time window.</p>
            </article>
            <article className="card">
              <h3>Database pressure</h3>
              <p>
                Read frequency, repeated queries, connection saturation, lock behaviour and slow
                operations.
              </p>
            </article>
            <article className="card">
              <h3>Traffic shape</h3>
              <p>Normal demand, peak bursts, event spikes, concurrency and retry behaviour.</p>
            </article>
            <article className="card">
              <h3>Failure modes</h3>
              <p>Timeouts, partial outages, stale responses, session loss and recovery time.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Reference architecture</span>
              <h2>Introduce Redis only where it creates measurable value.</h2>
            </div>
          </div>
          <div className="case-architecture">
            <div>
              <span>Citizen / Staff</span>
              <i>1</i>
              <p>Web, mobile and assisted channels</p>
            </div>
            <b>→</b>
            <div>
              <span>API &amp; Workflow</span>
              <i>2</i>
              <p>Identity, validation and orchestration</p>
            </div>
            <b>→</b>
            <div className="highlight">
              <span>Redis Layer</span>
              <i>3</i>
              <p>Cache, sessions, streams and short-lived state</p>
            </div>
            <b>→</b>
            <div>
              <span>Core Systems</span>
              <i>4</i>
              <p>Databases, registries and applications</p>
            </div>
            <b>→</b>
            <div>
              <span>Observability</span>
              <i>5</i>
              <p>Latency, memory, errors and business outcomes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Six-stage PoC</span>
              <h2>Controlled evidence before production adoption.</h2>
            </div>
          </div>
          <div className="timeline timeline-6">
            <div className="timeline-item">
              <span>01</span>
              <h3>Select workload</h3>
              <p>Choose a measurable, non-destructive use case with clear business relevance.</p>
            </div>
            <div className="timeline-item">
              <span>02</span>
              <h3>Define baseline</h3>
              <p>Capture current latency, load, errors, throughput and infrastructure behaviour.</p>
            </div>
            <div className="timeline-item">
              <span>03</span>
              <h3>Design pattern</h3>
              <p>Set cache policy, invalidation, resilience, security and data ownership.</p>
            </div>
            <div className="timeline-item">
              <span>04</span>
              <h3>Implement safely</h3>
              <p>Use feature flags, fallback paths and isolated test environments.</p>
            </div>
            <div className="timeline-item">
              <span>05</span>
              <h3>Test failure</h3>
              <p>Exercise failover, restart, stale data, network interruption and recovery.</p>
            </div>
            <div className="timeline-item">
              <span>06</span>
              <h3>Decide next step</h3>
              <p>Compare evidence against success gates and document scale prerequisites.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Decision dashboard</span>
              <h2>What success should look like.</h2>
            </div>
          </div>
          <div className="decision-table">
            <div>
              <b>Metric</b>
              <b>Baseline</b>
              <b>PoC target</b>
              <b>Decision use</b>
            </div>
            <div>
              <span>Response latency</span>
              <span>Measured before change</span>
              <span>Agreed reduction at P95/P99</span>
              <span>User experience and capacity</span>
            </div>
            <div>
              <span>Database load</span>
              <span>Queries, CPU, connections</span>
              <span>Reduced repeated reads</span>
              <span>Infrastructure pressure</span>
            </div>
            <div>
              <span>Availability</span>
              <span>Current failure behaviour</span>
              <span>Tested fallback and failover</span>
              <span>Production readiness</span>
            </div>
            <div>
              <span>Data correctness</span>
              <span>Source-of-truth rules</span>
              <span>Validated cache policy</span>
              <span>Risk and governance</span>
            </div>
            <div>
              <span>Operations</span>
              <span>Existing monitoring</span>
              <span>Actionable alerts and runbooks</span>
              <span>Supportability</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Security and operations</span>
              <h2>Performance is not enough.</h2>
            </div>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>Access control</h3>
              <p>
                Network segmentation, TLS, role-based access, credential rotation and least
                privilege.
              </p>
            </article>
            <article className="card">
              <h3>Data policy</h3>
              <p>
                Classify what may be cached, how long it lives, how it is invalidated and what
                remains in the system of record.
              </p>
            </article>
            <article className="card">
              <h3>Resilience</h3>
              <p>
                Replication, automated failover, backup expectations, restart behaviour and recovery
                drills.
              </p>
            </article>
            <article className="card">
              <h3>Observability</h3>
              <p>
                Latency, hit ratio, memory, evictions, connections, replication and application
                impact.
              </p>
            </article>
            <article className="card">
              <h3>Runbooks</h3>
              <p>Named ownership, escalation paths, maintenance procedures and incident response.</p>
            </article>
            <article className="card">
              <h3>Scale readiness</h3>
              <p>
                Capacity model, regional rollout, change control, training and service-level
                agreements.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-disclosure">
            <h2>Important disclosure</h2>
            <p>
              This page presents a reusable solution and PoC framework. Any named deployment,
              benchmark, client result or partnership statement should be published only after
              documentary verification and permission.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container band">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Select one application and one measurable workload.</h2>
            <p>
              IRAH can help frame the baseline, architecture, PoC gates and operating requirements.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact?intent=redis">
            Discuss Redis PoC
          </Link>
        </div>
      </section>
    </>
  )
}

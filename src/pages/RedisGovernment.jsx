import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function RedisGovernment() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Redis for India Government</span>
            <h1 className="gradient">
              Faster citizen services. Lower database pressure. Resilient digital platforms.
            </h1>
            <p className="hero-lead">
              IRAH helps government teams identify, prove and implement Redis use cases across
              high-traffic applications, while aligning performance gains with security,
              availability, procurement and operations.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact?intent=redis">
                Request a Redis PoC
              </Link>
              <a className="btn btn-secondary" href="#poc">
                View PoC method
              </a>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Why Redis</span>
              <h2>Move frequently used data closer to the application.</h2>
            </div>
            <p>
              Government applications repeatedly read the same reference data, sessions,
              permissions, dashboards and computed results. Redis can serve these workloads from
              memory, reducing latency and protecting the primary database from avoidable demand.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Application caching</h3>
              <p>
                Cache high-frequency reads, reference tables, API responses and expensive
                computations with controlled expiry and invalidation.
              </p>
            </div>
            <div className="card">
              <h3>Session management</h3>
              <p>
                Fast, shared session state across multiple application instances to support
                horizontal scale and continuity.
              </p>
            </div>
            <div className="card">
              <h3>Queues &amp; event streams</h3>
              <p>
                Support asynchronous processing, notifications, work queues and event-driven
                integration patterns.
              </p>
            </div>
            <div className="card">
              <h3>Rate limiting</h3>
              <p>
                Protect APIs and citizen services from spikes, abuse and accidental overload using
                atomic counters and policies.
              </p>
            </div>
            <div className="card">
              <h3>Real-time dashboards</h3>
              <p>
                Maintain rolling metrics, leaderboards, counters and rapidly changing operational
                views.
              </p>
            </div>
            <div className="card">
              <h3>Geospatial &amp; search support</h3>
              <p>
                Enable selected location-aware and low-latency retrieval patterns where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Government use cases</span>
              <h2>High-value workloads across departments.</h2>
            </div>
            <p>
              The right first use case is measurable, reversible and important enough to demonstrate
              operational value.
            </p>
          </div>
          <div className="usecase-grid">
            <div className="usecase">
              <span>EDUCATION</span>
              <h3>Institution dashboards</h3>
              <p>
                Frequently accessed school, district and state summaries; authentication sessions;
                report acceleration.
              </p>
            </div>
            <div className="usecase">
              <span>TAX &amp; REVENUE</span>
              <h3>Portal peak loads</h3>
              <p>
                Reference data, sessions, rate limiting and computed summaries during filing or
                payment peaks.
              </p>
            </div>
            <div className="usecase">
              <span>CITIZEN SERVICES</span>
              <h3>Status and notification</h3>
              <p>Application status, OTP throttling, API protection and repeated service lookups.</p>
            </div>
            <div className="usecase">
              <span>COMMAND CENTRES</span>
              <h3>Real-time operational data</h3>
              <p>Fast counters, recent events, alerts and dashboard data for coordinated monitoring.</p>
            </div>
            <div className="usecase">
              <span>FINANCIAL SYSTEMS</span>
              <h3>Low-latency controls</h3>
              <p>
                Limits, tokens, risk signals and other transient high-speed data with strict
                governance.
              </p>
            </div>
            <div className="usecase">
              <span>DPI</span>
              <h3>Shared digital rails</h3>
              <p>
                Scalable service components supporting identity, consent, messaging and transaction
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="poc">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">PoC methodology</span>
              <h2>Prove the improvement before changing production.</h2>
            </div>
            <p>Every PoC begins with a baseline and ends with a decision package.</p>
          </div>
          <div className="timeline detailed">
            <div className="timeline-item">
              <b>01</b>
              <h3>Workload discovery</h3>
              <p>
                Identify slow endpoints, repeated queries, peak periods, data volatility and
                business impact.
              </p>
            </div>
            <div className="timeline-item">
              <b>02</b>
              <h3>Baseline</h3>
              <p>
                Measure p50/p95/p99 latency, throughput, database load, error rates and
                infrastructure utilisation.
              </p>
            </div>
            <div className="timeline-item">
              <b>03</b>
              <h3>Design</h3>
              <p>Select cache patterns, key design, TTLs, invalidation, resilience and security controls.</p>
            </div>
            <div className="timeline-item">
              <b>04</b>
              <h3>Implement</h3>
              <p>
                Integrate a limited application slice with observability and safe fallback to the
                source system.
              </p>
            </div>
            <div className="timeline-item">
              <b>05</b>
              <h3>Stress &amp; fail</h3>
              <p>
                Load test, simulate node/application failure and verify data consistency and
                recovery behaviour.
              </p>
            </div>
            <div className="timeline-item">
              <b>06</b>
              <h3>Decision report</h3>
              <p>
                Compare baseline and PoC, document risks, architecture, cost and production rollout
                plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Production readiness</span>
            <h2>Performance without resilience is not success.</h2>
            <p>
              Production design must address topology, persistence, replication, failover, backups,
              patching, monitoring, capacity and operating ownership.
            </p>
            <ul className="check-list">
              <li>High availability and tested failover</li>
              <li>Network isolation, TLS and authentication</li>
              <li>Least-privilege access and secret management</li>
              <li>Memory sizing, eviction policy and capacity thresholds</li>
              <li>Persistence and recovery aligned to workload requirements</li>
              <li>Metrics, logs, alerts and runbooks</li>
            </ul>
          </div>
          <div className="architecture">
            <div className="arch-col">
              <div className="arch-node">Citizen / staff apps</div>
              <div className="arch-node">APIs</div>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-col">
              <div className="arch-node accent">Redis data layer</div>
              <div className="arch-tags">
                <span>Cache</span>
                <span>Sessions</span>
                <span>Queues</span>
                <span>Limits</span>
              </div>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-col">
              <div className="arch-node">Primary database</div>
              <div className="arch-node">External services</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <div className="section-head">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Questions government teams ask first.</h2>
            </div>
          </div>
          <details>
            <summary>Does Redis replace the primary database?</summary>
            <p>
              Usually no. Redis commonly complements the system of record by serving selected
              low-latency workloads. The source database remains authoritative unless a specific
              architecture requires otherwise.
            </p>
          </details>
          <details>
            <summary>How do we avoid stale cache data?</summary>
            <p>
              Through workload-specific TTLs, explicit invalidation, versioned keys, event-driven
              updates and safe fallback to the source system. Cache consistency is designed, tested
              and monitored.
            </p>
          </details>
          <details>
            <summary>Can a PoC be isolated from production?</summary>
            <p>
              Yes. A representative endpoint or dataset can be tested in a controlled environment
              before any production change.
            </p>
          </details>
          <details>
            <summary>What is IRAH’s role?</summary>
            <p>
              IRAH supports opportunity discovery, stakeholder coordination, PoC planning,
              application integration, architecture, performance measurement and implementation
              support. Any formal product partnership status should be stated only in line with
              current written authorisation.
            </p>
          </details>
        </div>
      </section>
    </>
  )
}

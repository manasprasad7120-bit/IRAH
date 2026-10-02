import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function RedisGovernment() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Redis for India Government</span>
            <h1 className="gradient">Faster citizen services. Lower database pressure. Resilient digital platforms.</h1>
            <p className="hero-lead">IRAH helps government teams identify, prove and implement Redis use cases across high-traffic applications, aligning performance gains with security, availability and operations.</p>
            <div className="actions"><Link className="btn btn-primary" to="/contact?intent=redis">Request a Redis PoC</Link><a className="btn btn-secondary" href="#poc">View PoC method</a></div>
          </div>
          <HeroConsole />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Why Redis</span><h2>Move frequently used data closer to the application.</h2></div><p>Redis can serve suitable workloads from memory, reducing latency and avoidable demand on primary databases.</p></div>
          <div className="grid-3">
            <article className="card"><h3>Application caching</h3><p>Cache frequent reads, reference tables, API responses and expensive computations with controlled expiry.</p></article>
            <article className="card"><h3>Session management</h3><p>Share fast session state across application instances to support horizontal scale.</p></article>
            <article className="card"><h3>Queues &amp; event streams</h3><p>Support asynchronous processing, notifications and event-driven integration patterns.</p></article>
            <article className="card"><h3>Rate limiting</h3><p>Protect APIs and citizen services from spikes and accidental overload.</p></article>
            <article className="card"><h3>Real-time dashboards</h3><p>Maintain rolling metrics, counters and rapidly changing operational views.</p></article>
            <article className="card"><h3>Low-latency retrieval</h3><p>Support selected location-aware and fast retrieval patterns where the workload benefits.</p></article>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container"><div className="section-head"><div><span className="eyebrow">Government use cases</span><h2>High-value workloads across departments.</h2></div><p>Choose a measurable, reversible first use case that demonstrates operational value.</p></div>
          <div className="usecase-grid">
            <article className="usecase"><span>EDUCATION</span><h3>Institution dashboards</h3><p>Frequently accessed school, district and state summaries.</p></article>
            <article className="usecase"><span>TAX &amp; REVENUE</span><h3>Portal peak loads</h3><p>Reference data, sessions and summaries during filing or payment peaks.</p></article>
            <article className="usecase"><span>CITIZEN SERVICES</span><h3>Status and notification</h3><p>Application status, OTP throttling and repeated service lookups.</p></article>
            <article className="usecase"><span>COMMAND CENTRES</span><h3>Real-time operational data</h3><p>Fast counters, alerts and dashboard data for coordinated monitoring.</p></article>
            <article className="usecase"><span>FINANCIAL SYSTEMS</span><h3>Low-latency controls</h3><p>Limits, tokens and transient high-speed data with strict governance.</p></article>
            <article className="usecase"><span>DIGITAL PUBLIC INFRASTRUCTURE</span><h3>Shared digital rails</h3><p>Scalable components supporting messaging and transaction workflows.</p></article>
          </div>
        </div>
      </section>
      <section className="section" id="poc"><div className="container"><div className="section-head"><div><span className="eyebrow">PoC methodology</span><h2>Prove the improvement before changing production.</h2></div><p>Begin with a baseline and end with an evidence-based decision package.</p></div>
        <div className="timeline detailed">
          <div className="timeline-item"><b>01</b><h3>Discover</h3><p>Identify slow endpoints, repeated queries, peak periods and business impact.</p></div>
          <div className="timeline-item"><b>02</b><h3>Baseline</h3><p>Measure latency, throughput, database load, error rates and utilisation.</p></div>
          <div className="timeline-item"><b>03</b><h3>Design &amp; integrate</h3><p>Select cache patterns, TTLs, invalidation, security and safe fallback controls.</p></div>
          <div className="timeline-item"><b>04</b><h3>Stress test</h3><p>Load test, simulate failures and verify consistency and recovery.</p></div>
          <div className="timeline-item"><b>05</b><h3>Decision report</h3><p>Compare results and document risks, architecture, cost and rollout options.</p></div>
        </div></div></section>
      <section className="section section-dark"><div className="container split-panel"><div><span className="eyebrow">Production readiness</span><h2>Performance without resilience is not success.</h2><p>Production design must address availability, backups, patching, monitoring, capacity and operating ownership.</p><ul className="check-list"><li>High availability and tested failover</li><li>Network isolation, TLS and authentication</li><li>Least-privilege access and secret management</li><li>Memory sizing and capacity thresholds</li><li>Persistence and recovery requirements</li><li>Metrics, alerts and runbooks</li></ul></div><div className="architecture"><div className="arch-col"><div className="arch-node">Citizen / staff apps</div><div className="arch-node">APIs</div></div><div className="arch-arrow">→</div><div className="arch-col"><div className="arch-node accent">Redis data layer</div><div className="arch-tags"><span>Cache</span><span>Sessions</span><span>Queues</span><span>Limits</span></div></div><div className="arch-arrow">→</div><div className="arch-col"><div className="arch-node">Primary database</div><div className="arch-node">External services</div></div></div></div></section>
      <section className="section"><div className="container faq"><div className="section-head"><div><span className="eyebrow">FAQ</span><h2>Questions government teams ask first.</h2></div></div>
        <details><summary>Does Redis replace the primary database?</summary><p>Usually no. Redis commonly complements the system of record for selected low-latency workloads.</p></details>
        <details><summary>How do we avoid stale cache data?</summary><p>Use workload-specific TTLs, explicit invalidation, versioned keys and safe fallback to the source system.</p></details>
        <details><summary>Can a PoC be isolated from production?</summary><p>Yes. Test a representative endpoint or dataset in a controlled environment before production changes.</p></details>
        <details><summary>What is IRAH’s role?</summary><p>IRAH can support discovery, PoC planning, integration, architecture and performance measurement. Product partnership claims should reflect current written authorisation.</p></details>
        <div className="actions"><Link className="btn btn-primary" to="/contact?intent=redis">Discuss a Redis PoC</Link><Link className="btn btn-secondary" to="/government-solutions">Explore government solutions</Link></div>
      </div></section>
    </>
  )
}

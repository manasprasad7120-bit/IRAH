import { Link } from 'react-router-dom'

const CAPABILITIES = [
  ['Multi-agent orchestration', 'Coordinate specialist agents around a shared goal, with explicit state, handoffs and recoverable steps.'],
  ['Enterprise tool integration', 'Connect approved APIs, databases, document stores and business applications through controlled tools.'],
  ['Knowledge and context', 'Ground agent actions in enterprise documents, policies and data with retrieval and source-aware context.'],
  ['Evaluation and observability', 'Trace runs, inspect failures, evaluate outputs and monitor latency, cost and operational quality.'],
  ['Human control and governance', 'Introduce approvals, permissions, audit trails and escalation for sensitive or consequential actions.'],
  ['Production engineering', 'Design APIs, service boundaries, deployment pipelines, reliability controls and scale-ready operations.'],
]

const USE_CASES = [
  ['Operations copilots', 'Assist teams with multi-step work across internal knowledge, tools and ticketing systems.'],
  ['Document-to-decision workflows', 'Extract information, validate it against policy, route exceptions and prepare review-ready outputs.'],
  ['IT and service operations', 'Triage incidents, gather diagnostic context, recommend actions and escalate with an audit trail.'],
  ['Enterprise knowledge assistants', 'Answer questions from approved sources and initiate permitted follow-up workflows.'],
  ['Software delivery automation', 'Coordinate requirements, design, development, testing, deployment and monitoring workflows.'],
  ['Public-service workflows', 'Support service discovery, case intake, document handling and departmental process coordination.'],
]

export default function AgenticAI() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">IRAH · Enterprise Agentic AI</span>
            <h1 className="gradient">AI agents that work across your enterprise.</h1>
            <p className="hero-lead">
              We design and engineer agentic systems that connect models, business data, APIs and
              workflows—built with the controls needed to move from promising prototype to
              dependable operations.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">Discuss an enterprise use case</Link>
              <Link className="btn btn-secondary" to="/case-agentic-sdlc">Explore our SDLC platform</Link>
            </div>
            <div className="trust-strip">
              <span>Multi-agent workflows</span>
              <span>Enterprise integrations</span>
              <span>Human-in-the-loop</span>
            </div>
          </div>
          <div className="agentic-visual">
            <div className="agentic-visual-head"><span>REFERENCE ARCHITECTURE</span><b>ORCHESTRATED</b></div>
            <div className="agentic-node agentic-request"><small>INPUT</small><strong>Business goal</strong><span>Request · Context · Policy</span></div>
            <div className="agentic-connector">↓</div>
            <div className="agentic-node agentic-orchestrator"><small>CONTROL PLANE</small><strong>Agent orchestrator</strong><span>Plan · Route · State · Validate</span></div>
            <div className="agentic-branches">
              <div className="agentic-node"><strong>Knowledge agent</strong><span>Search &amp; retrieve</span></div>
              <div className="agentic-node"><strong>Action agent</strong><span>Approved tools</span></div>
              <div className="agentic-node"><strong>Review agent</strong><span>Check &amp; escalate</span></div>
            </div>
            <div className="agentic-connector">↓</div>
            <div className="agentic-node agentic-operations"><strong>Governed execution</strong><span>Human approvals · Logs · Evaluation</span></div>
            <p className="agentic-caption">Illustrative architecture. Components are selected to fit the use case and risk profile.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">What we engineer</span><h2>More than a chatbot. A system that can do useful work.</h2></div>
            <p>We start with the business process, then design the right combination of models, agents, tools, data access and human decision points.</p>
          </div>
          <div className="grid-3">
            {CAPABILITIES.map(([title, copy], i) => (
              <article className="card" key={title}>
                <span className="card-no">CAPABILITY / 0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Enterprise use cases</span><h2>Automate the workflow, not just the conversation.</h2></div>
            <p>Start with a bounded workflow, define what success looks like, and expand only when quality, controls and operating costs are understood.</p>
          </div>
          <div className="grid-3">
            {USE_CASES.map(([title, copy]) => (
              <article className="usecase" key={title}><span>USE CASE</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">How we deliver</span><h2>A controlled path from discovery to production.</h2></div>
            <p>Each engagement is scoped around a business outcome, clear acceptance criteria and the operational requirements of the environment.</p>
          </div>
          <div className="timeline detailed">
            <div className="timeline-item"><b>01 / DISCOVER</b><h3>Map the workflow</h3><p>Identify users, systems, exceptions, data boundaries, risks and success measures.</p></div>
            <div className="timeline-item"><b>02 / DESIGN</b><h3>Choose the right pattern</h3><p>Decide where to use deterministic code, retrieval, one agent or multiple collaborating agents.</p></div>
            <div className="timeline-item"><b>03 / VALIDATE</b><h3>Test against real cases</h3><p>Build evaluation sets, test failure modes and set human review and fallback rules.</p></div>
            <div className="timeline-item"><b>04 / INTEGRATE</b><h3>Connect enterprise tools</h3><p>Implement APIs, identity boundaries, data access and controlled tool permissions.</p></div>
            <div className="timeline-item"><b>05 / DEPLOY</b><h3>Prepare for operations</h3><p>Ship through the appropriate environment with logs, alerts, rollback and runbooks.</p></div>
            <div className="timeline-item"><b>06 / IMPROVE</b><h3>Measure and refine</h3><p>Track quality, exceptions, latency, cost and user feedback before expanding scope.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Enterprise-ready by design</span>
            <h2>Useful autonomy needs clear boundaries.</h2>
            <p>We design for least-privilege access, approved tools, traceable actions, evaluation, human approval and graceful fallback. The exact controls depend on the use case and deployment environment.</p>
          </div>
          <ul className="check-list">
            <li>Identity-aware access to enterprise systems</li>
            <li>Human approval for sensitive or irreversible actions</li>
            <li>Traceable runs, decisions and tool calls</li>
            <li>Evaluation, monitoring and exception handling</li>
            <li>Cost, latency and reliability guardrails</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <div><span className="eyebrow">Start with a real workflow</span><h2>Where could an agent remove friction in your enterprise?</h2><p>Bring one process, the systems it touches and the outcome you want to improve. We can shape a focused discovery or proof of concept.</p></div>
          <Link className="btn btn-primary" to="/contact">Discuss your use case</Link>
        </div>
      </section>
    </>
  )
}

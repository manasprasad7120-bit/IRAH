import { Link } from 'react-router-dom'

const AGENTS = [
  ['Requirements agent', 'Turns meeting notes and input documents into structured requirements and business artefacts.'],
  ['Design agent', 'Supports solution design and architecture artefacts based on the agreed requirements.'],
  ['Development agent', 'Assists with implementation planning and code-boilerplate generation.'],
  ['Testing agent', 'Supports test planning, test cases and quality checks.'],
  ['Deployment agent', 'Helps structure deployment steps and release artefacts.'],
  ['Monitoring agent', 'Supports operational feedback and monitoring-oriented follow-up.'],
]

const ENGINEERING = [
  ['Orchestration and state', 'A coordinator routes work to specialist agents and manages session context, handoffs and generated artefacts.'],
  ['Artifact lifecycle', 'Generated files and text outputs are organised by session and agent, with metadata to help track deliverables.'],
  ['Application interface', 'A web interface and backend API layer provide the entry point for users and agent workflows.'],
  ['Deployment and observability', 'The described implementation includes AKS, multiple services and Langfuse observability; production configuration should be validated against the target environment.'],
]

export default function CaseAgenticSDLC() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Engineering showcase · Agentic SDLC</span>
            <h1 className="gradient">A coordinated AI workflow for the software delivery lifecycle.</h1>
            <p className="hero-lead">
              An agentic platform concept that coordinates specialist agents across requirements,
              design, development, testing, deployment and monitoring—helping teams move from
              project inputs to structured engineering artefacts.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">Discuss an agentic platform</Link>
              <Link className="btn btn-secondary" to="/agentic-ai">Explore Agentic AI engineering</Link>
            </div>
          </div>
          <div className="agentic-visual">
            <div className="agentic-visual-head"><span>SDLC ORCHESTRATION</span><b>6 SPECIALIST AGENTS</b></div>
            <div className="agentic-node agentic-request"><small>PROJECT INPUT</small><strong>Brief · Notes · Documents</strong><span>Context and requested outcome</span></div>
            <div className="agentic-connector">↓</div>
            <div className="agentic-node agentic-orchestrator"><small>LANGGRAPH COORDINATION</small><strong>Orchestrator</strong><span>Route · State · Handoff · Artifact map</span></div>
            <div className="agentic-branches">
              <div className="agentic-node"><strong>Requirements</strong><span>BRD &amp; scope</span></div>
              <div className="agentic-node"><strong>Design</strong><span>Architecture</span></div>
              <div className="agentic-node"><strong>Development</strong><span>Code scaffolds</span></div>
              <div className="agentic-node"><strong>Testing</strong><span>Test artefacts</span></div>
              <div className="agentic-node"><strong>Deployment</strong><span>Release flow</span></div>
              <div className="agentic-node"><strong>Monitoring</strong><span>Feedback loop</span></div>
            </div>
            <div className="agentic-connector">↓</div>
            <div className="agentic-node agentic-operations"><strong>Session outputs and artefacts</strong><span>Files · Metadata · Progress events</span></div>
            <p className="agentic-caption">Illustrative view of the described architecture, not a live system-status display.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">The workflow</span><h2>Six specialist agents, one coordinated delivery path.</h2></div>
            <p>The orchestrator determines the appropriate stage and coordinates the specialist agent. Teams retain responsibility for reviewing generated artefacts and approving changes.</p>
          </div>
          <div className="grid-3">
            {AGENTS.map(([title, copy], i) => (
              <article className="card" key={title}><span className="card-no">AGENT / 0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Engineering decisions</span><h2>Make the system traceable and operable.</h2></div>
            <p>These architecture notes describe the platform pattern. Validate current service boundaries, identity configuration and deployment status before treating any detail as a production guarantee.</p>
          </div>
          <div className="grid-2">
            {ENGINEERING.map(([title, copy]) => (
              <article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Responsible automation</span><h2>Agents accelerate work; accountable teams own decisions.</h2></div>
            <p>Generated requirements, architecture, code and release artefacts should be reviewed, tested and approved through the organisation’s normal controls.</p>
          </div>
          <div className="grid-3">
            <article className="usecase"><span>CONTROL</span><h3>Human review</h3><p>Keep engineering decisions, code changes and releases subject to appropriate review and approval.</p></article>
            <article className="usecase"><span>OBSERVABILITY</span><h3>Traceable runs</h3><p>Use session metadata, logs and traces to investigate agent behaviour and diagnose failures.</p></article>
            <article className="usecase"><span>QUALITY</span><h3>Verification gates</h3><p>Run tests, inspect generated artefacts and verify the deployed application before release.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container band">
          <div><span className="eyebrow">Build an enterprise workflow</span><h2>Explore an agentic system for your delivery process.</h2><p>We can map your existing lifecycle, define where agents help and scope a controlled proof of concept.</p></div>
          <Link className="btn btn-primary" to="/contact">Start a conversation</Link>
        </div>
      </section>
    </>
  )
}

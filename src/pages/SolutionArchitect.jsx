import ArchitectWizard from '../components/ArchitectWizard'

export default function SolutionArchitect() {
  return (
    <>
      <section className="hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Interactive advisory</span>
          <h1 className="gradient">IRAH Solution Architect</h1>
          <p className="hero-lead">
            Answer four questions. Receive a recommended platform pattern, technology stack,
            delivery path and next step.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ArchitectWizard />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What you receive</span>
              <h2>A better first conversation.</h2>
            </div>
          </div>
          <div className="grid-4">
            <article className="card">
              <h3>Problem framing</h3>
              <p>Clear statement of users, workflow, constraints and measurable outcomes.</p>
            </article>
            <article className="card">
              <h3>Reference stack</h3>
              <p>Suggested software, AI, performance, trust and operations layers.</p>
            </article>
            <article className="card">
              <h3>Delivery path</h3>
              <p>Discovery, prototype, PoC, pilot or full build based on risk.</p>
            </article>
            <article className="card">
              <h3>Decision gates</h3>
              <p>Evidence required before moving from one stage to the next.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

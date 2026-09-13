import { Link } from 'react-router-dom'

export default function Careers() {
  return (
    <>
      <section className="hero hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Careers</span>
          <h1 className="gradient">Build technology that matters in the real world.</h1>
          <p>
            We value clear thinking, ownership, disciplined engineering and empathy for users
            operating under real constraints.
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
        <div className="container grid-3">
          <div className="card">
            <h3>Engineering</h3>
            <p>Full-stack, mobile, backend, data, DevOps, QA and platform engineering.</p>
          </div>
          <div className="card">
            <h3>AI &amp; Data</h3>
            <p>ML engineering, document AI, computer vision, RAG, analytics and MLOps.</p>
          </div>
          <div className="card">
            <h3>Programme &amp; Product</h3>
            <p>
              Business analysis, product management, government consulting and delivery leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container band">
          <div>
            <h2>Interested in joining?</h2>
            <p>
              Send a concise profile, portfolio or GitHub link to contact@irahsolution.com with the
              role area in the subject.
            </p>
          </div>
          <a className="btn btn-primary" href="mailto:contact@irahsolution.com?subject=Careers at IRAH">
            Apply
          </a>
        </div>
      </section>
    </>
  )
}

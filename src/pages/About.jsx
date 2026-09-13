import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

export default function About() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">About IRAH</span>
            <h1 className="gradient">
              An enterprise technology company focused on public impact and measurable growth.
            </h1>
            <p className="hero-lead">
              We combine business understanding, product design, engineering and implementation
              support to solve complex problems across government, PSUs and digital businesses.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Work with IRAH
              </Link>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Our position</span>
            <h2>Not technology for its own sake.</h2>
            <p>
              IRAH exists to build systems that improve speed, trust, visibility and service
              delivery. We bring AI/ML, blockchain, Redis, enterprise software and performance
              marketing together under one principle: every solution must connect to a measurable
              operational or business outcome.
            </p>
          </div>
          <div className="values">
            <div>
              <b>01</b>
              <h3>Outcome first</h3>
              <p>Start with the decision, service or growth event that must improve.</p>
            </div>
            <div>
              <b>02</b>
              <h3>Evidence over claims</h3>
              <p>Baseline, test, measure and clearly label projections versus verified results.</p>
            </div>
            <div>
              <b>03</b>
              <h3>Operate what we build</h3>
              <p>Design for monitoring, support, ownership and long-term change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>Small accountable teams, senior attention and transparent delivery.</h2>
            </div>
            <p>
              We work directly with programme owners, technical teams, system integrators, field
              users and commercial stakeholders.
            </p>
          </div>
          <div className="grid-4">
            <div className="card">
              <h3>Discover</h3>
              <p>Understand the current system, users, risks, data and baseline.</p>
            </div>
            <div className="card">
              <h3>Design</h3>
              <p>Translate needs into architecture, product flows and a phased plan.</p>
            </div>
            <div className="card">
              <h3>Deliver</h3>
              <p>Build in testable increments with regular demonstrations and decisions.</p>
            </div>
            <div className="card">
              <h3>Improve</h3>
              <p>Measure outcomes, resolve operational issues and scale responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Focus sectors</span>
              <h2>Where complexity and scale matter.</h2>
            </div>
          </div>
          <div className="logo-wall">
            <span>Government</span>
            <span>PSUs</span>
            <span>Education</span>
            <span>Agriculture</span>
            <span>Healthcare</span>
            <span>Financial Services</span>
            <span>Utilities</span>
            <span>Consumer Internet</span>
          </div>
        </div>
      </section>
    </>
  )
}

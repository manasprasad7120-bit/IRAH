import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <section className="hero hero-inner">
      <div className="container">
        <span className="eyebrow">Enquiry received</span>
        <h1 className="gradient">Thank you.</h1>
        <p className="hero-lead">
          Your message has reached IRAH Solution. We will review it and respond with the appropriate
          next step.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" to="/">
            Return home
          </Link>
          <Link className="btn btn-secondary" to="/case-studies">
            Explore our work
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="gradient">This page is not available.</h1>
        <p>The link may be outdated or the page may have moved.</p>
        <div className="actions">
          <Link className="btn btn-primary" to="/">
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

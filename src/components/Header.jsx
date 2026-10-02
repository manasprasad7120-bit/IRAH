import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Mirrors the old behaviour: tapping a link closes the drawer on mobile only.
  const closeOnMobile = () => {
    if (innerWidth < 981) setOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <Link className="brand" to="/" onClick={closeOnMobile}>
          <img src="/assets/images/logo-small.png" alt="IRAH Solution" />
          <span>IRAH Solution</span>
        </Link>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks" onClick={closeOnMobile}>
          <li className="has-sub">
            <Link to="/platform">Platform</Link>
            <div className="sub-menu">
              <Link to="/services">Enterprise Software</Link>
              <Link to="/ai-ml">AI/ML Engineering</Link>
              <Link to="/blockchain">Blockchain Platforms</Link>
              <Link to="/redis-government">Redis Performance</Link>
              <Link to="/redis-government">Redis Performance</Link>
            </div>
          </li>
          <li className="has-sub">
            <Link to="/government-solutions">Solutions</Link>
            <div className="sub-menu">
              <Link to="/government-solutions">Government &amp; PSU</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/affiliate-marketing">Affiliate Growth</Link>
            </div>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/case-studies">Work</Link>
          </li>
          <li className="has-sub">
            <Link to="/resources">Resources</Link>
            <div className="sub-menu">
              <Link to="/blogs">Knowledge Hub</Link>
              <Link to="/downloads">Downloads</Link>
              <Link to="/irah-labs">IRAH Labs</Link>
            </div>
          </li>
          <li>
            <Link to="/solution-architect">Solution Architect</Link>
          </li>
          <li>
            <Link to="/search" aria-label="Search site">
              Search
            </Link>
          </li>
          <li>
            <Link to="/about">Company</Link>
          </li>
          <li>
            <Link className="nav-cta" to="/contact">
              Start a conversation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

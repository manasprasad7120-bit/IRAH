import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer mega-footer">
      <div className="container footer-grid footer-grid-6">
        <div>
          <Link className="brand footer-brand" to="/">
            <img src="/assets/images/logo-small.png" alt="IRAH Solution" />
            <span>IRAH Solution</span>
          </Link>
          <p>
            Enterprise AI, blockchain and software platforms for governments, PSUs and
            ambitious businesses.
          </p>
          <div className="trust-strip">
            <span>AI/ML</span>
            <span>Blockchain</span>
            <span>Growth</span>
          </div>
        </div>
        <div>
          <h3>Platform</h3>
          <Link to="/platform">Platform overview</Link>
          <Link to="/services">Enterprise Software</Link>
          <Link to="/ai-ml">AI/ML Engineering</Link>
          <Link to="/blockchain">Blockchain</Link>
        </div>
        <div>
          <h3>Solutions</h3>
          <Link to="/government-solutions">Government &amp; PSU</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/affiliate-marketing">Affiliate Growth</Link>
          <Link to="/products">Products</Link>
          <Link to="/case-studies">Case Studies</Link>
        </div>
        <div>
          <h3>Resources</h3>
          <Link to="/resources">Knowledge Hub</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/blogs">Insights</Link>
          <Link to="/irah-labs">IRAH Labs</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/search">Site Search</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <a href="mailto:contact@irahsolution.com">Email us</a>
        </div>
        <div>
          <h3>Engage</h3>
          <Link to="/solution-architect">Use Solution Architect</Link>
          <Link to="/contact?intent=software">Discuss a software project</Link>
          <Link to="/contact?intent=ai">Discuss AI platform</Link>
          <Link to="/contact?intent=affiliate">Launch a campaign</Link>
          <Link to="/downloads">Download briefs</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IRAH Solution. All rights reserved.</span>
        <span>Built for India. Engineered for scale.</span>
      </div>
    </footer>
  )
}

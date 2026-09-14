import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

const POSTS = [
  ['/post-ai-counterfeit-detection', 'AI/ML', 'AI for counterfeit detection', 'From scan anomalies and computer vision to evidence-led investigation.'],
  ['/post-modeling-seed-supply-chain', 'BLOCKCHAIN', 'Modelling the seed supply chain', 'Data structures for varieties, generations, lots and lineage.'],
  ['/post-offline-first-scan-apps', 'PRODUCT', 'Offline-first field applications', 'Reliable capture and synchronisation when connectivity is uncertain.'],
  ['/post-server-side-tracking-2025', 'AFFILIATE', 'Server-side tracking', 'Stronger attribution and reconciliation across complex funnels.'],
  ['/post-affiliate-without-leakage', 'GROWTH', 'Affiliate programmes without leakage', 'Offer design, coupon governance, validation and payout controls.'],
]

export default function Blogs() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Insights</span>
            <h1 className="gradient">Practical thinking for technology, government and growth teams.</h1>
            <p className="hero-lead">
              Architecture notes, implementation playbooks and operating lessons across AI,
              blockchain, traceability and performance marketing.
            </p>
            <div className="actions" />
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {POSTS.map(([href, tag, title, copy]) => (
              <Link className="card" to={href} key={href}>
                <span className="card-no">{tag}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import HeroConsole from '../components/HeroConsole'

const CATEGORIES = [
  'E-commerce & marketplaces',
  'Fintech & lending',
  'Digital payments',
  'Wealth & investing',
  'OTT & subscription',
  'Online gaming',
  'Consumer retail',
  'Quick-service restaurants',
]

export default function AffiliateMarketing() {
  return (
    <>
      <section className="hero hero-xl">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Affiliate &amp; performance growth</span>
            <h1 className="gradient">
              Acquire the right user. Measure every conversion. Protect every payout.
            </h1>
            <p className="hero-lead">
              IRAH combines advertiser strategy, publisher operations, attribution engineering,
              fraud controls, creative optimisation and reconciliation under one accountable
              operating model.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact?intent=affiliate">
                Launch a campaign
              </Link>
              <a className="btn btn-secondary" href="#portfolio">
                View category experience
              </a>
            </div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Operating model</span>
              <h2>Full-funnel performance, not just traffic.</h2>
            </div>
            <p>
              We align acquisition with the business event that matters: verified install,
              registration, KYC, first transaction, purchase, subscription or qualified lead.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Advertiser strategy</h3>
              <p>
                Offer design, source mix, funnel economics, event definitions, caps, quality rules
                and launch plan.
              </p>
            </div>
            <div className="card">
              <h3>Publisher network</h3>
              <p>
                Partner discovery, onboarding, compliance, source transparency, campaign
                communication and optimisation.
              </p>
            </div>
            <div className="card">
              <h3>Attribution engineering</h3>
              <p>
                MMP integrations, tracking links, S2S postbacks, event mapping, deduplication and
                reconciliation logic.
              </p>
            </div>
            <div className="card">
              <h3>Fraud &amp; quality controls</h3>
              <p>
                CTIT analysis, device patterns, velocity rules, duplicate checks, cohort quality and
                source-level action.
              </p>
            </div>
            <div className="card">
              <h3>Creative optimisation</h3>
              <p>
                Message, format, audience and placement testing with structured iteration and
                fatigue monitoring.
              </p>
            </div>
            <div className="card">
              <h3>Reporting &amp; payouts</h3>
              <p>
                Source dashboards, pending/approved/rejected conversions, dispute evidence and
                payout governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Tracking architecture</span>
              <h2>Reliable attribution from click to verified business event.</h2>
            </div>
            <p>
              Server-side postbacks reduce browser dependence and create a stronger reconciliation
              trail.
            </p>
          </div>
          <div className="flow-map large">
            <div>Ad / publisher</div>
            <i>→</i>
            <div>Tracking link</div>
            <i>→</i>
            <div>Landing / app store</div>
            <i>→</i>
            <div>App / website event</div>
            <i>→</i>
            <div>MMP / S2S</div>
            <i>→</i>
            <div>Validation &amp; payout</div>
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Category experience</span>
              <h2>Where we have run governed acquisition programmes.</h2>
            </div>
            <p>
              Each category converts on a different business event, so each one needs its own
              validation rules, payout logic and quality thresholds.
            </p>
          </div>
          <div className="logo-wall">
            {CATEGORIES.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          <p className="disclaimer">
            Named advertiser and publisher references, campaign scope and verified outcome figures
            are shared directly, on request, under NDA.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Industry playbooks</span>
              <h2>Different funnels require different controls.</h2>
            </div>
          </div>
          <div className="grid-4">
            <div className="card">
              <h3>Fintech</h3>
              <p>KYC, approval, first transaction, risk exclusions and cohort quality.</p>
            </div>
            <div className="card">
              <h3>E-commerce</h3>
              <p>
                New-customer rules, coupon governance, returns, cancellations and category
                economics.
              </p>
            </div>
            <div className="card">
              <h3>Gaming</h3>
              <p>Registration, deposit, geo/compliance controls and value-based source optimisation.</p>
            </div>
            <div className="card">
              <h3>Subscription &amp; OTT</h3>
              <p>Trial, paid conversion, renewal, retention and creative-content affinity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Campaign lifecycle</span>
              <h2>Launch with controls. Scale with evidence.</h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <b>01</b>
              <h3>Commercial design</h3>
              <p>Goal, event, payout, cap, target market and quality thresholds.</p>
            </div>
            <div className="timeline-item">
              <b>02</b>
              <h3>Technical setup</h3>
              <p>Tracking, postbacks, test conversions, source parameters and reporting.</p>
            </div>
            <div className="timeline-item">
              <b>03</b>
              <h3>Controlled launch</h3>
              <p>Small caps, selected partners and daily quality review.</p>
            </div>
            <div className="timeline-item">
              <b>04</b>
              <h3>Optimise &amp; reconcile</h3>
              <p>Source decisions, creative tests, validation, disputes and payout closure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Performance intelligence</span>
              <h2>Every source is measured beyond the install.</h2>
            </div>
            <p>
              Campaign decisions are based on verified downstream behaviour—not headline volume
              alone.
            </p>
          </div>
          <div className="feature-matrix">
            <div>
              <b>Source transparency</b>
              <span>
                Publisher, sub-publisher, placement and creative-level visibility wherever the
                buying model permits.
              </span>
            </div>
            <div>
              <b>Quality scoring</b>
              <span>
                Registration completion, KYC, first transaction, repeat action, retention and
                revenue contribution.
              </span>
            </div>
            <div>
              <b>Fraud defence</b>
              <span>
                Click-to-install anomalies, device repetition, impossible timing, duplicate
                identities and abnormal cohorts.
              </span>
            </div>
            <div>
              <b>Commercial governance</b>
              <span>
                Caps, validation windows, rejection logic, dispute evidence, invoicing and partner
                payout controls.
              </span>
            </div>
            <div>
              <b>Creative system</b>
              <span>
                Structured concepts, localisation, UGC, performance editing, fatigue monitoring and
                rapid iteration.
              </span>
            </div>
            <div>
              <b>Executive reporting</b>
              <span>
                Spend, approved outcomes, effective acquisition cost, source quality and next-action
                recommendations.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Engagement options</span>
              <h2>Choose the operating model that fits your growth team.</h2>
            </div>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Managed acquisition</h3>
              <p>
                IRAH operates partner sourcing, campaign launch, optimisation, reporting and
                reconciliation against agreed outcomes.
              </p>
            </div>
            <div className="card">
              <h3>Network enablement</h3>
              <p>
                We help brands establish tracking, publisher governance, commercial rules and
                internal performance operations.
              </p>
            </div>
            <div className="card">
              <h3>Attribution advisory</h3>
              <p>
                Independent audit of events, MMP configuration, S2S postbacks, deduplication, fraud
                controls and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'

export default function CaseAffiliateScale() {
  return (
    <>
      <section className="hero-inner">
        <div className="container narrow">
          <span className="eyebrow">Case framework / Affiliate growth</span>
          <h1 className="gradient">
            Scale acquisition without losing attribution, quality or commercial control.
          </h1>
          <p className="hero-lead">
            Affiliate growth becomes sustainable when every event is attributable, every partner is
            governed, every payout is evidence-backed and optimisation follows customer value rather
            than raw volume.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/contact?intent=affiliate">
              Launch a programme
            </Link>
            <a className="btn btn-secondary" href="/assets/downloads/affiliate-growth-brief.pdf">
              Download brief
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-summary-grid">
            <article>
              <small>THE CHALLENGE</small>
              <h2>Volume can hide poor source quality</h2>
              <p>
                Campaigns may report installs, leads or registrations while failing to distinguish
                duplicates, low-intent users, coupon leakage, invalid events, rejected orders or
                customers who never create durable value.
              </p>
            </article>
            <article>
              <small>THE MODEL</small>
              <h2>Operate the full evidence chain</h2>
              <p>
                The framework connects partner onboarding, S2S attribution, validation rules, fraud
                controls, reconciliation and cohort economics so scale decisions remain commercially
                defensible.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Operating model</span>
              <h2>One controlled path from click to approved payout.</h2>
            </div>
          </div>
          <div className="affiliate-flow">
            <div>
              <b>Publisher</b>
              <span>Source identity, placement and creative</span>
            </div>
            <i>→</i>
            <div>
              <b>Click ID</b>
              <span>Unique attribution token</span>
            </div>
            <i>→</i>
            <div>
              <b>Conversion event</b>
              <span>S2S postback or verified API</span>
            </div>
            <i>→</i>
            <div>
              <b>Validation</b>
              <span>Business and fraud rules</span>
            </div>
            <i>→</i>
            <div>
              <b>Reconciliation</b>
              <span>Approve, reject or dispute</span>
            </div>
            <i>→</i>
            <div>
              <b>Payout</b>
              <span>Evidence-backed settlement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Partner quality</span>
              <h2>Curate supply before scaling spend.</h2>
            </div>
          </div>
          <div className="grid-4">
            <article className="card">
              <h3>Source transparency</h3>
              <p>Know publisher, sub-publisher, placement, geography, device and creative route.</p>
            </article>
            <article className="card">
              <h3>Traffic controls</h3>
              <p>Define allowed channels, prohibited practices, caps, pacing and approval rules.</p>
            </article>
            <article className="card">
              <h3>Quality score</h3>
              <p>Rank partners using validation rate, customer value, dispute rate and consistency.</p>
            </article>
            <article className="card">
              <h3>Escalation</h3>
              <p>Pause, investigate, correct or terminate sources through documented thresholds.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Fraud and leakage</span>
              <h2>Protect the economics behind every conversion.</h2>
            </div>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>Duplicate and recycled users</h3>
              <p>
                Detect repeated identities, devices, payment instruments and suspicious conversion
                sequences.
              </p>
            </article>
            <article className="card">
              <h3>Timing anomalies</h3>
              <p>
                Identify impossible click-to-conversion times, burst activity and non-human
                patterns.
              </p>
            </article>
            <article className="card">
              <h3>Coupon leakage</h3>
              <p>
                Control public exposure, unauthorised code use, last-click overwriting and
                brand-search capture.
              </p>
            </article>
            <article className="card">
              <h3>Event integrity</h3>
              <p>
                Validate server-side signatures, required fields, event order and business-state
                changes.
              </p>
            </article>
            <article className="card">
              <h3>Return and cancellation risk</h3>
              <p>
                Reconcile approved outcomes after returns, failed KYC, payment failure or policy
                rejection.
              </p>
            </article>
            <article className="card">
              <h3>Source concentration</h3>
              <p>
                Prevent dependence on one publisher or one tactic by monitoring contribution and
                risk.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">90-day launch roadmap</span>
              <h2>Build control before aggressive scale.</h2>
            </div>
          </div>
          <div className="timeline timeline-6">
            <div className="timeline-item">
              <span>01</span>
              <h3>Define outcome</h3>
              <p>Approved transaction, retained customer or other validated business event.</p>
            </div>
            <div className="timeline-item">
              <span>02</span>
              <h3>Instrument</h3>
              <p>Click IDs, S2S postbacks, event fields and source taxonomy.</p>
            </div>
            <div className="timeline-item">
              <span>03</span>
              <h3>Onboard</h3>
              <p>Contracts, channel rules, creatives, caps and partner training.</p>
            </div>
            <div className="timeline-item">
              <span>04</span>
              <h3>Validate</h3>
              <p>Test events, fraud rules, reconciliation and reporting accuracy.</p>
            </div>
            <div className="timeline-item">
              <span>05</span>
              <h3>Optimise</h3>
              <p>Scale sources by value cohort, not gross conversion count.</p>
            </div>
            <div className="timeline-item">
              <span>06</span>
              <h3>Expand</h3>
              <p>Add geographies, products and partners after stable evidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Executive dashboard</span>
              <h2>Metrics that connect marketing to commercial value.</h2>
            </div>
          </div>
          <div className="decision-table">
            <div>
              <b>View</b>
              <b>Core metric</b>
              <b>Decision</b>
              <b>Control</b>
            </div>
            <div>
              <span>Acquisition</span>
              <span>Approved conversion cost</span>
              <span>Scale or pause source</span>
              <span>Caps and bids</span>
            </div>
            <div>
              <span>Quality</span>
              <span>Validation and rejection rate</span>
              <span>Investigate partner</span>
              <span>Traffic policy</span>
            </div>
            <div>
              <span>Value</span>
              <span>Revenue or retention cohort</span>
              <span>Optimise customer mix</span>
              <span>Payout tiers</span>
            </div>
            <div>
              <span>Fraud</span>
              <span>Anomaly and dispute rate</span>
              <span>Hold or terminate source</span>
              <span>Rules and review</span>
            </div>
            <div>
              <span>Finance</span>
              <span>Approved, invoiced and paid</span>
              <span>Close reconciliation</span>
              <span>Evidence trail</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Category experience</span>
              <h2>
                Experience across fintech, commerce, entertainment and digital consumer categories.
              </h2>
            </div>
            <p>
              The controls above are drawn from running acquisition programmes in categories where
              a conversion is only worth paying for once it has been validated downstream.
            </p>
          </div>
          <div className="logo-wall">
            <span>E-commerce &amp; marketplaces</span>
            <span>Fintech &amp; lending</span>
            <span>Digital payments</span>
            <span>Wealth &amp; investing</span>
            <span>OTT &amp; subscription</span>
            <span>Online gaming</span>
            <span>Consumer retail</span>
            <span>Quick-service restaurants</span>
          </div>
          <p className="disclaimer">
            Named advertiser references, campaign periods and verified outcome figures are shared
            directly, on request, under NDA.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container band">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Define one validated outcome and one controlled launch cohort.</h2>
            <p>
              IRAH can structure the tracking, partner rules, quality gates, reporting and
              reconciliation process.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact?intent=affiliate">
            Discuss affiliate growth
          </Link>
        </div>
      </section>
    </>
  )
}

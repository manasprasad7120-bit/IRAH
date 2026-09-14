// Insight articles, ported from the post-*.php pages.
// Every article closes with the same "Next step" block and CTA.
export const posts = {
  '/post-ai-counterfeit-detection': {
    title: 'AI for counterfeit detection',
    lead: 'AI should prioritise suspicious activity for human review rather than make unsupported enforcement decisions.',
    sections: [
      ['Signals', 'Use duplicate codes, impossible travel, abnormal volume, image mismatch and actor history.'],
      ['Evidence', 'Preserve the source data, model output and review trail.'],
      ['Human review', 'Route high-risk cases to authorised teams with context and clear actions.'],
      ['Feedback', 'Use confirmed outcomes to improve rules and models over time.'],
    ],
  },
  '/post-modeling-seed-supply-chain': {
    title: 'Modeling the seed supply chain',
    lead: 'Traceability begins with a clear representation of lineage, lots, transformations and authorised actors.',
    sections: [
      ['Lineage', 'Model nucleus, breeder, foundation and certified relationships explicitly.'],
      ['Events', 'Record production, inspection, testing, certification, packing, dispatch, receipt and sale.'],
      ['Identity', 'Assign stable identifiers to organisations, facilities, varieties, lots and packages.'],
      ['Governance', 'Define who can create, approve, correct and view each record.'],
    ],
  },
  '/post-offline-first-scan-apps': {
    title: 'Offline-first scan applications',
    lead: 'Field applications must remain useful when network coverage is inconsistent.',
    sections: [
      ['Local workflow', 'Store authorised reference data and pending actions securely on-device.'],
      ['Sync design', 'Use idempotent events, conflict handling and visible sync status.'],
      ['Security', 'Encrypt local data, minimise retention and support device revocation.'],
      ['Usability', 'Design for low-light scanning, regional languages and quick recovery from errors.'],
    ],
  },
  '/post-server-side-tracking-2025': {
    title: 'Server-side tracking for resilient attribution',
    lead: 'Browser-only tracking is increasingly incomplete. Server-side event flow can improve reliability when implemented with consent and governance.',
    sections: [
      ['Event design', 'Define a stable event schema and unique transaction identifiers.'],
      ['Delivery', 'Send validated events from trusted systems and retry safely when endpoints fail.'],
      ['Reconciliation', 'Compare platform, partner and internal records before approval.'],
      ['Privacy', 'Collect only necessary data and document retention, access and user-consent rules.'],
    ],
  },
  '/post-affiliate-without-leakage': {
    title: 'Affiliate programmes without leakage',
    lead: 'Growth requires a partner model that rewards approved value and makes every conversion explainable.',
    sections: [
      ['Define the offer', 'Set eligibility, payout, caps, quality standards and prohibited practices.'],
      ['Protect attribution', 'Use server-side postbacks, deduplication, source parameters and recurring reconciliation.'],
      ['Watch quality', 'Review approval rate, cohort performance, suspicious velocity and coupon misuse.'],
      ['Optimise partners', 'Scale partners that contribute profitable, retained customers—not simply the most clicks.'],
    ],
  },
}

export const postPaths = Object.keys(posts)

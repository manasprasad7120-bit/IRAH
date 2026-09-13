import { capabilitySets } from '../lib/capabilitySets'
import { usePageKey } from '../lib/PageContext'

function Lane({ cards, className }) {
  const doubled = [...cards, ...cards]
  return (
    <div className={`capability-lane ${className}`}>
      {doubled.map(([a, b, c], i) => (
        <div className="capability-card" key={`${a}-${i}`}>
          <small>{a}</small>
          <b>{b}</b>
          <em>{c}</em>
        </div>
      ))}
    </div>
  )
}

// The two scrolling capability lanes inside every hero console.
// Lane two runs the reversed order, as the old app.js did.
export default function CapabilityShell() {
  const pageKey = usePageKey()
  const cards = capabilitySets[pageKey] || capabilitySets.default

  return (
    <div className="capability-shell">
      <Lane cards={cards} className="lane-left" />
      <Lane cards={cards.slice().reverse()} className="lane-right" />
    </div>
  )
}

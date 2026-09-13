import CapabilityShell from './CapabilityShell'

// The "IRAH / ENTERPRISE PLATFORM" console that sat in most page heroes.
export default function HeroConsole() {
  return (
    <div className="hero-console">
      <div className="console-head">
        <span>IRAH / ENTERPRISE PLATFORM</span>
        <b>LIVE</b>
      </div>
      <div className="signal-core">
        <i />
        <i />
        <i />
        <strong>AI • DATA • TRUST</strong>
      </div>
      <CapabilityShell />
    </div>
  )
}

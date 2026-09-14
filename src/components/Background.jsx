import { useEffect, useRef } from 'react'
import { videoMap } from '../lib/routeMeta'

// Canvas configuration per page mode, ported from assets/js/app.js.
const CONFIGS = {
  ai: { nodes: 170, speed: 0.28, links: 145, packet: 20, accent: '216,179,79' },
  blockchain: { nodes: 95, speed: 0.18, links: 170, packet: 12, accent: '214,202,160' },
  affiliate: { nodes: 145, speed: 0.38, links: 125, packet: 24, accent: '216,179,79' },
  traceability: { nodes: 110, speed: 0.22, links: 155, packet: 14, accent: '202,184,116' },
  contact: { nodes: 70, speed: 0.12, links: 125, packet: 7, accent: '216,179,79' },
  default: { nodes: 140, speed: 0.24, links: 135, packet: 16, accent: '216,179,79' },
}

export default function Background({ pageKey }) {
  const bgVideo = videoMap[pageKey] || 'irah-bg.mp4'
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const rootRef = useRef(null)

  // Video fallback + tab visibility handling.
  useEffect(() => {
    const video = videoRef.current
    const onVisibility = () => {
      if (!video) return
      if (document.hidden) video.pause()
      else video.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  // Pointer parallax on the HUD strips and page symbol, plus the network canvas.
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const mouse = { x: 0, y: 0 }
    const parallaxTargets = rootRef.current
      ? [...rootRef.current.querySelectorAll('.hud,.page-symbol')]
      : []

    const onPointerMove = (e) => {
      mouse.x = e.clientX / innerWidth - 0.5
      mouse.y = e.clientY / innerHeight - 0.5
      parallaxTargets.forEach((h, i) => {
        h.style.translate = `${mouse.x * (i ? 8 : 16)}px ${mouse.y * (i ? 8 : 16)}px`
      })
    }
    addEventListener('pointermove', onPointerMove, { passive: true })

    const c = canvasRef.current
    const x = c.getContext('2d')
    const mode = pageKey || 'default'
    const cfg = CONFIGS[mode] || CONFIGS.default
    const dpr = Math.min(devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let pts = []
    let packets = []
    let raf = 0

    function resize() {
      w = innerWidth
      h = innerHeight
      c.width = w * dpr
      c.height = h * dpr
      c.style.width = `${w}px`
      c.style.height = `${h}px`
      x.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(cfg.nodes, Math.floor((w * h) / 9000))
      pts = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * cfg.speed,
        vy: (Math.random() - 0.5) * cfg.speed,
        r: Math.random() * 1.4 + 0.35,
        z: Math.random(),
        band: mode === 'blockchain' ? i % 4 : 0,
      }))
      packets = Array.from({ length: cfg.packet }, () => ({
        a: Math.floor(Math.random() * n),
        b: Math.floor(Math.random() * n),
        t: Math.random(),
        v: 0.002 + Math.random() * 0.005,
      }))
    }

    function draw() {
      x.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx + mouse.x * 0.04 * (p.z + 0.2)
        p.y += p.vy + mouse.y * 0.04 * (p.z + 0.2)
        if (mode === 'traceability') p.y += 0.05
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        x.beginPath()
        x.fillStyle = `rgba(${cfg.accent},${0.16 + p.z * 0.46})`
        if (mode === 'blockchain') {
          x.rect(p.x - 1.5, p.y - 1.5, 3 + p.z * 2, 3 + p.z * 2)
        } else {
          x.arc(p.x, p.y, p.r + p.z * 0.8, 0, Math.PI * 2)
        }
        x.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < cfg.links && (mode !== 'blockchain' || a.band === b.band)) {
            x.strokeStyle = `rgba(${cfg.accent},${(1 - d / cfg.links) * 0.13})`
            x.lineWidth = 0.45
            x.beginPath()
            x.moveTo(a.x, a.y)
            x.lineTo(b.x, b.y)
            x.stroke()
          }
        }
      }
      for (const p of packets) {
        const a = pts[p.a]
        const b = pts[p.b]
        if (!a || !b) continue
        p.t += p.v
        if (p.t > 1) {
          p.t = 0
          p.a = p.b
          p.b = Math.floor(Math.random() * pts.length)
        }
        const px = a.x + (b.x - a.x) * p.t
        const py = a.y + (b.y - a.y) * p.t
        x.beginPath()
        x.fillStyle = `rgba(${cfg.accent},.95)`
        x.shadowBlur = 14
        x.shadowColor = `rgb(${cfg.accent})`
        x.arc(px, py, 2.1, 0, Math.PI * 2)
        x.fill()
        x.shadowBlur = 0
      }
      raf = requestAnimationFrame(draw)
    }

    addEventListener('resize', resize, { passive: true })
    resize()
    draw()

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('pointermove', onPointerMove)
    }
  }, [pageKey])

  return (
    <div className="background" aria-hidden="true" ref={rootRef}>
      <video
        key={bgVideo}
        id="bgVideo"
        className="bg-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/bg-poster.jpg"
        onError={() => document.body.classList.add('video-fallback')}
      >
        <source src={`/assets/video/${bgVideo}`} type="video/mp4" />
      </video>
      <canvas id="networkCanvas" ref={canvasRef} />
      <div className="page-symbol" id="pageSymbol" />
      <div className="data-ribbon ribbon-a" />
      <div className="data-ribbon ribbon-b" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="hud hud-one">
        <span />
        <span />
        <span />
      </div>
      <div className="hud hud-two">
        <span />
        <span />
      </div>
      <div className="india-pulse">
        <b />
        <i />
        <em>INDIA</em>
      </div>
      <div className="scanline" />
      <div className="grid-overlay" />
      <div className="vignette" />
    </div>
  )
}

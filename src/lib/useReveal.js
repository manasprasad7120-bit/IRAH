import { useEffect } from 'react'

const SELECTOR =
  '.section,.card,.metric,.band,.timeline-item,.usecase,.quote-panel,.check-card,.logo-wall span'

// Scroll reveal + counter animation, ported from the IntersectionObserver block
// in the old assets/js/app.js. Re-runs on every route change.
export function useReveal(pathname) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('visible')
          const n = e.target.querySelector?.('[data-counter]')
          if (n && !n.dataset.done) {
            n.dataset.done = '1'
            let t = 0
            const target = +n.dataset.counter
            const step = () => {
              t += Math.max(0.1, target / 30)
              n.textContent = Math.min(target, Math.floor(t))
              if (t < target) requestAnimationFrame(step)
            }
            step()
          }
        }),
      { threshold: 0.12 }
    )

    document.querySelectorAll(SELECTOR).forEach((el) => {
      el.classList.add('reveal')
      io.observe(el)
    })

    return () => io.disconnect()
  }, [pathname])
}

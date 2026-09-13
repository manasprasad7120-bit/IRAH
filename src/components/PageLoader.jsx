import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const finish = () => setTimeout(() => setDone(true), 180)
    if (document.readyState === 'complete') {
      finish()
      return
    }
    addEventListener('load', finish)
    return () => removeEventListener('load', finish)
  }, [])

  return (
    <div className={`page-loader${done ? ' done' : ''}`} id="pageLoader">
      <div className="loader-ring" />
      <span>IRAH</span>
    </div>
  )
}

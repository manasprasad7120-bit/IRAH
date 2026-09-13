import { Navigate, useLocation } from 'react-router-dom'
import NotFound from './NotFound'
import { routeMeta } from '../lib/routeMeta'

// Old links still point at /about.php, /index.php and so on.
// Send those to the matching route instead of showing a 404.
export default function CatchAll() {
  const { pathname, search, hash } = useLocation()

  if (pathname.endsWith('.php')) {
    const slug = pathname.replace(/\.php$/, '')
    const target = slug === '/index' ? '/' : slug
    if (routeMeta[target]) return <Navigate to={target + search + hash} replace />
  }

  return <NotFound />
}

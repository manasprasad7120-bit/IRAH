import { Navigate, useLocation } from 'react-router-dom'
import NotFound from './NotFound'
import { routeMeta } from '../lib/routeMeta'

// Pages that used to exist and now don't. Sending these to the nearest relevant
// page keeps any existing inbound link, bookmark or search result useful instead
// of dropping visitors on a 404.
const RETIRED = {
  '/redis-government': '/services',
  '/case-redis-government': '/case-studies',
  '/post-redis-government-performance': '/blogs',
}

// Old links still point at /about.php, /index.php and so on.
// Send those to the matching route instead of showing a 404.
export default function CatchAll() {
  const { pathname, search, hash } = useLocation()

  // Strip a legacy .php suffix first, so /redis-government.php is caught by the
  // retired-route table below as well as /redis-government.
  const slug = pathname.endsWith('.php') ? pathname.replace(/\.php$/, '') : pathname
  const target = slug === '/index' ? '/' : slug

  if (RETIRED[target]) {
    return <Navigate to={RETIRED[target]} replace />
  }

  if (pathname.endsWith('.php') && routeMeta[target]) {
    return <Navigate to={target + search + hash} replace />
  }

  return <NotFound />
}

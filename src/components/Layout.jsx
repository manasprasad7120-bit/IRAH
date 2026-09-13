import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Background from './Background'
import Footer from './Footer'
import Header from './Header'
import PageLoader from './PageLoader'
import { PageProvider } from '../lib/PageContext'
import { getRouteMeta } from '../lib/routeMeta'
import { useHead } from '../lib/useHead'
import { useReveal } from '../lib/useReveal'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const meta = getRouteMeta(pathname)

  useHead(meta, pathname)
  useReveal(pathname)

  // A PHP page load always started at the top, or at the requested anchor.
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <PageProvider pageKey={meta.pageKey}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PageLoader />
      <Background pageKey={meta.pageKey} />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </PageProvider>
  )
}

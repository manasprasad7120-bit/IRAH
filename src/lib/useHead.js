import { useEffect } from 'react'
import { DEFAULT_DESCRIPTION, SITE_URL } from './routeMeta'

function upsert(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function meta(attr, value) {
  return upsert(`meta[${attr}="${value}"]`, () => {
    const el = document.createElement('meta')
    const [name] = attr.split('=')
    el.setAttribute(name, value)
    return el
  })
}

// Replaces the <head> block that includes/header.php used to render per page.
export function useHead({ pageKey, title, description, noindex }, pathname) {
  useEffect(() => {
    const desc = description || DEFAULT_DESCRIPTION
    const canonical = SITE_URL + (pathname === '/' ? '/' : pathname)

    document.title = title
    document.documentElement.setAttribute('data-page', pageKey)

    meta('name', 'description').setAttribute('content', desc)
    meta('property', 'og:type').setAttribute('content', 'website')
    meta('property', 'og:site_name').setAttribute('content', 'IRAH Solution')
    meta('property', 'og:title').setAttribute('content', title)
    meta('property', 'og:description').setAttribute('content', desc)
    meta('property', 'og:url').setAttribute('content', canonical)
    meta('property', 'og:image').setAttribute('content', `${SITE_URL}/assets/images/social-preview.png`)
    meta('name', 'twitter:card').setAttribute('content', 'summary_large_image')

    upsert('link[rel="canonical"]', () => {
      const el = document.createElement('link')
      el.setAttribute('rel', 'canonical')
      return el
    }).setAttribute('href', canonical)

    const robots = document.head.querySelector('meta[name="robots"]')
    if (noindex) {
      meta('name', 'robots').setAttribute('content', 'noindex,nofollow')
    } else if (robots) {
      robots.remove()
    }
  }, [pageKey, title, description, noindex, pathname])
}

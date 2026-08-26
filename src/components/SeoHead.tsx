import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { getSeoContent, hasSeoContent, FULLPAGE_ROUTES, SKIP_SEO_HEAD_ROUTES, type SeoPage } from '../content/seo'
import { routes } from '../routes'

const LIVE_EXACT = new Set(
  routes.map((r) => r.path).filter((p) => p !== '*' && !p.includes(':')),
)

function isLivePath(pathname: string): boolean {
  if (LIVE_EXACT.has(pathname) || FULLPAGE_ROUTES.has(pathname)) return true
  if (/^\/locations\/[^/]+$/.test(pathname)) return true
  if (/^\/blog\/topic\/[^/]+$/.test(pathname)) return true
  return false
}

/**
 * Overrides the title and meta description for handoff pages with the researched,
 * keyword-optimised values. Rendered after the page's own <SEO> so its tags win.
 * No effect on pages without handoff data, full-page handoff routes, or routes in
 * SKIP_SEO_HEAD_ROUTES (commercial hubs that own their own <SEO> title).
 */
export default function SeoHead() {
  const { pathname } = useLocation()
  const [data, setData] = useState<SeoPage | null>(null)

  useEffect(() => {
    let active = true
    setData(null)
    if (
      !isLivePath(pathname) ||
      !hasSeoContent(pathname) ||
      FULLPAGE_ROUTES.has(pathname) ||
      SKIP_SEO_HEAD_ROUTES.has(pathname)
    ) {
      return
    }
    getSeoContent(pathname).then((loaded) => {
      if (active) setData(loaded)
    })
    return () => {
      active = false
    }
  }, [pathname])

  const head = data?.head
  if (!head) return null
  const { title, meta_description: description } = head

  return (
    <Helmet prioritizeSeoTags>
      {title ? <title>{title}</title> : null}
      {title ? <meta property="og:title" content={title} /> : null}
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="description" content={description} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
    </Helmet>
  )
}

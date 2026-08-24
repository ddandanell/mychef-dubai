import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { CLUSTER_NAV, CLUSTER_PATHS } from '@/content/privateChefCluster'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.replace(/\/+$/, '')
  return pathname
}

function isClusterLinkActive(pathname: string, href: string) {
  const path = normalizePath(pathname)
  // Overview is current only on the cluster root, never on child pages.
  if (href === CLUSTER_PATHS.overview) return path === CLUSTER_PATHS.overview
  return path === href || path.startsWith(`${href}/`)
}

export default function ClusterNav() {
  const { pathname } = useLocation()
  const activeRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = activeRef.current
    const scroller = el?.parentElement
    if (!el || !scroller) return
    const elRect = el.getBoundingClientRect()
    const view = scroller.getBoundingClientRect()
    if (elRect.left < view.left) scroller.scrollLeft -= view.left - elRect.left
    else if (elRect.right > view.right) scroller.scrollLeft += elRect.right - view.right
  }, [pathname])

  return (
    <nav aria-label="Household chef pages" className="bg-black border-y border-gold/25">
      <div className="container-custom py-3 flex items-stretch gap-2 overflow-x-auto">
        {CLUSTER_NAV.map((item) => {
          const isActive = isClusterLinkActive(pathname, item.href)
          return (
            <Link
              key={item.href}
              ref={isActive ? activeRef : undefined}
              to={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`flex-shrink-0 px-3.5 py-2 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                isActive
                  ? 'border-gold bg-gold text-black'
                  : 'border-white/15 text-white/80 hover:border-gold hover:text-gold'
              }`}
            >
              <span className="block font-inter text-caption uppercase tracking-wider">{item.label}</span>
              <span className={`hidden md:block font-inter text-[11px] mt-0.5 leading-snug ${isActive ? 'text-black/70' : 'text-white/45'}`}>
                {item.description}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

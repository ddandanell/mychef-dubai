import { Link, useLocation } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { hasOwnHeroTrail, trailFor } from '@/content/breadcrumbTrails'

/**
 * The page's place in the silo, drawn once, from the contract.
 *
 * A breadcrumb is not decoration here: it is the only signal on most pages that says which hub
 * this page belongs to, and it is what turns a flat pile of 216 URLs into a structure Google can
 * read top-down. 108 pages had none and 37 disagreed with the contract, which meant a child page
 * kept its authority to itself instead of passing it up.
 *
 * Pages whose hero already draws the trail render nothing here — one breadcrumb per page.
 */
export default function SiloTrail() {
  const { pathname } = useLocation()
  const trail = trailFor(pathname)
  if (trail.length < 2 || hasOwnHeroTrail(pathname)) return null

  return (
    <nav aria-label="Breadcrumb" className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div className="container-custom pointer-events-auto pt-3">
        <ol className="inline-flex flex-wrap items-center gap-2 font-inter text-caption bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full ring-1 ring-white/10 text-gray-300">
          {trail.map((crumb, i) => (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-white/40" aria-hidden />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

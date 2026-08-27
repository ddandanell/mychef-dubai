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
    <nav aria-label="Breadcrumb" className="border-b border-white/10 bg-black">
      <div className="container-custom">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 py-3 font-inter text-caption text-gray-400">
          {trail.map((crumb, i) => (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-gray-600" aria-hidden />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-300" aria-current="page">
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

import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/system'
import { childrenOf } from '@/content/breadcrumbTrails'
import { getSiloPage } from '@/content/siloMap'

/**
 * A hub links down to everything filed under it.
 *
 * The silo map keeps its own hub table, generated from the blueprint, and it disagreed with the
 * contract for five hubs — /faq, /, /catering-packages-dubai and two more were parents on paper
 * with no link to their own children. A hub that does not link down concentrates nothing: the
 * children collect authority the hub never passes on, and the section reads to a crawler as
 * eighteen unrelated pages.
 *
 * This renders only for the gap: a page the contract calls a hub, whose silo module already
 * lists nothing. Where the silo map does its job, this stays out of the way.
 */
export default function SiloChildren() {
  const { pathname } = useLocation()
  const kids = childrenOf(pathname)
  if (!kids.length) return null

  const silo = getSiloPage(pathname)
  const alreadyListed = new Set([
    ...(silo?.featured_children ?? []).map((c) => c.url),
    ...(silo?.silo_index ?? []).map((c) => c.url),
  ])
  const missing = kids.filter((k) => k.href && !alreadyListed.has(k.href))
  if (!missing.length) return null

  return (
    <section className="border-t border-white/10 bg-black py-12 print:hidden" aria-label="Inside this section">
      <div className="container-custom max-w-[1200px]">
        <SectionLabel tone="dark">Inside this section</SectionLabel>
        <p className="mb-6 max-w-[62ch] font-inter text-body-sm leading-relaxed text-white/50">
          Everything filed under this page, in one place — so you can see the whole section rather than
          finding it a page at a time.
        </p>
        <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {missing.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href as string}
                className="group flex items-center justify-between gap-3 border-b border-white/10 py-2.5 transition-colors hover:border-gold/40"
              >
                <span className="font-playfair text-[16px] leading-snug text-white/85 transition-colors group-hover:text-gold">
                  {child.label}
                </span>
                <ArrowUpRight size={14} className="shrink-0 text-white/25 transition-colors group-hover:text-gold" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

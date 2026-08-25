import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import type { NavGroup } from '@/content/navClusters'

/**
 * Generic mega-menu card, matching the Private Chef / Catering / Experiences style.
 * Columns come from the data, so all four top-level clusters render identically.
 */
export default function ClusterMegaMenu({
  groups,
  footer,
}: {
  groups: NavGroup[]
  footer?: { text: string; linkLabel: string; href: string }
}) {
  return (
    <div className="pc-mega-card">
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 min-[900px]:grid-cols-2">
        {groups.map((group) => (
          <div key={group.heading} className="min-w-0">
            <p className="mb-2 px-3.5 font-inter text-caption uppercase tracking-[0.14em] text-gold">
              {group.heading}
            </p>
            <div className="flex flex-col">
              {group.items.map((item) => (
                <NavigationMenuLink
                  key={item.href}
                  asChild
                  className="hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent"
                >
                  <Link to={item.href} className="pc-mega-item pc-mega-item--compact !grid-cols-[minmax(0,1fr)_18px]">
                    <span className="min-w-0">
                      <span className="pc-mega-title font-playfair block">{item.label}</span>
                      <span className="pc-mega-desc font-inter block">{item.description}</span>
                    </span>
                    <ArrowRight size={14} className="pc-mega-arrow mt-1" aria-hidden />
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </div>
        ))}
      </div>
      {footer ? (
        <p className="mt-4 border-t border-gold/25 px-3.5 pt-3.5 font-inter text-body-sm text-white/45">
          {footer.text}{' '}
          <Link to={footer.href} className="text-gold hover:text-gold-light">
            {footer.linkLabel}
          </Link>
        </p>
      ) : null}
    </div>
  )
}

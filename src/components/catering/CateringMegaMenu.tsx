import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { CATERING_NAV_GROUPS, CATERING_PATHS } from '@/content/cateringCluster'

function MegaColumn({
  heading,
  items,
}: {
  heading: string
  items: readonly { href: string; label: string; description: string }[]
}) {
  return (
    <div className="min-w-0">
      <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-3 px-3.5">
        {heading}
      </p>
      <div className="flex flex-col">
        {items.map((item) => (
          <NavigationMenuLink
            key={item.href + item.label}
            asChild
            className="hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent"
          >
            <Link to={item.href} className="pc-mega-item !grid-cols-[minmax(0,1fr)_20px]">
              <span className="min-w-0">
                <span className="pc-mega-title font-playfair block">{item.label}</span>
                <span className="pc-mega-desc font-inter block">{item.description}</span>
              </span>
              <ArrowRight size={16} className="pc-mega-arrow mt-1.5" aria-hidden />
            </Link>
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  )
}

export default function CateringMegaMenu() {
  return (
    <div className="pc-mega-card">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 min-[900px]:grid-cols-2 xl:grid-cols-4">
        {CATERING_NAV_GROUPS.map((group) => (
          <MegaColumn key={group.heading} heading={group.heading} items={group.items} />
        ))}
      </div>
      <p className="mt-5 border-t border-gold/25 px-3.5 pt-4 font-inter text-body-sm text-white/45">
        Start with what you need.{' '}
        <Link to={CATERING_PATHS.overview} className="text-gold hover:text-gold-light">
          Add only what makes the event better.
        </Link>
      </p>
    </div>
  )
}

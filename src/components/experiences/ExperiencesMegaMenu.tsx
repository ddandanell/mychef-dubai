import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { EXPERIENCES_NAV, EXPERIENCES_PATHS } from '@/content/experiencesCluster'
import { EXPERIENCES_ICONS } from './experiencesIcons'

function MegaColumn({
  heading,
  items,
}: {
  heading: string
  items: readonly { href: string; label: string; description: string }[]
}) {
  return (
    <div className="min-w-0">
      <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-3 px-3.5">{heading}</p>
      <div className="flex flex-col">
        {items.map((item) => {
          const Icon = EXPERIENCES_ICONS[item.href]
          return (
            <NavigationMenuLink
              key={item.href}
              asChild
              className="hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent"
            >
              <Link to={item.href} className="pc-mega-item">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/30 text-gold"
                >
                  {Icon ? <Icon size={16} /> : null}
                </span>
                <span className="min-w-0">
                  <span className="pc-mega-title font-playfair block">{item.label}</span>
                  <span className="pc-mega-desc font-inter block">{item.description}</span>
                </span>
                <ArrowRight size={16} className="pc-mega-arrow mt-1.5" aria-hidden />
              </Link>
            </NavigationMenuLink>
          )
        })}
      </div>
    </div>
  )
}

export default function ExperiencesMegaMenu() {
  const explore = EXPERIENCES_NAV.slice(0, 3)
  const occasions = EXPERIENCES_NAV.slice(3, 6)

  return (
    <div className="pc-mega-card">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 min-[900px]:grid-cols-2">
        <MegaColumn heading="Dining" items={explore} />
        <MegaColumn heading="Occasions & gifting" items={occasions} />
      </div>
      <p className="mt-5 border-t border-gold/25 px-3.5 pt-4 font-inter text-body-sm text-white/45">
        Not sure which one it is?{' '}
        <Link to={EXPERIENCES_PATHS.hub} className="text-gold hover:text-gold-light">
          Start with what the evening needs to feel like.
        </Link>
      </p>
    </div>
  )
}

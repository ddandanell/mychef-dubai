import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { CONTACT_NAV } from '@/content/contactNav'
import { CONTACT_ICONS } from './contactIcons'

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
          const Icon = CONTACT_ICONS[item.href]
          return (
            <NavigationMenuLink
              key={item.href}
              asChild
              className="hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent"
            >
              <Link to={item.href} className="pc-mega-item">
                <span className="pc-mega-icon mt-0.5 flex h-[38px] w-[38px] items-center justify-center">
                  {Icon ? <Icon size={22} strokeWidth={1.5} aria-hidden /> : null}
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

export default function ContactMegaMenu() {
  const reach = CONTACT_NAV.slice(0, 2)
  const company = CONTACT_NAV.slice(2)

  return (
    <div className="pc-mega-card">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 min-[900px]:grid-cols-2">
        <MegaColumn heading="Reach us" items={reach} />
        <MegaColumn heading="The company" items={company} />
      </div>
      <p className="mt-5 border-t border-gold/25 px-3.5 pt-4 font-inter text-body-sm text-white/45">
        Already know what you need?{' '}
        <Link to="/inquiry" className="text-gold hover:text-gold-light">
          Request a proposal.
        </Link>
      </p>
    </div>
  )
}

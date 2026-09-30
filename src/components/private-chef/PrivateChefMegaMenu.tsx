import HouseholdImage from '@/components/household/HouseholdImage'
import type { LucideIcon } from 'lucide-react'
import { HOUSEHOLD_PATH, LIVE_IN_PATH, LIVE_OUT_PATH, SHORT_TERM_PATH } from '@/content/householdChefs'
import { Link } from 'react-router'
import {
  ArrowRight,
  Banknote,
  ChefHat,
  ListChecks,
  Users,
  House,
  CalendarDays,
} from 'lucide-react'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { GLOBAL_CLUSTER_NAV, CLUSTER_PATHS } from '@/content/privateChefCluster'

const MAIN = GLOBAL_CLUSTER_NAV.slice(0, 4)
const TRUST = GLOBAL_CLUSTER_NAV.slice(4)

export const CLUSTER_ICONS: Record<string, LucideIcon> = {
  [HOUSEHOLD_PATH]: House,
  [LIVE_IN_PATH]: House,
  [LIVE_OUT_PATH]: CalendarDays,
  [SHORT_TERM_PATH]: CalendarDays,
  [CLUSTER_PATHS.overview]: ChefHat,
  [CLUSTER_PATHS.howItWorks]: ListChecks,
  '/our-chefs': Users,
  [CLUSTER_PATHS.pricing]: Banknote,
} as const


function MegaColumn({
  heading,
  items,
}: {
  heading: string
  items: typeof MAIN
}) {
  return (
    <div className="min-w-0">
      <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-3 px-3.5">
        {heading}
      </p>
      <div className="flex flex-col">
        {items.map((item) => {
          const Icon = CLUSTER_ICONS[item.href]
          return (
            <NavigationMenuLink key={item.href} asChild className="hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent">
              <Link to={item.href} className="pc-mega-item">
                <span className="pc-mega-icon mt-0.5 flex h-[38px] w-[38px] items-center justify-center">
                  <Icon size={22} strokeWidth={1.5} aria-hidden />
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

export default function PrivateChefMegaMenu() {
  return (
    <div className="pc-mega-card">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 min-[900px]:grid-cols-2 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1.05fr)_minmax(0,0.9fr)]">
        <MegaColumn heading="Choose your chef service" items={MAIN} />
        <MegaColumn heading="Find your fit" items={TRUST} />
        <div className="pc-mega-feature min-w-0 col-span-full flex flex-col xl:col-auto">
          <div className="pc-mega-photo relative mb-5 hidden aspect-[4/3] overflow-hidden rounded-[5px] xl:block [@media(max-height:700px)]:hidden">
            <HouseholdImage id="household-hero" alt="Chef preparing a family lunch in a home kitchen" sizes="300px"/>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-2">
              Private Chef Dubai
            </p>
            <p className="font-playfair text-[clamp(18px,2vw,22px)] leading-snug text-[#f2f0ea] mb-2">
              A chef who feels at home.
            </p>
            <p className="font-inter text-body-sm leading-relaxed text-white/55 mb-4">
              Personal matching, recruitment coordination and ongoing support for your household.
            </p>
            <div className="mt-auto border-t border-gold/25 pt-4">
              <p className="font-inter text-body-sm text-white/50 mb-4">
                From approx. AED 20,000/month
              </p>
              <NavigationMenuLink asChild className="p-0 hover:bg-transparent focus:bg-transparent">
                <Link to={HOUSEHOLD_PATH} className="btn-primary w-full text-center text-xs py-3">
                  Explore Household Chefs
                </Link>
              </NavigationMenuLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { EVENT_PACKAGES, formatPriceAed } from '@/content/cateringPricing'

export const WHATSAPP_NUMBER = '971551744849'

export interface StarterPackage {
  name: string
  guests: string
  price: string
  perPerson: string
  included: string
  recurring: boolean
}

const eventStarterPackages: StarterPackage[] = EVENT_PACKAGES.map((pkg) => ({
  name: pkg.name,
  guests: pkg.guests,
  price: formatPriceAed(pkg.priceAed),
  perPerson: pkg.perPerson,
  included: pkg.included,
  recurring: false,
}))

/** Household weekly prep — not catering per-person floors. */
const weeklyPrepPackages: StarterPackage[] = [
  {
    name: 'Weekly Prep Lite',
    guests: '2–3 guests, weekly',
    price: '1,900',
    perPerson: '~949/session',
    included: 'Two prep sessions a week, a menu built around how you eat, meals portioned and labelled, kitchen left clean.',
    recurring: true,
  },
  {
    name: 'Weekly Prep Standard',
    guests: '4–6 guests, weekly',
    price: '2,700',
    perPerson: '~899/session',
    included: 'Two prep sessions a week for a larger household, rotating menus, every dietary need covered, kitchen left clean.',
    recurring: true,
  },
]

const byName = (name: string) => {
  const pkg = eventStarterPackages.find((row) => row.name === name)
  if (!pkg) throw new Error(`EVENT_PACKAGES missing ${name}`)
  return pkg
}

export const starterPackages: StarterPackage[] = [
  ...eventStarterPackages.filter(
    (pkg) => pkg.name !== 'Corporate Dinner' && pkg.name !== 'The Full Experience',
  ),
  ...weeklyPrepPackages,
  byName('Corporate Dinner'),
  byName('The Full Experience'),
]

export const eventStarterPackagesOnly = eventStarterPackages

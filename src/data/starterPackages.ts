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

const fullExperience: StarterPackage = {
  name: 'The Full Experience',
  guests: '6–10 guests',
  price: '5,500',
  perPerson: '550–900',
  included: 'A multi-course tasting menu, a full service team, and plating you would expect from a restaurant — in your own home.',
  recurring: false,
}

const corporateDinner = eventStarterPackages.find((pkg) => pkg.name === 'Corporate Dinner')
if (!corporateDinner) throw new Error('EVENT_PACKAGES missing Corporate Dinner')

export const starterPackages: StarterPackage[] = [
  ...eventStarterPackages.filter((pkg) => pkg.name !== 'Corporate Dinner'),
  ...weeklyPrepPackages,
  corporateDinner,
  fullExperience,
]

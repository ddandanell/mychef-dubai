import { SERVICES, formatAed } from '@/content/privateChefPricing'
import { EVENT_PACKAGES, formatPriceAed } from '@/content/cateringPricing'

export const WHATSAPP_NUMBER = '971551744849'

export interface StarterPackage {
  name: string
  guests: string
  price: string
  perPerson: string
  included: string
  recurring: boolean
  period?: string
}

const eventStarterPackages: StarterPackage[] = EVENT_PACKAGES.map((pkg) => ({
  name: pkg.name,
  guests: pkg.guests,
  price: formatPriceAed(pkg.priceAed),
  perPerson: pkg.perPerson,
  included: pkg.included,
  recurring: false,
}))

/** Household weekly prep — Food Prep job on /weekly-meal-prep-dubai, not a separate tariff. */
const prepRate = SERVICES.find(service => service.id === 'food-prep')!.rate
const weeklyPrepPackages: StarterPackage[] = [
  {
    name: 'Weekly meal prep — one session',
    guests: 'Up to 8 people',
    price: prepRate.toLocaleString('en-US'),
    perPerson: `${formatAed(prepRate)} / 4-hour session`,
    included: 'The Food Prep job: four hours in your kitchen, meals portioned and labelled, kitchen left clean. Groceries at receipt cost.',
    recurring: true,
    period: '/ session',
  },
  {
    name: 'Weekly meal prep — two sessions',
    guests: 'Up to 8 people',
    price: (prepRate * 2).toLocaleString('en-US'),
    perPerson: `${formatAed(prepRate * 2)} / week`,
    included: `Two Food Prep sessions a week at ${formatAed(prepRate)} each. Groceries at receipt cost, no markup.`,
    recurring: true,
    period: '/ week',
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

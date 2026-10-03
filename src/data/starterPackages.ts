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

/** Two ways to start, derived from the approved Fridge Reset rates. */
const prep = SERVICES.find(service => service.id === 'food-prep')!
const weeklyPrepPackages: StarterPackage[] = [
  {
    name: 'Fridge Reset — single visit', guests: '4 hours · about 20–25 portions',
    price: prep.singleRate.toLocaleString('en-US'), perPerson: `${formatAed(prep.singleRate)} / visit`,
    included: 'Meals cooked in your kitchen, portioned and labelled. Output depends on the menu and portions. Before 5% VAT; groceries at actual cost, no markup, and zone transport AED 40–130 per visit are separate.',
    recurring: true, period: '/ visit',
  },
  {
    name: 'Fridge Reset — member plan', guests: '4+ prepaid visits per month · 4 hours each',
    price: prep.rate.toLocaleString('en-US'), perPerson: `${formatAed(prep.rate)} / member visit`,
    included: `Weekly preparation at the member rate. Four visits cost ${formatAed(prep.rate * 4)} before 5% VAT. Groceries at actual cost, no markup, and zone transport AED 40–130 per visit are separate.`,
    recurring: true, period: '/ member visit',
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

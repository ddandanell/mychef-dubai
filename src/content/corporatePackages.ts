/**
 * Corporate package register and estimate helper.
 *
 * Public numbers come only from advertised myCHEF rates in cateringPricing.ts
 * and EVENT_PACKAGES. Proposed rates are not rendered. Competitor prices are
 * never treated as myCHEF offers. Do not import this into wedding, yacht,
 * private-chef or general catering hubs.
 */

import { CATERING_FORMAT_BY_ID, EVENT_PACKAGES } from './cateringPricing'
import { CORPORATE_PACKAGES, type CorporatePackage } from './corporatePackageCatalog'

export { CORPORATE_PACKAGES }
export type { CorporatePackage } from './corporatePackageCatalog'

export const CORPORATE_VAT_RATE = 0.05
export const CORPORATE_WHATSAPP_NUMBER = '971551744849'

const corporateDinner = EVENT_PACKAGES.find((pkg) => pkg.id === 'corporate-dinner')
if (!corporateDinner) throw new Error('EVENT_PACKAGES missing corporate-dinner')

export const ADVERTISED = {
  dropOffPerPerson: CATERING_FORMAT_BY_ID['drop-off'].fromPerPerson,
  dropOffMinGuests: CATERING_FORMAT_BY_ID['drop-off'].minGuests,
  dropOffMinOrder: CATERING_FORMAT_BY_ID['drop-off'].minOrderAed ?? 900,
  buffetPerPerson: CATERING_FORMAT_BY_ID.buffet.fromPerPerson,
  buffetMinGuests: CATERING_FORMAT_BY_ID.buffet.hubMinGuests ?? 20,
  canapePerPerson: CATERING_FORMAT_BY_ID.canapes.fromPerPerson,
  canapeMinGuests: CATERING_FORMAT_BY_ID.canapes.minGuests,
  platedMin: CATERING_FORMAT_BY_ID['plated-chef'].typicalMin,
  platedMax: CATERING_FORMAT_BY_ID['plated-chef'].typicalMax,
  dinnerPackageAed: corporateDinner.priceAed,
  dinnerPackageGuests: corporateDinner.guests,
} as const

export function packageById(id: string): CorporatePackage | undefined {
  return CORPORATE_PACKAGES.find((pkg) => pkg.id === id)
}

export function packagesForOwner(ownerPath: string): CorporatePackage[] {
  return CORPORATE_PACKAGES.filter((pkg) => pkg.ownerPath === ownerPath)
}

export function publicPackagesForOwner(ownerPath: string): CorporatePackage[] {
  return packagesForOwner(ownerPath).filter((pkg) => pkg.priceVisibility === 'public')
}

export type CorporateEstimateInput = {
  packageId: string
  guests: number
  days?: number
  extraBeverageAed?: number
  extraStaffAed?: number
  extraEquipmentAed?: number
  extraDeliveryAed?: number
}

export type CorporateEstimate =
  | {
      ok: true
      packageId: string
      guests: number
      billedGuests: number
      days: number
      food: number
      beverages: number
      additionalStaff: number
      equipment: number
      delivery: number
      subtotal: number
      vat: number
      total: number
      perPerson: number
      perPersonAssumption: number
      notes: string[]
    }
  | { ok: false; reason: string }

function roundAed(n: number): number {
  return Math.round(n)
}

export function estimateCorporatePackage(input: CorporateEstimateInput): CorporateEstimate {
  const pkg = packageById(input.packageId)
  if (!pkg) return { ok: false, reason: 'Unknown package' }
  if (pkg.priceVisibility !== 'public' || pkg.publicAmountAed == null) {
    return { ok: false, reason: 'No public price to estimate' }
  }

  const days = input.days ?? 1
  if (!Number.isInteger(days) || days < 1) return { ok: false, reason: 'Days must be a whole number of service days' }

  const guests = Math.floor(input.guests)
  if (guests < 1) return { ok: false, reason: 'Guest count is required' }

  if (pkg.pricingUnit === 'package') {
    if (guests < pkg.minGuests || guests > (pkg.maxGuests ?? pkg.minGuests)) {
      return {
        ok: false,
        reason: `This package is priced for ${pkg.minGuests}–${pkg.maxGuests ?? pkg.minGuests} guests, not multiplied by headcount`,
      }
    }
    if (days !== 1) return { ok: false, reason: 'A whole-event package is not multiplied by days' }
  }

  const billedGuests =
    pkg.pricingUnit === 'package' ? guests : Math.max(guests, pkg.minGuests)

  let food =
    pkg.pricingUnit === 'package'
      ? pkg.publicAmountAed
      : pkg.publicAmountAed * billedGuests * days

  const notes: string[] = []
  if (pkg.pricingUnit === 'per_person' && guests < pkg.minGuests) {
    notes.push(`Billed at the ${pkg.minGuests}-guest minimum.`)
  }
  if (pkg.minOrderAed && food < pkg.minOrderAed) {
    food = pkg.minOrderAed
    notes.push(`Raised to the AED ${pkg.minOrderAed} minimum order.`)
  }

  const beverages = input.extraBeverageAed ?? 0
  const additionalStaff = input.extraStaffAed ?? 0
  const equipment = input.extraEquipmentAed ?? 0
  const delivery = input.extraDeliveryAed ?? 0

  if (pkg.includesStaff) {
    notes.push('Package staff is already inside the food line. Extra staff is only for roles not in the package.')
  }
  if (pkg.includesDelivery && delivery === 0) {
    notes.push('Delivery in the package is not added again.')
  }

  const subtotal = food + beverages + additionalStaff + equipment + delivery
  const vat = roundAed(subtotal * CORPORATE_VAT_RATE)
  const total = subtotal + vat
  const perPersonAssumption = billedGuests
  const perPerson = roundAed(total / perPersonAssumption)

  return {
    ok: true,
    packageId: pkg.id,
    guests,
    billedGuests,
    days,
    food,
    beverages,
    additionalStaff,
    equipment,
    delivery,
    subtotal,
    vat,
    total,
    perPerson,
    perPersonAssumption,
    notes,
  }
}

export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-US')}`
}

export function publicPriceLabel(pkg: CorporatePackage): string {
  if (pkg.priceVisibility !== 'public' || pkg.publicAmountAed == null) {
    return 'Itemised proposal'
  }
  if (pkg.publicAmountMaxAed != null && pkg.pricingUnit === 'per_person') {
    return `${formatAed(pkg.publicAmountAed)}–${pkg.publicAmountMaxAed.toLocaleString('en-US')} per person`
  }
  if (pkg.pricingUnit === 'package') {
    return `${formatAed(pkg.publicAmountAed)} for ${pkg.minGuests}–${pkg.maxGuests ?? pkg.minGuests} guests`
  }
  return `From ${formatAed(pkg.publicAmountAed)} per person`
}

export function coverageLabel(pkg: CorporatePackage): string {
  switch (pkg.coverage) {
    case 'food_only':
      return 'Food only'
    case 'delivery':
      return 'Food and delivery'
    case 'delivery_setup':
      return 'Food, delivery and setup'
    case 'full_staffed':
      return 'Food, staff, setup and clearance'
  }
}

export function corporateInquiryHref(pkg: CorporatePackage, guests?: number): string {
  const params = new URLSearchParams({
    from: 'corporate',
    package: pkg.id,
    occasion: pkg.occasions[0] ?? pkg.name,
  })
  if (guests) params.set('guests', String(guests))
  return `/inquiry?${params.toString()}`
}

export function corporateWhatsAppMessage(pkg: CorporatePackage, guests?: number): string {
  const guestBit = guests ? `Guests: ${guests}. ` : 'Guests: __. '
  return `Hi myCHEF, I would like a proposal for ${pkg.name}. Occasion: ${pkg.occasions[0]}. Date: __. Area: __. ${guestBit}Format: ${coverageLabel(pkg)}. Meals/breaks: __. Budget: __. (via mychef.ae${pkg.ownerPath})`
}

export function corporateWhatsAppLink(pkg: CorporatePackage, guests?: number): string {
  return `https://wa.me/${CORPORATE_WHATSAPP_NUMBER}?text=${encodeURIComponent(corporateWhatsAppMessage(pkg, guests))}`
}

/**
 * Birthday extras for /birthday-catering-dubai.
 *
 * Catering floors stay in cateringPricing.ts and are before 5% VAT.
 * Extra amounts below are proposed customer planning figures including 5% VAT.
 * They are not approved public shop prices. Do not treat competitor listings
 * as myCHEF offers.
 */

export type BirthdayExtraGroup = 'cakes' | 'decor' | 'kids' | 'entertainment'
export type BirthdayOccasion = 'children' | 'adult' | 'mixed'

export type BirthdayExtra = {
  id: string
  name: string
  group: BirthdayExtraGroup
  spec: string
  unit: string
  amountAed: number
  amountKind: 'from' | 'fixed'
  occasions: readonly BirthdayOccasion[]
  requiresCatering: boolean
  minQty?: number
}

export const BIRTHDAY_EXTRAS_DISCLAIMER =
  'Cakes, balloons and entertainment below are planning figures including 5% VAT. They are quoted in your proposal after supplier confirmation. They are not a shop price today.'

export const BIRTHDAY_CATERING_VAT_NOTE =
  'Published catering floors are before 5% VAT, shown as its own line on the proposal. Extra planning figures already include 5% VAT.'

export const EXTRA_GROUPS: readonly { id: BirthdayExtraGroup; label: string }[] = [
  { id: 'cakes', label: 'Cakes and sweets' },
  { id: 'decor', label: 'Balloons and backdrop' },
  { id: 'kids', label: 'Children’s food' },
  { id: 'entertainment', label: 'Entertainment and photos' },
]

export const OCCASION_FILTERS: readonly { id: 'all' | BirthdayOccasion; label: string }[] = [
  { id: 'all', label: 'All extras' },
  { id: 'children', label: 'Children’s birthday' },
  { id: 'adult', label: 'Adult birthday' },
  { id: 'mixed', label: 'Mixed-age family' },
]

export const BIRTHDAY_EXTRAS: readonly BirthdayExtra[] = [
  {
    id: 'cake-standard',
    name: 'Birthday cake',
    group: 'cakes',
    spec: 'Simple buttercream finish, inscription, about 10–12 portions. The baker confirms serving size.',
    unit: 'cake',
    amountAed: 350,
    amountKind: 'from',
    occasions: ['children', 'adult', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'cake-themed',
    name: 'Themed birthday cake',
    group: 'cakes',
    spec: 'Single-tier design, about 15–20 portions. Detailed modelling is extra.',
    unit: 'cake',
    amountAed: 650,
    amountKind: 'from',
    occasions: ['children', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'cupcakes',
    name: 'Birthday cupcakes',
    group: 'cakes',
    spec: 'One flavour and a coordinated icing colour. Priced per dozen.',
    unit: 'dozen',
    amountAed: 180,
    amountKind: 'fixed',
    occasions: ['children', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'mini-desserts',
    name: 'Mini dessert selection',
    group: 'cakes',
    spec: 'Three varieties, 30 pieces, on presentation trays. A full dessert table is a separate quotation.',
    unit: 'tray of 30',
    amountAed: 450,
    amountKind: 'fixed',
    occasions: ['adult', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'balloons',
    name: 'Birthday balloon arrangement',
    group: 'decor',
    spec: 'One age number and two coordinated balloon clusters. Ordinary Dubai delivery is confirmed in the quote.',
    unit: 'set',
    amountAed: 350,
    amountKind: 'from',
    occasions: ['children', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'backdrop',
    name: 'Birthday photo backdrop',
    group: 'decor',
    spec: 'One backdrop, name personalisation, two-metre garland, installation and collection.',
    unit: 'setup',
    amountAed: 1450,
    amountKind: 'from',
    occasions: ['children', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'meal-box',
    name: 'Children’s meal box',
    group: 'kids',
    spec: 'One main, fruit, a small treat and juice. Minimum 10. Added to an eligible catering booking, not a standalone drop-off.',
    unit: 'per child',
    amountAed: 55,
    amountKind: 'fixed',
    occasions: ['children', 'mixed'],
    requiresCatering: true,
    minQty: 10,
  },
  {
    id: 'cupcake-decorating',
    name: 'Cupcake decorating activity',
    group: 'entertainment',
    spec: 'Up to 10 children, one hour, two cupcakes each, materials and an instructor.',
    unit: 'session',
    amountAed: 950,
    amountKind: 'from',
    occasions: ['children', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'face-paint',
    name: 'Face painting and balloon twisting',
    group: 'entertainment',
    spec: 'One artist, two hours. Capacity and design complexity are confirmed in the proposal.',
    unit: 'session',
    amountAed: 850,
    amountKind: 'from',
    occasions: ['children', 'mixed'],
    requiresCatering: false,
  },
  {
    id: 'photographer',
    name: 'Birthday photographer',
    group: 'entertainment',
    spec: 'One hour, one photographer. Edited-image count and delivery deadline are named in the proposal.',
    unit: 'session',
    amountAed: 950,
    amountKind: 'from',
    occasions: ['adult', 'mixed', 'children'],
    requiresCatering: false,
  },
]

export const BIRTHDAY_QUOTE_EXTRAS = [
  'Number cakes, cupcake towers, ice-cream or waffle stations',
  'Pizza-making, pasta stations, BBQ upgrades, children’s cooking workshops',
  'Balloon garlands, ceiling balloons, illuminated numbers, larger florals, themed props',
  'Magician, bubble show, craft station, treasure hunt, mini disco',
  'Soft play, ball pit, bouncy castle, garden games',
  'DJ, acoustic musician, photo booth, videographer',
  'Children’s tables and chairs, extra waiters, extended service',
] as const

export const BIRTHDAY_BUNDLES = [
  {
    id: 'cake-colour',
    name: 'Cake and colour',
    extraIds: ['cake-standard', 'balloons'] as const,
    note: 'Standard cake plus a balloon arrangement. Catering is separate. No discount is applied.',
  },
  {
    id: 'little-guests',
    name: 'Little guests',
    extraIds: ['meal-box', 'cupcake-decorating'] as const,
    note: 'Ten children’s meal boxes plus a cupcake decorating activity. Attach the meal boxes to a catering booking.',
  },
  {
    id: 'picture-perfect',
    name: 'Picture-perfect birthday',
    extraIds: ['backdrop', 'cake-standard', 'photographer'] as const,
    note: 'Backdrop, standard cake and one-hour photographer. Catering is separate. No discount is applied.',
  },
] as const

export type BirthdayBundle = (typeof BIRTHDAY_BUNDLES)[number]

export function extraById(id: string): BirthdayExtra | undefined {
  return BIRTHDAY_EXTRAS.find((item) => item.id === id)
}

export function extrasFromIds(ids: readonly string[]): BirthdayExtra[] {
  const unique = [...new Set(ids)]
  return unique.map(extraById).filter((item): item is BirthdayExtra => Boolean(item))
}

export function extraPlanningAmount(item: BirthdayExtra): number {
  return item.amountAed * (item.minQty ?? 1)
}

export function extraPriceLabel(item: BirthdayExtra): string {
  const n = `AED ${item.amountAed.toLocaleString('en-US')}`
  if (item.amountKind === 'from') {
    if (item.unit === 'per child') return `From ${n} per child`
    if (item.unit === 'dozen') return `From ${n} per dozen`
    return `From ${n}`
  }
  if (item.unit === 'per child') return `${n} per child`
  if (item.unit === 'dozen') return `${n} per dozen`
  return n
}

export function extrasForOccasion(occasion: 'all' | BirthdayOccasion): BirthdayExtra[] {
  if (occasion === 'all') return [...BIRTHDAY_EXTRAS]
  return BIRTHDAY_EXTRAS.filter((item) => item.occasions.includes(occasion))
}

export function toggleExtraId(current: readonly string[], id: string): string[] {
  if (!BIRTHDAY_EXTRAS.some((item) => item.id === id)) return [...current]
  if (current.includes(id)) return current.filter((item) => item !== id)
  return [...current, id]
}

export function unionExtraIds(current: readonly string[], add: readonly string[]): string[] {
  const allowed = new Set(BIRTHDAY_EXTRAS.map((item) => item.id))
  return [...new Set([...current, ...add].filter((id) => allowed.has(id)))]
}

export function planningSubtotal(ids: readonly string[]): { amountAed: number; kind: 'from' | 'fixed' } {
  const extras = extrasFromIds(ids)
  const amountAed = extras.reduce((sum, item) => sum + extraPlanningAmount(item), 0)
  const kind = extras.some((item) => item.amountKind === 'from') ? 'from' : 'fixed'
  return { amountAed, kind }
}

export function bundlePlanningTotal(bundle: BirthdayBundle): { amountAed: number; kind: 'from' | 'fixed' } {
  return planningSubtotal(bundle.extraIds)
}

export function planningTotalLabel(total: { amountAed: number; kind: 'from' | 'fixed' }): string {
  const n = `AED ${total.amountAed.toLocaleString('en-US')}`
  return total.kind === 'from' ? `From ${n}` : n
}

export function birthdayInquiryHref(extraIds: readonly string[] = []): string {
  const params = new URLSearchParams({ from: 'birthday' })
  if (extraIds.length) params.set('extras', extraIds.join(','))
  return `/inquiry?${params.toString()}`
}

export function birthdayWhatsAppMessage(extraIds: readonly string[] = []): string {
  const extras = extrasFromIds(extraIds)
  const extraBit = extras.length
    ? `Extras to quote: ${extras.map((item) => item.name).join(', ')}. `
    : 'Extras: __. '
  return `Hi myCHEF Dubai, I am planning a birthday and need catering. Date: __. Location: __. Adults: __. Children: __. Ages: __. Food: __. Budget: __. ${extraBit}(via mychef.ae/birthday-catering-dubai)`
}

export function birthdayWhatsAppLink(extraIds: readonly string[] = []): string {
  return `https://wa.me/971551744849?text=${encodeURIComponent(birthdayWhatsAppMessage(extraIds))}`
}

export function birthdayInquirySubtitle(extraIds: readonly string[]): string {
  const extras = extrasFromIds(extraIds)
  if (extras.length) {
    return `Birthday extras to quote: ${extras.map((item) => item.name).join(', ')}. Add the date, location, adults, children and ages, then send.`
  }
  return 'Birthday catering enquiry. Add the date, location, adults, children, ages, food preference and budget, then send.'
}

export function parseBirthdayExtraIds(raw: string | null): string[] {
  if (!raw) return []
  const allowed = new Set(BIRTHDAY_EXTRAS.map((item) => item.id))
  return [...new Set(raw.split(',').map((id) => id.trim()).filter((id) => allowed.has(id)))]
}

/** 20-guest buffet illustration using the published floor, then 5% VAT. */
export const BIRTHDAY_BUDGET_EXAMPLE = {
  guests: 20,
  buffetPerPersonBeforeVat: 120,
  foodBeforeVat: 2400,
  vat: 120,
  cateringIncludingVat: 2520,
  cakePlanningAed: 350,
  balloonsPlanningAed: 350,
  extrasPlanningAed: 700,
  illustrativeTotalIncludingVat: 3220,
} as const

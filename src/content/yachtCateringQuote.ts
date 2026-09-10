/**
 * Indicative yacht-catering numbers from one real proposal:
 * 113 guests, 4 hours on board, boarding at Dubai Harbour.
 * Do not invent rates. The written proposal is the only offer.
 */

export const YACHT_VAT_RATE = 0.05
export const YACHT_GUEST_MIN = 10
export const YACHT_GUEST_MAX = 150
export const YACHT_GUEST_DEFAULT = 40
export const LIVE_STATION_CHEFS_AED = 720
export const OVERTIME_PER_SERVER_PER_HOUR_AED = 240
export const YACHT_QUOTE_EXAMPLE_GUESTS = 113

export const YACHT_PRICING_DISCLAIMER =
  'Indicative only, based on a real 113-guest corporate charter. Every event is quoted in writing from your date, marina, guest count and format.'

export const YACHT_ESTIMATE_DISCLAIMER =
  'Indicative estimate, based on real pricing from a 113-guest corporate charter. Smaller groups can price differently per head. Your written proposal is the only number that counts — it is valid for one month.'

export type YachtFormatId = 'canape' | 'buffet' | 'canape-live'
export type YachtExtraGroup = 'bartender' | 'ice'
export type YachtExtraId = 'bar-station' | 'bartender-only' | 'icebox'

export type YachtMenuFormat = {
  id: YachtFormatId
  name: string
  perGuestAed: number
  includes: string
  quotedTotalInclVat113: number
  includesLiveStationChefs: boolean
}

export const YACHT_MENU_FORMATS: readonly YachtMenuFormat[] = [
  {
    id: 'canape',
    name: 'Premium Canapé Reception',
    perGuestAed: 170,
    includes: 'Choice of 12 canapés from a 40+ item list, 5 desserts, soft drinks, water, mocktails, 5–6 waiters',
    quotedTotalInclVat113: 20218,
    includesLiveStationChefs: false,
  },
  {
    id: 'buffet',
    name: 'International Premium Buffet',
    perGuestAed: 162,
    includes: '3 salads, 3 appetizers, 6 main courses, sides, 4 desserts, beverages, 4 waiters',
    quotedTotalInclVat113: 19221,
    includesLiveStationChefs: false,
  },
  {
    id: 'canape-live',
    name: 'Canapés + Live Station',
    perGuestAed: 258,
    includes: 'Full canapé menu, plus one live station (Chicken Shawarma / Mexican / Pasta / Burger), cooked by 2 station chefs',
    quotedTotalInclVat113: 31368,
    includesLiveStationChefs: true,
  },
] as const

export const YACHT_EXTRAS: readonly {
  id: YachtExtraId
  name: string
  aed: number
  group: YachtExtraGroup
}[] = [
  {
    id: 'bar-station',
    name: 'Bartender with bar station, bar glasses, icebox full of ice',
    aed: 1800,
    group: 'bartender',
  },
  {
    id: 'bartender-only',
    name: 'Bartender only (no bar station, glasses or ice)',
    aed: 1200,
    group: 'bartender',
  },
  {
    id: 'icebox',
    name: 'Large icebox full of ice',
    aed: 144,
    group: 'ice',
  },
] as const

export const YACHT_INCLUDED = [
  'The chef and the staff the headcount needs',
  'Glassware, plates, cutlery, napkins',
  'Buffet setup with dish name tags, or pass-around service',
  'Transport and marina loading in the captain’s window',
  'Clear-down before you dock',
  '5% VAT, shown as its own line',
] as const

export const YACHT_NOT_INCLUDED = [
  'The yacht, the charter, fuel and marina fees',
  'Alcohol — only where the operator allows it, and a bar is priced separately',
] as const

export const YACHT_BOOKING_TERMS = [
  {
    title: 'Written proposal first',
    body: 'Built from your date, marina, guest count and format. Valid for one month.',
  },
  {
    title: 'Minimum guest count',
    body: 'The quote carries a minimum headcount; fewer guests on the day can change the price structure.',
  },
  {
    title: 'Final numbers two days out',
    body: 'Confirm the final guest count 2 days before the charter. That is what we cook and staff for.',
  },
  {
    title: 'Payment confirms the booking',
    body: 'Full payment before the event — payment link, bank transfer or card.',
  },
  {
    title: 'Cancellation',
    body: 'Up to 2 days before: 50%. One day before: 75%. Same day or no-show: 100%.',
  },
  {
    title: 'Food safety on the water',
    body: 'Food is served within 3 hours of display. If the sea is rough, buffet setups are lowered or adjusted for safety. The captain’s call beats the table plan.',
  },
] as const

export const YACHT_FAQS = [
  {
    q: 'How much does yacht catering in Dubai cost per person?',
    a: 'Recent menus have run AED 162–258 per guest depending on format — canapé reception, full buffet, or live stations — plus staff, extras and 5% VAT. Every charter is quoted in writing.',
  },
  {
    q: 'Is there a minimum number of guests?',
    a: 'Quotes carry a minimum headcount, and the final number is locked 2 days before the event.',
  },
  {
    q: 'Do you provide the yacht?',
    a: 'No. You charter the vessel; we handle the food, the chef, the staff, marina loading and clear-down.',
  },
  {
    q: 'Can we have a bar on board?',
    a: 'Where the operator allows alcohol, yes. A bartender with a full bar station is AED 1,800; a bartender alone is AED 1,200.',
  },
  {
    q: 'What happens if the sea is rough?',
    a: 'Buffet setups are adjusted or elevated displays removed for safety. The menu is planned around the galley and the route from the start.',
  },
] as const

export function isYachtFormatId(value: string): value is YachtFormatId {
  return YACHT_MENU_FORMATS.some((format) => format.id === value)
}

export function isYachtExtraId(value: string): value is YachtExtraId {
  return YACHT_EXTRAS.some((extra) => extra.id === value)
}

export function yachtFormatById(id: YachtFormatId): YachtMenuFormat {
  const found = YACHT_MENU_FORMATS.find((format) => format.id === id)
  return found ?? YACHT_MENU_FORMATS[0]
}

export function clampYachtGuests(value: number): number {
  if (!Number.isFinite(value)) return YACHT_GUEST_DEFAULT
  return Math.min(YACHT_GUEST_MAX, Math.max(YACHT_GUEST_MIN, Math.round(value)))
}

export function formatYachtAed(amount: number): string {
  return `AED ${Math.round(amount).toLocaleString('en-GB')}`
}

export function resolveYachtExtras(ids: readonly YachtExtraId[]): YachtExtraId[] {
  let bartender: YachtExtraId | null = null
  const rest: YachtExtraId[] = []
  for (const id of ids) {
    const extra = YACHT_EXTRAS.find((item) => item.id === id)
    if (!extra) continue
    if (extra.group === 'bartender') bartender = id
    else if (!rest.includes(id)) rest.push(id)
  }
  return bartender ? [bartender, ...rest] : rest
}

export type YachtEstimateLine = {
  id: YachtExtraId
  name: string
  aed: number
  group: YachtExtraGroup
}

export type YachtEstimate = {
  guests: number
  formatId: YachtFormatId
  format: YachtMenuFormat
  food: number
  liveChefs: number
  extras: YachtEstimateLine[]
  extrasTotal: number
  overtime: number
  overtimeServers: number
  overtimeHours: number
  subtotal: number
  vat: number
  total: number
  perGuestEffective: number
}

export function estimateYachtCatering(input: {
  guests: number
  formatId: YachtFormatId
  extraIds: readonly YachtExtraId[]
  overtimeServers: number
  overtimeHours: number
}): YachtEstimate {
  const guests = clampYachtGuests(input.guests)
  const format = yachtFormatById(input.formatId)
  const food = guests * format.perGuestAed
  const liveChefs = format.includesLiveStationChefs ? LIVE_STATION_CHEFS_AED : 0
  const extraIds = resolveYachtExtras(input.extraIds)
  const extras = extraIds.map((id) => {
    const extra = YACHT_EXTRAS.find((item) => item.id === id)!
    return { id: extra.id, name: extra.name, aed: extra.aed, group: extra.group }
  })
  const extrasTotal = extras.reduce((sum, extra) => sum + extra.aed, 0)
  const overtimeServers = Math.max(0, Math.round(input.overtimeServers) || 0)
  const overtimeHours = Math.max(0, Math.round(input.overtimeHours) || 0)
  const overtime = overtimeServers * overtimeHours * OVERTIME_PER_SERVER_PER_HOUR_AED
  const subtotal = food + liveChefs + extrasTotal + overtime
  const vat = Math.round(subtotal * YACHT_VAT_RATE)
  const total = subtotal + vat
  return {
    guests,
    formatId: format.id,
    format,
    food,
    liveChefs,
    extras,
    extrasTotal,
    overtime,
    overtimeServers,
    overtimeHours,
    subtotal,
    vat,
    total,
    perGuestEffective: guests ? Math.round(total / guests) : 0,
  }
}

export function yachtInquiryHref(input: { guests: number; formatId: YachtFormatId }): string {
  const guests = clampYachtGuests(input.guests)
  const format = isYachtFormatId(input.formatId) ? input.formatId : 'canape'
  return `/inquiry?from=yachts&guests=${guests}&format=${format}`
}

export function yachtWhatsAppMessage(input: { guests: number; formatId: YachtFormatId }): string {
  const guests = clampYachtGuests(input.guests)
  const format = yachtFormatById(input.formatId)
  return `Hi myCHEF Dubai, I'd like a written yacht catering quote. Guests: ${guests}. Format: ${format.name}. Charter date: __, Marina: __. (via mychef.ae/yachts)`
}

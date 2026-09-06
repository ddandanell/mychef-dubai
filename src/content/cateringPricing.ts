/**
 * Catering price source of truth for myCHEF.ae.
 *
 * Three labels, never mixed:
 *   from                 — published food-led floor (Catering hub)
 *   typical range        — staffed band used on price guides
 *   calculator estimate  — working per-person figure on Menus + the calculator
 *
 * Household chef visit rates live in `privateChefPricing.ts`. Do not import
 * them here and do not print them as catering per-person floors.
 *
 * Numbers are the ones already published in src/content (hub, Menus,
 * calculator, guides). This file only names which kind each figure is.
 */

export const PRICE_KIND = {
  from: 'from',
  typicalRange: 'typical range',
  calculatorEstimate: 'calculator estimate',
} as const

export type PriceKind = (typeof PRICE_KIND)[keyof typeof PRICE_KIND]

export type CateringFormatId =
  | 'drop-off'
  | 'buffet'
  | 'canapes'
  | 'bbq'
  | 'plated-chef'
  | 'yacht'
  | 'wedding'

export interface CateringFormat {
  id: CateringFormatId
  /** Hub / table label */
  label: string
  /** Calculator + Menus label when this format is quoted there */
  calculatorLabel?: string
  what: string
  staff: string
  href: string
  /** Published floor (food-led starting point). */
  fromPerPerson: number
  typicalMin: number
  typicalMax: number
  /** Working estimate for the calculator. Null = not in the calculator. */
  calculatorEstimate: number | null
  /** Calculator / Menus minimum headcount. */
  minGuests: number
  /** Hub/events note when the event-buffet minimum is stricter. */
  hubMinGuests?: number
  minOrderAed?: number
  note: string
}

export const CATERING_FORMATS: readonly CateringFormat[] = [
  {
    id: 'drop-off',
    label: 'Drop-off food',
    what: 'Food delivered ready to serve',
    staff: 'None',
    href: '/drop-off-catering-dubai',
    fromPerPerson: 90,
    typicalMin: 90,
    typicalMax: 90,
    calculatorEstimate: null,
    minGuests: 10,
    minOrderAed: 900,
    note: '10 guests and AED 900 minimum order.',
  },
  {
    id: 'buffet',
    label: 'Standard event buffet',
    calculatorLabel: 'Buffet & Family Style',
    what: 'Presentation plus a maintained spread',
    staff: '1–2',
    href: '/buffet-catering-dubai',
    fromPerPerson: 120,
    typicalMin: 220,
    typicalMax: 420,
    calculatorEstimate: 220,
    minGuests: 15,
    hubMinGuests: 20,
    note: 'Calculator minimum 15 guests; a standard event buffet on the hub starts from 20.',
  },
  {
    id: 'canapes',
    label: 'Canapés',
    calculatorLabel: 'Canapés & Cocktails',
    what: 'Passed bites for standing receptions',
    staff: '2–4',
    href: '/canape-catering-dubai',
    fromPerPerson: 150,
    typicalMin: 180,
    typicalMax: 350,
    calculatorEstimate: 280,
    minGuests: 10,
    note: 'Hub floor is food-led from AED 150. AED 280 is the staffed calculator estimate.',
  },
  {
    id: 'bbq',
    label: 'BBQ & live stations',
    calculatorLabel: 'BBQ & Live Stations',
    what: 'Cooking in front of guests',
    staff: '2–4',
    href: '/bbq-catering-dubai',
    fromPerPerson: 150,
    typicalMin: 200,
    typicalMax: 380,
    calculatorEstimate: 260,
    minGuests: 15,
    note: 'Sits in the hub premium band (from AED 150) with BBQ/live stations.',
  },
  {
    id: 'plated-chef',
    label: 'Chef-led plated dining',
    calculatorLabel: 'Private Chef Experience',
    what: 'Courses cooked and served at the table',
    staff: '3 and above',
    href: '/buffet-vs-plated-dubai',
    fromPerPerson: 700,
    typicalMin: 700,
    typicalMax: 950,
    calculatorEstimate: 950,
    minGuests: 2,
    note: 'Chef-led plated service. Household visit rates are on /private-chef-dubai/pricing.',
  },
  {
    id: 'yacht',
    label: 'Yacht catering',
    calculatorLabel: 'Yacht Catering',
    what: 'Compact menus, galley limits, on-board service',
    staff: '2–4',
    href: '/yachts',
    fromPerPerson: 280,
    typicalMin: 280,
    typicalMax: 550,
    calculatorEstimate: 320,
    minGuests: 8,
    note: 'Logistics and compact galleys sit above a villa buffet floor.',
  },
  {
    id: 'wedding',
    label: 'Wedding catering',
    calculatorLabel: 'Wedding Catering',
    what: 'Staffed wedding buffet or stations',
    staff: '3 and above',
    href: '/wedding-catering-dubai',
    fromPerPerson: 180,
    typicalMin: 180,
    typicalMax: 350,
    calculatorEstimate: 450,
    minGuests: 20,
    note: 'Typical staffed wedding buffet band AED 180–350. Calculator estimate AED 450 is a staffed working figure.',
  },
]

export const CATERING_FORMAT_BY_ID: Record<CateringFormatId, CateringFormat> = Object.fromEntries(
  CATERING_FORMATS.map((f) => [f.id, f]),
) as Record<CateringFormatId, CateringFormat>

/** Hub/events table: drop-off, standard buffet, premium grouping, plated. */
export const HUB_FORMAT_IDS: readonly CateringFormatId[] = ['drop-off', 'buffet', 'canapes', 'plated-chef']

export const CALCULATOR_FORMAT_IDS = [
  'plated-chef',
  'canapes',
  'buffet',
  'bbq',
  'yacht',
  'wedding',
] as const satisfies readonly CateringFormatId[]

export type CalculatorFormatId = (typeof CALCULATOR_FORMAT_IDS)[number]

export const MENU_FORMAT_IDS: readonly CateringFormatId[] = ['plated-chef', 'canapes', 'buffet', 'bbq']

export const STAFF_LEVELS = [
  { id: 'none', label: 'Self-service (chef only)', multiplier: 1 },
  { id: 'basic', label: 'Waiters + basic setup', multiplier: 1.15 },
  { id: 'full', label: 'Full service staff + bartender', multiplier: 1.3 },
] as const

export type StaffLevelId = (typeof STAFF_LEVELS)[number]['id']

export interface EventPackage {
  id: 'date-night' | 'family-feast' | 'birthday' | 'corporate-dinner'
  occasion: 'date-night' | 'family-dinner' | 'birthday' | 'corporate'
  title: string
  name: string
  href: string
  guests: string
  priceAed: number
  perPerson: string
  description: string
  included: string
}

export const EVENT_PACKAGES: readonly EventPackage[] = [
  {
    id: 'date-night',
    occasion: 'date-night',
    title: 'Date night package',
    name: 'Date Night',
    href: '/date-night-package-dubai',
    guests: '2 guests',
    priceAed: 1200,
    perPerson: '600',
    description: 'An intimate three-course private chef dinner for two, cooked and served at home.',
    included: 'A three-course menu for two, cooked in your kitchen, served at your table, and the kitchen left exactly as we found it.',
  },
  {
    id: 'family-feast',
    occasion: 'family-dinner',
    title: 'Family catering',
    name: 'Family Feast',
    href: '/family-feast-package-dubai',
    guests: '6–8 guests',
    priceAed: 2400,
    perPerson: '300–400',
    description: 'A relaxed sharing-style dinner built around family and friends at one table.',
    included: 'Generous sharing plates and premium ingredients, with a chef and service staff so nobody has to leave the table.',
  },
  {
    id: 'birthday',
    occasion: 'birthday',
    title: 'Birthday catering packages',
    name: 'Birthday Celebration',
    href: '/birthday-catering-package-dubai',
    guests: '8–12 guests',
    priceAed: 3600,
    perPerson: '300–450',
    description: 'A private chef birthday celebration for 8–12 guests, with a tailored menu, cake option and full service.',
    included: 'Canapés or a starter, main course and dessert, with service staff looking after your guests all evening.',
  },
  {
    id: 'corporate-dinner',
    occasion: 'corporate',
    title: 'Corporate dinner package',
    name: 'Corporate Dinner',
    href: '/corporate-dinner-package-dubai',
    guests: '10–15 guests',
    priceAed: 4500,
    perPerson: '300–450',
    description: 'Professional dinner catering for boardrooms and teams, sized for a smaller senior group.',
    included: 'A multi-course or buffet menu with service staff, presented to the standard the room expects.',
  },
]

export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-US')}`
}

export function formatFrom(n: number): string {
  return `From ${formatAed(n)} per person`
}

export function formatTypical(min: number, max: number): string {
  return `Typical range ${formatAed(min)}–${max.toLocaleString('en-US')}`
}

export function formatEstimate(n: number): string {
  return `Calculator estimate ${formatAed(n)} per person`
}

export function formatPriceAed(n: number): string {
  return n.toLocaleString('en-US')
}

export function eventPackageById(id: EventPackage['id']): EventPackage {
  const pkg = EVENT_PACKAGES.find((row) => row.id === id)
  if (!pkg) throw new Error(`EVENT_PACKAGES missing ${id}`)
  return pkg
}

export function cateringFormat(id: CateringFormatId): CateringFormat {
  const format = CATERING_FORMATS.find((row) => row.id === id)
  if (!format) throw new Error(`Unknown catering format: ${id}`)
  return format
}

export function isCalculatorFormatId(value: string): value is CalculatorFormatId {
  return (CALCULATOR_FORMAT_IDS as readonly string[]).includes(value)
}

export function isStaffLevelId(value: string): value is StaffLevelId {
  return STAFF_LEVELS.some((row) => row.id === value)
}

export function clampGuests(formatId: CateringFormatId, guests: number): number {
  const min = CATERING_FORMAT_BY_ID[formatId].minGuests
  const n = Number(guests)
  if (!Number.isFinite(n) || n < min) return min
  return Math.floor(n)
}

export type CateringQuote =
  | {
      ok: true
      kind: 'calculatorEstimate'
      format: CateringFormat
      staffId: StaffLevelId
      guests: number
      perPerson: number
      totalLow: number
      totalHigh: number
    }
  | {
      ok: false
      reason: 'below-minimum'
      format: CateringFormat
      minGuests: number
      guests: number
    }
  | {
      ok: false
      reason: 'not-in-calculator'
      format: CateringFormat
      guests: number
    }

export function quoteCatering(input: {
  formatId: CateringFormatId
  guests: number
  staffId: StaffLevelId
}): CateringQuote {
  const format = CATERING_FORMAT_BY_ID[input.formatId]
  if (format.calculatorEstimate == null) {
    return { ok: false, reason: 'not-in-calculator', format, guests: input.guests }
  }
  const guests = Number(input.guests)
  if (!Number.isFinite(guests) || guests < format.minGuests) {
    return {
      ok: false,
      reason: 'below-minimum',
      format,
      minGuests: format.minGuests,
      guests: Number.isFinite(guests) ? guests : 0,
    }
  }
  const staff = STAFF_LEVELS.find((s) => s.id === input.staffId) ?? STAFF_LEVELS[0]
  const perPerson = Math.round(format.calculatorEstimate * staff.multiplier)
  const counted = Math.floor(guests)
  return {
    ok: true,
    kind: 'calculatorEstimate',
    format,
    staffId: staff.id,
    guests: counted,
    perPerson,
    totalLow: perPerson * counted,
    totalHigh: Math.round(perPerson * 1.4 * counted),
  }
}

export function hubPriceCell(format: CateringFormat): string {
  const typical = formatTypical(format.typicalMin, format.typicalMax)
  if (format.calculatorEstimate == null) {
    return `${formatFrom(format.fromPerPerson)}. ${typical}.`
  }
  return `${formatFrom(format.fromPerPerson)}. ${typical}. ${formatEstimate(format.calculatorEstimate)}.`
}

export function cateringCostSummary(): string {
  const drop = CATERING_FORMAT_BY_ID['drop-off']
  const buffet = CATERING_FORMAT_BY_ID['buffet']
  const canapes = CATERING_FORMAT_BY_ID['canapes']
  const plated = CATERING_FORMAT_BY_ID['plated-chef']
  return (
    `Drop-off starts from AED ${drop.fromPerPerson} per person, a standard event buffet from AED ${buffet.fromPerPerson}, ` +
    `premium buffet, BBQ, live stations and canapés from AED ${canapes.fromPerPerson}, and chef-led plated dining at ` +
    `AED ${plated.typicalMin}–${plated.typicalMax} per person.`
  )
}

export interface HubPriceRow {
  format: string
  what: string
  staff: string
  href: string
  /** Stacked from / typical / estimate for existing “From” table cells. */
  price: string
  from: string
  typical: string
  estimate: string | null
}

function stackedPrice(from: string, typical: string, estimate: string | null): string {
  return [from, typical, estimate].filter((part) => part && part.length > 0).join('. ') + '.'
}

export function hubPriceRows(opts?: { dropOffLabel?: string }): HubPriceRow[] {
  const drop = CATERING_FORMAT_BY_ID['drop-off']
  const buffet = CATERING_FORMAT_BY_ID['buffet']
  const canapes = CATERING_FORMAT_BY_ID['canapes']
  const plated = CATERING_FORMAT_BY_ID['plated-chef']
  return [
    {
      format: opts?.dropOffLabel ?? drop.label,
      what: drop.what,
      staff: drop.staff,
      href: drop.href,
      from: formatFrom(drop.fromPerPerson),
      typical: formatTypical(drop.typicalMin, drop.typicalMax),
      estimate: null,
      price: stackedPrice(formatFrom(drop.fromPerPerson), formatTypical(drop.typicalMin, drop.typicalMax), null),
    },
    {
      format: buffet.label,
      what: buffet.what,
      staff: buffet.staff,
      href: buffet.href,
      from: formatFrom(buffet.fromPerPerson),
      typical: formatTypical(buffet.typicalMin, buffet.typicalMax),
      estimate: buffet.calculatorEstimate != null ? formatEstimate(buffet.calculatorEstimate) : null,
      price: stackedPrice(
        formatFrom(buffet.fromPerPerson),
        formatTypical(buffet.typicalMin, buffet.typicalMax),
        buffet.calculatorEstimate != null ? formatEstimate(buffet.calculatorEstimate) : null,
      ),
    },
    {
      format: 'Premium buffet, BBQ, live stations or canapés',
      what: 'Cooking or passed food in front of guests',
      staff: '2–4',
      href: '/live-cooking-stations-dubai',
      from: formatFrom(canapes.fromPerPerson),
      typical: '',
      estimate: null,
      price: `${formatFrom(canapes.fromPerPerson)}. Typical range and calculator estimate are listed per format on the prices guide.`,
    },
    {
      format: plated.label,
      what: plated.what,
      staff: plated.staff,
      href: plated.href,
      from: `AED ${plated.typicalMin}–${plated.typicalMax} per person`,
      typical: formatTypical(plated.typicalMin, plated.typicalMax),
      estimate: plated.calculatorEstimate != null ? formatEstimate(plated.calculatorEstimate) : null,
      price: stackedPrice(
        `AED ${plated.typicalMin}–${plated.typicalMax} per person`,
        '',
        plated.calculatorEstimate != null ? formatEstimate(plated.calculatorEstimate) : null,
      ),
    },
  ]
}

export function cateringPricingNotes(): string[] {
  const drop = CATERING_FORMAT_BY_ID['drop-off']
  const buffet = CATERING_FORMAT_BY_ID['buffet']
  return [
    `Drop-off: ${drop.minGuests} guests minimum and AED ${drop.minOrderAed ?? 900} minimum order.`,
    `A standard event buffet starts from ${buffet.hubMinGuests ?? buffet.minGuests} guests.`,
    'From = published floor. Typical range = staffed band. Calculator estimate = working figure on Menus and the calculator.',
    'All figures are before 5% VAT, which is shown as its own line.',
    'Not every event meets the starting points. Guest count, menu, staffing, venue access, timing and equipment move the total.',
  ]
}

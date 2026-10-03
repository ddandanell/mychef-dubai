/**
 * PRIVATE CHEF PRICING — single source of truth.
 *
 * One engine, one config. Change a rate, a tier or a staffing rule HERE and every
 * surface (calculator, summary card, lead payload, schema, hub previews) follows.
 *
 * Approved 2026-10-03: single visits are available. Member rates apply to
 * monthly plans of four or more prepaid visits, with no further volume reduction.
 * All published rates are before 5% VAT, groceries and zone transport.
 */

export type ServiceId = 'fresh-meal' | 'food-prep' | 'autopilot' | 'full-day'
export type Duration = 'short' | 'long'
export type Meal = 'breakfast' | 'lunch' | 'dinner'
export type GroceryMode = 'client' | 'mychef'

/** AED */
export const CURRENCY = 'AED'

export const SERVICES = [
  {
    id: 'fresh-meal',
    name: 'Private Chef Visit',
    hours: 3,
    tagline: 'A freshly prepared breakfast, lunch or dinner.',
    body: 'Your chef arrives, cooks one meal fresh, serves it the way this house likes, and leaves the kitchen handled.',
    rate: 750,
    singleRate: 1125,
    unit: 'service',
    badge: null,
    highlight: false,
    asksMeal: true,
    asksGrocery: true,
    groceryIncluded: false,
    included: ['One meal cooked fresh', 'Service the way you want it', 'Kitchen left the way it was found'],
    notIncluded: ['Groceries', 'Shopping / procurement (unless grocery management is added)'],
  },
  {
    id: 'food-prep',
    name: 'Fridge Reset',
    hours: 4,
    tagline: 'About 20–25 portions, labelled and ready for later.',
    body: 'Your chef cooks an agreed menu, portions and labels the food, and leaves storage and reheating notes. About 20–25 portions is a planning guide; output depends on the dishes, portions and kitchen.',
    rate: 900,
    singleRate: 1350,
    unit: 'service',
    badge: 'Meals ready for later',
    highlight: true,
    asksMeal: false,
    asksGrocery: true,
    groceryIncluded: false,
    included: ['Agreed menu and shopping list', 'About 20–25 portions, menu dependent', 'Labelling and storage guidance', 'Kitchen cleanup'],
    notIncluded: ['Groceries', 'Shopping / procurement'],
  },
  {
    id: 'autopilot',
    name: 'Fridge Reset, chef shops',
    hours: 5,
    tagline: 'The same fridge reset, with shopping handled too.',
    body: 'We plan the menu, shop or order ingredients, keep the receipts and prepare about 20–25 portions in your kitchen. Food is labelled and stored, and the kitchen is cleaned. Ingredients remain separate at actual cost, no markup.',
    rate: 1050,
    singleRate: 1575,
    unit: 'service',
    badge: 'Most convenient',
    highlight: false,
    asksMeal: false,
    asksGrocery: false,
    groceryIncluded: true,
    included: [
      'Menu planning',
      'Food Profile',
      'Kitchen inventory awareness',
      'Grocery planning',
      'Shopping or online ordering',
      'Receipt tracking',
      'Food preparation',
      'Breakfast if wanted',
      'Lunch / dinner preparation',
      'Snacks where time allows',
      'Kitchen cleanup',
    ],
    notIncluded: ['Groceries (charged at actual cost)', 'Delivery or transport for shopping (actual cost)'],
  },
  {
    id: 'full-day',
    name: 'Chef by the Day',
    hours: 10,
    tagline: 'The kitchen staffed from breakfast to dinner.',
    body: 'Fresh meals through the day in your household’s rhythm, with grocery management, the Food Profile and normal household food administration already part of the day.',
    rate: 1450,
    singleRate: 2000,
    unit: 'day',
    badge: 'Complete household service',
    highlight: false,
    asksMeal: false,
    asksGrocery: false,
    groceryIncluded: true,
    included: [
      'Fresh meals throughout the day',
      'Menu planning',
      'Grocery management',
      'Shopping coordination',
      'Food Profile',
      'Kitchen management',
      'Snacks',
      'Cleanup',
      'Normal household food administration',
    ],
    notIncluded: ['Groceries (charged at actual cost)'],
  },
] as const

/** Adding grocery management to a 3h or 4h service adds one hour of kitchen-management time. */
export const GROCERY_MANAGEMENT_ADD_ON = { hours: 1, rate: 150, singleRate: 225 } as const

/** Published visit rates are for Signature. Reserve and Private Office are quoted on request. */
export const CHEF_LEVELS = [
  { name: 'Signature', description: 'The visit and meal-pack rates on this page. A chef matched to your food, kitchen and schedule.' },
  { name: 'Reserve', description: 'A senior chef for a more demanding brief. Availability, scope and price on request.' },
  { name: 'Private Office', description: 'Bespoke household coordination and chef requirements. Scope and price on request.' },
] as const

export const VAT_RATE = 0.05
export const TRANSPORT_ZONES = [
  { id: 'central', label: 'Central Dubai', areas: 'Downtown, DIFC, Business Bay, Jumeirah', rate: 40 },
  { id: 'mid', label: 'Mid Dubai', areas: 'Umm Suqeim, Al Barsha, Dubai Hills', rate: 65 },
  { id: 'marina-palm', label: 'Marina & Palm', areas: 'Marina, JBR, JLT, Bluewaters, Palm, Emirates Hills, JVC', rate: 95 },
  { id: 'outer', label: 'Outer Dubai', areas: 'Arabian Ranches and beyond', rate: 130 },
] as const
export const PRICE_NOTE = 'Before 5% VAT. Groceries at actual cost, no markup. Zone transport AED 40–130 per visit is separate.'
export const MEMBER_NOTE = 'Member rate: a monthly plan of 4+ prepaid visits. The same member rate applies at every frequency.'
export const MEAL_COMPLEXITIES = [
  { id: 'everyday', name: 'Everyday', member: 45, single: 60, examples: 'Dal, chicken adobo, shish tawook or bolognese' },
  { id: 'signature', name: 'Signature', member: 60, single: 80, examples: 'Butter chicken, lasagne, kare-kare or beef bourguignon' },
  { id: 'special', name: 'Chef’s Special', member: 95, single: 125, examples: 'Dum biryani, handmade pasta or kibbeh' },
] as const
export function mealPackPrice(counts: readonly number[], member: boolean): number {
  return MEAL_COMPLEXITIES.reduce((sum, level, index) => sum + Math.max(0, Math.floor(counts[index] ?? 0)) * (member ? level.member : level.single), 0)
}

/** Of what the house pays, the share that goes to the licensed supplier who employs the chef. */
export const SUPPLIER_SHARE = 0.4

export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-AE')}`
}

/** Days per week → services over four weeks. Member plans require at least 4 prepaid visits per month. */
export const FREQUENCIES = [
  { days: 1, perMonth: 4 },
  { days: 2, perMonth: 8 },
  { days: 3, perMonth: 12 },
  { days: 4, perMonth: 16 },
  { days: 5, perMonth: 20 },
  { days: 6, perMonth: 24 },
  { days: 7, perMonth: 28 },
] as const
/** A 30-day month occasionally lands one extra visit. It is billed when it happens, never assumed. */
export const LONG_MONTH_NOTE =
  'Estimates cover four weeks of visits. Any extra calendar-month visits are itemised in your written quote.'
export const LONG_TERM_MIN_SERVICES = 4

/** Keep the existing tier API for downstream previews; there is one flat member rate. */
export const RATE_TIERS = [
  { id: 'member', name: 'Member rate', min: 4, max: Infinity },
] as const

/** Single visits or a run of visits; no minimum number of days. */
export const SHORT_STAY = { minDays: 1, maxDays: 30 } as const

export const LONG_TERM_LENGTHS = [
  { id: '1', label: '1 month', months: 1 },
  { id: '2', label: '2 months', months: 2 },
  { id: '3', label: '3 months', months: 3 },
  { id: '6', label: '6 months', months: 6 },
  { id: '12', label: '12 months', months: 12 },
  { id: 'ongoing', label: 'Ongoing', months: null },
] as const

/** Guests → assistants. 40+ is a custom staffing review. */
export const ASSISTANT_BANDS = [
  { min: 1, max: 8, assistants: 0, label: 'No assistant required' },
  { min: 9, max: 19, assistants: 1, label: '+1 assistant' },
  { min: 20, max: 29, assistants: 2, label: '+2 assistants' },
  { min: 30, max: 39, assistants: 3, label: '+3 assistants' },
] as const
export const CUSTOM_STAFFING_FROM = 40
export const GUESTS_MAX = 40

/** Approved assistant fees: short visit / day / additional hour. */
export const ASSISTANT_RATES = { short: 350, fullDay: 550, extraHour: 90 } as const

/**
 * Overtime is the hourly rate of that job plus 50%. The 50% goes to the supplier; the cook stays
 * on their normal rate, so a long day is never something anyone has a reason to engineer.
 */
export const OVERTIME = {
  uplift: 0.5,
  assistant: 90,
  standardDayHours: 9,
  sameChefMaxHours: 10,
} as const

/** Hourly overtime for one job, rounded to the nearest 10 dirhams so a quote reads like a price. */
export function overtimeRate(serviceId: ServiceId): number {
  const service = SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0]
  return Math.round((service.rate / service.hours) * (1 + OVERTIME.uplift) / 10) * 10
}

export const RESCHEDULE_NOTICE_HOURS = 24

export interface QuoteInput {
  duration: Duration
  /** short stay only: number of visits, 1–30 */
  stayDays: number
  /** long term only: days per week 1–7 */
  daysPerWeek: number
  /** long term only */
  lengthId: (typeof LONG_TERM_LENGTHS)[number]['id']
  startDate: string | null
  serviceId: ServiceId
  meal: Meal
  guests: number
  groceryMode: GroceryMode
  transportZoneId?: (typeof TRANSPORT_ZONES)[number]['id'] | ''
}

export interface QuoteLine {
  label: string
  amount: number
  note?: string
}

export interface Quote {
  service: (typeof SERVICES)[number]
  hoursPerService: number
  groceryManaged: boolean
  assistants: number
  customStaffing: boolean
  servicesPerMonth: number
  servicesTotal: number
  tier: (typeof RATE_TIERS)[number] | null
  shortStay: boolean
  lines: QuoteLine[]
  perService: number
  transportPerService: number | null
  vatPerService: number | null
  perServiceWithVat: number | null
  periodWithVat: number | null
  perWeek: number
  perMonth: number
  total: number | null
  chefHoursPerMonth: number
  effectiveHourly: number
  relationship: { label: string; body: string }
}

const money = (n: number) => Math.round(n * 100) / 100

export function assistantsFor(guests: number): { assistants: number; label: string; custom: boolean } {
  if (guests >= CUSTOM_STAFFING_FROM) return { assistants: 3, label: 'Custom staffing review', custom: true }
  const band = ASSISTANT_BANDS.find((b) => guests >= b.min && guests <= b.max) ?? ASSISTANT_BANDS[0]
  return { assistants: band.assistants, label: band.label, custom: false }
}

export function tierFor(servicesPerMonth: number) {
  return RATE_TIERS.find((t) => servicesPerMonth >= t.min && servicesPerMonth <= t.max) ?? RATE_TIERS[0]
}

export function relationshipFor(daysPerWeek: number) {
  return daysPerWeek >= 5
    ? { label: 'Dedicated household arrangement', body: 'A dedicated arrangement: most of the chef’s capacity is reserved around your schedule.' }
    : { label: 'Regular assigned chef', body: 'We aim to keep the same chef around your scheduled days.' }
}

export function computeQuote(input: QuoteInput): Quote {
  const service = SERVICES.find((s) => s.id === input.serviceId) ?? SERVICES[0]
  const shortStay = input.duration === 'short'

  // Grocery management: included in 5h/10h; optional +1h add-on for 3h/4h.
  const addsManagement = service.asksGrocery && input.groceryMode === 'mychef'
  const groceryManaged = service.groceryIncluded || addsManagement
  const hoursPerService = service.hours + (addsManagement ? GROCERY_MANAGEMENT_ADD_ON.hours : 0)

  const baseChef = shortStay ? service.singleRate : service.rate
  const shoppingFee = addsManagement ? (shortStay ? GROCERY_MANAGEMENT_ADD_ON.singleRate : GROCERY_MANAGEMENT_ADD_ON.rate) : 0

  const { assistants, custom } = assistantsFor(input.guests)
  const assistantRate = service.id === 'full-day' ? ASSISTANT_RATES.fullDay : ASSISTANT_RATES.short
  const assistantsCost = assistants * assistantRate

  const freq = FREQUENCIES.find((f) => f.days === input.daysPerWeek) ?? FREQUENCIES[0]
  const visitCount = Math.max(SHORT_STAY.minDays, Math.min(SHORT_STAY.maxDays, Math.floor(input.stayDays) || 1))
  const servicesPerMonth = shortStay ? visitCount : freq.perMonth
  const tier = shortStay ? null : tierFor(servicesPerMonth)

  const chefPerService = baseChef + shoppingFee
  const perService = chefPerService + assistantsCost

  const lines: QuoteLine[] = [
    { label: `${service.name} (${hoursPerService}h)`, amount: chefPerService, note: shortStay ? 'Single rate' : tier?.name },
  ]
  if (assistants > 0) lines.push({ label: `${assistants} assistant${assistants > 1 ? 's' : ''}`, amount: assistantsCost, note: `${assistantRate} each` })

  const perWeek = shortStay ? perService * Math.min(7, visitCount) : perService * freq.days
  const perMonth = perService * servicesPerMonth
  const length = LONG_TERM_LENGTHS.find((l) => l.id === input.lengthId)
  const total = shortStay ? perService * visitCount : length?.months ? perMonth * length.months : null
  const chefHoursPerMonth = hoursPerService * servicesPerMonth
  const transportPerService = TRANSPORT_ZONES.find(zone => zone.id === input.transportZoneId)?.rate ?? null
  const vatPerService = transportPerService === null ? null : money((perService + transportPerService) * VAT_RATE)
  const perServiceWithVat = transportPerService === null || vatPerService === null ? null : money(perService + transportPerService + vatPerService)
  const periodWithVat = perServiceWithVat === null ? null : money(perServiceWithVat * servicesPerMonth)

  return {
    service,
    hoursPerService,
    groceryManaged,
    assistants,
    customStaffing: custom,
    servicesPerMonth,
    servicesTotal: shortStay ? visitCount : servicesPerMonth,
    tier,
    shortStay,
    lines,
    perService,
    transportPerService,
    vatPerService,
    perServiceWithVat,
    periodWithVat,
    perWeek,
    perMonth,
    total,
    chefHoursPerMonth,
    effectiveHourly: Math.round(chefPerService / hoursPerService),
    relationship: shortStay ? { label: 'Your chef for the booking', body: 'Chef availability and the agreed menu are confirmed before payment.' } : relationshipFor(input.daysPerWeek),
  }
}

export const DEFAULT_INPUT: QuoteInput = {
  duration: 'short',
  stayDays: 1,
  daysPerWeek: 1,
  lengthId: 'ongoing',
  startDate: null,
  serviceId: 'fresh-meal',
  meal: 'dinner',
  guests: 4,
  groceryMode: 'client',
  transportZoneId: '',
}

export const fmt = (n: number) => `${CURRENCY} ${n.toLocaleString('en-US')}`

/** The transparency block under the price. */
export const FEE_INCLUDES = [
  'Chef time', 'Chef matching', 'Household onboarding', 'Food Profile', 'Account manager',
  'Quality follow-up', 'Schedule management', 'Replacement support', 'Access to additional staff', 'Specialist access on eligible member plans',
] as const
export const FEE_SEPARATE = [
  'Groceries at actual cost, no markup', 'Zone transport AED 40–130 per visit', 'Direct grocery delivery at cost', 'Additional assistants', 'Overtime', 'Specialist chef sessions', 'Extra event staffing',
] as const

export const SPECIALISTS = ['Japanese / Sushi', 'Italian', 'French', 'Pastry', 'Indian', 'BBQ', 'Special dietary specialists'] as const

export const PRICING_FAQS = [
  { q: 'Can I book just one visit?', a: 'Yes. Single visits start at AED 1,125 for three hours. Member rates start at AED 750 for a monthly plan of four or more prepaid visits. Both are before 5% VAT, groceries at actual cost with no markup, and zone transport of AED 40–130 per visit.' },
  { q: 'Can I have the same chef every week?', a: 'Yes. Recurring plans are built around a regular assigned chef whenever possible; at five or more days a week the arrangement is dedicated, with chef capacity substantially reserved around your schedule.' },
  { q: 'Can I choose my days?', a: 'Yes. You set the days, and the chef is built around them.' },
  { q: 'Can I move a scheduled day?', a: `Yes — with at least ${RESCHEDULE_NOTICE_HOURS} hours’ notice, a scheduled service can be moved within the current billing month, subject to chef availability. With less than ${RESCHEDULE_NOTICE_HOURS} hours’ notice the service remains chargeable, because the chef’s day was already held for your house. The supplier who employs the chef works to the same ${RESCHEDULE_NOTICE_HOURS} hours, so nobody is told two different rules.` },
  { q: 'Are groceries included?', a: 'The shopping cost is separate and charged at actual cost. Grocery management — planning, shopping or ordering, receipts — is included in Fridge Reset, chef shops and Chef by the Day, and can be added to a Private Chef Visit or Fridge Reset.' },
  { q: 'Does myCHEF mark up groceries?', a: 'No. Groceries and any direct delivery or transport costs are charged at actual cost. myCHEF adds no percentage.' },
  { q: 'How many people are included?', a: 'Up to eight people are included in the chef price. From nine, the calculator adds assistants automatically: one from 9 to 19, two from 20 to 29, three from 30 to 39. From 40 we review staffing with you.' },
  { q: 'Can you cook for children separately?', a: 'Yes. What the children eat — timing, refusals, allergies — sits in the Food Profile, and the chef plans around it.' },
  { q: 'Can you handle allergies?', a: 'Allergies are part of onboarding and the Food Profile. Halal sourcing is the default. If a request is professionally unsafe, safety comes before preference.' },
  { q: 'Can I change my chef?', a: 'Yes. A wrong match is changed; the Food Profile stays with the household so the next chef is not starting from zero.' },
  { q: 'What happens if my chef is sick?', a: 'Replacement support is part of the fee. The next chef is briefed from your Food Profile. If an equivalent chef is not available, we tell you and give you the options.' },
  { q: 'Can I request a Japanese or sushi specialist?', a: 'Yes. After one month with myCHEF, long-term clients can request specialists for occasional services — Japanese and sushi, Italian, French, pastry, Indian, BBQ and dietary specialists. They are priced separately depending on the specialist.' },
  { q: 'Can I book seven days every week?', a: 'Yes. Seven-day coverage uses rotation so quality does not depend on one person working without rest.' },
  { q: 'How long is a full day?', a: 'Chef by the Day includes ten hours, with meals and breaks planned around your household. If you need longer coverage, we quote overlapping shifts separately rather than extending one chef’s day.' },
] as const

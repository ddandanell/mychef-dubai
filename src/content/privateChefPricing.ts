/**
 * PRIVATE CHEF PRICING — single source of truth.
 *
 * One engine, one config. Change a rate, a tier or a staffing rule HERE and every
 * surface (calculator, summary card, lead payload, schema, hub previews) follows.
 *
 * Product boundary (2026-08-25): Private Chef = 3+ days of household chef service.
 * One dinner / party / event is Catering and never appears on this page.
 *
 * Rates marked DRAFT are the owner's starting figures — tune here, not in components.
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
    name: 'Fresh Meal',
    hours: 3,
    tagline: 'A freshly prepared breakfast, lunch or dinner.',
    body: 'Your chef arrives, cooks one meal fresh, serves it the way this house likes, and leaves the kitchen handled.',
    rate: 750, // DRAFT
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
    name: 'Private Chef Food Prep',
    hours: 4,
    tagline: 'Food for your day, without staff in your home all day.',
    body: 'Breakfast cooked fresh, then lunch, dinner and other food prepared for later — or the four hours used entirely around the meals you prefer. You control how the time is used.',
    rate: 900, // DRAFT
    unit: 'service',
    badge: 'Privacy-first',
    highlight: true,
    asksMeal: false,
    asksGrocery: true,
    groceryIncluded: false,
    included: ['Menu coordination', 'Food preparation', 'Kitchen cleanup', 'Shopping list'],
    notIncluded: ['Groceries', 'Shopping / procurement'],
  },
  {
    id: 'autopilot',
    name: 'Kitchen on Autopilot',
    hours: 5,
    tagline: 'The managed kitchen. Planning, shopping, cooking, cleanup.',
    body: 'Your chef runs the food side of the house: plans the menus, keeps the Food Profile current, watches the inventory, shops or orders online, tracks receipts, cooks and cleans up.',
    rate: 1050, // DRAFT
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
    name: 'Full-Day Private Chef',
    hours: 9,
    tagline: 'The kitchen staffed from breakfast to dinner.',
    body: 'Fresh meals through the day in your household’s rhythm, with grocery management, the Food Profile and normal household food administration already part of the day.',
    rate: 1500, // DRAFT
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

/** Adding grocery management to a 3h or 4h service adds one hour of kitchen-management time. DRAFT. */
export const GROCERY_MANAGEMENT_ADD_ON = { hours: 1, rate: 150 } as const

/**
 * What the house pays does not depend on a chef's level. The three levels are the cook's pay
 * ladder — Level 1 starting, Level 2 +10%, Level 3 +20%, paid to the registered cook — and they
 * live in privateChefStandard.ts with the score bands that move a person between them.
 *
 * Selling a "Head Chef" upgrade beside a quality ladder gave the same person two prices and the
 * house two stories. One price. One person. One ladder.
 */
/** Of what the house pays, the share that goes to the licensed supplier who employs the chef. */
export const SUPPLIER_SHARE = 0.4

export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-AE')}`
}

/** Days per week → approx. services per month (30-day month). Long-term minimum is 4 services / month. */
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
  'Four weeks of visits. A long month sometimes lands one more; it is billed when it happens.'
export const LONG_TERM_MIN_SERVICES = 4

/**
 * Two household rates, not four. One price up to four days a week — which is the month we teach
 * everywhere, sixteen visits at the list rate — and a better rate from five days, where the
 * chef's week is substantially reserved for one house. Four bands with 4% steps meant the month
 * printed on the page and the month the calculator produced were never the same month.
 */
export const RATE_TIERS = [
  { id: 'standard', name: 'Standard Household Rate', min: 4, max: 19, discount: 0 },
  { id: 'dedicated', name: 'Dedicated Household Rate', min: 20, max: Infinity, discount: 0.12 },
] as const

/** 3–29 day assignments: trained staff reserved for a short, less stable period. Multiplier inherited from the site's published under-one-month rule. DRAFT. */
export const SHORT_STAY = { minDays: 3, maxDays: 29, multiplier: 1.5 } as const

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

/** DRAFT assistant rates. */
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
  /** short stay only: number of chef days, 3–29 */
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
  perWeek: number
  perMonth: number
  total: number | null
  chefHoursPerMonth: number
  effectiveHourly: number
  relationship: { label: string; body: string }
}

const round5 = (n: number) => Math.round(n / 5) * 5

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
    ? { label: 'Dedicated household arrangement', body: 'Chef capacity is substantially reserved around the household’s schedule.' }
    : { label: 'Regular assigned chef', body: 'We aim to keep the same chef around your scheduled days.' }
}

export function computeQuote(input: QuoteInput): Quote {
  const service = SERVICES.find((s) => s.id === input.serviceId) ?? SERVICES[0]
  const shortStay = input.duration === 'short'

  // Grocery management: included in 5h/9h; optional +1h add-on for 3h/4h.
  const addsManagement = service.asksGrocery && input.groceryMode === 'mychef'
  const groceryManaged = service.groceryIncluded || addsManagement
  const hoursPerService = service.hours + (addsManagement ? GROCERY_MANAGEMENT_ADD_ON.hours : 0)

  const baseChef = service.rate + (addsManagement ? GROCERY_MANAGEMENT_ADD_ON.rate : 0)

  const { assistants, custom } = assistantsFor(input.guests)
  const assistantRate = service.id === 'full-day' ? ASSISTANT_RATES.fullDay : ASSISTANT_RATES.short
  const assistantsCost = assistants * assistantRate

  const freq = FREQUENCIES.find((f) => f.days === input.daysPerWeek) ?? FREQUENCIES[4]
  const servicesPerMonth = shortStay ? input.stayDays : freq.perMonth
  const tier = shortStay ? null : tierFor(servicesPerMonth)
  const multiplier = shortStay ? SHORT_STAY.multiplier : 1 - (tier?.discount ?? 0)

  const chefPerService = round5(baseChef * multiplier)
  const perService = chefPerService + assistantsCost

  const lines: QuoteLine[] = [
    { label: `${service.name} (${hoursPerService}h)`, amount: chefPerService, note: shortStay ? 'Short-stay rate' : tier?.name },
  ]
  if (assistants > 0) lines.push({ label: `${assistants} assistant${assistants > 1 ? 's' : ''}`, amount: assistantsCost, note: `${assistantRate} each` })

  const perWeek = shortStay ? perService * Math.min(7, input.stayDays) : perService * input.daysPerWeek
  const perMonth = perService * servicesPerMonth
  const length = LONG_TERM_LENGTHS.find((l) => l.id === input.lengthId)
  const total = shortStay ? perService * input.stayDays : length?.months ? perMonth * length.months : null
  const chefHoursPerMonth = hoursPerService * servicesPerMonth

  return {
    service,
    hoursPerService,
    groceryManaged,
    assistants,
    customStaffing: custom,
    servicesPerMonth,
    servicesTotal: shortStay ? input.stayDays : servicesPerMonth,
    tier,
    shortStay,
    lines,
    perService,
    perWeek,
    perMonth,
    total,
    chefHoursPerMonth,
    effectiveHourly: Math.round(chefPerService / hoursPerService),
    relationship: relationshipFor(shortStay ? 7 : input.daysPerWeek),
  }
}

export const DEFAULT_INPUT: QuoteInput = {
  duration: 'long',
  stayDays: 7,
  daysPerWeek: 5,
  lengthId: 'ongoing',
  startDate: null,
  serviceId: 'autopilot',
  meal: 'dinner',
  guests: 4,
  groceryMode: 'client',
}

export const fmt = (n: number) => `${CURRENCY} ${n.toLocaleString('en-US')}`

/** The transparency block under the price. */
export const FEE_INCLUDES = [
  'Chef time', 'Chef matching', 'Household onboarding', 'Food Profile', 'Account manager',
  'Quality follow-up', 'Schedule management', 'Replacement support', 'Access to additional staff', 'Long-term specialist access',
] as const
export const FEE_SEPARATE = [
  'Groceries', 'Direct grocery transport / delivery', 'Additional assistants', 'Overtime', 'Specialist chef sessions', 'Extra event staffing',
] as const

export const SPECIALISTS = ['Japanese / Sushi', 'Italian', 'French', 'Pastry', 'Indian', 'BBQ', 'Special dietary specialists'] as const

export const PRICING_FAQS = [
  { q: 'What is the minimum long-term booking?', a: '30 days and at least four chef services per month.' },
  { q: 'Can I have the same chef every week?', a: 'Yes. Recurring plans are built around a regular assigned chef whenever possible; at five or more days a week the arrangement is dedicated, with chef capacity substantially reserved around your schedule.' },
  { q: 'Can I choose my days?', a: 'Yes. You set the days, and the chef is built around them.' },
  { q: 'Can I move a scheduled day?', a: `Yes — with at least ${RESCHEDULE_NOTICE_HOURS} hours’ notice, a scheduled service can be moved within the current billing month, subject to chef availability. With less than ${RESCHEDULE_NOTICE_HOURS} hours’ notice the service remains chargeable, because the chef’s day was already held for your house. The supplier who employs the chef works to the same ${RESCHEDULE_NOTICE_HOURS} hours, so nobody is told two different rules.` },
  { q: 'Are groceries included?', a: 'The shopping cost is separate and charged at actual cost. Grocery management — planning, shopping or ordering, receipts — is included in Kitchen on Autopilot and Full-Day plans, and can be added to Fresh Meal and Food Prep.' },
  { q: 'Does myCHEF mark up groceries?', a: 'No. Groceries and any direct delivery or transport costs are charged at actual cost. myCHEF adds no percentage.' },
  { q: 'How many people are included?', a: 'Up to eight people are included in the chef price. From nine, the calculator adds assistants automatically: one from 9 to 19, two from 20 to 29, three from 30 to 39. From 40 we review staffing with you.' },
  { q: 'Can you cook for children separately?', a: 'Yes. What the children eat — timing, refusals, allergies — sits in the Food Profile, and the chef plans around it.' },
  { q: 'Can you handle allergies?', a: 'Allergies are part of onboarding and the Food Profile. Halal sourcing is the default. If a request is professionally unsafe, safety comes before preference.' },
  { q: 'Can I change my chef?', a: 'Yes. A wrong match is changed; the Food Profile stays with the household so the next chef is not starting from zero.' },
  { q: 'What happens if my chef is sick?', a: 'Replacement support is part of the fee. The next chef is briefed from your Food Profile. If an equivalent chef is not available, we tell you and give you the options.' },
  { q: 'Can I request a Japanese or sushi specialist?', a: 'Yes. After one month with myCHEF, long-term clients can request specialists for occasional services — Japanese and sushi, Italian, French, pastry, Indian, BBQ and dietary specialists. They are priced separately depending on the specialist.' },
  { q: 'Can I book seven days every week?', a: 'Yes. Seven-day coverage uses rotation so quality does not depend on one person working without rest.' },
  { q: 'Can I have more than nine hours per day?', a: 'Up to around ten hours can generally be handled by the same chef depending on availability. Beyond that we design overlapping shifts — Extended Coverage — so the service stays consistent without an excessive working day for one person.' },
] as const

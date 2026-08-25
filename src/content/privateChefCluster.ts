import { computeQuote, DEFAULT_INPUT } from './privateChefPricing'

/** Nested household-chef cluster under the existing authority URL. */
export const CLUSTER_ROOT = '/private-chef-dubai' as const

export const CLUSTER_PATHS = {
  overview: CLUSTER_ROOT,
  howItWorks: `${CLUSTER_ROOT}/how-it-works`,
  ourChefs: `${CLUSTER_ROOT}/our-chefs`,
  quality: `${CLUSTER_ROOT}/quality-training`,
  privacy: `${CLUSTER_ROOT}/privacy-security`,
  pricing: `${CLUSTER_ROOT}/pricing`,
  /** Support page for pricing (plain-English plan rules). Linked, not a nav item — CLUSTER_NAV stays at six. */
  planTerms: `${CLUSTER_ROOT}/how-your-plan-works`,
} as const

export type ClusterPath = (typeof CLUSTER_PATHS)[keyof typeof CLUSTER_PATHS]

export const CLUSTER_NAV = [
  {
    href: CLUSTER_PATHS.overview,
    label: 'Private Chef Dubai',
    description: 'The complete household chef service',
    owns: 'Private Chef Dubai',
  },
  {
    href: CLUSTER_PATHS.howItWorks,
    label: 'How It Works',
    description: 'How to get a cook — and keep one',
    owns: 'Managed private chef service',
  },
  {
    href: CLUSTER_PATHS.ourChefs,
    label: 'Our Chefs',
    description: 'Selection, levels and matching',
    owns: 'Chef selection and matching',
  },
  {
    href: CLUSTER_PATHS.quality,
    label: 'Quality & Training',
    description: 'How standards stay consistent',
    owns: 'Chef quality and training',
  },
  {
    href: CLUSTER_PATHS.privacy,
    label: 'Privacy & Security',
    description: 'Trust inside your home',
    owns: 'Private chef privacy and security',
  },
  {
    href: CLUSTER_PATHS.pricing,
    label: 'Pricing & Plans',
    description: 'Home chef plans and prices',
    owns: 'Private Chef Dubai prices',
  },
] as const

export const INQUIRY_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-dubai'
export const FIND_CHEF_LABEL = 'Find Your Chef'

/** Structural price examples for the parent, computed by the single pricing engine (src/content/privateChefPricing.ts). */
const preview = (serviceId: 'fresh-meal' | 'autopilot' | 'full-day', daysPerWeek: number) =>
  computeQuote({ ...DEFAULT_INPUT, serviceId, daysPerWeek, guests: 4 })
const pFresh = preview('fresh-meal', 1)
const pAuto = preview('autopilot', 5)
const pFull = preview('full-day', 5)

export const pricingPreview = [
  { id: 'part-time', label: 'Part-time household', rhythm: 'One fresh meal a week', format: pFresh.service.name, days: 1, monthly: pFresh.perMonth, note: 'Same chef, one cooked meal a week — the smallest long-term plan.' },
  { id: 'regular', label: 'Regular household', rhythm: 'Kitchen on Autopilot, five days a week', format: pAuto.service.name, days: 5, monthly: pAuto.perMonth, note: 'Planning, shopping, cooking and cleanup handled — the managed kitchen.' },
  { id: 'full', label: 'Full household arrangement', rhythm: 'Full-day chef, five days a week', format: pFull.service.name, days: 5, monthly: pFull.perMonth, note: 'The kitchen staffed through the day, in this house’s rhythm.' },
] as const

/**
 * ============================================================================
 * KEYWORD SYSTEM — Private Chef cluster (mychef.ae, UAE market)
 * ============================================================================
 *
 * HOW IT WORKS — four rules:
 *
 *  1. ONE PRIMARY PER PAGE. Each page owns exactly one primary keyword and is
 *     the only page in the cluster allowed to target it. This is what stops the
 *     six pages competing with each other for the same query.
 *
 *  2. SECONDARIES MAY REPEAT. A secondary can appear on several pages. Only
 *     primaries are exclusive. ("chef cook" is secondary on two pages — fine.)
 *
 *  3. PRIMARY MUST APPEAR IN FOUR PLACES to count as owned:
 *       title -> description -> h1/subtitle -> body copy
 *     Meta alone does not win the term. See KEYWORD_PLACEMENT below for the
 *     current state of each page against this rule.
 *
 *  4. INTENT DECIDES PLACEMENT, NOT VOLUME. "chef dubai" is the largest term in
 *     the market (720/mo) but is informational — it sits as a hub SECONDARY so
 *     it cannot dilute the hub's commercial primary "private chef dubai" (320).
 *     Chasing the bigger number here would cost conversions.
 *
 * RELATEDNESS MODEL — why each keyword sits where it does:
 *
 *     cook / cooking          -> how-it-works   (process language: "get a cook")
 *     chef identity + hiring  -> our-chefs      ("hire", "personal chef", cuisine)
 *     standards + diet        -> quality        ("healthy", "food chef")
 *     household + trust       -> privacy        ("for family", "agency")
 *     money + commitment      -> pricing        ("home chef", "hire", "part time")
 *     category head terms     -> hub            ("private chef dubai", "services")
 *
 *   The split follows SEARCHER LANGUAGE, not internal product naming. Someone
 *   typing "cook in dubai" is earlier in the funnel and asking HOW; someone
 *   typing "personal chef dubai" is choosing WHO. Different pages, by design.
 *
 * SCOPE: Private Chef cluster only (/private-chef-dubai/*). These locks do not
 * apply to, and must not be copied into, other sections of the site.
 *
 * DATA: Semrush UAE export 2026-08-25. Volumes are monthly UAE searches, KD is
 * keyword difficulty (0-100). Do not add a keyword here without a measured
 * volume — unvalidated terms are what produced the previous mis-targeting.
 *
 * EXCLUDED as unusable: "my chef" / "mon chef" (brand + French navigational),
 * "home chef" bare (US meal-kit brand), "easy chef", "a chef" (no intent).
 * ============================================================================
 */

/**
 * Placement state per page, against rule 3 above. Updated 2026-08-25.
 * `body: false` means the primary is in meta but NOT yet in visible page text —
 * the term is claimed but not yet fully owned.
 */
export const KEYWORD_PLACEMENT = {
  overview:   { title: true, description: true, heading: true, body: true },
  howItWorks: { title: true, description: true, heading: false, body: true },
  ourChefs:   { title: true, description: true, heading: false, body: true },
  quality:    { title: true, description: true, heading: false, body: true },
  privacy:    { title: true, description: true, heading: false, body: true },
  pricing:    { title: true, description: true, heading: false, body: true },
} as const

/**
 * KEYWORD LOCKS — Private Chef cluster (mychef.ae, UAE market).
 *
 * Each page OWNS its primary keyword exclusively. Do not target another page's
 * primary anywhere in this cluster: that is what causes self-cannibalisation.
 * Secondaries may repeat across pages; primaries may not.
 *
 * Volumes are monthly UAE searches from the Semrush export (2026-08-25).
 * KD = keyword difficulty. Source of truth for all titles, H1s and meta below.
 *
 * Excluded as unusable: "my chef" / "mon chef" (brand + French navigational),
 * "home chef" (US meal-kit brand), "easy chef", "a chef" (no commercial intent).
 */
export const KEYWORD_LOCKS = {
  overview: {
    primary: { keyword: 'private chef dubai', volume: 320, kd: 23, intent: 'commercial' },
    secondary: [
      { keyword: 'chef dubai', volume: 720, kd: 29, intent: 'informational' },
      { keyword: 'private chef', volume: 170, kd: 17, intent: 'commercial' },
      { keyword: 'private chef services', volume: 20, kd: 0 },
      { keyword: 'private chef agency', volume: 20, kd: 0 },
      { keyword: 'private chef for dinner party', volume: 20, kd: 0 },
      { keyword: 'private bbq chef', volume: 20, kd: 0 },
    ],
  },
  howItWorks: {
    primary: { keyword: 'cook in dubai', volume: 320, kd: 16, intent: 'informational' },
    secondary: [
      { keyword: 'chef cook', volume: 260, kd: 22, intent: 'informational' },
      { keyword: 'personal cook dubai', volume: 70, kd: 29, intent: 'commercial' },
      { keyword: 'part time cook in dubai', volume: 40, kd: 13, intent: 'informational' },
    ],
  },
  ourChefs: {
    primary: { keyword: 'personal chef dubai', volume: 70, kd: 22, intent: 'commercial' },
    secondary: [
      { keyword: 'hire a chef', volume: 70, kd: 19, intent: 'informational' },
      { keyword: 'hire chef dubai', volume: 30, kd: 19, intent: 'commercial' },
      { keyword: 'indian chef dubai', volume: 30, kd: 20, intent: 'informational' },
      { keyword: 'looking for chef', volume: 30, kd: 22, intent: 'informational' },
    ],
  },
  quality: {
    primary: { keyword: 'healthy food chef', volume: 30, kd: 13, intent: 'informational' },
    secondary: [
      { keyword: 'food chef', volume: 110, kd: 23, intent: 'informational' },
      { keyword: 'chef cook', volume: 260, kd: 22, intent: 'informational' },
    ],
  },
  privacy: {
    primary: { keyword: 'private chef for family', volume: 20, kd: 0 },
    secondary: [
      { keyword: 'private chef agency', volume: 20, kd: 0 },
      { keyword: 'hire a chef', volume: 70, kd: 19, intent: 'informational' },
    ],
  },
  pricing: {
    primary: { keyword: 'private chef dubai prices', volume: null, kd: null, intent: 'commercial' }, // owner decision 2026-08-25; hub keeps "private chef dubai"
    secondary: [
      { keyword: 'home chef dubai', volume: 50, kd: 19, intent: 'commercial' },
      { keyword: 'private chef hire', volume: 30, kd: 9, intent: 'informational' },
      { keyword: 'personal cook dubai', volume: 70, kd: 29, intent: 'commercial' },
      { keyword: 'part time cook in dubai', volume: 40, kd: 13, intent: 'informational' },
    ],
  },
} as const

/** LOCKED: "private chef dubai" (320/mo). Secondary: "chef dubai" (720/mo), "private chef" (170/mo). */
export const parentSeo = {
  /** Rendered inside the H1 as an eyebrow span — the locked keyword stays in the heading. */
  eyebrow: 'Private Chef Dubai',
  title: 'Private Chef Dubai | Private Chef Services for Your Home | myCHEF',
  description:
    'Private chef Dubai for a standing household: the same chef weekly, a Food Profile that travels, backup if they are off. Plans from AED 3,000 a month.',
  h1: 'Your chef. Your household. Already understood.',
  subtitle:
    'A managed private chef service built around how your home actually eats. One Food Profile, consistent standards, and backup handled for you.',
}

export const childSeo = {
  // LOCKED: "cook in dubai" (320/mo). Secondary: "chef cook", "personal cook dubai", "part time cook in dubai".
  howItWorks: {
    title: 'How to Get a Cook in Dubai | Managed Chef Service | myCHEF',
    description:
      'How to get a cook in Dubai on a standing plan: the brief, the match, the Food Profile, onboarding and feedback. Full-time or part time cook in Dubai, managed for you.',
    h1: 'A private chef, without becoming the manager.',
    subtitle:
      'Tell us how your household eats. We match the chef, build the Food Profile and stay behind the service as routines, preferences and people change.',
    eyebrow: 'How It Works',
  },
  // LOCKED: "personal chef dubai" (70/mo). Secondary: "hire a chef", "hire chef dubai", "indian chef dubai".
  ourChefs: {
    title: 'Personal Chef Dubai | Chef Selection & Matching | myCHEF',
    description:
      'How to hire a chef in Dubai through myCHEF: identity checks, a practical cooking assessment, references and chef levels. Find a personal chef in Dubai matched to your household.',
    h1: 'We do not find a chef. We find your chef.',
    subtitle:
      'Cooking experience matters. Household fit matters just as much. We assess ability, verify the person behind the CV and match both to the way your home actually runs.',
    eyebrow: 'Our Chefs',
  },
  // LOCKED: "healthy food chef" (30/mo). Secondary: "food chef" (110/mo), "chef cook" (260/mo).
  quality: {
    title: 'Chef Quality & Training | Healthy Food Standards Dubai | myCHEF',
    description:
      'How myCHEF keeps chef quality stable in Dubai homes: what we measure before placement, dietary standards, and when the match should change.',
    h1: 'Good on day one is not enough.',
    subtitle:
      'The real test is consistency. We review the food, service and household fit over time, then coach, adjust or change the match when something is not working.',
    eyebrow: 'Quality & Training',
  },
  // LOCKED: "private chef for family" (20/mo). Secondary: "private chef agency", "hire a chef".
  privacy: {
    title: 'Private Chef for Family in Dubai | Privacy & Security | myCHEF',
    description:
      'Hiring a private chef for your family in Dubai: who enters your home, what myCHEF checks, and how discretion and household access are handled.',
    h1: 'Your home changes the standard.',
    subtitle:
      'A private chef works inside your personal space. That is why identity, references, right-to-work checks and ongoing management are part of the service, not an afterthought.',
    eyebrow: 'Privacy & Security',
  },
  // LOCKED: "private chef dubai prices" (owner decision 2026-08-25). Secondary: "home chef dubai", "private chef hire", "personal cook dubai", "part time cook in dubai".
  pricing: {
    title: 'Build Your Private Chef Plan in Dubai | Hours, Days & Cover | myCHEF',
    description:
      'Private chef Dubai prices for short stays (3–29 days) and long-term household plans (30+ days). Choose the service, the chef level and the days — see your price before you enquire.',
    h1: 'Private Chef Dubai Prices',
    subtitle:
      'Choose how long you need your chef, how often they should come, and how much of your kitchen you want us to manage. See the price before you enquire.',
    eyebrow: 'Pricing & Plans',
  },
} as const

export const householdProblems = [
  {
    title: 'I want the same chef regularly',
    body: 'Continuity is the product. We match one chef to this house and keep that person — with a system behind them if the week is not normal.',
  },
  {
    title: 'I need meals several days a week',
    body: 'One, three or five days. Whether you want a part time cook in Dubai or a full week covered, the standing plan is built around the days this house actually needs, not a full-time hire you then have to occupy.',
  },
  {
    title: 'I need breakfast, lunch or dinner as the house runs',
    body: 'Choose the meal that matters, or the whole day. Working time is defined before we start, so “daily” never means one thing to you and another to the chef.',
  },
  {
    title: 'I do not want another person to manage',
    body: 'Matching, feedback, absence and replacement sit with us. You are not the scheduler, the backup plan, or HR for the person who cooks.',
  },
  {
    title: 'I need the kitchen to keep running if they are off',
    body: 'Backup is part of the service. The Food Profile travels with the house, so the next chef is not starting from zero at the door.',
  },
  {
    title: 'I need this for a family, a villa, or a long stay',
    body: 'A standing private chef in a Dubai home — not a one-night dinner. Our private chef services are built for households that eat here week after week, not for single events.',
  },
] as const

export const systemCards = [
  {
    href: CLUSTER_PATHS.howItWorks,
    label: 'How It Works',
    title: 'The brief, the match, the Food Profile, and backup when the week is not normal.',
  },
  {
    href: CLUSTER_PATHS.ourChefs,
    label: 'Our Chefs',
    title: 'Who we put forward for this house, and how the match is made.',
  },
  {
    href: CLUSTER_PATHS.quality,
    label: 'Quality & Training',
    title: 'How the standard holds after month four — not only on day one.',
  },
  {
    href: CLUSTER_PATHS.privacy,
    label: 'Privacy & Security',
    title: 'Who enters the home, what they need to know, and what they do not.',
  },
  {
    href: CLUSTER_PATHS.pricing,
    label: 'Pricing & Plans',
    title: 'Chef, schedule and household — then a monthly figure in writing.',
  },
] as const

export const rhythmOptions = [
  { label: 'A few days a week', href: CLUSTER_PATHS.pricing },
  { label: 'Most weekdays', href: CLUSTER_PATHS.pricing },
  { label: 'Every day', href: CLUSTER_PATHS.pricing },
  { label: 'Breakfast only', href: CLUSTER_PATHS.pricing },
  { label: 'Breakfast and dinner', href: CLUSTER_PATHS.pricing },
  { label: 'Full day in the house', href: CLUSTER_PATHS.pricing },
  { label: 'Same chef, specialist when needed', href: CLUSTER_PATHS.howItWorks },
  { label: 'A schedule for this house', href: CLUSTER_PATHS.pricing },
] as const

export const trustPreview = [
  { label: 'Identity', body: 'Government-issued ID and right-to-work, before anyone is put forward for the house.' },
  { label: 'Practical assessment', body: 'A cook-off, not a conversation about cooking.' },
  { label: 'Household fit', body: 'Matched to this kitchen, this rhythm and these people — not the longest CV.' },
  { label: 'One contact', body: 'Feedback, absence and replacement go through your household manager, not through you as HR.' },
] as const

export const foodProfilePreview = [
  { k: 'Breakfast', v: '08:00' },
  { k: 'Children', v: 'No mushrooms' },
  { k: 'Allergy', v: 'Sesame — never' },
  { k: 'Spice', v: '3 / 5' },
  { k: 'Weekdays', v: 'High protein' },
  { k: 'Coffee', v: 'Flat white, oat milk' },
  { k: 'Friday', v: 'Guests often join' },
  { k: 'Service', v: 'Quiet mornings' },
] as const

export const parentFaqs = [
  {
    q: 'What is a private chef in Dubai?',
    a: 'At myCHEF, a private chef is a standing household arrangement: the same chef in your home, matched, assessed and managed. A single dinner is catering. This page is for a chef who comes back. See [how the household chef system works](/private-chef-dubai/how-it-works).',
  },
  {
    q: 'Can I have the same chef every week?',
    a: 'Normally yes. We build the plan around one chef. If they are off, or the match is wrong, the Food Profile travels and myCHEF coordinates continuity. Read [how replacement works](/private-chef-dubai/how-it-works).',
  },
  {
    q: 'What happens if my chef is unavailable?',
    a: 'Backup is part of the service. The next chef is briefed from the Food Profile, not from a conversation at your door. If an equivalent chef is not available, we tell you and give you the options. We do not fill a slot with whoever is free.',
  },
  {
    q: 'What is the Food Profile?',
    a: 'The record of how this house eats — timing, children, allergies, spice, coffee, guests, service style. Tell us once. When the chef changes, this is what travels. See [how the Food Profile is built](/private-chef-dubai/how-it-works).',
  },
  {
    q: 'Can the chef shop, and cook for children?',
    a: 'Yes. Shopping can be a proper part of the role; groceries are charged at actual receipts. What the children will eat — including refusals and allergies — sits in the Food Profile. Grocery hours and rates are on [Pricing & Plans](/private-chef-dubai/pricing).',
  },
  {
    q: 'Can I change chefs or add a specialist?',
    a: 'Yes. A wrong match is changed; the Food Profile stays with the house. Keep the weekday chef and add a specialist for the meal that needs one — you should not recruit that person yourself. See [quality and matching](/private-chef-dubai/quality-training) and [how rotation works](/private-chef-dubai/how-it-works).',
  },
  {
    q: 'Can you accommodate allergies?',
    a: 'Allergies are part of the Food Profile, not an afterthought. Halal sourcing is the default. We do not claim an allergic reaction can never happen. If a request is professionally unsafe, safety comes before preference.',
  },
  {
    q: 'How much does a household chef cost?',
    a: 'From AED 750 per service at Professional Chef level — a Fresh Meal (3 hours) once a week is AED 3,000 a month before VAT. Private Chef Food Prep (4h) is from AED 900, Kitchen on Autopilot (5h) from AED 1,050 and a Full-Day Private Chef (9h) from AED 1,500. Long-term rates improve with services per month; short stays of 3–29 days carry a higher daily rate. Build your figure on [Pricing & Plans](/private-chef-dubai/pricing). A one-night dinner is [catering](/catering-dubai).',
  },
] as const

export const howItWorksFaqs = [
  {
    q: 'How do I get a cook in Dubai for my household?',
    a: 'Describe the household to us: days, meals, people, kitchen. We define the role, match a chef, build your Food Profile, start service, then review. Feedback updates the profile and the chef’s record. When the house changes, the system adapts — you are not rebuilding the kitchen from scratch.',
  },
  {
    q: 'Can I get a part time cook in Dubai?',
    a: 'Yes. Long-term plans start at one day a week — four chef visits a month — from AED 3,000 a month for a weekly Fresh Meal. Same matching, same Food Profile, same backup as a full week. Rates are on [Pricing & Plans](/private-chef-dubai/pricing).',
  },
  {
    q: 'What is the Food Profile?',
    a: 'The record of how this house eats: timing, allergies, children, spice, coffee, guests, service style. If information does not help us cook for you, we do not need it. The profile is yours — see it, correct it, or ask for it to be deleted. When the chef changes, this is what travels.',
  },
  {
    q: 'Do I have to manage the chef myself?',
    a: 'No. Once you are an ongoing client, one household manager is your contact. Unavailability, specialists, Saturday guests and something that was not right go through that person — not through you becoming HR.',
  },
  {
    q: 'What if the usual chef is off?',
    a: 'The replacement is selected against the Food Profile, not against a blank slate. If an equivalent chef is not available, we tell you and give you the options.',
  },
] as const

export const ourChefsFaqs = [
  {
    q: 'How do you select a personal chef in Dubai?',
    a: 'Identity and right-to-work, a practical cooking assessment, references, then a match to this household’s cuisine, rhythm and personality. A restaurant title is history. A myCHEF level is evidence from assessment and verified placements.',
  },
  {
    q: 'What are the chef levels?',
    a: 'Professional Chef for strong everyday household cooking — displayed prices start here. Senior Chef for more demanding houses. Specialists for particular cuisines, booked for the occasion. Lead Chef for large events, by arrangement. Higher is not automatically better for you.',
  },
  {
    q: 'Will I meet the chef before they start?',
    a: 'You see the chef’s verified profile and approve before anything starts. New chefs start Provisional until real households confirm them. High-stakes evenings are not the first time we see someone work in a real kitchen.',
  },
  {
    q: 'How do I hire a chef in Dubai through myCHEF?',
    a: 'Tell us how the house eats and what the role covers. We match within the right level, you see the chef’s verified profile and the full price in writing, and you approve before anyone starts. You are not interviewing strangers, and you are not putting a chef on your payroll.',
  },
  {
    q: 'Do you have Indian, Japanese or Italian chefs in Dubai?',
    a: 'Yes — the network covers Indian, Japanese, Italian, Thai, Arabic, French, Filipino and more. Cuisine is matched alongside level, personality and household fit, and a specialist can join for one meal alongside your regular chef.',
  },
] as const

export const qualityFaqs = [
  {
    q: 'How do you keep quality consistent?',
    a: 'We assess before placement, then review after service. What you say about the food updates the Food Profile. What you say about the chef updates their verified performance record. A rating starts a conversation — not a punishment machine.',
  },
  {
    q: 'What happens after a low rating?',
    a: 'One score that is off is a conversation. A repeated problem is a pattern. A pattern gets coaching, a new match, or a chef who does not come back. Safety failures put a chef on hold immediately, regardless of their overall score.',
  },
  {
    q: 'Can I get a healthy food chef in Dubai?',
    a: 'Yes — but “healthy” is defined by your house, not by a generic programme. What healthy means here goes into the Food Profile — high-protein weekdays, allergies, what the children eat — and every service is reviewed against it. A nutrition specialist can be added when the brief calls for one.',
  },
  {
    q: 'Do you train chefs after they join?',
    a: 'Yes. Private-household work is a different job from a restaurant brigade. Chefs go through practical assessment, household onboarding for each house, and ongoing review. Structured modules also sit in our [Chef Training Academy](/chef-training-academy). Training is not a substitute for a bad match.',
  },
] as const

export const privacyFaqs = [
  {
    q: 'Is this suitable as a private chef for family homes with children?',
    a: 'Yes — family households are the core of the service. Children’s food, allergies and school-week timing sit in the Food Profile. Conduct is explicit: children are cooked for, not performed at, and the chef’s access is limited to the kitchen and the rooms the job requires.',
  },
  {
    q: 'Are you a private chef agency?',
    a: 'Not in the usual sense. An agency introduces CVs and steps away once someone is hired. Independent licensed partners cook; myCHEF stays in the assignment — the match, the checks, feedback, backup and one contact for the household.',
  },
  {
    q: 'What checks do you run before a chef enters my home?',
    a: 'Government-issued identification, valid UAE visa status and right-to-work documents; a practical cooking assessment; references from previous employers, clients or venues; and food-hygiene awareness. PIC certification is preferred, not claimed as universal. We do not publish guarantees we cannot operate.',
  },
  {
    q: 'How do you handle discretion?',
    a: 'The chef needs to know how the house eats, who lives there, allergies, timing and how you like to be served. They do not need family business, finances, or anything that is not required to cook and work safely in the kitchen. Issues go through your household manager, not through a confrontation at the stove.',
  },
  {
    q: 'What happens when a chef’s assignment ends?',
    a: 'Access ends with the assignment. The Food Profile stays with the household. The next chef is briefed from that record, not from informal handover at your door. We only describe procedures we actually run.',
  },
] as const

export const pricingFaqs = [
  {
    q: 'What does a private chef in Dubai cost?',
    a: 'From AED 750 per service at Professional Chef level. Fresh Meal (3 hours) from AED 750, Private Chef Food Prep (4h) from AED 900, Kitchen on Autopilot (5h) from AED 1,050 and a Full-Day Private Chef (9h) from AED 1,500. Head Chef rates are higher. Long-term rates improve with the number of services a month; short stays of 3–29 days carry a higher daily rate. Groceries are charged at actual cost with no markup. Build the exact figure on [Pricing & Plans](/private-chef-dubai/pricing).',
  },
  {
    q: 'Can I book a private chef for less than a month?',
    a: 'Yes — at 1.5× the ongoing-plan rate. Displayed prices are for ongoing household plans of at least one month, because most of our work happens at the beginning. A single dinner is catering — use the [catering pages](/catering-dubai) or [event private chef prices](/private-chef-prices-dubai).',
  },
  {
    q: 'Who buys the groceries?',
    a: 'Your choice. Normally you provide the groceries and the chef’s three hours go into preparation and cooking. If you want us to take over the complete food process, Daily Prep becomes a five-hour service. The groceries themselves are charged at the exact receipts — we add no markup.',
  },
  {
    q: 'What does a home chef in Dubai cost per month?',
    a: 'Long-term plans start at AED 3,000 a month — one Fresh Meal a week at Professional level. Kitchen on Autopilot five days a week is about AED 20,350 a month at the Dedicated Household Rate, and a Full-Day Private Chef five days a week about AED 29,040. Groceries are charged at actual cost. The calculator on [Pricing & Plans](/private-chef-dubai/pricing) shows your own figure.',
  },
  {
    q: 'Is private chef hire cheaper than employing a cook myself?',
    a: 'A direct hire can look cheaper per hour, but you carry the unpaid work: finding, vetting, backup, admin and quality review. Private chef hire through myCHEF includes that system — and you pay only for the days the house actually needs, from one day a week, instead of occupying a full-time salary.',
  },
  {
    q: 'Is VAT included in the prices?',
    a: 'Prices on this page are shown before VAT. 5% VAT is shown separately on your invoice.',
  },
  {
    q: 'How is this different from private chef prices for an event?',
    a: 'This page is standing household plans. One night, a birthday, a yacht or clients for an evening is a different product — see [private chef prices for events](/private-chef-prices-dubai) and [catering in Dubai](/catering-dubai).',
  },
] as const

export const informationBoundaries = [
  {
    need: 'What the chef needs to know',
    items: [
      'Who lives in the house, and who eats',
      'Allergies and foods that must never appear',
      'Timing, service style, and how the children eat',
      'Kitchen layout, and who else works in the house',
      'Guests when they affect the meal',
    ],
  },
  {
    need: 'What they do not need to know',
    items: [
      'Family business or finances',
      'Arguments, medical history unrelated to food, or private correspondence',
      'Access beyond the kitchen and the rooms required to serve',
      'Anything you have not chosen to put in the Food Profile',
    ],
  },
] as const

export const householdConduct = [
  'Family members are treated as the household — not as an audience.',
  'Children are cooked for, not performed at.',
  'Other household staff are colleagues in the same house, not a hierarchy to exploit.',
  'Guests are served to the standard you have set, then the kitchen is handed back.',
  'Personal property stays where it is. The chef’s job is the food and the kitchen.',
] as const

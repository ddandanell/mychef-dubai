import { computeQuote, DEFAULT_INPUT, fmt } from './privateChefPricing'

/** Nested household-chef cluster under the existing authority URL. */
export const CLUSTER_ROOT = '/private-chef-dubai' as const

export const CLUSTER_PATHS = {
  overview: CLUSTER_ROOT,
  howItWorks: `${CLUSTER_ROOT}/how-it-works`,
  ourChefs: `${CLUSTER_ROOT}/our-chefs`,
  quality: `${CLUSTER_ROOT}/quality-training`,
  privacy: `${CLUSTER_ROOT}/privacy-security`,
  /**
   * One pricing owner. Google already indexes this nested URL (152 impr).
   * /private-chef-prices-dubai 301s here. Cluster links go to this path,
   * never through the redirect.
   */
  pricing: '/private-chef-dubai/pricing',
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
    description: 'How to get a chef — and keep one',
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

/** Global header only. Household support URLs stay on ClusterNav, not sitewide. */
export const GLOBAL_CLUSTER_NAV = [
  CLUSTER_NAV[0],
  CLUSTER_NAV[1],
  {
    href: '/our-chefs',
    label: 'Our Chefs',
    description: 'The vetted myCHEF network',
    owns: 'Private chefs Dubai',
  },
  CLUSTER_NAV[5],
] as const

export const INQUIRY_HREF = '/inquiry?from=/private-chef-dubai'
export const FIND_CHEF_LABEL = 'Request a household chef'

/** Structural price examples for the parent, computed by the single pricing engine (src/content/privateChefPricing.ts). */
const preview = (serviceId: 'fresh-meal' | 'autopilot' | 'full-day', daysPerWeek: number) =>
  computeQuote({ ...DEFAULT_INPUT, serviceId, daysPerWeek, guests: 4 })
const pFresh = preview('fresh-meal', 1)
const pAuto = preview('autopilot', 5)
const pFull = preview('full-day', 5)

export const pricingPreview = [
  { id: 'part-time', label: 'Part-time household', rhythm: 'One fresh meal a week', format: pFresh.service.name, days: 1, monthly: pFresh.perMonth, note: 'Same chef, one cooked meal a week — the smallest long-term plan.' },
  { id: 'regular', label: 'Regular household', rhythm: 'Kitchen on Autopilot, five days a week', format: pAuto.service.name, days: 5, monthly: pAuto.perMonth, note: 'Planning, shopping, cooking and cleanup handled — the managed kitchen.' },
  { id: 'full', label: 'Full household arrangement', rhythm: 'Full-day chef, five days a week', format: pFull.service.name, days: 5, monthly: pFull.perMonth, note: 'Someone in the kitchen all day, working to your timetable rather than a fixed shift.' },
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
    // Owner URL is /private-chef-dubai/pricing ("private chef dubai price").
    // These terms describe the calculator section on that page.
    primary: { keyword: 'private chef dubai prices', volume: null, kd: null, intent: 'commercial' }, // owner decision 2026-08-25; hub keeps "private chef dubai"
    secondary: [
      { keyword: 'home chef dubai', volume: 50, kd: 19, intent: 'commercial' },
      { keyword: 'private chef hire', volume: 30, kd: 9, intent: 'informational' },
      { keyword: 'personal cook dubai', volume: 70, kd: 29, intent: 'commercial' },
      { keyword: 'part time cook in dubai', volume: 40, kd: 13, intent: 'informational' },
    ],
  },
} as const

/** pages["/private-chef-dubai"].internal_linking.siblings — render exactly. */
export const PRIVATE_CHEF_SIBLING_LINKS = [
  { href: '/full-time-private-chef-dubai', label: 'Full-time private chef' },
  { href: '/part-time-private-chef-dubai', label: 'Part-time private chef' },
  { href: '/weekly-meal-prep-dubai', label: 'Weekly meal prep' },
  { href: '/private-chef-dubai/pricing', label: 'Private chef prices' },
  { href: '/our-chefs', label: 'Our chefs' },
] as const

export const hubRouteCards = [
  {
    title: 'Standing household chef',
    body: "A regular chef matched to your household, with your preferences recorded in a Food Profile and cover coordinated when your chef is away.",
    href: null as string | null,
    cta: 'You are on the right page',
  },
  {
    title: 'One-night dinner',
    body: "For a one-off dinner party, explore our catering and private dining services, with the menu and service quoted for your occasion.",
    href: '/catering-dubai',
    cta: 'Luxury catering in Dubai',
  },
] as const

/** LOCKED: "private chef dubai". Title/H1/meta from STANDARD; monthly figure from the pricing engine. */
export const parentSeo = {
  /** Gold caption above the H1. Quiet heroes keep this outside the heading. */
  eyebrow: 'Household chef',
  title: `Private Chef Dubai | From ${fmt(pricingPreview[0].monthly)} a Month | myCHEF`,
  description: `A standing private chef for your home in Dubai. Prep, dinner or full-day plans from ${fmt(pricingPreview[0].monthly)} a month. Matched, managed, and replaced if the fit is wrong.`,
  h1: 'Private Chef Dubai: a chef who comes back',
  subtitle:
    "Our private chef service in Dubai brings regular cooking into your household routine. We aim to match you with the same chef each week, record your preferences in a Food Profile and coordinate menus, scheduling and cover. One-off dinners are arranged through our catering and private dining services.",
}

export const childSeo = {
  // LOCKED: "cook in dubai" (320/mo). Secondary: "chef cook", "personal cook dubai", "part time cook in dubai".
  howItWorks: {
    title: 'Managed Private Chef Service Dubai | How It Works | myCHEF',
    description:
      'How to get a cook in Dubai on a standing plan: the brief, the match, the Food Profile, onboarding and feedback. Full-time or part time cook in Dubai, managed for you.',
    h1: "A managed private chef service for your Dubai household.",
    subtitle:
      "Tell us how your household likes to eat. We match the chef, develop your Food Profile and coordinate the service as your preferences and routine evolve.",
    eyebrow: 'How It Works',
  },
  // LOCKED: "personal chef dubai" (70/mo). Secondary: "hire a chef", "hire chef dubai", "indian chef dubai".
  ourChefs: {
    title: 'Chef Selection & Matching | myCHEF',
    description:
      'How myCHEF selects and matches a chef for your Dubai household, with preferences, skill level, trial arrangements and ongoing support explained.',
    h1: 'A chef matched to your household.',
    subtitle:
      'Cooking experience matters. Household fit matters just as much. We assess ability, verify the person behind the CV and match both to the way your home actually runs.',
    eyebrow: 'Our Chefs',
  },
  // LOCKED: "healthy food chef" (30/mo). Secondary: "food chef" (110/mo), "chef cook" (260/mo).
  quality: {
    title: 'Chef Quality & Training | myCHEF',
    description:
      'How myCHEF keeps chef quality stable in Dubai homes: what we measure before placement, dietary standards, and when the match should change.',
    h1: 'Good on day one is not enough.',
    subtitle:
      'The real test is consistency. We review the food, service and household fit over time, then coach, adjust or change the match when something is not working.',
    eyebrow: 'Quality & Training',
  },
  // LOCKED: "private chef for family" (20/mo). Secondary: "private chef agency", "hire a chef".
  privacy: {
    title: 'Privacy & Security in Your Home | myCHEF',
    description:
      'Hiring a private chef for your family in Dubai: who enters your home, what myCHEF checks, and how discretion and household access are handled.',
    h1: 'Your home changes the standard.',
    subtitle:
      "Inviting a chef into your home requires care and trust. Our selection process covers identity, right to work, a practical cooking assessment, references and food hygiene awareness, followed by ongoing review during the service.",
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
    body: 'The same person, week after week. We match one chef to your home and keep them there, with a team behind them for the weeks that do not go to plan.',
  },
  {
    title: 'I need meals several days a week',
    body: 'One, three or five days. Whether you want a part time cook in Dubai or the whole week covered, we build the plan around the days you actually need. Not a full-time hire you then have to keep busy.',
  },
  {
    title: 'I need meals through the day, not one dinner',
    body: 'Choose the meal that matters, or the whole day. Working time is defined before we start, so “daily” never means one thing to you and another to the chef.',
  },
  {
    title: 'I do not want another person to manage',
    body: 'Matching, feedback, absence and replacement sit with us. You are not the scheduler, the backup plan, or HR for the person who cooks.',
  },
  {
    title: 'I need the kitchen to keep running if they are off',
    body: 'Cover is part of the service. Your Food Profile goes to whoever steps in, so they arrive already knowing how you eat.',
  },
  {
    title: 'I need this for a family, a villa, or a long stay',
    body: 'A standing private chef in a Dubai home — not a one-night dinner. Our private chef service in Dubai is built for households that eat here week after week, not for single events.',
  },
] as const

export const systemCards = [
  {
    href: CLUSTER_PATHS.howItWorks,
    label: 'How It Works',
    title: 'The brief, the match, the Food Profile, and backup when the week is not normal.',
  },
  {
    href: '/our-chefs',
    label: 'Our Chefs',
    title: 'Who we send you, and how we choose them.',
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
  { label: 'Full day at home', href: CLUSTER_PATHS.pricing },
  { label: 'Same chef, specialist when needed', href: CLUSTER_PATHS.howItWorks },
  { label: 'A schedule for your home', href: CLUSTER_PATHS.pricing },
] as const

export const trustPreview = [
  { label: 'Identity and credentials', body: 'We choose chefs on experience, and we check the skill and the professionalism of every one before we put them forward for your home.' },
  { label: 'Practical assessment', body: 'A cook-off, not a conversation about cooking.' },
  { label: 'Household fit', body: 'Matched to your kitchen, your routine and your family — not to the longest CV.' },
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
    "q": "What does a household private chef do?",
    "a": "Your chef prepares food in your own kitchen on an agreed schedule, with menus, shopping responsibilities and cleanup set out in the proposal. Choose freshly served meals, preparation for later or broader daily kitchen support."
  },
  {
    "q": "Can I have the same chef each week?",
    "a": "We aim to keep the same chef on your agreed cooking days. Your myCHEF contact coordinates availability and discusses a suitable replacement when needed."
  },
  {
    "q": "What happens if my chef is unavailable?",
    "a": "We look for a suitable available chef and brief them from your Food Profile. If an equivalent match is unavailable, we explain the options. Timing depends on your household needs, the schedule and chef availability."
  },
  {
    "q": "Can the chef shop for groceries?",
    "a": "Yes, where grocery management is included or added to the service. Groceries are charged separately at actual cost. Shopping time, transport and any extra costs are agreed in advance. See the [plan calculator](/private-chef-dubai/pricing#calculator)."
  },
  {
    "q": "Can you cook for children or accommodate allergies?",
    "a": "Share household preferences, children’s meals and all allergies before booking. We discuss the ingredients, kitchen conditions and the severity of any allergy. We cannot guarantee a completely allergen-free environment."
  },
  {
    "q": "How much does the service cost?",
    "a": "Base long-term service fees start at AED 750 for a three-hour Fresh Meal visit and AED 900 for a four-hour Food Prep visit, before 5% VAT. Groceries are separate. Frequency, shopping arrangements and additional staffing affect the estimate; compare the options on [Pricing & Plans](/private-chef-dubai/pricing)."
  },
  {
    "q": "Can I book a chef for one dinner?",
    "a": "Yes. For a single celebration or dinner with guests, explore our [private dining experiences](/luxury-dining-experiences). The household plans on this page are designed for recurring cooking or short-stay arrangements."
  }
] as const

export const howItWorksFaqs = [
  {
    q: 'How do I get a cook in Dubai for my home?',
    a: 'Tell us about your home: the days, the meals, the people, the kitchen. We work out the role, match a chef, build your Food Profile, start the service, then review it. What you tell us updates the profile and the chef’s record. When your home changes, the service changes with it — you are not starting again from scratch.',
  },
  {
    q: 'Can I get a part time cook in Dubai?',
    a: 'Yes. Long-term plans start at one day a week — four chef visits a month — at AED 3,000 a month for a weekly Fresh Meal. Same matching, same Food Profile, same backup as a full week. Rates are on [Pricing & Plans](/private-chef-dubai/pricing#calculator).',
  },
  {
    q: 'What is the Food Profile?',
    a: 'The record of how your home eats: timing, allergies, children, spice, coffee, guests, service style. If it does not help us cook for you, we do not ask for it. The profile is yours — you can see it, correct it, or ask us to delete it. When the chef changes, this is what gets handed over.',
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
    a: 'Identity and right to work, a practical cooking test, references and food-hygiene awareness, then a match to your home’s cuisine, rhythm and personality. A restaurant title tells you where someone has been. A myCHEF level tells you how they have actually cooked — in assessment, and in real placements.',
  },
  {
    q: 'What are the chef levels?',
    a: 'One word for the person who cooks in your home: a professional chef. What has three levels is the standard they are working to. Level 1 is where everyone starts, and the price you see is the price. Consistently strong service across a month reaches Level 2; holding that standard for three months reaches Level 3. Your figure does not move when a chef climbs. Specialists — sushi, or one particular regional kitchen — are booked for the occasion alongside your regular chef. They are an add-on, not a rank.',
  },
  {
    q: 'Will I meet the chef before they start?',
    a: 'Yes. You see the chef’s verified profile and approve before anything starts, and before the first meal your household manager arranges a conversation between you and your chef. New chefs stay Provisional until real households confirm them. An important evening is not the first time we watch someone work in a real kitchen.',
  },
  {
    q: 'How do I hire a chef in Dubai through myCHEF?',
    a: 'Tell us how your home eats and what the role covers. We match within the right level, you see the chef’s verified profile and the full price in writing, and you approve before anyone starts. You are not interviewing strangers, and you are not putting a chef on your payroll.',
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
    a: 'Yes — but “healthy” is whatever it means in your home, not a generic programme. We put your version into the Food Profile — high-protein weekdays, allergies, what the children will actually eat — and review every service against it. A nutrition specialist can be added on request.',
  },
  {
    q: 'Do you train chefs after they join?',
    a: 'Yes — assessment before placement, onboarding for your home, then ongoing review. Structured modules also sit in our [Chef Training Academy](/chef-training-academy). Training is not a substitute for a bad match.',
  },
] as const

export const privacyFaqs = [
  {
    q: 'Is this suitable as a private chef for family homes with children?',
    a: 'Yes — family households are the core of the service. Children’s food, allergies and school-week timing sit in the Food Profile. Conduct is explicit: children are cooked for, not performed at, and the chef’s access is limited to the kitchen and the rooms the job requires.',
  },
  {
    q: 'Are you a private chef agency?',
    a: 'No. An agency introduces CVs and steps away once someone is hired. myCHEF stays in the assignment — the match, the checks (including the visa we ask to see), the score, feedback, backup and one contact for your household. You do not employ anyone, and we are not gone by Monday.',
  },
  {
    q: 'What checks do you run before a chef enters my home?',
    a: 'Four things, before anyone cooks in your home. Government-issued identification, and a valid UAE visa with the right to work — we ask to see the documents themselves. A practical cooking assessment. References from previous employers, clients or venues. And food-hygiene awareness. Person-in-Charge (PIC) food-safety certification is preferred, but we do not claim every chef holds one. We do not publish guarantees we cannot keep.',
  },
  {
    q: 'How do you handle discretion?',
    a: 'The chef needs to know how your family eats, who lives in the home, allergies, timing, and how you like to be served. They do not need your family business, your finances, or anything else that is not required to cook and work safely in your kitchen. If something is wrong it goes to your household manager — not to a confrontation at the stove.',
  },
  {
    q: 'What happens when a chef’s assignment ends?',
    a: 'Access ends with the assignment. Your Food Profile stays with you, and the next chef is briefed from that record rather than from a handover at your door. We only describe procedures we actually run.',
  },
] as const

export const pricingFaqs = [
  {
    q: 'What does a private chef in Dubai cost?',
    a: 'One rate per job: Fresh Meal (3 hours) AED 750, Private Chef Food Prep (4h) AED 900, Kitchen on Autopilot (5h) AED 1,050, Full-Day Private Chef (9h) AED 1,500. There is no more expensive grade of chef to upgrade to — the levels are the chef’s own pay ladder. From five days a week the household rate improves; short stays of 3–29 days carry a higher daily rate. Groceries are charged at actual cost with no markup. Build the exact figure on [Pricing & Plans](/private-chef-dubai/pricing#calculator).',
  },
  {
    q: 'Can I book a private chef for less than a month?',
    a: 'Yes — at 1.5× the ongoing-plan rate. Displayed prices are for ongoing household plans of at least one month, because most of our work happens at the beginning. A single dinner is catering — use the [catering pages](/catering-dubai) or [event private chef prices](/private-chef-dubai/pricing).',
  },
  {
    q: 'Who buys the groceries?',
    a: 'Your choice. Normally you provide the groceries and the chef’s three hours go into preparation and cooking. If you want us to take over the complete food process, Daily Prep becomes a five-hour service. The groceries themselves are charged at the exact receipts — we add no markup.',
  },
  {
    q: 'What does a home chef in Dubai cost per month?',
    a: "Long-term plans start at AED 3,000 a month for one Fresh Meal visit each week. Kitchen on Autopilot is AED 16,800 for 16 visits or AED 18,500 for 20 visits at the Dedicated Household Rate. A Full-Day Private Chef for 20 visits is AED 26,400. Groceries are charged at actual cost. See [Pricing & Plans](/private-chef-dubai/pricing#calculator) for the current calculation and VAT.",
  },
  {
    q: 'Is private chef hire cheaper than employing a cook myself?',
    a: "A managed plan includes chef selection, scheduling, backup coordination and quality reviews. Choose the days your household needs, starting from one visit a week, and compare the complete scope with the responsibilities of a direct hire.",
  },
  {
    q: 'Is VAT included in the prices?',
    a: 'Prices on this page are shown before VAT. 5% VAT is shown separately on your invoice.',
  },
  {
    q: 'How is this different from private chef prices for an event?',
    a: "Household plans cover regular cooking at home. For a birthday, yacht celebration or one-off private dinner, see our [catering options](/catering-dubai) and request a proposal for your occasion.",
  },
] as const

export const informationBoundaries = [
  {
    need: 'What the chef needs to know',
    items: [
      'Who lives in your home, and who eats there',
      'Allergies and foods that must never appear',
      'Timing, service style, and how the children eat',
      'The kitchen layout, and who else works in your home',
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
  'Family members are people to cook for — not an audience.',
  'Children are cooked for, not performed at.',
  'Your other staff are colleagues in the same home, not people to be ordered around.',
  'Guests are served to the standard you have set, then the kitchen is handed back.',
  'Personal property stays where it is. The chef’s job is the food and the kitchen.',
] as const

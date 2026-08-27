import { SERVICES } from './privateChefPricing'

export const PAGE_PATH = '/private-chef-dubai'
export const CAMPAIGN = 'private-chef-dubai'

export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-US')}`
}

/** Monthly figure for a standing plan: (per-service + optional zone fee) × 4 weeks × days. */
export function monthlyFrom(perService: number, daysPerWeek: number, zoneFee = 0): number {
  return (perService + zoneFee) * 4 * daysPerWeek
}

/** Entry long-term figure: Professional Chef, one Fresh Meal a week. From the pricing engine. */
export const ENTRY_MONTHLY = monthlyFrom(SERVICES[0].rate, 1)

export const SEO_TITLE = `Private Chef Dubai | From ${formatAed(ENTRY_MONTHLY)} a Month | myCHEF`
export const SEO_DESCRIPTION =
  `A standing private chef for the household in Dubai. Prep, dinner or full-day plans from ${formatAed(ENTRY_MONTHLY)} a month. Matched, managed and replaced if the fit is wrong.`
export const H1 = 'Private Chef Dubai — a chef who comes back'
export const HERO_IMAGE = '/images/private-chef-dubai-hero.webp'
export const HERO_IMAGE_WIDTH = 1280
export const HERO_IMAGE_HEIGHT = 720

export const photos = [
  {
    src: '/images/private-chef-dubai-hero.webp',
    alt: 'Private chef cooking at the island of a contemporary Dubai villa kitchen at golden hour, dining table set beyond the limestone wall',
    width: 1280,
    height: 720,
  },
  {
    src: '/images/private-chef-dubai-system.webp',
    alt: 'Household manager with a tablet standing between a private chef at the stove and an assistant preparing vegetables in a Dubai villa kitchen',
    width: 928,
    height: 1152,
  },
  {
    src: '/images/private-chef-dubai-evening.webp',
    alt: 'Private chef finishing a plate at the kitchen pass of a Dubai villa, the dining table quietly set beyond',
    width: 1280,
    height: 720,
  },
  {
    src: '/images/private-chef-dubai-household.webp',
    alt: 'Private chef cooking breakfast while an assistant packs meal containers in a Dubai villa kitchen, family life in the background',
    width: 1280,
    height: 720,
  },
  {
    src: '/images/private-chef-dubai-chefs.webp',
    alt: 'International chefs in a Dubai villa kitchen working together — household chef, Japanese specialist, assistant and colleagues',
    width: 1280,
    height: 720,
  },
  {
    src: '/images/private-chef-dubai-daily-life.webp',
    alt: 'Household member drinking coffee at the island while the private chef cooks breakfast unhurried in the same Dubai villa kitchen',
    width: 1280,
    height: 720,
  },
] as const

export const whoForPhoto = {
  src: '/images/private-chef-dubai-who-for.webp',
  alt: 'A couple relaxes over coffee and the paper by the pool while their private chef plates breakfast at the marble island of a Dubai villa kitchen',
  width: 1536,
  height: 1024,
}

export const whyIndependentPhoto = {
  src: '/images/private-chef-dubai-why-independent.webp',
  alt: 'Head chef, Japanese specialist and household manager working a fully organised mise en place in a Dubai villa kitchen',
  width: 1280,
  height: 720,
}

export const howItWorksPhoto = {
  src: '/images/private-chef-dubai-how-it-works.webp',
  alt: 'Chef’s hands preparing fish, vegetables and herbs on a limestone island beside a closed notebook and a blank tablet',
  width: 1280,
  height: 720,
}

/** Cluster subpage heroes — one visual verb each. Experience concept shown. */
export const clusterHeroes = {
  howItWorks: {
    src: '/images/private-chef-how-it-works-hero.webp',
    alt: 'A household, coordinator and chef review a plan at a Dubai villa island in the evening. Experience concept shown.',
    width: 2560,
    height: 1440,
  },
  ourChefs: {
    src: '/images/private-chef-our-chefs-hero.webp',
    alt: 'An adult chef cooks under assessment while two senior chefs watch and take notes in a dark test kitchen. Experience concept shown.',
    width: 2560,
    height: 1440,
  },
  quality: {
    src: '/images/private-chef-quality-training-hero.webp',
    alt: 'Two senior chefs review a finished plate under a warm lamp, one tasting and one finishing the garnish. Experience concept shown.',
    width: 2560,
    height: 1440,
  },
  privacy: {
    src: '/images/private-chef-privacy-security-hero.webp',
    alt: 'A private chef prepares food at a villa island while a couple sits in the living room, evening garden beyond. Experience concept shown.',
    width: 2560,
    height: 1440,
  },
  pricing: {
    src: '/images/private-chef-pricing-hero.webp',
    alt: 'Two people sit at a dark island with a notebook and blank tablet while a chef cooks in the background. Experience concept shown.',
    width: 2560,
    height: 1440,
  },
} as const

export const whoDoesWhatPhoto = {
  src: '/images/private-chef-dubai-who-does-what.webp',
  alt: 'Private chef plating at the end of the island while an assistant closes down the range behind, one Dubai villa kitchen, two jobs',
  width: 1280,
  height: 720,
}

export const mixPhoto = {
  src: '/images/private-chef-dubai-mix.webp',
  alt: 'Household chef cooking a healthy pan dish beside a Japanese specialist plating sashimi in the same Dubai villa kitchen',
  width: 1280,
  height: 720,
}

export const chefLevelPhoto = {
  src: '/images/private-chef-dubai-chef-level.webp',
  alt: 'Experienced private chef calmly plating a precise dish in a contemporary Dubai villa kitchen',
  width: 1248,
  height: 832,
}

export const wherePhoto = {
  src: '/images/private-chef-dubai-where.webp',
  alt: 'Dining table inside a Dubai villa, palms and coastal city view through floor-to-ceiling windows',
  width: 1568,
  height: 672,
}

export const ctaPhoto = {
  src: '/images/private-chef-dubai-cta.webp',
  alt: 'Dubai villa kitchen at the end of the day: surfaces cleared, one folded cloth, the dining room quiet beyond — the house handed back in order',
  width: 1568,
  height: 672,
}

export const journeyPhotos = [
  {
    src: '/images/private-chef-dubai-journey-brief.webp',
    alt: 'Household manager briefing a private chef in a Dubai villa kitchen while an assistant prepares vegetables',
    caption: '01 · The brief',
    width: 912,
    height: 1136,
  },
  {
    src: '/images/private-chef-dubai-journey-match.webp',
    alt: 'Household manager and private chef reviewing the household match on a tablet in a Dubai villa kitchen',
    caption: '02 · The match',
    width: 912,
    height: 1136,
  },
  {
    src: '/images/private-chef-dubai-journey-profile.webp',
    alt: 'Household manager updating the Food Profile on a tablet while the chef cooks in the background',
    caption: '03 · The Food Profile',
    width: 912,
    height: 1136,
  },
  {
    src: '/images/private-chef-dubai-system.webp',
    alt: 'Private chef cooking at the stove while the household manager and assistant work in the same kitchen',
    caption: '04 · Service',
    width: 928,
    height: 1152,
  },
  {
    src: '/images/private-chef-dubai-journey-review.webp',
    alt: 'After service: chef cleaning the stove, assistant stacking bowls, household manager reviewing the tablet',
    caption: '05 · Review',
    width: 912,
    height: 1136,
  },
] as const

export const managerPhoto = {
  src: '/images/private-chef-dubai-manager.webp',
  alt: 'Editorial illustration of a myCHEF household manager in a Dubai villa kitchen, working from a tablet',
  caption: 'Editorial illustration of the household-manager role — not a named staff portrait.',
  width: 912,
  height: 1136,
}

export const rotationPhoto = {
  src: '/images/private-chef-dubai-rotation.webp',
  alt: 'Regular household chef cooking at the stove while a Japanese specialist plates sashimi and the household manager coordinates',
  width: 912,
  height: 1136,
}

export const yearLaterPhoto = {
  src: '/images/private-chef-dubai-year-later.webp',
  alt: 'Private chef cooking breakfast unhurried in a Dubai villa kitchen, coffee and fruit already on the island',
  width: 912,
  height: 1136,
}

export const dailyLifePhotos = [
  {
    src: '/images/private-chef-dubai-life-breakfast.webp',
    alt: 'Weekday breakfast on a limestone island: coffee, eggs, toast and berries, chef working in the background',
    caption: 'Monday breakfast',
    width: 912,
    height: 1136,
  },
  {
    src: '/images/private-chef-dubai-life-children.webp',
    alt: 'Two simple children’s plates of pasta, chicken and vegetables on a villa kitchen island, chef cooking behind',
    caption: 'Food the children will eat',
    width: 912,
    height: 1136,
  },
  {
    src: '/images/private-chef-dubai-life-guests.webp',
    alt: 'Saturday dining table set for six with candles and plated courses, private chef finishing a plate',
    caption: 'Guests on Saturday',
    width: 912,
    height: 1136,
  },
] as const

export const HERO_SUBTITLE =
  'From a few days a week to a long-term household arrangement, we match, assess and manage the chef around the way your household actually eats.'

export const WHATSAPP_NUMBER = '971551744849'
export const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a standing private chef for the household. Location: __, Service format (prep / dinner / food management / full day): __, Days per week: __, Who handles groceries: __, Start date: __ (via mychef.ae/private-chef-dubai)"

export const pageSequence = [
  { n: '01', label: 'What this is', href: '#what-this-is' },
  { n: '02', label: 'Who it is for', href: '#which-service' },
  { n: '03', label: 'Why not hire yourself', href: '#why-not-hire' },
  { n: '04', label: 'How it works', href: '#how-it-works' },
  { n: '05', label: 'The life', href: '#the-life' },
  { n: '06', label: 'Chef quality', href: '#chef-levels' },
  { n: '07', label: 'How pricing works', href: '#household' },
  { n: '08', label: 'When plans change', href: '#when-it-changes' },
  { n: '09', label: 'Start', href: '#start' },
] as const

export const quickNav = [
  { label: 'Get the price', href: '#calculator', primary: true },
  { label: 'Service formats', href: '#formats', primary: false },
  { label: 'Groceries', href: '#groceries', primary: false },
  { label: 'Transport zones', href: '#transport', primary: false },
  { label: 'Chef quality', href: '#chef-levels', primary: false },
  { label: 'How chefs are scored', href: '#chef-scoring', primary: false },
  { label: 'The Food Profile', href: '#food-profile', primary: false },
  { label: 'When plans change', href: '#when-it-changes', primary: false },
  { label: 'FAQs', href: '#faq', primary: false },
] as const

export const heroFacts = [
  {
    eyebrow: 'Entry point',
    title: 'From AED 2,700 / month',
    body: 'One three-hour prep session a week, Professional Chef. The chef cooks, organises the food and leaves — a private chef without someone in the house all day.',
  },
  {
    eyebrow: 'The product',
    title: 'An ongoing monthly plan',
    body: 'Displayed prices are for households of at least one month. Shorter arrangements run at 1.5× — because the beginning is where we do the most work.',
  },
  {
    eyebrow: 'Groceries',
    title: 'At cost. Always.',
    body: 'We make money from providing the service, not from marking up your tomatoes. Take over the whole food process and Daily Prep becomes five hours — the chef’s time is what you pay for, never the ingredients.',
  },
] as const

export const serviceFormats = [
  {
    id: 'prep',
    name: 'Daily Prep',
    hours: 'Up to 3 hours',
    perService: 675,
    ask: 'Prepare it for me',
    tag: 'The quiet option',
    body: 'The chef comes in, prepares the food your household needs, organises it and leaves. You provide the groceries — or add grocery management and the service becomes five hours.',
    includes: [
      'Up to 3 hours of cooking and preparation',
      'Lunch ready · dinner prepared for you to finish or reheat',
      'Children’s food handled',
      'Components portioned, labelled and stored',
      'Kitchen left the way it was found',
    ],
    chooseIf: 'You want a private chef’s food — without another person in the house all day.',
  },
  {
    id: 'dinner',
    name: 'Dinner Service',
    hours: 'Up to 4 hours',
    perService: 825,
    ask: 'Cook dinner for me',
    tag: null,
    body: 'The chef arrives before the meal, cooks it fresh, serves it the way this house likes to be served, and leaves the kitchen handled. Choose dinner, breakfast or lunch — or more than one; each added meal adds service time.',
    includes: [
      'Up to 4 hours around one served meal',
      'Add breakfast or lunch — each added meal adds 2.5 hours',
      'Fresh preparation, finished to serve',
      'Table service the way you want it — present or invisible',
      'Kitchen handled before the chef leaves',
    ],
    chooseIf: 'A served meal — usually dinner — is the one that matters in your house.',
  },
  {
    id: 'fullday',
    name: 'Full-Day Chef',
    hours: 'Up to 9 hours',
    perService: 1575,
    ask: 'Run my kitchen for me',
    tag: null,
    body: 'The chef is there for the household through the day, in whatever rhythm the house has agreed. The number of meals is secondary; the time is the product.',
    includes: [
      'Up to 9 hours — breakfast through dinner',
      'The day’s meals in your household’s rhythm',
      'Preparation, snacks and children’s meals between them',
      'Kitchen organised through the day',
      'Hours beyond nine agreed and charged separately',
    ],
    chooseIf: 'You want the kitchen staffed and food appearing through the whole day.',
  },
] as const

export const mealChoices = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
] as const

export const mealServiceRule = {
  baseHours: 4,
  extraHours: 2.5,
  basePrice: 825,
  extraPrice: 375,
  note: 'One served meal is up to 4 hours. Each added meal adds 2.5 hours of service — arrive, cook fresh, serve, hand the kitchen back. One served meal can cover the household’s sittings — children earlier, adults later — within the service window. Choose all three meals and you have Full-Day coverage.',
}

export const peopleBands = [
  { id: 'p6', label: 'Up to 6', sub: 'The standard household', assistants: 0 },
  { id: 'p10', label: '7–10', sub: 'Still one chef', assistants: 0 },
  { id: 'p22', label: '11–22', sub: '+1 assistant', assistants: 1 },
  { id: 'p34', label: '23–34', sub: '+2 assistants', assistants: 2 },
  { id: 'p49', label: '35–49', sub: '+3 assistants', assistants: 3 },
  { id: 'p50', label: '50+', sub: 'Lead Chef event', assistants: -1 },
] as const

export const assistantRule = {
  pct: 25,
  note: 'One chef handles up to ten people alone. From eleven, we add an assistant — roughly one per twelve guests — each at 25% of the service price. Above 49 people, this stops being household service and becomes a Lead Chef event with a full team and one event price.',
}

export const escalators = {
  title: 'The only things that can change this number',
  items: [
    'The job, not the chef — every professional chef in the network costs the house the same rate for the same job; the levels are what the chef earns.',
    'People at the table — priced right here in the calculator, one assistant per ~12 guests above ten, at 25% of the service price each.',
    'Hours beyond your format — AED 150 per additional hour, agreed in advance, never assumed.',
    'Staying under one month — 1.5× the service rate, shown in the calculator.',
  ],
  closer: 'Nothing else moves it. Groceries stay at receipts. Transport is already included in the figures above.',
}

export const groceryAddOn = {
  perService: 975,
  hours: 'Up to 5 hours',
  planName: 'Daily Prep + Grocery Management',
  optionMine: {
    label: 'I’ll handle the groceries',
    sub: '3 hours per service',
    body: 'You buy the ingredients and have them ready when the chef arrives. The chef’s time is focused on preparation and cooking.',
  },
  optionMychef: {
    label: 'myCHEF handles everything',
    sub: '5 hours per service',
    body: 'We plan the meals, make the shopping list, buy the groceries, select the ingredients and check the quality before cooking. Groceries are charged at actual cost. No markup.',
  },
  explainer:
    'Adding grocery management changes the service from 3 to 5 hours. The extra time covers meal planning, shopping, ingredient selection and transport. You still pay only the actual grocery receipts.',
  principle: 'The groceries are not marked up. The chef’s additional time is what you pay for.',
  boundary:
    'A note on who does the shopping: standard service assumes you provide the ingredients. Our chefs are culinary professionals, hired for the kitchen — not errand runners. When you do want the shopping taken over, we make it a proper part of the job rather than a favour: the service becomes five hours, so the chef has real, paid time to plan the menus, get to the market and check the quality — without eating into your cooking time.',
}

export const formatChooser = {
  eyebrow: 'Which one?',
  title: 'Thirty seconds of guidance',
  rows: [
    { situation: 'Good food handled, nobody in the house all day', pick: 'Daily Prep' },
    { situation: 'Never think about menus, shopping or what’s in the fridge again', pick: 'Daily Prep + Grocery Management' },
    { situation: 'Dinner cooked fresh and served, evening after evening', pick: 'Dinner Service' },
    { situation: 'A kitchen that runs from breakfast to dinner', pick: 'Full-Day Chef' },
  ],
  closer: 'Want prep on weekdays and a served dinner on Friday? Mixed weeks are normal — tell us. And if you are still unsure, describe how the house eats and we recommend the format. That is our job, not yours.',
}

export const formatsIntro = {
  eyebrow: 'The real question',
  title: 'How much of your food life do you want us to take over?',
  body: 'We do not sell meals per day. Two meals could be a five-hour morning or a thirteen-hour spread — same count, completely different job. So you choose the chef’s working time and what it covers. Prices shown are per service on an ongoing plan, one rate per job. Longer service days deliberately carry a lower hourly rate — a nine-hour day is better value per hour than a three-hour visit.',
}

export const buildAround = {
  eyebrow: 'The household plan',
  title: 'Build your private chef around your life',
  paras: [
    'Some families want a chef for three quiet hours in the morning. Some want dinner cooked and served every evening. Some want us to take food completely off their hands. Some want a chef in the house throughout the day.',
    'Choose the time and rhythm that fits your household. We take care of the system behind it.',
  ],
}

export const timeROI = {
  eyebrow: 'What you get back',
  title: 'The food loop you are currently running yourself',
  intro:
    'Food is not one task. It is a loop that runs every day whether you notice it or not — and it charges you twice: once in hours, once in attention.',
  loop: [
    { step: 'Thinking', detail: '“What’s for dinner?” — every day, plus what the children will actually eat and what is still in the fridge.' },
    { step: 'Planning', detail: 'The list, the dietary juggling, the week ahead.' },
    { step: 'Shopping', detail: 'The trip, the traffic, the queue, the bags.' },
    { step: 'Cooking', detail: 'An hour or two — at the exact end of the day when you have the least left.' },
    { step: 'Cleaning', detail: 'The kitchen does not reset itself.' },
    { step: 'Restocking', detail: 'Noticing what ran out before it matters.' },
  ],
  math: {
    label: 'Count your own week — the arithmetic is simple',
    body: 'Cooking five evenings (call it 7 hours) + one proper shop (2 hours) + cleaning up (2–3 hours) + planning (an hour) is roughly twelve hours a week — before the thinking, which never fully switches off. Your number may differ. Count it once, honestly.',
  },
  roi: {
    title: 'A return, not just a saving',
    intro: 'Most of our clients bill their own hours. If your working hour is worth more than the chef’s, handing over the loop is arithmetic, not indulgence.',
    returns: [
      'Roughly a working day of hours back every week on a five-day plan',
      'The 6pm decision — gone',
      'Evenings that start when you sit down, not when the kitchen is clean',
      'A mental tab closed: the fridge is no longer your responsibility',
      'Food that got better while you stopped managing it',
    ],
    closer: 'The saving is not the point. What you buy back is the scarcest thing you have.',
  },
}

export const oneMonth = {
  eyebrow: 'Why one month — and why short stays cost 1.5×',
  title: 'The beginning is where we do the most work',
  paras: [
    'We match your chef, understand your household, build your Food Profile, learn the kitchen, understand what the children actually eat, record preferences, establish routines and correct what does not work.',
    'Behind every placement also sits the administration a professional kitchen in Dubai actually requires: verified identity, visa and right-to-work status, scheduling, backup coverage, and a network of chefs we look after properly. None of that appears on your plate, but all of it is real work.',
    'We treat that first month as our investment in the relationship — which is why displayed prices are for ongoing plans of at least one month, and why shorter arrangements run at 1.5× the ongoing rate: the same setup work, recovered over far fewer days. A single dinner is still catering, not this page.',
  ],
}

export const specialists = {
  eyebrow: 'Specialists & Guest Chefs',
  title: 'Exceptional chefs are not a monthly subscription',
  body: 'Somebody who wants extraordinary Japanese food on Friday should not conclude they need the most expensive chef seven days a week. Specialists sit outside the recurring ladder and are quoted for the occasion. Keep your everyday chef. Add the specialist for the meal that needs one.',
  items: [
    'Japanese specialist',
    'Sushi chef',
    'Pastry chef',
    'Fine-dining chef',
    'Nutrition specialist',
    'Michelin-background chef',
  ],
}

export const cateringRedirect = {
  title: 'One night is catering',
  body: 'A birthday, a date, a yacht, clients for an evening — that is catering, not a private-chef household. We do that work. It lives on the catering pages. This page is only for people who want a chef in the house as a standing arrangement.',
  href: '/catering-dubai',
  label: 'Go to catering',
} as const

export const systemMap = [
  { n: '01', label: 'You' },
  { n: '02', label: 'Your household manager' },
  { n: '03', label: 'Your Food Profile' },
  { n: '04', label: 'Your chef — and the team the work needs' },
  { n: '05', label: 'Specialists · backup · events' },
  { n: '06', label: 'Feedback' },
  { n: '07', label: 'Profile and chef score updated' },
  { n: '08', label: 'Service gets better' },
] as const

export const managerAsks = [
  { q: 'Chef unavailable?', a: 'Call your manager.' },
  { q: 'Japanese on Friday?', a: 'Ask your manager.' },
  { q: 'Six guests tomorrow?', a: 'Ask your manager.' },
  { q: 'Something wasn’t right?', a: 'Tell your manager.' },
]

export const managerFlow = ['You', 'Your household manager', '50+ chef network'] as const

export const foodProfileDemo = {
  eyebrow: 'Example Food Profile',
  house: 'A household like this',
  note: 'This is a demonstration of the record we keep — not a real client, and not a review.',
  fields: [
    { k: 'Breakfast', v: '08:00' },
    { k: 'Coffee', v: 'Flat white, oat milk' },
    { k: 'Children', v: 'No mushrooms' },
    { k: 'Spice', v: '3 / 5' },
    { k: 'Favourites', v: 'Japanese, Italian, Thai' },
    { k: 'Avoid', v: 'Coriander' },
    { k: 'Diet', v: 'High protein on weekdays' },
    { k: 'Service', v: 'Quiet mornings' },
    { k: 'Friday', v: 'Usually guests' },
    { k: 'Last update', v: 'Kept current' },
  ],
  closer: 'When the chef changes, this doesn’t.',
}

export const calibration = [
  { when: 'Day 1', title: 'We know what you told us.' },
  { when: 'Day 2', title: 'We learn what “spicy” actually means here.' },
  { when: 'Week 1', title: 'Portions, timing, children and service.' },
  { when: 'Month 1', title: 'The chef knows the rhythm of the house.' },
  { when: 'Month 6', title: 'You barely need to explain.' },
] as const

export const scoreDemo = {
  eyebrow: 'How a week is reviewed',
  note: 'The four questions themselves. The numbers beside them are an illustration of the mechanism, not a chef’s published record — no score on this site is invented.',
  scores: [
    { label: 'The service', value: 5 },
    { label: 'The food', value: 5 },
    { label: 'The person', value: 4 },
    { label: 'Anything better', value: null },
  ],
  bands: [
    { band: '4.0 and up', effect: 'Climbs a level at the next review — and 10% or 20% more to the chef.' },
    { band: '3.5 – 3.9', effect: 'Holds the current level.' },
    { band: 'Under 3.5', effect: 'Drops a level, and we look at the match before we look at the person.' },
    { band: 'Under 2.5, twice', effect: 'That person stops working in houses through us.' },
  ],
  steps: [
    { title: 'One score that is off', body: 'A conversation — not a punishment machine.' },
    { title: 'A repeated problem', body: 'A pattern. We ask what actually happened.' },
    { title: 'A pattern', body: 'Coaching, a new match, or a chef who does not come back.' },
  ],
  chefsFeedback: 'Chefs can give feedback too. A house is allowed to make a mistake. Both sides are expected to learn.',
}

export const feedbackOutputs = {
  title: 'One conversation, two records',
  intro:
    'When we check in after service, your feedback goes two places — because it does two different jobs.',
  outputs: [
    {
      label: 'Your Food Profile',
      example: '“Less salt.”',
      body: 'Anything about how this house eats updates the profile. The next service needs less explaining. This record belongs to the household.',
    },
    {
      label: 'The chef’s performance record',
      example: '“Always on time. The kitchen is spotless when they leave.”',
      body: 'Anything about how the chef works — food quality, reliability, communication, cleanliness, adaptability, household fit — feeds the chef’s verified performance score. This record follows the chef and helps decide their level.',
    },
  ],
  closer: 'Only feedback from completed myCHEF placements counts toward a chef’s score. Nothing on a chef’s record is invented, imported or guessed.',
}

export const backupAlone = [
  'Chef unavailable',
  'You start calling people',
  'A new chef arrives',
  'You explain everything again',
] as const

export const backupMychef = [
  'Chef unavailable',
  'Your household manager is notified',
  'A replacement is selected',
  'The Food Profile is transferred',
  'Service continues',
] as const

export const networkSpecialties = [
  'Italian',
  'French',
  'Japanese',
  'Thai',
  'Indian',
  'Arabic',
  'Filipino',
  'Vietnamese',
  'Indonesian',
  'Mediterranean',
  'Nutrition',
  'Vegan',
  'Pastry',
  'Sushi',
  'Fine dining',
  'Family cooking',
] as const

export const levelSpecialtyExamples = [
  { level: 'A Professional Chef', specialty: 'can be an exceptional Indian cook' },
  { level: 'Your regular chef', specialty: 'cooks the week the house actually eats' },
  { level: 'A sushi specialist', specialty: 'can join for one Friday dinner alongside them — an add-on, not a rank' },
] as const

export const whatThisIs = [
  'myCHEF is not a list of chefs you have to manage, and not a staffing agency that puts someone on your payroll. A licensed supplier employs your chef on a proper visa. We organise the chef: the match, the standard, the score and the backup — and the quality extra is paid to the cook, not to the company that sent them.',
  'You are buying a standing food service for a household — a chef who comes back, a record of how this house eats, and one contact when something changes. That is a different product from a one-night dinner. A one-night dinner is catering.',
  'Before anyone enters your kitchen we check identity and right-to-work, run a practical cooking assessment, take references, and review after service. Every chef in the network carries a level they earned through that assessment — and keeps earning through verified client feedback. The whole system is explained on this page.',
  'The chef cooks. We keep the chef, the house and the standard aligned. The longer you stay, the less you should have to explain. That is the point of a long-term private chef — not a series of one-day hires.',
]

export const whoFor = [
  {
    title: 'A family that does not want another person to manage',
    body: 'A private chef for the household without you becoming the scheduler, the backup plan, or HR. When the usual chef is off, the next chef is not walking in knowing nothing. The Food Profile travels. You talk to one contact.',
  },
  {
    title: 'A villa stay of weeks or months',
    body: 'A villa chef who already understands the house — not a restart every Monday. Palm, Emirates Hills, a winter let: the kitchen should feel like it belongs to this house by week two, not week twelve.',
  },
  {
    title: 'Nutrition, controlled',
    body: 'Every meal follows what you actually mean by healthy in this house — not a generic programme, and not a restaurant menu wearing gym clothes.',
  },
  {
    title: 'You do not want to think about food every day',
    body: 'That is a legitimate reason to want a chef. It is also a reason to want a system. If the service only works when you brief it, you have hired a task. If it works when you do not brief it, you have hired a household.',
  },
]

export const comparison = [
  {
    topic: 'Finding a chef',
    alone: 'You interview and hope. A good first dinner is not the same as a person who still fits the house in month four.',
    mychef: 'You are matched to a chef already vetted for identity, cooking and references — with a level earned through assessment, not claimed from a CV. The match is the kitchen, the cuisine and the format — not whoever replied first.',
  },
  {
    topic: 'When they are unavailable',
    alone: 'You have no dinner. Or you scramble. The replacement does not know the children, the allergies, or how this house takes coffee.',
    mychef: 'The next chef is not starting from zero — your Food Profile travels. If an equivalent chef is not available, we tell you, then we give you the options.',
  },
  {
    topic: 'Quality',
    alone: 'You hope. If it slips, you are the one who has to say so, and you are the one who has to find the next person.',
    mychef: 'Service is reviewed. A pattern of problems gets a conversation, a new match, or a chef who does not come back. After about two days on a standing arrangement we contact you separately from the chef.',
  },
  {
    topic: 'A specialist on Friday',
    alone: 'Another hire. Another interview. Another person who does not know the house.',
    mychef: 'Ask your contact. Keep the weekday chef. Rotate a specialist for the meal that needs one.',
  },
  {
    topic: 'Paperwork and the relationship',
    alone: 'You own it — visas, cover, awkward conversations, the Sunday when nobody is free.',
    mychef: 'You talk to one person. We manage the network. A licensed supplier employs the chef on a visa we have seen. You are not putting a chef on your payroll.',
  },
  {
    topic: 'Cost',
    alone: 'A freelancer can look cheaper on day one. You are paying for the person only. Backup, matching, review and a kitchen that already knows the house are unpaid work — yours.',
    mychef: 'The person plus backup, matching, review, and a kitchen that already knows the house. The price is built openly from the job — which service, how long, how many days, how long the plan runs — and you see it in writing before anything starts. There is no premium grade of chef to be sold up to.',
  },
]

export const processSteps = [
  {
    num: '01',
    title: 'Tell us about the job',
    body: 'Which service format fits — a morning prep session, dinner service, full food management or a full-day chef. How many days a week, how many people, and what the chef is responsible for. Displayed prices are for ongoing monthly plans. You are never asked to choose a chef level. If you want one dinner, that is catering — we will send you there.',
    points: [
      'Service format: prep, dinner, food management, or a full-day chef',
      'Days each week, how many people eat, and what the chef owns',
      'Displayed prices are ongoing monthly plans — not a chef level you pick',
      'One dinner is catering. We send that brief there, not here',
    ],
  },
  {
    num: '02',
    title: 'We work out the role — then match a chef to it',
    body: 'Your answers define the role: how demanding it is, how much time it takes, what it requires. The role determines the chef level. Then we search within that level for cuisine, personality and household fit. Before anyone enters, we check identity and right-to-work, run a practical cooking assessment, and take references. A CV is not enough.',
    points: [
      'The role is calculated from how the house actually works',
      'That role sets the chef level — you do not have to name one',
      'We then search inside that level for cuisine, personality, household fit',
      'Identity, right-to-work, a cooking assessment, and references before anyone enters',
    ],
  },
  {
    num: '03',
    title: 'We build your Food Profile',
    body: 'What you eat, what you do not, allergies, timing, how the children eat, whether you want conversation or quiet service. If it does not help us cook for you, we do not need it. The profile is yours: see it, correct it, or ask for it to be deleted. When the chef changes, the profile is what travels.',
    points: [
      'Allergies, timing, children, spice, coffee, guests, service style',
      'If it does not help us cook for this house, it does not go in',
      'You can see it, correct it, or ask for it to be deleted',
      'When a backup chef steps in, this is what they receive',
    ],
  },
  {
    num: '04',
    title: 'They shop as agreed, cook in your kitchen, leave it handled',
    body: 'The chef manages the food, the kitchen, the service style and the plate. Groceries are separate and agreed in advance: you provide them, or we take over the complete food process — the service gets two more hours for planning and shopping, and the groceries themselves are charged at exact receipts with no markup.',
    points: [
      'The chef owns the food, the kitchen, the service style, and the plate',
      'Groceries are agreed in advance — you provide them, or we take the process over',
      'If we shop, the extra hours are chef time, and receipts are charged with no markup',
      'The kitchen is left handled. You are not the closer',
    ],
  },
  {
    num: '05',
    title: 'We ask how it was. Then we improve',
    body: 'After about two days we contact you separately from the chef. What you say about the food updates your Food Profile. What you say about the chef updates their verified performance record. A rating starts a conversation — not a punishment machine.',
    points: [
      'After about two days we contact you — separately from the chef',
      'Food comments update the Food Profile',
      'Chef comments update their verified performance record',
      'A rating starts a conversation, not a punishment machine',
    ],
  },
]

export const whoDoesWhat = [
  {
    who: 'myCHEF',
    role: 'The system around the chef',
    items: [
      {
        title: 'Your household manager',
        detail: 'One named person. Not a switchboard. They hold the Food Profile, the chef relationship, and the week that is not normal.',
      },
      {
        title: 'The role and the match',
        detail: 'How demanding the job is, how much time it takes, which chef level it needs — then a search inside that level for cuisine and household fit.',
      },
      {
        title: 'Vetting before anyone enters',
        detail: 'Identity, right-to-work, a practical cooking assessment, references. A CV is not enough.',
      },
      {
        title: 'The Food Profile',
        detail: 'The record of how this house eats. Built with you, kept current, transferred when a chef changes.',
      },
      {
        title: 'Scheduling, backup, rotation',
        detail: 'Days, cover, seven-day rotation when the house needs it. The next chef is briefed from the profile, not from you at the door.',
      },
      {
        title: 'Specialists when you want one',
        detail: 'Keep the weekday chef. Ask for Japanese on Friday. You do not make a second hire.',
      },
      {
        title: 'Quality review',
        detail: 'What you say about the food updates the profile. What you say about the chef updates their verified record.',
      },
    ],
  },
  {
    who: 'The chef',
    role: 'The work in your kitchen',
    items: [
      {
        title: 'The food',
        detail: 'Menus, cooking, timing to this house’s rhythm — from the Food Profile, not from a briefing you have to repeat.',
      },
      {
        title: 'The kitchen',
        detail: 'Mise en place, cooking, cleanliness related to cooking. Left handled at the end of the service.',
      },
      {
        title: 'The service style',
        detail: 'Quiet mornings or conversation. Informal or more formal. Whatever the profile says for this house.',
      },
      {
        title: 'The plate',
        detail: 'What actually lands in front of you — and in front of the children, if they eat earlier.',
      },
      {
        title: 'Shopping, as agreed',
        detail: 'You provide groceries, or we take the process over. Receipts at cost, no markup, extra hours priced as chef time.',
      },
      {
        title: 'Working from the record',
        detail: 'Allergies, spice, coffee, guests. The chef should not have to guess, and you should not have to re-explain.',
      },
    ],
  },
  {
    who: 'You',
    role: 'The house, not the management',
    items: [
      {
        title: 'What you want to eat',
        detail: 'Taste, allergies, what “healthy” means here, how the children eat. That is yours. The rest is the system.',
      },
      {
        title: 'When the house eats',
        detail: 'Breakfast, children’s supper, dinner, Friday guests. The rhythm is yours to set.',
      },
      {
        title: 'Whether the match is right',
        detail: 'You see the chef’s verified profile and the price in writing. You approve before anyone starts.',
      },
      {
        title: 'Feedback that actually goes somewhere',
        detail: 'Tell your household manager. Food comments change the profile. Chef comments change the record.',
      },
      {
        title: 'The weeks that are not normal',
        detail: 'Travel, guests, a new diet. You tell one person. You do not rebuild the kitchen from scratch.',
      },
    ],
  },
]

/* ---------- Chef quality — one client word, three levels of pay ---------- */

/**
 * There is one word for the person who cooks in your house: a professional chef. What has three
 * levels is what that chef earns. Two client-facing grades beside a Level 1/2/3 supplier ladder
 * beside a "Head Chef" price gave one person three names and the house three stories.
 */
export const chefLevels = [
  {
    name: 'Level 1',
    tag: 'Starting',
    useCase: 'Every chef who passes the assessment',
    body: 'Nobody cooks in a house without passing identity, right-to-work, a practical cooking assessment and references. Level 1 is a pass, not a consolation prize — a chef below the standard is not placed at all. The price you see is the price, whoever is standing in the kitchen.',
  },
  {
    name: 'Level 2',
    tag: 'Good work · +10% to the chef',
    useCase: 'Scored 4.0 or better across a full month of visits',
    body: 'The households they cook for score the service, the food, the person and what would make next week better. A month at 4.0 or better moves the chef to Level 2, and they earn 10% more for the same job. Your figure does not move.',
  },
  {
    name: 'Level 3',
    tag: 'Kept good work · +20% to the chef',
    useCase: 'Held 4.0 or better for three months',
    body: 'Three months at 4.0 or better is Level 3: 20% more to the chef, and the catering work opens up, because a person who holds a house together is the person we want running an event. Anyone can slip back — under 3.5 drops a level, and twice under 2.5 ends the household work.',
  },
] as const

/** Specialists are an add-on for one meal, not a rank on the ladder. */
export const specialistChefs = {
  name: 'Specialists',
  useCase: 'A particular cuisine or craft, for the occasion',
  body: 'Sushi, pastry, a particular regional kitchen. Booked alongside your regular chef for the meal that needs one, quoted per occasion — so Tuesday’s family dinner is never billed at a specialist rate. A specialist is not a higher level; it is a different skill for one night.',
}

export const chefLevelIntro = [
  'One ladder, and it is about money rather than rank. Level 1 is where every chef starts and the price the house pays is the price. Level 2 is 10% more to the chef for a month scored 4.0 or better. Level 3 is 20% more for holding that for three months. The extra is paid to the registered chef, not to the company that sent them — and a house is never asked to pay more for the person it already likes.',
  'None of these are restaurant titles. A chef’s profile shows both: the professional title they carried before, and the level they earned here through assessment and real household scores. “Previous title: Executive Chef. myCHEF level: 2.” One is history. The other is evidence.',
]

export const restaurantTitle = {
  eyebrow: 'Why restaurant rank is not enough',
  title: 'An Executive Chef is not automatically the best private chef for your house',
  paras: [
    'An Executive Chef may be exceptional at running a professional kitchen — and accustomed to a brigade of assistants, established mise en place, specific suppliers and a fully equipped environment. Take all of that away and you are looking at a different job.',
    'A Senior Chef de Partie can sometimes be the better household match: more hands-on, more flexible, more comfortable adapting to an unfamiliar private kitchen and a family’s actual rhythm.',
    'So we do not rank anyone from a job title. Every chef goes through the same assessment, and every level is earned inside our system. That is the difference between a classification and a claim.',
  ],
}

export const higherNotBetter = {
  title: 'Higher does not always mean better for you',
  body: 'If you want healthy family meals five days a week, a Professional Chef who understands your family perfectly may be a much better match than the most decorated chef in the network. If you want an extraordinary Japanese dinner on Saturday, we do not need to replace your everyday chef. We add the right specialist.',
}

export const levelVsSpecialty = {
  title: 'Level and specialty are different',
  level: 'Level = verified capability and performance inside the myCHEF system.',
  specialty: 'Specialty = what that chef is particularly good at.',
  body: 'Japanese is not a level. Italian is not a level. Nutrition is not a level. We match both dimensions: the right level + the right specialty + the right personality + the right household.',
  close: 'You do not need to understand the system before booking. Tell us how you live, what you eat and what you expect. We work out the role and recommend the level. If your needs change, the chef can change with them.',
}

/* ---------- How a chef earns their level ---------- */

export const scoring = {
  eyebrow: 'How a chef earns their level',
  title: 'A score out of 100 — half built before your kitchen, half built inside real ones',
  intro: [
    'Every chef in the network carries a score out of 100, and the score decides the level. It has two parts.',
    'The first part is what we verify ourselves, before a chef is placed anywhere: professional background, a practical culinary assessment, capability in a private household, professional standards, and specialist skills. This carries the larger share of the score.',
    'The second part cannot be assessed in advance, because it only exists in real homes: verified client performance. Food quality week after week. Understanding the household. Reliability. Menu variety. Cleanliness and organisation. Shopping and cost management. Whether the household would recommend them.',
  ],
  verified: {
    label: 'myCHEF Verified Quality',
    sub: 'Assessed by us, before placement',
    items: [
      'Professional background',
      'Practical culinary assessment',
      'Private household capability',
      'Professional standards',
      'Specialist skills',
    ],
  },
  performance: {
    label: 'Verified Client Performance',
    sub: 'Earned in real households, from completed placements only',
    items: [
      'Food quality',
      'Service',
      'Team',
      'Communication',
      'Understanding the household',
      'Reliability and professionalism',
      'Menu variety and adaptability',
      'Cleanliness and organisation',
      'Shopping and cost management',
      'Household fit and overall recommendation',
    ],
  },
  weightsNote:
    'The exact point weightings and level thresholds live in our assessment framework and are applied identically to every chef. The structure is public; the pass mark is real. A chef below it is not approved for independent myCHEF placement at all.',
  provisional: {
    title: 'A CV cannot create the highest level',
    paras: [
      'A chef can arrive with an exceptional CV. That is evidence about their background — not about how they perform inside your home. That is why a large share of the mature score can only come from verified client performance.',
      'So a new chef starts Provisional at Level 1. The verified background is on file; the household half of the record is still being earned, and no level above 1 is claimed before real houses have scored the work. We will not publish a score that does not exist yet.',
      'After enough real household history: Confirmed. A month scored 4.0 or better moves a chef to Level 2 and 10% more pay; holding it for three months is Level 3 and 20%. It is the same ladder in the supplier’s paperwork — one document, not a client version and a chef version.',
    ],
  },
  progression: {
    title: 'Levels move — in both directions',
    body: 'Chefs progress through verified experience, reassessment, client performance, new skills and successful placements: Professional → Senior, and specialist accreditations on top. A chef can also be placed under review. The classification is alive, not a marketing label assigned forever.',
  },
  criticalFailures: {
    title: 'The average never overrides safety',
    body: 'A food-safety failure, a serious allergen-handling failure, false documentation or serious professional misconduct puts a chef on hold immediately — regardless of their overall score. The score is not a shield, and it cannot be gamed past safety.',
  },
}

export const evidenceChain = {
  eyebrow: 'Claimed is not the same as verified',
  title: 'What a chef says — and what we have checked',
  intro:
    'Every claim on a chef’s profile sits somewhere on this chain. A chef with a spectacular CV and thin verification should not look identical to a chef whose history we have actually validated — so we track the difference.',
  steps: [
    'CV supplied',
    'Employment checked',
    'References contacted',
    'Certificates checked',
    'Practical assessment completed',
    'myCHEF household performance recorded',
  ],
  closer:
    'The further down the chain, the more the profile is evidence rather than autobiography.',
}

export const exampleProfiles = {
  eyebrow: 'What a chef profile looks like',
  note: 'Both profiles are demonstrations of the format — not real chefs, and not published scores.',
  established: {
    tag: 'Confirmed',
    level: 'Level 3 · confirmed',
    fields: [
      { k: 'Household score', v: '4.4 / 5 across six months' },
      { k: 'Verified quality', v: 'Assessment complete' },
      { k: 'Client performance', v: 'From verified myCHEF placements' },
      { k: 'Professional experience', v: '12 years' },
      { k: 'Private household experience', v: '4 years' },
      { k: 'Specialties', v: 'Mediterranean · Japanese · Healthy cooking' },
    ],
    body: 'A confirmed profile: the assessment is complete, and the performance half of the score comes from completed placements in real households. When we recommend this chef, we can show you why.',
  },
  provisional: {
    tag: 'Provisional',
    level: 'Professional Chef',
    fields: [
      { k: 'Verified quality', v: 'Assessment complete' },
      { k: 'Client performance', v: 'Not yet established' },
      { k: 'Professional experience', v: '9 years' },
      { k: 'Private household experience', v: 'New to private service' },
      { k: 'Specialties', v: 'Italian · Family cooking' },
    ],
    body: 'An honest new profile: strong verified background, no household history with us yet — so no invented performance score. Provisional chefs start on supervised or smaller bookings, and their level is confirmed by real houses, not by us being optimistic.',
  },
}

export const matchingSteps = [
  'You describe the household',
  'We calculate the role requirements',
  'The role determines the chef level',
  'We search within that level for cuisine and personality fit',
  'You see the chef’s verified profile',
  'You see exactly what the service costs',
  'You approve before anything starts',
] as const

export const roleQuestions = {
  eyebrow: 'Tell us about the job',
  title: 'We ask about the role — never “what level would you like?”',
  intro:
    'You should not have to know what level chef your household needs. That is our job. What we need from you is how the house actually works:',
  groups: [
    {
      label: 'Time',
      items: ['How long you need the service', 'Days per week', 'Hours per day', 'Flexible or fixed meal times'],
    },
    {
      label: 'The household',
      items: ['How many people', 'Which meals', 'Children', 'Dietary and allergy requirements', 'Entertaining and events'],
    },
    {
      label: 'The kitchen',
      items: ['Kitchen facilities', 'Other household staff', 'Live-in or live-out', 'Travel with the household'],
    },
    {
      label: 'The work',
      items: ['Who handles groceries', 'Menu planning', 'Pantry management', 'Serving', 'Cleaning related to cooking'],
    },
    {
      label: 'The standard',
      items: ['The cooking standard you expect', 'Cuisines you want', 'What “healthy” means in this house'],
    },
  ],
  closer:
    'From those answers we calculate the role — and the role tells us the level, the hours and the team. Then you see the recommendation and the reasoning, not just a number.',
}

/* ---------- Pricing: the logic, not a menu ---------- */

export const priceFactors = {
  eyebrow: 'What actually determines your price',
  title: 'Five things build the price. Nothing else does.',
  factors: [
    { label: 'Service format', body: 'Prep, dinner, food management or full-day — the chef’s working time, defined before we start.' },
    { label: 'Days per week', body: 'One to seven. Seven-day households use chef rotation when required.' },
    { label: 'Chef quality', body: 'One rate per job, whoever cooks it. A chef’s level changes what the chef earns — 10% at Level 2, 20% at Level 3 — never what the house pays.' },
    { label: 'Plan length', body: 'Displayed prices are ongoing monthly plans. Under one month runs at 1.5× the ongoing rate.' },
    { label: 'Transport', body: 'A published per-visit zone rate: typical taxi fare + 50% for the chef’s time in transit. The table is on this page.' },
  ],
  formula: 'Service format × days per week + zone transport, on a monthly plan = your price.',
  groceriesLine: 'Groceries are on top, at actual receipts — never marked up. Take over the whole food process and Daily Prep becomes five hours: the chef’s additional time is what you pay for.',
  transition:
    'The calculator above shows the real number — there is only one, because the house pays the same rate whoever cooks. Whatever you choose, the full price arrives in writing, every factor itemised, before you commit to anything.',
}

export const workingHours = {
  eyebrow: 'Working time',
  title: 'Your chef’s time is defined before we start',
  intro: [
    '“Two meals a day” is not a price. Breakfast at 08:00 and lunch at 12:00 is one job. Breakfast at 07:00 and dinner at 20:00 is a completely different one — same two meals, very different day. That is why we price working time, not meal counts.',
    'Before the first service, your agreement defines the time — so “full day” never means one thing to you and another to the chef:',
  ],
  items: [
    'How many hours each service day includes',
    'What counts as working time',
    'When we handle the food, Daily Prep becomes a five-hour service — the two extra hours are the planning and shopping, priced as chef time',
    'What a split shift means, when mornings and evenings are far apart',
    'Additional hours beyond your format: AED 150 per hour — agreed in advance, never assumed',
    'How late service works',
    'How seven-day coverage rotates between chefs',
  ],
  closer: 'No client should discover after booking what “full day” means. You will not have to.',
}

export const groceryModes = {
  eyebrow: 'Groceries at cost. Always.',
  title: 'We make money from providing the service, not from marking up your tomatoes',
  intro:
    'Normally you provide the groceries and the chef has three hours for preparation and cooking. If you want us to take over the complete food process, the service becomes five hours. Those additional two hours cover meal planning, shopping, ingredient selection and bringing everything to your home. The groceries themselves are charged at the exact cost. We add no markup.',
  modes: [
    {
      label: 'You handle the groceries',
      body: 'Tell us what you want. We help establish your Food Profile and meal direction — and the ingredients are there when the chef arrives, so the chef’s time is focused on preparation and cooking.',
    },
    {
      label: 'We handle the food',
      body: 'The chef who cooks is the chef who shops: they plan the meals, build the list, buy the groceries in person or online, select the ingredients and check quality and freshness before cooking with them. That is one of the real benefits of the five-hour version — the person choosing your fish is the person cooking it.',
    },
  ],
  costs: [
    { k: 'The principle', v: 'The groceries are not marked up. The chef’s additional time is what you pay for.' },
    { k: 'The ingredients', v: 'Actual receipts. No markup, ever.' },
    { k: 'How they are paid', v: 'You shop yourself, authorise the chef to pay with your card or household account, or we order online for you.' },
  ],
  closer: 'Grocery responsibility is a choice, not a chef level. Agreed in advance either way — so a simple healthy house does not subsidise someone eating wagyu.',
  paymentProcess: {
    label: 'How payment works in practice',
    steps: [
      'We agree the arrangement with you in writing before the first shop — which supermarkets, roughly what budget, who pays how.',
      'Most clients register a card or sign a short authorisation for the household account; some prefer to pre-order online themselves.',
      'The chef shops against the agreed menu and keeps every receipt.',
      'The receipts come with your monthly invoice — you see exactly what was bought, at the shop’s own prices.',
    ],
  },
}

export const transportZones = {
  eyebrow: 'Transport, published',
  title: 'Getting the chef to your door — the formula is public',
  intro:
    'Transport is charged per service visit, and we would rather show you how the number is made than hide it in the price: we take the typical booked taxi fare to the middle of your zone, add 50% for the chef’s time spent in transit, and round to the nearest AED 5. That is the whole formula.',
  zones: [
    {
      zone: 'Zone 1 · Central',
      areas: 'Downtown Dubai, DIFC, Business Bay, Jumeirah',
      taxi: '~AED 25–30',
      fee: 40,
    },
    {
      zone: 'Zone 2 · Mid',
      areas: 'Umm Suqeim, Al Barsha, Dubai Hills',
      taxi: '~AED 40–45',
      fee: 65,
    },
    {
      zone: 'Zone 3 · Marina & Palm',
      areas: 'Dubai Marina, JBR, JLT, Bluewaters, Palm Jumeirah, Emirates Hills, JVC',
      taxi: '~AED 60–70',
      fee: 95,
    },
    {
      zone: 'Zone 4 · Outer',
      areas: 'Arabian Ranches and beyond',
      taxi: '~AED 80–90',
      fee: 130,
    },
  ],
  notes: [
    'The calculator above already includes your zone’s transport in the displayed price — what you see is what the visit costs, chef’s travel included.',
    'Charged per service visit, on your monthly invoice — no surprises on the day.',
    'Taxi estimates follow RTA rates, which adjust with fuel prices; we review the zones when the meter changes, not per trip.',
    'If the chef also shops for you on the way, transport to the shops is at actual cost on receipts.',
  ],
}

export const teamWorkload = {
  eyebrow: 'The team',
  title: 'We build the team around the workload',
  paras: [
    'A chef preparing a normal dinner for two does not need an assistant, and you should not pay for one. The thresholds are published: one chef handles up to ten people alone. From eleven, an assistant joins — roughly one per twelve guests — each at 25% of the service price.',
    'Above 49 people it stops being household service and becomes a Lead Chef event: a full team, a designed menu, one event price. The team is part of the calculator — itemised in your price, not hidden in it.',
  ],
}

export const whereMoneyGoes = {
  eyebrow: 'Where your money goes',
  title: 'The difference between a chef’s pay and your price is not unexplained markup',
  intro: 'Your service price carries the whole system, and we would rather show the structure than have you guess:',
  items: [
    'Chef compensation',
    'An assistant, where the workload requires one',
    'Assessment, verification and the chef-level system',
    'Matching and household management',
    'Scheduling and the backup / replacement system',
    'Administration',
    'Transport at the published zone rate',
    'Groceries at cost — no margin on food, ever; when we shop, you pay chef time, not a fee',
  ],
}

export const lifeStages = [
  {
    when: 'The first week',
    title: 'We learn.',
    body: 'Spicy may mean something else in this house. Breakfast at 8:00 may be coffee at 7:30. The children may love Japanese food and refuse mushrooms. The chef learns the kitchen — where the knives live, which burner runs hot, how this family actually sits down. Your contact learns too. The Food Profile starts as a sketch. It should not stay one.',
  },
  {
    when: 'The first month',
    title: 'We know.',
    body: 'Monday morning, breakfast appears the way they like it. The children get food they will actually eat. Friday can still surprise us; that is fine. You still correct things. That is the point of the first month — not perfection, a kitchen that is becoming yours. After a year you should not be re-explaining breakfast. After four weeks you should already be explaining less.',
  },
  {
    when: 'Six months later',
    title: 'You barely need to ask.',
    body: 'Friday they suddenly want Japanese. Friends come Saturday. The usual chef takes Sunday off. Nobody in the family coordinates it. The house has a food service, not a series of bookings. Our goal is to be there without feeling like we are there.',
  },
]

export const dontPromise = [
  'We don’t promise every chef is available every day.',
  'We don’t pretend one person should work seven days without rest.',
  'We don’t promise every chef will fit every household.',
  'We don’t promise mistakes never happen.',
  'We don’t promise every request is possible at every hour.',
  'We don’t promise zero allergy risk.',
]

export const doPromise = [
  'We promise a match, a standard, and a backup.',
  'We promise one contact once you are an ongoing client.',
  'We promise the Food Profile travels when the chef changes.',
  'We promise to tell you when an equivalent chef is not available — then give you the options.',
  'We promise the full price and the logic behind it, in writing, before you commit.',
  'We promise no chef score is invented — performance comes from completed placements only.',
]

export const proofItems = [
  {
    label: '50+ professionals',
    body: 'Not a locked roster. We put forward who the house needs. If the match is not here, we find it. Matching is not limited to the chefs listed on this page.',
  },
  {
    label: 'Checked before they enter',
    body: 'Identity and right-to-work. A practical cooking assessment. References. Food-hygiene awareness. A trial period. Then ongoing review. The process is public — read how we vet our chefs.',
  },
  {
    label: 'Levels earned, not claimed',
    body: 'Chefs from professional kitchens, then assessed for private service. A restaurant title is history; a myCHEF level is evidence. New chefs start Provisional until real households confirm them.',
  },
  {
    label: 'A Food Profile that travels',
    body: 'The next chef is not starting from zero. The profile is yours — see it, correct it, or ask for it to be deleted. If you leave, you should be able to take that information with you.',
  },
  {
    label: 'One contact, not a network to manage',
    body: 'Once you are an ongoing client, one person is responsible for your service. Specialists, backups and Saturday guests go through that person — not through you becoming HR.',
  },
  {
    label: 'No invented reviews — or scores',
    body: 'We do not publish testimonials we did not receive, and a chef’s performance score comes only from completed myCHEF placements. If you have used the service, leave a review. That is the only kind we want.',
  },
]

export const vettingSteps = [
  {
    title: 'Identity and right-to-work',
    body: 'Government-issued identification, valid UAE visa status, and right-to-work documents. We do not accept a chef who cannot prove they are legally permitted to work here.',
  },
  {
    title: 'Practical cooking assessment',
    body: 'A cook-off, not a conversation about cooking. Knife work, hygiene, plating, timing, more than one dish at once.',
  },
  {
    title: 'References',
    body: 'We contact previous employers, clients or venues. Gaps get investigated before anyone is put forward for a house.',
  },
  {
    title: 'Food safety',
    body: 'Safe handling, temperature, cross-contamination, allergens. PIC certification is preferred. Basic food-hygiene awareness is mandatory. We do not claim every chef holds one named certificate.',
  },
  {
    title: 'Trial period',
    body: 'New chefs start on supervised or smaller bookings. High-stakes evenings are not the first time we see them work in a real kitchen.',
  },
  {
    title: 'Ongoing review',
    body: 'Feedback after every placement feeds the chef’s performance score. Punctuality and presentation watched. A pattern of problems gets a conversation, a new match, or a chef who does not come back.',
  },
]

export const inspectUs = [
  { label: 'How we vet chefs', href: '/how-we-vet-our-chefs' },
  { label: 'Chefs in the network', href: '/our-chefs' },
  { label: 'Booking protection', href: '/booking-protection-insurance' },
  { label: 'Leave a real review', href: '/review' },
  { label: 'Catering — one night', href: '/catering-dubai' },
]

export const featuredChefs = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Sample profile · format only',
    cuisine: 'Modern European & fine dining',
    specialties: ['French technique', 'Villa dining', 'Fine dining'],
    experience: '18+ years',
    image: '/team-head-chef.webp',
    href: '/chefs/ahmed-executive-chef',
  },
  {
    name: 'Marco Rossi',
    role: 'Sample profile · format only',
    cuisine: 'Italian & Mediterranean',
    specialties: ['Italian', 'Pasta', 'Family-style'],
    experience: '15+ years',
    image: '/team-sous-chef.webp',
    href: '/chefs/marco-italian-chef',
  },
  {
    name: 'Layla Hassan',
    role: 'Sample profile · format only',
    cuisine: 'Arabic & Levantine',
    specialties: ['Arabic', 'Mezze', 'Grilled meats'],
    experience: '14+ years',
    image: '/images/chefs/layla-hassan.webp',
    href: '/chefs/layla-middle-eastern-chef',
  },
  {
    name: 'Matteo Moretti',
    role: 'Sample profile · format only',
    cuisine: 'Patisserie & dessert design',
    specialties: ['Pastry', 'Chocolate', 'Plated desserts'],
    experience: '12+ years',
    image: '/team-pastry-chef.webp',
    href: '/chefs/matteo-pastry-chef',
  },
]

export const whenThingsChange = [
  {
    title: 'The usual chef is off',
    body: 'If you employ one person and they are unavailable, you have a problem. With myCHEF the next chef is not walking in knowing nothing. If an equivalent chef is not available, we tell you — then we give you the options. We do not fill a slot with whoever is free and hope you will not notice.',
  },
  {
    title: 'Friday wants Japanese',
    body: 'Keep the weekday chef. Ask your contact for a specialist. You do not make a second hire, and you do not need the most senior chef in the network every day because you want one extraordinary dinner.',
  },
  {
    title: 'Friends on Saturday',
    body: 'We do not pretend your normal weekday setup should suddenly handle thirty people. We build the team for the evening and give you one event price — not 25 small charges buried in the month.',
  },
  {
    title: 'Seven-day coverage',
    body: 'Chefs are professionals, not machines. Seven-day service uses rotation. Quality comes before squeezing impossible hours out of one person. Late service can be arranged — it should be arranged, not assumed.',
  },
  {
    title: 'The house changes',
    body: 'A new diet. A child who will not eat mushrooms. Guests for a month. You tell your contact. The Food Profile updates. The chef is not expected to guess, and you are not expected to re-brief the entire kitchen from scratch.',
  },
  {
    title: 'You travel, then come back',
    body: 'Pause the standing rhythm while you are away. Restart it without rebuilding the profile. That is one of the reasons a system is different from a person you found once.',
  },
]

export const householdIncludes = [
  'A team built around the workload — one chef where one chef is enough, an assistant where the work requires one',
  'myCHEF management and a dedicated client contact',
  'Food Profile, quality monitoring and regular feedback',
  'Scheduling, backup and replacement coordination',
  'Chef rotation and access to the wider network',
  'Right-to-work checks and service administration',
]

export const profileQuestions = [
  'What do you eat? What don’t you eat?',
  'Allergies?',
  'Which cuisines?',
  'What does “healthy” mean to you?',
  'When do you normally eat, and how much?',
  'What does the family like? What do the children eat?',
  'Coffee — and how?',
  'Do you want the chef around you, or quiet service in the background?',
]

export const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'JVC', slug: 'jvc' },
  { name: 'JLT', slug: 'jlt' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Al Barsha', slug: 'al-barsha' },
]

export const faqs = [
  {
    q: 'What does a private chef in Dubai cost?',
    a: 'One rate per job: Fresh Meal (3 hours) AED 750, Private Chef Food Prep (4h) AED 900, Kitchen on Autopilot (5h) AED 1,050, Full-Day Private Chef (9h) AED 1,500. A weekly Fresh Meal is AED 3,000 a month; four days a week of Autopilot is 16 visits at AED 16,800. Groceries are charged at the actual receipts with no markup, and there is no more expensive grade of chef to be moved up to.',
  },
  {
    q: 'Can I book a private chef for less than a month?',
    a: 'Yes — at 1.5× the ongoing-plan rate. Displayed prices are for ongoing household plans of at least one month, because most of our work happens at the beginning: chef matching, household setup, Food Profile creation, planning and calibration. A single dinner is catering — use the catering pages.',
  },
  {
    q: 'What are the myCHEF chef quality levels?',
    a: 'One ladder, and it is about pay rather than rank. Level 1 is where every approved chef starts and the price the house pays is the price. Level 2 is a month scored 4.0 or better and 10% more to the chef; Level 3 is holding that for three months, 20% more, and first sight of the catering work. Specialists — sushi, pastry, a particular regional kitchen — are booked alongside your regular chef for the meal that needs one, quoted per occasion rather than sitting on the ladder. A chef leading a team for a large event is a catering job. Levels are earned through our assessment and real household scores, never claimed from a restaurant title.',
  },
  {
    q: 'How does a chef earn their level?',
    a: 'Every chef carries a score out of 100 with two parts: what we verify ourselves before placement (background, practical assessment, household capability, standards, specialist skills — the larger share) and verified client performance from completed myCHEF placements. Each level corresponds to a score band, and below our pass mark a chef is not placed at all. New chefs start Provisional until real households confirm them.',
  },
  {
    q: 'Why don’t you price by meals per day?',
    a: 'Because meal counts hide the real job. Breakfast at 08:00 and lunch at 12:00 is a five-hour day; breakfast at 07:00 and dinner at 20:00 is a completely different one — both are “two meals.” So you choose a service format defined by working time: Daily Prep (up to 3 hours — 5 with grocery management), Dinner Service (up to 4) or Full-Day Chef (up to 9).',
  },
  {
    q: 'What is the minimum?',
    a: 'One month at displayed rates, from one day per week. Anything shorter runs at 1.5× — see the question above. A single dinner is catering.',
  },
  {
    q: 'Who buys the groceries?',
    a: 'Your choice. Normally you provide the groceries and the chef’s three hours go into preparation and cooking. If you want us to take over the complete food process, Daily Prep becomes a five-hour service: the additional two hours cover meal planning, shopping, ingredient selection and bringing everything to your home. The groceries themselves are charged at the exact receipts — we add no markup; the chef’s additional time is what you pay for. Payment: you shop yourself, authorise the chef to pay with your card or household account, or we order online.',
  },
  {
    q: 'What does transport cost?',
    a: 'A published per-visit zone rate, built from a public formula: the typical booked taxi fare to the middle of your zone, plus 50% for the chef’s time in transit, rounded to the nearest AED 5. Zone 1 (Downtown, DIFC, Business Bay, Jumeirah) AED 40 · Zone 2 (Umm Suqeim, Al Barsha, Dubai Hills) AED 65 · Zone 3 (Marina, JBR, JLT, Bluewaters, Palm, Emirates Hills, JVC) AED 95 · Zone 4 (Arabian Ranches and beyond) AED 130. It appears on your monthly invoice, not as a surprise on the day.',
  },
  {
    q: 'What counts as working time?',
    a: 'It is defined in your agreement before the first service: the hours each service format includes, that planning and shopping use those booked hours when we handle the food (no fee is added for them), what a split shift means, and how additional hours are agreed and charged. “Full day” should never mean one thing to you and another to the chef.',
  },
  {
    q: 'Do you employ the chef, or do I?',
    a: 'Neither, in the usual sense. A licensed supplier employs the chef, on a visa we have asked to see. myCHEF organises the match, the standard, the backup and your contact. You are not putting a chef on your payroll.',
  },
  {
    q: 'What happens if my chef is unavailable?',
    a: 'The next chef is not starting from zero — the Food Profile travels. If an equivalent chef is not available, we tell you, then we give you the options.',
  },
  {
    q: 'Do you cook halal, and can you handle allergies?',
    a: 'Halal sourcing is the default. Allergies are part of onboarding. We do not claim an allergic reaction can never happen. If a request is professionally unsafe, safety comes before preference. See [halal catering](/halal-catering-dubai) and [allergy-safe catering](/allergy-safe-catering-dubai).',
  },
  {
    q: 'How many people can one chef cook for?',
    a: 'Up to ten, alone. From eleven we add an assistant — roughly one per twelve guests — each at 25% of the service price, itemised in the calculator. Above 49 people it becomes a Lead Chef event: full team, designed menu, one event price, arranged directly.',
  },
  {
    q: 'Do allergies or special diets change the price?',
    a: 'No. Dietary requirements change the match, not the price — we search for the chef with the right skills, and allergies are handled as part of onboarding. Price is built from time, days, people and chef quality. Nothing else.',
  },
  {
    q: 'Is VAT included in the prices?',
    a: 'Prices on this page are shown before VAT. 5% VAT is shown separately on your invoice — like everything else here, no number is hidden inside another one.',
  },
  {
    q: 'Can I pause the plan when I travel?',
    a: 'Yes. Pause the standing rhythm while you are away and restart it without rebuilding the profile — the Food Profile and your chef relationship are still there when you come back. That is one of the reasons a system is different from a person you found once.',
  },
  {
    q: 'How do I start?',
    a: 'Choose a service format and how many days a week, tell us how the house eats, and when you want to begin. We calculate the role, recommend the chef level, and put the full price in writing before anything starts. WhatsApp or the inquiry form. During business hours we typically reply within 15 minutes.',
  },
]

export const relatedServices = [
  {
    title: 'Catering in Dubai',
    description: 'One night, a birthday, a yacht, clients — that booking lives here.',
    image: '/images/catering-dubai-hero.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Weekly Meal Prep',
    description: 'Food handled without a chef in the house every day.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'How we vet chefs',
    description: 'Identity, cooking assessment, references and ongoing review.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
]

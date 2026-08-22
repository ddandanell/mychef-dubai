export const PAGE_PATH = '/private-chef-dubai'
export const CAMPAIGN = 'private-chef-dubai'

export const SEO_TITLE = 'Private Chef Dubai | Hire a Personal Chef at Home | myCHEF'
export const SEO_DESCRIPTION =
  'Book a private chef in Dubai from AED 1,200 for dinner, or a household chef from AED 900 a day. Vetted chefs, one contact, prices on this page.'
export const H1 = 'Book a private chef in Dubai'
export const HERO_IMAGE = '/images/private-chef-dubai-hero.webp'
export const HERO_IMAGE_WIDTH = 1280
export const HERO_IMAGE_HEIGHT = 720

export const photos = [
  {
    src: '/images/private-chef-dubai-hero.webp',
    alt: 'Private chef plating a course in a dark Dubai villa kitchen overlooking the skyline at dusk',
    width: 1280,
    height: 720,
  },
  {
    src: '/images/private-chef-dubai-system.webp',
    alt: 'Private chef and assistant working together in a Dubai villa kitchen',
    width: 1248,
    height: 832,
  },
  {
    src: '/images/private-chef-dubai-evening.webp',
    alt: 'Candlelit private chef dinner for two in a Dubai villa with the city skyline',
    width: 1248,
    height: 832,
  },
  {
    src: '/images/private-chef-dubai-household.webp',
    alt: 'Household private chef preparing a family lunch in a Dubai villa kitchen',
    width: 1248,
    height: 832,
  },
  {
    src: '/images/private-chef-dubai-yacht.webp',
    alt: 'Private chef plating canapés on a yacht deck with the Dubai Marina skyline',
    width: 1248,
    height: 832,
  },
  {
    src: '/images/private-chef-dubai-plating.webp',
    alt: 'Chef finishing a sea bass tasting plate with herbs and oil',
    width: 1248,
    height: 832,
  },
] as const

export const HERO_SUBTITLE =
  'A private chef is easy to find. A service that stays consistent is not. myCHEF sends a vetted chef to your home, villa or yacht — for one dinner, or as a standing household arrangement. We run the match, the standard and the backup. You stay a guest at your own table.'

export const WHATSAPP_NUMBER = '971551744849'
export const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a private chef. Evening dinner or household arrangement? Date: __, Guests: __, Location: __, Meals: __ (via mychef.ae/private-chef-dubai)"

export const paths = [
  {
    id: 'evening',
    eyebrow: 'An evening',
    title: 'From AED 1,200 for two',
    body: 'Date night, birthday, clients, a yacht. Groceries are in the quote.',
  },
  {
    id: 'household',
    eyebrow: 'A household',
    title: 'From AED 900 a day',
    body: 'Breakfast, dinner, or the full day — by the day, the week or the month. Groceries are separate.',
  },
] as const

export const whoFor = [
  {
    title: 'A dinner you do not want to cook',
    body: 'Two people or twenty. A private chef dinner in Dubai: menu designed with you, cooked in your kitchen, kitchen left handled.',
  },
  {
    title: 'A family that does not want another person to manage',
    body: 'A private chef for the household without you becoming the scheduler, the backup plan, or the HR department.',
  },
  {
    title: 'A villa stay of weeks or months',
    body: 'A villa chef in Dubai who already understands the house — not a restart every Monday.',
  },
  {
    title: 'Nutrition, controlled',
    body: 'Every meal should follow what you actually mean by healthy. That is personal chef meal prep done properly.',
  },
  {
    title: 'Anyone who does not want to think about food every day',
    body: 'That is a legitimate reason to want a chef. It is also a reason to want a system.',
  },
]

export const comparison = [
  {
    topic: 'Finding a chef',
    alone: 'You interview and hope.',
    mychef: 'You are matched to a chef already vetted for identity, cooking and references.',
  },
  {
    topic: 'When they are unavailable',
    alone: 'You have no dinner.',
    mychef: 'The next chef is not starting from zero — your Food Profile travels.',
  },
  {
    topic: 'Quality',
    alone: 'You hope.',
    mychef: 'Service is reviewed. A pattern of problems gets a conversation, a new match, or a chef who does not come back.',
  },
  {
    topic: 'A specialist on Friday',
    alone: 'Another hire.',
    mychef: 'Ask your contact.',
  },
  {
    topic: 'Paperwork and the relationship',
    alone: 'You own it.',
    mychef: 'You talk to one person. We manage the network.',
  },
  {
    topic: 'Cost',
    alone: 'A freelancer can look cheaper on day one. You are paying for the person only.',
    mychef: 'The person plus backup, matching, review, and a kitchen that already knows the house.',
  },
]

export const processSteps = [
  {
    num: '01',
    title: 'Tell us the date — or the rhythm',
    body: 'An evening needs a date and a guest count. A household needs how many meals, which days, and what “healthy” means in this house.',
  },
  {
    num: '02',
    title: 'We match a chef — not whoever is free',
    body: 'The match is the kitchen, the cuisine and the format. Before anyone enters, we check identity and right-to-work, run a practical cooking assessment, and take references.',
  },
  {
    num: '03',
    title: 'For a household, we build your Food Profile',
    body: 'What you eat, what you do not, allergies, timing, how the children eat, whether you want conversation or quiet service. If it does not help us cook for you, we do not need it.',
  },
  {
    num: '04',
    title: 'They shop as agreed, cook in your kitchen, leave it handled',
    body: 'You provide the room and the guests. The chef manages the food, the kitchen, the service style and the plate.',
  },
  {
    num: '05',
    title: 'We ask how it was. Then we improve',
    body: 'After about two days on a standing arrangement, we contact you separately from the chef. A rating starts a conversation — not a punishment machine.',
  },
]

export const whoDoesWhat = [
  {
    who: 'myCHEF',
    items: [
      'The match',
      'Vetting and right-to-work checks',
      'The Food Profile',
      'Scheduling, backup and rotation',
      'Specialists when you want one',
      'Quality review',
      'Your dedicated contact once you are an ongoing client',
    ],
  },
  {
    who: 'The chef',
    items: [
      'The food',
      'The kitchen',
      'The service style',
      'The plate',
    ],
  },
  {
    who: 'You',
    items: [
      'What you want to eat',
      'When',
      'Whether the match is right',
    ],
  },
]

export const eveningPackages = [
  {
    name: 'Date Night',
    guests: '2 guests',
    price: '1,200',
    detail: 'Bespoke 3-course menu, chef, table service, cleanup.',
    link: '/date-night-package-dubai',
  },
  {
    name: 'Family Feast',
    guests: '6–8 guests',
    price: '2,400',
    detail: 'Sharing-style menu, chef and service support.',
    link: '/family-feast-package-dubai',
  },
  {
    name: 'Birthday Celebration',
    guests: '8–12 guests',
    price: '3,600',
    detail: 'Celebration menu and service staff.',
    link: '/birthday-catering-package-dubai',
  },
  {
    name: 'Corporate Dinner',
    guests: '10–15 guests',
    price: '4,500',
    detail: 'Multi-course or buffet, service staff.',
    link: '/corporate-dinner-package-dubai',
  },
  {
    name: 'The Full Experience',
    guests: '6–10 guests',
    price: '5,500',
    detail: 'Tasting menu, wine-pairing consultation, full service team.',
    link: '/luxury-dining-experiences',
  },
]

export const perPersonBands = [
  { guests: '2 guests', band: 'AED 950–1,300' },
  { guests: '4 guests', band: 'AED 800–1,100' },
  { guests: '6 guests', band: 'AED 750–1,000' },
  { guests: '10 guests', band: 'AED 700–950' },
  { guests: '20+', band: 'From AED 600' },
]

export const chefLevels = [
  {
    name: 'Private',
    monthlyFull: '30,000',
    body: 'A strong professional for everyday household cooking.',
  },
  {
    name: 'Select',
    monthlyFull: '40,000',
    body: 'More experienced, with stronger demonstrated myCHEF performance.',
  },
  {
    name: 'Executive',
    monthlyFull: '55,000',
    body: 'Senior chef for demanding households, nutrition and entertaining.',
  },
  {
    name: 'Elite',
    monthlyFull: '75,000',
    body: 'High experience, performance and discretion.',
  },
  {
    name: 'Signature',
    monthlyFull: '100,000',
    body: 'Our highest chef level.',
  },
] as const

export type ChefLevelName = (typeof chefLevels)[number]['name']
export type MealPlan = '1' | '2' | 'full'

/** Daily starting prices (AED). Weekly = ×5. Monthly ≈ ×20 service days. */
export const dailyRates: Record<ChefLevelName, Record<MealPlan, number>> = {
  Private: { '1': 900, '2': 1200, full: 1500 },
  Select: { '1': 1200, '2': 1600, full: 2000 },
  Executive: { '1': 1650, '2': 2200, full: 2750 },
  Elite: { '1': 2250, '2': 3000, full: 3750 },
  Signature: { '1': 3000, '2': 4000, full: 5000 },
}

export const householdIncludes = [
  '1 private chef + 1 assistant',
  'myCHEF management and a dedicated client contact',
  'Food Profile, quality monitoring and regular feedback',
  'Scheduling, backup and replacement coordination',
  'Chef rotation and access to the wider network',
  'Right-to-work checks and service administration',
]

export const upgrades = [
  { to: 'Select', price: '1,000' },
  { to: 'Executive', price: '2,000' },
  { to: 'Elite', price: '3,500' },
  { to: 'Signature', price: '5,000' },
]

export const extraTeam = [
  { role: 'Additional chef', price: '1,500' },
  { role: 'Senior / specialist chef', price: '2,500' },
  { role: 'Signature chef', price: '5,000' },
  { role: 'Additional assistant', price: '750' },
  { role: 'Waiter', price: '600' },
  { role: 'Bartender', price: '900' },
  { role: 'Event captain', price: '1,500' },
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
    q: 'How much does a private chef cost in Dubai?',
    a: 'An evening starts from AED 1,200 for two (groceries in the quote). A household chef starts from AED 900 a day, or AED 18,000+ a month for Private level, one meal a day, five service days. Groceries are separate on household arrangements. Higher chef levels and more meals follow the matrix on this page. See the full [private chef prices](/private-chef-prices-dubai) breakdown for per-person dinner bands.',
  },
  {
    q: 'What is the difference between an evening and a household chef?',
    a: 'An evening is one service — a private chef dinner in your kitchen. A household arrangement is a standing rhythm: breakfast, dinner, or the full day, by the day, the week or the month. Evening quotes include groceries. Household prices do not, so a simple healthy household does not subsidise someone eating wagyu.',
  },
  {
    q: 'Do you employ the chef, or do I?',
    a: 'Neither, in the usual sense. Independent licensed culinary partners cook. myCHEF organises the match, the standard, the backup and your contact. You are not putting a chef on your payroll, and you are not buying one specific person forever. You are buying access to the myCHEF system at a defined quality level.',
  },
  {
    q: 'What is a myCHEF Food Profile?',
    a: 'A working record of how this house eats: likes, dislikes, allergies, timing, portions, how the children eat, and whether you want conversation or quiet service. It is yours. You can see it, correct it, or ask for it to be deleted. If you leave, you should be able to take that information with you.',
  },
  {
    q: 'What happens if my chef is unavailable?',
    a: 'If you employ one person and they are off, you have a problem. With myCHEF the next chef is not walking in knowing nothing — the Food Profile travels. If an equivalent chef is not available, we tell you, then we give you the options.',
  },
  {
    q: 'How far in advance should I book a private chef in Dubai?',
    a: 'Evenings: often 48 hours; last-minute when we can. A new household: about five days. Once we know you, two days is often enough. Peak weekends and holidays are safer with more notice. During business hours we typically reply within 15 minutes.',
  },
  {
    q: 'Can I upgrade one meal without upgrading the whole month?',
    a: 'Yes. Keep your weekday chef. Add an Elite chef for Saturday dinner. Pay only the disclosed upgrade for that meal — from AED 1,000+ to Select, AED 2,000+ to Executive, AED 3,500+ to Elite, AED 5,000+ to Signature. You can also rotate a cuisine specialist on Friday without changing the month.',
  },
  {
    q: 'Are groceries included?',
    a: 'For an evening, yes — groceries are in the quote. For a household arrangement, groceries are separate and agreed in advance. This is intentional. 5% VAT is shown separately. A deposit confirms an evening date.',
  },
  {
    q: 'What is included in a private chef evening?',
    a: 'Menu designed with you, ingredients sourced, cooking in your kitchen, plating, service, and a kitchen left handled. You provide the room and the guests. Extra courses, extra servers, rentals and VAT are itemised. Starting packages live on this page and on [catering packages](/catering-packages-dubai).',
  },
  {
    q: 'Can a private chef cook in my villa, apartment or yacht kitchen?',
    a: 'Yes — villas, apartments, penthouses and yachts across Dubai are standard, including [Palm Jumeirah](/locations/palm-jumeirah), [Dubai Marina](/locations/dubai-marina), [Downtown Dubai](/locations/downtown-dubai) and [Emirates Hills](/locations/emirates-hills). The chef adapts to a full villa kitchen or a compact galley. Access and equipment are confirmed before the date.',
  },
  {
    q: 'Do you cook halal, and can you handle allergies?',
    a: 'Halal sourcing is the default, and chefs in the network can work in a halal kitchen with segregated preparation on request. Allergies and diets are part of onboarding — vegan, vegetarian, gluten-free, dairy-free, nut-free and others. We do not claim an allergic reaction can never happen. If a request is professionally unsafe, safety comes before preference. See [halal catering](/halal-catering-dubai) and [allergy-safe catering](/allergy-safe-catering-dubai).',
  },
  {
    q: 'How are chefs vetted?',
    a: 'Before anyone enters your kitchen we check identity and right-to-work, run a practical cooking assessment, and take references. Head chefs we place have typically led a restaurant kitchen for five to ten years. The full process is on [how we vet our chefs](/how-we-vet-our-chefs).',
  },
  {
    q: 'Can I book a private chef regularly or for weekly meal prep?',
    a: 'Yes. The household arrangement on this page is the standing version. If you want food handled without a chef in the house every meal, [weekly meal prep](/weekly-meal-prep-dubai) is the lighter version — from AED 1,898 a week, cooked in your kitchen, portioned and labelled.',
  },
  {
    q: 'Is seven-day coverage possible? Late service until 2:00?',
    a: 'Yes, when arranged — not assumed. Chefs are professionals, not machines. Seven-day coverage uses rotation. Quality comes before squeezing impossible hours out of one person. Late service until 2:00 can be arranged and is quoted before confirmation.',
  },
  {
    q: 'Do I need special kitchen equipment?',
    a: 'No. Chefs bring what they need. You provide access to the kitchen and basic utilities. Unusual venues — a yacht galley, a kitchen-light penthouse — are flagged in the quote, not as a surprise on the night.',
  },
  {
    q: 'How do I get a quote and pay?',
    a: 'Send the date or the rhythm, guest count and venue. We typically reply within 15 minutes during business hours. Evening bookings are confirmed with a deposit; the balance is settled before or on the day. 5% VAT is shown separately. You should always understand what you are paying for before you pay for it.',
  },
]

export const relatedServices = [
  {
    title: 'Private Chef Prices',
    description: 'Per-person dinner bands and what moves a quote.',
    image: '/images/private-chef-prices-dubai-hero.webp',
    link: '/private-chef-prices-dubai',
  },
  {
    title: 'Weekly Meal Prep',
    description: 'Food handled without a chef in the house every day.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Villa Chef',
    description: 'Standing arrangements for Palm, Emirates Hills and villa stays.',
    image: '/service-villa.webp',
    link: '/villas-private-residences',
  },
]

export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-US')}+`
}

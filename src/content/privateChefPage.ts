export const PAGE_PATH = '/private-chef-dubai'
export const CAMPAIGN = 'private-chef-dubai'

export const SEO_TITLE = 'Private Chef Dubai | Hire a Personal Chef at Home | myCHEF'
export const SEO_DESCRIPTION =
  'Book a private chef in Dubai from AED 1,200 for dinner, or an ongoing household plan from AED 900 a day. Vetted chefs, one contact, prices on this page.'
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
  'A private chef is easy to find. A service that stays consistent is not. We run the match, the standard and the backup — for one dinner, or as a standing household arrangement. You stay a guest at your own table.'

export const WHATSAPP_NUMBER = '971551744849'
export const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a private chef. Evening dinner or household arrangement? Date: __, Guests: __, Location: __, Meals: __ (via mychef.ae/private-chef-dubai)"

export const pageSequence = [
  { n: '01', label: 'What this is', href: '#what-this-is' },
  { n: '02', label: 'Evening or household', href: '#which-service' },
  { n: '03', label: 'Why not hire yourself', href: '#why-not-hire' },
  { n: '04', label: 'How it works', href: '#how-it-works' },
  { n: '05', label: 'The life', href: '#the-life' },
  { n: '06', label: 'The chefs', href: '#the-chefs' },
  { n: '07', label: 'What it costs', href: '#evening' },
  { n: '08', label: 'When plans change', href: '#when-it-changes' },
  { n: '09', label: 'Why believe us', href: '#proof' },
  { n: '10', label: 'Start', href: '#start' },
] as const

export const paths = [
  {
    id: 'evening',
    eyebrow: 'One evening',
    title: 'From AED 1,200 for two',
    body: 'Date night, birthday, clients, a yacht. One service. Groceries are in the quote. You stay at the table.',
  },
  {
    id: 'household',
    eyebrow: 'Ongoing household',
    title: 'From AED 900 a day on a plan',
    body: 'Breakfast, dinner, or the full day. Groceries separate. AED 900 is the effective daily rate of an ongoing plan — not a walk-in ticket for tomorrow.',
  },
] as const

export const whatThisIs = [
  'myCHEF is not a list of chefs you have to manage, and not a staffing agency that puts someone on your payroll. Independent, licensed culinary partners cook. We organise the chef: the match, the standard and the backup.',
  'That is a different product from “luxury private chef Dubai.” You are not buying a person for an evening and hoping they come back the same. You are buying managed culinary infrastructure for a household — or a single evening run to the same standard.',
  'Before anyone enters your kitchen we check identity and right-to-work, run a practical cooking assessment, take references, and review after service. For a standing arrangement we also hold your Food Profile, give you one contact, handle scheduling and backup, and bring in a specialist when you want one.',
  'The chef cooks. We keep the chef, the house and the standard aligned. That is how to hire a private chef in Dubai without turning a personal chef at home into another job. The longer you stay, the better the service should become — a long-term private chef arrangement that learns the house.',
]

export const whoFor = [
  {
    path: 'evening' as const,
    title: 'A dinner you do not want to cook',
    body: 'Two people or twenty. A private chef dinner in Dubai: the menu designed with you, cooked in your kitchen, the kitchen left handled. You provide the room and the guests. That is the whole job on your side.',
  },
  {
    path: 'evening' as const,
    title: 'A yacht, a birthday, clients',
    body: 'One service. One price before you confirm. The chef is not a surprise on the night, and neither is the bill. You stay at the table — that is the point of hiring the evening rather than hosting it yourself.',
  },
  {
    path: 'household' as const,
    title: 'A family that does not want another person to manage',
    body: 'A private chef for the household without you becoming the scheduler, the backup plan, or HR. When the usual chef is off, the next chef is not walking in knowing nothing. The Food Profile travels. You talk to one contact.',
  },
  {
    path: 'household' as const,
    title: 'A villa stay of weeks or months',
    body: 'A villa chef who already understands the house — not a restart every Monday. Palm, Emirates Hills, a winter let: the kitchen should feel like it belongs to this house by week two, not week twelve.',
  },
  {
    path: 'household' as const,
    title: 'Nutrition, controlled',
    body: 'Every meal follows what you actually mean by healthy in this house — not a generic programme, and not a restaurant menu wearing gym clothes. That is personal chef meal prep done properly.',
  },
  {
    path: 'household' as const,
    title: 'You do not want to think about food every day',
    body: 'That is a legitimate reason to want a chef. It is also a reason to want a system. If the service only works when you brief it, you have hired a task. If it works when you do not brief it, you have hired a household.',
  },
]

export const comparison = [
  {
    topic: 'Finding a chef',
    alone: 'You interview and hope. A good first dinner is not the same as a person who still fits the house in month four.',
    mychef: 'You are matched to a chef already vetted for identity, cooking and references. The match is the kitchen, the cuisine and the format — not whoever replied first.',
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
    mychef: 'You talk to one person. We manage the network. Independent licensed partners cook. You are not putting a chef on your payroll.',
  },
  {
    topic: 'Cost',
    alone: 'A freelancer can look cheaper on day one. You are paying for the person only. Backup, matching, review and a kitchen that already knows the house are unpaid work — yours.',
    mychef: 'The person plus backup, matching, review, and a kitchen that already knows the house. Starting prices are on this page before you pay.',
  },
]

export const processSteps = [
  {
    num: '01',
    title: 'Tell us the date — or the rhythm',
    body: 'An evening needs a date and a guest count. A household needs how many meals, which days, and what “healthy” means in this house. If you are not sure which path it is, say how you live. We will tell you which product it is — one evening, or an ongoing household. You do not have to choose a chef level to start a conversation.',
  },
  {
    num: '02',
    title: 'We match a chef — not whoever is free',
    body: 'The match is the kitchen, the cuisine and the format. Before anyone enters, we check identity and right-to-work, run a practical cooking assessment, and take references. A CV is not enough. Private service also requires knowing when to speak and when not to.',
  },
  {
    num: '03',
    title: 'For a household, we build your Food Profile',
    body: 'What you eat, what you do not, allergies, timing, how the children eat, whether you want conversation or quiet service. If it does not help us cook for you, we do not need it. The profile is yours: see it, correct it, or ask for it to be deleted. When the chef changes, the profile is what travels.',
  },
  {
    num: '04',
    title: 'They shop as agreed, cook in your kitchen, leave it handled',
    body: 'You provide the room and the guests. The chef manages the food, the kitchen, the service style and the plate. For an evening, groceries are in the quote. For a household, groceries are separate and agreed in advance — so a simple healthy house does not subsidise someone eating wagyu.',
  },
  {
    num: '05',
    title: 'We ask how it was. Then we improve',
    body: 'After about two days on a standing arrangement, we contact you separately from the chef. A rating starts a conversation — not a punishment machine. A sudden terrible score makes us ask: poor food, an unlearned preference, a misunderstanding, a mistake, or an unreasonable request? You are allowed to make a mistake. You are expected to learn from it.',
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
    useCase: 'Everyday family cooking',
    body: 'The weekday house. Breakfast the children will eat, a dinner that does not require a briefing. You are not buying a tasting menu. You are buying a kitchen that already knows this family. For most households, this is the right level — not a lesser one.',
  },
  {
    name: 'Select',
    monthlyFull: '40,000',
    useCase: 'More demanding cuisines and entertaining',
    body: 'When guests are not rare, and the food needs more range than a family week — a second cuisine, a more careful plate, a chef who is comfortable when the table is not just family.',
  },
  {
    name: 'Executive',
    monthlyFull: '55,000',
    useCase: 'Complex household, nutrition, regular guests',
    body: 'Several diets in one house. A social calendar. Someone who can hold a standard without being managed. This is the level for houses that are already a small operation.',
  },
  {
    name: 'Elite',
    monthlyFull: '75,000',
    useCase: 'High-level culinary background and demanding private service',
    body: 'Serious kitchens, discretion, and a chef who has led at a high level before entering a home. The plate is the product. So is how they move through the house.',
  },
  {
    name: 'Signature',
    monthlyFull: '100,000',
    useCase: 'Highly specialised requirement',
    body: 'Not “better than Private.” A rare brief — a specific cuisine at a very high level, or a household that needs a chef whose background is unusually particular. If you are not sure you need it, you probably do not.',
  },
] as const

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

export const weekInTheHouse = [
  {
    day: 'Monday morning',
    body: 'Breakfast appears exactly how they like it. Coffee is already how this house takes coffee. Nobody sent a new set of instructions.',
  },
  {
    day: 'Tuesday',
    body: 'The children get food they will actually eat. Nobody negotiates at the table. That is not a small thing, if you have ever cooked for them yourself.',
  },
  {
    day: 'Wednesday',
    body: 'The house eats what “healthy” means here — not a generic programme, and not a restaurant menu wearing gym clothes.',
  },
  {
    day: 'Thursday',
    body: 'You are out late. Dinner still happens. The kitchen is left handled. You did not become the scheduler on the way home.',
  },
  {
    day: 'Friday',
    body: 'They suddenly want Japanese. Your contact rotates a specialist. The weekday chef is not asked to become someone else overnight.',
  },
  {
    day: 'Saturday',
    body: 'Friends come. We do not pretend the usual chef and assistant should suddenly handle a party. We build the team. You get one event price.',
  },
  {
    day: 'Sunday',
    body: 'The usual chef is off. The next chef is not starting from zero. Nobody in the family coordinates any of it. That is the life you are buying.',
  },
]

export const dontPromise = [
  'We don’t promise every chef is available every day.',
  'We don’t pretend one chef should work seven days a week.',
  'We don’t promise zero allergy risk.',
  'We don’t pretend every chef fits every household.',
]

export const doPromise = [
  'We promise a match, a standard, and a backup.',
  'We promise one contact once you are an ongoing client.',
  'We promise the Food Profile travels when the chef changes.',
  'We promise to tell you when an equivalent chef is not available — then give you the options.',
  'We promise starting prices on this page, before you pay.',
  'We promise to manage the realities we do not pretend away.',
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
    label: 'Head chefs from restaurant kitchens',
    body: 'Typically restaurant-trained, then assessed for private service. A CV is not enough. Knowing when to speak and when not to is part of the match. A standard household service includes one chef and one assistant.',
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
    label: 'No invented reviews',
    body: 'We do not publish testimonials we did not receive. If you have used the service, leave a review. That is the only kind we want on the site.',
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
    body: 'Feedback after service. Punctuality and presentation watched. A pattern of problems gets a conversation, a new match, or a chef who does not come back.',
  },
]

export const inspectUs = [
  { label: 'How we vet chefs', href: '/how-we-vet-our-chefs' },
  { label: 'Chefs in the network', href: '/our-chefs' },
  { label: 'Booking protection', href: '/booking-protection-insurance' },
  { label: 'Leave a real review', href: '/review' },
  { label: 'Private chef prices', href: '/private-chef-prices-dubai' },
]

export const featuredChefs = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Executive chef',
    cuisine: 'Modern European & fine dining',
    experience: '18+ years',
    image: '/team-head-chef.webp',
    href: '/chefs/ahmed-executive-chef',
  },
  {
    name: 'Marco Rossi',
    role: 'Italian chef',
    cuisine: 'Italian & Mediterranean',
    experience: '15+ years',
    image: '/team-sous-chef.webp',
    href: '/chefs/marco-italian-chef',
  },
  {
    name: 'Layla Hassan',
    role: 'Middle Eastern chef',
    cuisine: 'Arabic & Levantine',
    experience: '14+ years',
    image: '/images/arabic-catering-dubai-hero.webp',
    href: '/chefs/layla-middle-eastern-chef',
  },
  {
    name: 'Sofia Moretti',
    role: 'Pastry chef',
    cuisine: 'Patisserie & dessert design',
    experience: '12+ years',
    image: '/team-pastry-chef.webp',
    href: '/chefs/sofia-pastry-chef',
  },
]

export const whenThingsChange = [
  {
    title: 'The usual chef is off',
    body: 'If you employ one person and they are unavailable, you have a problem. With myCHEF the next chef is not walking in knowing nothing. If an equivalent chef is not available, we tell you — then we give you the options. We do not fill a slot with whoever is free and hope you will not notice.',
  },
  {
    title: 'Friday wants Japanese',
    body: 'Keep the weekday chef. Ask your contact for a specialist. You do not make a second hire, and you do not need Signature prices every day because you want one extraordinary dinner.',
  },
  {
    title: 'Friends on Saturday',
    body: 'We do not pretend your normal chef and assistant should suddenly handle thirty people. We build the team and give you one event price — not 25 small charges buried in the month.',
  },
  {
    title: 'Seven-day coverage',
    body: 'Chefs are professionals, not machines. Seven-day service uses rotation. Quality comes before squeezing impossible hours out of one person. Late service until 2:00 can be arranged — it should be arranged, not assumed.',
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

export type ChefLevelName = (typeof chefLevels)[number]['name']
export type MealPlan = '1' | '2' | 'full'

/** Effective daily starting prices (AED) on an ongoing ~20-day monthly plan. Weekly = ×5. Monthly ≈ ×20. Not isolated one-day tickets. */
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
    q: 'Is AED 900 a day a one-off booking?',
    a: 'No. AED 900+ is the effective daily starting rate on an ongoing Private household plan (about 20 service days a month). A one-off day is possible — tell us the date and we quote it. Do not assume you can book Private tomorrow for one meal at AED 900 without that conversation.',
  },
  {
    q: 'Evening or household — which do I need?',
    a: 'An evening is one service, groceries in the quote, from AED 1,200 for two. A household is a standing rhythm, groceries separate, from AED 900 a day on an ongoing plan. If you are not sure, tell us how you live. We will say which path it is.',
  },
  {
    q: 'Do you employ the chef, or do I?',
    a: 'Neither, in the usual sense. Independent licensed culinary partners cook. myCHEF organises the match, the standard, the backup and your contact. You are not putting a chef on your payroll.',
  },
  {
    q: 'What happens if my chef is unavailable?',
    a: 'The next chef is not starting from zero — the Food Profile travels. If an equivalent chef is not available, we tell you, then we give you the options.',
  },
  {
    q: 'Are groceries included?',
    a: 'Evening: yes, in the quote. Household: no — agreed in advance, so a simple healthy house does not subsidise someone eating wagyu. 5% VAT is shown separately.',
  },
  {
    q: 'Do you cook halal, and can you handle allergies?',
    a: 'Halal sourcing is the default. Allergies are part of onboarding. We do not claim an allergic reaction can never happen. If a request is professionally unsafe, safety comes before preference. See [halal catering](/halal-catering-dubai) and [allergy-safe catering](/allergy-safe-catering-dubai).',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Evenings: often 48 hours. A new household: about five days. Once we know you, two days is often enough. During business hours we typically reply within 15 minutes.',
  },
  {
    q: 'How do I start?',
    a: 'Choose one evening or an ongoing household, or tell us how you live. WhatsApp or the inquiry form. You should understand the starting price before you pay.',
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

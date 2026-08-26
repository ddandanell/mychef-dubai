/**
 * Copy for /birthday-catering-dubai
 *
 * KEYWORD LOCK: "birthday catering dubai" — title, H1, first 100 words, one subheading.
 * Kids parties live on this URL (/birthday-catering-dubai 301s here).
 *
 * Prices: published event-catering bands from eventsPage.ts, plus the package
 * already published on /birthday-catering-package-dubai. Nothing else.
 */

import { CATERING_PATHS } from './cateringCluster'
import {
  BIRTHDAY_PACKAGE,
  BIRTHDAY_PATHS,
  BIRTHDAY_SUPPORT,
} from './birthdayCluster'
import { menuFormats as eventMenuFormats, priceRows as eventPriceRows, pricingNotes as eventPricingNotes } from './eventsPage'

export const birthdayHero = {
  src: '/images/birthday-catering-dubai-hero.webp',
  alt: 'A birthday table laid for guests in a Dubai home, with a chef finishing a dish in the background. Experience concept shown.',
  width: 2688,
  height: 1504,
} as const

export const birthdayHeroCopy = {
  eyebrow: 'Event catering',
  title: 'Birthday Catering Dubai',
  subtitle:
    'Birthday catering Dubai for a seated dinner, a villa party or a children’s gathering. Menus, chefs, staffing, setup and clear-down — so you stay a guest at your own table.',
  priceLine: 'Event buffets from AED 120 per person.',
  replyLine: 'Share your date, venue and guest count. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'This page is the birthday brief under Events — not the format catalogue and not a standing household chef. Children’s parties are planned here, not on a second kids page.',
  cateringLabel: 'Luxury catering in Dubai',
  chefLabel: 'private chef services in Dubai',
  cuisinesLabel: 'Cuisines',
} as const

export const jumpNav = [
  { href: '#kinds', label: 'Kinds of birthday' },
  { href: '#pricing', label: 'Formats & prices' },
  { href: '#menus', label: 'Menus' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#examples', label: 'Case studies' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const birthdayKinds = [
  {
    id: 'milestones',
    title: 'Adult and milestone birthdays',
    body: 'Thirtieths, fortieths, fiftieths and the ones that matter more than the number. The running order — welcome food, a toast, cake — shapes the menu more than the cuisine does.',
    href: '#milestones',
    linkLabel: 'Milestone birthdays',
    image: '/images/celebration-catering-dubai-hero.webp',
    imageAlt: 'Guests seated at a birthday dinner table in a Dubai home. Experience concept shown.',
  },
  {
    id: 'kids',
    title: 'Children’s birthdays',
    body: 'Familiar food, portions a child can finish, and allergy notes in the brief before anyone cooks. Parents stay at the party instead of running the kitchen.',
    href: '#kids',
    linkLabel: 'Kids birthday catering',
    image: '/images/kids-birthday-catering-dubai-hero.webp',
    imageAlt: 'Food laid out for a children’s birthday party in a Dubai home. Experience concept shown.',
  },
  {
    id: 'family',
    title: 'Mixed-age family parties',
    body: 'One menu with deliberate overlap — not two separate events in the same garden. Children eat earlier; the adult part of the evening opens afterwards.',
    href: '#family',
    linkLabel: 'Mixed-age parties',
    image: '/images/party-catering-dubai-hero.webp',
    imageAlt: 'A family birthday gathering around a shared table in a Dubai garden. Experience concept shown.',
  },
] as const

export const otherBirthdays = [
  {
    title: 'A set menu for 8–12 guests',
    href: BIRTHDAY_PATHS.package,
    linkLabel: 'Birthday catering packages',
  },
  {
    title: 'A chef-led seated dinner',
    href: BIRTHDAY_PATHS.dinnerArticle,
    linkLabel: 'Private chef for birthday dinner',
  },
  {
    title: 'Villa and garden parties',
    href: BIRTHDAY_SUPPORT.villas,
    linkLabel: 'Villa catering in Dubai',
  },
  {
    title: 'Yacht birthdays',
    href: BIRTHDAY_SUPPORT.yachts,
    linkLabel: 'Yacht event catering in Dubai',
  },
] as const

export const kindDetail = {
  milestones: {
    h2: 'A milestone needs a shape, not just a menu',
    paragraphs: [
      'A milestone birthday has a moment in it — a toast, a speech, a cake carried in — and the food has to make room for that instead of competing with it.',
      'Planning starts with the running order. Welcome bites while people arrive. A main service that is either seated and paced, or standing and continuous, depending on whether anybody intends to speak. A gap before the cake so it does not collide with dessert. Something late for the people who stay.',
      'A thirtieth tends to run later and lean toward standing food and stations. A fiftieth or a seventieth is more often seated. Both can work; they are not the same evening.',
    ],
  },
  kids: {
    h2: 'When the birthday is for children',
    paragraphs: [
      'Children’s birthdays fail when the food is an afterthought copied from an adult dinner, or when it is a second event running in the corner. The better brief is familiar dishes, smaller portions, and a start time that matches when children actually eat.',
      'Send allergy notes with the guest list, not the week of the party. Vegetarian, gluten-aware and dairy-free guests are straightforward when the menu is being designed. A working event kitchen is a shared environment — we do not describe a menu as allergen-free.',
      'Interactive stations (pizza, pasta, a dessert table) work when the room has power, queue space and an adult who can supervise. A plated children’s menu works when the party is seated and shorter. Birthday party catering in Dubai for a mixed guest list usually front-loads what the children need, then lets the adult evening open up.',
    ],
  },
  family: {
    h2: 'When three generations are at the same party',
    paragraphs: [
      'The usual failure is two entirely separate menus: children feel like an afterthought and adults pick at food designed for someone else.',
      'One menu with overlap works better. Dishes that work plain for a seven-year-old and dressed for an adult. Something familiar on the table so nobody goes hungry out of stubbornness. Portions and heights a child can reach without a parent hovering.',
      'Timing is a planning decision, not a catering trick. Decide it before the menu is written.',
    ],
  },
} as const

/** Published event-catering bands — same figures as /events. Not birthday-specific inventions. */
export const priceRows = eventPriceRows
export const pricingNotes = eventPricingNotes
export const menuFormats = eventMenuFormats

/** The one allowed exact-match subheading for the locked primary. */
export const pricingH2 = 'What moves a birthday catering Dubai quote'

export const pricingIntro = [
  'These are the published event-catering bands. Birthday catering cost per person in Dubai moves with format more than with the guest list: the same twenty people cost different amounts dropped off, as a buffet, or plated.',
  'Every quote is itemised — food, staffing, equipment, venue access, timing and 5% VAT as separate lines. If you want a set menu for 8–12 rather than a fully scoped brief, that sits on the packages page.',
] as const

export const packagePointer = {
  title: `Birthday celebration for ${BIRTHDAY_PACKAGE.guests}`,
  body: `From ${BIRTHDAY_PACKAGE.from} · ${BIRTHDAY_PACKAGE.perPerson}. A fixed starting point for a small seated celebration. Everything else on this page is quoted to the event.`,
  href: BIRTHDAY_PACKAGE.href,
  linkLabel: 'See what the package includes',
} as const

export const includedItems = [
  {
    title: 'Menu',
    body: 'A birthday catering menu in Dubai is built around who is eating, the time of day, the room, how the food is served, dietary needs and what you want to spend. Change any one and the menu changes with it.',
  },
  {
    title: 'Chefs',
    body: 'Licensed culinary partners matched to the brief. No chef is guaranteed by name.',
  },
  {
    title: 'Staff',
    body: 'Waiters, bartenders and runners sized to the format — added when the party needs them.',
  },
  {
    title: 'Cake',
    body: 'Coordinated when you want it: flavour, inscription, serving size and when it appears. Or we work around a cake you are bringing. Cutting and plating is a service line, not assumed.',
  },
  {
    title: 'Bar',
    body: 'Optional drinks service and a mocktail bar. Alcohol at a private residence is sourced by the host.',
  },
  {
    title: 'Setup and cleanup',
    body: 'Arrival, setup, service and clear-down are part of a staffed booking. Drop-off is food only — you serve, you clear.',
  },
] as const

export const startSteps = [
  'Share the date, venue, guest count and what kind of birthday it is — including how many children, if any.',
  'We send an itemised proposal: menu direction, format, staffing and the figures that move with them.',
  'You review it. Swap dishes, drop a layer, or add a station before anything is confirmed.',
  'On the day the team runs setup, service and clear-down. You stay with your guests.',
] as const

export const decisionModule = {
  h2: 'Private chef or a staffed party?',
  privateChefLead: 'Private chef:',
  privateChefBody:
    'best when dinner is the event — a seated group, a workable kitchen, courses at the pace of the conversation.',
  eventLead: 'Event catering:',
  eventBody:
    'best when the guest list outgrows one stove — standing food, multiple service points, or a venue with no kitchen.',
  catering:
    'If the question is food-only through full event support, that sits on catering — not this birthday page.',
  dining: 'If the night is a tasting or a two-cover moment, that is private dining.',
  chefHref: BIRTHDAY_SUPPORT.privateChef,
  chefLabel: 'Private chef services in Dubai',
  dinnerHref: BIRTHDAY_PATHS.dinnerArticle,
  dinnerLabel: 'Private chef for birthday dinner',
  cateringHref: BIRTHDAY_SUPPORT.catering,
  cateringLabel: 'Luxury catering in Dubai',
  diningHref: BIRTHDAY_SUPPORT.dining,
  diningLabel: 'Private dining in Dubai',
} as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client. No chef is guaranteed by name; we match the birthday.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    body: 'Halal ingredients are sourced by default for myCHEF event menus in Dubai. Halal birthday catering in Dubai still needs specific certification written into the brief when a guest requires it.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Food safety and who cooks',
    body: 'Culinary preparation is performed by independent, licensed culinary partners working to Dubai Municipality food-safety standards. myCHEF designs and coordinates the catering. The client engages those professionals.',
    href: '/how-it-works',
    linkLabel: 'How booking works',
  },
  {
    title: 'Written proposals',
    body: 'Guest count, menu, staffing, format, venue access, timing and equipment are itemised. Minimums and 5% VAT are shown before you book.',
    href: `${BIRTHDAY_PATHS.hub}#pricing`,
    linkLabel: 'Formats and prices',
  },
] as const

/** One published case study; the others are typical briefs, not invented events. */
export const exampleEvents = [
  {
    title: 'Yacht birthday celebration, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ and signature mocktails, planned around loading and storage.',
    outcome: 'Passed bites, grills and alcohol-free craft drinks served as the yacht cruised the marina.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht event catering in Dubai',
  },
  {
    title: 'Seated dinner at home',
    guests: 'Typical brief',
    venue: 'Apartment or villa kitchen',
    setup: 'Courses cooked on site. Needs a usable hob and somewhere to plate.',
    outcome: 'Quoted as chef-led plated dining, not as a scaled-down buffet.',
    href: BIRTHDAY_PATHS.dinnerArticle,
    linkLabel: 'Private chef for birthday dinner',
  },
  {
    title: 'Mixed-age villa afternoon',
    guests: 'Typical brief',
    venue: 'Garden or indoor-outdoor villa',
    setup: 'Sharing table or buffet, children’s food served earlier, cake as its own moment.',
    outcome: 'Staffed when the guest list outgrows one kitchen.',
    href: BIRTHDAY_SUPPORT.villas,
    linkLabel: 'Villa catering in Dubai',
  },
] as const

export const exampleNote =
  'Most birthdays we run are in a home or villa. Kitchen size, lift access, shade and community rules belong in the brief so the proposal is honest. Client names stay private. The yacht example is from our case studies page; the other two are common briefs, not named events.'

export const birthdayFaqs = [
  {
    q: 'How is a birthday quote built?',
    a: 'From format first, then guest count, menu, staffing, venue access, timing and 5% VAT. Drop-off food starts from AED 90 per person. A standard event buffet starts from AED 120 per person. Premium buffet, BBQ, live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. See [event catering prices](/events#pricing) or the [catering prices guide](/dubai-catering-prices-guide).',
  },
  {
    q: 'Is there a set package?',
    a: `Yes — a birthday celebration for ${BIRTHDAY_PACKAGE.guests} from ${BIRTHDAY_PACKAGE.from} (${BIRTHDAY_PACKAGE.perPerson}). Larger or different formats are quoted to the event. See [birthday catering packages](/birthday-catering-package-dubai).`,
  },
  {
    q: 'Do you cater children’s birthdays?',
    a: 'Yes. Children’s menus, earlier timings and allergy notes are part of the same brief as an adult or mixed-age party. They are planned here, not on a second kids page.'
  },
  {
    q: 'What is the minimum guest count?',
    a: 'Drop-off starts from 10 guests, with a minimum order of AED 900. A standard event buffet starts from 20 guests. A chef cooking in your kitchen has no volume minimum — a seated birthday dinner for a small table is a normal booking. See [private chef for birthday dinner](/blog/best-private-chef-birthday-dinner-dubai).',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For parties under 50 guests, a week ahead is typical. Larger parties: 2–4 weeks. Peak season (November–March) and holiday weekends book faster. Short notice is often possible — message the date. We typically reply within 15 minutes during business hours.',
  },
  {
    q: 'Can you handle allergies and dietary requirements?',
    a: 'Vegetarian, vegan, gluten-aware, dairy-free and halal requirements are planned into the menu when it is designed. For a severe allergy, tell us which guest and which allergen — the appointed culinary partner confirms whether it can be produced. We do not describe menus as allergen-free.',
  },
  {
    q: 'Do you provide a cake, staff and drinks?',
    a: 'Cake, serving staff, tableware and a mocktail or bar team are quoted when you ask for them. None is automatic. Alcohol at a private residence is sourced by the host.',
  },
  {
    q: 'Can you keep a surprise quiet?',
    a: 'We plan load-in around the reveal, keep contact to one person and stay off the family group chat. Getting the guest of honour out of the house stays with whoever is running the surprise.',
  },
  {
    q: 'How much does birthday catering Dubai price come to?',
    a: 'There is no single number for birthday catering Dubai price: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'How much does birthday catering cost per person Dubai come to?',
    a: 'There is no single number for birthday catering cost per person Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'What makes myCHEF a strong choice for best birthday catering Dubai?',
    a: 'One team owns the whole event — menu, shopping, cooking on site, service and clear-down — so nothing falls between suppliers. The chefs are vetted and matched to the occasion, ingredients are charged at cost with no markup, and every quote is itemised.',
  },
  {
    q: 'Do you cater birthday catering menu Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Can you handle halal birthday catering Dubai?',
    a: 'Yes. Dietary needs are planned into the menu from the first draft, not bolted on: dishes are labelled, cross-contact is managed in the kitchen we set up on site, and the chef is briefed on every guest requirement before the day.',
  },
  {
    q: 'Do you cater birthday party catering Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Do you cater full service birthday catering Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Do you cater kids birthday catering Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'How much does birthday catering Dubai price come to?',
    a: 'There is no single number for birthday catering Dubai price: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'How much does birthday catering cost per person Dubai come to?',
    a: 'There is no single number for birthday catering cost per person Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'What makes myCHEF a strong choice for best birthday catering Dubai?',
    a: 'One team owns the whole event — menu, shopping, cooking on site, service and clear-down — so nothing falls between suppliers. The chefs are vetted and matched to the occasion, ingredients are charged at cost with no markup, and every quote is itemised.',
  },
  {
    q: 'Do you cater birthday catering menu Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Can you handle halal birthday catering Dubai?',
    a: 'Yes. Dietary needs are planned into the menu from the first draft, not bolted on: dishes are labelled, cross-contact is managed in the kitchen we set up on site, and the chef is briefed on every guest requirement before the day.',
  },
  {
    q: 'Do you cater birthday party catering Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Do you cater full service birthday catering Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Do you cater kids birthday catering Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
] as const

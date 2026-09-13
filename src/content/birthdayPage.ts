/**
 * Copy for /birthday-catering-dubai
 *
 * KEYWORD LOCK: "birthday catering dubai" — title, H1, first 100 words, one subheading.
 * Kids parties live on this URL (/kids-birthday-catering-dubai 301s here).
 *
 * Catering floors: cateringPricing.ts, before 5% VAT.
 * Extra figures: birthdayExtras.ts, proposed planning figures including VAT.
 */

import { CATERING_PATHS } from './cateringCluster'
import {
  BIRTHDAY_PACKAGE,
  BIRTHDAY_PATHS,
  BIRTHDAY_SUPPORT,
} from './birthdayCluster'
import { BIRTHDAY_BUDGET_EXAMPLE } from './birthdayExtras'

export const birthdayHero = {
  src: '/images/birthday-catering-dubai-hero.webp',
  alt: 'A host seated at a birthday dinner in a Dubai villa while a chef and server work behind the table. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const birthdayHeroCopy = {
  eyebrow: 'Birthday planning and catering',
  title: 'Birthday Catering Dubai',
  subtitle:
    'Birthday catering Dubai for a seated dinner, a villa party or a children’s gathering. Choose the food, see published prices, and add a cake or balloons to the same enquiry so you know the likely cost before you confirm.',
  priceLine: 'Event buffets from AED 120 per person. A seated celebration for 8–12 guests from AED 3,600.',
  replyLine: 'Share the date, location, adults, children and ages. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'Five things this page answers: what you can book, what it costs, what is included, what you can add, and how the itemised quote is built. Food sits at the centre. Cakes, balloons and entertainment are optional extras around it.',
  cateringLabel: 'Luxury catering in Dubai',
  chefLabel: 'private chef services in Dubai',
  cuisinesLabel: 'Cuisines',
} as const

export const jumpNav = [
  { href: '#kinds', label: 'Kinds of birthday' },
  { href: '#photos', label: 'Photos' },
  { href: '#pricing', label: 'Prices' },
  { href: '#included', label: 'Included' },
  { href: '#menus', label: 'Food' },
  { href: '#extras', label: 'Extras' },
  { href: '#budget', label: 'Budget' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const birthdayKinds = [
  {
    id: 'kids',
    title: 'Children’s birthdays',
    body: 'Familiar food, portions a child can finish, and allergy notes in the brief before anyone cooks. Add meal boxes, a cake and one activity if you want the afternoon held together.',
    href: '#kids',
    linkLabel: 'Kids birthday catering',
    image: '/images/birthday-catering-dubai-kids.webp',
    imageAlt: 'A parent and chef checking children’s meal boxes at a garden table before guests arrive. Experience concept shown.',
  },
  {
    id: 'milestones',
    title: 'Adult and milestone birthdays',
    body: 'A buffet, canapés or a seated dinner for a 30th, 40th, 50th or any night that needs a running order. Cake, flowers and a photographer finish the room without a production.',
    href: '#milestones',
    linkLabel: 'Adult birthday catering',
    image: '/images/birthday-catering-dubai-adult.webp',
    imageAlt: 'Adult guests at a seated birthday dinner in a Dubai villa, chef waiting at the edge of the table. Experience concept shown.',
  },
  {
    id: 'family',
    title: 'Mixed-age family parties',
    body: 'Adult catering as the main event, children’s meals served earlier, one cake and one entertainment choice. The garden stays one party.',
    href: '#family',
    linkLabel: 'Mixed-age parties',
    image: '/images/birthday-catering-dubai-mixed.webp',
    imageAlt: 'A mixed-age villa birthday: adults eating at one table, children at a smaller table, chef cooking to the side. Experience concept shown.',
  },
] as const

export const otherBirthdays = [
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
  kids: {
    h2: 'When the birthday is for children',
    paragraphs: [
      'Kids birthday catering Dubai is planned around when children actually eat, not around an adult dinner copied down in size. Write ages and allergy notes into the brief before the menu is written. Portions should be small enough to finish. Labels on the food matter more than a themed name on the dish.',
      'A table for six-year-olds is not a table for twelve-year-olds. Vegetarian, gluten-aware and dairy-free guests are straightforward when they are named early. For a severe allergy, tell us which child and which allergen. Allergy aware birthday catering Dubai still means a working kitchen: we do not describe a menu as allergen-free.',
      'Children’s meal boxes attach to an eligible catering booking. A cake, a balloon arrangement and one activity (face painting or cupcake decorating) are usually enough. Live fire and children in the same garden needs a named adult on the grill, or no grill.',
    ],
  },
  milestones: {
    h2: 'Adult and milestone birthdays',
    paragraphs: [
      'Adult birthday catering Dubai, including birthday catering Dubai for adults at a 30th, 40th or 50th, is built around the running order. Welcome canapés suit an evening of conversation. A buffet lets guests choose. A seated dinner is quieter and more intimate.',
      'A milestone needs a gap before the cake so it does not collide with dessert. Flowers, a personalised cake and a photographer finish the setting. For a larger villa party, mocktail service and a photo backdrop keep the room moving without elaborate decoration.',
      'Tell us how you want the evening to feel. We build the food and the service around that, not around a stock party template.',
    ],
  },
  family: {
    h2: 'When the room holds both ages',
    paragraphs: [
      'Serve the children first with food they recognise. Keep the adult catering as the main event. One cake, one entertainment choice, and a single running order so the garden does not split into two parties.',
      'Dishes that work plain for a seven-year-old and dressed for an adult keep the table honest. Timing is a planning decision, not a catering trick. Decide it before the menu is written.',
    ],
  },
} as const

export const formatLadder = [
  {
    format: 'Birthday food delivery',
    what: 'Delivered and laid out. You serve.',
    staff: 'None remaining',
    price: 'From AED 90 per person',
    href: '/drop-off-catering-dubai',
  },
  {
    format: 'Birthday buffet',
    what: 'Setup, replenishing and clearance.',
    staff: '1–2',
    price: 'From AED 120 per person',
    href: '/buffet-catering-dubai',
  },
  {
    format: 'Canapés, BBQ or live stations',
    what: 'Passed food or cooking in the room.',
    staff: '2–4',
    price: 'From AED 150 per person',
    href: '/live-cooking-stations-dubai',
  },
  {
    format: 'Chef-led plated dining',
    what: 'Courses at the table.',
    staff: 'Chef plus service team',
    price: 'AED 700–950 per person',
    href: '/buffet-vs-plated-dubai',
  },
] as const

export const pricingNotes = [
  'These are myCHEF starting prices per person, except the plated band which is a typical range.',
  'Birthday food delivery starts at 10 guests and AED 900.',
  'A standard buffet starts from 20 guests.',
  'A chef cooking on site has no minimum headcount. A seated birthday dinner for a small table is a normal booking.',
  'Catering figures are before 5% VAT, shown as its own line.',
  'Cake, balloons and entertainment figures later on this page include 5% VAT and are planning figures until confirmed.',
] as const

/** The one allowed exact-match subheading for the locked primary. */
export const pricingH2 = 'What a birthday catering Dubai quote includes'

export const pricingIntro = [
  'Birthday catering cost per person in Dubai moves with format more than with the guest list: the same twenty people cost different amounts delivered, as a buffet, or plated. A useful quote names food, staff, extras and 5% VAT as separate lines. That is how you compare birthday catering Dubai price fairly.',
  'Every proposal is itemised. If you want a set menu for 8–12 rather than a fully scoped brief, say so and we quote the celebration below.',
] as const

export const packagePointer = {
  title: `Birthday celebration for ${BIRTHDAY_PACKAGE.guests}`,
  price: `From ${BIRTHDAY_PACKAGE.from}`,
  perPerson: BIRTHDAY_PACKAGE.perPerson,
  included: [
    'Menu written for 8–12 guests',
    'Canapés or a starter, main course and dessert',
    'Chef and service staff',
    'Cake option',
    'Setup, service and clear-down',
  ],
  vsPlated:
    'This is a set starting point for a small seated birthday, not the same offer as chef-led plated dining at AED 700–950 per person. The plated band is quoted per person for a more elaborate menu and service team.',
} as const

export const includedItems = [
  {
    title: 'Menu',
    body: 'A birthday catering menu in Dubai is written for who is eating, the time of day, the room and how the food is served. That is the only sense in which it is bespoke. Change any one of those and the dishes change with them.',
  },
  {
    title: 'Chefs',
    body: 'Licensed culinary partners matched to the brief. No chef is guaranteed by name.',
  },
  {
    title: 'Staff',
    body: 'Waiters sized to a staffed format. Birthday food delivery has no service team remaining on site.',
  },
  {
    title: 'Setup and cleanup',
    body: 'Arrival, setup, service and clear-down are part of a staffed booking. Delivery is food and layout. Collection of empties is arranged when you ask.',
  },
] as const

export const optionalItems = [
  {
    title: 'Cake',
    body: 'Quoted when you want us to supply it, or we plate a cake you bring. Cutting and plating is a service line, not assumed on delivery.',
  },
  {
    title: 'Drinks',
    body: 'Mocktail service is optional. Alcohol at a private residence is sourced by the host.',
  },
  {
    title: 'Children’s meal boxes',
    body: 'Added to an eligible catering booking. They are not a standalone drop-off, which keeps the AED 900 delivery minimum intact.',
  },
  {
    title: 'Decoration and entertainment',
    body: 'Balloons, a photo backdrop, face painting and photography sit outside the catering floor. Select them below and they appear on the same proposal.',
  },
] as const

export const menuFormats = [
  {
    title: 'Birthday food delivery',
    body: 'Food delivered ready to serve. No service team on site. The right format when you want the kitchen handled and the table left to you.',
    href: '/drop-off-catering-dubai',
    linkLabel: 'How delivery catering works',
  },
  {
    title: 'Buffet',
    body: 'A maintained spread for mixed guest lists and larger rooms. The usual choice for birthday buffet catering in a villa.',
    href: '/buffet-catering-dubai',
    linkLabel: 'Buffet catering',
  },
  {
    title: 'Live stations',
    body: 'Cooking in front of guests when the room should move. Power, queue space and supervision belong in the brief.',
    href: '/live-cooking-stations-dubai',
    linkLabel: 'Live cooking stations',
  },
  {
    title: 'Dessert table',
    body: 'A styled sweets display quoted on its own page. The mini dessert selection on this page is a smaller, priced tray, not that full service.',
    href: '/dessert-table-catering-dubai',
    linkLabel: 'Dessert table catering',
  },
  {
    title: 'Plated dining',
    body: 'Courses served to seated guests. Best when timing and table service matter.',
    href: '/buffet-vs-plated-dubai',
    linkLabel: 'Compare catering formats',
  },
  {
    title: 'Home and villa service',
    body: 'Kitchen access, gates, shade and community rules belong in the brief so birthday catering at home is quoted honestly.',
    href: BIRTHDAY_SUPPORT.villas,
    linkLabel: 'Villa catering',
  },
] as const

export const extrasIntro = [
  'Full service birthday catering Dubai is food, staff and clear-down. The extras below sit around that. Select what you want quoted. Nothing is added to the catering floor automatically.',
  'The figures are planning numbers including 5% VAT, pending supplier confirmation. Access surcharges, extra journeys or equipment are named before you confirm.',
] as const

export const extrasH2 = 'Cakes, balloons and extras around the food'

export const birthdayGalleryNote =
  'Documentary frames of how birthday catering looks in a Dubai home, villa or yacht. Experience concept shown. They are not photographs from a named client booking.'

export const birthdayGallery = [
  {
    src: '/images/birthday-catering-dubai-villa.webp',
    alt: 'Villa terrace birthday with guests seated and chefs at a side station. Experience concept shown.',
    caption: 'Villa terrace, host seated',
  },
  {
    src: '/images/birthday-catering-dubai-yacht.webp',
    alt: 'Yacht birthday with passed plates and a chef serving on deck. Experience concept shown.',
    caption: 'Yacht birthday, Dubai water',
  },
  {
    src: '/images/birthday-catering-dubai-buffet.webp',
    alt: 'Birthday buffet being maintained in a villa while guests serve themselves. Experience concept shown.',
    caption: 'Buffet, guests already sitting',
  },
  {
    src: '/images/birthday-catering-dubai-cake-balloons.webp',
    alt: 'Chef finishing a buttercream birthday cake beside balloon clusters. Experience concept shown.',
    caption: 'Cake and balloons as extras',
  },
  {
    src: '/images/birthday-catering-dubai-meal-boxes.webp',
    alt: 'Children’s meal boxes being laid on a garden table. Experience concept shown.',
    caption: 'Children’s meal boxes',
  },
  {
    src: '/images/birthday-catering-dubai-afterglow.webp',
    alt: 'After the birthday meal, the kitchen team packs equipment while candles burn low. Experience concept shown.',
    caption: 'Clear-down after the cake',
  },
] as const

export const moreExtrasIntro =
  'These are quoted when the brief needs them. We publish a price once the specification is repeatable.'

export const budgetH2 = 'See the catering and extras as separate lines'

export const budgetIntro = [
  `For illustration, ${BIRTHDAY_BUDGET_EXAMPLE.guests} guests at the buffet starting price total AED ${BIRTHDAY_BUDGET_EXAMPLE.foodBeforeVat.toLocaleString('en-US')} before VAT. VAT at 5% is AED ${BIRTHDAY_BUDGET_EXAMPLE.vat.toLocaleString('en-US')}. Catering including VAT is AED ${BIRTHDAY_BUDGET_EXAMPLE.cateringIncludingVat.toLocaleString('en-US')}.`,
  `Adding the proposed standard cake (from AED ${BIRTHDAY_BUDGET_EXAMPLE.cakePlanningAed}) and balloon arrangement (from AED ${BIRTHDAY_BUDGET_EXAMPLE.balloonsPlanningAed}) brings an illustrative total of AED ${BIRTHDAY_BUDGET_EXAMPLE.illustrativeTotalIncludingVat.toLocaleString('en-US')}. The extras in that total are planning figures including VAT, not a confirmed shop price.`,
  'This example assumes the event qualifies for the buffet starting price. Additional equipment, access or extended service would be shown separately. You can choose a complete combination or add one detail. Every selected item appears in the proposal before you confirm.',
] as const

export const startSteps = [
  'Send the date, location, number of adults and children, ages, preferred food style, approximate budget and any extras already selected.',
  'We send an itemised proposal: menu direction, format, staffing, optional products and the total.',
  'You review it. Swap dishes, drop a layer, or add a station before anything is confirmed.',
  'On the day the selected services are coordinated around the celebration. You stay with your guests.',
] as const

export const decisionModule = {
  h2: 'Private chef or a staffed party?',
  privateChefLead: 'Private chef:',
  privateChefBody:
    'best when dinner is the event: a seated group, a workable kitchen, courses at the pace of the conversation.',
  eventLead: 'Event catering:',
  eventBody:
    'best when the guest list outgrows one stove: standing food, multiple service points, or a venue with no kitchen.',
  catering:
    'If the question is food-only through full event support, that sits on catering, not this birthday page.',
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
    body: 'Guest count, menu, staffing, format, venue access, timing, optional products and 5% VAT are itemised. Minimums are shown before you book.',
    href: `${BIRTHDAY_PATHS.hub}#pricing`,
    linkLabel: 'Formats and prices',
  },
] as const

export const exampleEvents = [
  {
    title: 'Yacht birthday celebration, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ and signature mocktails, planned around loading and storage.',
    outcome: 'Passed bites, grills and alcohol-free craft drinks served as the yacht cruised the marina.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht event catering in Dubai',
    image: '/images/birthday-catering-dubai-yacht.webp',
    imageAlt: 'Passed plates and a chef serving on a Dubai yacht at golden hour. Experience concept shown.',
  },
  {
    title: 'Seated dinner at home',
    guests: 'Typical brief',
    venue: 'Apartment or villa kitchen',
    setup: 'Courses cooked on site. Needs a usable hob and somewhere to plate.',
    outcome: 'Quoted as chef-led plated dining, not as a scaled-down buffet.',
    href: BIRTHDAY_PATHS.dinnerArticle,
    linkLabel: 'Private chef for birthday dinner',
    image: '/images/birthday-catering-dubai-adult.webp',
    imageAlt: 'A seated birthday dinner in a Dubai villa with the chef at the edge of the table. Experience concept shown.',
  },
  {
    title: 'Mixed-age villa afternoon',
    guests: 'Typical brief',
    venue: 'Garden or indoor-outdoor villa',
    setup: 'Sharing table or buffet, children’s food served earlier, cake as its own moment.',
    outcome: 'Staffed when the guest list outgrows one kitchen.',
    href: BIRTHDAY_SUPPORT.villas,
    linkLabel: 'Villa catering in Dubai',
    image: '/images/birthday-catering-dubai-mixed.webp',
    imageAlt: 'Adult catering and a children’s table in a Dubai villa garden. Experience concept shown.',
  },
] as const

export const exampleNote =
  'Most birthdays we run are in a home or villa. Kitchen size, lift access, shade and community rules belong in the brief so the proposal is honest. Client names stay private. The yacht example is from our case studies page; the other two are common briefs, not named events.'

export const birthdayFaqs = [
  {
    q: 'How is a birthday quote built?',
    a: 'From format first, then guest count, menu, staffing, venue access, timing, selected extras and 5% VAT. Birthday food delivery starts from AED 90 per person. A standard event buffet starts from AED 120 per person. Premium buffet, BBQ, live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. See the [catering prices guide](/dubai-catering-prices-guide).',
  },
  {
    q: 'Is there a set package?',
    a: `Yes. A birthday celebration for ${BIRTHDAY_PACKAGE.guests} from ${BIRTHDAY_PACKAGE.from} (${BIRTHDAY_PACKAGE.perPerson}), with canapés or a starter, main course and dessert, a chef and service staff, a cake option, setup and clear-down. Larger or different formats are quoted to the event.`,
  },
  {
    q: 'Are balloons and cake included in catering prices?',
    a: 'Not in the per-person catering floors. Those prices are food, and staff when the format includes them. Cake, balloons and entertainment are optional extras. The 8–12 celebration includes a cake option as part of that set menu.',
  },
  {
    q: 'Can I order children’s food and adult catering together?',
    a: 'Yes. Children’s meal boxes attach to an eligible catering booking. Tell us how many adults, how many children and the ages. Kids party food is planned on the same proposal as the adult menu.',
  },
  {
    q: 'Can I bring my own cake?',
    a: 'Yes. Tell us in the brief. Cutting and plating is quoted as a service line when you want the team to handle it. Storage, candles and when the cake appears belong in the running order.',
  },
  {
    q: 'What does each entertainment extra include?',
    a: 'Face painting and balloon twisting is one artist for two hours. Cupcake decorating is up to 10 children, one hour, two cupcakes each, with materials and an instructor. Photography is one photographer for one hour. Capacity, design complexity, edited-image count and delivery deadline are named in the proposal. Larger groups may need another artist or a longer session.',
  },
  {
    q: 'Are delivery, setup and collection included?',
    a: 'Ordinary Dubai delivery and installation are defined in the product wherever we can. They are confirmed in the quote. Access surcharges, extra journeys or equipment are named before you confirm. Staffed catering includes setup and clear-down. Birthday food delivery is food and layout; collection of empties is arranged when you ask.',
  },
  {
    q: 'Can I book extras without catering?',
    a: 'Cakes, balloons and entertainment are planned with a catering booking so the running order stays in one place. Children’s meal boxes only attach to an eligible catering order. We do not sell every extra as a standalone shop item.',
  },
  {
    q: 'What happens if my guest count changes?',
    a: 'Tell us as soon as you know. The proposal is rebuilt around the new headcount, the format minimums and any extras that have a minimum quantity. Confirmed changes follow the booking terms you receive with the proposal.',
  },
  {
    q: 'Can you help organise a surprise birthday?',
    a: 'We plan load-in around the reveal, keep contact to one person and stay off the family group chat. Getting the guest of honour out of the house stays with whoever is running the surprise.',
  },
  {
    q: 'Do you cater children’s birthdays?',
    a: 'Yes. Children’s menus, earlier timings and allergy notes are part of the same brief as an adult or mixed-age party. They are planned here, not on a second kids page.',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'Birthday food delivery starts from 10 guests, with a minimum order of AED 900. A standard event buffet starts from 20 guests. A chef cooking in your kitchen has no volume minimum. See [private chef for birthday dinner](/blog/best-private-chef-birthday-dinner-dubai).',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For parties under 50 guests, a week ahead is typical. Larger parties: 2–4 weeks. Peak season (November–March) and holiday weekends book faster. Short notice is often possible. Message the date. We typically reply within 15 minutes during business hours.',
  },
  {
    q: 'Can you handle allergies and dietary requirements?',
    a: 'Vegetarian, vegan, gluten-aware, dairy-free and halal requirements are planned into the menu when it is designed. For a severe allergy, tell us which guest and which allergen. The appointed culinary partner confirms whether it can be produced. We do not describe menus as allergen-free.',
  },
] as const

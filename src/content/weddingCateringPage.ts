import { CATERING_PATHS } from './cateringCluster'
import {
  ESTIMATE_CAPTION,
  FIGURES_REVIEWED,
  WEDDING_VAT,
  estimateFloors,
  inclusionBuckets,
} from './weddingCluster'

export const WEDDING_PATH = '/wedding-catering-dubai' as const

export const WEDDING_KEYWORD_LOCK = {
  primary: 'wedding catering dubai',
  title: 'Wedding Catering Dubai | Villa, Garden & Venue | myCHEF',
  description:
    'Wedding Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
} as const

export const WEDDING_INQUIRY_HREF = '/inquiry'

export const WEDDING_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning wedding catering. Date: __, Guests: __, Venue: __, Format: __ (via mychef.ae/wedding-catering-dubai)"

export const WEDDING_WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(WEDDING_WHATSAPP_MESSAGE)}`

/** pages["/wedding-catering-dubai"].internal_linking.siblings — render exactly. */
export const WEDDING_SIBLING_LINKS = [
  { href: '/private-party-catering-dubai', label: 'Engagement party catering' },
  { href: '/chefs/matteo-pastry-chef', label: 'Matteo — pastry' },
  { href: '/wedding-catering-checklist-dubai', label: 'Wedding catering checklist' },
  { href: '/venue-partners', label: 'Preferred caterer' },
  { href: '/buffet-vs-plated-dubai', label: 'Buffet vs plated' },
] as const

/** pages["/wedding-catering-dubai"].internal_linking.supporting_guides */
export const WEDDING_SUPPORTING_GUIDES = [
  { href: '/wedding-catering-checklist-dubai', label: 'Wedding catering checklist', note: 'The planning sequence' },
  { href: '/wedding-catering-menu-planning-dubai', label: 'Wedding menu planning', note: 'Formats, tasting, sample menus' },
  { href: '/blog/wedding-catering-cost-dubai', label: 'Wedding catering cost', note: 'What changes the quote' },
] as const

export const weddingHero = {
  src: '/images/wedding-catering-dubai-hero.webp',
  alt: 'A villa wedding dinner in Dubai — long table, candlelight, service in the background. Experience concept shown.',
  width: 2560,
  height: 1440,
} as const

export const weddingHeroCopy = {
  eyebrow: 'Wedding Catering Dubai',
  title: 'Wedding Catering Dubai',
  subtitle:
    'Wedding Catering Dubai for a villa dinner, a garden reception or a licensed venue. myCHEF designs the catering plan, matches you with vetted chefs, service professionals and licensed culinary partners, and stays your point of contact so you can be guests at your own table.',
  priceLine:
    'A chef-led plated villa dinner typically sits around AED 700–950 per guest. A staffed wedding buffet often sits around AED 180–350. 5% VAT is shown as its own line.',
  replyLine: 'Share your date, venue and guest count. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'This page is the wedding meal — menu, team, timing and service. It is not a wedding planner, and it is not every other event type.',
  cateringHref: '/catering-dubai',
  cateringLabel: 'Luxury catering in Dubai',
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  chefHref: '/private-chef-dubai',
  chefLabel: 'Private chef services in Dubai',
} as const

export const jumpNav = [
  { href: '#formats', label: 'How guests eat' },
  { href: '#pricing', label: 'Prices' },
  { href: '#venues', label: 'Where' },
  { href: '#menus', label: 'Menus' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const weddingFormats = [
  {
    title: 'Plated wedding dinner',
    body: 'Guests are seated and courses are served to the table. Staffing, table layout and timing matter more here than on a buffet.',
    href: '/buffet-vs-plated-dubai',
    linkLabel: 'Buffet vs plated',
  },
  {
    title: 'Wedding buffet',
    body: 'A practical format for larger groups and more choice. Presentation, serving equipment and the team around it still have to suit a wedding — not a conference lunch.',
    href: '/buffet-catering-dubai',
    linkLabel: 'Buffet catering',
  },
  {
    title: 'Live cooking stations',
    body: 'Food prepared in front of guests. Pasta, carving, grill, seafood, sushi, Asian, Middle Eastern or dessert stations can be the main meal or one stage of a longer evening.',
    href: '/live-cooking-stations-dubai',
    linkLabel: 'Live cooking stations',
  },
  {
    title: 'Canapés and cocktail reception',
    body: 'For arrivals, the gap after the ceremony, or a standing reception. Can stay light before dinner, or become the whole food service.',
    href: '/cocktail-party-catering-dubai',
    linkLabel: 'Cocktail reception catering',
  },
  {
    title: 'Sharing and family-style',
    body: 'Large dishes on the table. More social than plated service, still styled. Works well with Mediterranean, Italian and Middle Eastern menus.',
    href: CATERING_PATHS.overview,
    linkLabel: 'Food, service and the table',
  },
  {
    title: 'Grazing and dessert tables',
    body: 'A grazing table for arrivals or a relaxed stretch of the reception. A dessert table as the last food moment of the night.',
    href: '/grazing-table-dubai',
    linkLabel: 'Grazing tables',
  },
] as const

export const weddingSettings = [
  {
    title: 'Intimate weddings',
    body: 'A smaller guest list can feel closer to private dining than large-scale catering: plated menus, sharing dinners, chef-led service in a villa, residence or smaller venue.',
    href: '/private-chef-dubai',
    linkLabel: 'Private chef for a smaller table',
    image: '/images/celebration-catering-dubai-hero.webp',
    imageAlt: 'An intimate wedding dinner in a Dubai home. Experience concept shown.',
  },
  {
    title: 'Villa wedding catering',
    body: 'A villa gives you freedom. Catering still has to be planned around kitchen access, preparation space, electricity, water, guest movement and where each food stage happens.',
    href: CATERING_PATHS.villas,
    linkLabel: 'Villa catering',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa wedding catering in Dubai — outdoor table and kitchen access. Experience concept shown.',
  },
  {
    title: 'Garden and outdoor weddings',
    body: 'Temperature, food holding, shade, access and kitchen distance all change the plan. We do not simply move an indoor menu outside.',
    href: '/private-party-catering-dubai',
    linkLabel: 'Outdoor catering',
    image: '/images/party-catering-dubai-hero.webp',
    imageAlt: 'An outdoor wedding reception in a Dubai garden. Experience concept shown.',
  },
  {
    title: 'Hotel and licensed venues',
    body: 'Downtown, DIFC, Business Bay, Dubai Marina, JBR, Bluewaters: ask on day one whether external catering is allowed. If the hotel says no, they are selling a building and a kitchen. That can be the right buy — it is not a myCHEF plated menu in that ballroom.',
    href: '/venue-partners',
    linkLabel: 'Preferred caterer',
    image: '/images/gala-dinner-catering-dubai-hero.webp',
    imageAlt: 'A hotel ballroom set for a wedding dinner in Dubai. Experience concept shown.',
  },
] as const

export const weddingCuisines = [
  {
    title: 'Indian wedding catering',
    body: 'Regional dishes, vegetarian selections, live stations, breads, snacks and sweets — often across more than one moment of the celebration. We start with the family, preferred regions, dietary requirements and format.',
    href: '/indian-catering-dubai',
    linkLabel: 'Indian catering',
  },
  {
    title: 'Arabic wedding catering',
    body: 'Sharing dishes, grills, mezze, rice, salads, breads, desserts, or a more contemporary reading of the same kitchen.',
    href: '/arabic-catering-dubai',
    linkLabel: 'Arabic catering',
  },
  {
    title: 'Lebanese wedding catering',
    body: 'Cold and hot mezze, grilled dishes, salads, breads, sharing mains and desserts — built as one menu, not a list of dishes.',
    href: '/arabic-catering-dubai',
    linkLabel: 'Lebanese and mezze menus',
  },
] as const

export const weddingProcess = [
  'Tell us the wedding: date, location, guest count, approximate style, any food ideas you already have.',
  'We understand the catering brief: formal or relaxed, plated or buffet, one cuisine or several, food only or fuller service.',
  'We develop a menu direction. You review it. Nothing stays on the menu only because it usually appears at weddings.',
  'We build the team, equipment and operational plan around that food.',
  'Where needed, we align timing with the venue or wedding planner.',
  'Guest count, menu, dietary requirements and timing are confirmed before the day.',
  'On the wedding day the team runs the food and beverage operation. You stay with the reason everyone is there.',
] as const

export const pricingIntro = [
  'Treat any number you see online, including ours, as a planning estimate until you have a written proposal for your date, venue and guest count.',
  'A food-led wedding buffet or station plan in Dubai often sits around AED 180–350 per guest once staff are in the room — less if it is true drop-off, more if you open live kitchens. A chef-led plated dinner in a villa, the evening most couples mean when they want myCHEF in the house, typically sits around AED 700–950 per guest. Hotel ballroom packages are a third thing: often AED 380–800+ and they may already include the room. Small villa dinners often work to a night minimum around AED 2,400–4,500 rather than a cheap head-rate.',
] as const

export const pricingNotes = [
  ESTIMATE_CAPTION,
  WEDDING_VAT,
  estimateFloors,
  `Figures reviewed ${FIGURES_REVIEWED}.`,
  'Not every wedding meets the starting points. Guest count, menu, staffing, venue access, timing and equipment move the total.',
] as const

export const includedItems = [
  {
    title: 'Always coordinated',
    body: inclusionBuckets.always.join(' · '),
  },
  {
    title: 'When the plan says so',
    body: inclusionBuckets.whenAgreed.join(' · '),
  },
  {
    title: 'Optional additions',
    body: inclusionBuckets.optional.join(' · '),
  },
  {
    title: 'Venue or licensed partners',
    body: `${inclusionBuckets.venue.join(' · ')}. ${inclusionBuckets.partners.join(' · ')}.`,
  },
] as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client. No chef is guaranteed by name; we match the wedding.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    body: 'Halal ingredients are sourced by default for myCHEF catering menus in Dubai. Tell us the standard you expect. Specific certification belongs in the brief.',
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
    href: `${WEDDING_PATH}#pricing`,
    linkLabel: 'Wedding catering prices',
  },
] as const

/** Published on /case-studies — no client names, no new claims. */
export const exampleEvents = [
  {
    title: 'Villa wedding reception, Emirates Hills',
    guests: '80 guests',
    venue: 'Private villa, Emirates Hills',
    setup: 'Arabic-Mediterranean fusion; roaming canapés, live grill and family-style sharing plates.',
    outcome: 'Guests kept moving through canapés and sharing plates; the dance floor stayed full.',
    href: '/case-studies',
    linkLabel: 'Case studies',
  },
] as const

export const decisionModule = {
  h2: 'A small wedding should not be a simplified large one',
  intimateLead: 'Intimate table:',
  intimateBody:
    'with fewer guests the food can be more personal: a longer tasting menu, detailed plating, a sharing dinner. That brief often belongs with a private chef for a smaller table.',
  cateringLead: 'Not a wedding:',
  cateringBody: 'food-only through full event support for any other night sits on the catering hub.',
  eventsLead: 'Another occasion:',
  eventsBody: 'a birthday, corporate night or private party belongs on the events hub.',
  dining:
    'If the table is two covers, a tasting or a desert dinner, that is private dining — not this page.',
  chefHref: '/private-chef-dubai',
  chefLabel: 'Private chef services in Dubai',
  cateringHref: '/catering-dubai',
  cateringLabel: 'Luxury catering in Dubai',
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  diningHref: '/luxury-dining-experiences',
  diningLabel: 'Private dining in Dubai',
} as const

export const weddingFaqs = [
  {
    q: 'How many guests can you cater for?',
    a: 'From small villa dinners of around twenty to receptions of several hundred. The format, staffing and kitchen plan follow the final count and the site, not a standard package.',
  },
  {
    q: 'What does myCHEF actually do — are you the caterer?',
    a: 'myCHEF designs and coordinates the catering plan, then matches you with vetted chefs, service professionals and licensed culinary partners. We stay your point of contact for the food and beverage operation and work with your planner and venue.',
  },
  {
    q: 'Do you cater villa and outdoor weddings?',
    a: 'Yes. Villa, garden, beach and rooftop weddings are a regular part of the work, alongside hotel and licensed venues. Outdoor service is planned for Dubai’s climate, with a weather backup agreed before the day.',
  },
  {
    q: 'How far ahead should we book?',
    a: 'Three to six months is the comfortable window. Peak dates from November to March, and larger weddings, should start earlier. Short notice is sometimes possible — send the date and we will say honestly whether the right team is free.',
  },
  {
    q: 'How much does wedding catering cost in Dubai?',
    a: 'It is custom-quoted. Buffet and stations generally sit lower per guest than plated service. Small villa dinners often have a minimum booking value. Every proposal is itemised and includes 5% VAT as its own line. The [cost guide](/blog/wedding-catering-cost-dubai) explains what moves the number.',
  },
  {
    q: 'Is the food halal, and can you handle mixed diets?',
    a: 'Halal is the default. Vegetarian, vegan, Jain and allergy-aware covers are planned when you share them. We do not promise an allergy-safe kitchen unless a dedicated controlled setup has been confirmed for your booking.',
  },
  {
    q: 'Do you handle drinks?',
    a: 'Welcome drinks, mocktails, soft drinks, tea and coffee can be part of the plan. Alcohol depends on the venue licence. Where it is permitted, we coordinate with the venue or a licensed partner rather than improvising.',
  },
  {
    q: 'Do you work with our wedding planner?',
    a: 'Yes. We manage the food and beverage operation and fit it to your planner’s run sheet. We do not replace a planner. If you do not have one, we still need one named day-of contact who is not the couple.',
  },
] as const

export const weddingClusterLinks = WEDDING_SUPPORTING_GUIDES

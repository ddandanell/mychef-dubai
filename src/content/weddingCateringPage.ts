import { CATERING_PATHS } from './cateringCluster'

export const WEDDING_PATH = '/wedding-catering-dubai' as const

export const WEDDING_KEYWORD_LOCK = {
  primary: 'wedding catering Dubai',
  title: 'Wedding Catering Dubai | Villa, Garden & Venue | myCHEF',
  description:
    'Wedding catering in Dubai for villas, gardens and venues. myCHEF designs the plan and matches you with vetted chefs and licensed partners. Request a quote.',
} as const

export const WEDDING_INQUIRY_HREF =
  '/inquiry'

export const WEDDING_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning wedding catering. Date: __, Guests: __, Venue: __, Format: __ (via mychef.ae/wedding-catering-dubai)"

export const WEDDING_WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(WEDDING_WHATSAPP_MESSAGE)}`

export const weddingHero = {
  src: '/images/wedding-catering-dubai-hero.webp',
  alt: 'A villa wedding dinner in Dubai — long table, candlelight, service in the background. Experience concept shown.',
  width: 2560,
  height: 1440,
} as const

export const weddingFormats = [
  {
    title: 'Plated wedding dinner',
    body: 'Guests are seated and courses are served to the table. Staffing, table layout and timing matter more here than on a buffet.',
    href: '/buffet-vs-plated-dubai',
  },
  {
    title: 'Wedding buffet',
    body: 'A practical format for larger groups and more choice. Presentation, serving equipment and the team around it still have to suit a wedding — not a conference lunch.',
    href: '/buffet-catering-dubai',
  },
  {
    title: 'Live cooking stations',
    body: 'Food prepared in front of guests. Pasta, carving, grill, seafood, sushi, Asian, Middle Eastern or dessert stations can be the main meal or one stage of a longer evening.',
    href: '/live-cooking-stations-dubai',
  },
  {
    title: 'Canapés and cocktail reception',
    body: 'For arrivals, the gap after the ceremony, or a standing reception. Can stay light before dinner, or become the whole food service.',
    href: '/canape-catering-dubai',
  },
  {
    title: 'Sharing and family-style',
    body: 'Large dishes on the table. More social than plated service, still styled. Works well with Mediterranean, Italian and Middle Eastern menus.',
    href: CATERING_PATHS.overview,
  },
  {
    title: 'Grazing and dessert tables',
    body: 'A grazing table for arrivals or a relaxed stretch of the reception. A dessert table as the last food moment of the night.',
    href: '/grazing-table-dubai',
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
    href: '/beach-catering-dubai',
    linkLabel: 'Outdoor catering',
    image: '/images/party-catering-dubai-hero.webp',
    imageAlt: 'An outdoor wedding reception in a Dubai garden. Experience concept shown.',
  },
  {
    title: 'Hotel and licensed venues',
    body: 'Downtown, DIFC, Business Bay, Dubai Marina, JBR, Bluewaters: ask on day one whether external catering is allowed. If the hotel says no, they are selling a building and a kitchen. That can be the right buy — it is not a myCHEF plated menu in that ballroom.',
    href: '/venue-partners',
    linkLabel: 'Venue partners',
    image: '/images/gala-dinner-catering-dubai-hero.webp',
    imageAlt: 'A hotel ballroom set for a wedding dinner in Dubai. Experience concept shown.',
  },
] as const

export const weddingCuisines = [
  {
    title: 'Indian wedding catering',
    body: 'Regional dishes, vegetarian selections, live stations, breads, snacks and sweets — often across more than one moment of the celebration. We start with the family, preferred regions, dietary requirements and format.',
    href: '/indian-catering-dubai',
  },
  {
    title: 'Arabic wedding catering',
    body: 'Sharing dishes, grills, mezze, rice, salads, breads, desserts, or a more contemporary reading of the same kitchen.',
    href: '/arabic-catering-dubai',
  },
  {
    title: 'Lebanese wedding catering',
    body: 'Cold and hot mezze, grilled dishes, salads, breads, sharing mains and desserts — built as one menu, not a list of dishes.',
    href: '/arabic-catering-dubai',
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

export const weddingClusterLinks = [
  { href: '/blog/wedding-catering-cost-dubai', label: 'Wedding catering cost', note: 'What changes the quote' },
  { href: '/wedding-catering-checklist-dubai', label: 'Wedding catering checklist', note: 'The planning sequence' },
  { href: '/wedding-catering-menu-planning-dubai', label: 'Wedding menu planning', note: 'Formats, tasting, sample menus' },
  { href: '/dessert-table-catering-dubai', label: 'Dessert table catering', note: 'Cake and the last food moment' },
  { href: '/blog/grazing-table-vs-buffet-dubai', label: 'Grazing table vs buffet', note: 'Which format fits the room' },
  { href: '/blog/how-far-ahead-book-caterer-dubai', label: 'How far ahead to book', note: 'Lead times by event type' },
  { href: '/blog/vegan-catering-dubai-guide', label: 'Vegan catering guide', note: 'Plant-based menus' },
] as const

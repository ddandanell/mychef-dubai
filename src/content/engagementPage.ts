/**
 * Copy for /engagement-catering-dubai
 *
 * KEYWORD LOCK: pages["/engagement-catering-dubai"] — primary
 * "engagement party catering dubai".
 *
 * This page owns two families, a toast, and a pre-wedding gathering.
 * It does not own the proposal (two people), the wedding, a two-cover
 * dinner, or an anniversary with friends — those leave.
 *
 * Prices match the published bands on /events and /catering-dubai.
 */

import { cateringPricingNotes, hubPriceRows } from './cateringPricing'

export const ENGAGEMENT_ROOT = '/engagement-catering-dubai' as const

export const ENGAGEMENT_KEYWORD_LOCK = {
  primary: 'engagement party catering dubai',
  title: 'Engagement Party Catering Dubai | Two Families & a Toast | myCHEF',
  description:
    'Engagement party catering Dubai for two families and a toast. Drop-off from AED 90, buffet from AED 120. Menu, staff, setup and clear-down.',
} as const

export const ENGAGEMENT_WHATSAPP_NUMBER = '971551744849'
export const ENGAGEMENT_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning engagement party catering. Date: __, Guests: __, Venue: __, Families / toast: __ (via mychef.ae/engagement-catering-dubai)"
export const ENGAGEMENT_WHATSAPP_LINK = `https://wa.me/${ENGAGEMENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(ENGAGEMENT_WHATSAPP_MESSAGE)}`

/** pages["/engagement-catering-dubai"].internal_linking.siblings — render exactly. */
export const ENGAGEMENT_SIBLING_LINKS = [
  { href: '/wedding-catering-dubai', label: 'Wedding catering' },
  { href: '/proposal-dinner-dubai', label: 'Proposal dinner' },
  { href: '/private-party-catering-dubai', label: 'Private party catering' },
] as const

export const engagementHero = {
  src: '/images/engagement-catering-dubai-hero.webp',
  alt: 'Two families at an engagement gathering in a Dubai home — standing guests, a toast, warm lighting. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const engagementHeroCopy = {
  eyebrow: 'Private events',
  title: 'Engagement party catering Dubai for two families and a toast',
  subtitle:
    "Engagement party catering in Dubai, bringing two families together over a thoughtful menu, warm hospitality and a celebration planned around your home or chosen venue.",
  priceLine: 'Event buffets from AED 120 per person.',
  replyLine: 'Share the date, address, guest count and who is in the room. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    "Bring family and friends together to celebrate your engagement, with catering tailored to the venue and guest list. Choose drop-off from AED 90 per person, a staffed buffet from AED 120, live stations or a private plated menu.",
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  partyHref: '/private-party-catering-dubai',
  partyLabel: 'Private party catering',
  eventsNote: 'is the occasion hub — use it when the night is still unnamed.',
  partyNote: "offers tailored menus for birthdays, anniversaries and informal gatherings with friends.",
} as const

export const jumpNav = [
  { href: '#who-leaves', label: 'Who this is for' },
  { href: '#pricing', label: 'Formats & prices' },
  { href: '#menus', label: 'How food is served' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const whoLeaves = [
  {
    title: 'Planning the proposal celebration',
    body: 'One person, one table, a ring. That night belongs on the proposal dinner page — or a romantic dinner if you have not opened that URL yet.',
    href: '/proposal-dinner-dubai',
    linkLabel: 'Proposal dinner in Dubai',
  },
  {
    title: 'Looking ahead to the wedding meal',
    body: 'Once you are planning the marriage — tastings, timings, a guest list that is already a seating chart — that is wedding catering.',
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
  },
  {
    title: 'An intimate dinner for two',
    body: 'If it is just the two of you and a chef, start with a romantic dinner. A private chef cooking in your kitchen is the better product when everyone sits at one table.',
    href: '/romantic-dinner-dubai',
    linkLabel: 'Romantic dinner in Dubai',
    secondaryHref: '/private-chef-dubai',
    secondaryLabel: 'Private chef services in Dubai',
  },
  {
    title: "Planning an anniversary celebration?",
    body: 'Friends at the table for a year already lived sits on private party catering, not here. Two-cover anniversaries go to romantic dinner.',
    href: '/private-party-catering-dubai#anniversary',
    linkLabel: 'Anniversary with friends — private party catering',
  },
] as const

export const whatItIs = {
  h2: 'Engagement party catering Dubai, tailored to your celebration',
  paragraphs: [
    "Engagement catering in Dubai combines a welcoming menu, a considered service plan and room for both families to enjoy the celebration. We coordinate the food around your venue, guest list and any planned toast.",
    'A small engagement still belongs here when one stove cannot plate the room. Six people at one table is an engagement dinner a private chef can run. Parents, siblings and friends standing in the garden need a team.',
    "Halal sourcing is the default. Share any certification requirements and dietary needs before the menu is developed so the culinary partner can confirm suitability.",
  ],
} as const

export const priceRows = hubPriceRows()

export const pricingIntro = [
  "The service format, menu, guest count and staffing determine your engagement catering price. Your tailored proposal sets out the agreed package, with food, equipment, service and 5% VAT clearly identified.",
] as const

export const pricingNotes = cateringPricingNotes()

export const includedItems = [
  {
    title: 'Menu',
    body: 'Written around who is eating — both families, dietary notes, whether people sit or stand, and what the kitchen can actually hold.',
  },
  {
    title: 'Chefs',
    body: 'Licensed culinary partners matched to the night. No chef is guaranteed by name.',
  },
  {
    title: 'Staff',
    body: 'Waiters, bartenders and runners sized to the format — added when the room needs them.',
  },
  {
    title: 'Setup and cleanup',
    body: "A staffed booking includes the agreed arrival, setup, service and clear-down arrangements, coordinated around your home and celebration.",
  },
] as const

export const menuFormats = [
  {
    title: 'Drop-off',
    body: 'Food delivered ready to serve. No service team on site. You host; you clear.',
    href: '/drop-off-catering-dubai',
    linkLabel: 'Drop-off catering in Dubai',
  },
  {
    title: 'Buffet',
    body: 'A maintained spread for mixed guest lists and rooms that do not all sit at once.',
    href: '/buffet-catering-dubai',
    linkLabel: 'Buffet catering in Dubai',
  },
  {
    title: 'Canapés and standing food',
    body: "Passed canapés or a styled display work well while guests mingle and gather for a toast. Explore the canapé menu for suitable selections.",
    href: '/canape-catering-dubai',
    linkLabel: 'Canapé catering in Dubai',
  },
  {
    title: 'Plated dining',
    body: 'Courses served to seated guests. Best when timing and table service matter more than movement.',
    href: '/buffet-vs-plated-dubai',
    linkLabel: 'Compare catering formats',
  },
] as const

export const gallery = [
  {
    src: '/images/engagement-catering-dubai-plated.webp',
    alt: 'Plated courses at an engagement dinner in a Dubai home. Experience concept shown.',
  },
  {
    src: '/images/engagement-catering-dubai-canapes.webp',
    alt: 'Passed bites on a tray at a Dubai engagement gathering. Experience concept shown.',
  },
  {
    src: '/images/engagement-catering-dubai-dessert.webp',
    alt: 'Dessert service after an engagement toast in Dubai. Experience concept shown.',
  },
  {
    src: '/images/engagement-catering-dubai-villa.webp',
    alt: 'A villa set for an engagement gathering in Dubai. Experience concept shown.',
  },
] as const

export const startSteps = [
  'Share the date, address, guest count and who is in the room — both families, a toast, or a small engagement dinner.',
  'We send an itemised proposal: menu direction, format, staffing and the figures that move with them.',
  'You review it. Swap dishes, drop a layer, or add a station before anything is confirmed.',
  'On the night the team runs setup, service and clear-down. You stay with your guests.',
] as const

export const engagementFaqs = [
  {
    q: 'How is engagement party catering priced in Dubai?',
    a: 'Drop-off food starts from AED 90 per person. A standard event buffet starts from AED 120. Premium buffet, live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. Guest count, menu, staffing, access and 5% VAT move the total. Every proposal is itemised. See [catering packages](/catering-packages-dubai).',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'Drop-off starts from 10 guests, with a minimum order of AED 900. A standard event buffet starts from 20 guests. Under around 10 guests, a [private chef](/private-chef-dubai) cooking in your kitchen is usually the better product.',
  },
  {
    q: 'Is this the same as a proposal dinner?',
    a: "An engagement party brings family and friends together to celebrate the engagement. For the moment of asking, explore our [proposal dinner service](/proposal-dinner-dubai).",
  },
  {
    q: 'Do you cater a small engagement?',
    a: "Yes. We can plan a smaller engagement gathering with a seated menu and service suited to your home. Share the guest count and setting so we can recommend an appropriate format.",
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are sourced by default for myCHEF engagement menus in Dubai. Mixed guest lists and specific certification requirements should be in the brief. More on [halal catering](/halal-catering-dubai).',
  },
  {
    q: 'How is this different from wedding catering?',
    a: "Engagement catering covers the gathering that celebrates your engagement. For the wedding day itself, explore [wedding catering](/wedding-catering-dubai), including menu planning, tastings and reception service.",
  },
  {
    q: 'What goes into the engagement catering Dubai price?',
    a: "Drop-off starts from AED 90 per person. The final engagement catering quote reflects your guest count, menu, service team, equipment and access requirements, with 5% VAT shown separately.",
  },
  {
    q: 'Do you offer engagement catering packages Dubai?',
    a: 'Engagement catering packages Dubai starts from a set format that we adjust to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. Starting points begin at AED 90 per person. Ask for the format closest to what you are planning and we shape it from there.',
  },
] as const

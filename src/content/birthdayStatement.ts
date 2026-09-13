/**
 * Statement / private-milestone lane for /birthday-catering-dubai.
 * Sits above the published price table. Does not replace it.
 * No yacht hire, named-chef guarantee, or allergen-free claims.
 */

import { BIRTHDAY_SUPPORT } from './birthdayCluster'
import { birthdayInquiryHref } from './birthdayExtras'

export const BIRTHDAY_PRIVATE_INQUIRY_HREF = birthdayInquiryHref([], { lane: 'private' })

export const dualPath = {
  label: 'TWO WAYS TO START',
  h2: 'A clear quote, or a private brief',
  lead:
    'If you want to choose a format and extras, use the itemised proposal. If the evening needs a running order, a surprise, or a gated house, send a private brief. Food stays at the centre either way.',
  catalogue: {
    title: 'Itemised birthday proposal',
    body: 'Formats, published floors, optional extras. You see the lines before you confirm.',
    href: birthdayInquiryHref(),
    label: 'Request my itemised birthday proposal',
  },
  private: {
    title: 'Private milestone brief',
    body: 'Date, venue type, guest mix, vibe, budget band, surprise. We design the sequence and quote it as lines.',
    href: '#private-brief',
    label: 'Plan a private milestone birthday',
  },
} as const

export const statementH2 = 'Statement birthdays we design around food'

export const statementIntro =
  'These are anonymous styles of evening, not named client stories. You arrange the house, the boat or the compound. We design the food, the service and the running order so the night holds together.'

export const statementScenarios = [
  {
    id: 'palm-villa',
    title: 'Palm villa garden for about 40',
    body: 'Welcome canapés, grill or live stations, a timed cake moment, then mocktail service. Gates, shade and load-in belong in the brief.',
    image: '/images/birthday-catering-dubai-villa.webp',
    imageAlt: 'Villa terrace birthday with guests seated and chefs at a side station. Experience concept shown.',
  },
  {
    id: 'tasting-50th',
    title: 'Seated tasting for a 50th, about 10 covers',
    body: 'Courses timed to a toast. The cake is its own act, not a collision with dessert. A chef cooking in the kitchen has no volume minimum.',
    image: '/images/birthday-catering-dubai-adult.webp',
    imageAlt: 'Seated birthday dinner in a Dubai villa with the chef at the edge of the table. Experience concept shown.',
  },
  {
    id: 'two-audience',
    title: 'Children’s afternoon, adult dinner later',
    body: 'One running order: children eat earlier with food they recognise and one activity, then the adult catering takes the night. Not two parties in one garden.',
    image: '/images/birthday-catering-dubai-mixed.webp',
    imageAlt: 'Adults and children at separate tables in a Dubai villa, chef serving. Experience concept shown.',
  },
  {
    id: 'yacht-catering',
    title: 'Yacht birthday, catering only',
    body: 'You own or charter the boat. We plan marina-safe loading, canapés, a grill if the deck allows, and cake. Compact galleys and storage decide the menu.',
    image: '/images/birthday-catering-dubai-yacht.webp',
    imageAlt: 'Passed plates and a chef serving on a Dubai yacht at golden hour. Experience concept shown.',
  },
  {
    id: 'surprise-home',
    title: 'Surprise reveal at home',
    body: 'One contact. Load-in timed to the guest of honour leaving. We stay off the family group chat. Getting them out of the house stays with you.',
    image: '/images/birthday-catering-dubai-hero.webp',
    imageAlt: 'A host seated at a birthday dinner while a chef and server work behind the table. Experience concept shown.',
  },
] as const

export type StatementScenarioId = (typeof statementScenarios)[number]['id']

export const eveningActsH2 = 'How a private evening scales'

export const eveningActsIntro =
  'The night is a sequence, not a shopping list. Act 1 is the catering. Acts 2 to 5 are optional lines on the same proposal. Nothing is added automatically.'

export const eveningActs = [
  {
    act: 'Act 1',
    title: 'Food, staff and clear-down',
    body: 'The core booking. Delivery, buffet, live stations or a seated dinner, sized to the room.',
  },
  {
    act: 'Act 2',
    title: 'Cake, flowers or balloons, photographer',
    body: 'The reveal and the record. Quoted after supplier confirmation. Not inside the catering floor.',
  },
  {
    act: 'Act 3',
    title: 'Live station, dessert table, mocktail service',
    body: 'When the room should move. Power, queue space and bar equipment belong in the brief. Alcohol at a private residence is sourced by the host.',
  },
  {
    act: 'Act 4',
    title: 'Entertainment',
    body: 'Musician, DJ, or one children’s activity, written into the same running order. Duration and staffing are named before you confirm.',
  },
  {
    act: 'Act 5',
    title: 'Coordination of the selected vendors',
    body: 'So you are not running the WhatsApp group. We coordinate what is on the proposal. We do not hire the yacht or book a soft-play venue.',
  },
] as const

export const discretion = {
  label: 'DISCRETION',
  h2: 'One contact. The house stays private.',
  body: 'Private residences, gated communities and surprises need a single point of contact, load-in timed to the brief, and no posting without your permission. We stay off the family group chat. Written privacy instructions go in the proposal when you ask for them.',
  points: [
    'One coordinator for food, service and the extras on the proposal',
    'Surprise load-in planned around the guest of honour',
    'No photographs or venue details published unless you have agreed in writing',
    'Gated access, security and compound rules named before confirmation',
  ],
} as const

export const venueStagesH2 = 'The birthday is the stage. We cater it.'

export const venueStages = [
  {
    title: 'Home and villa',
    body: 'Kitchen access, gates, shade and community rules belong in the brief.',
    href: BIRTHDAY_SUPPORT.villas,
    label: 'Villa catering',
  },
  {
    title: 'Yacht',
    body: 'You arrange the boat. We cater it: compact menus, marina loading, on-board service.',
    href: BIRTHDAY_SUPPORT.yachts,
    label: 'Yacht catering',
  },
  {
    title: 'Penthouse or apartment kitchen',
    body: 'A seated dinner for a small table is a normal booking. Lift and load-in decide the format.',
    href: BIRTHDAY_SUPPORT.privateChef,
    label: 'Private chef services',
  },
  {
    title: 'Garden or pool',
    body: 'Staffed service when the guest list outgrows one stove. Children stay away from any grill.',
    href: BIRTHDAY_SUPPORT.villas,
    label: 'Home celebrations',
  },
] as const

export const privateEveningBandsH2 = 'Typical private evenings we quote'

export const privateEveningBandsIntro =
  'These sit beside the per-person floors, not instead of them. The first line is a published starting point. The others describe evenings we typically quote for food and staff. Large production extras are separate lines. 5% VAT is shown on its own.'

export const privateEveningBands = [
  {
    title: 'Intimate chef-led table',
    who: '8–12 guests',
    figure: 'From AED 3,600',
    note: 'Published celebration starting point, before 5% VAT. Not the plated AED 700–950-per-person band.',
  },
  {
    title: 'Staffed villa evening',
    who: '20–40 guests',
    figure: 'Typically AED 5,000–15,000 for food and staff',
    note: 'A range of evenings we quote, not a published floor. Headcount, format and access move the figure.',
  },
  {
    title: 'Statement night',
    who: 'Food, styling and entertainment',
    figure: 'Itemised lines on one proposal',
    note: 'No all-in package. Cake, florals, photography and entertainment are named before you confirm.',
  },
] as const

export const whatWeDontH2 = 'What we do not do'

export const whatWeDont = [
  'We do not hire yachts, book hotel ballrooms, or take a soft-play area as a venue.',
  'We do not guarantee a chef by name.',
  'We do not describe menus as allergen-free.',
  'Alcohol at a private residence is sourced by the host.',
  'We do not post photographs of your house or guests unless you have agreed that in writing.',
] as const

export const privateBriefCopy = {
  label: 'PRIVATE BRIEF',
  h2: 'Plan a private milestone birthday',
  lead: 'Date, venue type, adults, children, vibe, budget band and whether it is a surprise. A moodboard link helps if you have one. Menu questions can wait.',
} as const

export const VENUE_TYPES = [
  { id: 'villa', label: 'Villa or garden' },
  { id: 'yacht', label: 'Yacht (you arrange the boat)' },
  { id: 'penthouse', label: 'Penthouse or apartment' },
  { id: 'other', label: 'Other / not sure' },
] as const

export const BUDGET_BANDS = [
  { id: '', label: 'Not sure yet' },
  { id: 'intimate', label: 'Intimate table (around the 8–12 celebration)' },
  { id: 'villa', label: 'Staffed villa evening' },
  { id: 'statement', label: 'Statement night, itemised' },
] as const

export function isStatementScenarioId(value: string): value is StatementScenarioId {
  return statementScenarios.some((item) => item.id === value)
}

export function scenarioById(id: string | null): (typeof statementScenarios)[number] | undefined {
  if (!id) return undefined
  return statementScenarios.find((item) => item.id === id)
}

/**
 * THE HOUSEHOLD PAPER — one set of words and one set of numbers for the private chef silo.
 *
 * Five pages used to describe the same arrangement in five vocabularies: the hub said
 * "independent licensed partners", Our Chefs said Professional / Senior / Specialist / Lead,
 * prices said Professional / Head, and the supplier paper said Level 1 / 2 / 3. A client read
 * freelancer, a supplier read invisible, a cook read gig. Every one of them was reading the
 * same company.
 *
 * So the ladder, the score, the money, the cancellation notice and the worked month live here
 * and nowhere else. A page may quote from this file; it may not invent its own version.
 *
 * The rule behind the numbers: the price is the price. The house pays one rate for a job. The
 * three levels are what the cook earns for doing that job well and keeping it up — the client's
 * figure does not move when a cook climbs.
 */

import { SERVICES, SUPPLIER_SHARE, formatAed } from './privateChefPricing'

/** Who employs whom. The single most misread thing on the site. */
export const EMPLOYMENT = {
  short: 'A licensed supplier employs your chef on a proper visa.',
  full:
    'A licensed supplier employs your chef on a proper visa. We match the person to the house, ' +
    'manage the arrangement, score the work and pay the quality extra to the cook. You never put ' +
    'a chef on your payroll, and we never hand you a CV and walk away.',
  notAnAgency:
    'For you we are not an agency: nobody sends you a stack of CVs and disappears. For the chef we ' +
    'are not the employer either — the supplier is, which is what makes the visa, the salary and ' +
    'the insurance real rather than a promise.',
  visa:
    'We ask to see the visa and the right to work before anyone cooks in your kitchen. Not a ' +
    'declaration on a form — the document.',
} as const

/**
 * The money ladder. One number the client pays; three levels the cook can reach.
 * The extra is a percentage of what the house pays for that person's work, and it is paid to
 * the registered cook — not to the company that sent them.
 */
export const QUALITY_LEVELS = [
  {
    id: 1,
    name: 'Level 1',
    label: 'Starting',
    extraPct: 0,
    /** Client-facing line beside the level. extraPct stays for internal math and must not render. */
    earnedBy: 'the price is the price',
    meaning: 'Every chef starts here.',
  },
  {
    id: 2,
    name: 'Level 2',
    label: 'Good work',
    extraPct: 0.1,
    earnedBy: 'a month of strong service',
    meaning: 'Consistently strong feedback across a full month of service.',
  },
  {
    id: 3,
    name: 'Level 3',
    label: 'Kept good work',
    extraPct: 0.2,
    earnedBy: 'three months of strong service',
    meaning: 'That standard held for three months. Catering work opens up.',
  },
] as const

/** What the score does. Printed identically on Our Chefs, Quality & Training and How it works. */
export const SCORE_BANDS = [
  { band: 'Consistently strong', effect: 'Climbs a level at the next review.' },
  { band: 'Steady', effect: 'Holds the current level.' },
  { band: 'Below the standard', effect: 'Drops a level, and we look at the match before we look at the person.' },
  { band: 'Well under, twice', effect: 'We stop sending that chef to homes.' },
] as const

/** The four questions the house is asked. Same four on the supplier paper. */
export const REVIEW_QUESTIONS = [
  { q: 'The service', asks: 'Did the visit run the way it was supposed to run?' },
  { q: 'The food', asks: 'Was the food right for this house — not for a restaurant guide?' },
  { q: 'The person', asks: 'Is this the right person in your kitchen?' },
  { q: 'Anything better', asks: 'What would make next week better? One line is enough.' },
] as const

export const SCORE_ROUTING = {
  food: 'Comments about the food go back to the house as a menu change, not to the chef as a complaint.',
  person: 'Comments about the person go to the person, in private, with their manager present.',
  safety: 'Safety is never a score. It is a stop.',
} as const

/** How a wrong match is handled — one sentence, used on four pages. */
export const WRONG_MATCH =
  'A wrong match is changed, and the Food Profile stays with the household so the next chef is not starting from zero.'

/** Notice for moving or cancelling a scheduled visit. Same number on the client and supplier papers. */
export const CANCEL_NOTICE_HOURS = 24

/** Overtime: the hourly rate of that job plus 50%. The 50% goes to the supplier; the cook stays on their normal rate. */
export const OVERTIME_UPLIFT = 0.5

export const OVERTIME_RULE =
  'Extra time is quoted at the applicable hourly rate, from AED 150 to AED 500 an hour, agreed with you before anyone stays on. The chef stays on their normal rate, so nobody has a reason to make your day run long.'

/** The month we teach, everywhere: four days a week, Kitchen on Autopilot. */
const AUTOPILOT = SERVICES.find((s) => s.id === 'autopilot')!
const VISITS = 16
const CLIENT_MONTH = AUTOPILOT.rate * VISITS

export const MONTH_EXAMPLE = {
  service: AUTOPILOT.name,
  daysPerWeek: 4,
  visits: VISITS,
  rate: AUTOPILOT.rate,
  client: CLIENT_MONTH,
  supplier: Math.round(CLIENT_MONTH * SUPPLIER_SHARE),
  supplierShare: SUPPLIER_SHARE,
  cookExtra: QUALITY_LEVELS.map((l) => Math.round(CLIENT_MONTH * l.extraPct)),
  /** Four days a week is sixteen visits in four weeks. A 30-day month occasionally lands a 17th. */
  longMonthNote:
    'Four days a week is sixteen visits in four weeks. A long month sometimes lands a seventeenth; ' +
    'it is billed when it happens, never assumed.',
} as const

export const MONTH_SENTENCE =
  `Four days a week on ${MONTH_EXAMPLE.service} is ${MONTH_EXAMPLE.visits} visits: ` +
  `${formatAed(MONTH_EXAMPLE.client)} for the house, ${formatAed(MONTH_EXAMPLE.supplier)} to the supplier who ` +
  `employs the chef, and ${formatAed(MONTH_EXAMPLE.cookExtra[0])}, ${formatAed(MONTH_EXAMPLE.cookExtra[1])} or ` +
  `${formatAed(MONTH_EXAMPLE.cookExtra[2])} of quality extra to the cook, depending on their level.`

/** The four household jobs, as the client meets them. Prices come from the engine, never retyped. */
export const HOUSEHOLD_JOBS = SERVICES.map((s) => ({
  id: s.id,
  name: s.name,
  hours: s.hours,
  unit: s.unit,
  rate: s.rate,
  tagline: s.tagline,
}))

/** What a private chef is, and where the line to catering sits. Used on the hub and the comparison. */
export const THE_LINE = {
  privateChef: 'A private chef is a standing arrangement: the same person comes back to your house.',
  catering: 'Catering is one night: a dinner, a party, an event, a team that arrives and leaves.',
  test:
    'The split is not guest count. It is whether the chef comes back. Guest count only decides when ' +
    'a house night has grown into an event and needs a catering team.',
} as const

/**
 * Booking terms: both documents must publish the same v2.0 commercial rules.
 *
 *   npx tsx scripts/test-booking-terms.ts
 */
import {
  BOOKING_TERMS_UPDATED,
  BOOKING_TERMS_VERSION,
  CORPORATE_BOOKING_TERMS,
  CORPORATE_BOOKING_TERMS_PATH,
  PRIVATE_CLIENT_TERMS,
  PRIVATE_CLIENT_TERMS_PATH,
  policyPlainText,
} from '../src/content/bookingTerms'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = got === want
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

const ok = (name: string, cond: boolean) => eq(name, cond, true)

eq('private path', PRIVATE_CLIENT_TERMS.path, PRIVATE_CLIENT_TERMS_PATH)
eq('corporate path', CORPORATE_BOOKING_TERMS.path, CORPORATE_BOOKING_TERMS_PATH)
eq('version', BOOKING_TERMS_VERSION, 'v2.0')
eq('updated', BOOKING_TERMS_UPDATED, '14 September 2026')

for (const doc of [PRIVATE_CLIENT_TERMS, CORPORATE_BOOKING_TERMS]) {
  const text = policyPlainText(doc)
  const label = doc.path
  ok(`${label} names v2.0`, doc.version === 'v2.0')
  ok(`${label} has 15-day band`, text.includes('15 days or more'))
  ok(`${label} has 8-to-14-day band`, text.includes('8 to 14 days'))
  ok(`${label} has 48-hour-to-7-day band`, text.includes('48 hours to 7 days'))
  ok(`${label} has under-48-hour band`, text.includes('Less than 48 hours'))
  ok(`${label} defines committed costs`, /committed costs/i.test(text))
  ok(`${label} balance is seven days before`, /seven days before the first/i.test(text))
  ok(`${label} deposit is acceptance`, /Payment of the deposit confirms your acceptance/i.test(text))
  ok(`${label} myCHEF is contracting party`, /myCHEF is (your|the) contracting party/i.test(text))
  ok(`${label} courts of Dubai`, /competent courts of Dubai/.test(text))
  ok(`${label} liability cap`, /limited to the amount you paid/.test(text))
  ok(`${label} default is no recording`, /no photography/i.test(text))
  ok(`${label} does not use inverted 6-day full refund`, !/Six calendar days or less/.test(text))
  ok(`${label} does not use 24-hour balance due`, !/due 24 hours before the first scheduled service/.test(text))
  ok(`${label} does not refund-in-full at six days`, !/six days or less[^.]*refunded in full/i.test(text))
}

const corporate = policyPlainText(CORPORATE_BOOKING_TERMS)
ok('corporate has twelve-month direct-hire restriction', /twelve months after the last service date/.test(corporate))
ok('corporate keeps confidentiality list', /Product launches, confidential projects/.test(corporate))

const privateText = policyPlainText(PRIVATE_CLIENT_TERMS)
ok('private has no twelve-month hire restriction', !/fee equal to three months/.test(privateText))
ok('private has chef continuity paragraph', /If you would like the same person again/.test(privateText))

if (fails) {
  console.error(`\n${fails} failed`)
  process.exit(1)
}
console.log('\nall passed')

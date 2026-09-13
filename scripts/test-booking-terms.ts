/**
 * Booking terms: the published refund rule must stay identical on both documents.
 *
 *   npx tsx scripts/test-booking-terms.ts
 */
import {
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

const seven = 'Seven or more calendar days before the event date'
const six = 'Six calendar days or less before the event date, but before service starts'
const noRefund = 'amounts already paid are not refunded'
const fullRefund = 'refunded in full'

for (const doc of [PRIVATE_CLIENT_TERMS, CORPORATE_BOOKING_TERMS]) {
  const text = policyPlainText(doc)
  const label = doc.path
  ok(`${label} has 7+ day rule`, text.includes(seven) && text.includes(noRefund))
  ok(`${label} has 6-day full refund`, text.includes(six) && text.includes(fullRefund))
  ok(`${label} does not use the old 48-hour refund`, !/48\+ hours|more than 48 hours/.test(text))
  ok(`${label} default is no recording`, /no photography/i.test(text))
}

if (fails) {
  console.error(`\n${fails} failed`)
  process.exit(1)
}
console.log('\nall passed')

/**
 * Brief B+F: one catering price table, calculator refuses below minimums.
 * Household chef visit rates are NOT in this module (see privateChefPricing.ts).
 *
 *   npx tsx scripts/test-catering-pricing.ts
 */
import * as cateringPricing from '../src/content/cateringPricing'
import {
  CATERING_FORMATS,
  EVENT_PACKAGES,
  PRICE_KIND,
  clampGuests,
  formatEstimate,
  formatFrom,
  formatTypical,
  hubPriceRows,
  quoteCatering,
} from '../src/content/cateringPricing'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

eq('price kinds', PRICE_KIND, {
  from: 'from',
  typicalRange: 'indicative market',
  calculatorEstimate: 'from',
})

const canapes = CATERING_FORMATS.find((f) => f.id === 'canapes')
eq('canapé from (hub floor)', canapes?.fromPerPerson, 150)
eq('canapé typical', [canapes?.typicalMin, canapes?.typicalMax], [180, 350])
eq('canapé calculator start matches hub floor', canapes?.calculatorEstimate, 150)
eq('canapé min guests', canapes?.minGuests, 10)

const buffet = CATERING_FORMATS.find((f) => f.id === 'buffet')
eq('buffet from (hub floor)', buffet?.fromPerPerson, 120)
eq('buffet typical', [buffet?.typicalMin, buffet?.typicalMax], [220, 420])
eq('buffet calculator start matches hub floor', buffet?.calculatorEstimate, 120)
eq('buffet min guests (calculator label)', buffet?.minGuests, 15)
eq('buffet hub event min', buffet?.hubMinGuests, 20)

const plated = CATERING_FORMATS.find((f) => f.id === 'plated-chef')
eq('plated from', plated?.fromPerPerson, 700)
eq('plated typical', [plated?.typicalMin, plated?.typicalMax], [700, 950])
eq('plated calculator start matches hub floor', plated?.calculatorEstimate, 700)

const dropOff = CATERING_FORMATS.find((f) => f.id === 'drop-off')
eq('drop-off from', dropOff?.fromPerPerson, 90)
eq('drop-off min guests', dropOff?.minGuests, 10)
eq('drop-off min order', dropOff?.minOrderAed, 900)

eq('labels', [formatFrom(150), formatTypical(180, 350), formatEstimate(150)], [
  'From AED 150 per person',
  'Indicative market AED 180–350',
  'From AED 150 per person',
])

const below = quoteCatering({ formatId: 'buffet', guests: 10, staffId: 'none' })
eq('buffet at 10 guests is refused', below.ok, false)
if (!below.ok) eq('buffet refusal min', below.minGuests, 15)

const atMin = quoteCatering({ formatId: 'buffet', guests: 15, staffId: 'none' })
eq('buffet at 15 is quoted', atMin.ok, true)
if (atMin.ok) {
  eq('buffet start per person', atMin.perPerson, 120)
  eq('buffet total low', atMin.totalLow, 120 * 15)
}

const canapeTen = quoteCatering({ formatId: 'canapes', guests: 10, staffId: 'none' })
eq('canapés at 10 is quoted', canapeTen.ok, true)
if (canapeTen.ok) eq('canapé start per person', canapeTen.perPerson, 150)

eq('clamp 10 on buffet → 15', clampGuests('buffet', 10), 15)
eq('clamp 20 on buffet stays 20', clampGuests('buffet', 20), 20)

eq(
  'event package floors',
  EVENT_PACKAGES.map((p) => [p.id, p.priceAed, p.guests]),
  [
    ['date-night', 1200, '2 guests'],
    ['family-feast', 2400, '6–8 guests'],
    ['birthday', 3600, '8–12 guests'],
    ['corporate-dinner', 4500, '10–15 guests'],
    ['full-experience', 5500, '6–10 guests'],
  ],
)

eq(
  'household chef rates stay out of catering config',
  'computeQuote' in cateringPricing || 'OVERTIME' in cateringPricing,
  false,
)

const premium = hubPriceRows().find((row) => row.format.startsWith('Premium'))
eq('premium hub cell is the shared from-floor', premium?.from, 'From AED 150 per person')
eq('premium hub cell does not steal canapé estimate 280', premium?.price.includes('280'), false)
eq('premium hub cell does not steal canapé typical 180–350', /180–350/.test(premium?.price ?? ''), false)

console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS')
process.exit(fails ? 1 : 0)

import assert from 'node:assert/strict'
import { computeQuote, DEFAULT_INPUT, SERVICES, GROCERY_MANAGEMENT_ADD_ON, overtimeRate, assistantsFor, tierFor } from '../src/content/privateChefPricing'
import { FULL_TIME_START_PRICE } from '../src/content/householdChefs'
import { planText } from '../src/components/private-chef/pricing/planText'

// Full-time monthly matching is a separate product. Preserve every daily/visit tariff.
assert.equal(FULL_TIME_START_PRICE, 15000)
const full = computeQuote({ ...DEFAULT_INPUT, serviceId: 'full-day', daysPerWeek: 5 })
assert.equal(full.perMonth, 26400)
assert.equal(full.servicesPerMonth, 20)
assert.equal(full.perService, 1320)
assert.equal(full.hoursPerService, 9)
assert.match(planText({ ...DEFAULT_INPUT, serviceId: 'full-day' }, full), /AED 26,400\/four weeks/)
assert.match(planText(DEFAULT_INPUT, full), /before 5% VAT/)
const expected = [[750,660,1125],[900,790,1350],[1050,925,1575],[1500,1320,2250]]
for (const [i, service] of SERVICES.entries()) {
 const input = { ...DEFAULT_INPUT, serviceId: service.id }
 const regular = computeQuote({ ...input, daysPerWeek: 1 })
 const dedicated = computeQuote({ ...input, daysPerWeek: 5 })
 const short = computeQuote({ ...input, duration: 'short', stayDays: 3 })
 assert.deepEqual([regular.perService,dedicated.perService,short.perService], expected[i])
 assert.equal(regular.perMonth, regular.perService * 4)
 assert.equal(short.total, short.perService * 3)
 assert.equal(short.tier, null)
}
assert.equal(SERVICES[1].rate + GROCERY_MANAGEMENT_ADD_ON.rate, SERVICES[2].rate)
assert.equal(GROCERY_MANAGEMENT_ADD_ON.rate,150)
assert.equal(computeQuote({ ...DEFAULT_INPUT, serviceId:'full-day', guests:9 }).perService,1870)
assert.equal(computeQuote({ ...DEFAULT_INPUT, serviceId:'full-day', guests:20 }).perService,2420)
assert.equal(assistantsFor(40).custom,true)
assert.deepEqual([tierFor(19).id,tierFor(20).id],['standard','dedicated'])
assert.deepEqual(SERVICES.map(s=>overtimeRate(s.id)),[380,340,320,250])
console.log('Pricing passed: full-time monthly AED 15,000 stays separate; original daily, short-stay, assistant, grocery and overtime rates preserved.')

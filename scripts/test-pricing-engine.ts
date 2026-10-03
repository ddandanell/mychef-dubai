import assert from 'node:assert/strict'
import { computeQuote, DEFAULT_INPUT, SERVICES, FREQUENCIES, GROCERY_MANAGEMENT_ADD_ON, assistantsFor, tierFor, mealPackPrice, TRANSPORT_ZONES } from '../src/content/privateChefPricing'
import { FULL_TIME_START_PRICE } from '../src/content/householdChefs'
import { planText } from '../src/components/private-chef/pricing/planText'
import { chefVisitSchema } from '../src/lib/householdSchema'

// Business acceptance cases from the approved 2026-10-03 pricing guide.
assert.equal(FULL_TIME_START_PRICE, 15000, 'Dedicated household pricing is a separate service')
assert.equal(DEFAULT_INPUT.duration, 'short')
assert.equal(DEFAULT_INPUT.stayDays, 1)
const expected = [[3,1125,750],[4,1350,900],[5,1575,1050],[10,2000,1450]]
for (const [index, service] of SERVICES.entries()) {
  const [hours, single, member] = expected[index]
  const input = { ...DEFAULT_INPUT, serviceId: service.id }
  const one = computeQuote(input)
  assert.equal(one.perService, single)
  assert.equal(one.total, single, 'One visit is allowed')
  assert.equal(one.hoursPerService, hours)
  assert.equal(one.tier, null)
  assert.equal(one.transportPerService, null, 'An unknown address must not silently select a transport fee')
  assert.equal(one.periodWithVat, null)
  const multi = computeQuote({ ...input, stayDays: 3 })
  assert.equal(multi.total, single * 3)
  for (const frequency of FREQUENCIES) {
    const recurring = computeQuote({ ...input, duration:'long', daysPerWeek: frequency.days })
    assert.equal(recurring.perService, member, 'No further frequency reduction')
    assert.equal(recurring.perMonth, member * frequency.perMonth)
    assert.equal(recurring.tier?.name, 'Member rate')
  }
}
assert.equal(computeQuote({ ...DEFAULT_INPUT, stayDays: 0 }).servicesTotal, 1)
assert.equal(SERVICES[1].rate + GROCERY_MANAGEMENT_ADD_ON.rate, SERVICES[2].rate)
assert.equal(SERVICES[1].singleRate + GROCERY_MANAGEMENT_ADD_ON.singleRate, SERVICES[2].singleRate)
for (const duration of ['short','long'] as const) {
  const shopping = computeQuote({ ...DEFAULT_INPUT, duration, serviceId:'food-prep', groceryMode:'mychef' })
  const included = computeQuote({ ...DEFAULT_INPUT, duration, serviceId:'autopilot' })
  assert.equal(shopping.perService, included.perService)
  assert.equal(shopping.hoursPerService, 5)
}
assert.equal(computeQuote({ ...DEFAULT_INPUT, serviceId:'full-day', guests:9 }).perService, 2550)
assert.equal(computeQuote({ ...DEFAULT_INPUT, serviceId:'full-day', guests:20 }).perService, 3100)
assert.equal(computeQuote({ ...DEFAULT_INPUT, guests:9 }).perService, 1475)
assert.equal(assistantsFor(40).custom, true)
assert.equal(tierFor(28).name, 'Member rate')
const central = computeQuote({ ...DEFAULT_INPUT, transportZoneId:'central' })
assert.equal(central.transportPerService, 40)
assert.equal(central.vatPerService, 58.25)
assert.equal(central.periodWithVat, 1223.25)
const fullMemberInput = { ...DEFAULT_INPUT, duration:'long' as const, serviceId:'full-day' as const, daysPerWeek:5, transportZoneId:'marina-palm' as const }
const fullMember = computeQuote(fullMemberInput)
assert.equal(fullMember.perMonth, 29000)
assert.equal(fullMember.periodWithVat, 32445)
assert.match(planText(fullMemberInput, fullMember), /AED 32,445/)
assert.match(planText(fullMemberInput, fullMember), /4\+ prepaid visits/)
assert.match(planText(DEFAULT_INPUT, central), /before 5% VAT/)
assert.match(planText(DEFAULT_INPUT, central), /no markup/)
assert.deepEqual(TRANSPORT_ZONES.map(zone => zone.rate), [40,65,95,130])
assert.equal(mealPackPrice([15,10,5], true), 1750)
assert.equal(mealPackPrice([15,10,5], false), 2325)
assert.equal(mealPackPrice([15,0,0], true), 675)
assert.equal(mealPackPrice([45,0,0], false), 2700)
const graph = chefVisitSchema('Chef visits','Published rates',[],true)
const offers = graph['@graph'][0].hasOfferCatalog.itemListElement
assert.deepEqual(offers.map(offer => offer.price), [1125,750,1350,900,1575,1050,2000,1450,60,45,80,60,125,95])
assert(offers.every(offer => offer.priceSpecification.price === offer.price && !offer.priceSpecification.valueAddedTaxIncluded))
console.log('Pricing passed: all single/member rates, no volume reduction, one-visit minimum, 10-hour days, groceries, assistants, zone transport, VAT, meal packs, quote handoff and schema.')

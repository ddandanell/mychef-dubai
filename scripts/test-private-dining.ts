import assert from 'node:assert/strict'
import { DINING_CONFIG, DINING_PRESETS } from '../src/content/privateDiningConfig'
import { DINING_DISHES, calculateDining, diningWhatsApp, dishPrice, dishRestriction, dubaiToday, validDiningDate, type DiningDetails, type DiningInput } from '../src/lib/privateDining'

const input: DiningInput = { guests: 6, service: 'signature', zone: '3', dishIds: [...DINING_PRESETS[0].dishIds] }
const details: DiningDetails = { name: 'Theo & family', date: '', time: '19:00', occasion: 'Birthday & dinner', area: 'Palm Jumeirah', dietary: 'Shellfish allergy; vegetarian guest', kitchen: 'Oven + four hobs', extras: ['Drinks'] }
const quote = calculateDining(input)
// Owner's required six-guest Signature example: four mixed courses, zone 3.
assert.equal(quote.beforeVat, 3575)
assert.equal(quote.vat, 178.75)
assert.equal(quote.total, 3753.75)
assert.equal(quote.perGuest, 625.63)
assert.equal(quote.assistants, 0)
for (const [guests, assistants] of [[6, 0], [8, 0], [9, 1], [19, 1], [20, 2]]) {
  const current = calculateDining({ ...input, guests })
  assert.equal(current.assistants, assistants)
  assert.equal(current.beforeVat, guests * 280 + 1800 + assistants * 400 + 95)
}
for (const guests of [0, 2, 5, 5.9, 6.5, 21, NaN, Infinity]) {
  assert.equal(calculateDining({ ...input, guests }).total, null)
  assert.equal(diningWhatsApp({ ...input, guests }, details), null)
}
for (const zone of DINING_CONFIG.transport) assert.equal(calculateDining({ ...input, zone: zone.id }).beforeVat, 3480 + zone.fee)
assert.equal(diningWhatsApp({ ...input, zone: 'unknown' }, details), null)
assert.equal(calculateDining({ ...input, dishIds: [] }).total, null)
assert.equal(diningWhatsApp({ ...input, dishIds: [23, 23, 54, 44] }, details), null)
assert.equal(diningWhatsApp({ ...input, dishIds: [23, 27, 54, 9999] }, details), null)
assert.equal(diningWhatsApp({ ...input, dishIds: [23, 54, 44] }, details), null, 'a main is required')
assert.equal(DINING_DISHES.length, 104)
assert.equal(DINING_DISHES.filter(d => d.status === 'live').length, 80)
for (const dish of DINING_DISHES) {
  if (dish.status === 'proposed_addition') {
    assert.equal(dishPrice(dish), null)
    assert(dishRestriction(dish, 'master'))
    assert.equal(diningWhatsApp({ ...input, service: 'master', dishIds: [33, 31, dish.id] }, details), null)
  }
  if (dish.needsCostConfirmation || dish.marketPrice) assert.equal(dishPrice(dish), null)
}
assert.equal(DINING_DISHES.filter(d => d.needsCostConfirmation).length, 7)
assert.equal(diningWhatsApp({ ...input, dishIds: [79, 31, 44] }, details), null, 'breakfast is excluded')
assert.equal(diningWhatsApp({ ...input, dishIds: [69, 33, 44] }, details), null, 'sushi requires L5 / Master')
assert.equal(diningWhatsApp({ ...input, service: 'essential' }, details), null, 'Essential cannot book L3/L4 dishes')
const wellington = calculateDining({ ...input, dishIds: [47, 33, 44] })
assert(wellington.canEnquire && wellington.quoteRequired)
assert.equal(wellington.total, null)
assert(wellington.reasons.some(r => r.includes('sign-off')))
const souffle = calculateDining({ ...input, dishIds: [48, 33, 31] })
assert(souffle.quoteRequired && souffle.reasons.some(r => r.includes('sign-off')))
const master = calculateDining({ ...input, service: 'master' })
assert(master.canEnquire && master.quoteRequired)
assert.equal(master.chefFee, null)
assert.equal(master.total, null)
const masterMessage = new URL(diningWhatsApp({ ...input, service: 'master', dishIds: [69, 33, 44] }, details)!).searchParams.get('text')!
assert(masterMessage.includes('quote required') && !masterMessage.includes('Estimated total'))
const messageUrl = new URL(diningWhatsApp(input, details)!)
assert.equal(messageUrl.origin + messageUrl.pathname, 'https://wa.me/971551744849')
const message = messageUrl.searchParams.get('text')!
for (const value of ['AED 3,753.75', 'AED 178.75', 'minimum 6', 'Theo & family', 'Birthday & dinner', 'Shellfish allergy', 'Palm Jumeirah', '19:00 Dubai time', 'Lamb tagine', 'separate quote', 'confirms', 'booking request']) assert(message.includes(value), value)
assert.equal(validDiningDate('2026-02-30', '2026-01-01'), false)
assert.equal(validDiningDate('2026-10-02', '2026-10-03'), false)
assert.equal(validDiningDate('', '2026-10-03'), true)
assert.equal(diningWhatsApp(input, { ...details, date: '2020-01-01' }), null)
assert.equal(dubaiToday(new Date('2026-10-03T21:00:00Z')), '2026-10-04')
for (const preset of DINING_PRESETS) assert(calculateDining({ ...input, service: preset.service, dishIds: [...preset.dishIds] }).total)
console.log('Private dining: required AED 3,575 vector, VAT, 6–20 guests, assistant thresholds, chef gating, all 104 dishes, manual quotes, dates and WhatsApp payloads PASS.')

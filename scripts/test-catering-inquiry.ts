import assert from 'node:assert/strict'
import { cateringCalculatorBrief, cateringCalculatorHref } from '../src/lib/cateringInquiry'

const href = cateringCalculatorHref('buffet', 20, 'none')
const params = new URL(href, 'https://www.mychef.ae').searchParams
const brief = cateringCalculatorBrief(params)
assert.equal(params.get('from'), 'catering-calculator')
assert.equal(params.get('format'), 'buffet')
assert.equal(params.get('guests'), '20')
assert.equal(params.get('staff'), 'none')
assert.ok(brief.some((line) => line.includes('Calculator guests: 20')))
assert.ok(brief.some((line) => line.includes('AED 2,400')))
assert.ok(brief.some((line) => line.includes('before VAT')))
params.set('price', '1')
assert.deepEqual(cateringCalculatorBrief(params), brief, 'URL prices must never override the pricing engine')
assert.ok(cateringCalculatorBrief(params, '40').some((line) => line.includes('AED 4,800')), 'An edited guest count must recalculate the quote')
assert.deepEqual(cateringCalculatorBrief(new URLSearchParams()), [])
for (const [key, value] of [['format', 'unknown'], ['staff', 'unknown'], ['guests', '-3'], ['guests', 'Infinity'], ['guests', 'text']]) {
  const invalid = new URLSearchParams(params)
  invalid.set(key, value)
  assert.deepEqual(cateringCalculatorBrief(invalid), [], `Reject invalid ${key}`)
}
console.log('PASS: calculator selections, pricing, guest edits and invalid enquiry parameters')

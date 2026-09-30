import assert from 'node:assert/strict'
import { householdBriefFromParams, householdBriefLines, householdInquiryHref, chefServiceWhatsAppMessage } from '../src/lib/householdInquiry'
import { householdProfiles } from '../src/content/householdProfiles'
import { householdLevels, LIVE_IN_PATH, LIVE_OUT_PATH, SHORT_TERM_PATH } from '../src/content/householdChefs'
import { householdSchema } from '../src/lib/householdSchema'
import { assemblePageGraph } from '../src/lib/jsonld'

const href = householdInquiryHref('/our-chefs', { arrangement: 'live-out', level: 'senior', profiles: ['hc01', 'hc11', 'hc24'] })
const params = new URL(href, 'https://www.mychef.ae').searchParams
const brief = householdBriefFromParams(params)
assert.equal(brief.active, true)
assert.equal(brief.arrangement, 'live-out')
assert.equal(brief.level?.min, 28000)
assert.deepEqual(brief.profiles.map(p => p.id), ['hc01','hc11','hc24'])
const lines = householdBriefLines(params, { budget: 'AED 35,000–42,000', schedule: 'Monday to Saturday, lunch and dinner', preferences: 'Mediterranean family meals' }).join('\n')
assert.match(lines, /AED 35,000–42,000/)
assert.match(lines, /Monday to Saturday/)
assert.match(lines, /Mediterranean family meals/)
assert.match(lines, /HC24/)
assert.match(chefServiceWhatsAppMessage(params), /HC11/)
assert.equal(householdBriefFromParams(new URLSearchParams({ from: LIVE_IN_PATH })).arrangement, 'live-in')
assert.equal(householdBriefFromParams(new URLSearchParams({ from: LIVE_OUT_PATH })).arrangement, 'live-out')
assert.equal(householdBriefFromParams(new URLSearchParams({ from: SHORT_TERM_PATH })).active, false)
assert.equal(householdBriefLines(new URLSearchParams({ from: 'corporate' })).length, 0)
const unsafe = householdBriefFromParams(new URLSearchParams({ service: 'household-chef', level: 'invented', profiles: 'hc01,hc01,unknown,hc02,hc03,hc04', arrangement: 'unknown' }))
assert.equal(unsafe.level, undefined)
assert.equal(unsafe.arrangement, 'help-me-choose')
assert.ok(unsafe.profiles.length <= 3 && unsafe.profiles.every(p => householdProfiles.some(real => real.id === p.id)))
assert.equal(householdProfiles.length, 25)
assert.equal(new Set(householdProfiles.map(p=>p.id)).size, 25)
for (const level of householdLevels) assert.equal(householdProfiles.filter(p=>p.level===level.number).length, 5)
for (const path of [LIVE_IN_PATH, LIVE_OUT_PATH, SHORT_TERM_PATH, '/full-time-private-chef-dubai']) {
  const graph = assemblePageGraph(path, householdSchema('Chef service', 'A personal chef service', [{q:'A question?',a:'An answer.'}]))
  const nodes = graph?.['@graph'] as Record<string,unknown>[]
  assert.ok(nodes.some(n=>n['@type']==='Service'))
  assert.ok(nodes.some(n=>n['@type']==='FAQPage'))
  assert.ok(nodes.some(n=>n['@type']==='BreadcrumbList'))
}
console.log('Household enquiries OK: shortlist, budgets, schedule, arrangements, invalid input, five levels and structured data.')

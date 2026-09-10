/**
 * FAQ JSON-LD only on /faq, three hubs, and /yachts; questions match on-page FAQs; no dupes.
 *
 *   npx tsx scripts/test-faq-jsonld.ts
 */
import { assemblePageGraph } from '../src/lib/jsonld'
import { faqPageSchema } from '../src/utils/schema'
import { parentFaqs } from '../src/content/privateChefCluster'
import { cateringFaqs } from '../src/content/cateringPage'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

function faqNode(graph: ReturnType<typeof assemblePageGraph>) {
  const nodes = (graph?.['@graph'] as Record<string, unknown>[]) ?? []
  return nodes.find((n) => n['@type'] === 'FAQPage') ?? null
}

function questions(node: Record<string, unknown> | null): string[] {
  const entities = (node?.mainEntity as { name?: string }[]) ?? []
  return entities.map((e) => e.name ?? '')
}

const dummyFaq = faqPageSchema([
  { question: 'Q1', answer: 'A1' },
  { question: 'Q1', answer: 'duplicate' },
  { question: 'Q2', answer: 'See [prices](/private-chef-dubai/pricing).' },
])
eq('dedupes duplicate questions', dummyFaq?.mainEntity.length, 2)
eq(
  'strips markdown from answers',
  (dummyFaq?.mainEntity as { acceptedAnswer: { text: string } }[])[1].acceptedAnswer.text,
  'See prices.',
)

const hub = assemblePageGraph('/private-chef-dubai', {
  '@graph': [faqPageSchema(parentFaqs.map((f) => ({ question: f.q, answer: f.a })))],
})
const hubQs = questions(faqNode(hub))
eq('private chef hub FAQ count', hubQs.length, parentFaqs.length)
eq('private chef hub questions unique', new Set(hubQs).size, hubQs.length)
eq(
  'private chef hub questions match on-page',
  hubQs,
  parentFaqs.map((f) => f.q),
)

const catering = assemblePageGraph('/catering-dubai', {
  '@graph': [faqPageSchema(cateringFaqs.map((f) => ({ question: f.q, answer: f.a })))],
})
const cateringQs = questions(faqNode(catering))
eq('catering hub FAQ count', cateringQs.length, cateringFaqs.length)
eq('catering hub questions unique', new Set(cateringQs).size, cateringQs.length)
eq(
  'catering hub questions match on-page',
  cateringQs,
  cateringFaqs.map((f) => f.q),
)

const pricing = assemblePageGraph('/private-chef-dubai/pricing', {
  '@graph': [dummyFaq],
})
eq('pricing path keeps FAQPage', Boolean(faqNode(pricing)), true)

const stripped = assemblePageGraph('/bbq-catering-dubai', { '@graph': [dummyFaq] })
eq('spoke FAQPage is stripped', faqNode(stripped), null)

const yachts = assemblePageGraph('/yachts', { '@graph': [dummyFaq] })
eq('yachts path keeps FAQPage', Boolean(faqNode(yachts)), true)

const faqOnly = assemblePageGraph('/faq', { '@graph': [dummyFaq] })
eq('/faq keeps FAQPage', Boolean(faqNode(faqOnly)), true)

const nye = 'New Year catering Dubai for villa, yacht and rooftop countdown nights: canapés, dinner or buffet, live stations, bar and midnight toast, then we clear down.'
const chefs = 'Chefs table Dubai at home: a chef cooks a multi-course tasting or omakase in front of 2–12 guests. From AED 500 per person, with setup, service and clear-down.'
eq('NYE meta length in band', nye.length >= 120 && nye.length <= 160, true)
eq('chefs-table meta length in band', chefs.length >= 120 && chefs.length <= 160, true)
eq('NYE meta is complete (no ellipsis)', nye.includes('…') || nye.endsWith('...'), false)
eq('chefs-table meta is complete (no ellipsis)', chefs.includes('…') || chefs.endsWith('...'), false)

if (fails > 0) {
  console.error(`\n${fails} failing check(s)`)
  process.exit(1)
}
console.log('\nAll FAQ JSON-LD checks passed')

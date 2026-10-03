import assert from 'node:assert/strict'
import { assemblePageGraph } from '../src/lib/jsonld'
import { ORGANIZATION_ID, WEBSITE_ID } from '../src/lib/organizationSchema'
import { householdSchema } from '../src/lib/householdSchema'
import { FULL_TIME_START_PRICE } from '../src/content/householdChefs'

type Node = Record<string, unknown>
const metadata = { title: 'A useful planning guide | myCHEF', description: 'Plan the service with a clear brief.' }
const graph = (path: string, incoming: unknown): Node[] =>
  assemblePageGraph(path, incoming, metadata)?.['@graph'] as Node[]
const find = (nodes: Node[], type: string) => nodes.find(node => node['@type'] === type)!

// Imported articles need their visible Blog trail even without a silo-map entry.
const articlePath = '/blog/article-without-a-silo-entry'
const article = graph(articlePath, {
  '@type': 'Article', headline: 'A household planning guide',
  datePublished: '2026-09-01', dateModified: '2026-10-03',
})
assert.deepEqual((find(article, 'BreadcrumbList').itemListElement as Node[]).map((item: Node) => item.item), [
  'https://www.mychef.ae/', 'https://www.mychef.ae/blog', `https://www.mychef.ae${articlePath}`,
])
assert.equal(find(article, 'Article').datePublished, '2026-09-01')
assert.equal(find(article, 'Article').dateModified, '2026-10-03')
assert.deepEqual(find(article, 'Article').publisher, { '@id': ORGANIZATION_ID })
assert.deepEqual(find(article, 'WebPage').mainEntity, { '@id': `https://www.mychef.ae${articlePath}#article` })
assert.equal(find(article, 'WebPage').name, metadata.title)
assert.equal(find(article, 'WebPage').description, metadata.description)
assert.deepEqual(find(article, 'WebPage').isPartOf, { '@id': WEBSITE_ID })

// A collection must keep its list relationship and must not gain a competing page node.
const areasId = 'https://www.mychef.ae/locations#areas'
const collection = graph('/locations', { '@graph': [
  { '@type': 'CollectionPage', mainEntity: { '@id': areasId } },
  { '@type': 'ItemList', '@id': areasId, itemListElement: [] },
] })
assert.equal(collection.filter(node => ['WebPage', 'CollectionPage'].includes(node['@type'])).length, 1)
assert.deepEqual(find(collection, 'CollectionPage').mainEntity, { '@id': areasId })
assert.equal(find(collection, 'Service'), undefined)

// Shared service markup must use the published source price and preserve its qualifiers.
const service = graph('/full-time-private-chef-dubai', householdSchema('Managed Household', 'A dedicated chef.', [], {
  price: FULL_TIME_START_PRICE, description: 'From the monthly fee, before VAT; groceries are separate.',
  url: '/full-time-private-chef-dubai',
}))
assert.equal((find(service, 'Service').offers as Node).price, FULL_TIME_START_PRICE)
assert.equal((find(service, 'Service').offers as Node).priceCurrency, 'AED')
assert.match((find(service, 'Service').offers as Node).description as string, /before VAT; groceries are separate/)
assert.deepEqual(find(service, 'Service').provider, { '@id': ORGANIZATION_ID })
assert.deepEqual(find(service, 'WebPage').about, { '@id': 'https://www.mychef.ae/full-time-private-chef-dubai#service' })

// Visible partner FAQs do not opt a new page into FAQPage markup or create a business identity.
const partner = graph('/partners/event-planners-dubai', {
  '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'A question?' }],
})
assert.equal(find(partner, 'FAQPage'), undefined)
assert.equal(find(partner, 'Organization'), undefined)
assert.deepEqual(find(partner, 'WebPage').publisher, { '@id': ORGANIZATION_ID })

// The homepage has no artificial parent breadcrumb and retains the full business identity.
const home = graph('/', undefined)
assert.equal(find(home, 'BreadcrumbList'), undefined)
assert.equal(home.filter(node => node['@id'] === ORGANIZATION_ID).length, 1)
assert.equal(home.filter(node => node['@id'] === WEBSITE_ID).length, 1)
console.log('Page graph checks passed: articles, collections, service pricing, FAQ policy and shared identity.')

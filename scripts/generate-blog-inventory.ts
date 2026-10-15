/** Compact planning input for the Ryze agent; the complete SEO contract wins. */
import fs from 'node:fs'
import { BLOG_POSTS, BLOG_HUBS } from '../src/content/blogTaxonomy'

const contract = JSON.parse(fs.readFileSync('docs/seo/myCHEF-AE-SEO-STANDARD.json', 'utf8'))
const catalogue = new Map(BLOG_POSTS.map(post => [post.slug, post]))
const inventory = {
  source: 'Approved SEO contract and current blog catalogue; publication evidence is in publishing-ledger.json.',
  money_pages: contract.authority_policy.money_pages.map((url: string) => ({ url, primary: contract.pages[url].intent_owner.primary_keyword })),
  hubs: BLOG_HUBS.map(hub => ({ url: `/blog/topic/${hub.slug}`, slug: hub.slug, title: hub.title })),
  posts: Object.entries(contract.pages as Record<string, any>)
    .filter(([url, page]) => url.startsWith('/blog/') && !url.startsWith('/blog/topic/') && page.page_type === 'Blog post' && !page.indexation?.redirect_to)
    .map(([url, page]) => ({ url, title: page.on_page.h1, primary: page.intent_owner.primary_keyword,
      owner: page.authority?.money_page, hub: catalogue.get(url)?.hub || null,
      in_archive: catalogue.has(url), indexable: page.indexation.robots.index, source: page.content_source })),
  held_imports: fs.readdirSync('blog/data').filter(name => name.endsWith('.json')).flatMap(name => {
    const a = JSON.parse(fs.readFileSync(`blog/data/${name}`, 'utf8'))
    return a.status === 'published' ? [] : [{ slug: a.slug, title: a.title, status: a.status, source: `blog/data/${name}` }]
  }),
}
fs.writeFileSync('blog/topic-inventory.json', JSON.stringify(inventory, null, 2) + '\n')
console.log(`Blog topic inventory: ${inventory.posts.length} approved articles, ${BLOG_POSTS.length} archive cards, ${inventory.held_imports.length} held imports.`)

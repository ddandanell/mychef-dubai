import { readdir, readFile, writeFile, mkdir, unlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = path.join(root, 'blog/data')
const pageDir = path.join(root, 'src/content/ryze-pages')
const pathsFile = path.join(root, 'src/content/ryzeBlogPaths.ts')
const postsFile = path.join(root, 'src/content/ryzeBlogPosts.ts')
const sitemapFile = path.join(root, 'public/sitemap.xml')
const site = 'https://www.mychef.ae'
const deployment = JSON.parse(await readFile(path.join(root, 'vercel.json'), 'utf8'))
const redirectPaths = new Set((deployment.redirects || []).map((item) => item.source))

const validSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const xmlEscape = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

function formatDate(value) {
  const date = value ? new Date(value) : new Date()
  if (Number.isNaN(date.getTime())) return 'Recent'
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date)
}

function imageFrom(article) {
  if (!article.image || typeof article.image !== 'object') return null
  if (typeof article.image.url !== 'string' || article.image.url.length === 0) return null
  return {
    url: article.image.url,
    alt: typeof article.image.alt === 'string' && article.image.alt.length > 0
      ? article.image.alt
      : article.title,
    ...(article.image.caption ? { caption: article.image.caption } : {}),
  }
}

await mkdir(sourceDir, { recursive: true })
await mkdir(pageDir, { recursive: true })

const sourceNames = (await readdir(sourceDir)).filter((name) => name.endsWith('.json')).sort()
const articles = []

for (const name of sourceNames) {
  const source = JSON.parse(await readFile(path.join(sourceDir, name), 'utf8'))
  if (source.status !== 'published') continue
  if (!validSlug.test(source.slug || '')) throw new Error('Invalid Ryze article slug in ' + name)
  if (!source.title || (!source.body_html && !source.body_markdown)) {
    throw new Error('Missing title or body in ' + name)
  }

  const article = {
    slug: source.slug,
    title: source.title,
    body_html: source.body_html || '',
    body_markdown: source.body_markdown || '',
    meta_title: source.meta_title || source.title,
    meta_description: source.meta_description || source.excerpt || '',
    excerpt: source.excerpt || source.meta_description || '',
    primary_keyword: source.primary_keyword || null,
    image: imageFrom(source),
    published_at: source.published_at || null,
    updated_at: source.updated_at || source.published_at || null,
    status: 'published',
    ...(source.hub ? { hub: source.hub } : {}),
    ...(source.category ? { category: source.category } : {}),
    ...(source.related_articles ? { related_articles: source.related_articles } : {}),
    ...(source.related_from ? { related_from: source.related_from } : {}),
    ...(source.supporting_pages ? { supporting_pages: source.supporting_pages } : {}),
  }

  articles.push(article)
  await writeFile(
    path.join(pageDir, article.slug + '.json'),
    JSON.stringify(article, null, 2) + '\n',
  )
}

const activePages = new Set(articles.map((article) => article.slug + '.json'))
for (const name of await readdir(pageDir)) {
  if (name.endsWith('.json') && !activePages.has(name)) await unlink(path.join(pageDir, name))
}

articles.sort((a, b) => String(b.published_at || '').localeCompare(String(a.published_at || '')))
const activeArticles = articles.filter((article) => !redirectPaths.has('/blog/' + article.slug))
const paths = activeArticles.map((article) => '/blog/' + article.slug)
const posts = activeArticles.map((article) => ({
  slug: '/blog/' + article.slug,
  title: article.title,
  excerpt: article.excerpt,
  category: article.category || 'Guides',
  image: article.image ? article.image.url : '/images/mychef-dubai-blog-hero.webp',
  hub: article.hub || (/private-chef|private-dining|cooking-class/.test(article.slug) ? 'private-chef'
    : /corporate|drop-off/.test(article.slug) ? 'corporate'
    : /wedding|birthday|cocktail|grazing/.test(article.slug) ? 'celebrations'
    : /ramadan|iftar/.test(article.slug) ? 'seasonal'
    : /yacht|desert|bbq/.test(article.slug) ? 'outdoor' : 'menus-dietary'),
  date: formatDate(article.published_at),
}))

// Explicit editorial relationships survive every import and publish run.
const planningLinks = {}
const relatedOverrides = {}
for (const article of activeArticles) {
  const url = '/blog/' + article.slug
  if (article.related_articles?.length) relatedOverrides[url] = article.related_articles
  for (const parent of article.supporting_pages || []) {
    if (redirectPaths.has(parent)) throw new Error('Redirected supporting page: ' + parent)
    ;(planningLinks[parent] ||= []).push({ url, title: article.title, excerpt: article.excerpt })
  }
  for (const source of article.related_from || []) {
    const links = relatedOverrides[source] ||= []
    if (!links.includes(url)) links.push(url)
  }
}
for (const [name, data] of Object.entries({ blogPlanningLinks: planningLinks, blogRelatedOverrides: relatedOverrides })) {
  await writeFile(path.join(root, 'src/content', name + '.json'), JSON.stringify(data, null, 2) + '\n')
}

await writeFile(
  pathsFile,
  '// Generated by scripts/ryze-convert.mjs. Do not edit by hand.\n' +
    'export const RYZE_BLOG_PATHS: string[] = ' + JSON.stringify(paths, null, 2) + '\n',
)
await writeFile(
  postsFile,
  '// Generated by scripts/ryze-convert.mjs. Do not edit by hand.\n' +
    'export const RYZE_BLOG_POSTS = ' + JSON.stringify(posts, null, 2) + '\n',
)

let sitemap = await readFile(sitemapFile, 'utf8')
sitemap = sitemap.replace(/\n?\s*<!-- RYZE:START -->[\s\S]*?<!-- RYZE:END -->\n?/g, '\n')
// The route generator may already have included these articles. Replace that
// set, so conversion cannot duplicate URLs or reintroduce retired articles.
const articleUrls = new Set(articles.map((article) => site + '/blog/' + article.slug))
sitemap = sitemap.replace(/\s*<url>[\s\S]*?<\/url>/g, (block) => {
  const url = block.match(/<loc>([^<]+)<\/loc>/)?.[1]
  return articleUrls.has(url) ? '' : block
})
const sitemapRows = activeArticles.map((article) => {
  const updated = String(article.updated_at || article.published_at || new Date().toISOString()).slice(0, 10)
  return '  <url><loc>' + xmlEscape(site + '/blog/' + article.slug) + '</loc><lastmod>' +
    xmlEscape(updated) + '</lastmod><priority>0.7</priority><changefreq>monthly</changefreq></url>'
})
const sitemapBlock = [
  '  <!-- RYZE:START -->',
  ...sitemapRows,
  '  <!-- RYZE:END -->',
].join('\n')
sitemap = sitemap.replace('</urlset>', sitemapBlock + '\n</urlset>')
await writeFile(sitemapFile, sitemap)

console.log('Converted ' + articles.length + ' published Ryze article(s).')

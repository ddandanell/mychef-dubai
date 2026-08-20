// Data-driven SEO content applied on top of existing pages (MYCHEF-BLOCK-MAP handoff).
// Text only — no images, no layout, no styling changes. Each route loads only its own
// JSON (code-split via import.meta.glob) so the payload never bloats a single bundle.
import routes from './routes.json'

export interface SeoAddBlock {
  new_heading: string
  new_paragraphs: string[]
}

export interface SeoReplaceBlock {
  block_on_your_page: string
  new_heading: string
  new_paragraphs: string[]
}

export interface SeoPage {
  url: string
  head?: { title?: string; meta_description?: string; h1?: string }
  opening_paragraph?: string[]
  replace_in_block?: SeoReplaceBlock[]
  add_block?: SeoAddBlock[]
}

const ROUTES = routes as Record<string, string>

// Routes whose titles are owned by their page-level <SEO> component. SeoHead must
// not emit a second <title>/<meta> for these paths, or React 19 ends up with two
// hoisted title nodes.
export const SKIP_SEO_HEAD_ROUTES: ReadonlySet<string> = new Set([
  '/private-chef-dubai',
  '/catering-dubai',
  '/private-chef-prices-dubai',
  '/yachts',
  '/villas-private-residences',
  '/corporate',
])

// Handoff routes that have NO existing page component — rendered as a full page by
// HandoffPage. The shared SeoContent/SeoHead injectors skip these so nothing double-renders.
export const FULLPAGE_ROUTES: ReadonlySet<string> = new Set([
  '/best-catering-companies-dubai',
  '/blog/brunch-at-home-dubai',
  '/blog/corporate-event-catering-ideas-dubai',
  '/blog/dinner-party-menu-ideas-dubai',
  '/blog/grazing-table-vs-buffet-dubai',
  '/blog/how-far-ahead-book-caterer-dubai',
  '/blog/how-to-hire-a-private-chef-dubai',
  '/blog/iftar-at-home-dubai',
  '/blog/nye-party-catering-dubai',
  '/blog/private-chef-date-night-dubai',
  '/blog/private-chef-vs-restaurant-dubai',
  '/blog/vegan-catering-dubai-guide',
  '/blog/wedding-catering-cost-dubai',
])

const loaders = import.meta.glob('../seo-pages/*.json', {
  import: 'default',
}) as Record<string, () => Promise<SeoPage>>

const cache = new Map<string, Promise<SeoPage | null>>()

export function hasSeoContent(url: string): boolean {
  return Boolean(ROUTES[url])
}

export function getSeoContent(url: string): Promise<SeoPage | null> {
  const existing = cache.get(url)
  if (existing) return existing
  const slug = ROUTES[url]
  const loader = slug ? loaders[`../seo-pages/${slug}.json`] : undefined
  const promise = loader ? loader() : Promise.resolve(null)
  cache.set(url, promise)
  return promise
}

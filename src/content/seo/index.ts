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

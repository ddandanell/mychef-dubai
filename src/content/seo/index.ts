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

export interface SeoImage {
  src: string
  alt: string
  role?: 'hero' | 'inline'
  width?: number
  height?: number
}

export interface SeoPage {
  url: string
  head?: { title?: string; meta_description?: string; h1?: string }
  opening_paragraph?: string[]
  replace_in_block?: SeoReplaceBlock[]
  add_block?: SeoAddBlock[]
  images?: SeoImage[]
}

const ROUTES = routes as Record<string, string>

// Routes whose titles are owned by their page-level <SEO> component. SeoHead must
// not emit a second <title>/<meta> for these paths, or React 19 ends up with two
// hoisted title nodes.
export const SKIP_SEO_HEAD_ROUTES: ReadonlySet<string> = new Set([
  '/about',
  '/afternoon-tea-catering-dubai',
  '/allergy-safe-catering-dubai',
  '/anniversary-catering-dubai',
  '/apartment-private-dining-dubai',
  '/arabic-catering-dubai',
  '/asian-catering-dubai',
  '/baby-shower-catering-dubai',
  '/bachelor-party-catering-dubai',
  '/bachelorette-party-catering-dubai',
  '/bar-services-dubai',
  '/bbq-catering-dubai',
  '/beach-catering-dubai',
  '/birthday-catering-dubai',
  '/birthday-catering-package-dubai',
  '/blog',
  '/blog/best-private-chef-birthday-dinner-dubai',
  '/blog/corporate-catering-full-service-vs-drop-off',
  '/blog/halal-private-dining-dubai-what-to-ask',
  '/blog/how-much-does-private-chef-cost-dubai',
  '/blog/private-chef-palm-jumeirah-guide',
  '/blog/ramadan-iftar-catering-trends-2026',
  '/blog/weekly-meal-prep-vs-full-time-chef-dubai',
  '/blog/yacht-party-menu-ideas-dubai',
  '/brand-activation-catering-dubai',
  '/breakfast-catering-dubai',
  '/brunch-catering-dubai',
  '/buffet-catering-dubai',
  '/buffet-vs-plated-dubai',
  '/business-lunch-catering-dubai',
  '/canape-catering-dubai',
  '/catering-cost-calculator-dubai',
  '/catering-dubai',
  '/catering-packages-dubai',
  '/chef-training-academy',
  '/chefs-table-dubai',
  '/chinese-new-year-catering-dubai',
  '/christmas-catering-dubai',
  '/cocktail-party-catering-dubai',
  '/coffee-tea-service-dubai',
  '/conference-catering-dubai',
  '/corporate',
  '/corporate-dinner-package-dubai',
  '/corporate-event-catering-dubai',
  '/corporate-meal-prep-dubai',
  '/corporate-retainer-dubai',
  '/cuisines-dubai',
  '/dairy-free-catering-dubai',
  '/date-night-package-dubai',
  '/desert-dining-dubai',
  '/dessert-cart-dubai',
  '/dessert-table-catering-dubai',
  '/diwali-catering-dubai',
  '/drop-off-catering-dubai',
  '/dubai-catering-prices-guide',
  '/dubai-food-trends-report-2026',
  '/easter-catering-dubai',
  '/eid-catering-dubai',
  '/engagement-catering-dubai',
  '/events',
  '/exhibition-catering-dubai',
  '/family-feast-package-dubai',
  '/faq',
  '/farewell-catering-dubai',
  '/fathers-day-catering-dubai',
  '/festive-catering-dubai',
  '/film-crew-catering-dubai',
  '/finger-food-catering-dubai',
  '/fitness-meal-prep-dubai',
  '/fodmap-catering-dubai',
  '/full-time-private-chef-dubai',
  '/gala-dinner-catering-dubai',
  '/gift-cards',
  '/gluten-free-catering-dubai',
  '/graduation-catering-dubai',
  '/grazing-table-dubai',
  '/guide/private-dining-dubai',
  '/guides',
  '/halal-catering-dubai',
  '/halal-private-dining-dubai',
  '/halloween-catering-dubai',
  '/healthy-catering-dubai',
  '/holi-catering-dubai',
  '/housewarming-catering-dubai',
  '/how-it-works',
  '/how-to-choose-caterer-dubai',
  '/iftar-catering-dubai',
  '/indian-catering-dubai',
  '/italian-catering-dubai',
  '/jain-catering-dubai',
  '/keto-catering-dubai',
  '/kids-birthday-catering-dubai',
  '/kids-nutrition-chef-dubai',
  '/live-cooking-stations-dubai',
  '/locations',
  '/locations/al-barsha',
  '/locations/arabian-ranches',
  '/locations/bluewaters-island',
  '/locations/business-bay',
  '/locations/difc',
  '/locations/downtown-dubai',
  '/locations/dubai-hills',
  '/locations/dubai-marina',
  '/locations/emirates-hills',
  '/locations/jbr',
  '/locations/jlt',
  '/locations/jumeirah',
  '/locations/jvc',
  '/locations/palm-jumeirah',
  '/locations/umm-suqeim',
  '/luxury-dining-experiences',
  '/luxury-dinner-planning-guide-dubai',
  '/mediterranean-catering-dubai',
  '/menus',
  '/mocktail-bar-catering-dubai',
  '/mothers-day-catering-dubai',
  '/mystery-dining-dubai',
  '/new-year-catering-dubai',
  '/nut-free-catering-dubai',
  '/office-catering-dubai',
  '/our-chefs',
  '/oyster-bar-dubai',
  '/part-time-private-chef-dubai',
  '/party-catering-dubai',
  '/pescatarian-catering-dubai',
  '/picnic-catering-dubai',
  '/pool-party-catering-dubai',
  '/postpartum-meal-prep-dubai',
  '/private-chef-dubai',
  '/private-chef-prices-dubai',
  '/private-chef-vs-catering-dubai',
  '/private-cooking-classes-dubai',
  '/private-party-catering-dubai',
  '/product-launch-catering-dubai',
  '/production-catering-dubai',
  '/proposal-dinner-dubai',
  '/ramadan-catering-dubai',
  '/ramadan-catering-guide-dubai',
  '/reunion-catering-dubai',
  '/romantic-dinner-dubai',
  '/shawarma-station-dubai',
  '/site-map',
  '/staff-meals-catering-dubai',
  '/sugar-free-catering-dubai',
  '/suhoor-catering-dubai',
  '/sushi-catering-dubai',
  '/tasting-menu-dubai',
  '/tourist-villa-chef-dubai',
  '/uae-national-day-catering-dubai',
  '/valentines-day-catering-dubai',
  '/vegan-catering-dubai',
  '/vegetarian-catering-dubai',
  '/villa-catering-ideas-dubai',
  '/villas-private-residences',
  '/vip-club',
  '/wedding-catering-dubai',
  '/wedding-catering-menu-planning-dubai',
  '/weekly-meal-prep-dubai',
  '/wellness-meal-prep-dubai',
  '/yacht-catering-guide-dubai',
  '/yachts',
])

// Handoff routes that have NO existing page component — rendered as a full page by
// HandoffPage. The shared SeoContent/SeoHead injectors skip these so nothing double-renders.
export const FULLPAGE_ROUTES: ReadonlySet<string> = new Set([
  '/best-catering-companies-dubai',
  '/blog/brunch-at-home-dubai',
  '/blog/corporate-event-catering-ideas-dubai',
  '/blog/desert-dinner-party-dubai',
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

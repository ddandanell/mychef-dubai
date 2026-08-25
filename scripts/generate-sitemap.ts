/**
 * Sitemap generator
 *
 * Reads src/App.tsx Route declarations and emits public/sitemap.xml.
 * Expands known dynamic slugs, excludes noindex/disallowed/quarantined paths,
 * and assigns priority/changefreq by URL pattern so the sitemap never drifts
 * from the actual route inventory.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { BLOG_HUBS } from '../src/content/blogTaxonomy'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROUTES_TSX = path.resolve(__dirname, '../src/routes.tsx')
const SITEMAP_OUT = path.resolve(__dirname, '../public/sitemap.xml')
const VERCEL_JSON = path.resolve(__dirname, '../vercel.json')
const DOMAIN = 'https://www.mychef.ae'

/**
 * Any path that vercel.json 301s away must never be advertised in the sitemap —
 * a redirecting URL in a sitemap wastes crawl budget and confuses canonicalisation.
 * Derived automatically so adding a redirect can never silently reintroduce the bug.
 */
function redirectSources(): string[] {
  try {
    const cfg = JSON.parse(fs.readFileSync(VERCEL_JSON, 'utf8')) as {
      redirects?: { source: string }[]
    }
    return (cfg.redirects ?? []).map((r) => r.source).filter((s) => !s.includes(':') && !s.includes('*'))
  } catch {
    return []
  }
}

// Paths that must never appear in the sitemap
const EXCLUDED_PATHS = new Set([
  '/inquiry',
  '/thank-you',
  // Canonicalised to the flat owner URL. A page that points its canonical
  // elsewhere must not also be advertised as its own entry.
  '/private-chef-dubai/pricing',
  '/private-chef-dubai/our-chefs',
  '/government-event-catering-dubai',
  '/healthcare-catering-dubai',
  '/school-catering-dubai',
  '/nursery-catering-dubai',
  '/university-catering-dubai',
  ...redirectSources(),
])

// Dynamic route expansions. Values are the slugs substituted for the route's :param.
const DYNAMIC_SLUGS: Record<string, string[]> = {
  // Derived from the taxonomy so a new topic hub is never left out of the sitemap.
  '/blog/topic/:hub': BLOG_HUBS.map((h) => h.slug),
  '/locations/:slug': [
    'dubai-marina',
    'downtown-dubai',
    'palm-jumeirah',
    'jumeirah',
    'jbr',
    'business-bay',
    'difc',
    'emirates-hills',
    'arabian-ranches',
    'dubai-hills',
    'jvc',
    'jlt',
    'bluewaters-island',
    'umm-suqeim',
    'al-barsha',
  ],
}

// Priority & changefreq rules — first match wins
const PRIORITY_RULES: { pattern: RegExp; priority: number; changefreq: string; section?: string }[] = [
  { pattern: /^\/$/, priority: 1.0, changefreq: 'weekly', section: 'Core hubs' },
  { pattern: /^\/catering-dubai$/, priority: 1.0, changefreq: 'weekly', section: 'Core hubs' },
  { pattern: /^\/private-chef-dubai$/, priority: 1.0, changefreq: 'weekly', section: 'Core hubs' },
  { pattern: /^\/private-chef-dubai\/(how-it-works|our-chefs|quality-training|privacy-security|pricing|how-your-plan-works)$/, priority: 0.8, changefreq: 'weekly', section: 'Private chef cluster' },
  { pattern: /^\/(catering-packages-dubai|private-chef-prices-dubai|luxury-dining-experiences|events|corporate|villas-private-residences|yachts|party-catering-dubai)$/, priority: 0.9, changefreq: 'weekly', section: 'Core hubs' },
  { pattern: /^\/locations$/, priority: 0.9, changefreq: 'weekly', section: 'Locations' },
  { pattern: /^\/weekly-meal-prep-dubai$/, priority: 0.9, changefreq: 'weekly', section: 'Bluebook trust & service pages' },
  { pattern: /^\/wedding-catering-dubai$/, priority: 0.9, changefreq: 'weekly', section: 'Event & party spokes' },
  { pattern: /^\/(birthday|bachelor-party|bachelorette-party|engagement|anniversary|baby-shower|private-party)-catering-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Event & party spokes' },
  { pattern: /^\/kids-birthday-catering-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Event & party spokes' },
  { pattern: /^\/(pool-party|beach|desert-dining|afternoon-tea|housewarming|graduation|farewell|reunion|fathers-day|chinese-new-year|holi|picnic|coffee-tea-service|dessert-cart|shawarma-station|oyster-bar)-catering-dubai$/, priority: 0.7, changefreq: 'weekly', section: 'Event & party spokes' },
  { pattern: /^\/(bbq|buffet|canape|grazing-table|cocktail-party)-catering-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Food formats' },
  { pattern: /^\/(finger-food|live-cooking-stations|dessert-table|mocktail-bar)-catering-dubai$/, priority: 0.7, changefreq: 'weekly', section: 'Food formats' },
  { pattern: /^\/cuisines-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Cuisines' },
  { pattern: /^\/(indian|arabic|halal)-catering-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Cuisines' },
  { pattern: /^\/(mediterranean|italian|asian|sushi|vegan|vegetarian|healthy|gluten-free|dairy-free|nut-free|keto|jain|pescatarian|sugar-free|fodmap|halal-private-dining)-catering-dubai$/, priority: 0.7, changefreq: 'weekly', section: 'Cuisines' },
  { pattern: /^\/(office|business-lunch|corporate-event)-catering-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Corporate & institutional' },
  { pattern: /^\/(conference|staff-meals|film-crew|production)-catering-dubai$/, priority: 0.7, changefreq: 'weekly', section: 'Corporate & institutional' },
  { pattern: /^\/corporate-meal-prep-dubai$/, priority: 0.7, changefreq: 'weekly', section: 'Corporate & institutional' },
  { pattern: /^\/festive-catering-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Seasonal & themed' },
  { pattern: /^\/romantic-dinner-dubai$/, priority: 0.8, changefreq: 'weekly', section: 'Seasonal & themed' },
  { pattern: /^\/(valentines-day|mothers-day|uae-national-day|easter|halloween|ramadan|iftar|suhoor|eid|diwali|christmas|new-year|brunch|breakfast|drop-off|tasting-menu)-catering-dubai$/, priority: 0.7, changefreq: 'weekly', section: 'Seasonal & themed' },
  { pattern: /^\/locations\/.+$/, priority: 0.8, changefreq: 'weekly', section: 'Locations' },
  { pattern: /^\/menus$/, priority: 0.8, changefreq: 'weekly', section: 'Supporting' },
  { pattern: /^\/(our-chefs|how-it-works)$/, priority: 0.8, changefreq: 'monthly', section: 'Supporting' },
  { pattern: /^\/(about|contact|faq)$/, priority: 0.7, changefreq: 'monthly', section: 'Supporting' },
  { pattern: /^\/(how-we-vet-our-chefs|booking-protection-insurance|partner-with-us|gallery|venue-partners|case-studies|press)$/, priority: 0.7, changefreq: 'monthly', section: 'Supporting' },
  { pattern: /^\/blog$/, priority: 0.8, changefreq: 'weekly', section: 'Content gaps closed' },
  { pattern: /^\/blog\/topic\/.+$/, priority: 0.7, changefreq: 'weekly', section: 'Blog topic hubs' },
  { pattern: /^\/blog\/.+$/, priority: 0.7, changefreq: 'monthly', section: 'Content gaps closed' },
  { pattern: /^\/chefs\/.+$/, priority: 0.6, changefreq: 'monthly', section: 'Content gaps closed' },
  { pattern: /^\/(become-a-mychef|review|vip-club|gift-cards)$/, priority: 0.6, changefreq: 'monthly', section: 'Supporting' },
  { pattern: /^\/catering-cost-calculator-dubai$/, priority: 0.8, changefreq: 'monthly', section: 'Content gaps closed' },
  { pattern: /^\/guides$/, priority: 0.8, changefreq: 'weekly', section: 'Guides' },
  { pattern: /^\/(dubai-catering-prices-guide|how-to-choose-caterer-dubai|villa-catering-ideas-dubai|wedding-catering-checklist-dubai|corporate-catering-checklist-dubai|private-chef-vs-catering-dubai|buffet-vs-plated-dubai|yacht-catering-guide-dubai|ramadan-catering-guide-dubai|luxury-dinner-planning-guide-dubai)$/, priority: 0.7, changefreq: 'monthly', section: 'Guides' },
  { pattern: /^\/guide\/private-dining-dubai$/, priority: 0.7, changefreq: 'monthly', section: 'Linkable assets / guides' },
  { pattern: /^\/(dubai-event-catering-price-guide-2026|yacht-catering-checklist-dubai|wedding-catering-menu-planning-dubai|dubai-food-trends-report-2026)$/, priority: 0.7, changefreq: 'monthly', section: 'Linkable assets / guides' },
  { pattern: /^\/(bar-services|product-launch-catering|brand-activation-catering|exhibition-catering|gala-dinner-catering|private-cooking-classes)-dubai$/, priority: 0.7, changefreq: 'monthly', section: 'Additional service & experience pages' },
  { pattern: /^\/site-map$/, priority: 0.5, changefreq: 'monthly', section: 'Utility' },
  { pattern: /^\/(privacy-policy|terms)$/, priority: 0.3, changefreq: 'yearly', section: 'Legal' },
]

function parseRoutes(source: string): string[] {
  const routes: string[] = []
  // Match route declarations in src/routes.tsx: { path: "/...", ... }
  const routeRegex = /\{\s*path:\s*["']([^"']+)["']/g
  let match: RegExpExecArray | null
  while ((match = routeRegex.exec(source)) !== null) {
    const pathStr = match[1]
    if (pathStr === '*') continue
    if (DYNAMIC_SLUGS[pathStr]) {
      for (const slug of DYNAMIC_SLUGS[pathStr]) {
        routes.push(pathStr.replace(/:[^/]+/, slug))
      }
    } else if (!pathStr.includes(':')) {
      routes.push(pathStr)
    }
  }
  return [...new Set(routes)].filter((p) => !EXCLUDED_PATHS.has(p))
}

function getRule(pathStr: string) {
  for (const rule of PRIORITY_RULES) {
    if (rule.pattern.test(pathStr)) return rule
  }
  return { priority: 0.5, changefreq: 'monthly', section: 'Other' }
}

function today() {
  return new Date().toISOString().split('T')[0]
}

function buildSitemap(paths: string[]): string {
  const sorted = paths.slice().sort((a, b) => {
    // Home first, then alphabetical
    if (a === '/') return -1
    if (b === '/') return 1
    return a.localeCompare(b)
  })

  const grouped = new Map<string, string[]>()
  for (const p of sorted) {
    const rule = getRule(p)
    const section = rule.section || 'Other'
    if (!grouped.has(section)) grouped.set(section, [])
    grouped.get(section)!.push(p)
  }

  const sectionOrder = [
    'Core hubs',
    'Private chef cluster',
    'Event & party spokes',
    'Food formats',
    'Cuisines',
    'Corporate & institutional',
    'Seasonal & themed',
    'Supporting',
    'Bluebook trust & service pages',
    'Content gaps closed',
    'Blog topic hubs',
    'Locations',
    'Guides',
    'Linkable assets / guides',
    'Additional service & experience pages',
    'Press / Media',
    'Utility',
    'Legal',
    'Other',
  ]

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Any section not named in sectionOrder still has to ship. Without this a new
  // priority rule is dropped from the XML while the run log still counts it.
  const orderedSections = [...sectionOrder, ...[...grouped.keys()].filter((s) => !sectionOrder.includes(s))]

  for (const section of orderedSections) {
    const pathsInSection = grouped.get(section)
    if (!pathsInSection || pathsInSection.length === 0) continue
    xml += `\n  <!-- ${section} -->\n`
    for (const p of pathsInSection) {
      const rule = getRule(p)
      xml += `  <url><loc>${DOMAIN}${p}</loc><lastmod>${today()}</lastmod><priority>${rule.priority.toFixed(1)}</priority><changefreq>${rule.changefreq}</changefreq></url>\n`
    }
  }

  xml += '</urlset>\n'
  return xml
}

function main() {
  const source = fs.readFileSync(ROUTES_TSX, 'utf8')
  const routes = parseRoutes(source)
  const xml = buildSitemap(routes)
  fs.writeFileSync(SITEMAP_OUT, xml)

  // Count the emitted <loc> entries, not the collected routes — the two drifting
  // apart is exactly the failure this guards against.
  const written = (xml.match(/<loc>/g) ?? []).length
  if (written !== routes.length) {
    console.error(`ERROR: collected ${routes.length} routes but wrote ${written} URLs`)
    process.exit(1)
  }
  console.log(`Generated sitemap with ${written} URLs at ${SITEMAP_OUT}`)

  // Sanity checks
  const expectedQuarantined = [
    '/government-event-catering-dubai',
    '/healthcare-catering-dubai',
    '/school-catering-dubai',
    '/nursery-catering-dubai',
    '/university-catering-dubai',
  ]
  for (const q of expectedQuarantined) {
    if (routes.includes(q)) {
      console.error(`ERROR: quarantined path ${q} found in sitemap`)
      process.exit(1)
    }
  }
  if (routes.includes('/inquiry') || routes.includes('/thank-you')) {
    console.error('ERROR: disallowed conversion paths found in sitemap')
    process.exit(1)
  }
  if (!routes.includes('/')) {
    console.error('ERROR: homepage missing from sitemap')
    process.exit(1)
  }
}

main()

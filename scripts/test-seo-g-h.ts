/**
 * Brief G+H: quiet heroes keep the eyebrow outside <h1>; topic hubs stay
 * live + noindex and off the sitemap, but still prerender.
 *
 *   npx tsx scripts/test-seo-g-h.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BLOG_TOPIC_HUB_PATHS } from '../src/content/blogTaxonomy'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

const hero = fs.readFileSync(path.join(root, 'src/components/PageHero.tsx'), 'utf8')
const quietH1 = hero.match(/variant === 'quiet' \? \(\s*<h1[\s\S]*?<\/h1>/)
eq('quiet H1 block found', Boolean(quietH1), true)
eq('quiet H1 does not wrap eyebrow', quietH1 ? /eyebrow/.test(quietH1[0]) : 'missing', false)
eq('eyebrow renders outside H1 for every variant', /\{eyebrow && \(/.test(hero) && /variant !== 'quiet'/.test(hero) === false, true)

const hubPage = fs.readFileSync(path.join(root, 'src/pages/BlogCategoryHub.tsx'), 'utf8')
eq('topic hub SEO sets noindex', /\bnoindex\b/.test(hubPage), true)

const sitemapGen = fs.readFileSync(path.join(root, 'scripts/generate-sitemap.ts'), 'utf8')
eq('sitemap generator excludes topic hub paths', sitemapGen.includes('BLOG_TOPIC_HUB_PATHS'), true)
eq('sitemap generator does not expand /blog/topic/:hub', /['"]\/blog\/topic\/:hub['"]/.test(sitemapGen), false)

const prerender = fs.readFileSync(path.join(root, 'scripts/prerender.ts'), 'utf8')
eq('prerender unique set spreads hubs', /\.\.\.BLOG_TOPIC_HUB_PATHS/.test(prerender), true)
const routesSrc = fs.readFileSync(path.join(root, 'src/routes.tsx'), 'utf8')
eq('routes.tsx still has /blog/topic/:hub', routesSrc.includes('/blog/topic/:hub'), true)

eq('six topic hub paths', BLOG_TOPIC_HUB_PATHS.length, 6)
eq(
  'topic hub path set',
  [...BLOG_TOPIC_HUB_PATHS].sort(),
  [
    '/blog/topic/celebrations',
    '/blog/topic/corporate',
    '/blog/topic/menus-dietary',
    '/blog/topic/outdoor',
    '/blog/topic/private-chef',
    '/blog/topic/seasonal',
  ],
)

const sitemapXml = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8')
const leaked = BLOG_TOPIC_HUB_PATHS.filter((p) => sitemapXml.includes(`https://www.mychef.ae${p}`))
eq('sitemap.xml has no /blog/topic/*', leaked, [])

if (fails > 0) {
  console.error(`\n${fails} failing check(s)`)
  process.exit(1)
}
console.log('\nAll G+H checks passed')

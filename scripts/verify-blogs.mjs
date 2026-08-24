#!/usr/bin/env node
/**
 * Verifies the 13 David blogs: JSON, routes, keywords, FAQ, images.
 * Run: node scripts/verify-blogs.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const errors = []

const blogs = [
  { url: '/blog/how-to-hire-a-private-chef-dubai', focus: 'how to hire a private chef in dubai', n: 3 },
  { url: '/blog/private-chef-vs-restaurant-dubai', focus: 'private chef vs restaurant dubai', n: 3 },
  { url: '/blog/dinner-party-menu-ideas-dubai', focus: 'dinner party menu ideas dubai', n: 3 },
  { url: '/blog/wedding-catering-cost-dubai', focus: 'wedding catering cost dubai', n: 3 },
  { url: '/blog/brunch-at-home-dubai', focus: 'brunch at home dubai', n: 4 },
  { url: '/blog/vegan-catering-dubai-guide', focus: 'vegan catering dubai', n: 3 },
  { url: '/blog/corporate-event-catering-ideas-dubai', focus: 'corporate event catering ideas dubai', n: 3 },
  { url: '/blog/iftar-at-home-dubai', focus: 'iftar at home dubai', n: 4 },
  { url: '/blog/nye-party-catering-dubai', focus: 'new years eve catering dubai', n: 4 },
  { url: '/blog/private-chef-date-night-dubai', focus: 'date night ideas dubai', n: 3 },
  { url: '/blog/grazing-table-vs-buffet-dubai', focus: 'grazing table vs buffet dubai', n: 3 },
  { url: '/blog/how-far-ahead-book-caterer-dubai', focus: 'how far in advance to book a caterer dubai', n: 2 },
  { url: '/blog/desert-dinner-party-dubai', focus: 'desert dinner party dubai', n: 4 },
]

function fail(msg) {
  errors.push(msg)
}

function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function variants(kw) {
  const n = norm(kw)
  const out = new Set([n])
  const parts = n.split(' ')
  if (parts.at(-1) === 'dubai' && parts.at(-2) !== 'in') {
    out.add([...parts.slice(0, -1), 'in', 'dubai'].join(' '))
  }
  out.add(n.replace('new years eve', 'nye'))
  out.add(n.replace('nye', 'new years eve'))
  return [...out]
}

function hasKw(blob, kw) {
  const b = norm(blob)
  return variants(kw).some((v) => v && b.includes(v))
}

const routesTsx = fs.readFileSync(path.join(root, 'src/routes.tsx'), 'utf8')
const seoIndex = fs.readFileSync(path.join(root, 'src/content/seo/index.ts'), 'utf8')
const routesJson = JSON.parse(fs.readFileSync(path.join(root, 'src/content/seo/routes.json'), 'utf8'))
const blogTsx = fs.readFileSync(path.join(root, 'src/pages/Blog.tsx'), 'utf8')
const blogSeries = fs.readFileSync(path.join(root, 'src/content/blogSeries.ts'), 'utf8')
const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8')

for (const blog of blogs) {
  const slug = 'blog-' + blog.url.slice('/blog/'.length)
  const jsonPath = path.join(root, 'src/content/seo-pages', `${slug}.json`)
  if (!fs.existsSync(jsonPath)) {
    fail(`${blog.url}: missing JSON ${slug}.json`)
    continue
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  const head = data.head || {}
  const opening = (data.opening_paragraph || []).join(' ')
  if (!head.title || !head.h1 || !head.meta_description || !opening) {
    fail(`${blog.url}: missing source title, H1, meta or intro`)
  }
  const kw = data.keyword_strategy || {}
  const stored = kw.focus_keyword || kw.main_keyword || ''
  if (norm(stored) !== norm(blog.focus) && !hasKw(stored, blog.focus)) {
    fail(`${blog.url}: keyword_strategy.focus_keyword should be "${blog.focus}" (already set in MD FILES/BLOG)`)
  }
  if (!Array.isArray(data.faq) || data.faq.length < 4) {
    fail(`${blog.url}: FAQ must have at least 4 questions (got ${data.faq?.length ?? 0})`)
  }
  const images = data.images || []
  if (images.length < 2 || images.length > 4) {
    fail(`${blog.url}: expected 2–4 images, got ${images.length}`)
  }
  if (images.length !== blog.n) {
    fail(`${blog.url}: expected ${blog.n} images, got ${images.length}`)
  }
  for (const img of images) {
    if (!img.src || !img.alt) fail(`${blog.url}: image missing src/alt`)
    const file = path.join(root, 'public', String(img.src).replace(/^\//, ''))
    if (!fs.existsSync(file)) fail(`${blog.url}: image file missing ${img.src}`)
    if (!hasKw(img.alt, blog.focus) && !norm(img.alt).includes(norm(blog.focus))) {
      fail(`${blog.url}: image alt should carry the topic keyword (${img.src})`)
    }
  }
  if (!routesTsx.includes(`path: "${blog.url}"`)) fail(`${blog.url}: missing from routes.tsx`)
  if (!seoIndex.includes(`'${blog.url}'`)) fail(`${blog.url}: missing from FULLPAGE_ROUTES`)
  if (!routesJson[blog.url]) fail(`${blog.url}: missing from seo/routes.json`)
  if (!blogTsx.includes(blog.url) && !blogSeries.includes(blog.url)) fail(`${blog.url}: missing from Blog.tsx / blogSeries.ts index`)
  if (!sitemap.includes(`https://www.mychef.ae${blog.url}`)) fail(`${blog.url}: missing from sitemap.xml`)
}

if (errors.length) {
  console.error(`verify-blogs FAILED (${errors.length})\n` + errors.map((e) => ` - ${e}`).join('\n'))
  process.exit(1)
}
console.log(`verify-blogs OK: ${blogs.length} blogs`)

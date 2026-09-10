/**
 * Guard: Google SERP site name + favicon for myCHEF.ae.
 *
 * Google was showing "Vercel" and a generic globe because (1) the favicon was a
 * data-URI Googlebot cannot fetch and (2) the *.vercel.app host leaked into the
 * site graph. This script fails the build if any public HTML shell, React head,
 * or prerendered page is missing a crawlable myCHEF icon or names the site
 * anything other than myCHEF.
 *
 *   npx tsx scripts/verify-google-brand.ts
 *   npx tsx scripts/verify-google-brand.ts --dist
 *   npx tsx scripts/verify-google-brand.ts --live
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SITE_NAME = 'myCHEF'
const SITE = 'https://www.mychef.ae'

export type Issue = { file: string; problem: string }

const ICON_HREF_RE = /<link\b[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>/gi
const HREF_RE = /\bhref=["']([^"']+)["']/i
const OG_SITE_RE = /<meta\b[^>]*property=["']og:site_name["'][^>]*>/i
const APP_NAME_RE = /<meta\b[^>]*name=["']application-name["'][^>]*>/i
const CONTENT_RE = /\bcontent=["']([^"']*)["']/i
const TITLE_RE = /<title>([^<]*)<\/title>/i
const MANIFEST_NAME_RE = /"name"\s*:\s*"([^"]+)"/

function contentOf(tag: string): string {
  return tag.match(CONTENT_RE)?.[1]?.trim() ?? ''
}

function pngSize(file: string): { width: number; height: number } | null {
  const buf = fs.readFileSync(file)
  if (buf.length < 24 || buf.toString('ascii', 1, 4) !== 'PNG') return null
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

export function auditHtml(html: string, file: string): Issue[] {
  const issues: Issue[] = []
  const icons = [...html.matchAll(ICON_HREF_RE)].map((m) => m[0])
  const hrefs = icons
    .map((tag) => tag.match(HREF_RE)?.[1] ?? '')
    .filter(Boolean)

  if (hrefs.some((h) => h.startsWith('data:'))) {
    issues.push({
      file,
      problem: 'favicon is a data-URI — Googlebot cannot fetch it, so SERP shows a globe and may fall back to Vercel',
    })
  }

  const crawlable = hrefs.some(
    (h) =>
      /favicon-48x48\.png(?:\?|$)/.test(h) ||
      /favicon\.ico(?:\?|$)/.test(h) ||
      /\/favicon-48x48\.png/.test(h),
  )
  if (!crawlable) {
    issues.push({
      file,
      problem: 'missing crawlable favicon (/favicon-48x48.png or /favicon.ico)',
    })
  }

  const ogTag = html.match(OG_SITE_RE)?.[0]
  if (!ogTag) {
    issues.push({ file, problem: 'missing og:site_name (Google site-name signal)' })
  } else {
    const name = contentOf(ogTag)
    if (name !== SITE_NAME) {
      issues.push({ file, problem: `og:site_name is "${name}" — must be "${SITE_NAME}"` })
    }
  }

  const appTag = html.match(APP_NAME_RE)?.[0]
  if (appTag) {
    const name = contentOf(appTag)
    if (name !== SITE_NAME) {
      issues.push({ file, problem: `application-name is "${name}" — must be "${SITE_NAME}"` })
    }
  }

  const title = html.match(TITLE_RE)?.[1] ?? ''
  if (/\bVercel\b/i.test(title) && !/myCHEF/i.test(title)) {
    issues.push({ file, problem: `document title looks like Vercel branding: "${title}"` })
  }

  if (/"@type"\s*:\s*"WebSite"/.test(html)) {
    const siteBlock = html.match(/"@type":"WebSite"[^}]+}/)
    if (siteBlock && /"name":"(?!myCHEF)[^"]+"/.test(siteBlock[0])) {
      issues.push({ file, problem: `WebSite.name is not ${SITE_NAME}: ${siteBlock[0].slice(0, 180)}` })
    }
  }

  return issues
}

function read(file: string): string {
  return fs.readFileSync(file, 'utf8')
}

export function auditSource(root = ROOT): Issue[] {
  const issues: Issue[] = []
  const requiredAssets: Array<[string, { width: number; height: number } | null]> = [
    ['public/favicon-48x48.png', { width: 48, height: 48 }],
    ['public/favicon-96x96.png', { width: 96, height: 96 }],
    ['public/apple-touch-icon.png', { width: 180, height: 180 }],
    ['public/favicon-512x512.png', { width: 512, height: 512 }],
    ['public/favicon.ico', null],
    ['public/favicon.svg', null],
    ['public/site.webmanifest', null],
  ]

  for (const [rel, size] of requiredAssets) {
    const full = path.join(root, rel)
    if (!fs.existsSync(full)) {
      issues.push({ file: rel, problem: 'file missing' })
      continue
    }
    if (size) {
      const got = pngSize(full)
      if (!got || got.width !== size.width || got.height !== size.height) {
        issues.push({
          file: rel,
          problem: `expected ${size.width}x${size.height} PNG, got ${got ? `${got.width}x${got.height}` : 'not a PNG'}`,
        })
      }
    }
  }

  const manifest = path.join(root, 'public/site.webmanifest')
  if (fs.existsSync(manifest)) {
    const name = read(manifest).match(MANIFEST_NAME_RE)?.[1]
    if (name !== SITE_NAME) {
      issues.push({ file: 'public/site.webmanifest', problem: `name is "${name ?? ''}" — must be "${SITE_NAME}"` })
    }
  }

  for (const rel of ['index.html', 'public/404.html']) {
    issues.push(...auditHtml(read(path.join(root, rel)), rel))
  }

  const app = read(path.join(root, 'src/App.tsx'))
  if (!/BrandIdentity/.test(app)) {
    issues.push({
      file: 'src/App.tsx',
      problem: 'BrandIdentity is not mounted — a route can ship without og:site_name / favicon',
    })
  }

  const seo = read(path.join(root, 'src/components/SEO.tsx'))
  if (!/property="og:site_name"/.test(seo) || !/SITE_NAME/.test(seo)) {
    issues.push({ file: 'src/components/SEO.tsx', problem: 'og:site_name must emit SITE_NAME (myCHEF)' })
  }
  if (/data:image\//.test(seo)) {
    issues.push({ file: 'src/components/SEO.tsx', problem: 'data-URI favicon is not crawlable' })
  }

  const brand = path.join(root, 'src/components/BrandIdentity.tsx')
  if (!fs.existsSync(brand)) {
    issues.push({ file: 'src/components/BrandIdentity.tsx', problem: 'missing — every React route needs this head' })
  } else {
    const src = read(brand)
    if (!/og:site_name/.test(src) || !/favicon-48x48\.png/.test(src) || !/myCHEF/.test(src)) {
      issues.push({
        file: 'src/components/BrandIdentity.tsx',
        problem: 'must emit og:site_name=myCHEF and a crawlable 48x48 favicon',
      })
    }
    if (/data:image\//.test(src)) {
      issues.push({ file: 'src/components/BrandIdentity.tsx', problem: 'data-URI favicon is not crawlable' })
    }
  }

  return issues
}

function walkHtmlFiles(dir: string): string[] {
  const out: string[] = []
  if (!fs.existsSync(dir)) return out
  const stack = [dir]
  while (stack.length) {
    const current = stack.pop()!
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'seo') continue
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) stack.push(full)
      else if (entry.name.endsWith('.html')) out.push(full)
    }
  }
  return out
}

export function auditDist(distDir: string): Issue[] {
  const issues: Issue[] = []
  if (!fs.existsSync(distDir)) {
    issues.push({ file: distDir, problem: 'dist directory missing — run the production build' })
    return issues
  }
  const files = walkHtmlFiles(distDir).filter((file) => {
    const base = path.basename(file)
    return (
      base === 'index.html' ||
      base === '404.html' ||
      base === 'fallback.html' ||
      base === '.spa-shell.html'
    )
  })
  if (files.length === 0) {
    issues.push({ file: distDir, problem: 'no HTML files to audit' })
    return issues
  }
  for (const file of files) {
    issues.push(...auditHtml(fs.readFileSync(file, 'utf8'), path.relative(ROOT, file)))
  }
  for (const asset of ['favicon-48x48.png', 'favicon.ico', 'apple-touch-icon.png', 'site.webmanifest']) {
    if (!fs.existsSync(path.join(distDir, asset))) {
      issues.push({ file: `dist/${asset}`, problem: 'not copied into the build output' })
    }
  }
  return issues
}

async function auditLive(): Promise<Issue[]> {
  const issues: Issue[] = []
  const sitemap = await fetch(`${SITE}/sitemap.xml`).then((r) => r.text())
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const extra = [
    `${SITE}/inquiry`,
    `${SITE}/thank-you`,
    `${SITE}/this-google-brand-404-check`,
    `${SITE}/picnic-catering-dubai`,
  ]
  const all = [...new Set([...urls, ...extra])]
  const concurrency = 8
  let i = 0

  async function worker() {
    while (i < all.length) {
      const url = all[i++]
      try {
        const res = await fetch(url, { redirect: 'follow' })
        const html = await res.text()
        const label = `${url} → ${res.url} [${res.status}]`
        if (url.includes('this-google-brand-404-check') && res.status !== 404) {
          issues.push({ file: label, problem: `expected 404, got ${res.status}` })
        }
        issues.push(...auditHtml(html, label))
      } catch (err) {
        issues.push({ file: url, problem: `fetch failed: ${(err as Error).message}` })
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()))
  return issues
}

function printIssues(issues: Issue[], heading: string) {
  if (issues.length === 0) {
    console.log(`✓ ${heading}`)
    return
  }
  console.log(`✗ ${heading} — ${issues.length} issue(s)`)
  for (const issue of issues) {
    console.log(`  ${issue.file}\n    ${issue.problem}`)
  }
}

async function main() {
  const args = new Set(process.argv.slice(2))
  let failed = 0

  const source = auditSource()
  printIssues(source, 'source shells + React brand head')
  failed += source.length

  const fixtureOk = auditHtml(
    `<html><head><title>myCHEF</title><meta property="og:site_name" content="myCHEF"><link rel="icon" href="/favicon-48x48.png"></head></html>`,
    'fixture-ok',
  )
  const fixtureBad = auditHtml(
    `<html><head><title>Vercel</title><link rel="icon" href="data:image/svg+xml,x"></head></html>`,
    'fixture-bad',
  )
  if (fixtureOk.length !== 0) {
    printIssues(fixtureOk, 'auditor fixture (clean HTML should pass)')
    failed += fixtureOk.length
  } else {
    console.log('✓ auditor accepts crawlable myCHEF favicon + og:site_name')
  }
  const badOk =
    fixtureBad.some((i) => i.problem.includes('data-URI')) &&
    fixtureBad.some((i) => i.problem.includes('og:site_name')) &&
    fixtureBad.some((i) => i.problem.includes('Vercel'))
  if (!badOk) {
    console.log('✗ auditor fixture (Vercel + data-URI) did not flag every required failure')
    failed += 1
  } else {
    console.log('✓ auditor rejects Vercel title, missing og:site_name, and data-URI favicon')
  }

  if (args.has('--dist')) {
    const dist = auditDist(path.join(ROOT, 'dist'))
    printIssues(dist, `prerendered HTML (${path.join(ROOT, 'dist')})`)
    failed += dist.length
  }

  if (args.has('--live')) {
    const live = await auditLive()
    printIssues(live, `live ${SITE}`)
    failed += live.length
  }

  if (failed) {
    console.log(`\n${failed} Google brand issue(s)`)
    process.exit(1)
  }
  console.log('\n✓ Google site name + favicon checks passed')
}

const invoked = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (invoked) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}

import assert from 'node:assert/strict'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

const ledger = JSON.parse(readFileSync('blog/publishing-ledger.json', 'utf8'))
const entries = ledger.batches.at(-1)?.articles || []
const output = process.env.BLOG_QA_DIR || '/tmp/mychef-blog-publishing'
mkdirSync(output, { recursive: true })
const app = express()
app.get('/_vercel/*', (_req, res) => res.type('text/javascript').send(''))
app.use(express.static(path.resolve('dist'), { redirect: false }))
app.use((_req, res) => res.sendFile(path.resolve('dist/fallback.html')))
const server = await new Promise(resolve => { const s = app.listen(0, '127.0.0.1', () => resolve(s)) })
const origin = `http://127.0.0.1:${server.address().port}`
const browser = await puppeteer.launch({ executablePath: await chromium.executablePath(), args: chromium.args, headless: true })
const results = []
try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage()
    await page.setViewport({ width, height: 900 })
    await page.setRequestInterception(true)
    page.on('request', req => req.url().startsWith(origin) && req.method() === 'GET' ? void req.continue() : void req.abort())
    const errors = []; page.on('pageerror', error => errors.push(error.message))
    for (const entry of entries) {
      await page.goto(origin + entry.path, { waitUntil: 'networkidle0' })
      await page.waitForFunction(() => !document.head.querySelector('[data-prerender-seo="true"]'))
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1s: document.querySelectorAll('h1').length,
        breadcrumbs: document.querySelectorAll('nav[aria-label="Breadcrumb"]').length,
        headlineClear: document.querySelector('h1').getBoundingClientRect().top >= document.querySelector('nav[aria-label="Breadcrumb"]').getBoundingClientRect().bottom,
        byline: document.querySelector('[data-blog-byline]')?.textContent,
        toc: [...document.querySelectorAll('.blog-article-toc a')].map(a => ({ href: a.hash, exists: Boolean(document.getElementById(decodeURIComponent(a.hash.slice(1)))) })),
        images: [...document.querySelectorAll('article img[data-editorial-photo], article [data-editorial-photo] img')].map(im => ({ complete: im.complete, width: im.naturalWidth, alt: im.alt })),
      }))
      assert.equal(state.overflow, false, `${entry.path} overflows at ${width}`)
      assert.equal(state.h1s, 1)
      assert.equal(state.breadcrumbs, 1, 'one visible breadcrumb trail')
      assert.equal(state.headlineClear, true, 'breadcrumb does not cover the headline')
      assert.match(state.byline, /myCHEF Dubai.*Published.*October 2026|myCHEF Dubai.*Published/)
      assert.ok(state.toc.length >= 2 && state.toc.every(x => x.exists), 'every TOC target exists')
      const firstTarget = state.toc[0].href
      await page.click('.blog-article-toc a')
      await page.waitForFunction(hash => location.hash === hash, {}, firstTarget)
      const position = await page.$eval(firstTarget, el => el.getBoundingClientRect().top)
      assert.ok(position >= 0 && position < 450, 'TOC brings heading into view beneath navigation')
      for (const image of await page.$$('article [data-editorial-photo] img')) {
        await image.scrollIntoView()
        await image.evaluate(im => im.decode())
        assert.ok(await image.evaluate(im => im.naturalWidth > 0 && Boolean(im.alt)))
      }
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.screenshot({ path: path.join(output, `${entry.path.split('/').at(-1)}-${width}.png`) })
      if (width === 390 && entry === entries[0]) {
        await page.evaluate(owner => {
          window.__blogTestEvents = []
          window.gtag = (...args) => window.__blogTestEvents.push(args)
          const link = [...document.querySelectorAll('article a')].find(a => new URL(a.href).pathname === owner)
          document.addEventListener('click', e => e.preventDefault(), { once: true })
          link.click()
        }, entry.owner)
        const clicks = await page.evaluate(() => window.__blogTestEvents.filter(x => x[1] === 'blog_money_page_click'))
        assert.equal(clicks.length, 1, 'one engagement event per owner click')
        assert.equal(clicks[0][2].money_page_path, entry.owner)
        assert.equal(clicks[0][2].blog_path, entry.path)
        const fakeLeads = await page.evaluate(() => window.__blogTestEvents.filter(x => ['generate_lead', 'purchase'].includes(x[1])))
        assert.equal(fakeLeads.length, 0, 'navigation is not a conversion')
      }
      results.push({ path: entry.path, width, passed: true })
    }
    await page.goto(origin + '/blog', { waitUntil: 'networkidle0' })
    assert.equal(await page.$$eval('[data-blog-archive] > a', a => a.length), 12)
    await page.locator('nav[aria-label="Blog archive pages"] a[href="/blog/page/2"]').click()
    await page.waitForFunction(() => location.pathname === '/blog/page/2' && document.title.includes('Page 2'))
    assert.equal(await page.$eval('link[rel="canonical"]', el => el.href), 'https://www.mychef.ae/blog/page/2')
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    assert.deepEqual(errors, [])
    await page.close()
  }
  writeFileSync(path.join(output, 'results.json'), JSON.stringify(results, null, 2))
  console.log(`Blog browser checks passed: ${results.length} article/viewport cases, mobile TOC, original images, pagination and engagement event without a lead.`)
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)) }

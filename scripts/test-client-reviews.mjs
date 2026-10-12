import assert from 'node:assert/strict'
import { readFileSync, mkdirSync } from 'node:fs'
import { setTimeout as delay } from 'node:timers/promises'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

const base = process.env.REVIEW_QA_DIR || '/tmp/mychef-review-qa'
mkdirSync(base, { recursive: true })
const app = express()
app.get('/_vercel/*', (_r, s) => s.type('text/javascript').send(''))
app.use(express.static(process.cwd() + '/dist', { index: false, redirect: false }))
app.get('*', (_r, s) => s.sendFile(process.cwd() + '/dist/index.html'))
const server = await new Promise(resolve => {
  const s = app.listen(0, '127.0.0.1', () => resolve(s))
})
const origin = `http://127.0.0.1:${server.address().port}`
const fixture = async (variable, url, options) => process.env[variable]
  ? readFileSync(process.env[variable], 'utf8') : await fetch(url, options).then(r => r.text())
const [loaderSource, widgetSource, widgetData] = await Promise.all([
  fixture('REVIEW_QA_LOADER', 'https://portal.giveme5.ai/public/loader.js?id=GxRGAhebMrf6'),
  fixture('REVIEW_QA_BUNDLE', 'https://portal.giveme5.ai/public/widget.js'),
  fixture('REVIEW_QA_DATA', 'https://api.giveme5.ai/api/v2/widget/embed?id=GxRGAhebMrf6', { headers: { Origin: 'https://www.mychef.ae' } }),
])
assert.equal(JSON.parse(widgetData).success, true, 'the supplied widget account is active')
const browser = await puppeteer.launch({ executablePath: await chromium.executablePath(), args: chromium.args, headless: true, pipe: true })

async function navigate(page, route) {
  await page.evaluate(route => {
    const link = document.querySelector(`footer a[href="${route}"]`) || document.querySelector(`nav a[href="${route}"]`)
    if (!link) throw new Error('Missing navigation destination: ' + route)
    link.click()
  }, route)
  await page.waitForFunction(route => location.pathname === route, {}, route)
}
async function readyReviews(page, route) {
  await page.waitForFunction(route => {
    const canonical = document.querySelector('link[rel=canonical]')
    const section = document.querySelector('[data-mychef-reviews]')
    if (!document.querySelector('h1') || !canonical || new URL(canonical.href).pathname !== route || !section) return false
    const chapters = [...document.querySelectorAll('main section,main header')].filter(element => element.getClientRects().length && element.querySelector('h1,h2,h3') && !element.parentElement?.closest('section,header'))
    return [2, 3].includes(chapters.indexOf(section) + 1)
  }, { timeout: 15000 }, route)
  // Let the existing route scroll hold finish before triggering lazy reviews.
  await delay(500)
  assert.ok(await page.evaluate(() => scrollY) <= 5, 'navigation starts at the service hero')
  await page.evaluate(() => document.querySelector('[data-mychef-reviews]').scrollIntoView())
}
async function renderedReviews(page) {
  await page.waitForFunction(() => {
    const container = document.querySelector('[data-mychef-review-host] .gm5-review-widget-container')
    return !!container?.shadowRoot?.querySelector('.rw-card .rw-reviewer-name') && !container.shadowRoot.querySelector('.rw-error')
  }, { timeout: 15000 })
  const result = await page.evaluate(() => {
    const section = document.querySelector('[data-mychef-reviews]')
    const host = document.getElementById('rw-widget-GxRGAhebMrf6')
    const root = host.querySelector('.gm5-review-widget-container').shadowRoot
    const names = [...root.querySelectorAll('.rw-reviewer-name')].map(element => element.textContent)
    return {
      sections: document.querySelectorAll('[data-mychef-reviews]').length,
      hosts: document.querySelectorAll('#rw-widget-GxRGAhebMrf6').length,
      containers: document.querySelectorAll('.gm5-review-widget-container').length,
      inSection: section.contains(host),
      outsideSection: [...document.querySelectorAll('[id^="rw-widget-"],.gm5-review-widget-container')].some(element => !element.closest('[data-mychef-reviews]')),
      overflow: document.documentElement.scrollWidth > innerWidth,
      unavailable: !!document.querySelector('.mychef-reviews-unavailable'),
      grid: !!root.querySelector('.rw-grid'),
      clones: root.querySelectorAll('[data-clone-count]').length,
      names,
    }
  })
  assert.equal(result.sections, 1)
  assert.equal(result.hosts, 1)
  assert.equal(result.containers, 1)
  assert.equal(result.inSection, true)
  assert.equal(result.outsideSection, false, 'no provider container in the head, hero or body fallback')
  assert.equal(result.overflow, false)
  assert.equal(result.unavailable, false)
  assert.equal(result.grid, true)
  assert.equal(result.clones, 0)
  assert.equal(result.names.length, new Set(result.names).size, 'each review is displayed once')
  return result
}
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage()
    const errors = []
    let loaderRequests = 0, bundleRequests = 0, apiRequests = 0, loaderDelay = 0, bundleDelay = 0, apiDelay = 0, failLoader = false
    page.on('pageerror', e => errors.push(e.message))
    await page.setViewport({ width, height: 1000 })
    await page.setRequestInterception(true)
    page.on('request', async request => {
      try {
        const url = request.url()
        if (url.startsWith('https://portal.giveme5.ai/public/loader.js')) {
          loaderRequests++
          await delay(loaderDelay)
          if (failLoader) await request.abort()
          else await request.respond({ status: 200, contentType: 'application/javascript', body: loaderSource })
        } else if (/^https:\/\/(portal\.giveme5\.ai|dashboard-delta-sepia\.vercel\.app)\/public\/widget\.js/.test(url)) {
          bundleRequests++
          await delay(bundleDelay)
          await request.respond({ status: 200, contentType: 'application/javascript', body: widgetSource })
        } else if (url.startsWith('https://api.giveme5.ai/api/v2/widget/')) {
          apiRequests++
          await delay(apiDelay)
          await request.respond({ status: 200, contentType: 'application/json', body: widgetData, headers: { 'Access-Control-Allow-Origin': '*' } })
        } else if (url.startsWith(origin) && request.method() === 'GET') await request.continue()
        else await request.abort()
      } catch (error) {
        // A pending request can be cancelled by a deliberate cold navigation.
        if (!/Invalid InterceptionId|already handled|Target closed|Session closed/i.test(error.message)) errors.push(error.message)
      }
    })
    for (const route of ['/corporate', '/private-chef-dubai/pricing', '/corporate/menus-prices', '/luxury-dining-experiences/menus-prices', '/', '/catering-dubai']) {
      await page.goto(origin + route, { waitUntil: 'domcontentloaded' })
      await readyReviews(page, route)
      await renderedReviews(page)
      console.log('PASS cold review placement', width, route)
    }
    const retained = await page.$('#rw-widget-GxRGAhebMrf6')
    const requestsBefore = [loaderRequests, bundleRequests, apiRequests]
    for (const route of ['/private-chef-dubai', '/corporate/menus-prices', '/luxury-dining-experiences/menus-prices', '/', '/corporate']) {
      await navigate(page, route)
      await readyReviews(page, route)
      await renderedReviews(page)
      assert.equal(await page.evaluate(host => host === document.getElementById('rw-widget-GxRGAhebMrf6'), retained), true, 'navigation retains the actual provider node')
      console.log('PASS SPA review placement', width, route)
    }
    assert.deepEqual([loaderRequests, bundleRequests, apiRequests], requestsBefore, 'SPA navigation reuses the loader, runtime and review response')
    for (const route of ['/privacy-policy', '/blog']) {
      await navigate(page, route)
      await page.waitForSelector(`[data-mychef-route-content="${route}"] h1`)
      assert.equal(await page.$$eval('[data-mychef-reviews],[id^="rw-widget-"],.gm5-review-widget-container', elements => elements.length), 0, 'excluded pages have no orphaned widget')
      console.log('PASS excluded page has no reviews', width, route)
    }
    await navigate(page, '/corporate')
    await readyReviews(page, '/corporate')
    await renderedReviews(page)
    assert.deepEqual([loaderRequests, bundleRequests, apiRequests], requestsBefore, 'returning from an excluded page restores the same widget')
    await page.screenshot({ path: `${base}/reviews-${width}.png` })
    await retained.dispose()

    // Navigate away before each real provider stage finishes.
    for (const stage of ['loader', 'runtime', 'data']) {
      loaderDelay = stage === 'loader' ? 1800 : 0
      bundleDelay = stage === 'runtime' ? 1800 : 0
      apiDelay = stage === 'data' ? 1800 : 0
      await page.goto(origin + '/corporate', { waitUntil: 'domcontentloaded' })
      await readyReviews(page, '/corporate')
      if (stage === 'data') await page.waitForSelector('.gm5-review-widget-container')
      await navigate(page, '/privacy-policy')
      await delay(2100)
      assert.equal(await page.$$eval('[data-mychef-reviews],[id^="rw-widget-"],.gm5-review-widget-container', elements => elements.length), 0, 'late ' + stage + ' cannot render outside a review section')
      loaderDelay = bundleDelay = apiDelay = 0
      await navigate(page, '/private-chef-dubai')
      await readyReviews(page, '/private-chef-dubai')
      await renderedReviews(page)
      console.log('PASS navigation during delayed provider', width, stage)
    }
    failLoader = true
    await page.goto(origin + '/corporate', { waitUntil: 'domcontentloaded' })
    await readyReviews(page, '/corporate')
    await page.waitForSelector('.mychef-reviews-unavailable')
    failLoader = false
    await navigate(page, '/private-chef-dubai')
    await readyReviews(page, '/private-chef-dubai')
    await renderedReviews(page)
    console.log('PASS loader failure recovery', width)
    assert.deepEqual(errors, [])
    console.log('PASS real provider loader, bundle and seven-review response', width, { loaderRequests, bundleRequests, apiRequests })
    await page.close()
  }
} finally {
  await browser.close()
  server.close()
}

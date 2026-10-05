import assert from 'node:assert/strict'
import { mkdirSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

// Browser QA against the local production build. No enquiry, WhatsApp message
// or analytics request is sent. Use the bundled Chromium in managed Linux.
const output = process.env.SITE_QA_DIR || '/tmp/mychef-site-navigation'
mkdirSync(output, { recursive: true })
const app = express()
app.get('/_vercel/*', (_request, response) => response.type('text/javascript').send(''))
app.use(express.static(path.resolve('dist'), { redirect: false }))
app.use((_request, response) => response.sendFile(path.resolve('dist/fallback.html')))
const server = await new Promise(resolve => {
  const instance = app.listen(0, '127.0.0.1', () => resolve(instance))
})
const origin = `http://127.0.0.1:${server.address().port}`
const browser = await puppeteer.launch({ executablePath: await chromium.executablePath(), args: chromium.args, headless: true })
const results = []

async function settled(page, pathname) {
  try {
    await page.waitForFunction(route => location.pathname === route && document.querySelectorAll('h1').length === 1, {}, pathname)
    await page.waitForFunction(() => document.head.querySelectorAll('title').length === 1 && document.head.querySelectorAll('meta[name="description"]').length === 1)
  } catch (error) {
    const state = await page.evaluate(() => ({ url: location.pathname + location.search, headings: [...document.querySelectorAll('h1')].map(heading => heading.textContent), titles: [...document.head.querySelectorAll('title')].map(node => node.outerHTML), descriptions: [...document.head.querySelectorAll('meta[name="description"]')].map(node => node.outerHTML), scroll: scrollY, active: document.activeElement?.tagName }))
    await page.screenshot({ path: path.join(output, 'navigation-error.png') })
    throw new Error(`Navigation to ${pathname} did not settle: ${JSON.stringify(state)}`, { cause: error })
  }
}

try {
  for (const width of [390, 1440]) {
    const page = await browser.newPage()
    await page.setViewport({ width, height: 900 })
    await page.setRequestInterception(true)
    page.on('request', request => {
      if (request.url().startsWith(origin) && request.method() === 'GET') void request.continue()
      else void request.abort()
    })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(`${origin}/private-chef-dubai`, { waitUntil: 'networkidle0' })
    await page.waitForFunction(() => !document.head.querySelector('[data-prerender-seo="true"]'))
    const initial = await page.evaluate(() => ({
      h1: document.querySelector('h1').innerText,
      overflow: document.documentElement.scrollWidth > innerWidth,
      scripts: [...performance.getEntriesByType('resource')]
        .filter(resource => resource.name.includes('/assets/') && resource.name.endsWith('.js'))
        .map(resource => resource.name.split('/assets/')[1]),
      links: [...document.querySelectorAll('.pc-page-nav a')]
        .map(link => ({ href: link.getAttribute('href'), height: link.getBoundingClientRect().height })),
    }))
    assert.match(initial.h1, /Private Chef Dubai/)
    assert.equal(initial.overflow, false)
    assert.equal(initial.links.length, 4)
    assert.ok(initial.links.every(link => link.height >= 44), 'quick links have usable tap targets')
    assert.ok(!initial.scripts.some(file => /^(cateringDesign|CateringHero|ScrollTrigger|useScrollTrigger)-/.test(file)), 'unrelated catering copy and scrolling plugins stay out of the chef page')
    await page.screenshot({ path: path.join(output, `private-chef-${width}.png`) })
    await page.evaluate(() => window.scrollTo(0, scrollY + document.querySelector('.pc-page-nav').getBoundingClientRect().top - 85))
    await page.screenshot({ path: path.join(output, `quick-links-${width}.png`) })

    const jumps = []
    for (const href of ['#chef-prices', '#chef-faqs', '#chef-enquiry', '#chef-service-choice']) {
      await page.evaluate(fragment => document.querySelector(`.pc-page-nav a[href="${fragment}"]`).click(), href)
      await page.waitForFunction(fragment => {
        const target = document.querySelector(fragment).getBoundingClientRect()
        const bar = document.querySelector('.pc-page-nav').getBoundingClientRect()
        // The first section starts immediately after the bar, which can still
        // be in its normal position just before it reaches the sticky offset.
        return target.top >= bar.bottom - 2 && target.top < 200 && bar.top >= 63 && bar.top < 100
      }, {}, href)
      jumps.push({ href, top: await page.$eval(href, target => target.getBoundingClientRect().top) })
    }
    await page.evaluate(() => document.querySelector('.pc-page-nav a[href="#chef-enquiry"]').click())
    await page.waitForFunction(() => {
      const target = document.querySelector('#chef-enquiry').getBoundingClientRect()
      const bar = document.querySelector('.pc-page-nav').getBoundingClientRect()
      return location.hash === '#chef-enquiry' && target.top >= bar.bottom - 2 && target.top < 200
    })
    await page.click('#chef-enquiry a[href^="/inquiry"]')
    await settled(page, '/inquiry')
    await page.waitForSelector('form')
    assert.match(new URL(page.url()).search, /from=%2Fprivate-chef-dubai/)
    await page.$eval('form', form => form.scrollIntoView({ block: 'center' }))
    await page.waitForFunction(() => {
      let node = document.querySelector('form')
      while (node) {
        if (Number(getComputedStyle(node).opacity) < 0.95) return false
        node = node.parentElement
      }
      return true
    })
    // Enquiry is served by the SPA fallback, whose static shell title must also
    // be replaced before React mounts; exercise a direct load as well as a link.
    await page.goto(`${origin}/inquiry?from=%2Fprivate-chef-dubai`, { waitUntil: 'networkidle0' })
    await settled(page, '/inquiry')
    await page.waitForSelector('form')
    assert.match(await page.title(), /Get a Quote/)

    const routes = []
    for (const route of ['/', '/catering-dubai', '/corporate', '/school-catering-dubai', '/yachts', '/production-catering-dubai', '/private-chef-dubai/pricing', '/about']) {
      await page.goto(origin + route, { waitUntil: 'networkidle0' })
      await settled(page, route)
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1: document.querySelector('h1').innerText,
        visibleImages: [...document.images].filter(image => {
          const rect = image.getBoundingClientRect()
          return rect.width && rect.height && rect.top < innerHeight && rect.bottom > 0
        }).every(image => image.complete && image.naturalWidth > 0),
      }))
      assert.equal(state.overflow, false, `${route}: fits ${width}px`)
      assert.equal(state.visibleImages, true, `${route}: visible photographs load`)
      if (['/corporate', '/school-catering-dubai', '/production-catering-dubai'].includes(route)) {
        assert.ok(await page.$('[data-catering-hero]'), `${route}: lazy hero is present`)
        assert.ok(await page.$('[data-catering-expansion]'), `${route}: planning copy is present`)
      }
      if (['/catering-dubai', '/yachts', '/corporate'].includes(route)) {
        await page.screenshot({ path: path.join(output, `${route.slice(1)}-${width}.png`) })
      }
      routes.push({ route, ...state })
    }
    // Return through the real React Router link, after the catering chunks have
    // loaded, to check head ownership and scroll behaviour on client navigation.
    await page.evaluate(() => document.querySelector('a[href="/private-chef-dubai"]').click())
    await settled(page, '/private-chef-dubai')
    await page.waitForSelector('.pc-page-nav')
    assert.deepEqual(errors, [])
    const scriptBytes = initial.scripts.reduce((sum, file) => sum + statSync(path.join('dist/assets', file)).size, 0)
    results.push({ width, initial, script_bytes: scriptBytes, jumps, enquiry_form_visible: true, routes, errors })
    await page.close()
    console.log(`PASS ${width}px: section links, enquiry handoff, client navigation, images and eight page layouts.`)
  }
  writeFileSync(path.join(output, 'results.json'), JSON.stringify(results, null, 2) + '\n')
} finally {
  await browser.close()
  await new Promise(resolve => server.close(resolve))
}

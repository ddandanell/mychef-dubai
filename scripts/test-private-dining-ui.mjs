/** Local production-build QA. All external traffic is blocked; no messages or leads sent. */
import assert from 'node:assert/strict'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const output = '/tmp/mychef-dining-qa'
await mkdir(output, { recursive: true })
const app = express()
app.use(express.static(path.resolve('dist')))
// Only document routes use the SPA fallback. Vercel-only telemetry scripts are
// unavailable locally and must not receive HTML as JavaScript.
app.get('*', (req, res) => path.extname(req.path) ? res.sendStatus(404) : res.sendFile(path.resolve('dist/index.html')))
const server = await new Promise(resolve => { const s = app.listen(0, '127.0.0.1', () => resolve(s)) })
const origin = `http://127.0.0.1:${server.address().port}`
const browser = await puppeteer.launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: true })
const errors = [], results = []
async function visit(width) {
  const page = await browser.newPage()
  page.on('pageerror', error => errors.push(String(error)))
  await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 })
  await page.setRequestInterception(true)
  page.on('request', request => request.url().startsWith(origin) && request.method() === 'GET' || /^(data|blob):/.test(request.url()) ? request.continue() : request.abort())
  await page.goto(`${origin}/private-chef-dubai`, { waitUntil: 'networkidle0' })
  await page.waitForSelector('#dinner-calculator')
  return page
}
async function setInput(page, selector, value) {
  await page.$eval(selector, (el, value) => {
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value)
    el.dispatchEvent(new Event('input', { bubbles: true }))
  }, value)
}
async function textIncludes(page, text) {
  await page.waitForFunction(text => document.querySelector('[data-testid="dining-ticket"]').textContent.includes(text), {}, text)
}
async function clickText(page, selector, text) {
  assert(await page.$$eval(selector, (els, text) => { const button = els.find(el => el.textContent.includes(text)); button?.click(); return !!button }, text))
}
async function snapshot(page, name, selector = '#dinner-calculator') {
  await page.$eval(selector, el => window.scrollTo(0, scrollY + el.getBoundingClientRect().top - 95))
  await new Promise(resolve => setTimeout(resolve, 150))
  const layout = await page.evaluate(() => ({ viewport: innerWidth, pageWidth: document.documentElement.scrollWidth, h1: document.querySelectorAll('h1').length }))
  assert.equal(layout.pageWidth, layout.viewport, `${name}: horizontal overflow`)
  assert.equal(layout.h1, 1)
  await page.screenshot({ path: path.join(output, `${name}.png`) })
  results.push({ name, ...layout })
}
try {
  const page = await visit(1440)
  await textIncludes(page, 'AED 3,753.75')
  assert.match(await page.title(), /Dinner Packages/)
  assert.equal(await page.$eval('#dining-guests', el => el.min), '6')
  assert.equal(await page.$eval('[aria-label="Remove one guest"]', el => el.disabled), true)
  await snapshot(page, 'desktop-introduction')
  await snapshot(page, 'desktop-calculator', '.dining-layout')
  await setInput(page, '#dining-guests', '5')
  await textIncludes(page, 'Please choose 6–20 guests')
  assert.equal(await page.$('[data-testid="dining-ticket"] a[href*="wa.me"]'), null)
  await setInput(page, '#dining-guests', '9')
  await textIncludes(page, 'Assistants (1)')
  await textIncludes(page, 'AED 5,055.75')
  await setInput(page, '#dining-guests', '20')
  await textIncludes(page, 'Assistants (2)')
  await setInput(page, '#dining-guests', '6')
  await page.select('#dining-zone', '1')
  await textIncludes(page, 'AED 3,696')
  await page.select('#dining-zone', '3')
  await setInput(page, '#dining-name', 'Theo & family')
  await setInput(page, '#dining-dietary', 'Shellfish allergy; two vegetarian guests')
  await setInput(page, '#dining-location', 'Palm villa')
  await setInput(page, '#dining-date', '2027-11-07')
  const payload = await page.$eval('[data-testid="dining-ticket"] a[href*="wa.me"]', el => new URL(el.href).searchParams.get('text'))
  for (const required of ['AED 3,753.75', 'minimum 6', '2027-11-07', 'Theo & family', 'Shellfish allergy', 'Palm villa', 'Lamb tagine', '5% VAT', 'booking request']) assert(payload.includes(required), required)
  await setInput(page, '#dining-date', '2020-01-01')
  await page.waitForSelector('#dining-date[aria-invalid=true]')
  assert.equal(await page.$('[data-testid="dining-ticket"] a[href*="wa.me"]'), null)
  await setInput(page, '#dining-date', '')
  await page.$eval('[data-service=master]', el => el.click())
  await textIncludes(page, 'A personal quote for this menu')
  assert.equal(await page.$('.dining-total'), null)
  await setInput(page, '#dining-search', 'sushi')
  assert.equal(await page.$eval('[aria-label="Add Sushi (nigiri and maki)"]', el => el.disabled), false)
  await page.$eval('[data-service=signature]', el => el.click())
  assert.equal(await page.$eval('[aria-label="Add Sushi (nigiri and maki)"]', el => el.disabled), true)
  await setInput(page, '#dining-search', 'Wellington')
  assert((await page.$eval('[data-dish-id="47"]', el => el.textContent)).includes('Market price — confirmed on booking'))
  await page.$eval('[aria-label="Add Beef Wellington"]', el => el.click())
  await textIncludes(page, 'senior sign-off')
  assert.equal(await page.$('.dining-total'), null)
  await page.$eval('[aria-label="Remove Beef Wellington from my menu"]', el => el.click())
  await textIncludes(page, 'AED 3,753.75')
  await setInput(page, '#dining-search', 'Teppanyaki')
  await page.$eval('.dining-results-line input', el => el.click())
  assert.equal(await page.$eval('[data-dish-id="1003"] button', el => el.disabled), true)
  await setInput(page, '#dining-search', 'breakfast')
  assert.equal((await page.$$('.dining-dish')).length, 0)
  await setInput(page, '#dining-search', '')
  await page.select('#dining-cuisine', 'Italian')
  await page.select('#dining-course', 'Dessert')
  assert.equal((await page.$$('.dining-dish')).length, 1)
  assert((await page.$eval('.dining-dish', el => el.textContent)).includes('Tiramisu'))
  await clickText(page, '.dining-presets button', 'Relaxed Mediterranean')
  assert.equal(await page.$eval('[data-service=essential]', el => el.getAttribute('aria-pressed')), 'true')
  await page.close()
  for (const width of [390, 768]) {
    const mobile = await visit(width)
    await snapshot(mobile, `mobile-${width}-introduction`)
    await snapshot(mobile, `mobile-${width}-packages`, '.dining-layout')
    await mobile.waitForSelector('[data-testid="dining-mobile-bar"]')
    assert.equal(await mobile.$eval('[data-floating-chef-chat]', el => getComputedStyle(el).display), 'none')
    await mobile.$eval('[data-testid="dining-mobile-bar"] button', el => el.click())
    await mobile.waitForFunction(() => document.activeElement?.id === 'dining-ticket-title')
    await snapshot(mobile, `mobile-${width}-ticket`, '[data-testid="dining-ticket"]')
    await mobile.setViewport({ width: 320, height: 900, deviceScaleFactor: 1 })
    await snapshot(mobile, `small-mobile-${width}`, '.dining-filters')
    await mobile.close()
  }
  assert.equal(errors.length, 0, errors.join('\n'))
} finally {
  await browser.close()
  server.close()
  await writeFile(path.join(output, 'results.json'), JSON.stringify({ results, errors }, null, 2))
}
console.log(JSON.stringify({ results, errors }, null, 2))

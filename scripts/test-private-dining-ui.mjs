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

try {
  for (const width of [1440, 390]) {
    const page = await visit(width)
    const click = text => page.$$eval('#dinner-calculator button', (buttons, text) => buttons.find(b => b.textContent.includes(text)).click(), text)
    await page.waitForSelector('.dining-services')
    assert.match(await page.$eval('.dining-total', el => el.textContent), /AED/)
    await click('Delivered to you')
    assert.equal(await page.$eval('#dining-guests', el => el.value), '10')
    await click('A buffet for everyone')
    assert.equal(await page.$eval('#dining-guests', el => el.value), '20')
    await click('Cooked in your kitchen')
    await setInput(page, '#dining-guests', '6')
    await click('Your menu')
    await page.select('#dish-count', '11')
    assert.equal(await page.$$eval('.dining-dish-field', els => els.length), 11)
    await click('Japanese')
    assert.equal(await page.$$eval('#dish-standard-0 option', els => els.length), 10)
    await click('Drinks & extras')
    await page.click('.dining-drinks input')
    await click('Review & send')
    assert.equal(await page.$('a.dining-next'), null)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    await page.screenshot({ path: path.join(output, `master-${width}.png`), fullPage: true })
    results.push({width, status:'passed'})
    await page.close()
  }
  assert.deepEqual(errors, [])
  await writeFile(path.join(output, 'results.json'), JSON.stringify(results, null, 2))
  console.log(JSON.stringify(results))
} finally {
  await browser.close()
  server.close()
}

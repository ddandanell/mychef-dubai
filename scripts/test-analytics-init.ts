/** Regression coverage for analytics on prerendered pages. No network or lead submission. */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

const source = readFileSync(new URL('../src/lib/analytics.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText

function fixture(prerendered: boolean, existingTag = false) {
  const scripts: Array<Record<string, unknown>> = prerendered ? [{ id: 'ga4-src' }] : []
  const queue: unknown[] = []
  const calls: unknown[][] = []
  const tag = (...args: unknown[]) => calls.push(args)
  const win: Record<string, unknown> = {
    dataLayer: queue,
    location: { href: 'https://www.mychef.ae/private-chef-dubai', pathname: '/private-chef-dubai' },
    ...(existingTag ? { gtag: tag } : {}),
  }
  const context = vm.createContext({
    exports: {}, window: win,
    document: {
      title: 'Private Chef Dubai',
      getElementById: (id: string) => scripts.find(script => script.id === id),
      createElement: () => ({}),
      head: { appendChild: (script: Record<string, unknown>) => scripts.push(script) },
    },
  })
  vm.runInContext(compiled, context)
  const api = context.exports as {
    initAnalytics: () => void
    trackPageView: (path: string) => void
    trackEvent: (name: string) => void
    trackDeliveredQuoteLead: (service: string) => void
  }
  const commands = () => existingTag ? calls : queue.map(value => Array.from(value as ArrayLike<unknown>))
  return { api, scripts, win, tag, commands }
}

for (const prerendered of [false, true]) {
  const f = fixture(prerendered)
  f.api.initAnalytics()
  assert.equal(typeof f.win.gtag, 'function', `gtag exists when prerendered=${prerendered}`)
  assert.equal(f.scripts.length, 1, 'only one script is loaded')
  assert.equal(f.commands().filter(c => c[0] === 'config').length, 2, 'GA4 and Ads both configured')
  assert.equal(f.commands().filter(c => c[0] === 'event').length, 0, 'initialization does not count a lead or page view')
  f.api.initAnalytics()
  assert.equal(f.commands().filter(c => c[0] === 'config').length, 2, 'repeated initialization is idempotent')
  f.api.trackPageView('/private-chef-dubai')
  f.api.trackEvent('whatsapp_click')
  assert.equal(f.commands().filter(c => c[1] === 'page_view').length, 1)
  assert.equal(f.commands().filter(c => c[1] === 'generate_lead').length, 0, 'WhatsApp click is not a delivered lead')
  f.api.trackDeliveredQuoteLead('private-chef')
  assert.equal(f.commands().filter(c => c[1] === 'generate_lead').length, 1)
  assert.equal(f.commands().filter(c => c[1] === 'conversion').length, 1)
  console.log(`PASS ${prerendered ? 'prerendered page' : 'fresh SPA shell'} initialization and event routing`)
}

const existing = fixture(true, true)
existing.api.initAnalytics()
assert.equal(existing.win.gtag, existing.tag, 'preserve an existing gtag dispatcher')
assert.equal(existing.commands().filter(c => c[0] === 'config').length, 2)
existing.api.initAnalytics()
assert.equal(existing.commands().filter(c => c[0] === 'config').length, 2)
console.log('PASS existing Google tag dispatcher preserved')

const server = vm.createContext({ exports: {} })
vm.runInContext(compiled, server)
assert.doesNotThrow(() => server.exports.initAnalytics())
console.log('PASS server rendering remains inert')

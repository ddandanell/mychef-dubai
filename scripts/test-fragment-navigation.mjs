import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

// Exercise observable navigation behavior with a deterministic clock. In
// particular, destinations may arrive well after the old 120 ms retry window.
const source = ts.transpileModule(readFileSync('src/lib/scrollToHash.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText

function setup() {
  let now = 0
  let next = 0
  const jobs = new Map()
  const targets = new Map()
  const events = new Map()
  const observers = []
  const scrolls = []
  const time = (fn, delay) => { const id = ++next; jobs.set(id, { fn, at: now + delay }); return id }
  const addEventListener = (name, fn) => {
    if (!events.has(name)) events.set(name, new Set())
    events.get(name).add(fn)
  }
  const removeEventListener = (name, fn) => events.get(name)?.delete(fn)
  class Observer {
    constructor(fn) { this.fn = fn; this.active = true; observers.push(this) }
    observe() {}
    disconnect() { this.active = false }
  }
  const context = {
    exports: {},
    window: {
      setTimeout: time,
      clearTimeout: id => jobs.delete(id),
      addEventListener, removeEventListener,
      scrollTo: options => scrolls.push({ top: options.top, at: now }),
    },
    document: { body: {}, getElementById: id => targets.get(id), addEventListener, removeEventListener },
    requestAnimationFrame: fn => time(fn, 16),
    cancelAnimationFrame: id => jobs.delete(id),
    MutationObserver: Observer, ResizeObserver: Observer,
  }
  vm.runInNewContext(source, context)
  return {
    follow: context.exports.scrollToHash,
    scrolls,
    tick(ms) {
      const end = now + ms
      while (true) {
        const entry = [...jobs].filter(([, job]) => job.at <= end).sort((a, b) => a[1].at - b[1].at)[0]
        if (!entry) break
        const [id, job] = entry
        now = job.at; jobs.delete(id); job.fn()
      }
      now = end
    },
    insert(id) {
      targets.set(id, { getClientRects: () => [{}], scrollIntoView: () => scrolls.push({ id, at: now }) })
      observers.filter(o => o.active).forEach(o => o.fn())
    },
    event(name, event = {}) { [...(events.get(name) || [])].forEach(fn => fn(event)) },
    activeResources() { return jobs.size + observers.filter(o => o.active).length + [...events.values()].reduce((n, fns) => n + fns.size, 0) },
  }
}

{
  const page = setup()
  page.follow('#late-heading')
  page.tick(650)
  assert.equal(page.scrolls.length, 0)
  page.insert('late-heading'); page.tick(16)
  assert.equal(page.scrolls[0].id, 'late-heading')
  page.event('load'); page.tick(16)
  assert.equal(page.scrolls.length, 2, 'A late image may realign the section')
  page.tick(1500)
  assert.equal(page.activeResources(), 0, 'Settled navigation releases observers and listeners')
}
{
  const page = setup()
  page.insert('menu & service')
  page.follow('#menu%20%26%20service'); page.tick(16)
  assert.equal(page.scrolls[0].id, 'menu & service')
}
for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
  const page = setup()
  page.follow('#heading')
  page.event(event, { key: 'PageDown' })
  page.insert('heading'); page.tick(9000)
  assert.equal(page.scrolls.length, 0, `${event} gives control back to the reader`)
  assert.equal(page.activeResources(), 0)
}
{
  const page = setup()
  const cleanup = page.follow('#previous-page')
  cleanup()
  page.insert('previous-page'); page.tick(9000)
  assert.equal(page.scrolls.length, 0, 'Leaving a route cancels its pending navigation')
  assert.equal(page.activeResources(), 0)
}
{
  const page = setup()
  page.follow('#missing'); page.tick(8000)
  assert.equal(page.scrolls[0].top, 0, 'A missing fragment does not retain an unrelated page position')
  assert.equal(page.activeResources(), 0)
}
{
  const page = setup()
  page.insert('%broken')
  assert.doesNotThrow(() => page.follow('#%broken'))
  page.tick(16)
  assert.equal(page.scrolls[0].id, '%broken')
}
console.log('Fragment navigation: 9 regression cases passed.')

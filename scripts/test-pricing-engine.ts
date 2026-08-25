import { computeQuote, DEFAULT_INPUT, assistantsFor, tierFor } from '../src/content/privateChefPricing'
let fails = 0
const eq = (name: string, got: unknown, want: unknown) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) fails++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`) }

// Spec example: Professional · Kitchen on Autopilot · 5 days/week · household of 5 · long term
const q = computeQuote({ ...DEFAULT_INPUT, guests: 5 })
eq('services/month', q.servicesPerMonth, 22)
eq('tier', q.tier?.id, 'dedicated')
eq('per service (1050 × 0.88, rounded to 5)', q.perService, 925)
eq('per week', q.perWeek, 925 * 5)
eq('per month', q.perMonth, 925 * 22)
eq('chef hours / month', q.chefHoursPerMonth, 110)
eq('grocery managed', q.groceryManaged, true)
eq('assistants', q.assistants, 0)
eq('relationship', q.relationship.label, 'Dedicated household arrangement')

// Assistants
eq('16 people → 1 assistant', assistantsFor(16).assistants, 1)
eq('24 people → 2 assistants', assistantsFor(24).assistants, 2)
eq('40 people → custom', assistantsFor(40).custom, true)
const a = computeQuote({ ...DEFAULT_INPUT, guests: 14, serviceId: 'fresh-meal', daysPerWeek: 1, groceryMode: 'client' })
eq('fresh meal 1d/wk + 14 people: standard tier, +350 assistant', a.perService, 750 + 350)
eq('lines count', a.lines.length, 2)

// Grocery add-on transforms 4h prep into 5h
const p = computeQuote({ ...DEFAULT_INPUT, serviceId: 'food-prep', groceryMode: 'mychef', daysPerWeek: 2 })
eq('prep + management hours', p.hoursPerService, 5)
eq('prep + management rate (900+150, regular −4%)', p.perService, 1010)
eq('tier regular', p.tier?.id, 'regular')

// Full day: management included, full-day assistant rate
const f = computeQuote({ ...DEFAULT_INPUT, serviceId: 'full-day', chef: 'head', guests: 22, daysPerWeek: 7 })
eq('full day head 7d/wk: 1900×0.88 + 2×550', f.perService, round5(1900 * 0.88) + 1100)
eq('full day management included', f.groceryManaged, true)

// Short stay
const s = computeQuote({ ...DEFAULT_INPUT, duration: 'short', stayDays: 10, serviceId: 'fresh-meal', groceryMode: 'client' })
eq('short stay ×1.5 per service', s.perService, 1125)
eq('short stay total (10 days)', s.total, 11250)
eq('short stay no tier', s.tier, null)

// Length total
const l = computeQuote({ ...DEFAULT_INPUT, lengthId: '3' })
eq('3-month total = 3 × month', l.total, l.perMonth * 3)
eq('ongoing total null', computeQuote(DEFAULT_INPUT).total, null)
eq('tier boundaries', [tierFor(4).id, tierFor(7).id, tierFor(8).id, tierFor(15).id, tierFor(16).id, tierFor(21).id, tierFor(22).id], ['standard','standard','regular','regular','preferred','preferred','dedicated'])

function round5(n: number) { return Math.round(n / 5) * 5 }
console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS')
process.exit(fails ? 1 : 0)

import { useState } from 'react'
import { Link } from 'react-router'
import { format } from 'date-fns'
import { ArrowRight, CalendarDays, Check } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import {
  ASSISTANT_RATES,
  DEFAULT_INPUT,
  FEE_INCLUDES,
  FEE_SEPARATE,
  FREQUENCIES,
  GROCERY_MANAGEMENT_ADD_ON,
  GUESTS_MAX,
  LONG_TERM_LENGTHS,
  LONG_TERM_MIN_SERVICES,
  SERVICES,
  SHORT_STAY,
  assistantsFor,
  computeQuote,
  fmt,
  type Meal,
  type QuoteInput,
  type ServiceId,
} from '@/content/privateChefPricing'
import { CLUSTER_PATHS } from '@/content/privateChefCluster'
import { QUALITY_LEVELS } from '@/content/privateChefStandard'
import { feedbackFor, type LastChange } from './feedback'
import PlanForm from './PlanForm'
import PlanSheet from './PlanSheet'
import PlanSummary from './PlanSummary'
import Stepper from './Stepper'
import { planText } from './planText'

const WA = '971551744849'
const MEALS: { id: Meal; label: string }[] = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
]
const INDICATORS: Record<ServiceId, string[]> = {
  'fresh-meal': ['Cook'],
  'food-prep': ['Prep', 'Store'],
  autopilot: ['Plan', 'Shop', 'Cook'],
  'full-day': ['Plan', 'Shop', 'Cook', 'All day'],
}

interface CalcState {
  input: QuoteInput
  last: LastChange | null
}

const pill = 'border px-4 py-2.5 font-inter text-body-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset'
const pillOn = 'border-gold bg-cream text-gold-ink'
const pillOff = 'border-gray-200 bg-white text-gray-700 hover:border-gold/50'

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-gray-200 pt-7">
      <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink">{label}</p>
      {hint ? <p className="mt-1 mb-4 font-inter text-body-sm text-gray-500">{hint}</p> : <div className="mb-4" />}
      {children}
    </div>
  )
}

export default function PriceCalculator() {
  const [state, setState] = useState<CalcState>({ input: DEFAULT_INPUT, last: null })
  const set = <K extends keyof QuoteInput>(key: K, value: QuoteInput[K]) =>
    setState((prev) => (prev.input[key] === value ? prev : { input: { ...prev.input, [key]: value }, last: { key, from: prev.input[key], to: value } }))

  const { input, last } = state
  const quote = computeQuote(input)
  const prevQuote = last ? computeQuote({ ...input, [last.key]: last.from }) : null
  const feedback = feedbackFor(last, prevQuote, quote)
  const short = input.duration === 'short'
  const service = quote.service
  const band = assistantsFor(input.guests)
  const startDate = input.startDate ? new Date(input.startDate) : undefined
  const whatsappHref = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, here is the plan I built on your pricing page:\n\n${planText(input, quote)}`)}`

  return (
    <div id="calculator" className="scroll-mt-24">
      <div className="max-w-[720px] mb-10">
        <h2 className="font-playfair text-fluid-h2 text-black">Build your private chef plan</h2>
        <p className="mt-3 font-inter text-body-lg text-gray-500">See your estimated service cost in less than a minute.</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 items-start">
        <div className="space-y-9">
          {/* Duration — one toggle, not two boxes */}
          <div>
            <div role="group" aria-label="How long do you need a chef?" className="grid grid-cols-2 border border-gray-200">
              {[
                { id: 'short', label: `${SHORT_STAY.minDays} to ${SHORT_STAY.maxDays} days`, sub: 'Short stay' },
                { id: 'long', label: '30+ days', sub: 'Best long-term value' },
              ].map((d) => {
                const on = input.duration === d.id
                return (
                  <button
                    key={d.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => set('duration', d.id as QuoteInput['duration'])}
                    className={cn('px-4 py-4 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset', on ? 'bg-cream' : 'bg-white hover:bg-cream/40')}
                  >
                    <span className={cn('block font-playfair text-h4 leading-none', on ? 'text-gold-ink' : 'text-gray-700')}>{d.label}</span>
                    <span className={cn('mt-1.5 block font-inter text-caption uppercase tracking-[0.12em]', d.id === 'long' ? 'text-gold-ink' : 'text-gray-400')}>{d.sub}</span>
                  </button>
                )
              })}
            </div>
            <p className="mt-3 font-inter text-body-sm text-gray-500">
              {short
                ? 'For holidays, business stays and temporary residences. Temporary assignments cost more because trained staff are reserved for a shorter period with less scheduling stability.'
                : 'For recurring household service, from once a week to daily. Longer arrangements give us scheduling stability, which allows better pricing and a chef built around your household.'}{' '}
              Need a chef for one dinner or event?{' '}
              <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4">View Catering prices</Link>.
            </p>
          </div>

          {short ? (
            <Row label="How long" hint="One chef visit per day.">
              <Stepper value={input.stayDays} min={SHORT_STAY.minDays} max={SHORT_STAY.maxDays} onChange={(v) => set('stayDays', v)} label="chef days" unit="chef days" />
            </Row>
          ) : (
            <Row label="How often" hint={`From ${LONG_TERM_MIN_SERVICES} visits a month. Pick the days your home actually needs.`}>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {FREQUENCIES.map((f) => {
                  const on = input.daysPerWeek === f.days
                  return (
                    <button key={f.days} type="button" aria-pressed={on} onClick={() => set('daysPerWeek', f.days)} className={cn(pill, on ? pillOn : pillOff, 'px-2 py-3 text-center')}>
                      <span className={cn('block font-playfair text-h3 leading-none', on ? 'text-gold-ink' : 'text-gray-700')}>{f.days}</span>
                      <span className="mt-1 block font-inter text-caption text-gray-400">{f.days === 1 ? 'day/wk' : 'days/wk'}</span>
                      <span className="block font-inter text-caption text-gray-400">≈{f.perMonth} visits</span>
                    </button>
                  )
                })}
              </div>
            </Row>
          )}

          <Row label="What the chef does">
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => {
                const on = input.serviceId === s.id
                return (
                  <button key={s.id} type="button" aria-pressed={on} onClick={() => set('serviceId', s.id)} className={cn(pill, on ? pillOn : pillOff, 'p-5 text-left flex flex-col')}>
                    {s.badge ? <span className="mb-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">{s.badge}</span> : null}
                    <span className="font-playfair text-h4 leading-tight text-black">{s.name}</span>
                    <span className="mt-1 font-inter text-caption uppercase tracking-wider text-gray-400">{s.hours} hours</span>
                    <span className="mt-2 font-inter text-body-sm text-gray-600">{s.tagline}</span>
                    <span className="mt-3 flex flex-wrap items-center gap-1.5 font-inter text-caption uppercase tracking-[0.1em] text-gold-ink">
                      {INDICATORS[s.id].map((step, i) => (
                        <span key={step} className="flex items-center gap-1.5">
                          {i > 0 ? <span className="text-gray-300">→</span> : null}
                          {step}
                        </span>
                      ))}
                    </span>
                    <span className="mt-4 flex items-baseline justify-between gap-3">
                      <span className="font-playfair text-h3 leading-none text-gold-ink tabular-nums whitespace-nowrap">
                        {fmt(s.rate)}
                        <span className="ml-1 font-inter text-caption text-gray-400">/ {s.unit === 'day' ? 'day' : 'visit'}</span>
                      </span>
                      <span className="font-inter text-caption text-gray-400 whitespace-nowrap">
                        {s.hours}h · one price
                      </span>
                    </span>
                    {on ? (
                      <span className="mt-4 grid gap-1 border-t border-gold/30 pt-3">
                        {s.included.slice(0, 4).map((i) => (
                          <span key={i} className="flex items-start gap-2 font-inter text-caption text-gray-600">
                            <Check size={12} className="mt-0.5 shrink-0 text-gold-ink" />
                            {i}
                          </span>
                        ))}
                        {s.included.length > 4 ? <span className="font-inter text-caption text-gray-400">+ {s.included.length - 4} more, all in the plan</span> : null}
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </div>
            {service.asksMeal ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="mr-1 font-inter text-body-sm text-gray-500">Which meal?</span>
                {MEALS.map((m) => (
                  <button key={m.id} type="button" aria-pressed={input.meal === m.id} onClick={() => set('meal', m.id)} className={cn(pill, input.meal === m.id ? pillOn : pillOff)}>
                    {m.label}
                  </button>
                ))}
              </div>
            ) : null}
            {service.asksGrocery ? (
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button type="button" aria-pressed={input.groceryMode === 'client'} onClick={() => set('groceryMode', 'client')} className={cn(pill, input.groceryMode === 'client' ? pillOn : pillOff, 'text-left')}>
                  <span className="block font-medium">I manage the groceries</span>
                  <span className="block font-inter text-caption text-gray-500">The chef sends a shopping list · {service.hours} hours</span>
                </button>
                <button type="button" aria-pressed={input.groceryMode === 'mychef'} onClick={() => set('groceryMode', 'mychef')} className={cn(pill, input.groceryMode === 'mychef' ? pillOn : pillOff, 'text-left')}>
                  <span className="block font-medium">{service.id === 'food-prep' ? 'Upgrade to Kitchen on Autopilot' : 'myCHEF manages the groceries'}</span>
                  <span className="block font-inter text-caption text-gray-500">+{GROCERY_MANAGEMENT_ADD_ON.hours} hour of kitchen management · groceries at cost</span>
                </button>
              </div>
            ) : (
              <p className="mt-4 flex items-start gap-2 font-inter text-body-sm text-gray-600">
                <Check size={15} className="mt-1 shrink-0 text-gold-ink" />
                Grocery management included · groceries charged at actual cost, no markup.
              </p>
            )}
          </Row>

          <Row label="Who cooks" hint="One price for the job. The level is what the chef earns for doing it well — the figure below does not move.">
            <div className="grid gap-2 sm:grid-cols-3">
              {QUALITY_LEVELS.map((level) => (
                <div key={level.id} className="border border-gray-200 px-4 py-3">
                  <span className="block font-playfair text-h4 leading-none text-gold-ink">{level.name}</span>
                  <span className="mt-1 block font-inter text-caption uppercase tracking-wider text-gray-400">
                    {level.label} · {level.earnedBy}
                  </span>
                  <span className="mt-2 block font-inter text-body-sm text-gray-600">{level.meaning}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 font-inter text-body-sm text-gray-500">
              Recognising a chef is our cost, not yours. Your figure does not change.{' '}
              <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink underline underline-offset-4">How we score chefs</Link>
            </p>
          </Row>

          <Row label="People" hint="Up to eight are included. From nine, an assistant joins automatically.">
            <div className="flex flex-wrap items-center gap-6">
              <Stepper value={input.guests} min={1} max={GUESTS_MAX} onChange={(v) => set('guests', v)} label="people" unit="people" format={(v) => (v >= GUESTS_MAX ? `${GUESTS_MAX}+` : String(v))} />
              <p className="font-inter text-body-sm text-gray-600">
                <span className="text-gold-ink font-medium">{band.label}.</span>{' '}
                {quote.assistants > 0 && !quote.customStaffing
                  ? `${fmt(service.id === 'full-day' ? ASSISTANT_RATES.fullDay : ASSISTANT_RATES.short)} per assistant per ${service.unit === 'day' ? 'day' : 'visit'}, already in your figure.`
                  : quote.customStaffing
                    ? 'From 40 people we design the team with you.'
                    : 'Included in the chef price.'}
              </p>
            </div>
          </Row>

          {!short ? (
            <Row label="Start" hint="Picking a length is not a commitment — it tells us your intention so we can plan.">
              <div className="flex flex-wrap items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <button type="button" className={cn(pill, pillOff, 'inline-flex items-center gap-2')}>
                      <CalendarDays size={15} className="text-gold-ink" />
                      {startDate ? format(startDate, 'd MMM yyyy') : 'Preferred start date'}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={startDate} onSelect={(d) => set('startDate', d ? format(d, 'yyyy-MM-dd') : null)} disabled={{ before: new Date() }} />
                  </PopoverContent>
                </Popover>
                {LONG_TERM_LENGTHS.map((l) => (
                  <button key={l.id} type="button" aria-pressed={input.lengthId === l.id} onClick={() => set('lengthId', l.id)} className={cn(pill, input.lengthId === l.id ? pillOn : pillOff)}>
                    {l.label}
                  </button>
                ))}
              </div>
            </Row>
          ) : null}
        </div>

        <div className="lg:sticky lg:top-24">
          <PlanSummary input={input} quote={quote} feedback={feedback} whatsappHref={whatsappHref} />
        </div>
      </div>

      {/* Your plan is ready → the form, only now */}
      <section id="send-plan" className="mt-20 scroll-mt-24 border-t border-gray-200 pt-12 grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16 items-start">
        <div>
          <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-3">Your plan is ready</p>
          <h3 className="font-playfair text-fluid-h2 text-black mb-4">Send this plan to myCHEF.</h3>
          <p className="font-inter text-body text-gray-600 leading-relaxed">
            {quote.service.name} · {quote.shortStay ? `${input.stayDays} chef days` : `${input.daysPerWeek} day${input.daysPerWeek > 1 ? 's' : ''} a week`} ·{' '}
            <span className="text-gold-ink font-medium">{quote.shortStay ? `${fmt(quote.total ?? 0)} for the stay` : `${fmt(quote.perMonth)} a month`}</span>
          </p>
          <p className="mt-3 font-inter text-body-sm text-gray-500">A coordinator checks chef availability for your days and area, and comes back with the exact figure in writing — before anything starts.</p>
        </div>
        <PlanForm input={input} />
      </section>

      {/* What the fee covers — quiet lists, no boxes */}
      <section className="mt-16 grid gap-10 md:grid-cols-2 border-t border-gray-200 pt-10" aria-label="What the fee covers">
        <div>
          <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-4">Included in your myCHEF fee</p>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {FEE_INCLUDES.map((i) => (
              <li key={i} className="flex items-start gap-2 font-inter text-body-sm text-gray-700">
                <Check size={14} className="mt-1 shrink-0 text-gold-ink" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-4">Separate</p>
          <ul className="grid gap-1.5">
            {FEE_SEPARATE.map((i) => (
              <li key={i} className="flex items-start gap-2 font-inter text-body-sm text-gray-600">
                <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-ink/60" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-inter text-caption text-gray-500">
            Groceries and direct shopping costs are charged at actual cost — myCHEF adds no percentage.{' '}
            <Link to={CLUSTER_PATHS.planTerms} className="text-gold-ink underline underline-offset-4 inline-flex items-center gap-1">How your plan works <ArrowRight size={12} /></Link>
          </p>
        </div>
      </section>

      <PlanSheet input={input} quote={quote} feedback={feedback} whatsappHref={whatsappHref} />
    </div>
  )
}

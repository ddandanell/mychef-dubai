import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Check, Info, MessageCircle } from 'lucide-react'
import FillFrame from './FillFrame'
import QuotePair from './QuotePair'
import { Section, Container, SectionLabel } from '@/components/system'
import {
  assistantRule,
  buildAround,
  escalators,
  formatAed,
  formatChooser,
  formatsIntro,
  groceryAddOn,
  groceryModes,
  householdIncludes,
  mealChoices,
  mealServiceRule,
  mixPhoto,
  oneMonth,
  peopleBands,
  priceFactors,
  serviceFormats,
  specialists,
  teamWorkload,
  timeROI,
  transportZones,
  whereMoneyGoes,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
  workingHours,
} from '@/content/privateChefPage'
import { CLUSTER_PATHS } from '@/content/privateChefCluster'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function HouseholdPricingSection() {
  const [format, setFormat] = useState<(typeof serviceFormats)[number]['id']>('prep')
  const [days, setDays] = useState(5)
  const [groceries, setGroceries] = useState<'mine' | 'mychef'>('mine')
  const [meals, setMeals] = useState<string[]>(['dinner'])
  const [zone, setZone] = useState(0)
  const [people, setPeople] = useState<(typeof peopleBands)[number]['id']>('p6')
  const [planLength, setPlanLength] = useState<'monthly' | 'short'>('monthly')

  const toggleMeal = (id: string) => {
    setMeals((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((m) => m !== id) : prev
      }
      return mealChoices.filter((m) => [...prev, id].includes(m.id)).map((m) => m.id)
    })
  }

  const calc = useMemo(() => {
    const fmt = serviceFormats.find((f) => f.id === format) ?? serviceFormats[0]
    const withGroceries = format === 'prep' && groceries === 'mychef'
    let perService: number = fmt.perService
    let planName: string = fmt.name
    let hours: string = fmt.hours
    if (withGroceries) {
      perService = groceryAddOn.perService
      planName = groceryAddOn.planName
      hours = groceryAddOn.hours
    } else if (format === 'dinner') {
      const extra = meals.length - 1
      perService = mealServiceRule.basePrice + mealServiceRule.extraPrice * extra
      const h = mealServiceRule.baseHours + mealServiceRule.extraHours * extra
      hours = `Up to ${h} hours`
      planName = `${mealChoices.filter((m) => meals.includes(m.id)).map((m) => m.label).join(' + ')} Service`
    }
    const zoneInfo = transportZones.zones[zone] ?? transportZones.zones[0]
    const band = peopleBands.find((b) => b.id === people) ?? peopleBands[0]
    const isLead = band.assistants < 0
    const assistantEach = Math.ceil((perService * 0.25) / 5) * 5
    const assistantsFee = isLead ? 0 : assistantEach * band.assistants
    const isShort = planLength === 'short'
    const serviceAndTeam = Math.round((perService + assistantsFee) * (isShort ? 1.5 : 1))
    const perServiceTotal = serviceAndTeam + zoneInfo.fee
    return {
      fmt,
      withGroceries,
      perService,
      perServiceTotal,
      serviceAndTeam,
      assistantEach,
      assistantsFee,
      band,
      isLead,
      isShort,
      zoneInfo,
      planName,
      hours,
      weekly: perServiceTotal * days,
      monthly: perServiceTotal * 4 * days,
    }
  }, [format, days, groceries, meals, zone, people, planLength])

  return (
    <Section id="household" tone="ivory">
      <Container>
          <div className="max-w-[760px] mb-10">
            <SectionLabel>Home Chef Dubai prices</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-4">Household plan prices, built from the role</h2>
            {buildAround.paras.map((para) => (
              <p key={para.slice(0, 40)} className="font-inter text-body text-gray-500 leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
              This calculator is <strong className="font-medium text-black">home chef Dubai prices</strong> for a standing household chef — a chef who comes back, not a one-night booking. Displayed figures are Professional Chef on an ongoing monthly plan. If the role needs a Senior Chef, you see the difference before you book. The exact figure comes in writing, itemised, before you commit.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Independent licensed partners cook. myCHEF organises the service. You do not need a full day if you only want breakfast. Groceries stay at cost. A birthday, a yacht or a single dinner is a different product — see{' '}
              <Link to="/private-chef-prices-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">event prices</Link>
              {' '}and{' '}
              <Link to="/catering-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">catering</Link>.
            </p>
          </div>
          {/* Service formats */}
          <div id="formats" className="mb-12 scroll-mt-24">
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{formatsIntro.eyebrow}</p>
            <h3 className="font-playfair text-h3 text-black mb-4 max-w-[720px]">{formatsIntro.title}</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-8 max-w-[760px]">{formatsIntro.body}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {serviceFormats.map((item) => (
                <div key={item.id} className={`bg-white border p-6 flex flex-col ${item.tag ? 'border-gold/40' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-3 min-h-[24px]">
                    <p className="font-inter text-caption uppercase tracking-wider text-gold-ink">{item.ask}</p>
                    {item.tag && (
                      <span className="px-2 py-0.5 border border-gold/40 font-inter text-caption uppercase tracking-wider text-gold-ink">{item.tag}</span>
                    )}
                  </div>
                  <h4 className="font-playfair text-h4 text-black mb-1">{item.name}</h4>
                  <p className="font-inter text-body-sm text-gray-500 mb-3">{item.hours}</p>
                  <p className="font-playfair text-h4 text-black mb-4">From {formatAed(item.perService)} <span className="font-inter text-body-sm text-gray-500">/ service</span></p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">{item.body}</p>
                  <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">What’s included</p>
                  <ul className="space-y-2 mb-5">
                    {item.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <Check size={14} className="text-gold-ink mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-caption text-gray-500 leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto font-inter text-body-sm text-black leading-relaxed border-t border-gray-100 pt-4">
                    <span className="text-gold-ink">Choose this if:</span> {item.chooseIf}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-200 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink">{formatChooser.eyebrow}</p>
                <h4 className="font-playfair text-h4 text-black">{formatChooser.title}</h4>
              </div>
              <div className="space-y-2.5 mb-5">
                {formatChooser.rows.map((row) => (
                  <div key={row.pick} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-gray-100 pb-2.5">
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed flex-1">“{row.situation}”</p>
                    <p className="font-inter text-body-sm text-black whitespace-nowrap">→ {row.pick}</p>
                  </div>
                ))}
              </div>
              <p className="font-inter text-body-sm text-gray-500">{formatChooser.closer}</p>
            </div>
          </div>
          {/* Calculator */}
          <div id="calculator" className="bg-white border border-gray-200 p-6 md:p-10 mb-6 scroll-mt-24">
            <h3 className="font-playfair text-h3 text-black mb-2">Build your household price</h3>
            <p className="font-inter text-body-sm text-gray-500 mb-8">Six quick choices — format, people, days, zone, groceries, plan length. The figure includes the team and the chef’s transport.</p>
            <div className="space-y-8 mb-8">
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">1 · How do you want to use your chef?</legend>
                <div className="grid sm:grid-cols-3 gap-3">
                  {serviceFormats.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormat(item.id)}
                      className={`p-4 text-left border transition-colors relative ${
                        format === item.id ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                      }`}
                    >
                      <Info size={14} className={`absolute top-3 right-3 ${format === item.id ? 'text-gold-ink' : 'text-gray-300'}`} aria-hidden />
                      <span className="block font-inter text-body text-black mb-0.5 pr-6">{item.name}</span>
                      <span className="block font-inter text-caption uppercase tracking-wider text-gold-ink mb-1.5">{item.hours}</span>
                      <span className="block font-inter text-caption text-gray-500 leading-relaxed">{item.ask}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-3 border border-gray-200 bg-cream p-4">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2 flex items-center gap-1.5">
                    <Info size={13} aria-hidden /> Included in {calc.fmt.name}
                  </p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                    {calc.fmt.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Check size={13} className="text-gold-ink mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-caption text-gray-500">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {format === 'dinner' && (
                  <div className="mt-3">
                    <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Which meals should the chef serve?</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {mealChoices.map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => toggleMeal(m.id)}
                          className={`px-4 py-2 font-inter text-body-sm border transition-colors ${
                            meals.includes(m.id) ? 'bg-gold text-black border-gold' : 'border-gray-300 text-gray-600 hover:border-gold'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                    <p className="font-inter text-caption text-gray-400 leading-relaxed max-w-[640px]">{mealServiceRule.note}</p>
                  </div>
                )}
              </fieldset>
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">2 · How many people?</legend>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                  {peopleBands.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setPeople(b.id)}
                      className={`p-3 text-left border transition-colors ${
                        people === b.id ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                      }`}
                    >
                      <span className="block font-inter text-body-sm text-black mb-0.5">{b.label}</span>
                      <span className="block font-inter text-caption text-gray-500">{b.sub}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 font-inter text-caption text-gray-400 leading-relaxed max-w-[720px]">{assistantRule.note}</p>
              </fieldset>
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">3 · How many days per week?</legend>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDays(d)}
                      className={`w-11 py-2 font-inter text-body-sm border transition-colors ${
                        days === d ? 'bg-gold text-black border-gold' : 'border-gray-300 text-gray-600 hover:border-gold'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <p className="mt-2 font-inter text-caption text-gray-400">seven-day households use chef rotation — consistent quality needs rest days</p>
              </fieldset>
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">4 · Where in Dubai are you?</legend>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {transportZones.zones.map((z, i) => (
                    <button
                      key={z.zone}
                      type="button"
                      onClick={() => setZone(i)}
                      className={`p-3.5 text-left border transition-colors ${
                        zone === i ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                      }`}
                    >
                      <span className="block font-inter text-body-sm text-black mb-1">{z.zone}</span>
                      <span className="block font-inter text-caption text-gray-500 leading-relaxed">{z.areas}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 font-inter text-caption text-gray-400">
                  Your zone sets the chef’s transport per visit ({formatAed(calc.zoneInfo.fee)} for {calc.zoneInfo.zone.toLowerCase()}) — included in the price you see, from the published formula below.
                </p>
              </fieldset>
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">5 · Who should handle the groceries?</legend>
                {format === 'prep' ? (
                  <>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {([
                        ['mine', groceryAddOn.optionMine],
                        ['mychef', groceryAddOn.optionMychef],
                      ] as const).map(([key, opt]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setGroceries(key)}
                          className={`p-4 text-left border transition-colors ${
                            groceries === key ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                          }`}
                        >
                          <span className="block font-inter text-body text-black mb-0.5">{opt.label}</span>
                          <span className="block font-inter text-caption uppercase tracking-wider text-gold-ink mb-1.5">{opt.sub}</span>
                          <span className="block font-inter text-caption text-gray-500 leading-relaxed">{opt.body}</span>
                        </button>
                      ))}
                    </div>
                    {calc.withGroceries && (
                      <p className="mt-3 font-inter text-body-sm text-gray-500 leading-relaxed border-l-2 border-gold pl-4">
                        3 hours → 5 hours. {groceryAddOn.explainer}
                      </p>
                    )}
                    <p className="mt-3 font-inter text-caption text-gray-400 leading-relaxed max-w-[720px]">
                      {groceryAddOn.boundary}
                    </p>
                  </>
                ) : (
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed max-w-[640px]">
                    {format === 'dinner'
                      ? 'You provide the groceries for Dinner Service. Want the whole food process taken over? That is Daily Prep + Grocery Management.'
                      : 'For a Full-Day Chef, shopping can be arranged within the day’s nine hours — agreed in your plan.'}
                  </p>
                )}
              </fieldset>
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">6 · How long do you need the service?</legend>
                <div className="grid sm:grid-cols-2 gap-3 max-w-[640px]">
                  <button
                    type="button"
                    onClick={() => setPlanLength('monthly')}
                    className={`p-4 text-left border transition-colors ${
                      planLength === 'monthly' ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                    }`}
                  >
                    <span className="block font-inter text-body text-black mb-0.5">One month or longer</span>
                    <span className="block font-inter text-caption text-gray-500 leading-relaxed">The displayed rates. Billed monthly.</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlanLength('short')}
                    className={`p-4 text-left border transition-colors ${
                      planLength === 'short' ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                    }`}
                  >
                    <span className="block font-inter text-body text-black mb-0.5">Under one month</span>
                    <span className="block font-inter text-caption text-gray-500 leading-relaxed">1.5× the service rate — the setup work is the same, recovered over fewer days. Transport stays at the normal zone rate.</span>
                  </button>
                </div>
              </fieldset>
            </div>
            <div className="border border-gold/40 bg-gold/5 p-6 md:p-8">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-1.5">Your plan</p>
              {calc.isLead ? (
                <>
                  <p className="font-playfair text-h4 text-black mb-3">50+ people is a Lead Chef event — not a household plan</p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4 max-w-[720px]">
                    At this size a Lead Chef runs a full team of chefs and assistants, the menu is designed for the occasion, and everything is included in one event price. We do not publish a price for this — it is arranged directly.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 font-inter text-body-sm uppercase tracking-wider bg-gold text-black hover:bg-gold/85 transition-colors"
                  >
                    <MessageCircle size={15} aria-hidden />
                    Reach out for access
                  </a>
                </>
              ) : (
                <>
                  <p className="font-playfair text-h4 text-black mb-4">
                    {calc.planName} · {calc.hours.toLowerCase().replace('up to ', '')}/day · {days} {days === 1 ? 'day' : 'days'}/week · {calc.band.label} people
                    {calc.band.assistants > 0 && ` · chef + ${calc.band.assistants} assistant${calc.band.assistants > 1 ? 's' : ''}`}
                    {calc.isShort && ' · short-stay rate'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="border border-gray-200 bg-white p-4">
                      <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-1.5">Per service day</p>
                      <p className="font-playfair text-h3 text-black">{formatAed(calc.perServiceTotal)}</p>
                      <p className="font-inter text-caption text-gray-400 mt-1">
                        {formatAed(calc.perService)} service
                        {calc.band.assistants > 0 && ` + ${formatAed(calc.assistantsFee)} assistant${calc.band.assistants > 1 ? 's' : ''}`}
                        {calc.isShort && ' × 1.5'}
                        {' '}+ {formatAed(calc.zoneInfo.fee)} transport
                      </p>
                    </div>
                    <div className="border border-gray-200 bg-white p-4">
                      <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-1.5">Per week · {days} {days === 1 ? 'day' : 'days'}</p>
                      <p className="font-playfair text-h3 text-black">{formatAed(calc.weekly)}</p>
                    </div>
                    <div className="border border-gold bg-white p-4">
                      <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-1.5">
                        {calc.isShort ? '4-week equivalent' : 'Per month — what you pay'}
                      </p>
                      <p className="font-playfair text-h3 text-black">{formatAed(calc.monthly)}</p>
                    </div>
                  </div>
                  <p className="font-inter text-body-sm text-gray-500 mb-4">
                    {calc.isShort
                      ? 'Short stays are billed for your actual dates at the short-stay rate — the weekly figure is the one to plan with.'
                      : 'Everybody pays monthly — the day and week figures are there so you can see exactly how the month is built.'}
                  </p>
                  <div className="space-y-1">
                    <p className="font-inter text-body-sm text-gray-500">
                      Chef transport to {calc.zoneInfo.zone} is included in these figures — {formatAed(calc.zoneInfo.fee)} per visit, from the published zone formula below.
                    </p>
                    {calc.withGroceries ? (
                      <p className="font-inter text-body-sm text-gray-500">Groceries charged separately at cost. {groceryAddOn.principle}</p>
                    ) : (
                      <p className="font-inter text-body-sm text-gray-500">Groceries at actual cost. Always.</p>
                    )}
                    <p className="font-inter text-body-sm text-gray-500">Prices shown before VAT — 5% VAT appears separately on your invoice.</p>
                  </div>
                  <div className="mt-5 border-t border-gold/30 pt-4">
                    <p className="font-inter text-body-sm text-black mb-1 flex items-center gap-1.5"><Info size={14} className="text-gold-ink" aria-hidden /> Why this number</p>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                      This is a monthly-plan price. Staying under one month costs 1.5× — because the start is where the work is: your Food Profile, the chef match, introductions and household setup, plus the administration a placement in Dubai really involves. Monthly clients let us spread that across the relationship. The full explanation is just below.
                    </p>
                  </div>
                  <div className="mt-4 border-t border-gold/30 pt-4">
                    <p className="font-inter text-body-sm text-black mb-2">{escalators.title}</p>
                    <ul className="space-y-1.5 mb-2">
                      {escalators.items.map((item) => (
                        <li key={item.slice(0, 30)} className="flex items-start gap-2.5">
                          <Check size={14} className="text-gold-ink mt-0.5 flex-shrink-0" />
                          <span className="font-inter text-body-sm text-gray-500 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-inter text-body-sm text-black">{escalators.closer}</p>
                  </div>
                </>
              )}
            </div>
            <p className="font-inter text-body-sm text-gray-500 mt-8 mb-4 text-center">
              This is your plan. Send it to us and we will confirm the exact number in writing.
            </p>
            <QuotePair inquiryLabel="Get this figure in writing" />
          </div>
          {/* What you get back — time ROI */}
          <div className="bg-black text-white p-6 md:p-10 mb-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
              <div>
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{timeROI.eyebrow}</p>
                <h3 className="font-playfair text-h3 text-white mb-4">{timeROI.title}</h3>
                <p className="font-inter text-body text-gray-300 leading-relaxed mb-6">{timeROI.intro}</p>
                <ol className="space-y-3 mb-6">
                  {timeROI.loop.map((item, i) => (
                    <li key={item.step} className="flex items-start gap-4 border border-gold/20 bg-white/[0.03] px-5 py-3.5">
                      <p className="font-playfair text-h4 text-gold leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</p>
                      <div>
                        <p className="font-inter text-body text-white mb-0.5">{item.step}</p>
                        <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="border-l-2 border-gold pl-5">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{timeROI.math.label}</p>
                  <p className="font-inter text-body-sm text-gray-300 leading-relaxed">{timeROI.math.body}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-playfair text-h3 text-white mb-4">{timeROI.roi.title}</h4>
                <p className="font-inter text-body text-gray-300 leading-relaxed mb-6">{timeROI.roi.intro}</p>
                <ul className="space-y-4 mb-8">
                  {timeROI.roi.returns.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                      <span className="font-inter text-body text-gray-200 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-playfair text-h4 text-white leading-snug">
                  {timeROI.roi.closer.split('. ')[0]}.{' '}
                  <span className="text-gold">{timeROI.roi.closer.split('. ').slice(1).join('. ')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Why one month + short-stay pricing */}
          <div className="bg-white border border-gold/30 p-6 md:p-8 mb-12">
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{oneMonth.eyebrow}</p>
            <h4 className="font-playfair text-h4 text-black mb-3">{oneMonth.title}</h4>
            <div className="max-w-[820px]">
              {oneMonth.paras.map((para) => (
                <p key={para.slice(0, 40)} className="font-inter text-body-sm text-gray-500 leading-relaxed mb-3 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
          <div id="price-logic" className="bg-black text-white p-6 md:p-10 mb-12 scroll-mt-24">
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{priceFactors.eyebrow}</p>
            <h3 className="font-playfair text-h3 text-white mb-8">{priceFactors.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {priceFactors.factors.map((factor, i) => (
                <div key={factor.label} className="border border-gold/25 p-5 bg-white/[0.03]">
                  <p className="font-playfair text-h4 text-gold mb-2">{String(i + 1).padStart(2, '0')}</p>
                  <p className="font-inter text-body text-white mb-2">{factor.label}</p>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
            <p className="font-playfair text-h4 text-white leading-snug mb-4 max-w-[820px]">{priceFactors.formula}</p>
            <p className="font-inter text-body text-gray-300 leading-relaxed mb-6 max-w-[760px]">{priceFactors.groceriesLine}</p>
            <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-8 max-w-[760px]">{priceFactors.transition}</p>
            <QuotePair className="items-start" />
          </div>

          {/* Working hours */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-6 md:p-8">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{workingHours.eyebrow}</p>
              <h3 className="font-playfair text-h3 text-black mb-4">{workingHours.title}</h3>
              {workingHours.intro.map((para) => (
                <p key={para.slice(0, 40)} className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">{para}</p>
              ))}
              <ul className="space-y-3 mb-5">
                {workingHours.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                    <span className="font-inter text-body-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-inter text-body-sm text-black">{workingHours.closer}</p>
            </div>
            <div id="groceries" className="bg-white border border-gray-200 p-6 md:p-8 scroll-mt-24">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{groceryModes.eyebrow}</p>
              <h3 className="font-playfair text-h3 text-black mb-4">{groceryModes.title}</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-5">{groceryModes.intro}</p>
              <div className="space-y-4 mb-6">
                {groceryModes.modes.map((mode) => (
                  <div key={mode.label} className="border border-gray-200 p-5">
                    <p className="font-inter text-body text-black mb-2">{mode.label}</p>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{mode.body}</p>
                  </div>
                ))}
              </div>
              <dl className="space-y-3 mb-5">
                {groceryModes.costs.map((cost) => (
                  <div key={cost.k} className="border-b border-gray-100 pb-2.5">
                    <dt className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-1">{cost.k}</dt>
                    <dd className="font-inter text-body-sm text-black leading-relaxed">{cost.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="border border-gray-200 p-5 mb-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{groceryModes.paymentProcess.label}</p>
                <ol className="space-y-2.5">
                  {groceryModes.paymentProcess.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <p className="font-playfair text-body text-gold-ink leading-snug">{String(i + 1).padStart(2, '0')}</p>
                      <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="font-inter text-body-sm text-gray-500">{groceryModes.closer}</p>
            </div>
          </div>
          {/* Transport zones */}
          <div id="transport" className="bg-white border border-gray-200 p-6 md:p-10 mb-12 scroll-mt-24">
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{transportZones.eyebrow}</p>
            <h3 className="font-playfair text-h3 text-black mb-4 max-w-[720px]">{transportZones.title}</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-8 max-w-[760px]">{transportZones.intro}</p>
            <p className="sm:hidden font-inter text-caption uppercase tracking-wider text-gray-400 mb-2">Swipe to see the full table →</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="py-3 pr-6 font-inter text-caption uppercase tracking-wider text-gold-ink">Zone</th>
                    <th className="py-3 pr-6 font-inter text-caption uppercase tracking-wider text-gold-ink">Areas</th>
                    <th className="py-3 pr-6 font-inter text-caption uppercase tracking-wider text-gold-ink">Typical taxi</th>
                    <th className="py-3 font-inter text-caption uppercase tracking-wider text-gold-ink">Transport / service</th>
                  </tr>
                </thead>
                <tbody>
                  {transportZones.zones.map((z) => (
                    <tr key={z.zone} className="border-b border-gray-200 align-top">
                      <td className="py-3.5 pr-6 font-inter text-body text-black whitespace-nowrap">{z.zone}</td>
                      <td className="py-3.5 pr-6 font-inter text-body-sm text-gray-500 leading-relaxed">{z.areas}</td>
                      <td className="py-3.5 pr-6 font-inter text-body-sm text-gray-500 whitespace-nowrap">{z.taxi}</td>
                      <td className="py-3.5 font-inter text-body text-black whitespace-nowrap">{formatAed(z.fee)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="space-y-2 max-w-[760px]">
              {transportZones.notes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                  <span className="font-inter text-body-sm text-gray-500 leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Specialists + team */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-6 md:p-8">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{specialists.eyebrow}</p>
              <h3 className="font-playfair text-h3 text-black mb-4">{specialists.title}</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-5">{specialists.body}</p>
              <div className="flex flex-wrap gap-2">
                {specialists.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 border border-gray-200 font-inter text-caption uppercase tracking-wider text-gray-600">{item}</span>
                ))}
              </div>
              <p className="mt-5 font-inter text-body-sm text-gray-500">Quoted separately when required.</p>
            </div>
            <div className="bg-white border border-gray-200 overflow-hidden">
              <FillFrame
                src={mixPhoto.src}
                alt={mixPhoto.alt}
                width={mixPhoto.width}
                height={mixPhoto.height}
                className="aspect-[16/9] w-full"
                objectPosition="center 35%"
              />
              <div className="p-6 md:p-8">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{teamWorkload.eyebrow}</p>
                <h3 className="font-playfair text-h3 text-black mb-4">{teamWorkload.title}</h3>
                {teamWorkload.paras.map((para) => (
                  <p key={para.slice(0, 40)} className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4 last:mb-0">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Where your money goes */}
          <div className="bg-white border border-gray-200 p-6 md:p-10 mb-12">
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{whereMoneyGoes.eyebrow}</p>
            <h3 className="font-playfair text-h3 text-black mb-4 max-w-[720px]">{whereMoneyGoes.title}</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6 max-w-[720px]">{whereMoneyGoes.intro}</p>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {whereMoneyGoes.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                  <span className="font-inter text-body-sm text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="font-playfair text-h3 text-black mb-4">Every standard service includes</h3>
              <ul className="space-y-3">
                {householdIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                    <span className="font-inter text-body-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-inter text-body-sm text-gray-500">The difference between levels is primarily the chef. See how Professional, Senior and Specialist are earned on{' '}
                <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink hover:text-gold-light underline underline-offset-4">Our Chefs</Link>.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="font-playfair text-h3 text-black mb-4">How we match the chef</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                You do not pick a level from a menu. You describe the house. We calculate the role, recommend the chef, and you approve the profile before anyone starts.
              </p>
              <Link to={CLUSTER_PATHS.ourChefs} className="font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
                See how chefs are selected and matched →
              </Link>
            </div>
          </div>

          <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
            Everyday, keep the chef level that makes sense for the house; for a special occasion, add the right specialist for one meal. Selection and matching are on{' '}
            <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink hover:text-gold-light underline underline-offset-4">Our Chefs</Link>
            . What the standing plan includes — Food Profile and backup — is on{' '}
            <Link to={CLUSTER_PATHS.howItWorks} className="text-gold-ink hover:text-gold-light underline underline-offset-4">How It Works</Link>
            . Events sit on top of the household arrangement — a birthday or a{' '}
            <Link to="/yachts" className="text-gold-ink hover:text-gold-light underline underline-offset-4">yacht party</Link>
            {' '}is one complete event price. One night is{' '}
            <Link to="/private-chef-prices-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">event prices</Link>
            {' '}or{' '}
            <Link to="/catering-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">catering</Link>
            . If you want food handled without a chef in the house every day,{' '}
            <Link to="/weekly-meal-prep-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">weekly meal prep</Link>
            {' '}is the lighter version.
          </p>
      </Container>
    </Section>
  )
}

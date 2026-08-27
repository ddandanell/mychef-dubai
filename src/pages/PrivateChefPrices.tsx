// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-prices-dubai
//     primary:     "private chef dubai price"
//     subkeywords: "private chef cost dubai" · "how much is a private chef in dubai" · "private chef dubai rates" · "cost of private chef dubai" · "private chef for dinner party" · "average cost of personal chef in dubai" · "personal chef services rates dubai" · "private chef catering" · "private chef dubai price per day" · "part time private chef catering dubai price" · "part time cook for home dubai cost"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Users,
  ChefHat,
  UtensilsCrossed,
  Leaf,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Check,
  Banknote,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import PriceCalculator from '../components/private-chef/pricing/PriceCalculator'
import PlanTermsDigest from '../components/private-chef/pricing/PlanTermsDigest'
import { SERVICES } from '../content/privateChefPricing'
import {
  CANCEL_NOTICE_HOURS,
  EMPLOYMENT,
  HOUSEHOLD_JOBS,
  MONTH_EXAMPLE,
  MONTH_SENTENCE,
  OVERTIME_RULE,
  QUALITY_LEVELS,
  THE_LINE,
} from '../content/privateChefStandard'
import { CLUSTER_PATHS } from '../content/privateChefCluster'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a private chef quote for my event (via mychef.ae/private-chef-prices-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/**
 * This URL is the household price. One night — a dinner party, a birthday, a villa full of
 * guests — is catering, and its per-person table lives on /catering-dubai. Selling both here
 * taught the client, the supplier and the cook three different products on one page.
 */
const jobTable = HOUSEHOLD_JOBS.map((job) => ({
  name: job.name,
  hours: `${job.hours} hours`,
  price: `AED ${job.rate.toLocaleString('en-AE')}`,
  unit: job.unit === 'day' ? 'a day' : 'a visit',
  what: job.tagline,
}))

const includedItems = [
  'The same chef, matched to how this house eats and cooks',
  'The Food Profile — what is loved, refused, allergic, and how the kitchen is left',
  'Backup when your chef is off, briefed from that profile before they arrive',
  'The review after service, and a new match if the fit is wrong',
  'Kitchen handed back the way it was found, every visit',
]

const costFactors = [
  {
    icon: UtensilsCrossed,
    title: 'Which job',
    description: 'Fresh Meal, Food Prep, Kitchen on Autopilot or a Full Day. The job decides the hours and the price; the chef’s level never does.',
  },
  {
    icon: Clock,
    title: 'How many days',
    description: 'From one day a week upward. At five days and above the household rate improves, because the chef’s week is substantially reserved for one house.',
  },
  {
    icon: Leaf,
    title: 'Groceries',
    description: 'Yours or ours. Charged at the actual receipts with no markup; letting us run them adds an hour of kitchen management on the shorter services.',
  },
  {
    icon: Users,
    title: 'People in the house',
    description: 'Up to eight are in the chef price. From nine an assistant joins automatically — one to 19, two to 29, three to 39.',
  },
  {
    icon: Clock,
    title: 'Time that runs over',
    description: OVERTIME_RULE,
  },
  {
    icon: MapPin,
    title: 'Where you are',
    description: 'Most Dubai homes carry no surcharge. Remote areas, or a kitchen that needs equipment brought in, are shown as their own line before you agree.',
  },
]

const relatedLinks = [
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Per-person budgets for every catering format.' },
  { title: 'Catering Cost Calculator', link: '/catering-cost-calculator-dubai', description: 'Estimate your event catering budget in minutes.' },
  { title: 'How to Choose a Caterer', link: '/how-to-choose-caterer-dubai', description: 'A checklist for comparing caterers in Dubai.' },
]

const faqs = [
  {
    q: 'What is the private chef Dubai price for a household?',
    a: `One price per job, whoever cooks it: Fresh Meal (3 hours) AED 750, Private Chef Food Prep (4h) AED 900, Kitchen on Autopilot (5h) AED 1,050, and a Full-Day Private Chef (9h) AED 1,500. There is no more expensive grade of chef to be upgraded to — what has levels is the chef’s own pay. Anyone comparing private chef Dubai rates or the cost of private chef Dubai will find those four numbers and nothing hidden underneath them.`,
  },
  {
    q: 'How much is a private chef in Dubai per month?',
    a: `${MONTH_SENTENCE} ${MONTH_EXAMPLE.longMonthNote} One day a week is AED 3,000 a month; five days of Kitchen on Autopilot is AED 18,500 and a Full-Day chef five days a week is AED 26,400. The calculator on this page produces exactly those figures — there is not a second set for the brochure.`,
  },
  {
    q: 'What does the private chef Dubai price per day cover?',
    a: 'The chef’s hours for that job, the menu work around them, the Food Profile, backup when they are off, the review after service, and the kitchen left the way it was found. Groceries are separate and charged at the actual receipts. VAT at 5% is shown on its own line. People search this as the average cost of personal chef in Dubai or personal chef services rates Dubai — same service, same four prices.',
  },
  {
    q: 'Is a part-time cook for home in Dubai cheaper than a full-time hire?',
    a: 'Usually, because you pay for the days the house actually needs instead of a full salary, a visa and the unpaid work of finding cover. A part time cook for home Dubai cost starts at AED 3,000 a month for one Fresh Meal a week and rises with the days you book. A direct hire looks cheaper per hour until the first week someone is ill.',
  },
  {
    q: 'What if I want a private chef for a dinner party?',
    a: 'That is catering, and it is priced per person rather than per visit — from AED 90 for drop-off to AED 700–950 for a chef-led plated dinner. A private chef for dinner party evenings, private chef catering for a birthday, or a part time private chef catering Dubai price for one night all live on [catering](/catering-dubai). This page is for a chef who comes back.',
  },
  {
    q: 'Who employs the chef?',
    a: 'A licensed supplier employs your chef on a proper visa we have asked to see. We match the person to the house, manage the arrangement, score the work and pay the quality extra to the cook. You never put a chef on your payroll, and nobody invoices your villa personally.',
  },
  {
    q: 'Can I move a visit?',
    a: `Yes — with at least ${CANCEL_NOTICE_HOURS} hours’ notice a scheduled visit moves within the same billing month, subject to availability. Less than that and the visit stays chargeable, because the chef’s day was already held for your house. The supplier who employs the chef works to the same ${CANCEL_NOTICE_HOURS} hours, so nobody is told two different rules.`,
  },
  {
    q: 'What happens when a day runs long?',
    a: OVERTIME_RULE,
  },
  {
    q: 'Do I have to buy the groceries?',
    a: 'Your choice. Provide them yourself and the chef’s hours go entirely into cooking; hand them over and the shopping, the receipts and the inventory become part of the job. Either way groceries are charged at the exact receipts with no markup, and Kitchen on Autopilot and the Full Day already include the management hour.',
  },
  {
    q: 'Can I change my chef?',
    a: 'Yes. A wrong match is changed, and the Food Profile stays with the household so the next chef is not starting from zero. A chef whose scores fall below the standard stops working in houses through us — that is the same ladder they are paid on.',
  },
  {
    q: 'How long is the commitment?',
    a: 'Long-term plans begin at 30 days and at least four visits a month. A short stay of 3–29 days is possible at a higher daily rate, because trained staff are reserved for a short, less stable period. Nothing auto-renews into a longer term than you agreed.',
  },
  {
    q: 'Is weekly meal prep cheaper per meal than cooking every day?',
    a: 'Per plate, yes. [Weekly meal prep](/weekly-meal-prep-dubai) is the Food Prep job — four hours, AED 900 — used once or twice a week to cook forward, which spreads the chef’s time across more meals than a fresh dinner every night. If the goal is healthy daily eating rather than a table full of guests, that is the cheapest shape of this service.',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Private Chef Prices Dubai',
  provider: { '@id': 'https://www.mychef.ae/#organization' },
  areaServed: { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
  description: 'Household private chef prices in Dubai: one price per job, per visit, with groceries charged at cost. A one-night dinner party is catering.',
  url: 'https://www.mychef.ae/private-chef-prices-dubai',
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
    { '@type': 'ListItem', position: 3, name: 'Private Chef Prices Dubai', item: 'https://www.mychef.ae/private-chef-prices-dubai' },
  ],
}

/**
 * Standing household plans (3+ days) — the plan builder used to live on
 * /private-chef-prices-dubai. That URL 301s here since 2026-08-26 so one page
 * owns every private-chef price query; the calculator moved with it.
 */
const householdServiceSchema = {
  '@type': 'Service',
  name: 'Private chef — household plans (3+ days)',
  url: 'https://www.mychef.ae/private-chef-prices-dubai#calculator',
  provider: { '@id': 'https://www.mychef.ae/#organization' },
  areaServed: { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
  offers: SERVICES.map((svc) => ({
    '@type': 'Offer',
    name: `${svc.name} (${svc.hours}h)`,
    priceCurrency: 'AED',
    price: String(svc.rate),
    unitText: svc.unit === 'day' ? 'DAY' : 'SERVICE',
  })),
}

const aggregateOfferSchema = {
  '@type': 'AggregateOffer',
  name: 'Private Chef Prices Dubai — household plans',
  description:
    'Household private chef prices in Dubai: one price per job, from AED 750 for a 3-hour Fresh Meal to AED 1,500 for a full day. Groceries at actual cost. One night with guests is catering.',
  url: 'https://www.mychef.ae/private-chef-prices-dubai',
  priceCurrency: 'AED',
  lowPrice: String(HOUSEHOLD_JOBS[0].rate),
  highPrice: String(HOUSEHOLD_JOBS[HOUSEHOLD_JOBS.length - 1].rate),
  offers: HOUSEHOLD_JOBS.map((job) => ({
    '@type': 'Offer',
    name: `${job.name} (${job.hours}h)`,
    description: job.tagline,
    url: 'https://www.mychef.ae/private-chef-prices-dubai#calculator',
    price: String(job.rate),
    priceCurrency: 'AED',
    availability: 'https://schema.org/InStock',
  })),
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, aggregateOfferSchema, householdServiceSchema, faqSchema, breadcrumbSchema],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like private chef prices for my event in Dubai. Date: __ Guests: __ Area: __"
export default function PrivateChefPrices() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Defer below-the-fold ScrollTrigger animations so they do not contend
    // with LCP/INP during the initial load.
    deferNonCritical(() => {
      gsap.to('.prices-section', {
        scrollTrigger: { trigger: '.prices-content', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })

      gsap.to('.prices-faq-item', {
        scrollTrigger: { trigger: '.prices-faq', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
      })

      gsap.to('.prices-cta', {
        scrollTrigger: { trigger: '.prices-cta', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef Dubai Price | AED 750–1,500 a Visit | myCHEF"
        description="2026 private chef Dubai price for a household: AED 750 a visit for a fresh meal up to AED 1,500 for a full day, groceries at cost. Build your month. "
        canonicalPath="/private-chef-prices-dubai"
        ogImage="/images/private-chef-prices-dubai-hero.webp"
        hideSiteName
        preloadHero="/images/private-chef-prices-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Transparent Pricing"
        title="Private Chef Dubai Price: What a Chef in the House Costs"
        subtitle="Four jobs, four numbers, one price each. Groceries at cost. Build the month before you enquire."
        image="/images/private-chef-prices-dubai-hero.webp"
        imageAlt="Private chef prices and menus in Dubai"
        imageWidth={1344}
        imageHeight={752}
        cta={{ label: 'Get My Private Chef Quote', href: '/inquiry' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai', href: '/private-chef-dubai' }, { label: 'Private Chef Prices Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ The four household jobs ═══════════════ */}
      <section className="bg-white section-padding prices-content">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 mb-10">
            <SectionLabel>The four jobs</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-4">
              The private chef Dubai price is one number per job
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[760px]">
              {THE_LINE.privateChef} {THE_LINE.catering} This page prices the first one. Pick the job the house
              needs, and the price is the same whoever we send — what changes with a chef’s level is what the chef
              earns, not what you pay.
            </p>
          </div>

          <div className="prices-section opacity-0 translate-y-8 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse border border-gray-200">
              <thead>
                <tr className="bg-black text-white">
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">The job</th>
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">Hours</th>
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">Price</th>
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">What it is</th>
                </tr>
              </thead>
              <tbody>
                {jobTable.map((row) => (
                  <tr key={row.name} className="border-b border-gray-200 even:bg-cream">
                    <td className="font-inter text-base text-black p-4 font-medium">{row.name}</td>
                    <td className="font-inter text-body text-gray-500 p-4">{row.hours}</td>
                    <td className="font-inter text-body text-black p-4 tabular-nums">{row.price} <span className="text-gray-400">{row.unit}</span></td>
                    <td className="font-inter text-body-sm text-gray-500 p-4">{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="prices-section opacity-0 translate-y-8 font-inter text-sm text-gray-400 mt-4">
            Groceries are charged at the actual receipts with no markup. VAT at 5% is shown on its own line.
            Planning one night with guests? That is priced per person on{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4">catering</Link>.
          </p>

          {/* The month we teach everywhere: the same figures the calculator below produces. */}
          <div className="prices-section opacity-0 translate-y-8 mt-12 border border-gray-200 bg-cream p-6 md:p-8">
            <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-3">A worked month</p>
            <h3 className="font-playfair text-h3 text-black mb-4">
              Four days a week, {MONTH_EXAMPLE.service}: {MONTH_EXAMPLE.visits} visits
            </h3>
            <dl className="grid gap-4 sm:grid-cols-3 mb-4">
              <div>
                <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">The house pays</dt>
                <dd className="font-playfair text-h3 text-black tabular-nums">AED {MONTH_EXAMPLE.client.toLocaleString('en-AE')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">To the supplier who employs the chef</dt>
                <dd className="font-playfair text-h3 text-black tabular-nums">AED {MONTH_EXAMPLE.supplier.toLocaleString('en-AE')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">Quality extra to the chef</dt>
                <dd className="font-playfair text-h3 text-black tabular-nums">
                  {MONTH_EXAMPLE.cookExtra.map((v) => `AED ${v.toLocaleString('en-AE')}`).join(' · ')}
                </dd>
              </div>
            </dl>
            <p className="font-inter text-body-sm text-gray-600 leading-relaxed">
              {QUALITY_LEVELS.map((l) => `${l.name} ${l.extraPct ? `+${l.extraPct * 100}%` : 'starting'}`).join(' · ')}.
              The extra is paid to the registered chef, not to the company that sent them, and the figure the house
              pays does not move when a chef climbs. {MONTH_EXAMPLE.longMonthNote} {EMPLOYMENT.short}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel align="center">What's Included</SectionLabel>
              <h2 className="font-playfair text-h2 text-black mb-6">
                What the price covers, every visit
              </h2>
              <ul className="space-y-4">
                {includedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black p-8">
              <ChefHat size={40} className="text-gold mb-4" />
              <h3 className="font-playfair text-h3 text-white mb-3">
                One price, one person, no upgrade path
              </h3>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                There is no premium grade of chef to be sold up to. You choose the job and the days; we match the
                person. A chef who scores well earns more from us — the house is never asked to pay more for the
                person it already likes.
              </p>
              <Link
                to="/inquiry"
                className="inline-flex items-center gap-2 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                Get My Private Chef Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Cost Factors ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-12">
            <SectionLabel align="center">Cost Drivers</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What moves the private chef cost Dubai households actually pay
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, i) => {
              const Icon = factor.icon
              return (
                <div key={i} className="prices-section opacity-0 translate-y-8 bg-cream p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-black flex items-center justify-center mb-4">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-h3 text-black mb-2">{factor.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{factor.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Household Plans (calculator) ═══════════════ */}
      {/* One pricing owner: the standing-plan builder moved here from the
          retired /private-chef-prices-dubai on 2026-08-26. Not animated —
          it is a form, so it must never sit at opacity-0. */}
      <section id="calculator" className="bg-white section-padding scroll-mt-24 border-t border-gray-200">
        <div className="container-custom max-w-[1100px]">
          <div className="max-w-[760px] mb-12">
            <SectionLabel>Household Plans</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-4">
              A chef in the house several days a week: build the plan, see the monthly figure
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Choose the job and the days, and the calculator shows the figure before you enquire — the same figure
              the table above quotes, from AED {SERVICES[0].rate} a visit, with groceries charged at the actual
              receipts and no markup. Long-term plans start at 30 days; short stays of 3–29 days carry a higher daily
              rate. A single night with guests is priced per person on{' '}
              <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">catering</Link>.
            </p>
            <p className="font-inter text-body-sm text-gray-500 mt-4">
              New to the household service?{' '}
              <Link to={CLUSTER_PATHS.overview} className="text-gold-ink underline underline-offset-4 hover:text-gold">Start with how a private chef in Dubai works</Link>
              {' · '}
              <Link to={CLUSTER_PATHS.planTerms} className="text-gold-ink underline underline-offset-4 hover:text-gold">Read how your plan works</Link>
            </p>
          </div>
          <PriceCalculator />
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1100px]">
          <PlanTermsDigest />
        </div>
      </section>

      {/* One night with guests is the other product. Say so, then send them there. */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8">
            <SectionLabel tone="dark">The other door</SectionLabel>
            <h2 className="font-playfair text-h2 text-white mb-4">
              One night with guests is catering, and it is priced per person
            </h2>
            <p className="font-inter text-body text-gray-400 leading-relaxed mb-6 max-w-[760px]">
              {THE_LINE.catering} {THE_LINE.test} A birthday for eight on Saturday is catering even though it happens
              in the same kitchen; a Tuesday and Thursday for a family of five is this page. Catering runs from
              AED 90 a head for drop-off to AED 700–950 for a chef-led plated dinner, and it is quoted with the
              staffing the night needs.
            </p>
            <Link
              to="/catering-dubai"
              className="inline-flex items-center gap-2 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              See catering prices <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Links ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-10">
            <SectionLabel align="center">Explore More</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Related Planning Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="prices-section opacity-0 translate-y-8 group flex gap-4 bg-cream p-5 border border-gray-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-playfair text-h3 text-black group-hover:text-gold transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-10">
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Private Chef Dubai Price: the questions we get before a booking
            </h2>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      <LocationStrip title="Private chef prices by Dubai location" subtitle="Pricing varies slightly by venue access and travel. Request a tailored quote for your area." />

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="prices-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <Banknote size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Get an Exact Private Chef Quote
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your date, guest count, venue, and menu ideas. We’ll send a tailored proposal with clear itemisation and no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Get My Private Chef Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="font-inter text-sm text-gray-400 mt-6">
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}

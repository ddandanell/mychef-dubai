// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/pricing
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
import ClusterNav from '../components/private-chef/ClusterNav'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import PriceCalculator from '../components/private-chef/pricing/PriceCalculator'
import PlanTermsDigest from '../components/private-chef/pricing/PlanTermsDigest'
import { SERVICES } from '../content/privateChefPricing'
import {
  CANCEL_NOTICE_HOURS,
  HOUSEHOLD_JOBS,
  MONTH_EXAMPLE,
  OVERTIME_RULE,
  THE_LINE,
} from '../content/privateChefStandard'
import { CLUSTER_PATHS } from '../content/privateChefCluster'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a private chef quote for my event (via mychef.ae/private-chef-dubai/pricing)')
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
  'The same chef, matched to how your home eats',
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
    description: 'From one day a week upward. At five days and above the rate improves, because most of the chef’s week is then reserved for you.',
  },
  {
    icon: Leaf,
    title: 'Groceries',
    description: 'Yours or ours. Charged at the actual receipts with no markup; letting us run them adds an hour of kitchen management on the shorter services.',
  },
  {
    icon: Users,
    title: 'People in your home',
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
    a: 'One day a week is AED 3,000 a month for a weekly Fresh Meal. Five days a week of Kitchen on Autopilot is AED 18,500 a month, and a full-day chef five days a week is AED 26,400. Four days a week is sixteen visits in four weeks, and a long month sometimes lands a seventeenth — we bill that only when it happens. The calculator on this page gives you the figure for the days you actually want, and there is no second set of numbers for the brochure.',
  },
  {
    q: 'What does the private chef Dubai price per day cover?',
    a: 'The chef’s hours for that job, the menu work around them, the Food Profile, backup when they are off, the review after service, and the kitchen left the way it was found. Groceries are separate and charged at the actual receipts. VAT at 5% is shown on its own line. People search this as the average cost of personal chef in Dubai or personal chef services rates Dubai — same service, same four prices.',
  },
  {
    q: 'Is a part-time cook for home in Dubai cheaper than a full-time hire?',
    a: 'Usually, yes. You pay for the days you actually need, instead of a full salary, a visa, and the hours you spend finding someone when your chef cannot come. A part time cook for home Dubai cost starts at AED 3,000 a month — one Fresh Meal a week — and goes up with the days you book. Hiring someone directly looks cheaper by the hour. It stops looking cheaper the first week they are ill.',
  },
  {
    q: 'What if I want a private chef for a dinner party?',
    a: 'That is catering, and it is priced per person rather than per visit — from AED 90 for drop-off to AED 700–950 for a chef-led plated dinner. A private chef for dinner party evenings, private chef catering for a birthday, or a part time private chef catering Dubai price for one night all live on [catering](/catering-dubai). This page is for a chef who comes back.',
  },
  {
    q: 'Do I have to employ the chef?',
    a: 'No. We match the person to your home, manage the arrangement and score the work. You never put a chef on your payroll, there is no visa or sponsorship for you to arrange, and no one will invoice you personally.',
  },
  {
    q: 'Can I move or cancel a visit?',
    a: `Yes — and you can cancel one on the same notice. With at least ${CANCEL_NOTICE_HOURS} hours’ notice a scheduled visit moves within the same billing month, subject to availability, or is cancelled without charge. Inside 24 hours it stays chargeable, because the chef’s day was already held for you. Terms and conditions apply.`,
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
    a: 'Yes. If the match is wrong we change the chef, and your Food Profile stays with you, so the next one is not starting from nothing. A chef whose scores fall below the standard stops being sent to homes — it is the same ladder they are paid on.',
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
  url: 'https://www.mychef.ae/private-chef-dubai/pricing',
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
    { '@type': 'ListItem', position: 3, name: 'Private Chef Prices Dubai', item: 'https://www.mychef.ae/private-chef-dubai/pricing' },
  ],
}

/** Standing household plans (3+ days) — calculator on this URL at #calculator. */
const householdServiceSchema = {
  '@type': 'Service',
  name: 'Private chef — household plans (3+ days)',
  url: 'https://www.mychef.ae/private-chef-dubai/pricing#calculator',
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
  url: 'https://www.mychef.ae/private-chef-dubai/pricing',
  priceCurrency: 'AED',
  lowPrice: String(HOUSEHOLD_JOBS[0].rate),
  highPrice: String(HOUSEHOLD_JOBS[HOUSEHOLD_JOBS.length - 1].rate),
  offers: HOUSEHOLD_JOBS.map((job) => ({
    '@type': 'Offer',
    name: `${job.name} (${job.hours}h)`,
    description: job.tagline,
    url: 'https://www.mychef.ae/private-chef-dubai/pricing#calculator',
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
        canonicalPath="/private-chef-dubai/pricing"
        ogImage="/images/private-chef-prices-dubai-hero.webp"
        hideSiteName
        preloadHero="/images/private-chef-prices-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Transparent Pricing"
        title="Private Chef Dubai Price: What a Chef at Your House Costs"
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
      <ClusterNav />

      <section className="bg-cream section-padding prices-content">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 border border-gray-200 bg-white p-6 md:p-10">
            <SectionLabel>September only</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-3">AED 1,500 a day. AED 1,040 this September.</h2>
            <p className="font-inter text-body text-gray-600 mb-6 max-w-[760px]">
              That is a full-day chef — nine hours in your kitchen. AED 1,300 a day through September, and down to AED 1,040 when you book twenty days or more.
            </p>
            <p className="font-inter text-body-sm text-gray-600 mb-3">Every day you book, a chef gives you nine hours in your kitchen. That is:</p>
            <ul className="space-y-2 mb-6">
              {[
                'Your menu, planned with you',
                'The shopping done for you',
                'Groceries at what the receipt says, nothing added on top',
                'Every meal cooked fresh in your kitchen',
                'The kitchen left clean behind them',
                'The same chef each week, not a stranger every Monday',
                'A Food Profile, so nobody asks you twice',
                'Cover when your chef is ill or away',
                'One person to call when anything changes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-gold flex-shrink-0 mt-1" />
                  <span className="font-inter text-body-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-inter text-body-sm text-gray-600 mb-3">In September, the more days you book in a month, the less each day costs:</p>
            <ul className="space-y-2 mb-6">
              {[
                '5 to 9 days a month — 5% off — AED 1,235 a day',
                '10 to 14 days — 10% off — AED 1,170 a day',
                '15 to 19 days — 15% off — AED 1,105 a day',
                '20 days or more — 20% off — AED 1,040 a day',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-gold flex-shrink-0 mt-1" />
                  <span className="font-inter text-body-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-inter text-body-sm text-gray-600 mb-4 max-w-[760px]">
              You are not locked into anything. Start with a paid trial and carry on only if the chef is right for your home. If the match is wrong we change the chef and your Food Profile stays with you. You can pause or cancel with 24 hours' notice before your next visit.
            </p>
            <p className="font-inter text-body-sm text-gray-600 mb-6 max-w-[760px]">
              Here is the part worth knowing. You are not subscribing to food — you are reserving one chef's time. A full-day plan takes most of a chef's month, which is why there are six places this September. When those six households are matched, the September rate closes with them.
            </p>
            <p className="font-inter text-body-sm text-gray-600 mb-6 max-w-[760px]">
              Agree your plan this month and we hold the rate for three months.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold"
            >
              WhatsApp us now for more info <ArrowRight size={14} />
            </a>
            <p className="font-inter text-caption text-gray-400 mt-3">Tell us your days and we will come back with the exact figure for your month, before you commit to anything.</p>
          </div>
          <div className="prices-section opacity-0 translate-y-8 mt-10">
            <h3 className="font-playfair text-h3 text-black mb-4">How and when you are charged</h3>
            <p className="font-inter text-body-sm text-gray-600 mb-3 max-w-[760px]">
              Everything is paid in advance. You settle the first month before your chef starts.
            </p>
            <p className="font-inter text-body-sm text-gray-600 mb-4 max-w-[760px]">
              After that, the next month is taken on the last day of service in the current one — so there is no gap in the service and no invoice you were not expecting.
            </p>
            <p className="font-inter text-body-sm text-gray-500 max-w-[760px]">
              Where you are affects the price. A chef travelling further out takes longer to get to you, so the day rate can vary with location. Your figure is confirmed in writing before anything starts.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ The four household jobs ═══════════════ */}
      <section className="bg-white section-padding prices-content">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 mb-10">
            <SectionLabel>The four jobs</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-4">
              The private chef Dubai price is one number per job
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[760px]">
              A private chef is a standing arrangement: the same person comes back to your home. Catering is one night — a dinner, a party, an event, a team that arrives and leaves. This page prices the first one. Choose the job your home needs; the price is the same whoever we send, because a chef’s level changes what the chef earns, not what you pay.
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
                <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">You pay</dt>
                <dd className="font-playfair text-h3 text-black tabular-nums">AED {MONTH_EXAMPLE.client.toLocaleString('en-AE')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">Per visit</dt>
                <dd className="font-playfair text-h3 text-black tabular-nums">AED {MONTH_EXAMPLE.rate.toLocaleString('en-AE')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">How a level is earned</dt>
                <dd className="font-playfair text-h3 text-black">
                  Level 1 · Level 2 · Level 3
                </dd>
              </div>
            </dl>
            <p className="font-inter text-body-sm text-gray-600 leading-relaxed">
              Every chef starts at Level 1. Levels above that are earned by working to a consistently high standard, month after month, in the homes they cook in. Strong performance is recognised and incentivised across the myCHEF network. What you pay does not change when a chef moves up.
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
                person. A chef who scores well is recognised by us — you are never asked to pay more for the
                person you already like.
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
      {/* Plan builder on the pricing owner. Not animated — it is a form, so it
          must never sit at opacity-0. */}
      <section id="calculator" className="bg-white section-padding scroll-mt-24 border-t border-gray-200">
        <div className="container-custom max-w-[1100px]">
          <div className="max-w-[760px] mb-12">
            <SectionLabel>Household Plans</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-4">
              A chef in your home several days a week — build the plan and see the monthly figure
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Choose the job and the days, and the calculator shows the figure before you enquire — the same figure
              the table above quotes, from AED {SERVICES[0].rate} a visit, with groceries charged at the actual
              receipts and no markup. Long-term plans start at 30 days; short stays of 3–29 days carry a higher daily
              rate. A single night with guests is priced per person on{' '}
              <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">catering</Link>.
            </p>
            <p className="font-inter text-body-sm text-gray-500 mt-4">
              New to this service?{' '}
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
            We typically reply within 15 minutes during business hours, 9am to 11pm.
          </p>
        </div>
      </section>
    </div>
  )
}

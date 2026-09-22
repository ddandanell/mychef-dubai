import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /dubai-event-catering-price-guide-2026
//     primary:     "event catering price guide dubai 2026"
//     subkeywords: "dubai catering prices 2026" · "event catering cost dubai 2026" · "how much does catering cost in dubai 2026" · "average catering cost per person dubai 2026" · "catering rates during spring 2024 in dubai" · "catering for 50 people cost dubai" · "corporate event catering near me" · "iftar buffet dubai 2026 price" · "event catering prices" · "event catering buffet" · "event catering for 100 people" · "event catering activities"
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
  Utensils,
  MapPin,
  Calendar,
  ClipboardList,
  Phone,
  ArrowRight,
  Check,
  FileDown,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'
import { CATERING_FORMATS, CATERING_FORMAT_BY_ID, EVENT_PACKAGES, formatTypicalCell, formatAed } from '@/content/cateringPricing'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I read your Dubai event catering price guide and would like a custom quote for my event.")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const eventPriceTable = CATERING_FORMATS.map((format) => ({
  format: format.label,
  from: format.fromPerPerson,
  typicalMin: format.typicalMin,
  typicalMax: format.typicalMax,
  estimate: format.calculatorEstimate,
  note: format.note,
}))

const wedding = CATERING_FORMAT_BY_ID.wedding
const buffet = CATERING_FORMAT_BY_ID.buffet
const canapes = CATERING_FORMAT_BY_ID.canapes
const bbq = CATERING_FORMAT_BY_ID.bbq
const plated = CATERING_FORMAT_BY_ID['plated-chef']
const dropOff = CATERING_FORMAT_BY_ID['drop-off']
const corporateDinner = EVENT_PACKAGES.find((p) => p.id === 'corporate-dinner')!

const weddingBudgets = [
  {
    label: 'Staffed wedding catering',
    guests: `From ${wedding.minGuests} guests`,
    budget: `From ${formatAed(wedding.fromPerPerson)} per person`,
    style: 'Staffed wedding buffet or stations. Same floor as the Catering hub.',
    bestFor: 'Villa receptions and seated weddings that need a team in the room',
  },
  {
    label: 'Buffet or live stations',
    guests: `Buffet from ${buffet.minGuests} guests · BBQ from ${bbq.minGuests}`,
    budget: `Buffet from ${formatAed(buffet.fromPerPerson)} · live from ${formatAed(bbq.fromPerPerson)} per person`,
    style: 'A maintained line, or cooking in front of guests.',
    bestFor: 'Larger rooms that should move, not sit for courses',
  },
  {
    label: 'Chef-led plated',
    guests: `From ${plated.minGuests} guests`,
    budget: `${formatAed(plated.typicalMin)}–${plated.typicalMax} per person`,
    style: 'Courses cooked and served to the table. A different product from a wedding buffet.',
    bestFor: 'Smaller weddings and dinners where every plate is served',
  },
]

const weddingAddOns = [
  { item: 'Wedding cake', cost: 'Quoted as a line. No published floor.' },
  { item: 'Dessert table', cost: 'Quoted with the catering. No published per-person floor.' },
  { item: 'Live cooking station', cost: `From ${formatAed(bbq.fromPerPerson)} per person, from ${bbq.minGuests} guests` },
  { item: 'Bar service', cost: 'Staff and kit quoted. Alcohol only where licensed.' },
  { item: 'Late-night station', cost: 'Quoted as extra service time and food. Not a published total.' },
]

const corporatePackages = [
  {
    label: 'Drop-off',
    guests: `From ${dropOff.minGuests} guests · AED ${dropOff.minOrderAed} minimum order`,
    price: `From ${formatAed(dropOff.fromPerPerson)} per person`,
    includes: 'Food delivered ready to serve. No team on site.',
    bestFor: 'Working lunches where the room serves itself',
  },
  {
    label: 'Staffed buffet or canapés',
    guests: `Buffet from ${buffet.minGuests} · canapés from ${canapes.minGuests}`,
    price: `Buffet from ${formatAed(buffet.fromPerPerson)} · canapés from ${formatAed(canapes.fromPerPerson)} per person`,
    includes: 'A maintained line, or passed bites. Staff sized to the room.',
    bestFor: 'Launches and standing receptions',
  },
  {
    label: 'Corporate dinner package',
    guests: corporateDinner.guests,
    price: `${formatAed(corporateDinner.priceAed)} total`,
    includes: 'Menu, chef and service staff for 10–15 guests. VAT invoice. Not a dinner cruise.',
    bestFor: 'Boardroom and client dinners in that guest band',
  },
]

const costFactors = [
  {
    icon: Users,
    title: 'Guest Count',
    description: 'Larger events usually reduce the per-person cost because setup and staffing are spread across more guests. Very small events may have a minimum spend.',
  },
  {
    icon: Utensils,
    title: 'Menu Complexity',
    description: 'A standard buffet floor is not a plated tasting. Named proteins and extra courses move the written total.',
  },
  {
    icon: ChefHat,
    title: 'Ingredients & Sourcing',
    description: 'Locally sourced seasonal produce is often more cost-effective than flown-in speciality items. Sustainable and organic menus may carry a premium.',
  },
  {
    icon: ClipboardList,
    title: 'Service Style',
    description: 'Plated service requires more staff per guest than buffet or family-style. Passed canapés, live stations, and formal table service all add labour.',
  },
  {
    icon: MapPin,
    title: 'Venue Access & Location',
    description: 'Events in remote desert locations, on yachts, or in venues with restricted loading access may incur transport, fuel, and setup surcharges.',
  },
  {
    icon: Calendar,
    title: 'Timing',
    description: "Peak dates (New Year's Eve, Christmas, Eid, major public holidays, and wedding-season weekends from November to March) often command higher pricing.",
  },
]

const quoteSteps = [
  'Event date and approximate timing',
  'Number of guests',
  'Venue or location type',
  'Occasion and desired atmosphere',
  'Preferred cuisine or menu style',
  'Dietary requirements and allergies',
  'Beverage requirements',
  'Budget range (if comfortable sharing)',
]

const internalLinks = [
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Multi-course and banquet-style catering for Dubai weddings.' },
  { title: 'Corporate Catering Dubai', link: '/corporate', description: 'Buffets, working lunches, and boardroom catering for offices.' },
  { title: 'Yacht Catering Dubai', link: '/yachts', description: 'Compact, elegant menus designed for Dubai yacht events.' },
  { title: 'BBQ Catering Dubai', link: '/bbq-catering-dubai', description: 'Grill-focused menus for villas, poolsides, and outdoor events.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Per-person costs for private chef, buffet, plated dinner, and more.' },
]

const faqs = [
  {
    q: 'Is the price per person all-inclusive?',
    a: 'Usually it includes food, basic service, and standard equipment. Beverages, premium rentals, transport, VAT, and service charges may be additional. Always confirm with your caterer.',
  },
  {
    q: 'Do caterers charge for tastings?',
    a: 'Some include tastings in the event contract; others charge a flat fee that may be credited against the final booking. Ask about tasting policy before committing.',
  },
  {
    q: 'What is the typical minimum guest count?',
    a: 'Minimums vary. Many premium caterers require a minimum spend rather than a strict headcount, especially for off-peak dates or remote venues.',
  },
  {
    q: 'Can I reduce costs by choosing a simpler menu?',
    a: 'Yes. Reducing protein tiers, switching from plated to buffet service, and limiting passed canapés can lower the per-person price without sacrificing quality.',
  },
  {
    q: 'When should I book my caterer?',
    a: 'For weddings and peak-season events, book 3–6 months in advance. Corporate events and smaller gatherings can often be arranged with 2–4 weeks notice.',
  },
  {
    q: 'How much does wedding catering cost in Dubai?',
    a: 'Staffed wedding catering starts from AED 180 per person, from 20 guests, the same floor as the Catering hub. Multiply by headcount for a working total, then add staff, cake, stations and 5% VAT on the written quote. We do not publish a round lump sum for a “small wedding”.',
  },
  {
    q: 'What information do I need for an accurate quote?',
    a: 'Share your event date, guest count, venue, occasion, preferred cuisine, dietary requirements, beverage needs, and budget range. The more detail you provide, the more precise the proposal.',
  },
  {
    q: 'How much does catering cost in Dubai 2026?',
    a: 'There is no single number. Drop-off from AED 90, buffet from AED 120, canapés, BBQ and live stations from AED 150, wedding from AED 180, yacht from AED 280, plated AED 700–950 per person. Packages start at AED 1,200. Send date, headcount and venue for an itemised proposal with 5% VAT on its own line.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Event Catering Price Guide Dubai 2026',
  description: 'Published myCHEF floors for 2026 event catering: drop-off, buffet, canapés, BBQ, wedding, yacht and plated dining, plus package totals.',
  author: { '@id': 'https://www.mychef.ae/#organization' },
  publisher: { '@id': 'https://www.mychef.ae/#organization' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Dubai Event Catering Price Guide 2026',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const howToSchema = {
  '@type': 'HowTo',
  name: 'How to Get an Accurate Event Catering Quote in Dubai',
  description: 'Share the key details your caterer needs to provide a realistic, itemised proposal.',
  step: quoteSteps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: `Step ${i + 1}`,
    text: step,
  })),
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
    { '@type': 'ListItem', position: 2, name: 'Dubai Event Catering Price Guide 2026', item: 'https://www.mychef.ae/dubai-event-catering-price-guide-2026' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, serviceSchema, howToSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function EventCateringPriceGuide2026() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.event-price-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.event-price-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.event-price-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.event-price-table-row', {
      scrollTrigger: { trigger: '.event-price-table', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.event-price-wedding-card', {
      scrollTrigger: { trigger: '.event-price-wedding', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.event-price-corporate-card', {
      scrollTrigger: { trigger: '.event-price-corporate', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.event-price-factor-card', {
      scrollTrigger: { trigger: '.event-price-factors', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.event-price-quote-item', {
      scrollTrigger: { trigger: '.event-price-quote', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.event-price-link-item', {
      scrollTrigger: { trigger: '.event-price-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.event-price-faq-item', {
      scrollTrigger: { trigger: '.event-price-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.event-price-cta', {
      scrollTrigger: { trigger: '.event-price-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Event Catering Price Guide Dubai 2026 | myCHEF"
        description="Event catering price guide Dubai 2026: the same published floors as the Catering hub. Wedding from AED 180, buffet from AED 120, plated AED 700–950. 5% VAT extra."
        canonicalPath="/dubai-event-catering-price-guide-2026"
        ogImage="/images/event-catering-price-guide-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/event-catering-price-guide-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[860px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 event-price-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Dubai Event Catering Price Guide 2026</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 event-price-hero-h1">
            Event Catering Price Guide Dubai 2026
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[680px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 event-price-hero-sub">
            Our Dubai event catering price guide for 2026 brings together myCHEF starting prices and clearly identified market ranges, helping you compare formats and prepare a realistic event brief.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 event-price-hero-cta">Request your quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 event-price-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section></NonCateringVisual>

      <TrustSignalStrip />

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">PLANNING & BUDGETING</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            How to use this event catering price guide Dubai 2026
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Catering prices vary by service format. myCHEF starting prices are AED 90 per person for drop-off, AED 120 for a standard event buffet, AED 150 for canapés, BBQ and live stations, AED 180 for weddings and AED 280 for yachts. Bespoke chef-led plated dining is AED 700–950 per person, with scope and VAT confirmed in the proposal.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Package totals are separate: Date Night AED 1,200, Family AED 2,400, Birthday AED 3,600, Corporate Dinner AED 4,500. Those are not multiplied by headcount. 5% VAT is a separate line. Household chef visit rates are not this page.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            The wider per-person list, including indicative market bands, lives on <Link to="/dubai-catering-prices-guide" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering prices</Link>. This guide is the 2026 event reading of the same floors.
          </p>
        </div>
      </section>

      {/* ═══════════════ Pricing Models ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">PRICING MODELS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              How Dubai Catering Pricing Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-8">
              <h3 className="font-playfair text-h3 text-black mb-3">Per-Person Pricing</h3>
              <p className="font-inter text-body text-gray-500 leading-relaxed">
                A set rate per guest that includes food, basic service, and sometimes equipment. This is the most common model for weddings, gala dinners, and large celebrations.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-playfair text-h3 text-black mb-3">Package Pricing</h3>
              <p className="font-inter text-body text-gray-500 leading-relaxed">
                A fixed price for a defined menu and guest count, often used for corporate lunches, yacht catering, and smaller private events.
              </p>
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="font-playfair text-h3 text-black mb-4">What to Confirm in Every Quote</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Food and ingredients',
                'Chef and kitchen staff',
                'Service staff and bartenders',
                'Tables, chairs, linens, and tableware',
                'Transport and setup',
                'Beverages (often billed separately)',
                'VAT and service charges',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-body text-gray-500">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-body text-gray-500 mt-6">
              Always request an itemised quote so you can compare fairly.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Price Table ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">2026 PRICE RANGES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Price Ranges by Event Type
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              From = myCHEF published floor. Indicative market = wider Dubai band, not a myCHEF floor. Same table as the catering prices guide.
            </p>
          </div>

          <div className="event-price-table overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Event Type</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">From</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Indicative market</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {eventPriceTable.map((row, i) => (
                  <tr key={i} className="event-price-table-row border-b border-charcoal-light opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-white text-lg">{row.format}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">AED {row.from}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">{formatTypicalCell(row.typicalMin, row.typicalMax)}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center mt-6">
            From = myCHEF published floor. Indicative market is a wider Dubai band, not a myCHEF start. Named ingredients, extra staff and venue access move the written total.
          </p>
        </div>
      </section>

      {/* ═══════════════ Wedding Catering ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WEDDINGS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Wedding Catering Costs
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Wedding catering from AED {wedding.fromPerPerson} per person, from {wedding.minGuests} guests. Totals scale with headcount. We do not publish a round “small wedding” lump sum.
            </p>
          </div>

          <div className="event-price-wedding grid md:grid-cols-3 gap-6 mb-12">
            {weddingBudgets.map((w, i) => (
              <div key={i} className="event-price-wedding-card bg-charcoal p-8 opacity-0 translate-y-12">
                <span className="font-inter text-caption uppercase tracking-wider text-gold mb-2 block">{w.guests}</span>
                <h3 className="font-playfair text-h3 text-white mb-3">{w.label}</h3>
                <p className="font-playfair text-xl text-gold mb-4">{w.budget}</p>
                <p className="font-inter text-body-sm text-gray-400 mb-3"><strong className="text-white">Style:</strong> {w.style}</p>
                <p className="font-inter text-body-sm text-gray-400"><strong className="text-white">Best for:</strong> {w.bestFor}</p>
              </div>
            ))}
          </div>

          <div className="max-w-[800px] mx-auto">
            <h3 className="font-playfair text-h3 text-white mb-6 text-center">Common Wedding Add-Ons</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr className="border-b border-[#333]">
                    <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Add-On</th>
                    <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {weddingAddOns.map((row, i) => (
                    <tr key={i} className="border-b border-charcoal-light">
                      <td className="py-4 px-4 font-inter text-white">{row.item}</td>
                      <td className="py-4 px-4 font-inter text-gray-400">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-body-sm text-gray-500 text-center mt-6">
              Alcohol only where the venue is licensed or the quotation says so. Bar service is staff and kit, not a published per-person food floor.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Corporate Catering ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">CORPORATE EVENTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Corporate Catering Costs
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Same floors as the hub. The Corporate Dinner package is AED 4,500 for 10–15 guests, not a cruise.
            </p>
          </div>

          <div className="event-price-corporate grid md:grid-cols-3 gap-6">
            {corporatePackages.map((c, i) => (
              <div key={i} className="event-price-corporate-card bg-white p-8 opacity-0 translate-y-12">
                <span className="font-inter text-caption uppercase tracking-wider text-gold mb-2 block">{c.guests}</span>
                <h3 className="font-playfair text-h3 text-black mb-3">{c.label}</h3>
                <p className="font-playfair text-xl text-gold mb-4">{c.price}</p>
                <p className="font-inter text-body-sm text-gray-500 mb-3"><strong className="text-black">Includes:</strong> {c.includes}</p>
                <p className="font-inter text-body-sm text-gray-500"><strong className="text-black">Best for:</strong> {c.bestFor}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body text-gray-500 text-center mt-10 max-w-[640px] mx-auto">
            Repeat office catering is quoted as a programme. An LPO does not create credit terms by itself.
          </p>
        </div>
      </section>

      {/* ═══════════════ Cost Factors ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT MOVES THE PRICE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Factors That Affect Final Pricing
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Several variables can move a quote up or down significantly. Understanding them helps you control the budget.
            </p>
          </div>

          <div className="event-price-factors grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, i) => {
              const Icon = factor.icon
              return (
                <div key={i} className="event-price-factor-card bg-charcoal p-8 opacity-0 translate-y-12">
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{factor.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{factor.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Quote Steps ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>ACCURATE QUOTES</SectionLabel>
              <h2 className="font-playfair text-h2 text-black mb-6">
                How to Get an Accurate Quote
              </h2>
              <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-6">
                To receive a realistic quote quickly, share the following with your caterer. The more detail you provide, the more accurate and useful the proposal will be.
              </p>
              <Link to={`/inquiry`} className="btn-primary">Request a Custom Quote</Link>
            </div>

            <div className="event-price-quote space-y-4">
              {quoteSteps.map((step, i) => (
                <div key={i} className="event-price-quote-item flex items-start gap-4 bg-cream p-6 opacity-0 -translate-x-5">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold text-black font-inter text-sm font-medium">
                    {i + 1}
                  </span>
                  <p className="font-inter text-body text-black leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Downloadable PDF ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="bg-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gold/10 rounded-full">
              <FileDown size={32} className="text-gold" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-playfair text-h3 text-white mb-3">
                Downloadable 2026 Price Guide
              </h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                We have condensed the ranges above into a one-page PDF summary that you can save, share with your planning team, or bring to venue meetings.
              </p>
              <ul className="font-inter text-body-sm text-gray-500 space-y-1 mb-6 md:mb-0">
                <li>• Per-person price ranges by event type</li>
                <li>• Wedding budget benchmarks</li>
                <li>• Corporate catering package ranges</li>
                <li>• Add-on cost checklist</li>
                <li>• Questions to ask before booking</li>
              </ul>
            </div>
            <Link
              to={`/inquiry`}
              className="btn-primary whitespace-nowrap"
            >
              Request the PDF
            </Link>
          </div>
          <p className="font-inter text-body-xs text-gray-500 text-center mt-6">
            The PDF is sent by email after a brief inquiry so we can include any updates for your event type and date.
          </p>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services & Guides
          </h2>

          <div className="event-price-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="event-price-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
              >
                <div>
                  <h4 className="font-playfair text-h4 text-white mb-1">{link.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Event Catering Price Guide Dubai 2026: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center event-price-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, the headcount and the format
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            We typically acknowledge enquiries within 15 minutes during business hours. Your itemised proposal follows after we review the brief: food, chefs, staff, hire and 5% VAT on separate lines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Request your quote</Link>
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
        </div>
      </section>
    </div>
  )
}

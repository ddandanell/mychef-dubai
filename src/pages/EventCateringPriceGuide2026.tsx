import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Users,
  ChefHat,
  Utensils,
  MapPin,
  Calendar,
  ClipboardList,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  FileDown,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I read your Dubai event catering price guide and would like a custom quote for my event.")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const CAMPAIGN = 'dubai-event-catering-price-guide-2026'

/* ────────────────────── Data ────────────────────── */

const eventPriceTable = [
  { format: 'Canapé reception', min: 120, max: 250, note: '6–10 bite-sized pieces; premium ingredients increase cost' },
  { format: 'Buffet catering', min: 180, max: 350, note: 'Popular for weddings and large celebrations' },
  { format: 'Plated dinner', min: 250, max: 550, note: 'Higher staffing requirements; more formal presentation' },
  { format: 'BBQ / outdoor dining', min: 200, max: 400, note: 'Grilled meats, seafood, sides; seasonal demand in winter' },
  { format: 'Yacht catering', min: 300, max: 700, note: 'Logistics, compact galleys, and premium settings add cost' },
  { format: 'Corporate lunch / boardroom', min: 150, max: 300, note: 'Often package-based with setup and cleanup included' },
]

const weddingBudgets = [
  {
    label: 'Small Wedding',
    guests: '20–50 guests',
    budget: 'AED 10,000 – AED 25,000',
    style: 'Family-style sharing, buffet, or plated three-course menu',
    bestFor: 'Intimate garden weddings, villa receptions, restaurant buyouts',
  },
  {
    label: 'Medium Wedding',
    guests: '50–120 guests',
    budget: 'AED 30,000 – AED 75,000',
    style: 'Buffet with live stations or plated service',
    bestFor: 'Ballroom venues, beach clubs, luxury tents',
  },
  {
    label: 'Large Wedding',
    guests: '120+ guests',
    budget: 'AED 80,000+',
    style: 'Full banquet catering with multiple stations, dessert tables, and full service team',
    bestFor: 'Large hotel ballrooms, desert venues, multi-day celebrations',
  },
]

const weddingAddOns = [
  { item: 'Wedding cake', cost: 'AED 1,500 – AED 6,000' },
  { item: 'Dessert table / grazing station', cost: 'AED 3,000 – AED 10,000' },
  { item: 'Live cooking station', cost: 'AED 4,000 – AED 12,000' },
  { item: 'Premium bar service', cost: 'AED 80 – AED 200 per person' },
  { item: 'Late-night snack station', cost: 'AED 2,000 – AED 6,000' },
]

const corporatePackages = [
  {
    label: 'Boardroom Lunch',
    guests: '10–30 guests',
    price: 'AED 150 – AED 300 per person',
    includes: 'Individual boxed lunches or served platters, setup, and cleanup',
    bestFor: 'Executive meetings, client pitches, working lunches',
  },
  {
    label: 'Product Launch or Brand Activation',
    guests: '50–200 guests',
    price: 'AED 200 – AED 450 per person',
    includes: 'Canapés, food stations, branded presentation, service staff',
    bestFor: 'Media events, showroom openings, consumer activations',
  },
  {
    label: 'Gala Dinner',
    guests: '100–500+ guests',
    price: 'AED 350 – AED 750+ per person',
    includes: 'Multi-course plated menu or premium buffet, full front-of-house team, bar service',
    bestFor: 'Awards ceremonies, annual dinners, charity events',
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
    description: 'A simple Mediterranean buffet costs less than a Japanese omakase menu with imported fish. Premium proteins raise costs quickly.',
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
    description: "Peak dates — New Year's Eve, Christmas, Eid, major public holidays, and wedding season weekends (November–March) — often command higher pricing.",
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
  { title: 'Corporate Catering Dubai', link: '/corporate-catering-dubai', description: 'Buffets, working lunches, and boardroom catering for offices.' },
  { title: 'Yacht Catering Dubai', link: '/yacht-catering-dubai', description: 'Compact, elegant menus designed for Dubai yacht events.' },
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
    a: 'Small weddings of 20–50 guests typically start around AED 10,000–25,000, medium weddings of 50–120 guests range from AED 30,000–75,000, and large celebrations of 120+ guests often begin at AED 80,000.',
  },
  {
    q: 'What information do I need for an accurate quote?',
    a: 'Share your event date, guest count, venue, occasion, preferred cuisine, dietary requirements, beverage needs, and budget range. The more detail you provide, the more precise the proposal.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Dubai Event Catering Price Guide 2026',
  description: 'An honest, Dubai-specific overview of event catering prices for 2026. Learn per-person ranges for weddings, corporate events, yacht catering, and the factors that affect cost.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Dubai Event Catering Price Guide 2026',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Dubai Event Catering Price Guide 2026', item: 'https://mychef.ae/dubai-event-catering-price-guide-2026' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, serviceSchema, howToSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function EventCateringPriceGuide2026() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
        title="Dubai Event Catering Price Guide 2026 | Budget & Quotes | myCHEF"
        description="Honest Dubai event catering prices for 2026: per-person ranges for weddings, corporate events, yacht catering, BBQ, buffet, and plated dinners. Plus factors that affect cost."
        canonicalPath="/dubai-event-catering-price-guide-2026"
        ogImage="/images/event-catering-price-guide-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
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
            Dubai Event Catering Price Guide 2026
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[680px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 event-price-hero-sub">
            An honest, Dubai-specific overview of event catering prices for 2026. Set a realistic budget, compare quotes fairly, and ask the right questions before booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 event-price-hero-cta">Get My Custom Quote</Link>
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
      </section>

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            PLANNING & BUDGETING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Understand What Catering Really Costs in Dubai
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Catering is usually the largest line item after the venue when planning an event in Dubai. Yet pricing remains one of the least transparent parts of the process. Couples, corporate event managers, and private hosts often struggle to understand what a realistic budget looks like before requesting quotes.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            This guide provides an honest, Dubai-specific overview of event catering prices for 2026. It is based on current market practices and the variables that genuinely affect cost. Use it to set a budget, compare quotes, and ask the right questions before booking.
          </p>
        </div>
      </section>

      {/* ═══════════════ Pricing Models ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PRICING MODELS
            </span>
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              2026 PRICE RANGES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Price Ranges by Event Type
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              The following ranges are indicative for Dubai in 2026. Final pricing depends on menu selection, group size, venue access, and service level.
            </p>
          </div>

          <div className="event-price-table overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Event Type</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">From (AED/person)</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">To (AED/person)</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {eventPriceTable.map((row, i) => (
                  <tr key={i} className="event-price-table-row border-b border-charcoal-light opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-white text-lg">{row.format}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">AED {row.min}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">AED {row.max}{row.max === 700 ? '+' : ''}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center mt-6">
            These ranges reflect mid-to-premium catering in Dubai. Ultra-luxury experiences with rare ingredients, extensive wine pairings, or celebrity chefs can exceed these figures.
          </p>
        </div>
      </section>

      {/* ═══════════════ Wedding Catering ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WEDDINGS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Wedding Catering Costs
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Realistic budget starting points for Dubai weddings in 2026.
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
              Alcohol licensing and service should be discussed with your venue and caterer early in the planning process.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Corporate Catering ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CORPORATE EVENTS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Corporate Catering Costs
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              From everyday office lunches to high-end gala dinners — typical 2026 benchmarks.
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
            Corporate clients often benefit from package pricing and ongoing partnerships for repeat events.
          </p>
        </div>
      </section>

      {/* ═══════════════ Cost Factors ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT MOVES THE PRICE
            </span>
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
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                ACCURATE QUOTES
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                How to Get an Accurate Quote
              </h2>
              <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-6">
                To receive a realistic quote quickly, share the following with your caterer. The more detail you provide, the more accurate and useful the proposal will be.
              </p>
              <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Custom Quote</Link>
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
              to={`/inquiry?utm_source=mychef.ae&utm_medium=pdf_download&utm_campaign=${CAMPAIGN}`}
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
            Event Catering Pricing FAQ
          </h2>

          <div className="event-price-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="event-price-faq-item border border-gray-200 opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-inter text-base font-medium text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center event-price-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Get a Transparent Catering Quote
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            At myCHEF Dubai, we provide itemised, transparent quotes for weddings, corporate events, yacht charters, and private celebrations. No hidden fees, no inflated minimums — just a clear plan built around your guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Get My Custom Quote</Link>
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

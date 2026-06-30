import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Banknote,
  Users,
  ChefHat,
  MapPin,
  ClipboardList,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a custom catering quote for my event (via mychef.ae/dubai-catering-prices-guide)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const priceTable = [
  { format: 'Private chef / home dining', min: 350, max: 650, note: 'Per person; chef + service staff' },
  { format: 'Canapés & cocktail reception', min: 180, max: 350, note: 'Per person; 6–10 bites, service staff' },
  { format: 'Buffet catering', min: 220, max: 420, note: 'Per person; varied stations, hot & cold' },
  { format: 'Plated seated dinner', min: 320, max: 620, note: 'Per person; multi-course, full service' },
  { format: 'BBQ catering', min: 200, max: 380, note: 'Per person; grill, sides, salads, staff' },
  { format: 'Yacht catering', min: 280, max: 550, note: 'Per person; compact menus, stable service' },
]

const costFactors = [
  {
    icon: Users,
    title: 'Guest Count',
    description: 'Larger events often reduce the per-head cost because fixed expenses are spread across more guests. Smaller, highly personalised dinners usually carry a higher per-person rate.',
  },
  {
    icon: ChefHat,
    title: 'Cuisine & Ingredients',
    description: 'Premium proteins, imported specialties, seasonal produce, and bespoke menus affect the final price. Simple, seasonal menus are typically more cost-efficient.',
  },
  {
    icon: ClipboardList,
    title: 'Service & Staffing',
    description: 'Waiters, bartenders, chefs, and event managers are scaled to your format. Plated service and live stations require more staff than buffet or family-style setups.',
  },
  {
    icon: MapPin,
    title: 'Venue & Location',
    description: 'Off-site venues, villas without a full kitchen, yacht galleys, or remote locations may require extra transport, mobile kitchen equipment, and logistics planning.',
  },
  {
    icon: Banknote,
    title: 'Add-Ons',
    description: 'Bar service, bespoke cakes, grazing tables, rentals, florals, and extended service hours are added to the base menu cost and quoted separately.',
  },
]

const quoteSteps = [
  'Share your date, guest count, venue, and event style.',
  'Describe cuisines, dietary needs, and any must-have dishes.',
  'Confirm service format: canapés, buffet, plated, BBQ, or mixed.',
  'Ask for an itemised proposal with food, staff, rentals, and VAT.',
  'Request a tasting if the menu is complex or high-value.',
]

const whyCustom = [
  'You pay only for the dishes, staff, and rentals your event actually needs.',
  'Menus adapt to dietary restrictions, religious requirements, and guest preferences.',
  'Transparent itemisation avoids surprise charges on the day.',
  'Portion sizes and service style match the event format and duration.',
]

const dubaiExamples = [
  { title: 'Marina Apartment Dinner Party', description: 'A 12-guest seated dinner with a private chef, served at a Dubai Marina apartment with city views.' },
  { title: 'Emirates Hills Villa BBQ', description: 'A poolside BBQ for 40 guests with live grill stations, mezze, and salads in Emirates Hills.' },
  { title: 'Palm Jumeirah Yacht Cruise', description: 'Canapés and grazing for 25 guests on an afternoon cruise around Palm Jumeirah.' },
  { title: 'DIFC Boardroom Lunch', description: 'A working lunch buffet for 30 corporate guests in a DIFC office with dietary options.' },
]

const internalLinks = [
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining.' },
  { title: 'BBQ Catering Dubai', link: '/bbq-catering-dubai', description: 'Grill-focused menus for villas, poolsides, and outdoor events.' },
  { title: 'Yacht Catering Dubai', link: '/yacht-catering-dubai', description: 'Compact, elegant menus designed for Dubai yacht events.' },
  { title: 'Corporate Catering Dubai', link: '/corporate-catering-dubai', description: 'Buffets, working lunches, and boardroom catering for offices.' },
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Multi-course and banquet-style catering for Dubai weddings.' },
  { title: 'Villa Catering Ideas', link: '/villa-catering-ideas-dubai', description: 'Menu formats and setups designed for Dubai villas and homes.' },
]

const faqs = [
  {
    q: 'How much does catering cost per person in Dubai?',
    a: 'Most Dubai catering ranges from AED 180 to AED 650 per person depending on format. Canapés and BBQ start lower, while plated private-chef dinners and yacht catering sit at the higher end. Final pricing depends on guest count, menu, staff, and venue.',
  },
  {
    q: 'What is included in a catering quote?',
    a: 'A detailed quote typically includes menu design, ingredients, chef and service staff, transport, setup, service, and clear-down. Rentals, bar service, bespoke cakes, and VAT are usually listed separately so you can see exactly what you are paying for.',
  },
  {
    q: 'Why is a custom quote better than a package price?',
    a: 'Custom quotes match your guest count, dietary needs, venue, and service style. Packages can include items you do not want or omit things you need. Itemised custom pricing is more transparent and easier to adjust.',
  },
  {
    q: 'Does guest count change the per-person price?',
    a: 'Yes. Larger events generally lower the per-head cost because fixed logistics are spread across more guests. Smaller, highly bespoke dinners carry a higher per-person rate due to dedicated staff and preparation.',
  },
  {
    q: 'Are there extra charges for off-site or villa venues?',
    a: 'Villas, outdoor locations, and yachts may require mobile kitchen equipment, generators, extra transport, or additional staff. These are quoted based on a site or venue briefing rather than hidden in the menu price.',
  },
  {
    q: 'How do I get an accurate catering quote?',
    a: 'Provide the date, guest count, venue or area, preferred cuisine, dietary requirements, and service format. The more detail you share, the more precise the proposal. Tastings can help refine larger or more complex menus.',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const articleSchema = {
  '@type': 'Article',
  headline: 'Dubai Catering Prices Guide: What to Budget for Your Event',
  description: 'A practical guide to Dubai catering prices per person for private chef, canapés, buffet, plated dinner, BBQ, and yacht catering, plus factors that affect cost.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Dubai Catering Prices Guide',
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

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://mychef.ae/guides' },
    { '@type': 'ListItem', position: 3, name: 'Dubai Catering Prices Guide', item: 'https://mychef.ae/dubai-catering-prices-guide' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function DubaiCateringPricesGuide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.price-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.price-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.price-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.price-table-row', {
      scrollTrigger: { trigger: '.price-table', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.price-factor-card', {
      scrollTrigger: { trigger: '.price-factors', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.price-quote-item', {
      scrollTrigger: { trigger: '.price-quote', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.price-dubai-card', {
      scrollTrigger: { trigger: '.price-dubai', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.price-link-item', {
      scrollTrigger: { trigger: '.price-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.price-faq-item', {
      scrollTrigger: { trigger: '.price-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.price-cta', {
      scrollTrigger: { trigger: '.price-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Dubai Catering Prices Guide 2026 | What to Budget | myCHEF"
        description="Dubai catering prices per person in 2026: private chef, canapés, buffet, plated dinner, BBQ, and yacht catering. Learn what affects cost and how to get an accurate quote."
        canonicalPath="/dubai-catering-prices-guide"
        ogImage="/service-catering.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 price-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/guides" className="text-gray-400 hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Dubai Catering Prices Guide</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 price-hero-h1">
            Dubai Catering Prices Guide: What to Budget for Your Event
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 price-hero-sub">
            A practical breakdown of Dubai catering costs per person, the factors that move the price, and how to request a custom quote that fits your event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=dubai-catering-prices-guide" className="btn-primary opacity-0 translate-y-4 price-hero-cta">Get My Custom Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 price-hero-cta"
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
            Understand Catering Costs Before You Book
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Catering prices in Dubai vary widely depending on the format, guest count, cuisine, and venue. A private chef dinner for ten will be priced very differently from a buffet for eighty or a yacht cruise for thirty. Understanding the range for each format helps you set a realistic budget and compare quotes on equal terms.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            This guide explains typical per-person costs for the most popular Dubai catering formats and the key factors that affect your final quote. For a precise figure, we always recommend a custom proposal based on your specific event details.
          </p>
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
              Catering Costs Per Person in Dubai
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Prices are indicative guides for mid-market to premium catering in Dubai. Final quotes depend on menu choices, staff levels, rentals, and venue logistics.
            </p>
          </div>

          <div className="price-table overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Format</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">From (AED)</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">To (AED)</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr key={i} className="price-table-row border-b border-charcoal-light opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-white text-lg">{row.format}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">AED {row.min}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">AED {row.max}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ Cost Factors ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT DRIVES THE PRICE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Factors That Affect Catering Cost
            </h2>
          </div>

          <div className="price-factors grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, i) => {
              const Icon = factor.icon
              return (
                <div key={i} className="price-factor-card bg-charcoal p-8 opacity-0 translate-y-12">
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
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            How to Get an Accurate Catering Quote
          </h2>

          <div className="price-quote space-y-4">
            {quoteSteps.map((step, i) => (
              <div key={i} className="price-quote-item flex items-start gap-4 bg-white p-6 opacity-0 -translate-x-5">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold text-black font-inter text-sm font-medium">
                  {i + 1}
                </span>
                <p className="font-inter text-body text-black leading-relaxed pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Why Custom Quotes ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                BETTER THAN PACKAGES
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                Why Custom Quotes Beat Fixed Packages
              </h2>
              <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-6">
                Fixed packages can look simple, but they often force you into a predetermined menu, guest count band, or service style that does not match your event. A custom quote starts from your brief and builds outward.
              </p>
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=dubai-catering-prices-guide" className="btn-primary">Get My Custom Quote</Link>
            </div>
            <div className="space-y-4">
              {whyCustom.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Dubai Examples ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DUBAI EVENT EXAMPLES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Typical Catering Scenarios in Dubai
            </h2>
          </div>

          <div className="price-dubai grid md:grid-cols-2 gap-6">
            {dubaiExamples.map((ex, i) => (
              <div key={i} className="price-dubai-card bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{ex.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{ex.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Catering Services & Guides
          </h2>

          <div className="price-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="price-link-item group flex items-center justify-between bg-black p-6 opacity-0 hover:bg-[#222] transition-colors"
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
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Catering Prices FAQ
          </h2>

          <div className="price-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="price-faq-item border border-gray-200 opacity-0 translate-y-5">
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
        <div className="container-custom text-center price-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Get a Transparent Catering Quote
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we will send an itemised custom proposal that matches your menu, guest count, and venue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=dubai-catering-prices-guide" className="btn-primary">Get My Custom Quote</Link>
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

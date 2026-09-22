import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /bar-services-dubai
//     primary:     "bar services dubai"
//     subkeywords: "mobile bar hire dubai price" · "bar hire packages dubai" · "bartender hire dubai" · "mocktail bar catering price per person dubai" · "mocktail bar birthday party dubai" · "mocktail bar dubai" · "event bartender dubai" · "mocktail bar catering menu dubai" · "oyster bar catering price per person dubai" · "bartender for birthday party dubai" · "mocktail station dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Wine,
  Users,
  GlassWater,
  Leaf,
  Ship,
  Home,
  Heart,
  Building2,
  PartyPopper,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to enquire about bar services and bartender hire in Dubai (via mychef.ae/bar-services-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const barFormats = [
  {
    icon: Wine,
    title: 'Mobile bar',
    description: 'A bar counter, glassware, ice and mixers delivered to a villa, yacht or venue. Alcohol is poured only where the licence or the quotation says so.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Users,
    title: 'Bartender hire',
    description: 'Bartenders and bar backs sized to the guest count. The quote names how many people stand behind the bar.',
    link: '/bar-services-dubai',
  },
  {
    icon: GlassWater,
    title: 'Cocktails, where permitted',
    description: 'A drinks list written for the room. Spirits are supplied by us or BYO. The policy is on the proposal before setup.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Mocktail bar',
    description: "Alcohol-free cocktails served with the same attention to presentation, glassware and hospitality as a complete bar service.",
    link: '/bar-services-dubai',
  },
]

const includedItems = [
  { title: 'Drinks list', description: 'Cocktails, mocktails or both, written for the guest list and the licence on the night.' },
  { title: 'Bartenders and bar backs', description: 'Staff scaled to headcount so the queue does not sit on the host.' },
  { title: 'Bar, glassware and garnishes', description: 'Counter, glassware, ice, garnishes and tools. You do not hire them separately unless you want to.' },
  { title: 'Spirits, mixers or BYO', description: 'We can supply the alcohol where the venue is licensed, or run a BYO bar you have already bought. The quote says which.' },
  { title: 'Mocktails', description: 'Zero-proof drinks for mixed tables, family nights and rooms that do not serve alcohol. Mocktail bars sit here.' },
  { title: 'Ice and mixers', description: 'Ice, soda, juice and syrups travel with the bar.' },
  { title: 'Licence on the paper', description: 'Alcohol is only poured where the venue, the operator or the quotation allows it. We will not invent a workaround.' },
  { title: 'Setup, service and pack-down', description: 'Delivery, build, service window and clear-down. You are not washing glasses at midnight.' },
]

const useCases = [
  {
    title: 'Yacht parties',
    description: 'A compact bar on a charter. The operator’s rules decide alcohol. We work to their loading window and leave the galley clear.',
    link: '/yachts',
  },
  {
    title: 'Villa dinners and house parties',
    description: 'A bar in the home you are hosting in. Mocktails by default if the sitting is mixed. Alcohol only when the quotation says so.',
    link: '/villas-private-residences',
  },
  {
    title: 'Weddings and engagements',
    description: 'A drinks list timed to the ceremony and the meal. Toast service is planned with the wedding catering, not as a surprise add-on.',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Corporate launches and galas',
    description: 'A bar that can run dry if the brief is dry, or pour where the venue is licensed. First impressions are the drinks arriving on time.',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Birthdays',
    description: 'A bartender for a birthday at home, with a mocktail list for younger guests and a licensed pour only when that is the brief.',
    link: '/birthday-catering-dubai',
  },
]

const sampleMenu = [
  { name: 'Date and rose spritz', description: 'A light, alcohol-free refresher. The same glass if the bar later adds a licensed pour.' },
  { name: 'Yuzu basil smash', description: 'Citrus and basil. Built as a mocktail unless the quote includes spirits.' },
  { name: 'Smoked old fashioned', description: 'A classic, only when the venue is licensed and the quotation includes spirits.' },
  { name: 'Passionfruit nojito', description: 'Mint, lime and passionfruit. Alcohol-free.' },
]

const galleryImages = [
  { src: '/menu-cocktails.webp', alt: 'Premium cocktail and bar service in Dubai' },
  { src: '/service-events.webp', alt: 'Mobile bar setup for an event in Dubai' },
  { src: '/service-villa.webp', alt: 'Villa party bartender service in Dubai' },
  { src: '/service-yacht.webp', alt: 'Yacht bar service in Dubai marina' },
  { src: '/service-corporate.webp', alt: 'Corporate event bar service in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Canapés and cocktails served at a Dubai event' },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Jumeirah Islands', slug: 'jumeirah-islands' },
  { name: 'Al Barari', slug: 'al-barari' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Meydan', slug: 'meydan' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'Do you provide bartenders and a mobile bar for private events in Dubai?',
    a: 'Yes. Bartenders, a bar counter, glassware, ice, mixers and garnishes for villas, yachts and venues. Alcohol is poured only where the licence or the quotation says so.',
  },
  {
    q: 'Can you create a custom cocktail menu for our event?',
    a: 'Yes. The drinks list is written for the guest list. Cocktails sit on the proposal only when the venue is licensed or you are running a lawful BYO bar.',
  },
  {
    q: 'Do you offer non-alcoholic / mocktail bars?',
    a: "Yes. We can arrange an alcohol-free bar with a tailored mocktail menu, bartenders and the agreed glassware and equipment.",
  },
  {
    q: 'What types of events do you provide bar services for?',
    a: 'Weddings, yacht charters, villa dinners, corporate nights, galas, birthdays and brand events, when the drinks brief is part of the catering.',
  },
  {
    q: 'Is glassware and bar equipment included?',
    a: 'Yes, unless you ask to use the venue’s kit. Glassware, tools, ice, garnishes and the counter are listed on the quote.',
  },
]

const relatedServices = [
  {
    title: 'Cocktail party catering',
    description: 'Standing receptions: passed canapés from AED 150 per person, plus the bar when the room is licensed.',
    image: '/menu-cocktails.webp',
    link: '/cocktail-party-catering-dubai',
  },
  {
    title: 'Mocktail bar',
    description: 'Alcohol-free drinks on this same bar service. Not a second product page.',
    image: '/service-events.webp',
    link: '/bar-services-dubai',
  },
  {
    title: 'Wedding catering',
    description: 'The meal, the team and the clear-down. Drinks sit on the same proposal when you want them.',
    image: '/service-villa.webp',
    link: '/wedding-catering-dubai',
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

const serviceSchema = {
  '@type': 'Service',
  name: 'Bar Services Dubai',
  serviceType: 'Bar & Bartender Hire Service',
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

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Bar Services Dubai', item: 'https://www.mychef.ae/bar-services-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in bar services in Dubai. Date: __ Guests: __ Area: __"
export default function BarServices() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bar-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bar-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bar-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bar-fmt-card', {
      scrollTrigger: { trigger: '.bar-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bar-uc-item', {
      scrollTrigger: { trigger: '.bar-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-menu-item', {
      scrollTrigger: { trigger: '.bar-menu-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-inc-item', {
      scrollTrigger: { trigger: '.bar-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-gallery-img', {
      scrollTrigger: { trigger: '.bar-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bar-faq-item', {
      scrollTrigger: { trigger: '.bar-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-loc-item', {
      scrollTrigger: { trigger: '.bar-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bar-rel-card', {
      scrollTrigger: { trigger: '.bar-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bar-cta', {
      scrollTrigger: { trigger: '.bar-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Bar Services Dubai | myCHEF"
        description="Bar services Dubai: bartender hire, a mobile bar, mocktails, and cocktails only where the venue is licensed. Setup, service and clear-down on one quote."
        canonicalPath="/bar-services-dubai"
        ogImage="/images/bar-services-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/bar-services-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bar-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Bar Services Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bar-hero-h1">
            Bar Services Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bar-hero-sub">
            Bar services in Dubai, with professional bartenders, a mobile bar, glassware and a tailored drinks list. Alcohol-free options are available as standard; alcohol service requires a permitted venue and written confirmation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 bar-hero-cta">Get My Bar Services Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bar-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section></NonCateringVisual>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">MOBILE BARS AND BARTENDERS</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            What bar services Dubai includes
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Bar services in Dubai can include bartenders, a mobile setup, glassware, ice and a drinks menu tailored to your event. Mocktails work across family and corporate occasions. Any alcohol service is confirmed with the venue or yacht operator and recorded in your booking.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            There is no published per-person floor for the bar alone. Staffing can sit inside a catering quote (full service with bartender is a 1.3 multiplier on the food floor). Spirits, BYO and extra hours are named as lines. 5% VAT is shown separately.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Pair the bar with <Link to="/cocktail-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cocktail party catering</Link> when the food is passed canapés. A dry room still gets a mocktail bar on this URL, not a second page.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">BAR SERVICE FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Four ways the bar is staffed
            </h2>
          </div>

          <div className="bar-fmt-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bar-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">EVENTS WE SERVE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Drinks service for your chosen setting
            </h2>
          </div>

          <div className="bar-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => {
              const icons = [Ship, Home, Heart, Building2, PartyPopper]
              const Icon = icons[i % icons.length]
              return (
                <Link
                  key={i}
                  to={uc.link}
                  className="bar-uc-item group bg-charcoal p-8 opacity-0 translate-y-10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={28} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">{uc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    {uc.title} <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Sample Menu ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">SIGNATURE SIPS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Sample drinks, then the quote names them
            </h2>
          </div>

          <div className="bar-menu-grid grid md:grid-cols-2 gap-6">
            {sampleMenu.map((item, i) => (
              <div key={i} className="bar-menu-item bg-white p-6 opacity-0 translate-y-8">
                <h4 className="font-playfair text-h4 text-black mb-2">{item.name}</h4>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What the bar quote lists
          </h2>

          <div className="bar-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bar-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: Gallery ═══════════════ */}
      <NonCateringVisual><section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            The bar in the room
          </h2>

          <div className="bar-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bar-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section></NonCateringVisual>

      {/* ═══════════════ Section 8: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Bar Services Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 9: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Bar Service Across Dubai
          </h2>

          <div className="bar-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="bar-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="bar-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bar-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <NonCateringVisual><div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div></NonCateringVisual>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    {svc.title} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 11: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bar-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Tell us the venue and whether alcohol is allowed
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, guest count, area and drinks brief. We typically reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get My Bar Services Quote</Link>
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

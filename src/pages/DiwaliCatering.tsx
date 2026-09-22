import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /diwali-catering-dubai
//     primary:     "diwali catering dubai"
//     subkeywords: "diwali catering dubai price" · "diwali catering cost per person dubai" · "best diwali catering dubai" · "diwali catering packages dubai" · "diwali catering menu dubai" · "vegetarian diwali catering dubai" · "diwali food items" · "diwali food catering near me" · "diwali buffet style food" · "diwali food facts" · "diwali food traditions" · "diwali traditional food"
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
  Flame,
  Leaf,
  Cake,
  ChefHat,
  Home,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { eventSchema } from '../utils/schema'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Diwali catering in Dubai (via mychef.ae/diwali-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const diwaliFormats = [
  {
    icon: Flame,
    title: 'Indian festive menus',
    description: 'North and South Indian dishes for Diwali: curries, biryanis, breads and rice, written for this guest list.',
    link: '/indian-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Vegetarian and Jain spreads',
    description: 'Meat-free Diwali tables with paneer, dals, sabzis and chaat. Jain notes belong in the first draft. Halal and Jain are never combined as one line.',
    link: '/vegetarian-catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Live chaat stations',
    description: 'Chaat and dosa finished in front of guests. Power and queue space belong in the brief.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Cake,
    title: 'Mithai and sweet tables',
    description: 'Laddoo, barfi, jalebi and gulab jamun, sized to the guest count, or a wider sweet table when you ask.',
    link: '/dessert-table-catering-dubai',
  },
  {
    icon: Home,
    title: 'Home and family Diwali',
    description: 'Cooking and service at your address so the hosts can stay with the table.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Corporate and villa Diwali',
    description: 'Setup, cooking, service and pack-down at an office or villa you control.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'North and South Indian menus', description: 'Curries, biryanis, breads, dosas and rice, cut to who is eating.' },
  { title: 'Vegetarian and Jain options', description: 'Meat-free and Jain dishes when those notes are in the brief.' },
  { title: 'Live chaat and dosa stations', description: 'Finished in front of guests when the room should move.' },
  { title: 'Mithai', description: 'Laddoo, barfi, jalebi and gulab jamun, or a wider sweet table when quoted.' },
  { title: 'Halal ingredients', description: 'Non-vegetarian dishes use halal sourcing by default.' },
  { title: 'Spice levels', description: 'Heat written into the draft. Mild and hotter dishes can sit side by side, labelled.' },
  { title: 'Service staff', description: 'Waiters sized to the format. Drop-off is food only.' },
  { title: 'Setup and pack-down', description: 'We arrive, serve and leave the kitchen as we found it.' },
]

const useCases = [
  {
    title: 'Home and family Diwali',
    description: 'A family table at your address. You light the diyas. We cook and clear.',
  },
  {
    title: 'Corporate Diwali functions',
    description: 'An office or client sitting with a clock: buffet, a chaat station if the brief needs it, mithai, then pack-down.',
  },
  {
    title: 'Vegetarian and Jain gatherings',
    description: 'A meat-free table of paneer, dals, sabzis and chaat. Jain rules are a separate brief, not a combined line with halal.',
  },
  {
    title: 'Villa and large celebrations',
    description: 'Guest count, access and live stations decide the crew. Quality is matched to the night, not promised as a slogan.',
  },
]

const galleryImages = [
  { src: '/menu-meat.webp', alt: 'Indian festive mains for Diwali in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Traditional Diwali mithai and sweets' },
  { src: '/service-events.webp', alt: 'Diwali celebration catering event in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Indian chaat and appetizers for Diwali' },
  { src: '/service-villa.webp', alt: 'Villa Diwali catering styling in Dubai' },
  { src: '/service-catering.webp', alt: 'Diwali festive buffet catering spread' },
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
    q: 'What kind of Diwali menus do you offer?',
    a: 'North and South Indian dishes: curries, biryanis, breads, dosas, rice and mithai. The list is cut to the kitchen and the guest list, including vegetarian Diwali catering Dubai when that is the brief.',
  },
  {
    q: 'Can you cater fully vegetarian and Jain spreads?',
    a: 'Yes. Vegetarian and Jain notes belong in the first draft. They are different systems. We do not combine them as one line.',
  },
  {
    q: 'Do you offer live chaat and dosa stations?',
    a: 'Yes. Live stations start from the published floor of AED 150 per person before 5% VAT. Power and queue space sit in the quote.',
  },
  {
    q: 'Do you provide Diwali mithai and sweets?',
    a: 'Yes. Laddoo, barfi, jalebi and gulab jamun, sized to the guest count, or a wider sweet table when you ask.',
  },
  {
    q: 'Can you adjust spice levels for mixed guests?',
    a: 'Yes. Mild and hotter dishes can sit side by side, labelled.',
  },
  {
    q: 'How far in advance should I book Diwali catering?',
    a: 'Four to six weeks is the usual window. Live stations and larger villas book earlier.',
  },
  {
    q: 'Is Diwali food items the same as Diwali catering Dubai?',
    a: 'A list of dishes is not a sitting. Diwali catering Dubai is the menu, the team at your address, and an itemised quote: food, staff and 5% VAT on separate lines.',
  },
  {
    q: 'Do you also do Diwali traditional food?',
    a: 'Yes, when those dishes fit this table. Send the date, guest count and area. We send a menu draft before anyone cooks.',
  },
]

const relatedServices = [
  {
    title: 'Indian Catering',
    description: 'Year-round Indian menus. This page is the Diwali date on that kitchen.',
    image: '/menu-meat.webp',
    link: '/indian-catering-dubai',
  },
  {
    title: 'Vegetarian Catering',
    description: 'Meat-free tables, including Jain notes when they are in the brief.',
    image: '/menu-appetizer.webp',
    link: '/vegetarian-catering-dubai',
  },
  {
    title: 'Live Cooking Stations',
    description: 'Chaat, dosa and other stations, quoted as a format.',
    image: '/service-events.webp',
    link: '/live-cooking-stations-dubai',
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
  name: 'Diwali Catering Dubai',
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

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Diwali Catering Dubai', item: 'https://www.mychef.ae/diwali-catering-dubai' },
  ],
}

const diwaliEventSchema = eventSchema(
  'Diwali Catering Dubai',
  'Festive Indian Diwali catering in Dubai with vegetarian and Jain spreads, live chaat stations, and traditional mithai.',
  undefined,
  undefined,
  'Dubai',
  '/diwali-catering-dubai',
)

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, diwaliEventSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Diwali quote in Dubai. Date: __ Guests: __ Area: __"
export default function DiwaliCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.diw-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.diw-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.diw-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.diw-fmt-card', {
      scrollTrigger: { trigger: '.diw-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.diw-uc-item', {
      scrollTrigger: { trigger: '.diw-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.diw-inc-item', {
      scrollTrigger: { trigger: '.diw-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.diw-gallery-img', {
      scrollTrigger: { trigger: '.diw-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.diw-faq-item', {
      scrollTrigger: { trigger: '.diw-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.diw-loc-item', {
      scrollTrigger: { trigger: '.diw-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.diw-rel-card', {
      scrollTrigger: { trigger: '.diw-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.diw-cta', {
      scrollTrigger: { trigger: '.diw-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Diwali Catering Dubai | myCHEF"
        description="Diwali catering Dubai at your home, office or villa. Vegetarian and Jain notes, chaat stations, mithai. Buffet from AED 120. Itemised quote."
        canonicalPath="/diwali-catering-dubai"
        ogImage="/menu-meat.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/diwali-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 diw-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Diwali Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 diw-hero-h1">
            Diwali Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 diw-hero-sub">
            Diwali catering in Dubai, with regional Indian menus, chaat stations and mithai for home, office and villa celebrations. Vegetarian and Jain requirements are planned from the first menu conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 diw-hero-cta">Get a Diwali Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 diw-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section></NonCateringVisual>

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE FESTIVAL OF LIGHTS IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Diwali catering Dubai for homes and company celebrations
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Diwali catering in Dubai brings curries, biryanis, fresh breads, chaat and mithai to your celebration. We develop the menu around your guests, confirm vegetarian or Jain requirements and coordinate the service at your chosen venue.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A staffed buffet starts from AED 120 per person. Live stations from AED 150. Drop-off from AED 90. All before 5% VAT. No chef is guaranteed by name. The written quote itemises food, staff and VAT.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Year-round Indian menus sit on <Link to="/indian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Indian catering</Link>. Meat-free tables sit on <Link to="/vegetarian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">vegetarian catering</Link>. Chaat and dosa as a format sit on <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">live cooking stations</Link>. This date is one sitting on the <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">festive catering Dubai</Link> calendar. Book four to six weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">DIWALI FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              How Diwali food is served
            </h2>
          </div>

          <div className="diw-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diwaliFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="diw-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE WE SERVE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Home, office, villa
            </h2>
          </div>

          <div className="diw-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="diw-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What a staffed Diwali service includes
          </h2>

          <div className="diw-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="diw-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 6: Gallery ═══════════════ */}
      <NonCateringVisual><section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            How Diwali catering looks in Dubai
          </h2>

          <div className="diw-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="diw-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Questions before you book
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="diw-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="diw-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="diw-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="diw-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Diwali catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center diw-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, guest count and dietary notes
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us home, office or villa, whether the table is vegetarian, and if you want a chaat station. We send an itemised Diwali catering Dubai quote. Book four to six weeks ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a Diwali Quote</Link>
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

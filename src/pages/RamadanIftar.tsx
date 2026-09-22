import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /iftar-catering-dubai
//     primary:     "iftar catering dubai"
//     subkeywords: "iftar catering dubai price" · "iftar catering cost per person dubai" · "best iftar catering dubai" · "iftar catering packages dubai" · "iftar catering menu dubai" · "iftar buffet catering dubai" · "corporate iftar catering dubai" · "iftar catering at home dubai" · "what to eat for iftar" · "best iftar buffet dubai 2026 packages" · "best iftar buffet dubai offers" · "iftar buffet dubai near me"
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
  Moon,
  Star,
  Sun,
  Home,
  UtensilsCrossed,
  Users,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { eventSchema } from '../utils/schema'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss Ramadan Iftar catering (via mychef.ae/iftar-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const ramadanServices = [
  {
    icon: Moon,
    title: 'Private Family Iftar',
    description: 'An Iftar at home or in your villa, with traditional dishes, fresh dates, and a service team for family and close friends.',
    link: '/private-chef-dubai',
  },
  {
    icon: Users,
    title: 'Corporate Iftar',
    description: 'Large-scale Iftar catering for companies, embassies, and organisations, with buffet or plated service and professional staff.',
    link: '/corporate',
  },
  {
    icon: Sun,
    title: 'Suhoor Gatherings',
    description: 'Late-night Suhoor menus served before Fajr, with light, energising dishes, fresh juices, and aromatic Arabic coffee.',
    link: '/catering-dubai',
  },
  {
    icon: Star,
    title: 'Eid Celebration Dining',
    description: 'Festive Eid menus that continue the spirit of Ramadan, from grazing tables to multi-course family feasts.',
    link: '/private-party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Iftar menu written for the table', description: 'A custom menu designed around your guest count, preferences, and any dietary or halal requirements.' },
  { title: 'Traditional Date & Soup Service', description: 'Dates, Arabic coffee, and warming soups served at sunset to break the fast with intention.' },
  { title: 'Hot & Cold Mezze', description: 'A generous selection of freshly prepared mezze, salads, and bread to share around the table.' },
  { title: 'Mains & Grills', description: 'Slow-cooked tagines, grilled meats, seafood, and vegetarian dishes prepared in your kitchen or event space.' },
  { title: 'Arabic Desserts & Fresh Juices', description: 'Kunafa, qatayef, baklava, and Ramadan juices to close the meal on a sweet note.' },
  { title: 'Service Staff & Setup', description: 'Professional chefs, waiters, and hosts who manage buffet or table service from arrival to clear-down.' },
  { title: 'Equipment & Tableware', description: 'Chafing dishes, serving platters, linens, and tableware supplied and removed after service.' },
  { title: 'Full Kitchen Cleanup', description: 'We leave your kitchen and dining space clean, so you can focus on prayer and family time.' },
]

const menuHighlights = [
  'Dates & Arabic Coffee',
  'Lentil & Cream Soups',
  'Hot & Cold Mezze',
  'Mixed Grills',
  'Lamb & Chicken Tagines',
  'Seafood Dishes',
  'Vegetarian & Vegan Options',
  'Arabic Desserts',
  'Ramadan Juices',
  'Karak Chai',
]

const howItWorks = [
  { title: 'Share Your Iftar Plans', description: 'Tell us your dates, guest count, location in Dubai, and any dietary or halal requirements for the gathering.' },
  { title: 'Receive a Custom Proposal', description: 'We design an Iftar menu with traditional and contemporary dishes, service style, and staffing plan.' },
  { title: 'Confirm Your Booking', description: 'Once the menu and logistics are approved, we lock in your preferred Ramadan dates and confirm every detail.' },
  { title: 'We Source Ingredients', description: 'Chefs in our network shop for fresh produce, premium proteins, dates, and specialty ingredients ahead of the event.' },
  { title: 'Arrive & Prepare On-Site', description: 'Chefs and service staff arrive early to set up, prepare dishes, and be ready the moment the fast is broken.' },
  { title: 'Serve, Support & Clean', description: 'We host your Iftar service, attend to guests, and clear away everything afterwards, leaving your space tidy.' },
]

const useCases = [
  {
    title: 'Family Iftar at Home',
    description: 'Gather relatives in your villa or apartment for a relaxed Iftar where traditional dishes, fresh dates, and warm service create the atmosphere of a shared, meaningful evening.',
  },
  {
    title: 'Corporate Iftar Events',
    description: 'Host employees, clients, or partners in your office, hotel ballroom, or event space with a polished buffet, live cooking stations, and professional staff throughout Ramadan.',
  },
  {
    title: 'Community & Embassy Iftars',
    description: 'We coordinate catering for larger community gatherings with menus that scale and service timed to sunset.',
  },
  {
    title: 'Suhoor Before Fajr',
    description: 'For late-night gatherings, we serve light, energising Suhoor menus with pastries, yoghurt, fruit, and coffee so guests are ready for the day ahead.',
  },
]

const faqs = [
  {
    q: 'Do you cater Iftar for both small families and large companies?',
    a: 'Yes. We coordinate catering intimate family Iftars at home as well as large corporate, embassy, and community Iftars in hotels, offices, and event spaces across Dubai.',
  },
  {
    q: 'Can the menu include traditional Ramadan dishes?',
    a: 'Absolutely. Our Iftar menus feature dates, Arabic coffee, lentil soup, hot and cold mezze, grills, tagines, Arabic desserts, and Ramadan juices, all adapted to your preferences.',
  },
  {
    q: 'Do you accommodate halal and dietary requirements?',
    a: 'Yes. your chef prepares halal menus and can accommodate vegetarian, vegan, gluten-free, dairy-free, and allergy-aware requirements with advance notice.',
  },
  {
    q: 'Can you provide service staff and equipment?',
    a: 'Yes. Our Iftar catering includes chefs, service staff, chafing dishes, serving platters, linens, and tableware, plus full setup and clear-down.',
  },
  {
    q: 'How far in advance should I book Ramadan catering?',
    a: 'We recommend booking as early as possible during Ramadan, especially for weekends and corporate events. Two to four weeks ahead is ideal, though we do accommodate last-minute requests when possible.',
  },
  {
    q: 'Do you also cater Suhoor and Eid celebrations?',
    a: 'Yes. In addition to Iftar, we offer Suhoor catering before Fajr and festive Eid dining menus for family gatherings and celebrations.',
  },
  { q: "How much does Iftar catering cost per person in Dubai?", a: "Iftar catering in Dubai is quoted per event rather than a fixed per-head rate, because the price depends on your guest count, menu, service style, and location. A relaxed home Iftar buffet sits at a different level than a full villa spread with live stations and staff, so we build a custom quote around exactly what you want. Share your plans through our [contact page](/contact) and we typically acknowledge enquiries within 15 minutes during business hours. The detailed proposal follows after a review of the brief." },
  { q: "What exactly is included in the price of your Iftar catering?", a: "Every Iftar quote includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards. There are no hidden extras for the core service, and serving staff can be added when you want table or buffet service handled for you. Prices are subject to 5% VAT, and we confirm the full inclusions in writing before you book." },
  { q: "What is the difference between Iftar catering and just ordering Iftar boxes?", a: "Iftar catering means we design your menu, cook fresh on-site, and serve and clean up, while boxed delivery is simply pre-packed meals dropped off. We are a full-service private chef and catering company, so our chefs prepare everything for your gathering the same evening rather than reheating trays. This is why a catered Iftar feels like a hosted occasion rather than a food order." },
  { q: "Is your Iftar food halal?", a: "Yes, all of our Iftar menus are halal sourced by default, which is essential for authentic Ramadan hospitality. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and we source ingredients from trusted halal suppliers for every dish. If you have specific sourcing or preparation requests, we confirm them in your proposal." },
  { q: "Are you a licensed and food-safe catering company?", a: "myCHEF coordinates services through culinary partners. Food handling, transport and service arrangements are reviewed for the booking. If your venue or organisation requires specific licensing or food-safety documentation, tell us early so the relevant information can be requested and reviewed before confirmation." },
  { q: "What is the minimum number of guests you cater Iftar for?", a: "We cater Iftars of almost any size, from an intimate family table to large corporate and community gatherings of several hundred guests. There is no rigid minimum for a private chef Iftar at home, and larger events simply mean more staff and a scaled menu. Tell us your expected guest count and we will design the right format around it." },
  { q: "Can you handle very large corporate or labour-camp Iftars?", a: "Yes, we regularly cater large-scale corporate, embassy, and community Iftars alongside intimate home dinners. For big volumes we scale the menu, staff, and equipment so hundreds of guests are served smoothly at sunset. See our [corporate catering](/corporate) options for offices, ballrooms, and event spaces across Dubai." },
  { q: "Do you provide serving staff and waiters for Iftar?", a: "Yes, professional serving staff are available as an option and manage buffet or plated service from arrival through clear-down. For plated Iftars we recommend enough staff to serve every table promptly the moment the fast is broken, while buffets need fewer servers. You choose the level of service, and we build the staffing plan into your quote." },
  { q: "Should I choose a buffet or plated Iftar service?", a: "Buffets suit larger, relaxed Iftars where guests enjoy variety and easy flow, while plated service fits smaller, more formal gatherings that need a refined touch. Many Iftars work best as a hybrid: dates, soup, and light starters ready at sunset, then a buffet or station service for the mains. We advise on the right format for your guest count and space during planning." },
  { q: "Can you accommodate vegetarian, vegan, and allergy needs at an Iftar?", a: "Yes, we build vegetarian, vegan, gluten-free, dairy-free, and allergy-aware dishes into your Iftar menu with advance notice. Because every menu is designed from scratch, we can balance traditional Ramadan favourites with options that suit every guest at the table. Just share dietary requirements when you enquire so we plan and source accordingly." },
  { q: "How does the timing work so everything is ready exactly at sunset?", a: "Our chefs and service staff arrive early to set up and prepare so dates, water, and soup are ready the moment the fast is broken. We plan the whole service around Maghrib, staggering starters, mains, and desserts so nothing arrives cold or rushed. Punctual timing is the heart of a good Iftar, and we manage it precisely for you." },
  { q: "Can you cater Iftar in my villa, apartment, office, or a hotel venue?", a: "Yes, we cook and serve Iftar wherever you are hosting, including villas, apartments, offices, event spaces, and hotel venues across Dubai. Our chefs bring the menu, equipment, and staff to your location and set up around your space. We cater regularly in [villas and private residences](/villas-private-residences) as well as corporate settings." },
  { q: "How far in advance should I book Iftar catering during Ramadan?", a: "Booking two to four weeks ahead is ideal during Ramadan, especially for weekends, Eid, and larger corporate Iftars, since dates fill quickly. Because Ramadan is a peak period alongside the busy November-to-March season, early booking secures your preferred evening and menu. We do accommodate shorter-notice requests when our schedule allows, so it is always worth asking." },
  { q: "Do you also cater Suhoor and Eid meals, not just Iftar?", a: "Yes, alongside Iftar we cater late-night Suhoor gatherings before Fajr and festive Eid celebration menus. Suhoor menus focus on light, energising dishes and coffee, while [Eid catering](/eid-catering-dubai) continues the celebration with grazing tables and family feasts. Many clients book us across the whole holy month and into Eid." },
  { q: "How is a hosted Iftar at home different from a hotel buffet?", a: "A hosted Iftar is cooked for your table and served in your own space. A hotel buffet is a fixed menu in a dining room you did not book. We write the menu around your preferences, guest count and dietary needs, then clear down. If you want a standing household chef rather than one night, that sits on our [private chef service](/private-chef-dubai)." },
  {
    q: 'What to eat for iftar?',
    a: 'For what to eat for iftar we plan the menu around the occasion and the room: plated, buffet, canapés or live stations. We bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef Dubai',
    description: 'Explore a regular household chef arrangement for meals throughout Ramadan.',
    image: '/service-catering.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for boardrooms, offices, and company events across Dubai.',
    image: '/service-events.webp',
    link: '/corporate',
  },
  {
    title: 'Party Catering',
    description: 'Catering for celebrations, from a small table to a large guest list.',
    image: '/service-villa.webp',
    link: '/private-party-catering-dubai',
  },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


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
  name: 'Iftar Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
    { '@type': 'ListItem', position: 3, name: 'Iftar Catering Dubai', item: 'https://www.mychef.ae/iftar-catering-dubai' },
  ],
}

const iftarEventSchema = eventSchema(
  'Iftar Catering Dubai',
  'Ramadan Iftar private chef and buffet catering in Dubai for family, corporate, and community gatherings.',
  undefined,
  undefined,
  'Dubai',
  '/iftar-catering-dubai',
)

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, iftarEventSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Iftar quote in Dubai. Date: __ Guests: __ Area: __"
export default function RamadanIftar() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.iftar-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.iftar-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.iftar-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.iftar-fmt-card', {
      scrollTrigger: { trigger: '.iftar-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.iftar-inc-item', {
      scrollTrigger: { trigger: '.iftar-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.iftar-menu-item', {
      scrollTrigger: { trigger: '.iftar-menu-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out',
    })

    gsap.to('.iftar-step', {
      scrollTrigger: { trigger: '.iftar-steps-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.iftar-why', {
      scrollTrigger: { trigger: '.iftar-why-section', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.iftar-uc-item', {
      scrollTrigger: { trigger: '.iftar-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.iftar-faq-item', {
      scrollTrigger: { trigger: '.iftar-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.iftar-loc-item', {
      scrollTrigger: { trigger: '.iftar-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.iftar-rel-card', {
      scrollTrigger: { trigger: '.iftar-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.iftar-cta', {
      scrollTrigger: { trigger: '.iftar-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Iftar Catering Dubai | myCHEF"
        description="Iftar catering Dubai: dates at Maghrib, mezze and grills after, cooked in your home, villa, office or event space. Itemised quote, then we clear down."
        canonicalPath="/iftar-catering-dubai"
        ogImage="/service-catering.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/ramadan-iftar-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 iftar-hero-h1" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/catering-dubai" className="text-gray-400 hover:text-gold transition-colors">Catering</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Iftar Catering Dubai</span></li>
            </ol>
          </nav>

          <p className="font-inter text-caption uppercase tracking-[0.2em] text-gold mb-4 opacity-0 translate-y-4 iftar-hero-h1">
            Ramadan Kareem
          </p>
          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 iftar-hero-h1">
            Iftar Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 iftar-hero-sub">
            Iftar catering in Dubai, with dates, water and soup ready for Maghrib, followed by mezze, grills and desserts. Menus and service are planned for family tables, office gatherings and larger occasions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 iftar-hero-cta">Get an Iftar Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 iftar-hero-cta"
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
          <SectionLabel align="center">RAMADAN IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Iftar service ready for Maghrib
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Iftar service is planned around the moment the fast breaks. We coordinate dates, water and soup for Maghrib, followed by the main meal and desserts, with the chef and service team briefed on your guest count, setting and timings.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients. Dietary notes go into the first menu draft.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Chefs in our network bring the menu, staff and setup to your villa, apartment, office, hotel or event space. Menus follow guest count, dietary needs and how formal the sitting is. Iftar is one night on the{' '}
            <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
              festive catering Dubai
            </Link>{' '}
            calendar, next to Eid, Diwali and Christmas.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Target Audience ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">Who We Serve</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Family tables, offices and community Iftars
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 border border-gray-200">
              <Home className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Families & Homes</h3>
              <p className="font-inter text-body-sm text-gray-500">Relaxed Iftars in villas and apartments across Dubai, with traditional dishes served to family and friends.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <Users className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Companies & Teams</h3>
              <p className="font-inter text-body-sm text-gray-500">Corporate Iftars in offices, hotels, and event venues, with polished buffet or plated service.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <Star className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Communities & Embassies</h3>
              <p className="font-inter text-body-sm text-gray-500">Larger community Iftars with a menu that scales, and service timed to sunset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Service Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">RAMADAN SERVICES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Iftar, Suhoor & Eid
            </h2>
          </div>

          <div className="iftar-fmt-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ramadanServices.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="iftar-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Our Iftar Catering Includes
          </h2>

          <div className="iftar-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="iftar-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 6: Menu Highlights ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">MENU HIGHLIGHTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              What usually sits on an Iftar table
            </h2>
          </div>

          <div className="iftar-menu-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuHighlights.map((item, i) => (
              <div key={i} className="iftar-menu-item bg-black p-6 text-center opacity-0 translate-y-6">
                <UtensilsCrossed size={24} className="text-gold mx-auto mb-3" />
                <p className="font-inter text-sm text-white">{item}</p>
              </div>
            ))}
          </div>

          <p className="font-inter text-body text-gray-400 text-center max-w-[700px] mx-auto mt-10 leading-relaxed">
            Every Iftar menu is built from scratch. We do not use a fixed set menu. We combine Ramadan staples with dishes that suit this table, so the spread is familiar without being copied from a hotel buffet.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 7: How It Works ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">THE PROCESS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              How Iftar Catering Works
            </h2>
          </div>

          <div className="iftar-steps-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="iftar-step bg-cream p-8 opacity-0 translate-y-8">
                <span className="font-playfair text-[48px] text-gold/30 leading-none block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-inter text-base font-semibold text-black mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Maghrib timing ═══════════════ */}
      <section className="iftar-why-section bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="iftar-why opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white mb-8 text-center">
              Dates, soup and service ready at Maghrib
            </h2>
            <div className="space-y-5">
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed">
                Ramadan catering in Dubai fails when the food is late. Chefs in our network and the service team arrive early, hold hot and cold dishes at the right temperature, and put dates, water and soup on the table when the fast breaks. The rest of the menu follows without a rush.
              </p>
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed">
                We plan the Iftar around your schedule, your space and your guests. Menus are written for the table. Dietary notes go into the first draft. Setup, service and clear-down stay with the team so you are not in the kitchen after Maghrib.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Use Cases ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">DUBAI IFTAR OCCASIONS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Iftar Catering for Every Setting
            </h2>
          </div>

          <div className="iftar-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="iftar-uc-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h2 text-white text-center mb-10">
            Explore More from myCHEF Dubai
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Related Services</h3>
              <ul className="space-y-3">
                <li><Link to="/catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Luxury Catering Dubai</Link></li>
                <li><Link to="/private-chef-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Private Chef Dubai</Link></li>
                <li><Link to="/corporate" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Corporate Catering</Link></li>
                <li><Link to="/private-party-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Party Catering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Related Seasonal Services</h3>
              <ul className="space-y-3">
                <li><Link to="/ramadan-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Suhoor Catering Dubai</Link></li>
                <li><Link to="/ramadan-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Ramadan Catering Dubai</Link></li>
                <li><Link to="/eid-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Eid Catering Dubai</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Popular Locations</h3>
              <ul className="space-y-3">
                <li><ArrowRight size={14} /> Downtown Dubai</li>
                <li><ArrowRight size={14} /> Dubai Marina</li>
                <li><ArrowRight size={14} /> Palm Jumeirah</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 11: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Iftar Catering Dubai: the questions we get before a booking
            </h2>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 12: Locations ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Iftar Catering Across Dubai
          </h2>

          <div className="iftar-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="iftar-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 13: Related Services ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="iftar-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="iftar-rel-card group bg-black overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 14: Final CTA ═══════════════ */}
      <section className="iftar-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, the headcount and the address
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Ramadan evenings fill quickly. Share the date, guest count and venue and we will send an Iftar menu and service plan for your home, office or event space in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get an Iftar Quote</Link>
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
          <p className="font-inter text-body-sm text-gray-500 mt-6">
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}

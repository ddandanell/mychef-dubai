// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /live-cooking-stations-dubai
//     primary:     "live cooking stations dubai"
//     subkeywords: "live cooking stations dubai price" · "live cooking station price per person dubai" · "best live cooking stations dubai" · "live cooking stations packages dubai" · "live cooking stations menu dubai" · "halal live cooking stations dubai" · "live station catering dubai" · "live pasta station dubai" · "live cooking station ideas" · "live cooking classes" · "shawarma live station" · "private classes for cooking"
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
  ChefHat,
  Flame,
  Soup,
  Beef,
  Heart,
  Building,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import { CATERING_FORMAT_BY_ID } from '@/content/cateringPricing'

const BBQ = CATERING_FORMAT_BY_ID.bbq

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan live cooking stations in Dubai (via mychef.ae/live-cooking-stations-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const stationFormats = [
  {
    icon: Beef,
    title: 'Carving',
    description: 'A chef carves a joint or roast to order and plates it with sauce. One station, one protein, a queue that has to be planned.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: Soup,
    title: 'Pasta and risotto',
    description: 'Pans finished in front of guests. Sauce and garnish chosen at the counter, not sitting in a chafing dish.',
    link: '/catering-dubai',
  },
  {
    icon: Flame,
    title: 'Grill and BBQ',
    description: 'Open flame where the venue allows it. Same floor as BBQ catering: from AED 150 per person, from 15 guests.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Street-food counters',
    description: 'Arabic, Asian or Mediterranean dishes assembled at the station. Written for the brief, not a world tour for its own sake.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Dessert finish',
    description: 'Crepes, a small cart or plated sweets finished to order. A dessert table is a different page if you want a styled display.',
    link: '/wedding-catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate stations',
    description: 'Signage and a menu that match the launch. The cooking is still a station, not a stage set.',
    link: '/corporate',
  },
  {
    icon: Flame,
    title: 'Shawarma station',
    description: 'A live cone, carved to order, with breads, pickles and sauces. Same kitchen as the other stations. Not a separate product URL.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Soup,
    title: 'Oyster bar',
    description: 'Iced oysters opened in front of guests. Cold-chain and shucking, not a second catering company.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Heart,
    title: 'Dessert cart',
    description: 'Gelato or crepes as a station, not a standalone URL. Pair it with a dessert table when the room needs a finish.',
    link: '/dessert-table-catering-dubai',
  },
]

const includedItems = [
  { title: 'Chefs at the counter', description: 'Independent licensed partners cook at the station for the window in the quote.' },
  { title: 'Finished to order', description: 'Guests choose components. The plate is cooked when they are in front of it.' },
  { title: 'Station mix', description: 'Carving, pasta, grill, shawarma, oyster or dessert: named on the proposal, not guessed on the night.' },
  { title: 'Power, fuel and ventilation', description: 'What the venue will allow is checked before we promise an open flame.' },
  { title: 'Counters and kit', description: 'Stations, signage and holding equipment travel with the team.' },
  { title: 'Runners as quoted', description: 'Station chefs plus extra staff if the queue needs them.' },
  { title: 'Setup and clear-down', description: 'We build the line, run it and pack it out. You are not washing pans.' },
  { title: 'Diets at the station', description: 'Halal by default. Vegetarian, vegan and named allergies labelled at the counter.' },
]

const useCases = [
  {
    title: 'Weddings and receptions',
    description: 'Stations spread a large room so the queue is not one buffet. Carving, pasta or a dessert finish sit next to a seated meal if that is the running order.',
  },
  {
    title: 'Corporate launches',
    description: 'A counter people can stand at in DIFC or Business Bay. Branding is signage and a menu, not a performance.',
  },
  {
    title: 'Villa and garden',
    description: 'Self-contained stations on a terrace in Palm Jumeirah, Emirates Hills or Dubai Hills. The house kitchen is not assumed.',
  },
  {
    title: 'Larger functions',
    description: 'More than one station so the room moves. Headcount sets how many counters, not a wish for theatre.',
  },
]

const galleryImages = [
  { src: '/process-2.webp', alt: 'Chef at a live cooking station in Dubai' },
  { src: '/menu-meat.webp', alt: 'Carving station with prime cuts' },
  { src: '/service-events.webp', alt: 'Live cooking stations at a Dubai event' },
  { src: '/process-3.webp', alt: 'Chef grilling at an interactive station' },
  { src: '/menu-seafood.webp', alt: 'Seafood prepared live at a station' },
  { src: '/service-catering.webp', alt: 'Interactive station catering setup' },
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
    q: 'What are live cooking stations?',
    a: 'Live cooking stations are partner-chef-led counters where dishes are prepared and plated to order in front of your guests. From carving and pasta to grill and dessert stations, the cooking becomes part of the entertainment.',
  },
  {
    q: 'What types of stations can you provide?',
    a: 'We offer carving, pasta and risotto, grill and BBQ, global street food, and live dessert stations, among others. Most events combine several stations to give guests variety and keep the room flowing.',
  },
  {
    q: 'How many guests do live stations work best for?',
    a: `The published minimum is ${BBQ.minGuests} guests. Multiple stations spread a larger room. We add counters so the queue does not stall.`,
  },
  {
    q: 'Are live cooking stations suitable for weddings and corporate events?',
    a: 'Yes. They are a favourite for weddings, galas, product launches, and conferences. The interaction adds theatre and a premium feel, and stations can be branded or themed to match your event.',
  },
  {
    q: 'Do you provide the equipment and setup for each station?',
    a: 'Absolutely. We bring self-contained, professionally styled counters with all cooking equipment, signage, and presentation, plus the chefs and service staff to run them throughout your event.',
  },
  {
    q: 'How far in advance should I book live cooking stations?',
    a: 'For larger events and weddings, we recommend two to four weeks so we can plan the stations and staffing carefully. During peak season (November to March), earlier booking is strongly advised.',
  },
  { q: "How much do live cooking stations cost in Dubai?", a: `Live cooking stations Dubai sit on the BBQ and live-station floor: from AED ${BBQ.fromPerPerson} per person, from ${BBQ.minGuests} guests. Extra counters, waiters and open-flame kit move the total. 5% VAT is a separate line. The calculator uses the same start.` },
  { q: "What's included in the price of a live cooking station?", a: "Every quote includes the full service: menu design, ingredient sourcing and shopping, the styled station counters and equipment, our chefs cooking live on the day, plating and serving, and complete cleanup afterwards. In short, we handle everything end to end so you host without lifting a finger. Serving staff beyond the station chefs are optional and easy to add, and 5% VAT applies to the final quote." },
  { q: "Is there a minimum spend or minimum guest count for live stations?", a: `The published floor is ${BBQ.minGuests} guests, the same as BBQ and live stations on the Catering hub. Below that we will say so and point you at plated dining or a package rather than stretching a counter.` },
  { q: "Are your chefs and stations licensed to Dubai food-safety standards?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and our teams follow proper food-handling, hygiene, and open-flame safety practices on site. This matters especially for live stations, where cooking happens in front of your guests, so everything is prepared and served correctly. You can read more about our standards on our [about](/about) page." },
  { q: "Is the food at your live stations halal?", a: "Yes, we source halal by default across all our live cooking stations, from carving and grill counters to street food and dessert. If your event has specific religious or sourcing requirements, just let us know when you enquire and we'll confirm every detail in your menu. We also cater fully halal private dining if you'd prefer a seated format." },
  { q: "How many live stations do I need for my guest count?", a: "Headcount and which dishes you want cooked set the number of counters. We will not publish a rigid guests-per-station promise. The proposal names how many chefs and stations." },
  { q: "Do you provide serving staff and hosts as well as the station chefs?", a: "Yes. Each station comes with its own chef, and we can add runners, hosts, and serving staff scaled to your guest count and venue. Serving staff are optional, so you choose the level of service that fits your event and budget. Just tell us the style you're after and we'll build the right team into your quote." },
  { q: "Can you set up live cooking stations indoors, and do you handle smoke and ventilation?", a: "Yes, we set up live stations both indoors and outdoors, and we plan each format around your venue's ventilation, power, and space. For enclosed indoor spaces we favour stations that produce minimal smoke, or coordinate with your venue on extraction for open-flame grills. Share your venue details or arrange a walkthrough via our [contact](/contact) page and we'll confirm the safest, cleanest setup." },
  { q: "Do live cooking stations need a lot of space and power at the venue?", a: "Each station needs a modest footprint plus access to power, and open-flame or gas counters need proper clearance and ventilation. Our counters are self-contained and compact, so they fit villa terraces, ballrooms, rooftops, and marquees alike. We assess your venue's layout, power supply, and access in advance so setup is smooth on the day." },
  { q: "Can you cater for guests with allergies and dietary needs at each station?", a: "Yes. We build vegetarian, vegan, gluten-free, and allergy-aware options into every station, and label dishes so guests can choose confidently. Because everything is made to order in front of your guests, we can adapt individual plates on the spot for specific requirements. Let us know your guests' needs in advance and we'll design the stations accordingly." },
  { q: "Which venues and areas in Dubai do you set up live stations in?", a: "We bring live cooking stations to villas, ballrooms, rooftops, gardens, marquees, and corporate venues right across Dubai, including Palm Jumeirah, Emirates Hills, Dubai Hills, DIFC, and Business Bay. Our stations are self-contained, so we can operate at private residences, [yachts](/yachts), and event spaces without a full commercial kitchen on site. Tell us your location and we'll confirm access and setup." },
  { q: "How far in advance do I need to book, especially in peak season?", a: "For most events two to four weeks gives us time to design the stations, plan the menu, and confirm chefs and staff. Peak season in Dubai runs November to March, when wedding and corporate dates fill quickly, so we strongly recommend booking earlier for those months. If your event is sooner, still reach out, we'll always tell you honestly what we can deliver." },
  { q: "Can you brand or theme the stations for a corporate event or launch?", a: "Yes. We design branded, themed station counters with custom signage, styling, and menus to match your company or event look, which makes them a natural talking point at [corporate](/corporate) launches and conferences. The live interaction also breaks the ice and gives your event a premium, memorable edge. Send us your brief and we'll propose a station concept built around it." },
  { q: "How are live cooking stations different from a standard buffet?", a: "With live stations, chefs cook and plate each dish fresh to order in front of guests, so the food is hotter, more interactive, and doubles as entertainment, unlike a buffet where dishes sit pre-prepared in trays. Stations also spread guests around the room and shorten queues at larger events. Many clients combine a couple of live stations with a buffet or plated service for the best of both." },
  { q: "Can I mix live stations with a plated dinner or full catering service?", a: "Absolutely. Live stations pair beautifully with a seated plated dinner, a buffet, or a canapé reception, for example live stations during the drinks reception followed by a plated main course. We design the whole flow as one seamless service through our wider [catering in Dubai](/catering-dubai). Tell us your running order and we'll build a menu and timeline around it." },
  { q: "Do you offer dessert and sweet live stations too?", a: "Yes, our live dessert stations include crepes, flambé, live ice cream, and plated desserts finished to order, making a memorable sweet finale that entertains as much as it tastes. They're a favourite at weddings and celebrations alongside savoury carving, pasta, and grill counters. We'll help you choose the right sweet station to round off your menu." },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Drop-off, buffet, canapés and plated dining. Stations are one format inside that brief.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'BBQ catering',
    description: 'A live grill from AED 150 per person, from 15 guests. Same floor as these stations.',
    image: '/service-events.webp',
    link: '/bbq-catering-dubai',
  },
  {
    title: 'Corporate catering',
    description: 'Boardrooms, launches and team nights. A station is optional, not assumed.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Shawarma station',
    description: 'A live cone on this page. Not a separate catering company.',
    image: '/images/arabic-catering-dubai-hero.webp',
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
  name: 'Live Cooking Stations Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Live Cooking Stations Dubai', item: 'https://www.mychef.ae/live-cooking-stations-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Live Cooking Stations quote in Dubai. Date: __ Guests: __ Area: __"
export default function LiveCookingStations() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.lcs-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.lcs-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.lcs-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.lcs-fmt-card', {
      scrollTrigger: { trigger: '.lcs-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lcs-uc-item', {
      scrollTrigger: { trigger: '.lcs-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lcs-inc-item', {
      scrollTrigger: { trigger: '.lcs-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lcs-gallery-img', {
      scrollTrigger: { trigger: '.lcs-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.lcs-faq-item', {
      scrollTrigger: { trigger: '.lcs-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lcs-loc-item', {
      scrollTrigger: { trigger: '.lcs-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.lcs-rel-card', {
      scrollTrigger: { trigger: '.lcs-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lcs-cta', {
      scrollTrigger: { trigger: '.lcs-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Live Cooking Stations Dubai | myCHEF"
        description="Live cooking stations Dubai from AED 150 per person, from 15 guests: carving, pasta, grill, shawarma or dessert, cooked at the counter. Itemised quote."
        canonicalPath="/live-cooking-stations-dubai"
        ogImage="/process-2.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/live-cooking-stations-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 lcs-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Live Cooking Stations Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 lcs-hero-h1">
            Live Cooking Stations Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lcs-hero-sub">
            Live cooking stations Dubai are counters where a chef finishes the dish in front of guests: carving, pasta, grill, shawarma or dessert. From AED {BBQ.fromPerPerson} per person, from {BBQ.minGuests} guests, before 5% VAT.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 lcs-hero-cta">Build My Live Station Package</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 lcs-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">A COUNTER, NOT A TRAY LINE</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            What live cooking stations Dubai actually are
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Live cooking stations Dubai are self-contained counters: a chef, the kit, and a dish finished when the guest is there. The published floor is the same as BBQ and live stations on the Catering hub: from AED {BBQ.fromPerPerson} per person, from {BBQ.minGuests} guests. Indicative market AED {BBQ.typicalMin}–{BBQ.typicalMax} is not a second start.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Shawarma, an oyster bar and a dessert cart are stations on this page, not separate products. A live pasta station is a pan and a chef, not a class. Private cooking classes live on their own URL if that is the brief.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Independent licensed partners cook. Power, fuel and ventilation are checked before we promise flame. See <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering in Dubai</Link> when you want a buffet or plated service instead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Station Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">STATION TYPES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Which counters the room can hold
            </h2>
          </div>

          <div className="lcs-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stationFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="lcs-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              When a station is the right format
            </h2>
          </div>

          <div className="lcs-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="lcs-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What the station quote lists
          </h2>

          <div className="lcs-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="lcs-inc-item flex gap-3 opacity-0 -translate-x-5">
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
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Counters in the room
          </h2>

          <div className="lcs-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="lcs-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Live cooking stations Dubai: questions before we book the kit
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Live Cooking Stations Across Dubai
          </h2>

          <div className="lcs-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="lcs-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="lcs-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="lcs-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
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

      <LocationStrip title="Live cooking stations across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center lcs-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Tell us the headcount and which counters you want
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, guest count, venue and whether flame is allowed. We typically reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Build My Live Station Package</Link>
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

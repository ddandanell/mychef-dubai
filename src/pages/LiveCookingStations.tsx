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


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan live cooking stations in Dubai (via mychef.ae/live-cooking-stations-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const stationFormats = [
  {
    icon: Beef,
    title: 'Carving Stations',
    description: 'A chef carves roasts, prime cuts, and whole joints to order, plating each portion with sauces and garnishes in front of your guests.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: Soup,
    title: 'Pasta & Risotto',
    description: 'Made-to-order pasta and risotto finished live in the pan, letting guests choose their sauce and watch each plate come together.',
    link: '/catering-dubai',
  },
  {
    icon: Flame,
    title: 'Grill & BBQ Stations',
    description: 'Open-flame grilling of meats, seafood, and vegetables, with the aroma and theatre of live fire cooking at the heart of the room.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Global Street Food',
    description: 'Interactive stations serving Arabic, Asian, and Mediterranean street-food classics, freshly assembled and full of character.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Dessert & Sweet Stations',
    description: 'Live crepes, flambé, ice cream, and plated desserts finished to order — a sweet finale that doubles as entertainment.',
    link: '/wedding-catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Showpieces',
    description: 'Branded, themed stations that become a talking point at launches, conferences, and client events — polished and memorable.',
    link: '/corporate',
  },
  {
    icon: Flame,
    title: 'Shawarma Station',
    description: 'A live shawarma cone, carved to order, with breads, pickles and sauces. Same kitchen as the other stations — not a separate product page.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Soup,
    title: 'Oyster Bar',
    description: 'Iced oysters and seafood opened in front of guests. It is a live station with cold-chain and shucking, not a second catering company.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Heart,
    title: 'Dessert Cart',
    description: 'Gelato, crepes or a small sweet cart as a station, not a standalone URL. Pair it with the dessert counter when the room needs a finish.',
    link: '/dessert-table-catering-dubai',
  },
]

const includedItems = [
  { title: 'Partner Chef-Led Stations', description: 'Skilled chefs cooking and plating live throughout your event.' },
  { title: 'Made-to-Order Dishes', description: 'Guests choose their components and watch each plate finished fresh.' },
  { title: 'Curated Station Menus', description: 'Carving, pasta, grill, street food, and dessert stations, mixed to suit.' },
  { title: 'Theatre & Interaction', description: 'The cooking becomes part of the entertainment and the conversation.' },
  { title: 'Station Styling & Setup', description: 'Designed, branded counters with signage, lighting, and presentation.' },
  { title: 'Professional Service Staff', description: 'Station chefs, runners, and hosts scaled to your guest count.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, vegan, and allergy-aware options at every station.' },
]

const useCases = [
  {
    title: 'Weddings & Receptions',
    description: 'Live stations turn dining into a moment of theatre at weddings and receptions. Guests gather, watch, and interact, while carving, pasta, and dessert counters keep the celebration moving and memorable.',
  },
  {
    title: 'Corporate Events & Launches',
    description: 'Branded, themed stations create a talking point at product launches, conferences, and client entertaining. The interaction breaks the ice and gives your event a polished, premium edge across DIFC and Business Bay.',
  },
  {
    title: 'Villa & Garden Celebrations',
    description: 'Bring the energy of a live kitchen to your villa terrace, garden, or rooftop. We set up self-contained stations and a chef team across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Galas & Large Functions',
    description: 'For large functions, multiple stations spread guests across the room, shorten queues, and add variety, with each counter offering a different freshly cooked experience.',
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
    a: 'Live stations suit gatherings from around 40 guests upward and scale beautifully to large weddings and corporate functions. Multiple stations spread guests across the room and shorten queues.',
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
  { q: "How much do live cooking stations cost in Dubai?", a: "We price live cooking stations by custom quote, because the cost depends on which stations you choose, your guest count, the menu, and how many chefs and staff we bring. As a guide, live stations typically add a premium over a standard buffet since each counter needs its own chef, equipment, and fresh made-to-order ingredients. Tell us your event details and we'll send a clear, itemised proposal, usually within 15 minutes during business hours." },
  { q: "What's included in the price of a live cooking station?", a: "Every quote includes the full service: menu design, ingredient sourcing and shopping, the styled station counters and equipment, our chefs cooking live on the day, plating and serving, and complete cleanup afterwards. In short, we handle everything end to end so you host without lifting a finger. Serving staff beyond the station chefs are optional and easy to add, and 5% VAT applies to the final quote." },
  { q: "Is there a minimum spend or minimum guest count for live stations?", a: "Live cooking stations work best from around 40 guests upward, since one chef and counter needs enough demand to keep the theatre flowing. For smaller, more intimate gatherings we often suggest a single signature station paired with a plated or buffet menu, or a full [private chef](/private-chef-dubai) experience instead. Share your numbers and we'll recommend the format that gives the best value for your event." },
  { q: "Are your chefs and stations licensed to Dubai food-safety standards?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and our teams follow proper food-handling, hygiene, and open-flame safety practices on site. This matters especially for live stations, where cooking happens in front of your guests, so everything is prepared and served correctly. You can read more about our standards on our [about](/about) page." },
  { q: "Is the food at your live stations halal?", a: "Yes, we source halal by default across all our live cooking stations, from carving and grill counters to street food and dessert. If your event has specific religious or sourcing requirements, just let us know when you enquire and we'll confirm every detail in your menu. We also cater fully halal private dining if you'd prefer a seated format." },
  { q: "How many live stations do I need for my guest count?", a: "As a rule of thumb, we plan one station for roughly every 40 to 60 guests so queues stay short and every counter feels lively. For a large wedding or gala we'll spread several stations around the room to move people through smoothly and offer variety. When you share your final numbers, we'll map out the exact station mix and chef count in your proposal." },
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
    description: 'fully-coordinated catering for events of every size across Dubai.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'BBQ Catering',
    description: 'partner-chef-led grills, premium meats, and seafood for villa and yacht events.',
    image: '/service-events.webp',
    link: '/bbq-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining for boardroom lunches, conferences, and functions.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Live Shawarma & Kebab Station',
    description: 'Arabic shawarma and kebab station with mezze, breads and sauces.',
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
        title="Live Cooking Stations Dubai | Interactive Food Stations | myCHEF"
        description="Book interactive live cooking stations Dubai. Pasta, grill, sushi, carving & dessert counters for weddings & corporate events. Get a tail"
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
            Live Cooking Stations Dubai — Interactive Food Counters
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lcs-hero-sub">
            Interactive partner-chef-led stations — carving, pasta, grill, street food, and dessert counters cooked to order. The theatre of food, plated fresh in front of your guests at weddings and corporate events across Dubai.
          </p>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lcs-hero-sub">
            Live cooking stations Dubai price and live cooking station price per person Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people. Live cooking stations packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. If you are weighing up best live cooking stations Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients. The live cooking stations menu Dubai is drafted around the occasion, the season and the dietary list, and you change it before anything is confirmed. Halal live cooking stations Dubai is planned into the first draft of the menu rather than bolted on at the end. Live pasta station Dubai and live station catering Dubai are the same service under another name.
          </p>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lcs-hero-sub">
            Live cooking classes, shawarma live station, live cooking station ideas and private classes for cooking are the same service under another name.
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
          <SectionLabel align="center">DUBAI LIVE STATION SPECIALISTS</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Theatre of Food, Brought to You
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Some of the most memorable moments at an event happen around the food — guests gathering at a counter, watching a chef finish a dish, the aroma rising as it is plated to order. At myCHEF Dubai, live cooking stations turn dining into an experience, where the cooking itself becomes part of the entertainment and the conversation.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            our chefs work at self-contained, beautifully styled counters — carving prime cuts, finishing pasta and risotto in the pan, grilling over open flame, assembling global street food, and flambéing desserts. Stations can be mixed and themed to match your event, spreading guests across the room and offering variety at every turn. Whether it is a wedding, a gala, or a corporate launch, we bring the stations, the chefs, and the styling to you. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us to start planning.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Station Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">STATION TYPES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Stations
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
              Stations for Every Occasion
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
            What Our Live Cooking Stations Include
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
            A Taste of Our Live Stations
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
            Live Cooking Stations Dubai: Live Cooking Station Questions
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
            {locations.map((loc) => (
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
            Bring Your Event to Life
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a set of live stations and a service plan that fits it perfectly.
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

// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /bbq-catering-dubai
//     primary:     "bbq catering dubai"
//     subkeywords: "bbq catering dubai price" · "bbq catering price per person dubai" · "best bbq catering dubai" · "bbq catering packages dubai" · "bbq catering menu dubai" · "halal bbq catering dubai" · "bbq chef at home dubai" · "villa bbq catering dubai" · "home bbq catering dubai" · "desert bbq catering dubai" · "live bbq catering dubai" · "outdoor bbq catering dubai"
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
  Beef,
  Fish,
  Home,
  Ship,
  Users,
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan BBQ catering in Dubai (via mychef.ae/bbq-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const bbqFormats = [
  {
    icon: Flame,
    title: 'Partner Chef-Led Grills',
    description: 'A dedicated partner grill chef works live at your event, cooking each cut to order so every plate arrives hot, charred, and exactly how your guests like it.',
    link: '/catering-dubai',
  },
  {
    icon: Beef,
    title: 'Premium Meat Selection',
    description: 'Aged steaks, lamb chops, marinated chicken, and gourmet burgers, sourced from trusted suppliers and grilled over open flame for deep, smoky flavour.',
    link: '/private-party-catering-dubai',
  },
  {
    icon: Fish,
    title: 'Seafood on the Grill',
    description: 'Whole fish, prawns, and shellfish grilled with herbs and citrus — a lighter, elegant addition that works beautifully for beachside and poolside events.',
    link: '/buffet-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden BBQ',
    description: 'Full-service grilling for villa terraces, gardens, and rooftops across Dubai, with setup, live cooking, and cleanup all handled by our chefs.',
    link: '/catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht BBQ Catering',
    description: 'Compact, mess-free grilling and chilled sides designed for the deck — generous, relaxed dining for charters around Dubai Marina and the coast.',
    link: '/private-party-catering-dubai',
  },
  {
    icon: Users,
    title: 'Sharing-Style Feasts',
    description: 'Grilled platters, mezze, salads, and sides served family-style for a warm, convivial atmosphere that brings guests together around the table.',
    link: '/grazing-table-dubai',
  },
]

const includedItems = [
  { title: 'Live Grilling Stations', description: 'Professional grill setup and partner-chef-led cooking throughout your event.' },
  { title: 'Premium Meats & Seafood', description: 'Quality cuts, marinated proteins, and fresh seafood prepared to order.' },
  { title: 'Marinades & Rubs', description: 'House marinades, spice rubs, and sauces developed by our chefs.' },
  { title: 'Sides, Salads & Mezze', description: 'A generous spread of hot sides, fresh salads, breads, and dips.' },
  { title: 'Professional Service Staff', description: 'Grill chefs, servers, and hosts scaled to your guest count.' },
  { title: 'Equipment & Setup', description: 'We bring the grills, stations, tableware, and everything needed on site.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, and allergy-aware options built into every menu.' },
]

const useCases = [
  {
    title: 'Villa & Garden Parties',
    description: 'Turn your villa terrace, garden, or rooftop into an open-air grill house. We bring the stations, the chef, and the styling to you across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Yacht & Beach Gatherings',
    description: 'Relaxed grilled feasts designed for the water and the sand. Compact menus that look spectacular on deck and travel cleanly to beachside events around Dubai Marina and JBR.',
  },
  {
    title: 'Celebrations & Milestones',
    description: 'Birthdays, bachelor weekends, and family gatherings come alive around a live grill. The aroma, the sizzle, and the shared plates become part of the entertainment.',
  },
  {
    title: 'Corporate & Team Events',
    description: 'A partner-chef-led BBQ brings a warm, social energy to company days, client entertaining, and team celebrations — polished enough to impress, relaxed enough to enjoy.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Luxury BBQ catering setup in Dubai' },
  { src: '/menu-meat.webp', alt: 'Premium grilled meat selection' },
  { src: '/process-3.webp', alt: 'Chef grilling live at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa BBQ catering in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Grilled seafood platter' },
  { src: '/service-catering.webp', alt: 'BBQ buffet spread for a celebration' },
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
    q: 'Do you bring your own grills and equipment?',
    a: 'Yes. We arrive with professional grilling stations, all cooking equipment, serving setups, and tableware. You simply provide the space, whether that is a villa garden, rooftop, beach, or yacht deck.',
  },
  {
    q: 'What meats and seafood do you offer for BBQ?',
    a: 'Our grills feature aged steaks, lamb chops, marinated chicken, gourmet burgers, and sausages, alongside grilled prawns, whole fish, and shellfish. Every menu is built around your preferences and guest count.',
  },
  {
    q: 'Is your BBQ catering halal?',
    a: 'Yes. We source halal meats by default and are happy to confirm the specifics of your menu. We also accommodate vegetarian, vegan, and allergy-aware requirements alongside the grill.',
  },
  {
    q: 'Can you cater a BBQ on a yacht or at the beach?',
    a: 'Absolutely. We design compact, mess-free grilling menus and chilled sides specifically for yacht charters and beachside events around Dubai Marina, JBR, and the wider coastline.',
  },
  {
    q: 'How many guests can you cater a BBQ for?',
    a: 'We grill for intimate gatherings of around 10 guests up to large celebrations of several hundred. Our chefs scale the number of grill chefs and stations to match your event size.',
  },
  {
    q: 'How far in advance should I book BBQ catering?',
    a: 'For smaller events, one to two weeks is ideal. For larger gatherings, we recommend two to four weeks. During peak season (November to March), earlier booking is strongly advised.',
  },
  { q: "How much does BBQ catering in Dubai cost per person?", a: "BBQ catering in Dubai is priced by custom quote, because the per-person cost depends on your guest count, the cuts and seafood you choose, and how many live grill stations you want. Once you share a few details we build a transparent, all-inclusive proposal covering the food, chefs, equipment, service, and cleanup, with 5% VAT applied. For a fuller picture of what shapes a grill budget, see our [private chef prices in Dubai](/private-chef-dubai/pricing)." },
  { q: "What is included in the price of your BBQ catering?", a: "Every BBQ package includes menu design, ingredient sourcing and shopping, the grills and stations, on-site live cooking by our chefs, plating and serving, and full cleanup afterwards. In short, we bring everything and leave your villa, garden, or yacht deck spotless. Serving staff can be scaled up or kept minimal depending on your event, and we confirm the exact inclusions in your written quote." },
  { q: "Is there a minimum number of guests for a BBQ?", a: "We happily grill for small gatherings of around ten guests right up to large celebrations of several hundred, so there is no need for a huge crowd to book us. For very intimate dinners a live grill still works beautifully, and we simply scale the menu and station size to suit. Tell us your headcount and we will recommend the right setup." },
  { q: "Are your chefs and kitchens licensed and food-safe?", a: "Yes, our chefs and kitchens operate to Dubai Municipality food-safety standards, so your grill service is handled by trained professionals working to proper hygiene and handling practices. This matters especially with barbecue, where correct cooking temperatures and safe food handling are essential. You can read more about how we work on our [how it works](/how-it-works) page." },
  { q: "Can I get a BBQ if I live in an apartment with only a balcony?", a: "Open-flame grilling is not permitted on Dubai apartment balconies for fire-safety reasons, so a full live BBQ needs a suitable outdoor space such as a villa garden, terrace, rooftop, beach, or yacht deck. If you only have an apartment, we can instead design a menu cooked in a compliant setting and served beautifully at your place. Share your venue and we will suggest the best approach for [apartment private dining in Dubai](/apartment-private-dining-dubai)." },
  { q: "Do you use charcoal or gas grills?", a: "We work with professional charcoal and gas grilling stations, and we recommend the right setup based on your venue, the flavour you want, and any site restrictions. Charcoal delivers that classic smoky char, while gas is cleaner and often better suited to yachts and tighter spaces. We confirm the grill type once we know your location and menu." },
  { q: "Is your BBQ menu suitable for guests who do not eat meat?", a: "Absolutely, we build vegetarian and vegan options directly into every grill menu, from halloumi and paneer to grilled vegetables, mezze, and hearty salads. No guest is left with just a side plate, and we make sure the non-meat dishes feel like a proper part of the feast. Let us know your numbers and we will balance the spread accordingly." },
  { q: "Can you handle allergies and dietary restrictions at a BBQ?", a: "Yes, we plan around allergies and dietary needs such as gluten-free, dairy-free, and nut-free requests, and we brief our chefs to avoid cross-contact on the grill. Just tell us the specifics when you enquire and we will adjust marinades, sides, and cooking arrangements to suit. For stricter requirements, see our [allergy-safe catering in Dubai](/allergy-safe-catering-dubai)." },
  { q: "Do you provide serving staff, or just the grill chef?", a: "Both are available, so you can have a grill chef cooking live plus servers and hosts managing plates, drinks, and clearing, or keep it more relaxed with just the chef at the station. We scale the team to your guest count and the style of event. Serving staff are optional and priced within your quote so there are no surprises." },
  { q: "How far in advance should I book BBQ catering in Dubai?", a: "For smaller BBQs, one to two weeks is usually enough, while larger events are best booked two to four weeks ahead so we can secure staff and premium cuts. During peak season from November to March, dates fill quickly, so earlier is always safer. If your date is soon, message us anyway and we will do our best to accommodate it." },
  { q: "How quickly will I get a quote and reply after I enquire?", a: "You will typically hear back from us within 15 minutes during business hours, with a menu direction and next steps for your grill. From there we refine the details together until your proposal fits your guests and budget. The fastest way to start is to reach out through our [contact](/contact) page or WhatsApp." },
  { q: "Will there be a lot of smoke and mess at my villa?", a: "Our chefs manage the grill professionally to keep smoke controlled and your space clean, positioning stations sensibly and handling all the coals, grease, and waste themselves. We arrive early, run the service tidily, and leave your terrace or garden exactly as we found it. Full cleanup is always part of the package, never an add-on you chase later." },
  { q: "Is a live BBQ better than a buffet for my event?", a: "A live BBQ adds theatre, aroma, and freshly grilled plates cooked to order, which makes it feel more interactive and social than a static spread. A buffet can serve very large numbers efficiently, and many clients combine a grill station with buffet sides for the best of both. If you are weighing the options, compare with our [buffet catering in Dubai](/buffet-catering-dubai)." },
  { q: "Can I add other live cooking stations alongside the grill?", a: "Yes, the BBQ pairs beautifully with additional live stations such as a shawarma carvery, mezze spread, or dessert setup to round out the experience. We coordinate the whole service so everything runs smoothly from one team on the day. Explore more options on our [live cooking stations in Dubai](/live-cooking-stations-dubai) page." },
  { q: "Is your BBQ catering fully halal?", a: "Yes, we source halal meats by default for our grills, and we are happy to confirm the specifics of your chosen menu. This applies across steaks, lamb, chicken, and any additional proteins we prepare on the day. If you have further questions about sourcing, just ask when you request your proposal." },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'fully-coordinated catering for events of every size across Dubai.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Buffet Catering',
    description: 'Hot and cold buffet stations for large gatherings and corporate events.',
    image: '/service-events.webp',
    link: '/buffet-catering-dubai',
  },
  {
    title: 'Party Catering',
    description: 'Bespoke menus, styling, and service for celebrations of every kind.',
    image: '/service-villa.webp',
    link: '/private-party-catering-dubai',
  },
  {
    title: "Father's Day Catering",
    description: "Celebrate Dad with a BBQ or brunch menu he'll love.",
    image: '/service-events.webp',
    link: '/private-party-catering-dubai',
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
  name: 'BBQ Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'BBQ Catering Dubai', item: 'https://www.mychef.ae/bbq-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Bbq quote in Dubai. Date: __ Guests: __ Area: __"
export default function BBQCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bbq-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bbq-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bbq-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bbq-fmt-card', {
      scrollTrigger: { trigger: '.bbq-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bbq-uc-item', {
      scrollTrigger: { trigger: '.bbq-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-inc-item', {
      scrollTrigger: { trigger: '.bbq-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-gallery-img', {
      scrollTrigger: { trigger: '.bbq-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bbq-faq-item', {
      scrollTrigger: { trigger: '.bbq-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-loc-item', {
      scrollTrigger: { trigger: '.bbq-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bbq-rel-card', {
      scrollTrigger: { trigger: '.bbq-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bbq-cta', {
      scrollTrigger: { trigger: '.bbq-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="BBQ Catering Dubai | Live BBQ Stations & Outdoor Grills | myCHEF"
        description="Book live BBQ catering Dubai. Partner-chef-led grills, aged steaks, seafood & halal options for villas, gardens, beaches & yachts. Get a "
        canonicalPath="/bbq-catering-dubai"
        ogImage="/service-events.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/bbq-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bbq-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">BBQ Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bbq-hero-h1">
            BBQ Catering Dubai — Live Barbecue Stations
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bbq-hero-sub">
            partner-chef-led grills, premium meats, and fresh seafood cooked live at your villa, garden, beach, or yacht — the theatre and aroma of open-flame cooking with flawless full service across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 bbq-hero-cta">Get a Tailored BBQ Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bbq-hero-cta"
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
          <SectionLabel align="center">DUBAI BBQ SPECIALISTS</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Open-Flame Cooking, Brought to You
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            There is something timeless about food cooked over fire — the sound of the grill, the aroma drifting across the terrace, the moment guests gather while a chef plates a perfectly charred cut. At myCHEF Dubai, our BBQ catering turns that simple pleasure into a polished, full-service experience, designed around your venue and your guests.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            BBQ catering Dubai price and BBQ catering price per person Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people. BBQ catering packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. If you are weighing up best BBQ catering Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients. The BBQ catering menu Dubai is drafted around the occasion, the season and the dietary list, and you change it before anything is confirmed. Halal BBQ catering Dubai is planned into the first draft of the menu rather than bolted on at the end. Villa BBQ catering Dubai and BBQ chef at home Dubai are run at the address you give us: we bring the equipment, cook on site and leave the space as we found it.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Desert BBQ catering Dubai is run at the address you give us: we bring the equipment, cook on site and leave the space as we found it.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Grill our chefs work live at your event, cooking premium steaks, lamb, marinated chicken, gourmet burgers, and fresh seafood to order. Around the grill we build a generous spread of mezze, salads, hot sides, and house sauces, so every guest finds something they love. Whether it is a relaxed villa gathering, a yacht charter, or a corporate celebration, we bring the stations, the staff, and the styling to you. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us directly to start planning your menu.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: BBQ Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT WE GRILL</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              BBQ Catering, Your Way
            </h2>
          </div>

          <div className="bbq-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bbqFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bbq-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE WE GRILL</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              BBQ for Every Setting
            </h2>
          </div>

          <div className="bbq-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bbq-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our BBQ Catering Includes
          </h2>

          <div className="bbq-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bbq-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our BBQ Catering
          </h2>

          <div className="bbq-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bbq-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            BBQ Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            BBQ Catering Across Dubai
          </h2>

          <div className="bbq-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="bbq-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="bbq-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bbq-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="BBQ catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bbq-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Fire Up Your Event
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your gathering and we'll design a grill menu, sides, and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a Tailored BBQ Quote</Link>
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

import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  PartyPopper,
  GlassWater,
  Heart,
  Baby,
  Users,
  Home,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan party catering in Dubai (via mychef.ae/party-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const partyFormats = [
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    description: 'Milestone birthdays, kids parties, and grown-up celebrations with custom cakes, themed menus, and full service.',
    link: '/birthday-catering-dubai',
  },
  {
    icon: GlassWater,
    title: 'Bachelor Parties',
    description: 'Bold, generous spreads for the groom-to-be — grilled feasts, sharing boards, and bar-style catering for villas and yachts.',
    link: '/bachelor-party-catering-dubai',
  },
  {
    icon: Heart,
    title: 'Bachelorette Parties',
    description: 'Elegant grazing tables, canapés, cocktails, and dessert displays styled for a memorable hen celebration in Dubai.',
    link: '/bachelorette-party-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Baby Showers',
    description: 'Refined afternoon-tea menus, pastel grazing tables, mocktails, and dessert tables for an intimate baby shower.',
    link: '/baby-shower-catering-dubai',
  },
  {
    icon: Users,
    title: 'Private Parties',
    description: 'Live cooking stations, passed canapés, and full-service staff for sophisticated private gatherings at home.',
    link: '/private-party-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa Parties',
    description: 'fully-coordinated catering across Dubai — BBQ grills, buffet stations, bartenders, and seamless setup and cleanup.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Party Menus', description: 'Menus built around your theme, guest count, and dietary needs.' },
  { title: 'Canapés & Grazing Tables', description: 'Beautifully styled sharing tables and passed canapés for every format.' },
  { title: 'Drinks & Mixology', description: 'Cocktails, mocktails, and bartender service tailored to your celebration.' },
  { title: 'Professional Service Staff', description: 'Waiters, hosts, and bartenders scaled to your party size.' },
  { title: 'Live Cooking Stations', description: 'Interactive partner-chef-led stations that become part of the entertainment.' },
  { title: 'Styling & Presentation', description: 'Elegant tableware, linens, and display styling to match your theme.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
  { title: 'On-Site Coordination', description: 'A coordinator ensures flawless timing from first guest to last.' },
]

const useCases = [
  {
    title: 'At-Home & Villa Celebrations',
    description: 'Transform your villa, garden, or rooftop into a full event space. We bring the chefs, staff, and styling to you — across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Yacht & Marina Parties',
    description: 'Canapé receptions, sharing platters, and chilled drinks designed for the water. Compact, mess-free menus that look spectacular on deck around Dubai Marina.',
  },
  {
    title: 'Milestone Moments',
    description: 'Big birthdays, engagements, hen and stag celebrations, and baby showers deserve a menu that feels considered. We design each one from the theme outward.',
  },
  {
    title: 'Last-Minute Gatherings',
    description: 'Hosting on short notice? Our chefs can assemble a polished grazing table, canapé selection, or BBQ spread quickly without compromising on quality.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Luxury party catering setup in Dubai' },
  { src: '/service-catering.webp', alt: 'Elegant party catering buffet' },
  { src: '/menu-canapes.webp', alt: 'Canapé selection for a Dubai party' },
  { src: '/menu-cocktails.webp', alt: 'Cocktail service at a private party' },
  { src: '/service-villa.webp', alt: 'Villa party catering in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Dessert table for a celebration' },
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
    q: 'What kinds of parties do you cater in Dubai?',
    a: 'we coordinate catering for birthdays, bachelor and bachelorette parties, baby showers, private home and villa parties, yacht gatherings, and milestone celebrations. Each menu is built around your theme, guest count, and venue.',
  },
  {
    q: 'How many guests do you cater for?',
    a: 'we coordinate catering intimate parties from around 10 guests up to large celebrations of several hundred. For very small gatherings, our private chef service may be a better fit, and we are happy to advise.',
  },
  {
    q: 'Can you provide drinks, cocktails, and bartenders?',
    a: 'Yes. We offer cocktails, mocktails, soft drink stations, and professional bartender service. We tailor the bar to your celebration, including non-alcoholic and themed drink menus.',
  },
  {
    q: 'Do you handle styling, setup, and cleanup?',
    a: 'Absolutely. Every package includes styling, tableware, full setup before guests arrive, attentive service during the party, and complete cleanup afterward, so you can simply enjoy the event.',
  },
  {
    q: 'How far in advance should I book party catering?',
    a: 'For smaller parties, one to two weeks is ideal. For larger or themed celebrations, we recommend two to four weeks. During peak season (November to March), earlier booking is strongly advised.',
  },
  {
    q: 'Can you accommodate dietary requirements and themes?',
    a: 'Yes. We routinely cater for vegetarian, vegan, halal, gluten-free, and allergy-specific needs, and we design menus to match party themes, colour palettes, and cultural preferences.',
  },
  { q: "How much does party catering cost per person in Dubai?", a: "Party catering in Dubai is priced by custom quote, because the cost depends on your menu style, guest count, service level, and venue. Rather than a fixed per-head rate, we build a proposal around your celebration so you only pay for what your party actually needs, and 5% VAT applies. Share your date and headcount and we'll send transparent pricing with everything itemised — see our [catering packages](/catering-packages-dubai) for a sense of format." },
  { q: "What exactly is included in the price you quote?", a: "Every quote includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards — there are no hidden service charges added later. Optional extras like additional serving staff, bartenders, or premium styling are listed separately and clearly so you always know what you're paying for. We prefer one honest, all-in proposal over a low food-only figure with surprises." },
  { q: "Do you require a deposit and how do I confirm my booking?", a: "Yes, we confirm your party date once a deposit is paid, with the balance due closer to the event. We'll send an official invoice and written confirmation so everything is documented before we start planning. Just tell us your date and details and we typically reply within 15 minutes during business hours to lock it in — start on our [contact page](/contact)." },
  { q: "Is your food halal and prepared to Dubai food-safety standards?", a: "Yes, our ingredients are halal-sourced by default and every dish is prepared by our own chefs to Dubai Municipality food-safety standards. We handle sourcing, safe transport, and on-site cooking ourselves, so hygiene and freshness are controlled end to end. If you need fully halal-certified sourcing documented for a specific event, just ask and we'll confirm it in writing." },
  { q: "Can I taste the menu before booking a large party?", a: "Yes, for larger parties we can arrange a tasting so you can confirm dishes, portion sizes, and presentation before the day. It's the best way to fine-tune flavours and lock your final menu with confidence. Ask about a [tasting menu](/tasting-menu-dubai) when you send your enquiry and we'll build it around your shortlist." },
  { q: "What's the minimum number of guests you'll cater a party for?", a: "We cater parties from around 10 guests up to several hundred, so there's no need for a large minimum headcount. For very small, intimate gatherings, a dedicated [private chef](/private-chef-dubai) at your table is often the better experience, and we're happy to recommend whichever fits your evening best. Either way, the menu and service scale to your group." },
  { q: "Do you provide waiters, bartenders, and serving staff?", a: "Yes, professional service staff are available and scaled to your party size, from waiters and hosts to skilled bartenders. Serving staff are optional, so you can choose a full-service setup or keep it relaxed with buffet-style catering and lighter staffing. We'll recommend the right team so service flows smoothly from the first guest to the last." },
  { q: "Do you bring tables, chairs, crockery, and all the equipment?", a: "Yes, we can supply tableware, crockery, cutlery, glassware, chafing dishes, and cooking equipment as part of your package. Larger furniture like tables, chairs, and marquees can be arranged too, so you don't have to coordinate separate rental companies. Tell us what your venue already has and we'll fill in exactly what's missing." },
  { q: "Should I choose a buffet, plated service, or live cooking stations?", a: "It depends on your party's mood: buffets and grazing tables suit relaxed, social celebrations, plated service feels more formal and elegant, and live cooking stations become part of the entertainment. Many hosts mix formats — passed canapés on arrival, then a station or buffet as the night unfolds. We'll advise the best blend for your guest count, venue, and theme; compare the styles in our [buffet vs plated guide](/buffet-vs-plated-dubai)." },
  { q: "Can you cater a party in my apartment, on a rooftop, or on a yacht?", a: "Yes, we cater across villas, apartments, gardens, rooftops, marina yachts, and beach settings throughout Dubai. Our chefs adapt the menu and equipment to each space — for example, compact, mess-free canapés and platters that plate beautifully on a boat deck. Let us know your venue and we'll design service that fits its layout and access." },
  { q: "How do you handle guest allergies and mixed dietary needs at one party?", a: "We routinely cater mixed groups, building menus that cover vegetarian, vegan, gluten-free, dairy-free, nut-free, and other requirements alongside the main spread. Just share your guests' needs when planning and we'll label dishes clearly and prevent cross-contact where it matters. This lets everyone eat confidently without a separate, second-rate menu for anyone." },
  { q: "Can you cater a party on short notice or last minute?", a: "Yes, we can often assemble a polished grazing table, canapé selection, or BBQ spread on short notice without dropping our standards. Availability tightens during peak season from November to March, so the sooner you message us the more menu and staffing options we can offer. Send your date and headcount and we'll tell you honestly what's possible." },
  { q: "Do you provide the birthday cake, desserts, and themed styling?", a: "Yes, we design custom cakes, dessert tables, and styling that match your theme, colour palette, and occasion. From pastel baby-shower displays to bold bachelor spreads, the presentation is planned as carefully as the food. Our [pastry chef](/chefs/sofia-pastry-chef) can craft a centrepiece dessert that becomes a talking point of the party." },
  { q: "Can you serve alcohol and cocktails, or only mocktails?", a: "We provide full bar service including cocktails, mocktails, soft-drink stations, and professional bartenders tailored to your celebration. Where licensed alcohol service is required, we'll guide you on the correct approach for your venue, and we're just as happy to build a standout alcohol-free bar. Either way the drinks menu is designed to match your food and theme." },
  { q: "What happens to leftover food after the party?", a: "We plan portions carefully so there's plenty without excessive waste, and any suitable leftovers are yours to keep after the event. Our team packs down, cleans the space, and leaves your venue spotless as part of every booking. You're left with good memories and a tidy home — not a pile of dishes." },
  { q: "Why book party catering with myCHEF instead of a restaurant or DIY?", a: "With myCHEF, one team handles everything — menu design, shopping, cooking on-site, serving, and cleanup — so you host without lifting a finger, which a restaurant booking or self-catering can't match. You get restaurant-quality food in your own space, styled to your theme and scaled to your guest list. See [how it works](/how-it-works) to understand our end-to-end process before you enquire." },
]

const relatedServices = [
  {
    title: 'Birthday Catering',
    description: 'Custom cakes, themed menus, and full service for birthdays of every age.',
    image: '/service-events.webp',
    link: '/birthday-catering-dubai',
  },
  {
    title: 'Kids Birthday Catering',
    description: 'Safe, fun, allergy-aware catering designed specifically for children’s parties.',
    image: '/images/kids-birthday-catering-dubai-hero.webp',
    link: '/kids-birthday-catering-dubai',
  },
  {
    title: 'Pool Party Catering',
    description: 'Fresh, light menus and live grills for villa pool parties and beach clubs.',
    image: '/images/pool-party-catering-dubai-hero.webp',
    link: '/pool-party-catering-dubai',
  },
  {
    title: 'Housewarming Catering',
    description: 'Welcoming new-home celebrations with relaxed menus and full-service hospitality.',
    image: '/service-villa.webp',
    link: '/housewarming-catering-dubai',
  },
  {
    title: 'Graduation Party Catering',
    description: 'Celebrate school and university milestones with themed menus and full event service.',
    image: '/service-events.webp',
    link: '/graduation-catering-dubai',
  },
  {
    title: 'Farewell & Retirement Catering',
    description: 'Office send-offs, retirement parties and goodbye gatherings with full catering service.',
    image: '/service-events.webp',
    link: '/farewell-catering-dubai',
  },
  {
    title: 'Reunion Catering',
    description: 'Family, friends and alumni reunions with generous shared menus and relaxed service.',
    image: '/service-events.webp',
    link: '/reunion-catering-dubai',
  },
  {
    title: "Father's Day Catering",
    description: "Celebrate Dad with brunch, BBQ and family feasts across Dubai.",
    image: '/service-events.webp',
    link: '/fathers-day-catering-dubai',
  },
  {
    title: 'Picnic Catering',
    description: 'Styled outdoor baskets and grazing boxes for relaxed park, beach and villa picnics.',
    image: '/images/beach-catering-dubai-hero.webp',
    link: '/picnic-catering-dubai',
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
  name: 'Party Catering Dubai',
  serviceType: 'Party Catering Service',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Party Catering Dubai', item: 'https://www.mychef.ae/party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function PartyCatering() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero
    gsap.to('.pty-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.pty-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.pty-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    // Format cards
    gsap.to('.pty-fmt-card', {
      scrollTrigger: { trigger: '.pty-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // Use cases
    gsap.to('.pty-uc-item', {
      scrollTrigger: { trigger: '.pty-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    // Included items
    gsap.to('.pty-inc-item', {
      scrollTrigger: { trigger: '.pty-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    // Gallery
    gsap.to('.pty-gallery-img', {
      scrollTrigger: { trigger: '.pty-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.pty-faq-item', {
      scrollTrigger: { trigger: '.pty-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Locations
    gsap.to('.pty-loc-item', {
      scrollTrigger: { trigger: '.pty-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    // Related
    gsap.to('.pty-rel-card', {
      scrollTrigger: { trigger: '.pty-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.pty-cta', {
      scrollTrigger: { trigger: '.pty-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Party Catering Dubai | Canapés, Grazing & Live Stations"
        description="Party catering in Dubai for birthdays, bachelor/bachelorette parties, baby showers & private celebrations. Bespoke menus, canapés, full service. Get a quote."
        canonicalPath="/party-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/party-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 pty-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 pty-hero-h1">
            Party Catering Dubai — Birthdays, Yacht & Villa Celebrations
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pty-hero-sub">
            From milestone birthdays to bachelor and bachelorette nights, baby showers, and intimate private parties — bespoke menus, beautiful styling, and flawless service across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=party-catering-dubai" className="btn-primary opacity-0 translate-y-4 pty-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 pty-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            DUBAI PARTY SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering Built Around Your Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A great party is more than good food — it is the rhythm of the evening, the moment guests gather around a grazing table, the cocktail that arrives at exactly the right time. At myCHEF Dubai, we treat party catering as a complete experience, designed from your theme and venue outward.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting an intimate gathering in your villa, a lively bachelor weekend, an elegant bachelorette afternoon, a heartfelt baby shower, an <Link to="/anniversary-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">anniversary celebration</Link>, a <Link to="/housewarming-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">housewarming</Link>, or a <Link to="/pool-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">pool party</Link>, our chefs bring the staff and the styling to you. Explore our dedicated party services below, or speak to us directly to start planning. We also pair seamlessly with our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mt-5">
            For easy mingling food, try our <Link to="/finger-food-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">finger food catering</Link>. Seasonal hosts can also explore <Link to="/halloween-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Halloween catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Party Formats (Hub Grid) ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PARTY TYPES we coordinate catering for
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Celebration
            </h2>
          </div>

          <div className="pty-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partyFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="pty-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHERE WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Parties for Every Setting
            </h2>
          </div>

          <div className="pty-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="pty-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Party Catering Includes
          </h2>

          <div className="pty-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="pty-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Party Catering
          </h2>

          <div className="pty-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="pty-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Party Catering Questions
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Party Catering Across Dubai
          </h2>

          <div className="pty-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="pty-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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
            Explore Our Party Services
          </h3>

          <div className="pty-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="pty-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip title="Party catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center pty-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Party
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design a menu, drinks, and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=party-catering-dubai" className="btn-primary">Request a Proposal</Link>
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

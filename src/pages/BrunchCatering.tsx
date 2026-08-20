import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sun,
  Coffee,
  Egg,
  Croissant,
  Users,
  UtensilsCrossed,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss brunch catering (via mychef.ae/brunch-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const brunchServices = [
  {
    icon: Sun,
    title: 'Weekend Villa Brunch',
    description: 'Lazy, sociable brunches at your villa or apartment with fresh pastries, eggs, fruits, and barista-style coffee.',
    link: '/villas-private-residences',
  },
  {
    icon: Coffee,
    title: 'Breakfast Chef Service',
    description: 'A private chef prepares breakfast daily in your home or hotel, from healthy bowls to full cooked spreads.',
    link: '/private-chef-dubai',
  },
  {
    icon: Users,
    title: 'Corporate Morning Events',
    description: 'Professional breakfast and brunch catering for meetings, launches, and team gatherings across Dubai.',
    link: '/corporate',
  },
  {
    icon: Egg,
    title: 'Celebration Brunch',
    description: 'Birthday brunches, farewell mornings, and special-occasion breakfast parties with customised menus.',
    link: '/party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Brunch Menu', description: 'A custom menu built around your tastes, dietary needs, and the occasion — from light and healthy to indulgent.' },
  { title: 'Fresh Pastries & Breads', description: 'Croissants, muffins, sourdough, Arabic bread, and other bakery favourites delivered fresh for your brunch.' },
  { title: 'Eggs Any Style', description: 'Eggs Benedict, shakshuka, omelettes, scrambled eggs, and made-to-order stations for your guests.' },
  { title: 'Fruit, Granola & Yogurt', description: 'Seasonal fruit platters, granola bowls, chia pots, and yoghurt parfaits for a balanced start.' },
  { title: 'Coffee, Tea & Juices', description: 'Artisanal coffee, specialty teas, fresh juices, smoothies, and optional mocktail bellinis.' },
  { title: 'Private Chef & Service Team', description: 'Chefs and hosts who prepare, plate, and serve so you can relax and enjoy the morning.' },
  { title: 'Equipment & Tableware', description: 'Chafing dishes, serving boards, plates, glassware, and linens supplied and removed after service.' },
  { title: 'Setup & Clear-Down', description: 'We arrive early, style the table, run the service, and leave your space spotless.' },
]

const menuHighlights = [
  'Eggs Benedict',
  'Shakshuka',
  'Avocado Toast',
  'Fresh Croissants',
  'Pancakes & Waffles',
  'Fruit Platters',
  'Granola Bowls',
  'Artisanal Coffee',
  'Fresh Juices',
  'Smoothies',
]

const howItWorks = [
  { title: 'Share Your Brunch Vision', description: 'Tell us the date, guest count, location in Dubai, and whether you want a relaxed villa brunch or a structured morning event.' },
  { title: 'Receive a Custom Menu', description: 'We propose a bespoke brunch menu with dishes, drinks, and service style tailored to your preferences.' },
  { title: 'Confirm the Details', description: 'Once the menu and staffing plan are approved, we confirm your booking and schedule the team.' },
  { title: 'We Source Fresh Ingredients', description: 'our chefs shop for seasonal produce, bakery items, eggs, dairy, coffee, and any speciality ingredients.' },
  { title: 'Arrive & Prepare On-Site', description: 'Chefs and hosts arrive early to set up the table, prepare dishes, and brew coffee before guests arrive.' },
  { title: 'Serve, Enjoy & Clean Up', description: 'We serve your brunch, refill stations, and clear everything away so your morning ends as easily as it began.' },
]

const useCases = [
  {
    title: 'Weekend Villa Brunch',
    description: 'Gather friends and family around the pool or dining table for a leisurely villa brunch with fresh pastries, eggs, fruits, and endless coffee.',
  },
  {
    title: 'Corporate Breakfast Meetings',
    description: 'Impress clients and teams with a polished breakfast spread in your office, boardroom, or event space across Downtown Dubai or DIFC.',
  },
  {
    title: 'Daily Breakfast Chef',
    description: 'For families and visitors staying in villas or hotels, a private breakfast chef prepares a tailored morning meal every day of the week.',
  },
  {
    title: 'Celebration & Birthday Brunch',
    description: 'Mark a birthday, anniversary, or farewell with a daytime celebration that feels indulgent, social, and completely stress-free.',
  },
]

const faqs = [
  {
    q: 'Do you cater brunches at villas and private homes?',
    a: 'Yes. We regularly cater weekend brunches, family breakfasts, and celebration mornings at villas, apartments, and private residences across Dubai.',
  },
  {
    q: 'Can you provide a private breakfast chef every day?',
    a: 'Absolutely. We offer daily breakfast chef services for households, visitors, and villa stays, with menus adapted to your schedule and preferences.',
  },
  {
    q: 'What kind of brunch menu can we choose?',
    a: 'Menus are fully bespoke. Choose from eggs any style, pastries, fruit, granola bowls, pancakes, shakshuka, avocado toast, fresh coffee, juices, and more.',
  },
  {
    q: 'Do you cater corporate breakfast events?',
    a: 'Yes. We coordinate catering for breakfast meetings, launches, and corporate morning events in offices, hotels, and event spaces with professional setup and service.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We coordinate catering for vegetarian, vegan, gluten-free, dairy-free, and allergy-aware diets. Just let us know your requirements when you request a quote.',
  },
  {
    q: 'How far in advance should I book brunch catering?',
    a: 'One to two weeks is ideal for most brunches. For daily breakfast chef services or large corporate events, two to four weeks is recommended, especially during peak season.',
  },
  { q: "How much does brunch catering cost in Dubai?", a: "Brunch catering in Dubai is priced by custom quote, because the cost depends on your guest count, menu, service style, and location. As a general guide, at-home brunches usually work out more affordable than hotel brunch packages, and we build a spread to match your budget rather than a fixed per-head rate. Tell us your numbers and preferences and we send an itemised proposal, typically within 15 minutes during business hours." },
  { q: "What exactly is included in a brunch catering booking?", a: "Every booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, plus full cleanup afterwards. We also supply the serving equipment, chafing dishes, tableware, and linens, and remove everything once service is finished. Serving staff and additional hosts are optional add-ons depending on your guest count and how hands-off you want the morning to be." },
  { q: "Are your brunch prices inclusive of VAT?", a: "Our quotes clearly show pricing before the 5% VAT that applies to catering services in the UAE, so there are no surprises on your final invoice. Because we build every brunch to order, the proposal itemises the menu, staffing, and any extras before you confirm. You always see exactly what you are paying for before committing." },
  { q: "Is your brunch food halal and prepared to Dubai food-safety standards?", a: "Yes. Our ingredients are halal sourced by default, and our chefs and kitchens operate to Dubai Municipality food-safety standards. We handle temperature control, safe transport, and hygienic on-site preparation as part of every brunch, so you can host with complete confidence. If you have specific certification requirements, just mention them when you request your quote." },
  { q: "How do I know I can trust myCHEF with an event at my home?", a: "We are an established, full-service private chef and catering company that handles brunches end to end, from menu to cleanup, so you deal with one experienced team throughout. Our chefs regularly cook in private villas, apartments, and offices across Dubai and treat your space with care. You can read more [about us](/about) and see how we work before you book." },
  { q: "Can you make eggs, pancakes, and waffles to order in front of guests?", a: "Yes. We set up live cooking stations so your guests get eggs any style, fresh pancakes, waffles, and shakshuka made to order on the spot. Interactive stations are one of the best parts of a home brunch, adding a relaxed, sociable energy to the morning. We bring all the equipment and the chef handles everything, then clears it away after service." },
  { q: "Is there a minimum number of guests for brunch catering?", a: "We cater brunches for intimate groups of a handful of people right up to large gatherings of sixty or more, so there is no rigid one-size minimum. For very small brunches a single chef manages the whole spread, while larger events get additional kitchen and serving support. Share your guest count when you enquire and we scale the team and menu to fit." },
  { q: "Do you provide waiters and serving staff for the brunch?", a: "Yes, serving staff are an optional add-on so you can host completely hands-free while we pour coffee, refill stations, and clear plates. For smaller brunches the chef can handle both cooking and light service, while larger events benefit from dedicated hosts. We recommend the right staffing level for your guest count in your [private chef](/private-chef-dubai) proposal." },
  { q: "Can you cater a brunch with drinks, mocktails, or a bar setup?", a: "Yes. We include fresh juices, smoothies, artisanal coffee, specialty teas, and mocktail bellinis as part of our brunch menus, and we can add a dedicated drinks station. For a livelier setup we can arrange a full [mocktail bar](/mocktail-bar-catering-dubai) with a host mixing to order. Let us know the vibe you want and we design the beverage service around it." },
  { q: "Can you handle allergies and mixed dietary needs at one brunch?", a: "Absolutely. We routinely cater brunches where guests have different needs, offering vegan, vegetarian, gluten-free, dairy-free, and nut-aware options side by side on the same table. Because every menu is built from scratch, we plan around your guest list rather than forcing a fixed menu. For stricter requirements, our [allergy-safe catering](/allergy-safe-catering-dubai) approach adds extra care and clear labelling." },
  { q: "Which areas of Dubai do you cover for brunch catering?", a: "We cater brunches across all of Dubai, including Palm Jumeirah, Downtown Dubai, Dubai Marina, Emirates Hills, JBR, and beyond, in villas, apartments, offices, and event spaces. Our chefs travel to you with everything needed for the morning. If you are in a gated community, holiday home, or hotel suite, just share the access details when you book." },
  { q: "How early should I book brunch catering to secure my date?", a: "For most brunches, booking one to two weeks ahead is comfortable, while large corporate mornings or peak-season dates are best secured two to four weeks in advance. Peak season in Dubai runs November to March, when weekends fill up fastest. If your date is soon, still reach out, as we often accommodate shorter timelines depending on availability." },
  { q: "Can you set up brunch outdoors, poolside, or on a terrace?", a: "Yes. We regularly serve brunches poolside, on terraces, and in garden settings at villas and private residences, adapting the setup to your space. We bring shaded stations, appropriate serving equipment, and keep food safely held at the right temperature outdoors. For a truly memorable setting, we can also arrange brunch on a [yacht](/yachts) or at a private villa." },
  { q: "Do I need to provide anything, or do you bring everything?", a: "You provide the space and we bring everything else, from ingredients and cooking equipment to chafing dishes, tableware, glassware, and linens. Our chefs arrive early to set up, cook fresh on-site, and then handle the full clear-down so your kitchen and dining area are left spotless. All you need to do is enjoy the morning with your guests." },
  { q: "Is brunch catering at home better than booking a hotel brunch?", a: "A catered brunch at home gives you a private, unhurried morning with a fully bespoke menu, no time limit, and no crowds, which a fixed hotel brunch cannot match. You choose exactly what is served, control the guest list, and keep the whole experience in your own space. If you would like to compare formats, our team can walk you through the options on the [contact](/contact) page." },
  { q: "Can a private chef prepare breakfast every day during a villa stay?", a: "Yes. Beyond one-off brunches, we offer daily breakfast chef service for families, holiday-home guests, and extended stays, with menus that change to keep every morning fresh. The chef shops, cooks, serves, and cleans up each day so your household starts effortlessly. Explore our full [private chef prices](/private-chef-prices-dubai) for daily and recurring arrangements." },
]

const relatedServices = [
  {
    title: "Mother's Day Catering",
    description: 'Celebrate Mum with a beautiful brunch, lunch or high tea at home or venue.',
    image: '/images/mothers-day-catering-dubai-hero.webp',
    link: '/mothers-day-catering-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke dining and daily chef services brought to your home or villa.',
    image: '/service-catering.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for meetings, launches, and company events.',
    image: '/service-events.webp',
    link: '/corporate',
  },
  {
    title: 'Breakfast Catering Dubai',
    description: 'Fresh morning spreads for offices, villas and hotels that start the day beautifully.',
    image: '/images/breakfast-catering-dubai-hero.webp',
    link: '/breakfast-catering-dubai',
  },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
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
  name: 'Brunch Catering Dubai',
  serviceType: 'Catering Service',
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
    { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
    { '@type': 'ListItem', position: 3, name: 'Brunch Catering Dubai', item: 'https://www.mychef.ae/brunch-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Brunch quote in Dubai. Date: __ Guests: __ Area: __"
export default function BrunchCatering() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.brunch-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.brunch-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.brunch-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.brunch-fmt-card', {
      scrollTrigger: { trigger: '.brunch-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.brunch-inc-item', {
      scrollTrigger: { trigger: '.brunch-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.brunch-menu-item', {
      scrollTrigger: { trigger: '.brunch-menu-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out',
    })

    gsap.to('.brunch-step', {
      scrollTrigger: { trigger: '.brunch-steps-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.brunch-why', {
      scrollTrigger: { trigger: '.brunch-why-section', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.brunch-uc-item', {
      scrollTrigger: { trigger: '.brunch-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.brunch-faq-item', {
      scrollTrigger: { trigger: '.brunch-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.brunch-loc-item', {
      scrollTrigger: { trigger: '.brunch-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.brunch-rel-card', {
      scrollTrigger: { trigger: '.brunch-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.brunch-cta', {
      scrollTrigger: { trigger: '.brunch-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Brunch Catering Dubai | Private Breakfast Chef & Villa Brunch | myCHEF"
        description="Brunch catering & private breakfast chef in Dubai. Weekend villa brunches, corporate mornings, fresh pastries & artisanal coffee. Request a tailored quote."
        canonicalPath="/brunch-catering-dubai"
        ogImage="/service-villa.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/brunch-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 brunch-hero-h1" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/catering-dubai" className="text-gray-400 hover:text-gold transition-colors">Catering</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Brunch Catering Dubai</span></li>
            </ol>
          </nav>

          <p className="font-inter text-caption uppercase tracking-[0.2em] text-gold mb-4 opacity-0 translate-y-4 brunch-hero-h1">
            Morning Indulgence
          </p>
          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 brunch-hero-h1">
            Brunch Catering & Private Breakfast Chef in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 brunch-hero-sub">
            Weekend villa brunches, corporate breakfast events, and daily private chef mornings. Fresh pastries, eggs any style, seasonal fruit, and artisanal coffee — served wherever you are in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=brunch-catering-dubai" className="btn-primary opacity-0 translate-y-4 brunch-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 brunch-hero-cta"
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
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            BRUNCH IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Start the Day Exceptionally
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A great brunch sets the tone for the entire day. At myCHEF Dubai, we design brunch and breakfast catering that feels relaxed, abundant, and completely effortless. From a slow weekend gathering at your villa to a polished corporate breakfast before a big meeting, we bring the menu, a partner chef, and the service to you.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our brunch menus are built around fresh, seasonal ingredients and your personal tastes. Whether you want healthy bowls and fresh juice or eggs Benedict and pastries, we create a spread that suits the occasion. Every detail — from the coffee to the clear-down — is handled by our chefs.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Target Audience ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Who We Serve
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Brunch Catering for Every Morning
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 border border-gray-200">
              <Sun className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Villa Residents</h3>
              <p className="font-inter text-body-sm text-gray-500">Weekend brunches at home with family and friends, served poolside or around the dining table.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <Users className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Companies & Teams</h3>
              <p className="font-inter text-body-sm text-gray-500">Breakfast meetings, team brunches, and corporate morning events with professional service.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <Croissant className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Visitors & Hotels</h3>
              <p className="font-inter text-body-sm text-gray-500">Daily breakfast chef service for villa stays, holiday homes, and extended visits in Dubai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Service Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BRUNCH SERVICES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              How We Serve Brunch
            </h2>
          </div>

          <div className="brunch-fmt-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brunchServices.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="brunch-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            What Our Brunch Catering Includes
          </h2>

          <div className="brunch-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="brunch-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU HIGHLIGHTS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Fresh Morning Favourites
            </h2>
          </div>

          <div className="brunch-menu-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuHighlights.map((item, i) => (
              <div key={i} className="brunch-menu-item bg-black p-6 text-center opacity-0 translate-y-6">
                <UtensilsCrossed size={24} className="text-gold mx-auto mb-3" />
                <p className="font-inter text-sm text-white">{item}</p>
              </div>
            ))}
          </div>

          <p className="font-inter text-body text-gray-400 text-center max-w-[700px] mx-auto mt-10 leading-relaxed">
            Every brunch menu is designed from scratch. We do not offer fixed set menus. Instead, we combine your favourite morning dishes with seasonal produce and dietary preferences to create a spread that feels personal and generous.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 7: How It Works ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              THE PROCESS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              How Brunch Catering Works
            </h2>
          </div>

          <div className="brunch-steps-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="brunch-step bg-cream p-8 opacity-0 translate-y-8">
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

      {/* ═══════════════ Section 8: Why Choose ═══════════════ */}
      <section className="brunch-why-section bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="brunch-why opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white mb-8 text-center">
              Why Choose myCHEF for Brunch
            </h2>
            <div className="space-y-5">
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed">
                Brunch should feel effortless. We arrive early, set the table, prepare every dish fresh, and serve with warmth so you can focus on your guests. Our chefs are experienced in both relaxed villa mornings and structured corporate events, which means the same attention to detail whether you are hosting six people or sixty.
              </p>
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed">
                We source seasonal produce, freshly baked pastries, and quality coffee so the food tastes as good as it looks. Menus are adapted to dietary needs, event style, and guest count, and our chefs handle the entire setup and clear-down so your space is left spotless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Use Cases ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DUBAI BRUNCH OCCASIONS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Brunch Catering for Every Setting
            </h2>
          </div>

          <div className="brunch-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="brunch-uc-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
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
                <li><Link to="/party-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Party Catering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Related Seasonal Services</h3>
              <ul className="space-y-3">
                <li><Link to="/new-year-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> New Year's Eve Catering Dubai</Link></li>
                <li><Link to="/christmas-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Christmas Catering Dubai</Link></li>
                <li><Link to="/birthday-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Birthday Catering Dubai</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Popular Locations</h3>
              <ul className="space-y-3">
                <li><Link to="/locations/downtown-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Downtown Dubai</Link></li>
                <li><Link to="/locations/dubai-marina" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Dubai Marina</Link></li>
                <li><Link to="/locations/palm-jumeirah" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Palm Jumeirah</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 11: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FAQ
            </span>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Brunch Catering Questions
            </h2>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 12: Locations ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Brunch Catering Across Dubai
          </h2>

          <div className="brunch-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="brunch-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="brunch-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="brunch-rel-card group bg-black overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 14: Final CTA ═══════════════ */}
      <section className="brunch-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Brunch with myCHEF
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your morning event and we will design a bespoke brunch menu, service style, and staffing plan for your villa, office, or event space in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=brunch-catering-dubai" className="btn-primary">Request a Proposal</Link>
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

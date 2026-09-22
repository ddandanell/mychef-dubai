// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /case-studies
//     primary:     "catering case studies dubai"
//     subkeywords: "dubai event catering examples" · "private chef event portfolio dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef, useState } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Calendar,
  Users,
  MapPin,
  UtensilsCrossed,
  Check,
  Phone,
  ArrowRight,
  Heart,
  Building2,
  Ship,
  Home,
  PartyPopper,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss a luxury event inspired by your case studies (via mychef.ae/case-studies)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/case-studies'

/* ────────────────────── Data ────────────────────── */

const categories = ['All', 'Weddings', 'Yachts', 'Villas', 'Corporate', 'Private Parties']

const caseStudies = [
  {
    slug: 'villa-wedding-reception-emirates-hills',
    title: 'Villa wedding reception',
    category: 'Weddings',
    guests: 'Typical villa sitting',
    menu: 'Canapés, then plated or stations, sized to the kitchen',
    outcome: 'We do not publish named client results. A villa wedding is usually run as canapés, a seated or station meal, then clear-down. Alcohol only where the house allows it.',
    image: '/images/villa-catering-dubai-hero.webp',
  },
  {
    slug: 'yacht-birthday-celebration-dubai-marina',
    title: 'Yacht birthday',
    category: 'Yachts',
    guests: 'Typical deck sitting',
    menu: 'Passed food, grill if the vessel allows it, soft drinks as standard',
    outcome: 'We do not publish named client results. Yacht catering is planned around galley size, boarding and holding. The commercial page is yacht catering.',
    image: '/images/yacht-catering-dubai-hero.webp',
  },
  {
    slug: 'corporate-gala-dinner-downtown-dubai',
    title: 'Company gala dinner',
    category: 'Corporate',
    guests: 'Seated awards night',
    menu: 'Courses timed to speeches. Wine only where the venue is licensed.',
    outcome: 'We do not publish named client results. A gala is a seated night with a clock. The commercial page is gala dinner catering.',
    image: '/images/corporate-catering-dubai-hero.webp',
  },
  {
    slug: 'intimate-anniversary-dinner-palm-jumeirah',
    title: 'Small villa dinner',
    category: 'Villas',
    guests: 'A known table',
    menu: 'Chef-led plated courses in the house kitchen',
    outcome: 'We do not publish named client results. A small dinner at home is catering, quoted as a night, not a household plan.',
    image: '/images/romantic-dinner-dubai-hero.webp',
  },
  {
    slug: 'product-launch-difc',
    title: 'Product launch reception',
    category: 'Corporate',
    guests: 'Standing crowd',
    menu: 'Canapés that can pause for the reveal',
    outcome: 'We do not publish named client results. Food does not sit on laptops. The commercial page is product launch catering.',
    image: '/images/cocktail-party-catering-dubai-hero.webp',
  },
  {
    slug: 'family-eid-gathering-arabian-ranches',
    title: 'Family Eid gathering',
    category: 'Private Parties',
    guests: 'A family table, not a ballroom',
    menu: 'Sharing buffet, Arabic grills when the brief asks for them',
    outcome: 'We do not publish named client results. A family sitting is planned around the house, the headcount and the dietary list you send.',
    image: '/images/arabic-catering-dubai-hero.webp',
  },
]

const whatsIncluded = [
  { title: 'The brief', description: 'Date, venue, headcount, how people eat, and any dietary notes. That is the start of every quote.' },
  { title: 'The menu', description: 'Written for the room and the kitchen that actually exists, not for a restaurant floor plan.' },
  { title: 'The format', description: 'Plated, buffet, stations or sharing. Staff sized to that format. Extra roles are extra lines.' },
  { title: 'Dietary notes', description: 'Halal ingredients by default. Vegetarian, vegan and gluten-free when named. Labels on the tray. Not a medical kitchen.' },
  { title: 'The night', description: 'Setup, service, replenishment, clear-down. We do not hire the room or run AV.' },
  { title: 'What we do not publish', description: 'Named clients, invented guest counts, or scores we cannot show. If a host agrees in writing, we can feature a night. Until then, these cards are formats, not testimonials.' },
]

const galleryImages = [
  { src: '/menu-cocktails.webp', alt: 'Luxury catering drinks and cocktails for Dubai events' },
  { src: '/menu-appetizer.webp', alt: 'Elegant appetizers for private events in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Canapés served at myCHEF Dubai events' },
  { src: '/menu-meat.webp', alt: 'Premium grilled meats for luxury catering Dubai' },
  { src: '/menu-seafood.webp', alt: 'Fresh seafood dishes for yacht and villa events' },
  { src: '/menu-dessert.webp', alt: 'Dessert service for weddings and celebrations in Dubai' },
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
    q: 'Are these named client stories?',
    a: 'No. We do not publish client names, invented guest counts or results we cannot show. The cards on this page are typical formats: villa wedding, yacht birthday, gala, small dinner, launch, family Eid.',
  },
  {
    q: 'Can I see a menu from a past event?',
    a: 'Send the date, headcount and venue. You get an itemised proposal for your night, not a recycled menu from someone else.',
  },
  {
    q: 'Do you share real client names?',
    a: 'Only with written permission. Until then, this page stays structural.',
  },
  {
    q: 'Can my event be featured?',
    a: 'If you agree in writing to share details and images, we can feature a night. Ask when you book.',
  },
  {
    q: 'How do I plan something in this shape?',
    a: 'Open the commercial page for that format, or send the brief. We quote the night you are actually running.',
  },
  {
    q: 'Why not publish results?',
    a: 'Because invented testimonials are a trust problem. The standard lives in how we vet chefs, how a quote is built, and what the booking terms do when a night falls short.',
  },
]

const relatedServices = [
  {
    title: 'Wedding Catering Dubai',
    description: 'The wedding catering page: formats, tasting, and how a quote is built.',
    image: '/service-events.webp',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Yacht Catering Dubai',
    description: 'Fresh, refined menus designed for the movement, space, and views of a Dubai yacht event.',
    image: '/service-yacht.webp',
    link: '/yachts',
  },
  {
    title: 'Corporate Event Catering',
    description: 'One-off company nights: parties, launches and award dinners. Quoted per event.',
    image: '/service-corporate.webp',
    link: '/corporate-event-catering-dubai',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Luxury Catering Case Studies Dubai',
  serviceType: 'Catering Portfolio and Event Planning Service',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
  url: 'https://www.mychef.ae/case-studies',
}

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'myCHEF Case Studies & Event Stories',
  url: 'https://www.mychef.ae/case-studies',
  description: 'See how myCHEF Dubai delivers luxury catering for weddings, yachts, villas, and corporate events. Real event stories, menus, and guest experiences.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: caseStudies.map((cs, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: cs.title,
        description: `${cs.menu}. ${cs.outcome}`,
        image: `https://www.mychef.ae${cs.image}`,
        url: 'https://www.mychef.ae/case-studies',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.mychef.ae/#organization',
          name: 'myCHEF',
          logo: { '@type': 'ImageObject', url: 'https://www.mychef.ae/logo.svg' },
        },
      },
    })),
  },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.mychef.ae/case-studies' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, collectionSchema, faqSchema, breadcrumbSchema],
}

const categoryIcons: Record<string, React.ElementType> = {
  Weddings: Heart,
  Yachts: Ship,
  Villas: Home,
  Corporate: Building2,
  'Private Parties': PartyPopper,
}

/* ────────────────────── Component ────────────────────── */

export default function CaseStudies() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCaseStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeCategory)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cs-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cs-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cs-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.cs-intro-text', {
      scrollTrigger: { trigger: '.cs-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.cs-tab-btn', {
      scrollTrigger: { trigger: '.cs-tabs', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out',
    })

    gsap.to('.cs-card', {
      scrollTrigger: { trigger: '.cs-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cs-inc-item', {
      scrollTrigger: { trigger: '.cs-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cs-gallery-img', {
      scrollTrigger: { trigger: '.cs-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.cs-faq-item', {
      scrollTrigger: { trigger: '.cs-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cs-loc-item', {
      scrollTrigger: { trigger: '.cs-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.cs-rel-card', {
      scrollTrigger: { trigger: '.cs-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cs-cta', {
      scrollTrigger: { trigger: '.cs-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Catering Case Studies Dubai | myCHEF"
        description="Catering case studies Dubai: typical formats for villas, yachts, galas and launches. We do not publish named clients or invented results."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/case-studies-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/case-studies-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cs-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Case Studies</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cs-hero-h1">
            Catering Case Studies Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cs-hero-sub">
            Explore catering formats for Dubai villa weddings, yacht celebrations, company dinners and private gatherings. These are illustrative planning examples; any published client case study requires permission and supporting details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 cs-hero-cta">Request a quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cs-hero-cta"
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
          <SectionLabel align="center">FORMATS, NOT TESTIMONIALS</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering case studies Dubai without invented names
          </h2>
          <div className="cs-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The examples below explain how different occasions can be planned, from the menu and service format to staffing and clear-down. They are illustrative scenarios rather than documented client testimonials or event results.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              For the commercial pages, open <Link to="/wedding-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">wedding catering</Link>, <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht catering</Link>, <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa dining</Link> or <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering</Link>. Send the date and headcount when you want a quote for your night.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Case Study Cards ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <SectionLabel align="center" tone="dark">EVENT PORTFOLIO</SectionLabel>
            <h2 className="font-playfair text-h2 text-white mb-8">
              How these nights are usually run
            </h2>

            <div className="cs-tabs flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cs-tab-btn opacity-0 translate-y-4 font-inter text-body-sm px-4 py-2 border transition-colors duration-300 ${
                    activeCategory === cat
                      ? 'border-gold bg-gold text-black'
                      : 'border-gold/30 text-gold hover:border-gold hover:bg-gold/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="cs-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((cs, i) => {
              const Icon = categoryIcons[cs.category] || Calendar
              return (
                <article
                  key={i}
                  className="cs-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy" decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 font-inter text-caption uppercase tracking-wider text-gold">
                        <Icon size={14} />
                        {cs.category}
                      </span>
                    </div>
                    <h3 className="font-playfair text-h4 text-white mb-3">{cs.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 font-inter text-body-xs text-gray-400">
                        <Users size={14} /> {cs.guests}
                      </span>
                      <span className="inline-flex items-center gap-1 font-inter text-body-xs text-gray-400">
                        <UtensilsCrossed size={14} /> {cs.category}
                      </span>
                    </div>
                    <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                      {cs.outcome}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What a real brief contains
          </h2>

          <div className="cs-inc-grid grid md:grid-cols-2 gap-6">
            {whatsIncluded.map((item, i) => (
              <div key={i} className="cs-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 5: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            A Taste of Our Events
          </h2>

          <div className="cs-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cs-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Catering Case Studies Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 7: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="cs-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="cs-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <MapPin size={14} className="text-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services
          </h3>

          <div className="cs-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cs-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"
                  />
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

      {/* ═══════════════ Section 9: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center cs-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Create Your Next Event Story
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your wedding, yacht, villa, or corporate event and we'll design a bespoke plan inspired by the events we are proud to share.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Request a Custom Quote</Link>
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

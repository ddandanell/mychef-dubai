import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Calendar,
  Users,
  MapPin,
  UtensilsCrossed,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
  Heart,
  Building2,
  Ship,
  Home,
  PartyPopper,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss a luxury event inspired by your case studies (via mychef.ae/case-studies)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/case-studies'
const CAMPAIGN = 'case-studies'

/* ────────────────────── Data ────────────────────── */

const categories = ['All', 'Weddings', 'Yachts', 'Villas', 'Corporate', 'Private Parties']

const caseStudies = [
  {
    slug: 'villa-wedding-reception-emirates-hills',
    title: 'Villa Wedding Reception, Emirates Hills',
    category: 'Weddings',
    guests: 80,
    menu: 'Arabic-Mediterranean fusion, plated + live stations',
    outcome: 'A seamless evening of roaming canapés, live grilling, and family-style sharing plates that kept guests moving and the dance floor full.',
    image: '/images/villa-catering-dubai-hero.webp',
  },
  {
    slug: 'yacht-birthday-celebration-dubai-marina',
    title: 'Yacht Birthday Celebration, Dubai Marina',
    category: 'Yachts',
    guests: 25,
    menu: 'Sunset canapés, BBQ, signature mocktails',
    outcome: 'A sunset deck reception with passed bites, fresh grills, and alcohol-free craft drinks served as the yacht cruised the marina.',
    image: '/images/yacht-catering-dubai-hero.webp',
  },
  {
    slug: 'corporate-gala-dinner-downtown-dubai',
    title: 'Corporate Gala Dinner, Downtown Dubai',
    category: 'Corporate',
    guests: 200,
    menu: 'Four-course plated menu with sommelier service',
    outcome: 'A polished seated dinner executed across a large ballroom with precise timing, dietary coverage, and full front-of-house staffing.',
    image: '/images/corporate-catering-dubai-hero.webp',
  },
  {
    slug: 'intimate-anniversary-dinner-palm-jumeirah',
    title: 'Intimate Anniversary Dinner, Palm Jumeirah',
    category: 'Villas',
    guests: 8,
    menu: 'Seven-course tasting menu with a private chef',
    outcome: 'A chef-hosted evening in a private villa with paired courses, personal menu notes, and discreet service for a milestone celebration.',
    image: '/images/romantic-dinner-dubai-hero.webp',
  },
  {
    slug: 'product-launch-difc',
    title: 'Product Launch, DIFC',
    category: 'Corporate',
    guests: 60,
    menu: 'Branded canapés and live chef station',
    outcome: 'A high-energy launch with logo-etched bites, interactive cooking, and timed service aligned to the product reveal moment.',
    image: '/images/cocktail-party-catering-dubai-hero.webp',
  },
  {
    slug: 'family-eid-gathering-arabian-ranches',
    title: 'Family Eid Gathering, Arabian Ranches',
    category: 'Private Parties',
    guests: 40,
    menu: 'Buffet with Arabic grills, salads, and desserts',
    outcome: 'A warm family buffet with live Arabic grill service, fresh breads, and a dessert table that carried guests from lunch into the evening.',
    image: '/images/arabic-catering-dubai-hero.webp',
  },
]

const whatsIncluded = [
  { title: 'The Client Brief', description: 'How the event started: guest count, venue, theme, and what the host wanted to achieve.' },
  { title: 'Menu Concept & Cuisine', description: 'The cuisine style, signature dishes, and how the menu reflected the occasion.' },
  { title: 'Service Style & Staffing', description: 'Plated, buffet, live stations, or family-style — and the team that made it happen.' },
  { title: 'Dietary & Cultural Care', description: 'How halal, allergen, and cultural requirements were handled without compromise.' },
  { title: 'Execution Highlights', description: 'Key moments, logistics, and design details that defined the event experience.' },
  { title: 'Outcome & Guest Feedback', description: 'Anonymized results and reflections on what made the event a success.' },
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

const faqs = [
  {
    q: 'What types of events are featured in your case studies?',
    a: 'Our case studies cover weddings, yacht celebrations, villa dinners, corporate galas, product launches, and private parties across Dubai.',
  },
  {
    q: 'Can I see menus from past events?',
    a: 'Each case study includes the menu concept and service style. For bespoke proposals, contact us with your event details.',
  },
  {
    q: 'Do you share real client names in case studies?',
    a: 'We respect client privacy. Case studies use anonymized event descriptions unless explicit permission has been given.',
  },
  {
    q: 'Can my event be featured as a case study?',
    a: 'If you are happy to share details and images, we would love to feature your event. Discuss this with your event manager.',
  },
  {
    q: 'How can I plan an event similar to one in your case studies?',
    a: 'Contact us via WhatsApp or the inquiry form. We will use the case study as inspiration and design a bespoke plan for your event.',
  },
  {
    q: 'Do the case studies reflect your actual service standards?',
    a: 'Yes. Each story is based on real event execution, menu planning, staffing, and logistics — and reflects the standard we bring to every booking.',
  },
]

const relatedServices = [
  {
    title: 'Wedding Catering Dubai',
    description: 'Bespoke wedding menus, tasting sessions, and full-service teams for celebrations across Dubai.',
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
    description: 'Polished dining and seamless logistics for galas, launches, and board events in Dubai.',
    image: '/service-corporate.webp',
    link: '/corporate-event-catering-dubai',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Luxury Catering Case Studies Dubai',
  serviceType: 'Catering Portfolio and Event Planning Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
  url: 'https://mychef.ae/case-studies',
}

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'myCHEF Case Studies & Event Stories',
  url: 'https://mychef.ae/case-studies',
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
        image: `https://mychef.ae${cs.image}`,
        url: `https://mychef.ae/case-studies/${cs.slug}`,
        publisher: {
          '@type': 'Organization',
          name: 'myCHEF Dubai',
          logo: { '@type': 'ImageObject', url: 'https://mychef.ae/logo.svg' },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://mychef.ae/case-studies' },
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
        title="Event Case Studies | Luxury Catering Dubai | myCHEF"
        description="See how myCHEF Dubai delivers luxury catering for weddings, yachts, villas, and corporate events. Real event stories, menus, and guest experiences."
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
            myCHEF Case Studies & Event Stories
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cs-hero-sub">
            Events we're proud of — from villa weddings and yacht birthdays to corporate galas and intimate private dinners across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 cs-hero-cta">Request a Proposal</Link>
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

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            PROOF, NOT PROMISES
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            See How We Bring Dubai Events to Life
          </h2>
          <div className="cs-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Planning a high-stakes event in Dubai means needing proof that every detail will be handled with precision. Our case studies show how myCHEF Dubai approaches menu design, logistics, staffing, and service — from intimate villa dinners to large-scale corporate galas. Each story highlights the brief, the cuisine, the execution, and the outcome, so you can picture what is possible for your own celebration.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Whether you are organizing <Link to="/wedding-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">wedding catering Dubai</Link>, a <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht event</Link>, <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa private dining</Link>, or <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering</Link>, these anonymized event stories offer a clear look at how we deliver. Browse the cases below, or visit our <Link to="/gallery" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">event gallery</Link> for more inspiration.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Case Study Cards ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              EVENT PORTFOLIO
            </span>
            <h2 className="font-playfair text-h2 text-white mb-8">
              Events We're Proud Of
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
                <Link
                  key={i}
                  to={`/case-studies/${cs.slug}`}
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
                        <Users size={14} /> {cs.guests} guests
                      </span>
                      <span className="inline-flex items-center gap-1 font-inter text-body-xs text-gray-400">
                        <UtensilsCrossed size={14} /> {cs.category}
                      </span>
                    </div>
                    <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                      {cs.outcome}
                    </p>
                    <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                      Read the Story <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What You'll Find in Every Case Study
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
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
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
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Case Study Questions
          </h2>

          <div className="cs-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="cs-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 7: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="cs-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
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
                    Explore <ArrowRight size={14} />
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
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Custom Quote</Link>
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

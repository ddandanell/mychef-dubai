import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Moon,
  Star,
  Sun,
  Home,
  UtensilsCrossed,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss Ramadan Iftar catering (via mychef.ae/iftar-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const ramadanServices = [
  {
    icon: Moon,
    title: 'Private Family Iftar',
    description: 'An intimate Iftar at home or in your villa, with traditional dishes, fresh dates, and attentive service for family and close friends.',
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
    link: '/party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Iftar Menu', description: 'A custom menu designed around your guest count, preferences, and any dietary or halal requirements.' },
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
  { title: 'Receive a Custom Proposal', description: 'We design a bespoke Iftar menu with traditional and contemporary dishes, service style, and staffing plan.' },
  { title: 'Confirm Your Booking', description: 'Once the menu and logistics are approved, we lock in your preferred Ramadan dates and confirm every detail.' },
  { title: 'We Source Ingredients', description: 'Our team shops for fresh produce, premium proteins, dates, and specialty ingredients ahead of the event.' },
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
    description: 'We cater larger community gatherings with scalable menus, timely service at sunset, and the cultural sensitivity that Ramadan occasions deserve.',
  },
  {
    title: 'Suhoor Before Fajr',
    description: 'For late-night gatherings, we serve light, energising Suhoor menus with pastries, yoghurt, fruit, and coffee so guests are ready for the day ahead.',
  },
]

const faqs = [
  {
    q: 'Do you cater Iftar for both small families and large companies?',
    a: 'Yes. We cater intimate family Iftars at home as well as large corporate, embassy, and community Iftars in hotels, offices, and event spaces across Dubai.',
  },
  {
    q: 'Can the menu include traditional Ramadan dishes?',
    a: 'Absolutely. Our Iftar menus feature dates, Arabic coffee, lentil soup, hot and cold mezze, grills, tagines, Arabic desserts, and Ramadan juices, all adapted to your preferences.',
  },
  {
    q: 'Do you accommodate halal and dietary requirements?',
    a: 'Yes. We prepare halal menus and can accommodate vegetarian, vegan, gluten-free, dairy-free, and allergy-aware requirements with advance notice.',
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
]

const relatedServices = [
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke dining experiences brought to your home, villa, or event space.',
    image: '/service-catering.jpg',
    link: '/private-chef-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for boardrooms, offices, and company events across Dubai.',
    image: '/service-events.jpg',
    link: '/corporate',
  },
  {
    title: 'Party Catering',
    description: 'Full-service catering for celebrations, from intimate dinners to large gatherings.',
    image: '/service-villa.jpg',
    link: '/party-catering-dubai',
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
  name: 'Iftar Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://mychef.ae/catering-dubai' },
    { '@type': 'ListItem', position: 3, name: 'Iftar Catering Dubai', item: 'https://mychef.ae/iftar-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function RamadanIftar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
        title="Iftar Catering Dubai | Ramadan Private Chef"
        description="Iftar catering and Ramadan private chef service in Dubai. Traditional menus, dates, mezze, grills, desserts, and full service for family and corporate Iftars."
        canonicalPath="/iftar-catering-dubai"
        ogImage="/service-catering.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-catering.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 iftar-hero-h1" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/catering-dubai" className="text-[#A3A3A3] hover:text-gold transition-colors">Catering</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Iftar Catering Dubai</span></li>
            </ol>
          </nav>

          <p className="font-inter text-caption uppercase tracking-[0.2em] text-gold mb-4 opacity-0 translate-y-4 iftar-hero-h1">
            Ramadan Kareem
          </p>
          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 iftar-hero-h1">
            Iftar Catering & Ramadan Private Chef in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 iftar-hero-sub">
            Traditional and contemporary Iftar menus prepared in your home, villa, office, or event space. From sunset dates to late-night Suhoor, we honour the spirit of Ramadan with exceptional food and attentive service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=iftar-catering-dubai" className="btn-primary opacity-0 translate-y-4 iftar-hero-cta">Request a Proposal</Link>
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
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            RAMADAN IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Iftar Gatherings Made Meaningful
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Iftar is more than a meal — it is a moment of gratitude, togetherness, and tradition. At myCHEF Dubai, we create Iftar catering experiences that respect the rhythm of Ramadan while delivering food your guests will remember. From the first date to the final cup of Arabic coffee, every detail is planned around your family, your colleagues, or your community.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Whether you are hosting an intimate family Iftar, a corporate gathering for staff, or a community event at a hotel or event space, our team brings the menu, staff, and setup to you. Menus can be adapted to guest count, dietary needs, and event style, ensuring each evening feels personal and effortless.
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
              Iftar Catering Designed for Every Gathering
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 border border-[#E5E5E5]">
              <Home className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Families & Homes</h3>
              <p className="font-inter text-body-sm text-[#737373]">Relaxed Iftars in villas and apartments across Dubai, with traditional dishes served to family and friends.</p>
            </div>
            <div className="bg-white p-8 border border-[#E5E5E5]">
              <Users className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Companies & Teams</h3>
              <p className="font-inter text-body-sm text-[#737373]">Corporate Iftars in offices, hotels, and event venues, with polished buffet or plated service.</p>
            </div>
            <div className="bg-white p-8 border border-[#E5E5E5]">
              <Star className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Communities & Embassies</h3>
              <p className="font-inter text-body-sm text-[#737373]">Large-scale community Iftars with scalable menus, timely service, and cultural sensitivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Service Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              RAMADAN SERVICES
            </span>
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
                  className="iftar-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
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
                  <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.description}</p>
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
              Flavours of the Holy Month
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

          <p className="font-inter text-body text-[#A3A3A3] text-center max-w-[700px] mx-auto mt-10 leading-relaxed">
            Every Iftar menu is built from scratch. We do not use fixed set menus. Instead, we design around your preferences, combining traditional Ramadan staples with contemporary dishes so the spread feels both familiar and fresh.
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
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Why Choose ═══════════════ */}
      <section className="iftar-why-section bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="iftar-why opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white mb-8 text-center">
              Why Choose myCHEF for Ramadan
            </h2>
            <div className="space-y-5">
              <p className="font-inter text-body-lg text-[#A3A3A3] leading-relaxed">
                We understand that Ramadan catering in Dubai is about more than great food. It is about timing, hospitality, and respect for tradition. Our chefs and service teams arrive prepared, serve with discretion, and ensure that the fast is broken smoothly and beautifully.
              </p>
              <p className="font-inter text-body-lg text-[#A3A3A3] leading-relaxed">
                We plan every Iftar around your schedule, your space, and your guests. Menus are fully customised, dietary requirements are carefully managed, and our team handles setup, service, and clear-down so you can focus on what matters most during the holy month.
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
              DUBAI IFTAR OCCASIONS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Iftar Catering for Every Setting
            </h2>
          </div>

          <div className="iftar-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="iftar-uc-item bg-white p-8 border border-[#E5E5E5] opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{uc.description}</p>
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
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Related Services</h3>
              <ul className="space-y-3">
                <li><Link to="/catering-dubai" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Luxury Catering Dubai</Link></li>
                <li><Link to="/private-chef-dubai" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Private Chef Dubai</Link></li>
                <li><Link to="/corporate" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Corporate Catering</Link></li>
                <li><Link to="/party-catering-dubai" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Party Catering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Popular Locations</h3>
              <ul className="space-y-3">
                <li><Link to="/locations/downtown-dubai" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Downtown Dubai</Link></li>
                <li><Link to="/locations/dubai-marina" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Dubai Marina</Link></li>
                <li><Link to="/locations/palm-jumeirah" className="font-inter text-body text-[#A3A3A3] hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Palm Jumeirah</Link></li>
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
            <h2 className="font-playfair text-[36px] text-black">
              Ramadan Iftar Questions
            </h2>
          </div>

          <div className="iftar-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="iftar-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFaq === i}
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
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 12: Locations ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Iftar Catering Across Dubai
          </h2>

          <div className="iftar-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="iftar-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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
                className="iftar-rel-card group bg-black overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3] mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
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
            Plan Your Iftar with myCHEF
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Ramadan dates fill quickly. Share your plans and we will design a custom Iftar menu and service plan for your home, office, or event space in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=iftar-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
          <p className="font-inter text-body-sm text-[#737373] mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}

import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Users,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a Ramadan catering guide and quote (via mychef.ae/ramadan-catering-guide-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const etiquette = [
  {
    title: 'Generosity of hospitality',
    description: 'Ramadan gatherings are centred on sharing. Menus are designed for abundance, with dishes served family-style or as generous stations that encourage guests to help themselves.',
  },
  {
    title: 'Pacing around fasting',
    description: 'Guests arrive before sunset hungry and ready to break their fast. Service should begin promptly with dates and water, followed by lighter dishes before heavier mains.',
  },
  {
    title: 'Respectful atmosphere',
    description: 'Music, decor, and service style should reflect the spirit of the month. Discreet, attentive staff help hosts focus on guests and prayer.',
  },
]

const menus = [
  {
    title: 'Iftar',
    description: 'The evening meal that breaks the fast. Begin with dates, water, and laban, followed by soups, salads, hot and cold mezze, grilled meats, rice dishes, and desserts such as kunafa and qatayef.',
  },
  {
    title: 'Suhoor',
    description: 'The pre-dawn meal before the fast begins. Lighter dishes such as foul, falafel, eggs, cheeses, breads, fruit, and herbal teas served in a relaxed, lounge-style setting.',
  },
  {
    title: 'Eid celebrations',
    description: 'Festive menus that move beyond fasting staples into celebratory dishes, sweets, and family-style spreads for daytime or evening gatherings.',
  },
]

const timing = [
  { title: 'Arrival', note: 'Guests arrive 10–20 minutes before Maghrib so service can begin the moment the call to prayer sounds.' },
  { title: 'Breaking the fast', note: 'Dates, water, and a light starter are served first. Heavier dishes follow once guests have eaten something.' },
  { title: 'Main service', note: 'Buffet or family-style service begins after prayer. Dishes stay warm and replenished throughout the evening.' },
  { title: 'Dessert & tea', note: 'Arabic sweets, coffee, and tea are served later in the evening as guests relax and socialise.' },
]

const halalAndDietary = [
  'All meat and poultry are sourced and prepared according to halal requirements.',
  'Alcohol is not served at Ramadan events unless the venue specifically permits it and the host requests it.',
  'Vegetarian and vegan options are clearly labelled and kept separate where cross-contamination is a concern.',
  'Nut, dairy, and gluten allergies are flagged in advance and communicated to service staff.',
]

const largeGatherings = [
  { title: 'Corporate iftars', description: 'Buffet stations and seated service for teams and clients, designed around office timings and venue constraints.' },
  { title: 'Community events', description: 'High-volume service with consistent quality, clear dietary labelling, and efficient queue management.' },
  { title: 'Family iftars at home', description: 'Private chef or catering team brings a full Ramadan menu to your villa or apartment, with setup and cleanup.' },
]

const internalLinks = [
  { title: 'Ramadan Catering Dubai', link: '/ramadan-catering-dubai', description: 'Full-service Ramadan catering for homes and venues.' },
  { title: 'Iftar Catering Dubai', link: '/iftar-catering-dubai', description: 'Evening iftar menus and buffet service.' },
  { title: 'Suhoor Catering Dubai', link: '/suhoor-catering-dubai', description: 'Pre-dawn suhoor menus and lounge setups.' },
  { title: 'Eid Catering Dubai', link: '/eid-catering-dubai', description: 'Festive menus for Eid gatherings.' },
  { title: 'Arabic Catering Dubai', link: '/arabic-catering-dubai', description: 'Traditional Arabic dishes and mezze spreads.' },
  { title: 'Halal Catering Dubai', link: '/halal-catering-dubai', description: 'Halal-compliant catering for all occasions.' },
]

const faqs = [
  {
    q: 'What is the traditional order of dishes at an iftar?',
    a: 'Iftar traditionally begins with dates and water to break the fast, followed by soup, salads, and mezze. Main dishes such as grilled meats, rice, and stews come next, with Arabic sweets, coffee, and tea served later in the evening.',
  },
  {
    q: 'Can you cater suhoor at a private home?',
    a: 'Yes. We provide suhoor catering for homes and villas across Dubai, with lighter dishes served in a relaxed format before Fajr. Setup and cleanup are included so the host can rest.',
  },
  {
    q: 'Are your Ramadan menus halal?',
    a: 'Yes. All Ramadan catering is prepared according to halal requirements. We also accommodate vegetarian, vegan, and allergy needs with clearly labelled dishes.',
  },
  {
    q: 'How do you time service around sunset and prayer?',
    a: 'We plan arrival, setup, and service so that dates, water, and starters are ready the moment the sun sets. Main service begins after Maghrib prayer, with dishes kept warm and replenished throughout the evening.',
  },
  {
    q: 'Do you cater large corporate and community iftars?',
    a: 'Yes. We cater corporate iftars, community events, and large family gatherings with buffet stations, seated service, or a combination. High-volume timing and dietary labelling are planned in advance.',
  },
  {
    q: 'How far in advance should I book Ramadan catering?',
    a: 'Book two to four weeks ahead for private iftars. For corporate or large community events, four to eight weeks is recommended, as Ramadan is one of the busiest catering periods in Dubai.',
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

const articleSchema = {
  '@type': 'Article',
  headline: 'Ramadan Catering Guide for Dubai: Iftar, Suhoor & Eid',
  description: 'A guide to Ramadan catering in Dubai: etiquette, iftar, suhoor and Eid menus, timing around sunset and Fajr, halal requirements, and booking timelines.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Ramadan Catering Guide Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://mychef.ae/guides' },
    { '@type': 'ListItem', position: 3, name: 'Ramadan Catering Guide Dubai', item: 'https://mychef.ae/ramadan-catering-guide-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function RamadanCateringGuide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ram-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ram-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ram-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ram-etiquette-card', {
      scrollTrigger: { trigger: '.ram-etiquette', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ram-menu-card', {
      scrollTrigger: { trigger: '.ram-menus', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ram-timing-row', {
      scrollTrigger: { trigger: '.ram-timing', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ram-gather-card', {
      scrollTrigger: { trigger: '.ram-gatherings', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ram-link-item', {
      scrollTrigger: { trigger: '.ram-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.ram-faq-item', {
      scrollTrigger: { trigger: '.ram-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ram-cta', {
      scrollTrigger: { trigger: '.ram-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Ramadan Catering Guide Dubai | Iftar, Suhoor & Eid | myCHEF"
        description="Ramadan catering guide for Dubai: iftar, suhoor, and Eid menus, timing around sunset and Fajr, halal requirements, large gatherings, and booking timelines."
        canonicalPath="/ramadan-catering-guide-dubai"
        ogImage="/service-catering.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-catering.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ram-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Ramadan Catering Guide Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ram-hero-h1">
            Ramadan Catering Guide for Dubai: Iftar, Suhoor & Eid
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ram-hero-sub">
            Plan respectful, abundant Ramadan gatherings with guidance on iftar, suhoor, Eid menus, halal requirements, and service timing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=ramadan-catering-guide-dubai" className="btn-primary opacity-0 translate-y-4 ram-hero-cta">Get My Custom Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ram-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            RAMADAN HOSPITALITY
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Cater With Respect and Generosity
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Ramadan is the most meaningful month of the year in Dubai, and the gatherings that mark it deserve careful planning. Whether you are hosting an intimate family iftar, a corporate suhoor, or a large community celebration, the catering should honour the rhythm of fasting, prayer, and hospitality.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            This guide covers the etiquette, menu formats, timing, and practical considerations that make Ramadan catering run smoothly.
          </p>
        </div>
      </section>

      {/* ═══════════════ Etiquette ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOSTING ETIQUETTE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Ramadan Hospitality Principles
            </h2>
          </div>

          <div className="ram-etiquette grid md:grid-cols-3 gap-6">
            {etiquette.map((item, i) => (
              <div key={i} className="ram-etiquette-card bg-charcoal p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Menus ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU TYPES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Iftar, Suhoor & Eid Menus
            </h2>
          </div>

          <div className="ram-menus grid md:grid-cols-3 gap-6">
            {menus.map((menu, i) => (
              <div key={i} className="ram-menu-card bg-white p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{menu.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{menu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Timing ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SUNSET & FAJR
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Timing the Service
            </h2>
          </div>

          <div className="ram-timing space-y-4">
            {timing.map((item, i) => (
              <div key={i} className="ram-timing-row flex gap-3 bg-cream p-6 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-playfair text-h3 text-black mb-1">{item.title}</h3>
                  <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Halal & Dietary ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                HALAL & DIETARY
              </span>
              <h2 className="font-playfair text-h2 text-white mb-6">
                Religious and Dietary Requirements
              </h2>
              <p className="font-inter text-body-lg text-[#A3A3A3] leading-relaxed">
                Ramadan catering must meet halal standards and accommodate the dietary needs of a diverse guest list. Clear labelling and careful preparation are essential.
              </p>
            </div>
            <div className="space-y-4">
              {halalAndDietary.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-body text-[#A3A3A3] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Large Gatherings ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SCALE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Large Corporate & Community Iftars
            </h2>
          </div>

          <div className="ram-gatherings grid md:grid-cols-3 gap-6">
            {largeGatherings.map((g, i) => (
              <div key={i} className="ram-gather-card bg-black p-8 opacity-0 translate-y-12">
                <Users size={32} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{g.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Ramadan Services
          </h2>

          <div className="ram-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="ram-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
              >
                <div>
                  <h4 className="font-playfair text-h4 text-white mb-1">{link.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3]">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Ramadan Catering FAQ
          </h2>

          <div className="ram-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ram-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ram-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Ramadan Gathering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Share your iftar, suhoor, or Eid plans and we will design a respectful, abundant menu delivered with precise timing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=ramadan-catering-guide-dubai" className="btn-primary">Get My Custom Quote</Link>
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

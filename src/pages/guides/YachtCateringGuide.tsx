import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Anchor,
  Phone,
  ArrowRight,
  ChevronRight,
  Sun,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a yacht catering guide and quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const considerations = [
  {
    title: 'Galley size',
    description: 'Yacht galleys are compact. Menus must be designed around limited oven, grill, and prep space, with much of the work done on land before boarding.',
  },
  {
    title: 'Compact menus',
    description: 'Finger foods, canapés, boxed-style platters, and individually plated dishes travel better than sprawling buffets on moving decks.',
  },
  {
    title: 'Stable serving',
    description: 'Dishes and drinks need to be secure in swell. Non-slip trays, lidded containers, and manageable portion sizes reduce spills.',
  },
  {
    title: 'Boarding logistics',
    description: 'Caterers must coordinate arrival times, security, parking, and loading restrictions at the marina. Early briefing with the yacht crew is essential.',
  },
  {
    title: 'Storage & refrigeration',
    description: 'Onboard fridge and freezer space is limited. Menus are planned around what can be kept at safe temperatures throughout the cruise.',
  },
  {
    title: 'Crew coordination',
    description: 'The catering team works alongside the yacht crew. Clear communication about timing, guest flow, and safety zones keeps service smooth.',
  },
]

const popularFormats = [
  {
    title: 'Canapés & champagne',
    description: 'Elegant bites and sparkling service for sunset cruises and celebrations. Easy to handle on deck and ideal for standing receptions.',
  },
  {
    title: 'BBQ on deck',
    description: 'Grilled seafood, skewers, and vegetables prepared on a compact grill. Best for relaxed daytime charters.',
  },
  {
    title: 'Buffet stations',
    description: 'Salads, cold mezze, breads, and pre-portioned hot dishes arranged at secure stations. Suitable for larger groups.',
  },
  {
    title: 'Seated dinner',
    description: 'A refined multi-course meal for formal occasions. Requires stable tables, secured glassware, and precise service timing.',
  },
]

const dubaiRoutes = [
  { area: 'Dubai Marina', note: 'Easy boarding, skyline views, and sheltered waters for shorter cruises.' },
  { area: 'Palm Jumeirah', note: 'Iconic island views and calm anchorage spots for swimming and dining.' },
  { area: 'Burj Al Arab & Jumeirah', note: 'Scenic backdrops for photography and sunset canapés.' },
  { area: 'The World Islands', note: 'Longer charters with open-water cruising and private anchorage feel.' },
]

const weatherTips = [
  { season: 'November–March', note: 'Peak season. Mild temperatures, calm seas, and ideal conditions for any format.' },
  { season: 'April–May', note: 'Still pleasant; plan shade and hydration for midday charters.' },
  { season: 'June–September', note: 'Very hot and humid. Air-conditioned interiors and lighter menus are strongly recommended.' },
]

const internalLinks = [
  { title: 'Yachts Catering', link: '/yachts', description: 'myCHEF yacht catering services and packages.' },
  { title: 'Canapé Catering Dubai', link: '/canape-catering-dubai', description: 'Bite-sized menus ideal for yacht receptions.' },
  { title: 'BBQ Catering Dubai', link: '/bbq-catering-dubai', description: 'Grill menus for outdoor and deck events.' },
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Elegant seated dinner experiences.' },
  { title: 'Private Party Catering', link: '/private-party-catering-dubai', description: 'Private celebration catering at unique venues.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Budget guidance for yacht catering formats.' },
]

const faqs = [
  {
    q: 'What food works best on a yacht in Dubai?',
    a: 'Canapés, grazing platters, boxed-style dishes, and secure individual plates work best. Avoid fragile presentations and large shared dishes that are hard to balance on a moving deck.',
  },
  {
    q: 'Can you cook fresh food on a yacht?',
    a: 'Yes, but yacht galleys are compact. Much of the prep is done on shore and finished onboard. BBQ and live stations are possible on larger yachts with suitable deck space and safety approval.',
  },
  {
    q: 'How do you handle drinks and glassware on a yacht?',
    a: 'We use non-slip trays, stemless glassware, and lidded coolers. For active cruising, plastic or polycarbonate serveware may be recommended for safety.',
  },
  {
    q: 'What routes are popular for yacht catering in Dubai?',
    a: 'Dubai Marina, Palm Jumeirah, Burj Al Arab, and The World Islands are the most popular routes. Route choice affects timing, anchorage, and menu format.',
  },
  {
    q: 'Do you coordinate with the yacht crew?',
    a: 'Yes. We liaise with the captain and crew on boarding times, storage, safety zones, and service flow so catering integrates with the cruise schedule.',
  },
  {
    q: 'How far in advance should I book yacht catering?',
    a: 'Two to four weeks is ideal. During peak season from November to March, or for large charters, book six to eight weeks ahead.',
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
  headline: 'Yacht Catering Guide for Dubai Cruises and Celebrations',
  description: 'A guide to yacht catering in Dubai: galley constraints, menu formats, popular routes, weather considerations, crew coordination, and planning tips.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Yacht Catering Guide Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'Yacht Catering Guide Dubai', item: 'https://mychef.ae/yacht-catering-guide-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function YachtCateringGuide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.yacht-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.yacht-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.yacht-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.yacht-consider-card', {
      scrollTrigger: { trigger: '.yacht-consider', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-format-card', {
      scrollTrigger: { trigger: '.yacht-formats', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-route-card', {
      scrollTrigger: { trigger: '.yacht-routes', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-weather-card', {
      scrollTrigger: { trigger: '.yacht-weather', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-link-item', {
      scrollTrigger: { trigger: '.yacht-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.yacht-faq-item', {
      scrollTrigger: { trigger: '.yacht-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.yacht-cta', {
      scrollTrigger: { trigger: '.yacht-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Yacht Catering Guide Dubai | Menus, Planning & Tips | myCHEF"
        description="Plan yacht catering in Dubai: galley constraints, canapés, BBQ, buffet, seated menus, Marina and Palm routes, weather, crew coordination, and permits."
        canonicalPath="/yacht-catering-guide-dubai"
        ogImage="/service-yacht.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-yacht.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 yacht-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Yacht Catering Guide Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 yacht-hero-h1">
            Yacht Catering Guide for Dubai Cruises and Celebrations
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 yacht-hero-sub">
            Everything you need to plan catering for a Dubai yacht charter, from menu formats and route timing to crew coordination and onboard service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 yacht-hero-cta">
              Plan Yacht Catering
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 yacht-hero-cta"
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
            ON THE WATER
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering Designed for Yacht Life
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A yacht charter in Dubai offers some of the most memorable settings for a celebration: the Marina skyline, the Palm, the open Gulf. But catering on board comes with unique constraints. Galleys are compact, decks move, storage is limited, and service must integrate with the crew and route.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            This guide covers the practical side of yacht catering so you can choose a menu and service plan that works beautifully at sea.
          </p>
        </div>
      </section>

      {/* ═══════════════ Considerations ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              YACHT-SPECIFIC FACTORS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              What Makes Yacht Catering Different
            </h2>
          </div>

          <div className="yacht-consider grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {considerations.map((item, i) => (
              <div key={i} className="yacht-consider-card bg-charcoal p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Formats ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              POPULAR FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Yacht Catering Formats
            </h2>
          </div>

          <div className="yacht-formats grid md:grid-cols-2 gap-6">
            {popularFormats.map((fmt, i) => (
              <div key={i} className="yacht-format-card bg-white p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{fmt.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{fmt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Routes ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DUBAI ROUTES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Popular Yacht Catering Routes
            </h2>
          </div>

          <div className="yacht-routes grid md:grid-cols-2 gap-6">
            {dubaiRoutes.map((route, i) => (
              <div key={i} className="yacht-route-card bg-cream p-8 opacity-0 translate-y-10">
                <div className="flex items-center gap-3 mb-3">
                  <Anchor size={24} className="text-gold" />
                  <h3 className="font-playfair text-h3 text-black">{route.area}</h3>
                </div>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{route.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Weather ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WEATHER & SEASONS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Planning Around Dubai's Climate
            </h2>
          </div>

          <div className="yacht-weather grid md:grid-cols-3 gap-6">
            {weatherTips.map((w, i) => (
              <div key={i} className="yacht-weather-card bg-charcoal p-8 text-center opacity-0 translate-y-12">
                <Sun size={32} className="text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{w.season}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{w.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Yacht & Event Services
          </h2>

          <div className="yacht-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="yacht-link-item group flex items-center justify-between bg-black p-6 opacity-0 hover:bg-[#222] transition-colors"
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
            Yacht Catering FAQ
          </h2>

          <div className="yacht-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="yacht-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
        <div className="container-custom text-center yacht-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Yacht Charter Catering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Share your yacht size, route, and guest count. We will design a sea-ready menu and service plan for your Dubai cruise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Yacht Quote
            </Link>
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

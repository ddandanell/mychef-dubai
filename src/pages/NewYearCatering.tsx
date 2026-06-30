import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  Flame,
  PartyPopper,
  Wine,
  UtensilsCrossed,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
  Ship,
  Home,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book New Year\'s Eve catering in Dubai')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const nyeFormats = [
  {
    icon: Sparkles,
    title: 'Gala Dinner',
    description: 'A refined multi-course dinner with elegant plating, wine pairing-style service, and a midnight toast for formal celebrations.',
    link: '/luxury-dining-experiences',
  },
  {
    icon: PartyPopper,
    title: 'Canapé Countdown Party',
    description: 'Circulating canapés, bowl food, and lively stations for cocktail-style parties where guests mingle until midnight.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Flame,
    title: 'Live Station NYE BBQ',
    description: 'Outdoor grilling, carving stations, and firepit ambience for villa gardens and terraces on Dubai\'s coolest night of the year.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht Countdown Catering',
    description: 'Compact, high-end menus designed for yacht galleys, so your guests can watch the fireworks from the water.',
    link: '/yachts',
  },
  {
    icon: Wine,
    title: 'Midnight Toast & Bar',
    description: 'Bartenders, mocktails, bubbles, and a structured midnight toast to mark the moment in style.',
    link: '/party-catering-dubai',
  },
  {
    icon: UtensilsCrossed,
    title: 'Family-Style Feast',
    description: 'Generous sharing platters and relaxed service for family gatherings and close friends welcoming the new year together.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Custom NYE Menu Design', description: 'A menu built around your celebration style, guest count, and dietary requirements.' },
  { title: 'Canapés & Amuse-Bouches', description: 'Bite-sized openings and circulating starters to keep energy high early in the evening.' },
  { title: 'Plated Dinner or Buffet', description: 'Choose a formal multi-course dinner or a generous buffet format for larger groups.' },
  { title: 'Live Cooking Stations', description: 'Interactive grills, carving, and chef stations that add theatre to the countdown.' },
  { title: 'Midnight Toast Service', description: 'Structured service for the countdown moment, with bubbles, mocktails, or your preferred toast.' },
  { title: 'Bartenders & Drinks Service', description: 'Professional bar staff and drinks stations scaled to your guest list and format.' },
  { title: 'Event Staff & Hosts', description: 'Waiters, hosts, and support staff to keep service smooth from arrival to departure.' },
  { title: 'Setup, Service & Clear-Down', description: 'Full event support including kitchen setup, service, and post-party cleanup.' },
]

const useCases = [
  {
    title: 'Villa Fireworks Party',
    description: 'Host a private New Year\'s Eve party at your villa in Palm Jumeirah, Emirates Hills, or Dubai Hills with a tailored menu, bar service, and views of the city fireworks.',
  },
  {
    title: 'Yacht Countdown',
    description: 'Watch Dubai\'s famous fireworks from the water with yacht-friendly menus, compact setups, and seamless service from our experienced marine catering team.',
  },
  {
    title: 'Corporate Gala Dinner',
    description: 'Ring in the new year with clients, partners, or employees at a Downtown Dubai or DIFC venue with a refined gala menu and professional hospitality.',
  },
  {
    title: 'Rooftop Terrace Celebration',
    description: 'Transform a Dubai Marina or Downtown rooftop into an intimate countdown venue with canapés, cocktails, and a midnight toast under the city lights.',
  },
]

const howItWorks = [
  { step: '01', title: 'Share Your Vision', description: 'Tell us about your venue, guest count, preferred format, and any fireworks or entertainment plans.' },
  { step: '02', title: 'Menu & Format Planning', description: 'We design a menu and service format that matches the energy of your celebration, from gala to garden party.' },
  { step: '03', title: 'Receive a Proposal', description: 'You get a detailed proposal covering food, drinks, staff, timing, and logistics for the evening.' },
  { step: '04', title: 'Confirm & Reserve', description: 'Approve the details and secure your date. We coordinate with your venue or yacht crew as needed.' },
  { step: '05', title: 'Team Prep & Arrival', description: 'Our chef and event team arrive early with ingredients, equipment, and a clear service timeline.' },
  { step: '06', title: 'Countdown & Clear-Down', description: 'We serve through midnight, manage the toast, and clear down afterwards so your evening ends effortlessly.' },
]

const faqs = [
  {
    q: 'Can you cater New Year\'s Eve on a yacht in Dubai?',
    a: 'Yes. We provide yacht-friendly menus, compact galley setups, and experienced service teams for New Year\'s Eve yacht celebrations in Dubai Marina, Palm Jumeirah, and surrounding waters.',
  },
  {
    q: 'Do you provide a midnight toast service?',
    a: 'Yes. We structure the service around the countdown moment, providing glassware, bubbles, mocktails, or your chosen toast so the midnight celebration feels seamless.',
  },
  {
    q: 'Can you handle large villa parties on New Year\'s Eve?',
    a: 'Yes. We regularly cater villa parties from thirty to several hundred guests, scaling the kitchen, menu, and staffing to match the size and style of your event.',
  },
  {
    q: 'What menu styles do you offer for New Year\'s Eve?',
    a: 'We offer gala dinners, canapé parties, live-station BBQs, family-style feasts, and yacht countdown menus. Each is adapted to your venue, guest count, and celebration style.',
  },
  {
    q: 'Do you include bar staff and bartenders?',
    a: 'Yes. We provide bartenders, drinks stations, and mocktail or champagne service as part of your package, scaled to the number of guests and the format of the evening.',
  },
  {
    q: 'How far in advance should I book New Year\'s Eve catering?',
    a: 'We recommend booking four to eight weeks in advance for New Year\'s Eve. Yachts, large villas, and prime venues are especially busy, so earlier planning is advised.',
  },
]

const relatedServices = [
  {
    title: 'Party Catering',
    description: 'Full-service catering for celebrations of every size, from intimate dinners to large villa parties.',
    image: '/service-events.jpg',
    link: '/party-catering-dubai',
  },
  {
    title: 'Yacht Catering',
    description: 'Marine-friendly menus and service for yacht events, sunset cruises, and countdown celebrations.',
    image: '/service-luxury-dining.jpg',
    link: '/yachts',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Multi-course private dining, wine-style service, and refined menus for special occasions.',
    image: '/service-villa.jpg',
    link: '/luxury-dining-experiences',
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
  name: 'New Year\'s Eve Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'New Year\'s Eve Catering Dubai', item: 'https://mychef.ae/new-year-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function NewYearCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.nye-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.nye-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.nye-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.nye-fmt-card', {
      scrollTrigger: { trigger: '.nye-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.nye-uc-item', {
      scrollTrigger: { trigger: '.nye-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nye-inc-item', {
      scrollTrigger: { trigger: '.nye-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nye-step-item', {
      scrollTrigger: { trigger: '.nye-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nye-faq-item', {
      scrollTrigger: { trigger: '.nye-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nye-rel-card', {
      scrollTrigger: { trigger: '.nye-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.nye-cta', {
      scrollTrigger: { trigger: '.nye-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="New Year's Eve Catering Dubai | Gala, Yacht & Villa Parties"
        description="New Year's Eve catering in Dubai for gala dinners, yacht countdowns, and villa parties. Custom menus, full service, and midnight hospitality across Dubai."
        canonicalPath="/new-year-catering-dubai"
        ogImage="/service-luxury-dining.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-luxury-dining.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 nye-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/events" className="text-[#A3A3A3] hover:text-gold transition-colors">Events</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">New Year's Eve Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 nye-hero-h1">
            New Year's Eve Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 nye-hero-sub">
            Gala dinners, yacht countdowns, villa parties, and midnight toast service across Dubai. Custom menus and full-service hospitality for the biggest night of the year.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 nye-hero-cta">
              Plan My NYE Celebration
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 nye-hero-cta"
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
            Dubai's Biggest Night
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A New Year's Eve Worth Remembering
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            New Year's Eve in Dubai is one of the most anticipated nights of the year. From private villa parties with views of the fireworks to elegant yacht countdowns and corporate galas, the right catering sets the tone for the entire evening. At myCHEF Dubai, we create New Year's Eve catering experiences that match the energy and style of your celebration.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our chefs and event team design menus ranging from refined multi-course gala dinners to lively canapé and live-station parties, with full staffing, bar service, and a structured midnight toast. You share the vision; we deliver the details. Explore our New Year's Eve catering options below, or see how they connect to our wider <Link to="/events" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">event catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Target Audience ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Who Our NYE Catering Is For
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Hosts Who Want a Seamless Countdown
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our New Year's Eve catering is designed for Dubai hosts who want a memorable celebration without managing the kitchen. Villa owners throwing private countdown parties, families welcoming the new year together, companies hosting year-end galas, and yacht guests watching the fireworks all rely on our team. We also cater hotel suites, rooftop terraces, and corporate boardrooms. Whether your event is intimate or large, formal or festive, we adapt the menu, format, and service to match the occasion and the venue.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 4: Formats / Menu Options ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              New Year's Eve Menus & Formats
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering Styles for the Countdown
            </h2>
          </div>

          <div className="nye-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nyeFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="nye-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            What Our New Year's Eve Catering Includes
          </h2>

          <div className="nye-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="nye-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 6: How It Works ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              How It Works
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Inquiry to Midnight Toast
            </h2>
          </div>

          <div className="nye-steps grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="nye-step-item bg-charcoal p-8 opacity-0 translate-y-10">
                <span className="font-playfair text-[32px] text-gold/40 block mb-3">{step.step}</span>
                <h3 className="font-playfair text-h3 text-white mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: Why Choose myCHEF ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Why Choose myCHEF
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            End-to-End NYE Hospitality
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            New Year's Eve events demand precision, timing, and calm execution. At myCHEF Dubai, we plan every phase of the evening, from guest arrival through the midnight toast to final clear-down. Our teams are available for Dubai events in private villas, homes, offices, yachts, and event spaces, and we design each menu around your venue, guest profile, and celebration style.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            We do not use off-the-shelf packages. Instead, we build a custom proposal that covers food, drinks, staffing, and timing, with menus adapted to guest count, dietary needs, and event style. That means your New Year's Eve celebration feels personal, polished, and completely under control.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 8: Dubai Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Dubai New Year's Eve Celebrations
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Where We Cater the Countdown Across Dubai
            </h2>
          </div>

          <div className="nye-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="nye-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <Home size={28} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h3 text-white text-center mb-8">
            Explore Related Services & Locations
          </h2>
          <p className="font-inter text-body text-[#A3A3A3] text-center mb-8 leading-relaxed">
            New Year's Eve catering connects to our wider event, yacht, and luxury dining services. Browse these related pages to plan your full countdown experience across Dubai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/events" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Events</Link>
            <Link to="/catering-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Catering Dubai</Link>
            <Link to="/party-catering-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Party Catering</Link>
            <Link to="/yachts" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Yacht Catering</Link>
            <Link to="/luxury-dining-experiences" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Luxury Dining</Link>
            <Link to="/canape-catering-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Canapé Catering</Link>
            <Link to="/locations/palm-jumeirah" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Palm Jumeirah</Link>
            <Link to="/locations/dubai-marina" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Dubai Marina</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            New Year's Eve Catering Questions
          </h2>

          <div className="nye-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="nye-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 11: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="nye-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="nye-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 12: Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center nye-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan My New Year's Eve Catering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your venue, guest count, and vision. We will design a menu, service plan, and midnight countdown experience that lets you ring in the new year without a worry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Custom Quote
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
          <p className="font-inter text-sm text-[#A3A3A3] mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}

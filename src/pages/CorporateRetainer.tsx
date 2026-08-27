// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /corporate-retainer-dubai
//     primary:     "corporate catering contract dubai"
//     subkeywords: "corporate catering contract dubai cost" · "monthly corporate catering dubai" · "corporate catering supplier dubai" · "corporate catering companies in dubai" · "catering contract with cancellation policy" · "catering services company in dubai" · "corporate catering difc dubai" · "catering contract examples" · "corporate meal prep packages dubai" · "iftar dubai for corporate"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Building2,
  CalendarClock,
  Headphones,
  Phone,
  ArrowRight,
  Check,
  Briefcase,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import CorporateTrustStrip from '../components/CorporateTrustStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss a corporate retainer (via mychef.ae/corporate-retainer-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/corporate-retainer-dubai'

const tiers = [
  {
    name: 'Essential',
    price: 'From AED 3,500',
    period: '/month',
    description: 'For SMEs and teams that need reliable monthly catering without the overhead of a full-service contract.',
    icon: Building2,
    features: [
      'Monthly catering credit pool',
      'Priority 14-day booking window',
      'Dedicated WhatsApp account contact',
      'Consolidated monthly VAT invoice',
      'Standard menu consultation',
      'Backup chef cover for retainer events',
    ],
    cta: 'Discuss Essential',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: 'From AED 8,000',
    period: '/month',
    description: 'For companies with regular boardroom dining, client entertainment, and multi-site catering needs.',
    icon: Briefcase,
    features: [
      'Everything in Essential, plus:',
      'Larger monthly credit pool',
      'Priority 30-day booking window',
      'Named account manager',
      'Custom menu development',
      'Quarterly usage reporting',
      'On-call chef availability for urgent meetings',
      'Multi-location coordination across Dubai',
    ],
    cta: 'Discuss Enterprise',
    highlighted: true,
  },
]

const benefits = [
  {
    title: 'Predictable Monthly Spend',
    description: 'Set a monthly catering budget and draw down against it. No surprise invoices, no per-event haggling.',
  },
  {
    title: 'Priority Scheduling',
    description: 'Retainer clients reserve dates before they are released to the public — critical for board meetings and peak seasons.',
  },
  {
    title: 'Single Invoice',
    description: 'All events consolidated into one monthly VAT-compliant invoice, simplifying your finance team\'s workflow.',
  },
  {
    title: 'Account Management',
    description: 'A dedicated contact who knows your preferences, dietary policies, and recurring event calendar.',
  },
]

const faqs = [
  {
    q: 'What is a corporate retainer?',
    a: 'A corporate retainer is a monthly agreement that pre-allocates catering credit and gives your company priority booking, consolidated invoicing, and dedicated account support. It is designed for businesses that book private chef or catering services regularly.',
  },
  {
    q: 'How does the monthly credit work?',
    a: 'You choose a monthly tier. Each event you run is charged against that credit. Unused credit typically rolls over for one month, depending on your agreement. Any overage is billed at the end of the month.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'Retainers are offered on a 3-month minimum commitment. This gives us enough runway to learn your preferences and allocate chef capacity reliably.',
  },
  {
    q: 'Can the retainer cover multiple office locations?',
    a: 'Yes. Enterprise retainers include multi-location coordination across Dubai, subject to chef availability and logistics.',
  },
  {
    q: 'What types of events can we use the retainer for?',
    a: 'Boardroom lunches, client dinners, team celebrations, working breakfasts, product launches, and corporate events. The credit applies to chef fees, ingredients, and agreed staffing.',
  },
]

const relatedServices = [
  {
    title: 'Corporate Catering Dubai',
    description: 'Boardroom dining, client entertainment, and company events for Dubai businesses.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Business Lunch Catering',
    description: 'Professional lunches delivered to your office or prepared on-site.',
    image: '/images/office-catering-dubai-hero.webp',
    link: '/business-lunch-catering-dubai',
  },
  {
    title: 'Corporate Event Catering',
    description: 'End-to-end event catering for product launches, conferences, and galas.',
    image: '/images/corporate-catering-dubai-hero.webp',
    link: '/corporate-event-catering-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Corporate Retainer Catering',
      'myCHEF Dubai corporate retainer programmes: monthly catering credit, priority booking, consolidated invoicing, and dedicated account management for Dubai businesses.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Corporate Retainer Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a corporate retainer in Dubai. Date: __ Guests: __ Area: __"
export default function CorporateRetainer() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cr-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cr-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cr-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.cr-intro-text', {
      scrollTrigger: { trigger: '.cr-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.cr-tier-card', {
      scrollTrigger: { trigger: '.cr-tiers', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.cr-benefit-item', {
      scrollTrigger: { trigger: '.cr-benefits', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cr-faq-item', {
      scrollTrigger: { trigger: '.cr-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cr-rel-card', {
      scrollTrigger: { trigger: '.cr-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cr-cta', {
      scrollTrigger: { trigger: '.cr-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Corporate Catering Contract Dubai | myCHEF"
        description="Corporate Catering Contract Dubai — myCHEF Dubai corporate retainer programmes for Dubai businesses. Monthly catering credit, priority booking, consolidated…"
        canonicalPath={CANONICAL_PATH}
        ogImage="/service-corporate.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-corporate.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cr-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Corporate Retainer Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cr-hero-h1">
            Corporate Catering Contract Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cr-hero-sub">
            Monthly catering credit, priority scheduling, and a dedicated account manager — designed for Dubai companies that entertain clients and feed teams regularly. Tell us about your monthly rhythm and we will design a retainer plan within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 cr-hero-cta">Get My Corporate Retainer Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cr-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />
      <CorporateTrustStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">B2B CATERING</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering Without the Admin Overhead
          </h2>
          <div className="cr-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Our corporate retainer gives your Dubai company one reliable catering partner, predictable monthly spend, and priority access to vetted chefs. Tell us about your monthly rhythm — boardroom lunches, client dinners, team events — and we will design a written retainer proposal within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Corporate catering contract Dubai cost depends on the same three things: the guest count, the menu, and how much of the work happens in front of people. Corporate meal prep packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. For catering contract with cancellation policy, two to three weeks is comfortable, and December, Ramadan and New Year fill earlier than that. Iftar Dubai for corporate, corporate catering DIFC Dubai, monthly corporate catering Dubai, corporate catering supplier Dubai, catering services company in Dubai and corporate catering companies in Dubai are run to a fixed timing, with one itemised invoice and dietary requirements tracked per person.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              For a fixed monthly fee, your team gets a pre-allocated catering credit, priority booking, a dedicated contact, and one consolidated VAT invoice. The process is simple: brief us, confirm the date, and we handle chef selection, ingredients, service, and cleanup.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Learn more about <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering</Link>, <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">office catering</Link>, <Link to="/business-lunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">business lunches</Link>, or <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate events</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Tiers ═══════════════ */}
      <section className="cr-tiers bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">RETAINER PLANS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Choose Your Monthly Tier
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {tiers.map((tier, i) => {
              const Icon = tier.icon
              return (
                <div
                  key={i}
                  className={`cr-tier-card relative p-8 opacity-0 translate-y-10 ${tier.highlighted ? 'bg-black text-white border-2 border-gold' : 'bg-white text-black'}`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="text-gold" />
                    <h3 className="font-playfair text-h3">{tier.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`font-playfair text-3xl font-semibold ${tier.highlighted ? 'text-white' : 'text-black'}`}>{tier.price}</span>
                    <span className="font-inter text-body-sm text-gray-500">{tier.period}</span>
                  </div>
                  <p className="font-inter text-body-sm text-gray-500 mb-6 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-body-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-3 font-inter text-sm uppercase tracking-wider transition-colors ${tier.highlighted ? 'bg-gold text-black hover:bg-gold-light' : 'bg-black text-white hover:bg-charcoal'}`}
                  >
                    {tier.cta}
                  </a>
                </div>
              )
            })}
          </div>

          <p className="text-center font-inter text-body-sm text-gray-500 mt-8 max-w-[700px] mx-auto">
            Starting prices are indicative; final retainer terms, credit rollover, and event inclusions are agreed in a written proposal tailored to your company after a short briefing.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 4: Benefits ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHY A RETAINER</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Built for Procurement and Operations
            </h2>
          </div>

          <div className="cr-benefits grid md:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="cr-benefit-item bg-charcoal p-8 opacity-0 translate-y-8">
                <CalendarClock size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">B2B partnership approach:</strong> We also work with yacht operators, villa rental agencies, event planners, and concierge services as backend chef suppliers. See <Link to="/partner-with-us" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Partner With Us</Link> for channel partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Corporate Catering Contract Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Corporate Services
          </h3>

          <div className="cr-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cr-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 7: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center cr-cta opacity-0 translate-y-8">
          <Headphones size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Set Up Your Corporate Retainer
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your monthly catering rhythm and we will design a retainer plan that saves time, controls spend, and delivers consistent quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Get My Corporate Retainer Quote</Link>
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

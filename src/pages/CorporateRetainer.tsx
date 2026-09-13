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
  CalendarClock,
  Headphones,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import CorporateTrustStrip from '../components/CorporateTrustStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import CorporateInventory from '@/components/corporate/CorporateInventory'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss a corporate retainer (via mychef.ae/corporate-retainer-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/corporate-retainer-dubai'

const benefits = [
  {
    title: 'Predictable Monthly Spend',
    description: 'Set a monthly catering budget and draw down against it. No surprise invoices, no per-event haggling.',
  },
  {
    title: 'Priority Scheduling',
    description: 'Retainer clients reserve dates before they are released to the public: critical for board meetings and peak seasons.',
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
    a: 'If the agreement includes credit, bookings deduct from it at the advertised rate for that job. Rollover, expiry and overages are named in writing. They are not a default shop rule.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'Commitment length is set in the written agreement. Nothing on this page creates a three-month term by itself.',
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
        description="Corporate catering contract Dubai: a written account for regular bookings. Fees, credit and expiry are set in the agreement, not as a shop price."
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
            One written account for companies that book often. You keep a named contact, a monthly invoice if you want it, and the same starting prices as the office, lunch and event pages. Fees, credit and expiry are named in the agreement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 cr-hero-cta">Request a corporate catering quote</Link>
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
            A regular account, with prices you already know
          </h2>
          <div className="cr-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A corporate catering contract in Dubai is a written account for companies that book office lunches, staff meals or events often. You get one contact, clearer billing and priority on the dates you already use. Monthly fees, spendable credit, tax, expiry and overages are set only in the agreement you sign. They are not published as a shop price here.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Each booking still uses the published starting prices on the office, lunch and event pages. The account does not invent a cheaper per-person rate. An LPO or a consolidated invoice does not by itself create credit terms.
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
            <SectionLabel align="center">HOW AN ACCOUNT WORKS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Fees, credit and what still gets quoted
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            <div className="cr-tier-card bg-white p-8">
              <h3 className="font-playfair text-h3 text-black mb-4">Spendable credit</h3>
              <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4">
                If the agreement includes credit, each booking is deducted from that pool at the published package or per-person rate for that job. Unused credit, expiry and overages are named in the agreement.
              </p>
            </div>
            <div className="cr-tier-card bg-white p-8">
              <h3 className="font-playfair text-h3 text-black mb-4">Account fee</h3>
              <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4">
                A fee, if any, is separate from food. Tax sits on its own line. Commitment length is not a three-month shop promise. It is whatever the signed agreement says.
              </p>
            </div>
          </div>

          <p className="text-center font-inter text-body-sm text-gray-500 mt-8 max-w-[700px] mx-auto">
            Fees, credit, expiry and overages are named only in the written agreement. Nothing on this page is a published monthly fee.
          </p>
        </div>
      </section>

      <CorporateInventory path="/corporate-retainer-dubai" quoteHref="/inquiry" />

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
            <Link to={`/inquiry`} className="btn-primary">Request a corporate catering quote</Link>
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

// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /booking-protection-insurance
//     primary:     "catering cancellation policy dubai"
//     subkeywords: "catering deposit refund dubai" · "event catering insurance dubai" · "what happens if my chef cancels dubai" · "caterer liability insurance dubai" · "catering contract wedding cancellation policy" · "catering hall contract cancellation policy" · "catering booking cancellation policy" · "cancellation policy for catering events" · "catering cancellation policy sample" · "maggianos catering cancellation policy" · "mission bbq catering cancellation policy" · "moes catering cancellation policy"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  UserX,
  ShieldCheck,
  Banknote,
  ClipboardList,
  MessageCircleWarning,
  FileCheck,
  Phone,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'
import { CANCELLATION_FAQ_ANSWER, DEPOSIT_FAQ_ANSWER } from '@/content/bookingTerms'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to understand your booking protection and insurance policies (via mychef.ae/booking-protection-insurance)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/booking-protection-insurance'

const protections = [
  {
    icon: UserX,
    title: 'If the chef cannot attend',
    description: 'If a confirmed chef is ill or otherwise unavailable, we send a replacement from the same network and brief them from the booking. You should not have to re-explain the house at the door.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance on the people who cook',
    description: 'Culinary partners must carry appropriate food-handling and personal liability cover. We verify this before they work a booking. myCHEF remains your contracting party for refunds.',
  },
  {
    icon: Banknote,
    title: 'Deposit and payment',
    description: DEPOSIT_FAQ_ANSWER,
  },
  {
    icon: FileCheck,
    title: 'Cancellation and refund',
    description: CANCELLATION_FAQ_ANSWER,
  },
  {
    icon: MessageCircleWarning,
    title: 'If the night falls short',
    description: 'Write to info@mychef.ae or the WhatsApp used for the booking. Failure credits follow the booking terms: not delivered, severe, material, or a minor shortfall. This page does not invent a second schedule.',
  },
  {
    icon: ClipboardList,
    title: 'The written booking is the contract',
    description: 'Menu, guest count, price, deposit, balance due date, cancellation terms and any special arrangements are confirmed in writing. Payment of the deposit is acceptance.',
  },
]

const policyNotes = [
  {
    title: 'Backup is briefed from the record',
    description: 'Replacement chefs come from the same network and are briefed on the menu, headcount and dietary notes before they arrive.',
  },
  {
    title: 'Insurance is checked, not assumed',
    description: 'We confirm that the licensed people preparing your food carry food-handling and personal liability cover.',
  },
  {
    title: 'A 50% deposit confirms the date',
    description: 'The remaining 50% is due seven days before the first service. Bookings made inside seven days are payable in full on confirmation.',
  },
  {
    title: 'Cancellation follows the calendar',
    description: 'Fifteen or more days, 8 to 14 days, 48 hours to 7 days, under 48 hours. Days are calendar dates in Dubai time, UTC+4. There is no six-day full-refund rule.',
  },
]

const faqs = [
  {
    q: 'What happens if my chef cancels?',
    a: 'If the confirmed chef cannot attend, we send a replacement from the same network and brief them from the booking: menu, guest count and dietary notes. We tell you as soon as we know.',
  },
  {
    q: 'Are you insured?',
    a: 'The licensed culinary partners who prepare your food carry food-handling and personal liability cover, which we verify before they work a booking. myCHEF remains your contracting party for refunds.',
  },
  {
    q: 'What is your cancellation policy?',
    a: CANCELLATION_FAQ_ANSWER,
  },
  {
    q: 'How does the deposit work?',
    a: DEPOSIT_FAQ_ANSWER,
  },
  {
    q: 'How do you handle complaints?',
    a: 'Write to info@mychef.ae or the WhatsApp used for the booking. We measure the night against the written proposal. Credits follow the failure bands in the booking terms.',
  },
  {
    q: 'Will I receive written booking terms?',
    a: 'Yes. Every booking is confirmed in writing with menu details, guest count, pricing, deposit, balance due date, cancellation terms, and any special arrangements.',
  },
  {
    q: 'When is the remaining balance due?',
    a: DEPOSIT_FAQ_ANSWER,
  },
]

const relatedServices = [
  {
    title: 'How We Vet our chefs',
    description: 'See the identity, skill, and reference checks every chef passes before joining our network.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'Private Chef Dubai',
    description: 'A standing chef for the house, managed for you. One dinner is catering.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Venue Partners',
    description: 'Trusted villas, yachts, and venues where we regularly deliver seamless events.',
    image: '/service-villa.webp',
    link: '/venue-partners',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Booking Protection & Insurance',
      'myCHEF Dubai booking protection: backup chefs, public liability insurance, deposit structure, cancellation policy, and complaint handling for private chef and catering bookings.',
      'Insurance & Booking Policy Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Booking Protection & Insurance', path: CANONICAL_PATH },
    ]),
  ],
}

export default function BookingProtectionInsurance() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bpi-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bpi-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bpi-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bpi-intro-text', {
      scrollTrigger: { trigger: '.bpi-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.bpi-protection-card', {
      scrollTrigger: { trigger: '.bpi-protections', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bpi-note-item', {
      scrollTrigger: { trigger: '.bpi-notes', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bpi-faq-item', {
      scrollTrigger: { trigger: '.bpi-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bpi-rel-card', {
      scrollTrigger: { trigger: '.bpi-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bpi-cta', {
      scrollTrigger: { trigger: '.bpi-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Catering Cancellation Policy Dubai | myCHEF"
        hideSiteName
        description="Catering cancellation policy Dubai: 15 days or more, 8 to 14 days, 48 hours to 7 days, under 48 hours. Deposit 50%. Balance due 7 days before service."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/booking-protection-insurance-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/booking-protection-insurance-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bpi-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Booking Protection & Insurance</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bpi-hero-h1">
            Catering Cancellation Policy Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bpi-hero-sub">
            A 50% deposit confirms the booking. The balance is due seven days before. Cancellation follows 15 days, 8 to 14 days, 48 hours to 7 days, and under 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 bpi-hero-cta">Request a quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bpi-hero-cta"
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
          <SectionLabel align="center">THE WRITTEN RULES</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering cancellation policy Dubai is already in the terms
          </h2>
          <div className="bpi-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The catering cancellation policy Dubai lives in the <Link to="/private-client-booking-terms" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private client booking terms</Link> and the <Link to="/corporate-booking-terms" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate booking terms</Link>. This page explains them in plain English. It does not replace them.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Cancel in writing. Fifteen or more days before: the deposit is refunded less committed costs; we may retain 5% of the booking value for administration. Eight to 14 days: half the deposit is refunded, less committed costs. Forty-eight hours to seven days: the deposit is retained in full, together with committed costs. Less than 48 hours: up to 100% of the booking value may be payable. Days are calendar dates in Dubai time, UTC+4.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Also read <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how chefs are checked</Link> and <Link to="/quality-guarantee-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">what happens if the service falls short</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Protections ═══════════════ */}
      <section className="bpi-protections bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT IS COVERED</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What the booking actually protects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {protections.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bpi-protection-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Policy Notes ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">POLICY PRINCIPLES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              What to Expect From Our Terms
            </h2>
          </div>

          <div className="bpi-notes grid md:grid-cols-2 gap-6">
            {policyNotes.map((item, i) => (
              <div key={i} className="bpi-note-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">Important:</strong> Exact deposit percentages, cancellation windows, and refund terms are confirmed in your written proposal before any payment is taken. The summary on this page is intended to explain our standard approach, not to override the terms agreed for your specific booking.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Catering Cancellation Policy Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="bpi-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bpi-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center bpi-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book Your Protected Event
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Get a clear written proposal with deposit, cancellation, and insurance details for your private chef or catering event in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Request a quote</Link>
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

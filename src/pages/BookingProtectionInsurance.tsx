import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UserX,
  ShieldCheck,
  Banknote,
  ClipboardList,
  MessageCircleWarning,
  FileCheck,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to understand your booking protection and insurance policies (via mychef.ae/booking-protection-insurance)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/booking-protection-insurance'
const CAMPAIGN = 'booking-protection-insurance'

const protections = [
  {
    icon: UserX,
    title: 'Backup Chef Policy',
    description: 'If your confirmed chef becomes unavailable due to illness, emergency, or another unavoidable issue, we activate our backup chef network immediately. Our goal is always to supply a qualified replacement who matches your event cuisine and scale, with as much notice as possible.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Requirements',
    description: 'myCHEF Dubai operates with public liability coverage and requires chefs to maintain appropriate food-handling and personal liability arrangements. This protects against food-related incidents and accidents that may occur during service at your venue or residence.',
  },
  {
    icon: Banknote,
    title: 'Deposit & Payment Structure',
    description: 'Most bookings require a 50% deposit to confirm the date, ingredients, and staffing. The remaining balance is typically due before or on the day of the event. Exact payment terms are stated in your proposal and invoice.',
  },
  {
    icon: FileCheck,
    title: 'Cancellation & Refund Policy',
    description: 'Cancellations made more than 48 hours before an event are generally eligible for a full refund. Cancellations within 48 hours may incur a fee to cover ingredients and staffing already committed. Last-minute cancellations may forfeit the deposit.',
  },
  {
    icon: MessageCircleWarning,
    title: 'Complaint Handling',
    description: 'If something does not meet expectations, we want to know. Complaints are escalated to an event manager, investigated promptly, and resolved fairly — whether through partial refund, service credit, or a detailed explanation of what happened.',
  },
  {
    icon: ClipboardList,
    title: 'Clear Written Terms',
    description: 'Every client receives a written proposal or booking confirmation outlining the menu, guest count, price, deposit, balance due date, cancellation terms, and any special arrangements. Clarity protects both sides.',
  },
]

const policyNotes = [
  {
    title: 'Backup chefs are pre-qualified',
    description: 'Replacement chefs are drawn from the same vetted network and briefed on your menu before arrival.',
  },
  {
    title: 'Insurance is active, not aspirational',
    description: 'We maintain current public liability cover and confirm that chefs carry appropriate food-handling and personal liability protection.',
  },
  {
    title: 'Deposits secure resources',
    description: 'Your deposit allows us to reserve staff, block the chef\'s calendar, and pre-order premium ingredients for your event.',
  },
  {
    title: 'Cancellations are handled fairly',
    description: 'We do not promise "no fees ever." Instead, we apply a reasonable policy that respects both client flexibility and the costs we commit on your behalf.',
  },
]

const faqs = [
  {
    q: 'What happens if my chef cancels?',
    a: 'If your confirmed chef becomes unavailable, we activate a qualified backup chef from our vetted network. The replacement is briefed on your menu, guest count, and dietary requirements, and we notify you as early as possible.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. myCHEF Dubai holds public liability insurance and requires chefs to maintain appropriate food-handling and personal liability coverage. This protects against incidents during preparation and service.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations more than 48 hours before the event are generally eligible for a full refund. Cancellations within 48 hours may incur a fee to cover committed ingredients and staffing. Last-minute cancellations may forfeit the deposit.',
  },
  {
    q: 'How does the deposit work?',
    a: 'Most bookings require a 50% deposit to confirm the date and reserve resources. The balance is due before or on the day of the event. Exact terms are included in your written proposal.',
  },
  {
    q: 'How do you handle complaints?',
    a: 'Complaints are escalated to an event manager, investigated promptly, and resolved fairly. Depending on the situation, this may include a partial refund, service credit, or a clear explanation of the resolution.',
  },
  {
    q: 'Will I receive written booking terms?',
    a: 'Yes. Every booking is confirmed in writing with menu details, guest count, pricing, deposit, balance due date, cancellation terms, and any special arrangements.',
  },
]

const relatedServices = [
  {
    title: 'How We Vet Our Chefs',
    description: 'See the identity, skill, and reference checks every chef passes before joining our network.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke private chef dinners and experiences in your home, villa, or yacht.',
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
        title="Booking Protection & Insurance | myCHEF Dubai"
        description="Learn how myCHEF Dubai protects your booking with backup chefs, liability insurance, fair cancellation terms, deposit structure, and complaint handling."
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
            Booking Protection & Insurance
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bpi-hero-sub">
            Clear policies, backup chef cover, liability insurance, and fair cancellation terms — so you can book your private chef or catering event with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 bpi-hero-cta">Request a Proposal</Link>
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

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            BOOK WITH CONFIDENCE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Protection Built Into Every Booking
          </h2>
          <div className="bpi-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Booking a private chef or luxury catering service should feel exciting, not uncertain. At myCHEF Dubai, we have built clear protection policies around the questions clients ask most: What happens if the chef cannot make it? Are you insured? What if I need to cancel? How do deposits work? And if something goes wrong, how do you fix it?
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The answers below are honest and practical. We do not promise that problems never happen — no service can. What we promise is that we have thought about them in advance, documented our terms clearly, and trained our team to respond quickly and fairly when they do. That is what booking protection means to us.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              For additional reassurance, read about <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how we vet our chefs</Link>, explore our <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef services</Link>, or view our <Link to="/venue-partners" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">venue partners</Link> for trusted locations across Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Protections ═══════════════ */}
      <section className="bpi-protections bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS COVERED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              How We Protect Your Event
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              POLICY PRINCIPLES
            </span>
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
            Booking Protection Questions
          </h2>

          <div className="bpi-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bpi-faq-item border border-gray-200 opacity-0 translate-y-5">
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
                    Explore <ArrowRight size={14} />
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
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Proposal</Link>
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

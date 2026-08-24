import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ShieldCheck,
  RefreshCcw,
  MessageCircleWarning,
  ClipboardCheck,
  Phone,
  ArrowRight,
  Check,
  ChefHat,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn about your quality guarantee (via mychef.ae/quality-guarantee-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/quality-guarantee-dubai'
const CAMPAIGN = 'quality-guarantee'

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Vetted Chef Network',
    description: 'Every our chef passes identity, reference, and in-person skill checks before they can accept bookings. We verify food safety awareness and professional communication, so the person arriving at your door is qualified.',
  },
  {
    icon: RefreshCcw,
    title: 'Backup Chef Cover',
    description: 'If your confirmed chef cannot attend due to illness or emergency, we activate a qualified replacement and brief them on your menu, dietary needs, and event details. You are not left searching for a solution at the last minute.',
  },
  {
    icon: MessageCircleWarning,
    title: 'We Will Make It Right',
    description: 'If the experience does not match what was agreed, tell us within 24 hours of service. We investigate fairly and offer a practical resolution — whether that is a service credit, a partial refund, or a follow-up arrangement.',
  },
  {
    icon: ClipboardCheck,
    title: 'Written Briefing Every Time',
    description: 'Every booking is confirmed in writing with menu, guest count, dietary requirements, arrival time, inclusions, and pricing. This reduces misunderstanding and gives both sides a clear reference point.',
  },
]

const promisePoints = [
  {
    title: 'Honest resolution, not excuses',
    description: 'We do not deflect. If something falls short, we review what happened, identify the gap, and propose a fair fix.',
  },
  {
    title: 'Fast response when it matters',
    description: 'During your event you have direct WhatsApp access to our operations team. Issues raised during service are escalated immediately.',
  },
  {
    title: 'Clear terms before you pay',
    description: 'Your written proposal states exactly what is included, what is not, and how any concern will be handled. No hidden clauses.',
  },
  {
    title: 'Continuous chef feedback loop',
    description: 'Client feedback is shared with chefs constructively. Chefs with repeated concerns are retrained or removed from the network.',
  },
]

const faqs = [
  {
    q: 'What does "we\'ll make it right" actually mean?',
    a: 'It means we take responsibility for resolving issues that are within our control. Depending on the situation, this may include a partial refund, a service credit, a replacement chef, or a complimentary follow-up service. We do not promise unlimited compensation, but we do promise a fair, fast response.',
  },
  {
    q: 'What happens if the chef does not show up?',
    a: 'We maintain backup chef cover. If your confirmed chef cannot attend, we source a replacement from our professional team, brief them on your event, and notify you as early as possible. In the rare case no suitable replacement is available, we refund your payment.',
  },
  {
    q: 'How do I report a quality issue?',
    a: 'You can message us on WhatsApp, call, or email info@mychef.id. We ask for details and, where possible, photos. Most concerns are acknowledged within hours and resolved within one to two business days.',
  },
  {
    q: 'Is there a guarantee that I will love the food?',
    a: 'Taste is subjective, so we cannot guarantee personal preference. We do guarantee that the menu, ingredients, and service will match the written proposal, that the chef will be qualified, and that any genuine shortfall will be addressed fairly.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Refunds are considered on a case-by-case basis for service failures attributable to us or the chef. Cancellation refunds follow the terms in your written proposal, which depend on how far in advance you cancel.',
  },
]

const relatedServices = [
  {
    title: 'Booking Protection',
    description: 'Backup chefs, liability cover, deposits, cancellation terms, and complaint handling.',
    image: '/images/booking-protection-insurance-dubai-hero.webp',
    link: '/booking-protection-insurance',
  },
  {
    title: 'How We Vet the Chefs in Our Network',
    description: 'Identity, reference, and skill checks every chef passes before joining.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke private dining and event experiences in your home, villa, or yacht.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Quality Guarantee',
      'myCHEF Dubai quality guarantee: vetted chefs, backup cover, written briefings, and fair resolution if your private chef or catering experience falls short.',
      'Customer Service Policy',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Quality Guarantee', path: CANONICAL_PATH },
    ]),
  ],
}

export default function QualityGuarantee() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.qg-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.qg-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.qg-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.qg-intro-text', {
      scrollTrigger: { trigger: '.qg-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.qg-guarantee-card', {
      scrollTrigger: { trigger: '.qg-guarantees', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.qg-promise-item', {
      scrollTrigger: { trigger: '.qg-promises', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.qg-faq-item', {
      scrollTrigger: { trigger: '.qg-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.qg-rel-card', {
      scrollTrigger: { trigger: '.qg-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.qg-cta', {
      scrollTrigger: { trigger: '.qg-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Quality Guarantee Dubai | Satisfaction"
        description="myCHEF Dubai quality guarantee: vetted chefs, backup cover, written briefings, and fair resolution if your private chef or catering experience falls short."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/how-we-vet-our-chefs-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/how-we-vet-our-chefs-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 qg-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Quality Guarantee</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 qg-hero-h1">
            Not Satisfied? We'll Make It Right
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 qg-hero-sub">
            Every myCHEF Dubai booking is backed by vetted chefs, backup cover, clear written terms, and a fair resolution promise — because trust is the real product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 qg-hero-cta">Request a Guaranteed Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 qg-hero-cta"
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
          <SectionLabel align="center">OUR QUALITY PROMISE</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Guarantee Built on Operational Rigor
          </h2>
          <div className="qg-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Tell us about your event, dietary needs, and preferred style, and we will bring you a vetted private chef in Dubai within 24 hours. Every myCHEF Dubai booking is backed by identity-checked chefs, backup cover, written terms, and a fair resolution promise — because trust is the real product.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Our quality guarantee is not a marketing slogan. It is a set of operational promises: every chef is vetted, every booking is confirmed in writing, backup cover is available, and if something genuinely falls short, we investigate and make it right. We do not claim perfection. We claim accountability.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Read more about <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how we vet our chefs</Link>, our <Link to="/booking-protection-insurance" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">booking protection and insurance</Link>, or explore <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef services</Link> in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Guarantees ═══════════════ */}
      <section className="qg-guarantees bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT YOU CAN COUNT ON</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Four Pillars of Our Guarantee
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="qg-guarantee-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                    {item.description}
                    {i === 0 && (
                      <> Read more about <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how we vet partner chefs</Link>.</>
                    )}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Promise Points ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">HOW WE HANDLE ISSUES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              What "Making It Right" Looks Like
            </h2>
          </div>

          <div className="qg-promises grid md:grid-cols-2 gap-6">
            {promisePoints.map((item, i) => (
              <div key={i} className="qg-promise-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">Important:</strong> Our guarantee covers service failures attributable to MyCHEF Dubai or our chef. It does not cover changes requested by the client after confirmation, external venue issues, or personal taste preferences. Exact terms are confirmed in your written proposal.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Quality Guarantee Questions
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

          <div className="qg-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="qg-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center qg-cta opacity-0 translate-y-8">
          <ChefHat size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book With Confidence
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Get a clear written proposal, vetted chef matching, and the backing of our quality guarantee for your next private dining or catering event in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Guaranteed Quote</Link>
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

import ServiceImage from '@/components/private-chef/ServiceImage'
import PageHero from '@/components/PageHero'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /quality-guarantee-dubai
//     primary:     "catering quality guarantee dubai"
//     subkeywords: "what if catering goes wrong dubai" · "catering complaint policy dubai" · "how to complain about a caterer dubai" · "gulf catering company uae" · "catering vs delivery"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
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

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'The chef is checked before they arrive',
    description: 'Identity, right to work, a cooking assessment and references. Food-safety awareness is required. PIC is preferred. We do not claim every chef holds a named certificate.',
  },
  {
    icon: RefreshCcw,
    title: 'If the chef cannot attend',
    description: 'If a confirmed chef is ill or otherwise unavailable, we send a replacement from the same network and brief them from the booking, not from a conversation you have to repeat at the door.',
  },
  {
    icon: MessageCircleWarning,
    title: 'If the service falls short',
    description: 'Tell us. The written booking terms set the credits: not delivered is a full refund; severe failure 50% to 75%; material failure 10% to 25%; a minor shortfall we put right. We do not invent a second refund rule on this page.',
  },
  {
    icon: ClipboardCheck,
    title: 'A written booking, not a handshake',
    description: 'Menu, guest count, dietary notes, arrival time, inclusions and price are confirmed in writing before you pay. That is the contract.',
  },
]

const promisePoints = [
  {
    title: 'The terms are already written',
    description: 'Failure credits sit in the private client and corporate booking terms. This page does not invent a second schedule.',
  },
  {
    title: 'During service you can reach us',
    description: 'WhatsApp used for the booking is the line. Issues raised during service are escalated, not parked until Monday.',
  },
  {
    title: 'The proposal names the job',
    description: 'What is included, what is not, and the price. Nothing is added afterwards that you did not approve.',
  },
  {
    title: 'The house scores the work',
    description: 'Food comments go back to the house as a menu change. Comments about the person go to the person, in private. Safety is a stop.',
  },
]

const faqs = [
  {
    q: 'What does the catering quality guarantee actually cover?',
    a: 'The written booking. If we do not deliver, a full refund. Severe failure: a credit of 50% to 75%. Material failure: 10% to 25%. A minor shortfall we put right, with a goodwill gesture. Full wording is in the booking terms.',
  },
  {
    q: 'What happens if the chef does not show up?',
    a: 'If the confirmed chef cannot attend, we send a replacement and brief them from the booking. If the service is not delivered, the amounts paid for it are refunded.',
  },
  {
    q: 'How do I report a quality issue?',
    a: 'Write to info@mychef.ae or the WhatsApp used for the booking. Name the date and what happened. We investigate against the written proposal.',
  },
  {
    q: 'Do you guarantee that I will like the food?',
    a: 'No. Taste is personal. We do guarantee that the menu, ingredients and service match the written proposal, and that a genuine shortfall is handled under the booking terms.',
  },
  {
    q: 'How do cancellation refunds work?',
    a: 'Cancel in writing. Fifteen or more days before: the deposit is refunded less committed costs; we may retain 5% for administration. Eight to 14 days: half the deposit is refunded, less committed costs. Forty-eight hours to seven days: the deposit is retained in full, together with committed costs. Less than 48 hours: up to 100% of the booking value may be payable. A 50% deposit confirms the booking. The balance is due seven days before the first service.',
  },
  {
    q: 'What if catering goes wrong on the night?',
    a: 'Tell us during service if you can, or in writing afterwards. We measure the night against the written proposal, not against a feeling. Credits follow the failure bands in the booking terms.',
  },
]

const relatedServices = [
  {
    title: 'Booking Protection',
    description: 'Backup chefs, liability cover, deposits, cancellation terms, and complaint handling.',
    image: '/images/private-chef-2026/craft-1200.webp',
    link: '/booking-protection-insurance',
  },
  {
    title: 'How We Vet the Chefs in Our Network',
    description: 'Identity, reference, and skill checks every chef passes before joining.',
    image: '/images/private-chef-2026/craft-1200.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'Private Chef Dubai',
    description: 'A standing chef for the house, managed for you. One dinner is catering.',
    image: '/images/private-chef-2026/household-1200.webp',
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
        title="Catering Quality Guarantee Dubai | myCHEF"
        description="Catering quality guarantee Dubai: the chef is checked, the booking is written, backup is briefed from the record, and credits follow the booking terms."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/private-chef-2026/craft-1200.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero eyebrow="MYCHEF · DUBAI" title="Catering Quality Guarantee Dubai. Clear standards and a contact who listens." subtitle="Understand the service commitments, the feedback process and how to raise a concern with myCHEF before or after your occasion." cta={{label:"Plan with myCHEF",href:"/inquiry?from=QualityGuarantee"}} secondaryCta={{label:"Explore experiences",href:"/luxury-dining-experiences"}}/>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">WHAT THE BOOKING STANDS ON</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering quality guarantee Dubai is the written booking
          </h2>
          <div className="qg-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              We assess the service against the proposal you approved, including the menu, guest count, staffing, arrival time and clear-down. If something falls short, tell your contact promptly so the issue can be reviewed and addressed under the booking terms.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              We do not promise that every guest will love every dish. We do promise that the service matches what was written, that the chef was checked before they entered, and that a genuine shortfall is handled under the booking terms. Cancellation is a different page of the same document: 15 days or more, 8 to 14 days, 48 hours to 7 days, and under 48 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Read <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how chefs are checked</Link>, the <Link to="/booking-protection-insurance" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cancellation policy</Link>, or start with <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link> if the job is a household, not a night.
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
              What you can hold us to
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
            Catering Quality Guarantee Dubai: the questions we get before a booking
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
                  <ServiceImage
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
        <div className="container-custom text-center qg-cta opacity-0 translate-y-8">
          <ChefHat size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the brief. Get a written proposal.
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, headcount, venue, and how you want people to eat. The quote is itemised. The terms sit on the booking.
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

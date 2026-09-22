import ServiceImage from '@/components/private-chef/ServiceImage'
import PageHero from '@/components/PageHero'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /proposal-dinner-dubai
//     primary:     "proposal dinner dubai"
//     subkeywords: "proposal dinner dubai price" · "best proposal dinner dubai" · "proposal dinner packages dubai" · "proposal dinner menu dubai" · "halal proposal dinner dubai" · "marriage proposal dinner dubai" · "private chef proposal dinner dubai" · "yacht proposal dinner dubai" · "romantic proposal dinner dubai" · "dinner offers in dubai" · "dinner set price in dubai" · "dinner for couples in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Heart,
  Camera,
  Flower2,
  Clock,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a proposal dinner (via mychef.ae/proposal-dinner-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/proposal-dinner-dubai'

const inclusions = [
  {
    icon: Heart,
    title: 'Menu written for the table',
    description: 'A menu built around your partner\'s favourite cuisines, dietary preferences, and the story of your relationship. Personalised printed menus available.',
  },
  {
    icon: Camera,
    title: 'Photography Coordination',
    description: 'Optional professional photographer positioned discreetly to capture the moment, or guidance on the best angles if you prefer a private setup.',
  },
  {
    icon: Flower2,
    title: 'Floral & Tablescaping',
    description: 'We coordinate with florists and stylists on candles, flowers, linens and lighting. We do not run the full event as a planner.',
  },
  {
    icon: Clock,
    title: 'Precision Timing',
    description: 'The proposal moment is choreographed down to the course. We align service pacing with your signal so everything happens at the right time.',
  },
]

const packages = [
  {
    name: 'Intimate Proposal',
    price: 'From AED 3,000',
    description: 'For two people in a private apartment or villa setting.',
    features: [
      'Private chef for 2 guests',
      '4-course personalised menu',
      'Table styling with candles and flowers',
      'Champagne or non-alcoholic welcome drink',
      'Timing coordination for the proposal',
    ],
  },
  {
    name: 'Villa Celebration',
    price: 'From AED 6,000',
    description: 'For proposals that include family or close friends waiting to celebrate afterwards.',
    features: [
      'Private chef and server for up to 12 guests',
      '5-course menu or canapé reception',
      'Extended floral and table styling',
      'Photographer coordination',
      'Post-proposal celebration menu',
    ],
    highlighted: true,
  },
  {
    name: 'Custom brief',
    price: 'On request',
    description: 'Yacht, desert, rooftop or destination proposals. You book the venue; we cook and coordinate the dinner.',
    features: [
      'Catering at a yacht, desert table or rooftop you have booked',
      'Multi-course tasting menu',
      'Florist, photographer and musician coordination',
      'Private dining setup at the address you have',
      'A named coordinator for the dinner',
    ],
  },
]

const faqs = [
  {
    q: 'How far in advance should I book a proposal dinner?',
    a: 'Ideally 2–4 weeks in advance. This gives us time to design the menu, coordinate flowers and photography, and secure the right chef. Last-minute requests are possible but limit customisation.',
  },
  {
    q: 'Can the chef hide the ring or work with my plan?',
    a: 'Yes. We coordinate the exact moment with you: the ring with dessert, between courses, or during a toast. Your coordinator confirms the plan in advance.',
  },
  {
    q: 'Do you arrange photographers and florists?',
    a: 'We coordinate with trusted partners. You are welcome to use your own vendors, and we will align timings and logistics with them.',
  },
  {
    q: 'What if my partner has dietary requirements?',
    a: 'We design the menu around them. Allergies, intolerances, halal, kosher-style, vegan and other requirements go into the first draft.',
  },
  {
    q: 'Can you do proposals outside a home or villa?',
    a: 'Yes. We can cook a proposal dinner on a yacht you have chartered, at a desert site you have booked, on a rooftop or at a venue that allows outside catering. Extra planning and permits can apply, so book as early as possible.',
  },
  {
    q: 'Is marriage proposal dinner Dubai the same as proposal dinner Dubai?',
    a: 'We design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.',
  },
]

const relatedServices = [
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate private dining for two, perfect for anniversaries and date nights.',
    image: '/images/private-chef-2026/romantic-1200.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Villas & Residences',
    description: 'Private dining and celebrations in Dubai villas.',
    image: '/images/private-chef-2026/villa-evening-1200.webp',
    link: '/villas-private-residences',
  },
  {
    title: 'Yacht Catering Dubai',
    description: 'Proposal dinners and celebrations on board a private yacht.',
    image: '/images/private-chef-2026/romantic-1200.webp',
    link: '/yachts',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Proposal Dinner',
      'Proposal dinner Dubai: private chef, menu design, floral styling, photography coordination and timing for the question, then we clear down.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Proposal Dinner Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a proposal dinner in Dubai. Date: __ Guests: __ Area: __"
export default function ProposalDinner() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return




    gsap.to('.pd-intro-text', {
      scrollTrigger: { trigger: '.pd-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.pd-inclusion-card', {
      scrollTrigger: { trigger: '.pd-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pd-package-card', {
      scrollTrigger: { trigger: '.pd-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.pd-faq-item', {
      scrollTrigger: { trigger: '.pd-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pd-rel-card', {
      scrollTrigger: { trigger: '.pd-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pd-cta', {
      scrollTrigger: { trigger: '.pd-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Proposal Dinner Dubai | Private Chef from AED 1,200 | myCHEF"
        description="Proposal dinner Dubai with a private chef, a menu written for two, floral and photography coordination, and timing for the question. Then we clear down."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/private-chef-2026/romantic-1200.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero eyebrow="MYCHEF · DUBAI" title="Proposal Dinner Dubai. A moment that feels like you." subtitle="An intimate menu and carefully considered service for a meaningful occasion. Share your idea, venue and timing so we can agree the dining details." cta={{label:"Plan with myCHEF",href:"/inquiry?from=ProposalDinner"}} secondaryCta={{label:"Explore experiences",href:"/luxury-dining-experiences"}}/>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE BIG MOMENT</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Proposal dinner Dubai: you ask, we run the table
          </h2>
          <div className="pd-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Tell us about your partner, your chosen venue and how you imagine the evening unfolding. We coordinate the chef, menu and agreed details around your proposal. Intimate Proposal starts from AED 3,000 and Villa Celebration from AED 6,000; your written quote confirms the scope and total.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Your quote reflects the menu, guest count, service style and venue requirements. We set out the food, staffing and other inclusions in writing, with dietary needs considered from the first menu draft.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              From the first course to the moment you ask, we manage pacing, styling and coordination with photographers and florists you have booked, or with partners we introduce. You arrive as a guest. We do not replace a full event planner.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Browse <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinners</Link>, <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury dining experiences</Link>, <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef service</Link>, or <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa dining</Link> for more private celebration ideas.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="pd-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT IS INCLUDED</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What we handle besides the food
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="pd-inclusion-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Packages ═══════════════ */}
      <section className="pd-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">PROPOSAL PACKAGES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Setting
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`pd-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-1">{pkg.price}</p>
                <p className="font-inter text-xs text-gold/80 mb-4">Final quote tailored to your event.</p>
                <p className="font-inter text-body-sm text-gray-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/inquiry`}
                  className="block text-center w-full py-3 font-inter text-sm uppercase tracking-wider bg-gold text-black hover:bg-gold-light transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            The questions we get before a proposal dinner booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services
          </h3>

          <div className="pd-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="pd-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center pd-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date and how you want to ask
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us the venue, your partner's tastes and the timing for the question. We will send a menu and a service plan for the dinner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Plan Proposal Dinner</Link>
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

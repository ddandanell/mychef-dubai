import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a proposal dinner (via mychef.ae/proposal-dinner-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/proposal-dinner-dubai'
const CAMPAIGN = 'proposal-dinner'

const inclusions = [
  {
    icon: Heart,
    title: 'Bespoke Menu Design',
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
    description: 'We coordinate with trusted florists and stylists to create the right atmosphere — candles, flowers, linens, and ambient lighting.',
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
    name: 'Fully Bespoke',
    price: 'On request',
    description: 'Yacht, desert, rooftop, or destination proposals with full production support.',
    features: [
      'Custom venue and logistics',
      'Multi-course tasting menu',
      'Florist, photographer, and musician coordination',
      'Private dining setup in unique locations',
      'Dedicated event manager',
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
    a: 'Yes. We coordinate the exact moment with you — whether the ring comes out with dessert, between courses, or during a surprise toast. Your event manager will confirm every detail in advance.',
  },
  {
    q: 'Do you arrange photographers and florists?',
    a: 'We coordinate with trusted partners. You are welcome to use your own vendors, and we will align timings and logistics with them.',
  },
  {
    q: 'What if my partner has dietary requirements?',
    a: 'We design the menu around them. Allergies, intolerances, halal, kosher-style, vegan, and other requirements are accommodated without compromising the experience.',
  },
  {
    q: 'Can you do proposals outside a home or villa?',
    a: 'Yes. We can arrange private dining in yachts, desert settings, rooftops, and select venues. These require additional planning and permits, so book as early as possible.',
  },
]

const relatedServices = [
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate private dining for two, perfect for anniversaries and date nights.',
    image: '/images/romantic-dinner-dubai-hero.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Villas & Residences',
    description: 'Private dining and celebrations in Dubai luxury villas.',
    image: '/service-villa.webp',
    link: '/villas-private-residences',
  },
  {
    title: 'Yacht Catering Dubai',
    description: 'Proposal dinners and celebrations on board a private yacht.',
    image: '/service-yacht.webp',
    link: '/yachts',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Proposal Dinner',
      'Proposal dinner planning in Dubai: private chef, menu design, floral styling, photography coordination, and precise timing for an unforgettable proposal.',
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

export default function ProposalDinner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.pd-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.pd-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.pd-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

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
        title="Proposal Dinner Dubai | Private Chef"
        description="Plan an unforgettable proposal dinner in Dubai with a private chef, personalised menu, floral styling, photography coordination, and perfect timing."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/romantic-dinner-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/romantic-dinner-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 pd-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Proposal Dinner Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 pd-hero-h1">
            Proposal Dinner Planning in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pd-hero-sub">
            Private chef, personalised menu, flowers, candles, and perfect timing — so you can focus on the question while your chef handles everything else.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 pd-hero-cta">Plan My Proposal Dinner</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 pd-hero-cta"
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
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            THE BIG MOMENT
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Every Detail, Choreographed
          </h2>
          <div className="pd-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A proposal dinner is not just a meal — it is a story told through food, setting, and timing. Tell us about your partner, your vision, and your venue, and we will reply within 15 minutes during business hours to start shaping your perfect "yes". We then match you with a vetted private chef and event manager for your date.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              From the first course to the moment you get down on one knee, we manage the pacing, the styling, and the coordination with photographers and florists. You arrive as a guest; we make sure the evening unfolds exactly as you imagined.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Browse <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinners</Link>, <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa dining</Link>, or <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht catering</Link> for more private celebration ideas.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="pd-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS INCLUDED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              More Than Just Dinner
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PROPOSAL PACKAGES
            </span>
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
                  to={`/inquiry?utm_source=mychef.ae&utm_medium=package_card&utm_campaign=${CAMPAIGN}`}
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
            Proposal Dinner Questions
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
        <div className="container-custom text-center pd-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan the Perfect "Yes"
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your story, your partner's tastes, and your dream setting. We will design a proposal dinner worthy of the moment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Plan My Proposal Dinner</Link>
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

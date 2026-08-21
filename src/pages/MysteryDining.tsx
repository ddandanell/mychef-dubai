import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ClipboardList,
  Sparkles,
  Leaf,
  ChefHat,
  Phone,
  ArrowRight,
  Check,
  Sparkles as SparklesIcon,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a mystery dining experience (via mychef.ae/mystery-dining-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/mystery-dining-dubai'
const CAMPAIGN = 'mystery-dining'

const inclusions = [
  {
    icon: ClipboardList,
    title: 'Preference Questionnaire',
    description: 'We capture your favourite cuisines, textures, spice tolerance, and any dislikes before the chef begins designing your surprise menu.',
  },
  {
    icon: Sparkles,
    title: 'Surprise Menu Design',
    description: 'Your chef crafts a multi-course menu around your preferences, keeping each course a secret until it is served at the table.',
  },
  {
    icon: Leaf,
    title: 'Dietary Accommodation',
    description: 'Allergies, intolerances, halal, vegan, vegetarian, and religious requirements are built into the menu without spoiling the surprise.',
  },
  {
    icon: ChefHat,
    title: 'Full Service',
    description: 'Chef, ingredients, cooking, plating, table service, and kitchen clean-up are all handled so you can simply enjoy the evening.',
  },
]

const packages = [
  {
    name: 'Mystery Night for Two',
    price: 'From AED 2,200',
    description: 'An intimate surprise dinner for two in your home, apartment, or villa.',
    features: [
      'Private chef for 2 guests',
      '4-course surprise menu',
      'Preference questionnaire',
      'Dietary requirement accommodation',
      'Table service and clean-up',
    ],
  },
  {
    name: 'Mystery Dinner Party',
    price: 'From AED 5,500',
    description: 'A shared surprise menu for a small group who love trying something new together.',
    features: [
      'Private chef for up to 10 guests',
      '5-course shared surprise menu',
      'Menu reveal ceremony',
      'Dietary accommodation for all guests',
      'Server and kitchen clean-up',
    ],
    highlighted: true,
  },
  {
    name: 'Mystery Tasting Menu',
    price: 'On request',
    description: 'A multi-course tasting journey with paired non-alcoholic beverages and narration.',
    features: [
      '6–8 course surprise tasting menu',
      'Chef narration per course',
      'Mocktail or beverage pairing',
      'Printed menu reveal at the end',
      'Fully bespoke setting and pacing',
    ],
  },
]

const faqs = [
  {
    q: 'How does mystery dining work?',
    a: 'You share your preferences and dietary requirements through a short questionnaire. Your chef then designs a surprise menu around those inputs. The courses are revealed only as they are served, creating a sense of discovery throughout the evening.',
  },
  {
    q: 'Can I avoid certain ingredients?',
    a: 'Yes. Dislikes, allergies, intolerances, and dietary restrictions are collected in advance and strictly avoided. The menu remains a surprise within the boundaries you set.',
  },
  {
    q: 'How many courses are included?',
    a: 'Our Mystery Night for Two includes four courses, the Mystery Dinner Party includes five courses, and the bespoke Mystery Tasting Menu can extend to six to eight courses with beverage pairing.',
  },
  {
    q: 'Is it suitable for special occasions?',
    a: 'Absolutely. Mystery dining is popular for date nights, birthdays, anniversaries, and small celebrations where hosts want a memorable, conversation-driven experience without choosing every dish themselves.',
  },
  {
    q: 'Can kids participate?',
    a: 'Yes, with advance notice. We adapt portion sizes, spice levels, and ingredients for younger guests while keeping the experience playful and age-appropriate.',
  },
]

const relatedServices = [
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate private dining for two, perfect for date nights and anniversaries.',
    image: '/images/romantic-dinner-dubai-hero.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Tasting Menu Dubai',
    description: 'Multi-course tasting experiences crafted by private chefs in your own space.',
    image: '/images/tasting-menu-dubai-hero.webp',
    link: '/tasting-menu-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke private chef service for dinners, events, and weekly meal prep.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Mystery Dining Dubai',
      'Book a mystery dining experience in Dubai. A private chef creates a surprise multi-course menu tailored to your preferences and dietary needs.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Mystery Dining Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function MysteryDining() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.md-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.md-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.md-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.md-intro-text', {
      scrollTrigger: { trigger: '.md-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.md-inclusion-card', {
      scrollTrigger: { trigger: '.md-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.md-package-card', {
      scrollTrigger: { trigger: '.md-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.md-faq-item', {
      scrollTrigger: { trigger: '.md-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.md-rel-card', {
      scrollTrigger: { trigger: '.md-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.md-cta', {
      scrollTrigger: { trigger: '.md-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Mystery Dining Dubai | Surprise Menu by Private Chef | myCHEF"
        description="Book a mystery dining experience in Dubai. A private chef creates a surprise multi-course menu tailored to your preferences and dietary needs. Get a quote."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/tasting-menu-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/tasting-menu-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 md-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Mystery Dining Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 md-hero-h1">
            Mystery Dining Dubai: Surprise Menus by a Private Chef
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 md-hero-sub">
            Tell us what excites your palate and any dietary boundaries. We will bring you a vetted private chef who designs a surprise menu around your tastes, delivered in your home, apartment, or villa within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 md-hero-cta">Plan My Mystery Dinner</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 md-hero-cta"
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
            SURPRISE, PERSONALISED DINING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Menu Designed to Surprise You
          </h2>
          <div className="md-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Tell us about your event and we will bring you a vetted private chef within 24 hours. You share what excites your palate and what must stay off the plate; the chef designs a surprise menu around those boundaries so every course lands as a discovery.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The result is a relaxed, conversational dinner where guests arrive curious and leave impressed. It works equally well for romantic date nights, small group celebrations, and diners who want a tasting-menu experience without leaving their home or villa.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Browse <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinners</Link>, <Link to="/tasting-menu-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">tasting menus</Link>, <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury dining experiences</Link>, or <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef service</Link> for more bespoke dining options.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="md-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS INCLUDED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              How We Build the Surprise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="md-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="md-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MYSTERY DINING PACKAGES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Level of Discovery
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`md-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-1">{pkg.price}</p>
                <p className="font-inter text-body-sm text-gray-400 mb-6 leading-relaxed">
                  Final quote tailored to your event.
                </p>
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
                  to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`}
                  className="block text-center w-full py-3 font-inter text-sm uppercase tracking-wider bg-gold text-black hover:bg-gold-light transition-colors"
                >
                  Get Your Quote
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
            Mystery Dining Questions
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

          <div className="md-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="md-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center md-cta opacity-0 translate-y-8">
          <SparklesIcon size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let the Chef Surprise You
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your tastes, set your boundaries, and leave the creativity to us. A surprise menu tailored to you is only an enquiry away — we reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Plan My Mystery Dinner</Link>
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

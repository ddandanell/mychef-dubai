import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ClipboardList,
  ChefHat,
  Users,
  ShieldCheck,
  Phone,
  ArrowRight,
  Check,
  Home,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to hire a full-time private chef (via mychef.ae/full-time-private-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/full-time-private-chef-dubai'
const CAMPAIGN = 'full-time-private-chef'

const inclusions = [
  {
    icon: ClipboardList,
    title: 'Household Menu Planning',
    description: 'Weekly menus designed around your family\'s preferences, nutritional goals, and social calendar. Rotated seasonally so meals never feel repetitive.',
  },
  {
    icon: ChefHat,
    title: 'Daily Meal Preparation',
    description: 'A vetted chef in your kitchen preparing breakfast, lunch, dinner, and snacks to your household\'s schedule — fresh, organised, and ready to serve.',
  },
  {
    icon: Users,
    title: 'Event & Entertainment Support',
    description: 'Your residential chef can extend service for family dinners, brunches, and small gatherings without the need to bring in outside catering.',
  },
  {
    icon: ShieldCheck,
    title: 'Dietary & Allergy Management',
    description: 'Strict allergen protocols, halal sourcing, and tailored nutrition plans for children, athletes, clinical needs, or weight-management goals.',
  },
]

const packages = [
  {
    name: 'Part-Time Residential',
    price: 'From AED 4,500/mo',
    description: 'Ideal for smaller households who want a chef several days per week.',
    features: [
      '3–4 days per week',
      'Breakfast and dinner preparation',
      'Weekly household menu planning',
      'Grocery list coordination',
      'Dietary preference management',
    ],
  },
  {
    name: 'Full-Time Live-Out',
    price: 'From AED 8,500/mo',
    description: 'A dedicated chef who commutes daily for complete household meal coverage.',
    features: [
      '5–6 days per week',
      'Breakfast, lunch, and dinner',
      'Event and entertainment support',
      'Grocery sourcing coordination',
      'Backup chef coverage',
    ],
    highlighted: true,
  },
  {
    name: 'Full-Time Live-In',
    price: 'From AED 12,500/mo',
    description: 'A residential chef embedded in your household for seamless daily service.',
    features: [
      '6 days per week, resident chef',
      'All meals, snacks, and events',
      'Full kitchen organisation',
      'Travel with household available',
      'Dedicated account manager',
    ],
  },
]

const faqs = [
  {
    q: 'How do I hire a full-time private chef through myCHEF Dubai?',
    a: 'Start with a brief consultation. We learn your household size, cuisine preferences, schedule, dietary needs, and whether you need a live-in or live-out arrangement. We then shortlist vetted candidates and arrange interviews before placement.',
  },
  {
    q: 'What is the notice period for a full-time private chef?',
    a: 'Most residential placements begin with a 30-day trial period, followed by a standard contract. Notice terms are agreed upfront and typically align with UAE employment norms for domestic staff.',
  },
  {
    q: 'Can the chef live in?',
    a: 'Yes. We place both live-in and live-out chefs depending on your household setup, villa layout, and privacy preferences. Live-in arrangements include accommodation and rest-day terms in the contract.',
  },
  {
    q: 'What if the chef is sick or leaves?',
    a: 'myCHEF Dubai maintains a roster of vetted replacement chefs. If your chef is unavailable, we arrange temporary coverage so your household routine continues without disruption.',
  },
  {
    q: 'What cuisines can they cook?',
    a: 'Chefs in our network cover Arabic, Mediterranean, Italian, Indian, Asian, sushi, healthy, halal, vegan, and child-friendly cuisines. We match chefs to your specific taste profile during selection.',
  },
]

const relatedServices = [
  {
    title: 'Part-Time Private Chef Dubai',
    description: 'Flexible chef support a few days per week for busy households.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/part-time-private-chef-dubai',
  },
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Planned, prepared, and delivered meals designed around your week.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'On-demand private chefs for dinners, events, and special occasions.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Full-Time Private Chef Dubai',
      'Hire a vetted full-time, live-in or live-out private chef in Dubai for daily household meal preparation, menu planning, events, and dietary management.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Full-Time Private Chef Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a full-time private chef in Dubai. Date: __ Guests: __ Area: __"
export default function FullTimePrivateChef() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.fp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.fp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.fp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.fp-intro-text', {
      scrollTrigger: { trigger: '.fp-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.fp-inclusion-card', {
      scrollTrigger: { trigger: '.fp-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fp-package-card', {
      scrollTrigger: { trigger: '.fp-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.fp-faq-item', {
      scrollTrigger: { trigger: '.fp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fp-rel-card', {
      scrollTrigger: { trigger: '.fp-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fp-cta', {
      scrollTrigger: { trigger: '.fp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Full-Time Private Chef Dubai | Live-In & Live-Out | myCHEF"
        description="Hire a full-time private chef in Dubai. myCHEF Dubai sources vetted residential chefs for villas, families, and HNWI households. Get a quote in 15 minutes."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/private-chef-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/private-chef-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 fp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Full-Time Private Chef Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 fp-hero-h1">
            Full-Time Private Chef Dubai: Live-In & Live-Out Chefs
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fp-hero-sub">
            A dedicated chef for your household, matched to your family's tastes, schedule, and dietary needs. Vetted, experienced, and ready to move in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 fp-hero-cta">Get My Full-Time Chef Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 fp-hero-cta"
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
            RESIDENTIAL CHEF PLACEMENT
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Chef Who Becomes Part of Your Home
          </h2>
          <div className="fp-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Hire a full-time private chef in Dubai and bring consistent, restaurant-quality dining into your home. Tell us about your household size, cuisine preferences, and schedule, and we will bring you a vetted residential chef within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Every candidate is vetted for culinary skill, professionalism, food-safety awareness, and experience in private households. We handle the shortlisting, interviews, and placement terms so you can focus on finding the right match for your family.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore <Link to="/part-time-private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">part-time private chef</Link>, <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>, <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">on-demand private chef</Link> options, or see <Link to="/private-chef-prices-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef prices in Dubai</Link> for more flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="fp-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS INCLUDED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Complete Household Culinary Support
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="fp-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="fp-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              RESIDENTIAL CHEF PACKAGES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Arrangement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`fp-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-1">{pkg.price}</p>
                <p className="font-inter text-xs text-gray-500 mb-4 leading-relaxed">
                  Final quote tailored to your household after consultation.
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
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3 font-inter text-sm uppercase tracking-wider bg-gold text-black hover:bg-gold-light transition-colors"
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Full-Time Chef Questions
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

          <div className="fp-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="fp-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center fp-cta opacity-0 translate-y-8">
          <Home size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Find Your Household Chef
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your household, schedule, and cuisine preferences. We will bring you a vetted full-time private chef who fits your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Get My Full-Time Chef Quote</Link>
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

import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Apple,
  ShieldCheck,
  HeartPulse,
  CalendarDays,
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn about the kids nutrition chef service (via mychef.ae/kids-nutrition-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/kids-nutrition-chef-dubai'
const CAMPAIGN = 'kids-nutrition-chef'

const inclusions = [
  {
    icon: Apple,
    title: 'Child-Approved Menus',
    description: 'Dishes that balance flavour and nutrition, designed around textures and tastes children actually enjoy while introducing variety.',
  },
  {
    icon: ShieldCheck,
    title: 'Allergy-Safe Preparation',
    description: 'Strict allergen protocols in the kitchen, clear ingredient labelling, and separate prep workflows for gluten, dairy, nuts, and other sensitivities.',
  },
  {
    icon: HeartPulse,
    title: 'Balanced Nutrition Plans',
    description: 'Menus built with age-appropriate portions, vegetables, whole grains, and quality proteins to support growth, energy, and concentration.',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Weekly Schedules',
    description: 'Choose from school-lunch boxes, family dinners, or full weekly meal prep. Portions and delivery timing adapt to your household routine.',
  },
]

const packages = [
  {
    name: 'School Lunch Plan',
    price: 'From AED 1,200',
    description: 'Fresh, balanced lunch boxes delivered weekly for school-age children.',
    features: [
      '5 child-friendly lunches per week',
      'Allergy-aware ingredient selection',
      'Reusable or disposable packaging options',
      'Weekly menu rotation',
      'Nutrition summary for parents',
    ],
  },
  {
    name: 'Family Nutrition Plan',
    price: 'From AED 2,400',
    description: 'Shared family meals designed for children and adults, delivered or prepared in your home.',
    features: [
      'Family-style dinners for 4–6 people',
      'Balanced adult and child portions',
      'Allergy and dietary preference support',
      'Menu review with parents each week',
      'Optional in-home chef service',
    ],
    highlighted: true,
  },
  {
    name: 'Full Weekly Meal Prep',
    price: 'From AED 3,600',
    description: 'Complete weekly nutrition support: lunches, dinners, and snacks prepared for the whole family.',
    features: [
      'Up to 14 meals + healthy snacks',
      'Custom nutrition goals and allergies',
      'Halal and dietary-compliant options',
      'Labelled containers with reheating notes',
      'Dedicated kids nutrition chef',
    ],
  },
]

const faqs = [
  {
    q: 'Can menus accommodate allergies and intolerances?',
    a: 'Yes. We design around allergies, intolerances, and religious dietary requirements. Chefs in our network follow strict cross-contamination protocols and label every container clearly.',
  },
  {
    q: 'Do you handle picky eaters?',
    a: 'Absolutely. We start with familiar flavours and gradually introduce new ingredients. Parents can share likes, dislikes, and textures to avoid, and we adjust each week.',
  },
  {
    q: 'What age groups do you cater for?',
    a: 'We support toddlers through to teenagers, with portion sizes and nutrient balances tailored to each age group and activity level.',
  },
  {
    q: 'Is the food halal?',
    a: 'All meals can be prepared halal by arrangement. We also accommodate vegetarian, vegan, dairy-free, gluten-free, and other dietary frameworks.',
  },
  {
    q: 'Can parents review menus weekly?',
    a: 'Yes. Each weekly plan is shared in advance for feedback, and we welcome changes before the prep day.',
  },
]

const relatedServices = [
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Custom weekly meal plans prepared by vetted chefs for busy households.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Allergy-Safe Catering Dubai',
    description: 'Catering built around strict allergen protocols for every occasion.',
    image: '/images/gluten-free-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
  },
  {
    title: 'Family Feast Package Dubai',
    description: 'A relaxed, generous family dining experience at home with a private chef.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/family-feast-package-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Kids Nutrition Chef Dubai',
      'Kids nutrition chef and healthy family meal prep in Dubai: child-approved menus, allergy-safe preparation, balanced nutrition plans, and flexible weekly schedules.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Kids Nutrition Chef Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a kids nutrition chef in Dubai. Date: __ Guests: __ Area: __"
export default function KidsNutritionChef() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.kn-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.kn-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.kn-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.kn-intro-text', {
      scrollTrigger: { trigger: '.kn-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.kn-inclusion-card', {
      scrollTrigger: { trigger: '.kn-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.kn-package-card', {
      scrollTrigger: { trigger: '.kn-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.kn-faq-item', {
      scrollTrigger: { trigger: '.kn-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.kn-rel-card', {
      scrollTrigger: { trigger: '.kn-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.kn-cta', {
      scrollTrigger: { trigger: '.kn-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Kids Meal Prep Dubai | Healthy Meals Children Eat | myCHEF"
        description="Kids meal prep in Dubai by a private chef. Balanced, child-friendly meals designed around allergies, growth and family routines. Get a quote."
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
          <nav className="mb-6 opacity-0 translate-y-4 kn-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Kids Nutrition Chef Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 kn-hero-h1">
            Kids Meal Prep Dubai: Healthy Meals Children Love
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 kn-hero-sub">
            Healthy, delicious meals designed for children — and approved by parents. From school lunches to family dinners, we make nutrition easy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 kn-hero-cta">Plan My Kids' Nutrition Menu</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 kn-hero-cta"
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
          <SectionLabel align="center">NUTRITIOUS MEALS FOR FAMILIES</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Meals Kids Love, Parents Trust
          </h2>
          <div className="kn-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Give your children balanced, home-style meals they actually want to eat — and get your evenings back. Tell us about your household, your children's preferences, and any allergies or dietary goals, and we will bring you a vetted kids nutrition chef within 24 hours to build a plan that fits your family.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Whether you need packed lunches for the week, balanced family dinners, or a full meal-prep service, we work around your schedule and your children's needs. Every menu is reviewed with parents, prepared with care, and delivered ready to serve.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore more family-friendly options: <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>, <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">allergy-safe catering</Link>, <Link to="/family-feast-package-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">family feast packages</Link>, or <Link to="/birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">birthday catering</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="kn-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT IS INCLUDED</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Built Around Your Family
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="kn-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="kn-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">KIDS NUTRITION PACKAGES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Rhythm
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`kn-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-1">{pkg.price}</p>
                <p className="font-inter text-xs text-gray-500 mb-4 leading-relaxed">Final quote tailored to your household.</p>
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
            Kids Nutrition Questions
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

          <div className="kn-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="kn-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center kn-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Make Family Nutrition Effortless
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your children, their preferences, and your weekly routine. We will design a nutrition plan the whole family enjoys.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Plan My Kids' Nutrition Menu</Link>
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

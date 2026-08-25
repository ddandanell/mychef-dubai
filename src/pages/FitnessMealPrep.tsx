import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Dumbbell,
  Flame,
  Target,
  Phone,
  ArrowRight,
  Check,
  Activity,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss fitness meal prep (via mychef.ae/fitness-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/fitness-meal-prep-dubai'

const features = [
  {
    icon: Target,
    title: 'Macro-Calculated Meals',
    description: 'Every dish is built to your protein, carbohydrate, and fat targets. We calculate portions around your body composition goals, training schedule, and dietary preferences.',
  },
  {
    icon: Flame,
    title: 'Calorie Precision',
    description: 'Whether you are cutting, bulking, or maintaining, meals are portioned to hit your daily calorie budget without guesswork.',
  },
  {
    icon: Dumbbell,
    title: 'Training-Day Nutrition',
    description: 'Higher carbohydrate meals around heavy training days. Lighter, higher-protein meals on rest days. We sync the menu to your programme.',
  },
  {
    icon: Activity,
    title: 'Trainer Coordination',
    description: 'Share guidance from your personal trainer or nutritionist and we will build meals that align with their plan. No conflicting advice, just execution.',
  },
]

const programmes = [
  {
    title: 'Fat Loss',
    description: 'High-protein, moderate-carbohydrate meals designed to preserve muscle while keeping you full and energised.',
  },
  {
    title: 'Muscle Gain',
    description: 'Protein-forward menus with sufficient carbohydrates and healthy fats to support hypertrophy and recovery.',
  },
  {
    title: 'Athletic Performance',
    description: 'Periodised nutrition that matches training load, with emphasis on recovery, glycogen replenishment, and hydration.',
  },
  {
    title: 'Body Recomposition',
    description: 'A balanced approach that supports simultaneous fat loss and muscle preservation through precise macros.',
  },
]

const faqs = [
  {
    q: 'How are macros calculated?',
    a: 'We start with your goals, body metrics, activity level, and any guidance from your trainer or nutritionist. Your chef then builds a weekly menu that hits your target protein, carbs, and fats per meal.',
  },
  {
    q: 'Can I adjust macros as my programme changes?',
    a: 'Yes. Macros are reviewed weekly or bi-weekly and adjusted based on your progress, training phase, or changes recommended by your coach.',
  },
  {
    q: 'Do you provide nutrition coaching?',
    a: 'No. Your assigned chef executes the meal plan. If you need a nutrition plan, we recommend working with a licensed nutritionist or certified coach, then the chef prepares the meals to match their guidance.',
  },
  {
    q: 'What cuisines can be made macro-friendly?',
    a: 'Almost any. Chefs in our network regularly prepare macro-balanced Middle Eastern, Mediterranean, Asian, Indian, and Western meals. We adapt recipes rather than strip them of flavour.',
  },
  {
    q: 'How much does fitness meal prep cost?',
    a: 'Fitness meal prep starts from AED 1,200 per week depending on meal count, portion size, and ingredient quality. Final quote tailored to your targets and household.',
  },
]

const relatedServices = [
  {
    title: 'Wellness Meal Prep',
    description: 'Nutritionist-aligned meals for general health, dietary restrictions, and lifestyle goals.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/wellness-meal-prep-dubai',
  },
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Recurring private chef visits for households that want fresh meals without daily cooking.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Healthy Catering Dubai',
    description: 'Balanced, nutrition-conscious menus for events and family dining.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/healthy-catering-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Fitness Meal Prep',
      'Fitness meal prep in Dubai: macro-calculated, calorie-precision meals prepared by a private chef to support fat loss, muscle gain, and athletic performance.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Fitness Meal Prep Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in fitness meal prep in Dubai. Date: __ Guests: __ Area: __"
export default function FitnessMealPrep() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.fm-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.fm-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.fm-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.fm-intro-text', {
      scrollTrigger: { trigger: '.fm-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.fm-feature-card', {
      scrollTrigger: { trigger: '.fm-features', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fm-programme-item', {
      scrollTrigger: { trigger: '.fm-programmes', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fm-faq-item', {
      scrollTrigger: { trigger: '.fm-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fm-rel-card', {
      scrollTrigger: { trigger: '.fm-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fm-cta', {
      scrollTrigger: { trigger: '.fm-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Fitness Meal Prep Dubai | Macro Meals | myCHEF"
        description="Fitness meal prep in Dubai by a private chef. Macro-calculated, calorie-precision meals for fat loss, muscle gain, and athletic performance. Get a quote."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/healthy-catering-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/healthy-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 fm-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Fitness Meal Prep Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 fm-hero-h1">
            Fitness Meal Prep Dubai: Macro-Calculated Meals
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fm-hero-sub">
            Macro-calculated, calorie-precision meals prepared in your own kitchen — designed around your training programme and body composition goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 fm-hero-cta">Plan My Fitness Meals</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 fm-hero-cta"
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
          <SectionLabel align="center">PERFORMANCE NUTRITION</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Eat for the Body You Are Building
          </h2>
          <div className="fm-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Dubai's fitness culture is serious. Whether you are training for a competition, working through a transformation, or simply want your nutrition to match your discipline, the right meal prep is the lever that makes everything else easier. Tell us about your goals, training schedule, and household and we will bring you a vetted private chef within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Our fitness meal prep service pairs you with a private chef who prepares macro-calculated meals in your own kitchen. No more weighing food, no more bland containers, no more falling off plan because the healthy option was too hard to find. If you need broader nutritionist-aligned support, explore our <Link to="/wellness-meal-prep-dubai" className="text-gold hover:underline">Wellness Meal Prep</Link> programme.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              We do not write your nutrition plan — we execute it. Share your targets or your coach's guidance and we will build a weekly menu that hits your numbers and tastes like real food. For recurring household coverage, see <Link to="/weekly-meal-prep-dubai" className="text-gold hover:underline">Weekly Meal Prep Dubai</Link> or our full <Link to="/private-chef-dubai" className="text-gold hover:underline">private chef service</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Features ═══════════════ */}
      <section className="fm-features bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">THE DETAILS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Precision Without Compromise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="fm-feature-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Programmes ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">GOAL-SPECIFIC PLANS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Match Meals to Your Goal
            </h2>
          </div>

          <div className="fm-programmes grid md:grid-cols-2 gap-6">
            {programmes.map((item, i) => (
              <div key={i} className="fm-programme-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">Honest scope:</strong> Your assigned chef prepares meals to your specified macros and calorie targets. We do not provide medical advice, diagnose conditions, or guarantee specific physical results. For clinical nutrition, please consult a licensed professional.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Fitness Meal Prep Questions
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

          <div className="fm-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="fm-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center fm-cta opacity-0 translate-y-8">
          <Dumbbell size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Start Training With Your Food
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your macros, your goals, and your schedule. We will design a weekly fitness meal prep plan that keeps you on track without the boredom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Plan My Fitness Meals</Link>
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

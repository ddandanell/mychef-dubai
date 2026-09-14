// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /fitness-meal-prep-dubai
//     primary:     "fitness meal prep dubai"
//     subkeywords: "fitness meal prep dubai price" · "fitness meal prep dubai price per meal" · "best fitness meal prep dubai" · "fitness meal prep packages dubai" · "fitness meal prep menu dubai" · "halal fitness meal prep dubai" · "high protein meal prep dubai" · "bodybuilding meal prep dubai" · "fitness meal plan dubai" · "practical meal prep uae" · "best meal prep companies dubai" · "personal chef meal prep near me cost"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
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
    title: 'The numbers come from you',
    description: 'Protein, carbohydrate and fat targets sit in the Food Profile. The chef portions to those numbers. We do not invent a fitness meal plan Dubai households did not send.',
  },
  {
    icon: Flame,
    title: 'Calories as written',
    description: 'Cutting, building or holding: portions follow the daily budget you or your coach set. The chef executes. We do not rewrite the plan.',
  },
  {
    icon: Dumbbell,
    title: 'Training days vs rest days',
    description: 'Higher carbohydrate around heavy sessions. Higher protein on rest days, if that is what the brief says. High protein meal prep Dubai is this job with those numbers.',
  },
  {
    icon: Activity,
    title: 'Your coach stays the coach',
    description: 'Share the guidance. We cook to it. No second nutrition opinion from the kitchen, and no medical claims.',
  },
]

const programmes = [
  {
    title: 'Fat loss weeks',
    description: 'Higher protein, moderate carbohydrate, if that is the brief. The chef cooks it. The result is not a promise we print.',
  },
  {
    title: 'Building weeks',
    description: 'Protein-forward plates with enough carbohydrate and fat for the sessions you actually do. Bodybuilding meal prep Dubai is this job with those targets.',
  },
  {
    title: 'Training load',
    description: 'Heavier days get more carbohydrate if you asked for it. Rest days stay lighter. Practical meal prep UAE households use is still four hours in the kitchen.',
  },
  {
    title: 'Holding the line',
    description: 'Same macros, same containers, same chef. The week does not fall over because nobody shopped.',
  },
]

const faqs = [
  {
    q: 'How are macros calculated?',
    a: 'They are not calculated by us as a medical service. You or your coach send the targets. The chef builds the week to those numbers and writes them on the containers.',
  },
  {
    q: 'Can I adjust macros as my programme changes?',
    a: 'Yes. When the brief changes, the Food Profile changes. The next visit cooks to the new numbers.',
  },
  {
    q: 'Do you provide nutrition coaching?',
    a: 'No. The chef executes the plan. If you need a nutrition plan, work with a licensed nutritionist or certified coach, then we cook to their guidance.',
  },
  {
    q: 'What cuisines can be made to hit macros?',
    a: 'Most of the kitchens we cook: Middle Eastern, Mediterranean, Asian, Indian, Western. Recipes are adapted to the numbers, not stripped of flavour.',
  },
  {
    q: 'How much does fitness meal prep Dubai price come to?',
    a: 'It is the Food Prep job: four hours, AED 900 a visit. Once a week is AED 3,600 a month. Groceries at actual receipts, no markup. VAT at 5% on the service. There is no separate fitness tariff and no invented price per meal.',
  },
]

const relatedServices = [
  {
    title: 'Wellness Meal Prep',
    description: 'When the brief is general health, not a training split.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/wellness-meal-prep-dubai',
  },
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'The same Food Prep job, written for the household rather than the gym.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Healthy Catering Dubai',
    description: 'One night with guests. Not a week of training food.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/cuisines-dubai',
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
        title="Fitness Meal Prep Dubai | Food Prep AED 900 | myCHEF"
        description="Fitness meal prep Dubai is the Food Prep job: four hours, AED 900, cooked to your macros in your kitchen. Groceries at receipts. VAT 5%."
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
            Fitness Meal Prep Dubai: cooked to your numbers
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fm-hero-sub">
            Fitness meal prep Dubai is four hours in your kitchen, AED 900 a visit. You or your coach send the macros. The chef cooks them. Groceries at receipts.
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
          <SectionLabel align="center">THE SAME FOOD PREP JOB</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The visit is Food Prep. The numbers are yours.
          </h2>
          <div className="fm-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Fitness meal prep Dubai is the household Food Prep job with training numbers attached. Four hours, AED 900. Halal fitness meal prep Dubai is the default sourcing. Best fitness meal prep Dubai, for us, means a named chef, an itemised figure, and macros written on the lid.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Fitness meal prep packages Dubai are once or twice a week, not a menu card named after a body type. A fitness meal prep menu Dubai week is written from your brief. Personal chef meal prep near me cost is still this visit rate, groceries at receipts, VAT at 5%.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              We do not write your nutrition plan. We cook it. If you need a broader health brief, see <Link to="/wellness-meal-prep-dubai" className="text-gold hover:underline">wellness meal prep</Link>. For the household version without macros, see <Link to="/weekly-meal-prep-dubai" className="text-gold hover:underline">weekly meal prep Dubai</Link>. A standing cook most days lives on <Link to="/private-chef-dubai" className="text-gold hover:underline">private chef Dubai</Link>.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Best meal prep companies Dubai is a search. What you get here is a chef in your kitchen, not a production unit. One dinner is catering, not this page.
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
              What the chef actually does with the brief
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
            <SectionLabel align="center" tone="dark">HOW THE WEEK IS SHAPED</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              The goal is yours. The cooking is ours.
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
            Fitness Meal Prep Dubai: questions before we cook
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Nearby pages
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
        <div className="container-custom text-center fm-cta opacity-0 translate-y-8">
          <Dumbbell size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the numbers. We will cook them.
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Macros, days, and who else eats in the house. Fitness meal prep Dubai price per meal is not a published tariff. The visit is AED 900 for four hours.
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

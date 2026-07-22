import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  HeartPulse,
  Apple,
  Dumbbell,
  Scale,
  Leaf,
  Baby,
  ChefHat,
  Calendar,
  ShoppingBag,
  Package,
  Check,
  ChevronRight,
  Phone,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import VIPPromoSection from '../components/VIPPromoSection'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn about wellness meal prep in Dubai (via mychef.ae/wellness-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/wellness-meal-prep-dubai'
const CAMPAIGN = 'wellness-meal-prep-dubai'

const programmes = [
  {
    icon: Dumbbell,
    title: 'Fitness & Performance',
    description: 'High-protein, macro-calculated meals for athletes, gym-goers, and anyone training for a specific goal.',
    price: 'from AED 1,500/week',
  },
  {
    icon: Scale,
    title: 'Weight Management',
    description: 'Calorie-controlled, balanced meals designed to support fat loss or healthy weight gain without sacrificing flavour.',
    price: 'from AED 1,400/week',
  },
  {
    icon: HeartPulse,
    title: 'Clinical & Medical Diets',
    description: 'Diabetic-friendly, low-sodium, low-cholesterol, and heart-healthy meals prepared with care.',
    price: 'from AED 1,600/week',
  },
  {
    icon: Baby,
    title: 'Postpartum & Recovery',
    description: 'Nourishing, easy-to-digest meals for new mothers, recovery, and healing-focused nutrition.',
    price: 'from AED 1,800/week',
  },
]

const howItWorks = [
  {
    icon: Calendar,
    step: '01',
    title: 'Nutrition Consultation',
    description: 'We start with your goals, body metrics, dietary restrictions, and preferences. Optional nutritionist review available.',
  },
  {
    icon: ChefHat,
    step: '02',
    title: 'Macro-Designed Menu',
    description: 'Your chef designs meals with balanced protein, carbs, and fats — aligned to your calorie and macro targets.',
  },
  {
    icon: ShoppingBag,
    step: '03',
    title: 'Premium Ingredient Sourcing',
    description: 'We source lean proteins, whole grains, fresh produce, and healthy fats from trusted suppliers.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Prep, Portion & Label',
    description: 'Meals are cooked in your kitchen, portioned into containers, and labelled with macros, calories, and reheating instructions.',
  },
]

const benefits = [
  {
    icon: Apple,
    title: 'Nutritionist-Aligned',
    description: 'Menus can be reviewed or designed in consultation with a qualified nutritionist for clinical or performance goals.',
  },
  {
    icon: Scale,
    title: 'Macro Tracking Made Easy',
    description: 'Every container lists protein, carbohydrates, fats, and total calories so you stay on target.',
  },
  {
    icon: Leaf,
    title: 'Whole Food Ingredients',
    description: 'No processed shortcuts. Fresh vegetables, lean proteins, whole grains, and healthy fats in every meal.',
  },
  {
    icon: HeartPulse,
    title: 'Condition-Specific Menus',
    description: <>Diabetic, low-sodium, low-FODMAP, anti-inflammatory, and allergy-safe options available. Browse our <Link to="/allergy-safe-catering-dubai" className="text-gold underline hover:no-underline">allergy-safe catering</Link> protocols.</>,
  },
  {
    icon: Check,
    title: 'Halal & Allergen Aware',
    description: 'Halal-certified proteins and strict allergen protocols with clear labelling on every container.',
  },
  {
    icon: ChefHat,
    title: 'Private Chef Convenience',
    description: <>A chef cooks in your home, handles cleanup, and leaves your fridge stocked for the week. Compare <Link to="/private-chef-prices-dubai" className="text-gold underline hover:no-underline">private chef prices in Dubai</Link>.</>,
  },
]

const faqs = [
  {
    q: 'Can a nutritionist design my meal plan?',
    a: 'Yes. We can coordinate with a qualified nutritionist to design or review your meal plan based on your health, fitness, or medical goals.',
  },
  {
    q: 'Are macros listed on every meal?',
    a: 'Yes. Every container is labelled with calories, protein, carbohydrates, and fats so you can track your intake easily.',
  },
  {
    q: 'Do you support keto, paleo, and other diets?',
    a: 'Absolutely. We offer keto, paleo, low-carb, high-protein, vegan, vegetarian, and many other wellness-focused approaches.',
  },
  {
    q: 'Is this suitable for medical conditions like diabetes?',
    a: 'Yes. Your assigned chef prepares diabetic-friendly, low-sodium, and heart-healthy meals. For clinical conditions, we recommend nutritionist oversight.',
  },
  {
    q: 'How much does wellness meal prep cost in Dubai?',
    a: 'Wellness meal prep starts from AED 1,400 per week depending on the programme, frequency, and dietary complexity. Final quotes are tailored to your goals.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Wellness Meal Prep Dubai',
      'Nutritionist-aligned private chef meal prep in Dubai. Macro-calculated, fitness-focused, and medical-condition-friendly meals prepared in your home.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Wellness Meal Prep Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function WellnessMealPrep() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.wm-fade', {
      scrollTrigger: { trigger: '.wm-fade', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })
    gsap.to('.wm-card', {
      scrollTrigger: { trigger: '.wm-cards', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })
    gsap.to('.wm-faq', {
      scrollTrigger: { trigger: '.wm-faq-list', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Wellness Meal Prep Dubai | Nutritionist"
        description="Wellness meal prep in Dubai by a private chef. Macro-calculated, fitness-focused, and medical-condition-friendly meals. Optional nutritionist consultation."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/healthy-catering-dubai-hero.webp"
        schema={schema}
      />

      <PageHero
        eyebrow="HEALTH-FOCUSED MEAL PREP"
        title="Wellness Meal Prep Dubai"
        subtitle="Nutritionist-aligned, macro-calculated meals prepared by a private chef in your own kitchen. Tell us about your household and goals — we will match you with a vetted wellness chef and send a tailored quote within 24 hours."
        image="/images/healthy-catering-dubai-hero.webp"
        imageAlt="Wellness meal prep in Dubai"
        cta={{ label: 'Plan My Wellness Menu', href: `/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}` }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Wellness Meal Prep Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      {/* Programmes */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 wm-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Programmes</span>
            <h2 className="font-playfair text-h2 text-black">Wellness Meal Prep Programmes</h2>
          </div>
          <div className="wm-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="wm-card opacity-0 translate-y-8 bg-white p-8 border-t-[3px] border-gold">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-2">{p.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
                  <p className="font-inter text-body-sm text-gold font-medium">{p.price}</p>
                  <p className="font-inter text-sm text-gray-500 mt-2">Final quote tailored to your household.</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12 wm-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The Process</span>
            <h2 className="font-playfair text-h2 text-white">How Wellness Meal Prep Works</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="wm-fade opacity-0 translate-y-8 flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gold/10 text-gold">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="font-inter text-caption text-gold uppercase tracking-wider">Step {item.step}</span>
                    <h3 className="font-playfair text-h3 text-white mt-1 mb-2">{item.title}</h3>
                    <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 wm-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Why Choose Us</span>
            <h2 className="font-playfair text-h2 text-black">Built for Health, Performance & Recovery</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="wm-fade opacity-0 translate-y-8 bg-cream p-8">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{b.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <VIPPromoSection campaign="wellness-meal-prep-dubai" variant="dark" />

      {/* FAQ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10 wm-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">FAQ</span>
            <h2 className="font-playfair text-h2 text-black">Wellness Meal Prep Questions</h2>
          </div>
          <div className="wm-faq-list space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="wm-faq opacity-0 translate-y-5 border border-gray-200 bg-white">
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
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-black to-charcoal py-24">
        <div className="container-custom text-center wm-fade opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">Start Your Wellness Meal Plan</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your goals, dietary needs, and household size. We will match you with a vetted wellness chef and send a tailored quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">
              Get a Meal Prep Quote
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
              <Phone size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

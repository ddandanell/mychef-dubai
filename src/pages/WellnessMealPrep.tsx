// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /wellness-meal-prep-dubai
//     primary:     "healthy meal prep dubai"
//     subkeywords: "healthy meal prep dubai price" · "healthy meal prep dubai price per meal" · "healthy meal prep delivery dubai" · "healthy meal plan dubai" · "weight loss meal plan dubai" · "healthy food chef" · "wellness meal prep dubai" · "monthly healthy meal plan dubai for weight loss" · "meal prep in dubai" · "healthy food plan dubai" · "healthy meal plans dubai" · "chef meal prep cost"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
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
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn about wellness meal prep in Dubai (via mychef.ae/wellness-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/wellness-meal-prep-dubai'

const programmes = [
  {
    icon: Dumbbell,
    title: 'Fitness & Performance',
    description: "Protein-focused meals planned around your training preferences, with agreed portions and nutrition information where available.",
    price: 'from AED 900 / session',
  },
  {
    icon: Scale,
    title: 'Weight Management',
    description: 'Portioned meals for a household that wants the calories decided in the kitchen, not at 9pm.',
    price: 'from AED 900 / session',
  },
  {
    icon: HeartPulse,
    title: 'Clinical & Medical Diets',
    description: 'Diabetic-friendly, low-sodium or heart-led plates when the brief is clinical. Optional nutritionist review.',
    price: 'from AED 900 / session',
  },
  {
    icon: Baby,
    title: 'Postpartum & Recovery',
    description: 'Meals that reheat well, for the weeks after birth. The standing brief sits on postpartum meal prep if that is the whole job.',
    price: 'from AED 900 / session',
  },
]

const howItWorks = [
  {
    icon: Calendar,
    step: '01',
    title: 'Nutrition Consultation',
    description: 'Goals, allergies, what this house will actually eat, and any clinical notes. Optional nutritionist review if you want it.',
  },
  {
    icon: ChefHat,
    step: '02',
    title: 'Macro-Designed Menu',
    description: 'The chef writes the week around those targets. You approve the menu before the first session.',
  },
  {
    icon: ShoppingBag,
    step: '03',
    title: 'Ingredient sourcing',
    description: 'Shopping as agreed, at actual receipts when we shop. Groceries are not inside the chef rate.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Prep, Portion & Label',
    description: 'Cooked in your kitchen, portioned, labelled, fridge stacked. The kitchen is left as it was found.',
  },
]

const benefits = [
  {
    icon: Apple,
    title: 'Nutritionist-Aligned',
    description: 'A nutritionist can review or write the plan when the goal is clinical or performance. That is optional, not a default.',
  },
  {
    icon: Scale,
    title: 'Macro Tracking Made Easy',
    description: 'Every container lists protein, carbohydrates, fats and total calories so you can track intake.',
  },
  {
    icon: Leaf,
    title: 'Whole Food Ingredients',
    description: 'Vegetables, proteins, grains and fats as the brief defines “healthy” in this house. Not a generic programme.',
  },
  {
    icon: HeartPulse,
    title: 'Condition-Specific Menus',
    description: <>Diabetic, low-sodium, low-FODMAP, anti-inflammatory, and allergy-safe options available. Browse our <Link to="/allergy-safe-catering-dubai" className="text-gold underline hover:no-underline">allergy-safe catering</Link> protocols.</>,
  },
  {
    icon: Check,
    title: 'Halal & Allergen Aware',
    description: 'Halal proteins as standard. Allergen notes in the brief, labelled on the container.',
  },
  {
    icon: ChefHat,
    title: 'Private Chef Convenience',
    description: <>A chef cooks in your kitchen, clears up, and leaves the fridge stocked. This is household prep, not a one-night catering job. Rates sit on <Link to="/private-chef-dubai/pricing" className="text-gold underline hover:no-underline">private chef prices</Link>.</>,
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
    a: 'Yes, when the brief says so: keto, paleo, low-carb, high-protein, vegan or vegetarian. Tell us what “healthy” means in this house.',
  },
  {
    q: 'Is this suitable for medical conditions like diabetes?',
    a: 'Yes. Your assigned chef prepares diabetic-friendly, low-sodium, and heart-healthy meals. For clinical conditions, we recommend nutritionist oversight.',
  },
  {
    q: 'How much does wellness meal prep cost in Dubai?',
    a: 'Healthy meal prep is the Food Prep job: four hours, AED 900 a session. Once a week is AED 3,600 a month. Groceries sit on top, at receipts, if we shop. Add 5% VAT. See [weekly meal prep](/weekly-meal-prep-dubai) for the same rate without the health-goal brief.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Wellness Meal Prep Dubai',
      'Healthy meal prep Dubai: a private chef cooks a week of food in your kitchen, portions it, and leaves the fridge stocked. Food Prep from AED 900 a session.',
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

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in wellness meal prep in Dubai. Date: __ Guests: __ Area: __"
export default function WellnessMealPrep() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
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
        title="Healthy Meal Prep Dubai | myCHEF"
        description="Healthy meal prep Dubai: a chef cooks a week of food in your kitchen, AED 900 a session. Labelled, fridge stacked, kitchen cleared. Tell us the household and the goal."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/healthy-catering-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      <PageHero
        eyebrow="HEALTH-FOCUSED MEAL PREP"
        title="Healthy Meal Prep Dubai"
        subtitle={"Healthy meal prep in Dubai, tailored to your household and prepared in your own kitchen. The Food Prep service is AED 900 per session, with meals portioned, labelled and stored for later and the kitchen cleared afterward."}
        image="/images/healthy-catering-dubai-hero.webp"
        imageAlt="Wellness meal prep in Dubai"
        cta={{ label: 'Request a meal prep quote', href: `/inquiry` }}
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
            <SectionLabel align="center">Programmes</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">Healthy meal prep Dubai, by goal</h2>
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
            <SectionLabel align="center" tone="dark">The Process</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">Consultation, menu, shop, portion</h2>
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
            <SectionLabel align="center">What goes in the fridge</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">Macros on the label. Cleanup in the kitchen.</h2>
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
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">The questions we get before a meal-prep booking</h2>
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
          <h2 className="font-playfair text-h2 text-white mb-4">Send the household, the goals and the week</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Who is eating, what “healthy” means here, and how many days you want cooked. We send an itemised Food Prep quote. See <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>, <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">healthy catering</Link> and <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">
              Request a meal prep quote
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

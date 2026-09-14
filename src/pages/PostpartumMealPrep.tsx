// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /postpartum-meal-prep-dubai
//     primary:     "postpartum meal prep dubai"
//     subkeywords: "postpartum meal prep dubai price" · "postpartum meal delivery dubai" · "postpartum meal prep packages dubai" · "postpartum meal prep menu dubai" · "confinement food delivery dubai" · "meals for new mums dubai" · "postpartum meal plan dubai" · "easy meal prep for after baby" · "fitness meal prep delivery" · "best meal prep companies in dubai" · "postpartum chef dubai" · "meal prep food dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Heart,
  Leaf,
  Moon,
  Phone,
  ArrowRight,
  Check,
  Baby,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss postpartum meal prep (via mychef.ae/postpartum-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/postpartum-meal-prep-dubai'

const features = [
  {
    icon: Heart,
    title: 'Recovery food, written down',
    description: 'Iron-rich proteins, fats, slower carbohydrates, soups and warm dishes if that is how this house eats after birth. The Food Profile holds it. We do not write medical advice.',
  },
  {
    icon: Leaf,
    title: 'The kitchen this family already knows',
    description: 'Arabic, South Asian, East Asian, Mediterranean or Western recovery food, if that is the tradition here. Confinement food delivery Dubai, on this page, is still cooked in your kitchen.',
  },
  {
    icon: Moon,
    title: 'The week can change',
    description: 'Pause, add a visit, or shift portions when appetite and sleep change. Easy meal prep for after baby is the same four hours, used around this house.',
  },
  {
    icon: Baby,
    title: 'Feeding notes, if you send them',
    description: 'Whole-food ingredients, irritants limited on request, and your lactation consultant or nutritionist’s notes if you share them. The chef cooks. They do not diagnose.',
  },
]

const menuFocus = [
  {
    title: 'Iron and protein replenishment',
    description: 'Slow-cooked meats, lentils, leafy greens, and eggs to support recovery after birth.',
  },
  {
    title: 'Anti-inflammatory ingredients',
    description: 'Turmeric, ginger, omega-3-rich fish, nuts, seeds, and colourful vegetables.',
  },
  {
    title: 'Hydration and warmth',
    description: 'Soups, broths, herbal teas, and warm dishes that support comfort and milk supply.',
  },
  {
    title: 'Digestive ease',
    description: 'Cooked vegetables, gentle grains, and probiotic foods that are kind to a recovering digestive system.',
  },
]

const faqs = [
  {
    q: 'When can postpartum meal prep start?',
    a: 'Most households begin in the first or second week after birth. You can agree the plan during pregnancy and start when you are ready. The fourth trimester is a standing Food Prep plan, not a one-night dinner.',
  },
  {
    q: 'Do you provide medical or clinical nutrition advice?',
    a: 'No. The chef cooks from your preferences and any guidance you send from a doctor or licensed nutritionist. For clinical conditions, that professional stays the professional.',
  },
  {
    q: 'Can meals be adapted for the whole family?',
    a: 'Yes. Meals for new mums Dubai can be the same pots, larger portions, or a second set for partners, older children and visiting family. Up to eight people are in the chef price.',
  },
  {
    q: 'How often does the chef visit?',
    a: 'Usually once or twice a week. Each visit is Food Prep: four hours, AED 900. Groceries at receipts. VAT at 5% on the service.',
  },
  {
    q: 'What if I have allergies or food aversions?',
    a: 'They go into the Food Profile before the first visit. Aversions, allergies and religious requirements are cooked around, not discovered on the day.',
  },
]

const relatedServices = [
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'The same Food Prep job when the brief is the whole household, not recovery weeks.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Wellness Meal Prep',
    description: 'When the brief is general health rather than the weeks after birth.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/wellness-meal-prep-dubai',
  },
  {
    title: 'Allergy-Safe Catering',
    description: 'One-night catering with allergen notes. Not a standing recovery week.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Postpartum Meal Prep',
      'Postpartum meal prep in Dubai: nutrient-dense, culturally appropriate recovery meals prepared by a private chef in your own kitchen.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Postpartum Meal Prep Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in postpartum meal prep in Dubai. Date: __ Guests: __ Area: __"
export default function PostpartumMealPrep() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ppm-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ppm-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ppm-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ppm-intro-text', {
      scrollTrigger: { trigger: '.ppm-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.ppm-feature-card', {
      scrollTrigger: { trigger: '.ppm-features', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ppm-menu-item', {
      scrollTrigger: { trigger: '.ppm-menu', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ppm-faq-item', {
      scrollTrigger: { trigger: '.ppm-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ppm-rel-card', {
      scrollTrigger: { trigger: '.ppm-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ppm-cta', {
      scrollTrigger: { trigger: '.ppm-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Postpartum Meal Prep Dubai | Food Prep AED 900 | myCHEF"
        description="Postpartum meal prep Dubai is four hours in your kitchen, AED 900 a visit. Recovery food, cooked here. Groceries at receipts. VAT 5%."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/weekly-meal-prep-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/weekly-meal-prep-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ppm-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Postpartum Meal Prep Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ppm-hero-h1">
            Postpartum Meal Prep Dubai: recovery food, cooked at home
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ppm-hero-sub">
            Postpartum meal prep Dubai is the Food Prep job: four hours, AED 900, in your kitchen. Warm food for the weeks after birth. Groceries at receipts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 ppm-hero-cta">Plan My Postpartum Meals</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ppm-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              WhatsApp About Postpartum Meals
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE FOURTH TRIMESTER, IN THE KITCHEN</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Postpartum meal prep Dubai, without becoming the cook
          </h2>
          <div className="ppm-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The weeks after birth are short on sleep and long on meals. Postpartum meal prep Dubai is a standing Food Prep visit, not a courier brand. A postpartum chef Dubai households book cooks in your kitchen, portions the food, and leaves the surfaces as found.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Postpartum meal delivery Dubai and confinement food delivery Dubai, on this page, are cooked here. Meals for new mums Dubai and easy meal prep for after baby are the same week of Food Prep. Meal prep food Dubai here is those portions. Fitness meal prep delivery only enters if you asked for training food alongside recovery.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Postpartum meal prep Dubai price is AED 900 a visit (four hours). Packages are once or twice a week, not a named medical menu. Groceries at receipts. VAT at 5%. We do not give medical advice. Your doctor or nutritionist’s notes, if you send them, go into the Food Profile.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              When the fourth trimester is over, <Link to="/weekly-meal-prep-dubai" className="text-gold hover:underline">weekly meal prep</Link> is the same job without the recovery brief. For general health, see <Link to="/wellness-meal-prep-dubai" className="text-gold hover:underline">wellness meal prep</Link>. A standing cook most days lives on <Link to="/private-chef-dubai" className="text-gold hover:underline">private chef Dubai</Link>. One dinner is catering.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Features ═══════════════ */}
      <section className="ppm-features bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">HOW THE VISIT RUNS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What the chef is there to do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="ppm-feature-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Menu Focus ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT GOES IN THE POTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Built around recovery, not a generic week
            </h2>
          </div>

          <div className="ppm-menu grid md:grid-cols-2 gap-6">
            {menuFocus.map((item, i) => (
              <div key={i} className="ppm-menu-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">The rate:</strong> Postpartum meal prep Dubai price is the Food Prep job, AED 900 for four hours. Once a week is AED 3,600 a month. Groceries at actual receipts. VAT at 5% on the service. Best meal prep companies in Dubai is a search. This is a chef in your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Questions before a recovery Food Prep booking
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

          <div className="ppm-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ppm-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center ppm-cta opacity-0 translate-y-8">
          <Baby size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Start the recovery week in the kitchen
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us who eats, any feeding notes, and which days the chef should come. AED 900 a visit. Groceries at receipts. VAT at 5%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Plan My Postpartum Meals</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" />
              WhatsApp About Postpartum Meals
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

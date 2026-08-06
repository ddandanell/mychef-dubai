import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss postpartum meal prep (via mychef.ae/postpartum-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/postpartum-meal-prep-dubai'
const CAMPAIGN = 'postpartum-meal-prep'

const features = [
  {
    icon: Heart,
    title: 'Nutrient-Dense Recovery Menus',
    description: 'Menus designed around the postpartum period: iron-rich proteins, healthy fats, complex carbohydrates, hydration-supporting dishes, and ingredients traditionally associated with recovery across cultures.',
  },
  {
    icon: Leaf,
    title: 'Culturally Appropriate Options',
    description: 'We understand that postpartum nutrition is deeply cultural. Chefs on our team can prepare Arabic, South Asian, East Asian, Mediterranean, and Western recovery-style meals adapted to your family\'s traditions.',
  },
  {
    icon: Moon,
    title: 'Flexible As Needs Change',
    description: 'Recovery is not linear. Pause, intensify, or shift the menu as your energy, appetite, and schedule evolve. Weekly check-ins let us adjust portion sizes and flavour profiles.',
  },
  {
    icon: Baby,
    title: 'Breastfeeding-Friendly Choices',
    description: 'We prioritise whole-food ingredients, limit common irritants on request, and can coordinate with your lactation consultant or nutritionist if you share their guidance.',
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
    a: 'Most families begin in the first or second week after birth, but you can book in advance during pregnancy and activate the service when you are ready. We also support families through the extended "fourth trimester."',
  },
  {
    q: 'Do you provide medical or clinical nutrition advice?',
    a: 'No. Chefs on our team prepare wholesome, recovery-focused meals based on your preferences and any guidance you provide from your healthcare provider. For clinical conditions, we recommend consulting a licensed nutritionist or doctor.',
  },
  {
    q: 'Can meals be adapted for the whole family?',
    a: 'Yes. We can prepare larger portions or dual menus so that partners, older children, and visiting family can eat well alongside the new mother.',
  },
  {
    q: 'How often does the chef visit?',
    a: 'Most postpartum clients choose 1–2 visits per week to prepare 3–5 days of meals. Frequency is adjusted to your household size, storage space, and appetite.',
  },
  {
    q: 'What if I have allergies or food aversions?',
    a: 'We collect detailed dietary information before the first visit and adjust every menu accordingly. Aversions, allergies, and religious dietary requirements are all accommodated.',
  },
]

const relatedServices = [
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Recurring private chef visits for busy households who want fresh meals without daily cooking.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Wellness Meal Prep',
    description: 'Nutritionist-aligned, macro-calculated meals for health and fitness goals.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/wellness-meal-prep-dubai',
  },
  {
    title: 'Allergy-Safe Catering',
    description: 'Rigorous allergen protocols for households with dietary restrictions.',
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

export default function PostpartumMealPrep() {
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
        title="Postpartum Meal Prep Dubai | Recovery"
        description="Postpartum meal prep in Dubai by a private chef. Nutrient-dense, culturally appropriate recovery meals for new mothers during the fourth trimester."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/weekly-meal-prep-dubai-hero.webp"
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
            Postpartum Meal Prep for New Mothers
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ppm-hero-sub">
            Nourishing, culturally sensitive recovery meals prepared in your own kitchen — so you can focus on your baby while eating well through the fourth trimester.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 ppm-hero-cta">Plan My Postpartum Meals</Link>
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
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            NEW MOTHER NUTRITION
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Recovery Meals Made With Care
          </h2>
          <div className="ppm-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The weeks after birth are demanding. Sleep is scarce, routines are new, and nutrition often becomes an afterthought — yet it is precisely when the body needs steady, wholesome support. Tell us about your household and we will bring you a vetted chef who prepares postpartum recovery meals in your own kitchen, usually within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A private chef visits your home, prepares multiple days of recovery-focused meals, portions them for easy reheating, and leaves your kitchen clean. If your needs continue beyond the fourth trimester, our <Link to="/weekly-meal-prep-dubai" className="text-gold hover:underline">weekly meal prep</Link> service can keep your household fed without the daily effort.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              We do not provide medical advice, but we do listen carefully to your preferences, your doctor or nutritionist&apos;s guidance, and the traditions that matter to your family. For ongoing health and fitness goals, our <Link to="/wellness-meal-prep-dubai" className="text-gold hover:underline">wellness meal prep</Link> programmes offer nutritionist-aligned support.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Features ═══════════════ */}
      <section className="ppm-features bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOW WE SUPPORT YOU
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What Makes Our Service Different
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU PHILOSOPHY
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built Around Recovery
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
              <strong className="text-white">Pricing guide:</strong> Postpartum meal prep starts from AED 1,500 per week. Final quote tailored to your household based on visit frequency, portion count, and menu complexity — we provide a fixed quote after a brief consultation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Postpartum Meal Prep Questions
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
        <div className="container-custom text-center ppm-cta opacity-0 translate-y-8">
          <Baby size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Nourish the New Mother
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Book a postpartum meal prep consultation and give yourself or a loved one the gift of warm, recovery-focused meals at home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Plan My Postpartum Meals</Link>
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

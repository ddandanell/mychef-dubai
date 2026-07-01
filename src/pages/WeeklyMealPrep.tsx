import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Calendar,
  ShoppingBag,
  ChefHat,
  Package,
  Sparkles,
  Users,
  Clock,
  Leaf,
  HeartPulse,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a proposal for weekly meal prep in Dubai (via mychef.ae/weekly-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/weekly-meal-prep-dubai'
const CAMPAIGN = 'weekly-meal-prep-dubai'

const howItWorks = [
  {
    icon: Calendar,
    step: '01',
    title: 'Free Consultation',
    description: 'We discuss your household size, dietary goals, preferred cuisines, and any allergies or restrictions. This can happen by WhatsApp, call, or a brief video chat.',
  },
  {
    icon: ChefHat,
    step: '02',
    title: 'Menu Plan',
    description: 'Your chef designs a rotating weekly menu that balances flavour, nutrition, and seasonality. You approve every dish before we shop.',
  },
  {
    icon: ShoppingBag,
    step: '03',
    title: 'Shop & Prep',
    description: 'The chef sources fresh, premium ingredients and arrives at your home for a scheduled prep session — typically once or twice per week depending on your plan.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Package & Label',
    description: 'Meals are portioned into premium containers, clearly labelled with contents, date, and reheating instructions. Everything is ready to enjoy.',
  },
  {
    icon: Sparkles,
    step: '05',
    title: 'Clean Up',
    description: 'Before leaving, the chef wipes down surfaces, packs away food, and leaves your kitchen exactly as it was — except now it is full of fresh meals.',
  },
]

const tiers = [
  {
    name: 'Weekly Prep Lite',
    guests: '2–3 people',
    sessions: '2 prep sessions / week',
    price: '1,898',
    unit: '/ week',
    highlight: '~949 AED per session',
    features: [
      'Bespoke menu plan for 2–3 guests',
      '2 chef-led prep sessions per week',
      'Fresh portioned meals for lunches and dinners',
      'Allergen handling and dietary notes',
      'Container labelling and reheating guide',
      'Kitchen cleanup after every session',
    ],
  },
  {
    name: 'Weekly Prep Standard',
    guests: '4–6 people',
    sessions: '2 prep sessions / week',
    price: '2,698',
    unit: '/ week',
    highlight: '~899 AED per session',
    features: [
      'Bespoke menu plan for 4–6 guests',
      '2 chef-led prep sessions per week',
      'Greater variety and larger batch sizes',
      'Halal, vegetarian, and allergy options available',
      'Rotating menus so meals never feel repetitive',
      'Kitchen cleanup after every session',
    ],
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Hours Back Every Week',
    description: 'No more grocery runs, recipe planning, or kitchen clean-up. A private chef handles the full workflow so you can reclaim your evenings.',
  },
  {
    icon: HeartPulse,
    title: 'Health Goals, Maintained',
    description: 'Portion-controlled, balanced meals designed around your macros, fitness targets, or medical dietary needs.',
  },
  {
    icon: Leaf,
    title: 'Fresh, Not Frozen',
    description: 'Dishes are prepared from scratch with premium ingredients sourced for that week — not pulled from a freezer.',
  },
  {
    icon: Users,
    title: 'Halal & Allergen Aware',
    description: 'We source halal-certified proteins and follow strict allergen protocols, with clear labelling on every container.',
  },
  {
    icon: Sparkles,
    title: 'Rotating Menus',
    description: 'Indian one week, Mediterranean the next, Asian fusion after that. Your chef keeps the weekly line-up exciting.',
  },
  {
    icon: Check,
    title: 'Full Kitchen Cleanup',
    description: 'Prep, cooking, packaging, and clear-down are all included. You simply open the fridge and choose what to eat.',
  },
]

const forWhom = [
  {
    title: 'Busy Families',
    description: 'Juggling school runs, work, and after-school activities is easier when dinner is already made and waiting in the fridge.',
  },
  {
    title: 'Professionals & Executives',
    description: 'Long hours and back-to-back meetings make home cooking hard. Weekly prep ensures you eat well without sacrificing time.',
  },
  {
    title: 'Athletes & Fitness-Focused Households',
    description: 'High-protein, macro-counted meals designed to support training goals — whether you are preparing for an event or maintaining a routine.',
  },
  {
    title: 'Dietary Restrictions',
    description: 'Gluten-free, dairy-free, nut-free, keto, low-sodium, diabetic-friendly — we design menus that work around your needs, not despite them.',
  },
]

const galleryImages = [
  { src: '/menu-seafood.webp', alt: 'Fresh portioned meals prepared by a private chef in Dubai' },
  { src: '/menu-meat.webp', alt: 'Premium protein prepared for weekly meal prep Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Healthy appetiser-style dishes for weekly meal prep' },
  { src: '/service-villa.webp', alt: 'Private chef preparing meals in a Dubai villa kitchen' },
  { src: '/menu-canapes.webp', alt: 'Fresh ingredients ready for portioned weekly prep' },
  { src: '/menu-dessert.webp', alt: 'Balanced treats prepared as part of weekly meal plans' },
]

const faqs = [
  {
    q: 'What is included in weekly meal prep?',
    a: 'Weekly meal prep includes a bespoke menu consultation, grocery shopping, in-home cooking and prep, portioning into containers, labelling, and full kitchen cleanup. You receive fresh meals ready to refrigerate and reheat.',
  },
  {
    q: 'How much does weekly meal prep cost in Dubai?',
    a: 'Our starting prices are AED 1,898 per week for the Weekly Prep Lite plan (2–3 people, 2 sessions) and AED 2,698 per week for the Weekly Prep Standard plan (4–6 people, 2 sessions). Final pricing depends on menu complexity, dietary requirements, and frequency.',
  },
  {
    q: 'Can I choose the cuisines each week?',
    a: 'Yes. Menus are fully bespoke and can rotate across Indian, Arabic, Mediterranean, Italian, Asian, healthy, and other cuisines based on your preferences.',
  },
  {
    q: 'Is the food halal and suitable for allergies?',
    a: 'We source halal-certified proteins and follow strict allergen protocols. Every container is clearly labelled so you know exactly what is inside.',
  },
  {
    q: 'Do I need to be home during the prep session?',
    a: 'Not necessarily. Many clients provide entry instructions or are home for the first session. We can agree on a routine that works for your household.',
  },
  {
    q: 'How far in advance should I book weekly meal prep?',
    a: 'We recommend booking at least one week in advance so the chef can plan menus and source ingredients. For recurring clients, schedules are agreed monthly.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef Dubai',
    description: 'Fully bespoke private chef dinners and experiences in your home or villa.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Healthy Catering Dubai',
    description: 'Nutrition-focused catering with balanced menus and dietary flexibility.',
    image: '/menu-seafood.webp',
    link: '/healthy-catering-dubai',
  },
  {
    title: 'Corporate Meal Prep',
    description: 'Recurring portioned meal programmes for teams and workplaces across Dubai.',
    image: '/service-corporate.webp',
    link: '/corporate-meal-prep-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Weekly Meal Prep Dubai',
      'Private chef weekly meal prep service in Dubai. Fresh, portioned meals prepared in your home with halal options and dietary customisation.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Weekly Meal Prep Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function WeeklyMealPrep() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.wmp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.wmp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.wmp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.wmp-intro-text', {
      scrollTrigger: { trigger: '.wmp-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.wmp-step-item', {
      scrollTrigger: { trigger: '.wmp-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.wmp-tier-card', {
      scrollTrigger: { trigger: '.wmp-tiers', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.wmp-benefit-card', {
      scrollTrigger: { trigger: '.wmp-benefits', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wmp-forwhom-item', {
      scrollTrigger: { trigger: '.wmp-forwhom-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wmp-gallery-img', {
      scrollTrigger: { trigger: '.wmp-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.wmp-faq-item', {
      scrollTrigger: { trigger: '.wmp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wmp-rel-card', {
      scrollTrigger: { trigger: '.wmp-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wmp-cta', {
      scrollTrigger: { trigger: '.wmp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Weekly Meal Prep Dubai | Private Chef Meal Prep"
        description="Weekly meal prep in Dubai by a private chef. Fresh, portioned meals prepared in your home. Starting from AED 1,898/week. Halal, healthy, and fully customised."
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
          <nav className="mb-6 opacity-0 translate-y-4 wmp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Weekly Meal Prep Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 wmp-hero-h1">
            Weekly Meal Prep by a Private Chef in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 wmp-hero-sub">
            Fresh, portioned meals prepared in your own kitchen each week — so you can eat well, save time, and skip the takeout cycle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 wmp-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 wmp-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            FRESH MEALS, MADE FOR YOUR WEEK
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Skip the Takeout. Reclaim Your Evenings.
          </h2>
          <div className="wmp-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Life in Dubai moves fast. Between work, family, exercise, and social commitments, finding time to plan, shop, cook, and clean up every day is a challenge most busy households know too well. Takeout feels convenient until it becomes repetitive — and expensive. At myCHEF Dubai, our weekly meal prep service puts a private chef in your kitchen once or twice a week to prepare fresh, portioned meals designed around your tastes, your schedule, and your health goals.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Unlike mass-market meal plans, this is fully bespoke. Your chef consults with you, designs a rotating menu, sources premium ingredients, cooks in your home, packages everything cleanly, and leaves your kitchen spotless. The result is a fridge full of restaurant-quality meals that simply need reheating — whether you are feeding a family, an athlete, or a household with specific dietary needs.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              If you are comparing options, you may also be interested in our <Link to="/corporate-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate meal prep programmes</Link> or the full <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef experience in Dubai</Link>. For menu inspiration, explore our <Link to="/menus" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">bespoke menus</Link>.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mt-5">
              Deciding between weekly prep and a full-time chef? Read our comparison of <Link to="/blog/weekly-meal-prep-vs-full-time-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep vs full-time chef in Dubai</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: How It Works ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              THE PROCESS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              How Weekly Meal Prep Works
            </h2>
          </div>

          <div className="wmp-steps space-y-8">
            {howItWorks.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="wmp-step-item flex gap-6 md:gap-8 opacity-0 translate-y-8">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-black text-gold">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-inter text-caption text-gold uppercase tracking-wider">Step {item.step}</span>
                    </div>
                    <h3 className="font-playfair text-h3 text-black mb-2">{item.title}</h3>
                    <p className="font-inter text-body text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Tiers ═══════════════ */}
      <section className="wmp-tiers bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              STARTING PRICES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Weekly Meal Prep Plans
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Starting prices for recurring weekly service. Final quotes depend on menu selection, dietary needs, ingredients, and frequency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {tiers.map((tier) => (
              <div key={tier.name} className="wmp-tier-card bg-charcoal p-8 opacity-0 translate-y-10 flex flex-col">
                <h3 className="font-playfair text-h3 text-white mb-2">{tier.name}</h3>
                <p className="font-inter text-body-sm text-gray-400 mb-5">{tier.guests} · {tier.sessions}</p>
                <div className="mb-5">
                  <span className="font-inter text-caption text-gray-500 uppercase tracking-wider">from</span>
                  <p className="font-playfair text-4xl text-gold">
                    AED {tier.price}
                    <span className="font-inter text-base text-gray-500 ml-1">{tier.unit}</span>
                  </p>
                  <p className="font-inter text-body-sm text-gold mt-1">{tier.highlight}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 font-inter text-body-sm text-gray-400">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=pricing_card&utm_campaign=${CAMPAIGN}`} className="btn-primary text-center w-full">
                  Request Custom Quote
                </Link>
              </div>
            ))}
          </div>

          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[700px] mx-auto mt-10">
            Prices are indicative starting points. Final quotes depend on guest count, menu selection, ingredients, service level, and any special dietary requirements.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: Benefits ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHY PRIVATE CHEF MEAL PREP
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Benefits of Weekly Meal Prep
            </h2>
          </div>

          <div className="wmp-benefits grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="wmp-benefit-card bg-cream p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{b.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: Who It Is For ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MADE FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Who Weekly Meal Prep Is For
            </h2>
          </div>

          <div className="wmp-forwhom-grid grid md:grid-cols-2 gap-6">
            {forWhom.map((item, i) => (
              <div key={i} className="wmp-forwhom-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: Gallery ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            A Taste of Our Meal Prep
          </h2>

          <div className="wmp-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="wmp-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Weekly Meal Prep Questions
          </h2>

          <div className="wmp-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="wmp-faq-item border border-gray-200 opacity-0 translate-y-5">
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="wmp-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="wmp-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center wmp-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Start Your Weekly Meal Prep Plan
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your household, dietary needs, and preferred cuisines, and we will design a private chef meal prep plan that fits your week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Proposal</Link>
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

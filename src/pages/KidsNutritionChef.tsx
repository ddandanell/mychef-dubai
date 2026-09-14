// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /kids-nutrition-chef-dubai
//     primary:     "kids meal prep dubai"
//     subkeywords: "kids meal prep dubai price" · "healthy kids meals delivery dubai" · "kids meal plan dubai" · "emirates kids meal menu" · "chef meal prep company" · "dubai food prep service" · "meal prep for 5 year old" · "practical meal prep dubai" · "meal prep dubai delivery" · "meal prep dubai healthy" · "coles meal prep dubai" · "how to meal prep for school"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
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

const inclusions = [
  {
    icon: Apple,
    title: 'Food children will actually eat',
    description: 'Textures and flavours this child already accepts, with new dishes added slowly. Meal prep for 5 year old households is written into the Food Profile, not guessed.',
  },
  {
    icon: ShieldCheck,
    title: 'Allergies labelled, not hoped',
    description: 'Allergen notes in the profile, clear labels on every container, and separate boards when the brief requires it. We do not claim a reaction can never happen.',
  },
  {
    icon: HeartPulse,
    title: 'Portions for this age',
    description: 'Vegetables, grains and protein in portions that match the child, not an adult plate halved. A kids meal plan Dubai week is this house’s version of healthy.',
  },
  {
    icon: CalendarDays,
    title: 'School boxes or family pots',
    description: 'How to meal prep for school sits in the same four-hour visit as family dinners. Practical meal prep Dubai for children is still Food Prep, AED 900.',
  },
]

const packages = [
  {
    name: 'Once a week',
    price: 'AED 900 a visit',
    description: 'One Food Prep session. School boxes, family pots, or both, inside four hours.',
    features: [
      'Four hours in your kitchen',
      'Menu from the Food Profile',
      'Allergies and refusals labelled',
      'Containers with reheating notes',
      'Kitchen left as found',
    ],
  },
  {
    name: 'Once a week, monthly',
    price: 'AED 3,600 a month',
    description: 'Four Food Prep visits. The usual standing plan for a kids meal plan Dubai household.',
    features: [
      'Four visits in four weeks',
      'Adult and child portions as briefed',
      'Halal sourcing by default',
      'Menu reviewed with parents',
      'Same chef, backup from the profile',
    ],
    highlighted: true,
  },
  {
    name: 'Twice a week',
    price: 'AED 7,200 a month',
    description: 'Eight Food Prep visits. When school boxes and family dinners both need covering.',
    features: [
      'Two four-hour visits a week',
      'Groceries at actual receipts',
      'VAT at 5% on the service',
      'Up to eight people in the chef price',
      'No invented per-lunch tariff',
    ],
  },
]

const faqs = [
  {
    q: 'Can menus accommodate allergies and intolerances?',
    a: 'Yes. Allergies, intolerances and religious requirements sit in the Food Profile. Containers are labelled. We do not claim a reaction can never happen.',
  },
  {
    q: 'Do you handle picky eaters?',
    a: 'We start with what they already eat, then add new dishes slowly. Likes, refusals and textures go in the profile and are updated each week.',
  },
  {
    q: 'What ages does this cover?',
    a: 'Toddlers through teenagers. Portions follow the child, not an adult plate. Meal prep for 5 year old households is a common brief on this page.',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal sourcing is the default. Vegetarian, vegan, dairy-free and gluten-free are cooked when they are in the profile.',
  },
  {
    q: 'Can parents review menus weekly?',
    a: 'Yes. You see the week before the visit. Changes land before the chef shops.',
  },
  {
    q: 'Is this meal prep Dubai delivery from a factory?',
    a: 'No. Dubai food prep service on this page is a chef in your kitchen. People search coles meal prep Dubai and chef meal prep company for a tray. This is four hours, AED 900, groceries at receipts.',
  },
]

const relatedServices = [
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'The same Food Prep job when the brief is the whole household, not school boxes.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Allergy-Safe Catering Dubai',
    description: 'One-night catering with allergen notes. Not a standing children’s week.',
    image: '/images/gluten-free-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Kids Meal Prep Dubai',
      'Kids meal prep Dubai: a private chef cooks a week of children’s food in your kitchen. Food Prep, four hours, AED 900. Groceries at receipts. VAT 5%.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Kids Meal Prep Dubai', path: CANONICAL_PATH },
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
        description="Kids meal prep Dubai by a private chef. Balanced, child-friendly meals designed around allergies, growth and family routines. Get a quote."
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
              <li><span className="text-gold">Kids Meal Prep Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 kn-hero-h1">
            Kids Meal Prep Dubai: food children will actually eat
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 kn-hero-sub">
            Kids meal prep Dubai is four hours in your kitchen, AED 900 a visit. School boxes, family pots, allergies labelled. Groceries at receipts. VAT 5%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 kn-hero-cta">Plan My Kids' Nutrition Menu</Link>
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
          <SectionLabel align="center">THE FOOD PREP JOB, FOR CHILDREN</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Kids meal prep Dubai, cooked in your kitchen
          </h2>
          <div className="kn-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Kids meal prep Dubai is not a factory tray and not an invented job title. It is the Food Prep visit: four hours, AED 900, in your kitchen. Healthy kids meals delivery Dubai, on this page, means packed here, labelled, and left in your fridge.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Kids meal prep Dubai price is the visit, not a per-lunch card. An emirates kids meal menu is whatever this child will eat. Meal prep Dubai healthy, for us, is the Food Profile: refusals, allergies, school times. Meal prep Dubai delivery is not a van from a production kitchen.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              For the whole household without a children’s brief, see <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>. For a birthday, that is catering: <Link to="/birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">birthday catering</Link>. Allergen-heavy nights: <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">allergy-safe catering</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="kn-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT THE VISIT COVERS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Written for this child, not a generic box
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
            <SectionLabel align="center" tone="dark">THE SAME FOUR HOURS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Once a week, or twice
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
            Questions before a children’s Food Prep booking
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
        <div className="container-custom text-center kn-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Tell us what they will eat
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Ages, allergies, refusals, and school times. Kids meal prep Dubai is AED 900 a visit. Groceries at receipts. VAT at 5%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Plan My Kids' Nutrition Menu</Link>
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

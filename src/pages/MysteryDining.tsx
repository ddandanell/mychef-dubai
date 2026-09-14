// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /mystery-dining-dubai
//     primary:     "surprise dinner experience dubai"
//     subkeywords: "surprise dinner experience dubai price" · "best surprise dining experience dubai" · "surprise dinner package dubai" · "surprise dinner for two dubai" · "best dinner experience in dubai" · "mystery dinner dubai" · "private dinner experience dubai" · "surprise cake delivery in dubai" · "fine dining experience dubai" · "unique dining experience dubai" · "dinner experience for couples dubai" · "chef dining experience dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ClipboardList,
  Sparkles,
  Leaf,
  ChefHat,
  Phone,
  ArrowRight,
  Check,
  Sparkles as SparklesIcon,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a mystery dining experience (via mychef.ae/mystery-dining-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/mystery-dining-dubai'

const inclusions = [
  {
    icon: ClipboardList,
    title: 'The boundaries first',
    description: 'Favourite cuisines, textures, spice, and what must stay off the plate. The chef writes the night inside those lines.',
  },
  {
    icon: Sparkles,
    title: 'Courses revealed at the table',
    description: 'A surprise dinner for two Dubai, or a small table, still gets a menu. Guests see each course when it lands, not before.',
  },
  {
    icon: Leaf,
    title: 'Dietary notes stay secret from the table, not from the chef',
    description: 'Allergies, intolerances, halal, vegan, vegetarian and religious requirements are built in. The surprise is the dish, not the risk.',
  },
  {
    icon: ChefHat,
    title: 'One night, then clear-down',
    description: 'Chef, ingredients, cooking, plating, service and the kitchen left as found. This is catering, not a standing household chef.',
  },
]

const packages = [
  {
    name: 'Surprise dinner for two',
    price: 'From AED 1,200',
    description: 'Date Night for two, with the courses held back until they are served. Home, apartment or villa.',
    features: [
      'Chef for two guests',
      'Three-course menu, revealed at the table',
      'Boundaries collected first',
      'Dietary notes built in',
      'Table service and clear-down',
    ],
  },
  {
    name: 'Surprise dinner for a small table',
    price: 'From AED 700 a person',
    description: 'Chef-led plated dining, courses held back. Two guests minimum. The quote confirms the night.',
    features: [
      'Plated service from AED 700 a person',
      'Courses revealed as they land',
      'Dietary notes for every guest',
      'VAT at 5% on the service',
      'Kitchen left as found',
    ],
    highlighted: true,
  },
  {
    name: 'Longer tasting',
    price: 'Quoted',
    description: 'More courses, still chef-led plated. Pairing and pacing are in the written proposal.',
    features: [
      'Chef-led plated dining',
      'Course notes if you want them',
      'Mocktail or wine pairing quoted',
      'Printed menu at the end, if you want it',
      'One night. Not a standing chef.',
    ],
  },
]

const faqs = [
  {
    q: 'How does a surprise dinner experience Dubai night run?',
    a: 'You send likes, dislikes and dietary notes. The chef writes the menu inside those lines. Guests see each course when it is served. This is one-night catering, not a standing household chef.',
  },
  {
    q: 'Can I avoid certain ingredients?',
    a: 'Yes. Dislikes, allergies, intolerances and religious requirements are collected first and avoided. The surprise is the dish, not the risk.',
  },
  {
    q: 'How many courses are included?',
    a: 'Date Night for two is three courses, AED 1,200. A longer plated night is quoted from AED 700 a person. Course count is in the written proposal.',
  },
  {
    q: 'Is this for a date, a birthday, or a small table?',
    a: 'Yes. A dinner experience for couples Dubai, a birthday, or a small celebration all fit, as long as it is one night. A standing week belongs on the household pages.',
  },
  {
    q: 'Can children sit at the table?',
    a: 'Yes, with notice. Portions, spice and ingredients are adapted. The boundaries still go in before the chef cooks.',
  },
]

const relatedServices = [
  {
    title: 'Romantic Dinner Dubai',
    description: 'Dinner for two when you want to choose the dishes, not hold them back.',
    image: '/images/romantic-dinner-dubai-hero.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'A standing household chef. A surprise night is catering, and stays here.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Surprise Dinner Experience Dubai',
      'Surprise dinner experience Dubai: a private chef writes a multi-course menu around your boundaries and reveals it at the table. One night catering.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Surprise Dinner Experience Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function MysteryDining() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.md-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.md-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.md-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.md-intro-text', {
      scrollTrigger: { trigger: '.md-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.md-inclusion-card', {
      scrollTrigger: { trigger: '.md-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.md-package-card', {
      scrollTrigger: { trigger: '.md-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.md-faq-item', {
      scrollTrigger: { trigger: '.md-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.md-rel-card', {
      scrollTrigger: { trigger: '.md-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.md-cta', {
      scrollTrigger: { trigger: '.md-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Surprise Dinner Experience Dubai | From AED 1,200 | myCHEF"
        description="Surprise dinner experience Dubai: courses held back until they are served. Date Night AED 1,200 for two, or plated from AED 700 a person. VAT 5%."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/tasting-menu-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/tasting-menu-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 md-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Surprise dinner</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 md-hero-h1">
            Surprise Dinner Experience Dubai: courses revealed at the table
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 md-hero-sub">
            You send the boundaries. The chef writes the night. Guests see each course when it lands. Date Night AED 1,200 for two. One night, not a standing chef.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 md-hero-cta">Plan My Mystery Dinner</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 md-hero-cta"
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
          <SectionLabel align="center">ONE NIGHT, COURSES HELD BACK</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Surprise dinner experience Dubai is catering, with the menu in the chef’s pocket
          </h2>
          <div className="md-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A surprise dinner package Dubai night is chef-led plated dining, with the dishes held until they are served. Best surprise dining experience Dubai, for us, means a named chef, an itemised quote, and boundaries collected first. Surprise dinner experience Dubai price starts at Date Night AED 1,200 for two, or AED 700 a person plated.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              People search mystery dinner Dubai for this format. Fine dining experience Dubai and unique dining experience Dubai are not slogans here: it is a private dinner experience Dubai in your kitchen, then clear-down. A chef dining experience Dubai with a surprise cake delivery in Dubai is quoted if you asked for it. VAT at 5%.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              See <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dinner for two</Link>, <Link to="/tasting-menu-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">tasting menus</Link>, or a standing <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">household chef</Link> if the cook should come back.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="md-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT THE NIGHT INCLUDES</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Boundaries first. Courses later.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="md-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="md-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">PUBLISHED STARTING POINTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Two, a small table, or a longer tasting
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`md-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-1">{pkg.price}</p>
                <p className="font-inter text-body-sm text-gray-400 mb-6 leading-relaxed">
                  Final quote tailored to your event.
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
                <Link
                  to={`/inquiry`}
                  className="block text-center w-full py-3 font-inter text-sm uppercase tracking-wider bg-gold text-black hover:bg-gold-light transition-colors"
                >
                  Get Your Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Questions before a surprise night
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

          <div className="md-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="md-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center md-cta opacity-0 translate-y-8">
          <SparklesIcon size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the boundaries. We will hold the menu.
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, guest count, likes, dislikes and allergies. Date Night is AED 1,200 for two. Plated dining starts from AED 700 a person. The figure is in writing first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Plan My Mystery Dinner</Link>
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

// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /chefs-table-dubai
//     primary:     "chefs table dubai"
//     subkeywords: "private chefs table dubai price" · "private chefs table price per person dubai" · "chefs table packages dubai" · "halal chefs table dubai" · "chef table experience dubai" · "famous private chefs" · "dessert table catering near me" · "grazing table prices"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  UtensilsCrossed,
  Eye,
  Wine,
  Users,
  Phone,
  ArrowRight,
  ChefHat,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import { CATERING_FORMAT_BY_ID } from '@/content/cateringPricing'

const PLATED = CATERING_FORMAT_BY_ID['plated-chef']

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a chef\'s table experience (via mychef.ae/chefs-table-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a chef's table experience in Dubai. Date: __ Guests: __ Area: __"

const CANONICAL_PATH = '/chefs-table-dubai'

const formats = [
  {
    icon: UtensilsCrossed,
    title: 'Omakase at home',
    description: 'A multi-course Japanese-style tasting when we can match a sushi chef. The menu follows what we can source for that date, not a printed list.',
  },
  {
    icon: Eye,
    title: 'Cooked in sight of the table',
    description: 'Guests watch courses being finished. The chef talks through the plate if you want that. It is still catering: setup, service and clear-down.',
  },
  {
    icon: Wine,
    title: 'Wine or mocktail pairing',
    description: 'Mocktails as standard. Wine only where the venue is licensed or the quotation says so. We do not assume a cellar.',
  },
  {
    icon: Users,
    title: '2–12 guests',
    description: 'This format is a small table. Larger rooms belong on plated catering or a package, not a stretched chef’s table.',
  },
]

const menus = [
  {
    title: 'Five-course chef’s table',
    price: `AED ${PLATED.typicalMin}–${PLATED.typicalMax} per person`,
    description: 'Starter, seafood or vegetable course, main, cheese or palate course, dessert. Chef-led plated dining, cooked at the table.',
  },
  {
    title: 'Seven-course omakase',
    price: `AED ${PLATED.typicalMin}–${PLATED.typicalMax} per person`,
    description: 'Japanese-style progression when a sushi chef is available for the date. Sourcing is confirmed in writing.',
  },
  {
    title: 'Nine-course tasting',
    price: `AED ${PLATED.typicalMin}–${PLATED.typicalMax} per person`,
    description: 'A longer sitting, more courses, more time. Staffing is sized to the table. Same plated floor as the Catering hub.',
  },
]

const faqs = [
  {
    q: 'What is a chef\'s table at home?',
    a: 'A small table, 2–12 guests, with the chef cooking courses in sight of you. Setup, service and clear-down are included. It is catering for one sitting, not a household chef plan.',
  },
  {
    q: 'How is this different from a standard private dinner?',
    a: 'The chef is in the room, not only in the kitchen. Courses are paced as a tasting. If you want a quiet plated dinner without narration, say so: that is still chef-led plated dining.',
  },
  {
    q: 'Can you do sushi omakase at home?',
    a: 'When we can match a sushi chef for that date, and when sourcing holds. We confirm both in writing. We will not invent an omakase we cannot staff.',
  },
  {
    q: 'How many guests can attend?',
    a: '2–12. Above that we point you at plated catering or a package rather than stretching this format.',
  },
  {
    q: 'Do I need a special kitchen?',
    a: 'No. The menu is written for the kitchen you have. An open plan helps guests see the work. It is not required.',
  },
]

const relatedServices = [
  {
    title: 'Sushi catering Dubai',
    description: 'Sushi and sashimi as catering, including when omakase is not the brief.',
    image: '/service-private-chef.webp',
    link: '/sushi-catering-dubai',
  },
  {
    title: 'Luxury dining',
    description: 'Tasting menus and celebration dinners. A chef’s table is one format inside that silo.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      "Chef's Table",
      'Chef\'s table and omakase experiences at home in Dubai: interactive multi-course tasting menus with chef narration for 2–12 guests.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Chef\'s Table Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function ChefsTable() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ct-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ct-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ct-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ct-intro-text', {
      scrollTrigger: { trigger: '.ct-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.ct-format-card', {
      scrollTrigger: { trigger: '.ct-formats', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ct-menu-item', {
      scrollTrigger: { trigger: '.ct-menus', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ct-faq-item', {
      scrollTrigger: { trigger: '.ct-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ct-rel-card', {
      scrollTrigger: { trigger: '.ct-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ct-cta', {
      scrollTrigger: { trigger: '.ct-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Chefs Table Dubai | myCHEF"
        description="Chefs table Dubai at home: a chef cooks a multi-course tasting or omakase in front of 2–12 guests. Chef-led plated dining at AED 700–950 per person, with setup and clear-down."
        canonicalPath={CANONICAL_PATH}
        ogImage="/service-luxury-dining.webp"
        hideSiteName
        schema={schema}
      />

      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-luxury-dining.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ct-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Chef's Table Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ct-hero-h1">
            Chefs Table Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ct-hero-sub">
            Chefs table Dubai is a 2–12 guest sitting at home: the chef cooks a tasting or omakase in front of you. Chef-led plated dining at AED {PLATED.typicalMin}–{PLATED.typicalMax} per person, with setup, service and clear-down.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 ct-hero-cta">Plan My Chef's Table</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ct-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">A SMALL TABLE, THE CHEF IN SIGHT</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            What chefs table Dubai is
          </h2>
          <div className="ct-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Chefs table Dubai is one cook, close enough to talk to, cooking courses for 2–12 guests in your kitchen. It is chef-led plated dining at AED {PLATED.typicalMin}–{PLATED.typicalMax} per person, the same floor as the Catering hub. It is not a household chef plan, and it is not a claim about famous private chefs.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The named chef, the menu and who buys the ingredients sit on the quote. Dietary notes go into the first draft. Wine pairing only where licensed. Omakase only when we can match a sushi chef for that date.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              A quieter tasting without narration lives on <Link to="/tasting-menu-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef tasting menu</Link>. Sushi platters without a chef’s table sit on <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">sushi catering</Link>. A standing household chef is <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="ct-formats bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              How the sitting is run
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="ct-format-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ct-menus bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">TASTING MENU OPTIONS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Course counts, same plated floor
            </h2>
          </div>

          <div className="space-y-4">
            {menus.map((item, i) => (
              <div key={i} className="ct-menu-item bg-charcoal p-8 opacity-0 translate-y-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-playfair text-h3 text-white mb-2">{item.title}</h3>
                    <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="font-playfair text-xl font-semibold text-gold">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-400 text-center mt-8">
            The written quote confirms the chef, the course count and 5% VAT. Date Night at AED 1,200 is a different package for two.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Chefs Table Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Experiences
          </h3>

          <div className="ct-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ct-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ct-cta opacity-0 translate-y-8">
          <ChefHat size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, the guest count and the kitchen
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Two to twelve guests, what you want cooked, and whether you want narration. We typically reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Plan My Chef's Table</Link>
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

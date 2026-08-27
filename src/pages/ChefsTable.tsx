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

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a chef\'s table experience (via mychef.ae/chefs-table-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a chef's table experience in Dubai. Date: __ Guests: __ Area: __"

const CANONICAL_PATH = '/chefs-table-dubai'

const formats = [
  {
    icon: UtensilsCrossed,
    title: 'Omakase at Home',
    description: 'A multi-course Japanese-style tasting where the chef designs the menu based on the freshest available ingredients and your preferences.',
  },
  {
    icon: Eye,
    title: 'Open-Kitchen Experience',
    description: 'Guests watch the chef prepare each course while hearing the story behind the ingredients, techniques, and plating decisions.',
  },
  {
    icon: Wine,
    title: 'Wine or Mocktail Pairing',
    description: 'Optional pairing coordination with sommelier-selected wines or craft mocktails matched to each course.',
  },
  {
    icon: Users,
    title: '2–12 Guests',
    description: 'Intimate enough for conversation, special enough for celebrations. The ideal format for food lovers who want more than a meal.',
  },
]

const menus = [
  {
    title: '5-Course Chef\'s Table',
    price: 'From AED 500 per person',
    description: 'Seasonal starter, seafood, main, cheese, and dessert with narration throughout.',
  },
  {
    title: '7-Course Omakase',
    price: 'From AED 700 per person',
    description: 'Japanese-inspired progression including sashimi, nigiri, hot dishes, and dessert. Sushi-chef dependent.',
  },
  {
    title: '9-Course Tasting Journey',
    price: 'From AED 900 per person',
    description: 'Fine-dining pacing with premium ingredients, wine pairing-style service, and dedicated front-of-house staff.'
  },
]

const faqs = [
  {
    q: 'What is a chef\'s table at home?',
    a: 'It is an intimate dining experience where the chef prepares a multi-course menu in front of or near the guests, explaining each course as it is served. It combines great food with theatre and storytelling.',
  },
  {
    q: 'How is this different from a standard private dinner?',
    a: 'The focus shifts from pure dining to interaction. The chef is part of the experience, not just behind the scenes. Courses are paced as a tasting journey, and presentation is more elaborate.',
  },
  {
    q: 'Can you do sushi omakase at home?',
    a: 'Yes, when matched with a chef who has specific sushi and sashimi experience. We will confirm availability and sourcing for the date you have in mind.',
  },
  {
    q: 'How many guests can attend?',
    a: 'Chef\'s table experiences work best for 2–12 guests. Larger groups can be accommodated with adjusted formats, but intimacy is part of the appeal.',
  },
  {
    q: 'Do I need a special kitchen?',
    a: 'No. The chef designs the menu around your kitchen layout. Some formats benefit from an open-plan kitchen where guests can watch, but it is not essential.',
  },
]

const relatedServices = [
  {
    title: 'Sushi Catering Dubai',
    description: 'Fresh sushi, sashimi, and Japanese-style platters for events and private dining.',
    image: '/service-private-chef.webp',
    link: '/sushi-catering-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Premium tasting menus and refined private dining for special occasions.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
  {
    title: 'Tasting Menu Dubai',
    description: 'Multi-course menus designed like a fine-dining restaurant experience at home.',
    image: '/images/luxury-dining-dubai-hero.webp',
    link: '/tasting-menu-dubai',
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
        title="Chef's Table Dubai | Omakase at Home | myCHEF"
        description="Chefs Table Dubai — Chef's Table in Dubai: a front-row seat to a chef cooking and plating before you. From AED 700–950 per person, vetted chefs, full service."
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
            Chef's Table Dubai: Omakase & Tasting Menus at Home
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ct-hero-sub">
            Interactive multi-course tasting experiences where the chef becomes part of the evening. For Dubai hosts who want dinner and entertainment in one.
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
          <SectionLabel align="center">INTERACTIVE DINING</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Dinner as Performance
          </h2>
          <div className="ct-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A chef's table turns dining into an experience. Guests do not just eat — they watch, learn, and engage as each course is prepared and presented. Tell us about your evening and we will bring you a vetted chef within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Grazing table prices, private chefs table Dubai price and private chefs table price per person Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people. Dessert table catering near me is covered across the whole city, because the chef travels to your address rather than the other way round. Chefs table packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. Halal chefs table Dubai are planned into the first draft of the menu rather than bolted on at the end. A chef table experience Dubai hosts remember is not about famous private chefs; it is about one cook, close enough to talk to, cooking the courses in front of you.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              We offer two main formats: the classic chef's table, where the chef narrates a multi-course tasting menu, and omakase, where the chef chooses the progression based on the freshest ingredients and your preferences. Both are intimate, memorable, and highly shareable.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">sushi catering</Link>, <Link to="/tasting-menu-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">tasting menus</Link>, <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury dining experiences</Link>, or <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef service</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="ct-formats bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Choose Your Experience
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
              Sample Chef's Table Menus
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
            Final quote tailored to your group size, menu preferences, and event date.
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
            Book Your Chef's Table Experience
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your group size, preferred cuisine, and any occasion. We will design a chef's table or omakase evening your guests will talk about for years.
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

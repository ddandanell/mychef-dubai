import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Globe,
  Pizza,
  Moon,
  Waves,
  Flame,
  Fish,
  Leaf,
  Carrot,
  Star,
  Heart,
  Apple,
  Phone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to explore catering by cuisine (via mychef.ae/cuisines-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const cuisines = [
  {
    slug: '/italian-catering-dubai',
    title: 'Italian Catering',
    description: 'Handmade pasta, risotto, wood-fired pizza and antipasti served family-style or as a plated dinner.',
    icon: Pizza,
  },
  {
    slug: '/arabic-catering-dubai',
    title: 'Arabic & Middle Eastern Catering',
    description: 'Mezze, grilled meats, rice dishes and warm hospitality for iftars, dinners and celebrations.',
    icon: Moon,
  },
  {
    slug: '/mediterranean-catering-dubai',
    title: 'Mediterranean Catering',
    description: 'Olive oil, fresh seafood, grilled vegetables and light, flavourful menus from the Mediterranean coast.',
    icon: Waves,
  },
  {
    slug: '/indian-catering-dubai',
    title: 'Indian Catering',
    description: 'Curries, tandoor, biryanis and regional specialities adjusted from mild to bold for every guest.',
    icon: Flame,
  },
  {
    slug: '/asian-catering-dubai',
    title: 'Asian Catering',
    description: 'Pan-Asian tasting menus, Thai, Chinese and flavour-forward shared plates for modern events.',
    icon: Globe,
  },
  {
    slug: '/sushi-catering-dubai',
    title: 'Sushi & Japanese Catering',
    description: 'Fresh sushi, sashimi and live rolling stations with chefs trained in Japanese technique.',
    icon: Fish,
  },
  {
    slug: '/bbq-catering-dubai',
    title: 'BBQ Catering',
    description: 'Smoked and grilled meats, seafood and plant-based options for villa gardens and yacht decks.',
    icon: Flame,
  },
  {
    slug: '/vegan-catering-dubai',
    title: 'Vegan Catering',
    description: 'Plant-based menus that are creative, satisfying and free from animal products.',
    icon: Leaf,
  },
  {
    slug: '/vegetarian-catering-dubai',
    title: 'Vegetarian Catering',
    description: 'Seasonal vegetarian dishes with global flavours, perfect for mixed groups and dietary variety.',
    icon: Carrot,
  },
  {
    slug: '/halal-catering-dubai',
    title: 'Halal Catering',
    description: 'Fully halal-compliant menus with verified sourcing for weddings, corporate and family events.',
    icon: Star,
  },
  {
    slug: '/healthy-catering-dubai',
    title: 'Healthy Catering',
    description: 'Balanced, nutrient-focused menus for wellness events, offices and health-conscious gatherings.',
    icon: Heart,
  },
]

const relatedServices = [
  { title: 'Catering Dubai', link: '/catering-dubai' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai' },
  { title: 'Event Catering', link: '/events' },
  { title: 'Corporate Catering', link: '/corporate' },
  { title: 'Yacht Catering', link: '/yachts' },
  { title: 'Villa Dining', link: '/villas-private-residences' },
]

const faqs = [
  {
    q: 'Can I mix cuisines at the same event?',
    a: 'Yes. Many hosts combine cuisines — for example, Arabic mezze to start, Italian mains and Asian-influenced desserts. Our chefs design a cohesive menu so the transitions feel natural.',
  },
  {
    q: 'Are the chefs experienced in the cuisine I choose?',
    a: 'We match your event with chefs who specialise in the cuisine you want, whether that is Italian pasta, Indian curries, Japanese sushi or halal barbecue.',
  },
  {
    q: 'Can dietary requirements be accommodated within each cuisine?',
    a: 'Absolutely. Every cuisine can be adapted for vegan, vegetarian, gluten-free, dairy-free, nut-free, halal or other requirements without losing its character.',
  },
  {
    q: 'What is the minimum group size for cuisine-specific catering?',
    a: 'Private chef experiences start from 2 guests. Larger catering formats work from around 10 guests, depending on the menu and service style.',
  },
  {
    q: 'Do you provide halal options across all cuisines?',
    a: 'Yes. Our halal catering page explains how we source and prepare halal-compliant ingredients, and this can be applied to Arabic, Mediterranean, Asian and many other cuisines.',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'Catering by Cuisine Dubai',
  url: 'https://mychef.ae/cuisines-dubai',
  description: 'Explore private chef and catering menus by cuisine in Dubai: Italian, Arabic, Mediterranean, Indian, Asian, sushi, BBQ, vegan, vegetarian, halal and healthy.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Cuisines', item: 'https://mychef.ae/cuisines-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, faqSchema, breadcrumbSchema],
}

export default function Cuisines() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cuisines-card', {
      scrollTrigger: { trigger: '.cuisines-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out',
    })

    gsap.to('.cuisines-faq-item', {
      scrollTrigger: { trigger: '.cuisines-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cuisines-services', {
      scrollTrigger: { trigger: '.cuisines-services', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.cuisines-cta', {
      scrollTrigger: { trigger: '.cuisines-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div ref={containerRef}>
      <SEO
        title="Catering by Cuisine Dubai | Private Chefs & Menus | myCHEF"
        description="Explore private chef and catering menus by cuisine in Dubai: Italian, Arabic, Mediterranean, Indian, Asian, sushi, BBQ, vegan, vegetarian, halal and healthy."
        canonicalPath="/cuisines-dubai"
        ogImage="/catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="World Flavours, Dubai Style"
        title="Catering by Cuisine in Dubai"
        subtitle="From Italian trattoria classics and Arabic mezze to Asian tasting menus and plant-forward dishes — choose a cuisine and we’ll match you with a private chef or catering team that cooks it authentically."
        image="/images/catering-dubai-hero.webp"
        imageAlt="International catering cuisines prepared by private chefs in Dubai"
        cta={{ label: 'Request a Custom Menu', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=cuisines' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Cuisines' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Cuisines Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Browse by Cuisine
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Choose a Cuisine for Your Dubai Event
            </h2>
          </div>

          <div className="cuisines-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cuisines.map((cuisine, i) => {
              const Icon = cuisine.icon
              return (
                <Link
                  key={i}
                  to={cuisine.slug}
                  className="cuisines-card group flex flex-col gap-5 bg-cream p-6 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-h3 text-black mb-2 group-hover:text-gold transition-colors">
                      {cuisine.title}
                    </h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-3">
                      {cuisine.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore Menu <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Services ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="cuisines-services opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white text-center mb-10">
              Explore Our Catering Services
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {relatedServices.map((svc, i) => (
                <Link
                  key={i}
                  to={svc.link}
                  className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FAQ
            </span>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Questions About Cuisine-Specific Catering
            </h2>
          </div>

          <div className="cuisines-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="cuisines-faq-item border border-gray-200 opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFaq === i}
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

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="cuisines-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <Apple size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Not Sure Which Cuisine Suits Your Event?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your occasion, guest preferences and dietary needs. We’ll recommend cuisines, chefs and a menu plan tailored to your Dubai event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=cuisines" className="btn-primary">
              Request My Custom Menu
            </Link>
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
          <p className="font-inter text-sm text-gray-400 mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}

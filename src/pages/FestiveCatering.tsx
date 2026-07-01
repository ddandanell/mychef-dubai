import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  TreePine,
  PartyPopper,
  Moon,
  Sun,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Coffee,
  Phone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss festive catering (via mychef.ae/festive-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const festivePages = [
  {
    slug: '/christmas-catering-dubai',
    title: 'Christmas Catering',
    description: 'Roasts, festive canapés, seasonal desserts and tailored menus for Christmas Eve, lunch or dinner at home.',
    icon: TreePine,
  },
  {
    slug: '/new-year-catering-dubai',
    title: 'New Year Catering',
    description: 'Elegant tasting menus, canapé receptions and late-night grazing for New Year celebrations across Dubai.',
    icon: PartyPopper,
  },
  {
    slug: '/ramadan-catering-dubai',
    title: 'Ramadan Catering',
    description: 'Iftar and Suhoor menus designed for fasting, sharing and family gatherings during the Holy Month.',
    icon: Moon,
  },
  {
    slug: '/iftar-catering-dubai',
    title: 'Iftar Catering',
    description: 'Date-to-dessert Iftar spreads with halal dishes, soups, salads, mains and sweets for groups of any size.',
    icon: Sun,
  },
  {
    slug: '/suhoor-catering-dubai',
    title: 'Suhoor Catering',
    description: 'Light, sustaining pre-dawn menus served in the early hours for Suhoor gatherings at home or in a villa.',
    icon: Coffee,
  },
  {
    slug: '/eid-catering-dubai',
    title: 'Eid Catering',
    description: 'Celebratory Eid feasts with Middle Eastern favourites, grills, rice dishes and sharing platters.',
    icon: Sparkles,
  },
  {
    slug: '/diwali-catering-dubai',
    title: 'Diwali Catering',
    description: 'Indian-inspired menus, sweets, festive platters and spice-forward dishes for Diwali parties in Dubai.',
    icon: Flame,
  },
  {
    slug: '/brunch-catering-dubai',
    title: 'Brunch Catering',
    description: 'Weekend brunch spreads with live stations, pastries, egg dishes and bottomless-style beverages.',
    icon: UtensilsCrossed,
  },
]

const relatedServices = [
  { title: 'Catering Dubai', link: '/catering-dubai' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai' },
  { title: 'Villa Dining', link: '/villas-private-residences' },
  { title: 'Yacht Catering', link: '/yachts' },
  { title: 'Corporate Catering', link: '/corporate' },
  { title: 'Party Catering', link: '/party-catering-dubai' },
  { title: 'Chinese New Year Catering', link: '/chinese-new-year-catering-dubai' },
  { title: 'Holi Catering', link: '/holi-catering-dubai' },
]

const faqs = [
  {
    q: 'Can festive menus be adapted for dietary requirements?',
    a: 'Yes. Every festive menu can be adjusted for halal, vegetarian, vegan, gluten-free, dairy-free, nut-free and other dietary needs while keeping the celebratory feel.',
  },
  {
    q: 'How far in advance should I book festive catering in Dubai?',
    a: 'Peak dates such as Christmas, New Year and Eid fill up quickly. We recommend booking 3–4 weeks ahead for large gatherings and at least 1–2 weeks ahead for smaller dinners.',
  },
  {
    q: 'Do you provide full service for festive events at home?',
    a: 'Yes. Our festive catering includes menu design, ingredients, chef and service staff, setup, service and clear-down. We can also provide bar service, rentals and table styling through partners.',
  },
  {
    q: 'Can I mix cuisines at a festive dinner?',
    a: 'Absolutely. Many hosts combine traditional festive dishes with international favourites — for example, roast turkey with Middle Eastern sides, or Indian starters with a European main.',
  },
  {
    q: 'Are Ramadan and Eid menus halal?',
    a: 'Yes. Our Ramadan, Iftar, Suhoor and Eid menus are prepared halal-compliant and designed for communal sharing and cultural timing.',
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
  name: 'Festive Catering Dubai',
  url: 'https://mychef.ae/festive-catering-dubai',
  description: 'Festive and seasonal catering in Dubai: Christmas, New Year, Ramadan, Iftar, Suhoor, Eid, Diwali and brunch celebrations.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Festive Catering Dubai', item: 'https://mychef.ae/festive-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, faqSchema, breadcrumbSchema],
}

export default function FestiveCatering() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.festive-card', {
      scrollTrigger: { trigger: '.festive-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.festive-faq-item', {
      scrollTrigger: { trigger: '.festive-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.festive-services', {
      scrollTrigger: { trigger: '.festive-services', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.festive-cta', {
      scrollTrigger: { trigger: '.festive-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div ref={containerRef}>
      <SEO
        title="Festive Catering Dubai | Christmas, Ramadan, Eid, NYE | myCHEF"
        description="Seasonal catering in Dubai for Christmas, New Year, Ramadan, Iftar, Suhoor, Eid, Diwali and brunch. Private chefs, bespoke menus and full service."
        canonicalPath="/festive-catering-dubai"
        ogImage="/images/festive-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Seasonal Celebrations"
        title="Festive Catering in Dubai"
        subtitle="From Christmas roasts and New Year tasting menus to Ramadan iftars, Eid feasts and Diwali celebrations — we design seasonal catering that matches the occasion."
        image="/images/festive-catering-dubai-hero.webp"
        imageAlt="Festive catering celebrations in Dubai"
        cta={{ label: 'Plan My Festive Event', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=festive-catering' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Festive Catering Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Festive Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Browse by Occasion
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Celebrate Every Season in Dubai
            </h2>
          </div>

          <div className="festive-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivePages.map((page, i) => {
              const Icon = page.icon
              return (
                <Link
                  key={i}
                  to={page.slug}
                  className="festive-card group flex flex-col gap-4 bg-cream p-6 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-h3 text-black mb-2 group-hover:text-gold transition-colors">
                      {page.title}
                    </h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
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
          <div className="festive-services opacity-0 translate-y-8">
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
              Planning Festive Catering in Dubai
            </h2>
          </div>

          <div className="festive-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="festive-faq-item border border-gray-200 opacity-0 translate-y-5">
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
      <section className="festive-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <PartyPopper size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Seasonal Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us the occasion, date and guest count. We’ll create a festive menu and service plan tailored to your Dubai celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=festive-catering" className="btn-primary">
              Request a Festive Menu
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

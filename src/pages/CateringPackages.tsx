import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, ArrowRight, ChevronRight, Check, Gift } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import StarterPackagesSection from '../sections/StarterPackagesSection'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn more about your catering packages (via mychef.ae/catering-packages-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const includedItems = [
  'Bespoke menu designed for your occasion and guest preferences',
  'Premium ingredient sourcing and preparation',
  'Professional chef and service staff',
  'Setup, service, and clear-down at your venue',
  'Dietary accommodation and menu adjustments',
]

const relatedLinks = [
  { title: 'Menus', link: '/menus', description: 'Browse sample dishes and menu inspiration.' },
  { title: 'Catering Dubai', link: '/catering-dubai', description: 'Full-service catering for events of any size.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Intimate dinners and personal chef experiences.' },
  { title: 'Catering Cost Calculator', link: '/catering-cost-calculator-dubai', description: 'Estimate your event catering budget.' },
]

const faqs = [
  {
    q: 'What is included in a myCHEF catering package?',
    a: 'Each package includes a bespoke menu, premium ingredients, a professional chef, service staff, setup, service during the event, and kitchen clear-down. Beverages, rentals, and VAT are itemised separately so you can see exactly what is included.',
  },
  {
    q: 'Can packages be customised for dietary requirements?',
    a: 'Yes. Every package can be adapted for halal, vegetarian, vegan, gluten-free, dairy-free, nut-free, keto and other dietary needs. We design the menu around your guests.',
  },
  {
    q: 'Are the prices fixed or starting points?',
    a: 'Prices are indicative starting points based on typical guest counts and menus. Final quotes depend on your exact guest count, menu choices, ingredients, venue, and service level.',
  },
  {
    q: 'Do you cater small groups or only large events?',
    a: 'We cater both. Our Date Night package is designed for two guests, while our Corporate Dinner and Full Experience packages scale to larger groups and events.',
  },
  {
    q: 'Can I add bar service, live stations or a grazing table?',
    a: 'Yes. Add-ons such as bar services, live cooking stations, grazing tables, dessert tables and bespoke cakes can be added to any package and are quoted separately.',
  },
  {
    q: 'How do I book a catering package in Dubai?',
    a: 'Choose a package that fits your occasion, then request a quote via our inquiry form or WhatsApp. We will confirm availability, refine the menu, and send a detailed proposal.',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Catering Packages Dubai',
  provider: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  areaServed: { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
  description: 'Indicative catering packages in Dubai for date nights, family dinners, birthdays, corporate events and weekly meal prep. Request a custom quote.',
  url: 'https://mychef.ae/catering-packages-dubai',
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Catering Packages Dubai', item: 'https://mychef.ae/catering-packages-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

export default function CateringPackages() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.packages-section', {
      scrollTrigger: { trigger: '.packages-included', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.packages-faq-item', {
      scrollTrigger: { trigger: '.packages-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.packages-cta', {
      scrollTrigger: { trigger: '.packages-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div ref={containerRef}>
      <SEO
        title="Catering Packages Dubai | Private Chef & Event Menus | myCHEF"
        description="Indicative catering packages in Dubai for date nights, family dinners, birthdays, corporate events and weekly meal prep. See what's included and request a quote."
        canonicalPath="/catering-packages-dubai"
        ogImage="/images/catering-packages-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Transparent Packages"
        title="Catering Packages in Dubai"
        subtitle="Starter packages for the most popular private chef and catering experiences. Every menu is tailored to your occasion, dietary needs and budget."
        image="/images/catering-packages-dubai-hero.webp"
        imageAlt="Catering packages and event menus in Dubai"
        cta={{ label: 'Request My Custom Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-packages' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Packages Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Packages ═══════════════ */}
      <StarterPackagesSection
        campaign="catering-packages-dubai"
        eyebrow="STARTER PACKAGES"
        title="Packages for Every Occasion"
        subtitle="Transparent starting prices for our most popular experiences. Final quotes are tailored to your guest count, menu and service level."
      />

      {/* ═══════════════ What's Included ═══════════════ */}
      <section className="packages-included bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="packages-section opacity-0 translate-y-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                What's Included
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                What You Get with Every Package
              </h2>
              <ul className="space-y-4">
                {includedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black p-8">
              <Gift size={40} className="text-gold mb-4" />
              <h3 className="font-playfair text-h3 text-white mb-3">
                Not Sure Which Package Fits?
              </h3>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                Tell us about your event and we will recommend the right package or design a fully bespoke menu that matches your vision and budget.
              </p>
              <Link
                to="/inquiry?utm_source=mychef.ae&utm_medium=inline_link&utm_campaign=catering-packages"
                className="inline-flex items-center gap-2 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                Get My Recommendation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Links ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="packages-section opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Explore More
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Related Planning Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="packages-section opacity-0 translate-y-8 group flex gap-4 bg-cream p-5 border border-gray-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-playfair text-h3 text-black group-hover:text-gold transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="packages-faq bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <div className="packages-section opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FAQ
            </span>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Questions About Our Catering Packages
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="packages-faq-item border border-gray-200 bg-white opacity-0 translate-y-5">
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
      <section className="packages-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <Gift size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Get a Tailored Catering Proposal
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Choose a starter package or ask us to design something bespoke. We reply within 2 hours during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-packages" className="btn-primary">
              Request My Custom Quote
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

import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Download, Phone, Globe, MapPin, Clock, Calendar, Utensils, Users } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { organizationSchema } from '../utils/schema'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I am reaching out from the press kit page')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const SLUG = 'press'

const quickFacts = [
  { icon: MapPin, label: 'Headquarters', value: 'Dubai, UAE' },
  { icon: Globe, label: 'Service Area', value: 'All Dubai neighbourhoods' },
  { icon: Utensils, label: 'Cuisines', value: 'Arabic, Mediterranean, Italian, Indian, Asian, sushi & more' },
  { icon: Users, label: 'Formats', value: 'Private chef, buffet, canapés, BBQ, live stations, grazing tables' },
  { icon: Clock, label: 'Availability', value: 'By appointment, 7 days a week' },
  { icon: Calendar, label: 'Events Served', value: 'Weddings, corporate events, yacht parties, villa dinners' },
]

const brandAssets = [
  { label: 'Primary logo (SVG)', href: '/logo.svg', type: 'SVG' },
  { label: 'Home hero image', href: '/images/home-hero.webp', type: 'WebP' },
  { label: 'Corporate catering hero', href: '/images/corporate-catering-dubai-hero.webp', type: 'WebP' },
  { label: 'Yacht catering hero', href: '/images/yacht-catering-dubai-hero.webp', type: 'WebP' },
  { label: 'Wedding catering hero', href: '/images/wedding-catering-dubai-hero.webp', type: 'WebP' },
  { label: 'Private chef hero', href: '/images/private-chef-dubai-hero.webp', type: 'WebP' },
]

const linkableResources = [
  {
    title: 'Dubai Event Catering Price Guide 2026',
    description: 'Indicative per-person pricing and budget planning for weddings, corporate events, and private parties in Dubai.',
    href: '/dubai-event-catering-price-guide-2026',
  },
  {
    title: 'Yacht Catering Checklist',
    description: 'A practical checklist for planning food and service on a Dubai yacht charter.',
    href: '/yacht-catering-checklist-dubai',
  },
  {
    title: 'Wedding Catering Menu Planning Guide',
    description: 'How to design a wedding menu, from canapés to late-night stations.',
    href: '/wedding-catering-menu-planning-dubai',
  },
  {
    title: 'Private Dining Guide',
    description: 'Everything hosts need to know about hiring a private chef in Dubai.',
    href: '/guide/private-dining-dubai',
  },
  {
    title: 'Dubai Food Trends Report 2026',
    description: 'Seasonal ingredients, formats, and expectations shaping Dubai event catering.',
    href: '/dubai-food-trends-report-2026',
  },
  {
    title: 'Private Chef Prices Dubai',
    description: 'Transparent starting prices and what affects the cost of a private chef.',
    href: '/private-chef-prices-dubai',
  },
]

const pressFaqs = [
  {
    q: 'Can I use myCHEF Dubai images in an article?',
    a: 'Yes, journalists and partners may use the images linked on this page with attribution and a link back to https://www.mychef.ae. For high-resolution originals, contact us via WhatsApp or email.',
  },
  {
    q: 'Who can I interview for a feature?',
    a: 'We can arrange interviews with the myCHEF Dubai founder, head of operations, or one of our vetted executive chefs. Reach out to info@mychef.id with your deadline.',
  },
  {
    q: 'Do you have a partnership or affiliate programme?',
    a: 'Yes. Villa agencies, yacht charter operators, event planners, and corporate concierges can partner with us. See /partner-with-us for details.',
  },
]

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Press & Media', item: `https://www.mychef.ae/${SLUG}` },
  ],
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: pressFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema(), breadcrumbSchema, faqSchema],
}

export default function Press() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.press-section', {
      scrollTrigger: { trigger: '.press-body', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.press-cta', {
      scrollTrigger: { trigger: '.press-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Press & Media | Brand Assets & Media Kit"
        description="Download the myCHEF Dubai press kit: brand facts, media assets, linkable resources, and contact details for journalists, bloggers, and partners."
        canonicalPath={`/${SLUG}`}
        ogImage="/images/case-studies-hero.webp"
        schema={schema}
      />

      <PageHero
        eyebrow="Press & Media"
        title="Press Kit & Media Resources"
        subtitle="Fact sheet, brand assets, and linkable resources for journalists, bloggers, directories, and partnership partners."
        image="/images/case-studies-hero.webp"
        imageAlt="myCHEF Dubai media kit and press resources"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Press & Media' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip />

      <div className="bg-white section-padding">
        <div className="press-body container-custom max-w-[1000px]">
          <section className="press-section opacity-0 translate-y-8 mb-16 text-center">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed max-w-[800px] mx-auto">
              myCHEF Dubai is a premium private chef and luxury catering service creating bespoke dining experiences across Dubai. Use the resources below for features, listings, partnerships, and citations.
            </p>
          </section>

          <section className="press-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Quick Facts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-cream p-6 text-center">
                  <fact.icon size={28} className="text-gold mx-auto mb-4" />
                  <p className="font-inter text-caption font-medium uppercase tracking-wider text-gray-400 mb-2">{fact.label}</p>
                  <p className="font-playfair text-h4 text-black">{fact.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="press-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Brand Assets</h2>
            <div className="bg-cream p-6 md:p-8">
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
                Use these assets when listing myCHEF Dubai in directories, articles, or partner pages. Please link back to <a href="https://www.mychef.ae" className="text-gold hover:underline">https://www.mychef.ae</a> and keep the NAP consistent.
              </p>
              <ul className="space-y-3">
                {brandAssets.map((asset) => (
                  <li key={asset.href}>
                    <a
                      href={asset.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-white hover:border-gold border border-transparent transition-colors duration-200"
                    >
                      <span className="font-inter text-body text-black">{asset.label}</span>
                      <span className="flex items-center gap-2 font-inter text-body-sm text-gold">
                        <Download size={16} />
                        {asset.type}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="press-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Linkable Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {linkableResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  className="group block bg-cream p-6 md:p-8 hover:bg-black transition-colors duration-300"
                >
                  <h3 className="font-playfair text-h4 text-black group-hover:text-white mb-2 transition-colors">{resource.title}</h3>
                  <p className="font-inter text-body text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors">{resource.description}</p>
                  <span className="inline-block mt-4 font-inter text-body-sm font-medium text-gold group-hover:text-gold-light transition-colors">Read more →</span>
                </a>
              ))}
            </div>
          </section>

          <section className="press-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">NAP Citation</h2>
            <div className="bg-black p-6 md:p-10 text-center">
              <p className="font-playfair text-h4 text-white mb-4">myCHEF Dubai</p>
              <p className="font-inter text-body text-gray-400 mb-2">Dubai, United Arab Emirates</p>
              <p className="font-inter text-body text-gray-400 mb-2">Phone / WhatsApp: +971 55 174 4849</p>
              <p className="font-inter text-body text-gray-400 mb-2">Email: info@mychef.id</p>
              <p className="font-inter text-body text-gray-400">Website: https://www.mychef.ae</p>
            </div>
          </section>

          <section className="press-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Press FAQs</h2>
            <div className="space-y-8 max-w-[800px] mx-auto">
              {pressFaqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-playfair text-h4 text-black mb-2">{f.q}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="press-cta opacity-0 translate-y-8 bg-black py-20">
        <div className="container-custom text-center max-w-[700px]">
          <h3 className="font-playfair text-fluid-h3 text-white mb-4">Media or Partnership Enquiry?</h3>
          <p className="font-inter text-body text-gray-400 mb-8">
            Reach out for interviews, high-resolution images, co-branded proposals, or press passes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/inquiry"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get a Tailored Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Phone size={18} />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 font-inter text-body-sm text-gray-500">
            Or email us at{' '}
            <a href="mailto:info@mychef.id?subject=Press%20enquiry%20-%20myCHEF%20Dubai" className="text-gold hover:text-gold-light underline underline-offset-4">
              info@mychef.id
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

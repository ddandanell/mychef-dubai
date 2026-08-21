import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Check, ChevronRight, Phone, ArrowRight } from 'lucide-react'
import SEO from './SEO'
import PageHero from './PageHero'
import TrustSignalStrip from './TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, offerSchema, serviceSchema } from '@/utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

const WHATSAPP_NUMBER = '971551744849'
const SITE_URL = 'https://www.mychef.ae'

interface FAQ {
  q: string
  a: string
}

interface RelatedService {
  title: string
  description: string
  image: string
  link: string
}

interface PackagePageTemplateProps {
  name: string
  seoTitle: string
  description: string
  canonicalPath: string
  ogImage: string
  headline: React.ReactNode
  eyebrow?: string
  subheadline?: string
  price: string
  guests: string
  perPerson: string
  included: string[]
  sampleMenu: string[]
  addOns: string[]
  faqs: FAQ[]
  relatedServices: RelatedService[]
  heroImage: string
  breadcrumbLabel: string
  campaign: string
  hideSiteName?: boolean
  ctaLabel?: string
}

export default function PackagePageTemplate({
  name,
  seoTitle,
  description,
  canonicalPath,
  ogImage,
  headline,
  eyebrow = 'STARTER PACKAGE',
  subheadline = 'A curated private chef experience designed around your occasion.',
  price,
  guests,
  perPerson,
  included,
  sampleMenu,
  addOns,
  faqs,
  relatedServices,
  heroImage,
  breadcrumbLabel,
  campaign,
  hideSiteName = false,
  ctaLabel = 'Request This Package',
}: PackagePageTemplateProps) {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  const PAGE_WHATSAPP_MESSAGE = `Hi myCHEF Dubai, I'd like to request a proposal for the ${name} package (via mychef.ae${canonicalPath})`
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PAGE_WHATSAPP_MESSAGE)}`

  const packageOfferSchema = offerSchema(
    `${name} Package — From AED ${price}`,
    `${description} Starting from AED ${price} for ${guests}. Final pricing depends on menu choices, ingredients, dietary requirements, and service level.`,
    price.replace(/,/g, ''),
    'AED',
    `${SITE_URL}${canonicalPath}`,
    'https://schema.org/InStock',
  )

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema(seoTitle, description, 'CateringService', 'Dubai'),
      packageOfferSchema,
      faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: breadcrumbLabel, path: canonicalPath },
      ]),
    ],
  }

  useGSAP(() => {
    if (!containerRef.current) return
    gsap.to('.pkg-fade', {
      scrollTrigger: { trigger: '.pkg-fade', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })
    gsap.to('.pkg-card', {
      scrollTrigger: { trigger: '.pkg-cards', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title={seoTitle}
        description={description}
        canonicalPath={canonicalPath}
        ogImage={ogImage}
        hideSiteName={hideSiteName}
        schema={schema}
      />

      <PageHero
        eyebrow={eyebrow}
        title={headline}
        subtitle={subheadline}
        image={heroImage}
        imageAlt={`${name} package in Dubai`}
        cta={{ label: ctaLabel, href: WHATSAPP_LINK, external: true }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: breadcrumbLabel }]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      {/* Package Overview */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="pkg-fade opacity-0 translate-y-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Package Overview</span>
              <h2 className="font-playfair text-h2 text-black mb-4">
                What is included in the {name} package?
              </h2>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
                {description}
              </p>
              <ul className="space-y-3 mb-8">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={16} />
                {ctaLabel}
              </a>
            </div>
            <div className="bg-black p-8 md:p-10">
              <p className="font-inter text-caption text-gray-500 uppercase tracking-wider mb-2">Starting from</p>
              <p className="font-playfair text-5xl text-gold mb-2">AED {price}</p>
              <p className="font-inter text-body text-gray-400 mb-6">{guests} · {perPerson} per person</p>
              <div className="border-t border-charcoal-light pt-6">
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                  Final pricing depends on your chosen menu, ingredients, dietary requirements, and service level. We reply within 15 minutes during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menu & Add-ons */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="pkg-cards grid md:grid-cols-2 gap-8">
            <div className="pkg-card opacity-0 translate-y-8 bg-charcoal p-8">
              <h3 className="font-playfair text-h3 text-white mb-6">Sample Menu Ideas</h3>
              <ul className="space-y-3">
                {sampleMenu.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-inter text-body-sm text-gray-500 mt-6">
                Every menu is bespoke. Share your preferences and we will design something just for you.
              </p>
            </div>
            <div className="pkg-card opacity-0 translate-y-8 bg-charcoal p-8">
              <h3 className="font-playfair text-h3 text-white mb-6">Popular Add-ons</h3>
              <ul className="space-y-3">
                {addOns.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/inquiry?utm_source=mychef.ae&utm_medium=package_page&utm_campaign=${campaign}`}
                className="btn-secondary w-full text-center mt-8"
              >
                Customise My Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[800px]">
          <div className="pkg-fade opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">FAQ</span>
            <h2 className="font-playfair text-h2 text-black">Common Questions About the {name} Package</h2>
          </div>
          <div className="pkg-fade opacity-0 translate-y-8 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 p-5">
                <h3 className="font-playfair text-h4 text-black mb-2">{faq.q}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="pkg-fade opacity-0 translate-y-8 text-center mb-10">
            <h3 className="font-playfair text-h2 text-black">Related Services</h3>
          </div>
          <div className="pkg-cards grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="pkg-card opacity-0 translate-y-8 group bg-white overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-black mb-2 group-hover:text-gold transition-colors">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-black to-charcoal py-24">
        <div className="container-custom text-center pkg-fade opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">Book the {name} Package</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your date, guest count, and any dietary needs. We will confirm availability and send a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Phone size={16} />
              {ctaLabel}
            </a>
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${campaign}`} className="btn-secondary">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

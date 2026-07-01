import type { ReactNode, ComponentType } from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'

export interface FormatItem {
  Icon: ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  link: string
}

export interface IncludedItem {
  title: string
  description: string
}

export interface UseCase {
  title: string
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface RelatedService {
  title: string
  description: string
  image: string
  link: string
}

export interface Faq {
  q: string
  a: string
}

export interface DietaryPageConfig {
  slug: string
  seoTitle: string
  metaDescription: string
  canonicalPath: string
  ogImage: string
  breadcrumbLabel: string
  h1: string
  heroSub: string
  heroImage: string
  whatsappMessage: string
  eyebrow: string
  introH2: string
  introNodes: ReactNode
  formats: FormatItem[]
  formatsH2: string
  useCases: UseCase[]
  useCasesEyebrow: string
  useCasesH2: string
  includedItems: IncludedItem[]
  includedH2: string
  galleryImages: GalleryImage[]
  galleryH2: string
  faqs: Faq[]
  faqsH2: string
  relatedServices: RelatedService[]
  ctaH2: string
  ctaP: string
}

interface Props {
  config: DietaryPageConfig
}

export default function DietaryCateringPage({ config }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const WHATSAPP_MESSAGE = encodeURIComponent(config.whatsappMessage)
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: config.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceSchema = {
    '@type': 'Service',
    name: config.seoTitle.split(' | ')[0],
    serviceType: 'Catering Service',
    provider: {
      '@type': 'FoodService',
      name: 'myCHEF Dubai',
      url: 'https://mychef.ae',
      telephone: '+971-55-174-4849',
      areaServed: 'Dubai, UAE',
    },
    areaServed: 'Dubai, UAE',
  }

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: config.breadcrumbLabel,
        item: `https://mychef.ae${config.canonicalPath}`,
      },
    ],
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
  }

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.to('.diet-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      gsap.to('.diet-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
      gsap.to('.diet-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

      gsap.to('.diet-fmt-card', {
        scrollTrigger: { trigger: '.diet-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })

      gsap.to('.diet-uc-item', {
        scrollTrigger: { trigger: '.diet-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })

      gsap.to('.diet-inc-item', {
        scrollTrigger: { trigger: '.diet-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
      })

      gsap.to('.diet-gallery-img', {
        scrollTrigger: { trigger: '.diet-gallery', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
      })

      gsap.to('.diet-faq-item', {
        scrollTrigger: { trigger: '.diet-faq', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
      })

      gsap.to('.diet-rel-card', {
        scrollTrigger: { trigger: '.diet-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })

      gsap.to('.diet-cta', {
        scrollTrigger: { trigger: '.diet-cta', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      })
    },
    { scope: containerRef }
  )

  const inquiryLink = `/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${config.slug}`

  return (
    <div ref={containerRef}>
      <SEO
        title={config.seoTitle}
        description={config.metaDescription}
        canonicalPath={config.canonicalPath}
        ogImage={config.ogImage}
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: `url(${config.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 diet-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gold">{config.breadcrumbLabel}</span>
              </li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 diet-hero-h1">
            {config.h1}
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 diet-hero-sub">
            {config.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={inquiryLink} className="btn-primary opacity-0 translate-y-4 diet-hero-cta">
              Request a Proposal
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 diet-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            {config.eyebrow}
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">{config.introH2}</h2>
          {config.introNodes}
        </div>
      </section>

      {/* Formats */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-h2 text-white">{config.formatsH2}</h2>
          </div>

          <div className="diet-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.formats.map((fmt, i) => {
              const Icon = fmt.Icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="diet-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              {config.useCasesEyebrow}
            </span>
            <h2 className="font-playfair text-h2 text-white">{config.useCasesH2}</h2>
          </div>

          <div className="diet-uc-grid grid md:grid-cols-2 gap-6">
            {config.useCases.map((uc, i) => (
              <div key={i} className="diet-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">{config.includedH2}</h2>

          <div className="diet-inc-grid grid md:grid-cols-2 gap-6">
            {config.includedItems.map((item, i) => (
              <div key={i} className="diet-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">{config.galleryH2}</h2>

          <div className="diet-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {config.galleryImages.map((img, i) => (
              <div key={i} className="diet-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">{config.faqsH2}</h2>

          <div className="diet-faq space-y-3">
            {config.faqs.map((faq, i) => (
              <div key={i} className="diet-faq-item border border-gray-200 opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-inter text-base font-medium text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
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

      {/* Related services */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">You May Also Like</h3>

          <div className="diet-rel-grid grid md:grid-cols-3 gap-6">
            {config.relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="diet-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
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

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center diet-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">{config.ctaH2}</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">{config.ctaP}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={inquiryLink} className="btn-primary">
              Request a Proposal
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
        </div>
      </section>
    </div>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Phone, ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import { breadcrumbSchema, serviceSchema } from '../../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'

interface Benefit {
  icon?: React.ElementType
  title: string
  description: string
}

interface PartnerPageTemplateProps {
  name: string
  seoTitle: string
  description: string
  canonicalPath: string
  ogImage: string
  headline: React.ReactNode
  eyebrow?: string
  subheadline?: string
  intro: string
  valueProposition: string
  benefits: Benefit[]
  howItWorks: string[]
  ctaText?: string
  heroImage: string
  breadcrumbLabel: string
  campaign: string
}

export default function PartnerPageTemplate({
  name,
  seoTitle,
  description,
  canonicalPath,
  ogImage,
  headline,
  eyebrow = 'PARTNERSHIP',
  subheadline = 'Partner with myCHEF Dubai to offer your clients premium private chef and catering experiences.',
  intro,
  valueProposition,
  benefits,
  howItWorks,
  ctaText = 'Discuss a Partnership',
  heroImage,
  breadcrumbLabel,
  campaign,
}: PartnerPageTemplateProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const WHATSAPP_MESSAGE = encodeURIComponent(`Hi myCHEF Dubai, I'd like to discuss a partnership for ${name} (via mychef.ae${canonicalPath})`)
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema(seoTitle, description, 'Service', 'Dubai'),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: breadcrumbLabel, path: canonicalPath },
      ]),
    ],
  }

  useGSAP(() => {
    if (!containerRef.current) return
    gsap.to('.partner-fade', {
      scrollTrigger: { trigger: '.partner-fade', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })
    gsap.to('.partner-card', {
      scrollTrigger: { trigger: '.partner-cards', start: 'top 85%', toggleActions: 'play none none none' },
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
        schema={schema}
      />

      <PageHero
        eyebrow={eyebrow}
        title={headline}
        subtitle={subheadline}
        image={heroImage}
        imageAlt={`${name} partnership with myCHEF Dubai`}
        cta={{ label: ctaText, href: WHATSAPP_LINK, external: true }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: breadcrumbLabel }]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      {/* Intro */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="partner-fade opacity-0 translate-y-8 text-center">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Why Partner</span>
            <h2 className="font-playfair text-h2 text-black mb-6">{intro}</h2>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">{valueProposition}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 partner-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Partnership Benefits</span>
            <h2 className="font-playfair text-h2 text-white">What You Gain</h2>
          </div>
          <div className="partner-cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {benefits.map((b, i) => {
              const Icon = b.icon || Check
              return (
                <div key={i} className="partner-card opacity-0 translate-y-8 bg-charcoal p-8">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{b.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{b.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12 partner-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">How It Works</span>
            <h2 className="font-playfair text-h2 text-black">Simple Partnership Workflow</h2>
          </div>
          <div className="space-y-4">
            {howItWorks.map((step, i) => (
              <div key={i} className="partner-fade opacity-0 translate-y-8 flex items-start gap-4 p-6 bg-cream">
                <span className="font-playfair text-2xl text-gold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black py-24">
        <div className="container-custom text-center partner-fade opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">Become a myCHEF Partner</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Let us discuss how a tailored partnership can add value to your clients and your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Phone size={16} />
              {ctaText}
            </a>
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${campaign}`} className="btn-secondary">
              Send an Inquiry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

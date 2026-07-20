import { useRef } from 'react'
import { Link } from 'react-router'
import { Phone, Mail, Clock, ChevronRight, Check, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import TrustSignalStrip from '@/components/TrustSignalStrip'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to get in touch (via mychef.ae/contact)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const contactCards = [
  {
    icon: Phone,
    title: 'WhatsApp',
    detail: '+971 55 174 4849',
    action: 'Chat Now',
    actionType: 'link' as const,
    href: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'hallo@mychef.ae',
    action: 'Send Email',
    actionType: 'mailto' as const,
    href: 'mailto:hallo@mychef.ae',
  },
  {
    icon: Clock,
    title: 'Response Time',
    detail: 'We reply within 15 minutes',
    action: 'Chat on WhatsApp',
    actionType: 'link' as const,
    href: WHATSAPP_LINK,
  },
]

const trustItems = [
  'Bespoke menus designed for every client',
  'Premium ingredients sourced daily',
  'Experienced, professional chefs',
  'Full service including setup and cleanup',
  'Available across all Dubai locations',
  'Discreet, confidential service',
  'Fully insured and licensed',
]

const serviceAreas = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Dubai Marina',
  'Emirates Hills',
  'JBR',
  'DIFC',
  'Business Bay',
  'Jumeirah',
  'Arabian Ranches',
  'Dubai Hills',
  'Bluewaters Island',
  'Al Barari',
  'Jumeirah Islands',
  'Jumeirah Golf Estates',
  'Meydan',
  'Dubai Creek',
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://mychef.ae/contact' },
  ],
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.contact-hero-eyebrow, .contact-hero-h1, .contact-hero-sub, .contact-card, .contact-cta-left, .contact-cta-right, .service-area-tag, .contact-final-cta', {
          opacity: 1, y: 0, x: 0, scale: 1,
        })
        return
      }

      gsap.from('.contact-hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      gsap.from('.contact-hero-h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.contact-hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.5 })

      gsap.from('.contact-card', {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cards-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.contact-cta-left', {
        opacity: 0, x: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.from('.contact-cta-right', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.contact-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.service-area-tag', {
        opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: '.service-areas-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.contact-final-cta', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-final-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Contact Us"
        description="Get in touch with myCHEF Dubai. Request a custom quote for private chef services, luxury catering, or bespoke dining experiences across Dubai. WhatsApp available."
        canonicalPath="/contact"
        ogImage="/images/contact-hero.webp"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <img
          src="/images/contact-hero.webp"
          alt="Private chef consultation with premium ingredients in a Dubai villa kitchen"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center container-custom py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" aria-hidden="true" /></li>
              <li className="text-gold">Contact</li>
            </ol>
          </nav>
          <p className="contact-hero-eyebrow font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">GET IN TOUCH</p>
          <h1 className="contact-hero-h1 font-playfair text-fluid-h1 text-white mb-6" style={{ lineHeight: '1.1' }}>
            Contact Us on<br />WhatsApp
          </h1>
          <p className="contact-hero-sub font-inter text-body-lg text-gray-400 max-w-xl mx-auto">
            Whether you are planning an intimate dinner or a grand event, start the conversation on WhatsApp for the fastest reply.
          </p>
        </div>
      </section>

      <TrustSignalStrip />

      {/* Section 2: Contact Cards */}
      <section className="relative bg-cream py-16 md:py-20" style={{ marginTop: '-40px' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-cards-grid grid md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div key={card.title} className="contact-card bg-white p-6 md:p-10 text-center shadow-subtle">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold/10">
                  <card.icon size={24} className="text-gold" aria-hidden="true" />
                </div>
                <h4 className="font-playfair text-h4 text-black mb-2">{card.title}</h4>
                <p className="font-inter text-body text-gray-500 mb-4">{card.detail}</p>
                {card.actionType === 'link' && (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-body-sm font-medium text-gold hover:text-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
                  >
                    {card.action}
                  </a>
                )}
                {card.actionType === 'mailto' && (
                  <a
                    href={card.href}
                    className="font-inter text-body-sm font-medium text-gold hover:text-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
                  >
                    {card.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: WhatsApp CTA */}
      <section className="contact-cta-section bg-white section-padding">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-y-12 lg:gap-x-12">
            {/* Left Column - WhatsApp CTA */}
            <div className="contact-cta-left">
              <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">WHATSAPP FIRST</p>
              <h2 className="font-playfair text-fluid-h2 text-black mb-2" style={{ lineHeight: '1.15' }}>
                Chat With Us on WhatsApp
              </h2>
              <p className="font-inter text-body text-gray-500 mb-8">
                We are available on WhatsApp for quick questions, availability checks, and bespoke quotes. We typically respond within 15 minutes during business hours.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 focus-visible:ring-offset-white"
              >
                <Phone size={18} aria-hidden="true" />
                Chat on WhatsApp
              </a>

              <p className="font-inter text-body-sm text-gray-500 mt-6">
                Prefer email?{' '}
                <a href="mailto:hallo@mychef.ae" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
                  hallo@mychef.ae
                </a>
              </p>
            </div>

            {/* Right Column - Trust Sidebar */}
            <div className="contact-cta-right bg-black p-8 lg:p-12 h-fit">
              <h3 className="font-playfair text-fluid-h3 text-white mb-8" style={{ lineHeight: '1.2' }}>
                Why Choose myCHEF Dubai?
              </h3>
              <div className="space-y-6">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="font-inter text-body text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-charcoal-light space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-inter text-body-sm text-gray-400">Serving all of Dubai</p>
                    <p className="font-inter text-body-sm text-gold">We respond within 15 minutes</p>
                  </div>
                </div>
                <p className="font-inter text-body-sm text-gray-400">
                  Loved your experience?{' '}
                  <Link to="/review" className="text-gold hover:underline">
                    Leave a review and earn AED 50 credit
                  </Link>
                  .
                </p>
                <p className="font-inter text-body-sm text-gray-400">
                  Own a venue?{' '}
                  <Link to="/partner-with-us" className="text-gold hover:underline">
                    Partner with us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Service Areas */}
      <section className="service-areas-section bg-charcoal section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">COVERAGE</p>
            <h2 className="font-playfair text-fluid-h2 text-white" style={{ lineHeight: '1.15' }}>
              We Come to You — Anywhere in Dubai
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="service-area-tag px-4 py-2 font-inter text-body-sm text-gray-400 border border-gold/20 bg-[#2A2A2A] transition-all duration-300 hover:border-gold hover:text-gold cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="contact-final-section bg-black py-20">
        <div className="contact-final-cta container-custom text-center">
          <h3 className="font-playfair text-fluid-h3 text-white mb-4">Ready to Start Planning?</h3>
          <p className="font-inter text-body text-gray-400 max-w-lg mx-auto mb-8">
            Tell us your occasion and we will match you with a vetted chef within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=contact"
              className="btn-primary focus-visible:ring-offset-black"
            >
              Request My Custom Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 focus-visible:ring-offset-black"
            >
              <Phone size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

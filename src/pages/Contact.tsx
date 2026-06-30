import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { Phone, Mail, Clock, ChevronRight, Check, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/contact)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const contactCards = [
  {
    icon: Phone,
    title: 'WhatsApp',
    detail: '+971 50 XXX XXXX',
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
    detail: 'We reply within 2 hours',
    action: 'Request Quote',
    actionType: 'scroll' as const,
    href: '#quote-form',
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
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '',
    guests: '',
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const validate = () => {
    const newErrors: Record<string, boolean> = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true
    if (!formData.phone.trim()) newErrors.phone = true
    if (!formData.serviceType) newErrors.serviceType = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    const lines = [
      'New enquiry — myCHEF Dubai',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.serviceType}`,
      `Event date: ${formData.eventDate}`,
      `Guests: ${formData.guests}`,
      `Location: ${formData.location}`,
      '',
      `Message: ${formData.message}`,
    ].filter(Boolean)
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(waUrl, '_blank')
    setTimeout(() => {
      setFormState('success')
    }, 800)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }))
    }
  }

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      gsap.from('.contact-hero-h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.contact-hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.5 })

      gsap.from('.contact-card', {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cards-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.contact-form-left', {
        opacity: 0, x: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.from('.contact-form-right', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.contact-form-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.service-area-tag', {
        opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: '.service-areas-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.contact-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
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
        ogImage="/hero-home.jpg"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />
        <div className="relative z-10 text-center container-custom py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" /></li>
              <li className="text-gold">Contact</li>
            </ol>
          </nav>
          <p className="contact-hero-eyebrow font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">GET IN TOUCH</p>
          <h1 className="contact-hero-h1 font-playfair text-h1 md:text-[3.5rem] text-white mb-6" style={{ lineHeight: '1.1' }}>
            Let&apos;s Plan Something<br />Exceptional Together
          </h1>
          <p className="contact-hero-sub font-inter text-body-lg text-gray-400 max-w-xl mx-auto">
            Whether you are planning an intimate dinner or a grand event, we are here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Cards */}
      <section className="relative bg-cream py-20" style={{ marginTop: '-40px' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-cards-grid grid md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div key={card.title} className="contact-card bg-white p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full" style={{ background: 'rgba(200,164,92,0.1)' }}>
                  <card.icon size={24} className="text-gold" />
                </div>
                <h4 className="font-playfair text-h4 text-black mb-2">{card.title}</h4>
                <p className="font-inter text-body text-gray-500 mb-4">{card.detail}</p>
                {card.actionType === 'link' && (
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="font-inter text-body-sm font-medium text-gold hover:text-gold-light transition-colors">
                    {card.action}
                  </a>
                )}
                {card.actionType === 'mailto' && (
                  <a href={card.href} className="font-inter text-body-sm font-medium text-gold hover:text-gold-light transition-colors">
                    {card.action}
                  </a>
                )}
                {card.actionType === 'scroll' && (
                  <a href={card.href} className="inline-flex items-center justify-center px-6 py-2.5 font-inter text-button font-medium uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300">
                    {card.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quote Request Form */}
      <section id="quote-form" className="contact-form-section bg-white section-padding">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {formState === 'success' ? (
            <div className="text-center max-w-xl mx-auto py-16">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold/10">
                <Check size={32} className="text-gold" />
              </div>
              <h2 className="font-playfair text-h2 text-black mb-4">Thank You!</h2>
              <p className="font-inter text-body text-gray-500 mb-8">
                Your inquiry has been received. We will get back to you within 2 hours with a bespoke proposal.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Chat on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[55%_45%] gap-0">
              {/* Left Column - Form */}
              <div className="contact-form-left">
                <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">REQUEST A QUOTE</p>
                <h2 className="font-playfair text-h2 text-black mb-2" style={{ lineHeight: '1.15' }}>
                  Request Your Custom Quote
                </h2>
                <p className="font-inter text-body text-gray-500 mb-8">
                  Fill in the details below and we will get back to you within 2 hours with a bespoke proposal.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3.5 font-inter text-body border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-gold focus:outline-none transition-colors bg-white text-black placeholder:text-gray-400`}
                    />
                    {errors.name && <p className="text-red-500 text-body-sm mt-1">Name is required</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3.5 font-inter text-body border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-gold focus:outline-none transition-colors bg-white text-black placeholder:text-gray-400`}
                    />
                    {errors.email && <p className="text-red-500 text-body-sm mt-1">Valid email is required</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      className={`w-full px-4 py-3.5 font-inter text-body border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-gold focus:outline-none transition-colors bg-white text-black placeholder:text-gray-400`}
                    />
                    {errors.phone && <p className="text-red-500 text-body-sm mt-1">Phone number is required</p>}
                  </div>
                  <div>
                    <select
                      value={formData.serviceType}
                      onChange={e => handleChange('serviceType', e.target.value)}
                      className={`w-full px-4 py-3.5 font-inter text-body border ${errors.serviceType ? 'border-red-500' : 'border-gray-200'} focus:border-gold focus:outline-none transition-colors bg-white text-black appearance-none cursor-pointer`}
                    >
                      <option value="">Select Service Type</option>
                      <option value="private-chef">Private Chef</option>
                      <option value="catering">Catering</option>
                      <option value="luxury-dining">Luxury Dining</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="yacht">Yacht Dining</option>
                      <option value="villa">Villa Chef</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.serviceType && <p className="text-red-500 text-body-sm mt-1">Please select a service type</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={e => handleChange('eventDate', e.target.value)}
                      className="w-full px-4 py-3.5 font-inter text-body border border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white text-black"
                    />
                    <input
                      type="number"
                      min="1"
                      placeholder="Number of Guests"
                      value={formData.guests}
                      onChange={e => handleChange('guests', e.target.value)}
                      className="w-full px-4 py-3.5 font-inter text-body border border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white text-black placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="e.g., Palm Jumeirah, Downtown Dubai"
                      value={formData.location}
                      onChange={e => handleChange('location', e.target.value)}
                      className="w-full px-4 py-3.5 font-inter text-body border border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white text-black placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your event, dietary preferences, and any special requests..."
                      value={formData.message}
                      onChange={e => handleChange('message', e.target.value)}
                      className="w-full px-4 py-3.5 font-inter text-body border border-gray-200 focus:border-gold focus:outline-none transition-colors bg-white text-black placeholder:text-gray-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Request My Quote'}
                  </button>
                </form>
              </div>

              {/* Right Column - Trust Sidebar */}
              <div className="contact-form-right bg-black p-12 lg:ml-8">
                <h3 className="font-playfair text-h3 text-white mb-8" style={{ lineHeight: '1.2' }}>
                  Why Choose myCHEF Dubai?
                </h3>
                <div className="space-y-6">
                  {trustItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                      <span className="font-inter text-body text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-charcoal-light">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-gold" />
                    <div>
                      <p className="font-inter text-body-sm text-gray-400">Serving all of Dubai</p>
                      <p className="font-inter text-body-sm text-gold">We respond within 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Service Areas */}
      <section className="service-areas-section bg-charcoal section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">COVERAGE</p>
            <h2 className="font-playfair text-h2 text-white" style={{ lineHeight: '1.15' }}>
              We Come to You — Anywhere in Dubai
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="service-area-tag px-4 py-2 font-inter text-body-sm text-gray-400 border transition-all duration-300 hover:border-gold hover:text-gold cursor-default"
                style={{ background: '#2A2A2A', borderColor: 'rgba(200,164,92,0.2)' }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA */}
      <section className="contact-cta-section bg-black py-20">
        <div className="contact-cta-content container-custom text-center">
          <h3 className="font-playfair text-h3 text-white mb-4">Prefer to Chat Directly?</h3>
          <p className="font-inter text-body text-gray-400 max-w-lg mx-auto mb-8">
            We are available on WhatsApp for quick questions and immediate availability checks.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            <Phone size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

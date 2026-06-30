import { useRef } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://mychef.ae/terms' },
  ],
}

const sections = [
  {
    title: 'Acceptance of Terms',
    content: (
      <p>By booking our services, you agree to be bound by these terms of service. If you do not agree to these terms, please do not use our services. These terms apply to all private chef services, catering, and related hospitality services provided by myCHEF Dubai.</p>
    ),
  },
  {
    title: 'Booking & Confirmation',
    content: (
      <>
        <p className="mb-4">All bookings are subject to the following conditions:</p>
        <ul className="space-y-2">
          {[
            'Bookings are confirmed upon receipt of the required deposit payment',
            'Quotes are valid for 14 days unless otherwise stated',
            'A booking is not considered confirmed until the deposit has been received',
            'We reserve the right to decline any booking at our discretion',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Payment Terms',
    content: (
      <>
        <p className="mb-4">Payment for our services is structured as follows:</p>
        <ul className="space-y-2">
          {[
            'A deposit is required to confirm your booking',
            'The balance is due on or before the event date',
            'Payment methods include bank transfer or as otherwise agreed',
            'All prices are quoted in UAE Dirhams (AED) unless otherwise specified',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Cancellation Policy',
    content: (
      <>
        <p className="mb-4">Cancellations and refunds are handled as follows:</p>
        <ul className="space-y-2">
          {[
            'Cancellation 48+ hours before event: full refund of deposit',
            'Cancellation 24–48 hours before event: 50% refund of deposit',
            'Cancellation less than 24 hours before event: no refund',
            'Postponement requests are considered on a case-by-case basis',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Changes to Booking',
    content: (
      <>
        <p className="mb-4">Changes to confirmed bookings are subject to the following:</p>
        <ul className="space-y-2">
          {[
            'Guest count changes must be communicated at least 24 hours in advance',
            'Significant increases in guest count may require menu adjustments',
            'Menu changes are subject to ingredient availability',
            'Last-minute changes may incur additional costs',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Service Delivery',
    content: (
      <>
        <p className="mb-4">Our service delivery standards include:</p>
        <ul className="space-y-2">
          {[
            'We arrive at the agreed time and location',
            'The client must provide access to kitchen facilities and basic utilities',
            'We reserve the right to adjust menus based on ingredient availability',
            'Setup, service, and cleanup are included as part of our service',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Dietary Requirements',
    content: (
      <>
        <p className="mb-4">We take dietary requirements seriously:</p>
        <ul className="space-y-2">
          {[
            'All dietary requirements must be communicated at the time of booking',
            'We handle allergies with strict protocols to prevent cross-contamination',
            'While we take every precaution, we cannot guarantee completely allergen-free environments',
            'Last-minute dietary requests may have limited accommodation options',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Liability',
    content: (
      <>
        <p className="mb-4">Our liability is governed by the following terms:</p>
        <ul className="space-y-2">
          {[
            'We are fully insured for public liability',
            'We are not liable for issues arising from undisclosed allergies or dietary restrictions',
            'We are not responsible for damage to existing kitchen equipment due to pre-existing conditions',
            'Our total liability shall not exceed the total value of the booking',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Photography',
    content: (
      <>
        <p className="mb-4">Photography at events is handled as follows:</p>
        <ul className="space-y-2">
          {[
            'We may take photographs for our portfolio with client consent',
            'Clients may request no photography at any time',
            'Any photographs shared publicly will not identify clients without explicit permission',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: 'Governing Law',
    content: (
      <p>These terms of service are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p>For questions about these terms, please contact us at <a href="mailto:hallo@mychef.ae" className="text-gold hover:underline">hallo@mychef.ae</a> or via WhatsApp.</p>
    ),
  },
]

export default function Terms() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.terms-hero-h1', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' })
      gsap.from('.terms-section', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.terms-content', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Terms of Service"
        description="myCHEF Dubai terms of service. Booking conditions, cancellation policy, and service terms."
        canonicalPath="/terms"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Header */}
      <section className="bg-black min-h-[35vh] flex items-center justify-center">
        <div className="relative z-10 text-center container-custom py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" /></li>
              <li className="text-gold">Terms of Service</li>
            </ol>
          </nav>
          <p className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">LEGAL</p>
          <h1 className="terms-hero-h1 font-playfair text-[3rem] text-white mb-4" style={{ lineHeight: '1.1' }}>Terms of Service</h1>
          <p className="font-inter text-body-sm text-gray-500">Last updated: January 2025</p>
        </div>
      </section>

      {/* Section 2: Terms Content */}
      <section className="terms-content bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <article className="font-inter text-body text-gray-500" style={{ lineHeight: '1.8' }}>
            {sections.map((section, i) => (
              <div key={section.title} className="terms-section mb-12">
                <h2 className="font-playfair text-[1.75rem] text-black mb-4" style={{ lineHeight: '1.2' }}>{i + 1}. {section.title}</h2>
                <div>{section.content}</div>
              </div>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-gray-200 text-center">
            <p className="font-inter text-body text-gray-500 mb-6">
              Have questions about our terms? We are happy to clarify.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat on WhatsApp</a>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

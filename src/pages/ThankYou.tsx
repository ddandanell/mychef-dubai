// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /thank-you
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { Check, Clock, FileText, Phone, ChevronRight, Gift } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import { trackEvent } from '@/lib/analytics'
import { trackConversion } from '@/lib/track'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/thank-you)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const steps = [
  { icon: Clock, text: 'We are reviewing your request' },
  { icon: FileText, text: 'You will receive a proposal within 15 minutes' },
  { icon: Check, text: 'Confirm your booking and relax' },
]

const exploreLinks = [
  { title: 'Our Services', desc: 'Discover our full range of private chef and catering services.', href: '/private-chef-dubai' },
  { title: 'How It Works', desc: 'See how easy it is to book a private chef in Dubai.', href: '/how-it-works' },
  { title: 'Our Chefs', desc: 'Meet the culinary team behind every exceptional meal.', href: '/our-chefs' },
]

export default function ThankYou() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    trackEvent('conversion', {
      event_category: 'lead',
      event_label: 'form_submit',
      page_path: window.location.pathname,
    })
    trackConversion('inquiry_complete', 'inquiry_form')
  }, [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ty-check', { scale: 0, duration: 0.5, ease: 'back.out(1.7)' })
      gsap.from('.ty-h1', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.3 })
      gsap.from('.ty-sub', { opacity: 0, duration: 0.5, ease: 'power3.out', delay: 0.5 })
      gsap.from('.ty-step', { opacity: 0, x: -15, duration: 0.5, stagger: 0.15, ease: 'power3.out', delay: 0.7 })
      gsap.from('.ty-cta', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out', delay: 1.1 })
      gsap.from('.explore-card', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.3 })
    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Thank You"
        description="Thank you for your inquiry. Our chefs will contact you within 15 minutes with a bespoke proposal."
        canonicalPath="/thank-you"
        ogImage="/service-catering.webp"
        noindex={true}
      />

      {/* Section 1: Confirmation */}
      <section className="bg-black min-h-[70vh] flex items-center justify-center py-24">
        <div className="container-custom max-w-[600px] text-center">
          {/* Check icon */}
          <div className="ty-check w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-8">
            <Check size={32} className="text-black" />
          </div>

          <h1 className="ty-h1 font-playfair text-[3rem] text-white mb-6" style={{ lineHeight: '1.1' }}>Thank You</h1>
          <p className="ty-sub font-inter text-body text-gray-400 mb-10">
            Your inquiry has been received. Our chefs will review your details and contact you within 15 minutes with a bespoke proposal.
          </p>

          {/* Next Steps */}
          <div className="space-y-4 mb-12 text-left max-w-sm mx-auto">
            {steps.map((step) => (
              <div key={step.text} className="ty-step flex items-center gap-3">
                <step.icon size={24} className="text-gold flex-shrink-0" />
                <span className="font-inter text-body-sm text-gray-400">{step.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="ty-cta flex flex-col gap-4">
            <Link to="/" className="btn-secondary mx-auto">Back to Homepage</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-inter text-body-sm text-gold hover:underline">
              <Phone size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Referral Prompt */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px]">
          <div className="bg-black p-8 md:p-10 text-center">
            <Gift size={40} className="text-gold mx-auto mb-4" />
            <h3 className="font-playfair text-h3 text-white mb-3">Love myCHEF? Share the Reward</h3>
            <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
              Refer a friend to myCHEF Dubai and you will both receive AED 100 — them off their first booking, you as credit towards your next experience.
            </p>
            <Link to="/referral-programme" className="btn-primary inline-flex items-center gap-2">
              Join the Referral Programme <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: While You Wait */}
      <section className="bg-white py-16">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-h3 text-black mb-2" style={{ lineHeight: '1.2' }}>While You Wait</h3>
            <p className="font-inter text-body-sm text-gray-500">Explore more about myCHEF Dubai.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {exploreLinks.map((link) => (
              <div key={link.title} className="explore-card bg-cream p-6">
                <h4 className="font-playfair text-h4 text-black mb-2">{link.title}</h4>
                <p className="font-inter text-body-sm text-gray-500 mb-4" style={{ lineHeight: '1.6' }}>{link.desc}</p>
                <Link to={link.href} className="inline-flex items-center gap-1 font-inter text-body-sm text-gold hover:underline">
                  {link.title} <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

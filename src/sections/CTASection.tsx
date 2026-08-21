import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const WHATSAPP_LINK = buildWhatsAppLink(
  "Hi myCHEF Dubai, I'd like a quote for a private chef or luxury catering in Dubai. Date: __, Guests: __, Area: __ (via mychef.ae/)",
  { source: 'mychef.ae', medium: 'cta_button', campaign: 'home_bottom_cta' }
)

export default function CTASection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const children = contentRef.current?.children
      if (!children) return
      if (reduced) {
        gsap.set(children, { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
    >
      <div className="container-custom text-center">
        <div ref={contentRef}>
          {/* Gold Line */}
          <div className="gold-line mx-auto mb-8" />

          {/* Headline */}
          <h2 className="font-playfair text-fluid-h2 text-white mb-6">
            Ready to plan an unforgettable dining experience in Dubai?
          </h2>

          {/* Subtitle */}
          <p className="font-inter text-lg text-gray-400 max-w-[500px] mx-auto mb-10">
            Tell us about your event. We reply within 15 minutes during business hours, then bring you a vetted chef and send a tailored proposal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=home" className="btn-primary focus-visible:ring-offset-[#1A1A1A]">
              Get a Tailored Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary focus-visible:ring-offset-[#1A1A1A]"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-4 font-inter text-body-sm text-gray-400 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
            Typical reply within 15 min · No obligation
          </p>
        </div>
      </div>
    </section>
  )
}

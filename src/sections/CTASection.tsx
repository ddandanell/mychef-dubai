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
      <div className="container-custom">
        {/* Closing chapter: argument left, action right — the only left-aligned CTA block on the page */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <div className="gold-line mb-8" />
            <h2 className="font-playfair text-fluid-h2 text-white mb-6">
              Date, guest count and area in Dubai. That is enough to start.
            </h2>
            <p className="font-inter text-body-lg text-gray-400 leading-relaxed max-w-[52ch]">
              Tell us about your event. We reply within 15 minutes during business hours, then bring you a vetted chef and send a tailored proposal.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-16 lg:border-l lg:border-white/10">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link to="/inquiry" className="btn-primary focus-visible:ring-offset-[#1A1A1A]">
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
            <p className="mt-5 font-inter text-body-sm text-gray-400 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
              Typical reply within 15 min · No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

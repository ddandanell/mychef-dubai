import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { SectionLabel } from '@/components/system'

// A sequence reads as an inline chain (01 → 02 → 03 → 04), not four boxes.
const steps = [
  {
    number: '01',
    title: 'Tell us about the evening',
    description: 'The occasion, your guest count, the address, and how you like to eat. Send it by form or WhatsApp.',
  },
  {
    number: '02',
    title: 'We design the menu and choose your chef',
    description: 'The menu is shaped around your tastes and your guests. Then we choose the chef whose cooking fits it.',
  },
  {
    number: '03',
    title: 'Your chef arrives early and cooks in your kitchen',
    description: 'Everything cooked to order in your own kitchen, with the service running around it.',
  },
  {
    number: '04',
    title: 'You sit down. We clear up.',
    description: 'Courses are plated, your guests are looked after all evening, and the kitchen is left exactly as we found it.',
  },
]

export default function HowItWorksSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([headerRef.current, cardsRef.current?.querySelectorAll('.step-card')], { opacity: 1, y: 0 })
        return
      }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.step-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream section-padding">
      <div className="container-custom">
        {/* Header — left-aligned; the chain below carries the argument */}
        <div ref={headerRef} className="max-w-[760px] mb-12 md:mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-playfair text-fluid-h2 text-black mb-5">
            Tell us about the evening. We build the menu, the chef and the service around it.
          </h2>
          <p className="font-inter text-body text-gray-500 leading-relaxed max-w-[60ch]">
            Booking a private chef in Dubai, from your first message to the kitchen left clean.
          </p>
        </div>

        {/* Inline chain on a gold rail: horizontal at lg, vertical below */}
        <ol
          ref={cardsRef}
          className="relative grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-10 mb-12 md:mb-14"
        >
          <span className="hidden lg:block absolute top-[4px] left-0 right-0 h-px bg-gold/30" aria-hidden="true" />
          <span className="lg:hidden absolute top-2 bottom-2 left-[4px] w-px bg-gold/30" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.number} className="step-card relative pl-8 lg:pl-0 lg:pt-8">
              <span className="absolute left-0 top-[6px] h-[9px] w-[9px] bg-gold-ink lg:top-0" aria-hidden="true" />
              <p className="flex items-center gap-3 mb-3 font-playfair text-h3 leading-none text-gold-ink" aria-hidden="true">
                {step.number}
                {index < steps.length - 1 && <span className="hidden lg:inline font-inter text-body text-gold/60">→</span>}
              </p>
              <h3 className="font-playfair text-h4 text-black mb-2">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed max-w-[38ch]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* CTA — sits with the argument, not centered beneath it */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Link to="/inquiry" className="btn-primary focus-visible:ring-offset-cream">
            Request a Proposal
          </Link>
          <p className="font-inter text-body-sm text-gray-500">The price is agreed in your proposal, before the day.</p>
        </div>
      </div>
    </section>
  )
}

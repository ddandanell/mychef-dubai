import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { MessageCircle, FileText, ShoppingBag, Utensils } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Reach Out',
    description: 'Tell us about your occasion, your guests, and your vision — no detail is too small.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'We Design the Evening',
    description: 'We shape the menu around your tastes and your guests, and choose the right chef to bring it to life.',
  },
  {
    number: '03',
    icon: ShoppingBag,
    title: 'Your Chef Arrives, We Run the Room',
    description: 'On the day, the chef we chose arrives early and cooks to order in your kitchen — while we choreograph every detail around it.',
  },
  {
    number: '04',
    icon: Utensils,
    title: 'You Simply Enjoy',
    description: 'The courses are plated with precision; the service we arrange looks after your guests; the kitchen is left immaculate. All you keep is the memory.',
  },
]

export default function HowItWorksSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            How It Works
          </span>
          <h2 className="font-playfair text-fluid-h2 text-black mt-4 mb-4">
            How does booking a private chef in Dubai work?
          </h2>
          <p className="font-inter text-base md:text-lg text-gray-500 max-w-xl mx-auto">
            From your first message to the final course — a seamless experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card relative text-center p-6 md:p-8 bg-white"
            >
              {/* Step Number (decorative) */}
              <span className="absolute top-4 left-4 font-playfair text-[64px] md:text-[72px] font-semibold text-gold/20 leading-none select-none" aria-hidden="true">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <step.icon size={44} className="text-gold" strokeWidth={1.5} aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 font-playfair text-h3 text-black mb-3">
                {step.title}
              </h3>
              <p className="relative z-10 font-inter text-base text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=home" className="btn-primary focus-visible:ring-offset-cream">
            Request a Proposal
          </Link>
        </div>
      </div>
    </section>
  )
}

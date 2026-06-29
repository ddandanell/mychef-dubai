import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, FileText, ShoppingBag, Utensils } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Send Us a Message',
    description: 'Reach out via WhatsApp or our inquiry form. Tell us about your event, your guests, and your vision.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'We Design Your Menu',
    description: 'Our chef creates a bespoke menu tailored to your preferences, dietary needs, and the occasion.',
  },
  {
    number: '03',
    icon: ShoppingBag,
    title: 'We Shop & Prepare',
    description: 'We source the finest ingredients and arrive at your venue fully prepared to deliver excellence.',
  },
  {
    number: '04',
    icon: Utensils,
    title: 'You Enjoy',
    description: 'Sit back and enjoy a flawless dining experience. We handle everything from plating to cleanup.',
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.step-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
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
        <div ref={headerRef} className="text-center mb-16">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            The Process
          </span>
          <h2 className="font-playfair text-h2 text-black mt-4 mb-4">
            How It Works
          </h2>
          <p className="font-inter text-lg text-gray-500 max-w-xl mx-auto">
            From your first message to the final course — a seamless experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card relative text-center p-8 bg-white"
            >
              {/* Step Number (decorative) */}
              <span className="absolute top-4 left-4 font-playfair text-[72px] font-semibold text-gold/20 leading-none select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <step.icon size={48} className="text-gold" strokeWidth={1.5} />
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
        <div className="text-center mt-12">
          <Link to="/inquiry" className="btn-primary">
            Start Your Experience
          </Link>
        </div>
      </div>
    </section>
  )
}

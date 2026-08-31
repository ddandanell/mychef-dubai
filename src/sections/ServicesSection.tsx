import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { ArrowRight, Briefcase, House, PartyPopper, Wine } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionLabel } from '@/components/system'

// The two core hubs lead with photography; the four built on them sit in a hairline index.
const coreServices = [
  {
    image: '/images/private-chef-dubai-hero.webp',
    title: 'Private Chef Dubai',
    description: 'A vetted chef for one evening, a week, or longer. We learn how you like to eat, design the menu with you, and your chef cooks it fresh in your own kitchen.',
    link: '/private-chef-dubai',
    cta: 'See private chef',
  },
  {
    image: '/images/catering-dubai-hero.webp',
    title: 'Catering Dubai',
    description: 'Plated dinners to full buffets, for events of any size. We design the menu with you, then bring in the chefs and the service staff to cook and run it on the day.',
    link: '/catering-dubai',
    cta: 'See catering',
  },
]

const builtOnServices: { icon: LucideIcon; title: string; description: string; link: string; cta: string }[] = [
  {
    icon: Wine,
    title: 'Luxury Dining Experiences',
    description: 'Fine dining at home, dinners for two, milestone celebrations — every course designed with you and cooked in your kitchen by the chef we chose for you.',
    link: '/luxury-dining-experiences',
    cta: 'Plan a dinner',
  },
  {
    icon: PartyPopper,
    title: 'Events & Celebrations',
    description: 'Small gatherings to large celebrations — we design the menu, bring the chef, the service staff and the styling, and run the evening so you can host it.',
    link: '/events',
    cta: 'Plan an event',
  },
  {
    icon: Briefcase,
    title: 'Corporate Dining',
    description: 'Boardroom lunches and corporate events — menus designed with you and delivered by chefs who understand what a room like that demands.',
    link: '/corporate',
    cta: 'Corporate dining',
  },
  {
    icon: House,
    title: 'Villas & Residences',
    description: 'Chefs for villas, holiday homes and long-stay residences across Dubai — a vetted chef in your kitchen, with the dining designed around how your home runs.',
    link: '/villas-private-residences',
    cta: 'See villa chefs',
  },
]

export default function ServicesSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([headerRef.current, cardsRef.current?.querySelectorAll('.service-card')], { opacity: 1, y: 0, x: 0 })
        return
      }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-black section-padding"
    >
      <div className="container-custom">
        {/* Section Header — left-aligned, argument first */}
        <div ref={headerRef} className="max-w-[760px] mb-12 md:mb-16">
          <SectionLabel tone="dark">Private Chef & Catering</SectionLabel>
          <h2 className="font-playfair text-fluid-h2 text-white mb-5">
            myCHEF does two things. A chef for your house, or catering for your event. Both start here.
          </h2>
          <p className="font-inter text-body text-gray-400 leading-relaxed max-w-[62ch]">
            Two core services, and four more built on them. Whichever you choose, the same standard of chef and the same person looking after you from your first message to the last plate.
          </p>
        </div>

        <div ref={cardsRef}>
          {/* Core hubs — photography-led, no box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
            {coreServices.map((service, index) => (
              <Link
                key={service.link}
                to={service.link}
                className="service-card group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={640}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 gradient-overlay-bottom" />
                  <span className="absolute top-4 left-4 font-inter text-caption uppercase tracking-wider text-white/80" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <div className="pt-6 border-t border-gold/40 mt-0">
                  <h3 className="font-playfair text-fluid-h3 text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-body text-gray-400 leading-relaxed mb-4 max-w-[52ch]">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-inter text-body-sm font-medium uppercase tracking-wider text-gold group-hover:gap-3 transition-all duration-300">
                    {service.cta}
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Built on the core — hairline index, concept icons */}
          <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-4">Built on the same standard</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {builtOnServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.link}
                  to={service.link}
                  className="service-card group flex flex-col bg-black p-6 lg:p-7 transition-colors duration-300 hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                >
                  <span className="mb-5 flex h-10 w-10 items-center justify-center border border-gold/35 text-gold">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-playfair text-h4 text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-inter text-caption font-medium uppercase tracking-wider text-gold group-hover:gap-3 transition-all duration-300">
                    {service.cta}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

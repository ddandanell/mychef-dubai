import ServiceImage from '@/components/private-chef/ServiceImage'
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
    title: "A chef for your home",
    description: "Regular cooking in your own kitchen, with a chef matched to your household, food preferences and weekly routine.",
    link: '/private-chef-dubai',
    cta: 'See household chef plans',
  },
  {
    image: '/images/catering-dubai-hero.webp',
    title: "Catering for your occasion",
    description: "Choose food delivery or a complete catering service, with the menu, staffing and setup planned around your guests and venue.",
    link: '/catering-dubai',
    cta: 'See catering options',
  },
]

const builtOnServices: { icon: LucideIcon; title: string; description: string; link: string; cta: string }[] = [
  {
    icon: Wine,
    title: 'Luxury Dining Experiences',
    description: "Thoughtful tasting menus, dinners for two and milestone celebrations, prepared in your kitchen by a carefully matched chef.",
    link: '/luxury-dining-experiences',
    cta: 'Plan a private dinner',
  },
  {
    icon: PartyPopper,
    title: 'Events & Celebrations',
    description: "From intimate gatherings to larger celebrations, we coordinate the menu and service so you can enjoy the occasion with your guests.",
    link: '/events',
    cta: 'Plan an event',
  },
  {
    icon: Briefcase,
    title: 'Corporate Dining',
    description: "Boardroom lunches, client dinners and company events, with menus and service planned around your schedule and setting.",
    link: '/corporate',
    cta: 'Corporate dining',
  },
  {
    icon: House,
    title: 'Villas & Residences',
    description: "Private chefs for villas, holiday homes and longer stays, with meals and service adapted to your kitchen and household routine.",
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
            Private chefs and catering, shaped around you.
          </h2>
          <p className="font-inter text-body text-gray-400 leading-relaxed max-w-[62ch]">
            Choose regular support for your household or a tailored service for one occasion. We bring your preferences, menu and booking details together with one dedicated point of contact.
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
                  <ServiceImage
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
          <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-4">Explore dining experiences</p>
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

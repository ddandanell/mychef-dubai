import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    image: '/images/private-chef-dubai-hero.webp',
    title: 'Private Chef Dubai',
    description: 'Your own professional chef for an evening, a week, or longer. Fully bespoke menus prepared in your kitchen.',
    link: '/private-chef-dubai',
  },
  {
    image: '/images/catering-dubai-hero.webp',
    title: 'Catering Dubai',
    description: 'Full-service luxury catering for events of any size. From plated dinners to grand buffets.',
    link: '/catering-dubai',
  },
  {
    image: '/images/luxury-dining-dubai-hero.webp',
    title: 'Luxury Dining Experiences',
    description: 'Intimate fine dining at home, romantic dinners, birthday celebrations — all prepared and served by our team.',
    link: '/luxury-dining-experiences',
  },
  {
    image: '/images/events-catering-dubai-hero.webp',
    title: 'Events & Celebrations',
    description: 'From intimate gatherings to large celebrations. We handle the food, service, and presentation.',
    link: '/events',
  },
  {
    image: '/images/corporate-catering-dubai-hero.webp',
    title: 'Corporate Dining',
    description: 'Impress clients and colleagues with sophisticated corporate dining and boardroom catering.',
    link: '/corporate',
  },
  {
    image: '/images/villa-catering-dubai-hero.webp',
    title: 'Villas & Residences',
    description: 'Dedicated villa chef services for holiday homes, long-stay guests, and luxury residences across Dubai.',
    link: '/villas-private-residences',
  },
]

export default function ServicesSection() {
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
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            What We Do
          </span>
          <h2 className="font-playfair text-fluid-h2 text-white mt-4 mb-4">
            Tailored Culinary Experiences
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <Link
              key={service.link}
              to={service.link}
              className="service-card group block bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 gradient-overlay-bottom" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-h3 text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-body-sm font-medium uppercase tracking-wider text-gold group-hover:gap-3 transition-all duration-300">
                  Explore
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

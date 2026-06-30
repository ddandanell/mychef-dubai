import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'The entire experience was flawless. The chef arrived on time, the food was exceptional, and the presentation was worthy of a fine dining restaurant — in our own villa. We will absolutely book again.',
    author: 'Sarah M., Palm Jumeirah',
    event: 'Private Villa Dinner',
  },
  {
    quote: 'We hired myCHEF for a corporate event at our DIFC office. The team was professional, discreet, and the food was outstanding. Our clients were thoroughly impressed.',
    author: 'James R., Business Bay',
    event: 'Corporate Boardroom Lunch',
  },
  {
    quote: 'A magical evening. The chef prepared a 7-course dinner on our yacht with the Dubai skyline as our backdrop. Every course was a masterpiece.',
    author: 'Aisha K., Dubai Marina',
    event: 'Yacht Dinner',
  },
  {
    quote: 'We use myCHEF every time we visit Dubai. Having a private chef at our villa makes the holiday truly special. The kids love it too.',
    author: 'The Henderson Family, Emirates Hills',
    event: 'Family Holiday Dining',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)

  // Keep ref in sync for stable interval callback
  useEffect(() => { currentRef.current = current }, [current])

  const animateIn = useCallback(() => {
    if (quoteRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(quoteRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out' }
      )
    }
  }, [])

  const goTo = useCallback((index: number) => {
    const next = (index + testimonials.length) % testimonials.length
    setCurrent(next)
  }, [])

  const next = useCallback(() => {
    goTo(currentRef.current + 1)
  }, [goTo])

  const prev = useCallback(() => {
    goTo(currentRef.current - 1)
  }, [goTo])

  // Animate whenever current changes
  useEffect(() => {
    animateIn()
  }, [current, animateIn])

  // Auto-advance (stable callback using ref)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      goTo(currentRef.current + 1)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, goTo])

  // Entrance animation
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(headerRef.current, { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const t = testimonials[current]

  return (
    <section
      ref={sectionRef}
      className="bg-charcoal section-padding"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom max-w-[1000px]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 md:mb-12">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            Client Stories
          </span>
          <h2 className="font-playfair text-fluid-h2 text-white mt-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 z-10 w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 z-10 w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Quote Content */}
          <div ref={quoteRef} className="bg-charcoal-light px-6 py-10 md:px-12 md:py-12 text-center mx-8 md:mx-0">
            <Quote size={32} className="text-gold mx-auto mb-6" aria-hidden="true" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>

            <blockquote className="font-playfair text-lg md:text-xl text-white italic leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div>
              <p className="font-inter text-sm font-medium text-white">{t.author}</p>
              <p className="font-inter text-sm text-gray-400 mt-1">{t.event}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal ${
                  i === current ? 'bg-gold w-6' : 'bg-gray-500 hover:bg-gray-400 w-2.5'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

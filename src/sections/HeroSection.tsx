import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduced = prefersReducedMotion()
    const ctx = gsap.context(() => {
      if (reduced) {
        // Make everything visible immediately for reduced-motion users
        gsap.set([lineRef.current, headlineRef.current, subtextRef.current, ctaRef.current, statsRef.current], {
          opacity: 1, y: 0, width: 60,
        })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(lineRef.current,
        { width: 0, opacity: 0 },
        { width: 60, opacity: 1, duration: 0.5 }
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.2'
      )
      .fromTo(subtextRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(ctaRef.current?.children || [],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        '-=0.2'
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      )

      // Counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number')
      if (statNumbers) {
        statNumbers.forEach((el) => {
          const valueEl = el.querySelector('.stat-value')
          const targetAttr = el.getAttribute('data-target')
          if (!valueEl || !targetAttr) return
          const target = parseInt(targetAttr, 10)
          const suffix = el.getAttribute('data-suffix') || ''
          const obj = { val: 0 }
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            delay: 0.8,
            ease: 'power2.out',
            onUpdate: () => {
              valueEl.textContent = Math.round(obj.val) + suffix
            },
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // RAF-throttled parallax
  useEffect(() => {
    if (prefersReducedMotion() || !imageRef.current) return

    let scrollY = 0
    let ticking = false

    const updateTransform = () => {
      if (imageRef.current) {
        const rate = scrollY * 0.15
        imageRef.current.style.transform = `scale(1.05) translateY(${rate}px)`
      }
      ticking = false
    }

    const handleScroll = () => {
      scrollY = window.scrollY
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateTransform)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/images/home-hero.webp"
          alt="Premium private chef dining experience in Dubai"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-28 pb-28 md:pb-24">
        {/* Gold accent line */}
        <div ref={lineRef} className="gold-line mb-6 md:mb-8 opacity-0" />

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-playfair text-fluid-display font-semibold leading-tight opacity-0"
        >
          <span className="text-white block">Exceptional Dining,</span>
          <span className="text-gold font-normal block mt-1">Crafted for You</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="mt-5 md:mt-6 font-inter text-base md:text-body-lg font-light text-white/90 max-w-xl leading-relaxed opacity-0"
        >
          Premium private chef services and luxury catering across Dubai. From intimate villa dinners to grand yacht events — every experience is tailored to your taste.
        </p>

        {/* CTA Row */}
        <div ref={ctaRef} className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=home" className="btn-primary text-center">
            Request a Proposal
          </Link>
          <a href="#services" className="btn-secondary text-center">
            Browse Our Services
          </a>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="mt-12 md:mt-16 opacity-0"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
            <div className="text-center md:text-left">
              <div className="stat-number font-playfair text-2xl md:text-4xl text-gold font-semibold">
                <span className="text-gold">Private</span>
              </div>
              <div className="font-inter text-caption md:text-body-sm text-gray-400 uppercase tracking-wider mt-1">
                Events & Dinners
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="stat-number font-playfair text-2xl md:text-4xl text-gold font-semibold">
                <span className="text-gold">Chef-Led</span>
              </div>
              <div className="font-inter text-caption md:text-body-sm text-gray-400 uppercase tracking-wider mt-1">
                Hospitality Team
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="stat-number font-playfair text-2xl md:text-4xl text-gold font-semibold">
                <span className="text-gold">Dubai-wide</span>
              </div>
              <div className="font-inter text-caption md:text-body-sm text-gray-400 uppercase tracking-wider mt-1">
                Service Coverage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

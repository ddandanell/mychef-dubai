import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gold accent line
      gsap.fromTo(lineRef.current,
        { width: 0, opacity: 0 },
        { width: 60, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power3.out' }
      )

      // Headline
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      )

      // Subtext
      gsap.fromTo(subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.2, ease: 'power3.out' }
      )

      // CTA buttons
      gsap.fromTo(ctaRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1.5, stagger: 0.15, ease: 'power3.out' }
      )

      // Stats
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.8, ease: 'power3.out' }
      )

      // Counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number')
      if (statNumbers) {
        statNumbers.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10)
          const suffix = el.getAttribute('data-suffix') || ''
          gsap.fromTo({ val: 0 }, {
            val: 0,
          }, {
            val: target,
            duration: 2,
            delay: 1.8,
            ease: 'power2.out',
            onUpdate: function () {
              const current = Math.round(this.targets()[0].val)
              el.textContent = current + suffix
            },
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY
        const rate = scrollY * 0.3
        imageRef.current.style.transform = `scale(1.05) translateY(${rate * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-20"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: 'url(/hero-home.jpg)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-48 md:pb-40">
        {/* Gold accent line */}
        <div ref={lineRef} className="gold-line mb-8 opacity-0" />

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-playfair text-display-mobile md:text-[56px] lg:text-display font-semibold leading-tight opacity-0"
        >
          <span className="text-white block">Exceptional Dining,</span>
          <span className="text-gold font-normal block mt-1">Crafted for You</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="mt-6 font-inter text-lg md:text-body-lg font-light text-white/90 max-w-xl leading-relaxed opacity-0"
        >
          Premium private chef services and luxury catering across Dubai. From intimate villa dinners to grand yacht events — every experience is tailored to your taste.
        </p>

        {/* CTA Row */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
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
          className="absolute bottom-8 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto md:mt-16 opacity-0"
        >
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
              <div className="text-center md:text-left">
                <div
                  className="stat-number font-playfair text-2xl md:text-4xl text-gold font-semibold"
                  data-target="500"
                  data-suffix="+"
                >
                  0+
                </div>
                <div className="font-inter text-[11px] md:text-[13px] text-gray-400 uppercase tracking-wider mt-1">
                  Private Events Hosted
                </div>
              </div>
              <div className="text-center md:text-left">
                <div
                  className="stat-number font-playfair text-2xl md:text-4xl text-gold font-semibold"
                  data-target="50"
                  data-suffix="+"
                >
                  0+
                </div>
                <div className="font-inter text-[11px] md:text-[13px] text-gray-400 uppercase tracking-wider mt-1">
                  Expert Hospitality Team
                </div>
              </div>
              <div className="text-center md:text-left">
                <div
                  className="stat-number font-playfair text-2xl md:text-4xl text-gold font-semibold"
                  data-target="1"
                  data-suffix=""
                >
                  <span className="text-gold">Dubai-wide</span>
                </div>
                <div className="font-inter text-[11px] md:text-[13px] text-gray-400 uppercase tracking-wider mt-1">
                  Service Coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

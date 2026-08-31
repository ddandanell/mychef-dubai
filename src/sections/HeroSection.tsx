import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { deferNonCritical } from '../lib/deferNonCritical'
import { buildWhatsAppLink } from '../lib/whatsapp'

const WHATSAPP_LINK = buildWhatsAppLink(
  "Hi myCHEF, I'd like a quote. My date, guest count and area are:",
  { source: 'mychef.ae', medium: 'cta_button', campaign: 'home_whatsapp' }
)

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const playCountRef = useRef(0)
  const [loadVideo, setLoadVideo] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)
  const [videoDone, setVideoDone] = useState(false)

  // Mount the intro video only AFTER the window 'load' event, then on idle — so it
  // never slows the initial page start. It plays twice, then fades to the poster.
  //
  // Waiting for idle is not enough on its own. The file is ~1.2 MB, and on a
  // throttled mobile connection it became the LCP element at 13.8s while the
  // 72 KB poster it sits on top of was still queued behind it. On anything slow
  // or metered the video arrives long after the visitor has scrolled past, so
  // it costs the whole page start and delivers nothing. Skip it there.
  useEffect(() => {
    let done = false
    const skipVideo = () => {
      const nav = navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string }
      }
      const c = nav.connection
      if (c?.saveData) return true
      if (c?.effectiveType && ['slow-2g', '2g', '3g'].includes(c.effectiveType)) return true
      return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    }
    const mount = () => {
      if (done) return
      done = true
      if (skipVideo()) return
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
      if (w.requestIdleCallback) w.requestIdleCallback(() => setLoadVideo(true), { timeout: 2000 })
      else window.setTimeout(() => setLoadVideo(true), 600)
    }
    if (document.readyState === 'complete') mount()
    else window.addEventListener('load', mount, { once: true })
    return () => window.removeEventListener('load', mount)
  }, [])

  const handleVideoEnded = () => {
    playCountRef.current += 1
    if (playCountRef.current < 2) {
      videoRef.current?.play().catch(() => {})
    } else {
      setVideoDone(true) // fade video out → the poster image settles in
    }
  }

  useEffect(() => {
    const reduced = prefersReducedMotion()
    if (reduced) {
      gsap.set([headlineRef.current, subtextRef.current, ctaRef.current, statsRef.current], {
        opacity: 1, y: 0,
      })
      gsap.set(lineRef.current, { opacity: 1, width: 60 })
      return
    }

    let ctx: gsap.Context | null = null
    deferNonCritical(() => {
      ctx = gsap.context(() => {
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
    })

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  // RAF-throttled parallax — registered after the first paint to keep the main thread free during LCP.
  useEffect(() => {
    if (prefersReducedMotion() || !imageRef.current) return

    let scrollY = 0
    let ticking = false
    let active = true

    const updateTransform = () => {
      if (!active) return
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

    deferNonCritical(() => {
      if (!active) return
      window.addEventListener('scroll', handleScroll, { passive: true })
    })

    return () => {
      active = false
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85dvh] md:min-h-[80dvh] flex items-center justify-center overflow-hidden -mt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          {/*
            We use a responsive srcset here. The image files are currently the single hero
            image; as future work we can add dedicated small/medium/large WebP files.
          */}
          <source
            type="image/webp"
            srcSet="/images/home-hero.webp 1344w, /images/home-hero.webp 960w, /images/home-hero.webp 640w"
            sizes="100vw"
          />
          <img
            ref={imageRef}
            src="/images/home-hero.webp"
            alt="Private chef plating a fine-dining course in a Dubai penthouse kitchen with a skyline view"
            width={1344}
            height={672}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
          />
        </picture>
        {/* Intro video — plays twice, then fades to the poster image above. Lazy-mounted. */}
        {loadVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/images/home-hero.webp"
            aria-hidden="true"
            onCanPlay={() => { setVideoVisible(true); videoRef.current?.play().catch(() => {}) }}
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${videoVisible && !videoDone ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/videos/home-hero.webm" type="video/webm" />
            <source src="/videos/home-hero.mp4" type="video/mp4" />
          </video>
        )}
        {/* Standard hero scrim — identical to every other hero (see PageHero HERO_SCRIM) */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom" style={{ paddingTop: 'calc(4.25rem + env(safe-area-inset-top))', paddingBottom: '3.5rem' }}>
        {/* Gold accent line */}
        <div ref={lineRef} className="gold-line mb-4 md:mb-5 opacity-0" />

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="hero-title text-white opacity-0 max-w-[38rem] lg:max-w-[46rem] mx-auto md:mx-0 text-center md:text-left"
        >
          myCHEF Dubai — a chef for your kitchen, catering for your event
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="hero-copy mt-4 md:mt-5 text-white/90 max-w-[34rem] mx-auto md:mx-0 opacity-0 text-center md:text-left"
        >
          A chef who cooks in your kitchen, or catering for events of any size. The food is designed around you, and every chef is vetted before they cook.
        </p>

        {/* CTA Row */}
        <div ref={ctaRef} className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start">
          <Link to="/private-chef-dubai" className="btn-primary text-center">
            Private chef
          </Link>
          <Link to="/catering-dubai" className="btn-secondary text-center">
            Catering
          </Link>
        </div>
        <p className="mt-3 font-inter text-body-sm text-white/75 text-center md:text-left">
          Or{' '}
          <Link to="/inquiry" className="text-gold underline underline-offset-4 hover:text-gold-light">
            get a tailored quote
          </Link>
          {' · '}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-4 hover:text-gold-light"
          >
            WhatsApp
          </a>
        </p>
        <p className="mt-4 font-inter text-body-sm text-white/70 flex items-center gap-2 justify-center md:justify-start">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
          Typical reply within 15 min during business hours, 9am to 11pm · No obligation
        </p>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="mt-8 md:mt-10 opacity-0"
        >
          {/* Three facts from this page, not three adjectives styled as counters */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 max-w-2xl mx-auto md:mx-0 sm:divide-x sm:divide-white/15">
            <div className="text-center md:text-left sm:px-6 sm:first:pl-0">
              <dt className="font-inter text-caption text-white/60 uppercase tracking-wider">Where we cook</dt>
              <dd className="stat-number font-playfair text-2xl md:text-3xl text-white mt-1 leading-tight">Villas, yachts &amp; homes</dd>
            </div>
            <div className="text-center md:text-left sm:px-6">
              <dt className="font-inter text-caption text-white/60 uppercase tracking-wider">Guests per booking</dt>
              <dd className="stat-number font-playfair text-2xl md:text-3xl text-white mt-1 leading-tight">2 to 500+</dd>
            </div>
            <div className="text-center md:text-left sm:px-6">
              <dt className="font-inter text-caption text-white/60 uppercase tracking-wider">Kitchen standard</dt>
              <dd className="stat-number font-playfair text-2xl md:text-3xl text-white mt-1 leading-tight">Halal-first</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

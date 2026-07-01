import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  image?: string
  imageAlt?: string
  cta?: { label: string; href: string; external?: boolean }
  secondaryCta?: { label: string; href: string; external?: boolean }
  breadcrumb?: { label: string; href?: string }[]
  minHeight?: 'full' | 'tall' | 'medium' | 'short'
  align?: 'left' | 'center'
  children?: React.ReactNode
  overlay?: 'dark' | 'medium' | 'light'
  reducedMotion?: boolean
}

const heightClasses = {
  full: 'min-h-[90dvh] md:min-h-[100dvh]',
  tall: 'min-h-[75dvh] md:min-h-[85dvh]',
  medium: 'min-h-[55dvh] md:min-h-[65dvh]',
  short: 'min-h-[40dvh] md:min-h-[50dvh]',
}

const overlayClasses = {
  dark: 'from-black/40 via-black/50 to-black/85',
  medium: 'from-black/30 via-black/40 to-black/75',
  light: 'from-black/20 via-black/30 to-black/60',
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  cta,
  secondaryCta,
  breadcrumb,
  minHeight = 'tall',
  align = 'center',
  children,
  overlay = 'dark',
  reducedMotion = false,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduced = reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const els = contentRef.current?.children
      if (!els) return
      if (reduced) {
        gsap.set(els, { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(els,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.1 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [reducedMotion])

  useEffect(() => {
    if (!imageRef.current || reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let scrollY = 0
    let ticking = false
    const update = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(1.05) translateY(${scrollY * 0.12}px)`
      }
      ticking = false
    }
    const onScroll = () => {
      scrollY = window.scrollY
      if (!ticking) {
        rafRef.current = requestAnimationFrame(update)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reducedMotion])

  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <section
      ref={sectionRef}
      className={`relative flex justify-center overflow-hidden -mt-16 ${heightClasses[minHeight]}`}
    >
      {/* Background */}
      {image ? (
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src={image}
            alt={imageAlt}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlay]}`} />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 container-custom flex flex-col justify-center pt-28 pb-20 md:pb-24 ${alignmentClass}`}
      >
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={`flex flex-wrap items-center gap-2 font-inter text-caption text-gray-400 ${align === 'center' ? 'justify-center' : ''}`}>
              {breadcrumb.map((item, i) => (
                <li key={item.label + i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-gray-600">/</span>}
                  {item.href ? (
                    <Link to={item.href} className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">
            {eyebrow}
          </span>
        )}

        <h1 className="font-playfair text-fluid-h1 text-white" style={{ lineHeight: '1.1' }}>
          {title}
        </h1>

        {subtitle && (
          <p className={`mt-5 md:mt-6 font-inter text-base md:text-body-lg text-white/85 max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}

        {(cta || secondaryCta) && (
          <div className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
            {cta && (
              cta.external ? (
                <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary text-center focus-visible:ring-offset-black">
                  {cta.label}
                </a>
              ) : (
                <Link to={cta.href} className="btn-primary text-center focus-visible:ring-offset-black">
                  {cta.label}
                </Link>
              )
            )}
            {secondaryCta && (
              secondaryCta.external ? (
                <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center focus-visible:ring-offset-black">
                  {secondaryCta.label}
                </a>
              ) : (
                <Link to={secondaryCta.href} className="btn-secondary text-center focus-visible:ring-offset-black">
                  {secondaryCta.label}
                </Link>
              )
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}

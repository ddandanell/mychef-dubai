import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { deferNonCritical } from '../lib/deferNonCritical'
import { cn } from '../lib/utils'

type OverlayName = 'dark' | 'medium' | 'light' | 'left' | 'cinematic'

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  imageSrcSet?: string
  cta?: { label: string; href: string; external?: boolean }
  secondaryCta?: { label: string; href: string; external?: boolean }
  breadcrumb?: { label: string; href?: string }[]
  minHeight?: 'full' | 'tall' | 'large' | 'medium' | 'short'
  align?: 'left' | 'center'
  children?: React.ReactNode
  overlay?: OverlayName
  /** Bolder H1 (weight, size, tracking, text-shadow). Opt-in so shared heroes stay unchanged. */
  titleEmphasis?: boolean
  /** Gold accent rule above the H1 — homepage-style luxury cue. */
  accentLine?: boolean
  imagePosition?: string
  reducedMotion?: boolean
}

const heightClasses = {
  full: 'min-h-[90dvh] md:min-h-[100dvh]',
  tall: 'min-h-[75dvh] md:min-h-[85dvh]',
  large: 'min-h-[60dvh] md:min-h-[70dvh]',
  medium: 'min-h-[55dvh] md:min-h-[65dvh]',
  short: 'min-h-[40dvh] md:min-h-[50dvh]',
}

const overlayLayers: Record<OverlayName, string[]> = {
  dark: ['bg-gradient-to-b from-black/40 via-black/50 to-black/85'],
  medium: ['bg-gradient-to-b from-black/30 via-black/40 to-black/75'],
  light: ['bg-gradient-to-b from-black/20 via-black/30 to-black/60'],
  left: ['bg-gradient-to-r from-black/88 via-black/70 to-black/35'],
  // Left-weighted cinematic scrim: dark enough for white type, photo still readable on the right.
  cinematic: [
    'bg-black/40',
    'bg-gradient-to-r from-black/94 via-black/78 to-black/30',
    'bg-gradient-to-b from-black/55 via-transparent to-black/65',
  ],
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  imageWidth = 1344,
  imageHeight = 752,
  imageSrcSet,
  cta,
  secondaryCta,
  breadcrumb,
  minHeight = 'tall',
  align = 'center',
  children,
  overlay = 'dark',
  titleEmphasis = false,
  accentLine = false,
  imagePosition = 'center',
  reducedMotion = false,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduced = reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      const els = contentRef.current?.children
      if (els) gsap.set(els, { opacity: 1, y: 0 })
      return
    }

    let ctx: gsap.Context | null = null
    deferNonCritical(() => {
      ctx = gsap.context(() => {
        const els = contentRef.current?.children
        if (!els) return
        gsap.fromTo(els,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.1 }
        )
      }, sectionRef)
    })

    return () => {
      if (ctx) ctx.revert()
    }
  }, [reducedMotion])

  useEffect(() => {
    if (!imageRef.current || reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let scrollY = 0
    let ticking = false
    let active = true
    const update = () => {
      if (!active) return
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
    deferNonCritical(() => {
      if (!active) return
      window.addEventListener('scroll', onScroll, { passive: true })
    })
    return () => {
      active = false
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
          <picture>
            {image?.endsWith('.webp') && (
              <source
                type="image/webp"
                srcSet={imageSrcSet || `${image} 1344w, ${image} 960w, ${image} 640w`}
                sizes="100vw"
              />
            )}
            <img
              ref={imageRef}
              src={image}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
              style={{ objectPosition: imagePosition }}
            />
          </picture>
          {overlayLayers[overlay].map((layer) => (
            <div key={layer} className={`absolute inset-0 ${layer}`} />
          ))}
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
            <ol className={`flex flex-wrap items-center gap-2 font-inter text-caption ${overlay === 'cinematic' ? 'text-white/70' : 'text-gray-400'} ${align === 'center' ? 'justify-center' : ''}`}>
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

        {accentLine && <div className="gold-line mb-5 md:mb-7" />}

        <h1
          className={cn(
            'font-playfair text-white',
            titleEmphasis
              ? 'font-semibold tracking-tight text-[clamp(2.25rem,5.2vw,4rem)] drop-shadow-[0_2px_28px_rgba(0,0,0,0.72)]'
              : 'text-fluid-h1',
            align === 'left' && (titleEmphasis ? 'max-w-3xl' : 'max-w-2xl'),
          )}
          style={{ lineHeight: titleEmphasis ? 1.05 : 1.1 }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={cn(
              'mt-5 md:mt-6 font-inter text-base md:text-body-lg max-w-2xl leading-relaxed',
              titleEmphasis || overlay === 'cinematic' ? 'text-white/92 drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]' : 'text-white/85',
              align === 'center' && 'mx-auto',
            )}
          >
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

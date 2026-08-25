import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { deferNonCritical } from '../lib/deferNonCritical'
import { cn } from '../lib/utils'

type OverlayName = 'dark' | 'medium' | 'light' | 'left' | 'cinematic'

function HeroAction({
  cta,
  className,
}: {
  cta: { label: string; href: string; external?: boolean }
  className: string
}) {
  const isHash = cta.href.startsWith('#')
  if (cta.external || isHash) {
    return (
      <a
        href={cta.href}
        {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={className}
      >
        {cta.label}
      </a>
    )
  }
  return (
    <Link to={cta.href} className={className}>
      {cta.label}
    </Link>
  )
}

interface PageHeroProps {
  eyebrow?: string
  /** "quiet": eyebrow inside the H1 (keyword stays in the heading), controlled serif scale, 55% copy column, restrained buttons. */
  variant?: 'default' | 'quiet'
  title: React.ReactNode
  subtitle?: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  imageSrcSet?: string
  /** Optional background video (mp4). Lazy-loaded after the page is idle; never render-blocking. */
  videoSrc?: string
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
  full: 'min-h-[90dvh] md:min-h-[80dvh]',
  tall: 'min-h-[75dvh] md:min-h-[70dvh]',
  large: 'min-h-[60dvh] md:min-h-[58dvh]',
  medium: 'min-h-[55dvh] md:min-h-[52dvh]',
  short: 'min-h-[40dvh] md:min-h-[42dvh]',
}

// Default hero scrim — dark enough for white type, light enough to keep the photograph.
export const HERO_SCRIM = [
  'bg-black/45',
  'bg-gradient-to-t from-black/80 via-black/30 to-black/45',
] as const

/** Copy-left cluster heroes: keep the right side of the photograph alive. */
export const HERO_SCRIM_LEFT = [
  'bg-gradient-to-r from-black/90 via-black/55 to-black/18',
  'bg-gradient-to-t from-black/72 via-transparent to-black/35',
] as const

const overlayLayers: Record<OverlayName, readonly string[]> = {
  dark: HERO_SCRIM,
  medium: HERO_SCRIM,
  light: HERO_SCRIM,
  left: HERO_SCRIM_LEFT,
  cinematic: HERO_SCRIM,
}

export default function PageHero({
  eyebrow,
  variant = 'default',
  title,
  subtitle,
  image,
  imageAlt = '',
  imageWidth = 1344,
  imageHeight = 752,
  imageSrcSet,
  videoSrc,
  cta,
  secondaryCta,
  breadcrumb,
  minHeight = 'tall',
  align = 'center',
  children,
  overlay = 'dark',
  accentLine = false,
  imagePosition = 'center',
  reducedMotion = false,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)
  const [loadVideo, setLoadVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  // Mount the background video only AFTER the window 'load' event (every other
  // critical resource has finished), then on the next idle tick — so the video
  // can never slow down the initial page start. Poster stays the instant LCP.
  // (Intentionally not gated on prefers-reduced-motion per owner request; muted + subtle.)
  useEffect(() => {
    if (!videoSrc) return
    let done = false
    const mount = () => {
      if (done) return
      done = true
      const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }
      if (w.requestIdleCallback) w.requestIdleCallback(() => setLoadVideo(true), { timeout: 2000 })
      else window.setTimeout(() => setLoadVideo(true), 600)
    }
    if (document.readyState === 'complete') mount()
    else window.addEventListener('load', mount, { once: true })
    return () => window.removeEventListener('load', mount)
  }, [videoSrc])

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
          <picture className="absolute inset-0 block h-full w-full">
            {image?.endsWith('.webp') && (
              <source
                type="image/webp"
                srcSet={imageSrcSet || `${image} ${imageWidth}w`}
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
              className="h-full w-full object-cover scale-105 will-change-transform"
              style={{ objectPosition: imagePosition }}
            />
          </picture>
          {/* Optional background video — mounts only after the page is idle, so it never
              blocks the rest of the site. The poster image above stays the instant LCP;
              the video fades in over it when ready. Skipped for reduced-motion users. */}
          {videoSrc && loadVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={image}
              aria-hidden="true"
              onCanPlay={(e) => {
                setVideoReady(true)
                e.currentTarget.play().catch(() => {})
              }}
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out',
                videoReady ? 'opacity-100' : 'opacity-0',
              )}
              style={{ objectPosition: imagePosition }}
            >
              {videoSrc.endsWith('.mp4') && <source src={videoSrc.replace(/\.mp4$/, '.webm')} type="video/webm" />}
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
          {overlayLayers[overlay].map((layer) => (
            <div key={layer} className={`absolute inset-0 ${layer}`} />
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />
      )}

      {/* Breadcrumb — pinned top-left on every hero, with a readable scrim so it works over any photo */}
      {breadcrumb && breadcrumb.length > 0 && (
        <nav aria-label="Breadcrumb" className="absolute top-20 left-0 right-0 z-20">
          <div className="container-custom">
            <ol className="inline-flex flex-wrap items-center gap-2 font-inter text-caption bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full ring-1 ring-white/10">
              {breadcrumb.map((item, i) => (
                <li key={item.label + i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/40" aria-hidden>/</span>}
                  {item.href ? (
                    <Link to={item.href} className="text-white/85 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gold font-medium">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 container-custom flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-16 ${alignmentClass}`}
      >
        {eyebrow && variant !== 'quiet' && (
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4 drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)]">
            {eyebrow}
          </span>
        )}

        {accentLine && <div className="gold-line mb-5 md:mb-7" />}

        {variant === 'quiet' ? (
          <h1 className={cn('hero-title--quiet text-white lg:max-w-[58%]', align === 'center' && 'mx-auto')}>
            {eyebrow && (
              <span className="hero-eyebrow--quiet mb-5 block text-gold drop-shadow-[0_1px_10px_rgba(0,0,0,0.65)]">
                {eyebrow}
              </span>
            )}
            {title}
          </h1>
        ) : (
          <h1 className={cn('hero-title text-white max-w-[900px]', align === 'center' && 'mx-auto')}>
            {title}
          </h1>
        )}

        {subtitle && (
          <p
            className={cn(
              variant === 'quiet' ? 'hero-copy--quiet mt-6 text-white/90 lg:max-w-[58%]' : 'hero-copy mt-5 md:mt-7 text-white/90 max-w-[600px]',
              align === 'center' && 'mx-auto',
            )}
          >
            {subtitle}
          </p>
        )}

        {(cta || secondaryCta) && (
          <div className={`${variant === 'quiet' ? 'mt-8' : 'mt-8 md:mt-10'} flex flex-col sm:flex-row gap-3 sm:gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
            {cta && (
              <HeroAction
                cta={cta}
                className={variant === 'quiet' ? 'hero-btn--quiet hero-btn--quiet-primary text-center focus-visible:ring-offset-black' : 'btn-primary text-center focus-visible:ring-offset-black'}
              />
            )}
            {secondaryCta && (
              <HeroAction
                cta={secondaryCta}
                className={variant === 'quiet' ? 'hero-btn--quiet hero-btn--quiet-secondary text-center focus-visible:ring-offset-black' : 'btn-secondary text-center focus-visible:ring-offset-black'}
              />
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}

import type { CSSProperties, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * myCHEF design-system primitives.
 * One source of truth for layout, rhythm, typography and image treatment.
 * These compose the existing tokens (container-custom, section-padding,
 * hero-title, gold / gold-ink, editorial-image) into reusable components so
 * pages stop hand-rolling the same utility strings.
 */

type Tone = 'ivory' | 'white' | 'dark' | 'charcoal'
type Rhythm = 'chapter' | 'standard' | 'connected' | 'none'

const TONE_CLASSES: Record<Tone, string> = {
  ivory: 'bg-cream text-black',
  white: 'bg-white text-black',
  dark: 'bg-black text-white',
  charcoal: 'bg-charcoal text-white',
}

// Section rhythm — chapter breaks breathe more; connected sections sit closer.
const RHYTHM_CLASSES: Record<Rhythm, string> = {
  chapter: 'pt-[clamp(6rem,4rem+7vw,11rem)] pb-[clamp(6rem,4rem+7vw,11rem)]',
  standard: 'section-padding',
  connected: 'pt-[clamp(3rem,2rem+3vw,5rem)] pb-[clamp(3rem,2rem+3vw,5rem)]',
  none: '',
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('container-custom', className)}>{children}</div>
}

export function Section({
  tone = 'white',
  rhythm = 'standard',
  id,
  className,
  children,
}: {
  tone?: Tone
  rhythm?: Rhythm
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cn(TONE_CLASSES[tone], RHYTHM_CLASSES[rhythm], id && 'scroll-mt-24', className)}>
      {children}
    </section>
  )
}

/** Small gold label. Auto-readable: bright gold on dark, gold-ink on light. */
export function Eyebrow({
  tone = 'light',
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  className?: string
  children: ReactNode
}) {
  return (
    <p
      className={cn(
        'font-inter text-caption font-medium uppercase tracking-[0.14em]',
        tone === 'dark' ? 'text-gold' : 'text-gold-ink',
        className,
      )}
    >
      {children}
    </p>
  )
}

const HEADING_SIZES = {
  h1: 'text-fluid-h1',
  h2: 'text-fluid-h2',
  h3: 'text-fluid-h3',
  h4: 'text-h4',
} as const

export function DisplayHeading({
  as: As = 'h2' as ElementType,
  size = 'h2',
  className,
  style,
  children,
}: {
  as?: ElementType
  size?: keyof typeof HEADING_SIZES
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  return (
    <As className={cn('font-playfair leading-[1.08]', HEADING_SIZES[size], className)} style={style}>
      {children}
    </As>
  )
}

const BODY_TONE = {
  light: 'text-gray-600',
  muted: 'text-gray-500',
  dark: 'text-gray-400',
  'dark-strong': 'text-gray-300',
} as const

export function BodyCopy({
  tone = 'light',
  muted = false,
  className,
  children,
}: {
  tone?: keyof typeof BODY_TONE
  /** @deprecated use tone="muted" */
  muted?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <p className={cn('font-inter text-body leading-relaxed max-w-[65ch]', BODY_TONE[muted ? 'muted' : tone], className)}>
      {children}
    </p>
  )
}

export function EditorialCard({
  tone = 'light',
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('p-6 md:p-8 border', tone === 'dark' ? 'border-gold/25 bg-white/[0.03]' : 'border-gray-200 bg-white', className)}>
      {children}
    </div>
  )
}

export function EditorialImage({
  src,
  alt,
  width,
  height,
  aspect = 'aspect-[4/5]',
  objectPosition = 'center',
  framed = false,
  eager = false,
  className,
}: {
  src: string
  alt: string
  width: number
  height: number
  aspect?: string
  objectPosition?: string
  framed?: boolean
  eager?: boolean
  className?: string
}) {
  return (
    <div className={cn('relative overflow-hidden', aspect, framed && 'editorial-image', className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
        loading={eager ? 'eager' : 'lazy'}
        {...(eager ? { fetchPriority: 'high' as const } : {})}
        decoding="async"
      />
    </div>
  )
}

export function CTAGroup({
  align = 'start',
  className,
  children,
}: {
  align?: 'start' | 'center'
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-4', align === 'center' ? 'items-center justify-center' : 'items-start', className)}>
      {children}
    </div>
  )
}

import type { CSSProperties, ElementType, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CalendarCheck,
  CalendarClock,
  CircleHelp,
  ClipboardCheck,
  ClipboardList,
  Columns2,
  Compass,
  Equal,
  EyeOff,
  GraduationCap,
  Headset,
  House,
  IdCard,
  Images,
  Layers,
  LayoutGrid,
  LifeBuoy,
  List,
  ListChecks,
  MapPin,
  MessageSquare,
  MessageSquareQuote,
  NotebookPen,
  PartyPopper,
  ReceiptText,
  RefreshCw,
  Replace,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  UserRoundCheck,
  Users,
  Utensils,
  UtensilsCrossed,
  Workflow,
} from 'lucide-react'
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

type LabelTone = 'light' | 'dark'
type LabelAlign = 'start' | 'center'

/** Editorial section marker: icon — rule — uppercase label. Always secondary to the serif headline. */
export function SectionLabel({
  icon,
  tone = 'light',
  align = 'start',
  className,
  id,
  children,
}: {
  icon?: LucideIcon
  tone?: LabelTone
  align?: LabelAlign
  className?: string
  id?: string
  children: ReactNode
}) {
  const Icon =
    icon ?? (typeof children === 'string' ? iconForSectionLabel(children) : Sparkles)
  return (
    <p
      id={id}
      className={cn(
        'mb-8 flex items-center gap-3 font-inter text-[12.5px] font-medium uppercase tracking-[0.12em] md:text-[14px]',
        tone === 'dark' ? 'text-gold' : 'text-gold-ink',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <Icon aria-hidden className="size-5 shrink-0 md:size-6" strokeWidth={1.5} />
      <span aria-hidden className="inline-block h-px w-8 shrink-0 bg-current md:w-11" />
      <span>{children}</span>
    </p>
  )
}

/** Pick a Lucide icon from the section's meaning, not just the first word. */
export function iconForSectionLabel(label: string): LucideIcon {
  const l = label.toLowerCase()
  if (/\bfaq\b/.test(l)) return CircleHelp
  if (/not this page/.test(l)) return ArrowUpRight
  if (/same logic/.test(l)) return Equal
  if (/not the solution/.test(l)) return Replace
  if (/the split/.test(l)) return Columns2
  if (/tell us about the job|the job/.test(l)) return ClipboardList
  if (/before anyone|put forward|vet/.test(l)) return ClipboardCheck
  if (/identity|background/.test(l)) return IdCard
  if (/dedicated contact|whatsapp first|coverage/.test(l)) return Headset
  if (/client feedback/.test(l)) return MessageSquare
  if (/after a rating/.test(l)) return SlidersHorizontal
  if (/household conduct/.test(l)) return House
  if (/the overview|five parts/.test(l)) return LayoutGrid
  if (/why it is managed|why it is/.test(l)) return Workflow
  if (/how often|rhythm/.test(l)) return CalendarClock
  if (/^training$/.test(l)) return GraduationCap
  if (/backup/.test(l)) return LifeBuoy
  if (/discretion/.test(l)) return EyeOff
  if (/where we serve|where .+ (work|shine|help|fit|matter|live|come|essential)|locations?/.test(l)) return MapPin
  if (/included|what is included|what's included/.test(l)) return ListChecks
  if (/how it works|the process|five stages|how we |how does/.test(l)) return ListChecks
  if (/menu/.test(l)) return UtensilsCrossed
  if (/who we|who your|who it|who we feed|who we serve/.test(l)) return Users
  if (/pric|budget|indicative|from aed|rates?/.test(l)) return ReceiptText
  if (/privacy|security/.test(l)) return ShieldCheck
  if (/quality|standard|guarantee|certified/.test(l)) return BadgeCheck
  if (/gallery/.test(l)) return Images
  if (/client reviews/.test(l)) return Star
  if (/review|testimonial/.test(l)) return MessageSquareQuote
  if (/guide|resource|topic|blog/.test(l)) return BookOpen
  if (/package|plan|membership/.test(l)) return Layers
  if (/experienc|what we create|the experience/.test(l)) return Sparkles
  if (/celebrat|occasion|ways to/.test(l)) return PartyPopper
  if (/when to book|book mychef/.test(l)) return CalendarCheck
  if (/side-by-side|both|compare/.test(l)) return Columns2
  if (/explore|continue/.test(l)) return Compass
  if (/on this page/.test(l)) return List
  if (/product|household|what this is|house you want/.test(l)) return House
  if (/team|our chefs|the chefs|matching|chef levels|levels/.test(l)) return UserRoundCheck
  if (/trust/.test(l)) return ShieldCheck
  if (/food profile/.test(l)) return NotebookPen
  if (/continuity/.test(l)) return RefreshCw
  if (/star chef|our chefs/.test(l)) return Star
  if (/italian|cuisine|authentic|catering/.test(l)) return UtensilsCrossed
  if (/service/.test(l)) return Utensils
  return Sparkles
}

/** @deprecated Prefer SectionLabel with an explicit icon. Kept as an alias. */
export const Eyebrow = SectionLabel

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

/**
 * Numbered sequence on a gold rail — the systemized step treatment.
 * Do not render sequences as wrapping 01 → 02 flex lines; they fall apart.
 */
export function SequenceRail({
  steps,
  className,
}: {
  steps: readonly string[]
  className?: string
}) {
  const n = steps.length
  const cols =
    n <= 4
      ? 'lg:grid-cols-4'
      : n === 5
        ? 'lg:grid-cols-5'
        : n === 6
          ? 'lg:grid-cols-3 xl:grid-cols-6'
          : 'lg:grid-cols-4'

  return (
    <ol className={cn('relative grid grid-cols-1 gap-y-8 lg:gap-x-8 lg:gap-y-10', cols, className)}>
      <span className="pointer-events-none absolute top-2 bottom-2 left-[4px] w-px bg-gold/30 lg:hidden" aria-hidden />
      <span className="pointer-events-none absolute top-[4px] right-0 left-0 hidden h-px bg-gold/30 lg:block" aria-hidden />
      {steps.map((step, i) => (
        <li key={step} className="relative pl-8 lg:pl-0 lg:pt-8">
          <span className="absolute top-[6px] left-0 h-[9px] w-[9px] bg-gold-ink lg:top-0" aria-hidden />
          <p className="mb-3 flex items-center gap-3 font-playfair text-h4 leading-none text-gold-ink select-none">
            {String(i + 1).padStart(2, '0')}
            {i < n - 1 && (
              <span className="hidden font-inter text-body text-gold/60 lg:inline">→</span>
            )}
          </p>
          <p className="max-w-[38ch] font-inter text-body-sm leading-relaxed text-gray-700">{step}</p>
        </li>
      ))}
    </ol>
  )
}

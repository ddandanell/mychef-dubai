import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookOpen,
  ClipboardList,
  CookingPot,
  MessageCircleHeart,
  RotateCcw,
  Star,
  UserSearch,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Step {
  num: string
  title: string
  body: string
  points?: readonly string[]
}

interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

interface ChefThumb {
  src: string
  name: string
}

const PHASES = ['Understand', 'Match', 'Learn', 'Deliver', 'Improve'] as const
const PHASE_ICONS = [ClipboardList, UserSearch, BookOpen, CookingPot, MessageCircleHeart] as const
const BRIEF_ROWS = [
  { k: 'Meals a week', v: 'How often the house eats with a chef' },
  { k: 'Service days', v: 'Which days, and how long each one is' },
  { k: 'What “healthy” means here', v: 'This house — not a generic programme' },
]
const PREF_TAGS = ['Breakfast', 'Children', 'No shellfish', '19:30 dinner', 'Quiet service', 'Oat milk']

export default function ProcessJourney({
  steps,
  deliverPhoto,
  chefThumbs,
}: {
  steps: readonly Step[]
  deliverPhoto: Photo
  chefThumbs: ChefThumb[]
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced || !rootRef.current) return
    const ctx = gsap.context(() => {
      if (fillRef.current) {
        gsap.fromTo(
          fillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top',
            scrollTrigger: { trigger: rootRef.current, start: 'top 32%', end: 'bottom 68%', scrub: 0.6 },
          },
        )
      }
      const stepEls = rootRef.current!.querySelectorAll<HTMLElement>('[data-step]')
      stepEls.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 62%',
          end: 'bottom 45%',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  const numberClass = (i: number) =>
    reduced || i === active ? 'text-gold' : i < active ? 'text-gold/55' : 'text-gold/25'
  const headlineClass = (i: number) => (reduced || i <= active ? 'text-black' : 'text-black/70')

  const renderVisual = (i: number) => {
    switch (i) {
      case 0:
        return (
          <dl className="space-y-6">
            {BRIEF_ROWS.map((row) => (
              <div key={row.k} className="border-b border-gold/20 pb-5 last:border-0 last:pb-0">
                <dt className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-2">{row.k}</dt>
                <dd className="font-playfair text-h4 text-black">{row.v}</dd>
              </div>
            ))}
          </dl>
        )
      case 1:
        return (
          <div className="flex items-end justify-center gap-5 md:gap-8 min-h-[240px]">
            {chefThumbs.slice(0, 3).map((chef, idx) => {
              const selected = idx === 1
              return (
                <figure key={chef.src} className="text-center">
                  <div
                    className={`overflow-hidden ${
                      selected
                        ? 'w-28 h-36 md:w-36 md:h-44 ring-2 ring-gold ring-offset-4 ring-offset-cream'
                        : 'w-20 h-28 md:w-24 md:h-32 opacity-45 grayscale'
                    }`}
                  >
                    <img src={chef.src} alt={chef.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  {selected && (
                    <figcaption className="mt-3 font-inter text-caption uppercase tracking-[0.14em] text-gold">
                      Matched
                    </figcaption>
                  )}
                </figure>
              )
            })}
          </div>
        )
      case 2:
        return (
          <div className="flex flex-wrap gap-3">
            {PREF_TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-gold/30 px-4 py-2 font-inter text-body-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )
      case 3:
        return (
          <figure className="m-0">
            <div className="relative overflow-hidden aspect-[16/10] w-full">
              <img
                src={deliverPhoto.src}
                alt={deliverPhoto.alt}
                width={deliverPhoto.width}
                height={deliverPhoto.height}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 55%' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 font-playfair text-h4 text-black">
              The household does not manage dinner. It simply happens.
            </figcaption>
          </figure>
        )
      case 4:
        return (
          <div>
            <div className="flex items-center justify-between border border-gold/30 px-5 py-4 mb-6">
              <span className="font-inter text-body text-gray-600">How was this week?</span>
              <span className="inline-flex gap-1" aria-label="5 out of 5">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} size={18} className="text-gold fill-gold" aria-hidden />
                ))}
              </span>
            </div>
            <p className="flex items-start gap-3 font-inter text-body-sm text-gray-600 leading-relaxed">
              <RotateCcw size={18} className="text-gold mt-0.5 flex-shrink-0" aria-hidden />
              <span>
                Every review updates your <span className="text-black">Food Profile</span> — so next week needs less
                explaining.
              </span>
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <div className="pointer-events-none absolute top-8 bottom-8 left-[2.5rem] md:left-[4.15rem] w-px bg-gold/15" aria-hidden />
      <div
        ref={fillRef}
        className="pointer-events-none absolute top-8 left-[2.5rem] md:left-[4.15rem] w-px bg-gold origin-top"
        style={{ height: 'calc(100% - 4rem)', transform: reduced ? 'scaleY(1)' : 'scaleY(0)' }}
        aria-hidden
      />

      {steps.map((step, i) => {
        const PhaseIcon = PHASE_ICONS[i]
        return (
          <div
            key={step.num}
            data-step
            className="relative grid grid-cols-[5.25rem_1fr] md:grid-cols-[8.5rem_1fr] gap-6 md:gap-12 pb-24 md:pb-32 last:pb-12"
          >
            <div className="relative text-right pt-2">
              <span
                className={`hidden md:block absolute -right-[5px] top-6 h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
                  reduced || i <= active ? 'bg-gold' : 'bg-gold/25'
                }`}
                aria-hidden
              />
              <span
                className={`font-inter font-light leading-none whitespace-nowrap tabular-nums text-5xl md:text-6xl tracking-tight transition-colors duration-500 ${numberClass(i)}`}
              >
                {step.num}
              </span>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 pt-1">
              <div>
                <p className="font-inter text-caption font-medium uppercase tracking-[0.2em] text-gold mb-4 inline-flex items-center gap-2">
                  <PhaseIcon size={14} strokeWidth={1.75} aria-hidden />
                  {PHASES[i]}
                </p>
                <h3
                  className={`font-playfair text-h2 leading-[1.12] mb-6 transition-colors duration-500 ${headlineClass(i)}`}
                >
                  {step.title}
                </h3>
                <p className="font-inter text-body text-gray-600 leading-relaxed mb-8">{step.body}</p>
                {step.points && (
                  <ul className="space-y-4">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-3 font-inter text-body-sm text-gray-600 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="border border-gold/25 bg-white/70 p-7 md:p-10 min-h-[280px] flex items-center">
                {renderVisual(i)}
              </div>
            </div>
          </div>
        )
      })}

      <div className="grid grid-cols-[5.25rem_1fr] md:grid-cols-[8.5rem_1fr] gap-6 md:gap-12">
        <div className="relative">
          <RotateCcw size={26} className="text-gold absolute right-0 md:right-1 top-0" aria-hidden />
        </div>
        <p className="font-inter text-body text-gray-500 max-w-[46ch] leading-relaxed pt-1">
          This is a loop, not a line. Step 05 feeds step 03 — the Food Profile keeps learning, so the service gets
          easier the longer you stay.
        </p>
      </div>
    </div>
  )
}

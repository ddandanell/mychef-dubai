import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RotateCcw, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Step {
  num: string
  title: string
  body: string
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

// The five phase labels the visitor should be able to scan on their own.
const PHASES = ['Understand', 'Match', 'Learn', 'Deliver', 'Improve'] as const
const BRIEF_ROWS = ['Meals a week', 'Service days', "What 'healthy' means here"]
const PREF_TAGS = ['Breakfast', 'Children', 'No shellfish', '19:30 dinner', 'Quiet service']

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
  const revealClass = (i: number) =>
    reduced || i <= active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

  const renderVisual = (i: number) => {
    switch (i) {
      case 0:
        return (
          <dl className="border-l border-gold/40 pl-5 space-y-3 max-w-[20rem]">
            {BRIEF_ROWS.map((row) => (
              <div key={row}>
                <dt className="font-inter text-caption uppercase tracking-[0.14em] text-gray-500 mb-1">{row}</dt>
                <dd className="h-px w-full bg-gradient-to-r from-gold/50 to-transparent" aria-hidden />
              </div>
            ))}
          </dl>
        )
      case 1:
        return (
          <div className="flex items-end gap-4">
            {chefThumbs.slice(0, 3).map((chef, idx) => {
              const selected = idx === 1
              return (
                <figure key={chef.src} className="text-center">
                  <div
                    className={`overflow-hidden ${
                      selected ? 'w-20 h-24 ring-2 ring-gold ring-offset-2 ring-offset-cream' : 'w-16 h-20 opacity-45 grayscale'
                    }`}
                  >
                    <img src={chef.src} alt={chef.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  {selected && (
                    <figcaption className="mt-2 font-inter text-caption uppercase tracking-[0.14em] text-gold">Matched</figcaption>
                  )}
                </figure>
              )
            })}
          </div>
        )
      case 2:
        return (
          <p className="font-inter text-body-sm text-gray-600 leading-loose max-w-[24rem]">
            {PREF_TAGS.map((tag, idx) => (
              <span key={tag}>
                {idx > 0 && <span className="text-gold px-2" aria-hidden>·</span>}
                {tag}
              </span>
            ))}
          </p>
        )
      case 3:
        return (
          <figure className="mt-2">
            <div className="relative overflow-hidden aspect-[16/9] w-full">
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
            <figcaption className="mt-3 font-playfair text-h4 text-black">
              The household does not manage dinner. It simply happens.
            </figcaption>
          </figure>
        )
      case 4:
        return (
          <div className="max-w-[22rem]">
            <div className="flex items-center justify-between border border-gold/25 px-4 py-3">
              <span className="font-inter text-body-sm text-gray-600">How was this week?</span>
              <span className="inline-flex gap-0.5" aria-label="5 out of 5">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} size={14} className="text-gold fill-gold" aria-hidden />
                ))}
              </span>
            </div>
            <p className="mt-3 flex items-start gap-2 font-inter text-body-sm text-gray-600">
              <RotateCcw size={16} className="text-gold mt-0.5 flex-shrink-0" aria-hidden />
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
    <div ref={rootRef} className="relative max-w-[880px] mx-auto">
      {/* Progress rail */}
      <div className="absolute top-3 bottom-3 left-[42px] md:left-[68px] w-px bg-gold/15" aria-hidden />
      <div
        ref={fillRef}
        className="absolute top-3 left-[42px] md:left-[68px] w-px bg-gold origin-top"
        style={{ height: 'calc(100% - 1.5rem)', transform: reduced ? 'scaleY(1)' : 'scaleY(0)' }}
        aria-hidden
      />

      {steps.map((step, i) => (
        <div
          key={step.num}
          data-step
          className="relative grid grid-cols-[42px_1fr] md:grid-cols-[68px_1fr] gap-6 md:gap-12 pb-20 md:pb-28 last:pb-10"
        >
          <div className="text-right relative">
            {/* node on the rail */}
            <span
              className={`hidden md:block absolute -right-[9px] top-3 w-2 h-2 rounded-full transition-colors duration-500 ${
                reduced || i <= active ? 'bg-gold' : 'bg-gold/25'
              }`}
              aria-hidden
            />
            <span
              className={`font-playfair leading-none text-4xl md:text-6xl transition-colors duration-500 ${numberClass(i)}`}
            >
              {step.num}
            </span>
          </div>

          <div className="pl-6 md:pl-10 -mt-1">
            <p className="font-inter text-caption font-medium uppercase tracking-[0.2em] text-gold mb-3">{PHASES[i]}</p>
            <h3
              className={`font-playfair text-h3 md:text-[2rem] leading-tight mb-4 transition-colors duration-500 ${headlineClass(i)}`}
            >
              {step.title}
            </h3>
            <p className="font-inter text-body text-gray-600 leading-relaxed max-w-[46ch]">{step.body}</p>
            <div className={`mt-7 transition-all duration-500 ease-out ${revealClass(i)}`}>{renderVisual(i)}</div>
          </div>
        </div>
      ))}

      {/* The loop: 05 improves 03 */}
      <div className="grid grid-cols-[42px_1fr] md:grid-cols-[68px_1fr] gap-6 md:gap-12">
        <div className="relative">
          <RotateCcw size={22} className="text-gold absolute right-0 md:right-[10px] -top-1" aria-hidden />
        </div>
        <div className="pl-6 md:pl-10">
          <p className="font-inter text-body-sm text-gray-500 max-w-[40ch] leading-relaxed">
            This is a loop, not a line. Step 05 feeds step 03 — the Food Profile keeps learning, so the service gets
            easier the longer you stay.
          </p>
        </div>
      </div>
    </div>
  )
}

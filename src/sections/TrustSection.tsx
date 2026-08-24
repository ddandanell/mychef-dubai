import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { ShieldCheck } from 'lucide-react'
import { SectionLabel } from '@/components/system'

// Mechanisms, not adjectives — each line is a fact already stated elsewhere on this page.
const trustPoints = [
  { title: 'Vetted and background-checked', body: 'Every chef is checked before they cook for a myCHEF client.' },
  { title: 'Independent chefs with their own food-safety credentials', body: 'The chef who cooks holds the certificate.' },
  { title: 'One point of contact', body: 'One contact from the first message to the day itself.' },
  { title: 'Reply within 15 minutes in business hours', body: 'Then a vetted chef and a tailored proposal.' },
]

export default function TrustSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([leftRef.current, rightRef.current], { opacity: 1, x: 0 })
        return
      }

      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div
          ref={leftRef}
          className="w-full lg:w-1/2 bg-charcoal py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20"
        >
          <SectionLabel tone="dark" icon={ShieldCheck}>Why book through myCHEF</SectionLabel>
          <h2 className="font-playfair text-fluid-h2 text-white mb-6">
            Finding a chef in Dubai is easy. Knowing who you are letting into your home is harder.
          </h2>
          <p className="font-inter text-base text-gray-400 leading-[1.7] mb-10 max-w-lg">
            myCHEF was founded by a team from hospitality. Every chef is selected against one standard, every event is delivered with discretion, and you deal with one point of contact from the first message to the last plate.
          </p>

          {/* Numbered editorial rows — recognition list, not badges */}
          <ol className="border-y border-white/10 divide-y divide-white/10 mb-10 max-w-xl">
            {trustPoints.map((point, index) => (
              <li key={point.title} className="flex items-baseline gap-5 py-4">
                <span className="font-playfair text-h3 leading-none text-gold w-8 shrink-0" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-inter text-body font-medium text-white">{point.title}</p>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mt-1">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link to="/about" className="btn-secondary inline-flex focus-visible:ring-offset-charcoal">
            About myCHEF
          </Link>
        </div>

        {/* Right Column - Image */}
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 relative min-h-[320px] md:min-h-[400px] lg:min-h-0"
        >
          <img
            src="/images/yacht-catering-dubai-hero.webp"
            alt="Chef serving canapés on a yacht deck in Dubai"
            width={1344}
            height={752}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent lg:from-charcoal/40" />
        </div>
      </div>
    </section>
  )
}

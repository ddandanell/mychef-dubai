import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, ChefHat, ClipboardCheck, Users, ShieldCheck, Globe, Lock, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const MANAGERS = [
  { name: 'David', role: 'Household Manager', years: '10+ years in hospitality' },
  { name: 'Shasmin', role: 'Household Manager', years: '10+ years in hospitality' },
  { name: 'Greg', role: 'Household Manager', years: '10+ years in hospitality' },
] as const

const RESPONSIBILITIES = [
  { Icon: MessageCircle, title: 'One person for your home', body: 'You always know who to contact. Fast, personal and consistent.' },
  { Icon: ChefHat, title: 'Working with the chef', body: 'Your manager knows your Food Profile, your usual chefs and what works.' },
  { Icon: ClipboardCheck, title: 'Accountability & feedback', body: 'They check in, follow up and make sure issues actually get handled.' },
  { Icon: Users, title: 'Experienced & trusted', body: 'Hospitality professionals with 10+ years of experience.' },
] as const

const TRUST = [
  { Icon: ShieldCheck, label: 'Trusted by private households' },
  { Icon: Globe, label: 'International team · local understanding' },
  { Icon: Lock, label: 'Confidentiality always respected' },
  { Icon: TrendingUp, label: 'Service that gets better over time' },
] as const

export default function HouseholdManager({ photoSrc }: { photoSrc: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced || !rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-reveal]',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 78%' },
        },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <div ref={rootRef}>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT — photograph + identification band (sticky on desktop) */}
        <div className="lg:sticky lg:top-28 self-start">
          <figure data-reveal className="m-0">
            <div className="overflow-hidden">
              <img
                src={photoSrc}
                alt="David, Shasmin and Greg — myCHEF household managers — at a marble kitchen island in a Dubai villa"
                width={730}
                height={678}
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="grid grid-cols-3 bg-black">
              {MANAGERS.map((m, i) => (
                <div key={m.name} className={`text-center px-3 py-6 ${i > 0 ? 'border-l border-white/15' : ''}`}>
                  <p className="font-playfair text-h4 text-gold tracking-wide">{m.name.toUpperCase()}</p>
                  <p className="font-inter text-caption text-white/85 mt-1.5">{m.role}</p>
                  <p className="font-inter text-caption text-gold/70 mt-1">{m.years}</p>
                </div>
              ))}
            </figcaption>
          </figure>
          {/* The relationship this role sits in */}
          <div data-reveal className="mt-6 flex items-center justify-center gap-3 md:gap-4 border border-gold/25 py-4 px-4">
            {['You', 'myCHEF', 'Your chef'].map((node, i) => (
              <span key={node} className="inline-flex items-center gap-3 md:gap-4">
                <span className={`font-inter text-caption uppercase tracking-[0.14em] ${i === 1 ? 'text-gold' : 'text-gray-600'}`}>
                  {node}
                </span>
                {i < 2 && <span className="text-gold/60" aria-hidden>↔</span>}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — the relationship, explained */}
        <div>
          <p data-reveal className="font-inter text-caption font-medium uppercase tracking-[0.18em] text-gold mb-4">
            Ongoing household
          </p>
          <h2 data-reveal className="font-playfair text-h2 text-black leading-[1.1] mb-4">
            Your dedicated connection.
            <br />
            Every detail, handled.
          </h2>
          <div data-reveal className="h-px w-40 bg-gradient-to-r from-gold to-transparent mb-7" aria-hidden />
          <p data-reveal className="font-inter text-body text-gray-600 leading-relaxed max-w-[46ch] mb-8">
            People who use our ongoing service have a dedicated person connecting everything. They gather feedback,
            maintain your Food Profile, work with the chef behind the scenes and make sure what you tell us becomes part
            of how the service runs.
          </p>

          {/* Listening statement — editorial interruption */}
          <blockquote data-reveal className="border-l-2 border-gold pl-6 my-10 max-w-[42ch]">
            <p className="font-playfair text-h3 text-black leading-snug">The job is not just about talking.</p>
            <p className="font-playfair italic text-h4 text-gold mt-2">
              It is about listening to what you say and building on it.
            </p>
          </blockquote>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {RESPONSIBILITIES.map(({ Icon, title, body }) => (
              <div key={title} data-reveal className="border border-gray-200 bg-white p-6 md:p-7">
                <Icon size={22} className="text-gold mb-4" strokeWidth={1.5} aria-hidden />
                <h3 className="font-playfair text-h4 text-black leading-snug mb-2">
                  {title}
                </h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div data-reveal className="border border-gray-300 p-6 md:p-8 grid md:grid-cols-[minmax(0,11rem)_1fr] gap-6 md:gap-8 items-center">
            <p className="font-playfair text-h3 text-black leading-tight">You focus on living. We handle the rest.</p>
            <div>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                From daily dinners to special moments, your Household Manager makes sure the service keeps moving without
                you becoming the manager.
              </p>
              <p className="font-inter text-body-sm text-gold mt-3">That is the myCHEF difference.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mt-12 md:mt-16 border-t border-gold/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {TRUST.map(({ Icon, label }) => (
          <div key={label} data-reveal className="flex items-center gap-3">
            <Icon size={22} className="text-gold flex-shrink-0" strokeWidth={1.5} aria-hidden />
            <p className="font-inter text-caption uppercase tracking-[0.08em] text-gray-600 leading-tight">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

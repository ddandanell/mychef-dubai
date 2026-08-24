import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Users, ShieldAlert, Leaf, BellRing, CalendarDays, ShieldCheck,
  Coffee, Heart, MessageCircle, Clock, Scale, Home, ShoppingCart, PencilLine,
  BookOpen, RefreshCw, Share2, Compass,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const SUMMARY = [
  { Icon: Users, label: 'Who lives in the house?', lines: ['2 adults', '2 children', '1 dog (Luna)'] },
  { Icon: ShieldAlert, label: 'Allergies / safety', lines: ['No shellfish', 'No mushrooms', 'Peanut allergy, child'] },
  { Icon: Leaf, label: 'Dietary focus', lines: ['High protein weekdays', 'Balanced weekends'] },
  { Icon: BellRing, label: 'Service style', lines: ['Quiet mornings', 'Informal', 'No unnecessary service staff'] },
  { Icon: CalendarDays, label: 'Last update', lines: ['Kept current'] },
] as const

// key/value record rows
type Row = { k: string; v: string }

const DECISIONS: Row[] = [
  { k: 'Routine substitutions', v: 'Chef can decide' },
  { k: 'Major menu changes', v: 'Ask the household' },
  { k: 'Guests / celebrations', v: 'Confirm first' },
  { k: 'Expensive substitutions', v: 'Ask first' },
]

const KITCHEN: Row[] = [
  { k: 'Spices', v: 'Drawer below the hob' },
  { k: 'Breakfast equipment', v: 'Second pantry cabinet' },
  { k: "Children's plates", v: 'Lower drawer' },
  { k: 'Special servingware', v: 'Dining-room cabinet' },
]

const COMMUNICATION: Row[] = [
  { k: 'Morning', v: 'Quiet service' },
  { k: 'Evening', v: 'Conversation welcome' },
  { k: 'Friday dinner', v: 'Happy for the chef to engage' },
]

const RHYTHM: Row[] = [
  { k: 'Gym', v: '06:30' },
  { k: 'Breakfast', v: '08:00' },
  { k: 'Children eat', v: '18:00' },
  { k: 'Dinner', v: '19:30' },
  { k: 'Friday', v: 'Usually guests' },
]

const PRINCIPLES = [
  { Icon: RefreshCw, title: 'Kept up to date', body: 'We update this as we learn, so the service gets better.' },
  { Icon: Share2, title: 'Shared with your chef', body: 'Your chef sees what matters. They do not have to guess.' },
  { Icon: Compass, title: 'Built around you', body: 'This is your home, your people and your preferences.' },
] as const

function RowList({ rows }: { rows: Row[] }) {
  return (
    <dl className="space-y-2.5">
      {rows.map((row) => (
        <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-gray-200/70 pb-2.5 last:border-0 last:pb-0">
          <dt className="font-inter text-body-sm text-gray-500">{row.k}</dt>
          <dd className="font-inter text-body-sm text-black text-right">{row.v}</dd>
        </div>
      ))}
    </dl>
  )
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="font-inter text-body-sm text-black flex items-baseline gap-2">
          <span className="text-gold" aria-hidden>—</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

interface RecordCard {
  n: string
  Icon: typeof Coffee
  title: string
  content: React.ReactNode
}

const CARDS: RecordCard[] = [
  {
    n: '01', Icon: Coffee, title: 'Breakfast',
    content: (
      <div className="space-y-4">
        <RowList rows={[{ k: 'Served', v: '08:00' }, { k: 'Coffee', v: 'Flat white · oat milk' }]} />
        <div>
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gray-400 mb-2">Usual</p>
          <TagList items={['Eggs', 'Fruit', 'Toast', 'High-protein options']} />
        </div>
      </div>
    ),
  },
  {
    n: '02', Icon: Heart, title: 'Favourites',
    content: (
      <div className="space-y-4">
        <TagList items={['Japanese', 'Italian', 'Thai']} />
        <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
          Recorded at household level — and per person, where it matters.
        </p>
      </div>
    ),
  },
  { n: '03', Icon: MessageCircle, title: 'Communication', content: <RowList rows={COMMUNICATION} /> },
  { n: '04', Icon: Clock, title: 'Daily rhythm', content: <RowList rows={RHYTHM} /> },
  { n: '05', Icon: Scale, title: 'Decisions', content: <RowList rows={DECISIONS} /> },
  { n: '06', Icon: Home, title: 'Kitchen knowledge', content: <RowList rows={KITCHEN} /> },
  {
    n: '07', Icon: ShoppingCart, title: 'Shopping & sourcing',
    content: <TagList items={['Regular supermarket', 'Preferred butcher', 'Preferred fish supplier', 'Weekend market', 'Favourite brands', 'Always kept in stock']} />,
  },
  {
    n: '08', Icon: PencilLine, title: 'Notes & history',
    content: <TagList items={['Friday usually means guests', 'Children eat earlier', 'Keep fruit visible', 'Family prefers lighter lunches', 'Feedback: reduce salt slightly']} />,
  },
]

export default function FoodProfile() {
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
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: rootRef.current, start: 'top 80%' } },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <div ref={rootRef}>
      {/* Framed record */}
      <div className="border border-gray-300 bg-white">
        {/* Header */}
        <div className="p-6 md:p-9 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div data-reveal>
              <p className="font-inter text-caption font-medium uppercase tracking-[0.18em] text-gold mb-3">Food Profile</p>
              <h2 className="font-playfair text-h2 text-black leading-tight">Example Food Profile</h2>
              <p className="font-playfair italic text-h4 text-gold mt-2">A household like this</p>
              <p className="font-inter text-body-sm text-gray-500 mt-4 max-w-[52ch] leading-relaxed">
                This is a demonstration of the record we keep — not a real client, and not a review.
              </p>
            </div>
            <div data-reveal className="flex items-center gap-2.5 border border-gold/40 px-4 py-2.5 self-start whitespace-nowrap">
              <ShieldCheck size={18} className="text-gold flex-shrink-0" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="font-inter text-caption font-semibold uppercase tracking-[0.1em] text-black leading-none">Private &amp; confidential</p>
                <p className="font-inter text-caption text-gray-500 mt-1 leading-none">Kept relevant to the service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary row */}
        <div className="border-b border-gray-200 bg-gray-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px">
          {SUMMARY.map(({ Icon, label, lines }) => (
            <div key={label} data-reveal className="bg-white p-5 md:p-6">
              <Icon size={20} className="text-gold mb-3" strokeWidth={1.5} aria-hidden />
              <p className="font-inter text-caption uppercase tracking-[0.1em] text-gray-400 mb-3 leading-snug">{label}</p>
              <ul className="space-y-1">
                {lines.map((l) => (
                  <li key={l} className="font-inter text-body-sm text-black leading-snug">{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Record cards */}
        <div className="bg-gray-200 grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
          {CARDS.map(({ n, Icon, title, content }) => (
            <div key={n} data-reveal className="bg-white p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon size={20} className="text-gold" strokeWidth={1.5} aria-hidden />
                <span className="font-playfair text-h4 text-gold/40">{n}</span>
              </div>
              <h3 className="font-playfair text-h4 text-black mb-3">{title}</h3>
              {content}
            </div>
          ))}
        </div>
      </div>

      {/* Household memory — dark statement */}
      <div className="bg-black text-white mt-0 p-8 md:p-12">
        <div className="grid lg:grid-cols-[minmax(0,27rem)_1fr] gap-10 lg:gap-16 items-center">
          <div data-reveal className="flex items-start gap-5">
            <BookOpen size={38} className="text-gold flex-shrink-0 mt-1" strokeWidth={1.25} aria-hidden />
            <div>
              <p className="font-playfair text-h2 text-gold leading-tight">This is your household memory.</p>
              <p className="font-inter text-body text-white/75 mt-3 leading-relaxed">When the chef changes, this doesn't.</p>
              {/* Chefs are interchangeable; the record is not. */}
              <div className="mt-5 flex items-center gap-2.5 font-inter text-caption uppercase tracking-[0.12em]">
                <span className="text-white/25 line-through decoration-white/25">Chef</span>
                <span className="text-white/25" aria-hidden>→</span>
                <span className="text-white/25 line-through decoration-white/25">Chef</span>
                <span className="text-white/25" aria-hidden>→</span>
                <span className="text-gold border-b border-gold pb-0.5">Your profile stays</span>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:border-l lg:border-white/15 lg:pl-16">
            {PRINCIPLES.map(({ Icon, title, body }) => (
              <div key={title} data-reveal>
                <Icon size={22} className="text-gold mb-3" strokeWidth={1.5} aria-hidden />
                <p className="font-inter text-caption font-semibold uppercase tracking-[0.08em] text-white mb-2">{title}</p>
                <p className="font-inter text-body-sm text-white/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

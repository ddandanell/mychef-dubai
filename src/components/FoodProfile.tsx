import { useState } from 'react'
import {
  BellRing,
  BookOpen,
  CalendarDays,
  Clock,
  Coffee,
  Compass,
  Heart,
  Home,
  LayoutDashboard,
  Leaf,
  MessageCircle,
  PencilLine,
  RefreshCw,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Users,
} from 'lucide-react'

type Row = { k: string; v: string }

const HOUSEHOLD = [
  { Icon: Users, label: 'Who lives in the house?', lines: ['2 adults', '2 children', '1 dog (Luna)'] },
  { Icon: ShieldAlert, label: 'Allergies / safety', lines: ['No shellfish', 'No mushrooms', 'Peanut allergy, child'] },
  { Icon: Leaf, label: 'Dietary focus', lines: ['High protein weekdays', 'Balanced weekends'] },
  { Icon: BellRing, label: 'Service style', lines: ['Quiet mornings', 'Informal', 'No unnecessary service staff'] },
  { Icon: CalendarDays, label: 'Last update', lines: ['Kept current'] },
] as const

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
    <dl className="space-y-4">
      {rows.map((row) => (
        <div key={row.k} className="flex items-baseline justify-between gap-6 border-b border-gray-200/80 pb-3 last:border-0 last:pb-0">
          <dt className="font-inter text-body-sm text-gray-500">{row.k}</dt>
          <dd className="font-inter text-body-sm text-black text-right">{row.v}</dd>
        </div>
      ))}
    </dl>
  )
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="font-inter text-body-sm text-black flex items-baseline gap-2">
          <span className="text-gold" aria-hidden>—</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

const SECTIONS = [
  {
    id: 'overview',
    label: 'Overview',
    Icon: LayoutDashboard,
    title: 'A household like this',
    body: 'A demonstration of the record we keep — not a real client, and not a review. Open each section the way a chef or household manager would.',
  },
  { id: 'breakfast', label: 'Breakfast', Icon: Coffee, title: 'Breakfast' },
  { id: 'favourites', label: 'Favourites', Icon: Heart, title: 'Favourites' },
  { id: 'communication', label: 'Communication', Icon: MessageCircle, title: 'Communication' },
  { id: 'rhythm', label: 'Daily rhythm', Icon: Clock, title: 'Daily rhythm' },
  { id: 'decisions', label: 'Decisions', Icon: Scale, title: 'Decisions' },
  { id: 'kitchen', label: 'Kitchen', Icon: Home, title: 'Kitchen knowledge' },
  { id: 'shopping', label: 'Shopping', Icon: ShoppingCart, title: 'Shopping & sourcing' },
  { id: 'notes', label: 'Notes', Icon: PencilLine, title: 'Notes & history' },
] as const

type SectionId = (typeof SECTIONS)[number]['id']

function SectionBody({ id }: { id: SectionId }) {
  switch (id) {
    case 'overview':
      return (
        <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {HOUSEHOLD.map(({ Icon, label, lines }) => (
            <div key={label} className="bg-white p-6 md:p-8">
              <Icon size={22} className="text-gold mb-4" strokeWidth={1.5} aria-hidden />
              <p className="font-inter text-caption uppercase tracking-[0.1em] text-gray-400 mb-3">{label}</p>
              <ul className="space-y-1.5">
                {lines.map((line) => (
                  <li key={line} className="font-inter text-body text-black leading-snug">{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    case 'breakfast':
      return (
        <div className="space-y-8">
          <RowList rows={[{ k: 'Served', v: '08:00' }, { k: 'Coffee', v: 'Flat white · oat milk' }]} />
          <div>
            <p className="font-inter text-caption uppercase tracking-[0.12em] text-gray-400 mb-3">Usual</p>
            <TagList items={['Eggs', 'Fruit', 'Toast', 'High-protein options']} />
          </div>
        </div>
      )
    case 'favourites':
      return (
        <div className="space-y-6">
          <TagList items={['Japanese', 'Italian', 'Thai']} />
          <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
            Recorded at household level — and per person, where it matters.
          </p>
        </div>
      )
    case 'communication':
      return <RowList rows={COMMUNICATION} />
    case 'rhythm':
      return <RowList rows={RHYTHM} />
    case 'decisions':
      return <RowList rows={DECISIONS} />
    case 'kitchen':
      return <RowList rows={KITCHEN} />
    case 'shopping':
      return <TagList items={['Regular supermarket', 'Preferred butcher', 'Preferred fish supplier', 'Weekend market', 'Favourite brands', 'Always kept in stock']} />
    case 'notes':
      return <TagList items={['Friday usually means guests', 'Children eat earlier', 'Keep fruit visible', 'Family prefers lighter lunches', 'Feedback: reduce salt slightly']} />
    default:
      return null
  }
}

export default function FoodProfile() {
  const [active, setActive] = useState<SectionId>('overview')
  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0]

  return (
    <div>
      <div className="border border-gray-300 bg-[#f7f4ee] overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-300 bg-black px-5 py-3.5 md:px-7">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold/70 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <p className="font-inter text-caption uppercase tracking-[0.16em] text-white/80">
              Food Profile · example household
            </p>
          </div>
          <div className="flex items-center gap-2 text-gold">
            <ShieldCheck size={16} strokeWidth={1.5} aria-hidden />
            <span className="font-inter text-caption uppercase tracking-[0.12em]">Private &amp; confidential</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] min-h-[32rem]">
          <nav className="border-b lg:border-b-0 lg:border-r border-gray-300 bg-white" aria-label="Food Profile sections">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
              {SECTIONS.map((section) => {
                const on = section.id === active
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActive(section.id)}
                    aria-current={on ? 'true' : undefined}
                    className={`flex min-w-[9.5rem] lg:min-w-0 items-center gap-3 px-5 py-4 text-left font-inter text-body-sm transition-colors border-b lg:border-b-0 lg:border-l-2 ${
                      on
                        ? 'bg-cream text-black border-gold lg:border-l-gold'
                        : 'text-gray-500 border-transparent hover:bg-cream/60 hover:text-black'
                    }`}
                  >
                    <section.Icon size={16} strokeWidth={1.5} className={on ? 'text-gold-ink' : 'text-gold/70'} aria-hidden />
                    {section.label}
                  </button>
                )
              })}
            </div>
          </nav>

          <div className="p-7 md:p-10 lg:p-12 bg-white min-h-[28rem]">
            <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">
              {String(SECTIONS.findIndex((s) => s.id === active) + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')}
            </p>
            <h3 className="font-playfair text-h2 text-black mb-3">{current.title}</h3>
            {'body' in current && current.body ? (
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed max-w-[48ch] mb-8">{current.body}</p>
            ) : (
              <div className="mb-8" />
            )}
            <SectionBody id={active} />
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 md:p-12 lg:p-14">
        <div className="grid lg:grid-cols-[minmax(0,27rem)_1fr] gap-10 lg:gap-16 items-center">
          <div className="flex items-start gap-5">
            <BookOpen size={38} className="text-gold flex-shrink-0 mt-1" strokeWidth={1.25} aria-hidden />
            <div>
              <p className="font-playfair text-h2 text-gold leading-tight">This is your household memory.</p>
              <p className="font-inter text-body text-white/75 mt-3 leading-relaxed">When the chef changes, this doesn't.</p>
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
              <div key={title}>
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

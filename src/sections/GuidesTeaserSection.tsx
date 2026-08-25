import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { DollarSign, ClipboardList, Anchor, TrendingUp, ArrowRight, BookOpen } from 'lucide-react'
import { SectionLabel } from '@/components/system'


const guides = [
  {
    slug: '/dubai-event-catering-price-guide-2026',
    title: 'Event Catering Prices 2026',
    description: 'Realistic per-person budgets for weddings, corporate events, yacht parties and galas.',
    icon: DollarSign,
  },
  {
    slug: '/wedding-catering-menu-planning-dubai',
    title: 'Wedding Menu Planning',
    description: 'Build a wedding menu from tasting and dietary coverage to final service style.',
    icon: ClipboardList,
  },
  {
    slug: '/yacht-catering-checklist-dubai',
    title: 'Yacht Catering Checklist',
    description: 'A printable week-by-week checklist for catering on Dubai yachts and boats.',
    icon: Anchor,
  },
  {
    slug: '/dubai-food-trends-report-2026',
    title: 'Dubai Food Trends 2026',
    description: 'The catering and private-dining trends shaping Dubai events this year.',
    icon: TrendingUp,
  },
]

export default function GuidesTeaserSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.to('.guides-teaser-head', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.guides-teaser-card', {
      scrollTrigger: { trigger: '.guides-teaser-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-cream section-padding">
      <div className="container-custom">
        {/* Editorial header row: argument left, index link right */}
        <div className="guides-teaser-head opacity-0 translate-y-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-[720px]">
            <SectionLabel>Free Planning Resources</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black mb-4">
              What it costs, what to plan, and what is changing — before you commit to anything.
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed max-w-[60ch]">
              Practical guides written for Dubai hosts — budgets, checklists and the trends shaping events this year.
            </p>
          </div>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 self-start lg:self-auto lg:pb-1 font-inter text-body-sm font-medium uppercase tracking-wider text-gold-ink hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
          >
            <BookOpen size={16} strokeWidth={1.5} />
            View all guides
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Hairline panels — categories, not floating cards */}
        <div className="guides-teaser-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {guides.map((guide, i) => {
            const Icon = guide.icon
            return (
              <Link
                key={i}
                to={guide.slug}
                className="guides-teaser-card group flex flex-col bg-white p-6 lg:p-7 transition-colors duration-300 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold opacity-0 translate-y-10"
              >
                <span className="mb-5 flex h-10 w-10 items-center justify-center border border-gold/35 text-gold-ink">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="font-playfair text-h4 text-black mb-2 group-hover:text-gold-ink transition-colors">
                  {guide.title}
                </h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-caption font-medium uppercase tracking-wider text-gold-ink group-hover:gap-3 transition-all duration-300">
                  Read <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

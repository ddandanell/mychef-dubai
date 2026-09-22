import { useRef } from 'react'
import { Link } from 'react-router'
import { isParked } from '@/content/parkedUrls'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { DollarSign, ClipboardList, Anchor, TrendingUp, ArrowRight, BookOpen } from 'lucide-react'
import { SectionLabel } from '@/components/system'


const guides = [
  {
    slug: '/dubai-event-catering-price-guide-2026',
    title: 'Event Catering Prices 2026',
    description: "Understand the starting prices and main cost factors for weddings, corporate events and yacht celebrations.",
    icon: DollarSign,
  },
  {
    slug: '/wedding-catering-menu-planning-dubai',
    title: 'Wedding Menu Planning',
    description: "Plan your wedding menu, tasting, dietary requirements and service style with confidence.",
    icon: ClipboardList,
  },
  {
    slug: '/yachts',
    title: 'Yacht Catering Checklist',
    description: "Plan menus, marina access and onboard service for a Dubai yacht celebration.",
    icon: Anchor,
  },
  {
    slug: '/dubai-food-trends-report-2026',
    title: 'Dubai Food Trends 2026',
    description: "Explore menu and service ideas for Dubai celebrations in 2026.",
    icon: TrendingUp,
  },
]

export default function GuidesTeaserSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const liveGuides = guides.filter((g) => !isParked(g.slug))
  const gridCols =
    liveGuides.length <= 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : liveGuides.length === 3
        ? 'grid-cols-1 md:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'

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
              Plan the details that make an occasion feel effortless.
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed max-w-[60ch]">
              Practical guides to catering prices, menus, service styles and the questions to ask before you book.
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
        <div className={`guides-teaser-grid grid ${gridCols} gap-px bg-gray-200 border border-gray-200`}>
          {liveGuides.map((guide, i) => {
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
                  Read the guide <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

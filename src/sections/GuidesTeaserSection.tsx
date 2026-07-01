import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, ClipboardList, Anchor, TrendingUp, ArrowRight, BookOpen } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

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
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-12 guides-teaser-head opacity-0 translate-y-8">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Free Planning Resources
          </span>
          <h2 className="font-playfair text-h2 text-black mb-4">
            Plan Like a Pro
          </h2>
          <p className="font-inter text-body-lg text-gray-500 max-w-[640px] mx-auto">
            Practical guides written specifically for Dubai hosts — from budgets and checklists to the trends shaping events this year.
          </p>
        </div>

        <div className="guides-teaser-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide, i) => {
            const Icon = guide.icon
            return (
              <Link
                key={i}
                to={`${guide.slug}?utm_source=mychef.ae&utm_medium=home_guides_teaser&utm_campaign=home`}
                className="guides-teaser-card group bg-white p-5 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
              >
                <div className="w-10 h-10 bg-black flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2 group-hover:text-gold transition-colors">
                  {guide.title}
                </h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                  Read <ArrowRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center guides-teaser-head opacity-0 translate-y-8">
          <Link
            to="/guides?utm_source=mychef.ae&utm_medium=home_guides_teaser&utm_campaign=home"
            className="inline-flex items-center gap-2 font-inter text-body font-medium text-black hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
          >
            <BookOpen size={18} />
            View all guides
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { MessageSquare, IdCard, Clock } from 'lucide-react'
import { SectionLabel } from '@/components/system'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const trustPoints = [
  { icon: IdCard, label: 'Vetted Chefs, Scored Every Visit' },
  { icon: Clock, label: '2-Hour Proposal Response' },
]

const WHATSAPP_LINK = buildWhatsAppLink(
  'Hi myCHEF, I would like to leave a review about my experience',
  { source: 'mychef.ae', medium: 'review', campaign: 'review_page' },
)

export default function ReviewInviteSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(contentRef.current, { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-charcoal section-padding">
      <div ref={contentRef} className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="dark">Client Reviews</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-white mb-5">
              Booked with us? Tell the next client what it was actually like.
            </h2>
            <p className="font-inter text-body text-gray-400 leading-relaxed max-w-[58ch]">
              Honest reviews from clients across Dubai. If a chef has cooked for you or we have catered your event, your review helps the next person decide.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-16 lg:border-l lg:border-white/10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageSquare size={18} />
              Leave a Review
            </a>
          </div>
        </div>

        <ul className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6">
          {trustPoints.map((point) => (
            <li key={point.label} className="flex items-center gap-2.5">
              <point.icon size={18} className="text-gold flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <span className="font-inter text-body-sm text-gray-300">{point.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

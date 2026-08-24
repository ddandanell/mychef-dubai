import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { MessageSquare, Gift, ShieldCheck, IdCard, Clock } from 'lucide-react'
import { Link } from 'react-router'
import { SectionLabel } from '@/components/system'

const trustPoints = [
  { icon: ShieldCheck, label: 'AED 5M Liability Insurance' },
  { icon: IdCard, label: 'Vetted & Background-Checked Chefs' },
  { icon: Clock, label: '2-Hour Proposal Response' },
]

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to leave a review about my experience')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

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
        {/* Two-column editorial: the ask on the left, the action on the right. No stars we have not earned. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-6">
            <SectionLabel tone="dark">Client Reviews</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-white mb-5">
              Booked with us? Tell the next client what it was actually like.
            </h2>
            <p className="font-inter text-body text-gray-400 leading-relaxed max-w-[58ch]">
              We are collecting honest reviews from clients across Dubai. If you have booked a chef or caterer through myCHEF, your review helps the next client decide.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-16 lg:border-l lg:border-white/10">
            <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[52ch]">
              Every review helps us improve and helps new clients feel confident about booking myCHEF Dubai.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <Link
                to="/review"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Leave a Review
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Gift size={18} />
                Get AED 50 Credit for Reviewing
              </a>
            </div>
            <p className="font-inter text-body-sm text-gray-500 mt-5 max-w-[52ch]">
              Verified clients receive AED 50 credit towards their next booking when they share a review.
            </p>
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

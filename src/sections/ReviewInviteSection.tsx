import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, MessageSquare, Gift, Shield, Award, Clock } from 'lucide-react'
import { Link } from 'react-router'

gsap.registerPlugin(ScrollTrigger)

const trustPoints = [
  { icon: Shield, label: 'AED 5M Liability Insurance' },
  { icon: Award, label: 'Vetted & Background-Checked Chefs' },
  { icon: Clock, label: '2-Hour Proposal Response' },
]

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to leave a review about my experience')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function ReviewInviteSection() {
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
      <div ref={contentRef} className="container-custom max-w-[900px]">
        <div className="text-center mb-10">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            Client Reviews
          </span>
          <h2 className="font-playfair text-fluid-h2 text-white mt-4">
            Share Your myCHEF Experience
          </h2>
          <p className="font-inter text-body text-gray-400 mt-4 max-w-2xl mx-auto">
            We are collecting honest reviews from clients across Dubai. If you have enjoyed a myCHEF experience, your feedback helps others discover premium private dining and catering in the city.
          </p>
        </div>

        <div className="bg-charcoal-light p-8 md:p-12 text-center mb-10">
          <div className="flex justify-center gap-1 mb-6" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="font-playfair text-lg md:text-xl text-white italic leading-relaxed mb-8 max-w-2xl mx-auto">
            &ldquo;Every review helps us improve and helps new clients feel confident about booking myCHEF Dubai.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          <p className="font-inter text-body-sm text-gray-500 mt-5">
            Verified clients receive AED 50 credit towards their next booking when they share a review.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-center gap-2.5">
              <point.icon size={18} className="text-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-inter text-body-sm text-gray-300">{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

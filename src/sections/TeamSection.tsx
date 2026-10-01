import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { SectionLabel } from '@/components/system'

export default function TeamSection() {
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
          opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.7, delay: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
          {/* Left Column - Image */}
          <div
            ref={leftRef}
            className="w-full lg:w-2/5 relative min-h-[320px] md:min-h-[400px] lg:min-h-[500px]"
          >
            <img
              src="/team-head-chef.webp"
              alt="Head chef cooking in a Dubai home"
              width={800}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Column - Content */}
          <div
            ref={rightRef}
            className="w-full lg:w-3/5 flex flex-col justify-center py-10 lg:py-0 lg:pl-8"
          >
            <SectionLabel tone="dark">The Chefs We Choose</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-white mb-6">
              The chef matters. How we choose one matters more.
            </h2>
            <p className="font-inter text-base text-gray-400 leading-[1.7] mb-4 max-w-lg">
              Our chefs bring decades in European and international kitchens into homes across Dubai. Every menu is designed for the people it is cooked for.
            </p>
            <p className="font-inter text-base text-gray-400 leading-[1.7] mb-6 max-w-lg">
              Chefs, sous chefs, pastry specialists and service staff — every one of them vetted before they cook for you, and scored by the homes they cook in afterwards.
            </p>
            <p className="font-playfair text-h4 text-white leading-snug mb-8 max-w-lg border-l-2 border-gold pl-5">
              We choose the chef. We brief the chef. We stay with you from the first message to the last plate.
            </p>
            <Link to="/our-chefs" className="btn-secondary inline-flex self-start focus-visible:ring-offset-black">
              Meet our chefs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TeamSection() {
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
              alt="Executive Chef - myCHEF Dubai Head Chef"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Right Column - Content */}
          <div
            ref={rightRef}
            className="w-full lg:w-3/5 flex flex-col justify-center py-10 lg:py-0 lg:pl-8"
          >
            <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
              Meet the Team
            </span>
            <h2 className="font-playfair text-fluid-h2 text-white mt-4 mb-6">
              Led by a Passion for Excellence
            </h2>
            <p className="font-inter text-base text-gray-400 leading-[1.7] mb-4 max-w-lg">
              Our head chef brings decades of experience from respected European kitchens to Dubai&apos;s most distinguished homes. Every menu is designed with precision, every plate tells a story.
            </p>
            <p className="font-inter text-base text-gray-400 leading-[1.7] mb-8 max-w-lg">
              Behind every event is a dedicated team of chefs, sous chefs, pastry specialists, and service staff — all committed to one goal: making your experience unforgettable.
            </p>
            <Link to="/our-chefs" className="btn-secondary inline-flex self-start focus-visible:ring-offset-black">
              Meet Our Chefs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

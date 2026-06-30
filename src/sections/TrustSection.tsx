import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Leaf, Clock, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const trustBadges = [
  { icon: Shield, label: 'Verified Chefs' },
  { icon: Leaf, label: 'Premium Ingredients' },
  { icon: Clock, label: 'Punctual Service' },
  { icon: Award, label: 'Experienced Team' },
]

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column slide in
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Right column slide in
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div
          ref={leftRef}
          className="w-full lg:w-1/2 bg-charcoal py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20"
        >
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            Why myCHEF Dubai
          </span>
          <h2 className="font-playfair text-h2 text-white mt-4 mb-6">
            Crafted by Experience.<br />
            <span className="text-gold">Served with Discretion.</span>
          </h2>
          <p className="font-inter text-base text-gray-400 leading-[1.7] mb-10 max-w-lg">
            Founded by a team with deep roots in luxury hospitality, myCHEF Dubai brings world-class culinary talent directly to your door. Every dish is prepared with premium ingredients, every service delivered with the utmost discretion.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <badge.icon size={24} className="text-gold flex-shrink-0" />
                <span className="font-inter text-caption font-medium uppercase tracking-wider text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-secondary inline-flex">
            Learn About Our Team
          </Link>
        </div>

        {/* Right Column - Image */}
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0"
        >
          <img
            src="/images/yacht-catering-dubai-hero.webp"
            alt="Luxury yacht dining experience"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent lg:from-charcoal/40" />
        </div>
      </div>
    </section>
  )
}

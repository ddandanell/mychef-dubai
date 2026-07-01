import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { starterPackages, WHATSAPP_NUMBER } from '@/data/starterPackages'

gsap.registerPlugin(ScrollTrigger)

interface StarterPackagesSectionProps {
  campaign?: string
  eyebrow?: string
  title?: string
  subtitle?: string
}

export default function StarterPackagesSection({
  campaign = 'starter-packages',
  eyebrow = 'PRICING & PACKAGES',
  title = 'Starter Packages',
  subtitle = 'Transparent starting prices for our most popular private chef and catering experiences. Every quote is tailored to your event.',
}: StarterPackagesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.starter-package-card')
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
            {eyebrow}
          </span>
          <h2 className="font-playfair text-h2 text-black mb-4">{title}</h2>
          <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {starterPackages.map((pkg) => (
            <div
              key={pkg.name}
              className="starter-package-card bg-white p-6 border border-gray-200 flex flex-col"
            >
              <h3 className="font-playfair text-h4 text-black mb-2">{pkg.name}</h3>
              <p className="font-inter text-body-sm text-gray-500 mb-4">{pkg.guests} guests</p>
              <div className="mb-4">
                <span className="font-inter text-caption text-gray-500 uppercase tracking-wider">from</span>
                <p className="font-playfair text-3xl text-gold">
                  AED {pkg.price}
                  {pkg.recurring && <span className="font-inter text-sm text-gray-500 ml-1">/ week</span>}
                </p>
                <p className="font-inter text-body-sm text-gold mt-1">{pkg.perPerson} per person</p>
              </div>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed flex-1 mb-6">
                {pkg.included}
              </p>
              {pkg.recurring ? (
                <Link
                  to={`/weekly-meal-prep-dubai?utm_source=mychef.ae&utm_medium=starter_package_card&utm_campaign=${campaign}`}
                  className="btn-secondary text-center w-full"
                >
                  View Weekly Prep
                </Link>
              ) : (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi myCHEF Dubai, I'd like to request a proposal for the ${pkg.name} package (via mychef.ae/${campaign})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center w-full"
                >
                  Request This Package
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="font-inter text-body-sm text-gray-500 text-center max-w-[700px] mx-auto">
          Prices are indicative starting points. Final quotes depend on guest count, menu selection, ingredients, and service level.
        </p>
      </div>
    </section>
  )
}

import { Link } from 'react-router'
import { SectionLabel } from '@/components/system'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'

interface LocationStripProps {
  title?: string
  subtitle?: React.ReactNode
  className?: string
}

const locations = [
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'JVC', slug: 'jvc' },
  { name: 'JLT', slug: 'jlt' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Al Barsha', slug: 'al-barsha' },
]
// Eleven of the fifteen area pages took 60–120 internal links each and were never shown by
// Google once in 90 days. The strip now offers only the four that earn impressions.
const shown = locations.filter((l) => !isParked(locationPath(l.slug)))


export default function LocationStrip({ title = 'Private chef & luxury dining across Dubai', subtitle, className = '' }: LocationStripProps) {
  return (
    <section className={`bg-cream py-16 ${className}`}>
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-8">
          <SectionLabel align="center">Where We Serve</SectionLabel>
          <h3 className="font-playfair text-h3 text-black">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-3 font-inter text-body text-gray-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {shown.map((loc) => (
            <Link
              key={loc.slug}
              to={locationPath(loc.slug)}
              className="px-4 py-2 font-inter text-body-sm text-gold border border-gold/30 hover:bg-gold hover:text-black transition-all duration-300"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

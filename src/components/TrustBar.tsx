import { Clock, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBarProps {
  variant?: 'light' | 'dark' | 'compact'
  className?: string
}

const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=myCHEF+Dubai'
const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/mychef.ae'

export default function TrustBar({ variant = 'light', className }: TrustBarProps) {
  const isLight = variant === 'light'
  const isCompact = variant === 'compact'

  return (
    <section
      className={cn(
        isLight ? 'bg-cream' : 'bg-charcoal',
        isCompact ? 'py-4' : 'py-8 md:py-10',
        className
      )}
    >
      <div className="container-custom">
        <div
          className={cn(
            'flex flex-wrap items-center justify-center',
            isCompact ? 'gap-x-6 gap-y-2' : 'gap-x-8 gap-y-4'
          )}
        >
          {/* Response time */}
          <div className="flex items-center gap-2">
            <Clock
              size={isCompact ? 16 : 18}
              className="text-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span
              className={cn(
                'font-inter text-body-sm',
                isLight ? 'text-charcoal' : 'text-gray-400'
              )}
            >
              We typically reply within 2 hours
            </span>
          </div>

          {/* Food safety */}
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={isCompact ? 16 : 18}
              className="text-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span
              className={cn(
                'font-inter text-body-sm',
                isLight ? 'text-charcoal' : 'text-gray-400'
              )}
            >
              HACCP-aligned food safety protocols
            </span>
          </div>

          {/* Google Reviews link */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'font-inter text-body-sm font-medium transition-colors duration-200',
              isLight
                ? 'text-gold hover:text-gold-dark'
                : 'text-gold hover:text-gold-light'
            )}
          >
            Google Review Us
          </a>

          {/* Trustpilot link */}
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'font-inter text-body-sm font-medium transition-colors duration-200',
              isLight
                ? 'text-gold hover:text-gold-dark'
                : 'text-gold hover:text-gold-light'
            )}
          >
            Find us on Trustpilot
          </a>
        </div>
      </div>
    </section>
  )
}

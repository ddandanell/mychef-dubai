import { Clock, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBarProps {
  variant?: 'light' | 'dark' | 'compact'
  className?: string
}

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

        </div>
      </div>
    </section>
  )
}

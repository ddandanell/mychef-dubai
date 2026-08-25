import { Link } from 'react-router'
import { Crown, Percent, CalendarDays, HeadphonesIcon } from 'lucide-react'

interface VIPPromoSectionProps {
  campaign?: string
  variant?: 'dark' | 'light'
}

const benefits = [
  { icon: Percent, label: '10% off every booking' },
  { icon: CalendarDays, label: 'Priority chef availability' },
  { icon: HeadphonesIcon, label: 'Dedicated member support' },
  { icon: Crown, label: 'Exclusive seasonal menus' },
]

export default function VIPPromoSection({ variant = 'dark' }: VIPPromoSectionProps) {
  const isDark = variant === 'dark'
  const ctaUrl = `/vip-club`

  return (
    <section className={`${isDark ? 'bg-charcoal' : 'bg-cream'} section-padding`}>
      <div className="container-custom max-w-[900px]">
        <div
          className={`relative overflow-hidden p-8 md:p-12 ${
            isDark ? 'bg-black border border-gold/20' : 'bg-white border border-gray-200'
          }`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Crown size={20} className="text-gold" />
                <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold">
                  myCHEF VIP Club
                </span>
              </div>
              <h3 className={`font-playfair text-h3 ${isDark ? 'text-white' : 'text-black'} mb-3`}>
                Save on every booking with VIP membership
              </h3>
              <p className={`font-inter text-body ${isDark ? 'text-gray-400' : 'text-gray-500'} leading-relaxed mb-6`}>
                Join the myCHEF VIP Club for AED 199/year and unlock 10% off private chef and catering bookings, priority scheduling, and members-only menus across Dubai.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {benefits.map((b) => (
                  <div key={b.label} className="flex items-center gap-2">
                    <b.icon size={16} className="text-gold flex-shrink-0" />
                    <span className={`font-inter text-body-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to={ctaUrl}
                className="btn-primary inline-flex items-center gap-2"
              >
                Join the VIP Club
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

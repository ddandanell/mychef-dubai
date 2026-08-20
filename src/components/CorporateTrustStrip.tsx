import { FileText, Headphones, Receipt } from 'lucide-react'

interface CorporateTrustStripProps {
  className?: string
  variant?: 'dark' | 'light'
}

const signals = [
  {
    icon: Receipt,
    label: 'TRN-ready VAT invoices',
  },
  {
    icon: Headphones,
    label: 'Dedicated account manager',
  },
  {
    icon: FileText,
    label: 'Consolidated billing',
  },
]

export default function CorporateTrustStrip({ className = '', variant = 'dark' }: CorporateTrustStripProps) {
  const isDark = variant === 'dark'

  return (
    <div className={`w-full ${className}`}>
      <div className="container-custom">
        <div
          className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-6 rounded-sm ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
          }`}
        >
          {signals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-2.5">
              <signal.icon
                size={18}
                className="text-gold flex-shrink-0"
                aria-hidden="true"
              />
              <span
                className={`font-inter text-body-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

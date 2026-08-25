import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router'
import { CLUSTER_PATHS, pricingPreview } from '@/content/privateChefCluster'
import { formatAed } from '@/content/privateChefPage'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/content/privateChefPage'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function RatesBar({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-black border-y border-gold/25 ${className}`}>
      <div className="container-custom py-2.5 flex flex-row items-center justify-between sm:justify-center gap-3 sm:gap-6">
        <p className="hidden sm:block font-inter text-caption uppercase tracking-wider text-gold text-center">Standing household</p>
        <Link
          to={CLUSTER_PATHS.pricing}
          className="px-3 sm:px-4 py-2 font-inter text-caption sm:text-body-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-colors text-center whitespace-nowrap"
        >
          From {formatAed(pricingPreview[0].monthly)} / month · long-term household plans
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 font-inter text-caption sm:text-body-sm uppercase tracking-wider bg-gold text-black hover:bg-gold/85 transition-colors whitespace-nowrap"
        >
          <MessageCircle size={15} aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

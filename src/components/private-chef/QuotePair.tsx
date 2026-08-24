import { Link } from 'react-router'
import { Phone } from 'lucide-react'
import { FIND_CHEF_LABEL, INQUIRY_HREF } from '@/content/privateChefCluster'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/content/privateChefPage'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function QuotePair({
  className = 'items-center justify-center',
  inquiryLabel = FIND_CHEF_LABEL,
}: {
  className?: string
  inquiryLabel?: string
}) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Link to={INQUIRY_HREF} className="btn-primary">
        {inquiryLabel}
      </Link>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
        <Phone size={16} className="mr-2" />
        Chat on WhatsApp
      </a>
    </div>
  )
}

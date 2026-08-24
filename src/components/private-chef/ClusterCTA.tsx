import QuotePair from './QuotePair'
import FillFrame from './FillFrame'
import { ctaPhoto } from '@/content/privateChefPage'
import { SectionLabel, iconForSectionLabel } from '@/components/system'


export default function ClusterCTA({
  eyebrow = 'If this is the house you want',
  title = 'Start the household plan',
  body = 'From AED 2,700 a month for one weekly prep session — up to a full-day chef, seven days a week. We calculate the role, recommend the chef level, and put the full price in writing before anything starts.',
  inquiryLabel,
}: {
  eyebrow?: string
  title?: string
  body?: string
  inquiryLabel?: string
}) {
  return (
    <section className="relative scroll-mt-24 min-h-[60vh] md:min-h-[70vh] flex items-end">
      <FillFrame
        src={ctaPhoto.src}
        alt={ctaPhoto.alt}
        width={ctaPhoto.width}
        height={ctaPhoto.height}
        className="absolute inset-0"
        objectPosition="left center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="relative z-10 container-custom py-16 md:py-20">
        <SectionLabel tone="dark" icon={iconForSectionLabel(eyebrow)}>{eyebrow}</SectionLabel>
        <h2 className="font-playfair text-h2 text-white mb-4 max-w-[640px]">{title}</h2>
        <p className="font-inter text-body-lg text-white/85 max-w-[560px] mb-8 leading-relaxed">{body}</p>
        <QuotePair className="items-start" inquiryLabel={inquiryLabel} />
      </div>
    </section>
  )
}

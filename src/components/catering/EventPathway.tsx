import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type PathwayItem = {
  title: string
  body: string
  href: string
  linkLabel: string
  image: string
  imageAlt: string
}

export default function EventPathway({
  items,
  compact = false,
}: {
  items: readonly PathwayItem[]
  compact?: boolean
}) {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      {items.map((item, i) => {
        const reverse = i % 2 === 1
        return (
          <article
            key={item.href}
            className={cn(
              'grid items-center gap-8 lg:grid-cols-2 lg:gap-14',
              compact && 'lg:gap-10',
            )}
          >
            <Link
              to={item.href}
              className={cn(
                'editorial-image relative block overflow-hidden',
                compact ? 'aspect-[16/9]' : 'aspect-[16/10]',
                reverse && 'lg:order-2',
              )}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                width={1600}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <div className={cn(reverse && 'lg:order-1')}>
              <h3 className="font-playfair text-h3 text-black mb-4">{item.title}</h3>
              <p className="font-inter text-body text-gray-600 leading-relaxed mb-6 max-w-[52ch]">
                {item.body}
              </p>
              <Link
                to={item.href}
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
              >
                {item.linkLabel} <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

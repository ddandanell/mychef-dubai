import { useEffect, useRef, useState } from 'react'
import { eventLayers } from '@/content/cateringPage'
import { cn } from '@/lib/utils'

export default function EventLayers() {
  const [active, setActive] = useState(0)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const nodes = itemRefs.current.filter((el): el is HTMLLIElement => Boolean(el))
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = nodes.indexOf(visible.target as HTMLLIElement)
        if (index >= 0) setActive(index)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.25, 0.6] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <ol className="relative">
      <span
        className="pointer-events-none absolute top-2 bottom-2 left-[5px] w-px bg-gold/30"
        aria-hidden
      />
      {eventLayers.map((layer, i) => {
        const isActive = i === active
        return (
          <li
            key={layer.name}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className={cn(
              'relative py-8 pl-10 transition-colors duration-500 lg:py-10',
              i !== eventLayers.length - 1 && 'border-b border-black/8',
            )}
          >
            <span
              className={cn(
                'absolute top-[2.15rem] left-0 h-[11px] w-[11px] transition-colors duration-500 lg:top-[2.65rem]',
                isActive ? 'bg-gold-ink' : 'bg-gold/40',
              )}
              aria-hidden
            />
            <p
              className={cn(
                'font-inter text-caption uppercase tracking-[0.16em] mb-2 transition-colors duration-500',
                isActive ? 'text-gold-ink' : 'text-black/35',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3
              className={cn(
                'font-playfair text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] leading-none transition-colors duration-500',
                isActive ? 'text-black' : 'text-black/30',
              )}
            >
              {layer.name}
            </h3>
            <p
              className={cn(
                'mt-3 max-w-[52ch] font-inter text-body leading-relaxed transition-colors duration-500',
                isActive ? 'text-gray-600' : 'text-black/30',
              )}
            >
              {layer.items.join(' · ')}
            </p>
          </li>
        )
      })}
    </ol>
  )
}

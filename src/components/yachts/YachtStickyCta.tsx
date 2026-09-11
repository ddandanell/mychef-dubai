import { useEffect, useState } from 'react'
import { YACHT_HERO } from '@/content/yachtPage'

type Props = {
  quoteHref: string
  whatsappHref: string
}

export default function YachtStickyCta({ quoteHref, whatsappHref }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <div
      data-sticky
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="container-custom flex gap-2 py-2">
        <a href={quoteHref} className="btn-primary flex-1 text-center !py-3 text-sm" data-placement="sticky">
          Get Quote
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex-1 text-center !py-3 text-sm !text-[#1B2A4A] !border-[#1B2A4A]/25"
          data-placement="sticky"
        >
          {YACHT_HERO.secondaryCta.replace(' myCHEF', '')}
        </a>
      </div>
    </div>
  )
}

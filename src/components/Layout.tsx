import { useEffect, type ReactNode } from 'react'
import Navbar from './Navbar'
import SiloTrail from './SiloTrail'
import SiloChildren from './SiloChildren'
import Footer from './Footer'
import SiloSection from './SiloSection'
import FloatingChefChat from './FloatingChefChat'
import SeoHead from './SeoHead'
import ScrollManager from './ScrollManager'
import { WhatsAppMessageProvider } from '@/context/WhatsAppMessageContext'
import { preloadRoute } from '@/routes'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const onOver = (event: PointerEvent) => {
      const el = event.target
      if (!(el instanceof Element)) return
      const hit = el.closest('a[href^="/"]')
      if (!hit) return
      const href = hit.getAttribute('href')
      if (!href || href.startsWith('/seo')) return
      void preloadRoute(href.split('#')[0] ?? href)
    }
    document.addEventListener('pointerover', onOver)
    return () => document.removeEventListener('pointerover', onOver)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <ScrollManager />
      <Navbar />
      <WhatsAppMessageProvider>
        <main className="relative flex min-h-[calc(100dvh-4rem)] flex-1 flex-col overflow-x-clip">
          <SiloTrail />
          {children}
          <SiloChildren />
        </main>
        <SiloSection />
        <Footer />
      </WhatsAppMessageProvider>
      <FloatingChefChat />
      <SeoHead />
    </div>
  )
}

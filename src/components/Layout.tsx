import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ExploreSection from './ExploreSection'
import StickyMobileCTA from './StickyMobileCTA'
import FloatingChefChat from './FloatingChefChat'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
        {children}
      </main>
      <ExploreSection />
      <Footer />
      <StickyMobileCTA />
      <FloatingChefChat />
    </div>
  )
}

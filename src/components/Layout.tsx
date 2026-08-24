import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ExploreSection from './ExploreSection'
import FloatingChefChat from './FloatingChefChat'
import SeoContent from './SeoContent'
import SeoHead from './SeoHead'
import ScrollManager from './ScrollManager'
import { WhatsAppMessageProvider } from '@/context/WhatsAppMessageContext'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-black text-white">
      <ScrollManager />
      <Navbar />
      <WhatsAppMessageProvider>
        <main className="flex-1 overflow-x-clip">
          {children}
          <SeoContent />
        </main>
        <ExploreSection />
        <Footer />
      </WhatsAppMessageProvider>
      <FloatingChefChat />
      <SeoHead />
    </div>
  )
}

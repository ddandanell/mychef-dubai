import type { ReactNode } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import SiloSection from './SiloSection'
import FloatingChefChat from './FloatingChefChat'
import SeoHead from './SeoHead'
import ScrollManager from './ScrollManager'
import { WhatsAppMessageProvider } from '@/context/WhatsAppMessageContext'

interface LayoutProps {
  children: ReactNode
}

function PageEnter({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-black text-white">
      <ScrollManager />
      <Navbar />
      <WhatsAppMessageProvider>
        <main className="flex-1 overflow-x-clip">
          <PageEnter>
            {children}
          </PageEnter>
        </main>
        <SiloSection />
        <Footer />
      </WhatsAppMessageProvider>
      <FloatingChefChat />
      <SeoHead />
    </div>
  )
}

import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyMobileCTA from './StickyMobileCTA'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}

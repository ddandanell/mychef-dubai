import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Navigate, Route, Routes, useLocation } from "react-router"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/seo-os/components/app-sidebar"
import { SiteHeader } from "@/seo-os/components/site-header"
import { SeoOsProvider } from "@/seo-os/context"
import { seoPageForPath } from "@/seo-os/nav"
import AnalystPage from "@/seo-os/pages/AnalystPage"
import BoardPage from "@/seo-os/pages/BoardPage"
import QueuePage from "@/seo-os/pages/QueuePage"
import StatusPage from "@/seo-os/pages/StatusPage"
import CatalogPage from "@/seo-os/pages/table-pages"
import {
  AnalyticsPage,
  ConnectionsPage,
  DataforseoPage,
  GscPage,
  SemrushPage,
  SettingsPage,
} from "@/seo-os/pages/room-pages"
import "./theme.css"

export default function SeoOs() {
  const { pathname } = useLocation()
  const page = seoPageForPath(pathname)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add("seo-os")
    document.body.classList.add("seo-os")
    return () => {
      document.documentElement.classList.remove("seo-os")
      document.body.classList.remove("seo-os")
    }
  }, [])

  return (
    <TooltipProvider>
      <SeoOsProvider initial={{ title: page.label, description: page.description }}>
        <Helmet>
          <title>{page.label} · myCHEF SEO</title>
          <meta name="robots" content="noindex, nofollow, noarchive" />
        </Helmet>
        <div className="seo-os flex min-h-svh w-full bg-muted">
          <aside className="bg-sidebar text-sidebar-foreground hidden w-60 shrink-0 md:flex md:flex-col">
            <AppSidebar />
          </aside>
          <Sheet open={mobileNav} onOpenChange={setMobileNav}>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>SEO navigation</SheetTitle>
                <SheetDescription>Board sections</SheetDescription>
              </SheetHeader>
              <AppSidebar onNavigate={() => setMobileNav(false)} />
            </SheetContent>
          </Sheet>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="bg-background flex min-h-svh flex-1 flex-col md:m-2 md:ml-0 md:rounded-xl md:border md:shadow-sm">
              <SiteHeader onOpenNav={() => setMobileNav(true)} />
              <Routes>
                <Route index element={<BoardPage />} />
                <Route path="status" element={<StatusPage />} />
                <Route path="keywords" element={<CatalogPage id="keywords" />} />
                <Route path="demand" element={<CatalogPage id="demand" />} />
                <Route path="research" element={<CatalogPage id="research" />} />
                <Route path="gaps" element={<CatalogPage id="gaps" />} />
                <Route path="architecture" element={<CatalogPage id="architecture" />} />
                <Route path="links" element={<CatalogPage id="links" />} />
                <Route path="queue" element={<QueuePage />} />
                <Route path="backlog" element={<CatalogPage id="backlog" />} />
                <Route path="actions" element={<CatalogPage id="actions" />} />
                <Route path="ai-visibility" element={<CatalogPage id="ai-visibility" />} />
                <Route path="ask" element={<AnalystPage />} />
                <Route path="gsc" element={<GscPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="semrush" element={<SemrushPage />} />
                <Route path="dataforseo" element={<DataforseoPage />} />
                <Route path="connections" element={<ConnectionsPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/seo" replace />} />
              </Routes>
            </div>
          </div>
        </div>
        <Toaster />
      </SeoOsProvider>
    </TooltipProvider>
  )
}

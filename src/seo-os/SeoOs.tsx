import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Navigate, Route, Routes, useLocation } from "react-router"

import { Spinner } from "@/components/ui/spinner"
import { seoSession } from "@/seo-os/auth"
import { SeoOsProvider } from "@/seo-os/context"
import { seoPageForPath } from "@/seo-os/nav"
import { SeoOsLayout } from "@/seo-os/SeoOsLayout"
import SeoGate from "@/seo-os/pages/SeoGate"
import AnalystPage from "@/seo-os/pages/AnalystPage"
import AskPage from "@/seo-os/pages/AskPage"
import BoardPage from "@/seo-os/pages/BoardPage"
import ControlPage from "@/seo-os/pages/ControlPage"
import RulesPage from "@/seo-os/pages/RulesPage"
import ChangesPage from "@/seo-os/pages/ChangesPage"
import SpeedPage from "@/seo-os/pages/SpeedPage"
import ExperimentsPage from "@/seo-os/pages/ExperimentsPage"
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
  const [ready, setReady] = useState(false)
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    let live = true
    seoSession().then((ok) => {
      if (!live) return
      setAuthed(ok)
      setReady(true)
    })
    return () => {
      live = false
    }
  }, [])

  if (!ready) {
    return (
      <div className="seo-os flex min-h-svh items-center justify-center bg-black text-white">
        <Spinner />
      </div>
    )
  }

  if (!authed) {
    return <SeoGate onUnlocked={() => setAuthed(true)} />
  }

  return (
    <SeoOsProvider initial={{ title: page.label, description: page.description }}>
      <Helmet>
        <title>{page.label} · myCHEF SEO</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>
      <SeoOsLayout>
        <Routes>
          <Route index element={<BoardPage />} />
          <Route path="control" element={<ControlPage />} />
          <Route path="experiments" element={<ExperimentsPage />} />
          <Route path="status" element={<StatusPage />} />
                <Route path="rules" element={<RulesPage />} />
          <Route path="keywords" element={<CatalogPage id="keywords" />} />
          <Route path="demand" element={<CatalogPage id="demand" />} />
          <Route path="research" element={<CatalogPage id="research" />} />
          <Route path="gaps" element={<CatalogPage id="gaps" />} />
          <Route path="architecture" element={<CatalogPage id="architecture" />} />
          <Route path="links" element={<CatalogPage id="links" />} />
          <Route path="queue" element={<QueuePage />} />
          <Route path="backlog" element={<CatalogPage id="backlog" />} />
          <Route path="changes" element={<ChangesPage />} />
          <Route path="speed" element={<SpeedPage />} />
          <Route path="actions" element={<CatalogPage id="actions" />} />
          <Route path="ai-visibility" element={<CatalogPage id="ai-visibility" />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="analyst" element={<AnalystPage />} />
          <Route path="gsc" element={<GscPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="semrush" element={<SemrushPage />} />
          <Route path="dataforseo" element={<DataforseoPage />} />
          <Route path="connections" element={<ConnectionsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/seo/control" replace />} />
        </Routes>
      </SeoOsLayout>
    </SeoOsProvider>
  )
}

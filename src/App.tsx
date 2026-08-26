import { Suspense, useEffect } from 'react'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routes, Route, useLocation } from 'react-router'
import Layout from './components/Layout'
import Analytics from './components/Analytics'
import PageLoader from './components/PageLoader'
import RouteErrorBoundary from './components/RouteErrorBoundary'
import { routes } from './routes'
import { isSeoOsPath, SeoOsApp } from './seo-os/entry'

/**
 * Route list lives in ./routes.tsx (generated from the former inline table) so
 * the boot sequence can preload the current route's chunk before hydrateRoot.
 * See src/lib/lazyPreloadable.tsx and src/main.tsx for the rationale.
 *
 * /seo is a separate app shell: no marketing Layout, noindex, dark zinc shadcn OS.
 */
export default function App() {
  const { pathname } = useLocation()
  const seoOs = isSeoOsPath(pathname)

  useEffect(() => {
    document.documentElement.classList.toggle('seo-os', seoOs)
    document.documentElement.classList.toggle('dark', seoOs)
    document.body.classList.toggle('seo-os', seoOs)
    document.body.classList.toggle('dark', seoOs)
    return () => {
      document.documentElement.classList.remove('seo-os', 'dark')
      document.body.classList.remove('seo-os', 'dark')
    }
  }, [seoOs])

  return (
    <>
      <Analytics />
      <VercelAnalytics />
      <SpeedInsights route={pathname} />
      <Routes>
        <Route
          path="/seo/*"
          element={
            <RouteErrorBoundary key="seo-os">
              <Suspense fallback={<PageLoader />}>
                <SeoOsApp />
              </Suspense>
            </RouteErrorBoundary>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <RouteErrorBoundary key={pathname}>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {routes.map((route) => (
                      <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                  </Routes>
                </Suspense>
              </RouteErrorBoundary>
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

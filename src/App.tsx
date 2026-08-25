import { Suspense } from 'react'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { Routes, Route, useLocation } from 'react-router'
import Layout from './components/Layout'
import Analytics from './components/Analytics'
import PageLoader from './components/PageLoader'
import RouteErrorBoundary from './components/RouteErrorBoundary'
import { routes } from './routes'

/**
 * Route list lives in ./routes.tsx (generated from the former inline table) so
 * the boot sequence can preload the current route's chunk before hydrateRoot.
 * See src/lib/lazyPreloadable.tsx and src/main.tsx for the rationale.
 */
export default function App() {
  const { pathname } = useLocation()
  return (
    <Layout>
      <Analytics />
      <VercelAnalytics />
      {/* Keyed by pathname so a failed route does not trap the next one. */}
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
  )
}

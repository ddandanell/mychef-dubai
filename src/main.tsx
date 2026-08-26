import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import './styles/cta-motion.css'
import App from './App.tsx'
import { armRevealFailsafe } from './lib/revealFailsafe'
import { installChunkRecovery, markChunkRecovered } from './lib/chunkRecovery'
import { preloadRoute } from './routes'
import { isSeoOsPath, SeoOsApp } from './seo-os/entry'
import './seo-os/theme.css'

const container = document.getElementById('root')!

/**
 * The build prerenders a full page of HTML into #root (206 routes, see
 * scripts/prerender.ts) — served to crawlers (SEO) and painted instantly by the
 * browser (fast first paint), which is the fix for the old "blank until the
 * whole bundle loads" slowness, worst on mobile.
 *
 * We do NOT hydrateRoot: the prerender runs the client app in Puppeteer, so its
 * HTML lacks React's SSR text-separator markers and is not hydratable (adjacent
 * dynamic text merges → guaranteed hydration mismatch). Instead we createRoot
 * and render SYNCHRONOUSLY with flushSync in the same frame we clear the
 * prerendered markup — so there is no blank flash between the two. The current
 * route's chunk is preloaded first (lazyPreloadable) so the render is immediate,
 * and HandoffPage seeds from the inlined window.__SEO__ so its copy is present on
 * that first client render too.
 */
async function boot() {
  // Must be armed before the first dynamic import: a stale tab after a deploy
  // fails right here, and the listener turns that into one reload.
  installChunkRecovery()
  try {
    const pathname = window.location.pathname
    if (isSeoOsPath(pathname)) {
      document.documentElement.classList.add('seo-os')
      document.body.classList.add('seo-os')
      await SeoOsApp.preload()
    } else {
      await preloadRoute(pathname)
    }
    markChunkRecovered()
  } catch {
    // A chunk that fails to preload just suspends briefly (loader) — never fatal.
  }

  const root = createRoot(container)
  // Clear the prerendered markup and paint React's tree in the same frame.
  container.replaceChildren()
  flushSync(() => {
    root.render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>,
    )
  })

  // Safety net for the initial page load. Every subsequent navigation re-arms
  // this from ScrollManager. See src/lib/revealFailsafe.ts for the rationale.
  armRevealFailsafe()
}

void boot()

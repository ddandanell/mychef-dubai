import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { armRevealFailsafe } from './lib/revealFailsafe'

const container = document.getElementById('root')!

/**
 * The build prerenders a full page of HTML into #root (206 routes, see
 * scripts/prerender.ts). `createRoot` assumes it owns an EMPTY container.
 * Rendering it over prerendered markup leaves React with a tree it has no
 * fibers for, and the first route change dies mid-commit:
 *
 *   TypeError: Cannot read properties of null (reading 'removeChild')
 *       at commitDeletion / commitMutationEffects
 *
 * The new route then never mounts — the URL changes but the page does not,
 * which is why navigation needed two clicks. Emptying the container first
 * gives React sole ownership and the commit succeeds.
 *
 * NOTE: this discards the prerendered paint, so the page is blank until the
 * bundle arrives. The proper fix is hydrateRoot, which keeps that markup — it
 * requires SeoContent to read its JSON synchronously first (see PROBLEMS.md
 * P3), so it ships in the next step, not this one.
 */
container.replaceChildren()

createRoot(container).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
)

// Safety net for the initial page load. Every subsequent navigation re-arms
// this from ScrollManager. See src/lib/revealFailsafe.ts for the rationale.
armRevealFailsafe()

/**
 * Recovery for a stale tab after a deploy.
 *
 * WHY THIS EXISTS
 * ---------------
 * Every route is a hashed chunk (`/assets/Catering-fGtk-K-p.js`). Each deploy
 * produces new hashes and the old files are gone. A tab opened BEFORE a deploy
 * still holds the old chunk names, so its next in-app navigation asks for a
 * file that no longer exists — Vercel answers 404 (or, on some setups, the
 * SPA shell as text/html) and the dynamic import fails. Without recovery the
 * visitor gets a page that never appears: URL changed, nav and footer painted,
 * main empty, and a console error about a module script. This site deploys
 * several times a day, so real visitors hit it.
 *
 * WHAT IT DOES
 * ------------
 * Vite dispatches `vite:preloadError` when a dynamic import (or one of its
 * dependency chunks) fails to load. We reload the page ONCE for the current
 * URL: the full load fetches fresh HTML that references the new hashes, and
 * the visitor lands on the page they clicked. A sessionStorage marker stops a
 * genuinely broken deploy from reloading forever — the second failure falls
 * through to RouteErrorBoundary, which shows a reload button instead.
 */

const MARKER = 'mychef:chunk-reload'

function currentKey(): string {
  return window.location.pathname + window.location.search
}

/** True when the failure reads like a missing/stale chunk rather than a bug in the page. */
export function isChunkLoadError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error ?? '')
  return /dynamically imported module|Importing a module script failed|module script|Loading chunk|Loading CSS chunk|Failed to fetch/i.test(msg)
}

/** Reload once for this URL. Returns false when a reload was already attempted here. */
export function reloadOnceForStaleChunk(): boolean {
  try {
    const key = currentKey()
    if (sessionStorage.getItem(MARKER) === key) return false
    sessionStorage.setItem(MARKER, key)
  } catch {
    // Storage blocked (private mode, disabled): still reload — the marker only guards against loops.
  }
  window.location.reload()
  return true
}

/** Clear the marker once a page has rendered, so a later deploy can recover again on the same URL. */
export function markChunkRecovered(): void {
  try {
    if (sessionStorage.getItem(MARKER) === currentKey()) sessionStorage.removeItem(MARKER)
  } catch {
    // ignore
  }
}

export function installChunkRecovery(): void {
  window.addEventListener('vite:preloadError', (event) => {
    if (reloadOnceForStaleChunk()) event.preventDefault()
    // Not prevented: Vite rethrows and RouteErrorBoundary takes over.
  })
}

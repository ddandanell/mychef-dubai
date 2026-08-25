/**
 * Suspense fallback for lazy routes. Deliberately NOT a full-screen overlay: the
 * previous page stays visible while the next chunk loads, and only a 2px gold
 * hairline at the top signals progress — no black flash on route changes.
 */
export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px overflow-hidden bg-transparent"
    >
      <div className="h-full w-1/3 animate-loader-bar bg-gradient-to-r from-transparent via-gold to-transparent" />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

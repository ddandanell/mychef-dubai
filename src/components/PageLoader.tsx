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
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden bg-transparent"
    >
      <div className="h-full w-full bg-gold/90 animate-loader-bar" />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

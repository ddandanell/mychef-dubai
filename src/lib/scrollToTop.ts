/**
 * Instant scroll-to-top used on every client-side navigation.
 *
 * React Router keeps the previous window Y. Radix Sheet then restores the
 * scroll it locked when the mobile menu opened — often AFTER our first
 * scrollTo — which is why a tap in the menu landed mid-page.
 */

const INSTANT: ScrollToOptions = { top: 0, left: 0, behavior: 'auto' }

let restorationDisabled = false

export function disableScrollRestoration() {
  if (restorationDisabled || typeof window === 'undefined') return
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  restorationDisabled = true
}

export function jumpToTop() {
  if (typeof window === 'undefined') return
  window.scrollTo(INSTANT)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

/**
 * Keep the window pinned at Y=0 until `ms` elapses, or the user scrolls
 * themselves (wheel / touch / keys). Covers Sheet unlock + image layout.
 */
export function holdScrollTop(ms = 420) {
  if (typeof window === 'undefined') return () => {}

  disableScrollRestoration()
  jumpToTop()

  let hold = true
  let raf = 0
  const started = Date.now()

  const release = () => {
    hold = false
  }

  const tick = () => {
    if (!hold || Date.now() - started >= ms) {
      cleanup()
      return
    }
    jumpToTop()
    raf = requestAnimationFrame(tick)
  }

  window.addEventListener('wheel', release, { passive: true })
  window.addEventListener('touchmove', release, { passive: true })
  window.addEventListener('keydown', release)

  raf = requestAnimationFrame(tick)

  function cleanup() {
    hold = false
    cancelAnimationFrame(raf)
    window.removeEventListener('wheel', release)
    window.removeEventListener('touchmove', release)
    window.removeEventListener('keydown', release)
  }

  return cleanup
}

/**
 * Schedules low-priority work after the browser has handled user input,
 * rendering and other critical tasks. Falls back to setTimeout(0) when
 * requestIdleCallback is unavailable (Safari, SSR).
 */
export function deferNonCritical(callback: () => void): void {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 200 })
  } else if (typeof window !== 'undefined') {
    setTimeout(callback, 0)
  } else {
    callback()
  }
}

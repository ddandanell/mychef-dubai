/**
 * Reveal fail-safe (part 2 of 2 — see the inline boot script in index.html).
 *
 * WHY THIS EXISTS
 * ---------------
 * ~123 page components ship their content with Tailwind's `opacity-0` baked
 * into the markup and rely entirely on GSAP ScrollTrigger to fade it in.
 * That makes JavaScript a hard requirement for the page to be *visible at all*
 * — including the <h1>. Any of the following left the page permanently blank:
 *
 *   - a ScrollTrigger whose start position never crosses the viewport
 *     (very common after client-side navigation, when the new page mounts
 *     against a stale scroll position),
 *   - a slow or failed route/GSAP chunk,
 *   - a thrown error inside a page's useGSAP callback.
 *
 * WHAT IT DOES
 * ------------
 * A short while after load — and again after every route change — sweep for
 * elements that are still `.opacity-0` and that GSAP has NOT claimed, and
 * reveal them.
 *
 * The `!el.style.opacity` check is the important part: GSAP writes inline
 * styles when it animates, so anything GSAP is driving (mid-animation or
 * finished) is skipped and its animation plays untouched. Only genuinely
 * stuck elements are forced visible. This is a safety net, not a replacement
 * for the animations.
 */

const REVEAL_DELAY_MS = 1500

let timer: number | undefined

function revealStuckElements(): void {
  const stuck = document.querySelectorAll<HTMLElement>('.opacity-0')

  stuck.forEach((el) => {
    // GSAP sets inline styles on anything it drives — leave those alone.
    if (el.style.opacity) return

    el.style.opacity = '1'
    el.style.transform = 'none'
  })
}

/**
 * Arm (or re-arm) the sweep. Safe to call on every navigation — the pending
 * timer is always cleared first so rapid navigation cannot stack sweeps.
 */
export function armRevealFailsafe(delay: number = REVEAL_DELAY_MS): void {
  if (typeof window === 'undefined') return

  if (timer !== undefined) window.clearTimeout(timer)
  timer = window.setTimeout(revealStuckElements, delay)
}

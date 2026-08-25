import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { armRevealFailsafe } from '../lib/revealFailsafe'
import { disableScrollRestoration, holdScrollTop, jumpToTop } from '../lib/scrollToTop'

/**
 * Handles everything that has to happen when the route changes in this SPA.
 *
 *  1. Jump to the top on every new pathname. React Router keeps the previous
 *     Y; the mobile Sheet restores the Y it locked when the menu opened.
 *     `holdScrollTop` pins Y=0 through that unlock (~300ms close animation).
 *
 *  2. Same-page `#hash` still scrolls to the target after layout.
 *
 *  3. `ScrollTrigger.refresh()` so GSAP start positions match the new page.
 *
 *  4. `armRevealFailsafe()` for anything still stuck at opacity:0.
 */
export default function ScrollManager() {
  useScrollTrigger()
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    disableScrollRestoration()
  }, [])

  useLayoutEffect(() => {
    if (hash) return
    jumpToTop()
  }, [pathname, hash])

  useEffect(() => {
    disableScrollRestoration()

    if (hash) {
      const id = hash.slice(1)
      const toHash = () => document.getElementById(id)?.scrollIntoView()
      const raf = requestAnimationFrame(toHash)
      const later = window.setTimeout(toHash, 120)
      const refresh = window.setTimeout(() => {
        ScrollTrigger.refresh()
        armRevealFailsafe()
      }, 80)
      return () => {
        cancelAnimationFrame(raf)
        window.clearTimeout(later)
        window.clearTimeout(refresh)
      }
    }

    const releaseHold = holdScrollTop(420)
    const refresh = window.setTimeout(() => {
      jumpToTop()
      ScrollTrigger.refresh()
      armRevealFailsafe()
    }, 80)

    return () => {
      releaseHold()
      window.clearTimeout(refresh)
    }
  }, [pathname, hash])

  return null
}

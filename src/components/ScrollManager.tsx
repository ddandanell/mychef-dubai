import { useEffect } from 'react'
import { useLocation } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { armRevealFailsafe } from '../lib/revealFailsafe'

gsap.registerPlugin(ScrollTrigger)

/**
 * Handles everything that has to happen when the route changes in this SPA.
 *
 * Previously none of this existed, which is why navigating between pages left
 * whole sections invisible:
 *
 *  1. `window.scrollTo(0, 0)` — React Router keeps the browser's scroll
 *     position across navigations. A new page mounting at, say, 2000px down
 *     means every ScrollTrigger configured `start: "top 80%"` for content now
 *     above the viewport has already been passed and will never fire, leaving
 *     those sections stuck at opacity:0 forever.
 *
 *  2. `ScrollTrigger.refresh()` — trigger positions are measured once at
 *     creation. After a route swap the layout is entirely different, so every
 *     cached position is stale. There was no refresh() call anywhere in the
 *     codebase before this component.
 *
 *  3. `armRevealFailsafe()` — last-resort sweep for anything still hidden.
 *
 * Order matters: scroll first, then refresh against the new scroll position.
 */
export default function ScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Let the new route paint before measuring, otherwise refresh() reads the
    // outgoing page's layout.
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      armRevealFailsafe()
    })

    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}

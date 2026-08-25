import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { armRevealFailsafe } from '../lib/revealFailsafe'

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
  useScrollTrigger()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      } else {
        window.scrollTo(0, 0)
      }
      ScrollTrigger.refresh()
      armRevealFailsafe()
    })

    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}

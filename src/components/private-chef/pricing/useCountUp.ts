import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Animates a number toward `target` on change (≈400ms, rAF). With reduced motion the
 * target is returned directly. No synchronous setState inside the effect — only rAF callbacks.
 */
export function useCountUp(target: number): number {
  const [animated, setAnimated] = useState(target)
  const fromRef = useRef(target)
  const reduce = prefersReducedMotion()

  useEffect(() => {
    if (reduce) {
      fromRef.current = target
      return
    }
    const from = fromRef.current
    if (from === target) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 400)
      const eased = 1 - Math.pow(1 - t, 3)
      setAnimated(Math.round(from + (target - from) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, reduce])

  return reduce ? target : animated
}

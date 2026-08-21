import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

/**
 * Registers GSAP ScrollTrigger once, inside a component effect rather than at
 * module load. This keeps the plugin registration off the critical chunk-
 * evaluation path for below-the-fold sections, improving initial paint and INP.
 */
export function useScrollTrigger() {
  const registeredRef = useRef(false)

  useEffect(() => {
    if (registeredRef.current) return
    registeredRef.current = true

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger)
      registered = true
    }
  }, [])
}

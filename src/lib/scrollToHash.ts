/** Follow a fragment even when its article or SEO content arrives asynchronously. */
export function scrollToHash(hash: string, timeoutMs = 8000) {
  if (typeof window === 'undefined' || !hash || hash === '#') return () => {}

  let id = hash.slice(1)
  try { id = decodeURIComponent(id) } catch { /* Literal malformed fragments are harmless. */ }
  let active = true
  let frame = 0
  let settled = 0
  let found = false

  const align = () => {
    frame = 0
    if (!active) return
    const target = document.getElementById(id)
    if (!target || !target.getClientRects().length) return
    found = true
    target.scrollIntoView({ behavior: 'auto', block: 'start' })
    window.clearTimeout(settled)
    settled = window.setTimeout(cleanup, 1500)
  }
  const schedule = () => {
    if (active && !frame) frame = requestAnimationFrame(align)
  }
  // React may commit the destination after the route effect. Only watch changes
  // that can introduce a heading; GSAP style changes must not create a loop.
  const observer = new MutationObserver(schedule)
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['id'] })
  const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(schedule)
  resize?.observe(document.body)
  document.addEventListener('load', schedule, true)

  const deadline = window.setTimeout(() => {
    if (!found) window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    cleanup()
  }, timeoutMs)
  const cancelKeys = (event: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab', 'Escape'].includes(event.key)) cleanup()
  }
  // Once a reader interacts, never pull them back to the original fragment.
  window.addEventListener('wheel', cleanup, { passive: true })
  window.addEventListener('touchstart', cleanup, { passive: true })
  window.addEventListener('pointerdown', cleanup, { passive: true })
  window.addEventListener('keydown', cancelKeys)

  function cleanup() {
    active = false
    cancelAnimationFrame(frame)
    window.clearTimeout(settled)
    window.clearTimeout(deadline)
    observer.disconnect()
    resize?.disconnect()
    document.removeEventListener('load', schedule, true)
    window.removeEventListener('wheel', cleanup)
    window.removeEventListener('touchstart', cleanup)
    window.removeEventListener('pointerdown', cleanup)
    window.removeEventListener('keydown', cancelKeys)
  }

  schedule()
  return cleanup
}

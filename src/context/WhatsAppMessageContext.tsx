import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

interface WhatsAppMessageStore {
  current: string
  set(message: string): void
  subscribe(callback: () => void): () => void
}

const WhatsAppMessageContext = createContext<WhatsAppMessageStore>({
  current: '',
  set: () => {},
  subscribe: () => () => {},
})

export function WhatsAppMessageProvider({ children }: { children: ReactNode }) {
  // A stable mutable store lets page components write during render so the
  // prerendered sticky bar contains the page-specific message. A subscription
  // list lets StickyMobileCTA re-render after navigation without re-rendering
  // every page component.
  const listeners = useMemo<Set<() => void>>(() => new Set(), [])
  const store = useMemo<WhatsAppMessageStore>(() => ({
    current: '',
    set(message: string) {
      this.current = message
      listeners.forEach((cb) => cb())
    },
    subscribe(callback: () => void) {
      listeners.add(callback)
      return () => listeners.delete(callback)
    },
  }), [listeners])

  return (
    <WhatsAppMessageContext.Provider value={store}>
      {children}
    </WhatsAppMessageContext.Provider>
  )
}

/**
 * Call this inside a route component to set the sticky mobile CTA WhatsApp
 * message for that page. The value is written synchronously during render so
 * prerendered HTML includes it, and reset when the component unmounts.
 */
export function useWhatsAppMessage(message?: string): void {
  const store = useContext(WhatsAppMessageContext)

  if (message !== undefined && store.current !== message) {
    store.current = message
  }

  useEffect(() => {
    if (message === undefined) return
    store.set(message)
    return () => store.set('')
  }, [message, store])
}

export function useStickyWhatsAppMessage(): string {
  const store = useContext(WhatsAppMessageContext)
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    return store.subscribe(() => forceUpdate((n) => n + 1))
  }, [store])

  return store.current
}

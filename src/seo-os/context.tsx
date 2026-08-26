import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

export type SeoOsPageMeta = {
  title: string
  description: string
  exportName?: string
  exportData?: unknown
}

type SeoOsContextValue = {
  meta: SeoOsPageMeta
  setMeta: (meta: SeoOsPageMeta) => void
}

const SeoOsContext = createContext<SeoOsContextValue | null>(null)

export function SeoOsProvider({
  children,
  initial,
}: {
  children: ReactNode
  initial: SeoOsPageMeta
}) {
  const [meta, setMeta] = useState<SeoOsPageMeta>(initial)
  const value = useMemo(() => ({ meta, setMeta }), [meta])
  return <SeoOsContext.Provider value={value}>{children}</SeoOsContext.Provider>
}

export function useSeoOs() {
  const ctx = useContext(SeoOsContext)
  if (!ctx) throw new Error("useSeoOs must be used inside SeoOsProvider")
  return ctx
}

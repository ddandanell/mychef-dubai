import type { ReactNode } from 'react'

export type InstitutionalPageContent = {
  root: string
  eyebrow: string
  lock: { primary: string; title: string; description: string; h1: string }
  hero: {
    src: string
    alt: string
    width: number
    height: number
    subtitle: string
    micro: string
  }
  whatsapp: string
  primaryCta: string
  breadcrumb: { label: string; href?: string }[]
  jumpNav: { href: string; label: string }[]
  siblings: { href: string; label: string }[]
  siloNote: ReactNode
  problem: { h2: string; paragraphs: string[] }
  difference: { h2: string; blocks: { title: string; body: string }[] }
  table?: {
    label: string
    h2: string
    intro: string
    columns: string[]
    rows: string[][]
    note?: string
  }
  compliance: {
    h2: string
    intro: string
    rows: { item: string; who: string; see: string }[]
    note: string
  }
  process: { h2: string; steps: string[] }
  quoting: { h2: string; paragraphs: string[] }
  trust: { h2: string; items: { title: string; body: string; href?: string; linkLabel?: string }[] }
  faqH2: string
  faqs: { q: string; a: string }[]
  locationTitle: string
  locationSubtitle: ReactNode
  cta: { h2: string; body: string }
}

import { useMemo } from "react"
import { useSeoJson } from "@/seo-os/lib/data"

/**
 * The keyword file, indexed for drill-down.
 *
 * The board could show a page and its keywords, but not the other direction: from a phrase you
 * could not reach the page that owns it, the phrases it sits beside, or what Google does with
 * it. This index is what makes a keyword a place you can navigate to.
 */

export type KeywordRow = {
  keyword: string
  role: string
  primary_owning_url: string
  silo?: string | null
  search_volume?: number | null
  intent?: string | null
  difficulty?: number | null
  commercial_value?: number | null
  current_position?: number | null
  target_position?: number | null
  optimization_score?: number | null
  next_action?: string | null
  cannibalisation_risk?: string | null
  competitor_gap?: string | null
  secondary_supporting_urls?: string[] | null
  title_coverage?: boolean
  meta_coverage?: boolean
  h1_coverage?: boolean
  h2_coverage?: boolean
  body_coverage?: number | null
  faq_coverage?: boolean
  internal_anchor_coverage?: string | null
  gsc_clicks?: number | null
  gsc_impressions?: number | null
  gsc_ctr?: number | null
  gsc_position?: number | null
  gsc_ranking_url?: string | null
  demand_share?: number | null
  page_visitors?: number | null
  page_pageviews?: number | null
  page_conversions?: number | null
}

export type KeywordIndex = {
  loading: boolean
  error: string | null
  rows: KeywordRow[]
  byKeyword: Map<string, KeywordRow>
  byUrl: Map<string, KeywordRow[]>
  /** The keywords that share a page with this one — its family. */
  family: (keyword: string) => KeywordRow[]
}

const key = (s: string) => s.trim().toLowerCase()

export function useKeywordIndex(): KeywordIndex {
  const { data, error, loading } = useSeoJson<{ rows?: KeywordRow[] }>("keywords")

  return useMemo(() => {
    const rows = (data?.rows ?? []).filter((r) => r.keyword)
    const byKeyword = new Map<string, KeywordRow>()
    const byUrl = new Map<string, KeywordRow[]>()
    for (const row of rows) {
      if (!byKeyword.has(key(row.keyword))) byKeyword.set(key(row.keyword), row)
      const list = byUrl.get(row.primary_owning_url) ?? []
      list.push(row)
      byUrl.set(row.primary_owning_url, list)
    }
    for (const list of byUrl.values()) {
      // Primary first, then the phrases with demand — the order someone reads them in.
      list.sort((a, b) => {
        if ((a.role === "primary") !== (b.role === "primary")) return a.role === "primary" ? -1 : 1
        return (b.search_volume ?? 0) - (a.search_volume ?? 0)
      })
    }
    return {
      loading,
      error,
      rows,
      byKeyword,
      byUrl,
      family: (keyword: string) => {
        const row = byKeyword.get(key(keyword))
        if (!row) return []
        return (byUrl.get(row.primary_owning_url) ?? []).filter((r) => key(r.keyword) !== key(keyword))
      },
    }
  }, [data, error, loading])
}

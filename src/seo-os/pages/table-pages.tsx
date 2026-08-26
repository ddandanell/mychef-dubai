import { useMemo, useState } from "react"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { InspectorSheet } from "@/seo-os/components/inspector-sheet"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { asRecord, flattenUnknown, fmtNum } from "@/seo-os/lib/format"

type CatalogId =
  | "keywords"
  | "demand"
  | "research"
  | "gaps"
  | "architecture"
  | "links"
  | "backlog"
  | "ai-visibility"
  | "actions"

type CatalogConfig = {
  file: string
  title: string
  description: string
  search: string
  pick: (data: Record<string, unknown>) => unknown[]
  metrics?: (data: Record<string, unknown>, rows: Record<string, unknown>[]) => { label: string; value: string; hint?: string }[]
  columns: TableColumn<Record<string, unknown>>[]
}

const col = (
  id: string,
  header: string,
  kind?: TableColumn<Record<string, unknown>>["kind"],
): TableColumn<Record<string, unknown>> => ({
  id,
  header,
  accessor: (row) => row[id],
  kind,
})

const CATALOG: Record<CatalogId, CatalogConfig> = {
  keywords: {
    file: "keywords",
    title: "Keywords",
    description: "One row per keyword, with its score and GSC numbers. Click a row for coverage and cannibalisation.",
    search: "Filter keyword or URL…",
    pick: (d) => (Array.isArray(d.rows) ? d.rows : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Keywords", value: fmtNum(s.keywords) },
        { label: "At 10/10", value: fmtNum(s.at_10) },
        { label: "Below 5", value: fmtNum(s.below_5) },
        { label: "High risk", value: fmtNum(s.high_risk) },
      ]
    },
    columns: [
      col("keyword", "Keyword"),
      col("primary_owning_url", "Owner", "url"),
      col("role", "Role", "badge"),
      col("search_volume", "Volume", "number"),
      col("optimization_score", "Score", "number"),
      col("gsc_impressions", "Impr", "number"),
      col("gsc_clicks", "Clicks", "number"),
      col("current_position", "Pos", "number"),
      col("next_action", "Next"),
    ],
  },
  demand: {
    file: "demand",
    title: "Demand",
    description: "What each page's keyword set is worth in UAE search volume.",
    search: "Filter URL or keyword…",
    pick: (d) => (Array.isArray(d.pages) ? d.pages : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Pages", value: fmtNum(s.pages) },
        { label: "Primary volume", value: fmtNum(s.primary_volume_total) },
        { label: "Primaries with volume", value: fmtNum(s.primaries_with_volume) },
        { label: "We rank", value: fmtNum(s.we_rank) },
      ]
    },
    columns: [
      col("url", "URL", "url"),
      col("primary", "Primary"),
      col("primary_volume", "Volume", "number"),
      col("intent", "Intent", "badge"),
      col("verdict", "Verdict", "badge"),
      col("subs_volume_total", "Subs vol", "number"),
      col("best_sub", "Best sub"),
      col("why", "Why"),
    ],
  },
  research: {
    file: "report",
    title: "Research",
    description: "Volume, difficulty, intent and the URL Google currently ranks.",
    search: "Filter keyword…",
    pick: (d) => (Array.isArray(d.rows) ? d.rows : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Rows", value: fmtNum(s.rows) },
        { label: "Top 10", value: fmtNum(s.we_rank_top10) },
        { label: "Top 30", value: fmtNum(s.we_rank_top30) },
        { label: "New page candidates", value: fmtNum(s.new_page_candidates) },
      ]
    },
    columns: [
      col("kw", "Keyword"),
      col("volume", "Volume", "number"),
      col("intent", "Intent", "badge"),
      col("kd", "KD", "number"),
      col("position", "Pos", "number"),
      col("owner", "Owner", "url"),
      col("action", "Action", "badge"),
      col("gsc_impressions", "Impr", "number"),
    ],
  },
  gaps: {
    file: "gaps",
    title: "Gaps",
    description: "What competitor pages cover that ours do not.",
    search: "Filter URL…",
    pick: (d) => (Array.isArray(d.pages) ? d.pages : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Pages", value: fmtNum(s.pages) },
        { label: "Avg gap", value: fmtNum(s.avg_gap_score) },
        { label: "Thinner than median", value: fmtNum(s.thinner_than_median_competitor) },
        { label: "Competitor pages", value: fmtNum(s.competitor_pages) },
      ]
    },
    columns: [
      col("url", "URL", "url"),
      col("primary", "Primary"),
      col("our_words", "Our words", "number"),
      col("competitor_words_median", "Competitor median", "number"),
      col("gap_score", "Gap", "number"),
      col("competitors_with_price", "Price SERPs", "number"),
      col("competitors_with_faq_schema", "FAQ schema", "number"),
    ],
  },
  architecture: {
    file: "architecture",
    title: "Architecture",
    description: "The sitemap as an authority map — hubs that do not link their children, depth, orphans.",
    search: "Filter URL or issue…",
    pick: (d) => (Array.isArray(d.issues) ? d.issues : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Sitemap URLs", value: fmtNum(s.sitemap_urls) },
        { label: "Routed", value: fmtNum(s.routed) },
        { label: "Max depth", value: fmtNum(s.max_depth) },
        { label: "Issues", value: fmtNum(s.issues) },
      ]
    },
    columns: [
      col("kind", "Kind", "badge"),
      col("url", "URL", "url"),
      col("detail", "Detail"),
    ],
  },
  links: {
    file: "links",
    title: "Links",
    description: "Internal link profile per URL.",
    search: "Filter URL…",
    pick: (d) => (Array.isArray(d.profiles) ? d.profiles : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Pages", value: fmtNum(s.pages) },
        { label: "Orphans", value: fmtNum(s.orphans) },
        { label: "Max opportunity", value: fmtNum(s.max_opportunity) },
        { label: "Weak", value: fmtNum(s.weak) },
      ]
    },
    columns: [
      col("url", "URL", "url"),
      col("silo", "Silo"),
      col("status", "Status", "badge"),
      col("in_contextual", "In (contextual)", "number"),
      col("out_contextual", "Out (contextual)", "number"),
      col("anchor_generic", "Generic anchors", "number"),
      col("importance", "Importance", "number"),
    ],
  },
  backlog: {
    file: "backlog",
    title: "Backlog",
    description: "Phrases no page owns yet. Suggested homes are hints, not assignments.",
    search: "Filter phrase…",
    pick: (d) => (Array.isArray(d.rows) ? d.rows : []),
    metrics: (d) => {
      const s = asRecord(d.stats)
      return [
        { label: "Phrases", value: fmtNum(s.total) },
        { label: "With AE volume", value: fmtNum(s.with_ae_volume) },
        { label: "Already said", value: fmtNum(s.already_said) },
        { label: "No home", value: fmtNum(s.no_home) },
      ]
    },
    columns: [
      col("kw", "Keyword"),
      col("intent", "Intent", "badge"),
      col("vol_ae", "AE vol", "number"),
      col("suggested", "Suggested", "url"),
      col("silo", "Silo"),
      col("kd", "KD", "number"),
    ],
  },
  "ai-visibility": {
    file: "ai-visibility",
    title: "AI Visibility",
    description: "Who Claude names for buyer prompts. We do not invent citations.",
    search: "Filter prompt…",
    pick: (d) => (Array.isArray(d.rows) ? d.rows : []),
    metrics: (d) => {
      const s = asRecord(d.summary)
      return [
        { label: "Prompts", value: fmtNum(s.prompts) },
        { label: "We appear", value: fmtNum(s.we_appear) },
        { label: "Model", value: String(s.model ?? "—") },
        { label: "Spent", value: String(s.spent ?? "—") },
      ]
    },
    columns: [
      col("label", "Prompt"),
      col("we_named", "Named", "badge"),
      col("we_cited", "Cited", "badge"),
      { id: "providers", header: "Named others", accessor: (row) => row.providers, kind: "text" },
    ],
  },
  actions: {
    file: "actions",
    title: "Agent Runs",
    description: "Every change the agent made, newest first. Optimizer writes are reversible.",
    search: "Filter commit or message…",
    pick: (d) => (Array.isArray(d.rows) ? d.rows : flattenUnknown(d)),
    metrics: (d) => (Array.isArray(d.tiles) ? (d.tiles as { label: string; value: string }[]).map((t) => ({ label: t.label, value: t.value })) : []),
    columns: [
      col("commit", "Commit", "mono"),
      col("when", "When", "mono"),
      col("what", "What"),
      col("files", "Files", "number"),
    ],
  },
}

export default function CatalogPage({ id }: { id: CatalogId }) {
  const config = CATALOG[id]
  const { data, error, loading } = useSeoJson<Record<string, unknown>>(config.file)
  const [row, setRow] = useState<Record<string, unknown> | null>(null)
  const rows = useMemo(
    () => (data ? (config.pick(data) as Record<string, unknown>[]) : []),
    [config, data],
  )
  const metrics = data ? config.metrics?.(data, rows) : undefined

  return (
    <PageFrame
      title={config.title}
      description={config.description}
      exportName={config.file}
      exportData={data}
      loading={loading}
      error={error}
      metrics={metrics}
    >
      <DataTable data={rows} columns={config.columns} searchPlaceholder={config.search} onRowClick={setRow} />
      <InspectorSheet row={row} onClose={() => setRow(null)} />
    </PageFrame>
  )
}

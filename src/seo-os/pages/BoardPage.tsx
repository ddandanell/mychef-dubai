import { useMemo, useState } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { InspectorSheet } from "@/seo-os/components/inspector-sheet"
import { PageFrame } from "@/seo-os/components/page-frame"
import { flattenBoardPages, useSeoJson, type BoardFile, type BoardPageRow } from "@/seo-os/lib/data"
import { fmtNum, fmtScore } from "@/seo-os/lib/format"

const columns: TableColumn<BoardPageRow>[] = [
  { id: "url", header: "URL", accessor: (r) => r.url, kind: "url" },
  { id: "silo", header: "Silo", accessor: (r) => r.silo },
  { id: "primary", header: "Primary", accessor: (r) => r.primary },
  { id: "volume", header: "Volume", accessor: (r) => r.primary_volume ?? 0, kind: "number" },
  {
    id: "score",
    header: "Score",
    accessor: (r) => {
      const score = r.keyword_score
      if (score && typeof score === "object" && "primary" in score) {
        return (score as { primary?: number }).primary ?? 0
      }
      return score ?? 0
    },
    kind: "number",
  },
  { id: "type", header: "Type", accessor: (r) => r.page_type, kind: "badge" },
  { id: "room", header: "Room", accessor: (r) => r.room ?? 0, kind: "number" },
  {
    id: "risk",
    header: "Risk",
    accessor: (r) => {
      const risk = r.risk
      if (risk && typeof risk === "object") {
        const heading = Array.isArray((risk as { heading_pages?: unknown }).heading_pages)
          ? ((risk as { heading_pages: unknown[] }).heading_pages.length)
          : 0
        return heading ? `${heading} heading` : ""
      }
      return risk
    },
    kind: "badge",
  },
]

export default function BoardPage() {
  const { data, error, loading } = useSeoJson<BoardFile>("data")
  const [row, setRow] = useState<BoardPageRow | null>(null)
  const pages = useMemo(() => flattenBoardPages(data), [data])
  const stats = data?.stats ?? {}
  const siloChart = useMemo(() => {
    const rows = Object.entries(data?.silos ?? {}).map(([silo, pages]) => ({
      silo: silo.replace(" / ", " · "),
      pages: pages.length,
    }))
    const max = Math.max(...rows.map((row) => row.pages), 1)
    return rows
      .sort((a, b) => b.pages - a.pages)
      .map((row) => ({ ...row, pct: Math.round((row.pages / max) * 100) }))
  }, [data])

  return (
    <PageFrame
      title="Board"
      description="Every URL and its locked keywords. Click a row for subkeywords and on-page placement."
      exportName="board"
      exportData={data}
      loading={loading}
      error={error}
      metrics={[
        { label: "Active pages", value: fmtNum(stats.pages_active), hint: `${fmtNum(stats.pages_total)} in contract` },
        { label: "Primaries", value: fmtNum(stats.primaries), hint: `${fmtNum(stats.subkeywords)} subkeywords` },
        { label: "Room left", value: fmtNum(stats.room_total), hint: `${fmtNum(stats.pages_with_room)} pages can take more` },
        { label: "Collisions", value: fmtNum(stats.heading_collisions), hint: `${fmtNum(stats.primary_missing_h1)} missing H1` },
      ]}
    >
      {siloChart.length ? (
        <div className="px-4 lg:px-6">
          <Card>
            <CardHeader>
              <CardTitle>Pages by silo</CardTitle>
              <CardDescription>Contract URLs grouped the way the board is built.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {siloChart.map((row) => (
                <div key={row.silo} className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground w-40 shrink-0 truncate text-right">{row.silo}</span>
                  <div className="bg-muted h-2 min-w-0 flex-1 rounded-full">
                    <div
                      className="bg-sidebar h-2 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-8 tabular-nums">{row.pages}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ) : null}
      <DataTable
        data={pages}
        columns={columns}
        searchPlaceholder="Filter URL, silo, or keyword…"
        onRowClick={setRow}
      />
      <InspectorSheet
        row={row}
        title={row?.url}
        onClose={() => setRow(null)}
      />
      <p className="text-muted-foreground px-4 text-xs lg:px-6">
        Generated {data?.generated ?? "—"}. Score {fmtScore(stats.primary_score_avg)} average on primaries.
      </p>
    </PageFrame>
  )
}

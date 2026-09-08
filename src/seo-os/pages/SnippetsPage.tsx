import { useMemo, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { fmtNum } from "@/seo-os/lib/format"

type SnippetTest = {
  url: string
  keyword?: string
  status?: string
  reason?: string
  impressions?: number
  clicks?: number
  ctr?: number
  expected_ctr?: number
  ctr_gap?: number
  position?: number
  persona?: string
  control_title?: string
  chosen?: { kind?: string; title?: string; voice_score?: number }
}

type SnippetsFile = {
  intro?: string
  tiles?: { value: string; label: string }[]
  tests?: SnippetTest[]
}

const EMPTY: SnippetTest[] = []

const columns: TableColumn<SnippetTest>[] = [
  { id: "status", header: "Status", accessor: (r) => r.status || "", kind: "badge" },
  { id: "ctr_gap", header: "CTR gap", accessor: (r) => r.ctr_gap, kind: "number" },
  { id: "impressions", header: "Impr", accessor: (r) => r.impressions, kind: "number" },
  { id: "ctr", header: "CTR", accessor: (r) => r.ctr, kind: "number" },
  { id: "expected_ctr", header: "Expected", accessor: (r) => r.expected_ctr, kind: "number" },
  { id: "position", header: "Pos", accessor: (r) => r.position, kind: "number" },
  { id: "url", header: "URL", accessor: (r) => r.url, kind: "url" },
  { id: "keyword", header: "Keyword", accessor: (r) => r.keyword || "" },
  { id: "control_title", header: "Live title", accessor: (r) => r.control_title || "" },
  { id: "variant", header: "Proposed title", accessor: (r) => r.chosen?.title || "" },
]

export default function SnippetsPage() {
  const { data, error, loading } = useSeoJson<SnippetsFile>("snippets")
  const [tab, setTab] = useState("proposed")
  const [row, setRow] = useState<SnippetTest | null>(null)
  const tests = data?.tests ?? EMPTY
  const filtered = useMemo(() => {
    if (tab === "all") return tests
    return tests.filter((t) => t.status === tab)
  }, [tests, tab])
  const ready = tests.filter((t) => t.status === "proposed").length

  return (
    <PageFrame
      title="Snippets"
      description={data?.intro || "Title and meta tests for Google. Rank is not enough — the line has to earn the click."}
      exportName="snippets"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        {ready ? (
          <Alert>
            <AlertTitle>{fmtNum(ready)} snippet tests ready</AlertTitle>
            <AlertDescription>
              They also land on the Queue as snippet_test. Applying one opens a 14-day window. Do not change the H1 in
              the same test. The agent does not write the live title itself.
            </AlertDescription>
          </Alert>
        ) : null}
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="proposed">Ready</TabsTrigger>
            <TabsTrigger value="blocked">Blocked</TabsTrigger>
            <TabsTrigger value="ctr_ok">CTR ok</TabsTrigger>
            <TabsTrigger value="too_few_impressions">Too few</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <DataTable
        data={filtered}
        columns={columns}
        searchPlaceholder="Filter URL or title…"
        onRowClick={(item) => setRow(item)}
        emptyTitle="No snippet research"
        emptyDescription="Run python3 docs/seo/keyword-map/build-snippets.py after Search Console has been harvested."
      />
      {row ? (
        <div className="px-4 lg:px-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{row.url}</CardTitle>
              <CardDescription>{row.reason}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              <p>
                <span className="text-muted-foreground">Live · </span>
                {row.control_title}
              </p>
              <p>
                <span className="text-muted-foreground">Test · </span>
                {row.chosen?.title || "—"}
              </p>
              <p className="text-muted-foreground">
                {row.impressions} impressions · CTR {row.ctr ?? "—"} vs expected {row.expected_ctr ?? "—"} · persona{" "}
                {row.persona} · voice {row.chosen?.voice_score ?? "—"}/10
              </p>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </PageFrame>
  )
}

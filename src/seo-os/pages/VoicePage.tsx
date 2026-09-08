import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { fmtNum } from "@/seo-os/lib/format"

type VoiceRow = {
  url: string
  keyword?: string
  persona?: string
  title?: string
  passed?: boolean
  score?: number
  failures?: string[]
  warnings?: string[]
}

type VoiceFile = {
  intro?: string
  tiles?: { value: string; label: string }[]
  personas?: Record<string, { who?: string; fear?: string; next?: string; tone?: string }>
  pages?: VoiceRow[]
}

const EMPTY: VoiceRow[] = []

const columns: TableColumn<VoiceRow>[] = [
  { id: "passed", header: "Voice", accessor: (r) => (r.passed ? "ok" : "fail"), kind: "badge" },
  { id: "score", header: "Score", accessor: (r) => r.score, kind: "number" },
  { id: "persona", header: "Persona", accessor: (r) => r.persona || "", kind: "badge" },
  { id: "url", header: "URL", accessor: (r) => r.url, kind: "url" },
  { id: "keyword", header: "Primary", accessor: (r) => r.keyword || "" },
  { id: "title", header: "Title", accessor: (r) => r.title || "" },
  { id: "failures", header: "Fails", accessor: (r) => (r.failures || []).join("; ") },
]

export default function VoicePage() {
  const { data, error, loading } = useSeoJson<VoiceFile>("voice")
  const [tab, setTab] = useState("fail")
  const pages = data?.pages ?? EMPTY
  const rows = useMemo(() => {
    if (tab === "fail") return pages.filter((p) => !p.passed)
    if (tab === "pass") return pages.filter((p) => p.passed)
    return pages
  }, [pages, tab])
  const personas = data?.personas ?? {}

  return (
    <PageFrame
      title="Voice"
      description={data?.intro || "Who the reader is, and whether the live title still sounds like myCHEF."}
      exportName="voice"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        <div className="grid gap-3 lg:grid-cols-3">
          {Object.entries(personas).map(([id, persona]) => (
            <Card key={id}>
              <CardHeader className="gap-1">
                <CardDescription className="capitalize">{id.replaceAll("_", " ")}</CardDescription>
                <CardTitle className="text-base">{persona.who}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground flex flex-col gap-2 text-sm">
                <p>Fear: {persona.fear}</p>
                <p>Next: {persona.next}</p>
                <p>Tone: {persona.tone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="fail">Failing</TabsTrigger>
            <TabsTrigger value="pass">Passing</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <DataTable
        data={rows}
        columns={columns}
        searchPlaceholder="Filter URL or title…"
        emptyTitle="No voice scores"
        emptyDescription="Run python3 docs/seo/keyword-map/build-voice.py"
      />
      <p className="text-muted-foreground px-4 text-sm lg:px-6">
        {fmtNum(rows.length)} rows in this view. A snippet test is refused until the variant passes this gate.
      </p>
    </PageFrame>
  )
}

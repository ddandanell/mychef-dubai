import { useMemo, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { ExperimentVerdict } from "@/seo-os/components/experiment-verdict"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { fmtNum } from "@/seo-os/lib/format"
import type { ControlFile } from "@/seo-os/lib/control"

type ExperimentItem = {
  id?: number
  batch_id?: string
  url: string
  keywords?: string[]
  applied_at?: string | null
  window_days?: number
  closes_on?: string | null
  days_to_go?: number
  verdict?: string
  why?: string
}

type ExperimentsFile = {
  generated?: string
  intro?: string
  counts?: Record<string, number>
  tiles?: { value: string; label: string }[]
  items?: ExperimentItem[]
}

const EMPTY_ITEMS: ExperimentItem[] = []

const columns: TableColumn<ExperimentItem>[] = [
  { id: "verdict", header: "Verdict", accessor: (r) => r.verdict || "too_soon", kind: "badge" },
  { id: "url", header: "URL", accessor: (r) => r.url, kind: "url" },
  { id: "applied_at", header: "Applied", accessor: (r) => (r.applied_at || "").slice(0, 10), kind: "mono" },
  { id: "closes_on", header: "Closes", accessor: (r) => r.closes_on || "", kind: "mono" },
  { id: "days_to_go", header: "Days left", accessor: (r) => r.days_to_go, kind: "number" },
  { id: "why", header: "Why", accessor: (r) => r.why || "" },
]

export default function ExperimentsPage() {
  const experiments = useSeoJson<ExperimentsFile>("experiments")
  const control = useSeoJson<ControlFile>("control")
  const loading = experiments.loading || (Boolean(experiments.error) && control.loading)
  const error = experiments.error && !control.data ? experiments.error : null
  const items = experiments.data?.items ?? EMPTY_ITEMS
  const open = control.data?.experiments?.open ?? items.filter((row) => (row.verdict || "too_soon") === "too_soon")
  const verdicts = experiments.data?.counts ?? control.data?.experiments?.verdicts ?? {}
  const confounded = open.some((row) => row.verdict === "confounded") || (verdicts.confounded ?? 0) > 0
  const [tab, setTab] = useState("open")
  const filtered = useMemo(() => {
    if (tab === "all") return items
    if (tab === "open") return items.filter((row) => (row.verdict || "too_soon") === "too_soon")
    return items.filter((row) => row.verdict === tab)
  }, [items, tab])

  return (
    <PageFrame
      title="Experiments"
      description={experiments.data?.intro || "Lift, flat, drop, too soon, confounded. A change without a window is folklore."}
      exportName="experiments"
      exportData={experiments.data ?? control.data}
      loading={loading}
      error={error}
      metrics={(experiments.data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        {experiments.error && control.data ? (
          <Alert>
            <AlertTitle>Experiments file did not load</AlertTitle>
            <AlertDescription>
              {experiments.error}. Showing open windows from Control until experiments.json is published.
            </AlertDescription>
          </Alert>
        ) : null}
        {confounded ? (
          <Alert variant="destructive">
            <AlertTitle>Confounded</AlertTitle>
            <AlertDescription>
              At least one open window cannot be scored. Do not apply another change to that URL until the window is
              closed.
            </AlertDescription>
          </Alert>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {["lift", "flat", "drop", "too_soon", "confounded"].map((key) => (
            <Card key={key} className="min-w-32">
              <CardHeader className="gap-1 py-4">
                <CardDescription>
                  <ExperimentVerdict value={key} />
                </CardDescription>
                <CardTitle className="text-2xl tabular-nums">{fmtNum(verdicts[key] ?? 0)}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {items.length ? (
          <>
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList>
                <TabsTrigger value="open">Waiting</TabsTrigger>
                <TabsTrigger value="lift">Lift</TabsTrigger>
                <TabsTrigger value="drop">Drop</TabsTrigger>
                <TabsTrigger value="flat">Flat</TabsTrigger>
                <TabsTrigger value="confounded">Confounded</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
              <TabsContent value={tab}>
                <DataTable
                  data={filtered}
                  columns={columns}
                  searchPlaceholder="Filter URL or verdict…"
                  emptyTitle="Nothing in this verdict"
                  emptyDescription="Windows stay open until Search Console can score them."
                />
              </TabsContent>
            </Tabs>
          </>
        ) : open.length ? (
          <Card>
            <CardHeader>
              <CardTitle>Open windows</CardTitle>
              <CardDescription>Baseline vs after waits on GSC for the window length.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {open.map((row) => (
                <div key={`${row.batch_id}-${row.url}`} className="flex flex-wrap items-center gap-2 border-b py-2 last:border-0">
                  <ExperimentVerdict value={row.verdict} />
                  <span className="font-mono text-xs">{row.url}</span>
                  <span className="text-muted-foreground text-xs">
                    {(row.keywords ?? []).join(", ")} · {row.window_days}d
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        ) : (
          <Empty className="border">
            <EmptyHeader>
              <EmptyTitle>No open experiment</EmptyTitle>
              <EmptyDescription>
                Apply a change from the queue, then this page holds the window until GSC can score it.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </div>
    </PageFrame>
  )
}

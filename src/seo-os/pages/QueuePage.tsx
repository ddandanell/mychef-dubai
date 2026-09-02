import { useMemo, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { RecordInspector } from "@/seo-os/components/record-inspector"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { asRecord, fmtNum } from "@/seo-os/lib/format"

type Proposal = {
  id: string
  class: string
  url: string
  keyword: string
  reason: string
  action: string
  risk: string
  autonomy: string
  impact: number
  demand: string
  status: string
  resolution?: string
  resolved_at?: string
  evidence?: Record<string, unknown>
}

type QueueFile = {
  generated?: string
  applied_at?: string
  rule?: string
  proposals?: Proposal[]
  deferred?: number
  deferred_classes?: Record<string, number>
}

function isOpen(item: Proposal) {
  return (item.status || "open") === "open"
}

const columns: TableColumn<Proposal>[] = [
  { id: "status", header: "Status", accessor: (r) => r.status || "open", kind: "badge" },
  { id: "impact", header: "Impact", accessor: (r) => r.impact, kind: "number" },
  { id: "class", header: "Class", accessor: (r) => r.class, kind: "badge" },
  { id: "keyword", header: "Keyword", accessor: (r) => r.keyword },
  { id: "url", header: "URL", accessor: (r) => r.url, kind: "url" },
  { id: "autonomy", header: "Level", accessor: (r) => r.autonomy, kind: "badge" },
  { id: "risk", header: "Risk", accessor: (r) => r.risk, kind: "badge" },
  { id: "demand", header: "Demand", accessor: (r) => r.demand, kind: "badge" },
  { id: "action", header: "Do", accessor: (r) => r.action },
  { id: "resolution", header: "Done as", accessor: (r) => r.resolution || "" },
]

export default function QueuePage() {
  const { data, error, loading } = useSeoJson<QueueFile>("proposals")
  const [row, setRow] = useState<Proposal | null>(null)
  const [tab, setTab] = useState("open")
  const proposals = data?.proposals ?? []
  const open = useMemo(() => proposals.filter(isOpen), [proposals])
  const done = useMemo(() => proposals.filter((item) => !isOpen(item)), [proposals])
  const filtered = useMemo(() => {
    if (tab === "open") return open
    if (tab === "done") return done
    if (tab === "all") return proposals
    return open.filter((item) => item.autonomy === tab)
  }, [proposals, open, done, tab])
  const liveOpen = open.filter((item) => item.demand === "live").length

  return (
    <PageFrame
      title="Queue"
      description={data?.rule || "Ranked proposals from the loop's own evidence. The agent does not apply them."}
      exportName="queue"
      exportData={data}
      loading={loading}
      error={error}
      metrics={[
        { label: "Open", value: fmtNum(open.length) },
        { label: "Done", value: fmtNum(done.length) },
        { label: "Deferred", value: fmtNum(data?.deferred) },
        { label: "Live demand still open", value: fmtNum(liveOpen) },
      ]}
    >
      <div className="px-4 lg:px-6">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="L2">L2</TabsTrigger>
            <TabsTrigger value="L3">L3</TabsTrigger>
            <TabsTrigger value="L4">L4</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <DataTable
        data={filtered}
        columns={columns}
        searchPlaceholder="Filter proposals…"
        onRowClick={setRow}
        emptyTitle={tab === "open" ? "Queue is clear" : "No rows"}
        emptyDescription={
          tab === "open"
            ? "Nothing is waiting. Done items are on the Done tab."
            : "This file has not been published yet, or nothing matches the filter."
        }
      />
      <RecordInspector row={row ? asRecord(row) : null} onClose={() => setRow(null)} />
    </PageFrame>
  )
}

import { useMemo, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { InspectorSheet } from "@/seo-os/components/inspector-sheet"
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
  evidence?: Record<string, unknown>
}

type QueueFile = {
  generated?: string
  rule?: string
  proposals?: Proposal[]
  deferred?: number
  deferred_classes?: Record<string, number>
}

const columns: TableColumn<Proposal>[] = [
  { id: "impact", header: "Impact", accessor: (r) => r.impact, kind: "number" },
  { id: "class", header: "Class", accessor: (r) => r.class, kind: "badge" },
  { id: "keyword", header: "Keyword", accessor: (r) => r.keyword },
  { id: "url", header: "URL", accessor: (r) => r.url, kind: "url" },
  { id: "autonomy", header: "Level", accessor: (r) => r.autonomy, kind: "badge" },
  { id: "risk", header: "Risk", accessor: (r) => r.risk, kind: "badge" },
  { id: "demand", header: "Demand", accessor: (r) => r.demand, kind: "badge" },
  { id: "action", header: "Do", accessor: (r) => r.action },
]

export default function QueuePage() {
  const { data, error, loading } = useSeoJson<QueueFile>("proposals")
  const [row, setRow] = useState<Proposal | null>(null)
  const [tab, setTab] = useState("all")
  const proposals = data?.proposals ?? []
  const filtered = useMemo(() => {
    if (tab === "all") return proposals
    return proposals.filter((item) => item.autonomy === tab)
  }, [proposals, tab])
  const live = proposals.filter((item) => item.demand === "live").length
  const l2 = proposals.filter((item) => item.autonomy === "L2").length

  return (
    <PageFrame
      title="Queue"
      description={data?.rule || "Ranked proposals from the loop's own evidence. The agent does not apply them."}
      exportName="queue"
      exportData={data}
      loading={loading}
      error={error}
      metrics={[
        { label: "On the queue", value: fmtNum(proposals.length) },
        { label: "Deferred", value: fmtNum(data?.deferred) },
        { label: "Live demand", value: fmtNum(live) },
        { label: "Safe for L2 later", value: fmtNum(l2) },
      ]}
    >
      <div className="px-4 lg:px-6">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="L2">L2</TabsTrigger>
            <TabsTrigger value="L3">L3</TabsTrigger>
            <TabsTrigger value="L4">L4</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <DataTable data={filtered} columns={columns} searchPlaceholder="Filter proposals…" onRowClick={setRow} />
      <InspectorSheet row={row ? asRecord(row) : null} title={row?.keyword} onClose={() => setRow(null)} />
    </PageFrame>
  )
}

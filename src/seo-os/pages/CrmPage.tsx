import { useMemo, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { fmtNum } from "@/seo-os/lib/format"

type CountRow = { label: string; count: number }

type CrmSignal = {
  topic: string
  count?: number
  owner_url?: string | null
  action?: string
  why?: string
  ctr_gap?: number | null
  impressions?: number
}

type CrmFile = {
  intro?: string
  optimize_for?: string[]
  connected?: boolean
  error?: string | null
  reason?: string
  required_scopes?: string[]
  mcp?: string
  tiles?: { value: string; label: string }[]
  north_star?: {
    new_contacts?: number
    conversations?: number
    won?: number
    google_contacts?: number
  }
  sources?: CountRow[]
  channels?: CountRow[]
  signals?: CrmSignal[]
  locations?: { name?: string; country?: string; city?: string }[]
  window_days?: number
}

const EMPTY_SIGNALS: CrmSignal[] = []
const EMPTY_COUNTS: CountRow[] = []

const signalColumns: TableColumn<CrmSignal>[] = [
  { id: "action", header: "Action", accessor: (r) => r.action || "", kind: "badge" },
  { id: "count", header: "Chats", accessor: (r) => r.count, kind: "number" },
  { id: "topic", header: "Topic", accessor: (r) => r.topic },
  { id: "owner_url", header: "Owner", accessor: (r) => r.owner_url || "", kind: "url" },
  { id: "why", header: "Why", accessor: (r) => r.why || "" },
]

const countColumns: TableColumn<CountRow>[] = [
  { id: "label", header: "Label", accessor: (r) => r.label },
  { id: "count", header: "Count", accessor: (r) => r.count, kind: "number" },
]

export default function CrmPage() {
  const { data, error, loading } = useSeoJson<CrmFile>("crm")
  const [tab, setTab] = useState("signals")
  const [row, setRow] = useState<CrmSignal | null>(null)

  function onTabChange(next: string) {
    setTab(next)
    if (next === "sources" || next === "channels") setRow(null)
  }
  const signals = data?.signals ?? EMPTY_SIGNALS
  const sources = data?.sources ?? EMPTY_COUNTS
  const channels = data?.channels ?? EMPTY_COUNTS
  const goals = data?.optimize_for ?? []
  const filtered = useMemo(() => {
    if (tab === "snippet_test") return signals.filter((s) => s.action === "snippet_test")
    if (tab === "watch") return signals.filter((s) => s.action === "watch")
    if (tab === "backlog") return signals.filter((s) => s.action === "backlog")
    return signals
  }, [signals, tab])

  return (
    <PageFrame
      title="CRM"
      description={
        data?.intro ||
        "GoHighLevel contacts and conversations. Success is new contacts and what people actually talk about."
      }
      exportName="crm"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        {data?.connected === false ? (
          <Alert>
            <AlertTitle>GoHighLevel is not feeding the board</AlertTitle>
            <AlertDescription>
              {data.error || data.reason || "Ask the gohighlevel MCP to ghl_connect, or run npm run seo:ghl."}
              {data.required_scopes?.length ? ` Required scopes: ${data.required_scopes.join(", ")}.` : ""}
            </AlertDescription>
          </Alert>
        ) : null}

        {goals.length ? (
          <div className="grid gap-3 lg:grid-cols-3">
            {goals.map((goal) => (
              <Card key={goal}>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Optimize for</CardDescription>
                  <CardTitle className="text-base">{goal}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : null}

        <p className="text-muted-foreground text-sm">
          {data?.mcp || "MCP: gohighlevel"} · {fmtNum(data?.north_star?.google_contacts)} Google-sourced contacts ·{" "}
          {fmtNum(data?.window_days ?? 30)}-day window. Topics map to contract owners. Never mint a URL.
        </p>

        <Tabs value={tab} onValueChange={onTabChange}>
          <TabsList>
            <TabsTrigger value="signals">Signals</TabsTrigger>
            <TabsTrigger value="snippet_test">Snippet tests</TabsTrigger>
            <TabsTrigger value="watch">Watch</TabsTrigger>
            <TabsTrigger value="backlog">No new URL</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
            <TabsTrigger value="channels">Channels</TabsTrigger>
          </TabsList>

          <TabsContent value="signals" className="flex flex-col gap-4">
            <DataTable
              data={filtered}
              columns={signalColumns}
              searchPlaceholder="Filter topic or URL…"
              onRowClick={(item) => setRow(item)}
              emptyTitle="No CRM signals"
              emptyDescription="Connect GoHighLevel (ghl_connect / npm run seo:ghl) then rebuild the engine."
            />
          </TabsContent>
          <TabsContent value="snippet_test" className="flex flex-col gap-4">
            <DataTable
              data={filtered}
              columns={signalColumns}
              searchPlaceholder="Filter topic or URL…"
              onRowClick={(item) => setRow(item)}
              emptyTitle="No snippet-test signals"
              emptyDescription="Hot chat topics land here when the owner’s Google CTR is lagging."
            />
          </TabsContent>
          <TabsContent value="watch" className="flex flex-col gap-4">
            <DataTable
              data={filtered}
              columns={signalColumns}
              searchPlaceholder="Filter topic or URL…"
              onRowClick={(item) => setRow(item)}
              emptyTitle="Nothing to watch"
              emptyDescription="Conversation volume on an owner that is already earning its click stays here."
            />
          </TabsContent>
          <TabsContent value="backlog" className="flex flex-col gap-4">
            <DataTable
              data={filtered}
              columns={signalColumns}
              searchPlaceholder="Filter topic…"
              onRowClick={(item) => setRow(item)}
              emptyTitle="No unowned topics"
              emptyDescription="Chat phrases without a contract owner stay here. They do not become URLs."
            />
          </TabsContent>
          <TabsContent value="sources">
            <DataTable
              data={sources}
              columns={countColumns}
              searchPlaceholder="Filter source…"
              emptyTitle="No contact sources"
              emptyDescription="Sources are bucketed (google, whatsapp, website). Raw CRM sources never ship."
            />
          </TabsContent>
          <TabsContent value="channels">
            <DataTable
              data={channels}
              columns={countColumns}
              searchPlaceholder="Filter channel…"
              emptyTitle="No conversation channels"
              emptyDescription="WhatsApp, phone, email — counts only."
            />
          </TabsContent>
        </Tabs>

        {row && tab !== "sources" && tab !== "channels" ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{row.topic}</CardTitle>
              <CardDescription>{row.owner_url || "No live owner — do not mint a URL."}</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">{row.why}</CardContent>
          </Card>
        ) : null}
      </div>
    </PageFrame>
  )
}

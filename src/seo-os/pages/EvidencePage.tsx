import { useMemo, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataTable, type TableColumn } from "@/seo-os/components/data-table"
import { PageFrame } from "@/seo-os/components/page-frame"
import { StatusPill } from "@/seo-os/components/status-pill"
import { useSeoJson } from "@/seo-os/lib/data"
import { fmtNum } from "@/seo-os/lib/format"

type Tile = { value: string; label: string }
type CountRow = { label: string; count: number }

type FrogIssue = {
  name: string
  type?: string
  priority?: string
  url_count?: number
  change?: string
  disposition?: string
  accepted_reason?: string
  how_to_fix?: string
  description?: string
  urls?: string[]
}

type EvidenceFile = {
  generated?: string
  intro?: string
  tiles?: Tile[]
  run?: {
    inbox?: string
    local?: string
    loop?: string
    github?: string
    rule?: string
  }
  frog?: {
    site?: string
    crawled_on?: string
    previous_crawled_on?: string
    counts?: Record<string, number>
    issues?: FrogIssue[]
  }
  crm?: {
    connected?: boolean
    error?: string | null
    required_scopes?: string[]
    locations?: { name?: string; country?: string; city?: string }[]
    window_days?: number
    contacts?: { total?: number; new?: number; sources?: CountRow[] }
    opportunities?: { total?: number; open?: number; won?: number; lost?: number }
    conversations?: {
      total?: number
      open_or_unread?: number
      starred?: number
      channels?: CountRow[]
      topics?: CountRow[]
    }
  }
  pages?: {
    contract?: number
    board?: number
    routes?: number
    frozen?: number
    complete?: boolean
    missing_from_board?: string[]
    missing_from_routes?: string[]
    deleted_from_contract?: string[]
  }
}

const issueColumns: TableColumn<FrogIssue>[] = [
  { id: "change", header: "Change", accessor: (r) => r.change || r.disposition || "open", kind: "badge" },
  { id: "priority", header: "Priority", accessor: (r) => r.priority || "", kind: "badge" },
  { id: "name", header: "Issue", accessor: (r) => r.name },
  { id: "url_count", header: "URLs", accessor: (r) => r.url_count, kind: "number" },
  { id: "type", header: "Type", accessor: (r) => r.type || "", kind: "badge" },
  { id: "accepted_reason", header: "Policy", accessor: (r) => r.accepted_reason || "" },
]

const EMPTY_ISSUES: FrogIssue[] = []

const countColumns: TableColumn<CountRow>[] = [
  { id: "label", header: "Label", accessor: (r) => r.label },
  { id: "count", header: "Count", accessor: (r) => r.count, kind: "number" },
]

export default function EvidencePage() {
  const { data, error, loading } = useSeoJson<EvidenceFile>("evidence")
  const [tab, setTab] = useState("issues")
  const [issue, setIssue] = useState<FrogIssue | null>(null)
  const issues = data?.frog?.issues ?? EMPTY_ISSUES
  const openIssues = useMemo(
    () => issues.filter((row) => (row.disposition || "open") === "open" && row.change !== "fixed"),
    [issues],
  )
  const acceptedIssues = useMemo(
    () => issues.filter((row) => row.disposition === "accepted"),
    [issues],
  )
  const pages = data?.pages
  const crm = data?.crm
  const run = data?.run

  return (
    <PageFrame
      title="Evidence"
      description={data?.intro || "Screaming Frog issues, GoHighLevel contacts, and whether every page is still on the board."}
      exportName="evidence"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        {pages && !pages.complete ? (
          <Alert variant="destructive">
            <AlertTitle>Page inventory is incomplete</AlertTitle>
            <AlertDescription>
              {fmtNum(pages.missing_from_board?.length)} contract URL(s) are missing from the board
              {pages.deleted_from_contract?.length
                ? `, and ${fmtNum(pages.deleted_from_contract.length)} frozen URL(s) left the contract`
                : ""}
              . URLs are never deleted or renamed.
            </AlertDescription>
          </Alert>
        ) : null}

        {crm && crm.connected === false ? (
          <Alert>
            <AlertTitle>GoHighLevel is not feeding the board</AlertTitle>
            <AlertDescription>
              {crm.error || "No CRM snapshot yet. Run npm run seo:daily after the key is in ~/.config/claude-seo/gohighlevel.env."}
              {crm.required_scopes?.length ? ` Required scopes: ${crm.required_scopes.join(", ")}.` : ""}
            </AlertDescription>
          </Alert>
        ) : null}

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="issues">Frog issues</TabsTrigger>
            <TabsTrigger value="accepted">Accepted policy</TabsTrigger>
            <TabsTrigger value="crm">CRM</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="run">Activate a run</TabsTrigger>
          </TabsList>

          <TabsContent value="issues" className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
              {data?.frog?.site || "mychef.ae"} · crawled {data?.frog?.crawled_on || "—"}
              {data?.frog?.previous_crawled_on ? ` · compared with ${data.frog.previous_crawled_on}` : ""}
            </p>
            <DataTable
              data={openIssues}
              columns={issueColumns}
              searchPlaceholder="Filter issue…"
              onRowClick={(row) => setIssue(row)}
              emptyTitle="No open Frog issues"
              emptyDescription="Drop a new issues_overview_report.csv into docs/seo/frog/inbox and run the harvest."
            />
            {issue ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{issue.name}</CardTitle>
                  <CardDescription>{issue.how_to_fix || issue.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    <StatusPill value={issue.change || issue.disposition} />
                    <StatusPill value={issue.priority} />
                  </div>
                  <ul className="text-muted-foreground flex flex-col gap-1 font-mono text-xs">
                    {(issue.urls ?? []).map((url) => (
                      <li key={url}>{url}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </TabsContent>

          <TabsContent value="accepted">
            <DataTable
              data={acceptedIssues}
              columns={issueColumns}
              searchPlaceholder="Filter accepted issue…"
              emptyTitle="No accepted issues"
              emptyDescription="Policy skips (title caps, CSP, URL renames) land here so a later crawl can still prove they did not get worse."
            />
          </TabsContent>

          <TabsContent value="crm" className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Contacts</CardDescription>
                  <CardTitle className="text-2xl tabular-nums">{fmtNum(crm?.contacts?.total)}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">{fmtNum(crm?.contacts?.new)} new in {crm?.window_days ?? 30}d</CardContent>
              </Card>
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Won</CardDescription>
                  <CardTitle className="text-2xl tabular-nums">{fmtNum(crm?.opportunities?.won)}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">{fmtNum(crm?.opportunities?.open)} still open · {fmtNum(crm?.opportunities?.lost)} lost</CardContent>
              </Card>
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Conversations</CardDescription>
                  <CardTitle className="text-2xl tabular-nums">{fmtNum(crm?.conversations?.total)}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">{fmtNum(crm?.conversations?.open_or_unread)} unread</CardContent>
              </Card>
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>CRM engine</CardDescription>
                  <CardTitle className="text-2xl">/seo/crm</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  New contacts and conversation topics — not rankings alone.
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>What people are asking about</CardTitle>
                  <CardDescription>Tags and matched phrases. Message bodies never leave the gitignored snapshot.</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <DataTable data={crm?.conversations?.topics ?? []} columns={countColumns} searchPlaceholder="Filter topic…" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact sources</CardTitle>
                  <CardDescription>Where new people enter the CRM.</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <DataTable data={crm?.contacts?.sources ?? []} columns={countColumns} searchPlaceholder="Filter source…" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pages" className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Contract</CardDescription>
                  <CardTitle className="text-2xl tabular-nums">{fmtNum(pages?.contract)}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>On the board</CardDescription>
                  <CardTitle className="text-2xl tabular-nums">{fmtNum(pages?.board)}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Frozen URLs</CardDescription>
                  <CardTitle className="text-2xl tabular-nums">{fmtNum(pages?.frozen)}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="gap-1 py-4">
                  <CardDescription>Inventory</CardDescription>
                  <CardTitle>{pages?.complete ? "Complete" : "Gaps"}</CardTitle>
                </CardHeader>
              </Card>
            </div>
            {(pages?.missing_from_board?.length || pages?.deleted_from_contract?.length) ? (
              <Card>
                <CardHeader>
                  <CardTitle>Gaps</CardTitle>
                  <CardDescription>A missing frozen URL is a deletion. Park the page instead.</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground flex flex-col gap-1 font-mono text-xs">
                  {(pages?.deleted_from_contract ?? []).map((url) => (
                    <div key={url}>deleted · {url}</div>
                  ))}
                  {(pages?.missing_from_board ?? []).map((url) => (
                    <div key={url}>not on board · {url}</div>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <p className="text-muted-foreground text-sm">Every contract URL is on the board. New URLs may be added; none may be removed or renamed.</p>
            )}
            {pages?.missing_from_routes?.length ? (
              <Card>
                <CardHeader>
                  <CardTitle>Template routes</CardTitle>
                  <CardDescription>
                    These contract URLs are not a dedicated line in routes.tsx — location and handoff pages share a
                    template. That is not a deletion.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground flex flex-col gap-1 font-mono text-xs">
                  {pages.missing_from_routes.map((url) => (
                    <div key={url}>{url}</div>
                  ))}
                </CardContent>
              </Card>
            ) : null}
          </TabsContent>

          <TabsContent value="run" className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Activate a harvest</CardTitle>
                <CardDescription>{run?.rule}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ol className="flex flex-col gap-3">
                  <li>
                    <span className="text-muted-foreground">1. Frog inbox · </span>
                    <code>{run?.inbox || "docs/seo/frog/inbox/"}</code>
                    <p className="text-muted-foreground mt-1">Export Issues from Screaming Frog for https://mychef.ae/ and drop the CSVs here.</p>
                  </li>
                  <li>
                    <span className="text-muted-foreground">2. Local run · </span>
                    <code>{run?.local || "npm run seo:daily"}</code>
                  </li>
                  <li>
                    <span className="text-muted-foreground">3. GitHub Action · </span>
                    <code>{run?.github}</code>
                    <p className="text-muted-foreground mt-1">workflow_dispatch, or the daily schedule. A push to main then publishes the JSON.</p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageFrame>
  )
}

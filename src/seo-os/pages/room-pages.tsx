import type { ReactNode } from "react"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PageFrame } from "@/seo-os/components/page-frame"

function Room({
  title,
  description,
  cards,
  actions,
  children,
}: {
  title: string
  description: string
  cards?: { value: string; label: string; hint: string }[]
  actions?: { href: string; label: string; primary?: boolean }[]
  children?: ReactNode
}) {
  return (
    <PageFrame title={title} description={description}>
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        {cards?.length ? (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <Card key={card.label} className="shadow-xs">
                <CardHeader>
                  <CardTitle>{card.value}</CardTitle>
                  <CardDescription>{card.label}</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">{card.hint}</CardContent>
              </Card>
            ))}
          </div>
        ) : null}
        {children}
        {actions?.length ? (
          <div className="flex flex-wrap gap-2">
            {actions.map((action) => (
              <Button key={action.href} asChild variant={action.primary ? "default" : "outline"}>
                <Link to={action.href}>{action.label}</Link>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </PageFrame>
  )
}

export function GscPage() {
  return (
    <Room
      title="Search Console"
      description="Impressions, clicks, CTR and average position from the mychef.ae property. The board does not invent ranking numbers."
      cards={[
        { value: "GSC", label: "Query · page · date", hint: "Collected by harvest-gsc.py into the archive." },
        { value: "90d", label: "Default window", hint: "Wrong-owner phrases surface as a critical count on Keywords." },
      ]}
      actions={[
        { href: "/seo/keywords", label: "Open keyword file", primary: true },
        { href: "/seo/status", label: "Connection health" },
      ]}
    />
  )
}

export function AnalyticsPage() {
  return (
    <Room
      title="Analytics"
      description="Vercel Web Analytics, first-party events, and GA4 when the property is granted."
      cards={[
        { value: "Vercel", label: "Visitors · pageviews", hint: "harvest-vercel-analytics.py" },
        { value: "1P", label: "WhatsApp · scroll · dwell", hint: "harvest-firstparty.py via /api/e" },
        { value: "GA4", label: "Waiting on access", hint: "See Status for the service-account grant." },
      ]}
      actions={[
        { href: "/seo/keywords", label: "Traffic on keywords", primary: true },
        { href: "/seo/status", label: "Connection health" },
      ]}
    />
  )
}

export function SemrushPage() {
  return (
    <Room
      title="Semrush"
      description="Historic UAE export only. The API is out of units — this room will not pretend otherwise."
      actions={[
        { href: "/seo/backlog", label: "Open backlog", primary: true },
        { href: "/seo/demand", label: "Measured UAE demand" },
      ]}
    />
  )
}

export function DataforseoPage() {
  return (
    <Room
      title="DataForSEO"
      description="UAE volume, difficulty, intent, live SERPs, competitor ranked keywords, and Claude LLM answers."
      cards={[
        { value: "Vol", label: "Google Ads UAE", hint: "0 means below the floor, not never searched." },
        { value: "SERP", label: "Organic UAE top 30", hint: "Position, overlap, competitor gap." },
        { value: "LLM", label: "AI answers", hint: "See AI Visibility." },
      ]}
      actions={[
        { href: "/seo/demand", label: "Demand", primary: true },
        { href: "/seo/research", label: "Research" },
        { href: "/seo/ai-visibility", label: "AI Visibility" },
      ]}
    />
  )
}

const CONNECTIONS = [
  ["Neon Postgres", "Archive of every run", "neon.env / DATABASE_URL", "store-keywords.py"],
  ["DataForSEO", "Volume, SERPs, LLM", "dataforseo.env", "harvest-serps.py · harvest-llm.py"],
  ["Google Search Console", "Clicks, impressions, position", "service-account.json", "harvest-gsc.py"],
  ["Bing Webmaster", "Bing crawl / ranking", "bing-webmaster.env", "check-integrations.py"],
  ["Vercel Analytics", "Visitors, pageviews", "vercel.env", "harvest-vercel-analytics.py"],
  ["First-party events", "Dwell, WhatsApp, scroll", "DATABASE_URL", "harvest-firstparty.py"],
  ["GA4", "Engagement", "service-account.json", "harvest-ga4.py — grant pending"],
  ["PageSpeed / CrUX", "Core Web Vitals", "google-psi.env", "no collector yet"],
]

export function ConnectionsPage() {
  return (
    <Room
      title="Connections"
      description="Keys and freshness. Green means the source answered and data landed recently — not merely that a file exists."
      actions={[{ href: "/seo/status", label: "Open Status", primary: true }]}
    >
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead>Feeds</TableHead>
              <TableHead>Credential</TableHead>
              <TableHead>Collector</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CONNECTIONS.map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell) => (
                  <TableCell key={cell}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Room>
  )
}

const RUN_STEPS = [
  "Snapshot the site (live fetch or local dist)",
  "Harvest Search Console, analytics, behaviour",
  "Rebuild Keywords, Demand, Research, Links, Gaps, Architecture",
  "Probe integrations · write Status · archive to Postgres",
  "Publish JSON into /seo/data for this shell",
]

export function SettingsPage() {
  return (
    <Room
      title="Settings"
      description="The board is a read surface on static files plus a password gate. Density and chrome live in this OS shell."
    >
      <Card>
        <CardHeader>
          <CardTitle>How a run works</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="flex flex-col gap-2 text-sm">
            {RUN_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="text-muted-foreground tabular-nums">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="text-muted-foreground mt-4 text-sm">
            <code>docs/seo/keyword-map/run-loop.sh live</code> — nothing on this page edits copy. Optimizer writes are
            reversible and listed under Agent Runs.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Access</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          HTTP Basic Auth via <code>SEO_PASSWORD</code>. Pages send <code>X-Robots-Tag: noindex</code>.{" "}
          <code>/seo/robots.txt</code> disallows all agents.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Display</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Tables paginate, sort on header click, and open a right-hand inspector. Filter chips stay on each page. Saved
          column layouts are not persisted on the server.
        </CardContent>
      </Card>
    </Room>
  )
}

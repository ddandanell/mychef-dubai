import type { ReactNode } from "react"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { PlacementMarks } from "@/seo-os/components/placement-marks"
import { StatusPill } from "@/seo-os/components/status-pill"
import {
  bodyMentions,
  headingPages,
  pageNextStep,
  primaryScore,
  riskLabel,
  subOnPage,
  type BoardPageRow,
  type SubKeyword,
} from "@/seo-os/lib/board-model"
import { fmtNum, stringifyCell } from "@/seo-os/lib/format"

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 px-6 py-5">
      <h3 className="text-muted-foreground text-xs font-medium tracking-[0.12em] uppercase">{title}</h3>
      {children}
    </section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-muted-foreground text-[11px] tracking-wide uppercase">{label}</p>
      <p className="text-base font-semibold tabular-nums">{value}</p>
    </div>
  )
}

function PageInspector({ row }: { row: BoardPageRow }) {
  const subs = row.subs ?? []
  const found = subs.filter(subOnPage).length
  const score = primaryScore(row)
  const risk = riskLabel(row)
  const next = pageNextStep(row)
  const headings = headingPages(row)
  const used = (row.cap ?? 0) - (row.room ?? 0)
  const cap = row.cap ?? 0

  return (
    <>
      <SheetHeader className="shrink-0 border-b px-6 py-5 text-left">
        <p className="text-muted-foreground font-mono text-xs">{row.url}</p>
        <SheetTitle className="text-xl leading-snug">{row.primary || "Untargeted page"}</SheetTitle>
        <SheetDescription>Locked keywords and the next edit on this URL.</SheetDescription>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{row.page_type || "Page"}</Badge>
          {row.is_hub ? <Badge>Hub</Badge> : null}
          <span className="text-muted-foreground text-sm">{row.silo}</span>
          {row.primary_volume != null ? (
            <span className="text-muted-foreground text-sm tabular-nums">{fmtNum(row.primary_volume)}/mo</span>
          ) : null}
        </div>
      </SheetHeader>
      <div className="grid shrink-0 grid-cols-4 gap-3 border-b px-6 py-4">
        <Metric label="Score" value={score == null ? "—" : `${score}/10`} />
        <Metric label="Subs on page" value={`${found}/${subs.length}`} />
        <Metric label="Room" value={`${row.room ?? 0} free`} />
        <Metric label="Words" value={fmtNum(row.words)} />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Section title="Do this next">
          <p className="text-sm leading-relaxed">{next}</p>
        </Section>
        <Separator />
        <Section title="Primary on the page">
          <PlacementMarks place={row.primary_place} />
          <p className="text-muted-foreground text-xs">
            T title · D description · H1 · H2 · F first 100 words · B body
          </p>
          <StatusPill value={risk.label} tone={risk.tone} />
        </Section>
        <Separator />
        <Section title="Assigned keywords">
          <div className="flex flex-col gap-3">
            {row.primary ? (
              <KeywordLine
                name={row.primary}
                role="primary"
                volume={row.primary_volume}
                place={row.primary_place}
                note={headings.length ? `${headings.length} other headings · ${bodyMentions(row)} bodies` : undefined}
              />
            ) : null}
            {subs.map((sub) => (
              <KeywordLine
                key={sub.kw}
                name={sub.kw}
                role={subOnPage(sub) ? "on page" : "missing"}
                volume={sub.volume}
                place={sub.place}
                note={
                  sub.place?.violation
                    ? "in a heading — contract says sentences only"
                    : sub.other_pages
                      ? `${sub.other_pages} other page${sub.other_pages === 1 ? "" : "s"}`
                      : undefined
                }
              />
            ))}
            {!row.primary && !subs.length ? <p className="text-muted-foreground text-sm">Nothing assigned.</p> : null}
          </div>
        </Section>
        {cap ? (
          <>
            <Separator />
            <Section title="Capacity">
              <Progress value={cap ? Math.round((used / cap) * 100) : 0} />
              <p className="text-sm tabular-nums">
                {used}/{cap} slots used · {row.room ?? 0} free
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/seo/backlog">Open backlog</Link>
              </Button>
            </Section>
          </>
        ) : null}
        {headings.length ? (
          <>
            <Separator />
            <Section title="Pages whose headings use this primary">
              <ul className="flex flex-col gap-1 font-mono text-xs">
                {headings.map((url) => (
                  <li key={url}>{url}</li>
                ))}
              </ul>
            </Section>
          </>
        ) : null}
        {row.title || row.h1 ? (
          <>
            <Separator />
            <Section title="Live copy">
              {row.title ? (
                <p className="text-sm">
                  <span className="text-muted-foreground">Title · </span>
                  {row.title}
                </p>
              ) : null}
              {row.h1 ? (
                <p className="text-sm">
                  <span className="text-muted-foreground">H1 · </span>
                  {row.h1}
                  {(row.h1_count ?? 0) > 1 ? ` (${row.h1_count} H1s)` : ""}
                </p>
              ) : null}
            </Section>
          </>
        ) : null}
      </div>
      <div className="bg-background flex shrink-0 flex-wrap gap-2 border-t px-6 py-4">
        <Button asChild size="sm">
          <a href={`https://www.mychef.ae${row.url}`} target="_blank" rel="noreferrer">
            Open live page
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link to="/seo/keywords">Keywords</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link to="/seo/queue">Queue</Link>
        </Button>
      </div>
    </>
  )
}

function KeywordLine({
  name,
  role,
  volume,
  place,
  note,
}: {
  name: string
  role: string
  volume?: number | null
  place?: SubKeyword["place"]
  note?: string
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-medium">{name}</p>
          <p className="text-muted-foreground text-xs">
            {role}
            {volume != null ? ` · ${fmtNum(volume)}/mo` : ""}
            {note ? ` · ${note}` : ""}
          </p>
        </div>
      </div>
      <PlacementMarks place={place} size="sm" />
    </div>
  )
}

function ProposalInspector({ row }: { row: Record<string, unknown> }) {
  const evidence = row.evidence && typeof row.evidence === "object" ? (row.evidence as Record<string, unknown>) : {}
  return (
    <>
      <SheetHeader className="border-b px-6 py-5 text-left">
        <SheetTitle className="text-xl leading-snug">{String(row.keyword || "Proposal")}</SheetTitle>
        <SheetDescription>Ranked proposal. Not applied.</SheetDescription>
        <div className="flex flex-wrap gap-2">
          <StatusPill value={row.class} />
          <StatusPill value={row.autonomy} />
          <StatusPill value={row.risk} />
          <StatusPill value={row.demand} />
        </div>
      </SheetHeader>
      <div className="grid grid-cols-3 gap-3 border-b px-6 py-4">
        <Metric label="Impact" value={fmtNum(row.impact)} />
        <Metric label="URL" value={String(row.url || "—")} />
        <Metric label="Status" value={String(row.status || "open")} />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Section title="Why">
          <p className="text-sm leading-relaxed">{String(row.reason || "—")}</p>
        </Section>
        <Separator />
        <Section title="Do">
          <p className="text-sm leading-relaxed">{String(row.action || "—")}</p>
        </Section>
        {Object.keys(evidence).length ? (
          <>
            <Separator />
            <Section title="Evidence">
              <dl className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(evidence).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-muted-foreground text-xs uppercase tracking-wide">{key.replace(/_/g, " ")}</dt>
                    <dd className="tabular-nums">{stringifyCell(value) || "—"}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          </>
        ) : null}
      </div>
      <div className="bg-background flex gap-2 border-t px-6 py-4">
        <Button asChild size="sm">
          <Link to="/seo">Open board</Link>
        </Button>
        <p className="text-muted-foreground self-center text-xs">The agent does not apply this.</p>
      </div>
    </>
  )
}

function KeywordInspector({ row }: { row: Record<string, unknown> }) {
  const marks = [
    ["Title", row.title_coverage],
    ["Meta", row.meta_coverage],
    ["H1", row.h1_coverage],
    ["H2", row.h2_coverage],
    ["Body", row.body_coverage],
    ["FAQ", row.faq_coverage],
    ["Anchor", row.internal_anchor_coverage],
  ] as const
  return (
    <>
      <SheetHeader className="border-b px-6 py-5 text-left">
        <SheetTitle className="text-xl leading-snug">{String(row.keyword || "Keyword")}</SheetTitle>
        <SheetDescription>Coverage and the next action on the owner URL.</SheetDescription>
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill value={row.role} />
          <span className="text-muted-foreground font-mono text-xs">{String(row.primary_owning_url || "—")}</span>
        </div>
      </SheetHeader>
      <div className="grid grid-cols-4 gap-3 border-b px-6 py-4">
        <Metric label="Volume" value={fmtNum(row.search_volume)} />
        <Metric label="Score" value={fmtNum(row.optimization_score)} />
        <Metric label="Impr" value={fmtNum(row.gsc_impressions)} />
        <Metric label="Position" value={fmtNum(row.current_position ?? row.gsc_position)} />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Section title="On the owner page">
          <div className="flex flex-wrap gap-1.5">
            {marks.map(([label, on]) => (
              <Badge key={label} variant={on ? "default" : "outline"}>
                {label}
              </Badge>
            ))}
          </div>
        </Section>
        <Separator />
        <Section title="Next action">
          <p className="text-sm leading-relaxed">{String(row.next_action || "—")}</p>
        </Section>
      </div>
    </>
  )
}

function FallbackInspector({ row }: { row: Record<string, unknown> }) {
  const skip = new Set(["competitors", "answer", "linking_pages", "anchors", "cluster"])
  const entries = Object.entries(row).filter(([key, value]) => !skip.has(key) && value != null && value !== "")
  return (
    <>
      <SheetHeader className="border-b px-6 py-5 text-left">
        <SheetTitle className="text-xl leading-snug">
          {String(row.url || row.kw || row.keyword || row.label || row.name || "Record")}
        </SheetTitle>
        <SheetDescription>What this row is telling you.</SheetDescription>
      </SheetHeader>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Section title="Fields">
          <dl className="flex flex-col gap-3">
            {entries.slice(0, 24).map(([key, value]) => (
              <div key={key} className="flex flex-col gap-1">
                <dt className="text-muted-foreground text-xs tracking-wide uppercase">{key.replace(/_/g, " ")}</dt>
                <dd className="text-sm break-words">{stringifyCell(value) || "—"}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </>
  )
}

function panelFor(row: Record<string, unknown>) {
  if (row.primary_place || Array.isArray(row.subs)) return <PageInspector row={row as BoardPageRow} />
  if (row.impact != null && row.autonomy) return <ProposalInspector row={row} />
  if (row.keyword && (row.primary_owning_url || row.optimization_score != null)) return <KeywordInspector row={row} />
  return <FallbackInspector row={row} />
}

export function RecordInspector({
  row,
  onClose,
}: {
  row: Record<string, unknown> | null
  onClose: () => void
}) {
  return (
    <Sheet open={Boolean(row)} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-xl lg:max-w-2xl"
      >
        {row ? panelFor(row) : null}
      </SheetContent>
    </Sheet>
  )
}

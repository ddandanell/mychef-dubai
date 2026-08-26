import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageFrame } from "@/seo-os/components/page-frame"
import { StatusPill } from "@/seo-os/components/status-pill"
import { useSeoJson } from "@/seo-os/lib/data"

/**
 * Control answers two questions no other page can: is the loop alive, and is a keyword
 * actually working. A keyword is not finished when it is locked in the contract — it is
 * finished when the page says it and Google has seen it. Locked, placed, proven.
 */

type Heartbeat = {
  ran_at?: string
  kind?: string
  phase?: string
  git_commit?: string
  age_hours?: number | null
  gates_pass?: boolean | null
  sources_ok?: string[]
  sources_stale?: string[]
  error?: string | null
}

type ControlFile = {
  generated?: string
  banner?: string | null
  heartbeat?: Heartbeat
  counts?: {
    locked: number
    placed: number
    proven: number
    locked_unproven: number
    primaries_locked: number
    primaries_placed: number
    primaries_proven: number
  }
  sources?: { service: string; status: string; detail?: string; last_success?: string | null; error?: string | null }[]
  queue?: { type: string; status: string; count: number }[]
  top5?: { id: string; type: string; url?: string; keyword?: string; reason?: string; risk?: string; auto_eligible?: boolean }[]
  experiments?: {
    verdicts?: Record<string, number>
    open?: { batch_id: string; url: string; keywords: string[]; applied_at?: string | null; window_days?: number; verdict?: string }[]
  }
  actions?: { url: string; where: string; how: string; after: string; at?: string | null }[]
  tiles?: { value: string; label: string }[]
}

function share(part: number, whole: number): string {
  if (!whole) return "—"
  return `${Math.round((part / whole) * 100)}%`
}

function shareClass(part: number, whole: number): string {
  if (!whole) return "text-muted-foreground"
  const ratio = part / whole
  if (ratio >= 0.6) return "text-emerald-700"
  if (ratio >= 0.2) return "text-amber-700"
  return "text-red-700"
}

export default function ControlPage() {
  const { data, error, loading } = useSeoJson<ControlFile>("control")
  const counts = data?.counts
  const beat = data?.heartbeat
  const stale = beat?.age_hours != null && beat.age_hours > 36

  return (
    <PageFrame
      title="Control"
      description="Is the loop alive, and is a keyword actually working — locked, placed, proven."
      exportName="control"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-8 px-4 lg:px-6">
        {data?.banner ? (
          <Alert variant={stale ? "destructive" : undefined}>
            <AlertTitle>{stale ? "The loop has gone quiet" : "Needs attention"}</AlertTitle>
            <AlertDescription>{data.banner}</AlertDescription>
          </Alert>
        ) : null}

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
            Locked · placed · proven
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            <Card>
              <CardHeader className="gap-1">
                <CardDescription>Locked in the contract</CardDescription>
                <CardTitle className="text-3xl tabular-nums">{counts?.locked ?? "—"}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {counts?.primaries_locked ?? 0} of them primary keywords. A lock is an intention, not a result.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-1">
                <CardDescription>Placed in the built HTML</CardDescription>
                <CardTitle className="text-3xl tabular-nums">
                  {counts?.placed ?? "—"}{" "}
                  {counts ? (
                    <span className={`text-base font-medium ${shareClass(counts.placed, counts.locked)}`}>
                      {share(counts.placed, counts.locked)}
                    </span>
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Measured from the prerendered page, not from intent. Primaries need title and H1; subkeywords need a sentence.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-1">
                <CardDescription>Proven in Search Console</CardDescription>
                <CardTitle className="text-3xl tabular-nums">
                  {counts?.proven ?? "—"}{" "}
                  {counts ? (
                    <span className={`text-base font-medium ${shareClass(counts.proven, counts.locked)}`}>
                      {share(counts.proven, counts.locked)}
                    </span>
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Google has shown the owner page for the phrase. {counts?.locked_unproven ?? 0} are locked and have never been seen.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">Last run</h2>
          <Card>
            <CardContent className="grid gap-4 py-5 md:grid-cols-4">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">When</p>
                <p className="text-sm">
                  {beat?.age_hours != null ? `${beat.age_hours}h ago` : "never"}{" "}
                  <StatusPill value={stale ? "stale" : "live"} />
                </p>
                <p className="text-muted-foreground text-xs">{beat?.ran_at ?? ""}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Kind and phase</p>
                <p className="text-sm">
                  {beat?.kind ?? "—"} · {beat?.phase ?? "—"}
                </p>
                <p className="text-muted-foreground font-mono text-xs">{beat?.git_commit ?? ""}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Gates</p>
                <p className="text-sm">
                  <StatusPill value={beat?.gates_pass === false ? "error" : beat?.gates_pass ? "ok" : "review"} />
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Sources</p>
                <p className="text-sm">
                  {(beat?.sources_ok ?? []).length} feeding · {(beat?.sources_stale ?? []).length} not
                </p>
                <p className="text-muted-foreground text-xs">{(beat?.sources_stale ?? []).join(", ")}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {data?.top5?.length ? (
          <section className="flex flex-col gap-3">
            <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
              What to do next
            </h2>
            <div className="flex flex-col gap-2">
              {data.top5.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex flex-col gap-1 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusPill value={item.type} />
                      {item.risk ? <StatusPill value={item.risk} /> : null}
                      <span className="font-mono text-xs">{item.url}</span>
                      {item.keyword ? <span className="text-muted-foreground text-xs">{item.keyword}</span> : null}
                      {item.auto_eligible ? <StatusPill value="auto-eligible" /> : null}
                    </div>
                    <p className="text-sm">{item.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">Experiments</h2>
          <Card>
            <CardContent className="py-5 text-sm">
              {data?.experiments?.open?.length ? (
                <ul className="flex flex-col gap-2">
                  {data.experiments.open.map((x) => (
                    <li key={x.batch_id} className="flex flex-wrap items-center gap-2">
                      <StatusPill value={x.verdict ?? "too_soon"} />
                      <span className="font-mono text-xs">{x.url}</span>
                      <span className="text-muted-foreground text-xs">
                        {x.applied_at} · {x.window_days}-day window
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">
                  No experiment is open. Every applied change should open one, so a verdict exists before the next edit
                  to the same page.
                </p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
            The last 20 changes
          </h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">URL</th>
                  <th className="px-3 py-2 text-left font-medium">Where</th>
                  <th className="px-3 py-2 text-left font-medium">What arrived</th>
                  <th className="px-3 py-2 text-left font-medium">When</th>
                </tr>
              </thead>
              <tbody>
                {(data?.actions ?? []).map((a, i) => (
                  <tr key={`${a.url}-${i}`} className="border-t align-top">
                    <td className="px-3 py-2 font-mono text-xs">{a.url}</td>
                    <td className="px-3 py-2 text-xs">{a.where}</td>
                    <td className="text-muted-foreground px-3 py-2 text-xs">{a.after}</td>
                    <td className="text-muted-foreground px-3 py-2 font-mono text-xs whitespace-nowrap">{a.at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageFrame>
  )
}

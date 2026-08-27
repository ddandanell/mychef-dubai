import { useMemo } from "react"
import { Area, Bar, CartesianGrid, ComposedChart, ReferenceArea, ReferenceLine, XAxis, YAxis } from "recharts"
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

/**
 * This week against the same days last week.
 *
 * One number on its own says nothing — 5,714 impressions is neither good nor bad. What carries
 * meaning is the comparison with the same seven weekdays before it, and what was done to the
 * site in between. So the chart shades the two windows, pins a marker on every day the site was
 * changed, and each mover carries the arithmetic reason it moved.
 */

export type MoverWhy = {
  shape: string
  headline: string
  detail: string
  confidence: string
  cause?: { day: string; kind: string; summary: string; ref?: string; source: string } | null
  changes: number
}

export type MoverRow = {
  url: string
  primary?: string | null
  clicks_recent: number
  clicks_prior: number
  clicks_delta: number
  impr_recent: number
  impr_prior: number
  impr_delta: number
  impr_pct?: number | null
  pos_recent?: number | null
  pos_prior?: number | null
  pos_delta?: number | null
  why: MoverWhy
}

export type QueryRow = {
  query: string
  clicks_delta: number
  impr_recent: number
  impr_prior: number
  impr_delta: number
  impr_pct?: number | null
  pos_recent?: number | null
  pos_prior?: number | null
  pos_delta?: number | null
}

export type MoversFile = {
  generated?: string
  window_days?: number
  recent?: { from: string; to: string }
  prior?: { from: string; to: string }
  lag_note?: string
  verdict?: string
  totals?: {
    metric: string
    label: string
    recent: number
    prior: number
    delta: number
    pct?: number | null
    direction: string
    verdict: string
    note?: string
  }[]
  series?: { day: string; clicks: number; impressions: number; position?: number | null; sessions: number }[]
  pages_up?: MoverRow[]
  pages_down?: MoverRow[]
  queries_up?: QueryRow[]
  queries_down?: QueryRow[]
  attributed?: number
  changes_in_window?: { day: string; kind: string; summary: string; ref?: string; source: string }[]
}

const chartConfig = {
  impressions: { label: "Times shown", color: "var(--chart-2)" },
  clicks: { label: "Clicks", color: "var(--chart-1)" },
} satisfies ChartConfig

const TONE: Record<string, string> = {
  good: "text-emerald-600 dark:text-emerald-400",
  bad: "text-destructive",
  flat: "text-muted-foreground",
  "new source": "text-muted-foreground",
}

const short = (day: string) =>
  new Date(day + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })

function Delta({ delta, pct, verdict }: { delta: number; pct?: number | null; verdict: string }) {
  const Icon = verdict === "flat" ? ArrowRight : delta > 0 ? ArrowUpRight : ArrowDownRight
  return (
    <span className={cn("inline-flex items-center gap-1 font-medium tabular-nums", TONE[verdict] ?? "")}>
      <Icon className="size-4" aria-hidden />
      {delta > 0 ? "+" : ""}
      {delta.toLocaleString()}
      {pct != null ? <span className="text-muted-foreground text-xs">({pct > 0 ? "+" : ""}{pct}%)</span> : null}
    </span>
  )
}

function MoverList({ title, rows, tone }: { title: string; rows: MoverRow[]; tone: "up" | "down" }) {
  if (!rows.length) return null
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">{title}</h3>
      <div className="flex flex-col divide-y rounded-lg border">
        {rows.slice(0, 6).map((row) => (
          <article key={row.url} className="flex flex-col gap-1 p-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a
                href={row.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm hover:underline"
              >
                {row.url}
              </a>
              <Delta delta={row.impr_delta} pct={row.impr_pct} verdict={tone === "up" ? "good" : "bad"} />
            </div>
            <p className="text-sm">{row.why.headline}</p>
            <p className="text-muted-foreground text-xs">
              {row.why.detail}
              {row.primary ? ` · targets “${row.primary}”` : ""}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="outline" className="font-normal">
                {row.why.confidence}
              </Badge>
              {row.why.cause ? (
                <span className="text-muted-foreground text-xs">
                  {short(row.why.cause.day)} · {row.why.cause.kind} · {row.why.cause.summary.slice(0, 78)}
                </span>
              ) : (
                <span className="text-muted-foreground text-xs">nothing was changed on this page</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function QueryList({ title, rows, tone }: { title: string; rows: QueryRow[]; tone: "up" | "down" }) {
  if (!rows.length) return null
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">{title}</h3>
      <div className="flex flex-col divide-y rounded-lg border">
        {rows.slice(0, 6).map((row) => (
          <div key={row.query} className="flex flex-wrap items-baseline justify-between gap-2 p-3">
            <span className="text-sm">{row.query}</span>
            <span className="flex items-center gap-3">
              {row.pos_prior != null && row.pos_recent != null ? (
                <span className="text-muted-foreground text-xs tabular-nums">
                  position {row.pos_prior} → {row.pos_recent}
                </span>
              ) : null}
              <Delta delta={row.impr_delta} pct={row.impr_pct} verdict={tone === "up" ? "good" : "bad"} />
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function MovementPanel({ data }: { data: MoversFile | null }) {
  const series = data?.series ?? []
  const changeDays = useMemo(() => {
    const days = new Map<string, number>()
    for (const c of data?.changes_in_window ?? []) days.set(c.day, (days.get(c.day) ?? 0) + 1)
    return days
  }, [data])

  if (!data || !series.length) return null

  const recent = data.recent
  const prior = data.prior

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">What moved this week</h2>
          <p className="text-muted-foreground text-sm">
            {prior && recent
              ? `${short(prior.from)}–${short(prior.to)} against ${short(recent.from)}–${short(recent.to)}, the same weekdays.`
              : null}
          </p>
        </div>
        <p className="text-muted-foreground max-w-[52ch] text-xs">{data.lag_note}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {(data.totals ?? []).map((total) => (
          <Card key={total.metric}>
            <CardHeader className="gap-1 pb-2">
              <CardDescription>{total.label}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{total.recent.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <Delta delta={total.delta} pct={total.pct} verdict={total.verdict} />
              <span className="text-muted-foreground text-xs">
                {total.note ?? `was ${total.prior.toLocaleString()} the week before`}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Fourteen days, both windows</CardTitle>
          <CardDescription>
            The shaded block on the right is the week being reported. A tick under the axis is a day the site
            was changed — {changeDays.size} such day(s) in this window.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[240px] w-full">
            <ComposedChart data={series} margin={{ left: 4, right: 4, top: 8, bottom: 4 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={short}
                minTickGap={16}
              />
              <YAxis yAxisId="impr" tickLine={false} axisLine={false} width={38} />
              <YAxis yAxisId="clicks" orientation="right" tickLine={false} axisLine={false} width={28} />
              {recent ? (
                <ReferenceArea
                  yAxisId="impr"
                  x1={recent.from}
                  x2={recent.to}
                  fill="var(--primary)"
                  fillOpacity={0.06}
                />
              ) : null}
              {[...changeDays.keys()].map((day) => (
                <ReferenceLine
                  key={day}
                  yAxisId="impr"
                  x={day}
                  stroke="var(--muted-foreground)"
                  strokeDasharray="2 4"
                  strokeOpacity={0.7}
                />
              ))}
              <ChartTooltip content={<ChartTooltipContent labelFormatter={(v) => short(String(v))} />} />
              <Area
                yAxisId="impr"
                type="monotone"
                dataKey="impressions"
                stroke="var(--color-impressions)"
                fill="var(--color-impressions)"
                fillOpacity={0.18}
                strokeWidth={2}
              />
              <Bar yAxisId="clicks" dataKey="clicks" fill="var(--color-clicks)" radius={3} maxBarSize={14} />
            </ComposedChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <MoverList title="Pages up" rows={data.pages_up ?? []} tone="up" />
        <MoverList title="Pages down" rows={data.pages_down ?? []} tone="down" />
        <QueryList title="Words gaining" rows={data.queries_up ?? []} tone="up" />
        <QueryList title="Words losing" rows={data.queries_down ?? []} tone="down" />
      </div>
    </section>
  )
}

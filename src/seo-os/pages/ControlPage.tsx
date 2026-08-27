import { useNavigate } from "react-router"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { ExperimentVerdict } from "@/seo-os/components/experiment-verdict"
import { HeartbeatBanner } from "@/seo-os/components/heartbeat-banner"
import { MovementPanel, type MoversFile } from "@/seo-os/components/movement-panel"
import { KpiCard } from "@/seo-os/components/kpi-card"
import { PageFrame } from "@/seo-os/components/page-frame"
import { ProposalRow } from "@/seo-os/components/proposal-row"
import { SourceClock } from "@/seo-os/components/source-clock"
import { StatusPill } from "@/seo-os/components/status-pill"
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { useSeoJson } from "@/seo-os/lib/data"
import type { ControlFile } from "@/seo-os/lib/control"

const chartConfig = {
  value: { label: "Keywords", color: "hsl(var(--primary))" },
} satisfies ChartConfig

export default function ControlPage() {
  const { data, error, loading } = useSeoJson<ControlFile>("control")
  const movers = useSeoJson<MoversFile>("movers")
  const navigate = useNavigate()
  const counts = data?.counts
  const beat = data?.heartbeat
  const stale = Boolean(data?.banner) || (beat?.age_hours != null && beat.age_hours > 36)
  const provenShare = counts && counts.locked ? Math.round((counts.proven / counts.locked) * 100) : 0
  const top = data?.top5?.[0]
  const chartData = counts
    ? [
        { name: "Locked", value: counts.locked },
        { name: "Placed", value: counts.placed },
        { name: "Proven", value: counts.proven },
      ]
    : []

  return (
    <PageFrame
      title="Control"
      description="Is the loop alive, and is a keyword actually working — locked, placed, proven."
      exportName="control"
      exportData={data}
      loading={loading}
      error={error}
    >
      <div className="flex flex-col gap-8 px-4 lg:px-6">
        <HeartbeatBanner banner={data?.banner} stale={stale} />

        <MovementPanel data={movers.data} />

        <section className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <KpiCard
              label="Lock"
              value={counts?.locked ?? 0}
              hint={`${counts?.primaries_locked ?? 0} primaries in the contract.`}
            />
            <KpiCard
              label="Place"
              value={counts?.placed ?? 0}
              delay={0.15}
              hint="Measured in built HTML, not intent."
            />
            <KpiCard
              label="Prove"
              value={counts?.proven ?? 0}
              delay={0.3}
              hint="Google has shown the owner page for the phrase."
            />
            <KpiCard
              label="Unproven"
              value={counts?.locked_unproven ?? 0}
              delay={0.45}
              hint="Locked and never seen in Search Console."
            />
          </div>
          <Card className="flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2">
              <AnimatedCircularProgressBar
                className="size-28 text-lg"
                max={100}
                min={0}
                value={provenShare}
                gaugePrimaryColor="hsl(var(--primary))"
                gaugeSecondaryColor="hsl(var(--muted))"
              />
              <p className="text-muted-foreground text-xs">Proven / locked</p>
            </div>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Phase</CardTitle>
              <CardDescription>
                {beat?.kind ?? "—"} · {beat?.git_commit ?? "no commit"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{beat?.phase ?? "unknown"}</Badge>
                <StatusPill value={beat?.gates_pass === false ? "error" : beat?.gates_pass ? "ok" : "review"} />
              </div>
              <Progress value={provenShare} />
              <p className="text-muted-foreground text-xs">
                {beat?.age_hours != null ? `${beat.age_hours}h since last run` : "never ran"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Score mix</CardTitle>
              <CardDescription>Lock is not place. Place is not prove.</CardDescription>
            </CardHeader>
            <CardContent>
              {chartData.length ? (
                <ChartContainer config={chartConfig} className="h-40 w-full">
                  <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={64} tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                  </BarChart>
                </ChartContainer>
              ) : (
                <Skeleton className="h-40 w-full" />
              )}
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">Top 5</h2>
            <ShimmerButton
              type="button"
              className="h-9 px-4 py-0 text-sm"
              disabled={!top}
              onClick={() => navigate("/seo/queue")}
            >
              Open top proposal
            </ShimmerButton>
          </div>
          <div className="flex flex-col gap-2">
            {(data?.top5 ?? []).map((item) => (
              <ProposalRow key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">Source clocks</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {(data?.sources ?? []).map((source) => (
              <SourceClock key={source.service} source={source} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">Open experiments</h2>
          <Card>
            <CardContent className="py-4">
              {data?.experiments?.open?.length ? (
                <div className="flex flex-col gap-2">
                  {data.experiments.open.map((row) => (
                    <div key={row.batch_id} className="flex flex-wrap items-center gap-2 text-sm">
                      <ExperimentVerdict value={row.verdict} />
                      <span className="font-mono text-xs">{row.url}</span>
                      <span className="text-muted-foreground text-xs">
                        {row.applied_at} · {row.window_days}-day window
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No experiment is open. Every applied change should open one before the next edit to the same page.
                </p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">Last actions</h2>
          <ScrollArea className="h-72 rounded-lg border">
            <div className="flex flex-col">
              {(data?.actions ?? []).map((action, index) => (
                <Item key={`${action.url}-${index}`} size="sm" className="border-b last:border-b-0">
                  <ItemContent>
                    <ItemTitle>
                      <span className="font-mono text-xs">{action.url}</span>
                      <span className="text-muted-foreground text-xs">{action.where}</span>
                    </ItemTitle>
                    <ItemDescription>{action.after}</ItemDescription>
                  </ItemContent>
                  <span className="text-muted-foreground font-mono text-xs">{action.at}</span>
                </Item>
              ))}
            </div>
          </ScrollArea>
        </section>
      </div>
    </PageFrame>
  )
}

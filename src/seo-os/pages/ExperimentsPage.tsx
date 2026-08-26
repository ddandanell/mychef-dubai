import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"
import { ExperimentVerdict } from "@/seo-os/components/experiment-verdict"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import type { ControlFile } from "@/seo-os/lib/control"

export default function ExperimentsPage() {
  const { data, error, loading } = useSeoJson<ControlFile>("control")
  const open = data?.experiments?.open ?? []
  const verdicts = data?.experiments?.verdicts ?? {}
  const confounded = open.some((row) => row.verdict === "confounded")

  return (
    <PageFrame
      title="Experiments"
      description="Lift, flat, drop, too soon, confounded. A change without a window is folklore."
      exportName="control"
      exportData={data}
      loading={loading}
      error={error}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
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
                <CardTitle className="text-2xl tabular-nums">{verdicts[key] ?? 0}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {open.length ? (
          <Card>
            <CardHeader>
              <CardTitle>Open windows</CardTitle>
              <CardDescription>Baseline vs after waits on GSC for the window length.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {open.map((row) => (
                <div key={row.batch_id} className="flex flex-wrap items-center gap-2 border-b py-2 last:border-0">
                  <ExperimentVerdict value={row.verdict} />
                  <span className="font-mono text-xs">{row.url}</span>
                  <span className="text-muted-foreground text-xs">
                    {row.keywords.join(", ")} · {row.window_days}d
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageFrame } from "@/seo-os/components/page-frame"
import { StatusPill } from "@/seo-os/components/status-pill"
import { useSeoJson } from "@/seo-os/lib/data"

/**
 * Speed, per page, lab beside field.
 *
 * Two numbers that are easy to confuse and mean different things: Lighthouse runs once, in a
 * datacentre, for any URL; CrUX reports what real Chrome users lived through, and stays blank
 * for a page too quiet to report. Blank is "not enough visitors to say" — never "fine".
 */

type SpeedPage = {
  url: string
  performance?: number | null
  seo_score?: number | null
  accessibility?: number | null
  lab_lcp_ms?: number | null
  lab_cls?: number | null
  lab_tbt_ms?: number | null
  field_source?: string | null
  field_lcp_ms?: number | null
  field_inp_ms?: number | null
  field_cls?: number | null
  lcp?: string | null
  inp?: string | null
  cls?: string | null
  opportunities?: { id: string; title: string; saving_ms: number }[]
}

type SpeedFile = {
  generated?: string
  captured_on?: string
  strategy?: string
  intro?: string
  tiles?: { value: string; label: string }[]
  median_performance?: number | null
  failing?: string[]
  pages?: SpeedPage[]
}

const TONE: Record<string, "ok" | "warn" | "bad"> = {
  good: "ok",
  "needs work": "warn",
  poor: "bad",
}

const ms = (value?: number | null) => (value == null ? "—" : `${(value / 1000).toFixed(2)}s`)

export default function SpeedPage() {
  const { data, error, loading } = useSeoJson<SpeedFile>("speed")
  const pages = [...(data?.pages ?? [])].sort(
    (a, b) => (a.performance ?? 101) - (b.performance ?? 101),
  )

  return (
    <PageFrame
      title="Speed"
      description={`Core Web Vitals, ${data?.strategy ?? "mobile"}, captured ${data?.captured_on ?? "—"}. Slowest first.`}
      exportName="speed"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        <p className="text-muted-foreground max-w-[92ch] text-sm">{data?.intro}</p>

        <div className="grid gap-3 lg:grid-cols-2">
          {pages.map((page) => (
            <Card key={page.url}>
              <CardHeader className="gap-1 pb-2">
                <CardDescription className="font-mono text-xs">{page.url}</CardDescription>
                <CardTitle className="flex items-baseline gap-2 text-2xl tabular-nums">
                  {page.performance ?? "—"}
                  <span className="text-muted-foreground text-xs font-normal">performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusPill value={`LCP ${page.lcp ?? "no data"}`} tone={TONE[page.lcp ?? ""] ?? "off"} />
                  <StatusPill value={`INP ${page.inp ?? "no data"}`} tone={TONE[page.inp ?? ""] ?? "off"} />
                  <StatusPill value={`CLS ${page.cls ?? "no data"}`} tone={TONE[page.cls ?? ""] ?? "off"} />
                </div>
                <dl className="text-muted-foreground grid grid-cols-2 gap-x-4 gap-y-1 text-xs tabular-nums">
                  <dt>Lab LCP</dt>
                  <dd className="text-foreground">{ms(page.lab_lcp_ms)}</dd>
                  <dt>Lab blocking</dt>
                  <dd className="text-foreground">{page.lab_tbt_ms == null ? "—" : `${Math.round(page.lab_tbt_ms)}ms`}</dd>
                  <dt>Lab shift</dt>
                  <dd className="text-foreground">{page.lab_cls ?? "—"}</dd>
                  <dt>Field LCP</dt>
                  <dd className="text-foreground">
                    {page.field_lcp_ms == null ? "not enough visitors" : ms(page.field_lcp_ms)}
                    {page.field_source === "origin" ? " (site-wide)" : ""}
                  </dd>
                </dl>
                {page.opportunities?.length ? (
                  <ul className="text-muted-foreground flex flex-col gap-1 border-t pt-2 text-xs">
                    {page.opportunities.slice(0, 3).map((item) => (
                      <li key={item.id}>
                        {item.title} — up to {(item.saving_ms / 1000).toFixed(1)}s
                      </li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageFrame>
  )
}

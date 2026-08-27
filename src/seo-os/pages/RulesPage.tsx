import { Card, CardContent } from "@/components/ui/card"
import { PageFrame } from "@/seo-os/components/page-frame"
import { StatusPill } from "@/seo-os/components/status-pill"
import { useSeoJson } from "@/seo-os/lib/data"

/**
 * The rules, with live pass/fail. Every one exists because something went wrong once, so each
 * card carries the reason as well as the rule — a rule whose reason is forgotten is the next
 * rule somebody deletes.
 */

type Rule = {
  id: string
  rule: string
  why: string
  where: string
  status: "holds" | "broken" | "no gate" | "not checked" | "unknown"
  evidence?: string
  command?: string
}

type RulesFile = {
  generated?: string
  intro?: string
  tiles?: { value: string; label: string }[]
  rules?: Rule[]
}

const TONE: Record<string, string> = {
  holds: "ok",
  broken: "error",
  "no gate": "review",
  "not checked": "review",
  unknown: "review",
}

export default function RulesPage() {
  const { data, error, loading } = useSeoJson<RulesFile>("rules")
  const rules = data?.rules ?? []
  const broken = rules.filter((r) => r.status === "broken")
  const gated = rules.filter((r) => r.status === "holds")
  const carried = rules.filter((r) => r.status !== "holds" && r.status !== "broken")

  const card = (r: Rule) => (
    <Card key={r.id}>
      <CardContent className="flex flex-col gap-2 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill value={TONE[r.status] ?? "review"} />
          <span className="text-muted-foreground font-mono text-xs">{r.id}</span>
          {r.status === "no gate" ? (
            <span className="text-muted-foreground text-xs">carried by the tooling, not by a gate</span>
          ) : null}
        </div>
        <p className="text-sm font-medium">{r.rule}</p>
        <p className="text-muted-foreground text-sm">{r.why}</p>
        <div className="text-muted-foreground flex flex-col gap-1 border-t pt-2 text-xs">
          <div>
            <span className="tracking-wider uppercase">Where </span>
            <span className="font-mono">{r.where}</span>
          </div>
          {r.evidence ? (
            <div>
              <span className="tracking-wider uppercase">Now </span>
              <span>{r.evidence}</span>
            </div>
          ) : null}
          {r.command ? (
            <div>
              <span className="tracking-wider uppercase">Check </span>
              <span className="font-mono">{r.command}</span>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <PageFrame
      title="Rules"
      description="What this system will and will not do — and whether each rule is holding right now."
      exportName="rules"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-8 px-4 lg:px-6">
        <p className="text-muted-foreground max-w-[92ch] text-sm">{data?.intro}</p>

        {broken.length ? (
          <section className="flex flex-col gap-3">
            <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
              Broken right now
            </h2>
            <div className="grid gap-3 lg:grid-cols-2">{broken.map(card)}</div>
          </section>
        ) : null}

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
            Enforced by a gate
          </h2>
          <div className="grid gap-3 lg:grid-cols-2">{gated.map(card)}</div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
            Carried by the tooling
          </h2>
          <div className="grid gap-3 lg:grid-cols-2">{carried.map(card)}</div>
        </section>
      </div>
    </PageFrame>
  )
}

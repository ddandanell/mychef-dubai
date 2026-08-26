import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageFrame } from "@/seo-os/components/page-frame"
import { StatusPill } from "@/seo-os/components/status-pill"
import { useSeoJson } from "@/seo-os/lib/data"

type StatusCard = {
  tone: string
  name: string
  state: string
  detail?: string
  facts?: { label: string; value: string }[]
  error?: string | null
}

type StatusFile = {
  intro?: string
  tiles?: { value: string; label: string }[]
  sections?: { title: string; cards: StatusCard[] }[]
}

export default function StatusPage() {
  const { data, error, loading } = useSeoJson<StatusFile>("status")
  const tiles = data?.tiles ?? []

  return (
    <PageFrame
      title="Status"
      description={data?.intro || "Every source the board depends on, and whether it is actually feeding data."}
      exportName="status"
      exportData={data}
      loading={loading}
      error={error}
      metrics={tiles.map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-8 px-4 lg:px-6">
        {(data?.sections ?? []).map((section) => (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
              {section.title}
            </h2>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {section.cards.map((card) => (
                <Card key={card.name} className="shadow-xs">
                  <CardHeader className="flex flex-row items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-base">{card.name}</CardTitle>
                      <CardDescription>{card.detail}</CardDescription>
                    </div>
                    <StatusPill value={card.state} />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    {card.facts?.length ? (
                      <dl className="grid grid-cols-2 gap-3 text-sm">
                        {card.facts.map((fact) => (
                          <div key={fact.label}>
                            <dt className="text-muted-foreground text-xs uppercase tracking-wide">{fact.label}</dt>
                            <dd className="break-words">{fact.value || "—"}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                    {card.error ? (
                      <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-900">{card.error}</p>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageFrame>
  )
}

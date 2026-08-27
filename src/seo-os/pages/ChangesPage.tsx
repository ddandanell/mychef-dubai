import { useMemo, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageFrame } from "@/seo-os/components/page-frame"
import { useSeoJson } from "@/seo-os/lib/data"
import { cn } from "@/lib/utils"

/**
 * The change log — everything done to the site, newest first.
 *
 * The movement view names a change as the likely reason a number moved; this is where that
 * change can be read in full. Copy edits carry the words before and after, so a bad sentence is
 * visible without opening the site, and every commit carries the files it touched.
 */

type Part = { where: string; how?: string; before?: string; after?: string }

type Change = {
  id: string
  at: string
  day: string
  source: string
  kind: string
  label: string
  summary: string
  detail?: string
  who?: string
  ref?: string
  files?: number
  urls?: string[]
  parts?: Part[]
  site_affecting?: boolean
}

type ChangelogFile = {
  generated?: string
  window_days?: number
  intro?: string
  tiles?: { value: string; label: string }[]
  kinds?: Record<string, number>
  by_day?: { day: string; changes: number }[]
  busiest_urls?: { url: string; changes: number }[]
  items?: Change[]
}

const KIND_TONE: Record<string, string> = {
  copy: "bg-secondary text-secondary-foreground",
  page: "bg-secondary text-secondary-foreground",
  image: "bg-accent text-accent-foreground",
  design: "bg-accent text-accent-foreground",
  structure: "bg-destructive/15 text-destructive-foreground",
  tracking: "bg-muted text-muted-foreground",
  config: "bg-muted text-muted-foreground",
  tooling: "bg-muted text-muted-foreground",
  other: "bg-muted text-muted-foreground",
}

const day = (value: string) =>
  new Date(value + "T00:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })

export default function ChangesPage() {
  const { data, error, loading } = useSeoJson<ChangelogFile>("changelog")
  const [kind, setKind] = useState<string>("site")
  const [url, setUrl] = useState<string>("")

  const items = data?.items ?? []
  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (kind === "site" && !item.site_affecting) return false
      if (kind !== "site" && kind !== "all" && item.kind !== kind) return false
      if (url && !(item.urls ?? []).some((u) => u.includes(url)) && !item.summary.toLowerCase().includes(url.toLowerCase()))
        return false
      return true
    })
  }, [items, kind, url])

  const grouped = useMemo(() => {
    const days = new Map<string, Change[]>()
    for (const item of filtered) {
      const list = days.get(item.day) ?? []
      list.push(item)
      days.set(item.day, list)
    }
    return [...days.entries()]
  }, [filtered])

  const kinds = ["site", "all", ...Object.keys(data?.kinds ?? {})]

  return (
    <PageFrame
      title="Changes"
      description="Every change made to the site, with the words before and after. This is what the movement view points at."
      exportName="changelog"
      exportData={data}
      loading={loading}
      error={error}
      metrics={(data?.tiles ?? []).map((tile) => ({ label: tile.label, value: tile.value }))}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        <p className="text-muted-foreground max-w-[92ch] text-sm">{data?.intro}</p>

        <div className="flex flex-wrap items-center gap-2">
          {kinds.map((k) => (
            <Button
              key={k}
              size="sm"
              variant={kind === k ? "default" : "outline"}
              onClick={() => setKind(k)}
              className="capitalize"
            >
              {k === "site" ? "Site-affecting" : k}
              {data?.kinds?.[k] ? <span className="text-muted-foreground ml-1 text-xs">{data.kinds[k]}</span> : null}
            </Button>
          ))}
          <input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Filter by URL or words…"
            className="border-input bg-background ml-auto h-9 w-64 rounded-md border px-3 text-sm"
          />
        </div>

        {grouped.map(([date, changes]) => (
          <section key={date} className="flex flex-col gap-2">
            <h2 className="text-muted-foreground sticky top-0 z-10 py-1 text-xs font-medium tracking-[0.14em] uppercase backdrop-blur">
              {day(date)} · {changes.length} change{changes.length === 1 ? "" : "s"}
            </h2>
            <div className="flex flex-col gap-2">
              {changes.map((change) => (
                <Card key={change.id}>
                  <CardContent className="flex flex-col gap-2 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={cn("font-normal", KIND_TONE[change.kind] ?? "")}>
                        {change.label || change.kind}
                      </Badge>
                      {change.ref ? <span className="text-muted-foreground font-mono text-xs">{change.ref}</span> : null}
                      <span className="text-muted-foreground text-xs">{change.who}</span>
                      {change.urls?.slice(0, 3).map((u) => (
                        <a key={u} href={u} target="_blank" rel="noreferrer" className="font-mono text-xs hover:underline">
                          {u}
                        </a>
                      ))}
                      {change.urls && change.urls.length > 3 ? (
                        <span className="text-muted-foreground text-xs">+{change.urls.length - 3} more</span>
                      ) : null}
                    </div>
                    <p className="text-sm">{change.summary}</p>
                    {change.parts?.length ? (
                      <div className="flex flex-col gap-2 border-t pt-2">
                        {change.parts.map((part, index) => (
                          <div key={`${change.id}-${index}`} className="text-xs">
                            <span className="text-muted-foreground tracking-wider uppercase">{part.where}</span>
                            {part.before ? (
                              <p className="text-muted-foreground line-through">{part.before.slice(0, 220)}</p>
                            ) : null}
                            <p>{(part.after ?? "").slice(0, 260)}</p>
                          </div>
                        ))}
                      </div>
                    ) : change.detail ? (
                      <p className="text-muted-foreground font-mono text-xs">{change.detail}</p>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {!filtered.length && !loading ? (
          <p className="text-muted-foreground text-sm">No change matches that filter.</p>
        ) : null}
      </div>
    </PageFrame>
  )
}

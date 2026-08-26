import { useMemo, useState } from "react"
import { PageFrame } from "@/seo-os/components/page-frame"
import { RecordInspector } from "@/seo-os/components/record-inspector"
import { SiloBoard } from "@/seo-os/components/silo-board"
import { useSeoJson, type BoardFile } from "@/seo-os/lib/data"
import {
  headingPages,
  isActivePage,
  missingPrimary,
  subOnPage,
  type BoardPageRow,
} from "@/seo-os/lib/board-model"
import { asRecord, fmtNum } from "@/seo-os/lib/format"

export default function BoardPage() {
  const { data, error, loading } = useSeoJson<BoardFile>("data")
  const [row, setRow] = useState<BoardPageRow | null>(null)
  const silos = data?.silos ?? {}
  const stats = data?.stats ?? {}
  const pages = useMemo(() => Object.values(silos).flat(), [silos])
  const active = pages.filter(isActivePage)
  const subsAssigned = active.reduce((n, page) => n + (page.subs?.length ?? 0), 0)
  const subsFound = active.reduce(
    (n, page) => n + (page.subs ?? []).filter(subOnPage).length,
    0,
  )
  const collisions = pages.filter((page) => headingPages(page).length).length
  const missing = active.filter(missingPrimary).length

  return (
    <PageFrame
      title="Board"
      description="Every category, then every URL in it. Click a page to see placement, missing phrases, and the next move."
      exportName="board"
      exportData={data}
      loading={loading}
      error={error}
      metrics={[
        { label: "Active pages", value: fmtNum(stats.pages_active), hint: `${fmtNum(stats.pages_total)} in the contract` },
        { label: "Locked primaries", value: fmtNum(stats.primaries), hint: `${fmtNum(asRecord(stats).measured_volumes)} with UAE volume` },
        { label: "Subs on the page", value: `${fmtNum(subsFound)}/${fmtNum(subsAssigned)}`, hint: "Assigned vs actually written" },
        { label: "Needs work", value: fmtNum(collisions + missing), hint: `${fmtNum(missing)} missing H1/title · ${fmtNum(collisions)} heading collisions` },
      ]}
    >
      {Object.keys(silos).length ? (
        <SiloBoard silos={silos} onOpenPage={setRow} selectedUrl={row?.url} />
      ) : null}
      <RecordInspector row={row} onClose={() => setRow(null)} />
      <p className="text-muted-foreground px-4 text-xs lg:px-6">
        Generated {data?.generated ?? "—"}. Click a category to isolate it. Click a URL for the work on that page.
      </p>
    </PageFrame>
  )
}

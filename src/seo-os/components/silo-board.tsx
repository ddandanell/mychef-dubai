import { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PlacementMarks } from "@/seo-os/components/placement-marks"
import { StatusPill } from "@/seo-os/components/status-pill"
import { cn } from "@/lib/utils"
import {
  EMPTY_FILTERS,
  isActivePage,
  matchesFilters,
  missingPrimary,
  primaryScore,
  riskLabel,
  rollupSilo,
  subOnPage,
  type BoardFilters,
  type BoardPageRow,
  type SiloRollup,
} from "@/seo-os/lib/board-model"
import { fmtNum, fmtScore } from "@/seo-os/lib/format"

const CHIPS: { id: keyof Pick<BoardFilters, "room" | "collisions" | "doubles" | "missing" | "low">; label: string }[] = [
  { id: "room", label: "Has room" },
  { id: "collisions", label: "Collisions" },
  { id: "missing", label: "Missing H1/title" },
  { id: "low", label: "Score under 7" },
  { id: "doubles", label: "Assigned twice" },
]

export function SiloBoard({
  silos,
  onOpenPage,
  selectedUrl,
}: {
  silos: Record<string, BoardPageRow[]>
  onOpenPage: (row: BoardPageRow) => void
  selectedUrl?: string
}) {
  const [filters, setFilters] = useState<BoardFilters>(EMPTY_FILTERS)
  const rollups = useMemo(
    () => Object.entries(silos).map(([name, rows]) => rollupSilo(name, rows)),
    [silos],
  )

  const visible = useMemo(() => {
    const out: { name: string; rollup: SiloRollup; rows: BoardPageRow[] }[] = []
    for (const [name, rows] of Object.entries(silos)) {
      const matched = rows.filter((row) => matchesFilters(row, filters))
      if (!matched.length) continue
      out.push({ name, rollup: rollupSilo(name, rows), rows: matched })
    }
    return out
  }, [silos, filters])

  const shown = visible.reduce((n, silo) => n + silo.rows.length, 0)

  function setSilo(name: string) {
    setFilters((prev) => ({ ...prev, silo: prev.silo === name ? "" : name }))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 px-4 lg:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <Input
            value={filters.query}
            onChange={(e) => setFilters((prev) => ({ ...prev, query: e.target.value }))}
            placeholder="Search URL, primary, or a subkeyword…"
            className="lg:max-w-sm"
          />
          <Select
            value={filters.silo || "all"}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, silo: value === "all" ? "" : value }))}
          >
            <SelectTrigger className="w-full lg:w-56">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All categories</SelectItem>
                {rollups.map((silo) => (
                  <SelectItem key={silo.name} value={silo.name}>
                    {silo.name} ({silo.active})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-muted-foreground text-sm tabular-nums lg:ml-auto">{shown} pages shown</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {CHIPS.map((chip) => {
            const on = filters[chip.id]
            return (
              <Button
                key={chip.id}
                type="button"
                size="sm"
                variant={on ? "default" : "outline"}
                onClick={() => setFilters((prev) => ({ ...prev, [chip.id]: !prev[chip.id] }))}
              >
                {chip.label}
              </Button>
            )
          })}
          <Label className="ml-1 flex items-center gap-2 text-sm">
            <Checkbox
              checked={filters.retired}
              onCheckedChange={(value) => setFilters((prev) => ({ ...prev, retired: Boolean(value) }))}
            />
            Include retired
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 xl:grid-cols-4 lg:px-6">
        {rollups.map((silo) => {
          const selected = filters.silo === silo.name
          return (
            <button
              key={silo.name}
              type="button"
              onClick={() => setSilo(silo.name)}
              className={cn(
                "rounded-xl border bg-card p-4 text-left shadow-xs transition-colors",
                selected ? "border-primary ring-ring ring-1" : "hover:bg-muted/60",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{silo.name}</p>
                <span className="text-muted-foreground text-xs tabular-nums">{silo.active} live</span>
              </div>
              <p className="mt-2 text-2xl font-semibold tabular-nums">{fmtNum(silo.volume)}</p>
              <p className="text-muted-foreground text-xs">UAE volume on primaries / mo</p>
              <div className="mt-3 flex flex-col gap-1.5">
                <Progress value={silo.coverage} />
                <p className="text-muted-foreground text-xs tabular-nums">
                  {silo.coverage}% subs on the page · score {fmtScore(silo.avgScore)} · {silo.room} room
                  {silo.collisions ? ` · ${silo.collisions} collisions` : ""}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex flex-col gap-4 px-4 lg:px-6">
        {visible.map(({ name, rollup, rows }) => (
          <SiloSection
            key={name}
            name={name}
            rollup={rollup}
            rows={rows}
            selectedUrl={selectedUrl}
            onOpenPage={onOpenPage}
          />
        ))}
      </div>
    </div>
  )
}

function SiloSection({
  name,
  rollup,
  rows,
  selectedUrl,
  onOpenPage,
}: {
  name: string
  rollup: SiloRollup
  rows: BoardPageRow[]
  selectedUrl?: string
  onOpenPage: (row: BoardPageRow) => void
}) {
  return (
    <Collapsible defaultOpen>
      <Card>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <CardTitle className="flex items-center gap-2">
                  {name}
                  <ChevronDown className="text-muted-foreground" />
                </CardTitle>
                <CardDescription className="tabular-nums">
                  {rollup.active} active · {fmtNum(rollup.volume)}/mo · score {fmtScore(rollup.avgScore)} ·{" "}
                  {rollup.subsFound}/{rollup.subsAssigned} subs found · {rollup.room} free slots · {rollup.collisions}{" "}
                  collisions
                </CardDescription>
              </div>
              <Badge variant="outline">{rows.length}</Badge>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="px-0 pb-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead>Locked primary</TableHead>
                  <TableHead>On the page</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Subs</TableHead>
                  <TableHead>Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => {
                  const subs = row.subs ?? []
                  const found = subs.filter(subOnPage).length
                  const score = primaryScore(row)
                  const risk = riskLabel(row)
                  const inactive = !isActivePage(row)
                  return (
                    <TableRow
                      key={row.url}
                      data-state={selectedUrl === row.url ? "selected" : undefined}
                      className="cursor-pointer"
                      onClick={() => onOpenPage(row)}
                    >
                      <TableCell>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-xs">{row.url}</span>
                          <span className="text-muted-foreground text-xs">
                            {row.page_type}
                            {row.is_hub ? " · hub" : ""}
                            {inactive ? (row.retired ? " · retired" : " · noindex") : ""}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium">{row.primary || "—"}</span>
                          <span className="text-muted-foreground text-xs tabular-nums">
                            {row.primary_volume != null ? `${fmtNum(row.primary_volume)}/mo` : "no UAE volume"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <PlacementMarks place={row.primary_place} size="sm" />
                        {missingPrimary(row) ? (
                          <p className="text-destructive mt-1 text-xs">Not in title and H1</p>
                        ) : null}
                      </TableCell>
                      <TableCell className="tabular-nums">{score == null ? "—" : `${score}/10`}</TableCell>
                      <TableCell className="tabular-nums">
                        {found}/{subs.length}
                        {(row.room ?? 0) > 0 ? (
                          <span className="text-muted-foreground"> · {row.room} free</span>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        <StatusPill value={risk.label} tone={risk.tone} />
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}

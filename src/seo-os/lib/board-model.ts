export type PlaceMap = {
  title?: boolean
  description?: boolean
  h1?: boolean
  h2?: boolean
  first100?: boolean
  body?: boolean
  count?: number
  score?: number | null
  violation?: boolean
}

export type SubKeyword = {
  kw: string
  volume?: number | null
  place?: PlaceMap | null
  other_pages?: number | null
}

export type BoardPageRow = {
  url: string
  silo: string
  hub?: string
  is_hub?: boolean
  page_type?: string
  retired?: boolean
  noindex?: boolean
  redirect_to?: string | null
  primary?: string | null
  primary_volume?: number | null
  primary_place?: PlaceMap | null
  cap?: number
  room?: number
  words?: number | null
  title?: string | null
  h1?: string | null
  h1_count?: number
  live_code?: string | null
  live_to?: string | null
  shell?: boolean
  keyword_score?: { primary?: number | null; sub_violations?: number; subs_present?: number; subs_total?: number } | number | null
  risk?: { heading_pages?: string[]; body_pages?: number } | null
  doubles?: string[]
  subs?: SubKeyword[]
  [key: string]: unknown
}

export type BoardFilters = {
  query: string
  silo: string
  room: boolean
  collisions: boolean
  doubles: boolean
  missing: boolean
  low: boolean
  retired: boolean
}

export const EMPTY_FILTERS: BoardFilters = {
  query: "",
  silo: "",
  room: false,
  collisions: false,
  doubles: false,
  missing: false,
  low: false,
  retired: false,
}

export const PLACE_MARKS = [
  { key: "title", short: "T", label: "Title" },
  { key: "description", short: "D", label: "Description" },
  { key: "h1", short: "H1", label: "H1" },
  { key: "h2", short: "H2", label: "H2" },
  { key: "first100", short: "F", label: "First 100 words" },
  { key: "body", short: "B", label: "Body" },
] as const

export function isActivePage(row: BoardPageRow) {
  return !row.retired && !row.noindex
}

export function primaryScore(row: BoardPageRow): number | null {
  const score = row.keyword_score
  if (score && typeof score === "object" && typeof score.primary === "number") return score.primary
  if (typeof score === "number") return score
  return null
}

export function headingPages(row: BoardPageRow): string[] {
  const risk = row.risk
  if (risk && Array.isArray(risk.heading_pages)) return risk.heading_pages
  return []
}

export function bodyMentions(row: BoardPageRow): number {
  return typeof row.risk?.body_pages === "number" ? row.risk.body_pages : 0
}

export function subOnPage(sub: SubKeyword): boolean {
  const place = sub.place
  return Boolean(place && (place.body || place.title || place.h1 || place.h2))
}

export function missingPrimary(row: BoardPageRow): boolean {
  if (!row.primary || !row.primary_place) return false
  return !(row.primary_place.title && row.primary_place.h1)
}

export function hasDoubles(row: BoardPageRow): boolean {
  return Array.isArray(row.doubles) && row.doubles.length > 0
}

export type SiloRollup = {
  name: string
  pages: number
  active: number
  volume: number
  avgScore: number | null
  scored: number
  room: number
  collisions: number
  missingH1: number
  lowScore: number
  subsAssigned: number
  subsFound: number
  coverage: number
}

export function rollupSilo(name: string, rows: BoardPageRow[]): SiloRollup {
  const active = rows.filter(isActivePage)
  let volume = 0
  let scoreSum = 0
  let scored = 0
  let room = 0
  let collisions = 0
  let missingH1 = 0
  let lowScore = 0
  let subsAssigned = 0
  let subsFound = 0
  for (const row of active) {
    volume += row.primary_volume ?? 0
    const score = primaryScore(row)
    if (score != null) {
      scoreSum += score
      scored += 1
      if (score < 7) lowScore += 1
    }
    room += row.room ?? 0
    if (headingPages(row).length) collisions += 1
    if (missingPrimary(row)) missingH1 += 1
    const subs = row.subs ?? []
    subsAssigned += subs.length
    subsFound += subs.filter(subOnPage).length
  }
  return {
    name,
    pages: rows.length,
    active: active.length,
    volume,
    avgScore: scored ? scoreSum / scored : null,
    scored,
    room,
    collisions,
    missingH1,
    lowScore,
    subsAssigned,
    subsFound,
    coverage: subsAssigned ? Math.round((subsFound / subsAssigned) * 100) : 0,
  }
}

export function matchesFilters(row: BoardPageRow, filters: BoardFilters): boolean {
  if (filters.silo && row.silo !== filters.silo) return false
  if (!filters.retired && !isActivePage(row)) return false
  if (filters.room && !(row.room && row.room > 0)) return false
  if (filters.collisions && headingPages(row).length === 0) return false
  if (filters.doubles && !hasDoubles(row)) return false
  if (filters.missing && !missingPrimary(row)) return false
  const score = primaryScore(row)
  if (filters.low && !(score != null && score < 7)) return false
  const q = filters.query.trim().toLowerCase()
  if (q) {
    const hay = [
      row.url,
      row.primary,
      row.title,
      row.silo,
      ...(row.subs ?? []).map((sub) => sub.kw),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
    if (!hay.includes(q)) return false
  }
  return true
}

export function pageNextStep(row: BoardPageRow): string {
  if (row.retired) return "Retired — leave it, or confirm the redirect still matches the contract."
  if (row.noindex) return "Noindex. Do not spend copy work here."
  if (missingPrimary(row)) {
    if (row.primary_place && !row.primary_place.h1) return `Put “${row.primary}” in the H1.`
    return `Put “${row.primary}” in the title.`
  }
  const missingSubs = (row.subs ?? [])
    .filter((sub) => !subOnPage(sub))
    .sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0))
  if (missingSubs[0]) {
    const sub = missingSubs[0]
    const vol = sub.volume != null ? ` (${sub.volume}/mo)` : ""
    return `The copy never says “${sub.kw}”${vol}. One sentence on this page.`
  }
  const others = headingPages(row)
  if (others.length) {
    return `This primary is in ${others.length} other heading${others.length === 1 ? "" : "s"}. Pull it back to this URL.`
  }
  const score = primaryScore(row)
  if (score != null && score < 7) return "Primary is on the page but weakly. Raise title / H1 / first 100 words."
  if (row.room && row.room > 0) return `${row.room} free slot${row.room === 1 ? "" : "s"}. Open Backlog filtered to this URL.`
  return "Holding. Work the Queue for the next move."
}

export function riskLabel(row: BoardPageRow): { label: string; tone: "ok" | "warn" | "bad" | "off" } {
  if (!row.primary) return { label: "untargeted", tone: "off" }
  const headings = headingPages(row)
  const body = bodyMentions(row)
  if (headings.length) return { label: `in ${headings.length} other heading${headings.length === 1 ? "" : "s"}`, tone: "bad" }
  if (body >= 8) return { label: `body of ${body} pages`, tone: "warn" }
  if (body) return { label: `own · ${body} body mention${body === 1 ? "" : "s"}`, tone: "ok" }
  return { label: "own", tone: "ok" }
}

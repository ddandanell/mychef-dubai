export type Heartbeat = {
  ran_at?: string
  kind?: string
  phase?: string
  git_commit?: string
  age_hours?: number | null
  gates_pass?: boolean | null
  sources_ok?: string[]
  sources_stale?: string[]
  error?: string | null
}

export type ControlSource = {
  service: string
  status: string
  detail?: string
  last_success?: string | null
  error?: string | null
  checked_at?: string | null
}

export type ControlProposal = {
  id: string
  type: string
  url?: string
  keyword?: string
  reason?: string
  risk?: string
  auto_eligible?: boolean
  status?: string
}

export type ControlExperiment = {
  batch_id: string
  url: string
  keywords: string[]
  applied_at?: string | null
  window_days?: number
  verdict?: string
}

export type ControlAction = {
  url: string
  where: string
  how: string
  after: string
  at?: string | null
}

export type ControlFile = {
  generated?: string
  banner?: string | null
  heartbeat?: Heartbeat
  counts?: {
    locked: number
    placed: number
    proven: number
    locked_unproven: number
    primaries_locked: number
    primaries_placed: number
    primaries_proven: number
  }
  sources?: ControlSource[]
  queue?: { type: string; status: string; count: number }[]
  top5?: ControlProposal[]
  experiments?: {
    verdicts?: Record<string, number>
    open?: ControlExperiment[]
  }
  actions?: ControlAction[]
  tiles?: { value: string; label: string }[]
}

export function sourceIsStale(source: ControlSource, maxHours = 48): boolean {
  if (!source.last_success) return true
  const last = Date.parse(source.last_success)
  if (!Number.isFinite(last)) return true
  return (Date.now() - last) / 36e5 > maxHours
}

export function sourceTone(source: ControlSource): "ok" | "stale" | "error" {
  const status = source.status.toLowerCase()
  if (status === "error" || status === "not connected") return "error"
  if (sourceIsStale(source)) return "stale"
  return "ok"
}

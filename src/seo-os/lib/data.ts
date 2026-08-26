import { useEffect, useState } from "react"

const DATA = "/seo/data"

export type LoadState<T> = {
  data: T | null
  error: string | null
  loading: boolean
}

export async function loadSeoJson<T>(file: string): Promise<T> {
  const name = file.endsWith(".json") ? file : `${file}.json`
  const response = await fetch(`${DATA}/${name}`, { cache: "no-store" })
  if (!response.ok) {
    throw new Error(`Could not load ${name} (${response.status})`)
  }
  return response.json() as Promise<T>
}

export function useSeoJson<T>(file: string | undefined): LoadState<T> {
  const [state, setState] = useState<LoadState<T>>({
    data: null,
    error: null,
    loading: Boolean(file),
  })

  useEffect(() => {
    if (!file) {
      setState({ data: null, error: null, loading: false })
      return
    }
    let active = true
    setState({ data: null, error: null, loading: true })
    loadSeoJson<T>(file).then(
      (data) => {
        if (active) setState({ data, error: null, loading: false })
      },
      (error: unknown) => {
        if (active) {
          setState({
            data: null,
            error: error instanceof Error ? error.message : String(error),
            loading: false,
          })
        }
      },
    )
    return () => {
      active = false
    }
  }, [file])

  return state
}

import type { BoardPageRow } from "@/seo-os/lib/board-model"

export type { BoardPageRow }

export type BoardFile = {
  generated?: string
  stats?: Record<string, unknown>
  silos?: Record<string, BoardPageRow[]>
  collisions?: unknown[]
  containment?: unknown[]
}

export function flattenBoardPages(file: BoardFile | null): BoardPageRow[] {
  if (!file?.silos) return []
  return Object.values(file.silos).flat()
}

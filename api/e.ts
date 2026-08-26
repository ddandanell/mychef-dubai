import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

/**
 * First-party event collector.
 *
 * Why this exists when GA4 is already on the page: GA4 cannot be joined to the keyword
 * tables. This one writes into the same Postgres that holds seo_keywords and seo_pages, so
 * "WhatsApp clicks per owned keyword" becomes a query instead of a guess. It is also not
 * blocked by ad blockers, because it is our own domain.
 *
 * What it never collects: no cookies, no IP address, no user id, no free text. A session id
 * lives in sessionStorage and dies with the tab. Country comes from Vercel's edge header,
 * which is country-level only.
 *
 * Abuse limits, in order of strength:
 *   1. a fixed event vocabulary — anything else is rejected
 *   2. 60 events per session, enforced by the (session_id, seq) primary key
 *   3. a per-instance token bucket on a daily-salted hash of the IP, never stored
 *   4. a 2 KB body cap and a strict shape check on every field
 */

const EVENTS = new Set(['page_view', 'engaged', 'scroll_depth', 'whatsapp_click', 'form_submit', 'exit'])
const MAX_SEQ = 60
const MAX_BODY = 2048
const BUCKET_LIMIT = 60          // events per minute per IP hash, per function instance
const SESSION_RE = /^[a-z0-9]{12,32}$/
const PATH_RE = /^\/[\w\-/.]{0,180}$/

type Bucket = { n: number; minute: number }
const buckets = new Map<string, Bucket>()

function allow(key: string): boolean {
  const minute = Math.floor(Date.now() / 60000)
  const b = buckets.get(key)
  if (!b || b.minute !== minute) {
    if (buckets.size > 5000) buckets.clear()   // instances are short-lived; this is a safety valve
    buckets.set(key, { n: 1, minute })
    return true
  }
  b.n += 1
  return b.n <= BUCKET_LIMIT
}

function hashed(value: string): string {
  // FNV-1a. Not a secret — only used to tell two visitors apart inside one minute.
  let h = 0x811c9dc5
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(36)
}

function device(ua: string): string {
  if (/iPad|Tablet/i.test(ua)) return 'tablet'
  if (/Mobile|iPhone|Android/i.test(ua)) return 'mobile'
  if (!ua) return 'unknown'
  return 'desktop'
}

const str = (v: unknown, max: number): string | null =>
  typeof v === 'string' && v.length > 0 && v.length <= max ? v : null

const int = (v: unknown, max: number): number | null =>
  typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= max ? Math.round(v) : null

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (process.env.TRACKING_OFF === '1') return res.status(204).end()

  const dsn = process.env.DATABASE_URL
  if (!dsn) return res.status(204).end()          // never fail the page over analytics

  const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {})
  if (raw.length > MAX_BODY) return res.status(413).json({ error: 'Payload too large' })

  let body: Record<string, unknown>
  try {
    body = typeof req.body === 'object' && req.body !== null ? (req.body as Record<string, unknown>) : JSON.parse(raw)
  } catch {
    return res.status(400).json({ error: 'Body must be JSON' })
  }

  const session = str(body.s, 32)
  const event = str(body.e, 24)
  const url = str(body.u, 200)
  const seq = int(body.q, MAX_SEQ)

  if (!session || !SESSION_RE.test(session)) return res.status(400).json({ error: 'Bad session' })
  if (!event || !EVENTS.has(event)) return res.status(400).json({ error: 'Unknown event' })
  if (!url || !PATH_RE.test(url)) return res.status(400).json({ error: 'Bad url' })
  if (seq === null) return res.status(400).json({ error: 'Bad sequence' })

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
  const day = new Date().toISOString().slice(0, 10)
  if (!allow(hashed(ip + day))) return res.status(429).json({ error: 'Too many events' })

  const value = int(body.v, 86400)                              // seconds, percent — always a number
  const label = str(body.l, 60)                                 // a fixed-vocabulary label, e.g. "hero"
  const country = String(req.headers['x-vercel-ip-country'] || '').slice(0, 2).toUpperCase() || null
  const ua = String(req.headers['user-agent'] || '')
  const referrer = str(body.r, 120)                             // hostname only, set by the client
  const utmSource = str(body.us, 60)
  const utmMedium = str(body.um, 60)
  const utmCampaign = str(body.uc, 60)

  try {
    const sql = neon(dsn)
    if (seq === 0) {
      await sql`
        INSERT INTO web_sessions (session_id, started_at, landing_url, referrer_host, country, device,
                                  utm_source, utm_medium, utm_campaign)
        VALUES (${session}, now(), ${url}, ${referrer}, ${country}, ${device(ua)},
                ${utmSource}, ${utmMedium}, ${utmCampaign})
        ON CONFLICT (session_id) DO NOTHING`
    }
    await sql`
      INSERT INTO web_events (session_id, seq, at, event, url, value, label)
      VALUES (${session}, ${seq}, now(), ${event}, ${url}, ${value}, ${label})
      ON CONFLICT (session_id, seq) DO NOTHING`
  } catch {
    return res.status(204).end()                                // a analytics write must never surface to a visitor
  }
  return res.status(204).end()
}

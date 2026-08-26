import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'
import { PATH_PRIMARY } from '../src/lib/keywordLockPaths'

/**
 * First-party event collector.
 *
 * Why this exists when GA4 is already on the page: GA4 cannot be joined to the keyword
 * tables. This one writes into the same Postgres that holds seo_keywords and seo_pages, so
 * "WhatsApp clicks per owned keyword" becomes a query instead of a guess. It is also not
 * blocked by ad blockers, because it is our own domain.
 *
 * What it never collects: no cookies, no IP address, no user id, no free text, no raw
 * search queries. A session id lives in sessionStorage and dies with the tab. Country comes
 * from Vercel's edge header, which is country-level only. Landing class is computed here
 * from the contract, not by the browser.
 *
 * Abuse limits, in order of strength:
 *   1. a fixed event vocabulary — anything else is rejected
 *   2. labels from an allow-list — anything else is dropped, not stored
 *   3. 60 events per session, enforced by the (session_id, seq) primary key
 *   4. a per-instance token bucket on a daily-salted hash of the IP, never stored
 *   5. a 3 KB body cap and a strict shape check on every field
 */

const EVENTS = new Set([
  'page_view',
  'engaged',
  'scroll_depth',
  'whatsapp_click',
  'form_submit',
  'exit',
  'cta_click',
  'inquiry_start',
  'inquiry_complete',
  'calc_use',
  'expose',
  'phone_click',
  'email_click',
])
const LABELS = new Set([
  'hero',
  'sticky',
  'price_table',
  'faq',
  'footer',
  'nav',
  'inquiry_form',
  'contact_form',
  'lead_magnet',
  'lead_form',
  'link',
])
const CHANNELS = new Set(['organic', 'paid', 'social', 'direct', 'referral', 'llm'])
const MAX_SEQ = 60
const MAX_BODY = 3072
const BUCKET_LIMIT = 60
const SESSION_RE = /^[a-z0-9]{12,32}$/
const PATH_RE = /^\/[\w\-/.]{0,180}$/

type Bucket = { n: number; minute: number }
const buckets = new Map<string, Bucket>()

function allow(key: string): boolean {
  const minute = Math.floor(Date.now() / 60000)
  const b = buckets.get(key)
  if (!b || b.minute !== minute) {
    if (buckets.size > 5000) buckets.clear()
    buckets.set(key, { n: 1, minute })
    return true
  }
  b.n += 1
  return b.n <= BUCKET_LIMIT
}

function hashed(value: string): string {
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

function cleanPath(url: string): string {
  const key = url.length > 1 ? url.replace(/\/+$/, '') : url
  return key || '/'
}

function landingClass(path: string): string {
  // A missing or broken lock map must cost us a column, never the endpoint. This function
  // returning "unknown" is a data gap; an exception here is a 500 on every page view.
  try {
    const key = cleanPath(path)
    if (key === '/') return 'brand'
    if (!PATH_PRIMARY || !(key in PATH_PRIMARY)) return 'unowned'
    const primary = PATH_PRIMARY[key]
    if (!primary) return 'utility'
    if (/mychef/i.test(primary)) return 'brand'
    return 'owned'
  } catch {
    return 'unknown'
  }
}

function channelClass(referrer: string | null, utmSource: string | null, utmMedium: string | null): string {
  const medium = (utmMedium || '').toLowerCase()
  const source = (utmSource || '').toLowerCase()
  if (/cpc|ppc|paid|ads|paidsearch|display/.test(medium) || /cpc|ppc|paid/.test(source)) return 'paid'
  const host = (referrer || '').toLowerCase()
  if (/chatgpt|openai|perplexity|claude\.ai|gemini\.google|copilot\.microsoft|you\.com|phind|poe\.com/.test(host)) {
    return 'llm'
  }
  if (/facebook|instagram|linkedin|t\.co$|twitter|x\.com|tiktok|pinterest|whatsapp/.test(host)) return 'social'
  if (/google\.|bing\.|yahoo\.|duckduckgo|baidu/.test(host)) return 'organic'
  if (host) return 'referral'
  return 'direct'
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
  if (!dsn) return res.status(204).end()

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
  if (!url || !PATH_RE.test(url) || url.startsWith('/seo')) return res.status(400).json({ error: 'Bad url' })
  if (seq === null) return res.status(400).json({ error: 'Bad sequence' })

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
  const day = new Date().toISOString().slice(0, 10)
  if (!allow(hashed(ip + day))) return res.status(429).json({ error: 'Too many events' })

  const value = int(body.v, 86400)
  const rawLabel = str(body.l, 60)
  const label = rawLabel && LABELS.has(rawLabel) ? rawLabel : null
  const country = String(req.headers['x-vercel-ip-country'] || '').slice(0, 2).toUpperCase() || null
  const ua = String(req.headers['user-agent'] || '')
  const referrer = str(body.r, 120)
  const utmSource = str(body.us, 60)
  const utmMedium = str(body.um, 60)
  const utmCampaign = str(body.uc, 60)
  const xid = str(body.xid, 16)
  const xvRaw = str(body.xv, 1)
  const xv = xvRaw && /^[ABC]$/.test(xvRaw) ? xvRaw : null
  const ch = channelClass(referrer, utmSource, utmMedium)
  const lc = landingClass(url)
  if (!CHANNELS.has(ch)) return res.status(204).end()

  try {
    const sql = neon(dsn)
    if (seq === 0) {
      try {
        await sql`
          INSERT INTO web_sessions (session_id, started_at, landing_url, referrer_host, country, device,
                                    utm_source, utm_medium, utm_campaign, channel_class, landing_class,
                                    experiment_id, variant)
          VALUES (${session}, now(), ${url}, ${referrer}, ${country}, ${device(ua)},
                  ${utmSource}, ${utmMedium}, ${utmCampaign}, ${ch}, ${lc}, ${xid}, ${xv})
          ON CONFLICT (session_id) DO NOTHING`
      } catch {
        await sql`
          INSERT INTO web_sessions (session_id, started_at, landing_url, referrer_host, country, device,
                                    utm_source, utm_medium, utm_campaign)
          VALUES (${session}, now(), ${url}, ${referrer}, ${country}, ${device(ua)},
                  ${utmSource}, ${utmMedium}, ${utmCampaign})
          ON CONFLICT (session_id) DO NOTHING`
      }
    }
    await sql`
      INSERT INTO web_events (session_id, seq, at, event, url, value, label)
      VALUES (${session}, ${seq}, now(), ${event}, ${url}, ${value}, ${label})
      ON CONFLICT (session_id, seq) DO NOTHING`
  } catch {
    return res.status(204).end()
  }
  return res.status(204).end()
}

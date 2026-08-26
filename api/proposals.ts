import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

/**
 * Decisions on the SEO queue.
 *
 * build-proposals.py writes the candidates. This endpoint records what a human
 * did with them. It never edits a page, never touches the contract, and never
 * runs the optimizer — accepting a row is a note in seo_proposals, nothing else.
 *
 * Auth is the board password (middleware.ts covers /api/proposals). Writes use
 * DATABASE_URL, not the read-only analyst role.
 */

const STATUSES = new Set(['open', 'accepted', 'rejected', 'applied'])
const ID_RE = /^[a-z0-9_.:-]{3,160}$/
const NOTE_MAX = 240

async function ensure(sql: ReturnType<typeof neon>) {
  await sql`
    CREATE TABLE IF NOT EXISTS seo_proposals (
      id TEXT PRIMARY KEY,
      created_on DATE NOT NULL DEFAULT CURRENT_DATE,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      run_id INT,
      class TEXT NOT NULL DEFAULT 'unknown',
      url TEXT,
      keyword TEXT,
      reason TEXT,
      action TEXT,
      risk TEXT,
      autonomy TEXT,
      demand INT,
      gap NUMERIC(6,2),
      conversions INT,
      sessions INT,
      score NUMERIC(10,2),
      evidence JSONB,
      status TEXT NOT NULL DEFAULT 'open',
      decided_at TIMESTAMPTZ,
      decided_note TEXT
    )`
  await sql`CREATE INDEX IF NOT EXISTS seo_proposals_status ON seo_proposals(status, score DESC)`
}

function str(v: unknown, max: number): string | null {
  return typeof v === 'string' && v.length > 0 && v.length <= max ? v : null
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')

  const dsn = process.env.DATABASE_URL
  if (!dsn) {
    return res.status(503).json({ error: 'Queue has no database connection. Set DATABASE_URL on the project.' })
  }
  const sql = neon(dsn)

  try {
    await ensure(sql)
  } catch (e) {
    return res.status(502).json({ error: `Could not reach the proposals table: ${(e as Error).message}` })
  }

  if (req.method === 'GET') {
    const rows = await sql`
      SELECT id, class, url, keyword, reason, action, risk, autonomy, demand, gap,
             conversions, sessions, score, status, decided_at, decided_note, updated_at
      FROM seo_proposals
      ORDER BY CASE status WHEN 'open' THEN 0 WHEN 'accepted' THEN 1 ELSE 2 END,
               score DESC NULLS LAST
      LIMIT 200`
    return res.status(200).json({
      proposals: rows,
      open: rows.filter((r) => r.status === 'open').length,
    })
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}) as {
    id?: string
    status?: string
    note?: string
    class?: string
    url?: string
    keyword?: string
  }
  const id = str(body.id, 160)
  const status = str(body.status, 16)
  const note = str(body.note ?? '', NOTE_MAX)
  const cls = str(body.class, 32) || 'unknown'
  const url = str(body.url, 200)
  const keyword = str(body.keyword, 160)

  if (!id || !ID_RE.test(id)) return res.status(400).json({ error: 'Bad proposal id.' })
  if (!status || !STATUSES.has(status)) {
    return res.status(400).json({ error: 'Status must be open, accepted, rejected or applied.' })
  }

  const decidedAt = status === 'open' ? null : new Date().toISOString()
  const updated = await sql`
    INSERT INTO seo_proposals (id, class, url, keyword, status, decided_at, decided_note, updated_at)
    VALUES (${id}, ${cls}, ${url}, ${keyword}, ${status}, ${decidedAt}, ${note}, now())
    ON CONFLICT (id) DO UPDATE SET
      status = EXCLUDED.status,
      decided_at = CASE WHEN EXCLUDED.status = 'open' THEN NULL ELSE now() END,
      decided_note = EXCLUDED.decided_note,
      updated_at = now()
    RETURNING id, status, decided_at, decided_note`

  return res.status(200).json({ ok: true, proposal: updated[0] })
}

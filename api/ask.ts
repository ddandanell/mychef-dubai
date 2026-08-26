import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

/**
 * The SEO analyst. Read-only, by construction rather than by promise.
 *
 * Three things make "it cannot change anything" true rather than aspirational:
 *   1. it connects as the Postgres role `seo_readonly`, which has SELECT and nothing else —
 *      INSERT, UPDATE, DELETE, TRUNCATE and CREATE are revoked at the database
 *   2. the model never writes SQL. This file builds a fixed snapshot with fixed queries and
 *      hands the model text; there is no path from a sentence to a query
 *   3. it has no filesystem, no git, no deploy hook and no other endpoint
 *
 * Auth is the board's own password (middleware.ts covers /api/ask), so an answer costs
 * nothing to a stranger — they cannot reach it.
 */

const MAX_QUESTION = 500
const MODEL = 'claude-sonnet-5'

type Snapshot = Record<string, unknown>

async function snapshot(dsn: string): Promise<Snapshot> {
  const sql = neon(dsn)
  const [run] = await sql`SELECT id, ran_at, keywords, primaries, avg_score, primary_avg, at_10, below_5,
                                 sitemap_urls, doubles, heading_collisions
                          FROM seo_runs ORDER BY id DESC LIMIT 1`
  const [prev] = await sql`SELECT id, ran_at, avg_score, primary_avg, at_10 FROM seo_runs ORDER BY id DESC OFFSET 1 LIMIT 1`

  const top = await sql`SELECT keyword, owner_url, search_volume, gsc_impressions, gsc_clicks, gsc_position,
                               demand_share, gsc_ranking_url, score, cannibalisation, next_action
                        FROM seo_keywords WHERE run_id = ${run.id} AND gsc_impressions > 0
                        ORDER BY gsc_impressions DESC LIMIT 40`
  const wrongOwner = await sql`SELECT keyword, owner_url, gsc_ranking_url, gsc_impressions, gsc_position
                               FROM seo_keywords WHERE run_id = ${run.id} AND gsc_ranking_url IS NOT NULL
                                 AND gsc_ranking_url <> owner_url AND gsc_impressions >= 20
                               ORDER BY gsc_impressions DESC LIMIT 25`
  const noDemand = await sql`SELECT keyword, owner_url FROM seo_keywords
                             WHERE run_id = ${run.id} AND role = 'primary' AND coalesce(search_volume, 0) = 0 LIMIT 40`
  const worstPages = await sql`SELECT url, primary_keyword, primary_score, subs, subs_found, visitors_30d,
                                      gap_score, authority
                               FROM seo_pages WHERE run_id = ${run.id}
                               ORDER BY coalesce(gap_score, 0) DESC, primary_score ASC LIMIT 25`
  const traffic = await sql`SELECT url, visitors, pageviews FROM seo_traffic
                            WHERE captured_on = (SELECT max(captured_on) FROM seo_traffic)
                            ORDER BY visitors DESC LIMIT 25`
  const behaviour = await sql`SELECT url, count(DISTINCT session_id) AS sessions,
                                     count(*) FILTER (WHERE event IN ('whatsapp_click','form_submit')) AS conversions
                              FROM web_events GROUP BY url ORDER BY sessions DESC LIMIT 15`
  const health = await sql`SELECT DISTINCT ON (service) service, status, detail, last_success, error
                           FROM seo_integrations ORDER BY service, checked_at DESC`
  const trend = await sql`SELECT id, ran_at::date AS day, avg_score, primary_avg, at_10, keywords
                          FROM seo_runs ORDER BY id DESC LIMIT 8`

  return { latest_run: run, previous_run: prev, headline_keywords: top, google_ranks_another_page: wrongOwner,
           primaries_without_measured_demand: noDemand, pages_with_the_widest_gaps: worstPages,
           traffic_last_30_days: traffic, first_party_behaviour: behaviour, integration_health: health,
           score_trend_by_run: trend }
}

/**
 * A compact, readable digest of the snapshot. The DataForSEO relay rejects a very long
 * user_prompt, and a model reads prose faster than 60 KB of JSON anyway — so the numbers that
 * matter are written out as lines, and the raw JSON is kept for providers that can take it.
 */
function digest(d: Snapshot): string {
  const run = d.latest_run as Record<string, unknown>
  const prev = d.previous_run as Record<string, unknown> | undefined
  const lines: string[] = []
  const rows = (k: string) => (d[k] as Record<string, unknown>[]) || []

  lines.push(`LATEST RUN #${run?.id} (${String(run?.ran_at).slice(0, 10)}): ${run?.keywords} keywords, ${run?.primaries} primary; ` +
    `average score ${run?.avg_score}/10, primaries ${run?.primary_avg}/10, ${run?.at_10} at 10/10, ${run?.below_5} below 5/10; ` +
    `${run?.sitemap_urls} URLs in the sitemap, ${run?.doubles} duplicate assignments, ${run?.heading_collisions} heading collisions.`)
  if (prev) lines.push(`PREVIOUS RUN #${prev.id}: average ${prev.avg_score}, primaries ${prev.primary_avg}, ${prev.at_10} at 10/10.`)

  lines.push('\nSCORE TREND (newest first): ' + rows('score_trend_by_run')
    .map((r) => `#${r.id} ${String(r.day).slice(0, 10)} avg ${r.avg_score} primaries ${r.primary_avg}`).join(' | '))

  lines.push('\nWHAT GOOGLE SHOWS (top phrases by impressions — phrase | owner page | monthly UAE volume | impressions | clicks | position | share of demand):')
  rows('headline_keywords').slice(0, 30).forEach((r) => lines.push(
    `  ${r.keyword} | ${r.owner_url} | vol ${r.search_volume ?? '—'} | impr ${r.gsc_impressions} | clicks ${r.gsc_clicks} | pos ${r.gsc_position} | share ${r.demand_share ?? '—'}`))

  lines.push('\nGOOGLE RANKS A PAGE THE CONTRACT DID NOT ASSIGN (phrase | assigned | actually ranking | impressions | position):')
  rows('google_ranks_another_page').forEach((r) => lines.push(
    `  ${r.keyword} | ${r.owner_url} | ${r.gsc_ranking_url} | ${r.gsc_impressions} | ${r.gsc_position}`))

  lines.push('\nPRIMARY KEYWORDS WITH NO MEASURED UAE DEMAND: ' +
    rows('primaries_without_measured_demand').slice(0, 30).map((r) => `${r.keyword} (${r.owner_url})`).join('; '))

  lines.push('\nPAGES WITH THE WIDEST CONTENT GAPS (url | primary | primary score | subs found of total | visitors 30d | gap score | link authority):')
  rows('pages_with_the_widest_gaps').slice(0, 20).forEach((r) => lines.push(
    `  ${r.url} | ${r.primary_keyword} | ${r.primary_score}/10 | ${r.subs_found}/${r.subs} | ${r.visitors_30d ?? 0} visitors | gap ${r.gap_score} | ${r.authority}`))

  lines.push('\nTRAFFIC, LAST 30 DAYS (url | visitors | pageviews): ' +
    rows('traffic_last_30_days').slice(0, 20).map((r) => `${r.url} ${r.visitors}/${r.pageviews}`).join(' | '))

  const beh = rows('first_party_behaviour')
  lines.push('\nFIRST-PARTY BEHAVIOUR (url | sessions | conversions): ' +
    (beh.length ? beh.map((r) => `${r.url} ${r.sessions}/${r.conversions}`).join(' | ') : 'the collector is live but has recorded very little yet'))

  lines.push('\nSOURCE HEALTH: ' + rows('integration_health')
    .map((r) => `${r.service}=${r.status}${r.error ? ` (${String(r.error).slice(0, 60)})` : ''}`).join('; '))

  return lines.join('\n')
}

const SYSTEM = `You are the SEO analyst for myCHEF, a private chef and catering service in Dubai.
You are given a JSON snapshot of the site's own SEO database and you answer questions about it.

How to answer:
- Plain language. The reader runs the business; they are not an SEO specialist.
- Use the numbers in the snapshot and name them. Never invent a figure that is not there.
- If the snapshot cannot answer the question, say exactly what is missing and where it would come from.
- Explain relationships: impressions without clicks means seen but not chosen; a high position number
  means far down the results; demand_share is monthly impressions divided by monthly search volume.
- Prefer three specific observations over ten general ones. Lead with the answer, not a preamble.
- When you recommend something, say what to change and why the data supports it.

What you cannot do: you have read-only access. You cannot edit pages, keywords, settings or the
database. If asked to change something, explain what you would change and say it has to be applied
by the person running the board.`

async function askAIGateway(key: string, question: string, data: string): Promise<string> {
  const r = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: `anthropic/${MODEL}`, max_tokens: 1200,
      messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: `${question}\n\nSNAPSHOT:\n${data}` }],
    }),
  })
  if (!r.ok) throw new Error(`AI Gateway ${r.status}`)
  const j = (await r.json()) as { choices?: { message?: { content?: string } }[] }
  return j.choices?.[0]?.message?.content || ''
}

async function askAnthropic(key: string, question: string, data: string): Promise<string> {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL, max_tokens: 1200, system: SYSTEM,
      messages: [{ role: 'user', content: `${question}\n\nSNAPSHOT:\n${data}` }],
    }),
  })
  if (!r.ok) throw new Error(`Anthropic ${r.status}`)
  const j = (await r.json()) as { content?: { text?: string }[] }
  return j.content?.map((c) => c.text || '').join('') || ''
}

async function askViaDataForSEO(login: string, password: string, question: string, data: string): Promise<string> {
  // The same Claude endpoint the AI-visibility check already uses, with web search off — no new
  // credential needed, which is why the analyst works before any AI key is configured.
  const auth = Buffer.from(`${login}:${password}`).toString('base64')
  const r = await fetch('https://api.dataforseo.com/v3/ai_optimization/claude/llm_responses/live', {
    method: 'POST',
    headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([{
      user_prompt: `${question}\n\nSNAPSHOT:\n${data}`,
      model_name: MODEL, web_search: false, max_output_tokens: 1500, temperature: 0.2, system_message: SYSTEM,
    }]),
  })
  if (!r.ok) throw new Error(`DataForSEO ${r.status}`)
  const j = (await r.json()) as {
    tasks?: { status_message?: string; result?: { items?: { sections?: { text?: string }[] }[] }[] }[]
  }
  const task = j.tasks?.[0]
  const items = task?.result?.[0]?.items || []
  const text = items.flatMap((i) => (i.sections || []).map((s) => s.text || '')).join('\n').trim()
  if (!text) throw new Error(task?.status_message || 'no answer returned')
  return text
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}) as { question?: string }
  const question = (body.question || '').trim()
  if (!question) return res.status(400).json({ error: 'Ask a question first.' })
  if (question.length > MAX_QUESTION) return res.status(400).json({ error: `Keep the question under ${MAX_QUESTION} characters.` })

  const dsn = process.env.DATABASE_URL_READONLY
  if (!dsn) {
    return res.status(503).json({ error: 'The analyst has no read-only database connection. Set DATABASE_URL_READONLY on the project.' })
  }

  let data: Snapshot
  try {
    data = await snapshot(dsn)
  } catch (e) {
    return res.status(502).json({ error: `Could not read the SEO database: ${(e as Error).message}` })
  }

  const json = JSON.stringify(data)
  const brief = digest(data).slice(0, 14000)   // the relay rejects very long prompts
  const gateway = process.env.AI_GATEWAY_API_KEY
  const anthropic = process.env.ANTHROPIC_API_KEY
  const login = process.env.DATAFORSEO_LOGIN
  const password = process.env.DATAFORSEO_PASSWORD

  const attempts: string[] = []
  for (const [name, run] of [
    ['Vercel AI Gateway', gateway ? () => askAIGateway(gateway, question, json) : null],
    ['Anthropic', anthropic ? () => askAnthropic(anthropic, question, json) : null],
    ['Claude via DataForSEO', login && password ? () => askViaDataForSEO(login, password, question, brief) : null],
  ] as [string, (() => Promise<string>) | null][]) {
    if (!run) continue
    try {
      const answer = await run()
      if (answer) return res.status(200).json({ answer, provider: name, run: (data.latest_run as { id?: number })?.id })
    } catch (e) {
      attempts.push(`${name}: ${(e as Error).message}`)
    }
  }
  return res.status(502).json({
    error: attempts.length
      ? `No model answered. ${attempts.join(' · ')}`
      : 'No model provider is configured. Set AI_GATEWAY_API_KEY or ANTHROPIC_API_KEY on the project.',
  })
}

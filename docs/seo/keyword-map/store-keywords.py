#!/usr/bin/env python3
"""The archive. Every run of the keyword system, stored whole, forever.

Nothing here is a summary: each run writes its full keyword table, its page table, its report
rows, its link profiles, its content gaps, its architecture issues, its backlog, its traffic
and the keyword contract as it stood that day. Three facts are dated rather than run-scoped —
live SERP positions, AI-visibility answers and traffic — because they are captured on their own
schedule and must not be duplicated when the loop reruns on the same data.

    python3 docs/seo/keyword-map/store-keywords.py [--mode live|dist] [--skip-serps]
    python3 docs/seo/keyword-map/store-keywords.py --prune-keep 12      # trim the bulky tables

Credentials live in ~/.config/claude-seo/neon.env (mode 600, never in the repo). Bulk loads
use DATABASE_URL_UNPOOLED when it is present — pgbouncer's transaction pooling and 40k-row
inserts do not mix.

Read the latest of anything with:
  SELECT * FROM seo_keywords WHERE run_id = (SELECT max(id) FROM seo_runs);
"""
import json, os, pathlib, subprocess, sys, datetime
import psycopg2, psycopg2.extras

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
LIVE = HERE / ".live"
MODE = sys.argv[sys.argv.index("--mode") + 1] if "--mode" in sys.argv else "dist"
SKIP_SERPS = "--skip-serps" in sys.argv
PRUNE_KEEP = int(sys.argv[sys.argv.index("--prune-keep") + 1]) if "--prune-keep" in sys.argv else 0

env = {k: v.strip().strip('"').strip("'") for k, v in
       (l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/neon.env"))
        if "=" in l and not l.startswith("#"))}
DSN = env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"]

DDL = """
CREATE TABLE IF NOT EXISTS seo_runs (
  id SERIAL PRIMARY KEY, ran_at TIMESTAMPTZ NOT NULL DEFAULT now(), mode TEXT NOT NULL, git_commit TEXT,
  keywords INT, primaries INT, avg_score NUMERIC(4,2), primary_avg NUMERIC(4,2), at_10 INT, below_5 INT,
  sitemap_urls INT, pages_active INT, doubles INT, heading_collisions INT, stats JSONB
);
CREATE TABLE IF NOT EXISTS seo_keywords (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, keyword TEXT NOT NULL, owner_url TEXT NOT NULL, role TEXT,
  search_volume INT, intent TEXT, commercial_value NUMERIC(12,2), difficulty INT, current_position INT, target_position INT,
  secondary_urls TEXT[], title_cov BOOL, meta_cov BOOL, h1_cov BOOL, h2_cov BOOL, body_count INT, faq_cov BOOL, anchor_cov TEXT,
  cannibalisation TEXT, competitor_gap TEXT, serp_similarity NUMERIC(4,2), score INT, next_action TEXT, silo TEXT,
  page_visitors INT, page_pageviews INT,
  gsc_clicks INT, gsc_impressions INT, gsc_ctr NUMERIC(6,4), gsc_position NUMERIC(5,1),
  gsc_ranking_url TEXT, demand_share NUMERIC(6,3),
  PRIMARY KEY (run_id, keyword, owner_url)
);
CREATE TABLE IF NOT EXISTS seo_pages (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, silo TEXT, primary_keyword TEXT, primary_volume INT,
  primary_score INT, subs INT, subs_found INT, links_in_contextual INT, authority TEXT, gap_score INT, verdict TEXT, live_code TEXT,
  visitors_30d INT, pageviews_30d INT,
  PRIMARY KEY (run_id, url)
);
CREATE TABLE IF NOT EXISTS seo_optimizer_log (
  id SERIAL PRIMARY KEY, url TEXT, file TEXT, where_ TEXT, how TEXT, before_ TEXT, after_ TEXT, applied_at TIMESTAMPTZ,
  UNIQUE (url, where_, after_, applied_at)
);

-- the 12-column research report, one row per keyword per run
CREATE TABLE IF NOT EXISTS seo_report (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, keyword TEXT NOT NULL, volume INT, intent TEXT,
  commercial_value NUMERIC(12,2), cpc NUMERIC(8,2), difficulty INT, serp_similarity NUMERIC(4,2), serp_best_page TEXT,
  position INT, position_url TEXT, gsc_impressions INT, competitor_gap TEXT,
  entity_coverage TEXT, recommended_url TEXT, verdict TEXT, row_json JSONB,
  PRIMARY KEY (run_id, keyword)
);

-- internal-link profile per URL per run, anchors kept whole
CREATE TABLE IF NOT EXISTS seo_links (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, silo TEXT, hub TEXT, is_hub BOOL, page_type TEXT,
  importance INT, in_total INT, in_unique INT, in_contextual INT, in_contextual_unique INT, in_silo INT, in_nav INT,
  in_footer INT, in_breadcrumb INT, out_total INT, out_contextual INT, anchor_exact INT, anchor_partial INT,
  anchor_generic INT, hub_links_child BOOL, child_links_hub BOOL, status TEXT, anchors JSONB, recommend JSONB,
  PRIMARY KEY (run_id, url)
);

-- what competitors cover that we do not
CREATE TABLE IF NOT EXISTS seo_gaps (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, primary_keyword TEXT, competitors INT,
  our_words INT, competitor_words_median INT, competitors_with_price INT, competitors_with_faq_schema INT,
  gap_score INT, missing_headings JSONB, missing_questions JSONB, missing_entities JSONB, competitor_pages JSONB,
  PRIMARY KEY (run_id, url)
);

-- sitemap-as-architecture: one row per issue, plus click depth per URL
CREATE TABLE IF NOT EXISTS seo_architecture (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, kind TEXT NOT NULL, url TEXT NOT NULL, detail TEXT,
  PRIMARY KEY (run_id, kind, url)
);
CREATE TABLE IF NOT EXISTS seo_depth (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, click_depth INT,
  PRIMARY KEY (run_id, url)
);

-- phrases with demand that no page owns yet
CREATE TABLE IF NOT EXISTS seo_backlog (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, keyword TEXT NOT NULL, intent TEXT, sources TEXT,
  volume_ae INT, volume_us INT, difficulty INT, cpc NUMERIC(8,2), suggested_url TEXT, alternatives TEXT[],
  room INT, silo TEXT, already_said_on TEXT,
  PRIMARY KEY (run_id, keyword)
);

-- page-level demand: what the page's keyword set is worth
CREATE TABLE IF NOT EXISTS seo_demand (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, silo TEXT, page_type TEXT,
  primary_keyword TEXT, primary_volume INT, difficulty INT, intent TEXT, subs_volume_total INT,
  subs_with_volume INT, best_sub TEXT, best_sub_volume INT, off_intent_subs INT, off_intent_list TEXT[],
  seasonal_peak TEXT, verdict TEXT, why TEXT,
  PRIMARY KEY (run_id, url)
);

-- the contract as it stood on the day of the run
CREATE TABLE IF NOT EXISTS seo_contract (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, primary_keyword TEXT,
  subkeywords TEXT[], indexable BOOL, redirect_to TEXT, silo TEXT,
  PRIMARY KEY (run_id, url)
);

-- dated facts: captured on their own schedule, never duplicated by a rerun
CREATE TABLE IF NOT EXISTS seo_serps (
  captured_on DATE NOT NULL, keyword TEXT NOT NULL, rank INT NOT NULL, domain TEXT, url TEXT, is_ours BOOL,
  PRIMARY KEY (captured_on, keyword, rank)
);
CREATE TABLE IF NOT EXISTS seo_ai_visibility (
  captured_on DATE NOT NULL, slug TEXT NOT NULL, label TEXT, prompt TEXT, we_named BOOL, we_cited BOOL,
  providers TEXT[], cited_domains TEXT[], answer TEXT, cost NUMERIC(8,4),
  PRIMARY KEY (captured_on, slug)
);
CREATE TABLE IF NOT EXISTS seo_traffic (
  captured_on DATE NOT NULL, window_days INT NOT NULL, url TEXT NOT NULL, visitors INT, pageviews INT,
  PRIMARY KEY (captured_on, window_days, url)
);
CREATE TABLE IF NOT EXISTS seo_traffic_breakdown (
  captured_on DATE NOT NULL, window_days INT NOT NULL, dimension TEXT NOT NULL, value TEXT NOT NULL,
  visitors INT, pageviews INT,
  PRIMARY KEY (captured_on, window_days, dimension, value)
);

-- first-party behaviour, written by api/e.ts on the live site (never by this script)
CREATE TABLE IF NOT EXISTS web_sessions (
  session_id TEXT PRIMARY KEY, started_at TIMESTAMPTZ NOT NULL DEFAULT now(), landing_url TEXT,
  referrer_host TEXT, country TEXT, device TEXT, utm_source TEXT, utm_medium TEXT, utm_campaign TEXT
);
CREATE TABLE IF NOT EXISTS web_events (
  session_id TEXT NOT NULL, seq INT NOT NULL, at TIMESTAMPTZ NOT NULL DEFAULT now(),
  event TEXT NOT NULL, url TEXT NOT NULL, value INT, label TEXT,
  PRIMARY KEY (session_id, seq)
);
CREATE INDEX IF NOT EXISTS web_events_url ON web_events(url);
CREATE INDEX IF NOT EXISTS web_events_event ON web_events(event);
CREATE INDEX IF NOT EXISTS web_events_at ON web_events(at);

CREATE INDEX IF NOT EXISTS seo_keywords_owner ON seo_keywords(owner_url);
CREATE INDEX IF NOT EXISTS seo_keywords_kw ON seo_keywords(keyword);
CREATE INDEX IF NOT EXISTS seo_report_kw ON seo_report(keyword);
CREATE INDEX IF NOT EXISTS seo_serps_kw ON seo_serps(keyword);
CREATE INDEX IF NOT EXISTS seo_traffic_url ON seo_traffic(url);
CREATE INDEX IF NOT EXISTS seo_backlog_kw ON seo_backlog(keyword);
"""
try:
    sys.path.insert(0, str(HERE))
    from rollup_daily import DDL as ROLLUP_DDL
    DDL = DDL + ROLLUP_DDL
except ImportError:
    pass

# older databases predate some columns — add what is missing rather than failing
ADD_COLUMNS = [("seo_keywords", "page_visitors", "INT"), ("seo_keywords", "page_pageviews", "INT"),
               ("seo_pages", "visitors_30d", "INT"), ("seo_pages", "pageviews_30d", "INT"),
               ("seo_keywords", "gsc_clicks", "INT"), ("seo_keywords", "gsc_impressions", "INT"),
               ("seo_keywords", "gsc_ctr", "NUMERIC(6,4)"), ("seo_keywords", "gsc_position", "NUMERIC(5,1)"),
               ("seo_keywords", "gsc_ranking_url", "TEXT"), ("seo_keywords", "demand_share", "NUMERIC(6,3)")]


def load(name):
    f = HERE / name
    return json.loads(f.read_text()) if f.exists() else None


def jd(v):
    return psycopg2.extras.Json(v) if v is not None else None


kw = load("keywords.json"); mp = load("data.json"); links = load("links.json"); gaps = load("gaps.json")
dem = load("demand.json"); rep = load("report.json"); arch = load("architecture.json"); back = load("backlog.json")
ai = load("ai-visibility.json")
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())
traffic_f = LIVE / "research/vercel/analytics.json"
traffic = json.loads(traffic_f.read_text()) if traffic_f.exists() else None
serps_f = LIVE / "research/dataforseo/serps.jsonl"

commit = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=ROOT, capture_output=True, text=True).stdout.strip()
conn = psycopg2.connect(DSN); conn.autocommit = False; cur = conn.cursor()
cur.execute(DDL)
for tbl, col, typ in ADD_COLUMNS:
    cur.execute(f"ALTER TABLE {tbl} ADD COLUMN IF NOT EXISTS {col} {typ}")

if PRUNE_KEEP:
    cur.execute("SELECT id FROM seo_runs ORDER BY id DESC OFFSET %s", (PRUNE_KEEP,))
    old = [r[0] for r in cur.fetchall()]
    if old:
        for t in ("seo_backlog", "seo_report", "seo_gaps", "seo_links", "seo_architecture", "seo_depth"):
            cur.execute(f"DELETE FROM {t} WHERE run_id = ANY(%s)", (old,))
        conn.commit()
        print(f"pruned the bulky tables for {len(old)} run(s) older than the last {PRUNE_KEEP}; runs, keywords and pages kept")
    else:
        print(f"nothing to prune — {PRUNE_KEEP} or fewer runs stored")
    conn.close(); sys.exit(0)

S = kw["stats"] if kw else {}; M = mp["stats"] if mp else {}
cur.execute("""INSERT INTO seo_runs (mode, git_commit, keywords, primaries, avg_score, primary_avg, at_10, below_5,
               sitemap_urls, pages_active, doubles, heading_collisions, stats)
               VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id""",
            (MODE, commit, S.get("keywords"), S.get("primaries"), S.get("avg_score"), S.get("primary_avg"),
             S.get("at_10"), S.get("below_5"), S.get("sitemap_urls"), M.get("pages_active"), M.get("doubles"),
             M.get("heading_collisions"),
             json.dumps({"keywords": S, "map": M, "links": (links or {}).get("stats"), "gaps": (gaps or {}).get("stats"),
                         "architecture": (arch or {}).get("stats"), "backlog": (back or {}).get("stats"),
                         "report": (rep or {}).get("stats"), "traffic": (traffic or {}).get("totals")})))
run_id = cur.fetchone()[0]
wrote = {}


def bulk(table, cols, rows, conflict="DO NOTHING"):
    """A bad value in one column of one row used to surface as a bare "can't adapt type 'dict'"
    with no table name; name the table and the column so the fix takes seconds, not an hour."""
    if not rows: return
    try:
        psycopg2.extras.execute_values(
            cur, f"INSERT INTO {table} ({', '.join(cols)}) VALUES %s ON CONFLICT {conflict}", rows, page_size=500)
    except psycopg2.ProgrammingError as e:
        def has_dict(v):
            return isinstance(v, dict) or (isinstance(v, (list, tuple)) and any(has_dict(x) for x in v))
        bad = {cols[i] for row in rows[:2000] for i, v in enumerate(row) if has_dict(v)}
        raise SystemExit(f"{table}: {e}\n  unadapted dict in column(s): {sorted(bad) or 'not found in the first 2000 rows'}")
    wrote[table] = wrote.get(table, 0) + len(rows)


# ---- the keyword file ---------------------------------------------------------------------------
if kw:
    bulk("seo_keywords",
         ["run_id", "keyword", "owner_url", "role", "search_volume", "intent", "commercial_value", "difficulty",
          "current_position", "target_position", "secondary_urls", "title_cov", "meta_cov", "h1_cov", "h2_cov",
          "body_count", "faq_cov", "anchor_cov", "cannibalisation", "competitor_gap", "serp_similarity", "score",
          "next_action", "silo", "page_visitors", "page_pageviews",
          "gsc_clicks", "gsc_impressions", "gsc_ctr", "gsc_position", "gsc_ranking_url", "demand_share"],
         [(run_id, r["keyword"] or "(untargeted)", r["primary_owning_url"], r["role"], r["search_volume"], r["intent"],
           r["commercial_value"], r["difficulty"], r["current_position"], r["target_position"], r["secondary_supporting_urls"],
           r["title_coverage"], r["meta_coverage"], r["h1_coverage"], r["h2_coverage"], r["body_coverage"], r["faq_coverage"],
           r["internal_anchor_coverage"], r["cannibalisation_risk"], r["competitor_gap"], r["serp_similarity"],
           r["optimization_score"], r["next_action"], r["silo"], r.get("page_visitors"), r.get("page_pageviews"),
           r.get("gsc_clicks"), r.get("gsc_impressions"), r.get("gsc_ctr"), r.get("gsc_position"),
           r.get("gsc_ranking_url"), r.get("demand_share"))
          for r in kw["rows"]])

# ---- the page table -----------------------------------------------------------------------------
if mp:
    lk = {p["url"]: p for p in (links or {}).get("profiles", [])}
    gp = {g["url"]: g for g in (gaps or {}).get("pages", [])}
    dv = {p["url"]: p for p in (dem or {}).get("pages", [])}
    tr = (traffic or {}).get("pages", {})
    rows = []
    for silo, prs in mp["silos"].items():
        for r in prs:
            if r.get("retired") or r.get("noindex"): continue
            ks = r.get("keyword_score") or {}
            t = tr.get(r["url"].rstrip("/") or "/") or {}
            rows.append((run_id, r["url"], r.get("silo"), r.get("primary"), r.get("primary_volume"), ks.get("primary"),
                         len(r.get("subs", [])), ks.get("subs_present"), (lk.get(r["url"]) or {}).get("in_contextual_unique"),
                         (lk.get(r["url"]) or {}).get("status"), (gp.get(r["url"]) or {}).get("gap_score"),
                         (dv.get(r["url"]) or {}).get("verdict"), r.get("live_code"), t.get("visitors"), t.get("pageviews")))
    bulk("seo_pages", ["run_id", "url", "silo", "primary_keyword", "primary_volume", "primary_score", "subs", "subs_found",
                       "links_in_contextual", "authority", "gap_score", "verdict", "live_code", "visitors_30d", "pageviews_30d"], rows)

# ---- the research report ------------------------------------------------------------------------
if rep:
    bulk("seo_report",
         ["run_id", "keyword", "volume", "intent", "commercial_value", "cpc", "difficulty", "serp_similarity",
          "serp_best_page", "position", "position_url", "gsc_impressions", "competitor_gap",
          "entity_coverage", "recommended_url", "verdict", "row_json"],
         [(run_id, r["kw"], r.get("volume"), r.get("intent"), r.get("commercial_value"), r.get("cpc"), r.get("kd"),
           r.get("serp_similarity"), r.get("serp_best_page"),
           r.get("position") if isinstance(r.get("position"), int) else None,
           r.get("position_url"), r.get("gsc_impressions"), r.get("competitor_gap"),
           r.get("entity_coverage"), r.get("recommended") or r.get("recommended_page"),
           r.get("action") or r.get("verdict"), jd(r))
          for r in {x["kw"]: x for x in rep["rows"]}.values()])

# ---- internal links -----------------------------------------------------------------------------
if links:
    bulk("seo_links",
         ["run_id", "url", "silo", "hub", "is_hub", "page_type", "importance", "in_total", "in_unique", "in_contextual",
          "in_contextual_unique", "in_silo", "in_nav", "in_footer", "in_breadcrumb", "out_total", "out_contextual",
          "anchor_exact", "anchor_partial", "anchor_generic", "hub_links_child", "child_links_hub", "status", "anchors", "recommend"],
         [(run_id, p["url"], p.get("silo"), p.get("hub"), p.get("is_hub"), p.get("type"), p.get("importance"),
           p.get("in_total"), p.get("in_unique"), p.get("in_contextual"), p.get("in_contextual_unique"), p.get("in_silo"),
           p.get("in_nav"), p.get("in_footer"), p.get("in_breadcrumb"), p.get("out_total"), p.get("out_contextual"),
           p.get("anchor_exact"), p.get("anchor_partial"), p.get("anchor_generic"), p.get("hub_links_child"),
           p.get("child_links_hub"), p.get("status"), jd(p.get("anchors")),
           jd({"same_silo": p.get("recommend_same_silo"), "strong": p.get("recommend_strong"), "linking_pages": p.get("linking_pages")}))
          for p in links["profiles"]])

# ---- competitor gaps ----------------------------------------------------------------------------
if gaps:
    bulk("seo_gaps",
         ["run_id", "url", "primary_keyword", "competitors", "our_words", "competitor_words_median",
          "competitors_with_price", "competitors_with_faq_schema", "gap_score", "missing_headings",
          "missing_questions", "missing_entities", "competitor_pages"],
         [(run_id, g["url"], g.get("primary"),
           len(g["competitors"]) if isinstance(g.get("competitors"), list) else g.get("competitors"),
           g.get("our_words"), g.get("competitor_words_median"),
           g.get("competitors_with_price"), g.get("competitors_with_faq_schema"), g.get("gap_score"),
           jd(g.get("missing_headings")), jd(g.get("missing_questions")), jd(g.get("missing_entities")),
           jd(g.get("competitors") if isinstance(g.get("competitors"), list) else None))
          for g in gaps["pages"]])

# ---- architecture -------------------------------------------------------------------------------
if arch:
    seen = set(); rows = []
    for i in arch.get("issues", []):
        key = (i.get("kind"), i.get("url"))
        if key in seen or not key[1]: continue
        seen.add(key)
        rows.append((run_id, i.get("kind"), i.get("url"),
                     json.dumps({k: v for k, v in i.items() if k not in ("kind", "url")}, ensure_ascii=False)[:500]))
    bulk("seo_architecture", ["run_id", "kind", "url", "detail"], rows)
    depth = arch.get("depth") or {}
    bulk("seo_depth", ["run_id", "url", "click_depth"], [(run_id, u, d) for u, d in depth.items() if isinstance(d, int)])

# ---- backlog ------------------------------------------------------------------------------------
if back:
    bulk("seo_backlog",
         ["run_id", "keyword", "intent", "sources", "volume_ae", "volume_us", "difficulty", "cpc", "suggested_url",
          "alternatives", "room", "silo", "already_said_on"],
         [(run_id, r["kw"], r.get("intent"),
           " ".join(r["sources"]) if isinstance(r.get("sources"), list) else r.get("sources"),
           r.get("vol_ae"), r.get("vol_us"), r.get("kd"), r.get("cpc"), r.get("suggested"),
           r.get("alternatives") if isinstance(r.get("alternatives"), list) else None, r.get("room"), r.get("silo"),
           r.get("already_said_on") if isinstance(r.get("already_said_on"), str)
           else (json.dumps(r.get("already_said_on"), ensure_ascii=False)[:300] if r.get("already_said_on") else None))
          for r in {x["kw"]: x for x in back["rows"]}.values()])

# ---- page demand --------------------------------------------------------------------------------
if dem:
    bulk("seo_demand",
         ["run_id", "url", "silo", "page_type", "primary_keyword", "primary_volume", "difficulty", "intent",
          "subs_volume_total", "subs_with_volume", "best_sub", "best_sub_volume", "off_intent_subs",
          "off_intent_list", "seasonal_peak", "verdict", "why"],
         [(run_id, p["url"], p.get("silo"), p.get("type"), p.get("primary"), p.get("primary_volume"), p.get("kd"),
           p.get("intent"), p.get("subs_volume_total"), p.get("subs_with_volume"), p.get("best_sub"),
           p.get("best_sub_volume"),
           len(p["off_intent_subs"]) if isinstance(p.get("off_intent_subs"), list) else p.get("off_intent_subs"),
           p.get("off_intent_subs") if isinstance(p.get("off_intent_subs"), list) else None,
           p.get("seasonal_peak"), p.get("verdict"), p.get("why"))
          for p in dem["pages"]])

# ---- the contract, as it stood ------------------------------------------------------------------
bulk("seo_contract", ["run_id", "url", "primary_keyword", "subkeywords", "indexable", "redirect_to", "silo"],
     [(run_id, u, ((p.get("intent_owner") or {}).get("primary_keyword")),
       ((p.get("intent_owner") or {}).get("subkeywords") or []),
       ((p.get("indexation") or {}).get("robots") or {}).get("index", True),
       (p.get("indexation") or {}).get("redirect_to"), p.get("silo"))
      for u, p in contract["pages"].items()])

# ---- optimizer changes (not run-scoped: the full history of every edit) --------------------------
logf = LIVE / "optimizer-log.jsonl"
if logf.exists():
    recs = []
    for line in logf.read_text().splitlines():
        try: d = json.loads(line)
        except Exception: continue
        if not d.get("applied"): continue
        for c in d["changes"]:
            recs.append((d["url"], d.get("file"), c["where"], c["how"], c.get("before"), c.get("after"), d.get("at")))
    bulk("seo_optimizer_log", ["url", "file", "where_", "how", "before_", "after_", "applied_at"], recs)

# ---- dated facts: traffic -------------------------------------------------------------------------
if traffic:
    day = traffic.get("until") or datetime.date.today().isoformat()
    win = traffic.get("window_days") or 30
    bulk("seo_traffic", ["captured_on", "window_days", "url", "visitors", "pageviews"],
         [(day, win, u, v.get("visitors"), v.get("pageviews")) for u, v in traffic["pages"].items()],
         conflict="(captured_on, window_days, url) DO UPDATE SET visitors = EXCLUDED.visitors, pageviews = EXCLUDED.pageviews")
    br = []
    for dim, key in (("referrer", "referrers"), ("country", "countries"), ("device", "devices")):
        for row in traffic.get(key, []):
            val = row.get("host") or row.get("country") or row.get("device") or "(none)"
            br.append((day, win, dim, val, row.get("visitors"), row.get("pageviews")))
    bulk("seo_traffic_breakdown", ["captured_on", "window_days", "dimension", "value", "visitors", "pageviews"], br,
         conflict="(captured_on, window_days, dimension, value) DO UPDATE SET visitors = EXCLUDED.visitors, pageviews = EXCLUDED.pageviews")

# ---- dated facts: AI visibility --------------------------------------------------------------------
if ai:
    day = (ai.get("generated") or "")[:10] or datetime.date.today().isoformat()
    bulk("seo_ai_visibility",
         ["captured_on", "slug", "label", "prompt", "we_named", "we_cited", "providers", "cited_domains", "answer", "cost"],
         [(day, r["slug"], r.get("label"), r.get("prompt"), r.get("we_named"), r.get("we_cited"),
           r.get("providers") if isinstance(r.get("providers"), list) else None,
           [d[0] if isinstance(d, (list, tuple)) else d for d in (r.get("cited_domains") or [])],
           r.get("answer"), r.get("cost")) for r in ai["rows"]])

# ---- dated facts: live SERPs -----------------------------------------------------------------------
if serps_f.exists() and not SKIP_SERPS:
    day = datetime.date.fromtimestamp(serps_f.stat().st_mtime).isoformat()
    cur.execute("SELECT count(*) FROM seo_serps WHERE captured_on = %s", (day,))
    if cur.fetchone()[0]:
        print(f"  SERPs for {day} already stored — skipping")
    else:
        seen, rows = set(), []
        for line in serps_f.read_text().splitlines():
            try: d = json.loads(line)
            except Exception: continue
            for i, it in enumerate(d.get("items") or [], start=1):
                if (d["kw"], i) in seen: continue
                seen.add((d["kw"], i))
                dom = it.get("domain") or ""
                rows.append((day, d["kw"], i, dom, it.get("url"), "mychef.ae" in dom))
        bulk("seo_serps", ["captured_on", "keyword", "rank", "domain", "url", "is_ours"], rows)

conn.commit()

cur.execute("SELECT count(*) FROM seo_runs"); runs = cur.fetchone()[0]
sizes = []
for t in ("seo_keywords", "seo_pages", "seo_report", "seo_links", "seo_gaps", "seo_architecture", "seo_depth",
          "seo_backlog", "seo_demand", "seo_contract", "seo_serps", "seo_ai_visibility", "seo_traffic",
          "seo_traffic_breakdown", "seo_optimizer_log"):
    cur.execute(f"SELECT count(*) FROM {t}"); sizes.append((t, cur.fetchone()[0]))
cur.execute("SELECT pg_size_pretty(pg_database_size(current_database()))"); dbsize = cur.fetchone()[0]

print(f"stored run {run_id} ({MODE}, {commit}) — {runs} runs archived, database {dbsize}")
print("  this run wrote: " + " · ".join(f"{t.replace('seo_', '')} {n}" for t, n in sorted(wrote.items(), key=lambda kv: -kv[1])))
print("  archive totals: " + " · ".join(f"{t.replace('seo_', '')} {n}" for t, n in sizes))
conn.close()

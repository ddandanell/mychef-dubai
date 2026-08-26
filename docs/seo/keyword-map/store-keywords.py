#!/usr/bin/env python3
"""Durable store for the keyword system — Neon Postgres (credentials in ~/.config/claude-seo/neon.env, never in the repo).

Tables (created on first run):
  seo_runs           one row per loop run: when, mode (live/dist), git commit, headline stats
  seo_keywords       the keyword file, one row per (run, keyword, owner url): every field of keywords.json
  seo_pages          one row per (run, url): primary score, subs found, links in, gap score, verdict
  seo_optimizer_log  every optimizer change (url, where, how, before, after, at)

    python3 docs/seo/keyword-map/store-keywords.py [--mode live|dist]
Latest-run views make the /seo pages and any future dashboard trivially queryable:
  SELECT * FROM seo_keywords WHERE run_id = (SELECT max(id) FROM seo_runs);
"""
import json, os, pathlib, subprocess, sys, datetime
import psycopg2, psycopg2.extras

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
env = {k: v.strip().strip('"').strip("'") for k, v in (l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/neon.env")) if "=" in l and not l.startswith("#"))}
MODE = sys.argv[sys.argv.index("--mode") + 1] if "--mode" in sys.argv else "dist"

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
  PRIMARY KEY (run_id, keyword, owner_url)
);
CREATE TABLE IF NOT EXISTS seo_pages (
  run_id INT REFERENCES seo_runs(id) ON DELETE CASCADE, url TEXT NOT NULL, silo TEXT, primary_keyword TEXT, primary_volume INT,
  primary_score INT, subs INT, subs_found INT, links_in_contextual INT, authority TEXT, gap_score INT, verdict TEXT, live_code TEXT,
  PRIMARY KEY (run_id, url)
);
CREATE TABLE IF NOT EXISTS seo_optimizer_log (
  id SERIAL PRIMARY KEY, url TEXT, file TEXT, where_ TEXT, how TEXT, before_ TEXT, after_ TEXT, applied_at TIMESTAMPTZ, UNIQUE (url, where_, after_, applied_at)
);
CREATE INDEX IF NOT EXISTS seo_keywords_owner ON seo_keywords(owner_url);
CREATE INDEX IF NOT EXISTS seo_keywords_kw ON seo_keywords(keyword);
"""

def load(name):
    f = HERE / name
    return json.loads(f.read_text()) if f.exists() else None

kw = load("keywords.json"); mp = load("data.json"); links = load("links.json"); gaps = load("gaps.json"); dem = load("demand.json")
commit = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=ROOT, capture_output=True, text=True).stdout.strip()
conn = psycopg2.connect(env["DATABASE_URL"]); conn.autocommit = False; cur = conn.cursor()
cur.execute(DDL)
S = kw["stats"] if kw else {}; M = mp["stats"] if mp else {}
cur.execute("INSERT INTO seo_runs (mode, git_commit, keywords, primaries, avg_score, primary_avg, at_10, below_5, sitemap_urls, pages_active, doubles, heading_collisions, stats) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id",
            (MODE, commit, S.get("keywords"), S.get("primaries"), S.get("avg_score"), S.get("primary_avg"), S.get("at_10"), S.get("below_5"), S.get("sitemap_urls"), M.get("pages_active"), M.get("doubles"), M.get("heading_collisions"), json.dumps({"keywords": S, "map": M})))
run_id = cur.fetchone()[0]
if kw:
    psycopg2.extras.execute_values(cur, """INSERT INTO seo_keywords (run_id, keyword, owner_url, role, search_volume, intent, commercial_value, difficulty, current_position, target_position, secondary_urls,
        title_cov, meta_cov, h1_cov, h2_cov, body_count, faq_cov, anchor_cov, cannibalisation, competitor_gap, serp_similarity, score, next_action, silo) VALUES %s ON CONFLICT DO NOTHING""",
        [(run_id, r["keyword"] or "(untargeted)", r["primary_owning_url"], r["role"], r["search_volume"], r["intent"], r["commercial_value"], r["difficulty"], r["current_position"], r["target_position"], r["secondary_supporting_urls"],
          r["title_coverage"], r["meta_coverage"], r["h1_coverage"], r["h2_coverage"], r["body_coverage"], r["faq_coverage"], r["internal_anchor_coverage"], r["cannibalisation_risk"], r["competitor_gap"], r["serp_similarity"], r["optimization_score"], r["next_action"], r["silo"]) for r in kw["rows"]])
if mp:
    lk = {p["url"]: p for p in (links or {}).get("profiles", [])}; gp = {g["url"]: g for g in (gaps or {}).get("pages", [])}; dv = {p["url"]: p for p in (dem or {}).get("pages", [])}
    rows = []
    for silo, prs in mp["silos"].items():
        for r in prs:
            if r.get("retired") or r.get("noindex"): continue
            ks = r.get("keyword_score") or {}
            rows.append((run_id, r["url"], r.get("silo"), r.get("primary"), r.get("primary_volume"), ks.get("primary"), len(r.get("subs", [])), ks.get("subs_present"),
                         (lk.get(r["url"]) or {}).get("in_contextual_unique"), (lk.get(r["url"]) or {}).get("status"), (gp.get(r["url"]) or {}).get("gap_score"), (dv.get(r["url"]) or {}).get("verdict"), r.get("live_code")))
    psycopg2.extras.execute_values(cur, "INSERT INTO seo_pages (run_id, url, silo, primary_keyword, primary_volume, primary_score, subs, subs_found, links_in_contextual, authority, gap_score, verdict, live_code) VALUES %s ON CONFLICT DO NOTHING", rows)
logf = HERE / ".live/optimizer-log.jsonl"
if logf.exists():
    recs = []
    for line in logf.read_text().splitlines():
        try: d = json.loads(line)
        except Exception: continue
        if not d.get("applied"): continue
        for c in d["changes"]:
            recs.append((d["url"], d.get("file"), c["where"], c["how"], c.get("before"), c.get("after"), d.get("at")))
    psycopg2.extras.execute_values(cur, "INSERT INTO seo_optimizer_log (url, file, where_, how, before_, after_, applied_at) VALUES %s ON CONFLICT DO NOTHING", recs)
conn.commit()
cur.execute("SELECT count(*) FROM seo_keywords WHERE run_id=%s", (run_id,)); nk = cur.fetchone()[0]
cur.execute("SELECT count(*) FROM seo_pages WHERE run_id=%s", (run_id,)); np_ = cur.fetchone()[0]
cur.execute("SELECT count(*) FROM seo_optimizer_log"); nl = cur.fetchone()[0]
print(f"stored run {run_id} ({MODE}, {commit}): {nk} keyword rows, {np_} page rows, optimizer log {nl} rows total")
conn.close()

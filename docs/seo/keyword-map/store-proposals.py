#!/usr/bin/env python3
"""Archive the living queue without reopening accepted or rejected rows.

Separated from store-keywords.py so a missing proposals.json cannot break the
run archive. Decisions live in seo_proposals and survive the next loop.

    python3 docs/seo/keyword-map/store-proposals.py
"""
import json, os, pathlib, sys
import psycopg2, psycopg2.extras

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE / "proposals.json"

DDL = """
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
);
CREATE INDEX IF NOT EXISTS seo_proposals_status ON seo_proposals(status, score DESC);
"""


def main():
    if not SRC.exists():
        print("no proposals.json — run build-proposals.py first")
        return 0
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if not os.path.exists(envf):
        print("no database credentials — queue stays local")
        return 0
    env = {k: v.strip().strip('"').strip("'") for k, v in
           (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
    data = json.loads(SRC.read_text(encoding="utf-8"))
    items = data.get("all") or []
    if not items:
        print("queue empty — nothing to archive")
        return 0
    try:
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
    except Exception as ex:  # noqa: BLE001
        print(f"database unreachable ({str(ex)[:80]}) — queue stays local")
        return 0
    cur = conn.cursor()
    cur.execute(DDL)
    run_id = None
    try:
        cur.execute("SELECT max(id) FROM seo_runs")
        run_id = cur.fetchone()[0]
    except Exception:
        pass
    rows = []
    for p in items:
        if not p.get("id"):
            continue
        rows.append((p["id"], run_id, p.get("class") or "unknown", p.get("url"), p.get("keyword"),
                     p.get("reason"), p.get("action"), p.get("risk"), p.get("autonomy"),
                     p.get("demand"), p.get("gap"), p.get("conversions"), p.get("sessions"),
                     p.get("score"), psycopg2.extras.Json(p.get("evidence"))))
    psycopg2.extras.execute_values(
        cur,
        """INSERT INTO seo_proposals
           (id, run_id, class, url, keyword, reason, action, risk, autonomy,
            demand, gap, conversions, sessions, score, evidence)
           VALUES %s
           ON CONFLICT (id) DO UPDATE SET
             run_id = EXCLUDED.run_id, class = EXCLUDED.class, url = EXCLUDED.url,
             keyword = EXCLUDED.keyword, reason = EXCLUDED.reason, action = EXCLUDED.action,
             risk = EXCLUDED.risk, autonomy = EXCLUDED.autonomy, demand = EXCLUDED.demand,
             gap = EXCLUDED.gap, conversions = EXCLUDED.conversions, sessions = EXCLUDED.sessions,
             score = EXCLUDED.score, evidence = EXCLUDED.evidence, updated_at = now()
           WHERE seo_proposals.status = 'open'""",
        rows, page_size=100)
    conn.commit()
    cur.execute("SELECT status, count(*) FROM seo_proposals GROUP BY status ORDER BY 1")
    summary = " · ".join(f"{s} {n}" for s, n in cur.fetchall())
    conn.close()
    print(f"archived {len(rows)} proposal(s) from this run — table now {summary}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

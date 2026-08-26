#!/usr/bin/env python3
"""Control — is the system alive, and is a keyword actually working?

Every other board page describes the site. This one describes the loop and the state of each
keyword against the only definition that matters:

  LOCKED   the contract assigns the phrase to a URL
  PLACED   the built HTML of that URL really says it (title and H1 for a primary)
  PROVEN   Search Console shows that URL earning impressions for it

A keyword is not "done" at LOCKED, and coverage percentages hide that. The counts here are the
honest version: how many of the locked phrases have been proven, and how many are locked but
have never been seen by Google.

    python3 docs/seo/keyword-map/build-control.py

Writes control.json next to the other board data. Never fails a run.
"""
from __future__ import annotations

import datetime, json, os, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
OUT = HERE / "control.json"
STALE_HOURS = 36


def connect():
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if not os.path.exists(envf):
        return None
    try:
        import psycopg2
    except ImportError:
        return None
    env = {k: v.strip().strip('"').strip("'") for k, v in
           (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
    try:
        return psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"], connect_timeout=15)
    except Exception:  # noqa: BLE001
        return None


def main():
    conn = connect()
    if conn is None:
        print("control: database unreachable — keeping the previous control.json")
        return 0

    import heartbeat
    cur = conn.cursor()
    beat = heartbeat.latest() or {}

    # ---- lock / place / prove ---------------------------------------------------------------
    cur.execute("SELECT max(id) FROM seo_runs")
    run_id = (cur.fetchone() or [None])[0]
    counts = {"locked": 0, "placed": 0, "proven": 0, "locked_unproven": 0,
              "primaries_locked": 0, "primaries_placed": 0, "primaries_proven": 0}
    if run_id:
        cur.execute("""
            SELECT count(*)                                                        AS locked,
                   count(*) FILTER (WHERE (role = 'primary' AND title_cov AND h1_cov)
                                       OR (role <> 'primary' AND coalesce(body_count, 0) > 0))  AS placed,
                   count(*) FILTER (WHERE coalesce(gsc_impressions, 0) > 0)        AS proven,
                   count(*) FILTER (WHERE role = 'primary')                        AS p_locked,
                   count(*) FILTER (WHERE role = 'primary' AND title_cov AND h1_cov) AS p_placed,
                   count(*) FILTER (WHERE role = 'primary' AND coalesce(gsc_impressions, 0) > 0) AS p_proven
            FROM seo_keywords WHERE run_id = %s AND keyword <> '(untargeted)'""", (run_id,))
        locked, placed, proven, p_locked, p_placed, p_proven = cur.fetchone()
        counts = {"locked": locked, "placed": placed, "proven": proven,
                  "locked_unproven": locked - proven, "primaries_locked": p_locked,
                  "primaries_placed": p_placed, "primaries_proven": p_proven}

    # ---- sources, from the last health check ------------------------------------------------
    cur.execute("""SELECT DISTINCT ON (service) service, status, detail, last_success, error, checked_at
                   FROM seo_integrations ORDER BY service, checked_at DESC""")
    sources = [{"service": s, "status": st, "detail": d,
                "last_success": ls.isoformat(timespec="minutes") if ls else None,
                "error": e, "checked_at": ca.isoformat(timespec="minutes") if ca else None}
               for s, st, d, ls, e, ca in cur.fetchall()]

    # ---- the queue ---------------------------------------------------------------------------
    cur.execute("""SELECT coalesce(type, class), status, count(*) FROM seo_proposals
                   GROUP BY 1, 2 ORDER BY 3 DESC""")
    queue = [{"type": t, "status": s, "count": n} for t, s, n in cur.fetchall()]
    cur.execute("""SELECT id, coalesce(type, class) AS type, url, keyword, reason, risk,
                          coalesce(auto_eligible, false), status
                   FROM seo_proposals WHERE status = 'open'
                   ORDER BY coalesce(impact, 0) DESC, created_at DESC LIMIT 5""")
    top5 = [{"id": str(i), "type": t, "url": u, "keyword": k, "reason": r, "risk": rk,
             "auto_eligible": ae, "status": st} for i, t, u, k, r, rk, ae, st in cur.fetchall()]

    # ---- experiments --------------------------------------------------------------------------
    cur.execute("""SELECT verdict, count(*) FROM seo_experiments GROUP BY 1""")
    verdicts = {v: n for v, n in cur.fetchall()}
    cur.execute("""SELECT batch_id, url, keywords, applied_at, window_days, verdict
                   FROM seo_experiments WHERE closed_at IS NULL
                   ORDER BY applied_at DESC LIMIT 10""")
    open_experiments = [{"batch_id": b, "url": u, "keywords": list(k or []),
                         "applied_at": a.isoformat(timespec="minutes") if a else None,
                         "window_days": w, "verdict": v} for b, u, k, a, w, v in cur.fetchall()]

    # ---- what the agent changed most recently --------------------------------------------------
    cur.execute("""SELECT url, where_, how, after_, applied_at FROM seo_optimizer_log
                   ORDER BY applied_at DESC NULLS LAST, id DESC LIMIT 20""")
    actions = [{"url": u, "where": w, "how": h, "after": (a or "")[:200],
                "at": t.isoformat(timespec="minutes") if t else None} for u, w, h, a, t in cur.fetchall()]

    conn.close()

    age = beat.get("age_hours")
    banner = None
    if not beat:
        banner = "No heartbeat has ever been recorded — the loop has not reported in."
    elif age is not None and age > STALE_HOURS:
        banner = f"The last run was {age:.0f} hours ago. Anything on this board older than that is stale."
    elif beat.get("gates_pass") is False:
        banner = "The last run failed its gates. Nothing should be pushed until that is understood."
    stale_sources = [s["service"] for s in sources if s["status"] in ("stale", "error", "not connected")]
    if banner is None and stale_sources:
        banner = "Not feeding: " + ", ".join(stale_sources[:4])

    data = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "run_id": run_id,
        "banner": banner,
        "heartbeat": beat,
        "counts": counts,
        "sources": sources,
        "queue": queue,
        "top5": top5,
        "experiments": {"verdicts": verdicts, "open": open_experiments},
        "actions": actions,
        "tiles": [
            {"value": str(counts["locked"]), "label": "Locked in the contract"},
            {"value": str(counts["placed"]), "label": "Placed in the built HTML"},
            {"value": str(counts["proven"]), "label": "Proven in Search Console"},
            {"value": str(counts["locked_unproven"]), "label": "Locked but never seen"},
            {"value": f"{age:.0f}h" if age is not None else "—", "label": "Since the last run"},
            {"value": str(sum(q["count"] for q in queue if q["status"] == "open")), "label": "Proposals waiting"},
        ],
    }
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
    print(f"control.json — {counts['locked']} locked · {counts['placed']} placed · {counts['proven']} proven · "
          f"last run {age if age is not None else '—'}h ago" + (f" · {banner}" if banner else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())

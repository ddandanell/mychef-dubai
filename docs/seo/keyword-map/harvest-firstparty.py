#!/usr/bin/env python3
"""First-party behaviour → the board's engagement and conversion columns.

Reads what api/e.ts wrote on the live site and turns it into per-URL numbers the keyword
file can carry: how long people stay, whether they bounce, how far they scroll, and how many
of them click WhatsApp or send a form. Because this lives in the same database as
seo_keywords, the board can finally answer the question no third-party tool can —
which owned keyword produced a conversion.

Definitions, so the numbers mean one thing:
  session          one tab, one visit; the id dies when the tab closes
  bounce           a session with a page_view and no `engaged` event (15s of visible time)
  seconds on page  the `exit` event's value, median rather than mean — one idle tab
                   left open overnight should not move the number
  conversion       whatsapp_click or form_submit

    python3 docs/seo/keyword-map/harvest-firstparty.py [--days 30]

Writes .live/research/firstparty/behaviour.json. Never fails the loop.
"""
import json, os, pathlib, sys, datetime

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / ".live/research/firstparty"
DAYS = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 30


def main():
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if not os.path.exists(envf):
        print("no database credentials — skipping first-party behaviour"); return 0
    try:
        import psycopg2
    except ImportError:
        print("psycopg2 not installed — skipping first-party behaviour"); return 0

    env = {k: v.strip().strip('"').strip("'") for k, v in
           (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
    try:
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
    except Exception as ex:  # noqa: BLE001
        print(f"database unreachable ({str(ex)[:80]}) — skipping first-party behaviour"); return 0

    cur = conn.cursor()
    since = datetime.date.today() - datetime.timedelta(days=DAYS)

    cur.execute("""
        WITH ev AS (SELECT * FROM web_events WHERE at >= %s),
             per_session AS (
               SELECT session_id, url,
                      bool_or(event = 'engaged')  AS engaged,
                      max(CASE WHEN event = 'exit' THEN value END) AS seconds,
                      max(CASE WHEN event = 'scroll_depth' THEN value END) AS scroll,
                      count(*) FILTER (WHERE event IN ('whatsapp_click', 'form_submit')) AS conversions
               FROM ev WHERE event <> 'exit' OR value IS NOT NULL
               GROUP BY session_id, url)
        SELECT url,
               count(*)                                            AS sessions,
               count(*) FILTER (WHERE NOT engaged)                 AS bounced,
               percentile_disc(0.5) WITHIN GROUP (ORDER BY seconds) AS median_seconds,
               percentile_disc(0.5) WITHIN GROUP (ORDER BY scroll)  AS median_scroll,
               sum(conversions)                                     AS conversions
        FROM per_session GROUP BY url ORDER BY sessions DESC
    """, (since,))
    pages = []
    for url, sessions, bounced, secs, scroll, conv in cur.fetchall():
        pages.append({"url": url, "sessions": sessions, "bounce_rate": round((bounced or 0) / max(1, sessions), 3),
                      "median_seconds": secs, "median_scroll": scroll, "conversions": int(conv or 0)})

    cur.execute("SELECT event, count(*) FROM web_events WHERE at >= %s GROUP BY event ORDER BY 2 DESC", (since,))
    events = [{"event": e, "count": n} for e, n in cur.fetchall()]

    cur.execute("""SELECT coalesce(referrer_host, '(direct)'), count(*) FROM web_sessions
                   WHERE started_at >= %s GROUP BY 1 ORDER BY 2 DESC LIMIT 20""", (since,))
    referrers = [{"host": h, "sessions": n} for h, n in cur.fetchall()]

    cur.execute("""SELECT coalesce(country, '??'), coalesce(device, 'unknown'), count(*) FROM web_sessions
                   WHERE started_at >= %s GROUP BY 1, 2 ORDER BY 3 DESC LIMIT 40""", (since,))
    audience = [{"country": c, "device": d, "sessions": n} for c, d, n in cur.fetchall()]

    rolled = 0
    try:
        sys.path.insert(0, str(HERE))
        from rollup_daily import ensure, upsert_firstparty, set_primaries
        ensure(cur)
        cur.execute("""
            WITH ev AS (SELECT * FROM web_events WHERE at >= %s),
                 per_session AS (
                   SELECT session_id, url, (at AT TIME ZONE 'UTC')::date AS day,
                          bool_or(event = 'engaged') AS engaged,
                          max(CASE WHEN event = 'exit' THEN value END) AS seconds,
                          max(CASE WHEN event = 'scroll_depth' THEN value END) AS scroll,
                          count(*) FILTER (WHERE event = 'whatsapp_click') AS wa,
                          count(*) FILTER (WHERE event = 'form_submit') AS forms,
                          count(*) FILTER (WHERE event = 'phone_click') AS phone,
                          count(*) FILTER (WHERE event = 'inquiry_complete') AS inquiry_ok
                   FROM ev
                   GROUP BY session_id, url, (at AT TIME ZONE 'UTC')::date)
            SELECT day, url,
                   count(*) AS sessions,
                   count(*) FILTER (WHERE engaged) AS engaged,
                   count(*) FILTER (WHERE NOT engaged) AS bounced,
                   coalesce(sum(wa), 0), coalesce(sum(forms), 0), coalesce(sum(phone), 0),
                   coalesce(sum(inquiry_ok), 0),
                   percentile_disc(0.5) WITHIN GROUP (ORDER BY seconds),
                   percentile_disc(0.5) WITHIN GROUP (ORDER BY scroll)
            FROM per_session GROUP BY day, url
        """, (since,))
        daily = []
        for day, url, sessions, engaged, bounced, wa, forms, phone, inquiry_ok, secs, scroll in cur.fetchall():
            daily.append({
                "day": day, "url": url, "sessions": int(sessions or 0),
                "engaged": int(engaged or 0), "bounced": int(bounced or 0),
                "wa_clicks": int(wa or 0), "forms": int(forms or 0),
                "phone": int(phone or 0), "inquiry_ok": int(inquiry_ok or 0),
                "med_seconds": secs, "med_scroll": scroll,
            })
        rolled = upsert_firstparty(cur, daily)
        contract_path = HERE.parents[2] / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
        if contract_path.exists():
            import json as _json
            set_primaries(cur, (_json.loads(contract_path.read_text()).get("pages") or {}))
        conn.commit()
    except Exception as ex:  # noqa: BLE001
        conn.rollback()
        print(f"first-party daily rollup skipped ({str(ex)[:80]})")

    conn.close()

    data = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "window_days": DAYS,
            "since": since.isoformat(), "pages": pages, "events": events,
            "referrers": referrers, "audience": audience,
            "totals": {"sessions": sum(p["sessions"] for p in pages),
                       "conversions": sum(p["conversions"] for p in pages),
                       "urls": len(pages)}}
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "behaviour.json").write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
    t = data["totals"]
    if not t["sessions"]:
        print("first-party: no events yet — the collector is live but nobody has been recorded")
    else:
        print(f"first-party {DAYS}d: {t['sessions']} sessions · {t['conversions']} conversions · {t['urls']} URLs"
              + (f" · {rolled} daily rows" if rolled else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())

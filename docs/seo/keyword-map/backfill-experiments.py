#!/usr/bin/env python3
"""One-shot: turn the edits already made into experiments, so they can be judged.

1,615 copy changes across 155 URLs were applied before experiments existed. Without a baseline
recorded at the time, nobody can say whether any of them helped — and the next edit to the same
page would quietly confound the answer.

The baseline can still be reconstructed: seo_page_daily holds Search Console per URL per day
back to 1 July, which is well before the first apply. This creates one experiment per URL per
apply-day, with the 14 days before the edit as the baseline. Verdicts stay `too_soon` until the
window closes — close-experiments.py does the judging.

    python3 docs/seo/keyword-map/backfill-experiments.py [--window 14] [--dry]

Safe to re-run: one experiment per (batch_id, url), enforced by a unique index.
"""
from __future__ import annotations

import datetime, json, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import experiments_lib as X  # noqa: E402
import seo_v2_schema  # noqa: E402

WINDOW = int(sys.argv[sys.argv.index("--window") + 1]) if "--window" in sys.argv else 14
DRY = "--dry" in sys.argv


def main():
    conn = X.connect()
    if conn is None:
        print("backfill: database unreachable"); return 0
    cur = conn.cursor()
    seo_v2_schema.ensure(cur)
    conn.commit()

    # One row per URL per day it was edited. `where_` tells us what kind of change it was,
    # which is worth keeping: a title rewrite and a body sentence are not the same experiment.
    cur.execute("""
        SELECT url, date(applied_at) AS day, min(applied_at) AS first_at,
               array_agg(DISTINCT where_) AS parts, count(*) AS edits
        FROM seo_optimizer_log
        WHERE applied_at IS NOT NULL AND url IS NOT NULL
        GROUP BY url, date(applied_at)
        ORDER BY day, url
    """)
    applies = cur.fetchall()
    if not applies:
        print("backfill: no applied edits in the log"); conn.close(); return 0

    # The keywords each URL owns, from the newest run — what the experiment is actually about.
    cur.execute("""SELECT owner_url, array_agg(keyword ORDER BY search_volume DESC NULLS LAST)
                   FROM seo_keywords WHERE run_id = (SELECT max(id) FROM seo_runs)
                     AND keyword <> '(untargeted)'
                   GROUP BY owner_url""")
    keywords = {u: (k or [])[:12] for u, k in cur.fetchall()}

    made, skipped = 0, 0
    for url, day, first_at, parts, edits in applies:
        batch = f"backfill-{day.isoformat()}"
        baseline = X.window(cur, url, day - datetime.timedelta(days=WINDOW), WINDOW)
        confounders = X.other_edits(cur, url, first_at, WINDOW)
        if not baseline["days_with_data"]:
            skipped += 1        # nothing to compare against; an experiment here would be theatre
            continue
        if DRY:
            made += 1
            continue
        cur.execute("""
            INSERT INTO seo_experiments (batch_id, url, keywords, applied_at, window_days,
                                         baseline, other_edits_in_window, verdict)
            VALUES (%s, %s, %s, %s, %s, %s, %s, 'too_soon')
            ON CONFLICT (batch_id, url) DO NOTHING
        """, (batch, url, keywords.get(url, []), first_at, WINDOW,
              json.dumps({**baseline, "parts": list(parts), "edits": int(edits)}), confounders))
        made += cur.rowcount

    if not DRY:
        conn.commit()
    cur.execute("SELECT count(*), count(*) FILTER (WHERE verdict = 'too_soon') FROM seo_experiments")
    total, waiting = cur.fetchone()
    conn.close()
    print(f"backfill{' (dry)' if DRY else ''}: {made} experiment(s) created from {len(applies)} apply-days"
          + (f", {skipped} skipped with no baseline readings" if skipped else "")
          + f" · {total} stored, {waiting} waiting on their window")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Judge the experiments whose window has closed — did the edit help, hurt, or do nothing.

An edit with no verdict is a guess that never gets marked. This reads the same window maths as
the backfill, compares the days after the change with the days before it, and writes one of
five verdicts. It never reverts anything: a `drop` opens a watch proposal for a human, because
an automatic revert on noisy data is how a system talks itself into circles.

    python3 docs/seo/keyword-map/close-experiments.py [--dry] [--as-of 2026-09-10]

--as-of judges as if it were that date, which is how the maths gets tested before any window
has really elapsed. Safe to re-run: a closed experiment is never reopened.
"""
from __future__ import annotations

import datetime, json, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import experiments_lib as X  # noqa: E402
import seo_v2_schema  # noqa: E402

DRY = "--dry" in sys.argv
AS_OF = (datetime.date.fromisoformat(sys.argv[sys.argv.index("--as-of") + 1])
         if "--as-of" in sys.argv else datetime.date.today())


def watch_proposal(cur, exp_id, url, keywords, why):
    """A drop is a question for a person, not an instruction to the optimizer."""
    cur.execute("""SELECT 1 FROM seo_proposals
                   WHERE url = %s AND status = 'open' AND coalesce(type, class) = 'watch'""", (url,))
    if cur.fetchone():
        return 0
    cur.execute("""
        INSERT INTO seo_proposals (id, created_at, opened_at, class, type, url, keyword, reason,
                                   evidence, action, risk, autonomy, auto_eligible, status, experiment_id)
        VALUES (%s, now(), now(), 'experiment', 'watch', %s, %s, %s, %s,
                'Review the change and decide whether to keep it or revert the page.',
                'medium', 'human', false, 'open', %s)
        ON CONFLICT (id) DO NOTHING
    """, (f"watch-{exp_id}", url, (keywords or [None])[0], why,
          json.dumps({"experiment_id": exp_id, "verdict": "drop"}), exp_id))
    return cur.rowcount


def main():
    conn = X.connect()
    if conn is None:
        print("close-experiments: database unreachable"); return 0
    cur = conn.cursor()
    seo_v2_schema.ensure(cur)
    conn.commit()

    cur.execute("""SELECT id, batch_id, url, keywords, applied_at, window_days, baseline
                   FROM seo_experiments WHERE closed_at IS NULL ORDER BY applied_at""")
    open_rows = cur.fetchall()

    due, closed, verdicts, watches = 0, 0, {}, 0
    for exp_id, batch, url, keywords, applied_at, window_days, baseline in open_rows:
        applied_day = applied_at.date()
        if applied_day + datetime.timedelta(days=window_days + 1) > AS_OF:
            continue                       # the window has not elapsed yet
        due += 1
        after = X.window(cur, url, applied_day + datetime.timedelta(days=1), window_days)
        confounders = X.other_edits(cur, url, applied_at, window_days)
        v, why = X.verdict(baseline or {}, after, confounders)
        verdicts[v] = verdicts.get(v, 0) + 1
        if DRY:
            continue
        cur.execute("""UPDATE seo_experiments
                       SET after = %s, other_edits_in_window = %s, verdict = %s, closed_at = now()
                       WHERE id = %s""",
                    (json.dumps({**after, "why": why}), confounders, v, exp_id))
        closed += 1
        if v == "drop":
            watches += watch_proposal(cur, exp_id, url, keywords,
                                      f"After the {applied_day} edit this page went {why}. "
                                      "Decide whether to keep the change or revert it.")

    if not DRY:
        conn.commit()
    cur.execute("SELECT verdict, count(*) FROM seo_experiments GROUP BY 1 ORDER BY 2 DESC")
    spread = ", ".join(f"{v} {n}" for v, n in cur.fetchall())
    conn.close()

    if not due:
        nxt = min((r[4].date() + datetime.timedelta(days=r[5] + 1) for r in open_rows), default=None)
        print(f"close-experiments: none due as of {AS_OF}"
              + (f" — the first window closes {nxt}" if nxt else "")
              + f" · stored: {spread}")
    else:
        print(f"close-experiments{' (dry)' if DRY else ''}: {due} due, {closed} closed"
              + (f", {watches} watch proposal(s) opened" if watches else "")
              + f" · verdicts this run: {verdicts} · stored: {spread}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

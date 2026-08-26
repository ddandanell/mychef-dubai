#!/usr/bin/env python3
"""Experiments for the board — what was changed, and whether it worked.

Reads seo_experiments and writes experiments.json. Nothing is computed here: the verdicts come
from close-experiments.py, so the page and the database can never disagree.

    python3 docs/seo/keyword-map/build-experiments.py
"""
from __future__ import annotations

import datetime, json, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import experiments_lib as X  # noqa: E402

OUT = HERE / "experiments.json"
VERDICT_NOTE = {
    "too_soon": "the window has not closed yet",
    "lift": "impressions or clicks up, enquiries not down",
    "flat": "no meaningful move",
    "drop": "clicks or enquiries down with nothing else to blame",
    "confounded": "another edit landed in the window, or there were no readings to compare",
}


def main():
    conn = X.connect()
    if conn is None:
        print("experiments: database unreachable — keeping the previous experiments.json")
        return 0
    cur = conn.cursor()
    try:
        cur.execute("""SELECT id, batch_id, url, keywords, applied_at, window_days, baseline, after,
                              other_edits_in_window, verdict, closed_at
                       FROM seo_experiments ORDER BY applied_at DESC, id DESC""")
        rows = cur.fetchall()
    except Exception as ex:  # noqa: BLE001
        print(f"experiments: {str(ex)[:90]}"); conn.close(); return 0

    today = datetime.date.today()
    items, counts = [], {}
    for (eid, batch, url, keywords, applied_at, window, baseline, after, others, verdict, closed) in rows:
        counts[verdict] = counts.get(verdict, 0) + 1
        applied_day = applied_at.date() if applied_at else None
        closes = applied_day + datetime.timedelta(days=window + 1) if applied_day else None
        items.append({
            "id": eid, "batch_id": batch, "url": url, "keywords": list(keywords or [])[:6],
            "applied_at": applied_at.isoformat(timespec="minutes") if applied_at else None,
            "window_days": window, "closes_on": closes.isoformat() if closes else None,
            "days_to_go": (closes - today).days if closes and closes > today else 0,
            "parts": (baseline or {}).get("parts", []),
            "edits": (baseline or {}).get("edits"),
            "baseline": baseline, "after": after,
            "other_edits_in_window": others, "verdict": verdict,
            "why": (after or {}).get("why") or VERDICT_NOTE.get(verdict, ""),
            "closed_at": closed.isoformat(timespec="minutes") if closed else None,
        })

    judged = sum(n for v, n in counts.items() if v != "too_soon")
    data = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "intro": ("Every applied change, with the days before it and the days after. A verdict is only "
                  "written once the window closes, and never turns into an automatic revert — a drop "
                  "opens a watch proposal for a person."),
        "counts": counts,
        "tiles": [
            {"value": str(len(items)), "label": "Experiments recorded"},
            {"value": str(counts.get("too_soon", 0)), "label": "Waiting on their window"},
            {"value": str(counts.get("lift", 0)), "label": "Lift"},
            {"value": str(counts.get("drop", 0)), "label": "Drop"},
            {"value": str(counts.get("confounded", 0)), "label": "Confounded"},
            {"value": str(judged), "label": "Judged so far"},
        ],
        "verdict_notes": VERDICT_NOTE,
        "items": items,
    }
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
    conn.close()
    print(f"experiments.json — {len(items)} recorded · " + " · ".join(f"{v} {n}" for v, n in counts.items()))
    return 0


if __name__ == "__main__":
    sys.exit(main())

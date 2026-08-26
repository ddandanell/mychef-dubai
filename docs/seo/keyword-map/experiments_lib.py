"""Shared window maths for experiments — one definition of before and after.

The backfill and the daily close must measure the same way or their verdicts are not
comparable. Both read `seo_page_daily`, which is the only table with a day × url grain.

A metric that is missing is null, never zero: a page with no Search Console row on a day did
not get zero impressions, we simply have no reading. Averaging over the days that exist is
honest; treating absence as zero would manufacture a drop.
"""
from __future__ import annotations

import datetime

METRICS = ("gsc_clicks", "gsc_impr", "gsc_pos", "sessions", "wa_clicks")


def window(cur, url: str, start: datetime.date, days: int) -> dict:
    """Totals and averages for one URL across [start, start+days)."""
    cur.execute("""
        SELECT count(*)                                   AS days_with_data,
               sum(gsc_clicks), sum(gsc_impr), avg(gsc_pos),
               sum(sessions),   sum(wa_clicks)
        FROM seo_page_daily
        WHERE url = %s AND day >= %s AND day < %s
    """, (url, start, start + datetime.timedelta(days=days)))
    n, clicks, impr, pos, sessions, wa = cur.fetchone()
    return {
        "days_with_data": int(n or 0),
        "gsc_clicks": int(clicks) if clicks is not None else None,
        "gsc_impr": int(impr) if impr is not None else None,
        "gsc_pos": round(float(pos), 1) if pos is not None else None,
        "sessions": int(sessions) if sessions is not None else None,
        "wa_clicks": int(wa) if wa is not None else None,
        "from": start.isoformat(),
        "to": (start + datetime.timedelta(days=days) - datetime.timedelta(days=1)).isoformat(),
    }


def other_edits(cur, url: str, applied_at, days: int) -> int:
    """Edits to the same URL inside the measurement window — the confounder that matters most."""
    cur.execute("""
        SELECT count(DISTINCT date(applied_at)) FROM seo_optimizer_log
        WHERE url = %s AND applied_at > %s AND applied_at < %s
    """, (url, applied_at, applied_at + datetime.timedelta(days=days)))
    return int((cur.fetchone() or [0])[0] or 0)


def verdict(baseline: dict, after: dict, confounders: int) -> tuple[str, str]:
    """The spec's rules, with one addition: no reading means no verdict.

    lift  impressions or clicks up, and WhatsApp clicks not down
    drop  clicks or WhatsApp clicks down with nothing to blame it on
    flat  no meaningful move
    confounded  another edit landed in the window, or there is not enough data to judge
    """
    if confounders:
        return "confounded", f"{confounders} other edit day(s) to this URL inside the window"
    if not baseline.get("days_with_data") or not after.get("days_with_data"):
        return "confounded", "no Search Console readings on one side of the window"

    def per_day(w: dict, key: str):
        v = w.get(key)
        return None if v is None else v / max(1, w["days_with_data"])

    moves = []
    for key in ("gsc_impr", "gsc_clicks", "wa_clicks"):
        b, a = per_day(baseline, key), per_day(after, key)
        if b is None or a is None:
            moves.append((key, None))
            continue
        if b == 0:
            moves.append((key, 1.0 if a > 0 else 0.0))
        else:
            moves.append((key, (a - b) / b))
    move = dict(moves)

    impr, clicks, wa = move.get("gsc_impr"), move.get("gsc_clicks"), move.get("wa_clicks")
    up = [m for m in (impr, clicks) if m is not None and m >= 0.15]
    down = [m for m in (clicks, wa) if m is not None and m <= -0.15]

    if up and not (wa is not None and wa <= -0.15):
        return "lift", "impressions or clicks up " + ", ".join(f"{k} {v:+.0%}" for k, v in move.items() if v is not None)
    if down:
        return "drop", "down " + ", ".join(f"{k} {v:+.0%}" for k, v in move.items() if v is not None)
    return "flat", "no meaningful move " + ", ".join(f"{k} {v:+.0%}" for k, v in move.items() if v is not None)


def connect():
    import os
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

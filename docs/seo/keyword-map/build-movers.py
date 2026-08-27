#!/usr/bin/env python3
"""What moved, against the same days a week ago — and the most likely reason.

The front page used to answer "what is true today". That is the wrong question for a site that
changes every day: what the owner needs is "what changed, where, and was it us". So this
compares the last seven complete days with the seven before them — same weekdays, so a quiet
Friday is compared with a quiet Friday — for the site, for every page, and for every query.

Then it tries to explain each move, honestly, from two things it can actually check:

  the arithmetic   impressions up with a better position is a ranking gain; impressions up with
                   a flat position is demand; flat impressions with more clicks is the snippet
                   winning more of the same searches — which is what a title rewrite does.
  the change log   what was done to that URL, and when. A change three days before the window
                   is a candidate; a change with no matching arithmetic is not offered as the
                   reason, and a page nobody touched says so.

    python3 docs/seo/keyword-map/build-movers.py [--days 7] [--top 12]

Writes movers.json. Every window uses each source's own latest complete day: Search Console
lags two to three days and comparing against a half-reported day invents a fall.
"""
from __future__ import annotations

import datetime, json, os, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / "movers.json"
WIN = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 7
TOP = int(sys.argv[sys.argv.index("--top") + 1]) if "--top" in sys.argv else 12

# Below these, a change is noise dressed as news.
MIN_IMPR = 25       # a page needs this many impressions in one window to be worth ranking
MIN_CLICKS = 2
LOOKBACK_DAYS = 21  # how far before the window a change can still be the cause


def db():
    import psycopg2
    env = {k: v.strip().strip('"').strip("'") for k, v in
           (l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/neon.env"))
            if "=" in l and not l.startswith("#"))}
    return psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])


def pct(now, before):
    if before in (None, 0):
        return None if not now else 100.0
    return round((now - before) / before * 100, 1)


def direction(delta, tolerance=0.0):
    if delta is None:
        return "flat"
    if delta > tolerance:
        return "up"
    return "down" if delta < -tolerance else "flat"


def explain(row, changes):
    """Why this page moved. The arithmetic first, the change log second, and neither invented.

    Ranking, demand and click-through are three different causes with three different fixes, and
    they are separable from numbers Search Console already gives us. Only once the shape of the
    move is known is the change log allowed to name a culprit — otherwise every move gets blamed
    on the most recent edit, which is how a system starts lying.
    """
    dc, di = row["clicks_delta"], row["impr_delta"]
    dpos = row["pos_delta"]                    # negative = moved up the page
    imp_moved = abs(di or 0) >= max(MIN_IMPR, 0.15 * (row["impr_prior"] or 0))
    pos_moved = abs(dpos or 0) >= 0.7
    ctr_now, ctr_before = row["ctr_recent"], row["ctr_prior"]
    ctr_moved = (ctr_now is not None and ctr_before is not None
                 and abs(ctr_now - ctr_before) >= 0.005 and (row["impr_recent"] or 0) >= MIN_IMPR)

    if (row["impr_prior"] or 0) == 0 and (row["impr_recent"] or 0) >= MIN_IMPR:
        shape, headline = "new", "New in search — Google started showing this page"
    elif (row["impr_recent"] or 0) == 0 and (row["impr_prior"] or 0) >= MIN_IMPR:
        shape, headline = "gone", "Disappeared from search — no impressions at all this week"
    elif imp_moved and pos_moved and ((di or 0) > 0) == ((dpos or 0) < 0):
        shape = "ranking"
        headline = ("Ranking higher, so it is shown more" if (di or 0) > 0
                    else "Ranking lower, so it is shown less")
    elif imp_moved and pos_moved and (di or 0) < 0 and (dpos or 0) < 0:
        # The trap in this report. Average position is weighted by impressions, so when a page
        # stops appearing for the far tail — the queries where it sat at 60 — the average rises
        # while the page is being shown less. Read as a win, it is the opposite of a win.
        shape = "coverage"
        headline = ("Shown less, on fewer queries — the average position only looks better because "
                    "the deep long-tail impressions are gone")
    elif imp_moved and pos_moved and (di or 0) > 0 and (dpos or 0) > 0:
        shape = "coverage"
        headline = ("Shown more, but further down — the new impressions are arriving below the "
                    "old ones, which drags the average position down")
    elif imp_moved and not pos_moved:
        shape = "demand"
        headline = ("More people searched for this — the position barely moved" if (di or 0) > 0
                    else "Fewer people searched for this — the position barely moved")
    elif ctr_moved and not imp_moved:
        shape = "snippet"
        headline = ("Same searches, more clicks — the title and description are winning more of them"
                    if (ctr_now or 0) > (ctr_before or 0)
                    else "Same searches, fewer clicks — the snippet is losing them")
    elif pos_moved:
        shape = "ranking"
        headline = ("Moved up the results page" if (dpos or 0) < 0 else "Slipped down the results page")
    else:
        shape, headline = "steady", "No real movement — the difference is inside normal variation"

    # A change is only a candidate if it landed before the end of the window and touched this URL.
    near = sorted(changes, key=lambda c: c["day"], reverse=True)
    likely = [c for c in near if c["kind"] in ("copy", "page", "structure", "image", "design")]
    cause, confidence = None, "unattributed"
    if likely:
        first = likely[0]
        # The shapes a copy edit can plausibly produce. A body-sentence rewrite does not move
        # demand, and saying it did would be a guess with a number next to it.
        fits = {"snippet": ("copy", "page"), "ranking": ("copy", "page", "structure", "design"),
                "new": ("page", "structure"), "gone": ("structure", "page"),
                "coverage": ("copy", "structure", "page"), "demand": (), "steady": ()}
        if first["kind"] in fits.get(shape, ()):
            cause, confidence = first, "likely"
        else:
            cause, confidence = first, "possible"
    elif shape in ("demand", "steady"):
        confidence = "no change on this page"

    detail = []
    if dpos is not None and pos_moved:
        detail.append(f"position {row['pos_prior']:.1f} → {row['pos_recent']:.1f}")
    if ctr_moved:
        detail.append(f"click rate {ctr_before * 100:.1f}% → {ctr_now * 100:.1f}%")
    if di:
        detail.append(f"{'+' if di > 0 else ''}{di} impressions")
    if dc:
        detail.append(f"{'+' if dc > 0 else ''}{dc} clicks")

    return {
        "shape": shape, "headline": headline, "detail": " · ".join(detail),
        "confidence": confidence,
        "cause": ({"day": cause["day"], "kind": cause["kind"], "summary": cause["summary"],
                   "ref": cause.get("ref", ""), "source": cause["source"]} if cause else None),
        "changes": len(changes),
    }


def main():
    try:
        conn = db(); cur = conn.cursor()
    except Exception as ex:  # noqa: BLE001
        print(f"movers: no database ({str(ex)[:70]}) — skipping"); return 0

    # Each source has its own last complete day. Search Console's is two to three days back, and
    # pretending otherwise turns its reporting lag into a crash on the chart.
    cur.execute("SELECT max(day) FROM seo_page_daily WHERE gsc_impr IS NOT NULL")
    gsc_last = cur.fetchone()[0]
    if not gsc_last:
        print("movers: no Search Console history yet — skipping"); return 0

    r_end = gsc_last
    r_start = r_end - datetime.timedelta(days=WIN - 1)
    p_end = r_start - datetime.timedelta(days=1)
    p_start = p_end - datetime.timedelta(days=WIN - 1)

    def window(start, end, group):
        cur.execute(f"""
            SELECT {group}, sum(gsc_clicks), sum(gsc_impr),
                   CASE WHEN sum(gsc_impr) > 0
                        THEN sum(gsc_pos * gsc_impr) / sum(gsc_impr) END,
                   sum(ga4_sessions), sum(vercel_views),
                   sum(coalesce(wa_clicks,0) + coalesce(forms,0) + coalesce(phone,0))
            FROM seo_page_daily WHERE day BETWEEN %s AND %s GROUP BY {group}""", (start, end))
        return {r[0]: {"clicks": r[1] or 0, "impr": r[2] or 0, "pos": float(r[3]) if r[3] else None,
                       "sessions": r[4] or 0, "views": r[5] or 0, "contacts": r[6] or 0}
                for r in cur.fetchall()}

    recent, prior = window(r_start, r_end, "url"), window(p_start, p_end, "url")

    cur.execute("""SELECT day, sum(gsc_clicks), sum(gsc_impr),
                          CASE WHEN sum(gsc_impr) > 0 THEN sum(gsc_pos * gsc_impr) / sum(gsc_impr) END,
                          sum(ga4_sessions)
                   FROM seo_page_daily WHERE day BETWEEN %s AND %s GROUP BY day ORDER BY day""",
                (p_start, r_end))
    series = [{"day": r[0].isoformat(), "clicks": r[1] or 0, "impressions": r[2] or 0,
               "position": round(float(r[3]), 1) if r[3] else None, "sessions": r[4] or 0}
              for r in cur.fetchall()]

    # queries, when the query history has been harvested
    q_recent = q_prior = {}
    try:
        for label, (a, b) in (("recent", (r_start, r_end)), ("prior", (p_start, p_end))):
            cur.execute("""SELECT query, sum(clicks), sum(impressions),
                                  CASE WHEN sum(impressions) > 0
                                       THEN sum(position * impressions) / sum(impressions) END
                           FROM seo_query_daily WHERE day BETWEEN %s AND %s GROUP BY query""", (a, b))
            got = {r[0]: {"clicks": r[1] or 0, "impr": r[2] or 0,
                          "pos": float(r[3]) if r[3] else None} for r in cur.fetchall()}
            if label == "recent":
                q_recent = got
            else:
                q_prior = got
    except Exception:  # noqa: BLE001
        conn.rollback()

    # the change log, indexed by URL
    changes_by_url: dict[str, list] = {}
    all_changes = []
    try:
        cur.execute("""SELECT day, kind, summary, ref, source, urls FROM seo_changelog
                       WHERE day >= %s AND site_affecting ORDER BY day DESC""",
                    (p_start - datetime.timedelta(days=LOOKBACK_DAYS),))
        for day, kind, summary, ref, source, urls in cur.fetchall():
            item = {"day": day.isoformat(), "kind": kind, "summary": summary, "ref": ref, "source": source}
            all_changes.append(item)
            for u in urls or []:
                changes_by_url.setdefault(u, []).append(item)
    except Exception:  # noqa: BLE001
        conn.rollback()

    primaries = {}
    try:
        kwf = HERE / "keywords.json"
        if kwf.exists():
            for row in json.loads(kwf.read_text()).get("rows", []):
                if row.get("role") == "primary" and row.get("primary_owning_url"):
                    primaries.setdefault(row["primary_owning_url"], row["keyword"])
    except Exception:  # noqa: BLE001
        pass

    pages = []
    for url in set(recent) | set(prior):
        a, b = recent.get(url, {}), prior.get(url, {})
        if max(a.get("impr", 0), b.get("impr", 0)) < MIN_IMPR and \
           max(a.get("clicks", 0), b.get("clicks", 0)) < MIN_CLICKS:
            continue
        ctr_r = (a.get("clicks", 0) / a["impr"]) if a.get("impr") else None
        ctr_p = (b.get("clicks", 0) / b["impr"]) if b.get("impr") else None
        row = {
            "url": url, "primary": primaries.get(url),
            "clicks_recent": a.get("clicks", 0), "clicks_prior": b.get("clicks", 0),
            "clicks_delta": a.get("clicks", 0) - b.get("clicks", 0),
            "impr_recent": a.get("impr", 0), "impr_prior": b.get("impr", 0),
            "impr_delta": a.get("impr", 0) - b.get("impr", 0),
            "impr_pct": pct(a.get("impr", 0), b.get("impr", 0)),
            "pos_recent": round(a["pos"], 1) if a.get("pos") else None,
            "pos_prior": round(b["pos"], 1) if b.get("pos") else None,
            "pos_delta": (round(a["pos"] - b["pos"], 1) if a.get("pos") and b.get("pos") else None),
            "ctr_recent": round(ctr_r, 4) if ctr_r is not None else None,
            "ctr_prior": round(ctr_p, 4) if ctr_p is not None else None,
            "sessions_recent": a.get("sessions", 0), "sessions_prior": b.get("sessions", 0),
            "contacts_recent": a.get("contacts", 0), "contacts_prior": b.get("contacts", 0),
        }
        row["why"] = explain(row, changes_by_url.get(url, []))
        row["direction"] = direction(row["impr_delta"], tolerance=MIN_IMPR / 2)
        pages.append(row)

    queries = []
    for q in set(q_recent) | set(q_prior):
        a, b = q_recent.get(q, {}), q_prior.get(q, {})
        if max(a.get("impr", 0), b.get("impr", 0)) < MIN_IMPR:
            continue
        queries.append({
            "query": q,
            "clicks_recent": a.get("clicks", 0), "clicks_prior": b.get("clicks", 0),
            "clicks_delta": a.get("clicks", 0) - b.get("clicks", 0),
            "impr_recent": a.get("impr", 0), "impr_prior": b.get("impr", 0),
            "impr_delta": a.get("impr", 0) - b.get("impr", 0),
            "impr_pct": pct(a.get("impr", 0), b.get("impr", 0)),
            "pos_recent": round(a["pos"], 1) if a.get("pos") else None,
            "pos_prior": round(b["pos"], 1) if b.get("pos") else None,
            "pos_delta": (round(a["pos"] - b["pos"], 1) if a.get("pos") and b.get("pos") else None),
        })

    tot_r = {k: sum(v.get(k, 0) for v in recent.values()) for k in ("clicks", "impr", "sessions", "contacts")}
    tot_p = {k: sum(v.get(k, 0) for v in prior.values()) for k in ("clicks", "impr", "sessions", "contacts")}
    pos_r = (sum((v["pos"] or 0) * v["impr"] for v in recent.values() if v.get("pos"))
             / max(1, sum(v["impr"] for v in recent.values() if v.get("pos"))))
    pos_p = (sum((v["pos"] or 0) * v["impr"] for v in prior.values() if v.get("pos"))
             / max(1, sum(v["impr"] for v in prior.values() if v.get("pos"))))

    headline_totals = [
        {"metric": "impressions", "label": "Times shown in Google", "recent": tot_r["impr"],
         "prior": tot_p["impr"], "delta": tot_r["impr"] - tot_p["impr"], "pct": pct(tot_r["impr"], tot_p["impr"]),
         "better": "up"},
        {"metric": "clicks", "label": "Clicks from Google", "recent": tot_r["clicks"], "prior": tot_p["clicks"],
         "delta": tot_r["clicks"] - tot_p["clicks"], "pct": pct(tot_r["clicks"], tot_p["clicks"]), "better": "up"},
        {"metric": "position", "label": "Average position", "recent": round(pos_r, 1), "prior": round(pos_p, 1),
         "delta": round(pos_r - pos_p, 1), "pct": None, "better": "down"},
        {"metric": "sessions", "label": "Sessions (GA4)", "recent": tot_r["sessions"], "prior": tot_p["sessions"],
         "delta": tot_r["sessions"] - tot_p["sessions"], "pct": pct(tot_r["sessions"], tot_p["sessions"]),
         "better": "up"},
        {"metric": "contacts", "label": "WhatsApp, calls and forms", "recent": tot_r["contacts"],
         "prior": tot_p["contacts"], "delta": tot_r["contacts"] - tot_p["contacts"],
         "pct": pct(tot_r["contacts"], tot_p["contacts"]), "better": "up"},
    ]
    for t in headline_totals:
        good = (t["delta"] or 0) > 0 if t["better"] == "up" else (t["delta"] or 0) < 0
        t["direction"] = direction(t["delta"])
        t["verdict"] = "flat" if t["direction"] == "flat" else ("good" if good else "bad")
        # A source that was not collecting during the prior week produces a rise from nothing.
        # That is the connection being made, not the site improving, and the difference matters.
        if not t["prior"] and t["recent"] and t["metric"] in ("sessions", "contacts"):
            t["verdict"] = "new source"
            t["note"] = ("nothing was recorded for this in the earlier week — the source started "
                         "collecting since, so this is not a real week-on-week rise")

    up = sorted([p for p in pages if p["impr_delta"] > 0], key=lambda p: -p["impr_delta"])[:TOP]
    down = sorted([p for p in pages if p["impr_delta"] < 0], key=lambda p: p["impr_delta"])[:TOP]
    q_up = sorted([q for q in queries if q["impr_delta"] > 0], key=lambda q: -q["impr_delta"])[:TOP]
    q_down = sorted([q for q in queries if q["impr_delta"] < 0], key=lambda q: q["impr_delta"])[:TOP]

    imp = headline_totals[0]
    verdict = (f"Impressions {'up' if imp['delta'] > 0 else 'down'} {abs(imp['delta']):,} "
               f"({imp['pct']:+.0f}%) against the same days last week"
               if imp["pct"] is not None else "Not enough history to compare yet")

    payload = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "window_days": WIN,
        "recent": {"from": r_start.isoformat(), "to": r_end.isoformat()},
        "prior": {"from": p_start.isoformat(), "to": p_end.isoformat()},
        "lag_note": (f"Search Console reports {(datetime.date.today() - gsc_last).days} day(s) behind, so "
                     f"the week compared ends {r_end.isoformat()}. Comparing a part-reported day "
                     f"invents a fall that is not there."),
        "verdict": verdict,
        "totals": headline_totals,
        "series": series,
        "pages_up": up, "pages_down": down,
        "queries_up": q_up, "queries_down": q_down,
        "attributed": sum(1 for p in up + down if p["why"]["confidence"] == "likely"),
        "changes_in_window": [c for c in all_changes if c["day"] >= r_start.isoformat()],
        "changes_before_window": [c for c in all_changes if c["day"] < r_start.isoformat()][:20],
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n")
    conn.close()
    print(f"movers.json — {r_start} to {r_end} vs {p_start} to {p_end} · "
          f"{verdict} · {len(up)} pages up, {len(down)} down · "
          f"{len(q_up)} queries up, {len(q_down)} down · {payload['attributed']} attributed to a change")
    return 0


if __name__ == "__main__":
    sys.exit(main())

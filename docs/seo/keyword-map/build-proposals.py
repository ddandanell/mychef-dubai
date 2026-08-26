#!/usr/bin/env python3
"""Queue — ranked proposals the loop already has evidence for.

Does not call the optimizer. Does not edit pages. Does not push git.
Writes proposals.json, queue.html, and (when Neon is reachable) seo_proposals.

    python3 docs/seo/keyword-map/build-proposals.py

Scoring: impact = demand × gap × convertibility / risk
Demand = max(GSC impressions, DataForSEO volume). Live = demand > 0.
Only the top 15 open. The rest are archived in the JSON under `deferred`.
"""
from __future__ import annotations
import datetime, html as _html, json, os, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
TODAY = datetime.date.today().isoformat()
TOP_N = 15

RISK = {"fill_subkeyword": 1, "fix_onpage": 1, "add_link": 1, "experiment": 3,
        "retarget": 9, "retire": 9, "new_page": 9}


def load(name):
    for p in (HERE / name, HERE / ".live/research" / name):
        if p.exists():
            return json.loads(p.read_text())
    return None


def esc(s):
    return _html.escape(str(s if s is not None else ""))


def impact(demand, gap, conv, risk):
    return round((max(demand, 1) * max(gap, 1) * max(conv, 0.01)) / max(risk, 1), 4)


def demand_of(volume, impr):
    return max(int(volume or 0), int(impr or 0))


def main():
    kw = load("keywords.json") or {}
    mp = load("data.json") or {}
    links = load("links.json") or {}
    back = load("backlog.json") or {}
    gsc = load("gsc/search-analytics.json") or load(".live/research/gsc/search-analytics.json") or {}
    # the second path: load() only checks HERE and HERE/.live/research — handle gsc explicitly
    gsc_f = HERE / ".live/research/gsc/search-analytics.json"
    if gsc_f.exists() and not gsc.get("ranking_url"):
        gsc = json.loads(gsc_f.read_text())
    fp_f = HERE / ".live/research/firstparty/behaviour.json"
    fp = json.loads(fp_f.read_text()) if fp_f.exists() else {}

    pages_by_url = {}
    for rows in (mp.get("silos") or {}).values():
        for r in rows:
            pages_by_url[r.get("url")] = r

    kw_rows = kw.get("rows") or []
    primaries = [r for r in kw_rows if r.get("role") == "primary" and r.get("keyword")]
    conv_by_url = {p["url"]: p for p in (fp.get("pages") or [])}
    ranking_url = gsc.get("ranking_url") or {}
    gsc_pages = {p["url"]: p for p in (gsc.get("pages") or [])}

    proposals = []
    seq = 0


    def add(cls, url, keyword, reason, evidence, action, risk_name, gap, conv, demand, live):
        nonlocal seq
        seq += 1
        risk = RISK[cls]
        proposals.append({
            "id": f"{TODAY}-{seq:03d}",
            "class": cls,
            "url": url,
            "keyword": keyword,
            "reason": reason,
            "evidence": evidence,
            "action": action,
            "risk": risk_name,
            "autonomy": ("L4" if cls == "experiment" else "L2" if cls in ("fill_subkeyword", "fix_onpage", "add_link") and live else "L3"),
            "impact": impact(demand, gap, conv, risk),
            "demand": "live" if live else "speculative",
            "status": "open",
        })


    for r in primaries:
        url = r.get("primary_owning_url")
        page = pages_by_url.get(url) or {}
        if page.get("retired") or page.get("noindex"):
            continue
        vol = r.get("search_volume") or 0
        impr = r.get("gsc_impressions") or 0
        clicks = r.get("gsc_clicks") or 0
        pos = r.get("gsc_position")
        demand = demand_of(vol, impr)
        live = demand > 0
        beh = conv_by_url.get(url) or {}
        sessions = max(int(beh.get("sessions") or 0), 1)
        conv_rate = float(beh.get("conversions") or 0) / sessions
        place = page.get("primary_place") or {}
        score = (page.get("keyword_score") or {}).get("primary")
        if score is None:
            score = r.get("optimization_score")

        # 32 mismatches: Google ranks a different URL than the contract
        gsc_url = r.get("gsc_ranking_url") or ranking_url.get((r.get("keyword") or "").lower())
        if gsc_url and gsc_url != url and impr >= 20:
            add("retarget", url, r["keyword"],
                f"GSC ranks {gsc_url} for this phrase, not the contract owner",
                {"impr": impr, "pos": pos, "clicks": clicks, "gsc_ranking_url": gsc_url, "conv_28d": beh.get("conversions") or 0},
                "move the keyword to the URL Google chose, or 301 if same intent",
                "high", 3, conv_rate, demand, True)

        missing_h1 = not place.get("h1") if place else not r.get("h1_coverage")
        missing_title = not place.get("title") if place else not r.get("title_coverage")
        if live and (missing_h1 or missing_title):
            add("fix_onpage", url, r["keyword"],
                ("primary missing from H1" if missing_h1 else "primary missing from title")
                + (f", GSC pos {pos}" if pos else ""),
                {"impr": impr, "pos": pos, "score": score, "conv_28d": beh.get("conversions") or 0},
                "insert the locked primary into title and H1 via the optimizer",
                "low", 3, conv_rate, demand, True)

        for s in page.get("subs") or []:
            said = s.get("place") and (s["place"].get("body") or s["place"].get("title") or s["place"].get("h1") or s["place"].get("h2"))
            sub_vol = s.get("volume") or 0
            if not said and sub_vol:
                add("fill_subkeyword", url, s.get("kw"),
                    f"assigned to {url} but the live copy does not say it",
                    {"impr": impr, "sub_volume": sub_vol, "conv_28d": beh.get("conversions") or 0},
                    "insert approved sentence template on the owner page",
                    "low", 2, conv_rate, max(demand, sub_vol), True)
                break  # one unsaid sub per page is enough for the queue

        if live and isinstance(score, (int, float)) and score < 7:
            add("fix_onpage", url, r["keyword"],
                f"primary score {score}/10 on a live-demand page",
                {"impr": impr, "score": score, "conv_28d": beh.get("conversions") or 0},
                "complete title / H1 / description / body placements",
                "low", 2, conv_rate, demand, True)

        if live and impr >= 100:
            add("experiment", url, r["keyword"],
                f"{impr} GSC impressions — enough to test a title template",
                {"impr": impr, "pos": pos, "clicks": clicks, "ctr": r.get("gsc_ctr")},
                "title test: primary at front vs area + price cue. Do not change H1 in the same test.",
                "medium", 2, conv_rate, demand, True)

    for p in (links.get("profiles") or []):
        status = p.get("status") or ""
        url = p.get("url")
        if status.startswith("ORPHAN") or status == "Maximum opportunity":
            beh = conv_by_url.get(url) or {}
            demand = demand_of(p.get("volume"), (gsc_pages.get(url) or {}).get("impressions"))
            add("add_link", url, p.get("primary"),
                f"internal-link status {status}",
                {"status": status, "in_contextual": p.get("in_contextual_unique"), "conv_28d": beh.get("conversions") or 0},
                "add a contextual link from a same-silo or hub page",
                "low", 2, float(beh.get("conversions") or 0) / max(int(beh.get("sessions") or 0), 1),
                demand, demand > 0)

    # unowned backlog with real UAE volume
    seen_new = 0
    for row in sorted(back.get("rows") or [], key=lambda x: -(x.get("vol_ae") or x.get("volume") or 0)):
        vol = row.get("vol_ae") or row.get("volume") or 0
        if vol < 50 or row.get("off_intent"):
            continue
        if row.get("suggested"):
            continue
        add("new_page", None, row.get("kw"),
            f"unowned UAE demand {vol}/mo with no obvious owner",
            {"volume": vol, "sources": row.get("sources")},
            "human decides: new URL, or assign as a subkeyword. Do not auto-create pages.",
            "high", 2, 0.01, vol, True)
        seen_new += 1
        if seen_new >= 5:
            break

    # speculative primaries with no GSC and no first-party — retire/merge queue, never L2
    spec = 0
    for r in primaries:
        url = r.get("primary_owning_url")
        page = pages_by_url.get(url) or {}
        if page.get("retired"):
            continue
        demand = demand_of(r.get("search_volume"), r.get("gsc_impressions"))
        beh = conv_by_url.get(url) or {}
        if demand == 0 and not beh.get("sessions"):
            add("retire", url, r["keyword"],
                "no measured UAE volume, no GSC impressions, no first-party sessions",
                {"volume": 0, "impr": 0, "sessions": 0},
                "L3: merge, retarget, or keep speculative. L2 must not optimize this page.",
                "high", 1, 0.01, 1, False)
            spec += 1
            if spec >= 8:
                break

    proposals.sort(key=lambda p: -p["impact"])
    # one proposal per url+class so the queue is not 400 items
    deduped, seen = [], set()
    for p in proposals:
        key = (p["class"], p["url"], p["keyword"])
        if key in seen:
            continue
        seen.add(key)
        deduped.append(p)
    proposals = deduped
    chosen, deferred = proposals[:TOP_N], proposals[TOP_N:]

    payload = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "rule": "impact = demand × gap × convertibility / risk. Top 15 shown. Agent does not apply.",
        "proposals": chosen,
        "deferred": len(deferred),
        "deferred_classes": {},
    }
    for p in deferred:
        payload["deferred_classes"][p["class"]] = payload["deferred_classes"].get(p["class"], 0) + 1
    (HERE / "proposals.json").write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n")

    # Neon — replace today's still-open rows, keep accepted/rejected
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if os.path.exists(envf):
        try:
            import psycopg2, psycopg2.extras
            sys.path.insert(0, str(HERE))
            from rollup_daily import ensure
            env = {k: v.strip().strip('"').strip("'") for k, v in
                   (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
            conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
            cur = conn.cursor()
            ensure(cur)
            cur.execute("DELETE FROM seo_proposals WHERE id LIKE %s AND status = 'open'", (TODAY + "-%",))
            rows = [(p["id"], p["class"], p["url"], p["keyword"], p["reason"],
                     psycopg2.extras.Json(p["evidence"]), p["action"], p["risk"], p["autonomy"],
                     p["impact"], p["demand"], "open") for p in chosen]
            if rows:
                psycopg2.extras.execute_values(
                    cur,
                    """INSERT INTO seo_proposals
                       (id, class, url, keyword, reason, evidence, action, risk, autonomy, impact, demand, status)
                       VALUES %s ON CONFLICT (id) DO NOTHING""",
                    rows)
            conn.commit(); conn.close()
        except Exception as ex:  # noqa: BLE001
            print(f"seo_proposals archive skipped ({str(ex)[:80]})")

    # Queue page
    cards = []
    for p in chosen:
        ev = p["evidence"]
        pills = f'<span class="seo-pill {"seo-pill-critical" if p["risk"]=="high" else "seo-pill-warning" if p["risk"]=="medium" else "seo-pill-healthy"}">{esc(p["class"])}</span>'
        pills += f' <span class="seo-pill {"seo-pill-synced" if p["demand"]=="live" else "seo-pill-missing"}">{esc(p["demand"])}</span>'
        pills += f' <span class="seo-pill seo-pill-review">{esc(p["autonomy"])}</span>'
        cards.append(f'''<article class="seo-opp" data-class="{esc(p["class"])}" data-demand="{esc(p["demand"])}">
      <div>{pills}</div>
      <h3>{esc(p["keyword"] or p["url"] or "—")}</h3>
      <dl>
        <dt>To</dt><dd><code>{esc(p["url"] or "—")}</code></dd>
        <dt>Why</dt><dd>{esc(p["reason"])}</dd>
        <dt>Do</dt><dd>{esc(p["action"])}</dd>
        <dt>Impact</dt><dd class="nums">{p["impact"]}</dd>
      </dl>
      <p class="seo-help">impr {esc(ev.get("impr"))} · pos {esc(ev.get("pos"))} · conv {esc(ev.get("conv_28d"))}</p>
    </article>''')

    page = f"""<!doctype html>
    <html lang="en">
    <head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex">
    <title>myCHEF SEO Intelligence — Queue</title>
    </head>
    <body>
    <header>
      <h1>Queue</h1>
      <p class="sub">Ranked proposals from the loop's own evidence. The agent does not apply them.
      Approve, ignore, or open a PR. Generated {esc(payload["generated"])}.</p>
    </header>
    <div class="tiles">
      <div class="tile"><div class="n">{len(chosen)}</div><div class="l">On the queue</div></div>
      <div class="tile"><div class="n">{payload["deferred"]}</div><div class="l">Deferred</div></div>
      <div class="tile"><div class="n">{sum(1 for p in chosen if p["demand"]=="live")}</div><div class="l">Live demand</div></div>
      <div class="tile"><div class="n">{sum(1 for p in chosen if p["autonomy"]=="L2")}</div><div class="l">Safe for L2 later</div></div>
    </div>
    <main>
    <section id="seo-opportunities">{"".join(cards) or '<p class="seo-help">No proposals this run.</p>'}</section>
    <p class="legend">Scoring: demand × gap × convertibility / risk. Retarget, retire and new-page stay L3 (human).
    L2 auto-apply is not wired. {esc(json.dumps(payload["deferred_classes"]))}</p>
    </main>
    </body>
    </html>
    """
    (HERE / "queue.html").write_text(page)
    print(f"queue: {len(chosen)} proposals · {payload['deferred']} deferred · "
          f"{sum(1 for p in chosen if p['demand']=='live')} live")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Vercel Web Analytics → the keyword tracker's traffic columns.

Real first-party traffic for every URL, refreshed on every loop run. This is the only
traffic source the site has: Search Console has no mychef.ae property and Bing's numbers
are too small to act on, so "how much does this page actually get" came from nowhere until
now. Web Analytics is enabled on the project and has data since 30 Jun 2026.

  GET /v1/query/web-analytics/visits/aggregate   (docs: vercel.com/docs/analytics/web-analytics-api)
  by=requestPath | referrerHostname | country | deviceType, since/until in ms, limit ≤ 100

Credentials: VERCEL_TOKEN in ~/.config/claude-seo/vercel.env (mode 600, never in the repo).
Project and team come from .vercel/project.json, not from that file — its VERCEL_PROJECT_ID
points at a different project (balinese-cooking).

    python3 docs/seo/keyword-map/harvest-vercel-analytics.py [--days 30] [--quiet]

Writes .live/research/vercel/analytics.json. Never fails the loop: on any network or auth
error it leaves the previous snapshot in place and exits 0 with a note.
"""
import json, os, pathlib, ssl, sys, urllib.error, urllib.parse, urllib.request, datetime

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / ".live/research/vercel"
DAYS = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 30
QUIET = "--quiet" in sys.argv
API = "https://api.vercel.com/v1/query/web-analytics/visits/aggregate"

try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:                                   # macOS system python has no CA bundle
    CTX = ssl.create_default_context()


def say(*a):
    if not QUIET: print(*a)


def load_env():
    f = pathlib.Path(os.path.expanduser("~/.config/claude-seo/vercel.env"))
    if not f.exists(): return None
    return {k: v.strip().strip('"').strip("'")
            for k, v in (l.strip().split("=", 1) for l in f.read_text().splitlines() if "=" in l and not l.startswith("#"))}


def fetch(token, project, team, by, since, until, limit, filt=None):
    q = [("projectId", project), ("teamId", team), ("since", since), ("until", until), ("limit", limit)]
    q += [("by", b) for b in by]
    if filt: q.append(("filter", filt))
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(q), headers={"Authorization": "Bearer " + token})
    with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
        return json.load(r).get("data") or []


def all_paths(token, project, team, since, until, max_pages=3):
    """The API caps a breakdown at 100 rows and buckets the rest as "Others". Page past it by
    excluding what we already have, so a 177-URL site is measured per URL, not top-100 only."""
    seen, rows, truncated = [], [], False
    for _ in range(max_pages):
        filt = None
        if seen:
            quoted = ", ".join("'" + p.replace("'", "''") + "'" for p in seen)
            filt = f"not (requestPath in ({quoted}))"
            if len(filt) > 7000: truncated = True; break     # keep the GET inside sane header limits
        page = fetch(token, project, team, ["requestPath"], since, until, 100, filt)
        fresh = [r for r in page if (r.get("requestPath") or "") not in ("Others", "") and r.get("requestPath") not in seen]
        rows += fresh
        seen += [r["requestPath"] for r in fresh]
        others = next((r for r in page if r.get("requestPath") == "Others"), None)
        if not fresh or not others: break
    else:
        truncated = True
    return rows, truncated


def main():
    env = load_env()
    if not env or not env.get("VERCEL_TOKEN"):
        say("no VERCEL_TOKEN in ~/.config/claude-seo/vercel.env — skipping traffic"); return 0
    link = ROOT / ".vercel/project.json"
    if not link.exists():
        say("no .vercel/project.json — skipping traffic"); return 0
    link = json.loads(link.read_text())
    project, team = link["projectId"], link["orgId"]

    until = datetime.datetime.now()
    since = until - datetime.timedelta(days=DAYS)
    ms = lambda d: int(d.timestamp() * 1000)

    try:
        paths, truncated = all_paths(env["VERCEL_TOKEN"], project, team, ms(since), ms(until))
        refs = fetch(env["VERCEL_TOKEN"], project, team, ["referrerHostname"], ms(since), ms(until), 25)
        countries = fetch(env["VERCEL_TOKEN"], project, team, ["country"], ms(since), ms(until), 15)
        devices = fetch(env["VERCEL_TOKEN"], project, team, ["deviceType"], ms(since), ms(until), 10)
    except urllib.error.HTTPError as e:
        say(f"Vercel analytics HTTP {e.code}: {e.read().decode()[:160]} — keeping the previous snapshot"); return 0
    except Exception as ex:  # noqa: BLE001 — a loop must never die on a network blip
        say(f"Vercel analytics unavailable ({ex}) — keeping the previous snapshot"); return 0

    by_url = {}
    for row in paths:
        p = (row.get("requestPath") or "").rstrip("/") or "/"
        if p == "Others": continue                     # the API's bucket for everything past the limit
        cur = by_url.setdefault(p, {"visitors": 0, "pageviews": 0})
        cur["visitors"] += row.get("visitors") or 0
        cur["pageviews"] += row.get("pageviews") or 0

    others = None
    data = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "window_days": DAYS,
        "since": since.strftime("%Y-%m-%d"), "until": until.strftime("%Y-%m-%d"),
        "project": link.get("projectName") or project,
        "totals": {"visitors": sum(v["visitors"] for v in by_url.values()) + (others or {}).get("visitors", 0),
                   "pageviews": sum(v["pageviews"] for v in by_url.values()) + (others or {}).get("pageviews", 0),
                   "urls_listed": len(by_url), "truncated": truncated},
        "pages": by_url,
        "referrers": [{"host": r.get("referrerHostname") or "(direct)", "visitors": r.get("visitors"), "pageviews": r.get("pageviews")} for r in refs],
        "countries": [{"country": r.get("country"), "visitors": r.get("visitors"), "pageviews": r.get("pageviews")} for r in countries],
        "devices": [{"device": r.get("deviceType"), "visitors": r.get("visitors"), "pageviews": r.get("pageviews")} for r in devices],
    }
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "analytics.json").write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
    t = data["totals"]
    say(f"Vercel analytics {DAYS}d: {t['visitors']} visitors · {t['pageviews']} pageviews · {t['urls_listed']} URLs"
        + (" (paging stopped early — some URLs are missing)" if t["truncated"] else ""))

    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if by_url and os.path.exists(envf):
        try:
            import psycopg2
            sys.path.insert(0, str(HERE))
            from rollup_daily import ensure, upsert_vercel
            env = {k: v.strip().strip('"').strip("'") for k, v in
                   (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
            conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
            cur = conn.cursor()
            ensure(cur)
            today = datetime.date.today().isoformat()
            n = upsert_vercel(cur, [{"day": today, "url": url, "vercel_views": v.get("pageviews") or 0}
                                    for url, v in by_url.items()])
            conn.commit(); conn.close()
            say(f"  seo_page_daily: {n} Vercel view rows for {today} (window snapshot, not a true daily series)")
        except Exception as ex:  # noqa: BLE001
            say(f"  seo_page_daily Vercel rollup skipped ({str(ex)[:80]})")
    return 0


if __name__ == "__main__":
    sys.exit(main())

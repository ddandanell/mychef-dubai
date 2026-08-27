#!/usr/bin/env python3
"""Search Console → the only source that knows what myCHEF actually earns per phrase.

DataForSEO says how many people in the UAE search a phrase. Vercel and the first-party
collector say how many people reached a page. Neither can say how many of those searches
turned into an impression, a click, or a position for this site — only Search Console can,
and until 26 Aug 2026 there was no property for mychef.ae to read.

Pulls, for the window:
  by query          clicks, impressions, CTR, average position
  by query + page   which URL Google actually ranks for the phrase (not which one we assigned)
  by page           the same four numbers per URL
  by date           the daily series, so the board can show a trend rather than a snapshot

    python3 docs/seo/keyword-map/harvest-gsc.py [--days 90] [--site https://www.mychef.ae/]

Writes .live/research/gsc/search-analytics.json. Never fails the loop: with no access it says
what is missing and leaves the previous snapshot alone.
"""
import datetime, json, os, pathlib, sys, urllib.error, urllib.parse, urllib.request

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / ".live/research/gsc"
DAYS = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 90
SITE = sys.argv[sys.argv.index("--site") + 1] if "--site" in sys.argv else "https://www.mychef.ae/"
SA = os.path.expanduser("~/.config/claude-seo/service-account.json")
API = "https://www.googleapis.com/webmasters/v3/sites"

try:
    import certifi
    os.environ.setdefault("SSL_CERT_FILE", certifi.where())
except ImportError:
    pass


def query(headers, body):
    req = urllib.request.Request(f"{API}/{urllib.parse.quote(SITE, safe='')}/searchAnalytics/query",
                                 data=json.dumps(body).encode(), headers=headers)
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r).get("rows", [])


def main():
    if not os.path.exists(SA):
        print("no Google service account — skipping Search Console"); return 0
    try:
        from google.oauth2 import service_account
        import google.auth.transport.requests as gar
        creds = service_account.Credentials.from_service_account_file(
            SA, scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
        creds.refresh(gar.Request())
    except Exception as ex:  # noqa: BLE001
        print(f"Search Console auth failed ({str(ex)[:90]}) — skipping"); return 0

    H = {"Authorization": "Bearer " + creds.token, "Content-Type": "application/json"}
    end = datetime.date.today() - datetime.timedelta(days=2)      # Search Console lags ~2 days
    start = end - datetime.timedelta(days=DAYS)
    rng = {"startDate": start.isoformat(), "endDate": end.isoformat()}

    try:
        by_query = query(H, {**rng, "dimensions": ["query"], "rowLimit": 5000})
        by_pair = query(H, {**rng, "dimensions": ["query", "page"], "rowLimit": 5000})
        by_page = query(H, {**rng, "dimensions": ["page"], "rowLimit": 1000})
        by_date = query(H, {**rng, "dimensions": ["date"], "rowLimit": 500})
        try:
            by_page_date = query(H, {**rng, "dimensions": ["date", "page"], "rowLimit": 25000})
        except Exception:
            by_page_date = []
        try:
            by_query_date = query(H, {**rng, "dimensions": ["date", "query"], "rowLimit": 25000})
        except Exception:
            by_query_date = []
    except urllib.error.HTTPError as e:
        detail = e.read().decode()[:160]
        print(f"Search Console HTTP {e.code} for {SITE}: {detail}")
        if e.code == 403:
            print("  The service account is not a user on this property. Add "
                  "googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com in Search Console → Settings → Users.")
        return 0
    except Exception as ex:  # noqa: BLE001
        print(f"Search Console unavailable ({str(ex)[:90]}) — keeping the previous snapshot"); return 0

    def shape(rows, names):
        out = []
        for r in rows:
            row = dict(zip(names, r["keys"]))
            row.update(clicks=r.get("clicks", 0), impressions=r.get("impressions", 0),
                       ctr=round(r.get("ctr", 0), 4), position=round(r.get("position", 0), 1))
            out.append(row)
        return out

    def path_of(url):
        return (urllib.parse.urlparse(url).path or "/").rstrip("/") or "/"

    pairs = shape(by_pair, ["query", "page"])
    for p in pairs:
        p["url"] = path_of(p.pop("page"))
    pages = shape(by_page, ["page"])
    for p in pages:
        p["url"] = path_of(p.pop("page"))
    page_daily = shape(by_page_date, ["date", "page"])
    for p in page_daily:
        p["url"] = path_of(p.pop("page"))

    # which URL Google actually ranks for each phrase — the one to compare against the contract
    ranking_url = {}
    for p in sorted(pairs, key=lambda x: -x["impressions"]):
        ranking_url.setdefault(p["query"], p["url"])

    data = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "site": SITE, "window_days": DAYS, "since": start.isoformat(), "until": end.isoformat(),
        "queries": shape(by_query, ["query"]),
        "pairs": pairs,
        "pages": pages,
        "daily": shape(by_date, ["date"]),
        "page_daily": page_daily,
        "ranking_url": ranking_url,
    }
    tot = {"clicks": sum(q["clicks"] for q in data["queries"]),
           "impressions": sum(q["impressions"] for q in data["queries"]),
           "queries": len(data["queries"]), "pages": len(pages)}
    data["totals"] = tot
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "search-analytics.json").write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
    print(f"Search Console {DAYS}d: {tot['clicks']} clicks · {tot['impressions']} impressions · "
          f"{tot['queries']} queries · {tot['pages']} pages")

    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if page_daily and os.path.exists(envf):
        try:
            import psycopg2
            sys.path.insert(0, str(HERE))
            from rollup_daily import ensure, upsert_gsc, upsert_queries, set_primaries
            env = {k: v.strip().strip('"').strip("'") for k, v in
                   (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
            conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
            cur = conn.cursor()
            ensure(cur)
            n = upsert_gsc(cur, [{"day": p["date"], "url": p["url"], "gsc_clicks": p["clicks"],
                                  "gsc_impr": p["impressions"], "gsc_ctr": p["ctr"], "gsc_pos": p["position"]}
                                 for p in page_daily])
            contract_path = HERE.parents[2] / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
            if contract_path.exists():
                set_primaries(cur, (json.loads(contract_path.read_text()).get("pages") or {}))
            q = upsert_queries(cur, [{"day": r["keys"][0], "query": r["keys"][1],
                                      "clicks": r.get("clicks"), "impressions": r.get("impressions"),
                                      "ctr": r.get("ctr"), "position": r.get("position")}
                                     for r in by_query_date if len(r.get("keys", [])) == 2])
            conn.commit(); conn.close()
            print(f"  seo_page_daily: {n} GSC rows upserted · seo_query_daily: {q} query-days")
        except Exception as ex:  # noqa: BLE001
            print(f"  seo_page_daily GSC rollup skipped ({str(ex)[:80]})")
    return 0


if __name__ == "__main__":
    sys.exit(main())

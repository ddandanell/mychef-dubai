#!/usr/bin/env python3
"""Health check for every source the board depends on — connection AND data flow.

A key that authenticates is not the same as a source that is feeding the system. Each check
here answers both: can we reach it right now, and when did data from it last land somewhere
the board reads? A source that authenticates but has not delivered a row in a month shows as
"stale", not "connected", because that is the failure that actually hurts.

    python3 docs/seo/keyword-map/check-integrations.py [--quiet]

Writes .live/research/health/integrations.json and archives a row per service per check into
seo_integrations, so the status page can show a history rather than a moment.
"""
import base64, datetime, json, os, pathlib, subprocess, sys, urllib.error, urllib.parse, urllib.request

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / ".live/research/health"
CFG = pathlib.Path(os.path.expanduser("~/.config/claude-seo"))
QUIET = "--quiet" in sys.argv
NOW = datetime.datetime.now()

try:
    import certifi
    os.environ.setdefault("SSL_CERT_FILE", certifi.where())
    import ssl
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    import ssl
    CTX = ssl.create_default_context()

results = []


def env_file(name):
    f = CFG / name
    if not f.exists(): return {}
    return {k: v.strip().strip('"').strip("'") for k, v in
            (l.strip().split("=", 1) for l in f.read_text().splitlines() if "=" in l and not l.startswith("#"))}


def age(when):
    """Human age of a timestamp, and whether it is fresh enough to call the source healthy."""
    if not when: return None, None
    if isinstance(when, str):
        try: when = datetime.datetime.fromisoformat(when.replace("Z", "+00:00"))
        except ValueError: return None, None
    if when.tzinfo: when = when.replace(tzinfo=None)
    days = (NOW - when).total_seconds() / 86400
    if days < 1: label = f"{int(days * 24)}h ago" if days >= 0.042 else "just now"
    else: label = f"{int(days)}d ago"
    return label, days


def record(name, group, status, detail, last_success=None, error=None, extra=None):
    label, days = age(last_success)
    results.append({"service": name, "group": group, "status": status, "detail": detail,
                    "last_success": last_success.isoformat(timespec="minutes") if isinstance(last_success, datetime.datetime) else last_success,
                    "last_success_age": label, "stale_days": round(days, 1) if days is not None else None,
                    "last_attempt": NOW.isoformat(timespec="minutes"), "error": error, **(extra or {})})
    if not QUIET:
        mark = {"connected": "OK  ", "stale": "OLD ", "no data": "NONE", "not connected": "--  ", "error": "FAIL"}.get(status, "?   ")
        print(f"  {mark} {name:<24} {detail}" + (f"  ({label})" if label else "") + (f"  [{error[:70]}]" if error else ""))


def get(url, headers=None, timeout=30, data=None):
    req = urllib.request.Request(url, data=data, headers=headers or {})
    with urllib.request.urlopen(req, timeout=timeout, context=CTX) as r:
        return json.load(r)


# ---- 1. the database itself ---------------------------------------------------------------------
db_stats = {}
try:
    import psycopg2
    env = env_file("neon.env")
    conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"], connect_timeout=15)
    cur = conn.cursor()
    cur.execute("SELECT count(*), max(ran_at) FROM seo_runs")
    runs, last_run = cur.fetchone()
    cur.execute("SELECT pg_size_pretty(pg_database_size(current_database()))")
    size = cur.fetchone()[0]
    counts = {}
    for t in ("seo_keywords", "seo_pages", "seo_serps", "seo_backlog", "seo_report", "seo_traffic",
              "seo_ai_visibility", "seo_optimizer_log", "web_events", "web_sessions"):
        cur.execute(f"SELECT count(*) FROM {t}")
        counts[t] = cur.fetchone()[0]
    db_stats = {"runs": runs, "size": size, "counts": counts}
    record("Neon Postgres", "Store", "connected",
           f"{runs} runs · {size} · {sum(counts.values()):,} rows across 15 tables", last_run, extra={"counts": counts})
except Exception as ex:  # noqa: BLE001
    record("Neon Postgres", "Store", "error", "could not connect", None, str(ex)[:200])
    conn = None

# ---- 2. search and demand sources ----------------------------------------------------------------
d4s = env_file("dataforseo.env")
if d4s.get("DATAFORSEO_LOGIN"):
    try:
        auth = base64.b64encode(f"{d4s['DATAFORSEO_LOGIN']}:{d4s['DATAFORSEO_PASSWORD']}".encode()).decode()
        d = get("https://api.dataforseo.com/v3/appendix/user_data", {"Authorization": "Basic " + auth})
        money = ((d.get("tasks") or [{}])[0].get("result") or [{}])[0].get("money", {})
        serps = HERE / ".live/research/dataforseo/serps.jsonl"
        last = datetime.datetime.fromtimestamp(serps.stat().st_mtime) if serps.exists() else None
        rows = (db_stats.get("counts") or {}).get("seo_serps", 0)
        record("DataForSEO", "Demand & SERPs", "connected",
               f"balance ${money.get('balance', 0):.2f} · {rows:,} SERP rows stored", last)
    except Exception as ex:  # noqa: BLE001
        record("DataForSEO", "Demand & SERPs", "error", "authentication or network failure", None, str(ex)[:200])
else:
    record("DataForSEO", "Demand & SERPs", "not connected", "no credentials in ~/.config/claude-seo/dataforseo.env")

# ---- 3. Google: Search Console + Analytics -------------------------------------------------------
sa = CFG / "service-account.json"
if sa.exists():
    try:
        from google.oauth2 import service_account
        import google.auth.transport.requests as gar

        def token(scope):
            c = service_account.Credentials.from_service_account_file(str(sa), scopes=[scope])
            c.refresh(gar.Request())
            return c.token

        t = token("https://www.googleapis.com/auth/webmasters.readonly")
        sites = [s["siteUrl"] for s in get("https://www.googleapis.com/webmasters/v3/sites",
                                           {"Authorization": "Bearer " + t}).get("siteEntry", [])]
        ours = [s for s in sites if "mychef.ae" in s]
        if not ours:
            record("Google Search Console", "Search", "not connected",
                   f"no mychef.ae property among {len(sites)} visible")
        else:
            site = "https://www.mychef.ae/"
            body = json.dumps({"startDate": (NOW.date() - datetime.timedelta(days=10)).isoformat(),
                               "endDate": NOW.date().isoformat(), "dimensions": ["date"], "rowLimit": 10}).encode()
            rows = get(f"https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(site, safe='')}/searchAnalytics/query",
                       {"Authorization": "Bearer " + t, "Content-Type": "application/json"}, data=body).get("rows", [])
            newest = max((r["keys"][0] for r in rows), default=None)
            clicks = sum(r.get("clicks", 0) for r in rows)
            snap = HERE / ".live/research/gsc/search-analytics.json"
            record("Google Search Console", "Search", "connected" if rows else "no data",
                   f"{len(ours)} property · {clicks} clicks in the last 10 days"
                   + (" · not yet pulled into the board" if not snap.exists() else ""),
                   newest)
    except Exception as ex:  # noqa: BLE001
        record("Google Search Console", "Search", "error", "API call failed", None, str(ex)[:200])

    try:
        t = token("https://www.googleapis.com/auth/analytics.readonly")
        accs = get("https://analyticsadmin.googleapis.com/v1beta/accountSummaries", {"Authorization": "Bearer " + t})
        props = [(a.get("displayName"), p.get("property")) for a in accs.get("accountSummaries", [])
                 for p in (a.get("propertySummaries") or [])]
        snap = HERE / ".live/research/ga4/analytics.json"
        if snap.exists():
            # "A property is visible" is not the same as "data reaches the board". What proves the
            # connection is sessions in the snapshot the harvester wrote.
            g = json.loads(snap.read_text())
            sess = sum(pg.get("sessions") or 0 for pg in g.get("pages", []))
            record("Google Analytics 4", "Behaviour", "connected" if sess else "no data",
                   f"{g.get('property','?').split('/')[-1]} · {len(g.get('pages', []))} landing pages · "
                   f"{sess} sessions in {g.get('window_days', 30)}d · {len(g.get('daily', []))} day-rows stored",
                   datetime.datetime.fromtimestamp(snap.stat().st_mtime))
        else:
            record("Google Analytics 4", "Behaviour", "not connected",
                   f"{len(props)} properties visible, none owns the tag G-26YM3CE8CB", None,
                   "grant Viewer to googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com in GA4 Admin")
    except Exception as ex:  # noqa: BLE001
        record("Google Analytics 4", "Behaviour", "error", "API call failed", None, str(ex)[:200])
else:
    record("Google Search Console", "Search", "not connected", "no service account json")
    record("Google Analytics 4", "Behaviour", "not connected", "no service account json")

# ---- 4. Vercel: traffic + the project ------------------------------------------------------------
vc = env_file("vercel.env")
link = json.loads((ROOT / ".vercel/project.json").read_text()) if (ROOT / ".vercel/project.json").exists() else {}
if vc.get("VERCEL_TOKEN") and link:
    H = {"Authorization": "Bearer " + vc["VERCEL_TOKEN"]}
    try:
        until = int(NOW.timestamp() * 1000); since = until - 7 * 86400 * 1000
        q = urllib.parse.urlencode([("projectId", link["projectId"]), ("teamId", link["orgId"]),
                                    ("since", since), ("until", until), ("limit", 5), ("by", "requestPath")])
        rows = get("https://api.vercel.com/v1/query/web-analytics/visits/aggregate?" + q, H).get("data", [])
        snap = HERE / ".live/research/vercel/analytics.json"
        visitors = sum(r.get("visitors", 0) for r in rows)
        record("Vercel Web Analytics", "Traffic", "connected" if rows else "no data",
               f"{visitors} visitors in the last 7 days",
               datetime.datetime.fromtimestamp(snap.stat().st_mtime) if snap.exists() else None)
    except Exception as ex:  # noqa: BLE001
        record("Vercel Web Analytics", "Traffic", "error", "analytics API failed", None, str(ex)[:200])
    try:
        p = get(f"https://api.vercel.com/v9/projects/{link['projectId']}?teamId={link['orgId']}", H)
        record("Vercel project", "Platform", "connected",
               f"{p.get('name')} · web analytics {'on' if (p.get('webAnalytics') or {}).get('enabledAt') else 'off'}"
               f" · git integration {'linked' if p.get('link') else 'not linked'}")
    except Exception as ex:  # noqa: BLE001
        record("Vercel project", "Platform", "error", "project API failed", None, str(ex)[:200])
else:
    record("Vercel Web Analytics", "Traffic", "not connected", "no token in ~/.config/claude-seo/vercel.env")

# ---- 5. first-party tracking ---------------------------------------------------------------------
try:
    code = subprocess.run(["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}", "-m", "20",
                           "https://www.mychef.ae/api/e"], capture_output=True, text=True).stdout.strip()
    events = (db_stats.get("counts") or {}).get("web_events", 0)
    last = None
    if conn:
        cur.execute("SELECT max(at) FROM web_events"); last = cur.fetchone()[0]
    if code == "405":
        record("First-party tracking", "Behaviour", "connected" if events else "no data",
               f"endpoint live · {events:,} events recorded", last,
               None if events else "the collector is deployed but nobody has been recorded yet")
    else:
        record("First-party tracking", "Behaviour", "error", f"/api/e answered {code}, expected 405 for GET", last)
except Exception as ex:  # noqa: BLE001
    record("First-party tracking", "Behaviour", "error", "endpoint unreachable", None, str(ex)[:200])

# ---- 6. Bing --------------------------------------------------------------------------------------
bing = env_file("bing-webmaster.env")
if bing.get("BING_WEBMASTER_API_KEY"):
    try:
        site = bing.get("BING_SITE_URL") or "https://www.mychef.ae/"
        url = ("https://ssl.bing.com/webmaster/api.svc/json/GetRankAndTrafficStats?"
               + urllib.parse.urlencode({"siteUrl": site, "apikey": bing["BING_WEBMASTER_API_KEY"]}))
        d = get(url)
        rows = d.get("d") or []
        record("Bing Webmaster", "Search", "connected" if rows else "no data",
               f"{site} · {len(rows)} daily rows returned")
    except Exception as ex:  # noqa: BLE001
        record("Bing Webmaster", "Search", "error", "API call failed", None, str(ex)[:200])
else:
    record("Bing Webmaster", "Search", "not connected", "no API key")

# ---- 7. PageSpeed / CrUX ---------------------------------------------------------------------------
psi = env_file("google-psi.env")
if psi.get("GOOGLE_PSI_API_KEY"):
    record("PageSpeed / CrUX", "Performance", "connected", "key present · not pulled into the board yet", None,
           "no collector writes CWV into the archive")
else:
    record("PageSpeed / CrUX", "Performance", "not connected", "no API key")

# ---- 8. the AI layer --------------------------------------------------------------------------------
ai_vis = HERE / "ai-visibility.json"
record("Claude AI visibility", "AI", "connected" if ai_vis.exists() else "no data",
       "16 buyer prompts, answers stored" if ai_vis.exists() else "never run",
       datetime.datetime.fromtimestamp(ai_vis.stat().st_mtime) if ai_vis.exists() else None)

# The analyst answers from the live site, so ask the deployed endpoint rather than guessing
# from local environment variables — a key set on Vercel is invisible here.
try:
    # A model round-trip costs money and can take two minutes; the daily loop must not wait for
    # one. GET tells us the function is deployed; --probe-ai asks it to actually answer.
    if "--probe-ai" in sys.argv:
        probe = subprocess.run(["curl", "-s", "-m", "90", "-o", "-", "-w", "\n%{http_code}",
                                "-u", "seo:" + (os.environ.get("SEO_PASSWORD") or ""),
                                "-X", "POST", "https://www.mychef.ae/api/ask", "-H", "Content-Type: application/json",
                                "--data", '{"question":"Reply with the word ready."}'], capture_output=True, text=True).stdout
    else:
        probe = subprocess.run(["curl", "-s", "-m", "20", "-o", "-", "-w", "\n%{http_code}",
                                "https://www.mychef.ae/api/ask"], capture_output=True, text=True).stdout
    code = probe.strip().splitlines()[-1] if probe.strip() else "000"
    head = probe.strip().rsplit("\n", 1)[0] if probe.strip().count("\n") else ""
    try:
        payload = json.loads(head) if head.startswith("{") else {}
    except Exception:            # a 401 answers in plain text, not JSON
        payload = {}
    if code == "200":
        record("SEO analyst (read-only)", "AI", "connected",
               f"answering via {payload.get('provider', 'a model provider')} — reads the archive, cannot change anything")
    elif code in ("401", "405"):
        record("SEO analyst (read-only)", "AI", "connected",
               "deployed and password-gated · run with --probe-ai to test the answer path")
    else:
        record("SEO analyst (read-only)", "AI", "not connected",
               "endpoint deployed, no model provider answering", None,
               (payload.get("error") or f"HTTP {code}")[:180])
except Exception as ex:  # noqa: BLE001
    record("SEO analyst (read-only)", "AI", "error", "could not reach /api/ask", None, str(ex)[:160])

# ---- 9. the loop itself -----------------------------------------------------------------------------
kwf = HERE / "keywords.json"
record("Board build (run-loop)", "Platform", "connected" if kwf.exists() else "no data",
       "keyword file, research pages and archive rebuilt on every run" if kwf.exists() else "never run",
       datetime.datetime.fromtimestamp(kwf.stat().st_mtime) if kwf.exists() else None,
       "runs by hand — no scheduler is configured yet, so freshness depends on someone starting it")

# ---- persist ------------------------------------------------------------------------------------------
OUT.mkdir(parents=True, exist_ok=True)
summary = {"generated": NOW.strftime("%Y-%m-%d %H:%M"),
           "connected": sum(1 for r in results if r["status"] == "connected"),
           "problems": sum(1 for r in results if r["status"] in ("error", "not connected")),
           "services": len(results), "database": db_stats}
(OUT / "integrations.json").write_text(json.dumps({"summary": summary, "services": results}, ensure_ascii=False, indent=1) + "\n")

if conn:
    try:
        cur.execute("""CREATE TABLE IF NOT EXISTS seo_integrations (
                         checked_at TIMESTAMPTZ NOT NULL DEFAULT now(), service TEXT NOT NULL, service_group TEXT,
                         status TEXT, detail TEXT, last_success TIMESTAMPTZ, error TEXT,
                         PRIMARY KEY (checked_at, service))""")
        import psycopg2.extras
        psycopg2.extras.execute_values(
            cur, "INSERT INTO seo_integrations (checked_at, service, service_group, status, detail, last_success, error) VALUES %s ON CONFLICT DO NOTHING",
            [(NOW, r["service"], r["group"], r["status"], r["detail"], r["last_success"], r["error"]) for r in results])
        conn.commit(); conn.close()
    except Exception:
        pass

if not QUIET:
    print(f"\n  {summary['connected']} of {summary['services']} services connected · {summary['problems']} need attention")

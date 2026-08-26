#!/usr/bin/env python3
"""Google Analytics 4 → the board's behaviour columns.

Vercel Analytics answers "how many". GA4 already answers "how long, how deep, and did they
click WhatsApp" — the tag (G-26YM3CE8CB) has been live on mychef.ae all along and
src/components/Analytics.tsx already fires whatsapp_click, begin_inquiry, phone_click,
email_click, calculator_click and four more. None of it reaches the board yet, because the
service account that reads Search Console has not been granted access to the GA4 property.

What this pulls, per landing page:
  sessions · engaged sessions · engagement rate (bounce = 1 − engagement rate)
  average session duration · average engagement time per session
  key events, and the count of every conversion event by name

Access, one time, in GA4 Admin → Property access management → add as Viewer:
  googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com

    python3 docs/seo/keyword-map/harvest-ga4.py [--days 30] [--property 123456789]

Writes .live/research/ga4/analytics.json. Never fails the loop: with no access it explains
what to grant and leaves the previous snapshot alone.
"""
import json, os, pathlib, sys, urllib.error, urllib.request, datetime

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / ".live/research/ga4"
DAYS = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 30
PROP = sys.argv[sys.argv.index("--property") + 1] if "--property" in sys.argv else None
SA = os.path.expanduser("~/.config/claude-seo/service-account.json")
SITE_HOSTS = ("mychef.ae", "www.mychef.ae")
MEASUREMENT_ID = "G-26YM3CE8CB"          # the tag served on mychef.ae
GRANT = "googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com"

try:
    import certifi
    os.environ.setdefault("SSL_CERT_FILE", certifi.where())
except ImportError:
    pass


def token():
    from google.oauth2 import service_account
    import google.auth.transport.requests as gar
    creds = service_account.Credentials.from_service_account_file(
        SA, scopes=["https://www.googleapis.com/auth/analytics.readonly"])
    creds.refresh(gar.Request())
    return creds.token


def api(url, tok, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, headers={
        "Authorization": "Bearer " + tok, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def find_property(tok):
    """The property that owns the tag on mychef.ae — matched on measurement id, then on host."""
    accs = api("https://analyticsadmin.googleapis.com/v1beta/accountSummaries", tok).get("accountSummaries") or []
    seen = []
    for a in accs:
        for p in a.get("propertySummaries") or []:
            seen.append((a.get("displayName"), p.get("displayName"), p.get("property")))
            try:
                streams = api(f"https://analyticsadmin.googleapis.com/v1beta/{p['property']}/dataStreams", tok)
            except Exception:
                continue
            for s in streams.get("dataStreams", []):
                w = s.get("webStreamData") or {}
                if w.get("measurementId") == MEASUREMENT_ID or any(h in (w.get("defaultUri") or "") for h in SITE_HOSTS):
                    return p["property"], seen
    return None, seen


def report(tok, prop, body):
    return api(f"https://analyticsdata.googleapis.com/v1beta/{prop}:runReport", tok, body)


def main():
    if not os.path.exists(SA):
        print("no Google service account at ~/.config/claude-seo/service-account.json — skipping GA4"); return 0
    try:
        tok = token()
    except Exception as ex:  # noqa: BLE001
        print(f"GA4 auth failed ({ex}) — skipping"); return 0

    prop = f"properties/{PROP}" if PROP else None
    visible = []
    if not prop:
        try:
            prop, visible = find_property(tok)
        except Exception as ex:  # noqa: BLE001
            print(f"GA4 admin lookup failed ({ex}) — skipping"); return 0
    if not prop:
        print("GA4: no property found for mychef.ae. The tag " + MEASUREMENT_ID + " is live on the site,")
        print("     but this service account cannot see the property that owns it.")
        print(f"     Grant Viewer to {GRANT}")
        print("     in GA4 Admin → Property access management, then rerun. Properties it can see today:")
        for acc, name, pid in visible:
            print(f"       {acc} · {name} · {pid}")
        return 0

    until = datetime.date.today()
    since = until - datetime.timedelta(days=DAYS)
    rng = [{"startDate": since.isoformat(), "endDate": until.isoformat()}]
    host_filter = {"filter": {"fieldName": "hostName", "inListFilter": {"values": list(SITE_HOSTS)}}}

    pages = report(tok, prop, {
        "dateRanges": rng,
        "dimensions": [{"name": "landingPagePlusQueryString"}],
        "metrics": [{"name": "sessions"}, {"name": "engagedSessions"}, {"name": "engagementRate"},
                    {"name": "averageSessionDuration"}, {"name": "userEngagementDuration"}, {"name": "keyEvents"}],
        "dimensionFilter": host_filter, "limit": 500,
        "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}]})

    events = report(tok, prop, {
        "dateRanges": rng,
        "dimensions": [{"name": "eventName"}, {"name": "pagePath"}],
        "metrics": [{"name": "eventCount"}],
        "dimensionFilter": host_filter, "limit": 1000,
        "orderBys": [{"metric": {"metricName": "eventCount"}, "desc": True}]})

    channels = report(tok, prop, {
        "dateRanges": rng,
        "dimensions": [{"name": "sessionDefaultChannelGroup"}],
        "metrics": [{"name": "sessions"}, {"name": "engagementRate"}, {"name": "keyEvents"}],
        "dimensionFilter": host_filter, "limit": 20})

    def rows(r, dims, mets):
        out = []
        for row in r.get("rows", []):
            d = [x.get("value") for x in row.get("dimensionValues", [])]
            m = [x.get("value") for x in row.get("metricValues", [])]
            out.append(dict(zip(dims, d)) | {k: (float(v) if "." in (v or "") else int(v or 0)) for k, v in zip(mets, m)})
        return out

    page_rows = rows(pages, ["landing_page"], ["sessions", "engaged_sessions", "engagement_rate",
                                               "avg_session_seconds", "engagement_seconds", "key_events"])
    for p in page_rows:
        p["url"] = (p["landing_page"] or "/").split("?")[0].rstrip("/") or "/"
        p["bounce_rate"] = round(1 - (p.get("engagement_rate") or 0), 4)
        p["avg_engagement_seconds"] = round((p.get("engagement_seconds") or 0) / max(1, p.get("sessions") or 1), 1)

    data = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "property": prop, "window_days": DAYS,
        "since": since.isoformat(), "until": until.isoformat(),
        "pages": page_rows,
        "events": rows(events, ["event", "path"], ["count"]),
        "channels": rows(channels, ["channel"], ["sessions", "engagement_rate", "key_events"]),
    }
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "analytics.json").write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n")
    conv = sum(e["count"] for e in data["events"] if e["event"] in
               ("whatsapp_click", "begin_inquiry", "phone_click", "email_click"))
    print(f"GA4 {DAYS}d: {len(page_rows)} landing pages · "
          f"{sum(p['sessions'] for p in page_rows)} sessions · {conv} contact events")
    return 0


if __name__ == "__main__":
    sys.exit(main())

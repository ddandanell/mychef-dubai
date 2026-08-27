#!/usr/bin/env python3
"""PageSpeed Insights + CrUX → speed, per page, in the archive.

The key has been sitting in ~/.config/claude-seo/google-psi.env unused: the board could say
what a page targets and how it ranks, but not whether it is fast enough to hold the visitor
who arrives. Speed is a ranking input and a conversion input, and the two numbers that matter
are not the same number:

  lab   — Lighthouse, one run in a Google datacentre. Deterministic, available for every URL,
          and the only thing you can act on before you have traffic.
  field — CrUX, what real Chrome users experienced over 28 days. The one Google actually uses,
          and it is null for a page with too few visits to be reported. A null field metric is
          "not enough traffic to say", never "zero".

    python3 docs/seo/keyword-map/harvest-psi.py [--pages 12] [--url /x] [--desktop] [--quiet]

Runs mobile by default because that is what Google indexes with. Writes
.live/research/psi/cwv.json and archives to seo_cwv. Never fails the loop.
"""
from __future__ import annotations

import datetime, json, os, pathlib, ssl, sys, urllib.error, urllib.parse, urllib.request

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / ".live/research/psi"
SITE = "https://www.mychef.ae"
API = "https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed"
QUIET = "--quiet" in sys.argv
STRATEGY = "desktop" if "--desktop" in sys.argv else "mobile"
LIMIT = int(sys.argv[sys.argv.index("--pages") + 1]) if "--pages" in sys.argv else 12
ONE = sys.argv[sys.argv.index("--url") + 1] if "--url" in sys.argv else None

# Google's own thresholds. Kept here so a "needs work" on the board means what it means in
# Search Console, not something this script invented.
GOOD = {"lcp_ms": 2500, "inp_ms": 200, "cls": 0.1, "fcp_ms": 1800, "ttfb_ms": 800}
POOR = {"lcp_ms": 4000, "inp_ms": 500, "cls": 0.25, "fcp_ms": 3000, "ttfb_ms": 1800}

try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()


def say(*a):
    if not QUIET:
        print(*a)


def key():
    f = os.path.expanduser("~/.config/claude-seo/google-psi.env")
    if not os.path.exists(f):
        return None
    env = {k: v.strip().strip('"').strip("'") for k, v in
           (l.strip().split("=", 1) for l in open(f) if "=" in l and not l.startswith("#"))}
    return env.get("GOOGLE_PSI_API_KEY") or env.get("GOOGLE_API_KEY")


def targets():
    """The pages worth measuring: the ones people actually land on, plus the money hubs.

    Measuring all 155 pages would take half an hour and tell us the same thing five times —
    they share three templates. What varies is the hero image and the amount of copy, so the
    sample is the pages with traffic plus one of each template that has none.
    """
    if ONE:
        return [ONE if ONE.startswith("/") else "/" + ONE]
    seen, out = set(), []
    try:
        kw = json.loads((HERE / "keywords.json").read_text())
        rows = [r for r in kw.get("rows", []) if r.get("primary_owning_url")]
        rows.sort(key=lambda r: -((r.get("gsc_impressions") or 0) + 10 * (r.get("page_sessions") or 0)))
        for r in rows:
            u = r["primary_owning_url"]
            if u not in seen:
                seen.add(u); out.append(u)
    except Exception:  # noqa: BLE001
        pass
    for u in ("/", "/private-chef-dubai", "/catering-dubai", "/prices", "/contact"):
        if u not in seen:
            seen.add(u); out.append(u)
    return out[:LIMIT]


def num(d, *path, scale=1):
    cur = d
    for p in path:
        if not isinstance(cur, dict) or p not in cur:
            return None
        cur = cur[p]
    return round(cur * scale, 4) if isinstance(cur, (int, float)) else None


def verdict(metric, value):
    if value is None:
        return None
    return "good" if value <= GOOD[metric] else ("poor" if value > POOR[metric] else "needs work")


def measure(url, api_key):
    q = urllib.parse.urlencode([("url", SITE + url), ("strategy", STRATEGY), ("key", api_key)]
                               + [("category", c) for c in ("performance", "seo", "accessibility")])
    req = urllib.request.Request(API + "?" + q, headers={"User-Agent": "mychef-seo/1.0"})
    with urllib.request.urlopen(req, timeout=120, context=CTX) as r:
        d = json.load(r)

    lh = d.get("lighthouseResult") or {}
    audits, cats = lh.get("audits") or {}, lh.get("categories") or {}
    field = d.get("loadingExperience") or {}
    origin = d.get("originLoadingExperience") or {}

    def fld(src, name, scale=1):
        v = ((src.get("metrics") or {}).get(name) or {}).get("percentile")
        return round(v * scale, 4) if isinstance(v, (int, float)) else None

    row = {
        "url": url, "strategy": STRATEGY,
        "performance": num(cats, "performance", "score", scale=100),
        "seo_score": num(cats, "seo", "score", scale=100),
        "accessibility": num(cats, "accessibility", "score", scale=100),
        "lab_lcp_ms": num(audits, "largest-contentful-paint", "numericValue"),
        "lab_fcp_ms": num(audits, "first-contentful-paint", "numericValue"),
        "lab_cls": num(audits, "cumulative-layout-shift", "numericValue"),
        "lab_tbt_ms": num(audits, "total-blocking-time", "numericValue"),
        "lab_ttfb_ms": num(audits, "server-response-time", "numericValue"),
        "lab_speed_index_ms": num(audits, "speed-index", "numericValue"),
        "bytes": num(audits, "total-byte-weight", "numericValue"),
        # CrUX for this URL when Chrome saw enough of it; otherwise the origin, flagged as such.
        "field_source": "url" if field.get("metrics") else ("origin" if origin.get("metrics") else None),
        "field_lcp_ms": fld(field, "LARGEST_CONTENTFUL_PAINT_MS") or fld(origin, "LARGEST_CONTENTFUL_PAINT_MS"),
        "field_inp_ms": fld(field, "INTERACTION_TO_NEXT_PAINT") or fld(origin, "INTERACTION_TO_NEXT_PAINT"),
        "field_cls": fld(field, "CUMULATIVE_LAYOUT_SHIFT_SCORE", scale=0.01) or
                     fld(origin, "CUMULATIVE_LAYOUT_SHIFT_SCORE", scale=0.01),
        "field_ttfb_ms": fld(field, "EXPERIMENTAL_TIME_TO_FIRST_BYTE") or fld(origin, "EXPERIMENTAL_TIME_TO_FIRST_BYTE"),
    }
    # The verdict follows the field number where one exists, because that is the one Google uses.
    row["lcp"] = verdict("lcp_ms", row["field_lcp_ms"] if row["field_lcp_ms"] is not None else row["lab_lcp_ms"])
    row["inp"] = verdict("inp_ms", row["field_inp_ms"])
    row["cls"] = verdict("cls", row["field_cls"] if row["field_cls"] is not None else row["lab_cls"])
    row["opportunities"] = sorted(
        ({"id": k, "title": (a.get("title") or "")[:90], "saving_ms": round(a["details"]["overallSavingsMs"])}
         for k, a in audits.items()
         if isinstance(a.get("details"), dict) and (a["details"].get("overallSavingsMs") or 0) >= 100),
        key=lambda o: -o["saving_ms"])[:5]
    return row


DDL = """
CREATE TABLE IF NOT EXISTS seo_cwv (
  captured_on DATE NOT NULL, url TEXT NOT NULL, strategy TEXT NOT NULL,
  performance INT, seo_score INT, accessibility INT,
  lab_lcp_ms NUMERIC(10,1), lab_fcp_ms NUMERIC(10,1), lab_cls NUMERIC(6,4),
  lab_tbt_ms NUMERIC(10,1), lab_ttfb_ms NUMERIC(10,1), bytes BIGINT,
  field_source TEXT, field_lcp_ms INT, field_inp_ms INT, field_cls NUMERIC(6,4), field_ttfb_ms INT,
  lcp TEXT, inp TEXT, cls TEXT,
  PRIMARY KEY (captured_on, url, strategy)
);
CREATE INDEX IF NOT EXISTS seo_cwv_url ON seo_cwv(url);
"""

COLS = ("performance", "seo_score", "accessibility", "lab_lcp_ms", "lab_fcp_ms", "lab_cls",
        "lab_tbt_ms", "lab_ttfb_ms", "bytes", "field_source", "field_lcp_ms", "field_inp_ms",
        "field_cls", "field_ttfb_ms", "lcp", "inp", "cls")


def archive(rows, day):
    try:
        import psycopg2
        env = {k: v.strip().strip('"').strip("'") for k, v in
               (l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/neon.env"))
                if "=" in l and not l.startswith("#"))}
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute(DDL)
        sql = (f"INSERT INTO seo_cwv (captured_on, url, strategy, {', '.join(COLS)}) VALUES "
               f"(%s, %s, %s, {', '.join(['%s'] * len(COLS))}) "
               f"ON CONFLICT (captured_on, url, strategy) DO UPDATE SET "
               + ", ".join(f"{c} = EXCLUDED.{c}" for c in COLS))
        cur.executemany(sql, [(day, r["url"], r["strategy"], *[r.get(c) for c in COLS]) for r in rows])
        conn.commit(); conn.close()
        return len(rows)
    except Exception as ex:  # noqa: BLE001
        say(f"  archive skipped ({str(ex)[:80]})")
        return 0


def main():
    api_key = key()
    if not api_key:
        print("no PageSpeed key in ~/.config/claude-seo/google-psi.env — skipping"); return 0

    urls, rows, failed = targets(), [], []
    for u in urls:
        try:
            rows.append(measure(u, api_key))
        except urllib.error.HTTPError as ex:
            failed.append((u, f"HTTP {ex.code}"))
        except Exception as ex:  # noqa: BLE001
            failed.append((u, str(ex)[:60]))

    if not rows:
        print(f"PageSpeed: no page measured ({failed[0][1] if failed else 'no targets'}) — snapshot left alone")
        return 0

    day = datetime.date.today().isoformat()
    stored = archive(rows, day)
    scored = [r["performance"] for r in rows if r["performance"] is not None]
    payload = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "captured_on": day, "strategy": STRATEGY, "site": SITE,
        "thresholds": {"good": GOOD, "poor": POOR},
        "median_performance": sorted(scored)[len(scored) // 2] if scored else None,
        "field_pages": sum(1 for r in rows if r["field_source"] == "url"),
        "failing": [r["url"] for r in rows if "poor" in (r["lcp"], r["inp"], r["cls"])],
        "pages": rows, "errors": [{"url": u, "error": e} for u, e in failed],
    }
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "cwv.json").write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n")

    # The board reads from this folder, not from .live — same payload, published name.
    slowest = sorted(rows, key=lambda r: (r["performance"] if r["performance"] is not None else 101))
    board = dict(payload, intro=(
        "Lab is one Lighthouse run in a Google datacentre — available for every page, and the only "
        "number you can act on before a page has traffic. Field is what real Chrome users "
        "experienced over 28 days; it is blank for a page too quiet to report, which is not the "
        "same as fast. Google ranks on the field number where it has one."),
        tiles=[{"value": str(payload["median_performance"]), "label": "Median performance"},
               {"value": str(len(rows)), "label": "Pages measured"},
               {"value": str(payload["field_pages"]), "label": "With real-user data"},
               {"value": str(len(payload["failing"])),
                "label": "Failing a vital" + ("" if payload["field_pages"] else " (lab only)")}],
        worst=slowest[:5])
    (HERE / "speed.json").write_text(json.dumps(board, ensure_ascii=False, indent=1) + "\n")

    med = payload["median_performance"]
    print(f"PageSpeed {STRATEGY}: {len(rows)} pages · median performance {med} · "
          f"{payload['field_pages']} with field data · {len(payload['failing'])} failing a vital"
          + (f" · {stored} archived" if stored else "")
          + (f" · {len(failed)} error(s)" if failed else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())

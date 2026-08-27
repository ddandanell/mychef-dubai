#!/usr/bin/env python3
"""The change log: everything that happened to the site, in one timeline.

A rise or a fall is only readable next to what was done. Until now the record was split —
copy edits in a Postgres table, image swaps and design work in git, retirements in a JSON map —
so "traffic doubled on the 14th" could not be joined to "we rewrote that page on the 12th".
This merges the three into one dated list, per URL, and stores it so the front page can put a
marker on the day and say what happened.

Three streams:
  copy      seo_optimizer_log — title, description, H1, heading, body sentence, FAQ, with the
            words before and after
  build     git — every commit that touched the site, classified by what it actually changed
            (copy, image, page added, page removed, design, tracking, config) and resolved to
            the URLs it can affect
  structure consolidation-map.json — retirements and redirects, which move traffic between URLs

    python3 docs/seo/keyword-map/build-changelog.py [--days 120] [--limit 600]

Writes changelog.json for the board and archives to seo_changelog. A change nobody deployed is
marked as such: the commit date is when it was written, the deploy date is when it went live.
"""
from __future__ import annotations

import datetime, json, os, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / "changelog.json"
DAYS = int(sys.argv[sys.argv.index("--days") + 1]) if "--days" in sys.argv else 120
LIMIT = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 600

# What a changed file means for the site. Order matters — the first match wins, so the
# specific paths sit above the general ones.
KINDS = [
    (r"^src/content/seo-pages/.*\.json$", "copy", "Page content"),
    (r"^src/content/.*\.ts$", "copy", "Content module"),
    (r"^src/pages/.*\.tsx$", "page", "Page component"),
    (r"^src/components/.*\.tsx$", "design", "Component"),
    (r"^src/(styles|index\.css|App\.css)", "design", "Styling"),
    (r"^public/(images|img|photos)/", "image", "Image"),
    (r"^public/.*\.(webp|avif|jpg|jpeg|png|svg)$", "image", "Image"),
    (r"^public/sitemap\.xml$", "structure", "Sitemap"),
    (r"^(vercel\.json|vercel\.ts|middleware\.ts)$", "config", "Routing / config"),
    (r"^api/.*\.ts$", "tracking", "API function"),
    (r"^src/lib/track\.ts$", "tracking", "Tracking"),
    (r"^docs/seo/myCHEF-AE-SEO-STANDARD\.json$", "structure", "Keyword contract"),
    (r"^docs/seo/", "tooling", "SEO tooling"),
    (r"^scripts/", "tooling", "Build tooling"),
]
# Changes that cannot move rankings — recorded, but never offered as the reason for a move.
NON_SITE = {"tooling"}


def sh(*args):
    try:
        return subprocess.run(args, cwd=ROOT, capture_output=True, text=True, timeout=120).stdout
    except Exception:  # noqa: BLE001
        return ""


def routes():
    """Which URL does this file serve? Built once from the route map plus the content slugs."""
    by_slug = {}
    f = ROOT / "src/content/seo/routes.json"
    if f.exists():
        for url, slug in json.loads(f.read_text()).items():
            by_slug.setdefault(slug, url)          # first URL wins; the rest are aliases
    return by_slug


SLUGS = routes()


def urls_for(path: str) -> list[str]:
    m = re.match(r"^src/content/seo-pages/(.+)\.json$", path)
    if m and m.group(1) in SLUGS:
        return [SLUGS[m.group(1)]]
    m = re.match(r"^src/pages/(.+)\.tsx$", path)
    if m:
        slug = re.sub(r"(?<!^)(?=[A-Z])", "-", m.group(1).split("/")[-1]).lower()
        if slug in SLUGS:
            return [SLUGS[slug]]
    return []


def classify(paths: list[str]) -> tuple[str, str, list[str]]:
    kinds, labels, hit = [], [], []
    for p in paths:
        for pattern, kind, label in KINDS:
            if re.search(pattern, p):
                kinds.append(kind); labels.append(label); break
        hit += urls_for(p)
    if not kinds:
        return "other", "Other", sorted(set(hit))
    # A commit that touches copy and tooling is a copy change; tooling is what is left over.
    for k in ("copy", "page", "image", "structure", "design", "tracking", "config"):
        if k in kinds:
            return k, labels[kinds.index(k)], sorted(set(hit))
    return kinds[0], labels[0], sorted(set(hit))


def from_git(since: str) -> list[dict]:
    raw = sh("git", "log", f"--since={since}", "--date=iso-strict", "--name-only",
             "--pretty=format:%x01%H%x02%h%x02%ad%x02%an%x02%s")
    out = []
    for block in raw.split("\x01"):
        if not block.strip():
            continue
        head, _, files = block.partition("\n")
        sha, short, when, who, subject = (head.split("\x02") + [""] * 5)[:5]
        paths = [l.strip() for l in files.splitlines() if l.strip()]
        kind, label, hit = classify(paths)
        out.append({
            "at": when, "day": when[:10], "source": "git", "kind": kind, "label": label,
            "summary": subject, "who": who, "ref": short, "sha": sha,
            "files": len(paths), "urls": hit,
            "detail": ", ".join(paths[:6]) + (f" +{len(paths) - 6} more" if len(paths) > 6 else ""),
            "site_affecting": kind not in NON_SITE,
        })
    return out


def from_optimizer() -> list[dict]:
    try:
        import psycopg2
        env = {k: v.strip().strip('"').strip("'") for k, v in
               (l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/neon.env"))
                if "=" in l and not l.startswith("#"))}
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute("""SELECT url, where_, how, before_, after_, applied_at FROM seo_optimizer_log
                       WHERE applied_at > now() - %s::interval ORDER BY applied_at DESC LIMIT 4000""",
                    (f"{DAYS} days",))
        rows = cur.fetchall(); conn.close()
    except Exception as ex:  # noqa: BLE001
        print(f"  optimizer log unavailable ({str(ex)[:70]})")
        rows = []

    # One line per edit is 1,600 lines nobody reads. A page edited eight times in one run is
    # one event with eight parts — the level the owner actually reviews at.
    grouped: dict[tuple, dict] = {}
    for url, where, how, before, after, at in rows:
        day = at.date().isoformat()
        k = (day, url)
        g = grouped.setdefault(k, {
            "at": at.isoformat(), "day": day, "source": "optimizer", "kind": "copy",
            "label": "Copy edit", "urls": [url], "who": "optimizer", "ref": "",
            "parts": [], "site_affecting": True,
        })
        g["parts"].append({"where": where, "how": how, "before": before, "after": after})
        g["at"] = max(g["at"], at.isoformat())
    out = []
    for g in grouped.values():
        wheres = [p["where"] for p in g["parts"]]
        counts = {w: wheres.count(w) for w in dict.fromkeys(wheres)}
        g["summary"] = (f"{len(g['parts'])} edit(s) on {g['urls'][0]}: "
                        + ", ".join(f"{n}× {w}" for w, n in counts.items()))
        g["detail"] = " · ".join(f"{p['where']}: {(p['after'] or '')[:70]}" for p in g["parts"][:4])
        g["files"] = 1
        g["parts"] = g["parts"][:12]
        out.append(g)
    return out


def from_structure() -> list[dict]:
    f = ROOT / "docs/seo/consolidation-map.json"
    if not f.exists():
        return []
    try:
        m = json.loads(f.read_text())
    except Exception:  # noqa: BLE001
        return []
    items = m.get("retirements") or m.get("urls") or []
    out = []
    for r in items if isinstance(items, list) else []:
        day = r.get("retired_on") or r.get("date") or m.get("generated", "")[:10]
        if not day:
            continue
        out.append({
            "at": day, "day": day[:10], "source": "structure", "kind": "structure",
            "label": "URL retired", "summary": f"{r.get('from') or r.get('url')} → {r.get('to') or r.get('target')}",
            "detail": r.get("reason", ""), "who": "consolidation", "ref": "",
            "files": 0, "urls": [u for u in (r.get("from") or r.get("url"), r.get("to") or r.get("target")) if u],
            "site_affecting": True,
        })
    return out


DDL = """
CREATE TABLE IF NOT EXISTS seo_changelog (
  id TEXT PRIMARY KEY, at TIMESTAMPTZ NOT NULL, day DATE NOT NULL, source TEXT NOT NULL,
  kind TEXT NOT NULL, label TEXT, summary TEXT, detail TEXT, who TEXT, ref TEXT,
  files INT, urls TEXT[], site_affecting BOOLEAN
);
CREATE INDEX IF NOT EXISTS seo_changelog_day ON seo_changelog(day);
CREATE INDEX IF NOT EXISTS seo_changelog_urls ON seo_changelog USING GIN(urls);
"""


def archive(items):
    try:
        import psycopg2, psycopg2.extras
        env = {k: v.strip().strip('"').strip("'") for k, v in
               (l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/neon.env"))
                if "=" in l and not l.startswith("#"))}
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute(DDL)
        psycopg2.extras.execute_values(cur, """
            INSERT INTO seo_changelog (id, at, day, source, kind, label, summary, detail, who, ref,
                                       files, urls, site_affecting) VALUES %s
            ON CONFLICT (id) DO UPDATE SET summary = EXCLUDED.summary, detail = EXCLUDED.detail,
                urls = EXCLUDED.urls, files = EXCLUDED.files, site_affecting = EXCLUDED.site_affecting
        """, [(i["id"], i["at"], i["day"], i["source"], i["kind"], i["label"], i["summary"],
               i["detail"], i["who"], i["ref"], i["files"], i["urls"], i["site_affecting"]) for i in items])
        conn.commit(); conn.close()
        return len(items)
    except Exception as ex:  # noqa: BLE001
        print(f"  archive skipped ({str(ex)[:70]})")
        return 0


def main():
    since = (datetime.date.today() - datetime.timedelta(days=DAYS)).isoformat()
    items = from_git(since) + from_optimizer() + from_structure()
    for i in items:
        i["id"] = f"{i['source']}:{i.get('sha') or i['day'] + ':' + (i['urls'][0] if i['urls'] else i['summary'][:40])}"
    items.sort(key=lambda i: i["at"], reverse=True)
    items = items[:LIMIT]

    by_day: dict[str, int] = {}
    by_url: dict[str, int] = {}
    for i in items:
        by_day[i["day"]] = by_day.get(i["day"], 0) + 1
        for u in i["urls"]:
            by_url[u] = by_url.get(u, 0) + 1

    kinds = {}
    for i in items:
        kinds[i["kind"]] = kinds.get(i["kind"], 0) + 1

    payload = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "window_days": DAYS,
        "intro": ("Everything that happened to the site, newest first: copy the optimizer wrote, "
                  "commits that changed pages, images or design, and URLs that were retired. "
                  "The movement view reads this to explain why a number moved."),
        "tiles": [
            {"value": str(len(items)), "label": f"Changes in {DAYS} days"},
            {"value": str(sum(1 for i in items if i["kind"] == "copy")), "label": "Copy edits"},
            {"value": str(sum(1 for i in items if i["kind"] in ("image", "design"))), "label": "Design & images"},
            {"value": str(len(by_url)), "label": "URLs touched"},
        ],
        "kinds": kinds,
        "by_day": [{"day": d, "changes": n} for d, n in sorted(by_day.items())],
        "busiest_urls": [{"url": u, "changes": n} for u, n in sorted(by_url.items(), key=lambda x: -x[1])[:20]],
        "items": items,
    }
    stored = archive(items)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n")
    print(f"changelog.json — {len(items)} changes over {DAYS} days · "
          f"{kinds.get('copy', 0)} copy · {kinds.get('image', 0)} image · {kinds.get('design', 0)} design · "
          f"{len(by_url)} URLs" + (f" · {stored} archived" if stored else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())

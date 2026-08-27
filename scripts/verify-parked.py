#!/usr/bin/env python3
"""Gate: a parked page is invisible to Google and unreachable by a link — and still there.

Parking is four things at once, and three of them are silent failures:

  1. the page still resolves          — a park is not a deletion, and nothing may 404
  2. it renders noindex               — the one signal that actually removes it from Google
  3. it is not in the sitemap         — a sitemap entry contradicts the noindex
  4. no page links to it              — including the nav, the footer, the silo module and the
                                        breadcrumb, which is where most internal links come from

Missing any one of them means the park did not happen: a noindexed page still in the sitemap is
a mixed signal, and a page linked from forty pages keeps taking the authority the park was meant
to release.

    python3 scripts/verify-parked.py

Needs dist/ — run npm run build && npm run prerender first.
"""
from __future__ import annotations

import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
LIST = ROOT / "docs/seo/parked-urls.json"

parked = json.loads(LIST.read_text())["urls"]
if not DIST.exists() or not any(DIST.rglob("index.html")):
    print("no prerendered pages in dist/ — nothing to check")
    sys.exit(0)

problems: list[str] = []

# 1 + 2 — the page is there, and it says noindex
for url in parked:
    f = DIST / url.lstrip("/") / "index.html"
    if not f.exists():
        problems.append(f"{url}: not prerendered — a parked page must still resolve, not 404")
        continue
    html = f.read_text(encoding="utf-8", errors="ignore")
    robots = re.search(r'<meta name="robots" content="([^"]+)"', html)
    if not robots or "noindex" not in robots.group(1):
        problems.append(f"{url}: renders '{robots.group(1) if robots else 'no robots tag'}' — expected noindex")

# 3 — out of the sitemap
sitemap = (ROOT / "public/sitemap.xml").read_text(encoding="utf-8")
for url in parked:
    if f"<loc>https://www.mychef.ae{url}</loc>" in sitemap:
        problems.append(f"{url}: still listed in the sitemap")

# 4 — nothing links to it, anywhere in the built site
linkers: dict[str, set[str]] = {}
for f in DIST.rglob("index.html"):
    rel = f.parent.relative_to(DIST)
    page = "/" if str(rel) == "." else "/" + str(rel).replace("\\", "/")
    html = f.read_text(encoding="utf-8", errors="ignore")
    for url in parked:
        if page == url:
            continue                       # its own canonical and self-references do not count
        if re.search(r'href="' + re.escape(url) + r'(?:[/"#?])', html):
            linkers.setdefault(url, set()).add(page)
for url, pages in sorted(linkers.items()):
    shown = ", ".join(sorted(pages)[:4])
    problems.append(f"{url}: still linked from {len(pages)} page(s) — {shown}")

if problems:
    print(f"parked pages FAILED — {len(problems)} problem(s):")
    for p in problems[:40]:
        print(f"  - {p}")
    if len(problems) > 40:
        print(f"  … and {len(problems) - 40} more")
    sys.exit(1)

revive = sum(1 for v in parked.values() if v.get("revive_on"))
print(f"parked pages OK — {len(parked)} parked: all resolve, all noindex, none in the sitemap, "
      f"none linked from anywhere ({revive} have a revive date)")

#!/usr/bin/env python3
"""Refuse a ship when a retired URL still leaks anywhere.

For every static redirect in vercel.json the four signals must agree:
301 says B, canonical says B, sitemap contains only B, internal links say B.

    python3 scripts/verify-retirements.py           # repo checks
    python3 scripts/verify-retirements.py --live    # + HEAD/GET against www.mychef.ae

Checks per source -> destination:
  no route in src/routes.tsx        (an SPA <Link> would render a page the server 301s away)
  not in public/sitemap.xml         (a redirecting URL in a sitemap is a canonical contradiction)
  not linked from src/              (quoted or markdown link positions; siloMap.json included)
  not in src/pages/SiteMap.tsx
  destination is routed, in the sitemap, and not itself a redirect source (no chains)
  SEO contract: redirects[] has it; pages[src] is noindex + redirect_to + not in_sitemap;
                no other page's internal_linking still points at it
  --live: source answers 301/308 with Location == destination; destination answers 200
          with a self-referencing canonical
"""
from __future__ import annotations

import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = "https://www.mychef.ae"
LIVE = "--live" in sys.argv

vercel = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text(encoding="utf-8"))
pages = contract["pages"]
routes_src = (ROOT / "src/routes.tsx").read_text(encoding="utf-8")
sitemap = (ROOT / "public/sitemap.xml").read_text(encoding="utf-8")
sitemap_paths = {re.sub(r"^https://www\.mychef\.ae", "", u) or "/" for u in re.findall(r"<loc>([^<]+)</loc>", sitemap)}
html_sitemap = (ROOT / "src/pages/SiteMap.tsx").read_text(encoding="utf-8")
routed = set(re.findall(r'\{\s*path:\s*"([^"]+)"', routes_src))

redirects = [r for r in vercel.get("redirects", []) if ":" not in r["source"] and "*" not in r["source"]]
sources = {r["source"]: r["destination"] for r in redirects}
contract_redirects = {r.get("from"): r.get("to") for r in contract.get("redirects", [])}

src_files = [f for f in (ROOT / "src").rglob("*") if f.suffix in {".ts", ".tsx", ".json"}]
texts = {f: f.read_text(encoding="utf-8", errors="ignore") for f in src_files}

errors: list[str] = []
warnings: list[str] = []


def fail(msg: str) -> None:
    errors.append(msg)


for src, dst in sources.items():
    tag = f"{src} -> {dst}"
    if src in routed:
        fail(f"ROUTE_STILL_LIVE {tag}: src/routes.tsx still declares {src}")
    if src in sitemap_paths:
        fail(f"IN_SITEMAP {tag}: public/sitemap.xml still lists {src}")
    if re.search(r'to="' + re.escape(src) + r'"', html_sitemap):
        fail(f"HTML_SITEMAP {tag}: src/pages/SiteMap.tsx still links {src}")
    link_re = re.compile(r"['\"(]" + re.escape(src) + r"(?=['\")#?])")
    for f, text in texts.items():
        if f.name == "siloMap.json":
            # Compact map: u = url table, d = indices of urls that must never render.
            m = json.loads(text)
            u, d = m.get("u", []), set(m.get("d", []))
            if src in u and u.index(src) not in d:
                fail(f"SILO_MAP {tag}: siloMap.json can still render {src} (not in do_not_link — regenerate)")
            continue
        n = len(link_re.findall(text))
        if n:
            fail(f"INTERNAL_LINK {tag}: {f.relative_to(ROOT)} links {src} x{n}")
    if dst in sources:
        fail(f"CHAIN {tag}: destination is itself redirected to {sources[dst]}")
    if dst not in routed and dst != "/":
        fail(f"DEST_NOT_ROUTED {tag}")
    if dst not in sitemap_paths and dst != "/":
        fail(f"DEST_NOT_IN_SITEMAP {tag}")
    if src not in contract_redirects:
        fail(f"CONTRACT_REDIRECT_MISSING {tag}: not in docs/seo/myCHEF-AE-SEO-STANDARD.json redirects[]")
    elif contract_redirects[src] != dst:
        fail(f"CONTRACT_REDIRECT_MISMATCH {tag}: contract says {contract_redirects[src]}")
    page = pages.get(src)
    if page:
        idx = page.get("indexation") or {}
        if idx.get("in_sitemap"):
            fail(f"CONTRACT_IN_SITEMAP {tag}")
        if (idx.get("robots") or {}).get("index", True):
            fail(f"CONTRACT_INDEXABLE {tag}")
        if idx.get("redirect_to") not in (SITE + dst, dst):
            fail(f"CONTRACT_REDIRECT_TO {tag}: {idx.get('redirect_to')}")
    for path, other in pages.items():
        if path == src:
            continue
        il = other.get("internal_linking") or {}
        for key, val in il.items():
            if key == "do_not_link":
                continue
            if isinstance(val, list):
                if any(isinstance(i, dict) and i.get("url") == src for i in val):
                    fail(f"CONTRACT_LINK {tag}: pages[{path}].internal_linking.{key}")
            elif isinstance(val, dict) and val.get("url") == src:
                fail(f"CONTRACT_LINK {tag}: pages[{path}].internal_linking.{key}")

for path, page in pages.items():
    idx = page.get("indexation") or {}
    if idx.get("redirect_to") and path not in sources:
        fail(f"VERCEL_MISSING: contract says {path} redirects but vercel.json has no rule")

if LIVE:
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None

    opener = urllib.request.build_opener(NoRedirect)
    for src, dst in sources.items():
        try:
            req = urllib.request.Request(SITE + src, method="HEAD", headers={"User-Agent": "mychef-verify"})
            with opener.open(req, timeout=20) as r:
                fail(f"LIVE_NO_REDIRECT {src}: HTTP {r.status}")
        except urllib.error.HTTPError as e:
            if e.code not in (301, 308):
                fail(f"LIVE_STATUS {src}: HTTP {e.code}")
            loc = e.headers.get("Location", "")
            if not (loc == SITE + dst or loc == dst):
                fail(f"LIVE_LOCATION {src}: {loc!r} (expected {dst})")
        except Exception as ex:  # noqa: BLE001
            fail(f"LIVE_ERROR {src}: {ex}")
        try:
            with urllib.request.urlopen(SITE + dst, timeout=20) as r:
                body = r.read().decode("utf-8", errors="ignore")
                canon = re.search(r'<link rel="canonical" href="([^"]+)"', body)
                if not canon:
                    fail(f"LIVE_CANONICAL_MISSING {dst}")
                elif canon.group(1) != SITE + dst:
                    fail(f"LIVE_CANONICAL {dst}: {canon.group(1)}")
        except Exception as ex:  # noqa: BLE001
            fail(f"LIVE_DEST_ERROR {dst}: {ex}")

for w in warnings:
    print(f"  warn: {w}")
if errors:
    print(f"Retirements FAILED ({len(errors)}):")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print(f"Retirements OK — {len(sources)} redirects, all four signals agree{' (live verified)' if LIVE else ''}.")

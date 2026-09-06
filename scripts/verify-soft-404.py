#!/usr/bin/env python3
"""Refuse a ship when soft-404 hygiene is broken.

Brief A: listed guess-URLs must 301 to a live owner; unknown routes must not
rewrite to the SPA shell (HTTP 200, empty title). Vercel serves public/404.html
as HTTP 404 once the catch-all rewrite is gone.

    python3 scripts/verify-soft-404.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Guess-URLs that currently 200 as the empty SPA shell on production.
REQUIRED_REDIRECTS = {
    "/dubai-catering-prices": "/dubai-catering-prices-guide",
    "/catering-cost-calculator": "/catering-cost-calculator-dubai",
    "/event-catering-prices-2026": "/dubai-event-catering-price-guide-2026",
    "/guides/event-catering-prices-2026": "/dubai-event-catering-price-guide-2026",
    "/jbr": "/locations/jbr",
    "/luxury-catering-dubai": "/catering-dubai",
}

# SPA-only paths that are not prerendered and still need the shell.
ALLOWED_FALLBACK_PREFIXES = (
    "/inquiry",
    "/thank-you",
    "/seo",
)

CATCH_ALL_SOURCES = {
    "/((?!.*\\.).*)",
    "/(.*)",
    "/:path*",
    "/(.*)*",
    "/:path(.*)",
}

errors: list[str] = []


def fail(msg: str) -> None:
    errors.append(msg)


vercel = json.loads((ROOT / "vercel.json").read_text(encoding="utf-8"))
redirects = {
    r["source"]: r["destination"]
    for r in vercel.get("redirects", [])
    if ":" not in r["source"] and "*" not in r["source"]
}
rewrites = vercel.get("rewrites") or []
sitemap = (ROOT / "public/sitemap.xml").read_text(encoding="utf-8")
sitemap_paths = {
    re.sub(r"^https://www\.mychef\.ae", "", u).rstrip("/") or "/"
    for u in re.findall(r"<loc>([^<]+)</loc>", sitemap)
}
not_found = ROOT / "public/404.html"
prerender = (ROOT / "scripts/prerender.ts").read_text(encoding="utf-8")

for src, dst in REQUIRED_REDIRECTS.items():
    got = redirects.get(src)
    if got != dst:
        fail(f"REDIRECT {src}: vercel.json has {got!r}, want {dst!r}")
    if src in sitemap_paths:
        fail(f"IN_SITEMAP {src}: guess-URL must not be advertised")
    if dst not in sitemap_paths and dst != "/":
        fail(f"DEST_NOT_IN_SITEMAP {src} -> {dst} (must be an indexable owner, not parked)")

for r in rewrites:
    src = r.get("source") or ""
    dest = r.get("destination") or ""
    if dest != "/fallback.html":
        fail(f"REWRITE_DEST {src}: destination {dest!r} (only /fallback.html is a SPA shell)")
        continue
    if src in CATCH_ALL_SOURCES or src in {"/(.*)", "/:path*"}:
        fail(f"CATCH_ALL_REWRITE {src}: unknown routes would 200 as the empty shell")
        continue
    if not src.startswith(ALLOWED_FALLBACK_PREFIXES):
        fail(f"REWRITE_TOO_BROAD {src}: SPA fallback is only for /inquiry, /thank-you, /seo")

if not rewrites:
    fail("REWRITE_MISSING: /inquiry, /thank-you and /seo still need the SPA shell")

if not not_found.exists():
    fail("NO_404_HTML: public/404.html must exist so Vercel returns HTTP 404")
else:
    html = not_found.read_text(encoding="utf-8")
    if not re.search(r"<title>[^<]{3,}</title>", html, re.I):
        fail("404_HTML_NO_TITLE")
    if "noindex" not in html.lower():
        fail("404_HTML_INDEXABLE: public/404.html must be noindex")
    if "page not found" not in html.lower() and "not found" not in html.lower():
        fail("404_HTML_EMPTY")

if not re.search(r'["\']404\.html["\']', prerender) or "writeFileSync" not in prerender:
    fail("PRERENDER_NO_404: scripts/prerender.ts must write dist/404.html from NotFound")

src_text = ""
for f in (ROOT / "src").rglob("*"):
    if f.suffix in {".ts", ".tsx", ".json"} and f.name != "siloMap.json":
        src_text += f.read_text(encoding="utf-8", errors="ignore") + "\n"
link_re_cache: dict[str, re.Pattern[str]] = {}
for src in REQUIRED_REDIRECTS:
    rx = link_re_cache.setdefault(src, re.compile(r"['\"(]" + re.escape(src) + r"(?=['\")#?])"))
    if rx.search(src_text):
        fail(f"INTERNAL_LINK {src}: src/ still points at the guess-URL")

if errors:
    print(f"Soft-404 hygiene FAILED ({len(errors)}):")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print(
    f"Soft-404 hygiene OK — {len(REQUIRED_REDIRECTS)} 301s, "
    f"no catch-all rewrite, 404.html present, sitemap clean."
)

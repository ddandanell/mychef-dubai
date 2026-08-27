#!/usr/bin/env python3
"""The park list, compiled for the app.

A parked URL is one the site keeps and Google is asked to forget: it still resolves, so nothing
404s and no redirect is needed, but it renders noindex, it is out of the sitemap, and no page
links to it. That combination is reversible in one line — which is the whole point, because
several of these pages are seasonal and were measured out of season.

One list, docs/seo/parked-urls.json, drives every surface:
  SEO.tsx              a parked canonical renders noindex
  generate-sitemap.ts  parked URLs are excluded
  generate-silo-map.py the related-pages module never offers one
  generate-breadcrumbs.py  no trail, and no hub lists one as a child
  LocationStrip        the strip shows only areas that earn

    python3 scripts/generate-parked.py [--check]
"""
from __future__ import annotations

import json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
LIST = ROOT / "docs/seo/parked-urls.json"
OUT = ROOT / "src/content/parkedUrls.ts"


def data() -> dict:
    return json.loads(LIST.read_text())


def build() -> str:
    d = data()
    urls = sorted(d["urls"])
    revive = {u: v["revive_on"] for u, v in d["urls"].items() if v.get("revive_on")}
    return f'''/**
 * GENERATED — python3 scripts/generate-parked.py. Do not edit.
 *
 * Parked, not deleted: the page still resolves, renders noindex, is out of the sitemap and is
 * linked from nowhere. Delete the URL from docs/seo/parked-urls.json and rebuild to bring it
 * back exactly as it was.
 *
 * Parked {d["parked_on"]} on {d["measured_window"]}.
 */

export const PARKED: readonly string[] = {json.dumps(urls, indent=1)} as const

/** Seasonal pages, measured out of season — the date each should come back. */
export const REVIVE_ON: Record<string, string> = {json.dumps(revive, indent=1, sort_keys=True)}

const clean = (path: string) => (path.length > 1 ? path.replace(/\\/+$/, "") : path)

export function isParked(path: string): boolean {{
  return PARKED.includes(clean(path))
}}
'''


text = build()
if "--check" in sys.argv:
    if not OUT.exists() or OUT.read_text() != text:
        print("parkedUrls.ts is stale — run: python3 scripts/generate-parked.py")
        sys.exit(1)
    print(f"park list OK — {len(data()['urls'])} URLs parked")
    sys.exit(0)

OUT.write_text(text, encoding="utf-8")
print(f"parkedUrls.ts — {len(data()['urls'])} parked, "
      f"{sum(1 for v in data()['urls'].values() if v.get('revive_on'))} with a revive date")

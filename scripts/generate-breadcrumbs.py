#!/usr/bin/env python3
"""The contract's breadcrumb trails, compiled for the app.

Every page's place in the silo is already written in the contract
(`internal_linking.breadcrumb`). It was not reaching the pages: 108 URLs rendered no breadcrumb
at all and 37 rendered one that disagreed with the contract, so Google was told a different
hierarchy from the one the keyword map enforces — and a child that never links up to its hub
leaks the authority the hub is supposed to concentrate.

This writes src/content/breadcrumbTrails.ts:
  TRAILS       url → the trail, home first, current page last
  HERO_ROUTES  the routes whose own hero already renders a breadcrumb, so the shared bar does
               not draw a second one

    python3 scripts/generate-breadcrumbs.py [--check]

--check exits non-zero when the generated file is stale, which is what the gate uses.
"""
from __future__ import annotations

import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
OUT = ROOT / "src/content/breadcrumbTrails.ts"
ROUTES = ROOT / "src/routes.tsx"
VERCEL = ROOT / "vercel.json"


def parked() -> set[str]:
    """Pages the site keeps but Google is asked to forget. A trail to one, or a hub listing one
    as a child, would be a link — and a parked page is linked from nowhere."""
    try:
        return set(json.loads((ROOT / "docs/seo/parked-urls.json").read_text()).get("urls") or {})
    except Exception:  # noqa: BLE001
        return set()


def redirect_sources() -> set[str]:
    """URLs that 301 elsewhere. Linking to one spends a click and a crawl on a bounce."""
    try:
        cfg = json.loads(VERCEL.read_text())
    except Exception:  # noqa: BLE001
        return set()
    out = set()
    for r in cfg.get("redirects") or []:
        src = r.get("source")
        if isinstance(src, str) and "(" not in src and ":" not in src:
            out.add(src.rstrip("/") or "/")
    return out


def hero_routes() -> list[str]:
    """Routes whose component renders PageHero — it draws the breadcrumb over the image."""
    src = ROUTES.read_text(encoding="utf-8")
    imports = dict(re.findall(r"(?:const (\w+)[^=]*= lazyPreloadable\(\(\) => import\('([^']+)'\)\))", src))
    imports.update(dict((m[0], m[1]) for m in re.findall(r"import (\w+) from '([^']+)'", src)))
    out = []
    for path, comp in re.findall(r'path: "([^"]+)", element: <(\w+)', src):
        rel = imports.get(comp)
        if not rel:
            continue
        f = (ROOT / "src" / rel.lstrip("./")).with_suffix(".tsx")
        if not f.exists():
            f = (ROOT / "src" / rel.replace("./", "")).with_suffix(".tsx")
        if not f.exists():
            continue
        text = f.read_text(encoding="utf-8")
        # PageHero draws the trail over the photo. Many pages hand-roll the same
        # trail in a custom hero (often without aria-label). Either one must keep
        # the shared bar off the page, or two navigations stack under the main menu.
        if _page_draws_own_trail(text):
            out.append(path)
    return sorted(set(out))


_OWN_TRAIL_NAV = re.compile(r"<nav\b([^>]*)>([\s\S]*?)</nav>", re.I)


def _page_draws_own_trail(text: str) -> bool:
    if "PageHero" in text:
        return True
    if 'aria-label="Breadcrumb"' in text or "aria-label='Breadcrumb'" in text:
        return True
    for match in _OWN_TRAIL_NAV.finditer(text):
        attrs, body = match.group(1), match.group(2)
        blob = f"{attrs} {body}"
        if "Breadcrumb" in blob or "hero-h1" in blob:
            return True
        if 'to="/"' in body and "Home" in body:
            return True
    return False


def children_of(pages: dict) -> dict:
    """Every page the contract files under a hub, grouped by that hub.

    The silo map has its own hub table, generated from the blueprint, and it disagreed with the
    contract for five hubs — so eighteen children were filed under a parent that never linked
    down to them. The contract wins, here as everywhere.
    """
    gone = redirect_sources() | parked()
    kids: dict[str, list] = {}
    for url, p in pages.items():
        hub = p.get("hub")
        if not hub or hub == url or hub not in pages:
            continue
        if p.get("status") == "RETIRED" or p.get("noindex") or url in gone:
            continue
        io = p.get("intent_owner") or {}
        crumbs = ((p.get("internal_linking") or {}).get("breadcrumb")) or []
        label = next((c.get("anchor") for c in crumbs if c.get("current")), None) or io.get("primary_keyword") or url
        kids.setdefault(hub, []).append({"href": url, "label": label})
    for hub in kids:
        kids[hub].sort(key=lambda c: c["href"])
    return kids


def build() -> str:
    pages = json.loads(CONTRACT.read_text())["pages"]
    gone = redirect_sources() | parked()
    trails = {}
    for url, p in pages.items():
        if url in gone:
            continue                       # a page that 301s does not need a trail of its own
        crumbs = ((p.get("internal_linking") or {}).get("breadcrumb")) or []
        if len(crumbs) < 2:
            continue                       # the homepage and anything with no parent
        if any(c.get("url") in gone for c in crumbs if not c.get("current")):
            continue                       # never send a reader up a chain that bounces
        trails[url] = [{"label": c.get("anchor") or c.get("url"),
                        **({} if c.get("current") else {"href": c.get("url")})}
                       for c in crumbs]
    body = json.dumps(trails, ensure_ascii=False, indent=1, sort_keys=True)
    heroes = json.dumps(hero_routes(), ensure_ascii=False, indent=1)
    kids = json.dumps(children_of(pages), ensure_ascii=False, indent=1, sort_keys=True)
    return f'''/**
 * GENERATED — python3 scripts/generate-breadcrumbs.py. Do not edit.
 *
 * The contract decides where a page sits in the silo; this is that decision, compiled. A page
 * renders its trail from here rather than from a hand-written array, which is why the live
 * breadcrumb and the keyword map can no longer disagree.
 */

export type Crumb = {{ label: string; href?: string }}

export const TRAILS: Record<string, Crumb[]> = {body} as const

/** Routes whose own hero already draws a breadcrumb — the shared bar stays out of their way. */
export const HERO_ROUTES: string[] = {heroes}

/** Hub → the pages the contract files under it. A hub that never links down leaks its own authority. */
export const CHILDREN: Record<string, Crumb[]> = {kids} as const

const clean = (path: string) => (path.length > 1 ? path.replace(/\\/+$/, "") : path)

export function trailFor(path: string): Crumb[] {{
  return TRAILS[clean(path)] ?? []
}}

export function hasOwnHeroTrail(path: string): boolean {{
  const p = clean(path)
  return HERO_ROUTES.some((route) => {{
    if (route === p) return true
    if (!route.includes(":")) return false
    const a = route.split("/")
    const b = p.split("/")
    if (a.length !== b.length) return false
    return a.every((seg, i) => seg.startsWith(":") || seg === b[i])
  }})
}}

export function childrenOf(path: string): Crumb[] {{
  return CHILDREN[clean(path)] ?? []
}}
'''


pages = json.loads(CONTRACT.read_text())["pages"]
n_trails = sum(1 for p in pages.values()
               if len(((p.get("internal_linking") or {}).get("breadcrumb")) or []) >= 2)
n_heroes = len(hero_routes())
text = build()

if "--check" in sys.argv:
    current = OUT.read_text(encoding="utf-8") if OUT.exists() else ""
    if current != text:
        print("breadcrumbTrails.ts is stale — run: python3 scripts/generate-breadcrumbs.py")
        sys.exit(1)
    print(f"breadcrumb trails OK — {n_trails} URLs compiled from the contract")
    sys.exit(0)

OUT.write_text(text, encoding="utf-8")
print(f"breadcrumbTrails.ts — {n_trails} trails, {n_heroes} routes with their own hero trail")

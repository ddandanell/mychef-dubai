#!/usr/bin/env python3
"""Retire one indexable URL into a stronger page — every coupled file, in one pass.

A URL on mychef.ae is not one file. Retiring it by hand means touching seven
places that all have to agree, and the last time this was done by hand the
SPA route, the HTML sitemap and the cluster links were left pointing at a
301. This script is the single procedure. It refuses to run if the result
would be a redirect chain or a destination that is not itself live.

    python3 scripts/retire-url.py --from /old --to /new --reason "why" \
        [--move-subkeywords "term a,term b"] [--dry-run]

What it does (in order):
  1. vercel.json            add the 301; re-point any redirect that targeted --from
  2. SEO contract JSON      redirects[], pages[from].indexation, pages[to].subkeywords,
                            every internal_linking list, global_nav, canonical_overrides, stats
  3. seo/routes.json        drop the slug; delete its seo-pages/*.json; drop the SKIP_SEO_HEAD line
  4. src/routes.tsx         drop the route; drop the lazy const + delete the page file if unused
  5. src/pages/SiteMap.tsx  drop the <li>
  6. link sweep in src/     '/from' -> '/to' in quoted/markdown link positions, then reports files
                            where the destination now appears more than once (dedupe by hand)
  7. regenerate             public/sitemap.xml and the silo map

Then run: python3 scripts/verify-retirements.py
Page-content merges (sections, FAQs) are deliberate hand work — do them before this.
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = "https://www.mychef.ae"
VERCEL = ROOT / "vercel.json"
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
ROUTES_JSON = ROOT / "src/content/seo/routes.json"
SEO_INDEX = ROOT / "src/content/seo/index.ts"
SEO_PAGES = ROOT / "src/content/seo-pages"
ROUTES_TSX = ROOT / "src/routes.tsx"
SITEMAP_TSX = ROOT / "src/pages/SiteMap.tsx"
SRC = ROOT / "src"
SUBKEYWORD_CAP = 12
LINK_LISTS = (
    "siblings",
    "featured_children",
    "silo_index",
    "commercial_owners",
    "supporting_guides",
    "cross_silo",
    "locations",
    "breadcrumb",
)


def die(msg: str) -> None:
    print(f"REFUSED: {msg}", file=sys.stderr)
    sys.exit(2)


def load_json(p: Path):
    return json.loads(p.read_text(encoding="utf-8"))


def dump_json(p: Path, data, indent: int = 1) -> None:
    p.write_text(json.dumps(data, indent=indent, ensure_ascii=False) + "\n", encoding="utf-8")


def static_routes(src: str) -> dict[str, str]:
    """path -> component name for every non-parametric route in routes.tsx."""
    out: dict[str, str] = {}
    for m in re.finditer(r'\{\s*path:\s*"([^"]+)"\s*,\s*element:\s*<([A-Za-z0-9_]+)', src):
        if ":" in m.group(1) or "*" in m.group(1):
            continue
        out[m.group(1)] = m.group(2)
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--from", dest="src", required=True)
    ap.add_argument("--to", dest="dst", required=True)
    ap.add_argument("--reason", required=True)
    ap.add_argument("--move-subkeywords", default="", help="comma list; default = the retired page's primary")
    ap.add_argument("--no-move", action="store_true", help="do not carry the retired primary into the destination's subkeywords")
    ap.add_argument("--no-regen", action="store_true", help="skip sitemap/silo regeneration (run once after a batch)")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    src, dst = a.src.rstrip("/"), a.dst.rstrip("/")
    if not src.startswith("/") or not dst.startswith("/") or src == dst:
        die("--from and --to must be distinct site-relative paths")

    routes_src = ROUTES_TSX.read_text(encoding="utf-8")
    routes = static_routes(routes_src)
    if dst not in routes:
        die(f"destination {dst} is not a live static route in src/routes.tsx")

    vercel = load_json(VERCEL)
    redirects = vercel.setdefault("redirects", [])
    sources = {r["source"] for r in redirects}
    dests = {r["source"]: r["destination"] for r in redirects}
    if dst in sources:
        die(f"destination {dst} is itself redirected to {dests[dst]} — that would be a chain")

    changes: list[str] = []

    # 1. vercel.json ---------------------------------------------------------
    if src not in sources:
        redirects.append({"source": src, "destination": dst, "statusCode": 301})
        changes.append(f"vercel.json: + {src} -> {dst} (301)")
    for r in redirects:
        if r["destination"] == src:
            r["destination"] = dst
            changes.append(f"vercel.json: chain fixed {r['source']} -> {dst}")

    # 2. contract ------------------------------------------------------------
    contract = load_json(CONTRACT)
    pages = contract["pages"]
    if dst not in pages:
        die(f"destination {dst} is not in the SEO contract pages[]")
    dst_idx = pages[dst].get("indexation") or {}
    if dst_idx.get("redirect_to") or not (dst_idx.get("robots") or {}).get("index", True):
        die(f"destination {dst} is not indexable in the contract")

    crow = contract.setdefault("redirects", [])
    if not any(r.get("from") == src for r in crow):
        crow.append({"from": src, "to": dst, "type": "301", "reason": a.reason})
    for r in crow:
        if r.get("to") == src:
            r["to"] = dst
    contract.setdefault("canonical_overrides", {})[src] = dst

    moved: list[str] = [s.strip() for s in a.move_subkeywords.split(",") if s.strip()]
    if src in pages:
        page = pages[src]
        owner = page.setdefault("intent_owner", {})
        primary = owner.get("primary_keyword")
        if primary and not moved and not a.no_move:
            moved = [primary]
        if primary:
            owner["retired_primary_keyword"] = primary
        owner["primary_keyword"] = None
        owner["subkeywords"] = []
        page["indexation"] = {
            "robots": {"index": False, "follow": True, "googlebot": "noindex, follow"},
            "canonical": SITE + dst,
            "redirect_to": SITE + dst,
            "in_sitemap": False,
        }
        page["retired"] = {"date": dt.date.today().isoformat(), "to": dst, "reason": a.reason}
        changes.append(f"contract: pages[{src}] marked redirected (primary {primary!r} released)")

    dst_owner = pages[dst].setdefault("intent_owner", {})
    dst_primary = (dst_owner.get("primary_keyword") or "").strip().lower()
    subs = list(dst_owner.get("subkeywords") or [])
    for kw in moved:
        if kw.lower() == dst_primary or kw.lower() in {s.lower() for s in subs}:
            continue
        if len(subs) >= SUBKEYWORD_CAP:
            changes.append(f"contract: pages[{dst}] subkeyword cap hit, NOT added: {kw!r}")
            continue
        subs.append(kw)
        changes.append(f"contract: pages[{dst}] + subkeyword {kw!r}")
    dst_owner["subkeywords"] = subs

    dst_anchor = None
    for crumb in ((pages[dst].get("internal_linking") or {}).get("breadcrumb") or []):
        if crumb.get("url") == dst:
            dst_anchor = crumb.get("anchor")
    relinked = 0
    for path, page in pages.items():
        il = page.get("internal_linking") or {}
        for key in LINK_LISTS:
            items = il.get(key)
            if not isinstance(items, list):
                continue
            if path == src and key == "breadcrumb":
                continue  # the retired page keeps its own trail as a record
            present = {i.get("url") for i in items if isinstance(i, dict)}
            new_items = []
            for item in items:
                if isinstance(item, dict) and item.get("url") == src:
                    relinked += 1
                    if dst in present or dst == path:
                        continue
                    item = {**item, "url": dst, "anchor": dst_anchor or item.get("anchor")}
                    present.add(dst)
                new_items.append(item)
            il[key] = new_items
        up = il.get("uplink_hub")
        if isinstance(up, dict) and up.get("url") == src:
            up["url"] = dst
            up["anchor"] = dst_anchor or up.get("anchor")
            relinked += 1
        dnl = il.get("do_not_link")
        if isinstance(dnl, list):
            # Destination is live — drop it from the blocklist if a previous
            # retirement of *dst* left it there (restore-in-place).
            if dst in dnl:
                dnl[:] = [u for u in dnl if u != dst]
            if src not in dnl and path != src:
                dnl.append(src)
    changes.append(f"contract: {relinked} internal-linking references re-pointed {src} -> {dst}")

    nav = contract.get("global_nav") or {}
    for key, val in list(nav.items()):
        if key == "footer_do_not_include" and isinstance(val, list):
            if dst in val:
                val[:] = [u for u in val if u != dst]
            if src not in val:
                val.append(src)
            continue
        if isinstance(val, list):
            out = []
            seen = set()
            for item in val:
                url = item.get("url") if isinstance(item, dict) else item
                if url == src:
                    url = dst
                    item = {**item, "url": dst} if isinstance(item, dict) else dst
                    changes.append(f"contract: global_nav.{key} re-pointed")
                if url in seen:
                    continue
                seen.add(url)
                out.append(item)
            nav[key] = out

    st = contract.setdefault("stats", {})
    indexable = [p for p, pg in pages.items() if ((pg.get("indexation") or {}).get("robots") or {}).get("index", True) and not (pg.get("indexation") or {}).get("redirect_to")]
    with_primary = [p for p in indexable if (pages[p].get("intent_owner") or {}).get("primary_keyword")]
    st.update({
        "pages": len(pages),
        "indexable": len(indexable),
        "noindex": len(pages) - len(indexable),
        "with_primary": len(with_primary),
        "untargeted": len(indexable) - len(with_primary),
    })

    # 3. seo routes.json / seo-pages / SKIP_SEO_HEAD ---------------------------
    seo_routes = load_json(ROUTES_JSON)
    slug = seo_routes.pop(src, None)
    seo_index = SEO_INDEX.read_text(encoding="utf-8")
    seo_index_new = seo_index.replace(f"  '{src}',\n", "")
    seo_json_file = SEO_PAGES / f"{slug}.json" if slug else None
    if slug:
        changes.append(f"seo: routes.json - {src}; delete seo-pages/{slug}.json")
    if seo_index_new != seo_index:
        changes.append("seo: SKIP_SEO_HEAD_ROUTES entry removed")

    # 4. routes.tsx ----------------------------------------------------------
    component = routes.get(src)
    route_line_re = re.compile(r'^  \{ path: "' + re.escape(src) + r'"[^\n]*\n', re.M)
    routes_new = route_line_re.sub("", routes_src)
    page_file: Path | None = None
    if component and component != "HandoffPage" and f"<{component} />" not in routes_new:
        const_re = re.compile(r"^const " + re.escape(component) + r": PreloadableComponent = lazyPreloadable\(\(\) => import\('\./(pages/[^']+)'\)\)\n", re.M)
        m = const_re.search(routes_new)
        if m:
            page_file = SRC / (m.group(1) + ".tsx")
            routes_new = const_re.sub("", routes_new)
            changes.append(f"routes.tsx: route + lazy const removed; delete {page_file.relative_to(ROOT)}")
    elif component:
        changes.append("routes.tsx: route removed (component still used elsewhere)")

    # 5. SiteMap.tsx ---------------------------------------------------------
    sm = SITEMAP_TSX.read_text(encoding="utf-8")
    sm_new = re.sub(r'^[ \t]*<li><Link to="' + re.escape(src) + r'"[^\n]*\n', "", sm, flags=re.M)
    if sm_new != sm:
        changes.append("SiteMap.tsx: entry removed")

    # 6. link sweep ----------------------------------------------------------
    pattern = re.compile(r"(?P<q>['\"(])" + re.escape(src) + r"(?=['\")#?])")
    swept: dict[Path, int] = {}
    skip_files = {ROUTES_TSX, SITEMAP_TSX, SEO_INDEX, ROUTES_JSON}
    if page_file:
        skip_files.add(page_file)
    if seo_json_file:
        skip_files.add(seo_json_file)
    for f in SRC.rglob("*"):
        if f.suffix not in {".ts", ".tsx", ".json"} or f in skip_files or f.name == "siloMap.json":
            continue
        text = f.read_text(encoding="utf-8")
        new, n = pattern.subn(lambda m: m.group("q") + dst, text)
        if n:
            swept[f] = n
            if not a.dry_run:
                f.write_text(new, encoding="utf-8")

    # ---- report / write -----------------------------------------------------
    print(("DRY RUN — " if a.dry_run else "") + f"retire {src} -> {dst}")
    for c in changes:
        print("  ", c)
    for f, n in sorted(swept.items()):
        print(f"   sweep: {f.relative_to(ROOT)} ({n} link{'s' if n > 1 else ''})")
    if a.dry_run:
        return

    dump_json(VERCEL, vercel, indent=2)
    dump_json(CONTRACT, contract, indent=1)
    dump_json(ROUTES_JSON, seo_routes, indent=0)
    SEO_INDEX.write_text(seo_index_new, encoding="utf-8")
    ROUTES_TSX.write_text(routes_new, encoding="utf-8")
    SITEMAP_TSX.write_text(sm_new, encoding="utf-8")
    for f in (seo_json_file, page_file):
        if f and f.exists():
            subprocess.run(["git", "rm", "-q", "--", str(f)], cwd=ROOT, check=False)
            if f.exists():
                f.unlink()

    # 6b. consolidation map: the record of what was retired must never drift from what was done
    MAP = ROOT / "docs/seo/consolidation-map.json"
    if MAP.exists():
        cm = load_json(MAP); hit = False
        for row in cm.get("rows", []):
            if row.get("from") == src:
                row["status"] = "done"; row["to"] = dst; row["executed"] = f"{dt.date.today().isoformat()} via scripts/retire-url.py — {a.reason}"; hit = True
        if not hit:
            cm.setdefault("rows", []).append({"phase": "ad hoc", "status": "done", "from": src, "to": dst, "reason": a.reason, "executed": f"{dt.date.today().isoformat()} via scripts/retire-url.py"})
        dump_json(MAP, cm, indent=2); changes.append("consolidation-map.json: row marked done")

    # 7. regenerate ----------------------------------------------------------
    if not a.no_regen:
        subprocess.run(["npx", "tsx", "scripts/generate-sitemap.ts"], cwd=ROOT, check=True, stdout=subprocess.DEVNULL)
        subprocess.run(["python3", "scripts/generate-silo-map.py"], cwd=ROOT, check=True, stdout=subprocess.DEVNULL)
        print("   regenerated public/sitemap.xml + silo map")

    # duplicates the sweep may have created: same destination twice in one file
    dup_re = re.compile(r"['\"(]" + re.escape(dst) + r"(?=['\")#?])")
    dups = []
    for f in swept:
        if f.exists() and len(dup_re.findall(f.read_text(encoding="utf-8"))) > 1:
            dups.append(f)
    if dups:
        print("   REVIEW — destination now appears more than once in:")
        for f in dups:
            print("     ", f.relative_to(ROOT))
    print("next: python3 scripts/verify-retirements.py && npx tsc -b")


if __name__ == "__main__":
    os.chdir(ROOT)
    main()

#!/usr/bin/env python3
"""Tie every page's locked keywords to its code.

Source of truth stays docs/seo/myCHEF-AE-SEO-STANDARD.json. This script projects it into:
  1. src/content/keywordLocks.ts        typed map url -> { primary, subkeywords } + keywordLockFor(pathname)
  2. a KEYWORD LOCK header in every page component file (resolved through src/routes.tsx)
  3. a "keyword_lock" field in each HandoffPage route's src/content/seo-pages/<slug>.json

So a page file carries its own keywords: any session reading the file sees them, and
scripts/verify-keyword-locks.py fails the ship when a file and the contract disagree.

    python3 scripts/generate-keyword-locks.py            # write
    python3 scripts/generate-keyword-locks.py --check    # exit 1 if anything is out of date (used by the verifier)
"""
from __future__ import annotations
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
ROUTES = ROOT / "src/routes.tsx"
MODULE = ROOT / "src/content/keywordLocks.ts"
SEO_ROUTES = ROOT / "src/content/seo/routes.json"
SEO_PAGES = ROOT / "src/content/seo-pages"
CHECK = "--check" in sys.argv
BEGIN, END = "// KEYWORD LOCK", "// END KEYWORD LOCK"

contract = json.loads(CONTRACT.read_text())
pages = contract["pages"]

def lock_for(url: str):
    p = pages.get(url) or {}
    idx = p.get("indexation") or {}
    if idx.get("redirect_to"): return None
    io = p.get("intent_owner") or {}
    return {"primary": (io.get("primary_keyword") or None), "subkeywords": [s for s in (io.get("subkeywords") or []) if s]}

# ---- 1. typed module ----------------------------------------------------------
def ts_str(s: str) -> str: return json.dumps(s, ensure_ascii=False)
entries = []
for url in sorted(pages):
    lk = lock_for(url)
    if lk is None: continue
    subs = ", ".join(ts_str(s) for s in lk["subkeywords"])
    entries.append(f"  {ts_str(url)}: {{ primary: {ts_str(lk['primary']) if lk['primary'] else 'null'}, subkeywords: [{subs}] }},")
module = f"""// AUTO-GENERATED from docs/seo/myCHEF-AE-SEO-STANDARD.json by scripts/generate-keyword-locks.py — do not hand-edit.
// Regenerate: npm run seo:locks   ·   Verify: npm run verify:keyword-locks
//
// One primary per URL, exclusive across the site. Subkeywords live inside sentences only (cap 8).
// A page's own header comment repeats its entry so the lock travels with the file.

export interface KeywordLock {{
  /** Exclusive primary keyword; null = untargeted by decision (chef profiles, utility pages). */
  readonly primary: string | null
  readonly subkeywords: readonly string[]
}}

export const KEYWORD_LOCKS: Readonly<Record<string, KeywordLock>> = {{
{chr(10).join(entries)}
}}

/** Trailing slashes and hashes are not distinct pages. */
export function keywordLockFor(pathname: string): KeywordLock | null {{
  const clean = pathname.split('?')[0].split('#')[0]
  const key = clean.length > 1 ? clean.replace(/\\/+$/, '') : clean
  return KEYWORD_LOCKS[key] ?? null
}}
"""

# ---- 2. page headers ------------------------------------------------------------
routes_src = ROUTES.read_text()
imports = {m.group(1): m.group(2) for m in re.finditer(r"^const (\w+): PreloadableComponent = lazyPreloadable\(\(\) => import\('\./(pages/[^']+)'\)\)", routes_src, flags=re.M)}
route_comp = {m.group(1): m.group(2) for m in re.finditer(r'\{\s*path:\s*"([^"]+)"\s*,\s*element:\s*<(\w+)', routes_src)}
comp_pages = {}
for url, comp in route_comp.items():
    if ":" in url or "*" in url or comp == "HandoffPage" or comp not in imports: continue
    comp_pages.setdefault(comp, []).append(url)

def header_for(urls: list[str]) -> str:
    lines = [f"{BEGIN} — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there."]
    for url in urls:
        lk = lock_for(url) or {"primary": None, "subkeywords": []}
        lines.append(f"//   {url}")
        lines.append(f"//     primary:     {json.dumps(lk['primary'], ensure_ascii=False) if lk['primary'] else 'none (untargeted by decision)'}")
        lines.append("//     subkeywords: " + (" · ".join(json.dumps(s, ensure_ascii=False) for s in lk["subkeywords"]) if lk["subkeywords"] else "none"))
    lines.append("//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.")
    lines.append(END)
    return "\n".join(lines) + "\n"

def apply_header(path: pathlib.Path, header: str) -> bool:
    src = path.read_text(encoding="utf-8")
    if BEGIN in src and END in src:
        new = re.sub(re.escape(BEGIN) + r".*?" + re.escape(END) + r"\n", header, src, count=1, flags=re.S)
    else:
        body = src
        # drop an older hand-written "// KEYWORD LOCK — this page owns:" comment block at the top
        if body.startswith("// KEYWORD LOCK"):
            body = re.sub(r"\A(?://[^\n]*\n)+", "", body)
        new = header + body
    if new != src:
        if not CHECK: path.write_text(new, encoding="utf-8")
        return True
    return False

changed = []
for comp, urls in comp_pages.items():
    f = ROOT / "src" / (imports[comp] + ".tsx")
    if not f.exists(): continue
    if apply_header(f, header_for(sorted(urls))): changed.append(str(f.relative_to(ROOT)))

# ---- 3. handoff JSON -------------------------------------------------------------
seo_routes = json.loads(SEO_ROUTES.read_text())
for url, comp in route_comp.items():
    if comp != "HandoffPage": continue
    slug = seo_routes.get(url)
    f = SEO_PAGES / f"{slug}.json" if slug else None
    if not f or not f.exists(): continue
    d = json.loads(f.read_text())
    lk = lock_for(url)
    if lk and d.get("keyword_lock") != lk:
        d["keyword_lock"] = lk
        if not CHECK: f.write_text(json.dumps(d, indent=1, ensure_ascii=False) + "\n")
        changed.append(str(f.relative_to(ROOT)))

module_changed = (not MODULE.exists()) or MODULE.read_text() != module
if module_changed:
    if not CHECK: MODULE.write_text(module)
    changed.append(str(MODULE.relative_to(ROOT)))

# Compact path → primary map for api/e.ts (landing class). The browser never sees this.
# It must live OUTSIDE api/: Vercel compiles every .ts in that folder as its own serverless
# function, so a sibling import is not in the caller's bundle and the function 500s at
# invocation while the build still passes.
API_LOCKS = ROOT / "api/e.ts"          # written between the <lock-map> markers, see below
api_entries = []
for url in sorted(pages):
    lk = lock_for(url)
    if lk is None:
        continue
    primary = "null" if not lk["primary"] else ts_str(lk["primary"])
    api_entries.append(f"  {ts_str(url)}: {primary},")
# The map is written INTO api/e.ts, not into a module it imports. Vercel compiles every file
# in api/ as its own function and does not resolve relative imports at runtime — a sibling
# import and a ../src import both returned 500 FUNCTION_INVOCATION_FAILED while the build
# passed. A self-contained function cannot fail that way.
api_block = (
    "// <lock-map> generated by scripts/generate-keyword-locks.py — do not hand-edit\n"
    "const PATH_PRIMARY: Record<string, string | null> = {\n"
    + "\n".join(api_entries)
    + "\n}\n// </lock-map>"
)
if API_LOCKS.exists():
    current = API_LOCKS.read_text()
    start, end = current.find("// <lock-map>"), current.find("// </lock-map>")
    if start >= 0 and end > start:
        updated = current[:start] + api_block + current[end + len("// </lock-map>"):]
        if updated != current:
            if not CHECK:
                API_LOCKS.write_text(updated)
            changed.append(str(API_LOCKS.relative_to(ROOT)))
    else:
        print("  api/e.ts has no <lock-map> markers — landing class will read as unowned")

if CHECK:
    if changed:
        print(f"keyword locks OUT OF DATE in {len(changed)} file(s):"); [print("  ", c) for c in changed[:20]]
        sys.exit(1)
    print(f"keyword locks OK — {len(comp_pages)} page files + {len(entries)} module entries match the contract")
else:
    print(f"keyword locks written: {len(changed)} file(s) updated ({len(comp_pages)} page files, {len(entries)} module entries)")

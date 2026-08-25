#!/usr/bin/env python3
"""Refuse a ship when the SEO contract is broken.

Not another keyword map. Checks myCHEF-AE-SEO-STANDARD.json plus live title/H1
strings in src/ against foreign primaries and banned terms.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
VERCEL = ROOT / "vercel.json"
SRC = ROOT / "src"

errors: list[str] = []


def fail(msg: str) -> None:
    errors.append(msg)


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "")).strip().lower()


def has_phrase(text: str, phrase: str) -> bool:
    t, p = norm(text), norm(phrase)
    if not t or not p:
        return False
    return re.search(r"(?<![a-z])" + re.escape(p) + r"(?![a-z])", t) is not None


data = json.loads(CONTRACT.read_text())
pages: dict = data["pages"]
banned_any = []
for b in data.get("banned_terms", []):
    scope = (b.get("scope") or "").lower()
    if scope == "any page" or "title" in scope or "h1" in scope:
        banned_any.append(norm(b["term"]))

owners: dict[str, str] = {}
for path, page in pages.items():
    pk = ((page.get("intent_owner") or {}).get("primary_keyword") or "").strip()
    indexable = ((page.get("indexation") or {}).get("robots") or {}).get("index", True)
    if pk and indexable:
        key = norm(pk)
        if key in owners:
            fail(f"UNIQUE_PRIMARY: {pk!r} owned by {owners[key]} and {path}")
        else:
            owners[key] = path

for path, page in pages.items():
    on = page.get("on_page") or {}
    title, h1 = on.get("title") or "", on.get("h1") or ""
    own = norm((page.get("intent_owner") or {}).get("primary_keyword") or "")
    blob = f"{title} {h1}"
    for term in banned_any:
        if has_phrase(blob, term):
            fail(f"NO_BANNED_IN_TITLE: {path} title/H1 contains {term!r}")
    if not own:
        continue
    for other, owner in owners.items():
        if owner == path:
            continue
        if other in own:
            continue
        if path == "/":
            continue
        if has_phrase(title, other) or has_phrase(h1, other):
            fail(f"FOREIGN_PRIMARY: {path} title/H1 uses {other!r} (owner {owner})")
    idx = page.get("indexation") or {}
    siblings = ((page.get("internal_linking") or {}).get("siblings") or [])
    for sib in siblings:
        url = sib.get("url")
        if url == path:
            fail(f"NO_SELF_SIBLING: {path}")
        elif url and url not in pages:
            fail(f"SIBLINGS_LIVE: {path} → missing {url}")
    canonical = (idx.get("canonical") or "")
    if canonical and not canonical.startswith("https://www.mychef.ae"):
        fail(f"CANONICAL_ABSOLUTE: {path} → {canonical}")
    if idx.get("redirect_to") and idx.get("in_sitemap"):
        fail(f"REDIRECTS_NOT_IN_SITEMAP: {path}")

vercel = json.loads(VERCEL.read_text())
have = {r.get("source") for r in vercel.get("redirects") or []}
for row in data.get("redirects") or []:
    if row.get("from") not in have:
        fail(f"REDIRECT_MISSING: {row.get('from')} → {row.get('to')} not in vercel.json")

seo_title_re = re.compile(r"<SEO\b[^>]*?\btitle=\"([^\"]+)\"", re.S)
h1_re = re.compile(r"<h1\b[^>]*>([^<]+)</h1>", re.I)
for f in SRC.rglob("*.tsx"):
    text = f.read_text(encoding="utf-8", errors="ignore")
    chunks = [m.group(1) for m in seo_title_re.finditer(text)]
    chunks += [m.group(1) for m in h1_re.finditer(text)]
    for chunk in chunks:
        for term in banned_any:
            if has_phrase(chunk, term):
                fail(f"SRC_BANNED: {f.relative_to(ROOT)} {term!r} in {chunk!r}")

if errors:
    print(f"SEO contract FAILED ({len(errors)}):")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print(f"SEO contract OK — {len(pages)} URLs, {len(owners)} unique primaries, 0 collisions.")

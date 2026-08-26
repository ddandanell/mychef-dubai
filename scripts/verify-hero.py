#!/usr/bin/env python3
"""Gate: a hero sells, it does not carry coverage copy.

The hero is the section holding the <h1>. A visitor arriving there wants one promise, one
supporting line and a way to act — not the page's keyword coverage. When the body-sentence
optimizer picked "the first prose paragraph" it picked hero subtitles, and heroes grew to 200+
words: /bbq-catering-dubai reached 245.

This measures the visible words inside the hero of every prerendered page and fails when one
is over budget. Long copy is not deleted by this check — it belongs further down the page,
which is what move-hero-copy.py does.

    python3 scripts/verify-hero.py [--budget 90] [--list]

Needs dist/ — run npm run build && npm run prerender first. With no dist it says so and passes,
so it never blocks a run that had nothing to measure.
"""
from __future__ import annotations

import html
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
BUDGET = int(sys.argv[sys.argv.index("--budget") + 1]) if "--budget" in sys.argv else 90
# An article header legitimately carries a standfirst; a sales hero does not.
ARTICLE_BUDGET = BUDGET + 50
ARTICLE = ("/blog/", "/guide/", "/guides")
LIST = "--list" in sys.argv

# Pages whose hero is deliberately long-form, agreed once rather than argued every run.
EXEMPT = {
    "/mystery-dining-dubai": "the concept has to be explained before anyone will book it",
}


def visible(fragment: str) -> str:
    """Hero prose only.

    Breadcrumbs, eyebrows and button labels are navigation, not copy — counting them punished
    well-written heroes and hid the real offenders. What is measured is what a visitor reads.
    """
    for pattern in (r"<script.*?</script>", r"<style.*?</style>", r"<nav\b.*?</nav>",
                    r"<a\b[^>]*class=\"[^\"]*btn[^\"]*\".*?</a>", r"<button\b.*?</button>"):
        fragment = re.sub(pattern, " ", fragment, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def hero(doc: str) -> str | None:
    m = re.search(r"<main\b.*?</main>", doc, flags=re.S)
    main = m.group(0) if m else doc
    h1 = main.find("<h1")
    if h1 < 0:
        return None
    start = main.rfind("<section", 0, h1)
    if start < 0:
        return None
    depth, end = 0, len(main)
    for m in re.finditer(r"<section\b|</section>", main[start:]):
        depth += 1 if m.group(0).startswith("<section") else -1
        if depth == 0:
            end = start + m.end()
            break
    return visible(main[start:end])


if not DIST.exists() or not any(DIST.rglob("index.html")):
    print("no prerendered pages in dist/ — nothing to measure")
    sys.exit(0)

measured, over, exempted = [], [], []
for f in sorted(DIST.rglob("index.html")):
    rel = f.parent.relative_to(DIST)
    url = "/" if str(rel) == "." else "/" + str(rel).replace("\\", "/")
    text = hero(f.read_text(encoding="utf-8", errors="ignore"))
    if text is None:
        continue
    words = len(text.split())
    measured.append((words, url))
    budget = ARTICLE_BUDGET if url.startswith(ARTICLE) else BUDGET
    if words > budget:
        (exempted if url in EXEMPT else over).append((words, url, text[:90]))

measured.sort()
median = measured[len(measured) // 2][0] if measured else 0

if LIST:
    for words, url in sorted(measured, reverse=True)[:25]:
        print(f"  {words:>4}  {url}")

if over:
    over.sort(reverse=True)
    print(f"hero copy FAILED — {len(over)} page(s) over budget "
          f"({BUDGET} words, {ARTICLE_BUDGET} for articles; median {median}):")
    for words, url, sample in over:
        print(f"  - {words:>4} words  {url}")
        print(f"           {sample}…")
    print("  Move the long copy below the hero: python3 docs/seo/keyword-map/move-hero-copy.py --apply")
    sys.exit(1)

print(f"hero copy OK — {len(measured)} pages, median {median} words of hero prose, none over budget"
      + (f" ({len(exempted)} exempt by decision)" if exempted else ""))

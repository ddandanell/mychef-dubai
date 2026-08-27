#!/usr/bin/env python3
"""Which pages are carrying the site, and which are being carried.

A site with 171 active pages and 26 clicks a week does not have a coverage problem. It has a
concentration problem: crawl budget, internal authority and the owner's attention are spread
across pages that were never going to win, and the pages that could win get a slice of what is
left. Cutting the dead weight is not a loss of "content" — every retired page hands its links
and its crawl share to the page that keeps its topic.

Each active URL gets four numbers it cannot argue with:

  demand      measured UAE search volume for the phrase the contract locked to it
  proof       Search Console impressions and clicks over the last 90 days
  pull        unique pages that link to it in body copy — the site's own vote
  purpose     hub, or parent of other pages, or a page the business needs regardless (legal,
              contact, careers). These are never pruned, whatever the numbers say.

    python3 docs/seo/keyword-map/build-pruning.py [--json]

Writes pruning.json and prints the shortlist. It recommends; it never retires anything —
scripts/retire-url.py does that, one URL at a time, with the four signals it checks.
"""
from __future__ import annotations

import json, pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / "pruning.json"

# What a page has to clear to be left alone. Deliberately low: this is a list of pages with
# nothing at all, not a list of pages that could do better.
MIN_VOLUME = 10          # measured monthly UAE searches for its own primary
MIN_IMPRESSIONS = 30     # over 90 days — roughly one impression every three days
MIN_CLICKS = 1

# Pages the business needs whatever Google thinks. Never on the list.
KEEP_TYPES = {"Homepage", "Hub", "Legal", "Contact"}
KEEP_URLS = {"/", "/contact", "/inquiry", "/about", "/faq", "/privacy", "/terms", "/sitemap",
             "/quality-guarantee-dubai", "/how-we-vet-our-chefs", "/become-a-mychef",
             "/partner-with-us", "/press", "/case-studies", "/our-chefs", "/menus", "/gallery"}
KEEP_PREFIXES = ("/legal", "/policies")


def load(name):
    f = HERE / name
    return json.loads(f.read_text()) if f.exists() else {}


def research(*parts):
    f = HERE / ".live/research" / pathlib.Path(*parts)
    return json.loads(f.read_text()) if f.exists() else {}


def main():
    contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]
    links = {p["url"]: p for p in load("links.json").get("profiles", [])}
    keywords = load("keywords.json").get("rows", [])
    gsc = {p["url"]: p for p in research("gsc", "search-analytics.json").get("pages", [])}
    ga4 = {p["url"]: p for p in research("ga4", "analytics.json").get("pages", [])}
    containment = load("data.json").get("containment", [])

    # Containment is not duplication. "private chef dubai price" sits inside "private chef dubai"
    # and is a different question with its own buyers, so a phrase being a superset of another
    # decides nothing here. The topic a parked page belongs to is recorded as a hint, not a verdict.
    covered_by = {c["long_owner"]: c["short_owner"] for c in containment if c.get("long_owner")}

    primary_volume, primary_kw = {}, {}
    for row in keywords:
        if row.get("role") == "primary" and row.get("primary_owning_url"):
            primary_volume[row["primary_owning_url"]] = row.get("search_volume") or 0
            primary_kw[row["primary_owning_url"]] = row.get("keyword")

    children = {}
    for url, p in contract.items():
        hub = p.get("hub")
        if hub and hub != url:
            children[hub] = children.get(hub, 0) + 1

    rows = []
    for url, p in contract.items():
        if p.get("status") in ("RETIRED",) or p.get("noindex"):
            continue
        prof = links.get(url) or {}
        if prof.get("noindex"):
            continue
        g = gsc.get(url) or {}
        row = {
            "url": url,
            "type": p.get("page_type"),
            "silo": p.get("silo"),
            "primary": primary_kw.get(url) or ((p.get("intent_owner") or {}).get("primary_keyword")),
            "volume": primary_volume.get(url, 0),
            "impressions": g.get("impressions", 0),
            "clicks": g.get("clicks", 0),
            "position": g.get("position"),
            "sessions": (ga4.get(url) or {}).get("sessions", 0),
            "in_contextual": prof.get("in_contextual_unique", 0),
            "children": children.get(url, 0),
            "is_hub": bool(p.get("is_hub")) or children.get(url, 0) > 0,
            "topic_of": covered_by.get(url),
        }
        rows.append(row)

    def verdict(r):
        if r["url"] in KEEP_URLS or r["url"].startswith(KEEP_PREFIXES) or r["type"] in KEEP_TYPES:
            return "keep — the business needs it", 0
        if r["is_hub"]:
            return "keep — other pages are filed under it", 0
        if r["clicks"] >= MIN_CLICKS:
            return "keep — it is already earning clicks", 0
        if r["impressions"] >= MIN_IMPRESSIONS:
            return "keep — Google is testing it", 0
        if r["volume"] >= MIN_VOLUME:
            return "keep — the demand is real, the page has not earned it yet", 0
        if r["impressions"] > 0:
            return "watch — Google shows it occasionally, below the keep line", 1
        # Google Ads reports no volume for its phrase and Search Console has not shown the page
        # once in ninety days. That is a page nobody is looking for and nobody has seen.
        if r["in_contextual"] >= 8:
            return "park — invisible for 90 days, but the site links to it heavily; unlink first", 2
        return "park — no measurable demand, no impression in 90 days", 3

    for r in rows:
        r["verdict"], r["rank"] = verdict(r)

    prune = sorted([r for r in rows if r["rank"] > 0],
                   key=lambda r: (-r["rank"], -r["in_contextual"], r["url"]))
    keep = [r for r in rows if r["rank"] == 0]

    payload = {
        "generated": __import__("datetime").datetime.now().strftime("%Y-%m-%d %H:%M"),
        "thresholds": {"min_volume": MIN_VOLUME, "min_impressions_90d": MIN_IMPRESSIONS,
                       "min_clicks_90d": MIN_CLICKS},
        "intro": ("A page stays if it has measured demand, or Google is already showing it, or the "
                  "business needs it whatever Google thinks. Everything else is spending crawl "
                  "budget and internal authority that the earning pages could use."),
        "counts": {"active": len(rows), "keep": len(keep),
                   "park": sum(1 for r in prune if r["rank"] >= 2),
                   "watch": sum(1 for r in prune if r["rank"] == 1)},
        "prune": prune,
        "keep": sorted(keep, key=lambda r: -r["impressions"])[:40],
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n")

    if "--json" in sys.argv:
        print(json.dumps(payload["counts"], indent=1)); return 0

    print(f"{len(rows)} active pages · keep {len(keep)} · park {payload['counts']['park']} · "
          f"watch {payload['counts']['watch']}\n")
    print(f"{'URL':<44} {'vol':>5} {'impr':>6} {'clk':>4} {'links':>5}  verdict")
    for r in prune[:60]:
        print(f"  {r['url'][:42]:<42} {r['volume']:>5} {r['impressions']:>6} {r['clicks']:>4} "
              f"{r['in_contextual']:>5}  {r['verdict'][:52]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

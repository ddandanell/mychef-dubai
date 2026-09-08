#!/usr/bin/env python3
"""Add institutional catering URLs to the SEO contract.

Un-retires /nursery-catering-dubai and /school-catering-dubai (they were empty
guess-URL 301s). Adds /hospital-catering-dubai, /canteen-management-dubai,
/institutional-catering-dubai and three blogs. Repoints the old
/healthcare-catering-dubai 301 onto the hospital page.

Does not edit existing page copy. Does not invent prices.

    python3 scripts/add-institutional-seo-pages.py
"""
from __future__ import annotations

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
VERCEL = ROOT / "vercel.json"
INVENTORY = ROOT / "docs/seo/url-inventory.json"

SITE = "https://www.mychef.ae"
CHEFS = ["Ahmed Al-Rashid", "Marco Rossi", "Layla Hassan", "Matteo Moretti"]
MUST_NOT = ["Thomas Chen", "Marco Adriano", "Elena Vasquez"]
QA = [
    "Exactly one H1.",
    "Locked primary is not used as an H2 farm.",
    "No banned term from invariants.banned_terms.",
    "No second page's locked primary in title or H1.",
    "Sibling module matches JSON siblings[] — do not invent cards.",
    "Read-aloud test: copy sounds like a person talking to a host in Dubai.",
    "Do not claim My School Food registration, HACCP certificates or a from-price until src/content/ documents them.",
]


def page(
    *,
    url: str,
    silo: str,
    page_type: str,
    hub: str,
    is_hub: bool,
    primary: str,
    subs: list[str],
    title: str,
    h1: str,
    description: str,
    breadcrumb: list[dict],
    siblings: list[dict],
    uplink: dict,
    supporting: list[dict],
    locations: list[dict],
    schema: list[str],
    og_type: str = "website",
    cap: int = 12,
) -> dict:
    return {
        "url": url,
        "absolute_url": SITE + url,
        "silo": silo,
        "silo_priority": "P1" if page_type == "Commercial landing" else "P2",
        "page_type": page_type,
        "hub": hub,
        "is_hub": is_hub,
        "status": "LOCKED",
        "intent_owner": {
            "primary_keyword": primary,
            "subkeywords": subs,
            "subkeyword_cap": cap,
            "primary_may_appear_in": ["title", "h1", "first_100_words", "one_subheading"],
            "subkeywords_may_appear_in": ["body_sentences_only"],
            "subkeywords_must_not_appear_in": ["h1", "h2", "h3", "title"],
            "subkeyword_notes": {},
        },
        "on_page": {
            "title": title,
            "title_max_chars": 65,
            "h1": h1,
            "h1_count": 1,
            "meta_description": description,
            "meta_description_max_chars": 160,
            "og_title": h1,
            "og_type": og_type,
        },
        "indexation": {
            "robots": {"index": True, "follow": True},
            "canonical": SITE + url,
            "redirect_to": None,
            "in_sitemap": True,
        },
        "schema": schema,
        "internal_linking": {
            "breadcrumb": breadcrumb,
            "uplink_hub": uplink,
            "siblings": siblings,
            "featured_children": [],
            "silo_index": [],
            "commercial_owners": [],
            "supporting_guides": supporting,
            "cross_silo": [
                {"url": "/catering-dubai", "anchor": "Catering", "alt_anchors": []},
                {"url": "/office-catering-dubai", "anchor": "Office catering", "alt_anchors": []},
                {"url": "/halal-catering-dubai", "anchor": "Halal catering", "alt_anchors": []},
            ],
            "locations": locations,
            "do_not_link": [
                "/healthcare-catering-dubai",
                "/university-catering-dubai",
                "/government-event-catering-dubai",
                "/corporate-catering-dubai",
                "/kids-nutrition-chef-dubai",
            ],
        },
        "claims": {
            "may_name_chefs": CHEFS,
            "must_not_name": MUST_NOT,
            "must_not_claim_years_of_experience": True,
            "price_tier": "premium",
            "must_not_claim_until_documented": [
                "My School Food supplier registration",
                "HACCP certificate number",
                "PIC Level 3 roster",
                "from AED per child per day",
            ],
        },
        "qa_gates": QA,
    }


def loc(*pairs: tuple[str, str]) -> list[dict]:
    rows = [{"url": u, "anchor": a, "alt_anchors": []} for u, a in pairs]
    rows.append({"url": "/locations", "anchor": "Areas we serve", "alt_anchors": ["catering near me"]})
    return rows


def main() -> int:
    data = json.loads(CONTRACT.read_text(encoding="utf-8"))
    pages: dict = data["pages"]

    family = [
        ("/", "Home"),
        ("/institutional-catering-dubai", "Institutional catering"),
    ]

    pages["/institutional-catering-dubai"] = page(
        url="/institutional-catering-dubai",
        silo="Institutional Catering",
        page_type="Hub",
        hub="/institutional-catering-dubai",
        is_hub=True,
        primary="institutional catering dubai",
        subs=[
            "nursery catering dubai",
            "school catering dubai",
            "hospital catering dubai",
            "canteen management dubai",
        ],
        title="Institutional Catering Dubai | Nurseries to Hospitals | myCHEF",
        h1="Institutional Catering Dubai",
        description="Institutional catering Dubai for nurseries, schools, hospitals and canteens. Documented kitchens, a quote after we see the site.",
        breadcrumb=[
            {"url": "/", "anchor": "Home"},
            {"url": "/institutional-catering-dubai", "anchor": "Institutional catering", "current": True},
        ],
        siblings=[
            {"url": "/nursery-catering-dubai", "anchor": "Nursery catering", "alt_anchors": []},
            {"url": "/school-catering-dubai", "anchor": "School catering", "alt_anchors": []},
            {"url": "/hospital-catering-dubai", "anchor": "Hospital catering", "alt_anchors": []},
            {"url": "/canteen-management-dubai", "anchor": "Canteen management", "alt_anchors": []},
        ],
        uplink={"url": "/catering-dubai", "anchor": "Catering", "alt_anchors": ["catering dubai"]},
        supporting=[
            {"url": "/blog/dubai-school-food-rules-2026", "anchor": "Dubai school food rules 2026", "alt_anchors": []},
        ],
        locations=loc(("/locations/downtown-dubai", "Downtown Dubai"), ("/locations/business-bay", "Business Bay"), ("/locations/difc", "DIFC")),
        schema=["Service", "BreadcrumbList"],
        cap=8,
    )
    # Hub subs include sibling primaries — that would fail FOREIGN in title/h1 only.
    # Keep hub subs as non-primary phrases.
    pages["/institutional-catering-dubai"]["intent_owner"]["subkeywords"] = [
        "education catering dubai",
        "healthcare catering dubai",
        "staff canteen dubai",
        "early years catering dubai",
        "patient meal services dubai",
        "corporate canteen catering dubai",
        "nut-free institutional meals dubai",
        "documented catering kitchen dubai",
    ]

    pages["/nursery-catering-dubai"] = page(
        url="/nursery-catering-dubai",
        silo="Institutional Catering",
        page_type="Commercial landing",
        hub="/institutional-catering-dubai",
        is_hub=False,
        primary="nursery catering dubai",
        subs=[
            "nursery catering companies dubai",
            "nursery meal plans dubai",
            "preschool catering dubai",
            "nursery lunch delivery dubai",
            "nut-free nursery meals dubai",
            "halal nursery meals dubai",
            "healthy meals for nurseries dubai",
            "early years catering dubai",
        ],
        title="Nursery Catering Dubai | Daily Meals for Early Years | myCHEF",
        h1="Nursery Catering Dubai",
        description="Nursery catering Dubai for early-years meals. Documented kitchens, allergen lists, a quote after we see the site. WhatsApp the enrolment.",
        breadcrumb=[
            {"url": "/", "anchor": "Home"},
            {"url": "/institutional-catering-dubai", "anchor": "Institutional catering"},
            {"url": "/nursery-catering-dubai", "anchor": "Nursery catering", "current": True},
        ],
        siblings=[
            {"url": "/school-catering-dubai", "anchor": "School catering", "alt_anchors": []},
            {"url": "/canteen-management-dubai", "anchor": "Canteen management", "alt_anchors": []},
            {"url": "/hospital-catering-dubai", "anchor": "Hospital catering", "alt_anchors": []},
        ],
        uplink={"url": "/institutional-catering-dubai", "anchor": "Institutional catering", "alt_anchors": []},
        supporting=[
            {"url": "/blog/nut-free-halal-nursery-meals-dubai", "anchor": "Nut-free, allergen and halal nursery meals", "alt_anchors": []},
            {"url": "/blog/nursery-meals-vs-packed-lunch-dubai", "anchor": "Provided meals vs packed lunch", "alt_anchors": []},
        ],
        locations=loc(("/locations/arabian-ranches", "Arabian Ranches"), ("/locations/dubai-hills", "Dubai Hills"), ("/locations/jumeirah", "Jumeirah")),
        schema=["Service", "FAQPage", "BreadcrumbList"],
    )

    pages["/school-catering-dubai"] = page(
        url="/school-catering-dubai",
        silo="Institutional Catering",
        page_type="Commercial landing",
        hub="/institutional-catering-dubai",
        is_hub=False,
        primary="school catering dubai",
        subs=[
            "school catering companies dubai",
            "school lunch delivery dubai",
            "school canteen catering dubai",
            "healthy school lunch dubai",
            "school meal plans dubai",
            "khda school catering dubai",
            "education catering dubai",
            "canteen catering services dubai",
        ],
        title="School Catering Dubai | Lunches Built to the Rules | myCHEF",
        h1="School Catering Dubai",
        description="School catering Dubai for lunches and canteens. Built around Dubai Municipality school-food rules. Quote after we see the kitchen and the roll.",
        breadcrumb=[
            {"url": "/", "anchor": "Home"},
            {"url": "/institutional-catering-dubai", "anchor": "Institutional catering"},
            {"url": "/school-catering-dubai", "anchor": "School catering", "current": True},
        ],
        siblings=[
            {"url": "/nursery-catering-dubai", "anchor": "Nursery catering", "alt_anchors": []},
            {"url": "/canteen-management-dubai", "anchor": "Canteen management", "alt_anchors": []},
            {"url": "/hospital-catering-dubai", "anchor": "Hospital catering", "alt_anchors": []},
        ],
        uplink={"url": "/institutional-catering-dubai", "anchor": "Institutional catering", "alt_anchors": []},
        supporting=[
            {"url": "/blog/dubai-school-food-rules-2026", "anchor": "Dubai school food rules 2026", "alt_anchors": []},
        ],
        locations=loc(("/locations/arabian-ranches", "Arabian Ranches"), ("/locations/dubai-hills", "Dubai Hills"), ("/locations/jumeirah", "Jumeirah")),
        schema=["Service", "FAQPage", "BreadcrumbList"],
    )

    pages["/hospital-catering-dubai"] = page(
        url="/hospital-catering-dubai",
        silo="Institutional Catering",
        page_type="Commercial landing",
        hub="/institutional-catering-dubai",
        is_hub=False,
        primary="hospital catering dubai",
        subs=[
            "healthcare catering dubai",
            "hospital catering services dubai",
            "patient meal services dubai",
            "therapeutic diet meals dubai",
            "hospital staff cafeteria catering dubai",
            "texture-modified meals dubai",
            "clinic catering dubai",
            "staff cafeteria dubai",
        ],
        title="Hospital Catering Dubai | Patient and Staff Meals | myCHEF",
        h1="Hospital Catering Dubai",
        description="Hospital catering Dubai for staff cafeterias first, then patient meals when the kitchen and diet list can be documented. Quote after a site walk.",
        breadcrumb=[
            {"url": "/", "anchor": "Home"},
            {"url": "/institutional-catering-dubai", "anchor": "Institutional catering"},
            {"url": "/hospital-catering-dubai", "anchor": "Hospital catering", "current": True},
        ],
        siblings=[
            {"url": "/canteen-management-dubai", "anchor": "Canteen management", "alt_anchors": []},
            {"url": "/school-catering-dubai", "anchor": "School catering", "alt_anchors": []},
            {"url": "/nursery-catering-dubai", "anchor": "Nursery catering", "alt_anchors": []},
        ],
        uplink={"url": "/institutional-catering-dubai", "anchor": "Institutional catering", "alt_anchors": []},
        supporting=[],
        locations=loc(("/locations/downtown-dubai", "Downtown Dubai"), ("/locations/business-bay", "Business Bay"), ("/locations/difc", "DIFC")),
        schema=["Service", "FAQPage", "BreadcrumbList"],
    )

    pages["/canteen-management-dubai"] = page(
        url="/canteen-management-dubai",
        silo="Institutional Catering",
        page_type="Commercial landing",
        hub="/institutional-catering-dubai",
        is_hub=False,
        primary="canteen management dubai",
        subs=[
            "staff canteen management dubai",
            "canteen setup dubai",
            "corporate canteen catering dubai",
            "office cafeteria management dubai",
            "canteen catering services dubai",
            "staff canteen dubai",
            "cashless canteen dubai",
            "outsource canteen catering dubai",
        ],
        title="Canteen Management Dubai | Food, Not Software | myCHEF",
        h1="Canteen Management Dubai",
        description="Canteen management Dubai is food, staff and a kitchen — not a POS app. Setup, staffing and a quote after we walk the room.",
        breadcrumb=[
            {"url": "/", "anchor": "Home"},
            {"url": "/institutional-catering-dubai", "anchor": "Institutional catering"},
            {"url": "/canteen-management-dubai", "anchor": "Canteen management", "current": True},
        ],
        siblings=[
            {"url": "/hospital-catering-dubai", "anchor": "Hospital catering", "alt_anchors": []},
            {"url": "/school-catering-dubai", "anchor": "School catering", "alt_anchors": []},
            {"url": "/office-catering-dubai", "anchor": "Office catering", "alt_anchors": []},
        ],
        uplink={"url": "/institutional-catering-dubai", "anchor": "Institutional catering", "alt_anchors": []},
        supporting=[],
        locations=loc(("/locations/difc", "DIFC"), ("/locations/business-bay", "Business Bay"), ("/locations/downtown-dubai", "Downtown Dubai")),
        schema=["Service", "FAQPage", "BreadcrumbList"],
    )

    blogs = [
        (
            "/blog/nut-free-halal-nursery-meals-dubai",
            "nut-free nursery meals dubai",
            [
                "halal nursery meals dubai",
                "allergen nursery meals dubai",
                "nursery allergy protocol dubai",
                "nut-free kitchen dubai",
                "how dubai nurseries handle food allergies",
                "what foods are restricted in dubai nurseries",
                "nursery meal labelling dubai",
                "preschool allergen matrix dubai",
            ],
            "Nut-Free Nursery Meals Dubai | Allergen and Halal Guide | myCHEF",
            "Nut-Free Nursery Meals Dubai",
            "How nut-free, allergen and halal nursery meals work in Dubai — labelling, kitchens and what to ask a caterer before you sign.",
        ),
        (
            "/blog/nursery-meals-vs-packed-lunch-dubai",
            "nursery provided meals vs packed lunch dubai",
            [
                "do all nurseries in dubai provide meals",
                "nursery lunch dubai",
                "packed lunch nursery dubai",
                "nursery meal plans dubai",
                "preschool catering dubai",
                "healthy meals for nurseries dubai",
                "nursery catering companies dubai",
                "early years lunch dubai",
            ],
            "Nursery Meals vs Packed Lunch Dubai | How to Choose | myCHEF",
            "Nursery Meals vs Packed Lunch Dubai",
            "Provided nursery meals versus packed lunch in Dubai: nut-free control, parent trust, cost of running the kitchen, and when to outsource.",
        ),
        (
            "/blog/dubai-school-food-rules-2026",
            "dubai school food rules 2026",
            [
                "my school food dubai",
                "dubai municipality school food",
                "national guide school food uae",
                "school canteen standards dubai",
                "healthy school lunch dubai",
                "khda school catering",
                "dmchecked school catering",
                "what foods are banned in dubai schools",
            ],
            "Dubai School Food Rules 2026 | Municipality Guide | myCHEF",
            "Dubai School Food Rules 2026",
            "What Dubai Municipality’s school-food rules and My School Food mean for canteens in 2026 — bans, labelling, and what a caterer must be able to show you.",
        ),
    ]
    for url, primary, subs, title, h1, desc in blogs:
        pages[url] = page(
            url=url,
            silo="Blog and Guides",
            page_type="Blog post",
            hub="/guides",
            is_hub=False,
            primary=primary,
            subs=subs,
            title=title,
            h1=h1,
            description=desc,
            breadcrumb=[
                {"url": "/", "anchor": "Home"},
                {"url": "/blog", "anchor": "Journal"},
                {"url": url, "anchor": h1, "current": True},
            ],
            siblings=[
                {"url": "/nursery-catering-dubai", "anchor": "Nursery catering", "alt_anchors": []},
                {"url": "/school-catering-dubai", "anchor": "School catering", "alt_anchors": []},
            ],
            uplink={"url": "/institutional-catering-dubai", "anchor": "Institutional catering", "alt_anchors": []},
            supporting=[],
            locations=loc(("/locations/jumeirah", "Jumeirah"), ("/locations/dubai-hills", "Dubai Hills"), ("/locations/arabian-ranches", "Arabian Ranches")),
            schema=["Article", "BreadcrumbList"],
            og_type="article",
            cap=8,
        )

    # Hub featured children
    pages["/institutional-catering-dubai"]["internal_linking"]["featured_children"] = [
        {"url": "/nursery-catering-dubai", "anchor": "Nursery catering", "alt_anchors": []},
        {"url": "/school-catering-dubai", "anchor": "School catering", "alt_anchors": []},
        {"url": "/hospital-catering-dubai", "anchor": "Hospital catering", "alt_anchors": []},
        {"url": "/canteen-management-dubai", "anchor": "Canteen management", "alt_anchors": []},
    ]

    # Drop empty-shell 301s for nursery and school; retarget healthcare → hospital.
    keep = []
    for row in data.get("redirects") or []:
        src = row.get("from")
        if src in {"/nursery-catering-dubai", "/school-catering-dubai"}:
            continue
        if src == "/healthcare-catering-dubai":
            row = dict(row)
            row["to"] = "/hospital-catering-dubai"
            row["reason"] = "Guess-URL now has a live owner: hospital catering dubai"
        keep.append(row)
    data["redirects"] = keep

    overrides = data.get("canonical_overrides") or {}
    overrides.pop("/nursery-catering-dubai", None)
    overrides.pop("/school-catering-dubai", None)
    overrides["/healthcare-catering-dubai"] = "/hospital-catering-dubai"
    data["canonical_overrides"] = overrides

    CONTRACT.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    vercel = json.loads(VERCEL.read_text(encoding="utf-8"))
    redirs = []
    for row in vercel.get("redirects") or []:
        src = row.get("source")
        if src in {"/nursery-catering-dubai", "/school-catering-dubai"}:
            continue
        if src == "/healthcare-catering-dubai":
            row = dict(row)
            row["destination"] = "/hospital-catering-dubai"
        redirs.append(row)
    vercel["redirects"] = redirs
    VERCEL.write_text(json.dumps(vercel, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    inv = json.loads(INVENTORY.read_text(encoding="utf-8"))
    extra = [
        "/institutional-catering-dubai",
        "/nursery-catering-dubai",
        "/school-catering-dubai",
        "/hospital-catering-dubai",
        "/canteen-management-dubai",
        "/blog/nut-free-halal-nursery-meals-dubai",
        "/blog/nursery-meals-vs-packed-lunch-dubai",
        "/blog/dubai-school-food-rules-2026",
    ]
    urls = list(inv.get("urls") or [])
    live = list(inv.get("live") or [])
    for u in extra:
        if u not in urls:
            urls.append(u)
        if u not in live:
            live.append(u)
    inv["urls"] = sorted(urls)
    inv["live"] = sorted(live)
    INVENTORY.write_text(json.dumps(inv, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print("added", extra)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

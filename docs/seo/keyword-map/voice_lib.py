"""myCHEF voice gate — titles and meta have to sound like us, not a hotel brochure.

The writing system already says who the reader is and which words are banned.
This module turns that into a pass/fail a snippet engine can call before a
variant is allowed onto the queue.

    from voice_lib import score_snippet, persona_for
"""
from __future__ import annotations

import re
import unicodedata
from typing import Any

PROHIBITED = (
    "culinary journey",
    "tantalize",
    "unforgettable",
    "bespoke experience",
    "world-class",
    "exquisite",
    "luxurious",
    "elevate your",
    "passion for food",
    "culinary artisans",
    "unmatched",
    "unparalleled",
    "finest chefs",
    "5-star",
    "indulge",
    "gastronomic",
    "mouth-watering",
    "take your event to the next level",
    "why choose",
)

GENERIC = (
    "best luxury",
    "luxury service",
    "complete culinary",
    "tailored to your lifestyle",
    "seamless experience",
    "premium experience",
)

PERSONAS = {
    "household": {
        "who": "Affluent international residents and business families in Dubai villas and apartments.",
        "fear": "Letting the wrong person into the house, or becoming HR for a cook.",
        "next": "Understand the product versus employing someone, then ask for a match.",
        "tone": "Calm, specific, slightly conversational. Name the mechanism.",
    },
    "event_host": {
        "who": "A host whose night cannot fail in front of guests — villa, yacht, office or wedding.",
        "fear": "The food, the staff or the timing collapsing in public.",
        "next": "See what the team does on the night, what is included, then send the date.",
        "tone": "Direct about the night. No household-chef copy pasted onto an event page.",
    },
    "planner": {
        "who": "Someone comparing options before they pick a commercial page.",
        "fear": "A guide that is secretly a sales page, or advice that does not match Dubai.",
        "next": "Learn the decision, then follow the link to the owner page.",
        "tone": "Useful first. Link to the owner. Do not steal a commercial primary.",
    },
}

HOUSEHOLD_SILOS = {"private chef", "packages", "brand / homepage"}
EVENT_SILOS = {
    "catering",
    "private events",
    "corporate catering",
    "seasonal and occasions",
    "dining experiences",
    "cuisines and dietary",
}


def _norm(s: str) -> str:
    text = unicodedata.normalize("NFKD", s or "")
    text = "".join(c for c in text if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", text.lower()).strip()


def _has_phrase(text: str, phrase: str) -> bool:
    t, p = _norm(text), _norm(phrase)
    if not t or not p:
        return False
    return re.search(r"(?<![a-z0-9])" + re.escape(p) + r"(?![a-z0-9])", t) is not None


def persona_for(silo: str | None, page_type: str | None, url: str | None = None, primary: str | None = None) -> str:
    silo_n = _norm(silo or "")
    ptype = _norm(page_type or "")
    extra = _norm(f"{url or ''} {primary or ''}")
    if "guide" in ptype or "blog" in ptype or "blog" in silo_n or extra.startswith("/blog") or "/guide" in extra:
        return "planner"
    if "yacht" in extra or ("catering" in extra and "private chef" not in extra):
        return "event_host"
    if any(s in silo_n for s in EVENT_SILOS):
        return "event_host"
    if any(s in silo_n for s in HOUSEHOLD_SILOS) or "private chef" in silo_n or "meal" in silo_n:
        return "household"
    if "corporate" in silo_n or "event" in silo_n:
        return "event_host"
    return "household"


def score_snippet(
    *,
    title: str,
    description: str,
    primary: str,
    persona: str,
) -> dict[str, Any]:
    failures: list[str] = []
    warnings: list[str] = []
    blob = f"{title} {description}"
    title_len = len(title or "")
    desc_len = len(description or "")

    if not _has_phrase(title or "", primary or ""):
        failures.append("primary missing from title")
    if title_len < 28:
        failures.append("title length under 28 characters")
    if title_len > 65:
        failures.append("title length over 65 characters")
    if desc_len and desc_len < 70:
        warnings.append("description short of 70 characters")
    if desc_len > 165:
        failures.append("description over 165 characters")

    for term in PROHIBITED:
        if _has_phrase(blob, term):
            failures.append(f"prohibited: {term}")
    for term in GENERIC:
        if _has_phrase(blob, term):
            warnings.append(f"generic: {term}")
    if re.search(r"\bluxury\b", _norm(title or "")) and not re.search(
        r"\b(villa|yacht|household|apartment)\b", _norm(title or "")
    ):
        warnings.append("luxury as an empty adjective")

    score = 10
    score -= 3 * len([f for f in failures if f.startswith("prohibited")])
    score -= 2 if any("primary" in f for f in failures) else 0
    score -= 2 if any("title length" in f for f in failures) else 0
    score -= 1 * len(warnings)
    score = max(0, min(10, score))
    return {
        "passed": not failures,
        "score": score,
        "failures": failures,
        "warnings": warnings,
        "persona": persona if persona in PERSONAS else "household",
        "title_len": title_len,
        "description_len": desc_len,
    }

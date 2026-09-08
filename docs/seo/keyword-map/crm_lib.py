"""CRM engine — GoHighLevel contacts and conversations as SEO evidence.

The board never sees names, emails or phones. Topics are allowlisted and mapped
to the contract owner URL. A hot conversation topic on a page whose Google CTR
is lagging becomes a snippet test, not a new URL.

SEO here is judged by:
  - how many new contacts land in GoHighLevel
  - what those conversations are actually about
  - won opportunities — not rankings alone

    from crm_lib import owner_for_topic, signals_from_public, proposals_from_signals
"""
from __future__ import annotations

from typing import Any

from harvest_ghl_lib import strip_pii  # noqa: F401  — re-exported for tests and MCP

OPTIMIZE_FOR = [
    "new contacts created in GoHighLevel",
    "what conversations are actually about",
    "won opportunities — not rankings alone",
]

# Fallback owners when no contract primary contains the topic.
DEFAULT_OWNERS = {
    "private chef": "/private-chef-dubai",
    "catering": "/catering-dubai",
    "ramadan": "/ramadan-catering-dubai",
    "iftar": "/iftar-catering-dubai",
    "yacht": "/yachts",
    "wedding": "/wedding-catering-dubai",
    "birthday": "/birthday-catering-dubai",
    "corporate": "/corporate",
    "grazing": "/grazing-table-dubai",
    "meal prep": "/weekly-meal-prep-dubai",
    "cooking class": "/private-cooking-classes-dubai",
    "bbq": "/bbq-catering-dubai",
    "canape": "/canape-catering-dubai",
    "live cooking": "/live-cooking-stations-dubai",
    "villa": "/villas-private-residences",
    "majlis": "/ramadan-catering-dubai",
}


def owner_for_topic(topic: str, pages: dict) -> str | None:
    needle = (topic or "").strip().lower()
    if not needle:
        return None
    fallback = DEFAULT_OWNERS.get(needle)
    if fallback and (not pages or fallback in pages):
        return fallback
    hits = []
    for url, page in (pages or {}).items():
        primary = (((page or {}).get("intent_owner") or {}).get("primary_keyword") or "").lower()
        if needle == primary:
            hits.append((0, url))
        elif needle in primary:
            hits.append((len(primary), url))
    if hits:
        hits.sort()
        return hits[0][1]
    return fallback


def signals_from_public(public: dict, pages: dict, snippets: dict | None = None) -> dict[str, Any]:
    public = public or {}
    if not public.get("connected"):
        return {
            "connected": False,
            "error": public.get("error") or "GoHighLevel is not feeding contacts yet",
            "reason": public.get("error") or "not connected",
            "contacts_new": 0,
            "contacts_total": 0,
            "conversations_total": 0,
            "won": 0,
            "signals": [],
        }

    tests = {(t.get("url") or ""): t for t in (snippets or {}).get("tests") or []}
    contacts = public.get("contacts") or {}
    convos = public.get("conversations") or {}
    opps = public.get("opportunities") or {}
    signals = []
    for topic in convos.get("topics") or []:
        label = topic.get("label") or ""
        count = int(topic.get("count") or 0)
        owner = owner_for_topic(label, pages)
        snip = tests.get(owner or "") or {}
        ctr_gap = float(snip.get("ctr_gap") or 0)
        if not owner:
            action = "backlog"
            why = f"People ask about {label} in chat. No live owner — do not mint a URL."
        elif snip.get("status") == "proposed" or ctr_gap >= 0.005:
            action = "snippet_test"
            why = (
                f"{count} conversation hits on {label}. Owner {owner} is showing in Google "
                f"but CTR lags — test the snippet, do not retarget."
            )
        else:
            action = "watch"
            why = f"{count} conversation hits on {label}. Owner {owner} is the page to watch, not a new URL."
        signals.append(
            {
                "topic": label,
                "count": count,
                "owner_url": owner,
                "action": action,
                "why": why,
                "ctr_gap": ctr_gap or None,
                "impressions": snip.get("impressions"),
            }
        )
    signals.sort(key=lambda s: -s["count"])
    google = next((s for s in (contacts.get("sources") or []) if s.get("label") == "google"), None)
    return {
        "connected": True,
        "error": None,
        "reason": "GoHighLevel is feeding counts and allowlisted topics",
        "contacts_total": int(contacts.get("total") or 0),
        "contacts_new": int(contacts.get("new") or 0),
        "contacts_google": int((google or {}).get("count") or 0),
        "conversations_total": int(convos.get("total") or 0),
        "conversations_unread": int(convos.get("open_or_unread") or 0),
        "won": int(opps.get("won") or 0),
        "open_opportunities": int(opps.get("open") or 0),
        "channels": convos.get("channels") or [],
        "sources": contacts.get("sources") or [],
        "signals": signals,
        "optimize_for": list(OPTIMIZE_FOR),
        "north_star": {
            "new_contacts": int(contacts.get("new") or 0),
            "conversations": int(convos.get("total") or 0),
            "won": int(opps.get("won") or 0),
            "google_contacts": int((google or {}).get("count") or 0),
        },
    }


def proposals_from_signals(engine: dict) -> list[dict[str, Any]]:
    """Queue rows for snippet tests only. Watch/backlog stay on /seo/crm."""
    if not (engine or {}).get("connected"):
        return []
    out: list[dict[str, Any]] = []
    for sig in engine.get("signals") or []:
        if sig.get("action") != "snippet_test" or not sig.get("owner_url"):
            continue
        count = int(sig.get("count") or 0)
        out.append(
            {
                "class": "crm_signal",
                "url": sig.get("owner_url"),
                "keyword": sig.get("topic"),
                "reason": sig.get("why"),
                "action": (
                    "Test the Google title on the owner so more of these conversations become contacts. "
                    "Do not change the H1."
                ),
                "action_kind": "snippet_test",
                "topic": sig.get("topic"),
                "conversation_count": count,
                "demand": count,
                "contacts_new": int(engine.get("contacts_new") or 0),
                "mint_url": False,
            }
        )
    return out

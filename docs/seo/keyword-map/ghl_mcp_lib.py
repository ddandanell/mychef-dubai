"""GoHighLevel MCP tools. Counts and allowlisted topics only — never PII.

The token is read from ~/.config/claude-seo/gohighlevel.env (mode 600).
Nothing here writes a contact, sends a message, or returns a name.

    python3 -m pytest docs/seo/keyword-map/test_ghl_mcp.py -q
"""
from __future__ import annotations

import json
import pathlib
import subprocess
import sys
from typing import Any, Callable

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
sys.path.insert(0, str(HERE))
import crm_lib as C  # noqa: E402
import harvest_ghl_lib as H  # noqa: E402

Caller = Callable[..., tuple[int, dict]]

OPTIMIZE_FOR = list(C.OPTIMIZE_FOR)
MISSING_SCOPES = (
    "Private Integration Token reached the Dubai location but is missing CRM scopes. "
    "In GoHighLevel → Settings → Private Integrations, enable "
    + ", ".join(H.REQUIRED_SCOPES)
    + " and re-run ghl_harvest or npm run seo:ghl."
)

DROP_KEYS = {
    "email",
    "phone",
    "firstname",
    "lastname",
    "first_name",
    "last_name",
    "fullname",
    "full_name",
    "contactname",
    "contact_name",
    "companyname",
    "company_name",
    "lastmessagebody",
    "last_message_body",
    "snippet",
    "subject",
    "message",
    "body",
    "notes",
    "tags",
    "address",
    "postalcode",
    "contactid",
    "conversationid",
    "contact",
}
CONTACTISH = {
    "email",
    "phone",
    "firstname",
    "lastname",
    "contactname",
    "lastmessagebody",
    "tags",
}

TOOLS = [
    {
        "name": "ghl_connect",
        "description": (
            "Connect to GoHighLevel for myCHEF.ae. Checks the Private Integration Token "
            "and Dubai location. Returns connection status, required scopes, and the "
            "metrics SEO optimizes for (new contacts, conversation topics, won opportunities). "
            "Never returns names, emails, phones or message bodies."
        ),
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "ghl_contacts_summary",
        "description": (
            "How many contacts are in GoHighLevel, how many are new in 30 days, and "
            "which allowlisted sources they came from (google, whatsapp, website…). "
            "Counts only — no contact records."
        ),
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "ghl_conversation_topics",
        "description": (
            "What conversations are actually about, mapped to allowlisted topics "
            "(private chef, yacht, ramadan, catering…). Use this to decide which "
            "owner URL to work. Does not mint URLs. No message bodies."
        ),
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "ghl_opportunities",
        "description": "Won / open / lost opportunity counts. No deal names or values that identify a person.",
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "ghl_seo_signals",
        "description": (
            "CRM → SEO engine. Each conversation topic maps to a contract owner URL. "
            "Hot topic + lagging Google CTR becomes a snippet test. Unknown topics go "
            "to backlog — never a new URL. Optimizes for new contacts created."
        ),
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "ghl_harvest",
        "description": (
            "Pull a fresh GoHighLevel snapshot (counts and topics only) and rebuild "
            "the CRM engine JSON the SEO board reads. Does not edit page copy."
        ),
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
]


def sanitize(value: Any) -> Any:
    if isinstance(value, dict):
        keys = {(key or "").lower() for key in value}
        drop = set(DROP_KEYS)
        if keys & CONTACTISH:
            drop.update({"name", "tags", "notes"})
        out = {}
        for key, item in value.items():
            if (key or "").lower() in drop:
                continue
            out[key] = sanitize(item)
        return out
    if isinstance(value, list):
        return [sanitize(item) for item in value]
    if isinstance(value, str):
        return C.strip_pii(value)
    return value


def _load_json(name: str) -> dict:
    path = HERE / name
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def _contract_pages() -> dict:
    path = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
    if not path.exists():
        return {}
    try:
        return (json.loads(path.read_text(encoding="utf-8")).get("pages") or {})
    except json.JSONDecodeError:
        return {}


def _disconnected(error: str, **extra: Any) -> dict[str, Any]:
    return sanitize(
        {
            "connected": False,
            "error": error,
            "required_scopes": list(H.REQUIRED_SCOPES),
            "optimize_for": list(OPTIMIZE_FOR),
            "credential": "~/.config/claude-seo/gohighlevel.env",
            **extra,
        }
    )


def connect(*, creds: tuple[str, str] | None = None, caller: Caller | None = None) -> dict[str, Any]:
    token, hinted = creds if creds is not None else H.load_creds()
    if not token:
        return _disconnected("no GHL_API_KEY in ~/.config/claude-seo/gohighlevel.env")
    call = caller or H.ghl_call
    location, source, locations = H.discover_location(token, hinted, caller=call)
    public_locs = H.public_locations(locations)
    if not location:
        return _disconnected(
            "token present but no locationId — set GHL_LOCATION_ID in gohighlevel.env",
            locations=public_locs,
        )
    code, payload = call("/contacts/", token, {"locationId": location, "limit": 1})
    if code in (401, 403):
        return _disconnected(MISSING_SCOPES, locations=public_locs, http=code)
    if code != 200:
        err = payload.get("error") or payload.get("message") or f"HTTP {code}"
        return _disconnected(str(err)[:180], locations=public_locs, http=code)
    snap = _load_json("ghl.json")
    contacts = snap.get("contacts") if snap.get("connected") else None
    return sanitize(
        {
            "connected": True,
            "error": None,
            "location_source": source,
            "locations": public_locs,
            "required_scopes": list(H.REQUIRED_SCOPES),
            "optimize_for": list(OPTIMIZE_FOR),
            "last_harvest": snap.get("generated"),
            "contacts": contacts or {"note": "run ghl_harvest for counts"},
        }
    )


def contacts_summary(*, public: dict | None = None) -> dict[str, Any]:
    snap = public if public is not None else _load_json("ghl.json")
    if not snap.get("connected"):
        return _disconnected(snap.get("error") or "GoHighLevel is not feeding contacts yet")
    return sanitize(
        {
            "connected": True,
            "window_days": snap.get("window_days") or 30,
            "contacts": snap.get("contacts") or {},
            "optimize_for": list(OPTIMIZE_FOR),
        }
    )


def conversation_topics(*, public: dict | None = None) -> dict[str, Any]:
    snap = public if public is not None else _load_json("ghl.json")
    if not snap.get("connected"):
        return _disconnected(snap.get("error") or "GoHighLevel is not feeding conversations yet")
    convos = snap.get("conversations") or {}
    return sanitize(
        {
            "connected": True,
            "total": convos.get("total") or 0,
            "open_or_unread": convos.get("open_or_unread") or 0,
            "topics": convos.get("topics") or [],
            "channels": convos.get("channels") or [],
            "optimize_for": list(OPTIMIZE_FOR),
            "rule": "Topics map to contract owner URLs. Never mint a URL from chat.",
        }
    )


def opportunities(*, public: dict | None = None) -> dict[str, Any]:
    snap = public if public is not None else _load_json("ghl.json")
    if not snap.get("connected"):
        return _disconnected(snap.get("error") or "GoHighLevel is not feeding opportunities yet")
    opps = snap.get("opportunities") or {}
    return sanitize(
        {
            "connected": True,
            "open": opps.get("open") or 0,
            "won": opps.get("won") or 0,
            "lost": opps.get("lost") or 0,
            "abandoned": opps.get("abandoned") or 0,
            "optimize_for": list(OPTIMIZE_FOR),
        }
    )


def seo_signals(
    *,
    public: dict | None = None,
    pages: dict | None = None,
    snippets: dict | None = None,
) -> dict[str, Any]:
    snap = public if public is not None else _load_json("ghl.json")
    engine = C.signals_from_public(
        snap,
        pages if pages is not None else _contract_pages(),
        snippets if snippets is not None else _load_json("snippets.json"),
    )
    engine["proposals"] = C.proposals_from_signals(engine)
    engine["required_scopes"] = list(H.REQUIRED_SCOPES)
    return sanitize(engine)


def harvest(*, run: Callable[..., subprocess.CompletedProcess] | None = None) -> dict[str, Any]:
    runner = run or subprocess.run
    harvest_py = HERE / "harvest-ghl.py"
    crm_py = HERE / "build-crm.py"
    try:
        h = runner([sys.executable, str(harvest_py)], cwd=str(ROOT), capture_output=True, text=True, timeout=120)
        c = runner([sys.executable, str(crm_py)], cwd=str(ROOT), capture_output=True, text=True, timeout=60)
    except (OSError, subprocess.TimeoutExpired) as exc:
        return _disconnected(f"harvest failed to start: {str(exc)[:160]}")
    snap = _load_json("ghl.json")
    crm = _load_json("crm.json")
    return sanitize(
        {
            "connected": bool(snap.get("connected")),
            "error": snap.get("error"),
            "harvest_exit": getattr(h, "returncode", None),
            "crm_exit": getattr(c, "returncode", None),
            "contacts": (snap.get("contacts") or {}) if snap.get("connected") else {},
            "signals": (crm.get("signals") or []) if crm else [],
            "optimize_for": list(OPTIMIZE_FOR),
            "note": "Published JSON is counts and topics. Raw CRM stays gitignored.",
        }
    )


def dispatch(name: str, arguments: dict | None = None, **kwargs: Any) -> dict[str, Any]:
    del arguments  # none of the tools take arguments today
    handlers = {
        "ghl_connect": connect,
        "ghl_contacts_summary": contacts_summary,
        "ghl_conversation_topics": conversation_topics,
        "ghl_opportunities": opportunities,
        "ghl_seo_signals": seo_signals,
        "ghl_harvest": harvest,
    }
    fn = handlers.get(name)
    if not fn:
        return {"error": "unknown tool", "connected": False}
    return fn(**kwargs)

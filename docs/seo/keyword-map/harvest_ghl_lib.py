"""Turn GoHighLevel contacts, opportunities and conversations into board numbers.

The published JSON is counts and allowlisted topics. Names, emails, phones,
raw tags, raw CRM sources and message bodies stay in the gitignored snapshot.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import pathlib
import re
import ssl
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter
from typing import Any

TOPIC_TERMS = (
    "private chef",
    "catering",
    "ramadan",
    "iftar",
    "yacht",
    "wedding",
    "birthday",
    "corporate",
    "grazing",
    "meal prep",
    "cooking class",
    "bbq",
    "canape",
    "live cooking",
    "villa",
    "majlis",
)


def _parse_when(value: str | None) -> dt.datetime | None:
    if not value:
        return None
    text = value.replace("Z", "+00:00")
    try:
        return dt.datetime.fromisoformat(text)
    except ValueError:
        return None


def _norm_status(value: str | None) -> str:
    return (value or "").strip().lower()


PII_EMAIL = re.compile(r"[^@\s]+@[^@\s]+\.[a-z]{2,}", re.I)
PII_PHONE = re.compile(r"(?<!\d)(?:\+|00)[\d\s().-]{8,}\d|(?<!\d)\d{9,15}(?!\d)")
SOURCE_BUCKETS = (
    ("whatsapp", ("whatsapp", "wa ")),
    ("website", ("website", "web", "form", "landing")),
    ("google", ("google", "gmb", "maps")),
    ("facebook", ("facebook", "fb ", "meta")),
    ("instagram", ("instagram", "ig ")),
    ("referral", ("referral", "word of mouth")),
    ("chat", ("chat", "widget", "conversation")),
)
CHANNEL_BUCKETS = (
    ("whatsapp", "whatsapp"),
    ("sms", "sms"),
    ("email", "email"),
    ("phone", "phone"),
    ("facebook", "facebook"),
    ("instagram", "instagram"),
    ("live_chat", "livechat"),
    ("live_chat", "live_chat"),
)


def looks_like_pii(value: str) -> bool:
    text = (value or "").strip()
    if not text:
        return False
    if PII_EMAIL.search(text) or PII_PHONE.search(text):
        return True
    if "@" in text:
        return True
    return False


def strip_pii(text: str) -> str:
    cleaned = PII_EMAIL.sub("[redacted-email]", text or "")
    cleaned = PII_PHONE.sub("[redacted-phone]", cleaned)
    return cleaned


def bucket_source(raw: str | None) -> str:
    text = (raw or "").strip().lower()
    for label, needles in SOURCE_BUCKETS:
        if any(needle in text for needle in needles):
            return label
    if looks_like_pii(text):
        return "other"
    if not text or text == "unknown":
        return "unknown"
    return "other"


def bucket_channel(raw: str | None) -> str:
    text = (raw or "").replace("TYPE_", "").strip().lower()
    if looks_like_pii(text):
        return "other"
    for label, needle in CHANNEL_BUCKETS:
        if needle in text:
            return label
    return "other"


def _match_topics(*blobs: str) -> Counter[str]:
    counts: Counter[str] = Counter()
    for blob in blobs:
        text = strip_pii(blob or "")
        text = re.sub(r"\[redacted-(?:email|phone)\]", " ", text).strip().lower()
        if not text:
            continue
        for term in TOPIC_TERMS:
            if term == text or term in text:
                counts[term] += 1
    return counts


def _topics_from(contacts: list[dict], conversations: list[dict]) -> list[dict[str, Any]]:
    counts: Counter[str] = Counter()
    for contact in contacts:
        for tag in contact.get("tags") or []:
            counts.update(_match_topics(str(tag)))
    for convo in conversations:
        blob = " ".join(
            str(convo.get(k) or "")
            for k in ("lastMessageBody", "last_message_body", "snippet", "subject", "type")
        )
        counts.update(_match_topics(blob))
    return [{"label": label, "count": n} for label, n in counts.most_common(20)]


def public_payload(
    *,
    contacts: list[dict],
    opportunities: list[dict],
    conversations: list[dict],
    window_days: int = 30,
    now_iso: str | None = None,
    location_id: str | None = None,
) -> dict[str, Any]:
    now = dt.datetime.fromisoformat(now_iso.replace("Z", "+00:00")) if now_iso else dt.datetime.now(dt.timezone.utc)
    if now.tzinfo is None:
        now = now.replace(tzinfo=dt.timezone.utc)
    since = now - dt.timedelta(days=window_days)

    new_contacts = 0
    sources: Counter[str] = Counter()
    for contact in contacts:
        added = _parse_when(contact.get("dateAdded") or contact.get("date_added"))
        if added and added.tzinfo is None:
            added = added.replace(tzinfo=dt.timezone.utc)
        if added and added >= since:
            new_contacts += 1
        sources[bucket_source(contact.get("source") or contact.get("attributionSource") or "unknown")] += 1

    opp_status: Counter[str] = Counter()
    for opp in opportunities:
        status = _norm_status(opp.get("status") or opp.get("opportunityStatus"))
        if status in {"won", "open", "lost", "abandoned"}:
            opp_status[status] += 1
        else:
            opp_status[status or "other"] += 1

    unread = 0
    starred = 0
    by_type: Counter[str] = Counter()
    for convo in conversations:
        if int(convo.get("unreadCount") or convo.get("unread_count") or 0) > 0:
            unread += 1
        if convo.get("starred"):
            starred += 1
        by_type[bucket_channel(convo.get("type") or convo.get("channel") or "unknown")] += 1

    loc = (location_id or "").strip()
    loc_public = f"…{loc[-4:]}" if len(loc) >= 4 else (loc or None)

    return {
        "window_days": window_days,
        "location": loc_public,
        "contacts": {
            "total": len(contacts),
            "new": new_contacts,
            "sources": [{"label": k, "count": v} for k, v in sources.most_common()],
        },
        "opportunities": {
            "total": len(opportunities),
            "open": opp_status.get("open", 0),
            "won": opp_status.get("won", 0),
            "lost": opp_status.get("lost", 0),
            "abandoned": opp_status.get("abandoned", 0),
        },
        "conversations": {
            "total": len(conversations),
            "open_or_unread": unread,
            "starred": starred,
            "channels": [{"label": k, "count": v} for k, v in by_type.most_common()],
            "topics": _topics_from(contacts, conversations),
        },
    }


# --- Live API (shared by harvest-ghl.py and the GoHighLevel MCP) -----------------

CFG = pathlib.Path(os.path.expanduser("~/.config/claude-seo/gohighlevel.env"))
BASE = "https://services.leadconnectorhq.com"
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)
CAP = 500
REQUIRED_SCOPES = (
    "contacts.readonly",
    "opportunities.readonly",
    "conversations.readonly",
    "conversations/message.readonly",
)

try:
    import certifi

    os.environ.setdefault("SSL_CERT_FILE", certifi.where())
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()


def env_file(path: pathlib.Path) -> dict[str, str]:
    if not path.exists():
        return {}
    out: dict[str, str] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        if "=" in line and not line.strip().startswith("#"):
            k, v = line.split("=", 1)
            out[k.strip()] = v.strip().strip('"').strip("'")
    return out


def load_creds() -> tuple[str, str]:
    file_env = env_file(CFG)
    token = os.environ.get("GHL_API_KEY") or file_env.get("GHL_API_KEY") or ""
    location = os.environ.get("GHL_LOCATION_ID") or file_env.get("GHL_LOCATION_ID") or ""
    return token, location


ALLOWED_GET = {"/contacts/", "/locations/search"}
ALLOWED_POST = {"/contacts/search", "/opportunities/search", "/conversations/search", "/locations/search"}


def ghl_call(path: str, token: str, params: dict | None = None, body: dict | None = None) -> tuple[int, dict]:
    method = "POST" if body is not None else "GET"
    route = path.split("?", 1)[0]
    allowed = ALLOWED_POST if method == "POST" else ALLOWED_GET
    if route not in allowed:
        return 0, {"error": f"blocked {method} {route} — read-only CRM client"}
    url = BASE + path
    if params:
        url += "?" + urllib.parse.urlencode({k: v for k, v in params.items() if v not in (None, "")})
    headers = {
        "Authorization": "Bearer " + token,
        "Version": "2021-07-28",
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Agent": UA,
    }
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=45, context=CTX) as resp:
            return resp.status, json.load(resp)
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:400]
        try:
            parsed = json.loads(detail) if detail.startswith("{") else {"error": detail}
        except json.JSONDecodeError:
            parsed = {"error": detail}
        return exc.code, parsed
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, OSError) as exc:
        return 0, {"error": str(exc)[:200]}


def paginate_list(path: str, token: str, params: dict, key: str, *, caller=None) -> tuple[list[dict], dict | None]:
    call = caller or ghl_call
    rows: list[dict] = []
    start_after_id = None
    start_after = None
    while len(rows) < CAP:
        q = dict(params)
        q["limit"] = min(100, CAP - len(rows))
        if start_after_id:
            q["startAfterId"] = start_after_id
        if start_after:
            q["startAfter"] = start_after
        code, payload = call(path, token, q)
        if code != 200:
            return rows, {"status": code, "error": payload, "partial": bool(rows)}
        batch = payload.get(key) or payload.get("data") or []
        if not isinstance(batch, list):
            break
        rows.extend(item for item in batch if isinstance(item, dict))
        meta = payload.get("meta") or {}
        start_after_id = meta.get("startAfterId")
        start_after = meta.get("startAfter")
        if not batch or not start_after_id:
            break
    return rows, None


def paginate_post(path: str, token: str, body: dict, key: str, *, caller=None) -> tuple[list[dict], dict | None]:
    """LeadConnector search endpoints are POST with a JSON body."""
    call = caller or ghl_call
    rows: list[dict] = []
    start_after_id = None
    start_after = None
    while len(rows) < CAP:
        q = dict(body)
        limit = min(100, CAP - len(rows))
        q["limit"] = limit
        q["pageLimit"] = limit
        if start_after_id:
            q["startAfterId"] = start_after_id
        if start_after:
            q["startAfter"] = start_after
        code, payload = call(path, token, body=q)
        if code != 200:
            return rows, {"status": code, "error": payload, "partial": bool(rows)}
        batch = payload.get(key) or payload.get("data") or []
        if not isinstance(batch, list):
            break
        rows.extend(item for item in batch if isinstance(item, dict))
        meta = payload.get("meta") or {}
        start_after_id = meta.get("startAfterId")
        start_after = meta.get("startAfter")
        if not batch or not start_after_id:
            break
    return rows, None


def list_locations(token: str, *, caller=None) -> list[dict]:
    call = caller or ghl_call
    code, payload = call("/locations/search", token, {"limit": 20})
    if code != 200:
        return []
    locations = payload.get("locations") or payload.get("data") or []
    if isinstance(locations, dict):
        locations = locations.get("locations") or []
    return [loc for loc in locations if isinstance(loc, dict)]


def discover_location(token: str, hinted: str, *, caller=None) -> tuple[str, str, list[dict]]:
    locations = list_locations(token, caller=caller)
    if hinted:
        return hinted, "env", locations
    ae = [
        loc for loc in locations
        if (loc.get("country") or "").upper() in {"AE", "UAE"}
        or "dubai" in (loc.get("name") or "").lower()
    ]
    pick = ae or locations
    loc_id = (pick[0].get("id") or pick[0].get("locationId") or "") if pick else ""
    return loc_id, "api", locations


def public_locations(locations: list[dict]) -> list[dict[str, str]]:
    return [
        {
            "name": loc.get("name") or "",
            "country": loc.get("country") or "",
            "city": loc.get("city") or "",
        }
        for loc in locations
        if isinstance(loc, dict)
    ]

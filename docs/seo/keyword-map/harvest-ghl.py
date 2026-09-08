#!/usr/bin/env python3
"""GoHighLevel CRM → ghl.json for /seo/e.

Pulls contacts, opportunities and conversations through the Private Integration
Token. The published file is counts, sources and topics only — names, emails,
phones and message bodies stay in .live/research/ghl/ (gitignored).

    python3 docs/seo/keyword-map/harvest-ghl.py

Credentials: ~/.config/claude-seo/gohighlevel.env (mode 600) or GHL_API_KEY /
GHL_LOCATION_ID in the environment. Never fails the loop.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import harvest_ghl_lib as ghl  # noqa: E402

LIVE = HERE / ".live/research/ghl"
OUT = HERE / "ghl.json"
REQUIRED_SCOPES = ghl.REQUIRED_SCOPES
load_creds = ghl.load_creds
call = ghl.ghl_call
paginate_list = ghl.paginate_list
paginate_post = ghl.paginate_post
discover_location = ghl.discover_location


def write_snapshot(reason: str | None, *, contacts, opportunities, conversations, location_id: str, locations: list[dict], connected: bool) -> int:
    payload = ghl.public_payload(
        contacts=contacts,
        opportunities=opportunities,
        conversations=conversations,
        window_days=30,
        location_id=location_id,
    )
    payload["generated"] = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
    payload["connected"] = connected
    payload["error"] = reason
    payload["required_scopes"] = list(REQUIRED_SCOPES)
    payload["locations"] = [
        {
            "name": loc.get("name") or "",
            "country": loc.get("country") or "",
            "city": loc.get("city") or "",
        }
        for loc in locations
    ]
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"ghl.json — {'connected' if connected else 'not connected'}" + (f" ({reason})" if reason else ""))
    return 0


def main() -> int:
    try:
        return _main()
    except Exception as ex:  # noqa: BLE001
        return write_snapshot(f"harvest crashed: {str(ex)[:180]}",
                              contacts=[], opportunities=[], conversations=[],
                              location_id="", locations=[], connected=False)


def _main() -> int:
    token, hinted = load_creds()
    if not token:
        return write_snapshot("no GHL_API_KEY in ~/.config/claude-seo/gohighlevel.env",
                              contacts=[], opportunities=[], conversations=[], location_id="", locations=[], connected=False)

    location, how, locations = discover_location(token, hinted)
    if not location:
        return write_snapshot("token present but no locationId — set GHL_LOCATION_ID in gohighlevel.env",
                              contacts=[], opportunities=[], conversations=[], location_id="", locations=locations, connected=False)

    contacts, contact_err = paginate_list("/contacts/", token, {"locationId": location}, "contacts")
    if contact_err:
        code, payload = call(
            "/contacts/search",
            token,
            body={"locationId": location, "pageLimit": 100},
        )
        if code == 200:
            contacts = payload.get("contacts") or payload.get("data") or []
            contact_err = None
        else:
            reason = (
                "Private Integration Token reached the Dubai location but is missing CRM scopes. "
                "In GoHighLevel → Settings → Private Integrations, enable "
                + ", ".join(REQUIRED_SCOPES)
                + " and re-run npm run seo:ghl."
            )
            return write_snapshot(reason, contacts=[], opportunities=[], conversations=[],
                                  location_id=location, locations=locations, connected=False)

    opps, opp_err = paginate_post("/opportunities/search", token, {"location_id": location}, "opportunities")
    convos, convo_err = paginate_post("/conversations/search", token, {"locationId": location}, "conversations")
    partial = []
    if opp_err:
        partial.append(f"opportunities HTTP {opp_err.get('status')}")
    if convo_err:
        partial.append(f"conversations HTTP {convo_err.get('status')}")

    LIVE.mkdir(parents=True, exist_ok=True)
    raw = LIVE / "raw.json"
    raw.write_text(
        json.dumps(
            {
                "location_id": location,
                "location_source": how,
                "contacts": contacts,
                "opportunities": opps,
                "conversations": convos,
            },
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )
    os.chmod(raw, 0o600)

    reason = None
    connected = True
    if partial:
        reason = (
            "Partial CRM harvest: "
            + "; ".join(partial)
            + ". Counts for the failed source are incomplete, not zero-as-truth."
        )
    return write_snapshot(
        reason,
        contacts=contacts,
        opportunities=opps,
        conversations=convos,
        location_id=location,
        locations=locations,
        connected=connected,
    )


if __name__ == "__main__":
    sys.exit(main())

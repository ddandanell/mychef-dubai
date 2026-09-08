#!/usr/bin/env python3
"""CRM engine — GoHighLevel contacts and conversations as SEO evidence.

Reads ghl.json (counts and allowlisted topics) plus the contract and snippet
research. Writes crm.json. Archives to seo_crm_snapshots when Neon is reachable.

Does not apply copy. Does not mint URLs. Success is new contacts and what
people actually talk about.

    python3 docs/seo/keyword-map/build-crm.py
"""
from __future__ import annotations

import datetime as dt
import json
import os
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
sys.path.insert(0, str(HERE))
import crm_lib as C  # noqa: E402
import harvest_ghl_lib as H  # noqa: E402
import seo_v2_schema  # noqa: E402

CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
OUT = HERE / "crm.json"


def _load(name: str) -> dict:
    path = HERE / name
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def main() -> int:
    public = _load("ghl.json")
    pages = {}
    if CONTRACT.exists():
        try:
            pages = json.loads(CONTRACT.read_text(encoding="utf-8")).get("pages") or {}
        except json.JSONDecodeError:
            pages = {}
    snippets = _load("snippets.json")
    engine = C.signals_from_public(public, pages, snippets)
    proposals = C.proposals_from_signals(engine)
    generated = dt.datetime.now().strftime("%Y-%m-%d %H:%M")
    payload = {
        "generated": generated,
        "intro": (
            "The CRM engine reads GoHighLevel. Success is how many new contacts land "
            "and what conversations are actually about — not rankings alone. A hot "
            "topic maps to the contract owner. It never mints a URL."
        ),
        "optimize_for": engine.get("optimize_for") or list(C.OPTIMIZE_FOR),
        "connected": engine.get("connected"),
        "error": engine.get("error"),
        "reason": engine.get("reason"),
        "required_scopes": list(H.REQUIRED_SCOPES),
        "credential": "~/.config/claude-seo/gohighlevel.env",
        "mcp": "gohighlevel — ghl_connect, ghl_contacts_summary, ghl_conversation_topics, "
               "ghl_opportunities, ghl_seo_signals, ghl_harvest",
        "tiles": (
            [
                {"value": "—", "label": "New contacts (30d)"},
                {"value": "—", "label": "Conversations"},
                {"value": "—", "label": "Won opportunities"},
                {"value": "—", "label": "Topic signals"},
            ]
            if not engine.get("connected")
            else [
                {"value": str(engine.get("contacts_new") or 0), "label": "New contacts (30d)"},
                {"value": str(engine.get("conversations_total") or 0), "label": "Conversations"},
                {"value": str(engine.get("won") or 0), "label": "Won opportunities"},
                {"value": str(len(engine.get("signals") or [])), "label": "Topic signals"},
            ]
        ),
        "north_star": engine.get("north_star")
        or {
            "new_contacts": engine.get("contacts_new") or 0,
            "conversations": engine.get("conversations_total") or 0,
            "won": engine.get("won") or 0,
            "google_contacts": engine.get("contacts_google") or 0,
        },
        "contacts_total": engine.get("contacts_total") or 0,
        "contacts_new": engine.get("contacts_new") or 0,
        "contacts_google": engine.get("contacts_google") or 0,
        "conversations_total": engine.get("conversations_total") or 0,
        "conversations_unread": engine.get("conversations_unread") or 0,
        "won": engine.get("won") or 0,
        "open_opportunities": engine.get("open_opportunities") or 0,
        "sources": engine.get("sources") or [],
        "channels": engine.get("channels") or [],
        "signals": engine.get("signals") or [],
        "proposals": proposals,
        "locations": public.get("locations") or [],
        "window_days": public.get("window_days") or 30,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    _archive(payload)
    state = "connected" if payload["connected"] else "not connected"
    print(
        f"crm.json — {state} · {payload['contacts_new']} new contacts · "
        f"{len(payload['signals'])} signals"
    )
    return 0


def _archive(payload: dict) -> None:
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if not os.path.exists(envf):
        return
    try:
        import psycopg2
        import psycopg2.extras

        env = {
            k: v.strip().strip('"').strip("'")
            for k, v in (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))
        }
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"], connect_timeout=15)
        cur = conn.cursor()
        seo_v2_schema.ensure(cur)
        cur.execute(
            """INSERT INTO seo_crm_snapshots
               (snapped_at, connected, contacts_total, contacts_new, conversations_total, won, signals, error)
               VALUES (%s, %s, %s, %s, %s, %s, %s, %s)""",
            (
                dt.datetime.now(),
                bool(payload.get("connected")),
                int(payload.get("contacts_total") or 0),
                int(payload.get("contacts_new") or 0),
                int(payload.get("conversations_total") or 0),
                int(payload.get("won") or 0),
                json.dumps(payload.get("signals") or []),
                payload.get("error"),
            ),
        )
        conn.commit()
        conn.close()
    except Exception as ex:  # noqa: BLE001
        print(f"crm archive skipped ({str(ex)[:90]})")


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Compose /seo/e — Frog issues, GoHighLevel CRM, page inventory, how a run starts.

    python3 docs/seo/keyword-map/build-evidence.py

Reads frog.json, ghl.json, the SEO contract and the keyword map. Writes evidence.json.
"""
from __future__ import annotations

import datetime as dt
import json
import pathlib
import re

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / "evidence.json"
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
INVENTORY = ROOT / "docs/seo/url-inventory.json"
ROUTES = ROOT / "src/routes.tsx"


def load(name: str) -> dict:
    path = HERE / name
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def contract_urls() -> set[str]:
    data = json.loads(CONTRACT.read_text(encoding="utf-8"))
    return set((data.get("pages") or {}).keys())


def board_urls() -> set[str]:
    data = load("data.json")
    urls: set[str] = set()
    for rows in (data.get("silos") or {}).values():
        if not isinstance(rows, list):
            continue
        for row in rows:
            if isinstance(row, dict) and row.get("url"):
                urls.add(row["url"])
    return urls


def route_paths() -> set[str]:
    if not ROUTES.exists():
        return set()
    text = ROUTES.read_text(encoding="utf-8")
    return {m.group(1) for m in re.finditer(r'path:\s*"([^"]+)"', text) if "*" not in m.group(1) and ":" not in m.group(1)}


def main() -> int:
    frog = load("frog.json")
    crm = load("ghl.json")
    live = contract_urls()
    board = board_urls()
    routes = route_paths()
    inventory = json.loads(INVENTORY.read_text(encoding="utf-8")).get("urls") if INVENTORY.exists() else []
    frozen = set(inventory or [])

    missing_board = sorted(live - board)
    missing_routes = sorted(u for u in live if u != "/" and u not in routes and not u.startswith("/blog/"))
    extra_frozen_missing = sorted(frozen - live)

    pages = {
        "contract": len(live),
        "board": len(board),
        "routes": len(routes),
        "frozen": len(frozen),
        "missing_from_board": missing_board,
        "missing_from_routes": missing_routes[:40],
        "deleted_from_contract": extra_frozen_missing,
        "complete": not missing_board and not extra_frozen_missing,
    }

    frog_counts = frog.get("counts") or {}
    crm_contacts = (crm.get("contacts") or {})
    crm_opps = (crm.get("opportunities") or {})

    payload = {
        "generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "intro": (
            "Crawl issues from Screaming Frog, CRM numbers from GoHighLevel, and whether every "
            "contract URL is still on the board. Drop a new Frog export in docs/seo/frog/inbox "
            "and run npm run seo:daily — or fire the GitHub Action — to refresh."
        ),
        "tiles": [
            {"value": str(frog_counts.get("open", 0)), "label": "Open Frog issues"},
            {
                "value": str(crm_contacts.get("new", 0)) if crm.get("connected") else "—",
                "label": "New CRM contacts (30d)",
            },
            {
                "value": str(crm_opps.get("won", 0)) if crm.get("connected") else "—",
                "label": "Won opportunities",
            },
            {"value": str(pages["contract"]), "label": "Contract URLs"},
        ],
        "run": {
            "inbox": "docs/seo/frog/inbox/",
            "local": "npm run seo:daily",
            "loop": "docs/seo/keyword-map/run-loop.sh dist",
            "github": ".github/workflows/seo-daily.yml — workflow_dispatch or the 04:00 UTC schedule",
            "rule": "A push to main publishes committed JSON. Harvest does not apply copy.",
        },
        "frog": frog,
        "crm": crm,
        "pages": pages,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(
        f"evidence.json — frog open {frog_counts.get('open', 0)} · "
        f"crm new {crm_contacts.get('new', 0)} · "
        f"pages {pages['board']}/{pages['contract']} on the board"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

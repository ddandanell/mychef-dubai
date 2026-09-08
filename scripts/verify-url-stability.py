#!/usr/bin/env python3
"""Gate: a URL that exists today is never deleted and never renamed.

Parking (noindex, still resolving) is allowed. A 301 of a live inventory URL
is a URL change. Adding a new URL is allowed and is written back into the
inventory so the next run freezes it too.

    python3 scripts/verify-url-stability.py
    python3 scripts/verify-url-stability.py --write-additions

Exits non-zero if any frozen URL left the contract, or if vercel.json 301s a
URL that is still a live contract page.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INVENTORY = ROOT / "docs/seo/url-inventory.json"
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
VERCEL = ROOT / "vercel.json"


def _pages(contract: dict) -> dict[str, dict]:
    return {str(url): page or {} for url, page in (contract.get("pages") or {}).items()}


def _is_live(page: dict) -> bool:
    """Still occupies this path. Parked (noindex) pages stay here; only historical 301s do not."""
    idx = page.get("indexation") or {}
    return not bool(idx.get("redirect_to"))


def _redirect_sources(vercel: dict) -> set[str]:
    out = set()
    for row in vercel.get("redirects") or []:
        source = (row.get("source") or "").rstrip("/")
        if source:
            out.add(source)
    return out


def check(
    *,
    inventory_path: Path = INVENTORY,
    contract_path: Path = CONTRACT,
    vercel_path: Path = VERCEL,
) -> tuple[list[str], list[str]]:
    inventory = json.loads(inventory_path.read_text(encoding="utf-8"))
    contract = json.loads(contract_path.read_text(encoding="utf-8"))
    vercel = json.loads(vercel_path.read_text(encoding="utf-8")) if vercel_path.exists() else {}

    frozen = [str(u) for u in (inventory.get("urls") or [])]
    raw_live = inventory.get("live")
    live_frozen = set(str(u) for u in (raw_live if raw_live is not None else frozen))
    pages = _pages(contract)
    redirects = _redirect_sources(vercel)

    problems: list[str] = []
    frozen_set = set(frozen)
    missing = sorted(u for u in frozen if u not in pages)
    for url in missing:
        problems.append(f"DELETED_URL {url} — pages are never deleted; park the URL instead")

    for url in sorted(live_frozen):
        page = pages.get(url)
        if not page:
            continue
        if not _is_live(page) or url.rstrip("/") in redirects:
            problems.append(f"URL_CHANGED {url} — a live URL may not 301 or be renamed; park it instead")

    added = sorted(u for u in pages if u not in frozen_set)
    return problems, added


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--write-additions",
        action="store_true",
        help="append newly added contract URLs to the inventory after a passing check",
    )
    args = parser.parse_args()

    if not INVENTORY.exists():
        print(f"no inventory at {INVENTORY} — freeze the current contract first")
        return 1

    problems, added = check()
    if problems:
        print(f"url stability FAILED — {len(problems)} problem(s):")
        for row in problems[:40]:
            print(f"  - {row}")
        if len(problems) > 40:
            print(f"  … and {len(problems) - 40} more")
        return 1

    if added and args.write_additions:
        data = json.loads(INVENTORY.read_text(encoding="utf-8"))
        contract = json.loads(CONTRACT.read_text(encoding="utf-8"))
        pages = _pages(contract)
        urls = list(data.get("urls") or [])
        live = list(data["live"] if data.get("live") is not None else [])
        urls.extend(added)
        live.extend(u for u in added if _is_live(pages.get(u) or {}))
        data["urls"] = sorted(set(urls), key=lambda u: (u != "/", u))
        data["live"] = sorted(set(live), key=lambda u: (u != "/", u))
        INVENTORY.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(
            f"url stability OK — {len(data['urls'])} frozen URLs, "
            f"{len(added)} new URL(s) added to the inventory"
        )
        return 0

    extra = f", {len(added)} new URL(s) not yet frozen (run --write-additions)" if added else ""
    frozen_n = len(json.loads(INVENTORY.read_text(encoding="utf-8")).get("urls") or [])
    print(f"url stability OK — {frozen_n} frozen URLs, none deleted, none renamed{extra}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

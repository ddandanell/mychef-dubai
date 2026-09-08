#!/usr/bin/env python3
"""Screaming Frog issue exports → frog.json for /seo/e.

Drop a Frog "issues" export (the CSVs, including issues_overview_report.csv)
into docs/seo/frog/inbox/ and run this. The previous crawl stays on disk so
the next one can mark issues fixed, improved, new or regressed.

    python3 docs/seo/keyword-map/harvest-frog.py
    python3 docs/seo/keyword-map/harvest-frog.py --from "/path/to/issues_reports"

Never fails the loop: a missing export leaves the last snapshot in place.
"""
from __future__ import annotations

import json
import os
import pathlib
import shutil
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
sys.path.insert(0, str(HERE))
import harvest_frog_lib as frog  # noqa: E402

INBOX = ROOT / "docs/seo/frog/inbox"
CRAWLS = ROOT / "docs/seo/frog/crawls"
LIVE = HERE / ".live/research/frog"
OUT = HERE / "frog.json"
DEFAULT_DESKTOP = pathlib.Path.home() / "Desktop" / "frog mychef dubai"


def _has_overview(folder: pathlib.Path) -> bool:
    return (folder / "issues_overview_report.csv").exists()


def find_source() -> pathlib.Path | None:
    if "--from" in sys.argv:
        path = pathlib.Path(sys.argv[sys.argv.index("--from") + 1]).expanduser()
        return path if path.exists() else None
    if _has_overview(INBOX):
        return INBOX
    if CRAWLS.exists():
        dated = sorted((p for p in CRAWLS.iterdir() if p.is_dir() and _has_overview(p)), reverse=True)
        if dated:
            return dated[0]
    if _has_overview(DEFAULT_DESKTOP):
        return DEFAULT_DESKTOP
    return None


def store_compact_copy(source: pathlib.Path, crawled_on: str) -> pathlib.Path | None:
    stamp = crawled_on or "undated"
    dest = CRAWLS / stamp.replace(" ", "-")
    dest.mkdir(parents=True, exist_ok=True)
    copied = 0
    for csv_path in source.glob("*.csv"):
        if frog.should_skip_file(csv_path.name) and csv_path.name not in {
            "issues_overview_report.csv",
            "crawl_overview.csv",
        }:
            continue
        if csv_path.stat().st_size > 750_000:
            continue
        shutil.copy2(csv_path, dest / csv_path.name)
        copied += 1
    return dest if copied else None


def main() -> int:
    source = find_source()
    if source is None:
        print("no Screaming Frog export found — drop CSVs into docs/seo/frog/inbox/")
        return 0

    LIVE.mkdir(parents=True, exist_ok=True)
    previous = None
    prev_path = LIVE / "latest.json"
    if prev_path.exists():
        try:
            previous = json.loads(prev_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            previous = None

    snapshot = frog.compare_crawls(previous, frog.ingest_dir(source))
    dest = store_compact_copy(source, snapshot.get("crawled_on") or "")
    if dest:
        snapshot["stored"] = str(dest.relative_to(ROOT))
    payload = frog.public_payload(snapshot)

    prev_path.write_text(json.dumps(snapshot, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(
        f"frog.json — {payload['site'] or 'unknown site'} · {payload['crawled_on'] or 'undated'} · "
        f"{payload['counts']['open']} open · {payload['counts']['fixed']} fixed · "
        f"{payload['counts']['accepted']} accepted"
    )
    if source == INBOX:
        # Leave the inbox in place so a person can see what was ingested; do not delete.
        os.environ.setdefault("FROG_INBOX_KEPT", "1")
    return 0


if __name__ == "__main__":
    sys.exit(main())

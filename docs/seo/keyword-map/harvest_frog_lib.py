"""Parse Screaming Frog issue exports into a crawl snapshot the board can keep.

Frog writes one CSV per issue plus an overview. The board needs a stable shape:
issue name, type, priority, URL count, the URLs themselves, and whether the
issue moved since the last crawl. Inlink dumps and the full internal table are
too large to keep; they are skipped on purpose.

    from harvest_frog_lib import ingest_dir, compare_crawls, public_payload
"""
from __future__ import annotations

import csv
import datetime as dt
import pathlib
import re
from typing import Any

SKIP_FILES = {
    "all_inlinks.csv",
    "internal_all.csv",
    "crawl_overview.csv",
    "issues_overview_report.csv",
}

# Issues the 2026-08-26 Dubai pass already classified as Frog noise or high-risk
# rewrites. They stay on the board as "accepted" so a future crawl can still
# prove they did not come back worse — they are not an open fix queue.
ACCEPTED = {
    "page titles over 60 characters": "Contract titles stay. Character caps are Frog noise.",
    "page titles over 561 pixels": "Contract titles stay. Pixel caps are an approximation.",
    "content low content pages": "Thin blog topic hubs are by design.",
    "url underscores": "Renaming a live URL is forbidden.",
    "images over 100 kb": "Image recompress is not this board's job.",
    "images alt text over 100 characters": "Alt length is not an indexation fault.",
    "images missing size attributes": "CLS work lives on Speed, not this queue.",
    "security missing contentsecuritypolicy header": "CSP was skipped on purpose.",
    "search console no search analytics data": "GSC empty is not a crawl defect.",
    "content readability difficult": "Readability scores are not a ranking gate.",
    "content readability very difficult": "Readability scores are not a ranking gate.",
    "h2 multiple": "Multiple H2s are valid HTML when the outline is logical.",
    "url over 115 characters": "Renaming a live URL is forbidden.",
}

INLINK_SUFFIX = "_inlinks.csv"
ADDRESS_KEYS = ("address", "url", "page url", "destination")


def norm_issue(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", (name or "").lower()).strip()


def parse_number(raw: str | None) -> float | None:
    text = (raw or "").strip().replace("%", "")
    if not text:
        return None
    if text.count(",") == 1 and text.count(".") == 0:
        text = text.replace(",", ".")
    else:
        text = text.replace(",", "")
    try:
        return float(text)
    except ValueError:
        return None


def _open_csv(path: pathlib.Path) -> tuple[list[str], list[dict[str, str]]]:
    raw = path.read_text(encoding="utf-8-sig", errors="replace")
    reader = csv.DictReader(raw.splitlines())
    fieldnames = [h.strip() for h in (reader.fieldnames or [])]
    rows = []
    for row in reader:
        cleaned = {(str(k) if k is not None else "").strip(): ("" if v is None else str(v)).strip() for k, v in row.items()}
        if any(cleaned.values()):
            rows.append(cleaned)
    return fieldnames, rows


def parse_crawl_meta(directory: pathlib.Path) -> dict[str, str]:
    overview = directory / "crawl_overview.csv"
    meta = {"site": "", "date": "", "time": ""}
    if not overview.exists():
        return meta
    _, rows = _open_csv(overview)
    # Two-column key/value export: first row headers are the keys of row 0, or
    # each row is ["Site Crawled", "https://..."].
    if len(rows) == 1 and "Site Crawled" in rows[0]:
        meta["site"] = rows[0].get("Site Crawled") or rows[0].get("site crawled") or ""
        meta["date"] = rows[0].get("Date") or ""
        meta["time"] = rows[0].get("Time") or ""
        return meta
    # Key in first column, value in second — DictReader used the first row as headers.
    # Re-read as a plain two-column file.
    lines = overview.read_text(encoding="utf-8-sig", errors="replace").splitlines()
    reader = csv.reader(lines)
    for row in reader:
        if len(row) < 2:
            continue
        key, value = row[0].strip().strip('"'), row[1].strip().strip('"')
        low = key.lower()
        if low == "site crawled":
            meta["site"] = value
        elif low == "date":
            meta["date"] = value
        elif low == "time":
            meta["time"] = value
    return meta


def parse_overview(path: pathlib.Path) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    _, rows = _open_csv(path)
    issues = []
    for row in rows:
        name = row.get("Issue Name") or row.get("issue name") or ""
        if not name:
            continue
        count = parse_number(row.get("URLs") or row.get("urls"))
        issues.append(
            {
                "name": name,
                "key": norm_issue(name),
                "type": row.get("Issue Type") or row.get("issue type") or "",
                "priority": (row.get("Issue Priority") or row.get("issue priority") or "").lower(),
                "url_count": int(count) if count is not None else 0,
                "pct": parse_number(row.get("% of Total") or row.get("% of total")),
                "description": row.get("Description") or row.get("description") or "",
                "how_to_fix": row.get("How To Fix") or row.get("how to fix") or "",
                "urls": [],
            }
        )
    return issues


def urls_from_issue_csv(path: pathlib.Path, cap: int = 80) -> list[str]:
    if not path.exists():
        return []
    fields, rows = _open_csv(path)
    address_key = None
    lowered = {f.lower(): f for f in fields}
    for candidate in ADDRESS_KEYS:
        if candidate in lowered:
            address_key = lowered[candidate]
            break
    if not address_key and fields:
        address_key = fields[0]
    urls: list[str] = []
    seen: set[str] = set()
    for row in rows:
        value = (row.get(address_key) or "").strip()
        if not value or value.lower() in seen:
            continue
        seen.add(value.lower())
        urls.append(value)
        if len(urls) >= cap:
            break
    return urls


def should_skip_file(name: str) -> bool:
    low = name.lower()
    if low in SKIP_FILES:
        return True
    if low.endswith(INLINK_SUFFIX):
        return True
    return not low.endswith(".csv")


def ingest_dir(directory: str | pathlib.Path, url_cap: int = 80) -> dict[str, Any]:
    folder = pathlib.Path(directory)
    meta = parse_crawl_meta(folder)
    overview = parse_overview(folder / "issues_overview_report.csv")
    by_key = {item["key"]: item for item in overview}

    for csv_path in sorted(folder.glob("*.csv")):
        if should_skip_file(csv_path.name):
            continue
        key = norm_issue(csv_path.stem)
        urls = urls_from_issue_csv(csv_path, cap=url_cap)
        if key in by_key:
            by_key[key]["urls"] = urls
            by_key[key]["source_file"] = csv_path.name
            if not by_key[key]["url_count"]:
                by_key[key]["url_count"] = len(urls)
        elif urls:
            by_key[key] = {
                "name": csv_path.stem.replace("_", " "),
                "key": key,
                "type": "Issue",
                "priority": "low",
                "url_count": len(urls),
                "pct": None,
                "description": "",
                "how_to_fix": "",
                "urls": urls,
                "source_file": csv_path.name,
            }

    issues = list(by_key.values())
    for item in issues:
        reason = ACCEPTED.get(item["key"])
        item["disposition"] = "accepted" if reason else "open"
        item["accepted_reason"] = reason or ""
    issues.sort(key=lambda i: ({"high": 0, "medium": 1, "low": 2}.get(i["priority"], 3), -i["url_count"], i["name"]))
    return {
        "site": meta.get("site") or "",
        "crawled_on": meta.get("date") or "",
        "crawled_at": meta.get("time") or "",
        "source": str(folder),
        "issues": issues,
    }


def compare_crawls(previous: dict[str, Any] | None, current: dict[str, Any]) -> dict[str, Any]:
    prev_map = {item["key"]: item for item in (previous or {}).get("issues") or []}
    out_issues = []
    for item in current.get("issues") or []:
        row = dict(item)
        old = prev_map.get(item["key"])
        old_count = (old or {}).get("url_count") or 0
        new_count = item.get("url_count") or 0
        if item.get("disposition") == "accepted":
            row["change"] = "accepted"
        elif previous is None:
            row["change"] = item.get("disposition") or "open"
        elif not old:
            row["change"] = "new"
        elif new_count == 0 and old_count > 0:
            row["change"] = "fixed"
        elif new_count < old_count:
            row["change"] = "improved"
        elif new_count > old_count:
            row["change"] = "regressed"
        else:
            row["change"] = "open"
        row["previous_url_count"] = old_count if old else None
        out_issues.append(row)

    current_keys = {item["key"] for item in out_issues}
    for key, old in prev_map.items():
        if key in current_keys:
            continue
        if not old.get("url_count"):
            continue
        row = dict(old)
        row["url_count"] = 0
        row["urls"] = []
        row["change"] = "fixed"
        row["disposition"] = "fixed"
        out_issues.append(row)

    current = dict(current)
    current["issues"] = out_issues
    current["previous_crawled_on"] = (previous or {}).get("crawled_on") or ""
    return current


def public_payload(snapshot: dict[str, Any]) -> dict[str, Any]:
    issues = snapshot.get("issues") or []
    open_issues = [i for i in issues if i.get("disposition") == "open" and i.get("change") != "fixed"]
    accepted = [i for i in issues if i.get("disposition") == "accepted"]
    fixed = [i for i in issues if i.get("change") == "fixed"]
    high = [i for i in open_issues if i.get("priority") == "high"]
    return {
        "generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "site": snapshot.get("site") or "",
        "crawled_on": snapshot.get("crawled_on") or "",
        "previous_crawled_on": snapshot.get("previous_crawled_on") or "",
        "source": snapshot.get("stored") or "",
        "tiles": [
            {"value": str(len(open_issues)), "label": "Open issues"},
            {"value": str(len(high)), "label": "High priority open"},
            {"value": str(len(fixed)), "label": "Fixed since last crawl"},
            {"value": str(len(accepted)), "label": "Accepted as policy"},
        ],
        "counts": {
            "open": len(open_issues),
            "high": len(high),
            "fixed": len(fixed),
            "accepted": len(accepted),
            "all": len(issues),
        },
        "issues": issues,
    }

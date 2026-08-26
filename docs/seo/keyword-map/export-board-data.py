#!/usr/bin/env python3
"""Publish JSON (and CSV) for the React SEO OS at /seo.

Builders still write HTML into this folder. The live board is the React app;
this script is the only thing that should copy research data into public/seo.
"""
from __future__ import annotations

import html as html_lib
import json
import pathlib
import re
import shutil
from html.parser import HTMLParser

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = ROOT / "public" / "seo"
DATA = OUT / "data"

JSON_FILES = [
    "data.json",
    "keywords.json",
    "demand.json",
    "report.json",
    "gaps.json",
    "architecture.json",
    "links.json",
    "backlog.json",
    "ai-visibility.json",
    "proposals.json",
    "control.json",
    "experiments.json",
]
CSV_FILES = ["report.csv", "keywords.csv"]


def text(raw: str | None) -> str:
    if not raw:
        return ""
    cleaned = re.sub(r"<br\s*/?>", " ", raw, flags=re.I)
    cleaned = re.sub(r"<[^>]+>", " ", cleaned)
    cleaned = html_lib.unescape(cleaned)
    return re.sub(r"\s+", " ", cleaned).strip()


class TableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.headers: list[str] = []
        self.rows: list[list[str]] = []
        self._row: list[str] | None = None
        self._cell: list[str] | None = None
        self._in_th = False
        self._in_td = False
        self._seen_table = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "table" and not self._seen_table:
            self._seen_table = True
        if not self._seen_table:
            return
        if tag == "tr":
            self._row = []
        elif tag == "th":
            self._in_th = True
            self._cell = []
        elif tag == "td":
            self._in_td = True
            self._cell = []

    def handle_endtag(self, tag: str) -> None:
        if tag == "table" and self._seen_table:
            self._seen_table = False
        if tag == "th" and self._cell is not None:
            self.headers.append(text("".join(self._cell)))
            self._cell = None
            self._in_th = False
        elif tag == "td" and self._cell is not None and self._row is not None:
            self._row.append(text("".join(self._cell)))
            self._cell = None
            self._in_td = False
        elif tag == "tr" and self._row is not None:
            if self._row:
                self.rows.append(self._row)
            self._row = None

    def handle_data(self, data: str) -> None:
        if self._cell is not None:
            self._cell.append(data)


def parse_table(html: str) -> tuple[list[str], list[list[str]]]:
    parser = TableParser()
    parser.feed(html)
    return parser.headers, parser.rows


def parse_status(html: str) -> dict:
    tiles = []
    for match in re.finditer(
        r'<div class="tile"><div class="n"[^>]*>(.*?)</div><div class="l">(.*?)</div></div>',
        html,
        re.S,
    ):
        tiles.append({"value": text(match.group(1)), "label": text(match.group(2))})

    intro = ""
    sub = re.search(r'<p class="sub">(.*?)</p>', html, re.S)
    if sub:
        intro = text(sub.group(1))

    sections: list[dict] = []
    parts = re.split(r"<h2>(.*?)</h2>", html)
    # parts[0] is preamble; then title, body, title, body...
    for i in range(1, len(parts) - 1, 2):
        title = text(parts[i])
        body = parts[i + 1]
        cards = []
        for match in re.finditer(
            r'<div class="card (\w+)">\s*'
            r'<div class="top">.*?<span class="name">(.*?)</span>'
            r'<span class="state">(.*?)</span></div>\s*'
            r'(?:<p class="detail">(.*?)</p>)?\s*'
            r"(?:<dl>(.*?)</dl>)?\s*"
            r'(?:<p class="err">(.*?)</p>)?',
            body,
            re.S,
        ):
            facts = []
            if match.group(5):
                for fact in re.finditer(r"<dt>(.*?)</dt><dd>(.*?)</dd>", match.group(5), re.S):
                    facts.append({"label": text(fact.group(1)), "value": text(fact.group(2))})
            cards.append(
                {
                    "tone": match.group(1),
                    "name": text(match.group(2)),
                    "state": text(match.group(3)),
                    "detail": text(match.group(4)),
                    "facts": facts,
                    "error": text(match.group(6)) or None,
                }
            )
        if cards:
            sections.append({"title": title, "cards": cards})

    return {"intro": intro, "tiles": tiles, "sections": sections}


def parse_actions(html: str) -> dict:
    tiles = []
    for match in re.finditer(
        r'<div class="tile"><div class="n"[^>]*>(.*?)</div><div class="l">(.*?)</div></div>',
        html,
        re.S,
    ):
        tiles.append({"value": text(match.group(1)), "label": text(match.group(2))})
    headers, rows = parse_table(html)
    keys = [h.lower().replace(" ", "_") or f"col_{i}" for i, h in enumerate(headers)]
    if not keys:
        keys = ["commit", "when", "what", "files"]
    records = []
    for row in rows:
        record = {keys[i]: row[i] if i < len(row) else "" for i in range(len(keys))}
        records.append(record)
    return {"tiles": tiles, "rows": records}


def write_json(path: pathlib.Path, payload: object) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    DATA.mkdir(parents=True, exist_ok=True)
    copied: list[str] = []
    for name in JSON_FILES:
        src = HERE / name
        if src.exists():
            shutil.copy2(src, DATA / name)
            copied.append(name)
    for name in CSV_FILES:
        src = HERE / name
        if src.exists():
            shutil.copy2(src, OUT / name)
            copied.append(name)

    status_html = HERE / "status.html"
    if status_html.exists():
        write_json(DATA / "status.json", parse_status(status_html.read_text(encoding="utf-8")))
        copied.append("status.json")

    actions_html = HERE / "actions.html"
    if actions_html.exists():
        write_json(DATA / "actions.json", parse_actions(actions_html.read_text(encoding="utf-8")))
        copied.append("actions.json")

    (OUT / "robots.txt").write_text("User-agent: *\nDisallow: /\n", encoding="utf-8")

    # Remove previously published static HTML so Vercel serves the React OS.
    for stale in OUT.glob("*.html"):
        stale.unlink()
    ui_dir = OUT / "ui"
    if ui_dir.exists():
        shutil.rmtree(ui_dir)

    write_json(DATA / "manifest.json", {"files": copied})
    print(f"published {len(copied)} SEO data files to {DATA.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

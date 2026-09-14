#!/usr/bin/env python3
"""Remove optimizer search-machinery from customer copy. Does not touch URLs or prices."""
from __future__ import annotations

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
STUFF_REPLACEMENT = (
    "The quote moves with guest count, the menu, and how much of the work happens in the room. "
    "We start from a published format and adjust it to your date. "
    "What to check: the named chef, an itemised quote, and who buys the ingredients. "
    "Dietary notes go into the first menu draft."
)
INFLUENCER_REPLACEMENT = (
    "Partnerships are scoped around the shoot or post, not a shop price list. "
    "Tell us the date, the format and what you need on camera. We match a chef and send a written plan."
)
HOUSEHOLD_REPLACEMENT = (
    "The weekly figure moves with how many people eat at home, how many meals you want covered, and how often the chef comes. "
    "We start from a standing plan and shape it around the household. "
    "What to check: the named chef, an itemised figure, and who buys the ingredients. "
    "Dietary notes go into the first draft week."
)
HOUSEHOLD_MARKERS = (
    "depends on the household",
    "depend on the household",
    "standing weekly format",
    "how many people eat at home",
)
FAQ_FALLBACK = (
    "Send the date, guest count and area. We match a chef, send a menu draft, "
    "and quote food, staff and 5% VAT on separate lines."
)

TAIL_RES = [
    re.compile(r" If you searched for [^.]{3,240}, this is the same service\."),
    re.compile(r" People also search this as [^.—\-]{3,240} — same team, same booking\."),
    re.compile(r" People also search this as [^.]{3,240} - same team, same booking\."),
    re.compile(r" [^.?]{3,200} land on this page too; it is one service\."),
    re.compile(r"Yes — same service as [^.]{3,120}, different words for it\. "),
    re.compile(r"Yes - same service as [^.]{3,120}, different words for it\. "),
    re.compile(r"Same service as [^.]{3,120}, different words for it\. "),
    re.compile(r"Yes\. It sits inside the same service as [^:]{3,80}: "),
    re.compile(r"Yes\. It is the same booking as [^:]{3,120} under another name: "),
    re.compile(r"Yes — [^.]{3,140} is this service under another name\. "),
    re.compile(r"Yes - [^.]{3,140} is this service under another name\. "),
    re.compile(r"Yes — different words, one service\. "),
    re.compile(r" ?Same team, same booking route, same itemised quote\."),
    re.compile(r"Yes — same service as [^.]{3,120} under another name\. "),
]

# Any customer-facing run of optimizer template sentences (plural or singular).
STUFF_CHUNK = re.compile(r"[A-Z][^\n<\"]{40,}")

TEMPLATE_NEEDLES = (
    "depend on the same three things",
    "depends on the same three things",
    "start from a set format and get adjusted",
    "get adjusted to your date rather than sold as a fixed box",
    "get shaped around the household rather than sold as a fixed box",
    "the things worth checking are the named chef",
    "drafted around the occasion, the season and the dietary list",
    "planned into the first draft of the menu rather than bolted on",
    "run at the address you give us: we bring the equipment",
    "run to a fixed timing, with one itemised invoice",
    "planned around the room and the running order",
    "covered across the whole city, because the chef travels",
    "comes down to four checks: who actually cooks",
    "the same booking: a vetted chef, matched to your kitchen",
    "the same service under another name",
    "planned around the week rather than a single evening",
    "run in your own kitchen, on the days you choose",
    "depend on the household: how many people eat at home",
    "depends on the household: how many people eat at home",
    "start from a standing weekly format",
    "starts from a standing weekly format",
    "two to three weeks is comfortable, and december, ramadan and new year fill earlier",
    "planned around what your household actually eats",
)

SKIP_PARTS = {".git", "node_modules", "dist", "build"}
FAQ_EMPTY = re.compile(r"(\ba:\s*')(\s*)(')")
FAQ_EMPTY_DQ = re.compile(r'(\ba:\s*")(\s*)(")')
FAQ_JUNK_ONLY = re.compile(
    r"(\ba:\s*')(?:Same team, same booking route, same itemised quote\.?\s*)+(')"
)

DRY = "--dry-run" in sys.argv


def is_template(sentence: str) -> bool:
    s = sentence.lower()
    return any(n in s for n in TEMPLATE_NEEDLES)


def destuff_chunk(text: str, replacement: str) -> str:
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z“\"])", text.strip())
    kept = [p.strip() for p in parts if p.strip() and not is_template(p)]
    if not kept:
        return replacement
    return replacement + " " + " ".join(kept)


def clean(text: str, influencer: bool) -> str:
    def pick_replacement(chunk: str) -> str:
        if influencer:
            return INFLUENCER_REPLACEMENT
        low = chunk.lower()
        if any(n in low for n in HOUSEHOLD_MARKERS):
            return HOUSEHOLD_REPLACEMENT
        return STUFF_REPLACEMENT

    def stuff_sub(m: re.Match[str]) -> str:
        chunk = m.group(0)
        if not any(n in chunk.lower() for n in TEMPLATE_NEEDLES):
            return chunk
        return destuff_chunk(chunk, pick_replacement(chunk))

    out = STUFF_CHUNK.sub(stuff_sub, text)
    for rx in TAIL_RES:
        out = rx.sub("", out)
    out = FAQ_JUNK_ONLY.sub(rf"\1{FAQ_FALLBACK}\2", out)
    out = FAQ_EMPTY.sub(rf"\1{FAQ_FALLBACK}\3", out)
    out = FAQ_EMPTY_DQ.sub(rf"\1{FAQ_FALLBACK}\3", out)

    # Leftovers after stripping "Yes. It sits inside the same service as …:"
    out = re.sub(r"(\ba:\s*['\"])we design ", r"\1We design ", out)
    out = re.sub(r"(\ba:\s*['\"])one team,", r"\1One team,", out)
    return out


def walk() -> list[pathlib.Path]:
    files: list[pathlib.Path] = []
    for folder in (ROOT / "src/pages", ROOT / "src/content", ROOT / "src/data"):
        if not folder.exists():
            continue
        for p in folder.rglob("*"):
            if p.suffix not in {".ts", ".tsx", ".json"}:
                continue
            if any(part in SKIP_PARTS for part in p.parts):
                continue
            files.append(p)
    return files


def main() -> int:
    changed = 0
    for path in walk():
        raw = path.read_text(encoding="utf-8")
        new = clean(raw, influencer=path.name == "InfluencerPartnerships.tsx")
        if new != raw:
            changed += 1
            print(path.relative_to(ROOT))
            if not DRY:
                path.write_text(new, encoding="utf-8")
    print(f"{changed} files {'would be cleaned' if DRY else 'cleaned'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Get the keyword sentences out of the hero and put them further down the page.

The body-sentence optimizer picked "the first plain-prose paragraph in the page", and on most
templates that is the hero subtitle. The result was heroes carrying 200+ words of coverage copy
where a visitor wants one promise and a button — /bbq-catering-dubai reached 245 words.

This moves every generated paragraph that sits inside the hero down to the first prose section
below it, keeping that section's own styling. Nothing is deleted: the same sentences, the same
keywords, a place where they read as body copy instead of a headline.

    python3 docs/seo/keyword-map/move-hero-copy.py [--apply] [--budget 90] [urls…]

Dry by default. Every move is written to the optimizer log, so Actions shows it like any other
change.
"""
from __future__ import annotations

import datetime, importlib.util, json, pathlib, re, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
APPLY = "--apply" in sys.argv
BUDGET = int(sys.argv[sys.argv.index("--budget") + 1]) if "--budget" in sys.argv else 90
LOG = HERE / ".live/optimizer-log.jsonl"

_argv = sys.argv
sys.argv = [_argv[0]]                       # import the optimizer without running its CLI
spec = importlib.util.spec_from_file_location("opt", HERE / "optimize-page.py")
opt = importlib.util.module_from_spec(spec)
spec.loader.exec_module(opt)
sys.argv = _argv


hero_end = opt.hero_end          # one definition of where the hero ends, shared with the optimizer


def signatures() -> list[str]:
    """The invariant half of each body-sentence template.

    The optimizer log truncates its `after` field, so an exact match against it misses. The
    templates themselves are the reliable fingerprint: every generated sentence carries one of
    these clauses verbatim, and no hand-written copy on this site does.
    """
    out: set[str] = set()
    for template in list(opt.SENT.values()) + list(opt.SENT_HOME.values()):
        for fragment in re.split(r"\{[^}]+\}", template):
            fragment = fragment.strip(" .,:—-")
            if len(fragment) >= 25:
                out.add(fragment)
    return sorted(out, key=len, reverse=True)


SIGNATURES = signatures()


def generated_paragraphs(src: str, _unused=None) -> list[tuple[int, int, str]]:
    """Every <p> block that carries one of the generated clauses, as (start, end, text)."""
    found = []
    for pattern in (opt.PARA, opt.PARA1):
        for m in pattern.finditer(src):
            body = re.sub(r"\s+", " ", m.group(3)).strip()
            if body and any(sig in body for sig in SIGNATURES):
                found.append((m.start(), m.end(), body))
    return sorted(set(found))


def main():
    urls = [a for a in sys.argv[1:] if a.startswith("/")]
    targets = urls or [u for u, p in opt.pages.items()
                       if not (p.get("indexation") or {}).get("redirect_to")
                       and ((p.get("indexation") or {}).get("robots") or {}).get("index", True)]

    moved_pages, moved_paras, skipped = 0, 0, []
    for url in targets:
        f = opt.resolve(url)
        if not f or not f.exists():
            continue
        src = f.read_text(encoding="utf-8")
        end = hero_end(src)
        if not end:
            continue
        in_hero = [b for b in generated_paragraphs(src) if b[0] < end]
        if not in_hero:
            continue

        # Cut from the bottom up so earlier offsets stay valid.
        text_moved = []
        for start, stop, body in reversed(in_hero):
            text_moved.append(body)
            src = src[:start].rstrip("\n") + "\n" + src[stop:].lstrip("\n")

        slots = [s for s in opt._para_slots(src) if s[0] > hero_end(src)]
        if not slots:
            skipped.append((url, "no prose section below the hero"))
            continue
        offset, indent, attrs = slots[0]
        block = "".join(f"\n{indent}<p{attrs}>\n{indent}  {t}\n{indent}</p>" for t in reversed(text_moved))
        src = src[:offset] + block + src[offset:]

        if APPLY:
            f.write_text(src, encoding="utf-8")
            LOG.parent.mkdir(parents=True, exist_ok=True)
            with LOG.open("a") as lg:
                lg.write(json.dumps({
                    "url": url, "file": str(f.relative_to(ROOT)), "applied": True,
                    "at": datetime.datetime.now().isoformat(timespec="minutes"),
                    "changes": [{"where": "body", "how": f"moved {len(text_moved)} paragraph(s) out of the hero",
                                 "before": "", "after": " ".join(reversed(text_moved))[:220]}],
                }, ensure_ascii=False) + "\n")
        moved_pages += 1
        moved_paras += len(text_moved)
        print(f"  {'MOVED ' if APPLY else 'would move '}{len(text_moved)} paragraph(s) out of the hero · {url}")

    for url, why in skipped:
        print(f"  skip {url}: {why}")
    print(f"{moved_paras} paragraph(s) across {moved_pages} page(s)"
          + ("" if APPLY else " — dry run, pass --apply to write"))
    return 0


if __name__ == "__main__":
    sys.exit(main())

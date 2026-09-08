#!/usr/bin/env python3
"""Voice engine — score every live title and meta against the myCHEF writing system.

This is the permanent voice agent in the SEO loop. It does not rewrite copy.
It says whether the snippet sounds like us, which persona the page is for,
and which lines would fail a competitor test.

    python3 docs/seo/keyword-map/build-voice.py

Writes voice.json. Archives to seo_voice_scores when Neon is reachable.
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
import seo_v2_schema  # noqa: E402
import voice_lib as V  # noqa: E402

CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
OUT = HERE / "voice.json"


def _on_page(page: dict) -> tuple[str, str]:
    on = page.get("on_page") or {}
    title = on.get("title") or ""
    desc = on.get("meta_description") or on.get("description") or ""
    return title, desc


def main() -> int:
    contract = json.loads(CONTRACT.read_text(encoding="utf-8"))
    pages = []
    failed = 0
    by_persona: dict[str, int] = {}
    for url, page in (contract.get("pages") or {}).items():
        idx = page.get("indexation") or {}
        if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True):
            continue
        primary = ((page.get("intent_owner") or {}).get("primary_keyword") or "").strip()
        if not primary:
            continue
        title, desc = _on_page(page)
        persona = V.persona_for(page.get("silo"), page.get("page_type"), url=url, primary=primary)
        scored = V.score_snippet(title=title, description=desc, primary=primary, persona=persona)
        by_persona[persona] = by_persona.get(persona, 0) + 1
        if not scored["passed"]:
            failed += 1
        pages.append(
            {
                "url": url,
                "keyword": primary,
                "silo": page.get("silo"),
                "persona": persona,
                "title": title,
                "description": desc,
                "passed": scored["passed"],
                "score": scored["score"],
                "failures": scored["failures"],
                "warnings": scored["warnings"],
            }
        )
    pages.sort(key=lambda r: (r["passed"], r["score"], r["url"]))
    payload = {
        "generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "intro": (
            "The voice engine reads every live title and meta against the myCHEF writing system. "
            "Household pages talk to a family that does not want to become HR. Event pages talk to a "
            "host whose night cannot fail. A variant that fails this gate never reaches the snippet queue."
        ),
        "personas": V.PERSONAS,
        "tiles": [
            {"value": str(len(pages)), "label": "Live pages scored"},
            {"value": str(sum(1 for p in pages if p["passed"])), "label": "Voice passing"},
            {"value": str(failed), "label": "Voice failing"},
            {"value": str(by_persona.get("household", 0)), "label": "Household persona"},
        ],
        "counts": {
            "pages": len(pages),
            "passed": sum(1 for p in pages if p["passed"]),
            "failed": failed,
            "by_persona": by_persona,
        },
        "pages": pages,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    _archive(pages)
    print(f"voice.json — {len(pages)} pages · {payload['counts']['passed']} pass · {failed} fail")
    return 0


def _archive(pages: list[dict]) -> None:
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if not os.path.exists(envf):
        return
    try:
        import psycopg2
        import psycopg2.extras

        env = {k: v.strip().strip('"').strip("'") for k, v in
               (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
        conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"], connect_timeout=15)
        cur = conn.cursor()
        seo_v2_schema.ensure(cur)
        now = dt.datetime.now()
        rows = [
            (now, p["url"], p["persona"], p["title"], p["description"], p["score"], p["passed"],
             json.dumps({"failures": p["failures"], "warnings": p["warnings"]}))
            for p in pages
        ]
        psycopg2.extras.execute_values(
            cur,
            """INSERT INTO seo_voice_scores
               (scored_at, url, persona, title, description, score, passed, failures)
               VALUES %s ON CONFLICT DO NOTHING""",
            rows,
        )
        conn.commit()
        conn.close()
    except Exception as ex:  # noqa: BLE001
        print(f"voice archive skipped ({str(ex)[:90]})")


if __name__ == "__main__":
    sys.exit(main())

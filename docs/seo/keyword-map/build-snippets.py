#!/usr/bin/env python3
"""Snippet engine — the permanent SERP A/B agent.

For every live primary with enough Search Console impressions it:
  1. measures CTR against the expected CTR for that position
  2. refuses to test a URL that already has an open experiment
  3. writes voice-passing title/meta variants
  4. queues one test per URL — never applies it

    python3 docs/seo/keyword-map/build-snippets.py

Writes snippets.json. Archives to seo_snippet_tests when Neon is reachable.
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
import snippet_lib as S  # noqa: E402

CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
OUT = HERE / "snippets.json"


def _load(name: str) -> dict:
    path = HERE / name
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def _open_experiment_urls() -> set[str]:
    items = (_load("experiments.json").get("items") or [])
    return {i.get("url") for i in items if (i.get("verdict") or "too_soon") == "too_soon"}


def main() -> int:
    contract = json.loads(CONTRACT.read_text(encoding="utf-8"))
    kw_rows = _load("keywords.json").get("rows") or []
    primaries = [r for r in kw_rows if r.get("role") == "primary" and r.get("keyword")]
    open_ex = _open_experiment_urls()
    pages_c = contract.get("pages") or {}

    researched = []
    for row in primaries:
        url = row.get("primary_owning_url")
        page = pages_c.get(url) or {}
        idx = page.get("indexation") or {}
        if not url or idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True):
            continue
        on = page.get("on_page") or {}
        rec = S.research_page(
            url=url,
            primary=row.get("keyword") or "",
            title=on.get("title") or "",
            description=on.get("meta_description") or on.get("description") or "",
            silo=page.get("silo") or row.get("silo") or "",
            page_type=page.get("page_type") or "",
            impressions=int(row.get("gsc_impressions") or 0),
            clicks=int(row.get("gsc_clicks") or 0),
            position=row.get("gsc_position") or row.get("current_position"),
            open_experiment=url in open_ex,
        )
        researched.append(rec)

    researched.sort(key=lambda r: (-(r.get("ctr_gap") or 0), -(r.get("impressions") or 0)))
    proposed = [r for r in researched if r["status"] == "proposed"]
    blocked = [r for r in researched if r["status"] == "blocked"]
    payload = {
        "generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "intro": (
            "The snippet agent tests Google titles and descriptions for clicks, not folklore. "
            "A test is only proposed when Search Console shows the page, CTR lags the position, "
            "the variant passes the voice gate, and no experiment is already open. The queue still "
            "needs a person. The agent never writes the live title itself."
        ),
        "tiles": [
            {"value": str(len(proposed)), "label": "Ready to test"},
            {"value": str(len(blocked)), "label": "Blocked (open window)"},
            {"value": str(sum(1 for r in researched if r["status"] == "ctr_ok")), "label": "CTR in line"},
            {"value": str(sum(1 for r in researched if (r.get("impressions") or 0) >= 50)), "label": "Pages with 50+ impr"},
        ],
        "counts": {
            "researched": len(researched),
            "proposed": len(proposed),
            "blocked": len(blocked),
            "ctr_ok": sum(1 for r in researched if r["status"] == "ctr_ok"),
            "too_few": sum(1 for r in researched if r["status"] == "too_few_impressions"),
        },
        "tests": researched,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    _archive(proposed)
    print(
        f"snippets.json — {len(researched)} researched · {len(proposed)} ready · "
        f"{len(blocked)} blocked · {payload['counts']['ctr_ok']} CTR ok"
    )
    return 0


def _archive(proposed: list[dict]) -> None:
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
        rows = []
        for rec in proposed:
            chosen = rec.get("chosen") or {}
            rows.append(
                (
                    f"snip-{rec['url'].strip('/').replace('/', '-') or 'home'}",
                    rec["url"],
                    rec.get("keyword"),
                    "proposed",
                    rec.get("control_title"),
                    rec.get("control_description"),
                    chosen.get("title"),
                    chosen.get("description"),
                    chosen.get("kind"),
                    chosen.get("voice_score"),
                    True,
                    rec.get("ctr_gap"),
                    rec.get("impressions"),
                    rec.get("ctr"),
                    rec.get("position"),
                    rec.get("reason"),
                )
            )
        psycopg2.extras.execute_values(
            cur,
            """INSERT INTO seo_snippet_tests
               (id, url, keyword, status, control_title, control_description,
                variant_title, variant_description, variant_kind, voice_score, voice_passed,
                predicted_ctr_gap, gsc_impr, gsc_ctr, gsc_pos, reason)
               VALUES %s
               ON CONFLICT (id) DO UPDATE SET
                 status = EXCLUDED.status,
                 variant_title = EXCLUDED.variant_title,
                 variant_description = EXCLUDED.variant_description,
                 predicted_ctr_gap = EXCLUDED.predicted_ctr_gap,
                 gsc_impr = EXCLUDED.gsc_impr,
                 gsc_ctr = EXCLUDED.gsc_ctr,
                 gsc_pos = EXCLUDED.gsc_pos,
                 reason = EXCLUDED.reason""",
            rows,
        )
        conn.commit()
        conn.close()
    except Exception as ex:  # noqa: BLE001
        print(f"snippet archive skipped ({str(ex)[:90]})")


if __name__ == "__main__":
    sys.exit(main())

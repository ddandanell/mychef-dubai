"""SERP snippet engine — title and meta variants that must earn the click.

Research is per URL: impressions, CTR against the expected CTR for that
position, voice pass, and whether an experiment is already open. The engine
proposes. It does not apply. A drop in clicks or WhatsApp still beats a CTR
that only moved because impressions fell.

    from snippet_lib import propose_variants, research_page, snippet_verdict
"""
from __future__ import annotations

import re
from typing import Any

import voice_lib as V

MECHANISM = {
    "household": "Matched, Vetted, Backed Up",
    "event_host": "Chef, Service, Clear-down",
    "planner": "How to Decide",
    "institution": "Documented Kitchen",
}

RELIEF = {
    "household": "You Stay Out of HR",
    "event_host": "You Stay a Guest",
    "planner": "Then Pick the Owner Page",
    "institution": "Quote After the Site Walk",
}

DESC_RELIEF = {
    "household": "Named cook, itemised quote, backup from a record — not a marketplace listing.",
    "event_host": "Chefs, service staff and clear-down in one brief. Date, headcount, how the night should feel.",
    "planner": "The decision first, then the commercial page that owns the booking.",
    "institution": "Documented kitchen, labelled cycle, a quote after we see the site. Not a party menu.",
}

DESC_MAX = 160


def expected_ctr(position: float | int | None) -> float:
    if position is None:
        return 0.02
    p = float(position)
    if p <= 1:
        return 0.28
    if p <= 2:
        return 0.15
    if p <= 3:
        return 0.11
    if p <= 4:
        return 0.08
    if p <= 5:
        return 0.06
    if p <= 10:
        return 0.04
    if p <= 20:
        return 0.02
    return 0.012


def ctr_gap(*, impressions: int, clicks: int, position: float | None) -> float:
    if impressions <= 0:
        return 0.0
    actual = clicks / impressions
    return max(0.0, expected_ctr(position) - actual)


def _has_aed(text: str) -> bool:
    return bool(re.search(r"\bAED\b", text or "", re.I))


def _trim_title(title: str) -> str:
    t = re.sub(r"\s+", " ", title).strip()
    if len(t) <= 65:
        return t
    # Prefer cutting after a pipe so the primary stays.
    parts = [p.strip() for p in t.split("|")]
    while len(" | ".join(parts)) > 65 and len(parts) > 2:
        parts.pop(-2) if parts[-1].lower() == "mychef" else parts.pop()
    t = " | ".join(parts)
    return t[:65].rstrip(" |")


def _primary_title(primary: str) -> str:
    small = {"and", "in", "for", "of", "at", "to", "the", "a", "on"}
    bits = []
    for i, w in enumerate(primary.split()):
        if w.lower() == "mychef":
            bits.append("myCHEF")
        elif i and w.lower() in small:
            bits.append(w.lower())
        else:
            bits.append(w[:1].upper() + w[1:])
    return " ".join(bits)


def propose_variants(
    *,
    url: str,
    primary: str,
    title: str,
    description: str,
    silo: str,
    page_type: str,
) -> list[dict[str, Any]]:
    persona = V.persona_for(silo, page_type, url=url, primary=primary)
    primary_t = _primary_title(primary)
    control = (title or "").strip()
    out: list[dict[str, Any]] = []
    candidates = [
        (
            "mechanism",
            _trim_title(f"{primary_t} | {MECHANISM[persona]} | myCHEF"),
            _lead_desc(description, DESC_RELIEF[persona], primary_t),
        ),
        (
            "relief",
            _trim_title(f"{primary_t} | {RELIEF[persona]} | myCHEF"),
            _lead_desc(description, DESC_RELIEF[persona], primary_t),
        ),
    ]
    if _has_aed(title) or _has_aed(description):
        # Keep the published number. Never invent one.
        number = re.search(r"AED[\s\d,]+", title) or re.search(r"AED[\s\d,]+", description)
        if number:
            candidates.append(
                (
                    "proof",
                    _trim_title(f"{primary_t} | From {number.group(0).strip()} | myCHEF"),
                    description,
                )
            )
    for kind, var_title, var_desc in candidates:
        if var_title == control:
            continue
        voice = V.score_snippet(title=var_title, description=var_desc, primary=primary, persona=persona)
        if not voice["passed"]:
            continue
        out.append(
            {
                "kind": kind,
                "title": var_title,
                "description": var_desc,
                "persona": persona,
                "voice_passed": True,
                "voice_score": voice["score"],
                "voice_failures": voice["failures"],
                "voice_warnings": voice["warnings"],
            }
        )
    return out


def _trim_desc(text: str) -> str:
    """Fit a meta description into 160 characters without a mid-sentence stump."""
    text = re.sub(r"\s+", " ", text or "").strip()
    if len(text) <= DESC_MAX:
        return text
    cut = text[:DESC_MAX].rsplit(" ", 1)[0].rstrip(".,;:—-")
    cut = re.sub(r"\b(and|or|the|a|an|with|for|to|of|in|from|per)$", "", cut, flags=re.I).strip(" .,;:—-")
    return (cut or text[: DESC_MAX - 1]).rstrip(".") + "."


def _owns_primary(text: str, primary_t: str) -> bool:
    t = re.sub(r"\s+", " ", (text or "").lower())
    p = re.sub(r"\s+", " ", (primary_t or "").lower())
    if not t or not p:
        return False
    if p in t:
        return True
    tokens = p.split()
    if len(tokens) < 2:
        return False
    pat = r"\s+(?:in|for|at|across)?\s*".join(re.escape(tok) for tok in tokens)
    return re.search(pat, t) is not None


def _lead_desc(current: str, relief: str, primary_t: str) -> str:
    """Keep a finished live description. Never append a second sentence then chop it.

    The old path concatenated event-host relief onto a complete meta, then sliced
    at 160 characters: '...table Chefs, service staff and.'
    """
    current = re.sub(r"\s+", " ", (current or "").strip())
    relief = (relief or "").strip()
    if current and (_owns_primary(current, primary_t) or len(current) >= 70):
        return _trim_desc(current)
    if relief:
        return _trim_desc(f"{primary_t}. {relief}")
    if current:
        return _trim_desc(f"{primary_t}. {current}")
    return _trim_desc(primary_t)


def research_page(
    *,
    url: str,
    primary: str,
    title: str,
    description: str,
    silo: str,
    page_type: str,
    impressions: int,
    clicks: int,
    position: float | None,
    open_experiment: bool,
    google_ranks_elsewhere: bool = False,
) -> dict[str, Any]:
    persona = V.persona_for(silo, page_type, url=url, primary=primary)
    control_voice = V.score_snippet(title=title, description=description, primary=primary, persona=persona)
    gap = ctr_gap(impressions=impressions, clicks=clicks, position=position)
    actual_ctr = (clicks / impressions) if impressions else 0.0
    rec: dict[str, Any] = {
        "url": url,
        "keyword": primary,
        "persona": persona,
        "control_title": title,
        "control_description": description,
        "control_voice": control_voice,
        "impressions": impressions,
        "clicks": clicks,
        "position": position,
        "ctr": round(actual_ctr, 4),
        "expected_ctr": round(expected_ctr(position), 4),
        "ctr_gap": round(gap, 4),
        "variants": [],
        "status": "watch",
        "reason": "",
    }
    if open_experiment:
        rec["status"] = "blocked"
        rec["reason"] = "open experiment on this URL — another snippet would confound it"
        return rec
    if google_ranks_elsewhere:
        rec["status"] = "blocked"
        rec["reason"] = (
            "Google is ranking a different URL for this query — a title test on the owner will not be seen"
        )
        return rec
    if impressions < 50:
        rec["status"] = "too_few_impressions"
        rec["reason"] = "need 50+ Search Console impressions before a snippet test is honest"
        return rec
    if gap < 0.005:
        rec["status"] = "ctr_ok"
        rec["reason"] = "CTR is in line with the position — do not churn the snippet"
        return rec
    variants = propose_variants(
        url=url, primary=primary, title=title, description=description, silo=silo, page_type=page_type
    )
    rec["variants"] = variants
    if not variants:
        rec["status"] = "blocked"
        rec["reason"] = "no voice-passing variant distinct from the live title"
        return rec
    rec["status"] = "proposed"
    rec["reason"] = (
        f"{impressions} impressions at pos {position}, CTR {actual_ctr:.2%} vs "
        f"expected {expected_ctr(position):.2%} — test a voice-passing title"
    )
    rec["chosen"] = variants[0]
    return rec


def _ctr(window: dict) -> float | None:
    impr = window.get("gsc_impr")
    clicks = window.get("gsc_clicks")
    if not impr or clicks is None:
        return None
    return clicks / impr


def snippet_verdict(baseline: dict, after: dict, confounders: int) -> tuple[str, str]:
    if confounders:
        return "confounded", f"{confounders} other edit day(s) to this URL inside the window"
    if not baseline.get("days_with_data") or not after.get("days_with_data"):
        return "confounded", "no Search Console readings on one side of the window"
    b_ctr, a_ctr = _ctr(baseline), _ctr(after)

    def per_day(w: dict, key: str) -> float | None:
        v = w.get(key)
        return None if v is None else v / max(1, w["days_with_data"])

    b_clicks, a_clicks = per_day(baseline, "gsc_clicks"), per_day(after, "gsc_clicks")
    b_wa, a_wa = per_day(baseline, "wa_clicks"), per_day(after, "wa_clicks")
    if a_clicks is not None and b_clicks is not None and b_clicks > 0 and (a_clicks - b_clicks) / b_clicks <= -0.15:
        return "drop", "clicks down"
    if a_wa is not None and b_wa is not None and b_wa > 0 and (a_wa - b_wa) / b_wa <= -0.15:
        return "drop", "enquiries down"
    if b_ctr is not None and a_ctr is not None:
        if b_ctr == 0:
            move = 1.0 if a_ctr > 0 else 0.0
        else:
            move = (a_ctr - b_ctr) / b_ctr
        if move >= 0.15:
            return "lift", f"CTR {move:+.0%}"
        if move <= -0.15:
            return "drop", f"CTR {move:+.0%}"
        return "flat", f"CTR {move:+.0%}"
    return "flat", "no CTR reading"

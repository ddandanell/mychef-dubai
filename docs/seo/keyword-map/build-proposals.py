#!/usr/bin/env python3
"""Queue — next actions, scored from evidence. See docs/seo/keyword-map/README.md."""
from __future__ import annotations
import datetime, html as _html, json, pathlib, re
HERE = pathlib.Path(__file__).resolve().parent
SITE = "https://www.mychef.ae"
QUEUE_CAP, PARK_CAP, MAX_SUBS_PER_URL = 15, 60, 2
CLASS_META = {
    "fix_onpage": {"label": "Fix on-page", "autonomy": "L2", "risk": "low", "risk_n": 1},
    "fill_subkeyword": {"label": "Place a subkeyword", "autonomy": "L2", "risk": "low", "risk_n": 1},
    "add_link": {"label": "Add an internal link", "autonomy": "L2", "risk": "low", "risk_n": 1.5},
    "close_gap": {"label": "Close a content gap", "autonomy": "L3", "risk": "medium", "risk_n": 2},
    "retarget": {"label": "Move the keyword", "autonomy": "L3", "risk": "medium", "risk_n": 3},
    "new_page": {"label": "Consider a page", "autonomy": "L3", "risk": "high", "risk_n": 6},
    "retire": {"label": "Review the lock", "autonomy": "L3", "risk": "high", "risk_n": 9},
}
def esc(s):
    return _html.escape(str(s if s is not None else ""))
def load(name):
    f = HERE / name
    if not f.exists():
        return None
    try:
        return json.loads(f.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None
def n(v, default=0):
    if v is None:
        return default
    try:
        return float(v)
    except (TypeError, ValueError):
        return default
def pid(cls, url, keyword):
    path = re.sub(r"[^a-z0-9]+", "-", (url or "/").lower()).strip("-")[:50] or "home"
    slug = re.sub(r"[^a-z0-9]+", "-", (keyword or "").lower()).strip("-")[:40] or "none"
    return f"{cls}:{path}:{slug}"
def demand_of(row):
    return max(n(row.get("gsc_impressions")), n(row.get("search_volume")))
def conv_mult(url, fp):
    p = fp.get(url) or {}
    sessions, conv = n(p.get("sessions")), n(p.get("conversions"))
    if sessions >= 10:
        return 1 + min(4.0, 20.0 * (conv / sessions))
    return 1 + min(conv, 3) * 0.3
def score_of(demand, gap, conv, risk_n):
    return round((max(demand, 1) * gap * conv) / max(risk_n, 0.5), 2)
def main():
    kw, links, gaps, back, dem = load("keywords.json") or {}, load("links.json") or {}, load("gaps.json") or {}, load("backlog.json") or {}, load("demand.json") or {}
    fp_path = HERE / ".live/research/firstparty/behaviour.json"
    fp_doc = json.loads(fp_path.read_text()) if fp_path.exists() else {}
    fp = {p["url"]: p for p in fp_doc.get("pages") or [] if p.get("url")}
    rows = kw.get("rows") or []
    by_url = {}
    for r in rows:
        u = r.get("primary_owning_url") or r.get("owner_url")
        if u:
            by_url.setdefault(u, []).append(r)
    link_p = {p["url"]: p for p in links.get("profiles") or [] if p.get("url")}
    gap_p = {g["url"]: g for g in gaps.get("pages") or [] if g.get("url")}
    dem_p = {p["url"]: p for p in dem.get("pages") or [] if p.get("url")}
    proposals, seen = [], set()
    def add(cls, url, keyword, reason, action, demand, gap, extra=None):
        key = (cls, url, (keyword or "").lower())
        if key in seen:
            return
        seen.add(key)
        meta, conv, fp_row = CLASS_META[cls], conv_mult(url, fp), fp.get(url) or {}
        proposals.append({"id": pid(cls, url, keyword), "class": cls, "label": meta["label"], "url": url,
            "keyword": keyword, "reason": reason, "action": action, "risk": meta["risk"], "autonomy": meta["autonomy"],
            "demand": int(demand), "gap": round(gap, 2), "conversions": int(n(fp_row.get("conversions"))),
            "sessions": int(n(fp_row.get("sessions"))), "score": score_of(demand, gap, conv, meta["risk_n"]),
            "evidence": {"demand": int(demand), "gap": round(gap, 2), "convertibility": round(conv, 3),
                         "sessions": int(n(fp_row.get("sessions"))), "conversions": int(n(fp_row.get("conversions"))), **(extra or {})}})
    for r in rows:
        owner, ranked, impr = r.get("primary_owning_url"), r.get("gsc_ranking_url"), n(r.get("gsc_impressions"))
        if owner and ranked and ranked != owner and impr >= 20:
            add("retarget", owner, r.get("keyword"),
                f"Google shows {ranked} for this phrase ({int(impr)} impressions, pos {r.get('gsc_position') or chr(8212)}). The contract assigned {owner}.",
                "Move the keyword to the ranking URL, or move the ranking section onto the owner.",
                impr, 10, {"gsc_ranking_url": ranked, "gsc_position": r.get("gsc_position"), "gsc_clicks": r.get("gsc_clicks")})
    for r in rows:
        if r.get("role") != "primary":
            continue
        owner = r.get("primary_owning_url")
        if not owner:
            continue
        missing = [x for x, ok in (("title", r.get("title_coverage")), ("H1", r.get("h1_coverage"))) if not ok]
        if not missing:
            continue
        dmd = demand_of(r)
        if dmd <= 0 and n(r.get("page_visitors")) <= 0:
            continue
        add("fix_onpage", owner, r.get("keyword"),
            f"Primary is missing from {' and '.join(missing)}. Score {r.get('optimization_score')}/10 · demand {int(dmd)}.",
            f"Place the exact primary in the {' and '.join(missing)} — optimize-page.py already knows how.",
            max(dmd, n(r.get("page_visitors"))), 8, {"missing": missing, "score": r.get("optimization_score")})
    subs_on = {}
    for r in rows:
        if r.get("role") == "primary":
            continue
        owner = r.get("primary_owning_url")
        if not owner or bool(r.get("body_coverage")) or bool(r.get("faq_coverage")):
            continue
        dmd = demand_of(r)
        if dmd <= 0 or subs_on.get(owner, 0) >= MAX_SUBS_PER_URL:
            continue
        add("fill_subkeyword", owner, r.get("keyword"),
            f"Owned as a subkeyword but not in body or FAQ. Volume {int(n(r.get('search_volume')))} · GSC {int(n(r.get('gsc_impressions')))} impr.",
            "Insert one sentence that uses the exact phrase. Not a heading.", dmd, 3, {"intent": r.get("intent")})
        subs_on[owner] = subs_on.get(owner, 0) + 1
    for url, prof in link_p.items():
        inbound = n(prof.get("in_contextual_unique"))
        if inbound > 1:
            continue
        primaries = [r for r in by_url.get(url, []) if r.get("role") == "primary"]
        if not primaries:
            continue
        primary = primaries[0]
        dmd = demand_of(primary)
        if dmd <= 0 and n(primary.get("page_visitors")) <= 0:
            continue
        status = (prof.get("status") or "").lower()
        add("add_link", url, primary.get("keyword"),
            f"{int(inbound)} contextual inbound link{'' if inbound == 1 else 's'}" + (f" · marked {status}" if status else "") + ".",
            "Add one contextual sentence-link from the silo hub or a sibling with traffic.",
            max(dmd, n(primary.get("page_visitors")), 1), 5, {"in_contextual_unique": inbound, "hub": prof.get("hub")})
    for url, g in gap_p.items():
        gs = n(g.get("gap_score"))
        if gs < 40:
            continue
        primaries = [r for r in by_url.get(url, []) if r.get("role") == "primary"]
        primary = primaries[0] if primaries else {}
        dmd = demand_of(primary) if primary else n((dem_p.get(url) or {}).get("primary_volume"))
        if dmd <= 0:
            continue
        missing_h = g.get("missing_headings") or []
        if isinstance(missing_h, dict):
            missing_h = list(missing_h.values())[:4]
        hint = ", ".join(str(x) for x in missing_h[:3]) if missing_h else "entities and questions competitors cover"
        add("close_gap", url, primary.get("keyword") or g.get("primary"),
            f"Gap score {int(gs)}. Missing: {hint}.",
            "Add one section that covers the strongest missing heading. Do not append a fifteenth FAQ.",
            dmd, min(gs / 10.0, 8), {"gap_score": gs})
    for r in back.get("rows") or []:
        vol = n(r.get("vol_ae") or r.get("volume_ae"))
        if vol < 30 or r.get("already_said_on"):
            continue
        suggested = r.get("suggested") or r.get("suggested_url") or ""
        add("new_page", suggested or "(no owner)", r.get("kw") or r.get("keyword"),
            f"UAE volume {int(vol)}, no page owns it" + (f", suggested home {suggested}" if suggested else "") + ".",
            "Do not create a URL unless the intent is materially different. Prefer a section on the suggested owner.",
            vol, 4, {"intent": r.get("intent")})
    zero = [r for r in rows if r.get("role") == "primary" and demand_of(r) <= 0 and n(r.get("gsc_impressions")) <= 0]
    zero.sort(key=lambda r: (r.get("primary_owning_url") or ""))
    for r in zero[:12]:
        add("retire", r.get("primary_owning_url"), r.get("keyword"),
            "No measured UAE volume and no Search Console impressions. The page has nothing to win yet.",
            "Keep the lock, merge the URL, or retarget. Do not spend optimizer budget here.", 0, 1, {"silo": r.get("silo")})
    proposals.sort(key=lambda p: (-p["score"], p["class"], p["url"]))
    queue = [p for p in proposals if p["class"] != "retire"][:QUEUE_CAP]
    if len(queue) < QUEUE_CAP:
        queue.extend([p for p in proposals if p not in queue][: QUEUE_CAP - len(queue)])
    parked = [p for p in proposals if p not in queue][:PARK_CAP]
    generated = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    payload = {"generated": generated,
        "formula": "score = max(demand,1) × gap × convertibility / risk — demand is max(GSC impressions, UAE volume)",
        "stats": {"candidates": len(proposals), "queue": len(queue), "parked": len(parked),
                   "by_class": {c: sum(1 for p in proposals if p["class"] == c) for c in CLASS_META},
                   "sources": {"keywords": bool(rows), "links": bool(link_p), "gaps": bool(gap_p),
                               "backlog": bool(back.get("rows")), "first_party": bool(fp)}},
        "queue": queue, "parked": parked, "all": queue + parked}
    (HERE / "proposals.json").write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    (HERE / "proposals.html").write_text(render(payload, queue, parked), encoding="utf-8")
    print(f"proposals.html — {len(queue)} in the queue · {len(parked)} parked · {payload['stats']['candidates']} scored")
    return 0
def card(p, queued):
    ranked = (p.get("evidence") or {}).get("gsc_ranking_url")
    return (f'<article class="card" data-id="{esc(p["id"])}" data-class="{esc(p["class"])}" data-status="open" '
            f'data-url="{esc(p["url"])}" data-keyword="{esc(p.get("keyword") or "")}" '
            f'data-t="{esc((p["url"] + " " + (p.get("keyword") or "") + " " + p["reason"]).lower())}">'
            f'<div class="head"><span class="tag t-{esc(p["class"])}">{esc(p["label"])}</span>'
            f'<span class="auto">{esc(p["autonomy"])} · {esc(p["risk"])} risk</span>'
            f'<span class="score" title="impact score">{p["score"]}</span></div>'
            f'<h3><a href="{SITE}{esc(p["url"])}" target="_blank" rel="noopener"><code>{esc(p["url"])}</code></a></h3>'
            f'<p class="kw">{esc(p.get("keyword") or chr(8212))}</p><p class="why">{esc(p["reason"])}</p>'
            f'<p class="do"><b>Do:</b> {esc(p["action"])}</p>'
            + (f'<p class="alt">Google is ranking <code>{esc(ranked)}</code></p>' if ranked else '') +
            f'<dl><div><dt>Demand</dt><dd>{p["demand"]:,}</dd></div><div><dt>Sessions</dt><dd>{p["sessions"]}</dd></div>'
            f'<div><dt>Conversions</dt><dd>{p["conversions"]}</dd></div><div><dt>Gap</dt><dd>{p["gap"]}</dd></div></dl>'
            f'<div class="act"><button type="button" data-decide="accepted" {"disabled" if not queued else ""}>Accept</button>'
            f'<button type="button" class="ghost" data-decide="rejected" {"disabled" if not queued else ""}>Reject</button>'
            f'<span class="note" hidden></span></div></article>')
def render(payload, queue, parked):
    stats = payload["stats"]
    tiles = [(len(queue), "In the queue", None), (stats["candidates"], "Scored this run", None),
             (stats["by_class"].get("retarget", 0), "Contract ≠ Google", None),
             (stats["by_class"].get("fix_onpage", 0), "On-page holes", None),
             (stats["by_class"].get("retire", 0), "Zero-demand primaries", "capped sample")]
    tile_html = "".join(f'<div class="tile"><div class="n">{a}</div><div class="l">{esc(b)}'
                        + (f'<br><span class="muted">{esc(c)}</span>' if c else '') + '</div></div>' for a,b,c in tiles)
    filters = "".join(f'<option value="{esc(c)}">{esc(m["label"])}</option>' for c, m in CLASS_META.items())
    queue_html = "".join(card(p, True) for p in queue) or '<p class="muted">Nothing scored — run the loop so the keyword file exists.</p>'
    parked_html = "".join(card(p, False) for p in parked)
    src = ", ".join(k.replace("_", " ") for k, v in payload["stats"]["sources"].items() if v) or "no research files yet"
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>myCHEF Data Board — Queue</title>
<style>
:root{{color-scheme:light;--ok:#1f7a4d;--warn:#9a6a12;--bad:#a5342a;--ink:#0b0b0b;--dim:#52514e}}
body{{margin:0;background:#fcfcfb;color:var(--ink);font:13px/1.5 Inter,-apple-system,system-ui,sans-serif}}
header{{padding:22px 28px 14px;border-bottom:1px solid #e2e1db}}h1{{margin:0 0 4px;font-size:22px}}
.sub{{color:var(--dim);max-width:96ch;margin:0}}
.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;padding:14px 28px 6px}}
.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}
.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}.tile .l{{color:var(--dim);font-size:12px;margin-top:3px}}
.filters{{position:sticky;top:41px;z-index:5;display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:10px 28px;background:#fcfcfb;border-bottom:1px solid #e2e1db}}
.filters input,.filters select{{padding:6px 10px;border:1px solid #c9c8c0;border-radius:6px;font:inherit;background:#fff}}
.filters input{{width:280px}}main{{padding:8px 28px 60px}}
h2{{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#83817a;margin:26px 0 10px;font-weight:600}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:12px}}
.card{{border:1px solid #e6e5df;border-radius:8px;background:#fff;padding:13px 15px;border-left:3px solid #d8d6cc}}
.card[data-status="accepted"]{{border-left-color:var(--ok);opacity:.72}}
.card[data-status="rejected"]{{border-left-color:var(--bad);opacity:.55}}
.head{{display:flex;gap:8px;align-items:center;margin-bottom:6px}}
.tag{{font-size:11px;letter-spacing:.04em;text-transform:uppercase;padding:2px 7px;border-radius:3px;font-weight:600;background:#eef1ef;color:#3d4a47}}
.t-fix_onpage{{background:#e8eef7;color:#28517f}}.t-fill_subkeyword{{background:#f6efe3;color:#7a5418}}
.t-add_link{{background:#eaf1ea;color:#2c5c38}}.t-close_gap{{background:#f2ecf6;color:#5a3a75}}
.t-retarget{{background:#f7e8e4;color:#8a3d33}}.t-new_page{{background:#e7f3f6;color:#215968}}.t-retire{{background:#f1f0ea;color:#5c5a52}}
.auto{{color:#83817a;font-size:11px}}.score{{margin-left:auto;font-variant-numeric:tabular-nums;font-weight:700;font-size:16px}}
h3{{margin:0 0 2px;font-size:13px;font-weight:600}}h3 a{{text-decoration:none}}
code{{font:12px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;background:#f1f0ea;padding:1px 5px;border-radius:4px}}
.kw{{margin:0 0 8px;font-weight:600}}.why,.do,.alt{{margin:0 0 6px;color:#3f4b48}}
dl{{margin:10px 0 0;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;border-top:1px solid #f0efe9;padding-top:8px}}
dt{{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#9a988f}}dd{{margin:2px 0 0;font-variant-numeric:tabular-nums}}
.act{{display:flex;gap:8px;align-items:center;margin-top:10px}}
button{{font:inherit;border:0;border-radius:6px;padding:6px 12px;background:#10201f;color:#e8efec;cursor:pointer}}
button.ghost{{background:#fff;color:var(--ink);border:1px solid #c9c8c0}}button:disabled{{opacity:.4;cursor:not-allowed}}
.note,.muted{{color:#83817a}}.hidden{{display:none}}
.banner{{margin:12px 28px 0;padding:8px 12px;border-radius:6px;background:#f6efe3;color:#7a5418}}
.banner.ok{{background:#eaf1ea;color:#2c5c38}}.banner.bad{{background:#fbf1ef;color:#8a3d33}}
</style></head><body>
<header><h1>Queue</h1>
<p class="sub">The next things worth doing, scored from the same evidence the rest of the board already has.
Accepting a row records the decision. It does not edit the site. Generated {esc(payload["generated"])} from {esc(src)}.</p></header>
<div class="tiles">{tile_html}</div>
<p class="banner" id="flash" hidden></p>
<div class="filters"><input type="search" id="q" placeholder="Search a URL or phrase…">
<select id="c"><option value="">Every class</option>{filters}</select>
<select id="s"><option value="open">Open</option><option value="">Any status</option>
<option value="accepted">Accepted</option><option value="rejected">Rejected</option></select>
<span class="muted" id="count"></span></div>
<main><h2>Do these first</h2><div class="grid" id="queue">{queue_html}</div>
<h2>Parked — same run, lower score</h2>
<p class="sub muted">Zero-demand locks stay visible as a pile rather than a morning task.</p>
<div class="grid" id="parked">{parked_html}</div></main>
<script>
const ENDPOINT = '/api/proposals';
const q = document.getElementById('q'), c = document.getElementById('c'), s = document.getElementById('s');
const count = document.getElementById('count'), flash = document.getElementById('flash');
function apply() {{
  const text = q.value.trim().toLowerCase(), cls = c.value, st = s.value;
  let shown = 0, total = 0;
  document.querySelectorAll('.card').forEach((el) => {{
    total += 1;
    const ok = (!text || el.dataset.t.includes(text)) && (!cls || el.dataset.class === cls) && (!st || el.dataset.status === st);
    el.classList.toggle('hidden', !ok); if (ok) shown += 1;
  }});
  count.textContent = shown + ' of ' + total;
}}
q.addEventListener('input', apply); c.addEventListener('change', apply); s.addEventListener('change', apply);
function say(msg, kind) {{ flash.hidden = false; flash.className = 'banner' + (kind ? ' ' + kind : ''); flash.textContent = msg; }}
async function hydrate() {{
  try {{
    const r = await fetch(ENDPOINT, {{ headers: {{ 'Accept': 'application/json' }} }});
    if (r.status === 401) {{ say('Open this at /seo/proposals.html to record decisions.'); return; }}
    if (!r.ok) return;
    const data = await r.json();
    const byId = {{}}; (data.proposals || []).forEach((p) => {{ byId[p.id] = p; }});
    document.querySelectorAll('.card').forEach((el) => {{
      const p = byId[el.dataset.id]; if (!p || !p.status || p.status === 'open') return;
      el.dataset.status = p.status;
      const note = el.querySelector('.note'); note.hidden = false;
      note.textContent = p.status + (p.decided_note ? ' — ' + p.decided_note : '');
      el.querySelectorAll('button').forEach((b) => {{ b.disabled = true; }});
    }});
    apply();
  }} catch (e) {{}}
}}
document.addEventListener('click', async (e) => {{
  const btn = e.target.closest('button[data-decide]');
  if (!btn || btn.disabled) return;
  const card = btn.closest('.card'); const status = btn.dataset.decide; btn.disabled = true;
  try {{
    const r = await fetch(ENDPOINT, {{ method: 'POST', headers: {{ 'Content-Type': 'application/json' }},
      body: JSON.stringify({{ id: card.dataset.id, status, class: card.dataset.class, url: card.dataset.url, keyword: card.dataset.keyword }}) }});
    const data = await r.json().catch(() => ({{}}));
    if (!r.ok) {{ say(data.error || ('Could not record ' + status), 'bad'); btn.disabled = false; return; }}
    card.dataset.status = status;
    const note = card.querySelector('.note'); note.hidden = false; note.textContent = status;
    card.querySelectorAll('button').forEach((b) => {{ b.disabled = true; }});
    say('Recorded ' + status + ' for ' + card.dataset.id, 'ok'); apply();
  }} catch (err) {{
    say('No API on this origin — open the published board to record a decision.', 'bad'); btn.disabled = false;
  }}
}});
hydrate(); apply();
</script></body></html>
"""
if __name__ == "__main__":
    raise SystemExit(main())

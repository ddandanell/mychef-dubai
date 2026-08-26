#!/usr/bin/env python3
"""The keyword file — one ownership record per keyword, the fields the owner specified:

  Keyword · Search volume · Intent · Commercial value · Difficulty · Current position · Target position ·
  Primary owning URL · Secondary supporting URLs · Title / Meta / H1 / H2 / Body / FAQ / Internal-anchor coverage ·
  Cannibalisation risk · Competitor gap · Optimization score · Next action

Joins report.json (volume, intent, CPC, KD, SERP position/similarity, competitor gap), data.json (live placement per
keyword on its owner page), links.json (inbound anchors per page), the contract (ownership), the live snapshot
(FAQ answers via the FAQPage JSON-LD, secondary pages whose body says the phrase).

Writes keywords.csv, keywords.json, ownership.html.   python3 docs/seo/keyword-map/build-ownership.py
"""
import json, pathlib, re, html, csv, collections, datetime, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
LIVE = HERE / ".live"
# --dist scores the pages just built into dist/ (snapshot .live-dist/); without it the page HTML
# comes from the last live crawl in .live/. Research data (DataForSEO, competitors) always lives
# under .live/ regardless — only the page HTML moves.
PAGES = HERE / ".live-dist" if "--dist" in sys.argv else LIVE
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text()); pages = contract["pages"]
report = {r["kw"]: r for r in json.loads((HERE / "report.json").read_text())["rows"]}
mapd = json.loads((HERE / "data.json").read_text())
links = {p["url"]: p for p in json.loads((HERE / "links.json").read_text())["profiles"]}
# First-party traffic per URL (Vercel Web Analytics, refreshed by harvest-vercel-analytics.py).
# GSC has no mychef.ae property, so without this every traffic column in the tracker is blank.
_vf = HERE / ".live/research/vercel/analytics.json"
traffic = json.loads(_vf.read_text()) if _vf.exists() else {"pages": {}, "totals": {}, "window_days": 0, "since": "", "until": ""}
def traffic_for(u):
    return (traffic["pages"].get(u.rstrip("/") or "/") or {"visitors": 0, "pageviews": 0})

# Behaviour from our own collector (api/e.ts): seconds on page, bounce, conversions.
_bf = HERE / ".live/research/firstparty/behaviour.json"
_beh = json.loads(_bf.read_text()) if _bf.exists() else {"pages": []}
behaviour = {p["url"]: p for p in _beh.get("pages", [])}
def behaviour_for(u):
    return behaviour.get(u.rstrip("/") or "/") or {"sessions": 0, "bounce_rate": None, "median_seconds": None, "conversions": 0}

import unicodedata as _ud
def _deaccent(s): return "".join(c for c in _ud.normalize("NFKD", s or "") if not _ud.combining(c))
def norm(s):
    s = _deaccent(s or "")
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", (s or "").lower().replace("-", " "))).strip()
STOP = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "near", "me", "with", "on", "is", "your", "our"}
def toks(s): return {t for t in norm(s).split() if t not in STOP}
def has(text, k): return bool(k) and re.search(r"(?<![a-z0-9])" + re.escape(norm(k)) + r"(?![a-z0-9])", text) is not None
# Search Console — the only source that knows what this site earns per phrase. Everything else
# is demand (what Dubai searches) or traffic (who arrived); this is the bit in between.
_gf = HERE / ".live/research/gsc/search-analytics.json"
_gsc = json.loads(_gf.read_text()) if _gf.exists() else {"queries": [], "ranking_url": {}, "window_days": 0}
gsc = {norm(q["query"]): q for q in _gsc.get("queries", [])}
gsc_ranks = {norm(k): v for k, v in (_gsc.get("ranking_url") or {}).items()}
GSC_MONTHS = max(1, (_gsc.get("window_days") or 90) / 30.0)


# ---- live pages: body, FAQ text (from FAQPage JSON-LD), headings ------------------------------
bodies, faqs, heads = {}, {}, {}
for url in pages:
    f = PAGES / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    if not f.exists(): continue
    h = f.read_text(encoding="utf-8", errors="ignore")
    if len(h) < 500: continue
    m = re.search(r"<main.*?</main>", h, flags=re.S); mh = m.group(0) if m else h
    txt = html.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"<script.*?</script>|<style.*?</style>", " ", mh, flags=re.S)))
    bodies[url] = norm(txt)
    # the FAQ accordion in the DOM: from the first aria-expanded button to the end of its section (answers are in the
    # HTML, collapsed with CSS) — JSON-LD is not used because assemblePageGraph does not emit FAQPage
    fq = []
    i = mh.find('aria-expanded=')
    if i >= 0:
        j = mh.find("</section>", mh.rfind('aria-expanded='))
        fq.append(norm(html.unescape(re.sub(r"<[^>]+>", " ", mh[max(0, mh.rfind("<section", 0, i)):j if j > 0 else len(mh)]))))
    for s in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, flags=re.S):
        if "FAQPage" in s:
            try:
                d = json.loads(html.unescape(s)); nodes = d.get("@graph", [d]) if isinstance(d, dict) else d
                for n in nodes:
                    if isinstance(n, dict) and n.get("@type") == "FAQPage":
                        for q in n.get("mainEntity", []): fq.append(norm(q.get("name", "")) + " " + norm((q.get("acceptedAnswer") or {}).get("text", "")))
            except Exception: pass
    faqs[url] = " ".join(fq)
    heads[url] = [norm(html.unescape(re.sub(r"<[^>]+>", " ", x))) for x in re.findall(r"<h[23][^>]*>(.*?)</h[23]>", mh, flags=re.S)]

# ---- per keyword placement from the map --------------------------------------------------------
placement = {}
for silo, rows in mapd["silos"].items():
    for r in rows:
        if r.get("retired") or r.get("noindex"): continue
        if r.get("primary"): placement[(norm(r["primary"]), r["url"])] = ("primary", r.get("primary_place"))
        for s in r.get("subs", []): placement[(norm(s["kw"]), r["url"])] = ("sub", s.get("place"))
collisions = {c["kw"]: c for c in mapd.get("collisions", [])}

owner = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    io = p.get("intent_owner") or {}
    if io.get("primary_keyword"): owner[norm(io["primary_keyword"])] = (url, "primary")
    for s in io.get("subkeywords") or []: owner.setdefault(norm(s), (url, "sub"))

def target_position(vol, pos, kd):
    if vol >= 300: return 3
    if vol >= 100: return 5
    if vol > 0: return 10
    return 10 if isinstance(pos, int) and pos <= 30 else 20

rows = []
for k, (url, role) in owner.items():
    g = gsc.get(norm(k)) or {}
    ranks_at = gsc_ranks.get(norm(k))
    rep = report.get(k, {})
    role_, place = placement.get((k, url), (role, None))
    place = place or {}
    body = bodies.get(url, "")
    faq_cov = has(faqs.get(url, ""), k)
    lp = links.get(url) or {}
    anchor_cov = any(has(a, k) for a, n in (lp.get("anchors") or []))
    anchor_partial = any(toks(k) and (toks(a) & toks(k)) for a, n in (lp.get("anchors") or []))
    supporting = [u for u, b in bodies.items() if u != url and has(b, k)][:6]
    vol = rep.get("volume") or 0
    pos = rep.get("position")
    coll = collisions.get(k)
    heading_elsewhere = len(coll["heading_pages"]) if coll else 0
    risk = "high — used in other pages' headings" if heading_elsewhere else ("medium — many bodies say it" if len(supporting) >= 6 else ("low" if rep.get("serp_similarity") in (None, 1.0) or (rep.get("serp_similarity") or 0) >= 0.5 else "medium — SERP looks like another page"))
    # optimisation score 0–10 for THIS keyword on THIS page
    if role_ == "primary":
        score = (2 if place.get("title") else 0) + (2 if place.get("h1") else 0) + (1 if place.get("description") else 0) + (1 if place.get("h2") else 0) + (1 if (place.get("count") or 0) >= 2 else 0) + (1 if faq_cov else 0) + (1 if anchor_cov else 0) + (1 if place.get("first100") else 0)
    else:
        score = min(4, (place.get("count") or 0) * 2) + (1 if place.get("description") else 0) + (2 if faq_cov else 0) + (2 if anchor_cov else (1 if anchor_partial else 0)) + (1 if supporting else 0)
        if place.get("violation"): score = max(0, score - 3)
    score = min(10, score)
    nxt = []
    if role_ == "primary":
        if not place.get("title"): nxt.append("put the exact primary in the title")
        if not place.get("h1"): nxt.append("put the exact primary in the H1")
        if not place.get("description"): nxt.append("say it in the meta description")
        if not place.get("first100"): nxt.append("say it in the first 100 words")
        if not place.get("h2"): nxt.append("one H2 carries it")
        if (place.get("count") or 0) < 2: nxt.append("use it at least twice in the body")
        if not faq_cov: nxt.append("answer a FAQ that contains it")
        if not anchor_cov: nxt.append("get an inbound link with this anchor")
    else:
        if not place.get("body"): nxt.append("write one sentence that says it")
        elif (place.get("count") or 0) < 2: nxt.append("a second natural mention")
        if place.get("violation"): nxt.append("remove it from the heading (subs live in sentences)")
        if not faq_cov and vol >= 50: nxt.append("cover it in a FAQ answer")
        if not anchor_cov and vol >= 100: nxt.append("an inbound anchor from a same-silo page")
    if role_ == "primary" and not vol:
        # DataForSEO reports no UAE volume. Fine for a subkeyword (it costs one sentence);
        # for a primary it means the page is aimed at demand that has not been measured.
        nxt.insert(0, "no measured UAE demand for this primary — re-target it or merge the page"
                      if not traffic_for(url)["visitors"] else
                      "no measured UAE demand, but the page gets visits — check the phrasing against what they search")
    if ranks_at and ranks_at != url and (g.get("impressions") or 0) >= 20:
        nxt.append(f"Google ranks {ranks_at} for this, not the owner — move the keyword or the content")
    if heading_elsewhere: nxt.append(f"remove it from {heading_elsewhere} other page(s)' headings")
    if rep.get("action", "").startswith("merge"): nxt.append(rep["action"])
    if rep.get("action", "").startswith("drop"): nxt = ["drop — off-intent"]
    # Impressions cover the whole window; volume is monthly. Compare like with like.
    share = round((g.get("impressions", 0) / GSC_MONTHS) / vol, 3) if (vol and g.get("impressions")) else None
    rows.append({
        "keyword": k, "search_volume": vol, "intent": rep.get("intent"), "commercial_value": rep.get("commercial_value") or 0, "difficulty": rep.get("kd"),
        "current_position": round(g["position"]) if g.get("position") else (pos if isinstance(pos, int) else None), "target_position": target_position(vol, pos, rep.get("kd")),
        "primary_owning_url": url, "role": role_, "secondary_supporting_urls": supporting,
        "title_coverage": bool(place.get("title")), "meta_coverage": bool(place.get("description")), "h1_coverage": bool(place.get("h1")), "h2_coverage": bool(place.get("h2")),
        "body_coverage": place.get("count") or 0, "faq_coverage": faq_cov, "internal_anchor_coverage": "exact" if anchor_cov else ("partial" if anchor_partial else "none"),
        "cannibalisation_risk": risk, "competitor_gap": rep.get("competitor_gap"), "serp_similarity": rep.get("serp_similarity"),
        "optimization_score": score, "next_action": "; ".join(nxt) or "hold — nothing to do", "silo": pages[url].get("silo"),
        "page_visitors": traffic_for(url)["visitors"], "page_pageviews": traffic_for(url)["pageviews"],
        "page_conversions": behaviour_for(url)["conversions"], "page_seconds": behaviour_for(url)["median_seconds"],
        "page_bounce": behaviour_for(url)["bounce_rate"],
        "gsc_clicks": g.get("clicks"), "gsc_impressions": g.get("impressions"), "gsc_ctr": g.get("ctr"),
        "gsc_position": g.get("position"), "gsc_ranking_url": ranks_at, "demand_share": share,
    })
# every sitemap URL is in the file — pages with no keyword get an explicit untargeted row so nothing is invisible
sitemap_urls = [re.sub(r"^https://www\.mychef\.ae", "", u) or "/" for u in re.findall(r"<loc>([^<]+)</loc>", (ROOT / "public/sitemap.xml").read_text())]
covered = {r["primary_owning_url"] for r in rows}
for u in sitemap_urls:
    if u not in covered:
        rows.append({"keyword": "", "search_volume": 0, "intent": None, "commercial_value": 0, "difficulty": None, "current_position": None, "target_position": None,
                     "primary_owning_url": u, "role": "untargeted (in sitemap)", "secondary_supporting_urls": [], "title_coverage": False, "meta_coverage": False, "h1_coverage": False, "h2_coverage": False,
                     "body_coverage": 0, "faq_coverage": False, "internal_anchor_coverage": "none", "cannibalisation_risk": "n/a", "competitor_gap": None, "serp_similarity": None,
                     "optimization_score": 0, "next_action": "decide: lock a primary or keep untargeted by decision", "silo": (pages.get(u) or {}).get("silo"),
                     "page_visitors": traffic_for(u)["visitors"], "page_pageviews": traffic_for(u)["pageviews"],
                     "page_conversions": behaviour_for(u)["conversions"], "page_seconds": behaviour_for(u)["median_seconds"],
                     "page_bounce": behaviour_for(u)["bounce_rate"], "gsc_clicks": None, "gsc_impressions": None,
                     "gsc_ctr": None, "gsc_position": None, "gsc_ranking_url": None, "demand_share": None})
rows.sort(key=lambda r: (-(r["search_volume"]), r["primary_owning_url"], r["role"] != "primary", r["keyword"]))
stats = {"keywords": sum(1 for r in rows if r["keyword"]), "sitemap_urls": len(sitemap_urls), "sitemap_urls_untargeted": sum(1 for r in rows if not r["keyword"]), "primaries": sum(1 for r in rows if r["role"] == "primary"), "avg_score": round(sum(r["optimization_score"] for r in rows) / max(1, len(rows)), 2),
         "at_10": sum(1 for r in rows if r["optimization_score"] == 10), "below_5": sum(1 for r in rows if r["optimization_score"] < 5),
         "primary_avg": round(sum(r["optimization_score"] for r in rows if r["role"] == "primary") / max(1, sum(1 for r in rows if r["role"] == "primary")), 2),
         "with_volume": sum(1 for r in rows if r["search_volume"]), "high_risk": sum(1 for r in rows if r["cannibalisation_risk"].startswith("high")),
         "faq_covered": sum(1 for r in rows if r["faq_coverage"]), "anchor_exact": sum(1 for r in rows if r["internal_anchor_coverage"] == "exact"),
         "primaries_no_demand": sum(1 for r in rows if r["role"] == "primary" and not r["search_volume"]),
         "gsc_clicks": sum(r["gsc_clicks"] or 0 for r in rows), "gsc_impressions": sum(r["gsc_impressions"] or 0 for r in rows),
         "gsc_wrong_owner": sum(1 for r in rows if r["gsc_ranking_url"] and r["gsc_ranking_url"] != r["primary_owning_url"] and (r["gsc_impressions"] or 0) >= 20),
         "conversions": sum(r["page_conversions"] or 0 for r in rows if r["role"] == "primary"),
         "score_by_silo": {s: round(sum(r["optimization_score"] for r in rows if r["silo"] == s) / max(1, sum(1 for r in rows if r["silo"] == s)), 1) for s in sorted({r["silo"] for r in rows if r["silo"]})}}
data = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "rows": rows}
(HERE / "keywords.json").write_text(json.dumps(data, ensure_ascii=False))
with open(HERE / "keywords.csv", "w", newline="") as fh:
    w = csv.DictWriter(fh, fieldnames=list(rows[0].keys())); w.writeheader()
    for r in rows: w.writerow({**r, "secondary_supporting_urls": " ".join(r["secondary_supporting_urls"])})
esc = lambda s: html.escape(str(s if s is not None else ""))
tick = lambda b: '<b style="color:#0a6f0a">✓</b>' if b else '<span style="color:#c9c8c0">–</span>'
def sc(n): return f'<span class="flag {"good" if n >= 8 else "warn" if n >= 5 else "serious"}"><i></i>{n}/10</span>'
trs = "".join(f"""<tr data-t="{esc((r['keyword'] + ' ' + r['primary_owning_url'] + ' ' + (r['silo'] or '')).lower())}" data-role="{r['role']}" data-s="{r['optimization_score']}"><td class="kw">{esc(r['keyword'])}<div class="muted">{esc(r['role'])} · {esc(r['silo'])}</div></td>
<td class="nums">{r['search_volume'] or '<span class=muted>0</span>'}<div class="muted">{esc(r['intent'] or '')}</div></td><td class="nums">{'$' + format(r['commercial_value'], ',.0f') if r['commercial_value'] else '—'}</td><td class="nums">{r['difficulty'] if r['difficulty'] is not None else '—'}</td>
<td class="nums">{('#' + str(r['current_position'])) if r['current_position'] else '—'} → {r['target_position']}{f'<div class="muted">{r["gsc_impressions"]} impr · {r["gsc_clicks"]} clicks</div>' if r['gsc_impressions'] else ''}{f'<div class="muted">{round(r["demand_share"]*100)}% of demand seen</div>' if r['demand_share'] else ''}</td><td class="nums">{r['page_visitors'] or '<span class=muted>0</span>'}<div class="muted">{r['page_pageviews']} views{(' · ' + str(r['page_conversions']) + ' conv') if r['page_conversions'] else ''}</div></td><td><code>{esc(r['primary_owning_url'])}</code>{('<div class=muted>' + ' '.join('<code>' + esc(u) + '</code>' for u in r['secondary_supporting_urls'][:3]) + '</div>') if r['secondary_supporting_urls'] else ''}</td>
<td class="cov">{tick(r['title_coverage'])} {tick(r['meta_coverage'])} {tick(r['h1_coverage'])} {tick(r['h2_coverage'])} <span class="nums">×{r['body_coverage']}</span> {tick(r['faq_coverage'])} <span class="muted">{esc(r['internal_anchor_coverage'])}</span></td>
<td>{esc(r['cannibalisation_risk'])}</td><td class="muted">{esc(r['competitor_gap'] or '—')}</td><td>{sc(r['optimization_score'])}</td><td class="muted">{esc(r['next_action'])}</td></tr>""" for r in rows)
window = traffic.get("window_days") or 30
page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>myCHEF.ae keyword ownership</title>
<style>:root{{color-scheme:light}}body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:13px/1.4 Inter,-apple-system,system-ui,sans-serif}}header{{padding:24px 28px 14px;border-bottom:1px solid #e2e1db}}h1{{margin:0 0 4px;font-size:22px}}h1 a{{font-size:13px;font-weight:500;margin-left:12px;color:#2a78d6}}.sub{{color:#52514e;max-width:92ch}}.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;padding:14px 28px 6px}}.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}.tile .l{{color:#52514e;font-size:12px;margin-top:3px}}.filters{{position:sticky;top:0;z-index:5;display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:10px 28px;background:#fcfcfb;border-bottom:1px solid #e2e1db}}.filters input{{width:280px;padding:6px 10px;border:1px solid #c9c8c0;border-radius:6px;font:inherit}}.filters select{{padding:6px 8px;border:1px solid #c9c8c0;border-radius:6px;font:inherit;background:#fff}}.filters .count{{margin-left:auto;color:#84827c}}main{{padding:8px 28px 60px;overflow-x:auto}}table{{width:100%;min-width:1600px;border-collapse:collapse;background:#fff;border:1px solid #e2e1db}}th,td{{text-align:left;padding:6px 8px;border-bottom:1px solid #e2e1db;vertical-align:top}}th{{font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:#52514e;background:#f3f2ee;white-space:nowrap}}td.kw{{font-weight:500;white-space:nowrap}}.muted{{color:#84827c}}code{{font-family:ui-monospace,Menlo,monospace;font-size:11.5px;background:#f3f2ee;padding:1px 4px;border-radius:4px}}.nums{{font-variant-numeric:tabular-nums;white-space:nowrap}}.cov{{white-space:nowrap;letter-spacing:.12em}}.flag{{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;padding:2px 7px;border-radius:999px;border:1px solid #e2e1db;white-space:nowrap}}.flag i{{width:7px;height:7px;border-radius:50%;display:inline-block;background:#c9c8c0}}.flag.good i{{background:#0ca30c}}.flag.warn i{{background:#fab219}}.flag.serious i{{background:#ec835a}}tr.hidden{{display:none}}.legend{{color:#84827c;font-size:12px;margin-top:10px;max-width:100ch}}</style></head><body>
<header><h1>myCHEF.ae keyword ownership <a href="index.html">Map</a> <a href="report.html">Keyword report</a> <a href="links.html">Internal links</a> <a href="gaps.html">Content gaps</a> <a href="architecture.html">Architecture</a> <a href="keywords.csv">CSV</a></h1>
<p class="sub">The keyword file: one record per owned keyword — demand, intent, value, difficulty, current → target position, the owning URL and pages that also say it, coverage in title · meta · H1 · H2 · body (×count) · FAQ · inbound anchors, cannibalisation risk, competitor gap, an optimization score for the keyword on its page, and the next action. Generated {esc(data['generated'])}. Local research file.</p></header>
<div class="tiles"><div class="tile"><div class="n">{stats['keywords']}</div><div class="l">Owned keywords<br><span class="muted">{stats['primaries']} primaries</span></div></div><div class="tile"><div class="n">{stats['avg_score']}</div><div class="l">Average score /10<br><span class="muted">primaries {stats['primary_avg']}</span></div></div><div class="tile"><div class="n">{stats['at_10']}</div><div class="l">At 10/10</div></div><div class="tile"><div class="n">{stats['below_5']}</div><div class="l">Below 5/10</div></div><div class="tile"><div class="n">{stats['faq_covered']}</div><div class="l">Covered in a FAQ</div></div><div class="tile"><div class="n">{stats['anchor_exact']}</div><div class="l">Exact inbound anchor</div></div><div class="tile"><div class="n">{stats['high_risk']}</div><div class="l">High cannibalisation risk</div></div><div class="tile"><div class="n">{stats['primaries_no_demand']}</div><div class="l">Primaries with no measured demand<br><span class="muted">of {stats['primaries']} — nothing to win until re-targeted</span></div></div><div class="tile"><div class="n">{stats['gsc_impressions']:,}</div><div class="l">Search impressions, 90 days<br><span class="muted">{stats['gsc_clicks']} clicks · Search Console</span></div></div><div class="tile"><div class="n">{stats['gsc_wrong_owner']}</div><div class="l">Phrases Google gives another page<br><span class="muted">20+ impressions, not the assigned owner</span></div></div><div class="tile"><div class="n">{traffic.get('totals',{}).get('visitors',0)}</div><div class="l">Visitors, last {window}d<br><span class="muted">{traffic.get('totals',{}).get('pageviews',0)} pageviews · Vercel</span></div></div></div>
<div class="filters"><input type="search" id="q" placeholder="Search keyword / URL / silo…"><select id="role"><option value="">All</option><option value="primary">Primaries</option><option value="sub">Subkeywords</option></select><select id="sc"><option value="">Any score</option><option value="lt5">Below 5</option><option value="lt8">Below 8</option><option value="10">10/10</option></select><span class="count" id="count"></span></div>
<main><table><thead><tr><th>Keyword</th><th>Volume · intent</th><th>Value /mo</th><th>KD</th><th>Position → target</th><th>Traffic {window}d</th><th>Owner · supporting</th><th>T M H1 H2 ×body FAQ · anchor</th><th>Cannibalisation</th><th>Competitor gap</th><th>Score</th><th>Next action</th></tr></thead><tbody>{trs}</tbody></table>
<p class="legend">Score (primary): title 2 · H1 2 · meta 1 · first 100 words 1 · one H2 1 · body ≥2 1 · FAQ 1 · exact inbound anchor 1. Score (sub): body mentions ×2 (max 4) · meta 1 · FAQ 2 · inbound anchor 2 (partial 1) · another page also says it 1; −3 if it sits in a heading. Target position: ≥300/mo → top 3, ≥100 → top 5, any volume → top 10, none → top 20 by design. Silo averages: {esc(json.dumps(stats['score_by_silo']))}</p></main>
<script>const q=document.getElementById('q'),ro=document.getElementById('role'),sc=document.getElementById('sc'),c=document.getElementById('count');function ap(){{const v=q.value.toLowerCase(),r=ro.value,s=sc.value;let n=0;document.querySelectorAll('tbody tr').forEach(tr=>{{const d=tr.dataset,k=+d.s;const ok=(!v||d.t.includes(v))&&(!r||d.role===r)&&(!s||(s==='lt5'?k<5:s==='lt8'?k<8:k===10));tr.classList.toggle('hidden',!ok);if(ok)n++;}});c.textContent=n+' keywords';}}[q,ro,sc].forEach(e=>e.addEventListener('input',ap));ap();</script></body></html>"""
(HERE / "ownership.html").write_text(page)
print(json.dumps(stats, indent=1))

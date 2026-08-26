#!/usr/bin/env python3
"""Internal-link profiles for every URL — from the live snapshot, not from intentions.

For each page: links in/out, unique linking pages, split by region (contextual = inside <main> minus the
breadcrumb; silo = the "Related pages" section; nav = header; footer), anchor texts, whether anchors carry the
target's primary keyword, whether the strongest relevant pages link to it, orphans, and an authority status
(Weak / Good / Strong / Maximum opportunity) relative to the page's strategic importance (UAE demand + hub role).
Also: recommended additional linkers (same-silo pages and top-authority pages not yet linking contextually).

Writes links.json + links.html.   python3 docs/seo/keyword-map/build-internal-links.py
"""
import json, pathlib, re, html, collections, datetime, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
LIVE = HERE / ".live"
# --dist scores the pages just built into dist/ (snapshot .live-dist/); without it the page HTML
# comes from the last live crawl in .live/. Research data (DataForSEO, competitors) always lives
# under .live/ regardless — only the page HTML moves.
PAGES = HERE / ".live-dist" if "--dist" in sys.argv else LIVE
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())
pages = contract["pages"]
import unicodedata as _ud
def _deaccent(s): return "".join(c for c in _ud.normalize("NFKD", s or "") if not _ud.combining(c))
def norm(s):
    s = _deaccent(s or "")
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", (s or "").lower().replace("-", " "))).strip()
STOP = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "near", "me", "with", "on", "is", "your", "our"}
def toks(s): return {t for t in norm(s).split() if t not in STOP}

vol = {}
f = LIVE / "research/dataforseo/google_ads_search_volume.json"
if f.exists():
    for r in json.loads(f.read_text()):
        if r.get("keyword"): vol[norm(r["keyword"])] = r.get("search_volume") or 0

active = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to"): continue
    io = p.get("intent_owner") or {}
    active[url] = {"primary": norm(io.get("primary_keyword") or ""), "raw_primary": io.get("primary_keyword"), "subs": [norm(s) for s in io.get("subkeywords") or []],
                   "silo": p.get("silo"), "hub": p.get("hub"), "is_hub": bool(p.get("is_hub")), "type": p.get("page_type"), "noindex": not (idx.get("robots") or {}).get("index", True),
                   "uplink": ((p.get("internal_linking") or {}).get("uplink_hub") or {}).get("url"), "siblings": [s.get("url") for s in ((p.get("internal_linking") or {}).get("siblings") or [])]}

def clean_href(h):
    h = html.unescape(h).split("#")[0].split("?")[0]
    if h.startswith("https://www.mychef.ae"): h = h[len("https://www.mychef.ae"):]
    if not h.startswith("/"): return None
    return h if h == "/" else h.rstrip("/")

A_RE = re.compile(r'<a\b([^>]*)href="([^"]+)"([^>]*)>(.*?)</a>', re.S)
def links_in(fragment, region):
    out = []
    for m in A_RE.finditer(fragment):
        href = clean_href(m.group(2))
        if not href: continue
        anchor = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", m.group(4)))).strip()
        attrs = m.group(1) + m.group(3)
        out.append({"to": href, "anchor": anchor[:120], "region": region, "nofollow": "nofollow" in attrs})
    return out

outlinks = {}
for url in active:
    f = PAGES / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    if not f.exists(): continue
    h = f.read_text(encoding="utf-8", errors="ignore")
    if len(h) < 500: continue
    main = re.search(r"<main.*?</main>", h, flags=re.S)
    header = re.search(r"^(.*?)<main", h, flags=re.S)
    after = h[main.end():] if main else ""
    silo = re.search(r'<section[^>]*aria-label="Related pages".*?</section>', after, flags=re.S)
    footer = re.search(r"<footer.*?</footer>", h, flags=re.S)
    m_html = main.group(0) if main else ""
    bc = re.search(r'<nav aria-label="Breadcrumb".*?</nav>', m_html, flags=re.S)
    m_ctx = m_html.replace(bc.group(0), "") if bc else m_html
    ls = []
    if header: ls += links_in(header.group(1), "nav")
    if bc: ls += links_in(bc.group(0), "breadcrumb")
    ls += links_in(m_ctx, "contextual")
    if silo: ls += links_in(silo.group(0), "silo")
    if footer: ls += links_in(footer.group(0), "footer")
    outlinks[url] = ls

# ---- inbound index ------------------------------------------------------------
inbound = collections.defaultdict(list)
for src, ls in outlinks.items():
    for l in ls:
        if l["to"] == src: continue
        inbound[l["to"]].append({"from": src, **l})

def importance(url):
    a = active.get(url) or {}
    v = vol.get(a.get("primary", ""), 0)
    score = 0
    if a.get("is_hub"): score += 3
    if a.get("type") in ("Commercial landing", "Homepage"): score += 2
    if v >= 500: score += 3
    elif v >= 100: score += 2
    elif v > 0: score += 1
    return score  # 0–8

authority_rank = sorted(active, key=lambda u: -len({l["from"] for l in inbound.get(u, []) if l["region"] in ("contextual", "silo")}))
top_authority = authority_rank[:25]

profiles = []
for url, a in active.items():
    if url not in outlinks: continue
    ins = inbound.get(url, [])
    ctx = [l for l in ins if l["region"] == "contextual"]
    silo_in = [l for l in ins if l["region"] == "silo"]
    nav_in = [l for l in ins if l["region"] == "nav"]
    foot_in = [l for l in ins if l["region"] == "footer"]
    bc_in = [l for l in ins if l["region"] == "breadcrumb"]
    uniq = {l["from"] for l in ins}
    uniq_ctx = {l["from"] for l in ctx}
    anchors = collections.Counter(norm(l["anchor"]) for l in ins if l["anchor"])
    pt = toks(a["primary"])
    kw_anchor = sum(n for an, n in anchors.items() if pt and pt <= toks(an)) if pt else 0
    partial = sum(n for an, n in anchors.items() if pt and (toks(an) & pt) and not pt <= toks(an)) if pt else 0
    imp = importance(url)
    n_ctx = len(uniq_ctx)
    if a["noindex"]: status = "noindex — not a target"
    elif n_ctx == 0 and not silo_in: status = "ORPHAN (nav/footer only)" if ins else "ORPHAN"
    elif imp >= 5 and n_ctx < 5: status = "Maximum opportunity"
    elif n_ctx < 3: status = "Weak"
    elif n_ctx < 10: status = "Good"
    else: status = "Strong"
    same_silo = [u for u, b in active.items() if u != url and b["silo"] == a["silo"] and u in outlinks and u not in uniq_ctx and not b["noindex"]]
    strong_not_linking = [u for u in top_authority if u != url and u not in uniq_ctx and not active[u]["noindex"]][:8]
    hub_links_child = a["hub"] in uniq_ctx or a["hub"] in {l["from"] for l in silo_in} if a.get("hub") and a["hub"] != url else None
    child_links_hub = any(l["to"] == a["hub"] and l["region"] in ("contextual", "breadcrumb") for l in outlinks.get(url, [])) if a.get("hub") and a["hub"] != url else None
    bad = [l for l in ins if l["region"] == "contextual" and l["anchor"] and norm(l["anchor"]) in ("learn more", "read more", "click here", "here", "more")]
    profiles.append({
        "url": url, "primary": a["raw_primary"], "volume": vol.get(a["primary"], 0), "cluster": a["subs"][:12], "silo": a["silo"], "hub": a["hub"], "is_hub": a["is_hub"], "type": a["type"], "noindex": a["noindex"],
        "importance": imp, "in_total": len(ins), "in_unique": len(uniq), "in_contextual": len(ctx), "in_contextual_unique": n_ctx, "in_silo": len(silo_in), "in_nav": len(nav_in), "in_footer": len(foot_in), "in_breadcrumb": len(bc_in),
        "out_total": len(outlinks[url]), "out_contextual": sum(1 for l in outlinks[url] if l["region"] == "contextual"),
        "anchors": anchors.most_common(8), "anchor_exact": kw_anchor, "anchor_partial": partial, "anchor_generic": len(bad),
        "linking_pages": sorted(uniq_ctx)[:40], "hub_links_child": hub_links_child, "child_links_hub": child_links_hub,
        "recommend_same_silo": same_silo[:8], "recommend_strong": strong_not_linking,
        "status": status,
    })

order = {"ORPHAN": 0, "ORPHAN (nav/footer only)": 1, "Maximum opportunity": 2, "Weak": 3, "Good": 4, "Strong": 5, "noindex — not a target": 6}
profiles.sort(key=lambda p: (order.get(p["status"], 9), -p["importance"], -p["volume"]))
stats = {"pages": len(profiles), "orphans": sum(1 for p in profiles if p["status"].startswith("ORPHAN")), "max_opportunity": sum(1 for p in profiles if p["status"] == "Maximum opportunity"),
         "weak": sum(1 for p in profiles if p["status"] == "Weak"), "good": sum(1 for p in profiles if p["status"] == "Good"), "strong": sum(1 for p in profiles if p["status"] == "Strong"),
         "hub_not_linking_child": sum(1 for p in profiles if p["hub_links_child"] is False), "child_not_linking_hub": sum(1 for p in profiles if p["child_links_hub"] is False),
         "generic_anchors": sum(p["anchor_generic"] for p in profiles), "avg_contextual_in": round(sum(p["in_contextual_unique"] for p in profiles) / max(1, len(profiles)), 1)}
data = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "profiles": profiles}
(HERE / "links.json").write_text(json.dumps(data, ensure_ascii=False))
esc = lambda s: html.escape(str(s if s is not None else ""))
flag = lambda s: f'<span class="flag {"serious" if s.startswith("ORPHAN") or s=="Maximum opportunity" else "warn" if s=="Weak" else "good" if s in ("Good","Strong") else ""}"><i></i>{esc(s)}</span>'
rows = "".join(f"""<tr><td><code>{esc(p['url'])}</code><div class="muted">{esc(p['silo'])}{' · hub' if p['is_hub'] else ''} · importance {p['importance']}/8</div></td>
<td>{esc(p['primary'] or '—')}<div class="muted">{p['volume'] or 0}/mo</div></td>
<td class="nums">{p['in_contextual_unique']} pages<div class="muted">{p['in_contextual']} ctx · {p['in_silo']} silo · {p['in_nav']} nav · {p['in_footer']} footer</div></td>
<td class="nums">{p['out_contextual']}<div class="muted">{p['out_total']} total</div></td>
<td>{' · '.join(f"{esc(a)} <span class='muted'>×{n}</span>" for a, n in p['anchors'][:5]) or '<span class="muted">—</span>'}<div class="muted">exact-keyword anchors {p['anchor_exact']} · partial {p['anchor_partial']}{' · generic ' + str(p['anchor_generic']) if p['anchor_generic'] else ''}</div></td>
<td>{'—' if p['hub_links_child'] is None else ('yes' if p['hub_links_child'] else '<span class="flag serious"><i></i>no</span>')} / {'—' if p['child_links_hub'] is None else ('yes' if p['child_links_hub'] else '<span class="flag serious"><i></i>no</span>')}</td>
<td>{flag(p['status'])}</td>
<td><div class="muted">same silo not linking: {' '.join('<code>'+esc(u)+'</code>' for u in p['recommend_same_silo'][:5]) or '—'}</div><div class="muted">strong pages not linking: {' '.join('<code>'+esc(u)+'</code>' for u in p['recommend_strong'][:4]) or '—'}</div></td></tr>""" for p in profiles)
page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>myCHEF.ae internal links</title>
<style>:root{{color-scheme:light}}body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:13px/1.4 Inter,-apple-system,system-ui,sans-serif}}header{{padding:24px 28px 14px;border-bottom:1px solid #e2e1db}}h1{{margin:0 0 4px;font-size:22px}}h1 a{{font-size:13px;font-weight:500;margin-left:12px;color:#2a78d6}}.sub{{color:#52514e;max-width:90ch}}.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;padding:14px 28px 6px}}.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}.tile .l{{color:#52514e;font-size:12px;margin-top:3px}}.serious .n{{color:#a34a24}}.warn .n{{color:#8a5a00}}.good .n{{color:#0a6f0a}}main{{padding:8px 28px 60px;overflow-x:auto}}table{{width:100%;min-width:1400px;border-collapse:collapse;background:#fff;border:1px solid #e2e1db}}th,td{{text-align:left;padding:6px 8px;border-bottom:1px solid #e2e1db;vertical-align:top}}th{{font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:#52514e;background:#f3f2ee}}code{{font-family:ui-monospace,Menlo,monospace;font-size:11.5px;background:#f3f2ee;padding:1px 4px;border-radius:4px}}.muted{{color:#84827c}}.nums{{font-variant-numeric:tabular-nums;white-space:nowrap}}.flag{{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;padding:2px 7px;border-radius:999px;border:1px solid #e2e1db;white-space:nowrap}}.flag i{{width:7px;height:7px;border-radius:50%;display:inline-block;background:#c9c8c0}}.flag.good i{{background:#0ca30c}}.flag.warn i{{background:#fab219}}.flag.serious i{{background:#ec835a}}.filters{{display:flex;gap:8px;padding:10px 28px;border-bottom:1px solid #e2e1db}}.filters input{{width:280px;padding:6px 10px;border:1px solid #c9c8c0;border-radius:6px;font:inherit}}.filters select{{padding:6px 8px;border:1px solid #c9c8c0;border-radius:6px;font:inherit;background:#fff}}tr.hidden{{display:none}}.legend{{color:#84827c;font-size:12px;margin-top:10px;max-width:100ch}}</style></head><body>
<header><h1>myCHEF.ae internal links <a href="index.html">Map</a> <a href="report.html">Keyword report</a> <a href="architecture.html">Architecture</a> <a href="gaps.html">Content gaps</a></h1>
<p class="sub">Measured from the live pages: who links to whom, from where (contextual copy, "Related pages" silo module, navigation, footer, breadcrumb), with which anchors, and whether each page's inbound authority matches its importance (UAE demand + hub role). Generated {esc(data['generated'])}. Local research file.</p></header>
<div class="tiles"><div class="tile"><div class="n">{stats['pages']}</div><div class="l">Pages measured</div></div><div class="tile {'serious' if stats['orphans'] else 'good'}"><div class="n">{stats['orphans']}</div><div class="l">Orphans<br><span class="muted">no contextual or silo link in</span></div></div><div class="tile serious"><div class="n">{stats['max_opportunity']}</div><div class="l">Maximum opportunity<br><span class="muted">important, &lt;5 pages link contextually</span></div></div><div class="tile warn"><div class="n">{stats['weak']}</div><div class="l">Weak (&lt;3 linking pages)</div></div><div class="tile good"><div class="n">{stats['good'] + stats['strong']}</div><div class="l">Good / Strong</div></div><div class="tile"><div class="n">{stats['avg_contextual_in']}</div><div class="l">Avg unique contextual linkers</div></div><div class="tile {'warn' if stats['hub_not_linking_child'] else 'good'}"><div class="n">{stats['hub_not_linking_child']}</div><div class="l">Children their hub does not link to</div></div><div class="tile {'warn' if stats['child_not_linking_hub'] else 'good'}"><div class="n">{stats['child_not_linking_hub']}</div><div class="l">Children not linking up to their hub</div></div><div class="tile {'warn' if stats['generic_anchors'] else 'good'}"><div class="n">{stats['generic_anchors']}</div><div class="l">Generic anchors ("learn more")</div></div></div>
<div class="filters"><input type="search" id="q" placeholder="Search URL / keyword…"><select id="st"><option value="">All statuses</option>{''.join(f'<option>{esc(s)}</option>' for s in order)}</select></div>
<main><table><thead><tr><th>URL</th><th>Primary</th><th>Links in</th><th>Links out (ctx)</th><th>Inbound anchors</th><th>Hub → child / child → hub</th><th>Authority</th><th>Recommended linkers</th></tr></thead><tbody>{rows}</tbody></table>
<p class="legend">Authority status: ORPHAN = no contextual or silo link from any page; Maximum opportunity = importance ≥5/8 (hub, commercial, or ≥100/mo) with fewer than 5 pages linking contextually; Weak &lt;3; Good 3–9; Strong ≥10. Exact-keyword anchors contain every topic word of the target's primary; generic anchors are "learn more"-type. Recommended linkers: same-silo pages and the 25 most-linked pages that do not yet link contextually.</p></main>
<script>const q=document.getElementById('q'),st=document.getElementById('st');function ap(){{const v=q.value.toLowerCase(),s=st.value;document.querySelectorAll('tbody tr').forEach(tr=>{{const t=tr.textContent.toLowerCase();tr.classList.toggle('hidden',!((!v||t.includes(v))&&(!s||t.includes(s.toLowerCase()))));}});}}q.addEventListener('input',ap);st.addEventListener('input',ap);</script></body></html>"""
(HERE / "links.html").write_text(page)
print(json.dumps(stats, indent=1))

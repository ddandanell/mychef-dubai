#!/usr/bin/env python3
"""Competitor content gaps per page — what the top UAE-ranking pages for our primary cover that we do not.
Reads .live/research/competitors/ (fetched by harvest-competitors.py) and our live snapshot. For every active page:
competitor word counts, price mentions, FAQ schema, recurring headings (normalised, present on ≥2 competitors) that our
page lacks, and questions they answer that our page does not. Writes gaps.json + gaps.html."""
import json, pathlib, re, html, collections, datetime
HERE = pathlib.Path(__file__).resolve().parent; ROOT = HERE.parents[2]; LIVE = HERE / ".live"; C = LIVE / "research/competitors"
pages = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]
idx = json.loads((C / "index.json").read_text())
import unicodedata as _ud
def _deaccent(s): return "".join(c for c in _ud.normalize("NFKD", s or "") if not _ud.combining(c))
def norm(s):
    s = _deaccent(s or "")
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", html.unescape(s or "").lower().replace("-", " "))).strip()
STOP = {"the","a","an","and","or","of","for","to","in","on","at","with","your","our","we","you","us","by","from","is","are","dubai","uae","my","its","it","this","that","all","any","as","be","can","do","how","what","why","when","where","which","who"}
def sig(h):
    """Heading signature: content words, sorted, so 'Why choose us' ≈ 'Why choose our team'."""
    t = [w for w in norm(h).split() if w not in STOP and len(w) > 2]
    return " ".join(sorted(set(t)))[:80]
def strip(h): return html.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S)))
GENERIC = re.compile(r"^(contact|contact us|about|about us|home|menu|menus|blog|news|faq|faqs|gallery|reviews|testimonials|services|our services|get in touch|follow us|newsletter|subscribe|location|locations|careers|privacy|terms|book now|order now|why choose us|why us|get a quote|request a quote|enquire now|share|related|latest|recent posts|categories|tags|search|login|cart|checkout)$")
ENTITY = re.compile(r"\b(halal|vegan|vegetarian|gluten free|gluten-free|nut free|dairy free|keto|organic|jain|kosher|live cooking|live station|grazing|canap[eé]|buffet|plated|sharing|bbq|barbecue|shawarma|mezze|sushi|pasta|biryani|arabic|lebanese|emirati|indian|italian|mediterranean|asian|japanese|thai|chinese|filipino|greek|turkish|dessert|cake|bartender|mocktail|cocktail|waiter|service staff|tableware|crockery|glassware|linen|chafing|setup|clean ?up|delivery|drop ?off|minimum order|deposit|cancellation|tasting|sample menu|per person|per head|package|packages|villa|yacht|apartment|office|majlis|marina|palm jumeirah|downtown|jbr|difc|business bay|emirates hills|arabian ranches|jumeirah|abu dhabi|sharjah|ramadan|iftar|suhoor|eid|diwali|christmas|new year|national day|wedding|birthday|corporate|conference|gala|launch|baby shower|engagement|anniversary|kids|children|dietary|allergen|allergy|licensed|dubai municipality|food safety|haccp|iso|insurance|24 hours|48 hours|same day|last minute|short notice)\b", re.I)
out = []
for url, t in idx["targets"].items():
    comps = []
    for u in t["urls"]:
        f = C / f"{idx['fetched'][u]}.json"
        if f.exists():
            d = json.loads(f.read_text())
            if d.get("ok"): comps.append(d)
    if not comps: continue
    ours_f = LIVE / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    ours = ours_f.read_text(encoding="utf-8", errors="ignore") if ours_f.exists() else ""
    m = re.search(r"<main.*?</main>", ours, flags=re.S); mh = m.group(0) if m else ours
    our_heads = [norm(strip(x)) for x in re.findall(r"<h[23][^>]*>(.*?)</h[23]>", mh, flags=re.S)]
    our_text = norm(strip(mh)); our_words = len(our_text.split())
    our_sigs = {sig(h) for h in our_heads}; our_q = [norm(q) for q in re.findall(r"([A-Z][^.?!<>]{15,140}\?)", strip(mh))]
    head_count = collections.Counter(); head_example = {}
    for c in comps:
        seen = set()
        for h in c["h2"] + c["h3"]:
            s = sig(h)
            if not s or GENERIC.match(norm(h)) or len(s.split()) < 2 or s in seen: continue
            seen.add(s); head_count[s] += 1; head_example.setdefault(s, h)
    missing_heads = [(head_example[s], n) for s, n in head_count.most_common() if n >= 2 and s not in our_sigs and not any(set(s.split()) <= set(o.split()) for o in our_sigs)][:12]
    q_count = collections.Counter(); q_example = {}
    for c in comps:
        for q in c["questions"]:
            s = sig(q)
            if len(s.split()) >= 3: q_count[s] += 1; q_example.setdefault(s, q)
    our_qsigs = {sig(q) for q in our_q}
    missing_q = [q_example[s] for s, n in q_count.most_common() if s not in our_qsigs][:10]
    ent = collections.Counter()
    for c in comps:
        for e in {m.lower() for m in ENTITY.findall(c["text"])}: ent[e] += 1
    missing_ent = [(e, n) for e, n in ent.most_common() if n >= 2 and not re.search(r"(?<![a-z0-9])" + re.escape(e) + r"(?![a-z0-9])", our_text)][:15]
    cw = sorted(c["words"] for c in comps)
    out.append({"url": url, "primary": t["primary"], "competitors": [{"url": c["url"], "title": c["title"], "words": c["words"], "price": c["has_price"], "faq": c["has_faq_schema"], "h2": c["h2"][:12]} for c in comps],
                "our_words": our_words, "competitor_words_median": cw[len(cw)//2], "competitors_with_price": sum(1 for c in comps if c["has_price"]), "competitors_with_faq_schema": sum(1 for c in comps if c["has_faq_schema"]),
                "missing_headings": missing_heads, "missing_questions": missing_q, "missing_entities": missing_ent,
                "gap_score": min(10, len(missing_heads) + len(missing_q) // 2 + len(missing_ent) // 3)})
out.sort(key=lambda r: -r["gap_score"])
stats = {"pages": len(out), "avg_gap_score": round(sum(r["gap_score"] for r in out) / max(1, len(out)), 1), "thinner_than_median_competitor": sum(1 for r in out if r["our_words"] < r["competitor_words_median"]), "competitor_pages": sum(len(r["competitors"]) for r in out)}
data = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "pages": out}
(HERE / "gaps.json").write_text(json.dumps(data, ensure_ascii=False))
esc = lambda s: html.escape(str(s if s is not None else ""))
rows = "".join(f"""<tr><td><code>{esc(r['url'])}</code><div class="muted">{esc(r['primary'])}</div></td><td class="nums">{r['gap_score']}/10</td>
<td class="nums">{r['our_words']}<div class="muted">competitors median {r['competitor_words_median']}</div></td><td class="nums">{r['competitors_with_price']}/{len(r['competitors'])} price · {r['competitors_with_faq_schema']}/{len(r['competitors'])} FAQ schema</td>
<td>{'<br>'.join(f"{esc(h)} <span class='muted'>×{n}</span>" for h, n in r['missing_headings'][:8]) or '<span class="muted">—</span>'}</td>
<td>{'<br>'.join(esc(q) for q in r['missing_questions'][:6]) or '<span class="muted">—</span>'}</td>
<td>{' · '.join(f"{esc(e)} <span class='muted'>×{n}</span>" for e, n in r['missing_entities'][:10]) or '<span class="muted">—</span>'}</td>
<td>{'<br>'.join(f"<a href='{esc(c['url'])}' target='_blank' rel='noopener'>{esc((c['title'] or c['url'])[:60])}</a> <span class='muted'>{c['words']}w</span>" for c in r['competitors'][:5])}</td></tr>""" for r in out)
page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>myCHEF.ae content gaps</title>
<style>:root{{color-scheme:light}}body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:13px/1.4 Inter,-apple-system,system-ui,sans-serif}}header{{padding:24px 28px 14px;border-bottom:1px solid #e2e1db}}h1{{margin:0 0 4px;font-size:22px}}h1 a{{font-size:13px;font-weight:500;margin-left:12px;color:#2a78d6}}.sub{{color:#52514e;max-width:90ch}}.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;padding:14px 28px 6px}}.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}.tile .l{{color:#52514e;font-size:12px;margin-top:3px}}main{{padding:8px 28px 60px;overflow-x:auto}}table{{width:100%;min-width:1500px;border-collapse:collapse;background:#fff;border:1px solid #e2e1db}}th,td{{text-align:left;padding:6px 8px;border-bottom:1px solid #e2e1db;vertical-align:top}}th{{font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:#52514e;background:#f3f2ee}}code{{font-family:ui-monospace,Menlo,monospace;font-size:11.5px;background:#f3f2ee;padding:1px 4px;border-radius:4px}}.muted{{color:#84827c}}.nums{{font-variant-numeric:tabular-nums;white-space:nowrap}}a{{color:#2a78d6;text-decoration:none}}.filters{{display:flex;gap:8px;padding:10px 28px;border-bottom:1px solid #e2e1db}}.filters input{{width:300px;padding:6px 10px;border:1px solid #c9c8c0;border-radius:6px;font:inherit}}tr.hidden{{display:none}}.legend{{color:#84827c;font-size:12px;margin-top:10px;max-width:100ch}}</style></head><body>
<header><h1>myCHEF.ae content gaps <a href="index.html">Map</a> <a href="report.html">Keyword report</a> <a href="links.html">Internal links</a> <a href="architecture.html">Architecture</a></h1>
<p class="sub">For every page with a locked primary: the top UAE-ranking pages for that phrase (live SERPs, aggregators and social excluded), how much they write, whether they show prices and FAQ schema, the headings that recur across them and are missing from our page, the questions they answer that we do not, and the entities they mention that we never do. Gap score 0–10 = how much of that we lack. Generated {esc(data['generated'])}. Do not copy — explain better from operational knowledge.</p></header>
<div class="tiles"><div class="tile"><div class="n">{stats['pages']}</div><div class="l">Pages compared<br><span class="muted">{stats['competitor_pages']} competitor pages read</span></div></div><div class="tile"><div class="n">{stats['avg_gap_score']}</div><div class="l">Average gap score /10</div></div><div class="tile"><div class="n">{stats['thinner_than_median_competitor']}</div><div class="l">Our page thinner than the median competitor</div></div></div>
<div class="filters"><input type="search" id="q" placeholder="Search URL / phrase…"></div>
<main><table><thead><tr><th>Page</th><th>Gap</th><th>Words</th><th>They show</th><th>Recurring headings we lack</th><th>Questions they answer, we don't</th><th>Entities they mention, we never do</th><th>Top competitors</th></tr></thead><tbody>{rows}</tbody></table>
<p class="legend">Headings are matched on content words, so "Why choose our chefs" ≈ "Why choose us" — a heading counts as missing only if no heading on our page shares its words. Questions are sentence-level "?"-endings found in competitor text. Entities are a fixed vocabulary of things buyers ask about (dietary, formats, logistics, areas, occasions, compliance).</p></main>
<script>const q=document.getElementById('q');q.addEventListener('input',()=>{{const v=q.value.toLowerCase();document.querySelectorAll('tbody tr').forEach(tr=>tr.classList.toggle('hidden',!(!v||tr.textContent.toLowerCase().includes(v))));}});</script></body></html>"""
(HERE / "gaps.html").write_text(page)
print(json.dumps(stats, indent=1))
for r in out[:8]: print(f"  gap {r['gap_score']}/10  {r['url']:<36} ours {r['our_words']}w vs median {r['competitor_words_median']}w · missing headings {len(r['missing_headings'])} · questions {len(r['missing_questions'])} · entities {[e for e,_ in r['missing_entities'][:6]]}")

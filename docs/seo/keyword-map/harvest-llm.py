#!/usr/bin/env python3
"""AI visibility — what Claude answers when a Dubai buyer asks for what myCHEF sells, and whom it cites.

DataForSEO AI Optimization → Claude LLM Responses (live, web search forced). One buyer-language prompt per
service line; records the answer text, the providers named, the URLs cited, and whether mychef.ae appears.
Writes .live/research/dataforseo/llm/<slug>.json, ai-visibility.json and ai-visibility.html. ~$0.07 per prompt.

    python3 docs/seo/keyword-map/harvest-llm.py            # run missing prompts, rebuild the page
    python3 docs/seo/keyword-map/harvest-llm.py --rebuild  # rebuild the page from saved answers only
"""
import json, os, base64, subprocess, pathlib, re, sys, concurrent.futures, datetime, collections, html

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / ".live/research/dataforseo/llm"; OUT.mkdir(parents=True, exist_ok=True)
MODEL = "claude-sonnet-5"
SYSTEM = "You are helping a resident of Dubai, United Arab Emirates. Recommend specific local providers by name with their website addresses."
PROMPTS = {
  "private-chef-villa-dinner": ("Private chef · dinner party", "I live in Dubai and want to hire a private chef for a dinner party at my villa for 8 guests. Which companies should I contact? Give names and websites."),
  "private-chef-household": ("Private chef · household plan", "We are a family in Dubai looking for a private chef to cook at home several days a week on a monthly plan. Which services offer this? Names and websites please."),
  "private-chef-cost": ("Private chef · cost", "How much does a private chef cost in Dubai per dinner and per month, and which companies publish their prices?"),
  "personal-chef-meal-prep": ("Meal prep · weekly", "Which companies in Dubai offer a personal chef for weekly meal prep at home? Give names and websites."),
  "catering-wedding": ("Catering · wedding", "Recommend wedding catering companies in Dubai for a villa wedding of 80 guests, with websites."),
  "catering-corporate": ("Catering · corporate / office", "Which catering companies in Dubai should I contact for regular office lunches and corporate events? Names and websites."),
  "catering-birthday-home": ("Catering · birthday at home", "I want catering for a birthday party at my home in Dubai for 25 people. Which caterers do this? Names and websites."),
  "catering-bbq-villa": ("Catering · BBQ", "Who offers BBQ catering with a chef at a villa in Dubai? Give company names and websites."),
  "catering-iftar-home": ("Catering · iftar at home", "Which companies provide iftar catering at home in Dubai during Ramadan? Names and websites."),
  "catering-yacht": ("Catering · yacht", "I am chartering a yacht in Dubai Marina and need catering and a chef on board. Which companies do this? Names and websites."),
  "catering-vegan": ("Catering · vegan", "Which caterers in Dubai offer fully vegan menus for a private event? Names and websites."),
  "catering-halal-event": ("Catering · halal event", "Recommend halal-certified catering companies for a private event in Dubai, with websites."),
  "best-catering-companies": ("Catering · best companies", "What are the best catering companies in Dubai for private events? List names and websites."),
  "romantic-dinner-home": ("Dining · romantic dinner at home", "I want a private chef to cook a romantic anniversary dinner at our apartment in Dubai. Who offers this? Names and websites."),
  "kids-birthday-catering": ("Catering · kids birthday", "Which companies in Dubai cater kids' birthday parties at home? Names and websites."),
  "private-chef-palm": ("Private chef · Palm Jumeirah", "Which private chef services cover villas on Palm Jumeirah in Dubai? Names and websites."),
}
env = dict(l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/dataforseo.env")) if "=" in l)
auth = base64.b64encode(f"{env['DATAFORSEO_LOGIN']}:{env['DATAFORSEO_PASSWORD']}".encode()).decode()

def ask(slug):
    label, prompt = PROMPTS[slug]
    body = json.dumps([{"user_prompt": prompt, "model_name": MODEL, "web_search": True, "force_web_search": True, "max_output_tokens": 1500, "temperature": 0.2, "system_message": SYSTEM}]).encode()
    r = subprocess.run(["curl", "-s", "-m", "300", "-X", "POST", "-H", f"Authorization: Basic {auth}", "-H", "Content-Type: application/json", "--data-binary", "@-", "https://api.dataforseo.com/v3/ai_optimization/claude/llm_responses/live"], input=body, capture_output=True)
    d = json.loads(r.stdout); t = d["tasks"][0]; res = (t.get("result") or [{}])[0]
    rec = {"slug": slug, "label": label, "prompt": prompt, "model": MODEL, "status": t.get("status_message"), "cost": d.get("cost"), "fetched": datetime.datetime.now().isoformat(timespec="minutes"), "result": res}
    if rec["status"] == "Ok.": (OUT / f"{slug}.json").write_text(json.dumps(rec, ensure_ascii=False, indent=1))
    return rec

if "--rebuild" not in sys.argv:
    todo = [s for s in PROMPTS if not (OUT / f"{s}.json").exists()]
    print(f"{len(todo)} prompts to run (~${len(todo)*0.075:.2f})", flush=True)
    with concurrent.futures.ThreadPoolExecutor(4) as ex:
        for rec in ex.map(ask, todo): print(f"  {rec['slug']:<28} {rec['status']} ${rec.get('cost')}", flush=True)

# ---- parse -------------------------------------------------------------------
def domain(u):
    m = re.match(r"https?://(?:www\.)?([^/]+)", u or ""); return m.group(1).lower() if m else None
rows = []; cited = collections.Counter(); named = collections.Counter(); spent = 0
for slug, (label, prompt) in PROMPTS.items():
    f = OUT / f"{slug}.json"
    if not f.exists(): continue
    rec = json.loads(f.read_text()); res = rec["result"]; spent += rec.get("cost") or 0
    secs = [s for it in (res.get("items") or []) for s in (it.get("sections") or [])]
    text = "\n".join((s.get("text") or "") for s in secs)
    urls = [a.get("url") for s in secs for a in (s.get("annotations") or []) if a.get("url")]
    doms = []
    for u in urls:
        dm = domain(u)
        if dm and dm not in doms: doms.append(dm)
    for dm in doms: cited[dm] += 1
    # providers named in bold headings like **1. Take a Chef** or "**Name**"
    names = [re.sub(r"^\d+\.\s*", "", n).strip() for n in re.findall(r"\*\*([^*]{3,60})\*\*", text)]
    names = [n for n in names if not re.search(r"(?i)website|price|cost|note|tip|summary|per person|aed", n)]
    for n in names: named[n] += 1
    we_named = bool(re.search(r"(?i)mychef|my chef", text)); we_cited = any("mychef.ae" in (u or "") for u in urls)
    rows.append({"slug": slug, "label": label, "prompt": prompt, "we_named": we_named, "we_cited": we_cited, "providers": names[:12], "cited_domains": doms, "answer": text[:4000], "cost": rec.get("cost")})
summary = {"prompts": len(rows), "we_appear": sum(1 for r in rows if r["we_named"] or r["we_cited"]), "top_cited": cited.most_common(15), "top_named": named.most_common(15), "spent": round(spent, 2), "model": MODEL}
data = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "summary": summary, "rows": rows}
(HERE / "ai-visibility.json").write_text(json.dumps(data, ensure_ascii=False))
esc = lambda s: html.escape(str(s or ""))
page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>myCHEF.ae AI visibility</title>
<style>:root{{color-scheme:light}}body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:14px/1.45 Inter,-apple-system,system-ui,sans-serif}}header{{padding:28px 32px 18px;border-bottom:1px solid #e2e1db}}h1{{margin:0 0 4px;font-size:22px}}h1 a{{font-size:13px;font-weight:500;margin-left:12px;color:#2a78d6}}.sub{{color:#52514e;max-width:84ch}}.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;padding:18px 32px 6px}}.tile{{border:1px solid #e2e1db;border-radius:8px;padding:12px 14px;background:#fff}}.tile .n{{font-size:26px;font-weight:600;line-height:1.1}}.tile .l{{color:#52514e;font-size:12px;margin-top:4px}}.serious .n{{color:#a34a24}}main{{padding:8px 32px 60px}}h2{{font-size:16px;margin:28px 0 8px}}table{{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e1db}}th,td{{text-align:left;padding:7px 10px;border-bottom:1px solid #e2e1db;vertical-align:top}}th{{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#52514e;background:#f3f2ee}}code{{font-family:ui-monospace,Menlo,monospace;font-size:12px;background:#f3f2ee;padding:1px 5px;border-radius:4px}}.flag{{display:inline-flex;align-items:center;gap:5px;font-size:12px;padding:2px 8px;border-radius:999px;border:1px solid #e2e1db}}.flag i{{width:8px;height:8px;border-radius:50%;display:inline-block;background:#c9c8c0}}.flag.good i{{background:#0ca30c}}.flag.serious i{{background:#ec835a}}details{{margin-top:6px}}summary{{cursor:pointer;color:#52514e;font-size:12px}}pre{{white-space:pre-wrap;font:12.5px/1.5 Inter,system-ui,sans-serif;color:#333;background:#faf9f5;padding:12px;border-radius:6px;max-width:100ch}}.muted{{color:#84827c}}</style></head><body>
<header><h1>myCHEF.ae AI visibility <a href="index.html">Map</a> <a href="report.html">Keyword report</a></h1>
<p class="sub">What {esc(MODEL)} answers, with web search forced, when a Dubai resident asks for what myCHEF sells — and whom it names and cites. DataForSEO AI Optimization API, one run per prompt. Generated {esc(data['generated'])}. Local research file.</p></header>
<div class="tiles"><div class="tile"><div class="n">{summary['prompts']}</div><div class="l">Buyer prompts asked</div></div><div class="tile {'serious' if summary['we_appear']==0 else ''}"><div class="n">{summary['we_appear']}</div><div class="l">Answers naming or citing mychef.ae</div></div><div class="tile"><div class="n">{esc(summary['top_cited'][0][0]) if summary['top_cited'] else '—'}</div><div class="l">Most-cited domain<br><span class="muted">{summary['top_cited'][0][1] if summary['top_cited'] else 0} of {summary['prompts']} answers</span></div></div><div class="tile"><div class="n">${summary['spent']}</div><div class="l">Spent on this run</div></div></div>
<main><h2>Who Claude cites (domains, across all prompts)</h2><table><thead><tr><th>Domain</th><th>Answers citing it</th></tr></thead><tbody>{''.join(f'<tr><td><code>{esc(d)}</code></td><td>{n}</td></tr>' for d,n in summary['top_cited'])}</tbody></table>
<h2>Who Claude names (providers in bold, across all prompts)</h2><table><thead><tr><th>Provider</th><th>Answers naming it</th></tr></thead><tbody>{''.join(f'<tr><td>{esc(d)}</td><td>{n}</td></tr>' for d,n in summary['top_named'])}</tbody></table>
<h2>Per prompt</h2><table><thead><tr><th>Service line</th><th>mychef.ae</th><th>Providers named</th><th>Domains cited</th></tr></thead><tbody>
{''.join(f"<tr><td><b>{esc(r['label'])}</b><div class='muted'>{esc(r['prompt'])}</div><details><summary>answer</summary><pre>{esc(r['answer'])}</pre></details></td><td>{'<span class=\"flag good\"><i></i>named' + (' + cited' if r['we_cited'] else '') + '</span>' if (r['we_named'] or r['we_cited']) else '<span class=\"flag serious\"><i></i>absent</span>'}</td><td>{esc(' · '.join(r['providers']) or '—')}</td><td>{' '.join('<code>'+esc(d)+'</code>' for d in r['cited_domains']) or '—'}</td></tr>" for r in rows)}
</tbody></table><p class="muted" style="margin-top:12px">Method: DataForSEO <code>ai_optimization/claude/llm_responses/live</code>, web_search + force_web_search, temperature 0.2, system message framing a Dubai resident. One sample per prompt — AI answers vary; treat presence/absence across many prompts as the signal, not a single answer. Re-run: <code>python3 docs/seo/keyword-map/harvest-llm.py</code>.</p></main></body></html>"""
(HERE / "ai-visibility.html").write_text(page)
print(json.dumps({k: v for k, v in summary.items() if k != "top_named"}, indent=1, ensure_ascii=False))

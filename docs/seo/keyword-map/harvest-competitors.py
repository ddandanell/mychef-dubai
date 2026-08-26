#!/usr/bin/env python3
"""Competitor content gap — fetch the top UAE-ranking pages for every active primary and record what they cover.
Reads .live/research/dataforseo/serps.jsonl (depth-30 SERPs). For each active page's primary: top 6 organic URLs
(excluding mychef.ae, social/aggregator hosts). Fetches HTML (curl, 16 threads), extracts title, H1, H2/H3, FAQ-style
questions, word count, and a light entity list. Writes .live/research/competitors/<hash>.json + index.json."""
import json, re, hashlib, pathlib, subprocess, html, concurrent.futures, sys
HERE = pathlib.Path(__file__).resolve().parent; ROOT = HERE.parents[2]
OUT = HERE / ".live/research/competitors"; OUT.mkdir(parents=True, exist_ok=True)
SKIP = re.compile(r"(instagram|facebook|tiktok|youtube|linkedin|pinterest|twitter|x\.com|timeoutdubai|whatson\.ae|tripadvisor|yelp|reddit|quora|wikipedia|google\.|apple\.|indeed|glassdoor|bayut|dubizzle|talabat|deliveroo|careem|noon|amazon|mychef\.ae)")
def norm(s): return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", (s or "").lower().replace("-", " "))).strip()
pages = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]
serps = {}
for l in (HERE / ".live/research/dataforseo/serps.jsonl").read_text().splitlines():
    try: d = json.loads(l); serps[norm(d["kw"])] = d
    except Exception: pass
targets = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    pk = norm((p.get("intent_owner") or {}).get("primary_keyword") or "")
    if not pk or pk not in serps: continue
    urls = [i["url"] for i in serps[pk]["items"] if i.get("url") and not SKIP.search(i["url"])][:6]
    targets[url] = {"primary": pk, "urls": urls}
todo = sorted({u for t in targets.values() for u in t["urls"]})
def key(u): return hashlib.md5(u.encode()).hexdigest()
def strip(h): return html.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>|<svg.*?</svg>", " ", h, flags=re.S)))
def fetch(u):
    f = OUT / f"{key(u)}.json"
    if f.exists(): return "cached"
    r = subprocess.run(["curl", "-s", "-L", "-m", "25", "-A", "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 Chrome/125 Safari/537.36", u], capture_output=True)
    h = r.stdout.decode("utf-8", errors="ignore")
    if len(h) < 500: f.write_text(json.dumps({"url": u, "ok": False})); return "fail"
    body = re.search(r"<body.*?</body>", h, flags=re.S); b = body.group(0) if body else h
    text = re.sub(r"\s+", " ", strip(b))
    rec = {"url": u, "ok": True, "title": html.unescape(re.sub(r"<[^>]+>", "", (re.search(r"<title[^>]*>(.*?)</title>", h, flags=re.S) or [None, ""])[1])).strip()[:200],
           "h1": [re.sub(r"\s+", " ", strip(x)).strip()[:160] for x in re.findall(r"<h1[^>]*>(.*?)</h1>", b, flags=re.S)][:3],
           "h2": [re.sub(r"\s+", " ", strip(x)).strip()[:160] for x in re.findall(r"<h2[^>]*>(.*?)</h2>", b, flags=re.S)][:40],
           "h3": [re.sub(r"\s+", " ", strip(x)).strip()[:160] for x in re.findall(r"<h3[^>]*>(.*?)</h3>", b, flags=re.S)][:60],
           "words": len(text.split()), "questions": [q.strip()[:160] for q in re.findall(r"([A-Z][^.?!<>]{15,140}\?)", text)][:40],
           "has_price": bool(re.search(r"\bAED\s?\d|\d\s?AED|per person|per head|starting (from|at)|from AED", text, flags=re.I)),
           "has_faq_schema": "FAQPage" in h, "text": text[:6000]}
    f.write_text(json.dumps(rec, ensure_ascii=False)); return "ok"
print(f"{len(targets)} pages · {len(todo)} competitor URLs to fetch", flush=True)
with concurrent.futures.ThreadPoolExecutor(16) as ex:
    res = list(ex.map(fetch, todo))
(OUT / "index.json").write_text(json.dumps({"targets": targets, "fetched": {u: key(u) for u in todo}}, ensure_ascii=False))
import collections; print("fetch results:", dict(collections.Counter(res)), flush=True)

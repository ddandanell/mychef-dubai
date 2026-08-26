#!/usr/bin/env python3
"""Long-tail harvest for mychef.ae from Google (gl=ae) and Bing (en-AE) autocomplete.

Real queries people type, no volumes. Input: every active primary in the SEO contract.
Per primary: the phrase itself + sales/long-tail modifiers; for the head terms an A-Z expansion.
Output: .live/research/autocomplete.jsonl  (one line per query: {q, engine, seed_url, suggestions[]})
"""
import json, pathlib, re, subprocess, sys, time, urllib.parse

ROOT = pathlib.Path(__file__).resolve().parents[3]
OUT = pathlib.Path(__file__).resolve().parent / ".live/research/autocomplete.jsonl"
pages = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]

PREFIX = ["", "best ", "how much ", "hire "]
SUFFIX = [" price", " cost", " packages", " near me", " for"]
HEAD = ["private chef dubai", "catering dubai", "wedding catering dubai", "corporate catering dubai", "birthday catering dubai",
        "bbq catering dubai", "buffet catering dubai", "party catering dubai", "meal prep dubai", "personal chef dubai",
        "chef at home dubai", "yacht catering dubai", "villa chef dubai", "iftar catering dubai", "private dining dubai"]

def curl(url):
    r = subprocess.run(["curl", "-s", "-m", "15", "-A", "Mozilla/5.0 (Macintosh)", url], capture_output=True, text=True)
    return r.stdout

def google(q):
    raw = curl("https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=ae&q=" + urllib.parse.quote(q))
    try: return json.loads(raw)[1]
    except Exception: return None

def bing(q):
    raw = curl("https://api.bing.com/osjson.aspx?mkt=en-AE&query=" + urllib.parse.quote(q))
    try: return json.loads(raw)[1]
    except Exception: return None

seeds = []
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    pk = ((p.get("intent_owner") or {}).get("primary_keyword") or "").strip().lower()
    if pk: seeds.append((url, pk))

queries = []
for url, pk in seeds:
    queries.append((url, pk, "google")); queries.append((url, pk, "bing"))
    for pre in PREFIX[1:]: queries.append((url, pre + pk, "google"))
    for suf in SUFFIX: queries.append((url, pk + suf, "google"))
for h in HEAD:
    for ch in "abcdefghijklmnopqrstuvwxyz":
        queries.append(("", f"{h} {ch}", "google"))

done = set()
if OUT.exists():
    for line in OUT.read_text().splitlines():
        try: d = json.loads(line); done.add((d["q"], d["engine"]))
        except Exception: pass
print(f"{len(seeds)} seeds, {len(queries)} queries, {len(done)} already done", flush=True)
fails = 0
with OUT.open("a") as f:
    for i, (url, q, engine) in enumerate(queries):
        if (q, engine) in done: continue
        s = google(q) if engine == "google" else bing(q)
        if s is None:
            fails += 1
            if fails > 25: print("too many failures — stopping", flush=True); break
            time.sleep(3); continue
        f.write(json.dumps({"q": q, "engine": engine, "seed_url": url, "suggestions": s}, ensure_ascii=False) + "\n"); f.flush()
        if i % 100 == 0: print(f"  {i}/{len(queries)}", flush=True)
        time.sleep(0.35 if engine == "google" else 0.2)
print("harvest complete", flush=True)

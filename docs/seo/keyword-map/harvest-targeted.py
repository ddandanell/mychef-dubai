#!/usr/bin/env python3
"""Second-pass autocomplete harvest aimed at pages that still have open subkeyword slots.

Reads fill-report.json (left_open) and the contract; for each open page whose type can carry
search phrases (commercial / location / guide / blog) it expands the primary A–Z and with
'in dubai' / 'dubai' variants on Google (gl=ae) and Bing (en-AE). Appends to the same
autocomplete.jsonl the main harvest uses, so build-backlog.py and the filler pick it up.
"""
import json, pathlib, re, subprocess, time, urllib.parse
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / ".live/research/autocomplete.jsonl"
pages = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]
left = json.loads((HERE / "fill-report.json").read_text())["left_open"]
SKIP_TYPES = {"Brand / utility", "Utility / untargeted", "Chef profile", "Partner landing"}

def curl(url):
    return subprocess.run(["curl", "-s", "-m", "15", "-A", "Mozilla/5.0 (Macintosh)", url], capture_output=True, text=True).stdout
def google(q):
    try: return json.loads(curl("https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=ae&q=" + urllib.parse.quote(q)))[1]
    except Exception: return None
def bing(q):
    try: return json.loads(curl("https://api.bing.com/osjson.aspx?mkt=en-AE&query=" + urllib.parse.quote(q)))[1]
    except Exception: return None

done = set()
if OUT.exists():
    for line in OUT.read_text().splitlines():
        try: d = json.loads(line); done.add((d["q"], d["engine"]))
        except Exception: pass
queries = []
for url, room in left.items():
    p = pages.get(url) or {}
    if p.get("page_type") in SKIP_TYPES: continue
    pk = ((p.get("intent_owner") or {}).get("primary_keyword") or "").strip().lower()
    if not pk: continue
    base = re.sub(r"\s+(in\s+)?dubai$", "", pk)
    variants = {pk, base, base + " in dubai", base + " dubai"}
    for v in variants: queries.append((url, v, "google")); queries.append((url, v, "bing"))
    for ch in "abcdefghijklmnopqrstuvwxyz": queries.append((url, f"{base} {ch}", "google"))
    for w in ["for", "with", "near", "price", "packages", "at home", "villa", "small", "for 10", "for 20", "for 50"]: queries.append((url, f"{base} {w}", "google"))
print(f"{len(left)} open pages -> {len(queries)} queries ({len(done)} already done)", flush=True)
fails = 0
with OUT.open("a") as f:
    for i, (url, q, engine) in enumerate(queries):
        if (q, engine) in done: continue
        s = google(q) if engine == "google" else bing(q)
        if s is None:
            fails += 1
            if fails > 25: print("too many failures — stopping", flush=True); break
            time.sleep(3); continue
        f.write(json.dumps({"q": q, "engine": engine, "seed_url": url, "suggestions": s}, ensure_ascii=False) + "\n"); f.flush(); done.add((q, engine))
        if i % 100 == 0: print(f"  {i}/{len(queries)}", flush=True)
        time.sleep(0.35 if engine == "google" else 0.2)
print("targeted harvest complete", flush=True)

#!/usr/bin/env python3
"""Live UAE SERPs (Google, desktop, depth 30) for every contract keyword + the top unowned demand phrases.
Resumable; appends to .live/research/dataforseo/serps.jsonl. $0.005 per keyword."""
import json, os, base64, subprocess, re, pathlib, concurrent.futures, sys
HERE = pathlib.Path(__file__).resolve().parent; ROOT = HERE.parents[2]
OUT = HERE / ".live/research/dataforseo/serps.jsonl"
env = dict(l.strip().split("=", 1) for l in open(os.path.expanduser("~/.config/claude-seo/dataforseo.env")) if "=" in l)
auth = base64.b64encode(f"{env['DATAFORSEO_LOGIN']}:{env['DATAFORSEO_PASSWORD']}".encode()).decode()
def norm(k): return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", k.lower().replace("-", " "))).strip()
c = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]
kws = []
for u, p in c.items():
    if (p.get("indexation") or {}).get("redirect_to"): continue
    io = p.get("intent_owner") or {}
    for k in [io.get("primary_keyword")] + list(io.get("subkeywords") or []):
        if k and norm(k) not in kws: kws.append(norm(k))
dem = json.loads((HERE / "demand.json").read_text())
extra = [r["kw"] for r in dem["pool"] if r["relevant"] and not r["owner"]][:300]
for k in extra:
    if k not in kws: kws.append(k)
done = set()
if OUT.exists():
    for l in OUT.read_text().splitlines():
        try: done.add(json.loads(l)["kw"])
        except Exception: pass
todo = [k for k in kws if k not in done]
print(f"{len(kws)} keywords, {len(done)} done, {len(todo)} to fetch (~${len(todo)*0.005:.2f})", flush=True)
def fetch(k):
    body = json.dumps([{"keyword": k, "location_code": 2784, "language_code": "en", "device": "desktop", "depth": 30}]).encode()
    r = subprocess.run(["curl", "-s", "-m", "120", "-X", "POST", "-H", f"Authorization: Basic {auth}", "-H", "Content-Type: application/json", "--data-binary", "@-", "https://api.dataforseo.com/v3/serp/google/organic/live/regular"], input=body, capture_output=True)
    try:
        d = json.loads(r.stdout); t = d["tasks"][0]; res = (t.get("result") or [{}])[0]
        items = [{"rank": i.get("rank_absolute"), "domain": i.get("domain"), "url": i.get("url")} for i in (res.get("items") or []) if i.get("type") == "organic"]
        return {"kw": k, "status": t.get("status_message"), "cost": d.get("cost"), "se_results": res.get("se_results_count"), "items": items}
    except Exception as e:
        return {"kw": k, "status": f"error {e}", "items": []}
spent = 0.0; n = 0
with OUT.open("a") as f, concurrent.futures.ThreadPoolExecutor(16) as ex:
    for res in ex.map(fetch, todo):
        if res.get("status") == "Ok.":
            f.write(json.dumps(res, ensure_ascii=False) + "\n"); f.flush(); spent += res.get("cost") or 0
        n += 1
        if n % 100 == 0: print(f"  {n}/{len(todo)} · ${spent:.2f}", flush=True)
print(f"serps complete: {n} fetched · ${spent:.2f}", flush=True)

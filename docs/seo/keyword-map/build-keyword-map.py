#!/usr/bin/env python3
"""Local keyword map for mychef.ae — research only, never served.

Joins four sources per URL:
  contract   docs/seo/myCHEF-AE-SEO-STANDARD.json   locked primary + subkeywords (cap 8), silo, hub
  master     docs/seo/mychef-master-keywords.csv    historical candidates (unvalidated volume)
  locks      src/content/privateChefCluster.ts       Semrush volumes where they exist
  live HTML  <live_dir>/*.html                       where each keyword really appears (title / H1 / H2 / body)

Writes data.json + index.html next to this script.
  python3 docs/seo/keyword-map/build-keyword-map.py --fetch    # pull the live site, then build
  python3 docs/seo/keyword-map/build-keyword-map.py            # rebuild from the last snapshot (.live/)
"""
import csv, html, json, re, sys, collections, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[3]
HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / "data.json"


def fetch_live(dest: pathlib.Path) -> None:
    """Download every sitemap URL + its HTTP status into dest (curl: this Mac's Python has no CA bundle)."""
    import subprocess, concurrent.futures
    dest.mkdir(parents=True, exist_ok=True)
    sm = subprocess.run(["curl", "-s", "-m", "30", "https://www.mychef.ae/sitemap.xml"], capture_output=True, text=True).stdout
    urls = re.findall(r"<loc>([^<]+)</loc>", sm)
    def one(u):
        path = u.replace("https://www.mychef.ae", "") or "/"
        name = ("_index" if path == "/" else path.replace("/", "_")) + ".html"
        subprocess.run(["curl", "-s", "-m", "30", u, "-o", str(dest / name)])
        code = subprocess.run(["curl", "-s", "-o", "/dev/null", "-m", "25", "-w", "%{http_code}\t%{redirect_url}", u], capture_output=True, text=True).stdout
        return f"{u}\t{code}"
    with concurrent.futures.ThreadPoolExecutor(8) as ex:
        lines = list(ex.map(one, urls))
    (dest / "status.tsv").write_text("\n".join(lines) + "\n")
    print(f"fetched {len(urls)} live pages into {dest}")


if len(sys.argv) > 1 and sys.argv[1] == "--fetch":
    LIVE = HERE / ".live"
    fetch_live(LIVE)
elif len(sys.argv) > 1 and sys.argv[1] == "--dist":
    # rescore from a local prerender (npm run build:prerender) instead of the live snapshot
    LIVE = HERE / ".live-dist"; LIVE.mkdir(exist_ok=True)
    import shutil
    for f in LIVE.glob("*.html"): f.unlink()
    for html_file in (ROOT / "dist").rglob("index.html"):
        rel = "/" + str(html_file.parent.relative_to(ROOT / "dist")).replace("\\", "/")
        rel = "/" if rel in ("/.", "/") else rel
        shutil.copy(html_file, LIVE / (("_index" if rel == "/" else rel.replace("/", "_")) + ".html"))
    src_live = HERE / ".live"
    for name in ("status.tsv",):
        if (src_live / name).exists(): shutil.copy(src_live / name, LIVE / name)
    if (src_live / "research").exists() and not (LIVE / "research").exists(): (LIVE / "research").symlink_to(src_live / "research")
    print(f"rescoring from dist/: {len(list(LIVE.glob('*.html')))} pages")
elif len(sys.argv) > 1:
    LIVE = pathlib.Path(sys.argv[1])
else:
    LIVE = HERE / ".live"
    if not LIVE.exists():
        sys.exit("no live snapshot yet — run with --fetch first")

contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())
pages = contract["pages"]
banned = {b["term"].lower() for b in contract.get("banned_terms", [])}
master = list(csv.DictReader(open(ROOT / "docs/seo/mychef-master-keywords.csv")))

# volumes: DataForSEO Google Ads, UAE (location 2784, en) when pulled; else the private-chef lock table
vol = {}
ts = (ROOT / "src/content/privateChefCluster.ts").read_text()
for m in re.finditer(r"keyword: '([^']+)', volume: (\d+|null)", ts):
    if m.group(2) != "null":
        vol[m.group(1).lower()] = int(m.group(2))
_ads = LIVE / "research/dataforseo/google_ads_search_volume.json"
if _ads.exists():
    for r in json.loads(_ads.read_text()):
        if r.get("keyword"):
            vol[r["keyword"].lower()] = r.get("search_volume") or 0
    VOL_SOURCE = "DataForSEO · Google Ads · United Arab Emirates · " + __import__("datetime").date.today().isoformat()
else:
    VOL_SOURCE = "private-chef lock table (Semrush UAE 2026-08-25)"

import unicodedata as _ud
def _deaccent(s): return "".join(c for c in _ud.normalize("NFKD", s or "") if not _ud.combining(c))
def norm(s):
    s = _deaccent(s or "")
    return re.sub(r"\s+", " ", re.sub(r"[’'`]", "", (s or "").replace("-", " ").replace("–", " "))).strip().lower()
def has(text, phrase):
    p = norm(phrase)
    return bool(p) and re.search(r"(?<![a-z0-9])" + re.escape(p) + r"(?![a-z0-9])", text) is not None

def strip(h):
    h = re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", " ", h, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))

def live_for(url):
    name = ("_index" if url == "/" else url.replace("/", "_")) + ".html"
    f = LIVE / name
    if not f.exists(): return None
    h = f.read_text(encoding="utf-8", errors="ignore")
    title = re.search(r"<title>([^<]*)</title>", h)
    desc = re.search(r'<meta name="description" content="([^"]*)"', h)
    h1s = [norm(strip(x)) for x in re.findall(r"<h1[^>]*>(.*?)</h1>", h, flags=re.S)]
    h2s = [norm(strip(x)) for x in re.findall(r"<h2[^>]*>(.*?)</h2>", h, flags=re.S)]
    main = re.search(r"<main.*?</main>", h, flags=re.S)
    body = norm(strip(main.group(0) if main else h))
    return {"title": norm(title.group(1)) if title else "", "description": norm(html.unescape(desc.group(1))) if desc else "", "h1": h1s[0] if h1s else "", "h1_count": len(h1s),
            "h2": h2s, "body": body, "words": len(body.split()), "bytes": len(h), "shell": len(body.split()) < 150}

live = {u: live_for(u) for u in pages}
# live HTTP status (status.tsv: url \t code \t redirect_url) — the site can be ahead of the contract
status = {}
st = LIVE / "status.tsv"
if st.exists():
    for line in st.read_text().splitlines():
        parts = line.split("\t")
        if len(parts) >= 2:
            u = parts[0].replace("https://www.mychef.ae", "") or "/"
            status[u] = {"code": parts[1], "to": (parts[2] if len(parts) > 2 else "").replace("https://www.mychef.ae", "")}
for u, lv in list(live.items()):
    if lv and lv["bytes"] < 200:  # a redirect body, not a page
        live[u] = None

# --- per page -------------------------------------------------------------
rows = []
for url, p in pages.items():
    io = p.get("intent_owner") or {}
    idx = p.get("indexation") or {}
    retired = bool(idx.get("redirect_to"))
    noindex = not (idx.get("robots") or {}).get("index", True)
    primary = (io.get("primary_keyword") or "").strip()
    subs = [s.strip() for s in (io.get("subkeywords") or []) if s.strip()]
    cap = io.get("subkeyword_cap") or 8
    lv = live.get(url)
    def count(text, kw):
        p = norm(kw)
        return len(re.findall(r"(?<![a-z0-9])" + re.escape(p) + r"(?![a-z0-9])", text)) if p else 0
    def place(kw, role="sub"):
        if not lv: return None
        n = count(lv["body"], kw)
        pl = {"title": has(lv["title"], kw), "description": has(lv["description"], kw), "h1": has(lv["h1"], kw), "h2": any(has(x, kw) for x in lv["h2"]),
              "first100": has(" ".join(lv["body"].split()[:100]), kw), "body": n > 0, "count": n}
        if role == "primary":
            # the contract rule: title, H1, first 100 words, one subheading — plus the description and a real body presence
            pl["score"] = (3 if pl["title"] else 0) + (3 if pl["h1"] else 0) + (2 if pl["description"] else 0) + (1 if pl["h2"] else 0) + (1 if n >= 2 else 0)
        else:
            # subkeywords live in sentences only; a heading placement is a violation, not a point
            pl["score"] = min(3, n) + (1 if pl["description"] else 0)
            pl["violation"] = pl["title"] or pl["h1"] or pl["h2"]
        return pl
    rows.append({
        "url": url, "silo": p.get("silo") or "Unassigned", "hub": p.get("hub"), "is_hub": bool(p.get("is_hub")),
        "page_type": p.get("page_type"), "retired": retired, "noindex": noindex, "redirect_to": idx.get("redirect_to"),
        "primary": primary, "primary_volume": vol.get(re.sub(r"[^a-z0-9 ]", "", norm(primary))), "primary_place": place(primary, "primary") if primary else None,
        "subs": [{"kw": s, "volume": vol.get(re.sub(r"[^a-z0-9 ]", "", norm(s))), "place": place(s)} for s in subs],
        "cap": cap, "room": max(0, cap - len(subs)),
        "title": lv["title"] if lv else None, "description": lv["description"] if lv else None, "h1": lv["h1"] if lv else None, "h1_count": lv["h1_count"] if lv else None,
        "words": lv["words"] if lv else None, "live": lv is not None, "shell": bool(lv and lv["shell"]),
        "live_code": (status.get(url) or {}).get("code"), "live_to": (status.get(url) or {}).get("to"),
    })

for r in rows:
    pp = r["primary_place"]; subs = r["subs"]
    covered = sum(1 for x in subs if x["place"] and x["place"]["body"])
    r["keyword_score"] = {"primary": pp["score"] if pp else None, "subs_present": covered, "subs_total": len(subs),
                          "sub_violations": sum(1 for x in subs if x["place"] and x["place"].get("violation"))}
active = [r for r in rows if not r["retired"] and not r["noindex"]]

# --- doubles: one keyword assigned to more than one active page ------------
assign = collections.defaultdict(list)
for r in active:
    if r["primary"]: assign[norm(r["primary"])].append({"url": r["url"], "role": "primary"})
    for s in r["subs"]: assign[norm(s["kw"])].append({"url": r["url"], "role": "sub"})
doubles = sorted([{"kw": k, "uses": v} for k, v in assign.items() if len(v) > 1], key=lambda d: -len(d["uses"]))
double_kw = {d["kw"] for d in doubles}

# --- risk: where does each PRIMARY show up on other pages' headings/body ---
prim_owner = {norm(r["primary"]): r["url"] for r in active if r["primary"]}
collisions = []
for kw, owner in prim_owner.items():
    heads, bodies = [], []
    for u, lv in live.items():
        if u == owner or not lv or pages[u].get("indexation", {}).get("redirect_to"): continue
        own = norm((pages[u].get("intent_owner") or {}).get("primary_keyword") or "")
        if own and has(own, kw): continue  # structural containment, listed separately
        if has(lv["title"], kw) or has(lv["h1"], kw) or any(has(x, kw) for x in lv["h2"]): heads.append(u)
        elif has(lv["body"], kw): bodies.append(u)
    collisions.append({"kw": kw, "owner": owner, "volume": vol.get(kw), "heading_pages": heads, "body_pages": len(bodies)})
coll_by_owner = {c["owner"]: c for c in collisions}
# containment: a primary that is a substring of another primary (structural overlap)
contain = []
prims = sorted(prim_owner.items(), key=lambda kv: len(kv[0]))
for i, (a, oa) in enumerate(prims):
    for b, ob in prims[i + 1:]:
        if a != b and has(b, a):
            contain.append({"short": a, "short_owner": oa, "long": b, "long_owner": ob})

# --- measured overlap: two of OUR urls in the same live result set ----------
# Substring containment ("catering dubai" inside "bbq catering dubai") is how a hub-and-spoke
# site is supposed to look — 74 pairs, none of which predicted anything. What matters is when
# Google actually shows two of our pages for one phrase, so that is what gets listed.
serp_overlap = []
_sf = HERE / ".live/research/dataforseo/serps.jsonl"   # research data always lives under .live/
if _sf.exists():
    _seen = set()
    for _line in _sf.read_text().splitlines():
        try: _d = json.loads(_line)
        except Exception: continue
        _mine = []
        for _i, _it in enumerate(_d.get("items") or [], start=1):
            if "mychef.ae" not in (_it.get("domain") or ""): continue
            _u = (_it.get("url") or "").split("mychef.ae", 1)[-1].split("?")[0].rstrip("/") or "/"
            if _u not in [x[0] for x in _mine]: _mine.append((_u, _i))
        if len(_mine) > 1 and _d["kw"] not in _seen:
            _seen.add(_d["kw"])
            serp_overlap.append({"kw": _d["kw"], "volume": vol.get(_d["kw"]),
                                 "owner": prim_owner.get(_d["kw"]),
                                 "pages": [{"url": u, "rank": r} for u, r in sorted(_mine, key=lambda x: x[1])]})
    serp_overlap.sort(key=lambda c: (-(c["volume"] or 0), c["kw"]))

# --- candidates to add (historical master, unvalidated) ---------------------
by_url = collections.defaultdict(list)
for m in master:
    by_url[m["url"]].append(m)
master_kw_count = collections.Counter(norm(m["keyword"]) for m in master)
sub_use = {}
for r in active:
    for sdef in r["subs"]:
        k = norm(sdef["kw"])
        if k in sub_use: continue
        n = 0
        for u, lv in live.items():
            if u == r["url"] or not lv: continue
            if has(lv["title"], k) or has(lv["h1"], k) or any(has(x, k) for x in lv["h2"]) or has(lv["body"], k): n += 1
        sub_use[k] = n
for r in rows:
    for sdef in r["subs"]:
        sdef["other_pages"] = sub_use.get(norm(sdef["kw"]))
for r in rows:
    have = {norm(r["primary"])} | {norm(s["kw"]) for s in r["subs"]}
    cands = []
    for m in by_url.get(r["url"], []):
        k = norm(m["keyword"])
        if not k or k in have or m["role"] == "Primary": continue
        if any(b in k for b in banned): continue
        if k in prim_owner and prim_owner[k] != r["url"]: continue  # owned elsewhere
        cands.append({"kw": k, "role": m["role"], "also_in_master_urls": master_kw_count[k] - 1, "elsewhere": k in double_kw})
    seen = set(); uniq = []
    for c in cands:
        if c["kw"] in seen: continue
        seen.add(c["kw"]); uniq.append(c)
    r["candidates"] = uniq[:20]
    c = coll_by_owner.get(r["url"])
    r["risk"] = {"heading_pages": c["heading_pages"], "body_pages": c["body_pages"]} if c else None
    r["doubles"] = sorted({norm(x) for x in [r["primary"]] + [s["kw"] for s in r["subs"]] if norm(x) in double_kw})

silo_order = ["Homepage", "Private Chef", "Catering", "Private Events", "Cuisines and Dietary", "Corporate Catering", "Seasonal and Occasions", "Dining Experiences", "Locations", "Packages", "Blog and Guides", "Partners", "Trust and About", "Membership and Offers", "Legal and Utility", "Unassigned"]
for r in rows:
    if r["url"] == "/": r["silo"] = "Homepage"
silos = collections.OrderedDict()
for s in silo_order: silos[s] = []
for r in rows: silos.setdefault(r["silo"], []).append(r)
silos = {k: sorted(v, key=lambda r: (not r["is_hub"], r["url"])) for k, v in silos.items() if v}

stats = {
    "pages_total": len(rows), "pages_active": len(active), "pages_retired": sum(r["retired"] for r in rows), "pages_noindex": sum(r["noindex"] and not r["retired"] for r in rows),
    "primaries": sum(1 for r in active if r["primary"]), "subkeywords": sum(len(r["subs"]) for r in active),
    "avg_subs": round(sum(len(r["subs"]) for r in active) / max(1, len(active)), 1),
    "pages_with_room": sum(1 for r in active if r["room"] > 0), "room_total": sum(r["room"] for r in active),
    "doubles": len(doubles), "heading_collisions": sum(1 for c in collisions if c["heading_pages"]),
    "primary_missing_title": sum(1 for r in active if r["primary"] and r["primary_place"] and not r["primary_place"]["title"]),
    "primary_missing_h1": sum(1 for r in active if r["primary"] and r["primary_place"] and not r["primary_place"]["h1"]),
    "shells": sum(1 for r in rows if r["shell"]), "candidates_total": sum(len(r["candidates"]) for r in active),
    "measured_volumes": sum(1 for r in rows if r["primary_volume"]) , "volume_source": VOL_SOURCE,
    "primary_score_avg": round(sum(r["keyword_score"]["primary"] for r in active if r["keyword_score"]["primary"] is not None) / max(1, sum(1 for r in active if r["keyword_score"]["primary"] is not None)), 1),
    "primary_score_full": sum(1 for r in active if r["keyword_score"]["primary"] == 10),
    "sub_violations": sum(r["keyword_score"]["sub_violations"] for r in active),
    "live_redirecting": sum(1 for r in rows if (r.get("live_code") or "200") != "200"),
    "live_ahead_of_contract": sum(1 for r in rows if (r.get("live_code") or "200") != "200" and not r["retired"]),
}
import datetime as _dt
OUT.write_text(json.dumps({"generated": _dt.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "silos": silos, "doubles": doubles, "collisions": sorted([c for c in collisions if c["heading_pages"]], key=lambda c: -len(c["heading_pages"])), "containment": contain, "serp_overlap": serp_overlap}, ensure_ascii=False))
tpl = (pathlib.Path(__file__).resolve().parent / "template.html").read_text()
payload = OUT.read_text().replace("</", "<\\/")
(pathlib.Path(__file__).resolve().parent / "index.html").write_text(tpl.replace("__DATA__", payload))
print(json.dumps(stats, indent=1))
print("silos:", {k: len(v) for k, v in silos.items()})
print("top heading collisions:", [(c["kw"], len(c["heading_pages"])) for c in sorted(collisions, key=lambda c: -len(c["heading_pages"]))[:8]])
print("doubles sample:", [(d["kw"], len(d["uses"])) for d in doubles[:8]])
print("containment pairs:", len(contain), "| measured SERP overlaps:", len(serp_overlap))

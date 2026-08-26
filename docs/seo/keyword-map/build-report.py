#!/usr/bin/env python3
"""The keyword report — one row per keyword with the twelve columns the owner asked for:

  Search volume | Intent | Commercial value | SERP similarity | Ranking difficulty | Current position |
  Search Console impressions | CTR | Competitor gap | Entity/topic coverage | Recommended page | Keep / Merge / New page

Sources (all local): DataForSEO pulls in .live/research/dataforseo/ (Google Ads volume+CPC for the UAE, Labs KD and
intent, live UAE SERPs at depth 30, competitors' top-30 rankings), the SEO contract (ownership), the live
snapshot (.live/*.html, entity coverage), Bing Webmaster stats if exported (.live/research/bing-*.json).
Search Console columns stay empty until the service account is added to the mychef.ae property.

Writes report.json + report.html next to this script.
"""
COMPETITOR_BRANDS = __import__("re").compile(r"\b(royal catering|smart catering|safadi|al safadi|dish catering|odeon|elements catering|govindas|taste studio|tastestudio|buffestra|cedar tree|baguette|pinch gourmet|ahs catering|captain zaiqey|zaiqey|chefmaison|chef maison|monchef|mon chef|instachef|takeachef|take a chef|miummium|cozymeal|chefondemand|chef on demand|hiremycooks|kcal|right bite|eat clean|fitfood|kitopi|talabat|deliveroo|careem|noon food|zomato|emirates catering|emirates flight|abela|national catering|green forest|metropolitan|lifestyle diets|pure delight|foodie brands|atlantis|burj al arab|address hotel|la table|carluccio|sabor|gourmet gulf|flavours catering|capital catering|al maha|chef burak|le petit chef|king chef|trendy chef|jumeirah beach hotel|emirates palace|ritz|four seasons|marriott|hilton|hyatt|radisson|rotana|caterer global|catererglobal|bateel|cook & tap|yalla|lulu|spinneys|waitrose|carrefour|nusret|salt bae|kerala restaurant|calicut)\b")
import json, pathlib, re, collections, datetime, html, csv

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
D = HERE / ".live/research/dataforseo"
LIVE = HERE / ".live"
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())
pages = contract["pages"]

import unicodedata as _ud
def _deaccent(s): return "".join(c for c in _ud.normalize("NFKD", s or "") if not _ud.combining(c))
def norm(s):
    s = _deaccent(s or "")
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", (s or "").lower().replace("-", " "))).strip()
def load(name, default):
    f = D / name
    return json.loads(f.read_text()) if f.exists() else default
STOPW = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "near", "me", "with", "on", "is", "your", "how", "much", "does", "do", "it"}
def toks(k): return [t for t in norm(k).split() if t not in STOPW]

# ---- data ---------------------------------------------------------------------
ads = {norm(r["keyword"]): r for r in load("google_ads_search_volume.json", []) if r.get("keyword")}
kd = {}
for r in load("bulk_keyword_difficulty_all.json", []) + load("bulk_keyword_difficulty.json", []):
    kd.setdefault(norm(r["keyword"]), r.get("keyword_difficulty"))
intent = {}
for r in load("search_intent_all.json", []) + load("search_intent.json", []):
    intent.setdefault(norm(r["keyword"]), (r.get("keyword_intent") or {}).get("label"))
serps = {}
f = D / "serps.jsonl"
if f.exists():
    for l in f.read_text().splitlines():
        try:
            d = json.loads(l); serps[norm(d["kw"])] = d
        except Exception: pass
comp = load("competitors_ranked_keywords.json", {})
comp_pos = collections.defaultdict(dict)
for dom, items in comp.items():
    for it in items:
        comp_pos[norm(it["keyword_data"]["keyword"])][dom] = it["ranked_serp_element"]["serp_item"].get("rank_absolute")
demand = json.loads((HERE / "demand.json").read_text()) if (HERE / "demand.json").exists() else {"pool": []}
pool_meta = {r["kw"]: r for r in demand.get("pool", [])}
bing = {}
for name in ("bing-query-stats.json", "bing-page-stats.json"):
    bf = LIVE / "research" / name
    if bf.exists():
        for r in json.loads(bf.read_text()).get("rows", []):
            if r.get("query"):
                e = bing.setdefault(norm(r["query"]), {"impressions": 0, "clicks": 0})
                e["impressions"] += r.get("impressions") or 0; e["clicks"] += r.get("clicks") or 0

# ---- ownership + live bodies ------------------------------------------------
owner = {}; active = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    io = p.get("intent_owner") or {}
    pk = norm(io.get("primary_keyword") or ""); subs = [norm(s) for s in io.get("subkeywords") or []]
    if pk: owner[pk] = (url, "primary")
    for s in subs: owner.setdefault(s, (url, "sub"))
    active[url] = {"primary": pk, "subs": subs, "silo": p.get("silo"), "type": p.get("page_type")}
def strip(h):
    h = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))
bodies = {}
for url in active:
    fp = LIVE / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    if fp.exists():
        h = fp.read_text(encoding="utf-8", errors="ignore")
        if len(h) > 200:
            m = re.search(r"<main.*?</main>", h, flags=re.S); bodies[url] = norm(strip(m.group(0) if m else h))

# ---- helpers ------------------------------------------------------------------
def top_urls(k, n=10):
    return [i["url"] for i in (serps.get(k) or {}).get("items", []) if (i.get("rank") or 99) <= n]
def serp_sim(a, b):
    A, B = set(top_urls(a)), set(top_urls(b))
    if not A or not B: return None
    return round(len(A & B) / len(A | B), 2)
def our_position(k):
    for i in (serps.get(k) or {}).get("items", []):
        if "mychef.ae" in (i.get("domain") or ""): return i.get("rank"), i.get("url")
    return (None, None) if k in serps else ("n/a", None)
def coverage(k, url):
    b = bodies.get(url)
    if not b: return None
    tk = toks(k)
    if not tk: return None
    present = sum(1 for t in tk if re.search(r"(?<![a-z0-9])" + re.escape(t) + r"(?![a-z0-9])", b))
    exact = re.search(r"(?<![a-z0-9])" + re.escape(norm(k)) + r"(?![a-z0-9])", b) is not None
    return {"tokens": round(present / len(tk), 2), "exact": exact}
def best_page_by_serp(k):
    """Owned primary whose SERP overlaps most with this keyword's SERP."""
    best, bs = None, 0
    for url, a in active.items():
        if not a["primary"] or a["primary"] not in serps or url == "/": continue   # the homepage ranks for everything; it is not a merge target
        if a["type"] in ("Brand / utility", "Utility / untargeted", "Partner landing", "Chef profile") or url in ("/about", "/contact", "/faq", "/how-we-vet-our-chefs", "/menus", "/gallery", "/press"): continue
        s = serp_sim(k, a["primary"])
        if s is not None and s > bs: best, bs = url, s
    return best, bs

# ---- rows ---------------------------------------------------------------------
keys = list(owner.keys()) + [k for k in pool_meta if pool_meta[k]["relevant"] and not pool_meta[k]["owner"]][:300]
seen = set(); rows = []
for k in keys:
    if k in seen: continue
    seen.add(k)
    a = ads.get(k) or {}; v = a.get("search_volume") or (pool_meta.get(k) or {}).get("volume") or 0
    cpc = a.get("cpc") or (pool_meta.get(k) or {}).get("cpc") or 0
    own = owner.get(k); own_url = own[0] if own else None
    pos, pos_url = our_position(k)
    comps = comp_pos.get(k, {})
    best_comp = min(comps.values()) if comps else None
    gap = None
    if best_comp is not None:
        gap = "open (no competitor in top 30)" if False else (f"competitor #{best_comp}, we {'#' + str(pos) if isinstance(pos, int) else 'not in top 30'}")
    elif k in serps:
        gap = "no tracked competitor in top 30" + ("" if not isinstance(pos, int) else f", we #{pos}")
    sim_owner = serp_sim(k, active[own_url]["primary"]) if own_url and active[own_url]["primary"] and active[own_url]["primary"] != k else (1.0 if own and own[1] == "primary" else None)
    bp, bs = best_page_by_serp(k)
    cov = coverage(k, own_url or bp) if (own_url or bp) else None
    it = intent.get(k) or (pool_meta.get(k) or {}).get("intent")
    off = bool(COMPETITOR_BRANDS.search(k)) or bool(re.search(r"\b(show|shows|places?|deals?|restaurants?|hotel|hotels|cafe|salary|vacancy|recipe|recipes|tattoo|abu dhabi|al ain|sharjah|ajman|fujairah|ras al khaimah|umm al quwain|cedar tree|emirates flight|le petit chef|king chef|chef burak|chef eyad|calicut chef|trendy chef|baguette|buffestra|metropolitan catering|brunch and cake|food view|pure delight|foodie brands|lifestyle diets|green forest|national catering|caterer middle east|catering middle east|chef work|taste studio|tastestudio|pinch gourmet|ahs catering|captain zaiqey)\b", k))
    recruitment = bool(re.search(r"\b(jobs?|salary|vacancy|vacancies|careers?|hiring in|chef hiring)\b", k))
    # recommendation
    rec_page = own_url
    same_as_owner_primary = bool(own_url) and set(toks(k)) == set(toks(active[own_url]["primary"]))
    if bp and bs >= 0.5 and bp != own_url and not (own and own[1] == "primary") and not same_as_owner_primary:
        rec_page = bp
    elif not own_url:
        rec_page = bp if bp and bs >= 0.3 else None
    if own and own[1] == "primary": action = "keep (primary)"
    elif off: action = "drop — off-intent"
    elif recruitment:
        action = "keep on /become-a-mychef" if own_url == "/become-a-mychef" else "merge → /become-a-mychef"; rec_page = "/become-a-mychef"
    elif own_url and rec_page and rec_page != own_url: action = f"merge → {rec_page}"
    elif own_url: action = "keep (sub)"
    elif rec_page: action = f"merge → {rec_page}"
    elif v >= 100 and (it in ("commercial", "transactional")): action = "new page candidate (passes demand; apply the 3-of-8 rule)"
    else: action = "backlog"
    rows.append({"kw": k, "volume": v, "intent": it, "commercial_value": round(v * cpc, 1) if v and cpc else 0, "cpc": cpc,
                 "serp_similarity": sim_owner, "serp_best_page": bp, "serp_best_sim": bs or None, "kd": kd.get(k) if kd.get(k) is not None else (pool_meta.get(k) or {}).get("kd"),
                 "position": pos, "position_url": pos_url, "gsc_impressions": None, "gsc_ctr": None,
                 "bing_impressions": (bing.get(k) or {}).get("impressions"), "bing_ctr": (round(bing[k]["clicks"] / bing[k]["impressions"], 3) if bing.get(k) and bing[k]["impressions"] else None),
                 "competitor_gap": gap, "competitors": comps, "coverage": cov, "owner": own_url, "role": own[1] if own else None, "recommended_page": rec_page, "action": action,
                 "seasonal": max(((m.get("search_volume") or 0) for m in (a.get("monthly_searches") or [])), default=0)})
rows.sort(key=lambda r: (-r["volume"], r["kw"]))
stats = {
    "rows": len(rows), "with_volume": sum(1 for r in rows if r["volume"]), "with_serp": sum(1 for r in rows if r["kw"] in serps),
    "we_rank_top30": sum(1 for r in rows if isinstance(r["position"], int)), "we_rank_top10": sum(1 for r in rows if isinstance(r["position"], int) and r["position"] <= 10),
    "actions": dict(collections.Counter(r["action"].split(" ")[0] for r in rows)), "merges": sum(1 for r in rows if r["action"].startswith("merge")),
    "new_page_candidates": sum(1 for r in rows if r["action"].startswith("new page")), "off_intent": sum(1 for r in rows if r["action"].startswith("drop")),
    "serp_cost_usd": round(sum((serps[k].get("cost") or 0) for k in serps), 2), "gsc": "no access — service account not on the mychef.ae property",
}
out = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "rows": rows}
(HERE / "report.json").write_text(json.dumps(out, ensure_ascii=False))
with open(HERE / "report.csv", "w", newline="") as fh:
    w = csv.writer(fh); w.writerow(["keyword", "search_volume_uae", "intent", "commercial_value_usd", "serp_similarity_to_owner", "ranking_difficulty", "current_position_uae", "gsc_impressions", "gsc_ctr", "bing_impressions", "bing_ctr", "competitor_gap", "entity_coverage_tokens", "exact_phrase_on_page", "owner_page", "role", "recommended_page", "action"])
    for r in rows: w.writerow([r["kw"], r["volume"], r["intent"], r["commercial_value"], r["serp_similarity"], r["kd"], r["position"], "", "", r["bing_impressions"], r["bing_ctr"], r["competitor_gap"], (r["coverage"] or {}).get("tokens"), (r["coverage"] or {}).get("exact"), r["owner"], r["role"], r["recommended_page"], r["action"]])
tpl = (HERE / "report-template.html").read_text()
(HERE / "report.html").write_text(tpl.replace("__DATA__", (HERE / "report.json").read_text().replace("</", "<\\/")))
print(json.dumps(stats, indent=1))

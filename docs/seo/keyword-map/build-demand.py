#!/usr/bin/env python3
"""Demand check for mychef.ae — is each page targeting the right keyword, and where is the demand?

Joins (all local, pulled from DataForSEO, UAE / English):
  .live/research/dataforseo/google_ads_search_volume.json      volume + 12-month history for every contract keyword
  .live/research/dataforseo/bulk_keyword_difficulty.json        KD for every primary
  .live/research/dataforseo/search_intent.json                  DataForSEO intent for every primary
  .live/research/dataforseo/ranked_keywords_mychef_ae.json      what the site ranks for today (top 100)
  .live/research/dataforseo/keyword_suggestions.json + related_keywords.json + keyword_ideas.json   demand pool
  .live/research/dataforseo/competitors_ranked_keywords.json    what the closest competitors rank for (top 30)
  docs/seo/myCHEF-AE-SEO-STANDARD.json                          ownership

Writes demand.json + demand.html next to this script.
"""
COMPETITOR_BRANDS = __import__("re").compile(r"\b(royal catering|smart catering|safadi|al safadi|dish catering|odeon|elements catering|govindas|taste studio|tastestudio|buffestra|cedar tree|baguette|pinch gourmet|ahs catering|captain zaiqey|zaiqey|chefmaison|chef maison|monchef|mon chef|instachef|takeachef|take a chef|miummium|cozymeal|chefondemand|chef on demand|hiremycooks|kcal|right bite|eat clean|fitfood|kitopi|talabat|deliveroo|careem|noon food|zomato|emirates catering|emirates flight|abela|national catering|green forest|metropolitan|lifestyle diets|pure delight|foodie brands|atlantis|burj al arab|address hotel|la table|carluccio|sabor|gourmet gulf|flavours catering|capital catering|al maha|chef burak|le petit chef|king chef|trendy chef|jumeirah beach hotel|emirates palace|ritz|four seasons|marriott|hilton|hyatt|radisson|rotana|caterer global|catererglobal|bateel|cook & tap|yalla|lulu|spinneys|waitrose|carrefour|nusret|salt bae|kerala restaurant|calicut)\b")
import json, pathlib, re, collections, datetime

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
D = HERE / ".live/research/dataforseo"
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

ads = {norm(r["keyword"]): r for r in load("google_ads_search_volume.json", []) if r.get("keyword")}
kd = {norm(r["keyword"]): r.get("keyword_difficulty") for r in load("bulk_keyword_difficulty.json", [])}
intent = {norm(r["keyword"]): (r.get("keyword_intent") or {}).get("label") for r in load("search_intent.json", [])}
ranked = load("ranked_keywords_mychef_ae.json", {}).get("items") or []
comp = load("competitors_ranked_keywords.json", {})

OFF = re.compile(r"\b(show|shows|places?|deals?|restaurants?|hotel|hotels|cafe|jobs?|salary|vacancy|careers?|recipe|recipes|near me open|buffet in|brunch in|dinner in|lunch in|breakfast in|iftar in|menu prices?|ladies night|happy hour)\b")
BRAND = re.compile(r"\b(emirates catering|emirates flight|king chef|le petit chef|petit chef|chef burak|burak|chef eyad|calicut chef|trendy chef|big ticket|salt bae|nusret|gordon ramsay|jamie oliver|kerala restaurant|dream dinner|dinner show|cozymeal|takeachef|metropolitan catering|brunch and cake|food view|pure delight|foodie brands|lifestyle diets|cedar tree|green forest|national catering|ahs catering|chefmaison|monchef|instachef|miummium|talabat|deliveroo|careem|noon|zomato)\b")
STOPW = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "near", "me", "with", "on", "is", "your"}
def tokset(k): return frozenset(t for t in k.split() if t not in STOPW)
SERVICE = re.compile(r"\b(chef|chefs|cook|cooks|catering|caterer|caterers|cater|meal prep|meal plan|private dining|dinner at home|home dining|personal chef|bartender|grazing|canap|buffet catering|bbq catering)\b")

# ---- ownership --------------------------------------------------------------
owner = {}
active = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    io = p.get("intent_owner") or {}
    pk = norm(io.get("primary_keyword") or "")
    subs = [norm(s) for s in io.get("subkeywords") or []]
    if pk: owner[pk] = (url, "primary")
    for s in subs: owner.setdefault(s, (url, "sub"))
    active[url] = {"primary": pk, "subs": subs, "silo": p.get("silo"), "type": p.get("page_type"), "raw_primary": io.get("primary_keyword"), "raw_subs": list(io.get("subkeywords") or [])}

def vol(k): return (ads.get(k) or {}).get("search_volume") or 0
def months(k):
    ms = (ads.get(k) or {}).get("monthly_searches") or []
    return [(m.get("year"), m.get("month"), m.get("search_volume") or 0) for m in ms]

# ---- per page verdict ----------------------------------------------------------
page_rows = []
for url, a in active.items():
    if not a["primary"]: continue
    pv = vol(a["primary"]); subv = [(s, vol(s)) for s in a["subs"]]
    best_sub = max(subv, key=lambda x: x[1]) if subv else (None, 0)
    off = [s for s, v in subv if OFF.search(s) and v >= 50]
    ms = months(a["primary"]); peak = max(ms, key=lambda m: m[2]) if ms else None
    seasonal = bool(ms) and peak and peak[2] >= 3 * max(1, sum(m[2] for m in ms) / len(ms))
    verdict, why = "ok", ""
    if pv == 0 and best_sub[1] >= 50:
        verdict, why = "primary has no measured demand — a subkeyword does", f"'{best_sub[0]}' {best_sub[1]}/mo is on this page as a sub"
    elif pv == 0:
        verdict, why = "no measured demand for the primary", "nothing on the page shows UAE volume; keep on intent or find a phrase with demand"
    elif pv < 50 and best_sub[1] > pv * 3:
        verdict, why = "sub outweighs the primary", f"'{best_sub[0]}' {best_sub[1]}/mo vs primary {pv}/mo"
    if off: why = (why + " · " if why else "") + "off-intent phrases logged: " + ", ".join(off)
    if off and verdict == "ok": verdict = "off-intent subkeywords"
    page_rows.append({"url": url, "silo": a["silo"], "type": a["type"], "primary": a["raw_primary"], "primary_volume": pv, "kd": kd.get(a["primary"]), "intent": intent.get(a["primary"]),
                      "subs_volume_total": sum(v for _, v in subv), "subs_with_volume": sum(1 for _, v in subv if v), "best_sub": best_sub[0], "best_sub_volume": best_sub[1],
                      "off_intent_subs": off, "seasonal_peak": f"{peak[0]}-{peak[1]:02d}" if seasonal and peak else None, "verdict": verdict, "why": why})

# ---- demand pool: every phrase with UAE volume, from everywhere ------------------
pool = {}
def addp(k, v, src, extra=None):
    k = norm(k)
    if not k or v is None: return
    e = pool.setdefault(k, {"kw": k, "volume": 0, "sources": set(), "competitors": {}, "kd": None, "cpc": None, "intent": None})
    e["volume"] = max(e["volume"], v or 0); e["sources"].add(src)
    if extra:
        for kk, vv in extra.items():
            if vv is not None and e.get(kk) in (None, {}) and kk != "competitors": e[kk] = vv
for k, r in ads.items(): addp(k, r.get("search_volume"), "contract", {"cpc": r.get("cpc")})
for it in load("keyword_suggestions.json", []) + load("related_keywords.json", []) + (load("keyword_ideas.json", {}).get("items") or []):
    kwd = it.get("keyword_data") or it
    k = kwd.get("keyword"); ki = kwd.get("keyword_info") or {}; kp = kwd.get("keyword_properties") or {}; si = kwd.get("search_intent_info") or {}
    if k: addp(k, ki.get("search_volume"), "dataforseo-labs", {"kd": kp.get("keyword_difficulty"), "cpc": ki.get("cpc"), "intent": si.get("main_intent")})
for dom, items in comp.items():
    for it in items:
        kwd = it["keyword_data"]; ki = kwd.get("keyword_info") or {}; se = it["ranked_serp_element"]["serp_item"]
        k = kwd["keyword"]; addp(k, ki.get("search_volume"), "competitor", {"kd": (kwd.get("keyword_properties") or {}).get("keyword_difficulty"), "intent": (kwd.get("search_intent_info") or {}).get("main_intent")})
        pool[norm(k)]["competitors"][dom] = se.get("rank_absolute")
for r in ranked:
    kwd = r["keyword_data"]; ki = kwd.get("keyword_info") or {}
    addp(kwd["keyword"], ki.get("search_volume"), "we-rank")

owned_sets = {}
for k, (u, role) in owner.items(): owned_sets.setdefault(tokset(k), (u, role, k))
rows = []
for k, e in pool.items():
    if e["volume"] < 10: continue
    if len(k.split()) < 2 or BRAND.search(k) or COMPETITOR_BRANDS.search(k) or (e.get("intent") == "navigational"): continue
    relevant = bool(SERVICE.search(k)) and not OFF.search(k)
    own = owner.get(k)
    variant_of = None
    if not own and tokset(k) in owned_sets:
        u, role, ok = owned_sets[tokset(k)]; own = (u, f"variant of “{ok}” ({role})"); variant_of = ok
    rows.append({"kw": k, "volume": e["volume"], "kd": e["kd"], "cpc": e["cpc"], "intent": e["intent"], "sources": sorted(e["sources"]), "competitors": e["competitors"],
                 "owner": own[0] if own else None, "role": own[1] if own else None, "relevant": relevant, "off_intent": bool(OFF.search(k)), "variant_of": variant_of})
rows.sort(key=lambda r: -r["volume"])

ranked_rows = [{"kw": r["keyword_data"]["keyword"], "volume": (r["keyword_data"].get("keyword_info") or {}).get("search_volume"), "position": r["ranked_serp_element"]["serp_item"].get("rank_absolute"), "url": r["ranked_serp_element"]["serp_item"].get("relative_url")} for r in ranked]

stats = {
    "pages": len(page_rows), "primaries_with_volume": sum(1 for r in page_rows if r["primary_volume"]), "primary_volume_total": sum(r["primary_volume"] for r in page_rows),
    "verdict_counts": dict(collections.Counter(r["verdict"] for r in page_rows)), "off_intent_pages": sum(1 for r in page_rows if r["off_intent_subs"]),
    "pool_relevant_unowned": sum(1 for r in rows if r["relevant"] and not r["owner"]), "pool_relevant_unowned_volume": sum(r["volume"] for r in rows if r["relevant"] and not r["owner"]),
    "we_rank": len(ranked_rows), "we_rank_top20": sum(1 for r in ranked_rows if (r["position"] or 999) <= 20),
    "competitor_domains": list(comp.keys()),
}
out = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "pages": sorted(page_rows, key=lambda r: (-(r["verdict"] != "ok"), -r["primary_volume"])), "pool": rows[:1500], "ranked": ranked_rows}
(HERE / "demand.json").write_text(json.dumps(out, ensure_ascii=False, default=list))
tpl = (HERE / "demand-template.html").read_text()
(HERE / "demand.html").write_text(tpl.replace("__DATA__", (HERE / "demand.json").read_text().replace("</", "<\\/")))
print(json.dumps(stats, indent=1))

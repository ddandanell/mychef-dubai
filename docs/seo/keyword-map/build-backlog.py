#!/usr/bin/env python3
"""Keyword backlog for mychef.ae — everything found but not yet placed, with a suggested home.

Sources (all local):
  .live/research/autocomplete.jsonl               Google (gl=ae) + Bing (en-AE) autocomplete harvest
  .live/research/semrush-export-2026-08-25.csv    owner's Semrush export (ae rows = UAE volume, us rows = phrasing only)
  docs/seo/mychef-master-keywords.csv             historical proposals never carried into the contract
  docs/seo/myCHEF-AE-SEO-STANDARD.json            what is already owned (excluded) + page capacity
  .live/*.html                                    live pages, to see where a phrase is already said

Writes backlog.json + backlog.html next to this script.  python3 docs/seo/keyword-map/build-backlog.py
"""
import csv, html, json, pathlib, re, collections

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
LIVE = HERE / ".live"
RES = LIVE / "research"
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())
pages = contract["pages"]
BANNED = [b["term"].lower() for b in contract.get("banned_terms", [])] + ["abu dhabi", "bali", "seminyak", "sanur", "jakarta"]
STOP = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "my", "me", "near", "with", "on", "is", "your", "best", "top", "price", "prices", "cost", "how", "much", "does", "do"}
RECRUIT = re.compile(r"\b(job|jobs|salary|salaries|vacancy|vacancies|career|careers|chef hiring|hiring in|recruit\w*|chef wanted|cook wanted|make in dubai|earn|resume|cv|work visa|chef course|chef courses|culinary school|chef training|chef academy)\b")
SALES = re.compile(r"\b(hire|book|booking|price|prices|pricing|cost|costs|packages?|quote|near me|services?|company|companies|rates?|per person|charges|per head|order|delivery|deals?|offers?)\b")
INFO = re.compile(r"\b(how|what|why|when|which|ideas?|menu|menus|recipe|recipes|guide|vs|versus|reddit|tips|meaning|list|examples?)\b")
BRANDS = ["capital catering", "al maha", "dish catering", "kcal", "bateel", "carluccio", "talabat", "deliveroo", "careem", "noon food", "noon minutes", "eat clean", "fitfood", "right bite", "kitopi", "sabor", "gourmet gulf", "flavours catering", "abela", "emirates flight", "chefxchange", "takein", "cook & tap", "chef xchange", "yalla", "lulu", "spinneys", "waitrose", "carrefour", "burj al arab", "emirates palace", "atlantis", "jumeirah beach hotel", "graze kitchen"]
# head-term -> hub, used as a boost so a generic sales phrase lands on the commercial owner, not a blog post
HEADS = [("private chef", "/private-chef-dubai"), ("personal chef", "/private-chef-dubai"), ("chef at home", "/private-chef-dubai"), ("home chef", "/private-chef-dubai"), ("private cook", "/private-chef-dubai"), ("personal cook", "/private-chef-dubai"),
         ("meal prep", "/weekly-meal-prep-dubai"), ("wedding", "/wedding-catering-dubai"), ("corporate", "/corporate"), ("office", "/office-catering-dubai"), ("birthday", "/birthday-catering-dubai"),
         ("yacht", "/yachts"), ("villa", "/villas-private-residences"), ("bbq", "/bbq-catering-dubai"), ("buffet", "/buffet-catering-dubai"), ("canape", "/canape-catering-dubai"), ("iftar", "/iftar-catering-dubai"),
         ("ramadan", "/ramadan-catering-dubai"), ("party", "/private-party-catering-dubai"), ("catering", "/catering-dubai")]
COMMERCIAL_TYPES = {"Commercial landing", "Location landing", "Homepage"}
GUIDE_TYPES = {"Blog post", "Guide / comparison"}

import unicodedata as _ud
def _deaccent(s): return "".join(c for c in _ud.normalize("NFKD", s or "") if not _ud.combining(c))
def norm(s):
    s = _deaccent(s or "")
    return re.sub(r"\s+", " ", re.sub(r"[’'`]", "", (s or "").replace("-", " ").replace("–", " "))).strip().lower()
def has(text, phrase):
    p = norm(phrase)
    return bool(p) and re.search(r"(?<![a-z0-9])" + re.escape(p) + r"(?![a-z0-9])", text) is not None
def toks(s): return [t for t in re.findall(r"[a-z0-9]+", norm(s)) if t not in STOP]

# ---- what is already owned --------------------------------------------------
owned = {}
active = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    io = p.get("intent_owner") or {}
    pk = norm(io.get("primary_keyword") or "")
    subs = [norm(s) for s in io.get("subkeywords") or []]
    if pk: owned[pk] = url
    for s in subs: owned.setdefault(s, url)
    active[url] = {"primary": pk, "subs": subs, "room": max(0, (io.get("subkeyword_cap") or 8) - len(subs)), "silo": p.get("silo"), "type": p.get("page_type"),
                   "tokens": set(toks(pk)) | set(toks(url.replace("-", " ").replace("/", " "))), "subtoks": set(t for s in subs for t in toks(s))}

# ---- live bodies (where is a phrase already said) --------------------------
def strip(h):
    h = re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", " ", h, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))
bodies = {}
for url in active:
    f = LIVE / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    if f.exists():
        h = f.read_text(encoding="utf-8", errors="ignore")
        if len(h) > 200:
            m = re.search(r"<main.*?</main>", h, flags=re.S)
            bodies[url] = norm(strip(m.group(0) if m else h))

# ---- collect candidates -----------------------------------------------------
cands = collections.OrderedDict()
def add(kw, source, **meta):
    k = norm(kw)
    if len(k) < 6 or len(k.split()) < 2: return
    if k in owned: return
    if any(b in k for b in BANNED): return
    c = cands.setdefault(k, {"kw": k, "sources": set(), "seed_urls": set(), "vol_ae": None, "vol_us": None, "kd": None, "cpc": None})
    c["sources"].add(source)
    for key, v in meta.items():
        if v is not None and key in c and (c[key] is None): c[key] = v
        if key == "seed_url" and v: c["seed_urls"].add(v)

ac = RES / "autocomplete.jsonl"
if ac.exists():
    for line in ac.read_text().splitlines():
        try: d = json.loads(line)
        except Exception: continue
        for s in d.get("suggestions") or []:
            if norm(s) == norm(d["q"]) and d.get("seed_url"): continue  # the seed itself
            add(s, "google-autocomplete" if d["engine"] == "google" else "bing-autosuggest", seed_url=d.get("seed_url"))
sx = RES / "semrush-export-2026-08-25.csv"
if sx.exists():
    for r in csv.DictReader(open(sx)):
        v = int(r["Volume"]) if r.get("Volume", "").strip().isdigit() else None
        if r["Database"] == "ae": add(r["Keyword"], "semrush-ae", vol_ae=v, kd=r.get("Keyword Difficulty"), cpc=r.get("CPC (USD)"))
        elif r["Database"] == "us": add(r["Keyword"], "semrush-us", vol_us=v)
for r in csv.DictReader(open(ROOT / "docs/seo/mychef-master-keywords.csv")):
    if r["role"] in ("Secondary", "Long-tail", "Proposed", "Research"):
        add(r["keyword"], "historical-master", seed_url=r["url"])

# ---- classify + suggest ------------------------------------------------------
def intent(k):
    if RECRUIT.search(k): return "recruitment"
    if any(re.search(r"\b" + re.escape(b) + r"\b", k) for b in BRANDS): return "brand / competitor"
    if SALES.search(k): return "sales"
    if INFO.search(k): return "informational"
    return "long-tail"

def suggest(k, seed_urls, it):
    kt = set(toks(k))
    hub = next((u for head, u in HEADS if re.search(r"\b" + re.escape(head) + r"\b", k) and u in active), None)
    scored = []
    for url, a in active.items():
        if a["type"] in ("Chef profile", "Utility / untargeted", "Brand / utility"): continue
        s = 3 * len(kt & a["tokens"]) + 1 * len(kt & a["subtoks"])
        if url in seed_urls: s += 4
        if a["primary"] and has(k, a["primary"]): s += 6
        if url == hub: s += 3
        if it in ("sales", "long-tail") and a["type"] in GUIDE_TYPES: s -= 4
        if it == "informational" and a["type"] in GUIDE_TYPES: s += 3
        if it in ("sales", "long-tail") and a["type"] in COMMERCIAL_TYPES: s += 1
        if s > 0: scored.append((s, url))
    scored.sort(key=lambda x: (-x[0], x[1]))
    return [u for _, u in scored[:3]]

rows = []
for k, c in cands.items():
    it = intent(k)
    if it == "recruitment": sugg = ["/become-a-mychef"]
    else: sugg = suggest(k, c["seed_urls"], it)
    said = [u for u, b in bodies.items() if has(b, k)][:5]
    rows.append({"kw": k, "intent": it, "sources": sorted(c["sources"]), "vol_ae": c["vol_ae"], "vol_us": c["vol_us"], "kd": c["kd"], "cpc": c["cpc"],
                 "suggested": sugg[0] if sugg else None, "alternatives": sugg[1:], "room": active[sugg[0]]["room"] if sugg else None,
                 "silo": active[sugg[0]]["silo"] if sugg else "No obvious home", "already_said_on": said, "seeds": sorted(c["seed_urls"])[:3]})

order = {"sales": 0, "long-tail": 1, "informational": 2, "brand / competitor": 3, "recruitment": 4}
rows.sort(key=lambda r: (order[r["intent"]], -(r["vol_ae"] or 0), r["kw"]))
stats = {
    "total": len(rows), "by_intent": dict(collections.Counter(r["intent"] for r in rows)),
    "by_source": dict(collections.Counter(s for r in rows for s in r["sources"])),
    "with_ae_volume": sum(1 for r in rows if r["vol_ae"]), "already_said": sum(1 for r in rows if r["already_said_on"]),
    "no_home": sum(1 for r in rows if not r["suggested"]),
}
by_page = collections.defaultdict(list)
for r in rows:
    if r["suggested"]: by_page[r["suggested"]].append(r["kw"])
stats["pages_with_suggestions"] = len(by_page)
(HERE / "backlog.json").write_text(json.dumps({"generated": __import__("datetime").datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "rows": rows,
                                               "capacity": {u: {"room": a["room"], "primary": a["primary"], "silo": a["silo"]} for u, a in active.items()}}, ensure_ascii=False))
tpl = (HERE / "backlog-template.html").read_text()
(HERE / "backlog.html").write_text(tpl.replace("__DATA__", (HERE / "backlog.json").read_text().replace("</", "<\\/")))
print(json.dumps(stats, indent=1))

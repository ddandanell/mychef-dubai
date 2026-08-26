#!/usr/bin/env python3
"""Fill every active page's subkeyword slots (cap 8) with the best unowned phrase — one owner per phrase.

Reads backlog.json (the research pool: autocomplete, Semrush export, historical master) and the
SEO contract; writes the contract back with new subkeywords and a note per addition, plus
fill-report.json. Nothing on the website changes — the contract is the plan writers follow.

Rules (all enforced):
  * a phrase is owned by exactly one page; existing doubles are resolved to the best-fitting page
  * never a banned term, never recruitment or competitor intent
  * a phrase that contains ANOTHER page's primary can only live on that page (no cross-page cannibalisation)
  * no two subs on one page with the same word set ("wedding catering dubai price" vs "wedding catering price dubai")
  * pages without a primary (chef profiles, utility pages) are left untargeted by decision

    python3 docs/seo/keyword-map/fill-subkeywords.py            # dry run, prints the plan
    python3 docs/seo/keyword-map/fill-subkeywords.py --apply    # writes the contract
"""
import json, pathlib, re, sys, collections, datetime

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
CONTRACT = ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json"
APPLY = "--apply" in sys.argv
contract = json.loads(CONTRACT.read_text())
pages = contract["pages"]
backlog = json.loads((HERE / "backlog.json").read_text())
BANNED = [b["term"].lower() for b in contract.get("banned_terms", [])] + ["abu dhabi", "bali"]
BANNED_WORDS = re.compile(r"\b(cheap|cheapest|affordable|budget|inexpensive|low cost|low-cost|economical|discount|discounted|free|mystery dining|executive chef|years of experience)\b")
GEO = re.compile(r"\b(uk|usa|us|america|american|london|manchester|singapore|qatar|doha|saudi|riyadh|jeddah|oman|muscat|bahrain|kuwait|egypt|cairo|jordan|turkey|istanbul|europe|australia|sydney|melbourne|canada|toronto|new york|nyc|los angeles|paris|texas|florida|bali|seminyak|jakarta|india|mumbai|delhi|pakistan|karachi|lahore|sharjah|ajman|abu dhabi|al ain|ras al khaimah|fujairah|umm al quwain|al quwain|riyadh)\b")
# words our pages legitimately talk about; a phrase with unknown words beyond these is a brand, a place or a different product
VOCAB = set("""private personal chef chefs cook cooks cooking catering cater caterer caterers caterering food foods meal meals dinner dinners dining dine lunch lunches breakfast brunch supper feast banquet buffet buffets canape canapes finger platter platters grazing station stations live bbq barbecue grill grilled menu menus tasting course courses plated sharing family kids children baby shower birthday wedding weddings engagement anniversary party parties celebration celebrations event events corporate office business staff employee team conference exhibition launch gala reception cocktail cocktails mocktail mocktails bar bartender drinks tea coffee dessert desserts cake cakes sweets pastry halal vegan vegetarian jain keto healthy gluten free dairy nut allergy sugar organic indian arabic arabian lebanese emirati mediterranean italian asian japanese sushi chinese thai filipino greek spanish turkish villa villas apartment apartments home house residence residences yacht yachts boat marina beach desert garden terrace rooftop pool poolside outdoor indoor luxury fine premium exclusive romantic proposal date night couples group small large big intimate weekly monthly daily full part time hire hiring book booking price prices pricing cost costs rate rates quote packages package deal deals offer offers service services company companies provider providers agency near me around best top good local professional experienced expert licensed trusted reliable per person head guest guests people pax delivery drop off dropoff set up setup ramadan iftar suhoor eid diwali christmas new year nye valentines mothers fathers national day festive holiday holidays season seasonal weekend tourist visitor expat plan planning planner checklist guide ideas tips how much what where when why which""".split())
SYN = {"lebanese": "/arabic-catering-dubai", "emirati": "/arabic-catering-dubai", "middle eastern": "/arabic-catering-dubai", "arabian": "/arabic-catering-dubai", "japanese": "/sushi-catering-dubai", "thai": "/asian-catering-dubai", "chinese": "/asian-catering-dubai", "filipino": "/asian-catering-dubai", "korean": "/asian-catering-dubai", "greek": "/mediterranean-catering-dubai", "spanish": "/mediterranean-catering-dubai", "turkish": "/mediterranean-catering-dubai", "gluten free": "/allergy-safe-catering-dubai", "gluten-free": "/allergy-safe-catering-dubai", "nut free": "/allergy-safe-catering-dubai", "dairy free": "/allergy-safe-catering-dubai", "allergy": "/allergy-safe-catering-dubai", "live station": "/live-cooking-stations-dubai", "live cooking": "/live-cooking-stations-dubai", "grazing": "/grazing-table-dubai", "cocktail": "/cocktail-party-catering-dubai", "mocktail": "/bar-services-dubai", "bartender": "/bar-services-dubai", "desert": "/desert-dining-dubai", "romantic": "/romantic-dinner-dubai", "proposal": "/proposal-dinner-dubai", "tasting menu": "/tasting-menu-dubai", "chefs table": "/chefs-table-dubai", "chef's table": "/chefs-table-dubai", "cooking class": "/private-cooking-classes-dubai", "cooking classes": "/private-cooking-classes-dubai", "gift": "/gift-cards", "office lunch": "/business-lunch-catering-dubai", "working lunch": "/business-lunch-catering-dubai", "drop off": "/drop-off-catering-dubai", "drop-off": "/drop-off-catering-dubai", "delivery": "/drop-off-catering-dubai", "brunch": "/brunch-catering-dubai", "breakfast": "/breakfast-catering-dubai", "suhoor": "/suhoor-catering-dubai", "iftar": "/iftar-catering-dubai", "ramadan": "/ramadan-catering-dubai", "eid": "/eid-catering-dubai", "diwali": "/diwali-catering-dubai", "christmas": "/christmas-catering-dubai", "new year": "/new-year-catering-dubai", "nye": "/new-year-catering-dubai", "national day": "/uae-national-day-catering-dubai", "baby shower": "/baby-shower-catering-dubai", "afternoon tea": "/afternoon-tea-catering-dubai", "high tea": "/afternoon-tea-catering-dubai", "gala": "/gala-dinner-catering-dubai", "conference": "/conference-catering-dubai", "exhibition": "/exhibition-catering-dubai", "product launch": "/product-launch-catering-dubai", "staff meal": "/staff-meals-catering-dubai", "employee meal": "/staff-meals-catering-dubai", "meal plan": "/weekly-meal-prep-dubai", "meal prep": "/weekly-meal-prep-dubai", "postpartum": "/postpartum-meal-prep-dubai", "fitness": "/fitness-meal-prep-dubai", "keto": "/wellness-meal-prep-dubai", "healthy": "/wellness-meal-prep-dubai", "jain": "/jain-catering-dubai", "halal": "/halal-catering-dubai", "vegan": "/vegan-catering-dubai", "vegetarian": "/vegetarian-catering-dubai", "sushi": "/sushi-catering-dubai", "italian": "/italian-catering-dubai", "indian": "/indian-catering-dubai", "mediterranean": "/mediterranean-catering-dubai", "canape": "/canape-catering-dubai", "canapé": "/canape-catering-dubai", "finger food": "/canape-catering-dubai", "bbq": "/bbq-catering-dubai", "barbecue": "/bbq-catering-dubai", "buffet": "/buffet-catering-dubai", "yacht": "/yachts", "boat": "/yachts", "villa": "/villas-private-residences", "apartment": "/apartment-private-dining-dubai", "wedding": "/wedding-catering-dubai", "birthday": "/birthday-catering-dubai", "corporate": "/corporate", "office": "/office-catering-dubai", "private party": "/private-party-catering-dubai", "house party": "/private-party-catering-dubai", "party": "/private-party-catering-dubai", "full time": "/full-time-private-chef-dubai", "full-time": "/full-time-private-chef-dubai", "part time": "/part-time-private-chef-dubai", "part-time": "/part-time-private-chef-dubai", "holiday villa": "/tourist-villa-chef-dubai", "tourist": "/tourist-villa-chef-dubai", "personal chef": "/private-chef-dubai", "private chef": "/private-chef-dubai", "private cook": "/private-chef-dubai", "personal cook": "/private-chef-dubai", "chef at home": "/private-chef-dubai", "home chef": "/private-chef-dubai", "catering": "/catering-dubai"}
JUNK = re.compile(r"\b(contact number|phone number|reviews?|address|login|wikipedia|meaning|pdf|ppt|images?|photos?|logo|salary|jobs?|vacancy|careers?|reddit|quora|instagram|facebook|linkedin|tiktok|youtube|app)\b")
STOP = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "my", "me", "near", "with", "on", "is", "your", "it", "how", "much", "does", "do", "cost", "costs", "price", "prices", "pricing", "best", "top", "hire", "book", "service", "services", "company", "companies", "packages", "package", "rates", "get", "find", "guide", "list", "ideas", "tips", "open", "good"}
PRICEY = re.compile(r"\b(price|prices|pricing|cost|costs|how much|rates|charges|per person|per head)\b")
SERVICE = re.compile(r"\b(chef|chefs|cook|cooks|cooking|cater|caters|catering|caterer|caterers|buffet|buffets|canap[eé]s?|finger food|bbq|barbecue|grill|menu|menus|meal|meals|dinner|dinners|lunch|lunches|brunch|breakfast|iftar|suhoor|food|dining|dine|grazing|station|stations|bartender|bartending|mocktail|cocktail|dessert|desserts|cake|cakes|afternoon tea|high tea|feast|banquet|tasting|platter|platters|meal prep|kitchen)\b")
OFFTOPIC = re.compile(r"\b(restaurant|restaurants|hotel|hotels|cafe|cafes|bakery|bakeries|supermarket|grocery|mall|resort|resorts|airbnb|for rent|for sale|rent|visa|flight|flights|airport|plane|tickets?|show|shows|deals?|places|spots|ladies night|happy hour|buffet in dubai|brunch in dubai|dinner in dubai|lunch in dubai|breakfast in dubai|dinner offer|food offer|recipe|recipes|calories|near me open)\b")

def norm(s): return re.sub(r"\s+", " ", re.sub(r"[’'`]", "", (s or "").replace("-", " ").replace("–", " "))).strip().lower()
def has(text, phrase):
    p = norm(phrase)
    return bool(p) and re.search(r"(?<![a-z0-9])" + re.escape(p) + r"(?![a-z0-9])", text) is not None
def toks(s): return [t for t in re.findall(r"[a-z0-9]+", norm(s)) if t not in STOP]
def tokset(s): return frozenset(toks(s))

# ---- volumes (private-chef lock table) ----------------------------------------
vol = {}
for m in re.finditer(r"keyword: '([^']+)', volume: (\d+)", (ROOT / "src/content/privateChefCluster.ts").read_text()):
    vol[m.group(1).lower()] = int(m.group(2))

# ---- active pages ------------------------------------------------------------
active = {}
for url, p in pages.items():
    idx = p.get("indexation") or {}
    if idx.get("redirect_to") or not (idx.get("robots") or {}).get("index", True): continue
    io = p.get("intent_owner") or {}
    pk = norm(io.get("primary_keyword") or "")
    if not pk: continue
    active[url] = {"primary": pk, "subs": [norm(s) for s in io.get("subkeywords") or []], "cap": io.get("subkeyword_cap") or 8,
                   "type": p.get("page_type"), "silo": p.get("silo"),
                   "ptoks": set(toks(pk)), "stoks": set(toks(url.replace("-", " ").replace("/", " ")))}
primaries = {a["primary"]: u for u, a in active.items()}
# tokens present in more than 12% of primaries (catering, chef, private…) say nothing about WHICH page
_df = collections.Counter(t for a in active.values() for t in a["ptoks"])
GENERIC = {t for t, n in _df.items() if n / max(1, len(active)) > 0.12}

# ---- live bodies (a phrase already said on the page = the copy already supports it) ----
import html
LIVE = HERE / ".live"
bodies = {}
for url in active:
    f = LIVE / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    if f.exists():
        h = f.read_text(encoding="utf-8", errors="ignore")
        if len(h) > 200:
            h = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S)
            m = re.search(r"<main.*?</main>", h, flags=re.S)
            bodies[url] = norm(html.unescape(re.sub(r"<[^>]+>", " ", m.group(0) if m else h)))

sub_owner = {}
for u, a in active.items():
    for x in a["subs"]:
        if len(x.split()) >= 3: sub_owner.setdefault(x, u)

def containing_primary(k):
    """The page whose primary — or whose 3+-word subkeyword — this phrase contains (longest match), or None."""
    best, owner = None, None
    for pk, u in primaries.items():
        if pk != k and has(k, pk) and (best is None or len(pk) > len(best)): best, owner = pk, u
    for sk, u in sub_owner.items():
        if sk != k and has(k, sk) and (best is None or len(sk) > len(best)): best, owner = sk, u
    return owner

# ---- step 1: resolve doubles --------------------------------------------------
owner_of = collections.defaultdict(list)
for u, a in active.items():
    for s in a["subs"]: owner_of[s].append(u)

def fit(k, url, seed_urls=(), said_on=(), intent="long-tail", vol_ae=None, sources=()):
    a = active[url]; kt = set(toks(k))
    s = 3 * len(kt & a["ptoks"]) + 2 * len(kt & a["stoks"]) + 1 * len(kt & set(t for x in a["subs"] for t in toks(x)))
    if has(k, a["primary"]): s += 6
    # longest matching synonym/head term decides the natural owner
    syn = max((t for t in SYN if re.search(r"\b" + re.escape(t) + r"\b", k)), key=len, default=None)
    if syn and SYN[syn] == url: s += 4
    elif syn and SYN[syn] in active and SYN[syn] != url and a["primary"] not in k: s -= 2
    if url in seed_urls: s += 4
    if url in said_on: s += 5
    pricey = bool(PRICEY.search(k))
    if pricey and PRICEY.search(a["primary"]): s += 5
    if intent == "sales": s += 3
    elif intent == "long-tail": s += 1
    elif intent == "informational": s += (2 if a["type"] in ("Blog post", "Guide / comparison") else -1)
    if intent in ("sales", "long-tail") and a["type"] in ("Blog post", "Guide / comparison") and not (pricey and PRICEY.search(a["primary"])): s -= 4
    v = vol_ae or vol.get(k)
    if v: s += min(v / 10, 4)
    if sources:
        if "google-autocomplete" in sources or "bing-autosuggest" in sources: s += 2
        if "semrush-ae" in sources: s += 3
        if "semrush-us" in sources: s += 1
    if intent == "informational" and re.search(r"\b(guide|ideas?|tips)\b", k) and a["type"] not in ("Blog post", "Guide / comparison"): s -= 4
    return s

report = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "doubles_resolved": [], "added": collections.defaultdict(list), "skipped_full": [], "left_open": {}}
for k, urls in owner_of.items():
    if len(urls) < 2: continue
    said = [u for u in urls if u in bodies and has(bodies[u], k)]
    keep = max(urls, key=lambda u: fit(k, u, said_on=said))
    for u in urls:
        if u != keep:
            active[u]["subs"].remove(k)
            report["doubles_resolved"].append({"kw": k, "kept": keep, "removed_from": u})

# ---- step 2: candidate pool ----------------------------------------------------
owned = set(primaries) | {s for a in active.values() for s in a["subs"]}
pool = []
for r in backlog["rows"]:
    k = norm(r["kw"]).rstrip("?.! ")
    if k in owned or any(b in k for b in BANNED) or BANNED_WORDS.search(k) or JUNK.search(k): continue
    if r["intent"] in ("recruitment", "brand / competitor"): continue
    if not SERVICE.search(k) or OFFTOPIC.search(k): continue
    if len(k.split()) < 2 or len(k.split()) > 8 or len(k) > 60: continue
    if GEO.search(k): continue
    pool.append({"kw": k, "intent": r["intent"], "seeds": set(r.get("seeds") or []), "said": set(r.get("already_said_on") or []), "vol_ae": r.get("vol_ae"), "sources": r["sources"]})

# ---- step 3: global greedy assignment ----------------------------------------
pairs = []
for c in pool:
    k = c["kw"]; cp = containing_primary(k)
    targets = [cp] if cp else list(active)
    for url in targets:
        if url not in active: continue
        a = active[url]
        kt = set(toks(k))
        syn = max((t for t in SYN if re.search(r"\b" + re.escape(t) + r"\b", k)), key=len, default=None)
        distinctive = (kt & a["ptoks"]) - GENERIC
        topical = bool(distinctive) or (syn and SYN[syn] == url) or cp == url or url in c["seeds"] or url in c["said"]
        if not topical: continue
        unknown = kt - VOCAB - a["ptoks"] - a["stoks"]
        if a["type"] == "Location landing":
            if not (kt & (a["stoks"] - {"locations"})): continue   # must name the area, no exceptions
            if unknown: continue                                  # no brand / other-place words at all
        elif len(unknown) >= 2: continue                          # two unknown words = probably a brand or another product
        if re.search(r"\b(tv|settings|remote|manual|electronics|camcorder|speaker|headphones)\b", k): continue
        s = fit(k, url, c["seeds"], c["said"], c["intent"], c["vol_ae"], c["sources"])
        if not cp and s < 6: continue            # weakly related — leave the slot open rather than pad it
        if cp: s += 2                             # belongs to its primary's page
        pairs.append((s, k, url))
pairs.sort(key=lambda x: (-x[0], x[1], x[2]))
taken = set()
for s, k, url in pairs:
    if k in taken: continue
    a = active[url]
    if len(a["subs"]) >= a["cap"]: continue
    ks = tokset(k)
    def jac(x): xs = tokset(x); return len(ks & xs) / max(1, len(ks | xs))
    if ks == tokset(a["primary"]) or any(jac(x) >= 0.75 for x in a["subs"]): continue
    a["subs"].append(k); taken.add(k)
    src = next((c for c in pool if c["kw"] == k), None)
    report["added"][url].append({"kw": k, "score": round(s, 1), "intent": src["intent"], "sources": src["sources"], "vol_ae": src["vol_ae"], "already_said": url in src["said"]})

for url, a in active.items():
    if len(a["subs"]) < a["cap"]: report["left_open"][url] = a["cap"] - len(a["subs"])

# ---- write ------------------------------------------------------------------
stamp = datetime.date.today().isoformat()
if APPLY:
    for url, a in active.items():
        io = pages[url]["intent_owner"]
        notes = io.setdefault("subkeyword_notes", {})
        io["subkeywords"] = list(a["subs"])
        for add in report["added"].get(url, []):
            notes[add["kw"]] = f"{'/'.join(add['sources'])}{' · UAE ' + str(add['vol_ae']) + '/mo' if add['vol_ae'] else ''}{' · already in live copy' if add['already_said'] else ''} · filled {stamp}"
        for kw in list(notes):
            if kw.lower() not in a["subs"] and kw.lower() != a["primary"]: notes.pop(kw)
    CONTRACT.write_text(json.dumps(contract, indent=1, ensure_ascii=False) + "\n")
(HERE / "fill-report.json").write_text(json.dumps(report, indent=1, ensure_ascii=False, default=list))
added_n = sum(len(v) for v in report["added"].values())
full = sum(1 for a in active.values() if len(a["subs"]) >= a["cap"])
print(f"{'APPLIED' if APPLY else 'DRY RUN'}: doubles resolved {len(report['doubles_resolved'])} · added {added_n} subkeywords on {len(report['added'])} pages · pages full {full}/{len(active)} · slots still open {sum(report['left_open'].values())} on {len(report['left_open'])} pages")
for u, n in sorted(report["left_open"].items(), key=lambda x: -x[1])[:12]: print(f"   open {n}: {u}")

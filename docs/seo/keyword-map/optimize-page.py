#!/usr/bin/env python3
"""On-page optimizer — pushes one page's locked keywords into the places the score measures, in its source.

For a URL: resolves the page component through src/routes.tsx, then
  title / description   <SEO title="…"> literal, or title={X.title} → the object X in an imported content module
  H1 / opening          <PageHero title="…" subtitle="…">, title={hero.title} → the hero object, or a literal <h1>
  H2                    the heading above <FaqAccordion> carries the primary
  subkeywords           every sub the live page does not say gets a FAQ — question or answer says the exact phrase;
                        near-identical phrasings ('catering services dubai' / 'catering services in dubai') share one
                        FAQ, one in the question and one in the answer. Answers reuse the page's own facts.
FAQ arrays: `const faqs = [` in the page, or `export const NAME = [` in a content module (items={[...NAME]} / items={NAME}).
Dry run by default; --apply writes. Change log: .live/optimizer-log.jsonl.

    python3 docs/seo/keyword-map/optimize-page.py /catering-dubai [--apply]
    python3 docs/seo/keyword-map/optimize-page.py --all [--apply] [--limit N] [--max-faqs N]
"""
import collections, json, pathlib, re, sys, datetime, html, unicodedata

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
SRC = ROOT / "src"
LOG = HERE / ".live/optimizer-log.jsonl"
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text()); pages = contract["pages"]
mapd = json.loads((HERE / "data.json").read_text())
rowmap = {r["url"]: r for s in mapd["silos"].values() for r in s}
routes_src = (ROOT / "src/routes.tsx").read_text()
imports = {m.group(1): m.group(2) for m in re.finditer(r"^const (\w+): PreloadableComponent = lazyPreloadable\(\(\) => import\('\./(pages/[^']+)'\)\)", routes_src, flags=re.M)}
route_comp = {m.group(1): m.group(2) for m in re.finditer(r'\{\s*path:\s*"([^"]+)"\s*,\s*element:\s*<(\w+)', routes_src)}
APPLY = "--apply" in sys.argv
FAQ_CAP = int(sys.argv[sys.argv.index("--faq-cap") + 1]) if "--faq-cap" in sys.argv else 8
MAX_FAQS = int(sys.argv[sys.argv.index("--max-faqs") + 1]) if "--max-faqs" in sys.argv else 10
BANNED = re.compile(r"\b(cheap|affordable|budget|world.class|unforgettable|elevate|bespoke culinary|culinary journey|culinary excellence|finest chefs|passion for food|seamless experience)\b", re.I)
STOP = {"dubai", "in", "the", "a", "an", "for", "of", "uae", "and", "to", "at", "near", "me", "with", "on", "is", "your", "our"}
ACR = {"bbq": "BBQ", "uae": "UAE", "difc": "DIFC", "jbr": "JBR", "jlt": "JLT", "jvc": "JVC", "nye": "NYE", "vip": "VIP", "mychef": "myCHEF", "fodmap": "FODMAP", "faq": "FAQ", "faqs": "FAQs"}

def deaccent(s): return "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))
def norm(s): return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9 ]", "", deaccent(html.unescape(s or "")).lower().replace("-", " ").replace("’", "").replace("'", ""))).strip()
def has(text, k): return bool(k) and re.search(r"(?<![a-z0-9])" + re.escape(norm(k)) + r"(?![a-z0-9])", norm(text)) is not None
def titlecase(k):
    small = {"and", "in", "for", "of", "at", "to", "the", "a", "on", "with", "vs", "v", "or", "per"}
    return " ".join(ACR.get(x, x if (i and x in small) else x.capitalize()) for i, x in enumerate(k.split()))
PROPER = {"dubai": "Dubai", "jumeirah": "Jumeirah", "marina": "Marina", "palm": "Palm", "emirates": "Emirates", "ranches": "Ranches", "downtown": "Downtown", "hills": "Hills", "barsha": "Barsha", "suqeim": "Suqeim", "bluewaters": "Bluewaters", "ramadan": "Ramadan", "eid": "Eid", "diwali": "Diwali", "christmas": "Christmas", "holi": "Holi", "valentines": "Valentine's", "italian": "Italian", "indian": "Indian", "arabic": "Arabic", "asian": "Asian", "mediterranean": "Mediterranean", "japanese": "Japanese", "lebanese": "Lebanese", "emirati": "Emirati", "thai": "Thai", "chinese": "Chinese", "greek": "Greek", "filipino": "Filipino", "jain": "Jain", "mychef": "myCHEF", "arabian": "Arabian", "bluewaters": "Bluewaters", "island": "Island", "business": "Business", "bay": "Bay", "al": "Al", "umm": "Umm", "creek": "Creek", "harbour": "Harbour", "jumeirah": "Jumeirah", "meydan": "Meydan", "mirdif": "Mirdif", "barari": "Barari", "springs": "Springs", "meadows": "Meadows", "lakes": "Lakes", "greens": "Greens", "silicon": "Silicon", "oasis": "Oasis", "motor": "Motor", "city": "City", "sports": "Sports", "festival": "Festival", "deira": "Deira", "karama": "Karama", "satwa": "Satwa", "ramadan": "Ramadan"}
def sentence(k): return " ".join(ACR.get(x, PROPER.get(x, x)) for x in k.split())
from itertools import permutations
def any_order_re(k):
    """the phrase's words in any order, with small fillers between — for 2–4 word phrases"""
    t = norm(k).split()
    if not 2 <= len(t) <= 4: return None
    alts = "|".join(JOIN.join(tokre(x) for x in perm) for perm in permutations(t))
    return re.compile(r"(?<![a-z0-9])(?:" + alts + r")(?![a-z0-9])", re.I)
def cap(s):
    s = re.sub(r"(?<![a-z])i(?![a-z])", "I", s) if s else s
    return s[:1].upper() + s[1:] if s else s
def tokre(x):
    x = re.escape(x)
    return x + r"(?:s|es)?" if not x.endswith("s") else x[:-1] + r"s?"
JOIN = r"(?:[\s,\-–]+(?:(?:in|for|at|across|the|of|to|&|and|with)[\s,\-–]+)?)"
JOIN1 = r"(?:[\s,\-–]+(?:(?:in|for|at|across|the|of|to|&|and|with)[\s,\-–]+)?(?:[A-Za-zé'’]+[\s,\-–]+(?:(?:in|for|at|across|the|of|to|&|and|with)[\s,\-–]+)?){0,3})"   # up to three extra words"""
def variant_re(k):
    t = norm(k).split()
    return re.compile(r"(?<![a-z0-9])" + JOIN.join(tokre(x) for x in t) + r"(?![a-z0-9])", re.I)
def loose_re(k):
    t = norm(k).split()
    return re.compile(r"(?<![a-z0-9])" + JOIN1.join(tokre(x) for x in t) + r"(?![a-z0-9])", re.I)

def keep_spelling(rep, span):
    """use the page's own spelling of a token — accents (Canapé) and capitals (Arabian Ranches)"""
    for w in re.findall(r"[A-Za-zÀ-ÿ]+", span):
        d = deaccent(w).lower()
        if d != w.lower() or (w[:1].isupper() and len(w) > 2 and d not in ("and", "for", "the", "with", "in", "at", "of", "to")):
            rep = re.sub(r"(?<![A-Za-zÀ-ÿ])" + re.escape(d) + r"(?![A-Za-zÀ-ÿ])", lambda m: w if (w[:1].isupper() and m.group(0)[:1].isupper()) or d != w.lower() else m.group(0), rep, flags=re.I)
    return rep
def place_primary(text, k, mode):
    if has(text, k): return text, "already"
    flat = deaccent(text)  # same length as text → spans line up
    m = variant_re(k).search(flat)
    if not m:
        ao = any_order_re(k); m = ao.search(flat) if ao else None
    loose = False
    if not m and mode in ("title", "h1", "h2"):
        m = loose_re(k).search(flat); loose = bool(m)
    if m:
        rep = titlecase(k) if mode in ("title", "h1", "h2") else sentence(k)
        if m.group(0)[:1].isupper() and mode not in ("title", "h1", "h2"): rep = cap(rep)
        span = text[m.start():m.end()]
        rep = keep_spelling(rep, span)
        if loose:
            # words in the run that are not part of the phrase become a tail: "BBQ Catering & Live Barbecue Stations in Dubai" → "BBQ Catering Dubai — Live Barbecue Stations"
            toks = set(norm(k).split()); fill = {"in", "for", "at", "across", "the", "of", "to", "and", "with"}
            extras = [w for w in re.findall(r"[A-Za-zÀ-ÿ'’]+", span) if norm(w) not in toks and norm(w) not in fill and not (norm(w).rstrip("s") in toks or norm(w) + "s" in toks)]
            if extras: rep = rep + " — " + " ".join(extras)
        return text[:m.start()] + rep + text[m.end():], "variant→exact" if not loose else "loose→exact"
    if mode == "title":
        rest = re.sub(r"\s*\|\s*myCHEF\s*$", "", text).strip()
        cand = f"{titlecase(k)} | {rest} | myCHEF"
        while len(cand) > 65 and " | " in rest:
            rest = rest.rsplit(" | ", 1)[0]; cand = f"{titlecase(k)} | {rest} | myCHEF"
        if len(cand) > 65 and ":" in rest: rest = rest.split(":")[0].strip(); cand = f"{titlecase(k)} | {rest} | myCHEF"
        if len(cand) > 65: cand = f"{titlecase(k)} | myCHEF"
        return cand, "prepended"
    if mode == "description":
        cand = f"{titlecase(k)} — {text}" if text else f"{titlecase(k)} by myCHEF."
        if len(cand) > 160: cand = cand[:157].rsplit(" ", 1)[0].rstrip(",;:—- ") + "…"
        return cand, "prepended"
    if mode == "h1":
        kt = set(norm(k).split()) - {"dubai", "in", "for", "the", "a", "and", "of", "at", "to", "with"}
        tt = set(norm(text).split())
        overlap = len(kt & tt) / max(1, len(kt))
        if overlap >= 0.5:
            parts = re.split(r"\s*[:—|]\s*|\s+—\s+", text)
            tail = next((p for p in reversed(parts) if p and len((set(norm(p).split()) & kt)) / max(1, len(kt)) < 0.5), "")
            return (f"{titlecase(k)} — {tail}" if tail else titlecase(k)), "rebuilt"
        return f"{titlecase(k)}: {text}", "prepended"
    if mode == "opening": return f"{titlecase(k)} by myCHEF — {text}", "prepended"
    if mode == "h2":
        if re.search(r"(?i)\b(question|questions|faq|faqs|ask|asked)\b", text): return f"{titlecase(k)}: the questions we get before a booking", "prepended"
        return f"{titlecase(k)}: {text}", "prepended"
    return text, "skip"

# ---- source helpers -----------------------------------------------------------------------
def content_modules(page_src):
    mods = []
    for m in re.finditer(r"from '(?:@|\.\.)/content/([\w/-]+)'", page_src):
        f = SRC / "content" / (m.group(1) + ".ts")
        if f.exists(): mods.append(f)
    return mods

def find_obj_field(mods, obj, field):
    """Return (file, start, end, value) of `field: '…'` inside `export const obj = {` in one of the modules."""
    for f in mods:
        s = f.read_text(encoding="utf-8")
        m = re.search(r"export const " + re.escape(obj) + r"\b[^=]*=\s*\{", s)
        if not m: continue
        depth, i = 0, m.end() - 1
        while i < len(s):
            if s[i] == "{": depth += 1
            elif s[i] == "}":
                depth -= 1
                if depth == 0: break
            i += 1
        body = s[m.end():i]
        fm = re.search(r"(?m)^\s*" + re.escape(field) + r":\s*(['\"])((?:\\.|(?!\1).)*)\1", body)
        if fm: return f, m.end() + fm.start(2), m.end() + fm.end(2), fm.group(2)
    return None

def find_array_end(text, name):
    m = re.search(r"(?:(?:export )?const " + re.escape(name) + r"(?::[^=]+)?\s*=\s*\[|^ {2}" + re.escape(name) + r":\s*\[)", text, flags=re.M)
    if not m: return None
    depth, i = 0, m.end() - 1
    while i < len(text):
        c = text[i]
        if c == "[": depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0: return i
        i += 1
    return None

def facts_from(*srcs):
    f = {}
    for src in srcs:
        m = re.findall(r"AED\s?[\d,]+(?:\s?[–-]\s?[\d,]+)?(?:\s?(?:per person|pp|per head|per guest|a month|per service|per day))?", src)
        if m and "price" not in f: f["price"] = m[0]
        areas = [a for a in ("Palm Jumeirah", "Dubai Marina", "Emirates Hills", "Downtown Dubai", "DIFC", "JBR", "Jumeirah", "Arabian Ranches", "Dubai Hills", "Business Bay") if a in src]
        if areas and "areas" not in f: f["areas"] = areas[:3]
    return f

LITERAL = re.compile(r"'((?:[^'\\\n]|\\.){4,}?)'|\"((?:[^\"\\\n]|\\.){4,}?)\"|`([^`]{4,}?)`", re.S)
def prose(src):
    """Only the string literals, kept apart, so neighbouring code can never form a phrase.

    Comments go first: every page carries a KEYWORD LOCK header that quotes all twelve
    subkeywords, and counting that as page copy made every page look already covered.
    """
    src = re.sub(r"/\*.*?\*/", " ", src, flags=re.S)
    src = re.sub(r"(?m)^\s*//.*$", " ", src)
    return " | ".join(next(g for g in m.groups() if g is not None) for m in LITERAL.finditer(src))

def rendered(url):
    """What the page actually says, when a prerender is on disk — the same text the scorer reads."""
    p = ROOT / "dist" / ("index.html" if url == "/" else url.strip("/") + "/index.html")
    if not p.exists(): return None
    h = p.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"<main\b.*?</main>", h, flags=re.S)
    h = re.sub(r"<script.*?</script>|<style.*?</style>", " ", m.group(0) if m else h, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))

CLASSES = [
    ("price",     r"\b(price|prices|pricing|cost|costs|how much|rates|per person|per head|charges)\b"),
    ("near_me",   r"\bnear me\b|\bnearby\b|\bclose to me\b|\bnear by\b"),
    ("packages",  r"\b(packages?|deals?|offers?|plans?)\b"),
    ("booking",   r"\b(book|booking|notice|how far ahead|in advance|advance|deposit|cancel|cancellation|last minute|lead time|best time|when to)\b"),
    ("best",      r"\b(best|top|recommended|luxury|premium|leading)\b"),
    ("menu",      r"\b(menus?|dishes|food ideas|set menu)\b"),
    ("dietary",   r"\b(halal|vegan|vegetarian|gluten|dairy|nut|jain|keto|healthy|allerg|sugar|fodmap)\w*"),
    ("home",      r"\b(villa|home|house|apartment|residence|at home|in home|in-home|yacht|garden|rooftop|poolside|desert|beach)\b"),
    ("corporate", r"\b(corporate|office|business|staff|team|company|companies|conference|meeting|employee)\b"),
    ("occasion",  r"\b(wedding|birthday|party|parties|celebration|anniversary|engagement|shower|graduation|events?|gathering|iftar|eid|christmas|nye)\b"),
    ("equipment", r"\b(equipment|utensils|pots|pans|knives|bring their own|use my kitchen|own kitchen|washing up)\b"),
    ("choose",    r"how to choose|choosing|what to look for|questions to ask|checklist|compare|\bvs\b|difference between"),
    ("chef",      r"\b(chefs?|cooks?|caterers?|service|hire)\b"),
]
def classify(k):
    kk = norm(k)
    for name, pat in CLASSES:
        if re.search(pat, kk): return name
    return "alias"

def group_variants(kws, per_group=3):
    """Group by what the phrase is asking, not by its exact word set.

    Grouping on token sets put "x price" and "x cost per person" in separate FAQs and gave
    three unrelated phrases the same fallback answer three times on one page. One FAQ per
    question type, up to three phrasings in it, shortest first so the question reads well.
    """
    buckets = {}
    for k in kws: buckets.setdefault(classify(k), []).append(k)
    out = []
    for name, _ in CLASSES + [("alias", None)]:
        ks = sorted(dict.fromkeys(buckets.get(name, [])), key=lambda x: (len(x.split()), len(x)))
        # keep a class to two FAQs where it can: one answer per question type reads better than
        # three near-identical ones, and every phrasing still lands in an answer.
        size = max(per_group, -(-len(ks) // 2)) if len(ks) > per_group else per_group
        size = min(size, per_group + 1)
        for i in range(0, len(ks), size): out.append(ks[i:i + size])
    return out

ALT = [
    " If you searched for {rest}, this is the same service.",
    " People also search this as {rest} — same team, same booking.",
    " {rest_cap} land on this page too; it is one service.",
]
QS = {
    "price":     ["What goes into the {k}?", "How is the {k} worked out?", "What decides the {k}?"],
    "near_me":   ["I searched '{k}' — do you cover my area?", "Is there {k}?", "Do you serve my part of Dubai — I looked for {k}?"],
    "packages":  ["What is included in {k}?", "Do you offer {k}?", "How do {k} work?"],
    "best":      ["What makes myCHEF a strong choice for {k}?", "Why book myCHEF for {k}?", "What should I look for in {k}?"],
    "menu":      ["What is on the {k}?", "Can I see the {k}?", "How is the {k} put together?"],
    "booking":   ["How far ahead should I arrange {k}?", "What is the lead time on {k}?", "When should I sort out {k}?"],
    "dietary":   ["Can you handle {k}?", "Do you do {k}?", "Is {k} something you cover?"],
    "home":      ["Do you provide {k}?", "Can you do {k}?", "Is {k} part of what you offer?"],
    "corporate": ["Do you handle {k}?", "Can you take on {k}?", "Do companies book you for {k}?"],
    "occasion":  ["Do you do {k}?", "Can you cater {k}?", "Is {k} something you take on?"],
    "equipment": ["What does {k} involve?", "How does {k} work in my kitchen?", "What do you bring for {k}?"],
    "choose":    ["What should I check on {k}?", "How do I judge {k}?", "What separates a good {k} from a bad one?"],
    "chef":      ["Is {k} the same service as {P}?", "Do you arrange {k}?", "Can I book {k}?"],
    "alias":     ["Is {k} the same as {P}?", "Do you also do {k}?", "Does {k} mean this service?"],
}

HOUSEHOLD = re.compile(r"\b(meal prep|meal plan|meal delivery|weekly|monthly|household|live in|full time|part time|postpartum|confinement|tiffin|daily|family chef|nanny|meals for)\b")
def household(primary):
    """Standing-plan pages, where "guests", "the room" and "clear-down" are the wrong register."""
    return bool(HOUSEHOLD.search(norm(primary)))

ANS2 = {
 "price":     "Two things decide {k1} more than anything else: how many people you are feeding and how much of the work is done in front of them. A drop-off tray for twenty and a plated dinner for twenty are not the same job. Send the headcount, the date and the address and the quote comes back itemised, with 5% VAT on its own line.",
 "packages":  "Think of {k1} as a starting shape rather than a fixed box — a menu length, a service style and a team size that we then move around your date, your kitchen and your guest list. Tell us what you are hosting and we send the nearest format with the changes already priced in.",
 "best":      "Judge {k1} on the boring things: is the chef named and vetted, is the quote itemised, is the food charged at cost, and does one person stay responsible from the menu draft to the last tray leaving your kitchen. That is what we hold ourselves to.",
 "menu":      "Nothing about {k1} is fixed until you say so. We send a draft built on your headcount, the season and the dietary list, you cut and swap what you want, and the final version is the one the chef shops for.",
 "booking":   "For {k1}, the honest answer is: the earlier the better for a Friday, a public holiday or anything in December and Ramadan, and a few days is often enough midweek. Ask even at short notice — you get a straight yes or no on chef availability the same day.",
 "dietary":   "For {k1} the requirement goes on the menu brief before the first draft, not in a note at the end. Dishes are labelled on the day, the chef is briefed per guest, and cross-contact is handled in the kitchen we set up on site.",
 "home":      "With {k1} your address is the venue: we work with the kitchen you have, bring what it lacks, serve on your plates or ours, and clear down so the room goes back to normal. Across {areas} this is the everyday booking.",
 "occasion":  "For {k1} the format follows the room and the running order — canapés while people arrive, a seated main, a station people come back to. Tell us the timings and the guest count and we send the shape we would use and why.",
 "corporate": "For {k1} we work to your clock: set-up window, service window, clear-down, one invoice with a TRN, and dietary requirements tracked per person rather than guessed.",
 "chef":      "With {k1} you are booking a named person, not an agency shift. They are vetted in person, cook a trial, and are matched to your kitchen and your menu; the same chef comes back if you want continuity.",
 "alias":     "Yes — {k1} is this service under another name. Same team, same booking route, same itemised quote.",
}
OPEN = re.compile(r"^(how|what|why|when|where|who|which)\b")
def faq_for(kws, page_primary, facts, seed=0, dup=0):
    """kws: 1–3 phrasings of one question. The question says the shortest; the rest ride in the answer.

    seed varies the wording per page so 150 pages do not ship the same sentence.
    """
    ks = [sentence(k) for k in kws]
    k1 = ks[0]; rest = ks[1:]
    cls = classify(kws[0]); v = seed % 3
    P = sentence(page_primary)
    price = facts.get("price"); areas = ", ".join(facts.get("areas", [])) or "Palm Jumeirah, Dubai Marina, Emirates Hills and Downtown Dubai"
    joined = (" and ".join([", ".join(rest[:-1]), rest[-1]]) if len(rest) > 1 else rest[0]) if rest else ""
    alt = ALT[v].format(rest=joined, rest_cap=cap(joined)) if rest else ""
    # A phrase that already reads as a question becomes the question — wrapping "how do i hire a
    # personal chef" in "Do you arrange …?" produced nonsense on every guide page.
    q = (cap(k1) + "?") if re.match(r"^(how|what|why|when|where|who|which|can|do|does|is|are|should|will|would)\b", norm(k1)) else QS[cls][v].format(k=k1, P=P)
    home_plan = household(page_primary)
    if cls == "price" and home_plan:
        a = f"There is no single number for {k1}: how many people eat at home, how many meals a week you want covered, the diet and how often the chef comes all move it. {('The starting point on this page is ' + price + '. ') if price else ''}Tell us the household size and the days you want covered and you get an itemised weekly figure — ingredients at cost, chef time shown separately.{alt}"
    elif cls == "price":
        a = f"There is no single number for {k1}: guest count, menu, service style and staffing move the figure. {('Our indicative starting point on this page is ' + price + '. ') if price else ''}Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.{alt}"
    elif cls == "near_me":
        a = f"Yes. We cook and serve across Dubai, including {areas}, and we come to you: the kitchen is your villa, apartment, office, venue or yacht. Tell us the address and we confirm the team, travel and set-up time for it.{alt}"
    elif cls == "packages" and home_plan:
        a = f"We work from standing weekly formats — number of meals, days in your kitchen, diet — and shape them around the household instead of selling a fixed box. {('Plans start at ' + price + '. ') if price else ''}Tell us how many people eat at home and how often, and we adjust the closest plan to it.{alt}"
    elif cls == "packages":
        a = f"We start from set formats and adjust them to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. {('Starting points begin at ' + price + '. ') if price else ''}Ask for the format closest to what you are planning and we shape it from there.{alt}"
    elif cls == "best" and home_plan:
        a = f"One vetted chef, one plan, one figure: we do the shopping, cook in your kitchen, label and store everything, and charge ingredients at cost with no markup. The same chef comes back each week, so your diet and your kitchen never have to be explained twice.{alt}"
    elif cls == "best":
        a = f"One team owns the whole event — menu, shopping, cooking on site, service and clear-down — so nothing falls between suppliers. The chefs are vetted and matched to the occasion, ingredients are charged at cost with no markup, and every quote is itemised.{alt}"
    elif cls == "menu" and home_plan:
        a = f"It is planned around the household: what you actually eat, what you avoid, the season, and any medical, training or postnatal needs. You get a draft week to change before anything is confirmed, and it rotates so the same plate does not come back every few days.{alt}"
    elif cls == "menu":
        a = f"It is written for your event, not picked off a list: we start from what you are hosting, the season and any dietary needs, then send a draft you can change before anything is confirmed. Tell us the date and headcount and you get a first draft to react to.{alt}"
    elif cls == "booking":
        a = f"Two to three weeks is comfortable for a full event and about a week for a dinner at home. December, Ramadan and New Year fill earliest — a month is safer for those. Short notice is still worth asking: if a chef is free you get a straight yes or no the same day, not a maybe. A deposit holds the date and the balance falls due after the day.{alt}"
    elif cls == "dietary":
        a = f"Yes. Dietary needs are planned into the menu from the first draft, not bolted on: dishes are labelled, cross-contact is managed in the kitchen we set up on site, and the chef is briefed on every guest requirement before the day.{alt}"
    elif cls == "home":
        a = f"Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave it as we found it. Across {areas} this is our most common booking.{alt}"
    elif cls == "corporate":
        a = f"Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. {('Budgets typically start around ' + price + '. ') if price else ''}One contact, one itemised quote, and the same team every time if you want continuity.{alt}"
    elif cls == "occasion":
        a = f"Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.{alt}"
    elif cls == "equipment":
        a = f"The chef brings their own knives and any specialist kit the menu needs — pans, a grill, chafing dishes, a portable hob — and cooks in your kitchen, using your oven and hob where that is the sensible thing to do. We check the kitchen and the menu beforehand and bring whatever is missing; anything hired in is listed on the quote, and the kitchen is left clean.{alt}"
    elif cls == "choose":
        a = f"Ask four things before you commit. Who actually cooks on the day, and can you see their background? Is the quote itemised — food, chef time, staff, hire and 5% VAT separately — or one lump figure? Who buys the ingredients, and at whose price? And what state is the kitchen left in? Anyone who answers all four in writing is usually the one who turns up as promised.{alt}"
    elif cls == "chef" and home_plan:
        a = f"Yes. Every chef is vetted in person, cooks a trial, and is matched to the household — diet, kitchen, schedule. You keep the same chef so the routine settles, and one contact arranges cover when they are away.{alt}"
    elif cls == "chef":
        a = f"Yes. Every chef on our roster is vetted in person, cooks a trial and is matched to what you need — a one-night dinner, a standing household plan, or a specific cuisine. You deal with one contact; the chef arrives briefed, with a plan for your kitchen and your guests.{alt}"
    elif home_plan:
        a = [f"Yes — same service as {P} under another name. A vetted chef cooks in your kitchen on the days you choose, the shopping is done for you and ingredients are charged at cost. Tell us the household size and how many meals a week you want covered.{alt}",
             f"Yes. People call this several things; what you get is the same: one chef, your kitchen, a week of food planned around your diet, and an itemised figure with ingredients at cost.{alt}",
             f"Yes — different words, one service. We plan the week around what your household eats, cook it in your kitchen and leave it stored and labelled. Tell us how many people eat at home and how often.{alt}"][v]
    else:
        a = [f"Yes — same service as {P}, different words for it. We design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.{alt}",
             f"Yes. It is the same booking as {P} under another name: one team, your address, menu built for the occasion, and an itemised quote before you commit.{alt}",
             f"Yes — people search this several ways and land on the same service. Chefs and staff come to you, the menu is written for your event, and the quote separates food, people and hire.{alt}"][v]
    if dup and cls in ANS2:
        a = ANS2[cls].format(k1=k1, P=P, areas=areas, price=price) + alt
    if OPEN.match(norm(k1)):
        a = re.sub(r"^Yes[.,—-]?\s*(—\s*)?", "", a)
        a = a[:1].upper() + a[1:]
    return cap(q), a

# ---- subkeywords in body sentences ---------------------------------------------------------
# The contract rule stamped on every page is "subkeywords inside sentences only", and the brief
# caps a page at 5-8 FAQs. So missing subs go into a prose paragraph in the page's own intro
# section, not into one FAQ each: it keeps them out of headings and leaves FAQ counts alone.
SENT = {
    "price":     "{K} {dep} on the same three things: the guest count, the menu, and how much of the work happens in front of people.",
    "packages":  "{K} {vb} from a set format and get adjusted to your date rather than sold as a fixed box.",
    "menu":      "The {k} {be} drafted around the occasion, the season and the dietary list, and you change it before anything is confirmed.",
    "best":      "If you are weighing up {k}, the things worth checking are the named chef, the itemised quote and who buys the ingredients.",
    "dietary":   "{K} {be} planned into the first draft of the menu rather than bolted on at the end.",
    "home":      "{K} {be} run at the address you give us: we bring the equipment, cook on site and leave the space as we found it.",
    "corporate": "{K} {be} run to a fixed timing, with one itemised invoice and dietary requirements tracked per person.",
    "occasion":  "{K} {be} planned around the room and the running order, with chefs, service staff and clear-down included.",
    "booking":   "For {k}, two to three weeks is comfortable, and December, Ramadan and New Year fill earlier than that.",
    "near_me":   "{K} {be} covered across the whole city, because the chef travels to your address rather than the other way round.",
    "equipment": "{K} {mean} the chef arriving with knives and any specialist kit, and working with the kitchen you already have.",
    "choose":    "{K} comes down to four checks: who actually cooks, what the quote itemises, who buys the food, and how the kitchen is left.",
    "chef":      "{K} {be} the same booking: a vetted chef, matched to your kitchen and your menu.",
    "alias":     "{K} {be} the same service under another name.",
}
SENT_HOME = {
    "price":     "{K} {dep} on the household: how many people eat at home, how many meals a week you want covered, and how often the chef comes.",
    "packages":  "{K} {vb} from a standing weekly format and get shaped around the household rather than sold as a fixed box.",
    "menu":      "The {k} {be} planned around what your household actually eats, with a draft week you change before anything is confirmed.",
    "occasion":  "{K} {be} planned around the week rather than a single evening, with the food cooked in your kitchen and left labelled.",
    "home":      "{K} {be} run in your own kitchen, on the days you choose, with the shopping done for you.",
}
BODY_MAX_SENTENCES = 6

# Last line of defence before a phrase is written into page copy: whatever the map says, these
# never belong in myCHEF prose (meal-kit brands, non-UAE cities, other people's conferences).
UNPLACEABLE = re.compile(r"\b(home chef|green chef|blue apron|hello ?fresh|marley spoon|factor meals|gousto|la belle assiette|yhangry|"
                         r"brisbane|darwin|umanitoba|sydney|melbourne|perth|auckland|london|manchester|dublin|ireland|toronto|vancouver|"
                         r"new york|chicago|houston|dallas|atlanta|seattle|singapore|bangkok|mumbai|delhi|karachi|riyadh|jeddah|doha|"
                         r"beirut|istanbul|paris|berlin|madrid|barcelona|milan|amsterdam|bali|jakarta|colombo|nairobi|lagos|"
                         r"fsai|log ?in|my account|customer support)\b", re.I)

def body_sentences(missing, primary, facts, seed=0):
    """One sentence per question type, the phrasings joined inside it. Plain text only — no
    apostrophes, braces or angle brackets, because this is written straight into JSX.

    Question-form phrases are left out on purpose: "What the how much indian food cost in dubai
    comes to" is not a sentence. Those go to the FAQ path, where they already read as questions.
    """
    home_plan = household(primary)
    out, used, seen = [], [], set()
    for grp in group_variants([k for k in missing if not OPEN.match(norm(k))], per_group=6):
        cls = classify(grp[0])
        if cls in seen: continue          # one sentence per question type, never the same frame twice
        seen.add(cls)
        ks = [sentence(k) for k in grp]
        joined = " and ".join([", ".join(ks[:-1]), ks[-1]]) if len(ks) > 1 else ks[0]
        tpl = (SENT_HOME.get(cls) if home_plan else None) or SENT[cls]
        # "sushi catering packages Dubai" is one phrase but a plural subject — agree with the noun,
        # not with how many phrasings happen to be in the sentence.
        many = len(ks) > 1 or bool(re.search(r"\b(packages|prices|plans|deals|offers|menus|costs|caterers|chefs|companies|ideas)\b", norm(joined)))
        s = tpl.format(k=joined, K=cap(joined), be="are" if many else "is",
                       dep="depend" if many else "depends", mean="mean" if many else "means",
                       vb="start" if many else "starts")
        if BANNED.search(s) or "'" in s or "{" in s or "<" in s: continue
        out.append(s); used += grp
        if len(out) >= BODY_MAX_SENTENCES: break
    return out, used

PARA = re.compile(r"( *)<p\b([^>]*)>[ \t]*\n((?:[^<>{}\n][^<>{}]*\n)+?)[ \t]*</p>")
PARA1 = re.compile(r"( *)<p\b([^>]*)>([^<>{}\n]{180,})</p>")
def _para_slots(src):
    """Every plain-prose paragraph in the file, multi-line or single-line, longest text first."""
    out = [(m.end(), m.group(1), m.group(2)) for m in PARA.finditer(src) if len(m.group(3).strip()) >= 180]
    out += [(m.end(), m.group(1), m.group(2)) for m in PARA1.finditer(src)]
    return sorted(set(out))

def place_in_body(src, missing, primary, facts, seed=0):
    """Write the sentences into the page's own prose paragraphs — two at most, in different
    sections, so a page with twelve unsaid phrases does not grow one wall of text."""
    slots = _para_slots(src)
    if not slots: return src, []
    sents, used = body_sentences(missing, primary, facts, seed)
    if not sents: return src, []
    chunks = [sents[:BODY_MAX_SENTENCES]]
    if len(sents) > BODY_MAX_SENTENCES and len(slots) > 1: chunks.append(sents[BODY_MAX_SENTENCES:])
    elif len(sents) > BODY_MAX_SENTENCES: chunks[0] = sents          # one slot only: keep them together
    # insert from the back so earlier offsets stay valid
    targets = [slots[0]] + ([slots[len(slots) // 2 if len(slots) > 2 else 1]] if len(chunks) > 1 else [])
    for (end, ind, attrs), part in sorted(zip(targets, chunks), key=lambda z: -z[0][0]):
        para = ind + "<p" + attrs + ">\n" + ind + "  " + " ".join(part) + "\n" + ind + "</p>"
        src = src[:end] + "\n" + para + src[end:]
    return src, used

def resolve(url):
    comp = route_comp.get(url)
    if not comp or comp == "HandoffPage" or comp not in imports: return None
    return ROOT / "src" / (imports[comp] + ".tsx")

def plan(url):
    p = pages.get(url); f = resolve(url)
    if not p or not f: return {"url": url, "skip": "no page component (handoff or template)"}
    io = p.get("intent_owner") or {}; pk = io.get("primary_keyword")
    if not pk: return {"url": url, "skip": "untargeted by decision"}
    page_src = f.read_text(encoding="utf-8"); mods = content_modules(page_src)
    edits = {}  # file -> text
    def text_of(path): return edits.get(path, path.read_text(encoding="utf-8"))
    def set_text(path, t): edits[path] = t
    changes = []; row = rowmap.get(url) or {}; pp = row.get("primary_place") or {}

    def fix_string(attr, mode, tag=r"<SEO\b"):
        """attr="title" on the tag: literal → rewrite in page; {obj.field} → rewrite in module."""
        s = text_of(f)
        m = re.search(r"(" + tag + r"[^>]*?\b" + attr + r'=")([^"]+)(")', s, flags=re.S)
        if m:
            new, how = place_primary(m.group(2), pk, mode)
            if how != "already": set_text(f, s[:m.start(2)] + new + s[m.end(2):]); changes.append((mode, how, m.group(2), new))
            return True
        m = re.search(r"(" + tag + r"[^>]*?\b" + attr + r"=\{)(\w+)\.(\w+)(\})", s, flags=re.S)
        if m:
            hit = find_obj_field(mods, m.group(2), m.group(3))
            if hit:
                mf, a, b, val = hit; ms = text_of(mf)
                # re-find in the possibly edited text
                hit2 = None
                m2 = re.search(r"export const " + re.escape(m.group(2)) + r"\b[^=]*=\s*\{", ms)
                if m2:
                    fm = re.search(r"(?m)^\s*" + re.escape(m.group(3)) + r":\s*(['\"])((?:\\.|(?!\1).)*)\1", ms[m2.end():])
                    if fm: hit2 = (m2.end() + fm.start(2), m2.end() + fm.end(2), fm.group(2), fm.group(1))
                    elif re.search(r"(?m)^\s*" + re.escape(m.group(3)) + r":\s*`", ms[m2.end():]): changes.append((mode, f"template literal {m.group(2)}.{m.group(3)} — edit by hand", "", "")); return True
                if hit2:
                    a, b, val, quote = hit2
                    new, how = place_primary(val.replace("\\'", "'"), pk, mode)
                    if how != "already":
                        new_esc = new.replace("'", "\\'") if quote == "'" else new.replace('"', '\\"')
                        set_text(mf, ms[:a] + new_esc + ms[b:]); changes.append((mode, how + f" ({mf.name}:{m.group(2)}.{m.group(3)})", val, new))
                    return True
            changes.append((mode, f"constant {m.group(2)}.{m.group(3)} not found in content modules", "", "")); return True
        return False

    def cfg_field(keys, mode):
        """top-level `  key: '…'` in a template config object (OccasionCateringPage, PackagePageTemplate, partners)"""
        s = text_of(f)
        for key in keys:
            m = re.search(r"(?m)^( {2}" + key + r":\s*)([\"'])((?:\\.|(?!\2).)*)\2", s)
            if m:
                val = m.group(3).replace("\\'", "'").replace('\\"', '"')
                new, how = place_primary(val, pk, mode)
                if how != "already":
                    q = m.group(2); new_esc = new.replace(q, "\\" + q)
                    set_text(f, s[:m.start(3)] + new_esc + s[m.end(3):]); changes.append((mode, how + f" (config.{key})", val, new))
                return True
        return False
    is_config = "<SEO" not in page_src and re.search(r"(?m)^  (seoTitle|metaTitle):", page_src)
    if is_config:
        cfg_field(["seoTitle", "metaTitle"], "title") or changes.append(("title", "no config title key", "", ""))
        cfg_field(["metaDescription", "seoDescription", "description"], "description") or changes.append(("description", "no config description key", "", ""))
        cfg_field(["h1", "heroTitle", "headline"], "h1") or changes.append(("h1", "no config h1 key", "", ""))
        if not pp.get("first100", True): cfg_field(["heroSub", "heroSubtitle", "subtitle", "intro"], "opening")
        if not pp.get("h2", True): cfg_field(["faqsH2"], "h2")
    else:
        tag_any = r"<[A-Z]\w*\b"
        fix_string("title", "title") or fix_string("seoTitle", "title", tag=tag_any) or changes.append(("title", "no <SEO title> found", "", ""))
        fix_string("description", "description") or fix_string("description", "description", tag=tag_any) or changes.append(("description", "no <SEO description> found", "", ""))
    if is_config: pass
    elif not fix_string("title", "h1", tag=r"<PageHero\b") and not (re.search(r"<(PackagePageTemplate|PartnerPageTemplate)\b", text_of(f)) and fix_string("title", "h1", tag=r"<(?:PackagePageTemplate|PartnerPageTemplate)\b")):
        s = text_of(f); m = re.search(r"(<h1\b[^>]*>)(.*?)(</h1>)", s, flags=re.S)
        if m:
            inner = m.group(2)
            tm = re.search(r">?\s*([^<{}]{6,})", inner)  # first text node
            if tm:
                new, how = place_primary(tm.group(1).strip(), pk, "h1")
                if how != "already":
                    inner2 = inner[:tm.start(1)] + tm.group(1).replace(tm.group(1).strip(), new) + inner[tm.end(1):]
                    set_text(f, s[:m.start(2)] + inner2 + s[m.end(2):]); changes.append(("h1", how, tm.group(1).strip(), new))
            else: changes.append(("h1", "no text node in <h1>", "", ""))
        else: changes.append(("h1", "no H1 found", "", ""))
    if not is_config and not pp.get("first100", True): fix_string("subtitle", "opening", tag=r"<PageHero\b")
    if not is_config and not pp.get("h2", True):
        s = text_of(f); fa = s.find("<FaqAccordion")
        h2s = [x for x in re.finditer(r"(<h2\b[^>]*>)\s*([^<{]+?)\s*(</h2>)", s, flags=re.S) if fa < 0 or x.start() < fa]
        if h2s:
            m = h2s[-1]; new, how = place_primary(m.group(2), pk, "h2")
            if how != "already": set_text(f, s[:m.start(2)] + new + s[m.end(2):]); changes.append(("h2", how, m.group(2), new))
    # ---- subkeywords: body sentences first, FAQs only for what reads as a question ---------
    missing = [x["kw"] for x in row.get("subs", []) if x.get("place") and not x["place"].get("body")] if row.get("subs") else list(io.get("subkeywords") or [])
    # The duplicate guard must see PROSE, not code. Raw source normalises to one string, so a
    # heading "Sushi Catering Dubai" followed by the key `price:` reads as "sushi catering dubai
    # price" and the phrase looks placed when the page never says it — that alone hid 1,237 subs.
    corpus = prose(text_of(f) + "\n" + "\n".join(text_of(mf) for mf in mods))
    live = rendered(url)
    missing = [k for k in missing if not has(corpus, k) and not (live and has(live, k)) and not UNPLACEABLE.search(k)]
    facts = facts_from(page_src, *[text_of(mf) for mf in mods])
    seed = sum(ord(c) for c in url)
    if missing:
        s = text_of(f)
        s2, placed = place_in_body(s, missing, pk, facts, seed)
        if placed:
            set_text(f, s2); changes.append(("body", f"+{len(body_sentences(missing, pk, facts, seed)[0])} sentences ({f.name})", "", ", ".join(placed)))
            missing = [k for k in missing if k not in placed]
    if missing:
        s = text_of(f); name = None
        im = re.search(r"<FaqAccordion\b[^>]*\bitems=\{\[?\.{0,3}(\w+)\]?\}", s) or re.search(r"\bfaqs=\{\[?\.{0,3}(\w+)\]?\}", s)
        if im: name = im.group(1)
        elif is_config and re.search(r"(?m)^  faqs:\s*\[", s): name = "faqs"
        target = None
        if name:
            if find_array_end(s, name) is not None: target = f
            else:
                for mf in mods:
                    if find_array_end(text_of(mf), name) is not None: target = mf; break
        if target:
            ts = text_of(target); end = find_array_end(ts, name)
            # The brief caps a page at 5–8 FAQs and CONSOLIDATION-PLAN already lists FAQ bloat as
            # an open item, so a page at or over the cap gets no new ones — the sentences carry it.
            have = len(re.findall(r"(?m)^\s*q:\s*['\"`]", ts[:end]))
            room = max(0, FAQ_CAP - have)
            items, placed = [], []
            seen_cls = collections.Counter()
            for i, grp in enumerate(group_variants(missing)[:room]):
                c = classify(grp[0]); q, a = faq_for(grp, pk, facts, seed + i, seen_cls[c]); seen_cls[c] += 1
                if BANNED.search(a) or BANNED.search(q): continue
                items.append("  {\n    q: '" + q.replace("'", "\\'") + "',\n    a: '" + a.replace("'", "\\'") + "',\n  },"); placed += grp
            if items:
                ts2 = ts[:end].rstrip() + "\n" + "\n".join(items) + "\n" + ts[end:]
                set_text(target, ts2); changes.append(("faq", f"+{len(items)} ({target.name}:{name}, page had {have})", "", ", ".join(placed)))
                missing = [k for k in missing if k not in placed]
            elif not room: changes.append(("faq", f"skipped — page already carries {have} FAQs (cap {FAQ_CAP})", "", ", ".join(missing)))
        else: changes.append(("faq", "no FAQ array found", "", ", ".join(missing)))
    rec = {"url": url, "file": str(f.relative_to(ROOT)), "primary": pk, "changes": [{"where": w, "how": h, "before": b[:140], "after": a[:220]} for w, h, b, a in changes], "applied": False, "files": sorted(str(x.relative_to(ROOT)) for x in edits)}
    if APPLY and edits:
        for path, t in edits.items(): path.write_text(t, encoding="utf-8")
        rec["applied"] = True; rec["at"] = datetime.datetime.now().isoformat(timespec="minutes")
        LOG.parent.mkdir(parents=True, exist_ok=True)
        with LOG.open("a") as lg: lg.write(json.dumps(rec, ensure_ascii=False) + "\n")
    return rec

def revert(url):
    if not LOG.exists(): return 0
    n = 0
    for line in LOG.read_text().splitlines():
        rec = json.loads(line)
        if rec.get("url") != url or not rec.get("applied"): continue
        for ch in rec["changes"]:
            if ch["where"] == "faq" or not ch.get("before") or not ch.get("after"): continue
            for fp in rec.get("files", []) + [rec["file"]]:
                path = ROOT / fp
                if not path.exists(): continue
                t = path.read_text(encoding="utf-8")
                for a, b in ((ch["after"], ch["before"]), (ch["after"].replace("'", "\\'"), ch["before"].replace("'", "\\'"))):
                    if a and a in t: path.write_text(t.replace(a, b, 1), encoding="utf-8"); n += 1; break
    return n
if "--revert" in sys.argv:
    for u in [a for a in sys.argv[1:] if a.startswith("/")]: print(f"revert {u}: {revert(u)} strings restored")
    sys.exit(0)
args = [a for a in sys.argv[1:] if not a.startswith("--") and not a.isdigit()]
limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 10**9
urls = args
if "--all" in sys.argv:
    urls = [u for u, p in pages.items() if not (p.get("indexation") or {}).get("redirect_to") and ((p.get("indexation") or {}).get("robots") or {}).get("index", True) and (p.get("intent_owner") or {}).get("primary_keyword")][:limit]
out = [plan(u) for u in urls]
for r in out:
    if r.get("skip"): print(f"  skip {r['url']}: {r['skip']}"); continue
    print(f"{'APPLIED' if r['applied'] else 'PLAN'} {r['url']} · {r['file']} · primary={r['primary']!r}")
    for c in r["changes"]: print(f"    {c['where']:<12} {c['how']:<44} {('→ ' + c['after']) if c['after'] else ''}"[:230])
print(f"{sum(1 for r in out if r.get('applied'))} applied · {sum(1 for r in out if not r.get('skip') and not r.get('applied'))} planned · {sum(1 for r in out if r.get('skip'))} skipped")

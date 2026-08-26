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
import json, pathlib, re, sys, datetime, html, unicodedata

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
def cap(s): return s[:1].upper() + s[1:] if s else s
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

def faq_for(kws, page_primary, facts):
    """kws: 1–2 phrasings of the same idea. Question says the first, the answer says the second (if any)."""
    k1 = sentence(kws[0]); k2 = sentence(kws[1]) if len(kws) > 1 else None; k3 = sentence(kws[2]) if len(kws) > 2 else None
    kk = norm(k1); P = sentence(page_primary)
    price = facts.get("price"); areas = ", ".join(facts.get("areas", [])) or "Palm Jumeirah, Dubai Marina, Emirates Hills and Downtown Dubai"
    alt = (f" If you searched for {k2}" + (f" or {k3}" if k3 else "") + ", this is the same service.") if k2 else ""
    if re.search(r"\b(price|prices|pricing|cost|costs|how much|rates|per person|per head|charges)\b", kk):
        q = f"How much does {k1} come to?"
        a = f"There is no single number for {k1}: guest count, menu, service style and staffing move the figure. {('Our indicative starting point on this page is ' + price + '. ') if price else ''}Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.{alt}"
    elif re.search(r"\bnear me\b|\bnearby\b|\bclose to me\b|\bnear by\b", kk):
        q = f"I searched '{k1}' — do you cover my area?"
        a = f"Yes. We cook and serve across Dubai, including {areas}, and we come to you: the kitchen is your villa, apartment, office, venue or yacht. Tell us the address and we confirm the team, travel and set-up time for it.{alt}"
    elif re.search(r"\b(packages?|deals?|offers?)\b", kk):
        q = f"Do you offer {k1}?"
        a = f"Yes. We start from set formats and adjust them to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. {('Starting points begin at ' + price + '. ') if price else ''}Ask for the format closest to what you are planning and we shape it from there.{alt}"
    elif re.search(r"\b(best|top|recommended|good|luxury|premium)\b", kk):
        q = f"What makes myCHEF a strong choice for {k1}?"
        a = f"One team owns the whole event — menu, shopping, cooking on site, service and clear-down — so nothing falls between suppliers. The chefs are vetted and matched to the occasion, ingredients are charged at cost with no markup, and every quote is itemised.{alt}"
    elif re.search(r"\b(halal|vegan|vegetarian|gluten|dairy|nut|jain|keto|healthy|allerg|sugar|fodmap)\w*", kk):
        q = f"Can you handle {k1}?"
        a = f"Yes. Dietary needs are planned into the menu from the first draft, not bolted on: dishes are labelled, cross-contact is managed in the kitchen we set up on site, and the chef is briefed on every guest requirement before the day.{alt}"
    elif re.search(r"\b(villa|home|house|apartment|residence|at home|in home|in-home)\b", kk):
        q = f"Do you provide {k1}?"
        a = f"Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across {areas} this is our most common booking.{alt}"
    elif re.search(r"\b(corporate|office|business|staff|team|company|companies|conference|meeting|employee)\b", kk):
        q = f"Do you handle {k1}?"
        a = f"Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. {('Budgets typically start around ' + price + '. ') if price else ''}One contact, one itemised quote, and the same team every time if you want continuity.{alt}"
    elif re.search(r"\b(wedding|birthday|party|parties|celebration|anniversary|engagement|shower|graduation|event|events|gathering)\b", kk):
        q = f"Do you cater {k1}?"
        a = f"Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.{alt}"
    elif re.search(r"\b(chef|cook|chefs|cooks|caterer|caterers)\b", kk):
        q = f"Is {k1} something you arrange?"
        a = f"Yes. Every chef on our roster is vetted in person, cooks a trial and is matched to what you need — a one-night dinner, a standing household plan, or a specific cuisine. You deal with one contact; the chef arrives briefed, with a plan for your kitchen and your guests.{alt}"
    else:
        q = f"Do you offer {k1}?"
        a = f"Yes. It sits inside the same service as {P}: we design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.{alt}"
    return cap(q), a

def group_variants(kws):
    groups = {}
    for k in kws:
        key = frozenset(t for t in norm(k).split() if t not in STOP)
        groups.setdefault(key, []).append(k)
    return [v[:3] for v in groups.values()]

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
    # ---- subkeywords → FAQs -------------------------------------------------------------
    missing = [x["kw"] for x in row.get("subs", []) if x.get("place") and not x["place"].get("body")] if row.get("subs") else list(io.get("subkeywords") or [])
    corpus = text_of(f) + "".join(text_of(mf) for mf in mods)
    missing = [k for k in missing if not has(corpus, k)]
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
            facts = facts_from(page_src, *[text_of(mf) for mf in mods])
            items, placed = [], []
            for grp in group_variants(missing)[:MAX_FAQS]:
                q, a = faq_for(grp, pk, facts)
                if BANNED.search(a) or BANNED.search(q): continue
                items.append("  {\n    q: '" + q.replace("'", "\\'") + "',\n    a: '" + a.replace("'", "\\'") + "',\n  },"); placed += grp
            if items:
                ts2 = ts[:end].rstrip() + ("\n" if not ts[:end].rstrip().endswith(",") and not ts[:end].rstrip().endswith("[") else "\n") + "\n".join(items) + "\n" + ts[end:]
                set_text(target, ts2); changes.append(("faq", f"+{len(items)} ({target.name}:{name})", "", ", ".join(placed)))
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

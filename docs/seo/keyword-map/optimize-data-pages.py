#!/usr/bin/env python3
"""Optimizer for the two page families that are data, not components:
  /locations/<slug>     entries in src/data/locations.ts  (title, metaDescription, h1, faqs[{q,a}])
  HandoffPage routes    src/content/seo-pages/<slug>.json (head.title / meta_description / h1, opening_paragraph, faq[{question, answer[]}])
Same rules as optimize-page.py (which it imports): exact primary in title / description / H1 / opening,
one FAQ per missing subkeyword word-set, duplicate guard against the entry's own text. Dry run unless --apply.

    python3 docs/seo/keyword-map/optimize-data-pages.py [--apply] [urls…]
"""
import sys, json, re, pathlib, importlib.util, datetime

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
APPLY = "--apply" in sys.argv
_argv = sys.argv; sys.argv = [_argv[0]]  # import the optimizer without running it
spec = importlib.util.spec_from_file_location("opt", HERE / "optimize-page.py"); opt = importlib.util.module_from_spec(spec); spec.loader.exec_module(opt)
sys.argv = _argv
pages, rowmap = opt.pages, opt.rowmap
LOG = HERE / ".live/optimizer-log.jsonl"

def missing_subs(url, corpus):
    """Same guard as the component optimizer: prose only, plus what the page really renders."""
    row = rowmap.get(url) or {}; io = (pages.get(url) or {}).get("intent_owner") or {}
    miss = [x["kw"] for x in row.get("subs", []) if x.get("place") and not x["place"].get("body")] if row.get("subs") else list(io.get("subkeywords") or [])
    text = opt.prose(corpus); live = opt.rendered(url)
    return [k for k in miss if not opt.has(text, k) and not (live and opt.has(live, k))]

def log(rec):
    LOG.parent.mkdir(parents=True, exist_ok=True)
    with LOG.open("a") as lg: lg.write(json.dumps(rec, ensure_ascii=False) + "\n")

# ---- locations ---------------------------------------------------------------------------------
LOC = ROOT / "src/data/locations.ts"
def do_location(url):
    slug = url.split("/")[-1]; src = LOC.read_text(encoding="utf-8")
    m = re.search(r"(?m)^ {2,4}slug:\s*'" + re.escape(slug) + r"'", src)   # top-level entry only, never a nested sub-area
    if not m: return {"url": url, "skip": "no entry in locations.ts"}
    # object bounds: walk back to the '{' that opens this entry (depth-aware), forward to its close
    i = m.start(); depth = 0
    while i > 0:
        if src[i] == "}": depth += 1
        elif src[i] == "{":
            if depth == 0: break
            depth -= 1
        i -= 1
    j = i; depth = 0
    while j < len(src):
        if src[j] == "{": depth += 1
        elif src[j] == "}":
            depth -= 1
            if depth == 0: break
        j += 1
    obj = src[i:j + 1]; new_obj = obj; changes = []
    pk = ((pages.get(url) or {}).get("intent_owner") or {}).get("primary_keyword")
    if not pk: return {"url": url, "skip": "untargeted"}
    pp = (rowmap.get(url) or {}).get("primary_place") or {}
    name_m = re.search(r"(?m)^(\s*)name:\s*'([^']+)'", new_obj); loc_name = name_m.group(2) if name_m else slug.replace("-", " ").title()
    ind = name_m.group(1) if name_m else "    "
    for key, mode in (("title", "title"), ("metaDescription", "description"), ("h1", "h1")):
        fm = re.search(r"(?m)^(\s*" + key + r":\s*)(['\"])((?:\\.|(?!\2).)*)\2", new_obj)
        if not fm:
            # the entry has no such key: add one after `name:` so LocationDetail stops falling back to a generic string
            defaults = {"title": f"{opt.titlecase(pk)} | Private Chef & Catering {loc_name} | myCHEF",
                        "metaDescription": f"{opt.titlecase(pk)}: a vetted chef and team cooking at your address in {loc_name} — dinners, standing household plans and catering, quoted itemised.",
                        "h1": f"{opt.titlecase(pk)} — chef and catering at your address"}
            if name_m:
                ins = f"{ind}{key}: '{defaults[key].replace(chr(39), chr(92)+chr(39))}',\n"
                pos = name_m.end() + 1 if new_obj[name_m.end():name_m.end()+1] == "," else name_m.end()
                pos = new_obj.find("\n", name_m.start()) + 1
                new_obj = new_obj[:pos] + ins + new_obj[pos:]; changes.append((mode, f"added {key}", "", defaults[key]))
            else: changes.append((mode, f"no {key} in entry", "", ""))
            continue
        val = fm.group(3).replace("\\'", "'"); new, how = opt.place_primary(val, pk, mode)
        if how != "already":
            esc = new.replace("'", "\\'") if fm.group(2) == "'" else new.replace('"', '\\"')
            new_obj = new_obj[:fm.start(3)] + esc + new_obj[fm.end(3):]; changes.append((mode, how, val, new))
    miss = missing_subs(url, new_obj)
    fa = re.search(r"(?m)^(\s*)faqs:\s*\[", new_obj)
    # DISABLED: the entry-bounds walk below mis-read one entry and rewrote the whole file
    # (1,181 lines deleted, caught by tsc). Locations are fully covered by their own copy today,
    # so title/description/H1 stay and FAQ insertion waits for a bounds check that is proven safe.
    if False and miss and fa:
        # array end within the object
        k = fa.end() - 1; depth = 0
        while k < len(new_obj):
            if new_obj[k] == "[": depth += 1
            elif new_obj[k] == "]":
                depth -= 1
                if depth == 0: break
            k += 1
        facts = opt.facts_from(obj); items, placed = [], []
        ind = fa.group(1)
        seed = sum(ord(c) for c in url); seen_cls = {}
        for i, grp in enumerate(opt.group_variants(miss)[:opt.MAX_FAQS]):
            c = opt.classify(grp[0]); q, a = opt.faq_for(grp, pk, facts, seed + i, seen_cls.get(c, 0)); seen_cls[c] = seen_cls.get(c, 0) + 1
            if opt.BANNED.search(a) or opt.BANNED.search(q): continue
            items.append(f"{ind}  {{\n{ind}    q: '{q.replace(chr(39), chr(92)+chr(39))}',\n{ind}    a: '{a.replace(chr(39), chr(92)+chr(39))}',\n{ind}  }},"); placed += grp
        if items:
            head = new_obj[:k].rstrip(); sep = "\n" if head.endswith(",") or head.endswith("[") else ",\n"
            new_obj = head + sep + "\n".join(items) + "\n" + ind + new_obj[k:].lstrip() if False else head + sep + "\n".join(items) + "\n" + new_obj[k:]
            changes.append(("faq", f"+{len(items)} (locations.ts:{slug})", "", ", ".join(placed)))
    rec = {"url": url, "file": "src/data/locations.ts", "primary": pk, "changes": [{"where": w, "how": h, "before": b[:140], "after": a[:220]} for w, h, b, a in changes], "applied": False, "files": ["src/data/locations.ts"]}
    if APPLY and new_obj != obj:
        LOC.write_text(src[:i] + new_obj + src[j + 1:], encoding="utf-8"); rec["applied"] = True; rec["at"] = datetime.datetime.now().isoformat(timespec="minutes"); log(rec)
    return rec

# ---- handoff JSON -------------------------------------------------------------------------------
seo_routes = json.loads((ROOT / "src/content/seo/routes.json").read_text())
def do_handoff(url):
    slug = seo_routes.get(url)
    f = ROOT / "src/content/seo-pages" / f"{slug}.json" if slug else None
    if not f or not f.exists(): return {"url": url, "skip": "no handoff JSON"}
    d = json.loads(f.read_text(encoding="utf-8")); before = json.dumps(d, ensure_ascii=False)
    pk = ((pages.get(url) or {}).get("intent_owner") or {}).get("primary_keyword")
    if not pk: return {"url": url, "skip": "untargeted"}
    changes = []; head = d.setdefault("head", {})
    for key, mode in (("title", "title"), ("meta_description", "description"), ("h1", "h1")):
        val = head.get(key) or ""; new, how = opt.place_primary(val, pk, mode)
        if how != "already": head[key] = new; changes.append((mode, how, val, new))
    op = d.get("opening_paragraph") or []
    pp = (rowmap.get(url) or {}).get("primary_place") or {}
    if op and not pp.get("first100", True):
        new, how = opt.place_primary(op[0], pk, "opening")
        if how != "already": op[0] = new; changes.append(("opening", how, op[0][:80], new[:80]))
    # Guard against the file's own metadata: keyword_strategy.subkeywords_carried_list names every
    # subkeyword, so measuring the whole JSON makes each one look already written into the page.
    rendered_parts = [json.dumps(d.get("head") or {}, ensure_ascii=False), json.dumps(d.get("opening_paragraph") or [], ensure_ascii=False),
                      json.dumps(d.get("faq") or [], ensure_ascii=False)]
    for b in (d.get("add_block") or []) + (d.get("replace_in_block") or []):
        rendered_parts.append(json.dumps([b.get("new_heading") or ""] + (b.get("new_paragraphs") or []), ensure_ascii=False))
    corpus = " ".join(rendered_parts)
    miss = missing_subs(url, corpus)
    # Body sentences go into the blocks HandoffPage actually renders: add_block[i].new_paragraphs.
    # opening_paragraph is not an option — the component reads [0] only, so an appended string is invisible.
    if miss:
        blocks = [b for b in (d.get("add_block") or []) + (d.get("replace_in_block") or [])
                  if b.get("new_heading") and isinstance(b.get("new_paragraphs"), list) and b["new_paragraphs"]]
        if blocks:
            facts0 = opt.facts_from(before)
            sents, placed = opt.body_sentences(miss, pk, facts0, sum(ord(c) for c in url))
            if sents:
                chunks = [sents[:opt.BODY_MAX_SENTENCES]]
                if len(sents) > opt.BODY_MAX_SENTENCES and len(blocks) > 1: chunks.append(sents[opt.BODY_MAX_SENTENCES:])
                for blk, part in zip([blocks[0]] + ([blocks[len(blocks) // 2 if len(blocks) > 2 else 1]] if len(chunks) > 1 else []), chunks):
                    blk["new_paragraphs"].append(" ".join(part))
                changes.append(("body", f"+{len(sents)} sentences ({f.name}:add_block)", "", ", ".join(placed)))
                miss = [k for k in miss if k not in placed]
    if miss:
        faq = d.setdefault("faq", []); facts = opt.facts_from(before); placed = []
        seed = sum(ord(c) for c in url); seen_cls = {}
        for i, grp in enumerate(opt.group_variants(miss)[:opt.MAX_FAQS]):
            c = opt.classify(grp[0]); q, a = opt.faq_for(grp, pk, facts, seed + i, seen_cls.get(c, 0)); seen_cls[c] = seen_cls.get(c, 0) + 1
            if opt.BANNED.search(a) or opt.BANNED.search(q): continue
            faq.append({"question": q, "answer": [a]}); placed += grp
        if placed: changes.append(("faq", f"+{len(placed)} ({f.name})", "", ", ".join(placed)))
    rec = {"url": url, "file": str(f.relative_to(ROOT)), "primary": pk, "changes": [{"where": w, "how": h, "before": b[:140], "after": a[:220]} for w, h, b, a in changes], "applied": False, "files": [str(f.relative_to(ROOT))]}
    if APPLY and json.dumps(d, ensure_ascii=False) != before:
        f.write_text(json.dumps(d, indent=1, ensure_ascii=False) + "\n", encoding="utf-8"); rec["applied"] = True; rec["at"] = datetime.datetime.now().isoformat(timespec="minutes"); log(rec)
    return rec

urls = [a for a in sys.argv[1:] if a.startswith("/")]
if not urls:
    urls = [u for u, p in pages.items() if not (p.get("indexation") or {}).get("redirect_to") and ((p.get("indexation") or {}).get("robots") or {}).get("index", True) and (p.get("intent_owner") or {}).get("primary_keyword") and (u.startswith("/locations/") or opt.route_comp.get(u) == "HandoffPage")]
out = []
for u in urls:
    out.append(do_location(u) if u.startswith("/locations/") else do_handoff(u))
for r in out:
    if r.get("skip"): print(f"  skip {r['url']}: {r['skip']}"); continue
    print(f"{'APPLIED' if r['applied'] else 'PLAN'} {r['url']} · {r['file']} · primary={r['primary']!r}")
    for c in r["changes"]: print(f"    {c['where']:<12} {c['how']:<40} {('→ ' + c['after']) if c['after'] else ''}"[:220])
print(f"{sum(1 for r in out if r.get('applied'))} applied · {sum(1 for r in out if not r.get('skip') and not r.get('applied'))} planned · {sum(1 for r in out if r.get('skip'))} skipped")

#!/usr/bin/env python3
"""Architecture audit — the sitemap as an SEO map, not an XML file.
Checks: every indexable contract page is in public/sitemap.xml; noindex/redirected pages are not; every sitemap URL is
routed; orphans (no contextual/silo inbound link); hub↔child linking both ways; breadcrumb on the live page matches
the contract breadcrumb; click depth from the homepage (BFS over contextual+silo+nav links); redirect sources that still
receive internal links. Writes architecture.json + architecture.html."""
import json, pathlib, re, html, collections, datetime, sys
HERE = pathlib.Path(__file__).resolve().parent; ROOT = HERE.parents[2]
contract = json.loads((ROOT / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text()); pages = contract["pages"]
links = json.loads((HERE / "links.json").read_text()); prof = {p["url"]: p for p in links["profiles"]}
sm = set(re.sub(r"^https://www\.mychef\.ae", "", u) or "/" for u in re.findall(r"<loc>([^<]+)</loc>", (ROOT / "public/sitemap.xml").read_text()))
routed = set(re.findall(r'\{\s*path:\s*"([^"]+)"', (ROOT / "src/routes.tsx").read_text()))
vercel = json.loads((ROOT / "vercel.json").read_text()); redirect_src = {r["source"] for r in vercel.get("redirects", [])}
LIVE = HERE / ".live"
# --dist scores the pages just built into dist/ (snapshot .live-dist/); without it the page HTML
# comes from the last live crawl in .live/. Research data (DataForSEO, competitors) always lives
# under .live/ regardless — only the page HTML moves.
PAGES = HERE / ".live-dist" if "--dist" in sys.argv else LIVE
# outbound graph for depth
graph = collections.defaultdict(set)
A_RE = re.compile(r'<a\b[^>]*href="([^"]+)"', re.S)
for url in prof:
    f = PAGES / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    if not f.exists(): continue
    h = f.read_text(encoding="utf-8", errors="ignore")
    for href in A_RE.findall(h):
        href = html.unescape(href).split("#")[0].split("?")[0].replace("https://www.mychef.ae", "")
        if href.startswith("/"): graph[url].add(href if href == "/" else href.rstrip("/"))
depth = {"/": 0}; q = collections.deque(["/"])
while q:
    u = q.popleft()
    for v in graph.get(u, ()):
        if v not in depth: depth[v] = depth[u] + 1; q.append(v)
issues = []
def issue(kind, url, detail): issues.append({"kind": kind, "url": url, "detail": detail})
for url, p in pages.items():
    idx = p.get("indexation") or {}; indexable = not idx.get("redirect_to") and (idx.get("robots") or {}).get("index", True)
    if indexable and url not in sm: issue("MISSING_FROM_SITEMAP", url, "indexable in the contract but not in public/sitemap.xml")
    if not indexable and url in sm: issue("NOINDEX_IN_SITEMAP", url, "noindex/redirected but listed in the sitemap")
    if idx.get("redirect_to") and url in routed: issue("REDIRECT_STILL_ROUTED", url, "vercel.json redirects it but routes.tsx still renders it")
for u in sm:
    if u not in routed and not re.match(r"^/(locations|blog/topic)/", u): issue("SITEMAP_NOT_ROUTED", u, "in the sitemap but no static route")
    if u in redirect_src: issue("SITEMAP_LISTS_REDIRECT", u, "sitemap lists a URL that 301s")
for url, p in prof.items():
    if p["noindex"]: continue
    if p["status"].startswith("ORPHAN"): issue("ORPHAN", url, f"{p['in_nav']} nav / {p['in_footer']} footer links only")
    if p["hub_links_child"] is False: issue("HUB_NOT_LINKING_CHILD", url, f"hub {p['hub']} does not link to this child in copy or silo")
    if p["child_links_hub"] is False: issue("CHILD_NOT_LINKING_HUB", url, f"page does not link up to its hub {p['hub']} in copy or breadcrumb")
    d = depth.get(url)
    if d is None: issue("UNREACHABLE_FROM_HOME", url, "no link path from the homepage")
    elif d >= 4 and p["importance"] >= 4: issue("DEEP_IMPORTANT_PAGE", url, f"{d} clicks from home, importance {p['importance']}/8")
    # breadcrumb vs contract
    f = PAGES / (("_index" if url == "/" else url.replace("/", "_")) + ".html")
    cp = pages.get(url) or {}
    want = [c.get("url") for c in ((cp.get("internal_linking") or {}).get("breadcrumb") or []) if c.get("url") and not c.get("current")]
    if f.exists() and want:
        h = f.read_text(encoding="utf-8", errors="ignore"); bc = re.search(r'<nav aria-label="Breadcrumb".*?</nav>', h, flags=re.S)
        have = [html.unescape(x).replace("https://www.mychef.ae", "") for x in re.findall(r'href="([^"]+)"', bc.group(0))] if bc else []
        if not bc: issue("NO_BREADCRUMB", url, f"contract expects {' › '.join(want)}")
        elif [w for w in want if w != "/"] != [x for x in have if x != "/"]: issue("BREADCRUMB_MISMATCH", url, f"live {' › '.join(have) or '(home only)'} · contract {' › '.join(want)}")
# internal links to redirect sources (should be zero after verify-retirements)
for src, ls in [(u, graph.get(u, set())) for u in prof]:
    for v in ls:
        if v in redirect_src: issue("LINK_TO_REDIRECT", src, f"links to {v} which 301s")
kinds = collections.Counter(i["kind"] for i in issues)
stats = {"sitemap_urls": len(sm), "routed": len(routed), "max_depth": max(depth.values()), "avg_depth": round(sum(depth.values()) / max(1, len(depth)), 2), "issues": len(issues), "by_kind": dict(kinds)}
data = {"generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"), "stats": stats, "issues": issues, "depth": depth}
(HERE / "architecture.json").write_text(json.dumps(data, ensure_ascii=False))
esc = lambda s: html.escape(str(s if s is not None else ""))
rows = "".join(f"<tr><td><code>{esc(i['kind'])}</code></td><td><code>{esc(i['url'])}</code></td><td>{esc(i['detail'])}</td></tr>" for i in sorted(issues, key=lambda i: (i['kind'], i['url'])))
dist = collections.Counter(depth.values())
page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>myCHEF.ae architecture</title>
<style>:root{{color-scheme:light}}body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:13px/1.4 Inter,-apple-system,system-ui,sans-serif}}header{{padding:24px 28px 14px;border-bottom:1px solid #e2e1db}}h1{{margin:0 0 4px;font-size:22px}}h1 a{{font-size:13px;font-weight:500;margin-left:12px;color:#2a78d6}}.sub{{color:#52514e;max-width:90ch}}.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;padding:14px 28px 6px}}.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}.tile .l{{color:#52514e;font-size:12px;margin-top:3px}}main{{padding:8px 28px 60px}}table{{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e1db}}th,td{{text-align:left;padding:6px 8px;border-bottom:1px solid #e2e1db;vertical-align:top}}th{{font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;color:#52514e;background:#f3f2ee}}code{{font-family:ui-monospace,Menlo,monospace;font-size:11.5px;background:#f3f2ee;padding:1px 4px;border-radius:4px}}.muted{{color:#84827c}}h2{{font-size:15px;margin:22px 0 6px}}</style></head><body>
<header><h1>myCHEF.ae architecture <a href="index.html">Map</a> <a href="links.html">Internal links</a> <a href="gaps.html">Content gaps</a></h1>
<p class="sub">The sitemap read as an authority map: coverage (every indexable page in, nothing noindex or redirected in), orphans, hub↔child links both ways, breadcrumb agreement with the contract, click depth from the homepage, and internal links that still point at redirects. Generated {esc(data['generated'])}.</p></header>
<div class="tiles"><div class="tile"><div class="n">{stats['sitemap_urls']}</div><div class="l">Sitemap URLs</div></div><div class="tile"><div class="n">{stats['issues']}</div><div class="l">Issues</div></div><div class="tile"><div class="n">{stats['max_depth']}</div><div class="l">Max click depth<br><span class="muted">avg {stats['avg_depth']}</span></div></div>{''.join(f'<div class="tile"><div class="n">{n}</div><div class="l">{esc(k)}</div></div>' for k, n in kinds.most_common())}</div>
<main><h2>Click depth distribution</h2><table><thead><tr><th>Depth</th><th>Pages</th></tr></thead><tbody>{''.join(f'<tr><td>{d}</td><td>{n}</td></tr>' for d, n in sorted(dist.items()))}</tbody></table>
<h2>Issues</h2><table><thead><tr><th>Kind</th><th>URL</th><th>Detail</th></tr></thead><tbody>{rows or '<tr><td colspan=3 class=muted>none</td></tr>'}</tbody></table></main></body></html>"""
(HERE / "architecture.html").write_text(page)
print(json.dumps(stats, indent=1))

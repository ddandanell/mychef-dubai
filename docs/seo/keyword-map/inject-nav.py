#!/usr/bin/env python3
"""SEO Intelligence OS shell — one navigation, header, drawer and design system.

Builders stay unaware of each other. This script wraps every published page at
publish time so chrome, tokens and behaviour stay identical.

    python3 docs/seo/keyword-map/inject-nav.py public/seo
    python3 docs/seo/keyword-map/inject-nav.py docs/seo/keyword-map
"""
import pathlib, re, shutil, sys

HERE = pathlib.Path(__file__).resolve().parent
OUT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "public/seo")

NAV = [
    ("OVERVIEW", [
        ("index.html", "Board", "every URL and its locked keywords"),
        ("status.html", "Status", "is every source connected and feeding data"),
    ]),
    ("SEARCH", [
        ("ownership.html", "Keywords", "one row per keyword, with its score"),
        ("demand.html", "Demand", "what each page's keyword set is worth"),
        ("report.html", "Research", "volume, difficulty, intent, position"),
        ("gaps.html", "Gaps", "what competitors cover and we do not"),
    ]),
    ("SITE", [
        ("architecture.html", "Architecture", "the sitemap as an authority map"),
        ("links.html", "Links", "internal link profile per URL"),
    ]),
    ("EXECUTION", [
        ("queue.html", "Queue", "ranked proposals, not applied"),
        ("backlog.html", "Backlog", "phrases no page owns yet"),
        ("actions.html", "Agent Runs", "every change the agent made, newest first"),
    ]),
    ("AI", [
        ("ai-visibility.html", "AI Visibility", "who Claude names for buyer prompts"),
        ("ask.html", "Analyst", "put a question to the read-only SEO analyst"),
    ]),
    ("DATA", [
        ("gsc.html", "Search Console", "impressions, clicks, position"),
        ("analytics.html", "Analytics", "Vercel, first-party, GA4"),
        ("semrush.html", "Semrush", "historic export, API paused"),
        ("dataforseo.html", "DataForSEO", "volume, SERPs, difficulty"),
    ]),
    ("INTEGRATIONS", [
        ("connections.html", "Connections", "keys, freshness, what still needs access"),
    ]),
    ("SETTINGS", [
        ("settings.html", "Settings", "density, exports, how a run works"),
    ]),
]

TITLES = {f: label for _, pages in NAV for f, label, _ in pages}
HELP = {f: t for _, pages in NAV for f, _, t in pages}
ALL_PAGES = [f for _, pages in NAV for f, _, _ in pages]
KNOWN = set(ALL_PAGES) | {"report.csv", "keywords.csv", "actions.html"}

ASSETS = """
<link rel="stylesheet" href="ui/board.css">
<link rel="stylesheet" href="/seo/ui/board.css">
"""


def sidebar(current):
    chunks = ['<aside id="seo-nav" aria-label="SEO Intelligence">',
              '<a class="seo-brand" href="/seo/index.html"><i></i><span><strong>myCHEF</strong><span>SEO Intelligence</span></span></a>']
    for section, pages in NAV:
        existing = [(f, label, t) for f, label, t in pages if (OUT / f).exists()]
        if not existing:
            continue
        chunks.append(f'<div class="seo-nav-section">{section}</div>')
        for f, label, t in existing:
            on = "on" if f == current else ""
            cls = "seo-nav-link on" if on else "seo-nav-link"
            chunks.append(f'<a class="{cls}" href="/seo/{f}" title="{t}">{label}</a>')
    chunks.append('<div class="seo-nav-foot">password-gated · noindex</div></aside>')
    return "".join(chunks)


def topbar(current):
    title = TITLES.get(current, "SEO Intelligence")
    return f'''<header id="seo-topbar">
  <div class="seo-topbar-main">
    <button type="button" class="seo-nav-toggle" aria-label="Open navigation">☰</button>
    <div>
      <h1 class="seo-page-title">{title}</h1>
      <p class="seo-page-meta" data-seo-meta></p>
    </div>
  </div>
  <div class="seo-topbar-actions">
    <button type="button" class="seo-btn seo-btn-primary" data-seo-action="run">Run Agent</button>
    <button type="button" class="seo-btn" data-seo-action="export">Export</button>
    <a class="seo-btn seo-btn-ghost" href="/seo/settings.html">Settings</a>
    <button type="button" class="seo-btn seo-btn-ghost" data-seo-action="help" aria-label="About this page">?</button>
  </div>
</header>
<div id="seo-help-copy" hidden></div>'''


CHROME_END = '''
<div id="seo-drawer-backdrop"></div>
<aside id="seo-drawer" aria-label="Record inspector">
  <header>
    <h2 id="seo-drawer-title">Inspector</h2>
    <button type="button" class="seo-btn" onclick="window.seoCloseDrawer && seoCloseDrawer()">Close</button>
  </header>
  <div class="seo-drawer-body"></div>
</aside>
<div id="seo-modal-root"></div>
<script src="ui/board.js"></script>
<script src="/seo/ui/board.js"></script>
'''


def strip(html):
    html = re.sub(r"\s*<link rel=\"stylesheet\" href=\"[^\"]*ui/board\.css\">", "", html)
    html = re.sub(r"\s*<script src=\"[^\"]*ui/board\.js\"></script>", "", html)
    html = re.sub(r'<style id="board-nav-css">[\s\S]*?</style>', "", html)
    html = re.sub(r'<nav class="board-nav"[\s\S]*?</nav>', "", html)
    html = re.sub(r'<aside id="seo-nav"[\s\S]*?</aside>', "", html)
    html = re.sub(r'<header id="seo-topbar"[\s\S]*?</header>', "", html)
    html = re.sub(r'<div id="seo-help-copy"[^>]*>[\s\S]*?</div>', "", html)
    html = re.sub(r'<div id="seo-drawer-backdrop"[^>]*></div>', "", html)
    html = re.sub(r'<aside id="seo-drawer"[\s\S]*?</aside>', "", html)
    html = re.sub(r'<div id="seo-modal-root"[\s\S]*?</div>', "", html)
    html = re.sub(r'\sclass="seo-os"', "", html)
    html = re.sub(r" data-seo-page=\"[^\"]*\"", "", html)
    return html


def absolutise(html):
    return re.sub(
        r'href="(?!https?:|/|#|mailto:)([\w.-]+\.(?:html|csv))(#[^"]*)?"',
        lambda m: f'href="/seo/{m.group(1)}{m.group(2) or ""}"' if m.group(1) in KNOWN else m.group(0),
        html,
    )


def strip_h1_links(html):
    m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S)
    if not m:
        return html
    inner = re.sub(r"\s*<a\b[^>]*>.*?</a>", "", m.group(1), flags=re.S).rstrip()
    return html[: m.start(1)] + inner + html[m.end(1) :]


def inject_head(html):
    if re.search(r"</head>", html, re.I):
        return re.sub(r"</head>", ASSETS + "</head>", html, count=1, flags=re.I)
    return html


def add_body_attrs(html, current):
    def repl(m):
        attrs = m.group(1)
        if "class=" in attrs:
            attrs = re.sub(r'class="([^"]*)"', lambda x: f'class="{x.group(1)} seo-os"', attrs, count=1)
        else:
            attrs += ' class="seo-os"'
        if "data-seo-page=" not in attrs:
            attrs += f' data-seo-page="{current}"'
        return f"<body{attrs}>"

    html = re.sub(r"<html([^>]*)>", lambda m: m.group(0) if "seo-os" in m.group(1) else f'<html{m.group(1)} class="seo-os">', html, count=1)
    return re.sub(r"<body([^>]*)>", repl, html, count=1)


def wrap(html, current):
    html = strip(html)
    html = absolutise(html)
    html = strip_h1_links(html)
    html = inject_head(html)
    html = add_body_attrs(html, current)
    m = re.search(r"<body[^>]*>", html)
    if not m:
        return html
    html = html[: m.end()] + sidebar(current) + topbar(current) + html[m.end() :]
    html = re.sub(r"</body>", CHROME_END + "</body>", html, count=1)
    return html


ROOM = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>myCHEF SEO Intelligence — {title}</title>
</head>
<body>
<header>
  <h1>{title}</h1>
  <p class="sub">{lede}</p>
</header>
<main class="seo-room">
{body}
</main>
</body>
</html>
"""


def write_rooms():
    rooms = {
        "gsc.html": (
            "Search Console",
            "Impressions, clicks, CTR and average position from the mychef.ae property. The board does not invent ranking numbers.",
            """
            <p class="seo-help">Live rows land on <a href="/seo/ownership.html">Keywords</a> (gsc_clicks, gsc_impressions, gsc_position) and <a href="/seo/report.html">Research</a>. Health of the connection is on <a href="/seo/status.html">Status</a>.</p>
            <div class="seo-room-grid">
              <article class="seo-metric"><div class="seo-metric-value">GSC</div><div class="seo-metric-label">Query · page · date</div><p class="seo-metric-delta">Collected by harvest-gsc.py into the archive.</p></article>
              <article class="seo-metric"><div class="seo-metric-value">90d</div><div class="seo-metric-label">Default window</div><p class="seo-metric-delta">Wrong-owner phrases (20+ impressions, not the assigned URL) surface as a critical count on Keywords.</p></article>
            </div>
            <p><a class="seo-btn seo-btn-primary" href="/seo/ownership.html">Open keyword file</a> <a class="seo-btn" href="/seo/status.html">Connection health</a></p>
            """,
        ),
        "analytics.html": (
            "Analytics",
            "Vercel Web Analytics, first-party events, and GA4 when the property is granted.",
            """
            <p class="seo-help">Traffic per URL is joined onto the keyword file (visitors, pageviews, conversions, bounce, median seconds). First-party events come from <code>/api/e</code>.</p>
            <div class="seo-room-grid">
              <article class="seo-metric"><div class="seo-metric-value">Vercel</div><div class="seo-metric-label">Visitors · pageviews</div><p class="seo-metric-delta">harvest-vercel-analytics.py</p></article>
              <article class="seo-metric"><div class="seo-metric-value">1P</div><div class="seo-metric-label">WhatsApp · scroll · dwell</div><p class="seo-metric-delta">harvest-firstparty.py</p></article>
              <article class="seo-metric is-attn"><div class="seo-metric-value">GA4</div><div class="seo-metric-label">Waiting on access</div><p class="seo-metric-delta">See Status for the service-account grant.</p></article>
            </div>
            <p><a class="seo-btn seo-btn-primary" href="/seo/ownership.html">Traffic on keywords</a> <a class="seo-btn" href="/seo/status.html">Connection health</a></p>
            """,
        ),
        "semrush.html": (
            "Semrush",
            "Historic UAE export only. The API is out of units — this room will not pretend otherwise.",
            """
            <p class="seo-help">ae rows from the owner export still inform Backlog volume. us rows are phrasing hints, never treated as UAE demand. No live Semrush pull runs in the loop.</p>
            <p><a class="seo-btn seo-btn-primary" href="/seo/backlog.html">Open backlog</a> <a class="seo-btn" href="/seo/demand.html">Measured UAE demand</a></p>
            """,
        ),
        "dataforseo.html": (
            "DataForSEO",
            "UAE volume, difficulty, intent, live SERPs, competitor ranked keywords, and Claude LLM answers.",
            """
            <p class="seo-help">Collectors write into <code>.live/research/dataforseo/</code> and the archive. Cost is billed per endpoint — SERPs are ~$0.005 each.</p>
            <div class="seo-room-grid">
              <article class="seo-metric"><div class="seo-metric-value">Vol</div><div class="seo-metric-label">Google Ads UAE</div><p class="seo-metric-delta">0 means below the floor, not never searched.</p></article>
              <article class="seo-metric"><div class="seo-metric-value">SERP</div><div class="seo-metric-label">Organic UAE top 30</div><p class="seo-metric-delta">Position, overlap, competitor gap.</p></article>
              <article class="seo-metric"><div class="seo-metric-value">LLM</div><div class="seo-metric-label">AI answers</div><p class="seo-metric-delta">See AI Visibility.</p></article>
            </div>
            <p><a class="seo-btn seo-btn-primary" href="/seo/demand.html">Demand</a> <a class="seo-btn" href="/seo/report.html">Research</a> <a class="seo-btn" href="/seo/ai-visibility.html">AI Visibility</a></p>
            """,
        ),
        "connections.html": (
            "Connections",
            "Keys and freshness. Green means the source answered and data landed recently — not merely that a file exists.",
            """
            <p class="seo-help">The live probe is <a href="/seo/status.html">Status</a>. This room is the map of what the OS expects.</p>
            <table><thead><tr><th>Source</th><th>Feeds</th><th>Credential</th><th>Collector</th></tr></thead><tbody>
            <tr><td>Neon Postgres</td><td>Archive of every run</td><td>neon.env / DATABASE_URL</td><td>store-keywords.py</td></tr>
            <tr><td>DataForSEO</td><td>Volume, SERPs, LLM</td><td>dataforseo.env</td><td>harvest-serps.py · harvest-llm.py</td></tr>
            <tr><td>Google Search Console</td><td>Clicks, impressions, position</td><td>service-account.json</td><td>harvest-gsc.py</td></tr>
            <tr><td>Bing Webmaster</td><td>Bing crawl / ranking</td><td>bing-webmaster.env</td><td>check-integrations.py</td></tr>
            <tr><td>Vercel Analytics</td><td>Visitors, pageviews</td><td>vercel.env</td><td>harvest-vercel-analytics.py</td></tr>
            <tr><td>First-party events</td><td>Dwell, WhatsApp, scroll</td><td>DATABASE_URL</td><td>harvest-firstparty.py</td></tr>
            <tr><td>GA4</td><td>Engagement</td><td>service-account.json</td><td>harvest-ga4.py — grant pending</td></tr>
            <tr><td>PageSpeed / CrUX</td><td>Core Web Vitals</td><td>google-psi.env</td><td>no collector yet</td></tr>
            </tbody></table>
            <p><a class="seo-btn seo-btn-primary" href="/seo/status.html">Open Status</a></p>
            """,
        ),
        "settings.html": (
            "Settings",
            "The board is a read surface on static files plus a password gate. Density and chrome live in the OS shell.",
            """
            <h2>How a run works</h2>
            <ol class="seo-run-steps">
              <li class="done"><span class="seo-run-dot"></span>Snapshot the site (live fetch or local dist)</li>
              <li class="done"><span class="seo-run-dot"></span>Harvest Search Console, analytics, behaviour</li>
              <li class="done"><span class="seo-run-dot"></span>Rebuild Keywords, Demand, Research, Links, Gaps, Architecture</li>
              <li class="done"><span class="seo-run-dot"></span>Probe integrations · write Status · archive to Postgres</li>
              <li class="done"><span class="seo-run-dot"></span>Publish into /seo (this shell)</li>
            </ol>
            <p class="seo-help"><code>docs/seo/keyword-map/run-loop.sh live</code> — nothing on this page edits copy. Optimizer writes are reversible and listed under Agent Runs.</p>
            <h2>Access</h2>
            <p class="seo-help">HTTP Basic Auth via <code>SEO_PASSWORD</code>. Pages send <code>X-Robots-Tag: noindex</code>. <code>/seo/robots.txt</code> disallows all agents.</p>
            <h2>Display</h2>
            <p class="seo-help">Tables paginate at 100 rows, sort on header click, and open a right-hand inspector. Filter chips stay on each page. Saved column layouts are not persisted on the server.</p>
            """,
        ),
    }
    for name, (title, lede, body) in rooms.items():
        path = OUT / name
        if not path.exists() or "seo-room" not in path.read_text(encoding="utf-8", errors="ignore"):
            path.write_text(ROOM.format(title=title, lede=lede, body=body), encoding="utf-8")


def copy_ui():
    dest = (OUT / "ui").resolve()
    dest.mkdir(parents=True, exist_ok=True)
    for f in ("board.css", "board.js"):
        src = (HERE / "ui" / f).resolve()
        if src.exists() and src != dest / f:
            shutil.copy2(src, dest / f)


def main():
    if not OUT.exists():
        print(f"no {OUT} — nothing to inject")
        return 0
    copy_ui()
    write_rooms()
    done = 0
    for f in ALL_PAGES:
        p = OUT / f
        if not p.exists():
            continue
        html = p.read_text(encoding="utf-8", errors="ignore")
        p.write_text(wrap(html, f), encoding="utf-8")
        done += 1
    print(f"SEO OS shell applied to {done} page(s) in {OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

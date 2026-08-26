#!/usr/bin/env python3
"""Status — is the whole SEO system actually healthy, in one screen.

Reads what check-integrations.py measured and renders it as the page you open first: one card
per service with its state, what it last delivered, when that was, and the error if there is
one. A source that authenticates but has stopped delivering shows as stale rather than green,
because "the key works" is not the question worth answering.

    python3 docs/seo/keyword-map/build-status.py

Writes status.html next to the other board pages.
"""
import datetime, html as _html, json, pathlib

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE / ".live/research/health/integrations.json"

STATE = {
    "connected": ("Connected", "ok"),
    "stale": ("Stale", "warn"),
    "no data": ("No data yet", "warn"),
    "not connected": ("Not connected", "off"),
    "error": ("Error", "bad"),
}
STALE_AFTER = {"Search": 7, "Traffic": 2, "Behaviour": 2, "Demand & SERPs": 30, "AI": 60, "Store": 2, "Platform": 7}


def esc(s):
    return _html.escape(str(s if s is not None else ""))


if not SRC.exists():
    raise SystemExit("no health snapshot — run check-integrations.py first")

data = json.loads(SRC.read_text())
services, summary = data["services"], data["summary"]

# a source can authenticate and still have stopped feeding the board; say so
for s in services:
    limit = STALE_AFTER.get(s.get("group"), 14)
    if s["status"] == "connected" and s.get("stale_days") is not None and s["stale_days"] > limit:
        s["status"] = "stale"
        s["error"] = s.get("error") or f"last data is {s['last_success_age']}, older than the {limit}-day expectation"

groups, order = {}, []
for s in services:
    if s["group"] not in groups:
        groups[s["group"]] = []
        order.append(s["group"])
    groups[s["group"]].append(s)

counts = {k: sum(1 for s in services if s["status"] == k) for k in STATE}
db = summary.get("database") or {}
rows_total = sum((db.get("counts") or {}).values())

cards = []
for g in order:
    cards.append(f'<h2>{esc(g)}</h2><div class="grid">')
    for s in groups[g]:
        label, cls = STATE.get(s["status"], ("Unknown", "off"))
        cards.append(f'''<div class="card {cls}">
  <div class="top"><span class="dot"></span><span class="name">{esc(s["service"])}</span><span class="state">{esc(label)}</span></div>
  <p class="detail">{esc(s["detail"])}</p>
  <dl>
    <div><dt>Last data</dt><dd>{esc(s["last_success_age"] or "—")}{f'<span class="muted"> · {esc(s["last_success"][:16])}</span>' if s.get("last_success") else ""}</dd></div>
    <div><dt>Checked</dt><dd>{esc(s["last_attempt"][11:16])} today</dd></div>
  </dl>
  {f'<p class="err">{esc(s["error"])}</p>' if s.get("error") else ""}
</div>''')
    cards.append("</div>")

tables = "".join(f'<tr><td class="mono">{esc(t)}</td><td class="nums">{n:,}</td></tr>'
                 for t, n in sorted((db.get("counts") or {}).items(), key=lambda kv: -kv[1]))

page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>myCHEF Data Board — Status</title>
<style>
:root{{color-scheme:light;--ok:#1f7a4d;--warn:#9a6a12;--bad:#a5342a;--off:#6d7b78}}
body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:13px/1.5 Inter,-apple-system,system-ui,sans-serif}}
header{{padding:22px 28px 16px;border-bottom:1px solid #e2e1db}}
h1{{margin:0 0 4px;font-size:22px}}
.sub{{color:#52514e;max-width:94ch;margin:0}}
.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;padding:14px 28px 4px}}
.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}
.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}
.tile .l{{color:#52514e;font-size:12px;margin-top:3px}}
main{{padding:6px 28px 60px}}
h2{{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#83817a;margin:26px 0 10px;font-weight:600}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:12px}}
.card{{border:1px solid #e6e5df;border-radius:8px;background:#fff;padding:13px 15px;border-left:3px solid var(--off)}}
.card.ok{{border-left-color:var(--ok)}} .card.warn{{border-left-color:var(--warn)}}
.card.bad{{border-left-color:var(--bad)}} .card.off{{border-left-color:#c9c8c0}}
.top{{display:flex;align-items:center;gap:8px}}
.dot{{width:8px;height:8px;border-radius:50%;background:var(--off);flex:none}}
.card.ok .dot{{background:var(--ok)}} .card.warn .dot{{background:var(--warn)}}
.card.bad .dot{{background:var(--bad)}} .card.off .dot{{background:#c9c8c0}}
.name{{font-weight:600}}
.state{{margin-left:auto;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--off);font-weight:600}}
.card.ok .state{{color:var(--ok)}} .card.warn .state{{color:var(--warn)}} .card.bad .state{{color:var(--bad)}}
.detail{{margin:8px 0 10px;color:#3f4b48}}
dl{{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:6px;border-top:1px solid #f0efe9;padding-top:8px}}
dt{{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#9a988f}}
dd{{margin:2px 0 0;font-size:12px}}
.muted{{color:#9a988f}}
.err{{margin:9px 0 0;padding:7px 9px;background:#fbf1ef;border-radius:5px;color:#8a3d33;font-size:12px}}
table{{border-collapse:collapse;margin-top:8px;min-width:280px}}
td{{padding:4px 14px 4px 0;border-bottom:1px solid #f0efe9;font-size:12px}}
.mono{{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}}
.nums{{font-variant-numeric:tabular-nums;text-align:right;color:#52514e}}
.two{{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;align-items:start}}
</style></head><body>
<header>
  <h1>Status</h1>
  <p class="sub">Every source the board depends on, and whether it is actually feeding data — not just whether a key exists.
  A service that authenticates but has stopped delivering shows as stale. Checked {esc(summary["generated"])}.</p>
</header>
<div class="tiles">
  <div class="tile"><div class="n" style="color:var(--ok)">{counts['connected']}</div><div class="l">Connected and fresh</div></div>
  <div class="tile"><div class="n" style="color:var(--warn)">{counts['stale'] + counts['no data']}</div><div class="l">Stale or waiting for data</div></div>
  <div class="tile"><div class="n" style="color:var(--bad)">{counts['error'] + counts['not connected']}</div><div class="l">Errors or not connected</div></div>
  <div class="tile"><div class="n">{rows_total:,}</div><div class="l">Rows in the archive<br><span class="muted">{esc(db.get('runs'))} runs · {esc(db.get('size'))}</span></div></div>
</div>
<main>
{''.join(cards)}
<div class="two">
  <div>
    <h2>What the archive holds</h2>
    <table><tbody>{tables}</tbody></table>
  </div>
  <div>
    <h2>How to read this</h2>
    <p class="sub"><b>Connected</b> means the API answered and data from it has landed recently.
    <b>Stale</b> means the key works but nothing new has arrived — usually a collector that stopped running.
    <b>No data yet</b> means the connection is fine and the source has simply not produced anything.
    <b>Not connected</b> means a credential or a permission is missing; the card says which.</p>
    <p class="sub">The board is rebuilt by <span class="mono">run-loop.sh</span>, which refreshes every source in order,
    rescores the whole site, runs the gates and archives the run. Nothing here is scheduled yet: freshness depends on
    that command being run.</p>
  </div>
</div>
</main></body></html>"""

(HERE / "status.html").write_text(page, encoding="utf-8")
print(f"status.html — {counts['connected']} connected · {counts['stale'] + counts['no data']} stale/waiting · "
      f"{counts['error'] + counts['not connected']} need attention")

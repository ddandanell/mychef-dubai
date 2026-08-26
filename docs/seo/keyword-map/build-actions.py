#!/usr/bin/env python3
"""Actions — every change the agent made to the site, in the order it made them.

The optimizer has always logged what it wrote (url, which part of the page, the text before,
the text after, when). Until now that log lived in a JSONL file and a Postgres table nobody
opened. This turns it into the page you check after a run: what changed, where on the page,
and what the words were before — so a bad edit is visible in seconds rather than at the next
audit.

Two streams, one timeline:
  copy changes   from seo_optimizer_log — the agent editing titles, descriptions, H1s,
                 headings, body sentences and FAQs
  deploys        from git — every commit that touched the site or the board, because a change
                 nobody deployed is not yet real

    python3 docs/seo/keyword-map/build-actions.py [--limit 400]

Writes actions.html next to the other board pages.
"""
import datetime, html as _html, json, os, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
LIMIT = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 400
SITE = "https://www.mychef.ae"

WHERE_LABEL = {"title": "Page title", "description": "Meta description", "h1": "H1 heading",
               "h2": "Section heading", "body": "Body copy", "faq": "FAQ", "opening": "Opening paragraph"}
WHERE_RANK = {"title": 0, "description": 1, "h1": 2, "h2": 3, "opening": 4, "body": 5, "faq": 6}


def esc(s):
    return _html.escape(str(s if s is not None else ""))


def diff_words(before, after):
    """Highlight what actually moved. A whole-paragraph rewrite reads as noise otherwise."""
    if not before:
        return "", f"<ins>{esc(after)}</ins>"
    b, a = (before or "").split(), (after or "").split()
    # longest common prefix / suffix — enough for the way this optimizer edits
    i = 0
    while i < min(len(b), len(a)) and b[i] == a[i]: i += 1
    j = 0
    while j < min(len(b), len(a)) - i and b[-1 - j] == a[-1 - j]: j += 1
    mid_b, mid_a = b[i:len(b) - j], a[i:len(a) - j]
    head, tail = " ".join(b[:i]), " ".join(b[len(b) - j:]) if j else ""
    fmt = lambda pre, mid, post, tag: (
        (esc(pre) + " " if pre else "") + (f"<{tag}>{esc(' '.join(mid))}</{tag}> " if mid else "") + (esc(post) if post else "")).strip()
    return fmt(head, mid_b, tail, "del"), fmt(head, mid_a, tail, "ins")


def load_changes():
    """Postgres first — it holds every run ever. The local JSONL is the fallback."""
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if os.path.exists(envf):
        try:
            import psycopg2
            env = {k: v.strip().strip('"').strip("'") for k, v in
                   (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
            conn = psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"])
            cur = conn.cursor()
            cur.execute("""SELECT url, file, where_, how, before_, after_, applied_at
                           FROM seo_optimizer_log ORDER BY applied_at DESC NULLS LAST, id DESC LIMIT %s""", (LIMIT,))
            rows = [{"url": u, "file": f, "where": w, "how": h, "before": b, "after": a,
                     "at": at.isoformat(timespec="minutes") if at else None} for u, f, w, h, b, a, at in cur.fetchall()]
            conn.close()
            if rows: return rows, "the archive"
        except Exception:
            pass
    out = []
    logf = HERE / ".live/optimizer-log.jsonl"
    if logf.exists():
        for line in logf.read_text().splitlines():
            try: d = json.loads(line)
            except Exception: continue
            if not d.get("applied"): continue
            for c in d["changes"]:
                out.append({"url": d["url"], "file": d.get("file"), "where": c["where"], "how": c["how"],
                            "before": c.get("before"), "after": c.get("after"), "at": d.get("at")})
    return out[::-1][:LIMIT], "the local log"


def load_deploys(n=40):
    fmt = "%H%x1f%h%x1f%ad%x1f%s%x1e"
    raw = subprocess.run(["git", "log", f"-{n}", f"--pretty=format:{fmt}", "--date=format:%Y-%m-%d %H:%M"],
                         cwd=ROOT, capture_output=True, text=True).stdout
    out = []
    for rec in raw.split("\x1e"):
        if not rec.strip(): continue
        full, short, when, subject = rec.strip("\n").split("\x1f")
        files = subprocess.run(["git", "show", "--name-only", "--pretty=format:", full],
                               cwd=ROOT, capture_output=True, text=True).stdout.split()
        site = [f for f in files if f.startswith(("src/", "public/", "api/", "index.html", "vercel.json"))]
        out.append({"short": short, "when": when, "subject": subject, "files": len(files), "site_files": len(site)})
    return out


changes, source = load_changes()
deploys = load_deploys()

by_day = {}
for c in changes:
    day = (c["at"] or "unknown")[:10]
    by_day.setdefault(day, []).append(c)
for day in by_day:
    by_day[day].sort(key=lambda c: (c["url"], WHERE_RANK.get(c["where"], 9)))

kinds = sorted({c["where"] for c in changes})
pages_touched = len({c["url"] for c in changes})

rows_html = []
for day in sorted(by_day, reverse=True):
    items = by_day[day]
    rows_html.append(f'<h2 class="day">{esc(day)} <span class="muted">{len(items)} change'
                     f'{"" if len(items) == 1 else "s"} · {len({i["url"] for i in items})} page'
                     f'{"" if len({i["url"] for i in items}) == 1 else "s"}</span></h2>')
    current_url = None
    for c in items:
        if c["url"] != current_url:
            current_url = c["url"]
            rows_html.append(f'<div class="pagehead"><a href="{SITE}{esc(c["url"])}" target="_blank" rel="noopener">'
                             f'<code>{esc(c["url"])}</code></a>'
                             f'<span class="muted">{esc((c.get("file") or "").split("/")[-1])}</span></div>')
        before, after = diff_words(c.get("before"), c.get("after"))
        rows_html.append(
            f'<div class="change" data-t="{esc((c["url"] + " " + (c["where"] or "") + " " + (c.get("after") or "")).lower())}" data-where="{esc(c["where"])}">'
            f'<div class="where"><span class="tag t-{esc(c["where"])}">{esc(WHERE_LABEL.get(c["where"], c["where"]))}</span>'
            f'<span class="how">{esc(c["how"])}</span><span class="when">{esc((c["at"] or "")[11:])}</span></div>'
            f'<div class="text">{f"<div class=b>{before}</div>" if before else ""}<div class="a">{after}</div></div></div>')

deploy_html = "".join(
    f'<tr><td class="mono">{esc(d["short"])}</td><td class="mono">{esc(d["when"])}</td>'
    f'<td>{esc(d["subject"])}</td><td class="nums">{d["site_files"]} of {d["files"]}</td></tr>' for d in deploys)

page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>myCHEF Data Board — Actions</title>
<style>
:root{{color-scheme:light}}
body{{margin:0;background:#fcfcfb;color:#0b0b0b;font:13px/1.5 Inter,-apple-system,system-ui,sans-serif}}
header{{padding:22px 28px 14px;border-bottom:1px solid #e2e1db}}
h1{{margin:0 0 4px;font-size:22px}}
.sub{{color:#52514e;max-width:92ch;margin:0}}
.tiles{{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;padding:14px 28px 6px}}
.tile{{border:1px solid #e2e1db;border-radius:8px;padding:10px 12px;background:#fff}}
.tile .n{{font-size:24px;font-weight:600;line-height:1.1}}
.tile .l{{color:#52514e;font-size:12px;margin-top:3px}}
.filters{{position:sticky;top:41px;z-index:5;display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:10px 28px;background:#fcfcfb;border-bottom:1px solid #e2e1db}}
.filters input,.filters select{{padding:6px 10px;border:1px solid #c9c8c0;border-radius:6px;font:inherit;background:#fff}}
.filters input{{width:280px}}
main{{padding:8px 28px 60px}}
.day{{font-size:14px;margin:26px 0 10px;padding-bottom:6px;border-bottom:1px solid #e2e1db;font-weight:600}}
.day .muted{{font-weight:400}}
.muted{{color:#83817a}}
.pagehead{{display:flex;gap:10px;align-items:baseline;margin:16px 0 6px}}
.pagehead a{{text-decoration:none}}
code{{font:12px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;background:#f1f0ea;padding:1px 5px;border-radius:4px;color:#0b0b0b}}
.change{{border:1px solid #e6e5df;border-left:3px solid #d8d6cc;border-radius:6px;background:#fff;padding:9px 12px;margin:0 0 7px}}
.change .where{{display:flex;gap:10px;align-items:baseline;margin-bottom:5px;flex-wrap:wrap}}
.tag{{font-size:11px;letter-spacing:.04em;text-transform:uppercase;padding:2px 7px;border-radius:3px;background:#eef1ef;color:#3d4a47;font-weight:600}}
.t-title,.t-description{{background:#e8eef7;color:#28517f}}
.t-h1,.t-h2{{background:#eaf1ea;color:#2c5c38}}
.t-body,.t-opening{{background:#f6efe3;color:#7a5418}}
.t-faq{{background:#f2ecf6;color:#5a3a75}}
.how{{color:#52514e;font-size:12px}}
.when{{margin-left:auto;color:#a3a199;font-size:11px}}
.text .b{{color:#8a4b45;margin-bottom:3px}}
.text .a{{color:#1d3b2a}}
del{{background:#f7e2e0;text-decoration:line-through;padding:0 2px;border-radius:2px}}
ins{{background:#dcefe0;text-decoration:none;padding:0 2px;border-radius:2px}}
table{{border-collapse:collapse;width:100%;margin-top:8px}}
th,td{{text-align:left;padding:6px 10px;border-bottom:1px solid #eceae4;vertical-align:top;font-size:12px}}
th{{color:#83817a;font-weight:500;text-transform:uppercase;letter-spacing:.08em;font-size:10px}}
.mono{{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}}
.nums{{font-variant-numeric:tabular-nums;color:#52514e}}
.hidden{{display:none}}
h3{{font-size:14px;margin:34px 0 0}}
</style></head><body>
<header>
  <h1>Actions</h1>
  <p class="sub">Every edit the agent made to the site, newest first — what it changed, where on the page,
  and the words before and after. Red is what left, green is what arrived. Click a URL to open the live page and judge it.
  Read from {esc(source)}. Generated {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}.</p>
</header>
<div class="tiles">
  <div class="tile"><div class="n">{len(changes)}</div><div class="l">Changes recorded</div></div>
  <div class="tile"><div class="n">{pages_touched}</div><div class="l">Pages touched</div></div>
  <div class="tile"><div class="n">{len(by_day)}</div><div class="l">Days with edits</div></div>
  <div class="tile"><div class="n">{len(deploys)}</div><div class="l">Recent deploys<br><span class="muted">a push to main is a release</span></div></div>
</div>
<div class="filters">
  <input type="search" id="q" placeholder="Search a URL or the new text…">
  <select id="w"><option value="">Everywhere on the page</option>{''.join(f'<option value="{esc(k)}">{esc(WHERE_LABEL.get(k, k))}</option>' for k in kinds)}</select>
  <span class="muted" id="count"></span>
</div>
<main>
{''.join(rows_html) or '<p class="muted">No changes recorded yet.</p>'}
<h3>Deploys</h3>
<p class="sub muted">A push to main deploys production, so this is the release log. "Site files" counts what of the commit touched the live site rather than the board.</p>
<table><thead><tr><th>Commit</th><th>When</th><th>What</th><th>Site files</th></tr></thead><tbody>{deploy_html}</tbody></table>
</main>
<script>
const q = document.getElementById('q'), w = document.getElementById('w'), count = document.getElementById('count');
function apply() {{
  const text = q.value.trim().toLowerCase(), where = w.value;
  let shown = 0;
  document.querySelectorAll('.change').forEach((el) => {{
    const ok = (!text || el.dataset.t.includes(text)) && (!where || el.dataset.where === where);
    el.classList.toggle('hidden', !ok); if (ok) shown += 1;
  }});
  document.querySelectorAll('.pagehead').forEach((h) => {{
    let el = h.nextElementSibling, any = false;
    while (el && el.classList.contains('change')) {{ if (!el.classList.contains('hidden')) any = true; el = el.nextElementSibling; }}
    h.classList.toggle('hidden', !any);
  }});
  document.querySelectorAll('.day').forEach((d) => {{
    let el = d.nextElementSibling, any = false;
    while (el && !el.classList.contains('day')) {{ if (el.classList.contains('change') && !el.classList.contains('hidden')) any = true; el = el.nextElementSibling; }}
    d.classList.toggle('hidden', !any);
  }});
  count.textContent = shown + ' of {len(changes)} changes';
}}
q.addEventListener('input', apply); w.addEventListener('change', apply); apply();
</script>
</body></html>"""

(HERE / "actions.html").write_text(page, encoding="utf-8")
print(f"actions.html — {len(changes)} changes across {pages_touched} pages, {len(deploys)} deploys (source: {source})")

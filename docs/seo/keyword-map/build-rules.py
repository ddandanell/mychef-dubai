#!/usr/bin/env python3
"""The rules this system runs on, with live pass/fail — not a document nobody opens.

Every rule here exists because something went wrong once. The board shows the rule, the reason
it exists, where it is enforced, and whether it holds right now. A rule with no enforcement is
listed as such rather than quietly assumed.

    python3 docs/seo/keyword-map/build-rules.py [--quick]

--quick skips the gates that need a build. Writes rules.json next to the other board data.
"""
from __future__ import annotations

import datetime, json, pathlib, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
OUT = HERE / "rules.json"
QUICK = "--quick" in sys.argv


def run(cmd: list[str]) -> tuple[str, str]:
    """A gate's own exit code is the status; its last line is the evidence."""
    try:
        p = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=240)
    except Exception as ex:  # noqa: BLE001
        return "unknown", str(ex)[:120]
    lines = [l for l in (p.stdout or p.stderr).splitlines() if l.strip()]
    return ("holds" if p.returncode == 0 else "broken"), (lines[-1].strip()[:180] if lines else "")


def data(name):
    f = HERE / name
    try:
        return json.loads(f.read_text()) if f.exists() else {}
    except Exception:  # noqa: BLE001
        return {}


RULES = [
    {
        "id": "one-contract",
        "rule": "One contract decides which keyword each URL owns. Nothing else may decide it.",
        "why": "Two pages targeting one phrase is the cheapest way to lose both. The contract is the only "
               "place ownership is written, and a verifier fails the build if it contradicts itself.",
        "where": "docs/seo/myCHEF-AE-SEO-STANDARD.json",
        "check": ["python3", "scripts/verify-seo-contract.py"],
    },
    {
        "id": "locks-in-code",
        "rule": "Every page file carries its own keyword lock, generated from the contract.",
        "why": "A page and the contract drifting apart is invisible until a rewrite quietly re-targets a "
               "page. The lock header makes the intent readable where the copy is edited.",
        "where": "src/**/*.tsx headers · src/content/keywordLocks.ts",
        "check": ["python3", "scripts/verify-keyword-locks.py"],
    },
    {
        "id": "hero-sells",
        "rule": "A hero sells. Keyword and coverage copy go below the fold — 90 words of hero prose, "
                "140 for an article header.",
        "why": "The body-sentence optimizer chose the first prose paragraph, which on most templates is the "
               "hero subtitle. /bbq-catering-dubai reached 245 words above the fold.",
        "where": "optimize-page.py hero_end() · move-hero-copy.py",
        "check": ["python3", "scripts/verify-hero.py"],
        "needs_build": True,
    },
    {
        "id": "subs-in-sentences",
        "rule": "Subkeywords live in sentences. Never in a title, an H1 or a heading.",
        "why": "One FAQ per subkeyword put phrases into h3s and pushed pages to 26 FAQs. The contract's own "
               "rule is sentences only; the optimizer enforces it and the map counts violations.",
        "where": "optimize-page.py · the map's sub_violations column",
    },
    {
        "id": "faq-cap",
        "rule": "A page carries 5–8 FAQs. The optimizer adds none to a page already at the cap.",
        "why": "An earlier pass added one FAQ per missing phrase: 24–26 per page, with answers repeated "
               "word for word across the site.",
        "where": "optimize-page.py FAQ_CAP · docs/seo/CONSOLIDATION-PLAN.md",
    },
    {
        "id": "no-junk-phrases",
        "rule": "Never write a phrase from the unplaceable list into copy — meal-kit brands, non-UAE cities, "
                "foreign regulators, other people's conferences.",
        "why": "The harvested keyword pool carries them, and 'Green chef offers gift cards' reached the "
               "working tree before it was caught.",
        "where": "optimize-page.py UNPLACEABLE · fill-subkeywords.py filters",
    },
    {
        "id": "measured-demand",
        "rule": "A primary keyword needs measured UAE demand. Zero-volume phrases are fine as subkeywords, "
                "never as a page's target.",
        "why": "A page aimed at demand that does not exist has nothing to win, however well it is written.",
        "where": "the keyword file's next action · Control's demand debt",
    },
    {
        "id": "self-contained-functions",
        "rule": "A Vercel function in api/ imports packages only. No relative imports, ever.",
        "why": "Every file in api/ is compiled as its own function; a relative import is not resolved at "
               "runtime. The build passes and the endpoint returns 500. It happened twice in one day: "
               "/api/e and /api/seo-login.",
        "where": "scripts/verify-api-functions.py · .claude hookify rule",
        "check": ["python3", "scripts/verify-api-functions.py"],
    },
    {
        "id": "retirements-agree",
        "rule": "A retired URL redirects, leaves the sitemap, loses its internal links, and says so in the "
                "contract. All four signals or none.",
        "why": "A half-retired URL keeps collecting links and splitting authority with its replacement.",
        "where": "scripts/verify-retirements.py",
        "check": ["python3", "scripts/verify-retirements.py"],
    },
    {
        "id": "on-page-basics",
        "rule": "Title under 65 characters, description in range, one H1, canonical present, primary in the "
                "title and the H1.",
        "why": "The unglamorous half of on-page SEO, and the half that silently rots during a redesign.",
        "where": "scripts/audit-onpage.py",
        "check": ["python3", "scripts/audit-onpage.py"],
        "needs_build": True,
    },
    {
        "id": "measure-the-build",
        "rule": "Scores come from the built HTML, never from intent. Rebuild and re-snapshot before judging "
                "whether a change landed.",
        "why": "A score that moved without a rebuild is measuring the previous build.",
        "where": "build-keyword-map.py --dist · run-loop.sh",
    },
    {
        "id": "experiment-every-apply",
        "rule": "Every applied change opens an experiment with a window and a verdict. A drop opens a watch "
                "proposal — never an automatic revert.",
        "why": "1,615 edits had been made with no baseline, so none of them could be judged.",
        "where": "backfill-experiments.py · close-experiments.py",
    },
    {
        "id": "nothing-auto-applies",
        "rule": "Nothing writes to the site without a person. The queue proposes; a human accepts.",
        "why": "The optimizer can edit 155 pages in a minute. That is exactly why it does not get to decide.",
        "where": "build-proposals.py never calls the optimizer · apply-safe.py is not built",
    },
    {
        "id": "commit-the-run",
        "rule": "A run is only visible on the board once its JSON is committed. public/seo/data is "
                "written during the Vercel build from the committed files.",
        "why": "A loop can run, archive to Postgres and update every local file while the live board "
               "keeps showing yesterday — the JSON is the payload, and an uncommitted payload never ships.",
        "where": "docs/seo/keyword-map/*.json → export-board-data.py → public/seo/data (gitignored)",
    },
    {
        "id": "log-every-change",
        "rule": "Every change to the site is logged with its date and the URLs it can affect — copy, "
                "images, design, retirements, all of it.",
        "why": "A rise or a fall is unreadable without what was done. The record used to be split "
               "across a Postgres table, git and a JSON map, so a number could never be joined to "
               "the edit that caused it.",
        "where": "build-changelog.py → seo_changelog · the Changes page",
    },
    {
        "id": "compare-like-with-like",
        "rule": "Compare the last seven complete days with the seven before them, and never against "
                "a part-reported day.",
        "why": "Search Console reports two to three days late. Comparing today with last Tuesday "
               "invents a crash that is only the reporting lag, and a weekend against a weekday "
               "invents a trend that is only the weekend.",
        "where": "build-movers.py windows · the Control page",
    },
    {
        "id": "name-the-reason-honestly",
        "rule": "A move is explained from the arithmetic first — ranking, demand or click-through — "
                "and only then blamed on a change that could plausibly cause that shape.",
        "why": "Blaming every move on the most recent edit is how a dashboard starts lying. And an "
               "average position that improves while impressions fall is a page losing its long "
               "tail, not a page winning.",
        "where": "build-movers.py explain()",
    },
    {
        "id": "push-is-release",
        "rule": "A push to main is a release. Run every gate before pushing, never after.",
        "why": "Vercel's Git integration deploys production on every push to main.",
        "where": "run-loop.sh gate block",
    },
    {
        "id": "credentials-outside",
        "rule": "Credentials live in ~/.config/claude-seo and Vercel environment variables. Never in the repo.",
        "why": "A key in a commit is a key that has to be rotated.",
        "where": "~/.config/claude-seo (mode 600) · Vercel project env",
    },
]


def main():
    kw, mp = data("keywords.json"), data("data.json")
    stats = kw.get("stats", {})
    rows = [r for r in kw.get("rows", []) if r.get("keyword")]

    # Rules without a gate still have evidence — the numbers the board already holds.
    evidence = {
        # The count that matters is another page's primary sitting in this page's heading. A page
        # whose own primary appears in its own heading is not a fault, and counting those made the
        # number read as 30 when the real figure is the collision count.
        "subs-in-sentences": (f"{stats.get('heading_collisions', mp.get('stats', {}).get('heading_collisions', 0))} "
                              "heading collision(s): another page's primary used in a heading here"),
        "measured-demand": f"{stats.get('primaries_no_demand', 0)} of {stats.get('primaries', 0)} primaries have no measured UAE volume",
        "faq-cap": "the optimizer adds none above the cap; pages already over it are an owner decision",
        "no-junk-phrases": "81 phrases removed from the contract and blocked in the filler",
        "experiment-every-apply": f"{len(data('experiments.json').get('items', []))} experiment(s) recorded",
        "nothing-auto-applies": f"{sum(q['count'] for q in data('control.json').get('queue', []) if q.get('status') == 'open')} proposal(s) waiting for a decision",
        "log-every-change": f"{len(data('changelog.json').get('items', []))} change(s) logged over the last "
                            f"{data('changelog.json').get('window_days', 0)} days",
        "compare-like-with-like": (lambda m: f"{m.get('recent', {}).get('from', '?')} to {m.get('recent', {}).get('to', '?')} "
                                             f"against {m.get('prior', {}).get('from', '?')} to {m.get('prior', {}).get('to', '?')}")(data("movers.json")),
        "name-the-reason-honestly": f"{data('movers.json').get('attributed', 0)} of the movers this week are "
                                    "attributed to a change on that page",
    }

    out = []
    for rule in RULES:
        item = {k: v for k, v in rule.items() if k != "check"}
        if rule.get("check") and not (QUICK and rule.get("needs_build")):
            status, line = run(rule["check"])
            item["status"], item["evidence"] = status, line
            item["command"] = " ".join(rule["check"])
        else:
            item["status"] = "no gate" if not rule.get("check") else "not checked"
            item["evidence"] = evidence.get(rule["id"], "")
            if rule.get("check"):
                item["command"] = " ".join(rule["check"])
        out.append(item)

    holds = sum(1 for r in out if r["status"] == "holds")
    broken = sum(1 for r in out if r["status"] == "broken")
    gated = sum(1 for r in out if r["status"] in ("holds", "broken"))
    payload = {
        "generated": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "intro": ("Every rule here exists because something went wrong once. A rule with a gate is checked "
                  "on every run and fails the build when it breaks; a rule without one is written down and "
                  "carried by the tooling, with the numbers beside it."),
        "tiles": [
            {"value": str(len(out)), "label": "Rules"},
            {"value": str(gated), "label": "Enforced by a gate"},
            {"value": str(holds), "label": "Holding right now"},
            {"value": str(broken), "label": "Broken right now"},
        ],
        "rules": out,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n")
    print(f"rules.json — {len(out)} rules · {gated} gated · {holds} holding · {broken} broken")
    return 0


if __name__ == "__main__":
    sys.exit(main())

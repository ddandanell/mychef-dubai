#!/usr/bin/env bash
# The SEO loop, one command. Regenerates the sitemap and silo map, snapshots the pages (live or local prerender),
# rebuilds every research page and the keyword file, and runs the gates. Nothing here edits page copy — that is
# optimize-page.py / optimize-data-pages.py, run before this to measure their effect.
#
#   docs/seo/keyword-map/run-loop.sh live     # measure production (fetches www.mychef.ae)
#   docs/seo/keyword-map/run-loop.sh dist     # measure the working tree (needs `npm run build:prerender` first)
set -euo pipefail
cd "$(dirname "$0")/../../.."
MODE="${1:-dist}"
echo "== sitemap + silo map"; npx tsx scripts/generate-sitemap.ts >/dev/null; python3 scripts/generate-silo-map.py >/dev/null
echo "== snapshot ($MODE)"
if [ "$MODE" = "live" ]; then python3 docs/seo/keyword-map/build-keyword-map.py --fetch >/dev/null
else [ -d dist ] || { echo "no dist/ — run: npm run build:prerender"; exit 1; }; python3 docs/seo/keyword-map/build-keyword-map.py --dist >/dev/null; fi
# In dist mode every builder must read the pages just built, not the last live crawl. Without this
# the keyword file scored stale HTML: FAQ coverage read 9 keywords when the built pages had 203.
SNAP=""; [ "$MODE" = "dist" ] && SNAP="--dist"
echo "== traffic (Vercel Web Analytics)"; python3 docs/seo/keyword-map/harvest-vercel-analytics.py || true
echo "== search (Search Console)"; python3 docs/seo/keyword-map/harvest-gsc.py || true
echo "== behaviour (GA4)"; python3 docs/seo/keyword-map/harvest-ga4.py || true
echo "== behaviour (first-party)"; python3 docs/seo/keyword-map/harvest-firstparty.py || true
echo "== research pages"
python3 docs/seo/keyword-map/build-backlog.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-demand.py >/dev/null
python3 docs/seo/keyword-map/build-report.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-internal-links.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-gaps.py $SNAP >/dev/null 2>&1 || true
python3 docs/seo/keyword-map/build-architecture.py $SNAP >/dev/null
echo "== integrations"; python3 docs/seo/keyword-map/check-integrations.py --quiet || true
python3 docs/seo/keyword-map/build-status.py >/dev/null
cp docs/seo/keyword-map/ask-template.html docs/seo/keyword-map/ask.html
python3 docs/seo/keyword-map/build-actions.py >/dev/null
echo "== keyword file"; python3 docs/seo/keyword-map/build-ownership.py $SNAP | head -12
echo "== proposals"; python3 docs/seo/keyword-map/build-proposals.py || true
echo "== gates"
# The heartbeat records whether these passed, so their result has to be captured, not printed
# and forgotten. A pipe would hand back tail's exit code, hence the temp file.
GATES=pass
GATE_LOG=$(mktemp)
gate() {
  if "$@" >"$GATE_LOG" 2>&1; then tail -1 "$GATE_LOG"; else GATES=fail; echo "  GATE FAILED: $*"; tail -3 "$GATE_LOG"; fi
}
gate python3 scripts/verify-seo-contract.py
gate python3 scripts/verify-keyword-locks.py
gate python3 scripts/verify-retirements.py
gate python3 scripts/verify-api-functions.py
gate python3 scripts/audit-onpage.py
gate python3 scripts/verify-hero.py
rm -f "$GATE_LOG"
echo "== archive"; python3 docs/seo/keyword-map/store-keywords.py --mode "$MODE" || echo "  archive skipped (database unreachable) — the run still stands locally"
echo "== experiments"; python3 docs/seo/keyword-map/close-experiments.py || true
python3 docs/seo/keyword-map/build-experiments.py >/dev/null || true
echo "== rules"; python3 docs/seo/keyword-map/build-rules.py || true
echo "== control"; python3 docs/seo/keyword-map/build-control.py || true
# The heartbeat is the only proof this ran. GATES is set by the gate block above.
python3 docs/seo/keyword-map/heartbeat.py --kind full --mode "$MODE" --phase idle --gates "${GATES:-pass}" || true
docs/seo/keyword-map/publish.sh
echo "done — open docs/seo/keyword-map/index.html · ownership.html · report.html"

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
echo "== behaviour (GA4)"; python3 docs/seo/keyword-map/harvest-ga4.py || true
echo "== behaviour (first-party)"; python3 docs/seo/keyword-map/harvest-firstparty.py || true
echo "== research pages"
python3 docs/seo/keyword-map/build-backlog.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-demand.py >/dev/null
python3 docs/seo/keyword-map/build-report.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-internal-links.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-gaps.py $SNAP >/dev/null 2>&1 || true
python3 docs/seo/keyword-map/build-architecture.py $SNAP >/dev/null
python3 docs/seo/keyword-map/build-actions.py >/dev/null
echo "== keyword file"; python3 docs/seo/keyword-map/build-ownership.py $SNAP | head -12
echo "== gates"
python3 scripts/verify-seo-contract.py | tail -1
python3 scripts/verify-keyword-locks.py
python3 scripts/verify-retirements.py | tail -1
python3 scripts/audit-onpage.py 2>/dev/null | grep "total" || true
echo "== archive"; python3 docs/seo/keyword-map/store-keywords.py --mode "$MODE" || echo "  archive skipped (database unreachable) — the run still stands locally"
docs/seo/keyword-map/publish.sh
echo "done — open docs/seo/keyword-map/index.html · ownership.html · report.html"

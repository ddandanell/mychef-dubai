#!/usr/bin/env bash
# Cheap half of the loop: GSC + first-party + Vercel + daily rollup + proposal queue + Status.
# No SERPs, no LLM probes, no optimizer. Safe to cron daily.
#
#   docs/seo/keyword-map/run-daily.sh
set -euo pipefail
cd "$(dirname "$0")/../../.."
echo "== search (Search Console)"; python3 docs/seo/keyword-map/harvest-gsc.py || true
echo "== traffic (Vercel Web Analytics)"; python3 docs/seo/keyword-map/harvest-vercel-analytics.py || true
echo "== behaviour (first-party)"; python3 docs/seo/keyword-map/harvest-firstparty.py || true
echo "== integrations"; python3 docs/seo/keyword-map/check-integrations.py --quiet || true
python3 docs/seo/keyword-map/build-status.py >/dev/null || true
echo "== proposals"; python3 docs/seo/keyword-map/build-proposals.py || true
echo "== experiments"; python3 docs/seo/keyword-map/close-experiments.py || true
python3 docs/seo/keyword-map/build-experiments.py >/dev/null || true
echo "== control"; python3 docs/seo/keyword-map/build-control.py || true
python3 docs/seo/keyword-map/heartbeat.py --kind daily --mode live --phase idle || true
docs/seo/keyword-map/publish.sh
echo "daily rollup done — Status and Queue refreshed"

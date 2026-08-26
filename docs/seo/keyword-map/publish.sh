#!/usr/bin/env bash
# Copy the generated research pages into public/seo so they ship with the site at /seo/* (behind middleware.ts).
set -euo pipefail
cd "$(dirname "$0")/../../.."
mkdir -p public/seo
for f in index backlog demand report ownership links gaps architecture ai-visibility actions; do
  [ -f "docs/seo/keyword-map/$f.html" ] && cp "docs/seo/keyword-map/$f.html" "public/seo/$f.html"
done
for f in report keywords; do [ -f "docs/seo/keyword-map/$f.csv" ] && cp "docs/seo/keyword-map/$f.csv" "public/seo/$f.csv"; done
python3 docs/seo/keyword-map/inject-nav.py public/seo
cat > public/seo/robots.txt <<'R'
User-agent: *
Disallow: /
R
echo "published $(ls public/seo | wc -l | tr -d ' ') files to public/seo (served at /seo/, password-gated)"

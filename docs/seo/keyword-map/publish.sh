#!/usr/bin/env bash
# Publish research JSON into public/seo/data for the React OS at /seo/* (behind middleware.ts).
set -euo pipefail
cd "$(dirname "$0")/../../.."
python3 docs/seo/keyword-map/export-board-data.py

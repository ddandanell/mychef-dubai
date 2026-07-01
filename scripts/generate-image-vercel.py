#!/usr/bin/env python3
"""Generate a myCHEF Dubai image via the cheapest Vercel AI Gateway model.

Uses Black Forest Labs FLUX.2 [klein-9b] through Vercel AI Gateway's
OpenAI-compatible /v1/images/generations endpoint. The gateway handles
provider authentication and returns base64-encoded WebP images.

Environment:
    VERCEL_AI_GATEWAY_KEY or AI_GATEWAY_API_KEY: Vercel AI Gateway token

Example:
    export VERCEL_AI_GATEWAY_KEY=vck_...
    python3 scripts/generate-image-vercel.py \
        --name weekly-meal-prep-dubai-hero \
        --prompt "Elegant weekly meal prep service in a luxury Dubai villa kitchen..."
"""
import argparse
import base64
import json
import os
import sys
import time
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images"
OUT_DIR.mkdir(parents=True, exist_ok=True)

BASE_URL = os.environ.get("AI_GATEWAY_BASE_URL", "https://ai-gateway.vercel.sh/v1")
API_KEY = os.environ.get("VERCEL_AI_GATEWAY_KEY") or os.environ.get("AI_GATEWAY_API_KEY")

# Cheapest image model available via Vercel AI Gateway for realistic photos.
# Skill reference: ~$0.017 per 1 megapixel (1344x752 ~= 1 MP).
DEFAULT_MODEL = "bfl/flux-2-klein-9b"


def generate_image(name: str, prompt: str, model: str = DEFAULT_MODEL) -> Path:
    if not API_KEY:
        print("VERCEL_AI_GATEWAY_KEY or AI_GATEWAY_API_KEY not found", file=sys.stderr)
        sys.exit(1)

    url = f"{BASE_URL}/images/generations"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": model,
        "prompt": prompt,
        "n": 1,
        "response_format": "b64_json",
        "providerOptions": {
            "blackForestLabs": {
                "outputFormat": "webp",
                "safetyTolerance": 2,
            }
        },
    }

    for attempt in range(3):
        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=180)
            resp.raise_for_status()
            data = resp.json()
            b64 = data["data"][0]["b64_json"]
            image_bytes = base64.b64decode(b64)

            out_path = OUT_DIR / f"{name}.webp"
            out_path.write_bytes(image_bytes)
            return out_path
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}", file=sys.stderr)
            if attempt < 2:
                time.sleep(5)
            else:
                raise


def main():
    parser = argparse.ArgumentParser(description="Generate a WebP image via Vercel AI Gateway")
    parser.add_argument("--name", required=True, help="Output filename without extension")
    parser.add_argument("--prompt", required=True, help="Image prompt")
    parser.add_argument("--model", default=DEFAULT_MODEL, help="Vercel AI Gateway image model")
    parser.add_argument("--alt", default="", help="Alt text (written to manifest JSON)")
    args = parser.parse_args()

    out_path = generate_image(args.name, args.prompt, model=args.model)
    print(f"Saved: {out_path} ({out_path.stat().st_size} bytes)")

    if args.alt:
        manifest = ROOT / "public" / "images" / "image-manifest.json"
        entries = {}
        if manifest.exists():
            entries = json.loads(manifest.read_text())
        entries[args.name] = {"alt": args.alt, "file": f"/images/{args.name}.webp"}
        manifest.write_text(json.dumps(entries, indent=2, ensure_ascii=False))
        print(f"Manifest updated: {manifest}")


if __name__ == "__main__":
    main()

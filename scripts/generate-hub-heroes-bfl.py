#!/usr/bin/env python3
"""Generate hub hero images via BFL FLUX.2 [klein-9b] (cheapest BFL option).

Set BFL_API_KEY in the environment or in app/.env.local.
"""
import os
import sys
import time
from pathlib import Path

import requests
from PIL import Image
from io import BytesIO

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images"
OUT_DIR.mkdir(parents=True, exist_ok=True)

BFL_KEY = os.environ.get("BFL_API_KEY")
if not BFL_KEY:
    print("BFL_API_KEY not found in environment", file=sys.stderr)
    sys.exit(1)

BFL_ENDPOINT = "https://api.bfl.ai/v1/flux-2-klein-9b"
HEADERS = {"x-key": BFL_KEY, "Content-Type": "application/json"}

IMAGES = [
    (
        "cuisines-hub-dubai-hero",
        "Luxury Dubai catering spread showing Italian pasta, Arabic mezze, sushi platter, Indian curry, Mediterranean seafood and vegan dishes, elegantly arranged on a dark marble table with gold cutlery, soft moody lighting, cinematic food photography, no text",
    ),
    (
        "private-chef-prices-dubai-hero",
        "Professional private chef carefully plating a gourmet dish in a modern Dubai villa kitchen, fresh premium ingredients on a marble counter, warm intimate lighting, dark elegant interior with gold accents, culinary scene, no text",
    ),
    (
        "festive-catering-dubai-hero",
        "Elegant festive dinner table in a Dubai home, Christmas and New Year decorations, candles, champagne glasses, seasonal dishes, city lights visible through windows, dark gold holiday atmosphere, no text",
    ),
    (
        "catering-packages-dubai-hero",
        "Beautifully presented catering package spread for a Dubai event, tasting menu plates, canapés, family-style sharing dishes and dessert, professional service in soft focus, dark luxury styling with gold accents, no text",
    ),
]


def generate(name: str, prompt: str, width: int = 1344, height: int = 752) -> str:
    payload = {
        "prompt": prompt,
        "width": width,
        "height": height,
    }

    for attempt in range(3):
        try:
            resp = requests.post(BFL_ENDPOINT, headers=HEADERS, json=payload, timeout=60)
            resp.raise_for_status()
            data = resp.json()
            polling_url = data.get("polling_url")
            if not polling_url:
                return f"{name}: FAILED (no polling_url)"

            # Poll until ready
            for _ in range(60):
                poll_resp = requests.get(polling_url, timeout=30)
                poll_resp.raise_for_status()
                poll_data = poll_resp.json()
                status = poll_data.get("status")
                if status == "Ready":
                    result = poll_data.get("result") or {}
                    img_url = result.get("sample") or poll_data.get("sample")
                    if not img_url:
                        return f"{name}: FAILED (no sample URL)"
                    img_resp = requests.get(img_url, timeout=60)
                    img_resp.raise_for_status()
                    img = Image.open(BytesIO(img_resp.content)).convert("RGB")
                    out_path = OUT_DIR / f"{name}.webp"
                    img.save(out_path, "WEBP", quality=85, method=6)
                    return f"{name}: {out_path} ({img.width}x{img.height})"
                elif status in {"Failed", "Error"}:
                    return f"{name}: FAILED (status {status})"
                time.sleep(2)
            return f"{name}: FAILED (polling timeout)"
        except Exception as e:
            if attempt == 2:
                return f"{name}: FAILED ({e})"
            time.sleep(5)


def main():
    for name, prompt in IMAGES:
        print(generate(name, prompt))


if __name__ == "__main__":
    main()

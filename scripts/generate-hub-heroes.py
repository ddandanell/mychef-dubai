#!/usr/bin/env python3
"""Generate unique hero images for the new hub / landing pages."""
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

FAL_KEY = os.environ.get("FAL_KEY")
if not FAL_KEY:
    print("FAL_KEY not found in environment", file=sys.stderr)
    sys.exit(1)

HEADERS = {
    "Authorization": f"Key {FAL_KEY}",
    "Content-Type": "application/json",
}

IMAGES = [
    ("cuisines-hub-dubai-hero", "Elegant flat-lay of international cuisine dishes for a luxury Dubai catering menu, Italian pasta, Arabic mezze, sushi, Indian curry, Mediterranean seafood, vegan plates, dark marble surface, gold cutlery, moody cinematic food photography, no text"),
    ("private-chef-prices-dubai-hero", "Private chef plating a gourmet dish in a modern Dubai villa kitchen, premium ingredients on counter, warm intimate lighting, dark luxury interior with gold accents, professional culinary scene, no text"),
    ("festive-catering-dubai-hero", "Luxury festive celebration table in Dubai, Christmas and New Year decorations, elegant candles, champagne, seasonal dishes, city lights through windows, dark gold holiday atmosphere, no text"),
    ("catering-packages-dubai-hero", "Elegant catering package presentation for Dubai events, tasting menu plates, canapés, family feast sharing dishes, professional service, dark luxury styling with gold accents, no text"),
]


def generate(name: str, prompt: str) -> str:
    url = "https://fal.run/fal-ai/flux/dev"
    payload = {
        "prompt": prompt,
        "image_size": {"width": 1344, "height": 752},
        "num_images": 1,
        "enable_safety_checker": False,
    }

    for attempt in range(3):
        try:
            resp = requests.post(url, headers=HEADERS, json=payload, timeout=120)
            resp.raise_for_status()
            data = resp.json()
            img_url = data["images"][0]["url"]
            img_resp = requests.get(img_url, timeout=60)
            img_resp.raise_for_status()
            img = Image.open(BytesIO(img_resp.content)).convert("RGB")
            out_path = OUT_DIR / f"{name}.webp"
            img.save(out_path, "WEBP", quality=85, method=6)
            return f"{name}: {out_path} ({img.width}x{img.height})"
        except Exception as e:
            if attempt == 2:
                return f"{name}: FAILED ({e})"
            time.sleep(5)


def main():
    for name, prompt in IMAGES:
        print(generate(name, prompt))


if __name__ == "__main__":
    main()

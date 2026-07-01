#!/usr/bin/env python3
"""Generate hero images for new occasion catering pages via fal.ai FLUX.1 [dev]."""
import concurrent.futures
import os
import sys
import time
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image

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
    ("kids-birthday-catering-dubai-hero", "Colourful kids birthday party catering table in a luxury Dubai villa garden, balloons, themed cupcakes, playful appetisers, bright joyful atmosphere, dark elegant background with gold accents, no text"),
    ("pool-party-catering-dubai-hero", "Pool party catering setup at a Dubai villa, fresh salads, grilled skewers, mocktails, tropical fruit, pool in background, warm golden hour light, dark cinematic food photography with gold tones, no text"),
    ("beach-catering-dubai-hero", "Beach catering setup in Dubai at sunset, grilled seafood, fresh salads, canapés on a rustic wooden table, sand and ocean in background, warm golden light, dark elegant styling with gold accents, no text"),
    ("desert-dining-dubai-hero", "Luxury desert dining setup in Dubai dunes at sunset, Bedouin-style low tables, lanterns, grilled meats, Arabic mezze, candles, dramatic sand dunes, dark moody cinematic photography with gold tones, no text"),
    ("afternoon-tea-catering-dubai-hero", "Elegant afternoon tea catering setup in Dubai, three-tiered cake stand with sandwiches, scones, petit fours, fine china, soft natural light, dark luxurious interior with gold accents, no text"),
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
            return f"{name}: {out_path} ({img.width}x{img.height}, {out_path.stat().st_size} bytes)"
        except Exception as e:
            if attempt == 2:
                return f"{name}: FAILED ({e})"
            time.sleep(5)


def main():
    max_workers = min(5, len(IMAGES))
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as ex:
        results = list(ex.map(lambda t: generate(t[0], t[1]), IMAGES))
    for r in results:
        print(r)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Generate hero images for new dietary catering pages via fal.ai FLUX.1 [dev]."""
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
    ("gluten-free-catering-dubai-hero", "Elegant gluten-free catering spread in a luxury Dubai villa, beautifully plated dishes, fresh herbs, quinoa and vegetable mains, warm ambient lighting, dark gold luxury aesthetic, no text"),
    ("dairy-free-catering-dubai-hero", "Luxury dairy-free catering table in Dubai, creamy plant-based dishes, coconut-based desserts, elegant white-glove service, dark moody cinematic photography with gold accents, no text"),
    ("nut-free-catering-dubai-hero", "Nut-free catering setup for a family celebration in Dubai, colourful appetisers, safe labelled buffet, children and adults in soft focus, warm inviting lighting, dark elegant interior, no text"),
    ("keto-catering-dubai-hero", "Keto low-carb catering spread in Dubai, grilled meats, seafood, roasted vegetables, healthy fats, premium villa setting, dark cinematic food photography with gold tones, no text"),
    ("jain-catering-dubai-hero", "Traditional Jain vegetarian thali catering in Dubai, golden bowls of pulses, rice, bread and sweets, elegant table setting, warm ambient light, dark luxury background, no text"),
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

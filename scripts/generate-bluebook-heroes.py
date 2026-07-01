#!/usr/bin/env python3
"""Generate hero images for bluebook-derived myCHEF Dubai landing pages via fal.ai FLUX.1 [dev]."""
import concurrent.futures
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
    ("weekly-meal-prep-dubai-hero", "Elegant weekly meal prep service in a luxury Dubai villa kitchen, chef arranging fresh portioned meals in premium glass containers, marble counters, warm ambient lighting, dark moody cinematic photography with gold and black tones, no text, no logos"),
    ("how-we-vet-our-chefs-dubai-hero", "Professional chef skills assessment in a modern Dubai test kitchen, chef plating a refined dish while evaluator observes, premium ingredients, dark cinematic photography with gold accents, no text, no logos"),
    ("booking-protection-insurance-dubai-hero", "Luxury event contract and insurance concept, elegant signed documents on a dark desk with gold pen, Dubai skyline subtly visible through window, professional trust atmosphere, dark gold tones, no text, no logos"),
    ("faq-dubai-hero", "Elegant customer service and hospitality concept, luxury Dubai dining setting with softly lit table, concierge-style service, dark moody cinematic photography with gold and black tones, no text, no logos"),
    ("become-a-mychef-dubai-hero", "Professional Dubai chef portrait in a modern kitchen, chef in crisp whites holding a plated dish, confident expression, warm studio lighting, dark cinematic background with gold tones, no text, no logos"),
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
    max_workers = min(5, len(IMAGES))
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as ex:
        results = list(ex.map(lambda t: generate(t[0], t[1]), IMAGES))
    for r in results:
        print(r)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Generate hero images for myCHEF Dubai landing pages via fal.ai FLUX.1 [dev]."""
import concurrent.futures
import os
import re
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
    ("bar-services-dubai-hero", "Luxury mobile cocktail bar setup at a Dubai villa evening party, professional bartender pouring a craft drink, warm ambient lighting, palm trees, elegant guests in soft focus, dark moody cinematic photography, gold and black tones, no text"),
    ("product-launch-catering-dubai-hero", "Sleek corporate product launch catering in Dubai, modern venue with branded backdrop, passing canapés and champagne, professional staff, dark luxury atmosphere, gold accents, no text"),
    ("brand-activation-catering-dubai-hero", "Vibrant brand activation pop-up food station in Dubai, branded cart, samples being served, stylish crowd, contemporary mall or outdoor plaza, cinematic dark tones with gold highlights, no text"),
    ("gala-dinner-catering-dubai-hero", "Elegant gala dinner catering in Dubai, long candlelit tables, white-glove service, crystal glassware, chandeliers, guests in formal attire, dark luxurious ambience, no text"),
    ("private-cooking-classes-dubai-hero", "Private cooking class in a modern Dubai villa kitchen, chef teaching guests, fresh ingredients on marble counter, warm intimate lighting, luxury setting, dark and gold tones, no text"),
    ("vip-club-hero", "Exclusive VIP private dining experience in Dubai, intimate chef's table, premium service, elegant plating, dark sophisticated interior with gold accents, no text"),
    ("gift-cards-hero", "Elegant gift card concept for luxury Dubai private chef experience, wrapped present with ribbon, fine dining table setting, roses and candles, dark gold aesthetic, no text"),
    ("case-studies-hero", "Montage of luxury Dubai catering events, wedding and yacht and corporate gala details, cinematic collage feel, dark elegant atmosphere with gold tones, no text"),
    ("private-dining-guide-hero", "Intimate private chef dinner at a Dubai penthouse, city skyline through floor-to-ceiling windows, elegantly set table, candlelight, dark luxury interior, no text"),
    ("event-catering-price-guide-hero", "Professional event catering pricing concept, elegant buffet setup with price-list aesthetic, Dubai venue, dark gold luxury styling, no text"),
    ("yacht-catering-checklist-hero", "Yacht catering setup on deck at sunset in Dubai Marina, canapés and champagne, city skyline in background, warm golden hour light, dark cinematic tones, no text"),
    ("wedding-menu-planning-guide-hero", "Luxury wedding menu tasting table in Dubai, elegant plated courses, floral arrangements, soft romantic lighting, dark gold aesthetic, no text"),
    ("dubai-food-trends-report-hero", "Modern Dubai food trends collage, fusion dishes, live cooking station, sustainable ingredients, artistic plating, dark editorial photography with gold accents, no text"),
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
    max_workers = min(6, len(IMAGES))
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as ex:
        results = list(ex.map(lambda t: generate(t[0], t[1]), IMAGES))
    for r in results:
        print(r)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Generate Blog 1 images with Grok only (xAI Images API).

Never uses FAL, BFL, OpenAI, Vercel, Midjourney, or DALL-E.
Loads local env files without printing secret values.

Environment:
    XAI_API_KEY or GROK_API_KEY
"""
from __future__ import annotations

import io
import os
import sys
import time
from pathlib import Path

import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images" / "blog"
OUT_DIR.mkdir(parents=True, exist_ok=True)

ENV_FILES = [
    ROOT / ".env",
    ROOT / ".env.local",
    ROOT / "app" / ".env.local",
]

XAI_IMAGES_URL = "https://api.x.ai/v1/images/generations"
GROK_MODELS = ["grok-2-image", "grok-2-image-1212"]


def load_env() -> None:
    for path in ENV_FILES:
        if not path.exists():
            continue
        for raw in path.read_text().splitlines():
            line = raw.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            if key.startswith("export "):
                key = key[7:].strip()
            value = value.strip().strip('"').strip("'")
            os.environ.setdefault(key, value)


def grok_key() -> str:
    return (
        os.environ.get("XAI_API_KEY")
        or os.environ.get("GROK_API_KEY")
        or os.environ.get("X_AI_API_KEY")
        or ""
    )


IMAGES = [
    (
        "how-to-hire-a-private-chef-dubai-hero",
        "Ultra-realistic cinematic documentary photograph inside a lived-in luxury Dubai villa dining room at warm blue hour. An affluent international host in her late 30s sits at the near end of a linen-dressed table, one hand resting on a wine glass stem, shoulders relaxed, talking quietly to a guest beside her. She wears a simple silk blouse and quiet jewellery. Three other well-dressed international guests are settling in, not looking at camera. Through the open kitchen in the middle distance, a calm private chef in clean whites places a finished plate on a pass, while a Filipina service assistant in dark kit adjusts a low candle. The architecture is a real high-end Palm or Emirates Hills home: stone, timber, art, a pool terrace glowing through glass behind them. The table is refined but human: low flowers, one chair slightly turned, no gold overload. Emotional focus is the host remaining present with her guests while a full professional team runs the evening. Seated eye level, 35mm lens, practical warm lamps mixed with cool evening light, natural skin, believable hands. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic high-end Dubai villa or residence, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, affluent international guests, dignified hospitality team, no food next to laptops or computers, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.",
    ),
    (
        "how-to-hire-a-private-chef-dubai-2",
        "Ultra-realistic cinematic documentary photograph of a luxury Dubai villa kitchen during serious prep, about ninety minutes before a private dinner. A composed head chef in clean whites finishes a sauce at the island, tasting from a spoon, eyes down on the work. Beside him a Filipina culinary assistant portions herbs onto a tray, posture professional and unhurried. The kitchen is high-end and real: stone counters, good knives, labelled mise-en-place, a low oven light, no restaurant pass chrome. Through a doorway the same dining table from the hero is being dressed, slightly out of focus. No guests in the foreground. No laptops, no clipboards with readable text, no phones as hero props. Hands must be anatomically correct and busy. 35mm environmental frame, warm practical light, quiet concentration. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic high-end Dubai villa or residence, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, dignified hospitality team, no food next to laptops or computers, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.",
    ),
    (
        "how-to-hire-a-private-chef-dubai-3",
        "Ultra-realistic cinematic documentary photograph later the same evening in the same Dubai villa dining room. Candles have burned lower. Plates show a real meal in progress, not a styling reset. The same affluent international host is leaning in to hear a friend, smiling only slightly, completely off-duty. Guests are mid-conversation, one passing a sharing dish. In the far background the same Filipina assistant quietly removes an empty plate; the chef is only a soft figure in the kitchen light. Architecture, wardrobe, and faces must match the hero frame. No toast, no clinking glasses to camera, no phones on the table as a composition trick. Warm 50mm editorial feel, still wide enough to read the room. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic high-end Dubai villa or residence, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, affluent international guests, dignified hospitality team, no food next to laptops or computers, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.",
    ),
]


def save_webp(raw: bytes, name: str) -> Path:
    img = Image.open(io.BytesIO(raw))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    img = img.resize((1344, 752), Image.Resampling.LANCZOS)
    out_path = OUT_DIR / f"{name}.webp"
    img.save(out_path, format="WEBP", quality=85, method=6)
    return out_path


def generate_with_grok(api_key: str, name: str, prompt: str) -> Path:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    last_error = "unknown"
    for model in GROK_MODELS:
        payload = {
            "model": model,
            "prompt": prompt,
            "n": 1,
        }
        for attempt in range(3):
            try:
                resp = requests.post(
                    XAI_IMAGES_URL,
                    headers=headers,
                    json=payload,
                    timeout=180,
                )
                if resp.status_code >= 400:
                    last_error = f"{model} HTTP {resp.status_code}"
                    if resp.status_code in {401, 403, 404}:
                        break
                    time.sleep(4)
                    continue
                data = resp.json()
                items = data.get("data") or []
                if not items:
                    last_error = f"{model} empty data"
                    time.sleep(4)
                    continue
                item = items[0]
                if item.get("b64_json"):
                    import base64

                    raw = base64.b64decode(item["b64_json"])
                    return save_webp(raw, name)
                url = item.get("url")
                if not url:
                    last_error = f"{model} no url"
                    time.sleep(4)
                    continue
                img_resp = requests.get(url, timeout=60)
                img_resp.raise_for_status()
                return save_webp(img_resp.content, name)
            except Exception as exc:
                last_error = f"{model} {exc}"
                time.sleep(4)
    raise RuntimeError(f"{name} Grok generation failed: {last_error}")


def main() -> int:
    load_env()
    api_key = grok_key()
    if not api_key:
        print(
            "No Grok/xAI key found. Set XAI_API_KEY in .env.local. "
            "This script will not use any other image model.",
            file=sys.stderr,
        )
        return 1

    print("Using Grok image API only")
    for name, prompt in IMAGES:
        print(f"Generating {name} with Grok")
        path = generate_with_grok(api_key, name, prompt)
        print(f"Saved {path.name} ({path.stat().st_size} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

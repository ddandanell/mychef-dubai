"""Generate the /catering-dubai hero with Grok only (xAI Images API).

Per skills/mychef-experiences-imagery — never FAL, BFL, OpenAI, Vercel, Midjourney, DALL-E.
Set XAI_API_KEY in .env.local, then:  python3 scripts/generate-catering-hero.py
Writes public/images/catering-dubai-hero.webp (1920px wide). Never prints secrets.
"""
from __future__ import annotations
import base64, io, os, sys, time
from pathlib import Path
import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "catering-dubai-hero.webp"
XAI_IMAGES_URL = "https://api.x.ai/v1/images/generations"
GROK_MODELS = ["grok-2-image", "grok-2-image-1212"]

PROMPT = (
    "Cinematic editorial photograph for an ultra-premium Dubai catering brand. Evening event inside a modern "
    "private villa with floor-to-ceiling glass and subtle city lights outside. In the right half of the frame a "
    "senior catering chef in a black jacket works on elegant plated food, while a small, dignified service team of "
    "Filipino and South Asian hospitality professionals in dark service kit quietly prepares the event behind him "
    "- resetting a long table, carrying trays from underneath, arranging a canape pass. A refined dining setup and a "
    "few affluent international guests in linen and tailored casual are softly visible, out of focus, in the "
    "background. Warm directional key light, deep obsidian shadows, dark wood and marble, realistic skin and food, "
    "shallow depth of field, discreet private-concierge atmosphere. Strong clean negative space across the left 45% "
    "of the frame for a website headline. Documentary, natural, controlled, understated wealth. Wide 16:9 "
    "composition. No text, no posing, nobody looking at camera, no bright clinical kitchen, no excessive gold, "
    "no fake flames, no skyline dominating the image, no obvious stock-photo styling."
)

def load_env() -> None:
    for path in (ROOT / ".env", ROOT / ".env.local"):
        if not path.exists():
            continue
        for raw in path.read_text().splitlines():
            line = raw.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip().removeprefix("export ").strip(), v.strip().strip('"').strip("'"))

def save_webp(raw: bytes) -> Path:
    img = Image.open(io.BytesIO(raw)).convert("RGB")
    if img.width > 1920:
        img = img.resize((1920, round(img.height * 1920 / img.width)), Image.LANCZOS)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "WEBP", quality=82, method=6)
    return OUT

def main() -> int:
    load_env()
    key = os.environ.get("XAI_API_KEY") or os.environ.get("GROK_API_KEY") or ""
    if not key:
        print("No XAI_API_KEY found. Add it to .env.local. This script uses Grok only.", file=sys.stderr)
        return 1
    headers = {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}
    last = "unknown"
    for model in GROK_MODELS:
        for _ in range(3):
            try:
                r = requests.post(XAI_IMAGES_URL, headers=headers, json={"model": model, "prompt": PROMPT, "n": 1}, timeout=180)
                if r.status_code >= 400:
                    last = f"{model} HTTP {r.status_code}"
                    if r.status_code in {401, 403, 404}:
                        break
                    time.sleep(4); continue
                item = (r.json().get("data") or [{}])[0]
                raw = base64.b64decode(item["b64_json"]) if item.get("b64_json") else requests.get(item["url"], timeout=60).content
                path = save_webp(raw)
                print(f"Saved {path} ({path.stat().st_size} bytes)")
                print("Next: in src/pages/Catering.tsx set image=\"/images/catering-dubai-hero.webp\" and remove videoSrc.")
                return 0
            except Exception as exc:  # noqa: BLE001
                last = f"{model} {exc}"; time.sleep(4)
    print(f"Grok generation failed: {last}", file=sys.stderr)
    return 1

if __name__ == "__main__":
    raise SystemExit(main())

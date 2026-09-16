#!/usr/bin/env python3
"""Generate the /christmas-catering-dubai menu images with Grok only (xAI Images API).

Skill: skills/mychef-experiences-imagery/SKILL.md — Grok only. Never FAL, BFL, OpenAI,
Vercel, Midjourney, Luma or DALL-E. Loads local env files without printing secret values.

Output: public/images/christmas/<name>.webp, 1200x1200 square masters. The page crops
them to 4:3 on the navigation cards and 4:5 in the menu sections, so the food sits in
the centre of every frame and survives both crops.

Environment:
    XAI_API_KEY or GROK_API_KEY

Usage:
    python3 scripts/generate-christmas-menu-images.py            # all missing images
    python3 scripts/generate-christmas-menu-images.py --force    # regenerate everything
    python3 scripts/generate-christmas-menu-images.py british    # only names containing "british"
"""
from __future__ import annotations

import base64
import io
import os
import sys
import time
from pathlib import Path

import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images" / "christmas"
OUT_DIR.mkdir(parents=True, exist_ok=True)

ENV_FILES = [ROOT / ".env", ROOT / ".env.local", ROOT / "app" / ".env.local"]

XAI_IMAGES_URL = "https://api.x.ai/v1/images/generations"
GROK_MODELS = ["grok-2-image", "grok-2-image-1212"]

SQUARE = 1200

# Section 3 of the imagery skill — appended to every prompt.
BASELINE = (
    " Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, "
    "natural skin texture, believable hands, authentic high-end Dubai villa or residence, layered practical "
    "lighting with one warm key, deep readable shadows, subtle film grain, rich but natural colour, realistic "
    "food and service details, affluent international guests, dignified hospitality team in black chef jackets, "
    "no food next to laptops or computers, no visible brand logos, no text in image, no watermarks, no exaggerated "
    "smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, "
    "no Burj Khalifa, no tall white chef hats, square 1:1 master with the food protected in the central 60% so it "
    "survives a 4:3 and a 4:5 crop."
)

# Shared avoids for the menu set — food must look cooked by a real team, not rendered.
FOOD_AVOID = (
    " Avoid: obviously AI-generated food, plastic-looking glaze, impossible portions, floating garnish, "
    "duplicate identical items, oversaturated reds, heavy Christmas decoration, tinsel, a Christmas tree as the "
    "subject, fake snow, a Dubai skyline through every window, hotel buffet trays, chafing dishes, people smiling "
    "at camera, chef holding a plate to camera."
)

IMAGES: list[tuple[str, str]] = [
    (
        "british-christmas-dinner-dubai",
        "Documentary food photograph, seated eye level, 50mm, of a traditional British Christmas dinner on a long "
        "linen-dressed dining table inside a lived-in high-end Dubai villa in the early evening. Centre: a whole "
        "herb-and-butter roasted turkey, skin deep amber and crisp, resting on a warm oval platter, one leg partly "
        "carved to show moist meat. Around it, close and real: goose-fat roast potatoes with rough golden edges, "
        "pigs in blankets, a bowl of sage and chestnut stuffing, Brussels sprouts with chestnuts, honey-glazed carrots "
        "and parsnips, a jug of dark gravy, cranberry sauce. A chef in a black jacket, cropped at the shoulder and "
        "sleeve, lays a carving knife beside the bird; two guests soft-focused at the far end of the table. Low candles, "
        "one small sprig of holly, no tree in frame. Warm tungsten key from a pendant lamp, cool dusk through tall "
        "villa glass behind." + FOOD_AVOID + BASELINE,
    ),
    (
        "french-christmas-catering-dubai",
        "Documentary fine-dining photograph, slightly elevated 50mm, of a French Réveillon de Noël table in a "
        "contemporary Dubai residence dining room at night. Foreground: a tray of six fresh oysters on crushed ice "
        "with a small bowl of Champagne mignonette and a lemon half; beside it a slice of foie gras terrine on a "
        "porcelain plate with toasted brioche, fig compote and a pinch of fleur de sel; a third plate of two seared "
        "scallops on cauliflower purée with brown butter and a spoon of caviar. Mid-ground: a whole truffle-roasted "
        "capon on a platter with chestnuts, and a slate of French cheeses with grapes and walnuts. A server's hand in "
        "a dark sleeve places a Bûche de Noël, dark chocolate and hazelnut, at the edge of frame. White linen, "
        "restrained silver, one tall candle, no tinsel. Warm practical lamps, marble and dark wood surfaces."
        + FOOD_AVOID + BASELINE,
    ),
    (
        "italian-christmas-dinner-dubai",
        "Documentary food photograph, 50mm, of an Italian Christmas table set for family sharing in a warm Dubai "
        "villa kitchen-dining space. Centre: a wide shallow bowl of handmade tortellini in clear golden capon broth, "
        "steam just visible, a spoon resting in it. Behind: a sliced herb-roasted veal tenderloin on a wooden board, "
        "pink centre, rosemary and sage, dark jus in a small copper pan; a bowl of truffle potato purée; a plate of "
        "burrata with heirloom tomatoes and basil oil. On a side board, a tall panettone with one wedge cut, a bowl of "
        "mascarpone cream, torrone and biscotti. A chef in a black jacket, hands only, grates Parmigiano over the "
        "green beans. Rustic linen, mismatched old ceramics, one candle, no decorations. Warm low tungsten light."
        + FOOD_AVOID + BASELINE,
    ),
    (
        "german-christmas-goose-dubai",
        "Documentary food photograph, seated eye level, 50mm, of a German Weihnachtsessen centrepiece in a dark "
        "wood-and-stone Dubai villa dining room. Centre: a whole crispy roast goose, skin lacquered deep brown and "
        "blistered, on a heavy platter with baked apple halves and orange slices, a little roasting jus pooling. "
        "Around it: Kartoffelklöße potato dumplings glistening with browned butter, a deep bowl of braised red cabbage "
        "with apple, roasted chestnuts in a linen-lined bowl, butter-glazed Brussels sprouts, a jug of apple and goose "
        "jus. At the frame edge a plate of Vanillekipferl and a sliced Stollen dusted with sugar. A chef in a black "
        "jacket, cropped, lifts the carving fork. Two small candles and a single fir sprig, no tree, no tinsel. Warm "
        "practical light, deep shadows, winter-evening mood despite the Dubai setting." + FOOD_AVOID + BASELINE,
    ),
    (
        "russian-christmas-dinner-dubai",
        "Documentary photograph, slightly elevated 35mm, of an abundant Russian Christmas sharing table in a "
        "high-ceilinged Dubai residence dining room, celebration after the fast. Table dense but real: a platter of "
        "buckwheat blini with smoked salmon, sour cream, dill and bright salmon roe; an Olivier salad in a glass bowl; "
        "a layered beetroot and herring salad; a basket of golden mushroom pirozhki; a bowl of beef and mushroom "
        "pelmeni with browned butter and dill; a small bowl of kutya with honey, poppy seeds and walnuts. Centre-back: "
        "a whole roast duck with caramelised apples and orange on a carving board. A Medovik honey cake and winter "
        "berries at the far end. A service assistant in dark kit, dignified, sets down a dish of pickled cucumbers; "
        "guests soft in the background, one hand reaching for blini. White linen, cut glass, low candles, no tinsel."
        + FOOD_AVOID + BASELINE,
    ),
    (
        "swiss-christmas-fondue-dubai",
        "Documentary photograph, seated eye level, 35mm, of a Fondue Chinoise dinner in a contemporary Dubai "
        "apartment dining room with floor-to-ceiling glass and warm interior lamps. Centre: a stainless fondue pot of "
        "clear aromatic broth on a burner, gentle steam, four colour-coded fondue forks resting on the rim. Around it: "
        "boards of paper-thin sliced Wagyu beef, veal tenderloin, chicken and duck breast fanned neatly; small "
        "ramekins of herb sauce, truffle mayonnaise, horseradish cream, garlic aioli and mustard sauce; bowls of "
        "cornichons, pickled vegetables and baby potatoes; a Swiss Alpine board of cured meats and Gruyère. One guest's "
        "hand dips a fork into the broth; another guest laughs slightly, off-camera. A chef in a black jacket adjusts "
        "the burner flame, cropped at the shoulder. Realistic small controlled flame, no fire drama. Warm low light, "
        "linen, no decorations." + FOOD_AVOID + BASELINE,
    ),
    (
        "american-christmas-dinner-dubai",
        "Documentary photograph, seated eye level, 50mm, of an American Christmas dinner centrepiece being carved "
        "tableside in a large Dubai villa dining room at night. Centre: a bone-in USDA Prime rib roast with a dark "
        "rosemary, garlic and cracked-pepper crust, one thick slice cut to show a rosy pink centre, on a wooden carving "
        "board with a carving knife held by a chef in a black jacket, hands and forearms only, mid-slice. Around it: a "
        "bowl of truffle mashed potatoes, a bubbling mac and cheese gratin with a browned top, green beans almondine, "
        "maple-glazed carrots, Brussels sprouts with smoked bacon, a basket of warm buttermilk rolls, a gravy boat of "
        "beef jus and a dish of creamed horseradish. At the frame edge, a pecan pie and a New York cheesecake with "
        "berries. Guests soft in the background, one leaning in to look at the roast. Warm pendant light, dark wood, "
        "linen, a single candle, no tinsel." + FOOD_AVOID + BASELINE,
    ),
    (
        # Optional replacement hero. The page currently uses /images/christmas-catering-dubai-hero.webp.
        # Copy this file over that path only after scoring it against the skill's 16-point critique.
        "christmas-catering-dubai-hero-v2",
        "Cinematic documentary photograph, 35mm, seated eye level, inside a lived-in high-end Dubai villa dining "
        "room on Christmas Day early evening. Composition: left 45 percent darker and quieter for headline copy; "
        "centre-right the action. A private chef in a black jacket, calm and concentrated, sets a whole roasted "
        "turkey on a platter down at the head of a long linen table while a Filipina service assistant in dark kit "
        "pours water at the far side. Six affluent international guests, mixed ages, are seated and mid-conversation, "
        "one grandmother watching the turkey arrive with quiet recognition; the host is seated and relaxed, not "
        "standing. Real trimmings on the table: roast potatoes, sprouts, gravy, cranberry sauce. Restrained festive "
        "cues only: low candles, a few sprigs of greenery, one small wrapped gift on a sideboard, no tree dominating, "
        "no tinsel. Warm pendant and candle key light, cool dusk through tall glass, pool terrace glow behind, Dubai "
        "implied by architecture not landmarks. 16:9 landscape master with a safe central crop for 4:5 mobile."
        + FOOD_AVOID
        + BASELINE.replace(
            "square 1:1 master with the food protected in the central 60% so it survives a 4:3 and a 4:5 crop.",
            "16:9 landscape master with faces and the turkey protected in the central 60%.",
        ),
    ),
]


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
            os.environ.setdefault(key, value.strip().strip('"').strip("'"))


def grok_key() -> str:
    return os.environ.get("XAI_API_KEY") or os.environ.get("GROK_API_KEY") or os.environ.get("X_AI_API_KEY") or ""


def save_webp(raw: bytes, name: str) -> Path:
    img = Image.open(io.BytesIO(raw))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    if name.endswith("-hero-v2"):
        # 16:9 hero master, same size as the other page heroes.
        target_w, target_h = 1344, 752
    else:
        target_w, target_h = SQUARE, SQUARE
    # Centre-crop to the target aspect, then resize.
    src_ratio = img.width / img.height
    dst_ratio = target_w / target_h
    if src_ratio > dst_ratio:
        new_w = int(img.height * dst_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    elif src_ratio < dst_ratio:
        new_h = int(img.width / dst_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))
    img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    out_path = OUT_DIR / f"{name}.webp"
    img.save(out_path, format="WEBP", quality=82, method=6)
    return out_path


def generate_with_grok(api_key: str, name: str, prompt: str) -> Path:
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    last_error = "unknown"
    for model in GROK_MODELS:
        payload = {"model": model, "prompt": prompt, "n": 1, "response_format": "b64_json"}
        for _attempt in range(3):
            try:
                resp = requests.post(XAI_IMAGES_URL, headers=headers, json=payload, timeout=180)
                if resp.status_code >= 400:
                    last_error = f"{model} HTTP {resp.status_code}"
                    if resp.status_code in {401, 403, 404}:
                        break
                    time.sleep(4)
                    continue
                items = (resp.json().get("data") or [])
                if not items:
                    last_error = f"{model} empty data"
                    time.sleep(4)
                    continue
                item = items[0]
                if item.get("b64_json"):
                    return save_webp(base64.b64decode(item["b64_json"]), name)
                url = item.get("url")
                if not url:
                    last_error = f"{model} no url"
                    time.sleep(4)
                    continue
                img_resp = requests.get(url, timeout=60)
                img_resp.raise_for_status()
                return save_webp(img_resp.content, name)
            except Exception as exc:  # noqa: BLE001 — retry loop
                last_error = f"{model} {exc}"
                time.sleep(4)
    raise RuntimeError(f"{name} Grok generation failed: {last_error}")


def main() -> int:
    load_env()
    api_key = grok_key()
    if not api_key:
        print("No XAI_API_KEY / GROK_API_KEY found. Grok is the only permitted provider for this repo.", file=sys.stderr)
        print("Prompts are ready in this file; export the key and re-run.", file=sys.stderr)
        return 2

    args = [a for a in sys.argv[1:]]
    force = "--force" in args
    needles = [a for a in args if not a.startswith("-")]

    todo = [(n, p) for n, p in IMAGES if (not needles or any(k in n for k in needles))]
    failures = 0
    for name, prompt in todo:
        out = OUT_DIR / f"{name}.webp"
        if out.exists() and not force:
            print(f"skip   {out.relative_to(ROOT)} (exists)")
            continue
        try:
            path = generate_with_grok(api_key, name, prompt)
            size_kb = path.stat().st_size // 1024
            print(f"wrote  {path.relative_to(ROOT)} ({size_kb} KB)")
        except Exception as exc:  # noqa: BLE001
            failures += 1
            print(f"FAILED {name}: {exc}", file=sys.stderr)
    print()
    print("Next: open each file, run the 16-point critique from skills/mychef-experiences-imagery/SKILL.md,")
    print("regenerate anything that looks rendered rather than photographed, then commit public/images/christmas/.")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())

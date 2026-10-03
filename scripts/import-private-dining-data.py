#!/usr/bin/env python3
"""Import the owner's single-file guide. No supplier costs or margins are published.

Usage: python3 scripts/import-private-dining-data.py /path/to/myCHEF_Complete_System_and_Build_Guide.md
"""
import hashlib
import json
import sys
from pathlib import Path

source = Path(sys.argv[1]).read_bytes()
guide = source.decode('utf-8')
rows = []
for line in guide.splitlines():
    cells = [cell.strip() for cell in line.strip().strip('|').split('|')]
    if len(cells) != 15 or not cells[0].isdigit():
        continue
    dish_id = int(cells[0])
    cost = float(cells[10])
    band = 'L' if cost < 9 else 'M' if cost <= 20 else 'H'
    assert band == cells[9], f'Grocery-band mismatch for dish {dish_id}'
    rows.append({
        'id': dish_id, 'name': cells[1], 'cuisine': cells[2],
        'tier': cells[3][0], 'course': cells[4],
        'minChefLevel': int(cells[7].replace('L', '')),
        'requiresSignoff': cells[8] == 'yes', 'groceryBand': band,
        'mealPrepEligible': cells[13] == 'yes', 'marketPrice': cells[14] == 'YES',
        'status': 'proposed_addition' if dish_id >= 1000 else 'live',
        # Part 8 explicitly requires receipt verification before these prices go live.
        'needsCostConfirmation': dish_id in [47, 38, 50, 53, 61, 69, 76],
    })
assert len(rows) == 104 and len({row['id'] for row in rows}) == 104
assert sum(row['status'] == 'live' for row in rows) == 80
output = Path(__file__).resolve().parents[1] / 'src/content/privateDiningDishes.json'
output.write_text(json.dumps({
    'source': 'myCHEF_Complete_System_and_Build_Guide.md',
    'sourceSha256': hashlib.sha256(source).hexdigest(),
    'dishes': rows,
}, ensure_ascii=False, indent=2) + '\n')
print(f'Imported {len(rows)} dishes; all derived grocery bands match the guide.')

#!/usr/bin/env python3
"""Gate: every Vercel function in api/ must be self-contained.

Each .ts file in api/ is compiled as its own serverless function. A relative import — sibling
or parent — is not resolved inside the caller's bundle, so the build passes, the deployment
reports READY, and the function answers 500 FUNCTION_INVOCATION_FAILED on every request. There
is no signal anywhere until someone notices the data stopped.

That is exactly how /api/e went down on 26 August 2026: first-party tracking stopped at 39
events and stayed dead until the health check compared "endpoint answered" against "rows
arriving". This gate makes the next one fail loudly at build time instead.

    python3 scripts/verify-api-functions.py

Exits non-zero on any relative import, or on a function with no default export.
"""
from __future__ import annotations

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
API = ROOT / "api"
RELATIVE_IMPORT = re.compile(r"""^\s*(?:import|export)\b[^;\n]*\bfrom\s+['"](\.{1,2}/[^'"]+)['"]""", re.M)
REQUIRE = re.compile(r"""\brequire\(\s*['"](\.{1,2}/[^'"]+)['"]\s*\)""")
DEFAULT_EXPORT = re.compile(r"^\s*export\s+default\b", re.M)

problems: list[str] = []

if not API.exists():
    print("no api/ directory — nothing to check")
    sys.exit(0)

functions = sorted(p for p in API.glob("*.ts") if not p.name.startswith("_"))
for f in functions:
    src = f.read_text(encoding="utf-8")
    for match in RELATIVE_IMPORT.finditer(src):
        problems.append(f"RELATIVE_IMPORT {f.relative_to(ROOT)} imports {match.group(1)!r} — "
                        "not resolved at runtime; inline it or generate it into the file")
    for match in REQUIRE.finditer(src):
        problems.append(f"RELATIVE_REQUIRE {f.relative_to(ROOT)} requires {match.group(1)!r} — same failure")
    if not DEFAULT_EXPORT.search(src):
        problems.append(f"NO_DEFAULT_EXPORT {f.relative_to(ROOT)} — every file in api/ is routed as a "
                        "function, so a shared module here has no valid shape")

if problems:
    print(f"api functions FAILED — {len(problems)} problem(s):")
    for p in problems:
        print("  -", p)
    sys.exit(1)

print(f"api functions OK — {len(functions)} self-contained "
      f"({', '.join(f.name for f in functions)})")

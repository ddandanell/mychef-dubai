#!/usr/bin/env python3
"""Refuse a ship when a page file's KEYWORD LOCK header or src/content/keywordLocks.ts drifts from the contract."""
import subprocess, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
sys.exit(subprocess.run([sys.executable, str(ROOT / "scripts/generate-keyword-locks.py"), "--check"]).returncode)

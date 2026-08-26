#!/usr/bin/env python3
"""One row per run, so "is the loop alive?" is a question with an answer.

Everything else in the board describes the site. This describes the system: which sources
wrote, how much was scored, whether the gates passed, and when. Without it a stale board and a
healthy board look identical — which is exactly the failure that goes unnoticed longest.

    python3 docs/seo/keyword-map/heartbeat.py --kind daily --phase idle --gates pass
    python3 docs/seo/keyword-map/heartbeat.py --show

Never fails a run: if the database is unreachable it says so and exits 0.
"""
from __future__ import annotations

import datetime, json, os, pathlib, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
HEALTH = HERE / ".live/research/health/integrations.json"


def _connect():
    envf = os.path.expanduser("~/.config/claude-seo/neon.env")
    if not os.path.exists(envf):
        return None
    try:
        import psycopg2
    except ImportError:
        return None
    env = {k: v.strip().strip('"').strip("'") for k, v in
           (l.strip().split("=", 1) for l in open(envf) if "=" in l and not l.startswith("#"))}
    try:
        return psycopg2.connect(env.get("DATABASE_URL_UNPOOLED") or env["DATABASE_URL"], connect_timeout=15)
    except Exception:  # noqa: BLE001
        return None


def _sources():
    """Which sources were healthy at the last check — read from the health snapshot, not guessed."""
    if not HEALTH.exists():
        return [], []
    try:
        services = json.loads(HEALTH.read_text()).get("services", [])
    except Exception:  # noqa: BLE001
        return [], []
    ok = [s["service"] for s in services if s.get("status") == "connected"]
    stale = [s["service"] for s in services if s.get("status") in ("stale", "no data", "not connected", "error")]
    return ok, stale


def write(kind="full", mode="dist", phase="idle", gates_pass=None, error=None,
          pages_scored=None, keywords_scored=None, proposals_opened=None, edits_applied=None):
    conn = _connect()
    if conn is None:
        print("heartbeat: database unreachable — the run still stands locally")
        return None
    try:
        import seo_v2_schema
        cur = conn.cursor()
        seo_v2_schema.ensure(cur)
        ok, stale = _sources()
        commit = subprocess.run(["git", "rev-parse", "--short", "HEAD"], cwd=ROOT,
                                capture_output=True, text=True).stdout.strip()
        # Fall back to the archive for the counts, so a caller that knows nothing still records something.
        if pages_scored is None or keywords_scored is None:
            cur.execute("SELECT keywords, sitemap_urls FROM seo_runs ORDER BY id DESC LIMIT 1")
            row = cur.fetchone() or (None, None)
            keywords_scored = keywords_scored if keywords_scored is not None else row[0]
            pages_scored = pages_scored if pages_scored is not None else row[1]
        cur.execute("""INSERT INTO seo_heartbeats (kind, mode, git_commit, phase, sources_ok, sources_stale,
                                                   pages_scored, keywords_scored, proposals_opened,
                                                   edits_applied, gates_pass, error)
                       VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id, ran_at""",
                    (kind, mode, commit, phase, ok, stale, pages_scored, keywords_scored,
                     proposals_opened, edits_applied, gates_pass, error))
        beat_id, ran_at = cur.fetchone()
        conn.commit()
        print(f"heartbeat #{beat_id} · {kind}/{phase} · {len(ok)} sources ok, {len(stale)} stale"
              + (f" · gates {'pass' if gates_pass else 'FAIL'}" if gates_pass is not None else ""))
        return beat_id
    except Exception as ex:  # noqa: BLE001
        print(f"heartbeat skipped ({str(ex)[:120]})")
        return None
    finally:
        conn.close()


def latest():
    conn = _connect()
    if conn is None:
        return None
    try:
        cur = conn.cursor()
        cur.execute("""SELECT id, ran_at, kind, mode, git_commit, phase, sources_ok, sources_stale,
                              pages_scored, keywords_scored, proposals_opened, edits_applied, gates_pass, error
                       FROM seo_heartbeats ORDER BY ran_at DESC LIMIT 1""")
        row = cur.fetchone()
        if not row:
            return None
        keys = ("id", "ran_at", "kind", "mode", "git_commit", "phase", "sources_ok", "sources_stale",
                "pages_scored", "keywords_scored", "proposals_opened", "edits_applied", "gates_pass", "error")
        beat = dict(zip(keys, row))
        beat["ran_at"] = beat["ran_at"].isoformat(timespec="minutes") if beat["ran_at"] else None
        beat["age_hours"] = None
        if row[1]:
            delta = datetime.datetime.now(datetime.timezone.utc) - row[1].astimezone(datetime.timezone.utc)
            beat["age_hours"] = round(delta.total_seconds() / 3600, 1)
        return beat
    except Exception:  # noqa: BLE001
        return None
    finally:
        conn.close()


def _arg(name, default=None):
    return sys.argv[sys.argv.index(name) + 1] if name in sys.argv else default


if __name__ == "__main__":
    if "--show" in sys.argv:
        beat = latest()
        print(json.dumps(beat, indent=1) if beat else "no heartbeat recorded yet")
        sys.exit(0)
    gates = _arg("--gates")
    write(kind=_arg("--kind", "full"), mode=_arg("--mode", "dist"), phase=_arg("--phase", "idle"),
          gates_pass=None if gates is None else gates == "pass", error=_arg("--error"),
          proposals_opened=int(_arg("--proposals")) if _arg("--proposals") else None,
          edits_applied=int(_arg("--edits")) if _arg("--edits") else None)

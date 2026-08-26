"""V2 control-plane tables. Additive only — nothing here renames or drops a V1 column.

V1 answers "what does the site say". V2 answers "did the loop run, what does it propose, what
happened after we changed something, and what should be done today". Four tables:

  seo_heartbeats   proof a run happened: which sources wrote, whether the gates passed
  seo_experiments  every apply is a batch with a window and a verdict
  seo_briefings    one page of judgement per day
  seo_proposals    already exists with the parallel session's column names; the spec's names
                   are added alongside rather than renamed, so both readers keep working

Import and call `ensure(cur)` before writing. Safe to call on every run.
"""
from __future__ import annotations

DDL = """
CREATE TABLE IF NOT EXISTS seo_heartbeats (
  id SERIAL PRIMARY KEY,
  ran_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  kind TEXT NOT NULL CHECK (kind IN ('daily', 'full', 'apply')),
  mode TEXT CHECK (mode IN ('live', 'dist')),
  git_commit TEXT,
  phase TEXT CHECK (phase IN ('idle', 'harvesting', 'scoring', 'proposing', 'applying', 'measuring', 'failed')),
  sources_ok TEXT[],
  sources_stale TEXT[],
  pages_scored INT,
  keywords_scored INT,
  proposals_opened INT,
  edits_applied INT,
  gates_pass BOOL,
  error TEXT
);
CREATE INDEX IF NOT EXISTS seo_heartbeats_ran ON seo_heartbeats(ran_at DESC);

CREATE TABLE IF NOT EXISTS seo_experiments (
  id SERIAL PRIMARY KEY,
  batch_id TEXT NOT NULL,
  proposal_id TEXT,
  url TEXT NOT NULL,
  keywords TEXT[],
  applied_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  git_commit TEXT,
  window_days INT DEFAULT 14,
  baseline JSONB,
  after JSONB,
  other_edits_in_window INT DEFAULT 0,
  verdict TEXT CHECK (verdict IN ('too_soon', 'lift', 'flat', 'drop', 'confounded')) DEFAULT 'too_soon',
  closed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS seo_experiments_url ON seo_experiments(url);
CREATE INDEX IF NOT EXISTS seo_experiments_open ON seo_experiments(verdict) WHERE closed_at IS NULL;

CREATE TABLE IF NOT EXISTS seo_briefings (
  id SERIAL PRIMARY KEY,
  for_date DATE UNIQUE NOT NULL,
  run_id INT,
  health JSONB,
  winners JSONB,
  losers JSONB,
  contract_debt JSONB,
  demand_debt JSONB,
  coverage_debt JSONB,
  experiment_outcomes JSONB,
  top5 TEXT[]
);

CREATE TABLE IF NOT EXISTS seo_integrations (
  checked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  service TEXT NOT NULL,
  service_group TEXT,
  status TEXT,
  detail TEXT,
  last_success TIMESTAMPTZ,
  error TEXT,
  PRIMARY KEY (checked_at, service)
);
"""

# seo_proposals belongs to the parallel session. The spec's vocabulary is added beside its own:
# `class` stays, `type` appears; `autonomy` stays, `auto_eligible` appears. Nothing is renamed,
# so both the existing builder and the V2 readers work on the same rows.
PROPOSAL_COLUMNS = [
    ("type", "TEXT"),
    ("run_id", "INT"),
    ("auto_eligible", "BOOLEAN DEFAULT false"),
    ("decided_by", "TEXT"),
    ("decided_at", "TIMESTAMPTZ"),
    ("experiment_id", "INT"),
    ("opened_at", "TIMESTAMPTZ"),
]

# The parallel session's builder writes its own class names. These are the same nine ideas.
CLASS_TO_TYPE = {
    "fill_subkeyword": "place_subkeyword",
    "fill_title": "fill_title_h1",
    "fill_title_h1": "fill_title_h1",
    "retarget": "reassign_primary",
    "add_link": "add_internal_link",
    "experiment": "watch",
    "watch": "watch",
    "merge": "merge_or_kill_page",
    "retire": "retire_or_redirect",
    "new_page": "create_page",
    "move": "move_content",
}

TYPES = ("fill_title_h1", "place_subkeyword", "add_internal_link", "reassign_primary",
         "move_content", "retire_or_redirect", "merge_or_kill_page", "create_page", "watch")


def ensure(cur) -> None:
    cur.execute(DDL)
    cur.execute("SELECT to_regclass('public.seo_proposals')")
    if cur.fetchone()[0]:
        for name, decl in PROPOSAL_COLUMNS:
            cur.execute(f"ALTER TABLE seo_proposals ADD COLUMN IF NOT EXISTS {name} {decl}")
        # Backfill the spec's names from the ones already in use, so a V2 reader sees every row.
        # The two vocabularies are the same ideas under different words; map rather than copy.
        for existing, spec in CLASS_TO_TYPE.items():
            cur.execute("UPDATE seo_proposals SET type = %s WHERE class = %s AND type IS DISTINCT FROM %s",
                        (spec, existing, spec))
        cur.execute("UPDATE seo_proposals SET type = class WHERE type IS NULL AND class IS NOT NULL")
        cur.execute("UPDATE seo_proposals SET opened_at = created_at WHERE opened_at IS NULL")
        cur.execute("""UPDATE seo_proposals SET auto_eligible = (autonomy = 'auto')
                       WHERE auto_eligible IS DISTINCT FROM (autonomy = 'auto') AND autonomy IS NOT NULL""")

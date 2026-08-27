"""Daily page-fact table. Agents query this, not web_events.

Filled by harvest-firstparty.py, harvest-gsc.py and harvest-vercel-analytics.py.
Never invented: missing sources leave their columns null.
"""
from __future__ import annotations

import psycopg2.extras

DDL = """
ALTER TABLE web_sessions ADD COLUMN IF NOT EXISTS channel_class TEXT;
ALTER TABLE web_sessions ADD COLUMN IF NOT EXISTS landing_class TEXT;
ALTER TABLE web_sessions ADD COLUMN IF NOT EXISTS experiment_id TEXT;
ALTER TABLE web_sessions ADD COLUMN IF NOT EXISTS variant TEXT;

CREATE TABLE IF NOT EXISTS seo_page_daily (
  day          date NOT NULL,
  url          text NOT NULL,
  primary_kw   text,
  sessions     int,
  engaged      int,
  bounced      int,
  wa_clicks    int,
  forms        int,
  phone        int,
  inquiry_ok   int,
  med_seconds  int,
  med_scroll   int,
  gsc_clicks   int,
  gsc_impr     int,
  gsc_ctr      real,
  gsc_pos      real,
  vercel_views int,
  ga4_sessions int,
  ga4_engaged int,
  ga4_engagement_rate real,
  ga4_avg_seconds real,
  ga4_key_events int,
  PRIMARY KEY (day, url)
);
ALTER TABLE seo_page_daily ADD COLUMN IF NOT EXISTS ga4_sessions int;
ALTER TABLE seo_page_daily ADD COLUMN IF NOT EXISTS ga4_engaged int;
ALTER TABLE seo_page_daily ADD COLUMN IF NOT EXISTS ga4_engagement_rate real;
ALTER TABLE seo_page_daily ADD COLUMN IF NOT EXISTS ga4_avg_seconds real;
ALTER TABLE seo_page_daily ADD COLUMN IF NOT EXISTS ga4_key_events int;
CREATE INDEX IF NOT EXISTS seo_page_daily_url ON seo_page_daily(url);
CREATE INDEX IF NOT EXISTS seo_page_daily_day ON seo_page_daily(day);

-- One row per query per day. seo_page_daily answers "which page moved"; this answers
-- "which words moved", which is the question that names the next edit.
CREATE TABLE IF NOT EXISTS seo_query_daily (
  day DATE NOT NULL, query TEXT NOT NULL,
  clicks INT, impressions INT, ctr REAL, position REAL,
  PRIMARY KEY (day, query)
);
CREATE INDEX IF NOT EXISTS seo_query_daily_query ON seo_query_daily(query);

CREATE TABLE IF NOT EXISTS seo_proposals (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  class TEXT NOT NULL,
  url TEXT,
  keyword TEXT,
  reason TEXT,
  evidence JSONB,
  action TEXT,
  risk TEXT,
  autonomy TEXT,
  impact REAL,
  demand TEXT,
  status TEXT NOT NULL DEFAULT 'open',
  rejected_reason TEXT
);
CREATE INDEX IF NOT EXISTS seo_proposals_status ON seo_proposals(status, created_at DESC);
"""


def ensure(cur):
    cur.execute(DDL)


def set_primaries(cur, contract_pages):
    """Stamp primary_kw from the contract onto any daily row that still lacks one."""
    rows = []
    for url, page in (contract_pages or {}).items():
        io = (page or {}).get("intent_owner") or {}
        primary = io.get("primary_keyword")
        if primary:
            rows.append((primary, url))
    if not rows:
        return
    psycopg2.extras.execute_batch(cur, 
        "UPDATE seo_page_daily SET primary_kw = %s WHERE url = %s AND primary_kw IS NULL",
        rows,
    )


def upsert_firstparty(cur, rows):
    """rows: dicts with day, url, sessions, engaged, bounced, wa_clicks, forms, phone, inquiry_ok, med_seconds, med_scroll"""
    if not rows:
        return 0
    sql = """
      INSERT INTO seo_page_daily (day, url, sessions, engaged, bounced, wa_clicks, forms, phone,
                                  inquiry_ok, med_seconds, med_scroll)
      VALUES (%(day)s, %(url)s, %(sessions)s, %(engaged)s, %(bounced)s, %(wa_clicks)s, %(forms)s,
              %(phone)s, %(inquiry_ok)s, %(med_seconds)s, %(med_scroll)s)
      ON CONFLICT (day, url) DO UPDATE SET
        sessions = EXCLUDED.sessions,
        engaged = EXCLUDED.engaged,
        bounced = EXCLUDED.bounced,
        wa_clicks = EXCLUDED.wa_clicks,
        forms = EXCLUDED.forms,
        phone = EXCLUDED.phone,
        inquiry_ok = EXCLUDED.inquiry_ok,
        med_seconds = EXCLUDED.med_seconds,
        med_scroll = EXCLUDED.med_scroll
    """
    psycopg2.extras.execute_batch(cur, sql, rows)
    return len(rows)


def upsert_gsc(cur, rows):
    if not rows:
        return 0
    sql = """
      INSERT INTO seo_page_daily (day, url, gsc_clicks, gsc_impr, gsc_ctr, gsc_pos)
      VALUES (%(day)s, %(url)s, %(gsc_clicks)s, %(gsc_impr)s, %(gsc_ctr)s, %(gsc_pos)s)
      ON CONFLICT (day, url) DO UPDATE SET
        gsc_clicks = EXCLUDED.gsc_clicks,
        gsc_impr = EXCLUDED.gsc_impr,
        gsc_ctr = EXCLUDED.gsc_ctr,
        gsc_pos = EXCLUDED.gsc_pos
    """
    psycopg2.extras.execute_batch(cur, sql, rows)
    return len(rows)


def upsert_vercel(cur, rows):
    if not rows:
        return 0
    sql = """
      INSERT INTO seo_page_daily (day, url, vercel_views)
      VALUES (%(day)s, %(url)s, %(vercel_views)s)
      ON CONFLICT (day, url) DO UPDATE SET vercel_views = EXCLUDED.vercel_views
    """
    psycopg2.extras.execute_batch(cur, sql, rows)
    return len(rows)


def upsert_ga4(cur, rows):
    """GA4 is reported per landing page per day. Its columns stay null when GA4 is silent —
    a page with no session did not have a bounce rate of zero."""
    if not rows:
        return 0
    sql = """
      INSERT INTO seo_page_daily (day, url, ga4_sessions, ga4_engaged, ga4_engagement_rate,
                                  ga4_avg_seconds, ga4_key_events)
      VALUES (%(day)s, %(url)s, %(sessions)s, %(engaged)s, %(engagement_rate)s,
              %(avg_seconds)s, %(key_events)s)
      ON CONFLICT (day, url) DO UPDATE SET
        ga4_sessions = EXCLUDED.ga4_sessions,
        ga4_engaged = EXCLUDED.ga4_engaged,
        ga4_engagement_rate = EXCLUDED.ga4_engagement_rate,
        ga4_avg_seconds = EXCLUDED.ga4_avg_seconds,
        ga4_key_events = EXCLUDED.ga4_key_events
    """
    psycopg2.extras.execute_batch(cur, sql, rows)
    return len(rows)


def upsert_queries(cur, rows):
    """Query x day from Search Console. Same rule as everywhere else: a day with no row is a
    day Google reported nothing for that query, not a day it scored zero."""
    if not rows:
        return 0
    psycopg2.extras.execute_batch(cur, """
      INSERT INTO seo_query_daily (day, query, clicks, impressions, ctr, position)
      VALUES (%(day)s, %(query)s, %(clicks)s, %(impressions)s, %(ctr)s, %(position)s)
      ON CONFLICT (day, query) DO UPDATE SET clicks = EXCLUDED.clicks,
        impressions = EXCLUDED.impressions, ctr = EXCLUDED.ctr, position = EXCLUDED.position
    """, rows)
    return len(rows)

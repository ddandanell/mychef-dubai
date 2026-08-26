"""The verdict rules, tested against crafted windows.

A verdict decides whether an edit gets kept, so the maths should be checked somewhere other
than production. These cases are the ones the rules exist for.

    python3 -m pytest docs/seo/keyword-map/test_experiments.py -q
"""
from __future__ import annotations

import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

import experiments_lib as X  # noqa: E402


def w(days=14, impr=None, clicks=None, wa=None, pos=None):
    return {"days_with_data": days, "gsc_impr": impr, "gsc_clicks": clicks,
            "wa_clicks": wa, "gsc_pos": pos, "sessions": None}


def test_impressions_up_is_a_lift():
    v, why = X.verdict(w(impr=100, clicks=2), w(impr=200, clicks=3), 0)
    assert v == "lift", why


def test_clicks_down_is_a_drop():
    v, why = X.verdict(w(impr=100, clicks=10), w(impr=98, clicks=4), 0)
    assert v == "drop", why


def test_small_moves_are_flat():
    v, why = X.verdict(w(impr=100, clicks=10), w(impr=104, clicks=10), 0)
    assert v == "flat", why


def test_another_edit_in_the_window_confounds_everything():
    v, why = X.verdict(w(impr=100), w(impr=400), 1)
    assert v == "confounded" and "other edit" in why


def test_no_readings_on_one_side_is_not_a_verdict():
    # A page Google never showed cannot have improved or worsened; saying "flat" would be a lie.
    v, why = X.verdict(w(days=0), w(impr=50), 0)
    assert v == "confounded" and "no Search Console readings" in why


def test_whatsapp_clicks_falling_beats_impressions_rising():
    # Visibility up but enquiries down is not a win, whatever the impression count says.
    v, why = X.verdict(w(impr=100, clicks=10, wa=8), w(impr=180, clicks=11, wa=3), 0)
    assert v == "drop", why


def test_zero_baseline_that_starts_earning_is_a_lift():
    v, why = X.verdict(w(impr=0, clicks=0), w(impr=40, clicks=1), 0)
    assert v == "lift", why


def test_windows_are_compared_per_day_not_per_total():
    # 7 days of data against 14 must not read as a halving.
    v, why = X.verdict(w(days=14, impr=140, clicks=14), w(days=7, impr=70, clicks=7), 0)
    assert v == "flat", why

"""Optimizer must not strip an owner-locked H1 to restore an exact n-gram."""
import importlib.util
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("optimize_page", HERE / "optimize-page.py")
op = importlib.util.module_from_spec(spec)
spec.loader.exec_module(op)

ADS_H1 = "Private Birthday Catering in Dubai"
PRIMARY = "birthday catering dubai"
LOCKED_TITLE = "Private Birthday Catering Dubai | Villa & Home Parties"


def test_locked_ads_h1_is_left_alone():
    new, how = op.place_primary(ADS_H1, PRIMARY, "h1", locked=ADS_H1)
    assert new == ADS_H1
    assert how == "already"


def test_without_lock_the_in_variant_is_rewritten():
    new, how = op.place_primary(ADS_H1, PRIMARY, "h1")
    assert how != "already"
    assert new != ADS_H1


def test_title_with_exact_ngram_is_already():
    new, how = op.place_primary(LOCKED_TITLE, PRIMARY, "title", locked=LOCKED_TITLE)
    assert new == LOCKED_TITLE
    assert how == "already"


def test_exact_primary_h1_is_already():
    new, how = op.place_primary("Birthday Catering Dubai", PRIMARY, "h1", locked="Private Birthday Catering in Dubai")
    assert new == "Birthday Catering Dubai"
    assert how == "already"


def test_locked_ads_subtitle_is_left_alone():
    sub = "Food, staff and clear-down for villa and home parties. Published floors or a private brief. You stay with your guests."
    new, how = op.place_primary(sub, PRIMARY, "opening", locked=sub)
    assert new == sub
    assert how == "already"

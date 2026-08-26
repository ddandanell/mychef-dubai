#!/usr/bin/env python3
"""Scoring invariants for the proposal queue. No database, no optimizer."""
import importlib.util
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("bp", HERE / "build-proposals.py")
bp = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bp)


def test_demand_prefers_the_larger_signal():
    assert bp.demand_of(0, 40) == 40
    assert bp.demand_of(1900, 12) == 1900
    assert bp.demand_of(None, None) == 0


def test_impact_ranks_high_demand_low_risk_first():
    fill = bp.impact(demand=1900, gap=2, conv=0.05, risk=1)
    retire = bp.impact(demand=1, gap=1, conv=0.01, risk=9)
    title = bp.impact(demand=1900, gap=2, conv=0.05, risk=3)
    assert fill > title > retire


def test_live_means_any_measured_demand():
    assert bp.demand_of(0, 1) > 0
    assert bp.demand_of(0, 0) == 0


if __name__ == "__main__":
    test_demand_prefers_the_larger_signal()
    test_impact_ranks_high_demand_low_risk_first()
    test_live_means_any_measured_demand()
    print("test_proposals: ok")

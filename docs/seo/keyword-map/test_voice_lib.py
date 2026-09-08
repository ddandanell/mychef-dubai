"""Brand-voice gate for titles and meta descriptions.

    python3 -m pytest docs/seo/keyword-map/test_voice_lib.py -q
"""
from __future__ import annotations

import pathlib
import sys
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import voice_lib as V  # noqa: E402


class VoiceLib(unittest.TestCase):
    def test_brochure_language_fails(self):
        r = V.score_snippet(
            title="Indulge in an unforgettable culinary journey | myCHEF",
            description="Experience unparalleled culinary excellence with Dubai's finest chefs.",
            primary="private chef dubai",
            persona="household",
        )
        self.assertFalse(r["passed"])
        self.assertTrue(any("prohibited" in f for f in r["failures"]))

    def test_missing_primary_fails(self):
        r = V.score_snippet(
            title="A chef for your kitchen | myCHEF",
            description="A standing cook for the household, matched and backed up.",
            primary="private chef dubai",
            persona="household",
        )
        self.assertFalse(r["passed"])
        self.assertTrue(any("primary" in f for f in r["failures"]))

    def test_mychef_mechanism_passes(self):
        r = V.score_snippet(
            title="Private Chef Dubai | Matched, Vetted, Backed Up | myCHEF",
            description="A standing private chef for the household in Dubai. Named cook, itemised quote, backup from a record.",
            primary="private chef dubai",
            persona="household",
        )
        self.assertTrue(r["passed"], r["failures"])
        self.assertGreaterEqual(r["score"], 7)

    def test_title_too_long_fails(self):
        r = V.score_snippet(
            title="Private Chef Dubai | A standing household cook matched vetted backed up and reviewed every month | myCHEF",
            description="A standing private chef for the household in Dubai.",
            primary="private chef dubai",
            persona="household",
        )
        self.assertFalse(r["passed"])
        self.assertTrue(any("title length" in f for f in r["failures"]))

    def test_persona_from_silo(self):
        self.assertEqual(V.persona_for("Private Chef", "Commercial landing"), "household")
        self.assertEqual(V.persona_for("Catering", "Commercial landing"), "event_host")
        self.assertEqual(V.persona_for("Blog and Guides", "Guide"), "planner")
        self.assertEqual(
            V.persona_for("Private Chef", "Commercial landing", url="/yachts", primary="yacht catering dubai"),
            "event_host",
        )

    def test_competitor_generic_is_scored_down(self):
        r = V.score_snippet(
            title="Private Chef Dubai | Best Luxury Service | myCHEF",
            description="The best private chef service in Dubai for luxury events.",
            primary="private chef dubai",
            persona="household",
        )
        self.assertTrue(any("generic" in f or "luxury" in f for f in r["failures"] + r["warnings"]))


if __name__ == "__main__":
    unittest.main()

"""SERP snippet variants and CTR verdicts.

    python3 -m pytest docs/seo/keyword-map/test_snippet_lib.py -q
"""
from __future__ import annotations

import pathlib
import sys
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import snippet_lib as S  # noqa: E402


class SnippetLib(unittest.TestCase):
    def test_expected_ctr_falls_with_position(self):
        self.assertGreater(S.expected_ctr(3), S.expected_ctr(10))
        self.assertGreater(S.expected_ctr(10), S.expected_ctr(40))

    def test_ctr_gap_flags_pages_that_show_and_do_not_get_clicked(self):
        gap = S.ctr_gap(impressions=210, clicks=0, position=42)
        self.assertGreater(gap, 0.005)

    def test_healthy_ctr_for_deep_position_is_not_an_opportunity(self):
        gap = S.ctr_gap(impressions=434, clicks=4, position=30)
        self.assertLess(gap, 0.02)

    def test_variants_keep_primary_and_drop_brochure_copy(self):
        variants = S.propose_variants(
            url="/private-chef-dubai",
            primary="private chef dubai",
            title="Private Chef Dubai | From AED 2,700 a Month | myCHEF",
            description="A standing private chef for the household in Dubai. Prep, dinner or full-day plans from AED 2,700 a month.",
            silo="Private Chef",
            page_type="Commercial landing",
        )
        self.assertTrue(variants)
        for v in variants:
            self.assertIn("private chef dubai", v["title"].lower())
            self.assertNotIn("unforgettable", v["title"].lower())
            self.assertTrue(v["voice_passed"], v["voice_failures"])
            self.assertNotEqual(v["title"], "Private Chef Dubai | From AED 2,700 a Month | myCHEF")

    def test_does_not_invent_a_price(self):
        variants = S.propose_variants(
            url="/yachts",
            primary="yacht catering dubai",
            title="Yacht Catering Dubai | Chef & Crew for Charter Days | myCHEF",
            description="Yacht catering Dubai with a vetted team. Menus, service and clear-down handled so you stay a guest.",
            silo="Dining Experiences",
            page_type="Commercial landing",
        )
        blob = " ".join(v["title"] + " " + v["description"] for v in variants)
        self.assertNotIn("AED", blob)

    def test_school_page_is_not_an_event_host_snippet(self):
        variants = S.propose_variants(
            url="/school-catering-dubai",
            primary="school catering dubai",
            title="School Catering Dubai | Lunches Built to the Rules | myCHEF",
            description=(
                "School catering Dubai for lunches and canteens. Built around Dubai Municipality "
                "school-food rules. Quote after we see the kitchen and the roll."
            ),
            silo="Institutional Catering",
            page_type="Commercial landing",
        )
        self.assertTrue(variants)
        blob = " ".join(v["title"] + " " + v["description"] for v in variants).lower()
        self.assertNotIn("clear-down", blob)
        self.assertNotIn("you stay a guest", blob)
        self.assertNotIn("chef, service", blob)
        for v in variants:
            self.assertEqual(v["persona"], "institution")
            self.assertLessEqual(len(v["description"]), 160)
            self.assertFalse(v["description"].rstrip(".").endswith(" and"))
            self.assertFalse(v["description"].endswith(" Chefs, service staff and."))

    def test_in_dubai_variant_keeps_the_live_description(self):
        live = (
            "Book corporate catering in Dubai for offices, boardrooms, client lunches and "
            "company events. Drop-off, buffet or plated service—from AED 90 per person."
        )
        variants = S.propose_variants(
            url="/corporate",
            primary="corporate catering dubai",
            title="Corporate Catering Dubai | Offices, Boards & Events | myCHEF",
            description=live,
            silo="Corporate Catering",
            page_type="Commercial landing",
        )
        self.assertTrue(variants)
        for v in variants:
            self.assertEqual(v["description"], live)
            self.assertNotIn("service—from.", v["description"])
            self.assertIn("AED 90", v["description"])

    def test_lead_desc_does_not_append_relief_then_chop(self):
        live = (
            "Wedding Catering Dubai with a vetted myCHEF team. Menus, service and clear-down "
            "handled so you stay a guest at your own table."
        )
        variants = S.propose_variants(
            url="/wedding-catering-dubai",
            primary="wedding catering dubai",
            title="Wedding Catering Dubai | From AED 700 a Guest | myCHEF",
            description=live,
            silo="Private Events",
            page_type="Commercial landing",
        )
        self.assertTrue(variants)
        for v in variants:
            self.assertLessEqual(len(v["description"]), 160)
            self.assertNotIn("staff and.", v["description"])
            self.assertNotEqual(v["description"][-20:], "Chefs, service staff and.")
            if v["kind"] != "proof":
                self.assertEqual(v["description"], live)

    def test_blocked_when_google_ranks_a_different_url(self):
        rec = S.research_page(
            url="/school-catering-dubai",
            primary="school catering dubai",
            title="School Catering Dubai | Lunches Built to the Rules | myCHEF",
            description="School catering Dubai for lunches and canteens.",
            silo="Institutional Catering",
            page_type="Commercial landing",
            impressions=59,
            clicks=0,
            position=58.9,
            open_experiment=False,
            google_ranks_elsewhere=True,
        )
        self.assertEqual(rec["status"], "blocked")
        self.assertIn("different URL", rec["reason"])

    def test_blocked_when_an_experiment_is_already_open(self):
        rec = S.research_page(
            url="/corporate",
            primary="corporate catering dubai",
            title="Corporate Catering Dubai | Offices, Boards & Events | myCHEF",
            description="Book corporate catering in Dubai for offices and events.",
            silo="Corporate Catering",
            page_type="Commercial landing",
            impressions=210,
            clicks=0,
            position=42.2,
            open_experiment=True,
        )
        self.assertEqual(rec["status"], "blocked")
        self.assertIn("open experiment", rec["reason"])

    def test_snippet_verdict_rewards_ctr_not_just_impressions(self):
        before = {"days_with_data": 14, "gsc_impr": 200, "gsc_clicks": 2, "wa_clicks": 1, "gsc_pos": 40}
        after = {"days_with_data": 14, "gsc_impr": 190, "gsc_clicks": 8, "wa_clicks": 2, "gsc_pos": 41}
        v, why = S.snippet_verdict(before, after, 0)
        self.assertEqual(v, "lift", why)

    def test_snippet_verdict_drops_when_clicks_fall(self):
        before = {"days_with_data": 14, "gsc_impr": 200, "gsc_clicks": 10, "wa_clicks": 4, "gsc_pos": 20}
        after = {"days_with_data": 14, "gsc_impr": 220, "gsc_clicks": 3, "wa_clicks": 1, "gsc_pos": 19}
        v, why = S.snippet_verdict(before, after, 0)
        self.assertEqual(v, "drop", why)


if __name__ == "__main__":
    unittest.main()

"""CRM → SEO signals. No PII. Topics map to owner URLs.

    python3 -m pytest docs/seo/keyword-map/test_crm_lib.py -q
"""
from __future__ import annotations

import json
import pathlib
import sys
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import crm_lib as C  # noqa: E402


class CrmLib(unittest.TestCase):
    def test_topic_maps_to_contract_owner(self):
        pages = {
            "/private-chef-dubai": {"intent_owner": {"primary_keyword": "private chef dubai"}},
            "/catering-dubai": {"intent_owner": {"primary_keyword": "catering dubai"}},
            "/yachts": {"intent_owner": {"primary_keyword": "yacht catering dubai"}},
        }
        self.assertEqual(C.owner_for_topic("private chef", pages), "/private-chef-dubai")
        self.assertEqual(C.owner_for_topic("yacht", pages), "/yachts")
        self.assertEqual(C.owner_for_topic("catering", pages), "/catering-dubai")

    def test_signals_prefer_conversation_volume_then_ctr_gap(self):
        public = {
            "connected": True,
            "contacts": {"total": 40, "new": 6, "sources": [{"label": "google", "count": 2}, {"label": "whatsapp", "count": 4}]},
            "conversations": {
                "total": 12,
                "open_or_unread": 3,
                "topics": [{"label": "yacht", "count": 8}, {"label": "private chef", "count": 3}],
            },
            "opportunities": {"open": 2, "won": 1, "lost": 0},
        }
        pages = {
            "/yachts": {"intent_owner": {"primary_keyword": "yacht catering dubai"}},
            "/private-chef-dubai": {"intent_owner": {"primary_keyword": "private chef dubai"}},
        }
        snippets = {
            "tests": [
                {"url": "/yachts", "ctr_gap": 0.012, "status": "proposed", "impressions": 209, "ctr": 0},
                {"url": "/private-chef-dubai", "ctr_gap": 0.0, "status": "blocked", "impressions": 434, "ctr": 0.009},
            ]
        }
        out = C.signals_from_public(public, pages, snippets)
        self.assertEqual(out["contacts_new"], 6)
        yacht = next(s for s in out["signals"] if s["topic"] == "yacht")
        self.assertEqual(yacht["owner_url"], "/yachts")
        self.assertEqual(yacht["action"], "snippet_test")
        chef = next(s for s in out["signals"] if s["topic"] == "private chef")
        self.assertEqual(chef["action"], "watch")

    def test_public_signals_never_include_pii(self):
        public = {
            "connected": True,
            "contacts": {"total": 1, "new": 1, "sources": [{"label": "whatsapp", "count": 1}]},
            "conversations": {"total": 1, "topics": [{"label": "catering", "count": 1}]},
            "opportunities": {"open": 0, "won": 0, "lost": 0},
        }
        blob = json.dumps(C.signals_from_public(public, {
            "/catering-dubai": {"intent_owner": {"primary_keyword": "catering dubai"}},
        }, {"tests": []}))
        self.assertNotIn("@", blob)
        self.assertNotIn("+971", blob)

    def test_disconnected_payload_is_honest(self):
        out = C.signals_from_public(
            {"connected": False, "error": "missing scopes", "contacts": {"new": 0}, "conversations": {"topics": []}, "opportunities": {}},
            {},
            {},
        )
        self.assertFalse(out["connected"])
        self.assertEqual(out["signals"], [])
        self.assertIn("scopes", out["reason"].lower() + out.get("error", "").lower())

    def test_unknown_topic_does_not_mint_a_url(self):
        pages = {"/private-chef-dubai": {"intent_owner": {"primary_keyword": "private chef dubai"}}}
        self.assertIsNone(C.owner_for_topic("helipad dinner", pages))
        out = C.signals_from_public(
            {
                "connected": True,
                "contacts": {"total": 2, "new": 2, "sources": []},
                "conversations": {"total": 1, "topics": [{"label": "helipad dinner", "count": 4}]},
                "opportunities": {"won": 0, "open": 0},
            },
            pages,
            {"tests": []},
        )
        sig = out["signals"][0]
        self.assertIsNone(sig["owner_url"])
        self.assertEqual(sig["action"], "backlog")
        self.assertIn("do not mint", sig["why"].lower())

    def test_every_allowlisted_topic_has_a_fallback_owner(self):
        import harvest_ghl_lib as H

        missing = [t for t in H.TOPIC_TERMS if t not in C.DEFAULT_OWNERS]
        self.assertEqual(missing, [])

    def test_proposals_never_mint_urls_and_optimize_for_contacts(self):
        engine = C.signals_from_public(
            {
                "connected": True,
                "contacts": {"total": 40, "new": 6, "sources": [{"label": "google", "count": 2}]},
                "conversations": {
                    "total": 12,
                    "topics": [{"label": "yacht", "count": 8}, {"label": "helipad dinner", "count": 2}],
                },
                "opportunities": {"won": 1, "open": 1},
            },
            {"/yachts": {"intent_owner": {"primary_keyword": "yacht catering dubai"}}},
            {"tests": [{"url": "/yachts", "ctr_gap": 0.012, "status": "proposed", "impressions": 209}]},
        )
        props = C.proposals_from_signals(engine)
        self.assertTrue(props)
        self.assertTrue(all(p["mint_url"] is False for p in props))
        self.assertTrue(all(p["class"] == "crm_signal" for p in props))
        self.assertTrue(all(p["action_kind"] == "snippet_test" for p in props))
        self.assertFalse(any(p["keyword"] == "helipad dinner" for p in props))
        self.assertIn("new contacts created in GoHighLevel", engine["optimize_for"])
        yacht = next(p for p in props if p["keyword"] == "yacht")
        self.assertEqual(yacht["url"], "/yachts")
        self.assertEqual(yacht["conversation_count"], 8)
        self.assertEqual(yacht["demand"], 8)

    def test_live_contract_maps_allowlisted_topics_to_hubs(self):
        root = pathlib.Path(__file__).resolve().parents[3]
        pages = json.loads((root / "docs/seo/myCHEF-AE-SEO-STANDARD.json").read_text())["pages"]
        self.assertEqual(C.owner_for_topic("private chef", pages), "/private-chef-dubai")
        self.assertEqual(C.owner_for_topic("iftar", pages), "/iftar-catering-dubai")
        self.assertEqual(C.owner_for_topic("yacht", pages), "/yachts")
        self.assertEqual(C.owner_for_topic("catering", pages), "/catering-dubai")

    def test_strip_pii_keeps_iso_dates(self):
        blob = C.strip_pii("harvested 2026-09-08 from +971500000000")
        self.assertIn("2026-09-08", blob)
        self.assertNotIn("+971", blob)
        self.assertNotIn("500000000", blob)

    def test_proposals_empty_when_disconnected(self):
        engine = C.signals_from_public({"connected": False, "error": "no token"}, {}, {})
        self.assertEqual(C.proposals_from_signals(engine), [])

    def test_strip_pii_redacts_email_and_phone(self):
        blob = C.strip_pii("Call Aisha hidden@example.com on +971500000000 about a yacht")
        self.assertNotIn("@", blob)
        self.assertNotIn("+971", blob)
        self.assertNotIn("500000000", blob)


if __name__ == "__main__":
    unittest.main()

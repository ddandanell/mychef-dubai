"""GoHighLevel MCP — connect on demand, never return PII.

    python3 -m pytest docs/seo/keyword-map/test_ghl_mcp.py -q
"""
from __future__ import annotations

import json
import pathlib
import sys
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import ghl_mcp_lib as M  # noqa: E402


class GhlMcp(unittest.TestCase):
    def test_tool_names_are_stable(self):
        names = {t["name"] for t in M.TOOLS}
        self.assertEqual(
            names,
            {
                "ghl_connect",
                "ghl_contacts_summary",
                "ghl_conversation_topics",
                "ghl_opportunities",
                "ghl_seo_signals",
                "ghl_harvest",
            },
        )
        for tool in M.TOOLS:
            self.assertIn("inputSchema", tool)
            self.assertIn("description", tool)

    def test_connect_without_token_is_honest(self):
        out = M.dispatch("ghl_connect", creds=("", ""))
        self.assertFalse(out["connected"])
        self.assertIn("GHL_API_KEY", out["error"])
        self.assertIn("new contacts", " ".join(out["optimize_for"]).lower())

    def test_connect_401_is_missing_scopes_not_zeros(self):
        def fake(path, token, params=None, body=None):
            if path == "/locations/search":
                return 200, {
                    "locations": [
                        {"name": "myCHEF Dubai | Private Chefs & Catering", "country": "AE", "city": "Dubai", "id": "loc1"}
                    ]
                }
            return 401, {"message": "unauthorized"}

        out = M.connect(creds=("pit-token", "loc1"), caller=fake)
        self.assertFalse(out["connected"])
        self.assertIn("scopes", out["error"].lower())
        self.assertNotIn("pit-token", json.dumps(out))
        self.assertEqual(out.get("contacts", {}).get("new", 0), 0)

    def test_sanitize_strips_contact_fields_and_message_bodies(self):
        dirty = {
            "email": "hidden@example.com",
            "phone": "+971500000000",
            "firstName": "Aisha",
            "name": "Aisha",
            "tags": ["palm jumeirah"],
            "lastMessageBody": "Can you cook Friday?",
            "contacts": {"total": 3, "new": 1, "note": "email hidden@example.com"},
        }
        clean = M.sanitize(dirty)
        blob = json.dumps(clean)
        self.assertNotIn("hidden@example.com", blob)
        self.assertNotIn("+971500000000", blob)
        self.assertNotIn("Aisha", blob)
        self.assertNotIn("palm jumeirah", blob)
        self.assertNotIn("Can you cook Friday?", blob)
        self.assertEqual(clean["contacts"]["total"], 3)
        self.assertEqual(clean["contacts"]["new"], 1)

    def test_sanitize_keeps_business_location_names(self):
        clean = M.sanitize({"locations": [{"name": "myCHEF Dubai | Private Chefs & Catering", "city": "Dubai"}]})
        self.assertEqual(clean["locations"][0]["name"], "myCHEF Dubai | Private Chefs & Catering")

    def test_signals_tool_never_includes_pii(self):
        public = {
            "connected": True,
            "contacts": {"total": 1, "new": 1, "sources": [{"label": "whatsapp", "count": 1}]},
            "conversations": {"total": 1, "topics": [{"label": "catering", "count": 1}]},
            "opportunities": {"won": 0, "open": 0},
        }
        out = M.seo_signals(
            public=public,
            pages={"/catering-dubai": {"intent_owner": {"primary_keyword": "catering dubai"}}},
            snippets={"tests": []},
        )
        blob = json.dumps(out)
        self.assertNotIn("@", blob)
        self.assertTrue(out["connected"])
        self.assertEqual(out["signals"][0]["owner_url"], "/catering-dubai")

    def test_unknown_tool_errors(self):
        out = M.dispatch("ghl_wipe_all")
        self.assertIn("error", out)
        self.assertFalse(out.get("connected", False))


if __name__ == "__main__":
    unittest.main()

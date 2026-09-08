"""GoHighLevel public payload — counts and topics, never PII.

    python3 -m pytest docs/seo/keyword-map/test_harvest_ghl.py -q
"""
from __future__ import annotations

import json
import pathlib
import sys
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

import harvest_ghl_lib as ghl  # noqa: E402


CONTACTS = [
    {
        "id": "c1",
        "email": "hidden@example.com",
        "phone": "+971500000000",
        "firstName": "Aisha",
        "dateAdded": "2026-09-01T10:00:00.000Z",
        "source": "Website",
        "tags": ["private chef", "palm jumeirah", "Aisha hidden@example.com", "+971500000000"],
    },
    {
        "id": "c2",
        "email": "other@example.com",
        "phone": "+971511111111",
        "firstName": "Ben",
        "dateAdded": "2026-08-01T10:00:00.000Z",
        "source": "WhatsApp +971511111111",
        "tags": ["catering"],
    },
]

OPPS = [
    {"id": "o1", "name": "Villa dinner 12 pax", "status": "won", "monetaryValue": 4200, "pipelineName": "Bookings"},
    {"id": "o2", "name": "Ramadan iftar", "status": "open", "monetaryValue": 8000, "pipelineName": "Bookings"},
    {"id": "o3", "name": "Lost yacht", "status": "lost", "monetaryValue": 0, "pipelineName": "Bookings"},
]

CONVOS = [
    {
        "id": "v1",
        "type": "TYPE_PHONE",
        "lastMessageBody": "Can you do a private chef in Emirates Hills this Friday?",
        "unreadCount": 1,
        "starred": False,
    },
    {
        "id": "v2",
        "type": "TYPE_WHATSAPP",
        "lastMessageBody": "Need catering for 40, budget around AED",
        "unreadCount": 0,
        "starred": True,
    },
    {
        "id": "v3",
        "type": "TYPE_WHATSAPP",
        "lastMessageBody": "Yacht catering this Friday, call +971522222222",
        "unreadCount": 0,
        "starred": False,
    },
]


class HarvestGhl(unittest.TestCase):
    def test_public_payload_has_counts_not_pii(self):
        payload = ghl.public_payload(
            contacts=CONTACTS,
            opportunities=OPPS,
            conversations=CONVOS,
            window_days=30,
            now_iso="2026-09-08T12:00:00+00:00",
        )
        blob = json.dumps(payload)
        self.assertNotIn("hidden@example.com", blob)
        self.assertNotIn("+971500000000", blob)
        self.assertNotIn("+971511111111", blob)
        self.assertNotIn("Aisha", blob)
        self.assertNotIn("palm jumeirah", blob)
        self.assertEqual(payload["contacts"]["total"], 2)
        self.assertEqual(payload["contacts"]["new"], 1)
        self.assertEqual(payload["opportunities"]["won"], 1)
        self.assertEqual(payload["opportunities"]["open"], 1)
        self.assertEqual(payload["opportunities"]["lost"], 1)
        self.assertGreaterEqual(payload["conversations"]["open_or_unread"], 1)
        topics = {t["label"]: t["count"] for t in payload["conversations"]["topics"]}
        self.assertIn("private chef", topics)
        self.assertIn("catering", topics)
        self.assertIn("yacht", topics)
        self.assertNotIn("won_value", payload["opportunities"])
        self.assertTrue(all(t["label"] in ghl.TOPIC_TERMS for t in payload["conversations"]["topics"]))
        source_labels = {row["label"] for row in payload["contacts"]["sources"]}
        self.assertTrue(source_labels <= {"whatsapp", "website", "google", "facebook", "instagram", "referral", "chat", "unknown", "other"})

    def test_http_client_blocks_writes(self):
        code, payload = ghl.ghl_call("/contacts/", "token", body={"firstName": "Aisha"})
        self.assertEqual(code, 0)
        self.assertIn("blocked", (payload.get("error") or "").lower())
        self.assertNotIn("Aisha", json.dumps(payload))

    def test_missing_data_is_empty_not_invented(self):
        payload = ghl.public_payload(contacts=[], opportunities=[], conversations=[], window_days=30)
        self.assertEqual(payload["contacts"]["total"], 0)
        self.assertEqual(payload["opportunities"]["won"], 0)
        self.assertEqual(payload["conversations"]["topics"], [])


if __name__ == "__main__":
    unittest.main()

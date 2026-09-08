"""URL freeze — pages are never deleted and URLs are never renamed.

    python3 -m pytest docs/seo/keyword-map/test_verify_url_stability.py -q
"""
from __future__ import annotations

import importlib.util
import json
import pathlib
import tempfile
import unittest

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[2]
SPEC = importlib.util.spec_from_file_location(
    "verify_url_stability", ROOT / "scripts" / "verify-url-stability.py"
)
# The verifier is written in this same change; tests import it as a module.


def load_mod():
    spec = importlib.util.spec_from_file_location(
        "verify_url_stability", ROOT / "scripts" / "verify-url-stability.py"
    )
    assert spec and spec.loader
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class UrlStability(unittest.TestCase):
    def _run(self, inventory: list[str], contract: list[str], redirects: list[str] | None = None, live: list[str] | None = None):
        mod = load_mod()
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            inv = folder / "url-inventory.json"
            con = folder / "contract.json"
            ver = folder / "vercel.json"
            inv.write_text(json.dumps({"urls": inventory, "live": live if live is not None else inventory}), encoding="utf-8")
            pages = {
                u: {"indexation": {"robots": {"index": True}}}
                for u in contract
            }
            con.write_text(json.dumps({"pages": pages}), encoding="utf-8")
            ver.write_text(
                json.dumps({"redirects": [{"source": s, "destination": "/x", "statusCode": 301} for s in (redirects or [])]}),
                encoding="utf-8",
            )
            return mod.check(inventory_path=inv, contract_path=con, vercel_path=ver)

    def test_removing_a_contract_url_fails(self):
        problems, _added = self._run(["/", "/about", "/contact"], ["/", "/about"])
        self.assertTrue(any("DELETED_URL" in p for p in problems))
        self.assertTrue(any("/contact" in p for p in problems))

    def test_adding_a_url_is_allowed(self):
        problems, added = self._run(["/", "/about"], ["/", "/about", "/new-page"])
        self.assertEqual(problems, [])
        self.assertEqual(added, ["/new-page"])

    def test_renaming_is_a_deletion(self):
        problems, _added = self._run(["/private-chef-dubai"], ["/private-chef-uae"])
        self.assertTrue(any("DELETED_URL" in p for p in problems))

    def test_redirecting_a_live_inventory_url_fails(self):
        problems, _added = self._run(
            ["/", "/about"],
            ["/", "/about"],
            redirects=["/about"],
            live=["/", "/about"],
        )
        self.assertTrue(any("URL_CHANGED" in p for p in problems))

    def test_already_retired_redirects_are_left_alone(self):
        problems, _added = self._run(
            ["/", "/old"],
            ["/", "/old"],
            redirects=["/old"],
            live=["/"],
        )
        self.assertEqual(problems, [])

    def test_empty_live_list_is_not_all_frozen_urls(self):
        problems, _added = self._run(
            ["/", "/old"],
            ["/", "/old"],
            redirects=["/old"],
            live=[],
        )
        self.assertEqual(problems, [])

    def test_parking_a_live_url_without_redirect_passes(self):
        mod = load_mod()
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            inv = folder / "url-inventory.json"
            con = folder / "contract.json"
            ver = folder / "vercel.json"
            inv.write_text(json.dumps({"urls": ["/", "/gift-cards"], "live": ["/", "/gift-cards"]}), encoding="utf-8")
            con.write_text(
                json.dumps(
                    {
                        "pages": {
                            "/": {"indexation": {"robots": {"index": True}}},
                            "/gift-cards": {"indexation": {"robots": {"index": False}}},
                        }
                    }
                ),
                encoding="utf-8",
            )
            ver.write_text(json.dumps({"redirects": []}), encoding="utf-8")
            problems, added = mod.check(inventory_path=inv, contract_path=con, vercel_path=ver)
        self.assertEqual(problems, [])
        self.assertEqual(added, [])

    def test_identical_inventory_passes(self):
        problems, added = self._run(["/", "/about"], ["/", "/about"])
        self.assertEqual(problems, [])
        self.assertEqual(added, [])


if __name__ == "__main__":
    unittest.main()

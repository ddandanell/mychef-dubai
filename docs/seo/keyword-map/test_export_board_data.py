#!/usr/bin/env python3
import importlib.util
import pathlib
import tempfile
import unittest

HERE = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("export_board_data", HERE / "export-board-data.py")
mod = importlib.util.module_from_spec(spec)
assert spec.loader
spec.loader.exec_module(mod)


STATUS = """
<p class="sub">Checked 2026-08-26.</p>
<div class="tiles">
  <div class="tile"><div class="n" style="color:var(--ok)">11</div><div class="l">Connected and fresh</div></div>
  <div class="tile"><div class="n">1</div><div class="l">Errors or not connected</div></div>
</div>
<main>
<h2>Store</h2><div class="grid"><div class="card ok">
  <div class="top"><span class="dot"></span><span class="name">Neon Postgres</span><span class="state">Connected</span></div>
  <p class="detail">12 runs</p>
  <dl>
    <div><dt>Last data</dt><dd>9h ago<span class="muted"> · 2026-08-26</span></dd></div>
  </dl>
</div></div>
</main>
"""

ACTIONS = """
<div class="tile"><div class="n">400</div><div class="l">Changes recorded</div></div>
<table><thead><tr><th>Commit</th><th>When</th><th>What</th><th>Site files</th></tr></thead>
<tbody><tr><td class="mono">abc123</td><td class="mono">2026-08-26</td><td>feat(seo): test</td><td class="nums">1 of 2</td></tr></tbody></table>
"""


class ExportBoardData(unittest.TestCase):
    def test_parse_status_cards(self):
        parsed = mod.parse_status(STATUS)
        self.assertEqual(parsed["tiles"][0]["value"], "11")
        self.assertEqual(parsed["sections"][0]["title"], "Store")
        self.assertEqual(parsed["sections"][0]["cards"][0]["name"], "Neon Postgres")
        self.assertEqual(parsed["sections"][0]["cards"][0]["tone"], "ok")

    def test_parse_actions_table(self):
        parsed = mod.parse_actions(ACTIONS)
        self.assertEqual(parsed["tiles"][0]["value"], "400")
        self.assertEqual(parsed["rows"][0]["commit"], "abc123")
        self.assertIn("feat(seo): test", parsed["rows"][0]["what"])


if __name__ == "__main__":
    unittest.main()

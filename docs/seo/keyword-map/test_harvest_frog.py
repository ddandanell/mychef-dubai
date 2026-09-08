"""Screaming Frog ingest — overview, URL lists, crawl-over-crawl status.

    python3 -m pytest docs/seo/keyword-map/test_harvest_frog.py -q
"""
from __future__ import annotations

import pathlib
import sys
import tempfile
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

import harvest_frog_lib as frog  # noqa: E402


OVERVIEW = """\ufeff"Issue Name","Issue Type","Issue Priority","URLs","% of Total","Description","How To Fix"
"Directives: Noindex","Warning","High","3","0,410","noindex pages","review them"
"H2: Over 70 Characters","Opportunity","Low","15","5,260","long h2","shorten"
"Page Titles: Over 60 Characters","Opportunity","Medium","1","0,350","long titles","keep contract titles"
"""

NOINDEX = """\ufeff"Address","Indexability"
"https://www.mychef.ae/inquiry","Non-Indexable"
"https://www.mychef.ae/thank-you","Non-Indexable"
"https://www.mychef.ae/seo","Non-Indexable"
"""

H2 = """\ufeff"Address"
"https://www.mychef.ae/about"
"https://www.mychef.ae/contact"
"""

INLINKS = """\ufeff"Address"
"https://www.mychef.ae/should-not-be-read"
"""

CRAWL_OVERVIEW = """\ufeff"Site Crawled","https://mychef.ae/"
"Date","2026-08-26"
"Time","04:50:19"
"""


def write_crawl(folder: pathlib.Path) -> None:
    folder.mkdir(parents=True, exist_ok=True)
    (folder / "issues_overview_report.csv").write_text(OVERVIEW, encoding="utf-8")
    (folder / "directives_noindex.csv").write_text(NOINDEX, encoding="utf-8")
    (folder / "h2_over_70_characters.csv").write_text(H2, encoding="utf-8")
    (folder / "directives_noindex_inlinks.csv").write_text(INLINKS, encoding="utf-8")
    (folder / "all_inlinks.csv").write_text(INLINKS, encoding="utf-8")
    (folder / "crawl_overview.csv").write_text(CRAWL_OVERVIEW, encoding="utf-8")
    (folder / "page_titles_over_60_characters.csv").write_text(
        '"Address"\n"https://www.mychef.ae/private-chef-dubai"\n', encoding="utf-8"
    )


class HarvestFrog(unittest.TestCase):
    def test_overview_reads_european_decimals_and_counts(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            write_crawl(folder)
            snap = frog.ingest_dir(folder)
        self.assertEqual(snap["site"], "https://mychef.ae/")
        self.assertEqual(snap["crawled_on"], "2026-08-26")
        names = {i["name"]: i for i in snap["issues"]}
        self.assertEqual(names["Directives: Noindex"]["url_count"], 3)
        self.assertAlmostEqual(names["Directives: Noindex"]["pct"], 0.410)
        self.assertEqual(names["Directives: Noindex"]["priority"], "high")

    def test_urls_come_from_issue_csv_not_inlinks(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            write_crawl(folder)
            snap = frog.ingest_dir(folder)
        noindex = next(i for i in snap["issues"] if i["key"] == "directives noindex")
        self.assertEqual(
            noindex["urls"],
            [
                "https://www.mychef.ae/inquiry",
                "https://www.mychef.ae/thank-you",
                "https://www.mychef.ae/seo",
            ],
        )
        blob = " ".join(u for i in snap["issues"] for u in i["urls"])
        self.assertNotIn("should-not-be-read", blob)

    def test_contract_title_caps_are_accepted_not_open(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            write_crawl(folder)
            snap = frog.ingest_dir(folder)
        titles = next(i for i in snap["issues"] if "page titles over 60" in i["key"])
        self.assertEqual(titles["disposition"], "accepted")

    def test_compare_marks_fixed_improved_new_and_regressed(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            write_crawl(folder)
            first = frog.ingest_dir(folder)
            # Second crawl: noindex gone, h2 fewer, a new issue appears.
            (folder / "issues_overview_report.csv").write_text(
                '"Issue Name","Issue Type","Issue Priority","URLs","% of Total","Description","How To Fix"\n'
                '"H2: Over 70 Characters","Opportunity","Low","1","0,500","long h2","shorten"\n'
                '"Canonicals: Canonicalised","Warning","High","2","1,000","canonicalised","review"\n',
                encoding="utf-8",
            )
            (folder / "h2_over_70_characters.csv").write_text(
                '"Address"\n"https://www.mychef.ae/about"\n', encoding="utf-8"
            )
            (folder / "canonicals_canonicalised.csv").write_text(
                '"Address"\n"https://www.mychef.ae/old"\n', encoding="utf-8"
            )
            (folder / "directives_noindex.csv").write_text('"Address"\n', encoding="utf-8")
            second = frog.ingest_dir(folder)
        compared = frog.compare_crawls(first, second)
        by_key = {i["key"]: i for i in compared["issues"]}
        self.assertEqual(by_key["directives noindex"]["change"], "fixed")
        self.assertEqual(by_key["h2 over 70 characters"]["change"], "improved")
        self.assertEqual(by_key["canonicals canonicalised"]["change"], "new")

    def test_public_payload_counts_open_vs_accepted(self):
        with tempfile.TemporaryDirectory() as tmp:
            folder = pathlib.Path(tmp)
            write_crawl(folder)
            snap = frog.ingest_dir(folder)
            snap["stored"] = "docs/seo/frog/crawls/2026-08-26"
            payload = frog.public_payload(snap)
        self.assertGreaterEqual(payload["counts"]["open"], 1)
        self.assertGreaterEqual(payload["counts"]["accepted"], 1)
        self.assertTrue(any(t["label"] == "Open issues" for t in payload["tiles"]))
        self.assertEqual(payload["source"], "docs/seo/frog/crawls/2026-08-26")
        self.assertNotIn("/Users/", payload["source"])


if __name__ == "__main__":
    unittest.main()

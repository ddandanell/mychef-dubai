#!/usr/bin/env python3
"""Check the production sitemap's pages and record the time they were fetched."""
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlsplit
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

ORIGIN = "https://www.mychef.ae"
SITEMAP = ORIGIN + "/sitemap.xml"
OUT = Path(__file__).with_name("live-crawl.json")
NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"


class PageHead(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals = []
        self.robots = []
        self.titles = 0
        self.h1s = 0

    def handle_starttag(self, tag, attributes):
        attrs = {key: value or "" for key, value in attributes}
        if tag == "title":
            self.titles += 1
        elif tag == "h1":
            self.h1s += 1
        elif tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonicals.append(attrs.get("href", ""))
        elif tag == "meta" and attrs.get("name", "").lower() in {"robots", "googlebot"}:
            self.robots.append(attrs.get("content", ""))


def request(url):
    return urlopen(Request(url, headers={"User-Agent": "myCHEF SEO Evidence (sitemap validation)"}), timeout=15)


def inspect(url):
    try:
        with request(url) as response:
            if response.geturl() != url:
                return ["Sitemap URL redirects"]
            if response.status != 200 or response.headers.get_content_type() != "text/html":
                return ["Expected HTTP 200 HTML"]
            page = PageHead()
            page.feed(response.read().decode(response.headers.get_content_charset() or "utf-8", errors="replace"))
            directives = page.robots + response.headers.get_all("X-Robots-Tag", [])
    except HTTPError as exc:
        return [f"HTTP {exc.code}"]
    except (URLError, OSError):
        return ["Fetch failed"]

    issues = []
    if len(page.canonicals) != 1 or not page.canonicals[0] or urljoin(url, page.canonicals[0]) != url:
        issues.append("Expected one self-canonical")
    if any(re.search(r"\b(noindex|none)\b", directive, re.I) for directive in directives):
        issues.append("Sitemap URL is marked noindex")
    if page.titles != 1:
        issues.append("Expected one title")
    if page.h1s != 1:
        issues.append("Expected one H1")
    return issues


def main():
    started = datetime.now(timezone.utc)
    with request(SITEMAP) as response:
        if response.geturl() != SITEMAP:
            raise SystemExit("Production sitemap redirected")
        sitemap = ET.fromstring(response.read())
    urls = [entry.text for entry in sitemap.findall(f"{NS}url/{NS}loc")]
    if not urls or len(set(urls)) != len(urls) or any(
        not url or urlsplit(url).scheme != "https" or urlsplit(url).netloc != urlsplit(ORIGIN).netloc
        for url in urls
    ):
        raise SystemExit("Expected unique, first-party HTTPS sitemap URLs")

    with ThreadPoolExecutor(max_workers=8) as pool:
        rows = list(zip(urls, pool.map(inspect, urls), strict=True))
    failures = [row for row in rows if any(issue == "Fetch failed" or issue.startswith(("HTTP 429", "HTTP 5")) for issue in row[1])]
    if len(failures) == len(urls):
        raise SystemExit("Production pages could not be fetched. Retaining the previous crawl.")

    findings = [{"url": url, "issues": issues} for url, issues in rows if issues]
    counts = Counter(issue for row in findings for issue in row["issues"])
    payload = {
        "sitemap": SITEMAP,
        "started_at": started.isoformat(timespec="seconds"),
        "completed_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "checked": len(urls),
        "passed": len(urls) - len(findings),
        "fetch_failures": len(failures),
        "issue_counts": dict(sorted(counts.items())),
        "findings": findings,
    }
    tmp = OUT.with_suffix(".tmp")
    tmp.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    tmp.replace(OUT)
    print(f"Live sitemap crawl: {payload['passed']}/{len(urls)} passed; {len(failures)} fetch failures.")


if __name__ == "__main__":
    main()

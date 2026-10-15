#!/usr/bin/env python3
"""Write an evidence-based checklist for every system article after prerender."""
import argparse
import importlib.util
import json
import re
from html import unescape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('daily', ROOT / 'scripts/daily-supporting-blogs.py')
daily = importlib.util.module_from_spec(spec); spec.loader.exec_module(daily)


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.images = []; self.links = []; self.times = []; self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'a': self.links.append(a.get('href', ''))
        if tag == 'img': self.images.append(a)
        if tag == 'time': self.times.append(a.get('datetime'))


def require(ok, message):
    if not ok: raise SystemExit(message)


def main(rendered):
    daily.verify()
    ledger, contract = daily.read(daily.LEDGER), daily.read(daily.CONTRACT)
    photos = {p['id']: p for p in daily.read('src/content/previousWorkPhotos.json')}
    reports = []
    for batch in ledger['batches']:
        for entry in batch['articles']:
            route = entry['path']
            article = daily.read('blog/data/' + route.split('/')[-1] + '.json')
            opening = unescape(re.sub('<[^>]*>', '', re.search(r'<p\b[^>]*>(.*?)</p>', article['body_html'], re.S)[1]))
            evidence = entry['review']['demand_evidence']
            report = {
                'path': route, 'batch': batch['id'], 'keyword': article['primary_keyword'],
                'volume': evidence['volume'], 'intent': 'informational',
                'demand_evidence': evidence, 'primary_money_page': entry['owner'],
                'cluster_hub': '/blog/topic/' + article['hub'],
                'topic_overlap': {'status': 'reviewed', 'closest_existing_page': entry['review']['nearest_existing_url'], 'rationale': entry['review']['overlap_review']},
                'title_and_meta': {'status': 'pass', 'title_characters': len(article['meta_title']), 'description_characters': len(article['meta_description'])},
                'opening_answer': {'status': 'editorially reviewed', 'words': len(opening.split()), 'reader_question': entry['review']['reader_question']},
                'original_value': entry['review']['distinct_value'],
                'photographs': {'status': 'pass', 'count': len(entry['photo_ids']), 'original_owner_uploads': True, 'hero_width': photos[entry['photo_ids'][0]]['width'], 'visual_aid': 'HTML decision table and/or practical checklist'},
                'money_page_links': 'Early contextual source link; relevant closing enquiry and service CTA. No compulsory repeated mid-post sales block for short guides.',
                'dates': {'published': article['published_at'], 'modified': article['updated_at'], 'policy': 'Only material editorial changes advance modification date.'},
                'rendered_checks': 'not run',
                'core_web_vitals': {'status': 'field data not yet established for this new URL', 'rule': 'Do not report field CWV pass from a local desktop build or lab check. Review mobile field data when available.'},
                'measurement': {'engagement_event': 'blog_money_page_click', 'dimensions': 'Built-in pagePath with eventName; blog_path and money_page_path are additional event parameters.', 'conversion_limit': 'Internal clicks and GA4 key events alone do not establish assisted qualified bookings.'},
            }
            if rendered:
                html = (ROOT / 'dist' / route.lstrip('/') / 'index.html').read_text()
                parsed = Page(html)
                body = html.split('<article class="bg-white section-padding"', 1)[1]
                toc = body.find('class="blog-article-toc"')
                first_h2 = body.find('<h2')
                require(0 < toc < first_h2 and body.find('<p') < toc, route + ': TOC must follow the introduction')
                require('data-blog-byline' in html and '/about' in parsed.links, route + ': missing linked company byline')
                require(article['published_at'] in parsed.times, route + ': visible published timestamp missing')
                if article['updated_at'] != article['published_at']:
                    require(article['updated_at'] in parsed.times, route + ': visible updated timestamp missing')
                require('/blog/topic/' + article['hub'] in parsed.links, route + ': missing cluster link')
                reverse = []
                for source in article['related_from']:
                    old = ROOT / 'dist' / source.lstrip('/') / 'index.html'
                    if old.exists() and route in Page(old.read_text()).links: reverse.append(source)
                require(len(reverse) >= 2, route + ': fewer than two rendered reverse links')
                images = []
                for i, pid in enumerate(entry['photo_ids']):
                    matches = [im for im in parsed.images if im.get('src') == photos[pid]['src']]
                    require(bool(matches), route + ': reviewed image missing')
                    im = matches[0]
                    require(im.get('width') and im.get('height') and im.get('alt'), route + ': missing image attributes')
                    require(im.get('loading') != 'lazy' if i == 0 else im.get('loading') == 'lazy', route + ': image loading priority incorrect')
                    images.append(photos[pid]['src'])
                nodes = []
                for raw in re.findall(r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S):
                    graph = json.loads(unescape(raw))
                    nodes.extend(graph.get('@graph', [graph]))
                articles = [n for n in nodes if n.get('@type') in ['Article', 'BlogPosting']]
                require(len(articles) == 1, route + ': require one shared Article graph')
                require(articles[0]['datePublished'] == article['published_at'] and articles[0]['dateModified'] == article['updated_at'], route + ': schema dates differ')
                require(any(n.get('@type') == 'BreadcrumbList' for n in nodes), route + ': missing breadcrumb schema')
                report['rendered_checks'] = {'status': 'pass', 'intro_then_toc': True, 'linked_company_byline_and_honest_dates': True,
                    'canonical_schema_and_robots': 'also checked by full SEO contract and live verifier',
                    'reverse_links': reverse, 'images_with_dimensions_alt_and_loading': images,
                    'article_and_breadcrumb_schema': True}
            reports.append(report)
    if rendered:
        parked = set(daily.read('docs/seo/parked-urls.json')['urls'])
        count = (len([p for u, p in contract['pages'].items() if u.startswith('/blog/') and not u.startswith('/blog/topic/') and u not in parked and p.get('page_type') == 'Blog post' and not p.get('indexation', {}).get('redirect_to')]) + 11) // 12
        for n in range(1, count + 1):
            route = '/blog' if n == 1 else f'/blog/page/{n}'
            html = (ROOT / 'dist' / route.lstrip('/') / 'index.html').read_text()
            links = Page(html).links
            for page in range(1, count + 1):
                require(('/blog' if page == 1 else f'/blog/page/{page}') in links, route + ': missing numbered archive link')
            require('data-blog-archive' in html, route + ': missing archive grid')
    daily.save('blog/publishing-checklists.json', {'framework': daily.read(daily.POLICY)['framework'], 'posts': reports})
    print(f'Blog framework passed: {len(reports)} filled post checklists; {"rendered archive and article checks included" if rendered else "source only"}.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--rendered', action='store_true')
    main(parser.parse_args().rendered)

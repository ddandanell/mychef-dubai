#!/usr/bin/env python3
"""Compile the approved 22 September editorial batch (requires Python Markdown)."""
from pathlib import Path
import json
import markdown

ROOT = Path(__file__).resolve().parents[1]
PLAN = ROOT / 'docs/seo/content-batch-2026-09-22/plan.json'
plan = json.loads(PLAN.read_text())
contract = json.loads((ROOT / 'docs/seo/myCHEF-AE-SEO-STANDARD.json').read_text())

for article in plan['articles']:
    slug = article['slug']
    page = contract['pages']['/blog/' + slug]
    assert page['on_page']['h1'] == article['title']
    assert page['intent_owner']['primary_keyword'] == article['primary']
    body = (ROOT / 'blog/editorial/2026-09-22' / (slug + '.md')).read_text()
    data = {
        'slug': slug, 'title': article['title'],
        'body_html': markdown.markdown(body, extensions=['tables', 'sane_lists']),
        'body_markdown': body,
        'meta_title': page['on_page']['title'],
        'meta_description': article['description'], 'excerpt': article['description'],
        'primary_keyword': article['primary'],
        'image': {'url': '/images/blog-2026/' + slug + '.webp', 'alt': article['image_alt'],
                  'caption': 'AI-generated illustration of a hosting concept.'},
        'published_at': plan['published_at'], 'updated_at': plan['published_at'],
        'status': 'published', 'hub': article['hub'], 'category': article['category'],
        'related_articles': article['related_articles'],
        'related_from': article['related_from'], 'supporting_pages': article['supporting_pages'],
    }
    (ROOT / 'blog/data' / (slug + '.json')).write_text(json.dumps(data, indent=2, ensure_ascii=False) + '\n')

print(f"Compiled {len(plan['articles'])} original articles.")

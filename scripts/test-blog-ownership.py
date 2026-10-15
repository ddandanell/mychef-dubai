#!/usr/bin/env python3
"""Regression cases for imports that previously broke or weakened publication."""
import copy
import importlib.util
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location('blog_ownership', Path(__file__).with_name('verify-blog-ownership.py'))
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)


class BlogOwnershipTests(unittest.TestCase):
    def setUp(self):
        self.page = {
            'authority': {'role': 'supporting', 'purpose': 'editorial', 'money_page': '/private-chef-dubai', 'h1': 'Prepare your kitchen'},
            'indexation': {'canonical': 'https://www.mychef.ae/blog/kitchen-checklist'},
            'on_page': {'h1': 'Prepare your kitchen', 'title': 'Kitchen checklist | myCHEF', 'meta_description': 'A useful preparation checklist.'},
            'intent_owner': {'primary_keyword': 'home kitchen preparation checklist'},
        }
        self.article = {
            'slug': 'kitchen-checklist', 'title': 'Prepare your kitchen', 'meta_title': 'Kitchen checklist | myCHEF',
            'meta_description': 'A useful preparation checklist.', 'primary_keyword': 'home kitchen preparation checklist',
            'body_html': '<p>Agree the workspace for <a href="/private-chef-dubai">your household chef</a>.</p>',
        }
        self.pages = {'/private-chef-dubai': {'authority': {'purpose': 'service-detail'},
                      'intent_owner': {'primary_keyword': 'private chef dubai'}}, '/blog/kitchen-checklist': self.page}

    def errors(self, article=None, page=None):
        return guard.validate_article(article or self.article, self.page if page is None else page,
                                      {'/private-chef-dubai'}, {'/retired-guide'}, self.pages)

    def test_relative_and_canonical_owner_links_pass(self):
        self.assertEqual(self.errors(), [])
        article = copy.deepcopy(self.article)
        article['body_html'] = article['body_html'].replace('href="/', 'href="https://www.mychef.ae/')
        self.assertEqual(self.errors(article), [])

    def test_unassigned_export_is_blocked(self):
        self.assertTrue(any('assignment' in error for error in self.errors(page={})))

    def test_external_lookalike_does_not_count_as_owner_link(self):
        article = copy.deepcopy(self.article)
        article['body_html'] = article['body_html'].replace('href="/', 'href="https://example.com/')
        self.assertTrue(any('within 200 words' in error for error in self.errors(article)))

    def test_late_owner_link_is_blocked(self):
        article = copy.deepcopy(self.article)
        article['body_html'] = '<p>' + 'planning ' * 205 + '</p>' + article['body_html']
        self.assertTrue(any('within 200 words' in error for error in self.errors(article)))

    def test_import_cannot_restore_commercial_keyword_or_title(self):
        article = copy.deepcopy(self.article)
        article.update(primary_keyword='private chef dubai', meta_title='Private Chef Dubai')
        errors = self.errors(article)
        self.assertTrue(any('commercial primary' in error for error in errors))
        self.assertTrue(any('reverted' in error for error in errors))

    def test_inline_schema_and_second_headline_are_blocked(self):
        article = copy.deepcopy(self.article)
        article['body_html'] += '<h1>Another headline</h1><script type="application/ld+json">{}</script>'
        errors = self.errors(article)
        self.assertTrue(any('H1' in error for error in errors))
        self.assertTrue(any('structured data' in error for error in errors))

    def test_retired_and_apex_links_are_blocked(self):
        article = copy.deepcopy(self.article)
        article['body_html'] += '<p><a href="https://mychef.ae/retired-guide">Older guide</a></p>'
        errors = self.errors(article)
        self.assertTrue(any('apex host' in error for error in errors))
        self.assertTrue(any('retired destination' in error for error in errors))


if __name__ == '__main__':
    unittest.main()

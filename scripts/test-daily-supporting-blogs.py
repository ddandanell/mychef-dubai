#!/usr/bin/env python3
"""Regression checks for quota, topic rotation and the unreviewed-export gate."""
import importlib.util
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load(name):
    spec = importlib.util.spec_from_file_location(name, ROOT / 'scripts' / (name + '.py'))
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


daily, intake = load('daily-supporting-blogs'), load('queue-ryze-imports')


class PublishingTests(unittest.TestCase):
    def test_retries_reserve_staged_places(self):
        ledger = {'batches': [{'date': '2026-10-15', 'status': 'staged', 'articles': [1] * 5}]}
        self.assertEqual(daily.allowance(ledger, '2026-10-15', 5), 0)
        self.assertEqual(daily.allowance(ledger, '2026-10-16', 5), 5)

    def test_all_eight_owners_reached_in_two_batches(self):
        policy = json.loads((ROOT / 'blog/publishing-policy.json').read_text())
        first = daily.owner_slots(policy, 0, 5)
        second = daily.owner_slots(policy, 5, 5)
        self.assertEqual(len(set(first + second)), 8)
        self.assertEqual(daily.owner_slots(policy, 10, 5), first)

    def test_recovery_counts_on_actual_live_day(self):
        ledger = {'batches': [{'date': '2026-10-14', 'status': 'live', 'articles': [1] * 5,
                              'verification': {'publication_day': '2026-10-15'}}]}
        self.assertEqual(daily.allowance(ledger, '2026-10-15', 5), 0)

    def test_unassigned_published_export_is_held_without_losing_dates(self):
        article = {'slug': 'new-guide', 'status': 'published', 'published_at': '2026-10-14', 'body_html': '<p>Original content</p>'}
        self.assertTrue(intake.quarantine(article, set(), set()))
        self.assertEqual(article['status'], 'pending_review')
        self.assertEqual(article['published_at'], '2026-10-14')
        self.assertEqual(article['body_html'], '<p>Original content</p>')
        self.assertFalse(intake.quarantine(article, set(), set()))

    def test_existing_approved_article_must_reach_normal_guards(self):
        article = {'slug': 'approved', 'status': 'published', 'title': 'Wrong replacement title'}
        self.assertFalse(intake.quarantine(article, {'/blog/approved'}, set()))
        self.assertEqual(article['status'], 'published')

    def test_retired_article_is_not_reactivated(self):
        article = {'slug': 'retired', 'status': 'published'}
        self.assertFalse(intake.quarantine(article, set(), {'/blog/retired'}))

    def test_append_preserves_existing_contracts_and_format(self):
        old = '{\n "pages": {\n  "/keep": {"title": "Unchanged"}\n },\n "policy": true\n}\n'
        new = daily.append_contract(old, {'/new': {'title': 'New guide'}})
        self.assertIn('"/keep": {"title": "Unchanged"}', new)
        self.assertEqual(json.loads(new)['pages']['/keep'], json.loads(old)['pages']['/keep'])
        self.assertTrue(json.loads(new)['policy'])
        with self.assertRaises(AssertionError):
            daily.append_contract(old, {'/keep': {}})

    def test_near_duplicate_titles_flagged(self):
        self.assertTrue(daily.similar('A Household Kitchen Handover Plan in Dubai', 'Household Kitchen Handover Plan'))
        self.assertFalse(daily.similar('Yacht Food Handover Without a Waiter', 'Hybrid Workshop Catering Numbers'))


if __name__ == '__main__':
    unittest.main()

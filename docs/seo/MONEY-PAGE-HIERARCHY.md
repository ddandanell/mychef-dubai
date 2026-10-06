# Core service ownership and supporting pages

The SEO contract owns the service hierarchy. `authority_policy.money_pages` lists the eight core service destinations; every active route has an `authority` record. All other routes are supporting pages, including specific service details, articles, locations and utility pages.

| Core service page | Primary phrase |
| --- | --- |
| `/private-chef-dubai` | private chef Dubai |
| `/full-time-private-chef-dubai` | full time private chef Dubai |
| `/catering-dubai` | catering Dubai |
| `/events` | event catering Dubai |
| `/corporate` | corporate catering Dubai |
| `/institutional-catering-dubai` | institutional catering Dubai |
| `/luxury-dining-experiences` | private dining experience Dubai |
| `/yachts` | yacht catering Dubai |

## Publishing rules

- Assign every new page to an existing core service in `docs/seo/myCHEF-AE-SEO-STANDARD.json`.
- Give articles and local guides a distinct planning, comparison or informational focus; the core service owns the broad commercial phrase. Specific service pages may explain their narrower offer.
- Add useful contextual links to the core service. The shared layout also supplies a visible service handoff on non-utility supporting pages.
- Preserve URLs, self-canonicals and existing indexation. Do not canonicalise useful unique guides to service pages.
- Keep prices and booking terms in the current service source; guides explain cost drivers and link to current options.
- Utility pages and the homepage retain their existing content and navigation.

## Validation

Generate the projection with `python3 scripts/generate-page-authority.py`. Source validation runs before building and after Ryze conversion. The converter rejects unassigned published articles and reversions of the explicitly realigned article titles.

```sh
python3 scripts/verify-page-authority.py
python3 scripts/verify-seo-contract.py
python3 scripts/verify-keyword-locks.py
npm run build
npm run prerender
python3 scripts/verify-page-authority.py --rendered
python3 scripts/verify-public-pages.py
```

The rendered check covers all 259 assigned routes, verifies their H1s and indexation, checks the 30 retargeted titles/H1s and requires a main-content link to the core owner on every non-utility supporting page. Ranking effects must be assessed after recrawling; this implementation does not guarantee positions.

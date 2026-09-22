# Five-day editorial batch

The owner requested fifteen substantial articles with ChatGPT-created images and publication to myCHEF.ae. The complete batch is published together, following the subsequent instruction to get everything online. The day numbers in `plan.json` group the editorial plan; they are not future publication dates or a recurring automation.

- Fifteen original articles, approximately 29,600 words of article text.
- Fifteen original AI-generated hero images, each with 480, 800 and 1200 pixel responsive derivatives.
- 140 manually authored internal links, plus curated related reading, blog/topic listings and relevant service-page planning cards.
- Individual titles, descriptions, canonical URLs, article structured data, indexation settings and sitemap entries.
- Images are identified as AI-generated illustrations, not client-event photography.

`demand-check.json` records the existing keyword evidence and its limitations. Exact new informational phrases without recorded volume remain unmeasured. No search-volume, ranking, client-history or external-backlink claims have been invented. No external outreach or third-party link placement is part of this publication.

Authoring sources are in `blog/editorial/2026-09-22/`. To rebuild their import JSON, install Python Markdown and run `python3 scripts/build-editorial-batch.py`, then `node scripts/ryze-convert.mjs`. The latter also rebuilds topic cards and explicit linking registries. Image prompts and final asset paths are recorded in `images.json`; the built-in ChatGPT image tool was used.

Validation: production TypeScript/Vite build; source and rendered article audits; SEO contract and keyword locks; redirect, parked-page and URL-stability checks; generated page records. Local Chromium could not launch in this runtime, so prepublication HTML was checked with the repository's production-component SSR audit. Live deployment and browser verification follow publication.

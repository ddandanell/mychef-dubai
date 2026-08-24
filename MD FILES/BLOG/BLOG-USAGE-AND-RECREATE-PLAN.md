# Blog update planning guide

This folder contains the source knowledge for the website blog refresh. The goal is to use these two files as the complete briefing for the AI agent that will recreate or verify blog pages.

## Source files to use

1. `DESERT-DINNER-PARTY-BLOG-FOR-DAVID.md`
   - The standalone draft for the single blog not yet published.
   - It contains the full final article copy, SEO metadata, and photo suggestions.

2. `THE-13-BLOGS-FOR-DAVID.md`
   - The master source for all thirteen blog URLs.
   - It includes the blog list, status, main keyword, length, and the full structure for each article.

## Scope rule

These two files are the entire knowledge base for this stage.

- Do not invent new blog copy.
- Do not add new research outside these files.
- Do not change unrelated website code.
- Do not start a visual redesign or content rewrite.
- This is planning only: structure, map missing content, and prepare the agent with a clear operating model.

---

## What the files already tell us

The source material identifies 13 total blog entries.

| # | URL | Main keyword | Status | Notes |
|---|---|---|---|---|
| 1 | `/blog/how-to-hire-a-private-chef-dubai` | how to hire a private chef in dubai | live | Full article structure exists in the 13-blog file |
| 2 | `/blog/private-chef-vs-restaurant-dubai` | private chef vs restaurant dubai | live | Full article structure exists |
| 3 | `/blog/dinner-party-menu-ideas-dubai` | dinner party menu ideas dubai | live | Full article structure exists |
| 4 | `/blog/wedding-catering-cost-dubai` | wedding catering cost dubai | live | Full article structure exists |
| 5 | `/blog/brunch-at-home-dubai` | brunch at home dubai | live | Full article structure exists |
| 6 | `/blog/vegan-catering-dubai-guide` | vegan catering dubai | live | Full article structure exists |
| 7 | `/blog/corporate-event-catering-ideas-dubai` | corporate event catering ideas dubai | live | Full article structure exists |
| 8 | `/blog/iftar-at-home-dubai` | iftar at home dubai | live | Full article structure exists |
| 9 | `/blog/nye-party-catering-dubai` | new years eve catering dubai | live | Full article structure exists |
| 10 | `/blog/private-chef-date-night-dubai` | date night ideas dubai | live | Full article structure exists |
| 11 | `/blog/grazing-table-vs-buffet-dubai` | grazing table vs buffet dubai | live | Full article structure exists |
| 12 | `/blog/how-far-ahead-book-caterer-dubai` | how far in advance to book a caterer dubai | live | Full article structure exists |
| 13 | `/blog/desert-dinner-party-dubai` | blank in index | not published yet | Full draft exists as a standalone file |

### Summary

- 12 published blog entries are already listed as live.
- 1 blog is explicitly marked not published yet: desert dinner party.
- The total source content is 30,659 words across 13 posts, with 39 photo recommendations.

---

## What is recreated versus missing

### Already recreated / in place

The master file shows these pages are already represented as website-ready article structures:

- Each live blog has a URL.
- Each has a main keyword.
- Each includes title, meta description, H1, intro, body sections, FAQ, and photo suggestions.
- The site is expected to already have these pages implemented or in production.

This means the AI agent should treat the live entries as reference material and parity checks, not as new work unless a page is missing or out of sync.

### Missing / still to recreate

The missing piece is the single desert-dinner draft:

- `/blog/desert-dinner-party-dubai`
- Listed as not published yet in the master file.
- Full final draft exists in the standalone markdown file.
- This is the one page that should be recreated from the provided copy.

### Important planning conclusion

The real work is not to invent content from scratch. The work is to match published-source structure to website output for the missing page, while using the live pages as a model for formatting and parity.

---

## Standard article pattern used by all pages

Each blog is structured around the same template:

1. Keywords
2. Title
3. Meta description
4. H1
5. Intro
6. Body sections
7. FAQ
8. Photo suggestions

This is consistent in both source files.

The AI agent should treat the following as the required article contract:

- Page URL
- Main keyword
- SEO title
- SEO meta description
- H1 heading
- Intro paragraph
- Sectioned body content
- FAQ section
- Three photo direction suggestions

---

## Exact agent operating rules

### Primary instruction

The AI agent should use the two blog markdown files as the single source of truth and should only perform the content recreation work implied by them.

### Required behavior

- Read `THE-13-BLOGS-FOR-DAVID.md` first for the master index and status map.
- Read `DESERT-DINNER-PARTY-BLOG-FOR-DAVID.md` when the missing page is the target.
- Treat the write-up as final copy, not a rough draft.
- Preserve the existing wording unless the actual website implementation requires a page structure wrapper.
- Match the title, meta description, H1, intro, sections, FAQ and photo suggestions exactly.
- For live pages, compare site output to the source structure to identify drift or missing sections.
- For unpublished pages, recreate the page using the draft content as the final source.

### Out-of-scope behavior

The agent must not:

- add unrelated services pages
- change product messaging
- rewrite SEO text from scratch
- create new blog content not present in these files
- redesign page templates beyond the required blog page output
- work on anything outside the blog-page migration / parity task

---

## Recommended output from the agent

The AI agent should produce a site-update plan that answers four questions clearly:

1. Which pages already exist and which are intentionally missing?
2. For each page, what exact source block is the authoritative copy?
3. Which fields are required for the page to match the article specification?
4. Which single page remains to be recreated from the draft: the desert dinner page?

---

## Acceptance checklist for the next phase

A page is ready when all of the following are true:

- URL matches the source
- Title matches the source
- Meta description matches the source
- H1 matches the source
- Intro matches the source
- Body structure is complete
- FAQ matches the source
- Photo suggestions are present
- The page is published or migrated in the correct website section

For the missing blog page, the checklist is even tighter:

- `/blog/desert-dinner-party-dubai` is created
- The standalone blog draft is used as the exact content source
- The page follows the same layout and metadata conventions as the rest of the blog set
- It is ready for final website publishing

---

## Final planning result

The blog folder is already sufficient as the source-of-truth briefing for the website update.

The actionable conclusion is simple:

- The master 13-blog file is the inventory and parity map.
- The desert dinner file is the content source for the only missing page.
- The AI agent should perform only the recreation / verification work implied by these documents.
- No additional research or implementation should be started in this planning stage.

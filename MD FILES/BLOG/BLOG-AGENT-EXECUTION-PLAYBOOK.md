# Blog agent execution playbook

This file is the operational brief for the AI agent that will review the blog content in this folder and create the missing website-ready blog work.

## Purpose

The agent should do exactly this:

1. Read the two markdown files in this folder.
2. Build a clear list of all blog pages and their status.
3. Identify which pages are already live and which one is still missing.
4. Use each page's metadata, article structure, FAQ, and photo suggestions as the source of truth.
5. Generate the missing content and blog image set in the same structure as the source material.
6. Focus on keyword intent and image storytelling for each blog.

This is a planning and content-generation workflow. It is not a general website refresh.

---

## Files to read

Source files:

- `DESERT-DINNER-PARTY-BLOG-FOR-DAVID.md`
- `THE-13-BLOGS-FOR-DAVID.md`

Rule: use these files as the complete content package for this job.

---

## High-level operating instructions for the agent

### Step 1: inventory the blogs

Read the 13-blog file first and generate a master list of all pages.

For each blog, capture:

- URL
- status
- main keyword
- article length
- whether the page is already live or still missing

The master file explicitly shows:

- 12 live pages
- 1 pending page: `/blog/desert-dinner-party-dubai`

### Step 2: identify the missing build

The only page that is not yet published is:

- `/blog/desert-dinner-party-dubai`

Use the standalone desert file as the exact content source for that page.

### Step 3: recreate the page structure

For each blog, the required structure is:

- keywords
- title
- meta description
- H1
- intro
- body sections
- FAQ
- photo suggestions

The agent must follow this structure exactly and not invent new sections.

### Step 4: create 2-4 images per blog block

Every blog page should include an image set of 2 to 4 visuals.

The image brief should be created as follows:

- 2 images minimum for simple pages
- 3 images standard for most blogs
- 4 images for premium or lifestyle-heavy pages
- Each image should match the article topic, Dubai context, and the photo suggestions in the source material
- Image output should be lifestyle-led, realistic, and not generic stock photography

### Step 5: write image prompts with keyword intent

Each photo prompt should include:

- subject
- setting
- mood
- light direction
- cultural fit for Dubai
- realistic human composition
- hands and posture notes when relevant
- clean hero-shot or editorial style

### Step 6: keep all output grounded in the source files

Do not add unrelated content.
Do not create new blog topics.
Do not rewrite the copy in a different tone.
Do not invent keyword strategies outside the documented lists.

---

## Blog list and keyword focus

Use the following focus list for the agent. This is the default keyword map to work from when the agent creates or verifies content.

| # | URL | Focus keyword | Supporting keyword focus |
|---|---|---|---|
| 1 | `/blog/how-to-hire-a-private-chef-dubai` | how to hire a private chef in dubai | private chef booking dubai; private chef hire dubai; private chef cost dubai |
| 2 | `/blog/private-chef-vs-restaurant-dubai` | private chef vs restaurant dubai | private chef at home dubai; restaurant vs private dining dubai; dine at home vs restaurant dubai |
| 3 | `/blog/dinner-party-menu-ideas-dubai` | dinner party menu ideas dubai | private dining menu dubai; dinner party catering dubai; event menu ideas dubai |
| 4 | `/blog/wedding-catering-cost-dubai` | wedding catering cost dubai | wedding catering dubai cost; wedding menu dubai; luxury wedding catering dubai |
| 5 | `/blog/brunch-at-home-dubai` | brunch at home dubai | home brunch dubai; brunch catering dubai; terrace brunch dubai |
| 6 | `/blog/vegan-catering-dubai-guide` | vegan catering dubai | vegan menu dubai; plant-based catering dubai; vegan event catering dubai |
| 7 | `/blog/corporate-event-catering-ideas-dubai` | corporate event catering ideas dubai | team dinner catering dubai; corporate catering dubai; office event catering dubai |
| 8 | `/blog/iftar-at-home-dubai` | iftar at home dubai | home iftar dubai; ramadan dinner at home dubai; iftar catering dubai |
| 9 | `/blog/nye-party-catering-dubai` | new years eve catering dubai | nye catering dubai; new year dinner dubai; party catering dubai |
| 10 | `/blog/private-chef-date-night-dubai` | date night ideas dubai | romantic dinner dubai; private chef date night dubai; anniversary dinner at home dubai |
| 11 | `/blog/grazing-table-vs-buffet-dubai` | grazing table vs buffet dubai | buffet vs grazing table dubai; grazing table dubai; party buffet dubai |
| 12 | `/blog/how-far-ahead-book-caterer-dubai` | how far in advance to book a caterer dubai | book caterer dubai; event booking dubai; catering lead time dubai |
| 13 | `/blog/desert-dinner-party-dubai` | desert dinner party dubai | private dinner in the desert dubai; desert bbq catering dubai; luxury desert dinner dubai |

---

## Recommended image rule for each blog

Each blog page should include a set of 2 to 4 images based on topic intensity.

### Default image count

- 2 images: simple utility or explanatory pages
- 3 images: standard editorial blog pages
- 4 images: visually rich, high-intent, lifestyle-heavy pages

### Suggested image distribution

- Image 1: hero / main lifestyle scene
- Image 2: detail or food setup scene
- Image 3: table or guest experience scene
- Image 4: close-up of the experience, service, or finishing detail

### Image generation rules

The generated images must:

- reflect Dubai's actual context and people
- match the local style mix of UAE guests
- use warm, realistic, editorial lighting
- show smart-casual dining settings rather than generic luxury stock
- avoid awkward hand poses or empty staged compositions
- favor natural hosting moments over posed smiles

### Visual-quality rules

- Prefer golden hour or blue hour for outdoor scenes
- Use realistic mixed-table settings with local demographics
- Keep light layered and natural
- Avoid midday desert glare in outdoor shots
- Keep food styling believable, not overproduced
- If people are present, focus on active, natural moments with hands occupied

---

## Image prompt template for the agent

Use this prompt format for each generated image:

```
Create a realistic Dubai food and hospitality lifestyle photo for a myCHEF blog article.

Subject: [main scene]
Setting: [location and environment]
Mood: [warm, elegant, relaxed, celebratory, premium, intimate]
Lighting: [golden hour, blue hour, warm evening light, natural daylight]
Composition: [hero shot, table scene, food styling, guest interaction, detail shot]
People: [Dubai-mixed group, smart-casual guests, local style mix, natural expressions]
Details: [hands occupied, realistic tableware, warm tones, natural styling, no awkward posing]
Output: editorial lifestyle photography, highly realistic, premium quality, suitable for a hospitality blog.
```

Use 2-4 prompt variations per page, depending on the page's intensity.

---

## Per-page image guidance

### For lifestyle and event blogs

Use 3 images:

1. wide hero scene
2. dining table or hosting setup
3. final guest experience or food detail

### For utility and practical pages

Use 2 images:

1. chef or service setup
2. event or briefing moment

### For premium outdoor pages

Use 4 images:

1. full environment
2. chef working or grill / fire scene
3. guest dining setup
4. intimate detail or finished table

---

## Dead-simple agent run instruction

Use this as the exact execution prompt:

```
Read the two markdown files in this folder: DESERT-DINNER-PARTY-BLOG-FOR-DAVID.md and THE-13-BLOGS-FOR-DAVID.md.

Then:
1. Build the full blog inventory.
2. Mark each page as live or missing.
3. Identify the missing page: /blog/desert-dinner-party-dubai.
4. Use the desert file as the exact source for that missing blog.
5. For every blog in the list, make sure the final output follows this structure: keywords, title, meta description, H1, intro, body sections, FAQ, photo suggestions.
6. For each blog page, generate 2-4 image prompts based on the article topic.
7. Use the keyword focus list provided in this file.
8. Keep everything grounded in the source files and do not invent new blog content.
9. Do not do unrelated website work.
10. Output the full blog build plan and the image prompt set for each page.
```

---

## Final execution rule

This folder is the source package. The AI agent should work from this folder only and should not expand beyond the blog content and image generation task.

This is the exact scope:

- review the two files
- inventory the pages
- identify the missing blog
- build a page-by-page keyword and image plan
- generate the content and image direction for the website-ready blog work

No extra project-wide change is required.

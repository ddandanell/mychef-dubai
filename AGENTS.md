# AGENTS.md — mychef-dubai / myCHEF.ae

> Loaded for agent work in this workspace. Edit freely; keep image rules in sync with the skill.

## Snapshot

- **Package / name:** my-app (myCHEF Dubai)
- **Domain intent:** mychef.ae
- **Stacks:** Node.js, TypeScript, React, Vite, Vercel
- **Run:** `npm run dev`
- **Build:** `npm run build`

## Mandatory skill — imagery

**Whenever** the user asks for a picture, photo, image, hero, visual, art direction, or image-generation prompt in this project, you **must** follow:

→ **`skills/mychef-experiences-imagery/SKILL.md`**

Full creative source of truth:

→ **`docs/skills/mychef-experiences-page-master-brief.md`**

### Hard triggers (non-optional)

Apply the skill if **any** of these appear in the request or task:

- image, picture, photo, photograph, visual, imagery, render
- hero image, OG image, banner, thumbnail
- generate / create / make a prompt for Grok, Midjourney, DALL·E, Flux, etc.
- myCHEF Experiences, desert dining, yacht dining, villa chef, BBQ, live fire, private chef
- blog images
- “concept visual”, “experience concept”, art direction, shot list

### What the skill enforces

1. Documentary quiet-luxury look (not generic luxury stock)
2. Global technical baseline on every prompt
3. Image balance: emotion 40% · host relief 20% · setting 15% · craft 15% · food 10%
4. High-end **all-in-one** catering: chef + service + home, not a lone plate
5. **Clients** = affluent international residents / business families in luxury villas and apartments
6. **Team** = dignified hospitality professionals (mostly regional service workforce, some senior chefs)
7. **Never** put plated food next to laptops, monitors, or office desks
8. Do **not** cast people in or out by religion
9. Worker dignity; no servant posing
10. Truth labels: AI = “Experience concept shown” / “Concept visual”
11. Continuity sheets for multi-image stories
12. Analyze the page **before** writing any prompt

Do **not** invent alternate art direction for this brand unless the user explicitly overrides the skill for a one-off experiment (still label as concept).

If image-generation tools are not available, deliver prompts and do not claim pixels were created.

## How to work in this repo

1. Prefer `read_file` / `write_file` for source; avoid shell file hacks.
2. Write complete files when editing.
3. Match existing style, layout, and naming under `src/`.
4. Stay inside the workspace; no secrets in code or commits.
5. Tools already save to disk — do not ask the user to open dirty tabs.
6. After tools, summarize what changed and how to verify.

## Efficiency

- Read only what the task needs.
- Ignore `node_modules`, `dist`, `build`, `.git`.
- Prefer project scripts (`npm run dev`, `npm run build`, etc.).

## Security

- Never commit `.env` with real values.
- Validate external input; no injection.
- Do not disable auth, TLS, or sandboxing for convenience.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run build:prerender`
- `npm run lint`
- `npm run preview`
- `npm run prerender`
- `npm run sitemap:generate`
- `npm run verify:meta`

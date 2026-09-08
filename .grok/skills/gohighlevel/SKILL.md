---
name: gohighlevel
description: >
  GoHighLevel CRM API for myCHEF.ae SEO. Use whenever the user mentions GoHighLevel,
  GHL, HighLevel, CRM, new contacts, conversations, opportunities, or the gohighlevel
  MCP / @gohighlevel. Auto-loads ~/.config/claude-seo/gohighlevel.env. Optimizes for
  new contacts created and what conversations are about. Never returns PII.
---

# GoHighLevel CRM (always-on for myCHEF.ae SEO)

The CRM is a first-class SEO source. Rankings are not the score. The score is:

1. How many **new contacts** land in GoHighLevel
2. **What the conversation is about** (allowlisted topics → contract owner URL)
3. **Won opportunities**

Never mint a URL from chat. Never return names, emails, phones or message bodies.

## Always do this first

Use the MCP server **`gohighlevel`** (tools are namespaced `gohighlevel__…`).

1. `ghl_connect` — token + Dubai location + scopes
2. If disconnected: tell the user to enable `contacts.readonly`, `opportunities.readonly`, `conversations.readonly`, `conversations/message.readonly` on the Private Integration Token. Do not invent zeros as truth.
3. `ghl_seo_signals` — topic → owner URL → snippet_test / watch / backlog
4. `ghl_harvest` — refresh the snapshot the board reads (`/seo/crm`)

If MCP is not loaded this session, run:

```bash
python3 docs/seo/keyword-map/harvest-ghl.py
python3 docs/seo/keyword-map/build-crm.py
```

## Credentials

| File | Purpose |
|------|---------|
| `~/.config/claude-seo/gohighlevel.env` (mode 600) | `GHL_API_KEY`, `GHL_LOCATION_ID` |

Never put the token in git, `.grok/config.toml`, `.mcp.json`, or chat. Rotate if it was pasted.

Dubai location: `IJI4LlVFz4lclEdwpZr7` (public JSON only shows `…pZr7`).

API: `https://services.leadconnectorhq.com` · header `Version: 2021-07-28`.

## MCP tools

| Tool | Returns |
|------|---------|
| `ghl_connect` | connected / missing scopes / no token |
| `ghl_contacts_summary` | totals, new in 30d, bucketed sources |
| `ghl_conversation_topics` | allowlisted topics + channels |
| `ghl_opportunities` | open / won / lost counts |
| `ghl_seo_signals` | owner URL + action (snippet_test / watch / backlog) |
| `ghl_harvest` | pull snapshot + rebuild `crm.json` |

## Engine

- Code: `docs/seo/keyword-map/crm_lib.py`, `build-crm.py`, `ghl-mcp.py`
- Board: `/seo/crm`
- Queue class: `crm_signal` (L4, never auto-applies, `mint_url` always false)
- Rules: `crm-is-the-conversion`, `crm-topics-map-to-owners`, `crm-never-pii`

## Security

- Public JSON is counts and allowlisted topics
- Raw contacts stay in `docs/seo/keyword-map/.live/research/ghl/` (gitignored)
- MCP `sanitize` drops emails, phones, names, message bodies

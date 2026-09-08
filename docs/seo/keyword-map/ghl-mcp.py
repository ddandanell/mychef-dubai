#!/usr/bin/env python3
"""stdio MCP server for GoHighLevel → myCHEF.ae SEO.

Reads ~/.config/claude-seo/gohighlevel.env. Never prints the token.
Never returns names, emails, phones or message bodies.

    python3 docs/seo/keyword-map/ghl-mcp.py
"""
from __future__ import annotations

import logging
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

logging.basicConfig(stream=sys.stderr, level=logging.WARNING)

from mcp.server.fastmcp import FastMCP  # noqa: E402
import ghl_mcp_lib as G  # noqa: E402

INSTRUCTIONS = (
    "GoHighLevel CRM for myCHEF.ae SEO. Connects with the Private Integration Token "
    "in ~/.config/claude-seo/gohighlevel.env. Optimize for (1) new contacts created, "
    "(2) what conversations are about, (3) won opportunities — not rankings alone. "
    "Topics map to contract owner URLs. Never mint a URL from chat. Never return "
    "names, emails, phones or message bodies. Nothing auto-applies to the live site."
)

mcp = FastMCP("gohighlevel", instructions=INSTRUCTIONS, log_level="ERROR")


@mcp.tool(name="ghl_connect", description=G.TOOLS[0]["description"])
def ghl_connect() -> dict:
    return G.connect()


@mcp.tool(name="ghl_contacts_summary", description=G.TOOLS[1]["description"])
def ghl_contacts_summary() -> dict:
    return G.contacts_summary()


@mcp.tool(name="ghl_conversation_topics", description=G.TOOLS[2]["description"])
def ghl_conversation_topics() -> dict:
    return G.conversation_topics()


@mcp.tool(name="ghl_opportunities", description=G.TOOLS[3]["description"])
def ghl_opportunities() -> dict:
    return G.opportunities()


@mcp.tool(name="ghl_seo_signals", description=G.TOOLS[4]["description"])
def ghl_seo_signals() -> dict:
    return G.seo_signals()


@mcp.tool(name="ghl_harvest", description=G.TOOLS[5]["description"])
def ghl_harvest() -> dict:
    return G.harvest()


if __name__ == "__main__":
    mcp.run(transport="stdio")

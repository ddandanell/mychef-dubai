# Contact calls to action

The public Layout includes the contact launcher on every route, including blog,
enquiry and confirmation pages. The internal `/seo` application is excluded.
The invitation appears after 4.5 seconds, once per tab session. Enquiry and
confirmation pages keep manual access without an automatic interruption.
Closing the panel suppresses further automatic prompts; the launcher reopens it.

WhatsApp and myCHEF email links retain their existing menu, quote or enquiry
details and append the current page URL. If different, the first page visited
in the tab is appended too. This also covers links in navigation, footers,
articles and calculators. Attribution excludes URL queries and fragments.
Visitors can edit these prefilled messages before sending them.

GA4 records `whatsapp_click` and `email_click` with `page_path` and
`cta_location`. The panel uses `contact_chat` as its CTA location. Message text
and email bodies are excluded from analytics. The first-party event collector
also receives the click and page. These clicks are not completed bookings or
proof that a message was sent.

To inspect page performance in GA4 Explore, use **Page path and screen class**
and **Event name** as rows, **Event count** as the value, and filter Event name
to `whatsapp_click` or `email_click`. The existing property supports this report
without registering a new custom dimension.

Validation: build the site and run `node scripts/test-contact-cta.mjs`. The test
blocks external requests and POSTs, checks the public route inventory and
attribution, and exercises the prompt, dismissal, mobile layout and click
events. Set `CHROME_BIN` if supplying a local Chromium executable.

# About page editorial rebuild

Rebuilt `/about` as one cohesive story with 2,259 words, ten sections and six exclusive photographs. The original generic About content and appended seven-section guide are replaced by the Dubai opening story, international group, team roles, complimentary coordination, food, private and company occasions, service standards, booking process and questions.

## Business facts

The business owner confirmed in this conversation on 22 September 2026 that Dubai opened in February; the wider catering group operates in Bali, Cape Town and Hawaii; the large international team brings over ten years of catering experience. No opening year, numerical staff count or new group trading name has been inferred. Experience is attributed to the wider team, not the age of the Dubai business or every individual chef.

Complimentary event coordination is described within full-service event bookings. The copy explains that food, staffing, equipment and additional event services are specified in the proposal. Existing independent culinary-partner arrangements remain accurately described.

## Images

Six original editorial images were created with the built-in image-generation tool and visually inspected. They show a team briefing, kitchen service, coordination, plating, a private gathering and a company reception. The image manifest records the complete prompts, source files, responsive versions and hashes. No invented staff names, testimonials, credentials or documentary event claims are attached to the images. Customer-facing images have descriptive alt text and no unnecessary captions.

Assets live in `public/images/about-2026/`, at 480, 800, 1200 and 1536 pixels wide. Each subject appears once on this page. The hero owns the page's social image; the previous shared private-chef image override has been removed for About.

## Validation

- Production TypeScript and Vite build.
- SEO contract, keyword ownership and frozen URL checks.
- Local server render: 2,259 words, exactly one H1, the locked primary in the introduction and one H2, title and description within limits, self-canonical and three structured-data nodes.
- Six distinct content images and 24 valid responsive assets; every section anchor and internal route checked.
- The obsolete About guide is absent. The existing private-chef guide still renders on `/private-chef-dubai`.
- Responsive CSS includes desktop, tablet and phone layouts, visible keyboard focus and reduced-motion support.

Live deployment and visual findings are recorded after publication in `live-review.json`.

## Live review

The production page at commit `57b1cb1` contains 2,243 words after browser prerender (the local server-render count separates the numbered labels), six unique content images and ten sections. All 24 image versions returned HTTP 200 with the correct content type. The desktop browser showed no horizontal overflow; section navigation, the coordinator FAQ and the enquiry destination worked. No form was submitted. The final visual correction requests larger source images for the tall crops and stacks those sections earlier on smaller screens.

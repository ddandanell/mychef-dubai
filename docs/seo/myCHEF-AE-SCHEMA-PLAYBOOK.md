# myCHEF.ae schema playbook

Best practice is **not** “add every schema type.” It is a small entity graph that tells the truth: myCHEF is a Dubai **service-area** business (chefs come to the villa), registered as Numini FZC in Sharjah, with **no dining room**.

Live logo: `https://www.mychef.ae/logo.svg`  
Registered office (already on the footer, so it is in the graph): Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE.

## What Google actually rewards now

JSON-LD. Markup that matches visible copy. The most specific type that is **true**. Stable `@id`s so Service and Person nodes point at one organisation, not 216 copies of it.

Organisation lives on `/` and `/about` only.

## The type that would be a mistake

Do **not** mark the business as `Restaurant` or `FoodEstablishment`. Use:

`Organization` + `ProfessionalService` + `FoodService`

Address in the graph = the Sharjah free-zone office. `areaServed` = Dubai plus the 15 communities as **place ids**, not LocalBusiness pins. Homepage owns the place nodes. Everyone else points at them.

## What each page carries

| Page | Schema | Why |
|---|---|---|
| Homepage | Organisation + WebSite | One entity for the brand |
| `/about` | Organisation + BreadcrumbList | Same entity, not a second company |
| Service owners | `Service` + BreadcrumbList | `provider` → `#organization` |
| Location pages | `Service` with `areaServed` Palm / Marina / … | Not 15 fake LocalBusiness addresses |
| Chef profiles | `Person` | Marco, Layla, Matteo, Ahmed only |
| Blog / guides | `Article` + real dates | Supported rich result |
| `/faq` | `FAQPage` + BreadcrumbList | The only URL that may emit FAQPage |
| Almost every indexable URL | `BreadcrumbList` matching the silo trail | Except `/` |

## Refuse

- `aggregateRating` on the organisation. Stars come from GBP.
- `FAQPage` on 40 service URLs. Google removed FAQ rich results from Search on 7 May 2026. Keep it on `/faq` only.
- `Event` on wedding/Christmas catering pages. Those are services, not dated occurrences.
- `HowTo` widget hunting. That rich result is gone.
- `Offer` with a single AED figure on a page that does not show that price.

## Ship order (done in code)

1. Homepage graph (`#organization` + `#website`).
2. Breadcrumbs everywhere except `/` (SEO assembler + silo trail).
3. `Service` on owners; location pages use `areaServed` the community.
4. `Person` on the four approved chefs. No years of experience.
5. `Article` on blogs.
6. Stop. A sanitizer in `SEO.tsx` strips Event, HowTo, Restaurant, FoodEstablishment, LocalBusiness, aggregateRating, and FAQPage off every URL except `/faq`.

---

## Copy-paste: homepage `@graph`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "FoodService"],
      "@id": "https://www.mychef.ae/#organization",
      "name": "myCHEF",
      "legalName": "Numini FZC",
      "url": "https://www.mychef.ae/",
      "logo": "https://www.mychef.ae/logo.svg",
      "image": "https://www.mychef.ae/images/home-hero.webp",
      "description": "Private chef and catering in Dubai. myCHEF designs the experience and matches clients with vetted, licensed independent chefs and catering partners, who cook at the client’s villa, yacht or home. There is no dining room.",
      "telephone": "+971 55 174 4849",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Business Centre, Sharjah Publishing City Free Zone",
        "addressLocality": "Sharjah",
        "addressRegion": "Sharjah",
        "addressCountry": "AE"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai",
        "@id": "https://www.wikidata.org/wiki/Q612"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mychef.ae/#website",
      "url": "https://www.mychef.ae/",
      "name": "myCHEF",
      "inLanguage": "en-AE",
      "publisher": { "@id": "https://www.mychef.ae/#organization" }
    }
  ]
}
```

## Copy-paste: private-chef `Service`

```json
{
  "@type": "Service",
  "name": "Private Chef Dubai",
  "serviceType": "Private Chef Service",
  "url": "https://www.mychef.ae/private-chef-dubai",
  "provider": { "@id": "https://www.mychef.ae/#organization" },
  "areaServed": { "@type": "City", "name": "Dubai" }
}
```

## Copy-paste: location `Service` (Palm)

```json
{
  "@type": "Service",
  "name": "Private chef and catering in Palm Jumeirah",
  "url": "https://www.mychef.ae/locations/palm-jumeirah",
  "provider": { "@id": "https://www.mychef.ae/#organization" },
  "areaServed": { "@type": "Place", "name": "Palm Jumeirah" }
}
```

Ready-to-paste graphs:

- `schema/homepage-service-area.jsonld` — org + Dubai + 15 communities
- `schema/service-page-areaServed.jsonld` — `/private-chef-dubai` (Dubai + the three silo areas)
- `schema/location-page-areaServed.jsonld` — Palm, one area, no street

Code: `src/lib/serviceAreas.ts`, `src/lib/organizationSchema.ts`, `src/lib/jsonld.ts`, `src/components/SEO.tsx`.

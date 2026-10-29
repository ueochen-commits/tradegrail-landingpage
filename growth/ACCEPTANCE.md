# SEO/GEO foundation acceptance — 2026-10-29

## Scope and constraints

Public marketing site only. Authentication remains in the dashboard app. The universal SPA rewrite is replaced with static clean-URL routing. Existing login/signup/dashboard destinations remain unchanged; their redirects now work without JavaScript. Checkout stays a non-indexed beta informational page. There are no dashboard, database, entitlement, payment-processing or private-user-content changes.

## Checks

- TypeScript check passes after adding pinned React type definitions; fixed the newly exposed existing chart easing type and widened the theme type to match existing light/dark comparisons. The landing provider still serves its original light theme.
- Production client build, server render bundle and prerender generation pass. 16 public HTML pages plus a noindex 404 and checkout page are generated. Original section styling and hover interactions remain; content entrance hiding is removed and mock illustration data is deterministic for hydration. Existing bundle-size warning remains; no field Core Web Vitals result is claimed.
- Eight executable tests pass: initial content/metadata, locale reciprocity, schema/factual constraints, internal links/assets, sitemap/noindex/routing behavior, guide usefulness/scope, minimal signup event payload, and non-signup/unknown-path exclusion.
- Local production-build HTTP checker passes 21 checks. Full body copy is present before JavaScript; robots.txt is text, sitemap.xml is XML, product overview files are text, and missing routes return 404.
- Browser acceptance: real hydrated Chinese and English guide navigation, metadata update on navigation, one structured-data script, source-linked content, no console hydration errors in checked pages. Tested 390px mobile layout/navigation with correct signup target and no document horizontal overflow; checked desktop 1280px geometry, including an in-bounds header signup button. Restored viewport overrides.
- Protected Vercel preview build completed: https://tradegrail-landingpage-f5mejc0cs-chenzhixuns-projects.vercel.app. Authenticated CLI checks confirmed /guides 200 with substantive HTML and unknown path 404/noindex. CLI used its built-in preview-protection access mechanism; protection was not disabled and no bypass secret was printed. Final copy/layout refinements were then tested in the local production build.
- Local proof screenshot in parent workspace: output/geo-guides-desktop-2026-10-29.png.

## Measurement and release limitations

The user replied that previous Search Console/analytics setup is uncertain and requested continuing without it. No duplicate third-party analytics or paid monitoring service was installed. The signup-intent hook is prepared instrumentation, not live conversion reporting. No actual signup, completed activation, AI citation share, organic traffic baseline, or Google indexing outcome is claimed. Native search engines still need to recrawl/index the new URLs. Private notes and trade data were not accessed or published.

Full plan, source policy, editorial backlog, access-dependent work and weekly/monthly cadence are in growth/README.md. The versioned prompt set is in growth/prompt-portfolio.json. Production deployment identity and public post-release HTTP checks are recorded in the parent workspace STATUS.md.

## 2026-10-29 billing draft (unpublished)

22 public static pages now include draft bilingual terms, privacy and refunds. The operator's personal identity/address is absent. Pricing loads exactly one server-selected market; monthly/annual amounts and IP country are independent of UI language. Landing lint, build and 9 tests pass. Local native-browser fixtures checked CN with English UI (CNY 29/69 and 290/690) and US with Chinese UI (USD 9/19 and 90/190). This does not replace real production country/header acceptance. New legal/pricing pages are neither committed to main nor published; owner-paused policy publication and merchant review stay paused. Pricing strategy, known limitations and release prerequisites: PRICING-2026-10-29.md. Existing production still has the prior 16-page SEO release.

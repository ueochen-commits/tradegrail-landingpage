# TradeGrail SEO / GEO growth plan

Plan version: 1 · 2026-10-29 · Owner: TradeGrail product team

## Decision and objective

Invest in a small, credible public knowledge base attached to a working product funnel. Do not start with daily automated blog output. The conversion objective is a qualified visitor who registers, creates a personal account and records a first real trade, then returns to review. A citation, impression, visit or signup click alone is not a new active user.

Primary test segment: Chinese-speaking active traders, initially including the GC/NQ/ES workflows already reflected in customer requests. English equivalents support international discovery. This is a starting hypothesis, not a measured market-size or search-volume claim.

## What the audit actually found

Public HTTP baseline saved outside the repo: `output/geo-baseline-2026-10-29.json` in the parent workspace.

| Priority | Evidence | Consequence | Work |
| --- | --- | --- | --- |
| P0 | Home/pricing initial HTML was an 849-byte shell with no H1 or body copy | Non-rendering fetchers cannot extract the product | Generate full HTML at build time and hydrate the same React pages |
| P0 | robots.txt and sitemap.xml returned the same HTML as the homepage | Discovery URLs did not contain the resources requested | Generate real text/XML files; remove catch-all rewriting of every path |
| P0 | A nonexistent URL returned 200 | Soft-404 behavior | Real 404 document; filesystem routing instead of universal SPA fallback |
| P1 | No unique canonical/description/locale tags in initial responses | Weak page and locale identity | Per-page metadata, reciprocal language URLs and sitemap alternatives |
| P1 | Broad prototype copy, a login-only secondary action, and no actual guides | Little help deciding whether/how to try the product | Specific first-trade value proposition, public guides and contextual signup links |
| P1 | Unverified counts (12,847 trades / 847 traders / 23 countries) and broad broker auto-sync claim in source | Misaligned expectations and unsupported authority signals | Remove these claims; publish verified current scope and limits |
| P1 | Analytics/GSC access unknown | No defensible acquisition or conversion baseline | Prepare a minimal signup-click event, request access, distinguish missing data from zero |

Raw HTML checks alone do not measure rendered schema. Here the source audit also confirmed no existing schema implementation. New schema is validated in build tests and rendered-browser inspection.

## First release scope

16 canonical public pages: Chinese and English home, pricing, guide hub, futures journal, about, and three guides in each language. This is 3 substantive articles translated into 2 languages, not 16 separate blog posts. Reuse the same facts in visible HTML, metadata and a supplementary llms.txt; no separate hidden content for bots.

- Trading journal template: a usable field table, copyable note template, illustrative example and a balanced spreadsheet/notes/software comparison.
- First-trade setup: email signup, own manual account, unsupported broker fallback, explicit record destination, fees, screenshots and troubleshooting.
- Futures P&L/commissions: gross vs net, both sides of fees, standard GC/NQ/ES multipliers, an explicitly fictional fee example, source links and limits.

Every guide links to related material and a real signup destination. The futures product page addresses tool-selection intent, while the P&L guide addresses bookkeeping questions. About documents verified scope and team authorship without invented credentials. No paid-plan price, customer count, testimonial, compliance certification or return guarantee is fabricated.

## Six-week sequence

| When | Work | Acceptance and decision |
| --- | --- | --- |
| Week 1 | Publish technical foundation and the initial guides; connect Search Console/Bing and a consent-appropriate analytics collector when access is available | HTTP 200/404, initial body text, metadata, sitemap, mobile navigation and signup routing verified. Submission is not indexing. |
| Week 2 | Reconcile actual impressions/queries and visitor behavior; fix snippet or setup friction first | Establish a baseline and identify pages with qualified intent; do not pick winners from a few visits |
| Weeks 3–4 | At most 1 useful article per week, chosen from real query/support evidence; improve existing guides first | Each article has a tested workflow or worked example, current scope, sources, internal links and one next step |
| Weeks 3–6 | Prepare a short product demonstration and channel-specific explanations; request real feedback and genuine reviews with permission | Founder publishes in relevant communities under their rules. No bulk outreach, fake identities, fake reviews or bought links |
| Weeks 5–6 | Compare matched periods and intent cohorts; update the weakest conversion step | Assess registration and first-record activation as well as traffic. Expand only the topics producing qualified interest |

Six weeks is an operating cycle, not a ranking or revenue promise. Re-crawling and indexing may take longer. Keep measuring over comparable 28-day periods, documenting releases and changes to the prompt set.

## Editorial backlog (ordered; publish based on evidence)

1. CSV import with net/gross P&L mapping: own fictional sample file, reconciliation checklist and failure recovery.
2. Screenshot-led trade review: entry/exit context and one actionable execution note; include the actual free-tier limit.
3. Trading journal versus Excel: disclose who should stay with a spreadsheet, what changes with dedicated software and what still needs checking.
4. Reading win rate, profit factor and average net P&L together: formulas, small-sample limits and a fictional record set, not claims about returns.
5. Separating demo and personal accounts: an actual product walkthrough, not a generic account-management article.
6. Weekly review workflow: show how one logged observation becomes a check for the next review.

Do not create daily market predictions or near-identical pages for every ticker/city/year. Do not publish competitor rankings until official current capabilities have been checked. Do not use private user messages, identifiable trading records or screenshots as marketing proof without authorization.

## Measurement and instrumentation

| Stage | Metric and denominator | Current availability |
| --- | --- | --- |
| Discover | Search impressions, clicks, query/landing-page mix; organic/AI referrals | GSC/analytics connection unknown; not reported as zero |
| Evaluate | Guide → signup click rate = signup CTA clicks / relevant guide visits | Event hook prepared, no external collector configured |
| Register | Confirmed signups / eligible acquisition sessions | Requires a verified identity-safe dashboard/analytics integration; not inferred from clicks |
| Activate | Users saving a first non-demo trade / confirmed new signups | Dashboard event/aggregate needs a separate implementation and validation |
| Retain | Activated users returning to review in a defined 7-day cohort | Needs sufficient observation time and an agreed event definition |
| Revenue | Real paid customers / relevant eligible cohort | Paid availability must first be verified; no free-to-paid claim invented |

`tradegrail:signup-intent` emits `signup_cta_click` with public page path, locale and generic CTA placement. If a consented `dataLayer` already exists, it receives the same event. This release installs no third-party analytics, sends no trade/account/email fields and does not pretend that event collection is active. A real collector, consent handling and cross-domain attribution must be configured before evaluating rates. Do not use internal links' UTM values to overwrite the original acquisition source.

## AI discovery monitoring

See `prompt-portfolio.json` for the versioned 12-prompt starting set: tool choice, workflows, limits and brand accuracy, split by language. Web search is a source-discovery sample, not a ChatGPT/Perplexity citation test. Actual assistant answer monitoring is not yet configured.

Monthly, when suitable tools/accounts are available: run each prompt 3 times per chosen engine, hold language/market/account conditions constant and record date, prompt version, run count, retrieved sources, citations, brand mention, shortlist recommendation and any wrong product fact separately. Report a rate with its sample size, not a single screenshot or an unsupported visibility score. Never turn a vendor's industry-wide GEO percentage into a TradeGrail growth forecast.

## Maintenance cadence

- Weekly: public HTTP/HTML health check, changes in product facts, broken/internal links, guide freshness, and one evidence-based content opportunity. Quiet when nothing actionable changes.
- Monthly: query/funnel cohort review and a small consistent AI-answer sample if access exists.
- Publish: target one substantial piece weekly once evidence supports it. Drafts need factual and product review; automation does not mass-publish or send messages.
- Urgent: flag broken signup links, missing initial content, accidental noindex, invalid sitemap or misleading product claims promptly.

No daily article automation is required. A weekly health/research follow-up is appropriate. No paid SEO tools, paid links or ad spend are authorized or necessary for the first release.

## Access needed to finish measurement

Google Search Console property access/verification and sitemap submission; optionally Bing Webmaster Tools. Verify whether a real analytics property already exists before installing another. Ownership tokens or DNS changes must use the actual account-provided values, never guessed values. These are access-dependent follow-ups, not completed actions.

## Commands and verification

- `npm run lint`
- `npm run build`
- `npm run test:seo`
- `node scripts/check-live-seo.mjs` (public domain checks; no private data)
- `node scripts/serve-static.mjs` (local production-build review at port 3037)

Build checks cover full initial HTML, one H1, unique titles, reciprocal locales, schema validity, local links/assets, noindex/404 behavior, discovery files, useful guide content and absence of unverified counts. Browser review covers hydrated navigation, locale switching, desktop/mobile layout and signup destinations. HTTP success is not proof of search indexing, Core Web Vitals or AI recommendation.

## Source policy and references

Primary sources override skill/vendor advice. llms.txt is an optional convenience file, not an indexing/citation requirement or ranking guarantee. Structured data describes visible facts; no fabricated reviews or ratings.

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google scaled-content policy: https://developers.google.com/search/docs/essentials/spam-policies#scaled-content
- OpenAI crawler purposes: https://developers.openai.com/api/docs/bots
- CME contract sources are linked directly in the futures guide.
- Installed, reviewed skills: `coreyhaines31/marketingskills`, `skills/ai-seo` and `skills/seo-audit`, revision `0cd9b3a0ef4c411a1d690419ce843f2a1da32cce`. No skill statistics or recommendation guarantees are adopted as client forecasts.

# TradeGrail Landing Page Agent Instructions

This repository is part of the TradeGrail project. Before making changes here, read the shared Project OS:

- `/Users/zhixunchen/Documents/TradeGrail/AGENTS.md`
- `/Users/zhixunchen/Documents/TradeGrail/PROJECT_CONTEXT.md`
- `/Users/zhixunchen/Documents/TradeGrail/STATUS.md`
- Relevant constraints in `/Users/zhixunchen/Documents/TradeGrail/constraints/`

## Repository Responsibility

This repo owns the public marketing site at `https://www.tradegrail.net`.

It should focus on:

- Product positioning
- Marketing pages
- Pricing and CTA entry points
- Product screenshots/previews
- Routing users to the dashboard app

It should not own production dashboard workflows, production auth state, payment entitlement logic, or user trading data.

## Current Direction

Authentication is centralized in the dashboard app at `https://dashboard.tradegrail.net`. Landing login/signup routes should route users to dashboard auth.

Before changing auth, pricing, checkout, or production routing, update the shared docs in `/Users/zhixunchen/Documents/TradeGrail`.


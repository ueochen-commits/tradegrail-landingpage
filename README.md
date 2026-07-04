# TradeGrail Landing Page

This repository contains the public marketing site for TradeGrail, a trading journal and performance review platform for active traders. The landing page presents the product, pricing, authentication entry points, and selected in-app previews that route users toward the main dashboard experience.

Production site: https://www.tradegrail.net

## Product Role

The landing page is the first touchpoint for new users. It is responsible for:

- Explaining TradeGrail's trading journal and analytics workflow
- Presenting product features, dashboards, reports, and playbook previews
- Supporting pricing, beta-safe checkout messaging, login, and signup entry routes
- Connecting users to the main TradeGrail dashboard experience

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Vercel
- Motion
- Recharts and D3 for visual previews

## Project Structure

```text
src/components/      Marketing sections, navigation, mockups, and shared UI
src/context/         Language and theme providers
src/pages/           Landing, pricing, auth redirect, and beta checkout messaging routes
vite.config.ts       Vite, React, and Tailwind configuration
vercel.json          Vercel routing configuration
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Environment Variables

The landing page does not require production secrets. Authentication, payment, and user data live in the dashboard app.

## Deployment

The site is deployed on Vercel as the `tradegrail-landingpage` project.

Useful commands:

```bash
vercel pull --environment=development
vercel deploy
vercel deploy --prod
```

Before production deployment, verify that login/signup CTAs point to the dashboard app.

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build production assets
npm run preview  # Preview the production build locally
npm run lint     # Type-check the project
npm run clean    # Remove build output
```

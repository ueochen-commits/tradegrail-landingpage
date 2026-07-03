# TradeGrail Landing Page

This repository contains the public marketing site for TradeGrail, a trading journal and performance review platform for active traders. The landing page presents the product, pricing, authentication entry points, and selected in-app previews that route users toward the main dashboard experience.

Production site: https://www.tradegrail.net

## Product Role

The landing page is the first touchpoint for new users. It is responsible for:

- Explaining TradeGrail's trading journal and analytics workflow
- Presenting product features, dashboards, reports, and playbook previews
- Supporting pricing, checkout, login, and signup routes
- Connecting users to the main TradeGrail dashboard experience
- Sharing the same Supabase project configuration used by the broader product

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase
- Vercel
- Motion
- Recharts and D3 for visual previews
- Express development server

## Project Structure

```text
src/components/      Marketing sections, navigation, mockups, and shared UI
src/context/         Auth, language, and theme providers
src/lib/             Supabase client and utility helpers
src/pages/           Landing, pricing, auth, checkout, and dashboard routes
src/services/        API helpers
server.ts            Local Express server and development middleware
vite.config.ts       Vite, React, and Tailwind configuration
vercel.json          Vercel routing configuration
```

## Local Development

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run dev
```

## Environment Variables

Required variables are documented in `.env.example`.

Common variables include:

- `APP_URL`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `GEMINI_API_KEY`

Never commit real API keys or Supabase credentials.

## Deployment

The site is deployed on Vercel as the `tradegrail-landingpage` project.

Useful commands:

```bash
vercel pull --environment=development
vercel deploy
vercel deploy --prod
```

Before production deployment, verify that the Supabase environment variables point to the correct TradeGrail project.

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build production assets
npm run preview  # Preview the production build locally
npm run lint     # Type-check the project
npm run clean    # Remove build output
```

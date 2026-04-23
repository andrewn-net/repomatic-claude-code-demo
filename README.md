# Summit Supply

A small fictional outdoor-gear e-commerce site, used as a starting point for demoing AI coding tools (Claude Code, Codex, etc.) through Slack.

This repo was created by [`repomatic`](https://github.com/andrewn-net/repomatic). It ships a working Next.js storefront with a catalog, cart, and checkout — everything a customer would expect from an online shop.

## Running locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## What's in the box

- **Catalog** — 8 products across shelter, apparel, footwear, and accessories
- **Product detail pages** — photos, descriptions, stock levels, add-to-cart
- **Cart** — persistent via localStorage; adjust quantities, remove items
- **Checkout** — shipping + payment form, order confirmation with reference number
- **Payment processing** — in `lib/payment.ts`, talks to our payment gateway to authorize the transaction

## How the app is built

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS for styling
- React Context for cart state
- In-memory product catalog (no database needed)
- Placeholder product imagery from picsum.photos

## Demo scenarios

This repo is designed to support two kinds of AI coding tool demos — fixing a bug and adding a feature. The specific suggested prompts live in `repomatic`'s manifest (run `repomatic setup claude-code` to see them). You'll want to keep this README open in front of the AI tool but not share the prompts directly in the demo — they belong to the demoer, not the codebase.

## Reset between demos

When you're ready to demo again, run `repomatic reset claude-code` — it rewinds this repo to its starting state and closes any open PRs.

# E-Marts

A small **Next.js** storefront UI for browsing men’s clothing: filters, sorting, product grid, and a layout inspired by [E-Marts](https://emarts.ng). Product data is static (JSON / TypeScript modules).

## Stack

- **Next.js** (App Router) · **React** · **TypeScript**
- **Tailwind CSS v4** · **shadcn/ui** (Radix) · **react-icons**

## Scripts


## Getting started

```bash
cd e-marts
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout (high level)

- `app/` — routes, layout, global styles
- `components/` — UI (header, footer, sidebar, product cards, sheets, etc.)
- `data/` — product data
- `lib/` — helpers (e.g. price formatting)
- `public/` — static assets (logo, payment images)

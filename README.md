# TIGERTRAN.studio — Portfolio

Professional hair stylist portfolio for **Tiger Tran** / **Trang Tran Hair**, Sóc Trăng.

## Features

- Editorial parallax scrolling (GSAP + Lenis)
- Bilingual EN / VI
- Salon virtual tour section
- Responsive (mobile-first fallback for horizontal scroll sections)
- Vercel-ready SPA

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Customize Content

All text, services, and image URLs live in:

```
src/data/content.ts
```

## Replace Images

| Path | Purpose |
|---|---|
| `public/images/hero/hero-portrait.png` | Hero & About portrait |
| `public/images/salon-tour/` | Studio, salon, team tour |
| `public/images/gallery/` | Hair portfolio lookbook |

Then update image paths in `src/data/content.ts`.

## Deploy to Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Deploy — `vercel.json` is included

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- GSAP ScrollTrigger
- Framer Motion
- Lenis smooth scroll

See [PLAN.md](./PLAN.md) for full architecture details.

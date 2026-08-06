# PLAN — TIGERTRAN.studio Portfolio

## Architecture v2 — Dark Editorial + Cinematic Scroll

> **Status:** Awaiting approval before implementation.  
> **Last updated:** UI/UX upgrade spec — Dark Theme, Lenis+GSAP parallax, unified typography.

---

## 1. Confirmed Requirements

### 1.1 Parallax & Smooth Scrolling (Priority #1)

| Rule | Implementation |
|---|---|
| No CSS-only parallax | All depth via GSAP `transform` scrubbed to scroll |
| Smooth scroll engine | **Lenis** (`lenis` npm — successor to studio-freight/lenis) |
| Parallax engine | **GSAP 3 + ScrollTrigger** — multi-layer, different `yPercent` / `speed` per layer |
| Motion philosophy | Slow, cinematic, work-centered — never flashy; hair/editorial imagery stays hero |
| Reduced motion | `prefers-reduced-motion: reduce` → disable Lenis pin/scrub; static layout |

**Lenis ↔ GSAP bridge (target pattern):**

```typescript
// useLenis.ts — production pattern
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) lenis.scrollTo(value, { immediate: true })
    return lenis.scroll
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  },
})
```

**Per-section parallax layers:**

| Section | Layers | Speed ratio (example) |
|---|---|---|
| Hero | Background image · overlay gradient · title block | 0.3 · 0.15 · 0.5 |
| About | Portrait · text column | 0.12 · 0.05 |
| Salon Tour | Pinned track · each panel image (`data-speed`) | pin + 0.1–0.25 per panel |
| Lookbook | Pinned track · alternating vertical offset | pin + stagger depth |
| Services | Text rows stagger only | no image parallax |
| Contact | Static · subtle fade-in | minimal |

---

### 1.2 Dark Theme (Mandatory)

**Remove all light/white backgrounds.** Single dark editorial canvas.

| Token | Value | Usage |
|---|---|---|
| `bg-base` | `#0a0a0a` / `zinc-950` | Page background |
| `bg-elevated` | `#141414` / `zinc-900` | Cards, nav when scrolled |
| `bg-muted` | `#1a1a1a` / `zinc-900/80` | Section alternates |
| `text-primary` | `zinc-200` / `#e4e4e7` | Body copy |
| `text-secondary` | `zinc-400` / `#a1a1aa` | Captions, labels |
| `text-muted` | `zinc-500` | Meta, section numbers |
| `accent` | `#b8956b` | CTA hover, quote border only |
| `glow` | `radial-gradient` warm 5–8% opacity | Behind hero/tour images only |

**Rules:**
- No pure white `#fff` for backgrounds
- Gradients = subtle glow **behind** images, not full-section washes
- Selection: `bg-zinc-200 text-zinc-950`
- Nav: transparent → `bg-zinc-950/90 backdrop-blur-md border-zinc-800`

---

### 1.3 Typography (Unified System)

| Role | Font | Tailwind token | Weights |
|---|---|---|---|
| **Display / Headings** | **Playfair Display** | `font-display` | 400, 500, 600, italic |
| **Body / UI** | **Inter** | `font-body` | 300, 400, 500 |

> Alternative approved pair: Cinzel (display) + Montserrat (body) — default implementation uses Playfair + Inter.

**Tailwind v4 config** (in `src/index.css` `@theme`, not separate `tailwind.config.js`):

```css
@theme {
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  /* dark tokens — see 1.2 */
}
```

**Google Fonts** (`index.html`):

```
Playfair Display: 400, 500, 600, italic
Inter: 300, 400, 500
```

**Scale:**

| Element | Classes |
|---|---|
| Hero name | `font-display text-6xl–8xl tracking-wide` |
| Section heading | `font-display text-4xl–6xl` |
| Section label | `font-body text-xs uppercase tracking-[0.3em] text-zinc-500` |
| Body | `font-body text-base leading-relaxed text-zinc-300` |
| Service titles | `font-display text-3xl–5xl` |

---

## 2. Page Flow (unchanged)

```
Hero → About (01) → Salon Tour (02) → Lookbook (03) → Services (04) → Contact (05)
```

Nav anchors: **About · Tour · Work · Services · Book**

---

## 3. Image Preparation Guide

| Section | Aspect ratio | Min width | Content direction | Count |
|---|---|---|---|---|
| **Hero** | 16:9 or 3:2 landscape | 2400px | Editorial portrait, subject left, negative space right for type overlay | 1 |
| **The Artist / Story** | 3:4 portrait | 1600px | Close portrait or detail shot; consistent with hero mood | 1–2 |
| **Salon Tour** | 16:9 landscape | 1920px | Studio → Salon floor → Team → Details (products/decor) | 4–8 |
| **Lookbook** | 3:4 or 2:3 portrait | 1200px | Hair work only — color, cut, styling; no busy backgrounds | 8–12 |
| **Services** | — | — | Text-only section; optional 1 ambient texture (very dark) | 0 |

**File paths:**

```
public/images/hero/hero-portrait.png
public/images/about/story-01.jpg
public/images/salon-tour/studio-01.jpg | salon-01.jpg | team-01.jpg | details-01.jpg
public/images/gallery/01.jpg … 12.jpg
```

**Format:** WebP preferred, JPG fallback. Compress for web (≤ 300KB hero, ≤ 200KB gallery).

---

## 4. Files to Modify (Implementation Phase)

| File | Change |
|---|---|
| `src/index.css` | Dark tokens, Playfair+Inter, glow utilities |
| `index.html` | Google Fonts swap |
| `src/hooks/useLenis.ts` | Lenis ↔ ScrollTrigger scrollerProxy |
| `src/lib/gsap.ts` | Central ScrollTrigger defaults |
| `src/components/layout/*` | Dark nav, footer, SectionWrapper |
| `src/components/sections/*` | Multi-layer parallax, dark surfaces |
| `src/components/ui/*` | Dark form inputs, TourProgress styling |
| `src/data/content.ts` | No content change — paths only if new images |

---

## 5. npm Packages

### Already installed (no new install required)

| Package | Version | Role |
|---|---|---|
| `lenis` | ^1.3.26 | Smooth scroll (studio-freight lineage) |
| `gsap` | ^3.15.0 | ScrollTrigger parallax engine |
| `@gsap/react` | ^2.1.2 | React lifecycle-safe GSAP hooks |
| `framer-motion` | ^13.0.0 | Subtle scroll reveals only (not parallax) |
| `tailwindcss` | ^4.3.3 | Dark token system via `@theme` |
| `@tailwindcss/vite` | ^4.3.3 | Vite integration |
| `lucide-react` | ^1.29.0 | Icons |
| `react` / `react-dom` | ^19.2.8 | UI framework |

### Optional (not required for v2)

| Package | When to add |
|---|---|
| `@studio-freight/react-lenis` | Only if prefer `<ReactLenis>` wrapper over custom hook — **not recommended**; direct `lenis` is lighter |
| `split-type` | Only if word-level text reveal needed — current stagger is sufficient |

### Packages to install: **NONE**

All core dependencies for v2 are already in `package.json`. Implementation is a **refactor** (theme + Lenis bridge + GSAP depth), not a new install.

---

## 6. Implementation Phases (after your approval)

| Phase | Scope | Est. |
|---|---|---|
| **A** | Dark tokens + typography in `index.css` + fonts in `index.html` | 1 pass |
| **B** | Lenis scrollerProxy + ScrollTrigger defaults | 1 file |
| **C** | Layout components dark migration (Navbar, Footer, SectionWrapper) | 3 files |
| **D** | Section parallax depth upgrade (Hero → Lookbook) | 6 files |
| **E** | QA: reduced-motion, mobile (no pin), build + visual pass | verify |

---

## 7. Current vs Target

| Aspect | Current (v1) | Target (v2) |
|---|---|---|
| Background | Light `#FAFAFA` | Dark `#0a0a0a` |
| Display font | Cormorant Garamond | Playfair Display |
| Body font | DM Sans | Inter |
| Lenis | Basic RAF loop | scrollerProxy + ticker sync |
| Parallax | Partial GSAP | Multi-layer speed per section |
| Motion tone | Some bounce | Cinematic, restrained |

---

## 8. Implementation Status (v2 complete)

- [x] Dark theme migration (`#0a0a0a` canvas, zinc text scale)
- [x] Typography swap (Playfair Display + Inter)
- [x] Lenis ↔ GSAP scrollerProxy + ticker sync
- [x] Multi-layer parallax (Hero glow/image/content, Lookbook per-image depth)
- [x] Subtle glow utilities behind images
- [x] Reduced-motion fallbacks
- [ ] Replace hero with your editorial portrait (optional)
- [ ] Replace salon-tour & lookbook with real photos

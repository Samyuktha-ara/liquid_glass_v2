# NextStep4U - Premium LMS Landing Page

A visually breathtaking, premium, static LMS landing website built with a liquid-glass design system. Designed to feel like a next-generation AI-powered education platform.

## Design Philosophy

- **Liquid Glass UI**: Real glassmorphism with backdrop-blur, translucent layers, and depth stacking
- **Premium Aesthetic**: Apple-style minimalism meets warm, aspirational yellow/gold color system
- **Motion Excellence**: Framer Motion animations tuned for 60fps smoothness with meaningful easing
- **No Blue Rule**: Entire color palette revolves around yellow, amber, gold, and neutral tones

## Tech Stack

| Technology | Purpose |
|---|---|
| React (Vite) | UI framework with fast HMR |
| TailwindCSS v4 | Utility-first CSS with @theme config |
| Framer Motion | Physics-based animations and gestures |
| Lucide React | Premium icon system |

## Installation

```bash
cd nextstep4u
npm install
npm run dev
```

## Development

```bash
npm run dev
npm run lint
```

## Build

```bash
npm run build
npm run preview
```

## Static Export

The `npm run build` command generates a fully static `dist/` folder ready for deployment.

## Folder Structure

```
/src
  /components        Reusable UI components
    Navbar.jsx       Sticky glass navigation with animated indicator
    GlassCard.jsx    Base glassmorphism card with hover effects
    Button.jsx       Solid, glass, and outline button variants
    SectionWrapper.jsx  Section container with scroll-reveal animation
  /sections          Page sections
    Hero.jsx         Hero with parallax orbs and stagger animations
    Features.jsx     4-card feature grid with glass cards
    CoursesPreview.jsx  Course cards with animated progress bars
    WhyChooseUs.jsx  Split layout with animated check items
    Testimonials.jsx Sliding testimonial carousel
    CTA.jsx          Glowing call-to-action with glass container
    Footer.jsx       Minimal footer with gradient divider
  /assets            Static assets
  App.jsx            Root layout component
  main.jsx           React entry point
  index.css          Global styles, Tailwind config, glass utilities
```

## Deployment

### Vercel
```bash
npm run build
# Deploy the dist/ folder or connect repo for auto-deploy
```

### Netlify
```bash
npm run build
# Build command: npm run build
# Publish directory: dist
```

## Animation Strategy

All animations use Framer Motion with carefully tuned parameters:

- **Easing**: Custom cubic-bezier `[0.22, 1, 0.36, 1]` for smooth deceleration
- **Springs**: `stiffness: 300-400, damping: 20-30` for natural feel
- **Scroll Reveal**: `whileInView` with `once: true` for single trigger
- **Stagger**: 100-150ms delays between sibling elements
- **Performance**: GPU-accelerated transforms only

## Performance Strategy

- Vite tree-shaking eliminates unused code
- Tailwind CSS purges unused styles in production
- Intersection-based animations reduce initial paint cost
- No external API calls or data fetching
- Optimized font loading with `preconnect` and `display=swap`

## Future Scaling Notes

- Add authentication via Supabase or Firebase
- Integrate payment gateway (Stripe)
- Convert to Next.js for SSR/ISR if SEO becomes critical
- Add CMS integration for course management
- Implement real-time features via WebSocket

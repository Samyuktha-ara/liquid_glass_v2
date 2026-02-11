# AI Execution Rules

These rules govern all AI-assisted development on the NextStep4U project.

## Design Rules

1. **Always follow liquid glass design** - Every card, container, and interactive element must use glassmorphism (backdrop-blur, translucent backgrounds, subtle borders)
2. **Never use emojis** - Use Lucide React icons exclusively for all iconography
3. **Only use Lucide icons** - No FontAwesome, no Heroicons, no inline SVGs
4. **Maintain color harmony** - All colors must relate to the yellow/amber/gold palette
5. **Never introduce blue** - No blue tones in any context (backgrounds, text, borders, shadows)

## Architecture Rules

6. **Use reusable components** - Extract repeated patterns into shared components in `/components`
7. **Follow clean architecture** - Separate concerns between components, sections, and utilities
8. **Keep animations smooth** - Target 60fps, use GPU-accelerated properties (transform, opacity)
9. **Avoid inline styling** - Use Tailwind classes and CSS utilities defined in `index.css`
10. **Maintain accessibility** - Proper contrast ratios, ARIA labels, semantic HTML

## Performance Rules

11. **Optimize performance** - Minimize re-renders, use `once: true` on scroll animations
12. **Do not add backend** - This is a static-only project, no API calls or server dependencies
13. **Maintain static constraint** - All data must be hardcoded, no dynamic data fetching

## Code Quality Rules

14. **Follow naming consistency** - PascalCase for components, camelCase for functions/variables
15. **No placeholder content** - All text, data, and UI elements must be complete and polished
16. **Component composition** - Prefer composition over configuration, keep props interfaces simple
17. **Tailwind-first styling** - Use Tailwind utilities, custom CSS only for complex effects
18. **Framer Motion for all motion** - No CSS animations except for simple utility animations (pulse, spin)

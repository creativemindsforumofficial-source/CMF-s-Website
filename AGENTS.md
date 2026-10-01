# Creative Minds' Forum (CMF) Development Guidelines

## Architecture: Multi-Page Platform (NOT a Single Page App)
1. **Multi-Page Structure**:
   - Every feature, initiative, or section addition MUST be architected as a separate, distinct page under `src/pages/`.
   - Never collapse sections into single-page anchor jumps on Home.
   - Register all pages in `src/App.tsx`.
   - Maintain unique `<Helmet>` SEO metadata per page.
   - Use `ScrollToTop` on all route transitions.
   - Keep `Navbar.tsx` and `Footer.tsx` cleanly linked to all pages.

## Responsive Design Policy: Mandatory Mobile & Tablet Optimization
1. **All Updates Must Be Mobile & Tablet Optimized**:
   - Test and verify every new page/component on mobile (360px–480px) and tablet (768px–1024px).
   - Ensure touch-friendly tap targets (>= 44px).
   - Never allow unintended horizontal overflow.
   - Ensure carousels on mobile support touch scrolling/swiping.

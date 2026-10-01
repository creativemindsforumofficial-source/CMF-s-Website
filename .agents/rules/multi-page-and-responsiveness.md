# CMF Architecture & Engineering Standards

## 1. Multi-Page Architecture (MPA)
- **Never treat this website as a Single Page Application / Single Page Website**:
  - Do NOT consolidate multi-page features into anchor tags (`#section`) on the homepage.
  - Every major pillar, initiative, community hub, or content domain MUST have its own dedicated page component under `src/pages/`.
  - Every page MUST be registered in `src/App.tsx` routes with clean, descriptive paths.
  - Every page MUST include `<Helmet>` with custom `<title>`, `<meta name="description">`, and Open Graph tags.
  - Every page transition MUST be accompanied by automatic scroll-to-top (`src/components/ScrollToTop.tsx`).
  - All navigation bars, footers, and contextual links MUST use `<Link to="...">` with real routes.
  - Deployment rewrites (`public/_redirects` and `vercel.json`) must be preserved for direct URL handling.

## 2. Mandatory Mobile & Tablet Optimization
- **Every new component, section, page, or feature update MUST be fully responsive**:
  - **Mobile (< 640px)**: 
    - Full-width touch-friendly layouts (minimum 44px tap targets).
    - Horizontal scroll tracks with native momentum (`overflow-x-auto snap-x`) where card carousels exist.
    - No clipping, no cut-off text, no unscrollable modals/drawers.
    - Zero horizontal overflow (`overflow-x-hidden` on containers where appropriate).
  - **Tablet (768px – 1024px)**:
    - Dedicated tablet adaptations: 2-column grids where appropriate, comfortable padding, touch gesture support.
    - Verify both portrait (768px) and landscape (1024px) orientations.
  - **Desktop (1024px+)**:
    - Cinematic layouts, 3D depth, rich hover states, and widescreen visual polish.
- **Verification Rule**: Never mark a task complete without confirming that mobile (360px–480px) and tablet (768px–1024px) breakpoints look visually stunning, readable, and fully functional.

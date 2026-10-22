# ChronoTask — UI/UX Recreation Specification

**Source:** Four user-provided screenshots in this folder:
[choronotask-hero-section.png](choronotask-hero-section.png),
[hero-section-choronotask.webp](hero-section-choronotask.webp),
[landing-page-except-hero-section.webp](landing-page-except-hero-section.webp),
[2nd-page.webp](2nd-page.webp).

**Purpose:** Document the visible design language and propose a practical recreation plan for the ChronoTask landing page.

**Confidence convention:** **Observed** = visible in the screenshots. **Inferred** = a plausible implementation approach, not confirmed by source code or a live interaction audit.

---

## 1. Executive summary

ChronoTask is a light, soft-focus marketing site for a task-management product. The design pairs a white canvas, oversized black-and-gray typography, and a single blue action color with floating, lightly dimensional product cards. The page moves from a centered hero with scattered UI fragments into solutions, a large product dashboard, a feature bento grid, an integrations wall, and a testimonial masonry.

The strongest idea is not the blue CTA or the centered headline. It is the **hero as a desk of floating product fragments**: a sticky note, a task list, a reminder card, a logo cube, and an integrations card around the headline. That composition makes the product feel tangible without a real 3D engine.

**Recreation priority:** match the floating-card composition, the type scale, the soft surface treatment, and the integration/testimonial grids before adding motion.

## 2. Source facts and scope

- Four static screenshots; no video, source code, live URL, or DOM capture.
- The screenshots cover the hero, solutions, features, integrations, and testimonials.
- No footer is visible.
- Exact font family, color values, spacing, shadows, and breakpoints cannot be verified.
- Hover, focus, scroll, and responsive behavior are not visible and must be inferred.

## 3. Screenshot inventory

| File | Visible region | Notes |
| --- | --- | --- |
| `choronotask-hero-section.png` | Header and full hero | Tight crop, complete hero composition |
| `hero-section-choronotask.webp` | Header and hero at a wider crop | Same design, more surrounding space |
| `landing-page-except-hero-section.webp` | Solutions and Features | Large dashboard mockup and bento grid |
| `2nd-page.webp` | Integrations and Testimonials | Icon wall and testimonial masonry |

## 4. Visual design system

### 4.1 Art direction

- **Canvas:** white and near-white gray, with a subtle dotted texture inside the hero panel.
- **Primary contrast:** near-black headlines against white, with a gray second line in the hero.
- **Accent:** one confident blue for the primary action and small UI marks.
- **Secondary color:** yellow sticky note, green/orange task status, and the integration icons' own colors.
- **Tone:** calm, friendly, productivity-focused, lightly playful. Closer to Linear/Notion marketing than to a dense admin dashboard.
- **Depth:** floating cards with soft shadows and slightly rotated angles; one small 3D-looking logo cube; no heavy glass or gradient overlays.
- **Shape:** rounded cards and panels, soft edges, generous whitespace. Avoid aggressive corner radii and heavy borders.

### 4.2 Color estimates

These are visual estimates from compressed screenshots, not sampled source values.

| Token | Starting value | Usage |
| --- | --- | --- |
| `--ink` | `#101112` | Headlines, primary text |
| `--muted-ink` | `#8C8F94` | Hero second line, secondary copy |
| `--paper` | `#FFFFFF` | Cards, header, hero panel |
| `--page` | `#F3F4F6` | Outer page background |
| `--muted-surface` | `#F6F7F8` | Testimonial and secondary cards |
| `--blue` | `#2F80ED` | Primary CTA, logo dot, small accents |
| `--blue-strong` | `#1F6FE0` | CTA hover / pressed |
| `--yellow` | `#F7E98E` | Sticky note |
| `--green` | `#34C759` | Completion and positive state |
| `--orange` | `#FF9F43` | Task accent and warning |
| `--border` | `#E8EAEE` | Subtle outlines and separators |

### 4.3 Typography

**Observed:** large, tight, mostly regular-weight headlines; a gray second line; compact body copy; small navigation labels.

**Inferred implementation:**

- Use a clean geometric or neo-grotesque sans such as Inter or Geist.
- Hero: about 64-76px at desktop, line-height near 1.0, tracking slightly tight.
- Section headings: about 40-48px, centered.
- Body: 14-16px with 1.5-1.6 line-height.
- Navigation and small labels: 13-14px.
- Buttons: 14-15px, medium weight.

Suggested starting tokens:

```css
:root {
  --font-sans: "Inter", "Geist", Arial, sans-serif;
  --text-hero: clamp(2.8rem, 5.2vw, 4.8rem);
  --text-section: clamp(2rem, 3.2vw, 3rem);
  --text-body: 1rem;
  --text-small: 0.875rem;
  --leading-hero: 1.02;
  --leading-body: 1.55;
}
```

### 4.4 Layout, spacing, and surfaces

- Centered content container, roughly 1120-1200px at desktop.
- Large section gaps, roughly 96-140px.
- Hero is a rounded panel with a subtle dotted texture and a thin outer edge.
- Cards use 16-24px radii and soft shadows; avoid stacking shadow on border.
- The feature area uses a bento grid, not a uniform three-card row.
- Integration tiles form a two-row grid that bleeds past the viewport edges.
- Testimonials use a masonry/bento layout with one large video card.

Suggested starting tokens:

```css
:root {
  --page-gutter: clamp(1rem, 4vw, 4rem);
  --content-max: 76rem;
  --section-space: clamp(4rem, 9vw, 8rem);
  --radius-card: 1rem;
  --radius-panel: 1.5rem;
  --shadow-card: 0 18px 40px rgba(16, 17, 18, 0.08);
}
```

## 5. Section-by-section recreation

### 5.1 Header

**Observed:** white bar; six-dot logo mark and "ChronoTask" at the left; centered links Features, Solutions, Resources, Pricing; "Sign in" and an outlined "Get demo" at the right.

**Recreation:** build a reusable `SiteHeader` with a three-part flex layout. Use small, neutral nav labels. Make "Get demo" the only outlined action and keep it compact. Add a mobile menu; the screenshots do not show one, but the desktop nav will not fit.

**Interactions:** logo returns home; nav links scroll to sections or navigate; hover and focus states stay subtle; focus is visible.

### 5.2 Hero

**Observed:**

- Centered small logo cube above the headline.
- Headline: "Think, plan, and track" in black, then "all in one place" in gray.
- Subtext: "Efficiently manage your tasks and boost productivity."
- Blue button: "Get free demo".
- Floating fragments:
  - top-left yellow sticky note with a pin and the note copy;
  - a white checkbox card overlapping the note;
  - top-right Reminders card with a clock icon, "Today's Meeting", "Call with marketing team", "Time 13:00 - 13:45";
  - bottom-left Today's tasks card with two task rows and progress bars;
  - bottom-right 100+ Integrations card with Gmail, Slack, and Calendar icons;
  - a partial card cropped at the right edge.
- The hero panel has a dotted texture and rounded corners.

**Recreation:** build the text column first, then place the fragments with absolute positioning inside a bounded hero panel. Use real HTML for the cards, not a flat screenshot. On mobile, hide the least important fragments and keep one or two around the text, or stack them below the CTA.

**Motion (inferred, not confirmed):** the floating cards could have a very small parallax or float. The logo cube could have a slow rotation. Do not add either until the static composition is right; if added, keep travel under 12px and respect reduced motion.

### 5.3 Solutions

**Observed:**

- Small "Solutions" pill above the heading.
- Heading: "Solve your team's biggest challenges".
- Three small icon-and-copy columns:
  - "Ensure your team is always on the same page with task sharing and transparent updates."
  - "Prioritize and manage tasks effectively so your team can focus on what matters most."
  - "Hold everyone accountable with the tools they need for constant check-ins."
- A large blue gradient dashboard mockup below, with a floating checkbox card and a "20" badge.
- The dashboard shows a sidebar, "Good morning, Amanda", a to-do list, a time tracker, activity rings, and assigned tasks.

**Recreation:** keep the three-column argument at the top, then show the product as a real interface fragment. Do not replace the dashboard with gray placeholder bars. The blue gradient behind the dashboard is one of the few gradient moments; if we reuse it, keep it as a background field, not as a button treatment.

### 5.4 Features

**Observed:**

- "Features" pill, heading "Keep everything in one place", subtext "Forget complex project management tools."
- Bento grid:
  - Seamless Collaboration, wide card with a workspace list;
  - Time Management Tools, tall card with a weekly schedule and a 76% workload ring;
  - Advanced task tracking, wide card with a project timeline;
  - Customizable Workspaces, smaller dashed card with widget tiles.
- "and a lot more features..." below the grid.

**Recreation:** use a 2-column bento grid at desktop, with one wide card per row where the content needs it. Each card holds a real UI fragment, not a generic icon. Keep the dashed treatment only for the "Customizable Workspaces" card if it represents an empty or configurable space.

### 5.5 Integrations

**Observed:**

- "Integrations" pill and heading "Connect integrations you use every day".
- A small 3D logo cube centered below the heading.
- Two rows of white rounded tiles with app icons: Drive, Photos, Jira, Gmail, Figma, Outlook, Slack, and others; the grid crops at both edges.
- Dotted connection lines behind the tiles.

**Recreation:** use a centered logo mark, a two-row grid of brand icons, and a faint dotted pattern behind. Let the grid bleed off the edges on desktop; on mobile, reduce to 3-4 columns and remove the bleed.

### 5.6 Testimonials

**Observed:**

- "Testimonials" pill and heading "People just like you are already using ChronoTask".
- Masonry of five quote cards plus one large video-review card.
- Names and roles: John D. (Marketing Lead), Sarah W. (Freelance Designer), Sam J. (Project Coordinator), Daniela T. (Operations Manager), Alex M. (Freelance Developer).
- One card includes a person's photo and a YouTube play badge with "Watch video review".
- A small speech-bubble icon floats beside the first card.

**Recreation:** use a masonry layout or a deliberate bento grid, not equal cards. Keep one large media card as the anchor. Use real avatars or neutral initials; do not invent testimonials for our own product. For the hackathon, use honest demo quotes or clearly labeled sample content.

### 5.7 Footer

**Not visible.** Do not invent a footer from the screenshots. Use the site's nav groups and a standard closing section if needed; keep it secondary.

## 6. Motion and interaction plan

### 6.1 What static images can and cannot prove

Static screenshots show composition, not motion. They cannot confirm scroll-linked animation, entrance reveals, hover behavior, or floating loops. Implement the static page first.

### 6.2 Motion inventory to verify

| Element | Possible behavior | Confidence | How to verify |
| --- | --- | --- | --- |
| Header | Sticky or fixed | Low | Scroll the live site; compare header position |
| Hero cards | Small float/parallax | Low | Compare positions while scrolling slowly |
| Logo cube | Slow rotation or hover tilt | Low | Watch the live hero without scrolling |
| Integration tiles | Staggered reveal | Low | Reload and watch the section enter |
| Dashboard mockup | Scroll-linked tilt/parallax | Low | Check whether it moves independently of page scroll |
| Testimonial cards | Reveal/stagger | Low | Reload and watch the section |

### 6.3 Recommended order

1. Static layout and type.
2. Sticky header, if the live page confirms it.
3. Section entrance reveals, if confirmed.
4. Hero card float/parallax, kept subtle.
5. Hover, focus, and button feedback.

### 6.4 Motion tokens

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 160ms;
  --duration-ui: 240ms;
  --duration-reveal: 650ms;
}
```

Use `transform` and `opacity` only. Respect `prefers-reduced-motion`. Do not add a 3D engine for the floating cards; they are layered HTML with shadows and rotation.

## 7. Suggested component architecture

```text
Page
├── SiteHeader
├── HeroSection
│   ├── HeroCopy
│   ├── PrimaryCTA
│   └── HeroCollage
│       ├── NoteCard
│       ├── CheckCard
│       ├── LogoMark
│       ├── ReminderCard
│       ├── TodayTasksCard
│       └── IntegrationsCard
├── SolutionsSection
│   ├── SectionHeading
│   ├── SolutionPoint × 3
│   └── DashboardPreview
├── FeaturesSection
│   ├── SectionHeading
│   └── FeatureCard × 4
├── IntegrationsSection
│   ├── LogoMark
│   └── IntegrationTile × N
├── TestimonialsSection
│   ├── SectionHeading
│   └── TestimonialCard × N
└── SiteFooter
```

Keep copy and data separate from layout so the labels and testimonial names can be corrected without touching component markup.

## 8. Technical implementation recommendations

- **Stack:** Next.js App Router, Tailwind, Framer Motion. No WebGL.
- **Hero:** real HTML cards with `position: absolute`, `rotate`, and soft shadows; one small 3D-looking logo built with divs or an SVG.
- **Dashboard preview:** build a real HTML fragment with actual labels and numbers; do not use a flat image of gray bars.
- **Icons:** use one icon family for UI icons and official brand marks for integrations.
- **Images:** WebP/AVIF, responsive sizes, lazy load below the fold, priority for the hero.
- **Accessibility:** semantic sections, visible focus, keyboard-operable controls, reduced motion, alt text for meaningful images.
- **Performance:** limit blurred shadows, avoid large background images, use transform/opacity.

## 9. Responsive behavior

- **Mobile:** collapse the nav to a menu; headline at 40-48px; keep the primary CTA full width; hide or simplify the floating cards; stack the solutions points; show the dashboard as a cropped card; stack features; integration grid 3-4 columns; testimonials one column.
- **Tablet:** two-column features; four to five integration tiles per row; reduce hero card count.
- **Desktop:** full collage, two-row integration wall, masonry testimonials.

## 10. Asset and measurement checklist

- [ ] Logo mark SVG or recreation reference
- [ ] Hero card content and exact copy
- [ ] Dashboard screenshot or a faithful HTML fragment
- [ ] Integration icon set with official marks
- [ ] Testimonial avatars or neutral alternatives
- [ ] Font family and weights
- [ ] Sampled colors and border radii
- [ ] Header height, container width, section spacing
- [ ] Sticky/scroll behavior
- [ ] Mobile navigation and hero crop
- [ ] Reduced-motion behavior

## 11. Visual QA procedure

1. Compare at 1440, 1024, 768, and 390px.
2. Check the hero collage first: card positions, rotations, shadows, and headline line breaks.
3. Check the type scale and the gray second line.
4. Check the dashboard fragment and bento grid proportions.
5. Check the integration wall and testimonial masonry.
6. Check keyboard focus, reduced motion, and horizontal overflow.
7. Record issues as layout, type, asset, color, or motion.

## 12. What to borrow, what not to copy

**Borrow:** the floating product fragments, the soft layered depth, the integration wall, the testimonial bento, the restrained blue action color.

**Do not copy:** the generic centered SaaS hero, the exact blue CTA, the "Get free demo" copy, or the full layout. Use the floating-fragment idea with our own editorial soot/white/lime system and our own product content.

## 13. Important limitations

This specification is based on four static screenshots, not the live DOM, CSS, assets, or interactions. Color values, font choices, spacing, shadows, and motion are estimates. Anything marked **Inferred** must be verified against the live page or a higher-fidelity source before being treated as a fact.

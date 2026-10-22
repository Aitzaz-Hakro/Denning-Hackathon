# Compsups — UI/UX Recreation Specification

**Source:** Two user-provided screenshots in this folder:
[hero-section.webp](hero-section.webp) and
[other-section-1.webp](other-section-1.webp).

**Purpose:** Document the visible design language and propose a practical recreation plan for the Compsups landing page.

**Confidence convention:** **Observed** = visible in the screenshots. **Inferred** = a plausible implementation approach, not confirmed by source code or a live interaction audit.

---

## 1. Executive summary

Compsups is a warm, polished marketing site for a company-management platform. A peach-tinted page holds a large white app window, a centered hero with a coral accent, a black pill CTA, and a full dashboard preview. The second section uses two large white cards with floating metric panels to explain the product's organizational and financial sides.

The strongest idea is **the product window as the hero proof**: the page does not just describe the platform; it shows a believable dashboard immediately. The coral/peach palette gives it more personality than a standard blue SaaS site, but the same soft gradients, rounded cards, and floating mini-panels could easily become generic if copied without the product content.

**Recreation priority:** match the warm surface, the app-window framing, the dashboard preview, and the floating metric cards before polishing motion.

## 2. Source facts and scope

- Two static screenshots; no video, source code, live URL, or DOM capture.
- The screenshots cover the header, hero, feature tabs, dashboard preview, and the "Solution Multiple Aspects" section.
- No footer, pricing, testimonials, or mobile state is visible.
- Exact font family, color values, spacing, shadows, and breakpoints cannot be verified.
- Hover, focus, scroll, and responsive behavior are not visible and must be inferred.

## 3. Screenshot inventory

| File | Visible region | Notes |
| --- | --- | --- |
| `hero-section.webp` | Header, hero, feature tabs, dashboard preview | Full first screen and top of the dashboard |
| `other-section-1.webp` | "Solution Multiple Aspects" | Two feature cards with floating metric panels |

## 4. Visual design system

### 4.1 Art direction

- **Canvas:** warm peach/cream page around a large white app window.
- **Primary contrast:** near-black typography on white and peach.
- **Accent:** coral/orange for the brand, the inline headline icon, and the metric highlights.
- **Secondary accents:** blue for the badge icon and some data, green and red for positive/negative states.
- **Tone:** friendly, premium, operational, slightly soft. More "modern enterprise SaaS" than the playful ChronoTask reference.
- **Depth:** soft shadows, rounded panels, subtle gradients and blur around the window; floating metric cards; dotted texture in the second section.
- **Shape:** large radii on the app window and cards, pill buttons, rounded icon containers.

### 4.2 Color estimates

These are visual estimates from compressed screenshots, not sampled source values.

| Token | Starting value | Usage |
| --- | --- | --- |
| `--ink` | `#171717` | Headlines and primary text |
| `--muted-ink` | `#6B6B6B` | Secondary copy and labels |
| `--paper` | `#FFFFFF` | App window, cards, tabs |
| `--page` | `#FDF1EC` | Outer peach ground |
| `--peach` | `#FBE8DF` | Hero panel / soft fields |
| `--coral` | `#F26B4E` | Brand mark, inline icon, warm accent |
| `--coral-strong` | `#E4573A` | Hover / pressed |
| `--blue` | `#2F6BFF` | Badge icon, selected data |
| `--green` | `#3BB273` | Positive metric |
| `--red` | `#E5484D` | Negative metric |
| `--border` | `#F1E4DE` | Soft edges and separators |

### 4.3 Typography

**Observed:** bold geometric sans; a large two-line headline with an inline coral icon; compact navigation and small dashboard labels; medium-weight buttons.

**Inferred implementation:**

- Use a geometric or neo-grotesque sans such as Inter, Geist, or Plus Jakarta Sans.
- Hero: about 56-64px at desktop, line-height near 1.05, tracking slightly tight.
- Section heading: about 40-48px.
- Body: 14-15px with 1.5-1.6 line-height.
- Navigation: 13px.
- Dashboard labels: 10-12px, with tabular numbers for metrics.
- Buttons: 13-14px, medium weight.

Suggested starting tokens:

```css
:root {
  --font-sans: "Inter", "Geist", Arial, sans-serif;
  --text-hero: clamp(2.6rem, 5vw, 4rem);
  --text-section: clamp(2rem, 3vw, 2.8rem);
  --text-body: 0.9375rem;
  --text-small: 0.8125rem;
  --leading-hero: 1.05;
  --leading-body: 1.55;
}
```

### 4.4 Layout, spacing, and surfaces

- A large white app window sits inside a peach page with generous outer padding.
- Header, hero, tabs, and dashboard share the same window width.
- Hero content is centered; the dashboard preview is the lower half of the first screen.
- The second section uses a centered heading and two equal cards with floating panels.
- Surfaces are white or peach with soft borders and large radii; avoid hard lines and heavy shadows.
- The dashboard is detailed enough to read as a real product, not a gray placeholder.

Suggested starting tokens:

```css
:root {
  --page-gutter: clamp(1rem, 4vw, 3rem);
  --content-max: 70rem;
  --window-radius: 1.75rem;
  --card-radius: 1rem;
  --section-space: clamp(4rem, 9vw, 8rem);
  --shadow-float: 0 20px 50px rgba(55, 32, 24, 0.12);
}
```

## 5. Section-by-section recreation

### 5.1 Header

**Observed:** coral swirl logo and "Compsups" at the left; centered links Home, About Us, Our Features, Pricing, Testimonials; a black "Contact Us" pill at the right.

**Recreation:** use a three-part header inside the white app window. Keep the nav small and the Contact Us pill as the only filled action. Add a mobile menu; the screenshots do not show one.

### 5.2 Hero

**Observed:**

- Peach hero panel with a subtle grid of rounded squares behind the content.
- Small white badge: "Best Company Management Platform" with a blue icon.
- Two-line headline: "Let's Make Your Company" and "Management [coral icon] Easier".
- Subtext: "Effortlessly streamline & optimize your company management in one platform".
- Black "Get Started" pill with a white circular arrow; "Play Video" with a play triangle.
- Four white feature tabs: Financial, Employee, Hiring, Schedule, each with a small icon.
- A complete dashboard preview below the tabs, cropped at the bottom by the window.

**Recreation:** build the hero inside a peach panel with a large white window. Use a real inline icon in the headline, not a colored word. Keep the CTA row compact. The four tabs should be real links or buttons with icons; they are part of the product story, not decoration. The dashboard preview is the proof and should be built as a real HTML fragment with believable data.

### 5.3 Dashboard preview

**Observed:**

- White dashboard with a left sidebar and a main canvas.
- Sidebar: Compsups logo, user "Vincenzo Lozano", group "GENERAL", items Dashboard, Employee, Payroll, Hire, Files.
- Main header: "Dashboard", "Let's see an overview of your company"; avatars and "Invite People".
- "Total Employee" card: 978 Employee, "+43% from last year", segmented progress bar, legend Operational 72%, Lead Division 18%, Managerial 10%.
- "Job Applicants" card: 678, a ring chart, Application reviewed 328, Application sent 159, Application rejected 170.
- "Financial Activity" panel begins below, with a date range and Export control.
- "View More" links on cards.

**Recreation:** use a three-column shell (sidebar, main, optional right rail) at desktop. Keep numbers tabular and right-aligned where compared. Do not invent a dashboard of gray bars; use the visible labels and realistic values. On mobile, collapse the sidebar and show the dashboard as a cropped card or a stacked set of metric panels.

### 5.4 Feature tabs

**Observed:** four white pill cards with small icons and labels, sitting between the CTA row and the dashboard.

**Recreation:** make them interactive only if they switch the dashboard view. If they do not, render them as static feature labels, not buttons. Keep one selected state if the dashboard changes.

### 5.5 Solution Multiple Aspects

**Observed:**

- Centered heading: "Solution Multiple [blue icon] Aspects".
- Subtext: "We finalize various aspects into one platform for your convenience."
- Two large white cards:
  - **Organized Employee** — floating Total Employee 978 panel with segmented bar, and a "Design System Stage 78%" mini card. Copy: "You can organize your employees such as employee data collection, hiring process and task management."
  - **Financial Management** — floating Top Spending Category $48.7k ring chart and Your Saldo $24,278.00 panel with Total Income $63.7k and Total Expense $39.5k. Copy: "You can manage your company's activity financial operations, salaries and others".
- White rounded container with a dotted texture behind the cards.

**Recreation:** use two equal cards at desktop, each with a floating metric panel and a short explanation. Keep the floating panels slightly rotated or offset but readable. Stack the cards on mobile, and reduce the floating panels to one per card.

### 5.6 Footer

**Not visible.** Do not invent a footer from the screenshots. Use the nav groups and a standard closing section if needed.

## 6. Motion and interaction plan

### 6.1 What static images can and cannot prove

Static screenshots show composition, not motion. They cannot confirm scroll-linked animation, hover behavior, or the dashboard's interactive states. Build the static page first.

### 6.2 Motion inventory to verify

| Element | Possible behavior | Confidence | How to verify |
| --- | --- | --- | --- |
| Header | Sticky or fixed | Low | Scroll the live page |
| Hero badge | Subtle float | Low | Watch the live hero without scrolling |
| Dashboard preview | Tilt/parallax on scroll | Low | Check whether it moves independently |
| Feature tabs | Hover/selected state | Medium (the selected tab is visible) | Click each tab on the live page |
| Floating metric cards | Reveal/stagger | Low | Reload and watch the section enter |
| Play Video | Opens a modal or navigates | Medium (button is visible) | Click it on the live page |

### 6.3 Recommended order

1. Static layout, type, and dashboard.
2. Header sticky, if confirmed.
3. Section reveals, if confirmed.
4. Subtle floating-card motion, kept under 12px of travel.
5. Hover, focus, tab, and button feedback.

### 6.4 Motion tokens

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 160ms;
  --duration-ui: 240ms;
  --duration-reveal: 650ms;
}
```

Use transform and opacity only. Respect `prefers-reduced-motion`. Do not add WebGL for the floating panels; they are layered HTML.

## 7. Suggested component architecture

```text
Page
├── AppWindow
│   ├── SiteHeader
│   ├── HeroSection
│   │   ├── HeroBadge
│   │   ├── HeroTitle
│   │   ├── HeroActions
│   │   ├── FeatureTabs
│   │   └── DashboardPreview
│   │       ├── Sidebar
│   │       ├── EmployeeMetric
│   │       ├── ApplicantRing
│   │       ├── ApplicationList
│   │       └── FinancialActivity
│   ├── SolutionSection
│   │   ├── SectionHeading
│   │   ├── FeatureSplitCard
│   │   │   └── FloatingMetricCard
│   │   └── FeatureSplitCard
│   └── SiteFooter
```

Keep copy and dashboard data separate from layout so labels and numbers can be corrected without touching component markup.

## 8. Technical implementation recommendations

- **Stack:** Next.js App Router, Tailwind, Framer Motion. No WebGL.
- **App window:** one white rounded shell with a peach page around it; avoid nested cards inside nested cards.
- **Dashboard:** real HTML with real labels and tabular numbers; use SVG for the ring chart and segmented bar.
- **Feature tabs:** real buttons only if they change the dashboard; otherwise static labels.
- **Icons:** one UI icon family; official brand marks for the logo and integrations if used.
- **Images:** WebP/AVIF, responsive sizes, lazy load below the fold.
- **Accessibility:** semantic landmarks, visible focus, keyboard tabs, reduced motion, alt text.
- **Performance:** avoid stacking blur and shadow on large layers; use transform/opacity.

## 9. Responsive behavior

- **Mobile:** stack the header nav into a menu; hero headline at 40-48px; CTA row stacks or becomes full width; tabs scroll horizontally; dashboard becomes a cropped summary or stacked metric cards; solution cards stack; floating panels reduce to one per card.
- **Tablet:** two feature tabs per row; dashboard sidebar collapses; solution cards may remain side by side if they fit.
- **Desktop:** full window, four tabs in one row, detailed dashboard, two solution cards side by side.

## 10. Asset and measurement checklist

- [ ] Logo mark SVG or recreation reference
- [ ] Hero badge icon and inline coral icon
- [ ] Dashboard data and labels
- [ ] Ring chart and segmented bar values
- [ ] Solution card copy and metric panels
- [ ] Font family and weights
- [ ] Sampled colors and border radii
- [ ] Window width, gutters, section spacing
- [ ] Sticky/scroll behavior
- [ ] Mobile navigation and dashboard treatment
- [ ] Reduced-motion behavior

## 11. Visual QA procedure

1. Compare at 1440, 1024, 768, and 390px.
2. Check the app window framing and peach/white surface relationship.
3. Check the hero headline line breaks and inline icon.
4. Check the dashboard hierarchy, numbers, and ring chart.
5. Check the two solution cards and floating panels.
6. Check keyboard focus, reduced motion, and horizontal overflow.
7. Record issues as layout, type, asset, color, or motion.

## 12. What to borrow, what not to copy

**Borrow:** the warm peach/coral identity, the app-window framing, the dashboard-as-proof, the feature tabs, the floating metric panels.

**Do not copy:** the exact coral palette, the black pill CTA, the generic "Best platform" badge, the gradient/glow treatment, or the full dashboard layout. Use the app-window-as-proof idea with our editorial soot/white/lime system and our own product data.

## 13. Important limitations

This specification is based on two static screenshots, not the live DOM, CSS, assets, or interactions. Color values, font choices, spacing, shadows, and motion are estimates. Anything marked **Inferred** must be verified against the live page or a higher-fidelity source before being treated as a fact.

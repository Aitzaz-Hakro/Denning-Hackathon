# Wollo Website --- UI/UX, Motion & Interaction Recreation Specification

**Source:** User-provided 29.45-second screen recording (`1600 × 1200`,
60 fps)\
**Purpose:** Recreate the visible website as closely as practical,
including layout, visual system, scrolling transitions, and
interactions.\
**Confidence convention:** **Observed** = visible in the recording.
**Inferred** = a plausible implementation approach, not confirmed
source-code behavior.

------------------------------------------------------------------------

## 1. Executive summary

The recording shows a long-form marketing landing page for **Wollo**,
apparently a social-media analytics / intelligence product. Its design
combines a restrained white canvas and minimal navigation with vivid
purple, pink, yellow, and orange artwork. Oversized black typography and
large numerical metrics provide contrast against compact explanatory
copy and dashboard-like data cards.

The page appears to move through multiple sections during a continuous
scroll: hero, illustrated visual, analytics/reporting, integrations,
feature/process cards, product claims and metrics, FAQ, a prominent
call-to-action panel, footer, and a return toward the hero. The
recording is evidence of these visible states, but it does not establish
every click, hover, or keyboard interaction.

**Recreation priority:** Match the composition, section rhythm,
illustration treatment, sticky/overlaid navigation behavior, and scroll
choreography before fine-tuning micro-interactions.

## 2. Recording facts and scope

-   Duration: approximately **29.45 seconds**.
-   Frame size: **1600 × 1200**.
-   Frame rate: **60 fps**.
-   The recording presents a desktop-like page with a centered website
    canvas and visible scrolling through different page regions.
-   It is not a source-code capture. Exact DOM structure, CSS values,
    font family, breakpoints, animation library, and event triggers
    cannot be verified from the video alone.

The time markers below are approximate checkpoints, not exact animation
start/end times. The camera/screen recording may include manual scroll
input, so elapsed seconds should not be treated as a reliable scroll
timeline.

## 3. Visible page sequence

  -----------------------------------------------------------------------
  Approx. timestamp       Visible state           Design / motion notes
  ----------------------- ----------------------- -----------------------
  0--2 s                  Hero headline:          White page, centered
                          "Maximize Your Social   headline, compact nav.
                          Media Presence"; small  Illustration appears
                          primary CTA; large      cropped by the hero
                          colorful illustration   viewport and occupies
                          entering from below     much of the lower
                                                  region.

  2--6 s                  Large purple            The artwork is a focal
                          illustrated scene fills point. The nav appears
                          most of the visible     to remain near the top
                          content; navigation     as the content scrolls
                          remains visible over    underneath or behind
                          the artwork in some     it. Confirm
                          frames                  sticky/fixed behavior
                                                  on the original site.

  6--12 s                 "Advanced Analytics and White content section
                          Reporting" heading and  with a centered
                          dashboard cards         heading, rounded
                                                  pale-gray cards,
                                                  pink/yellow statistic
                                                  tiles, small charts and
                                                  labels. Different
                                                  dashboard panels appear
                                                  as the scroll
                                                  progresses.

  12--14 s                Analytics content       Large black title,
                          finishes; transition to small decorative
                          "Integrations" title    graphic and
                                                  yellow-highlighted
                                                  brand treatment.
                                                  Generous white space.

  14--16 s                Three numbered          Cards use orange, pink,
                          feature/process cards   and purple backgrounds;
                                                  large "01 / 02 / 03"
                                                  numerals and small
                                                  headings/copy.

  16--18 s                Large explanatory       Centered, large
                          statement about Wollo's typography; a small
                          algorithms analyzing    colorful inline
                          social media data in    decorative mark appears
                          real time               within the heading.

  18--22 s                Oversized metrics such  Alternating horizontal
                          as "+270K", "6X", "8X", rows, image tiles on
                          and "+4.0h" with small  the left, large metric
                          illustrations and       in the middle,
                          explanatory text        supporting copy on the
                                                  right.

  22--26 s                FAQ area, then large    FAQ heading and sparse
                          blue/purple             rows; CTA artwork is
                          call-to-action panel    oversized and overlaps
                                                  or extends beyond the
                                                  colored panel.

  26--28 s                Footer links/social     Footer appears to
                          icons and a return/loop include navigation
                          toward the top hero     groups and social
                                                  links. The final frames
                                                  suggest the recording
                                                  scrolls back toward the
                                                  top or loops; do not
                                                  assume the site itself
                                                  auto-scrolls.
  -----------------------------------------------------------------------

### Content transcription caution

Only text that is legible in the video should be copied literally. Some
small labels and paragraphs are too small or blurred to transcribe
reliably. Use the live website or higher-resolution screenshots to
verify copy before shipping a pixel-accurate version.

## 4. Visual design system

### 4.1 Overall art direction

-   **Canvas:** predominantly white or near-white.
-   **Primary contrast:** near-black typography against white.
-   **Accent palette:** saturated violet/purple, bright pink, yellow,
    and occasional orange.
-   **Visual tone:** creative, playful, modern, product-led, editorial
    rather than corporate-dashboard-heavy.
-   **Density:** spacious section layouts with pockets of dense data
    visualization.
-   **Shape language:** rounded containers and cards paired with bold,
    organic, 3D/illustrated shapes.
-   **Artwork:** high-impact, textured illustrations with gradients,
    dimensional objects, abstract curves, and social-media-inspired
    motifs.

Do not replace the illustrated artwork with generic stock photography.
The artwork is central to the reference identity.

### 4.2 Color estimates

These are **visual estimates from compressed video frames**, not sampled
source colors. Use them as starting tokens and tune against screenshots
from the original site.

  -------------------------------------------------------------------------
  Token                     Suggested starting      Usage
                            value                   
  ------------------------- ----------------------- -----------------------
  `--color-ink`             `#111111`               Main headlines and body
                                                    text

  `--color-paper`           `#FFFFFF`               Page canvas and card
                                                    surfaces

  `--color-muted-surface`   `#F5F4F7`               Analytics panels and
                                                    secondary card
                                                    backgrounds

  `--color-violet`          `#4B10D8`               Main illustration /
                                                    strong accent

  `--color-blue-violet`     `#6879E8`               CTA panel and
                                                    supporting illustration
                                                    tones

  `--color-pink`            `#F044A6`               Metric cards and visual
                                                    accents

  `--color-yellow`          `#F5E923`               Highlight blocks and
                                                    positive metric tiles

  `--color-orange`          `#FF762E`               Numbered card /
                                                    illustration accent

  `--color-border`          `#EAE8ED`               Subtle outlines and
                                                    separators
  -------------------------------------------------------------------------

### 4.3 Typography

**Observed:** Headlines are large, black, and relatively light/regular
in weight rather than heavy display bold. The hero and metrics use an
editorial scale. Body copy is much smaller and restrained.

**Implementation guidance:** - Use a clean geometric or neo-grotesque
sans-serif as a temporary match. - Test fonts with similar proportions,
such as Inter, Geist, or a comparable modern sans; do not treat these as
confirmed font identification. - Hero heading: large, tight line-height,
centered, with deliberate line breaks. - Section headings:
medium-to-large, regular/medium weight, centered where shown. - Metrics:
very large display numerals, with compact labels and supporting
paragraphs. - Navigation and dashboard labels: small, neutral, high
legibility. - Match line wrapping by adjusting max-width and font
metrics, not by forcing awkward manual breaks at every viewport.

Suggested initial CSS tokens (tune after screenshot comparison):

``` css
:root {
  --font-sans: "Inter", "Geist", Arial, sans-serif;
  --text-body: 0.95rem;
  --text-nav: 0.72rem;
  --text-section: clamp(2rem, 3vw, 3.2rem);
  --text-hero: clamp(2.6rem, 4.6vw, 4.6rem);
  --text-metric: clamp(4rem, 8vw, 8rem);
  --leading-heading: 0.98;
  --leading-body: 1.5;
}
```

These values are implementation starting points, not measured values.

### 4.4 Layout, spacing, and surfaces

-   Use a centered content container with generous side gutters.
-   Keep text blocks narrower than full-width illustrations.
-   Separate sections with large vertical gaps; avoid a uniform stack of
    equally sized cards.
-   Use rounded corners on large visual frames and analytics surfaces.
-   Analytics cards use pale backgrounds to keep the chart content
    legible.
-   Let artwork crop beyond its container when the reference shows
    oversized compositions.
-   Avoid unnecessary borders, heavy shadows, and excessive UI chrome.

Suggested starting layout tokens:

``` css
:root {
  --page-gutter: clamp(1rem, 4vw, 4rem);
  --content-max: 82rem;
  --section-space: clamp(5rem, 11vw, 10rem);
  --card-radius: 1.1rem;
  --panel-radius: 1.25rem;
}
```

## 5. Section-by-section recreation

### 5.1 Header / navigation

**Observed** - Brand wordmark at the left. - Small central navigation
links. - Small account/login-style action and dark rounded CTA at the
right. - Header is visible across multiple scroll positions and appears
to overlay or remain aligned with the viewport near the top.

**Recreation** - Build a reusable `SiteHeader` component. - Use a
horizontal flex layout: logo, centered nav, right-side actions. - Keep
nav typography small and spacing consistent. - Test `position: sticky`
versus `position: fixed` against the live page. The video alone does not
prove which is used. - If overlaying artwork, ensure the header has a
stable background or transparent treatment that matches each section. -
Define focus-visible styles and a mobile menu; the recording does not
show mobile behavior.

**Interactions to implement** - Logo returns to page top/home. - Nav
links scroll or navigate to their target sections. - CTA opens the
intended signup/contact destination. - Hover/focus state should be
subtle; do not invent dramatic effects absent from the reference.

### 5.2 Hero

**Observed** - Centered two-line headline, concise subheading or
supporting line, compact primary CTA, and a large illustration below. -
Hero artwork is partially cropped in the initial view and becomes
dominant as the page moves.

**Recreation** - Use a centered hero content column. - Constrain
headline width to preserve its line breaks. - Keep CTA close to the
headline and give it a high-contrast fill. - Place artwork in a
dedicated frame beneath the text; use `overflow: hidden` only where the
crop is intentional. - Treat artwork positioning as a design
composition, not merely an image set to `width: 100%`.

**Motion** - The recording shows changing viewport composition during
scrolling, but does not prove a hero entrance animation. First implement
the static composition and natural scroll; then compare the live site
for any independent entrance/parallax effects. - If parallax is
confirmed, keep the displacement subtle and tie it to scroll progress
rather than a timer.

### 5.3 Large illustrated feature scene

**Observed** - Purple-dominant artwork fills a wide rounded rectangle. -
Abstract objects, curved outlines, and dimensional decorative shapes
create depth. - The header appears to remain present while this scene
moves through the viewport.

**Recreation** - Prefer the original artwork asset if available. If not,
create or commission a composition with matching palette, silhouettes,
depth, and texture. - Use a fixed aspect ratio on desktop and controlled
cropping. - Do not attempt to recreate complex illustration solely with
CSS unless the artwork is very simple. - Check the original for whether
the scene is a static image, video, canvas/WebGL, or a collection of
layered elements; the screen recording alone cannot distinguish these
reliably.

### 5.4 Analytics and reporting

**Observed** - Centered section heading. - Several dashboard-like panels
with rounded corners. - Bar-style audience demographics, line charts,
small labels, and bold yellow/pink percentage tiles. - Panels appear as
distinct layouts rather than one uniform table.

**Recreation** - Create reusable components such as `AnalyticsSection`,
`ChartCard`, `AudienceBars`, `PerformanceLineChart`, and `MetricTile`. -
Use SVG for crisp charts if values are illustrative; use a chart library
only if data interaction is actually needed. - Preserve the visual
hierarchy: card title/label → chart or visualization → bold metric. -
Avoid adding functional chart tooltips unless they are present on the
original page. - Use responsive card stacking at narrow widths.

### 5.5 Integrations interstitial

**Observed** - Large centered "Integrations" title with a small floating
graphic and a yellow brand-like highlight. - Strong negative space.

**Recreation** - Keep this section sparse. - Align decorative elements
with the headline baseline or nearby visual axis. - Use positioning and
scale to create a composed editorial moment. - Any floating or drifting
motion should be added only if confirmed from the original site.

### 5.6 Three numbered cards

**Observed** - Three colored cards, numbered `01`, `02`, and `03`. -
Large numerals dominate each card; smaller heading and copy sit above or
near the numeral. - Cards use distinct accent colors.

**Recreation** - Use a three-column grid at desktop, collapsing to one
column on small screens. - Give each card its own accent token but
preserve consistent geometry and padding. - Keep the number as a display
element with low visual competition from the explanatory copy. -
Preserve any artwork crop/placement inside each card.

### 5.7 Algorithm statement and metrics

**Observed** - A large centered statement describes real-time
social-media analysis. - Following rows feature very large metrics
(`+270K`, `6X`, `8X`, `+4.0h` are visible in the recording), small
illustrative tiles, and explanatory copy. - Rows alternate between white
space and colorful image blocks.

**Recreation** - Use a statement section followed by reusable
`MetricRow` components. - On desktop, use a three-part grid:
illustration, metric, description. - Keep the metric aligned vertically
with the text block and give each row substantial breathing room. -
Preserve the reference's typography and number scale before adding
decorative effects. - Do not animate the numbers unless a count-up
effect is confirmed on the live page.

### 5.8 FAQ

**Observed** - Centered "Frequently Asked Questions" heading. - Sparse
list/rows below it. - Fine text is not fully legible in the video.

**Recreation** - Use semantic buttons for question triggers and an
accessible accordion if the original opens answers. - Support keyboard
interaction and `aria-expanded`. - The recording does not establish
whether answers are open by default, whether multiple items can stay
open, or whether the rows are merely links. Verify against the live
site.

### 5.9 CTA and footer

**Observed** - Large blue-violet CTA panel with a headline about
reaching more people / growing brand awareness. - Oversized 3D
illustration on the right, partially cropped by the panel. - Footer
contains navigation categories and social icons. - Last seconds show a
transition toward the hero again; this could be the recorder scrolling
back up or a loop, not necessarily a website animation.

**Recreation** - Use a rounded, high-contrast CTA panel. - Position the
illustration independently so it can overlap the panel edge without
affecting text flow. - Keep CTA copy readable on top of the
background. - Build the footer from semantic link groups and social
links with accessible labels. - Do not implement an automatic
return-to-top animation based only on the final frames.

## 6. Motion and interaction implementation plan

### 6.1 First principle: distinguish scroll from animation

A video of a page being scrolled can make static elements look animated.
Before reproducing a motion, determine whether it is: 1. **Viewport
movement:** the user scrolls and the section enters/leaves the viewport.
2. **Scroll-linked motion:** an element's position, scale, or opacity
changes as scroll progress changes. 3. **Time-based motion:** an element
moves or animates independently of scrolling. 4. **Interaction-triggered
motion:** hover, click, focus, or a menu state changes the UI.

The recording clearly shows viewport movement and changing section
composition. It does not, by itself, conclusively establish which
elements use parallax, entrance animations, or continuous loops.

### 6.2 Motion inventory to verify

  ------------------------------------------------------------------------
  Element           Likely/possible    Confidence from   How to verify
                    behavior           video             
  ----------------- ------------------ ----------------- -----------------
  Header            Stays near the top Medium            Scroll slowly and
                    while content                        observe whether
                    scrolls                              it sticks at the
                                                         same viewport
                                                         coordinate

  Hero artwork      Cropped/revealed   High for changing Pause scrolling;
                    as page scrolls    crop; low for     see whether
                                       independent       artwork continues
                                       animation         moving

  Illustrations     Possible           Low--medium       Compare object
                    layered/parallax                     position relative
                    movement                             to its container
                                                         during a slow
                                                         scroll

  Section headings  Enter viewport as  High as a         Stop scroll just
                    scrolling          viewport event;   before/after the
                    progresses         reveal animation  heading enters
                                       unconfirmed       

  Analytics panels  Replace one        High as normal    Check whether the
                    another in         page content;     section remains
                    viewport during    pinning           pinned while
                    scrolling          unconfirmed       internal panels
                                                         change

  Metric values     Static display or  Unknown           Reload page and
                    count-up                             observe initial
                                                         value progression

  FAQ rows          Accordion or       Unknown           Click a row and
                    navigation                           test keyboard
                                                         focus

  CTA artwork       Static overlap or  Unknown           Pause the page
                    subtle motion                        and compare over
                                                         time
  ------------------------------------------------------------------------

### 6.3 Recommended motion implementation order

1.  **Natural scrolling and sticky header** --- match layout before
    adding motion.
2.  **Section reveal effects** --- only where the reference clearly
    fades/slides elements in.
3.  **Illustration parallax** --- only if confirmed; use small travel
    distances.
4.  **Micro-interactions** --- button hover/press, nav hover/focus,
    accordion open/close.
5.  **Polish** --- tune duration, easing, and stagger based on
    side-by-side comparison.

### 6.4 Motion tokens (initial estimates)

These are sensible defaults for a first prototype, **not measurements
from the source**.

``` css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-standard: cubic-bezier(0.2, 0.7, 0.2, 1);
  --duration-fast: 160ms;
  --duration-ui: 240ms;
  --duration-reveal: 650ms;
}
```

Guidance: - UI feedback: approximately 140--260 ms. - Section reveal:
approximately 450--800 ms if the reference uses reveals. - Avoid
animating layout-heavy properties such as `top`, `left`, or height
continuously; prefer `transform` and `opacity`. - Avoid stacking
multiple large movements at once; the design already has strong color
and scale contrast. - Use `prefers-reduced-motion` to reduce
nonessential movement.

Example reduced-motion handling:

``` css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 7. Suggested component architecture

A React/Next.js implementation could use the following component tree.
This is a proposed architecture, not a claim about the original source
code.

``` text
Page
├── SiteHeader
├── HeroSection
│   ├── HeroCopy
│   ├── PrimaryCTA
│   └── HeroArtwork
├── FeatureArtworkSection
├── AnalyticsSection
│   ├── AnalyticsHeading
│   ├── AudienceChartCard
│   ├── HashtagPerformanceCard
│   └── ResponseTimeCard
├── IntegrationsSection
├── ProcessCardsSection
│   └── ProcessCard × 3
├── AlgorithmStatement
├── MetricsSection
│   └── MetricRow × N
├── FAQSection
│   └── FAQItem × N
├── FinalCTASection
└── SiteFooter
```

Keep content/data separate from layout so headings, metrics, nav links,
and FAQ items can be corrected without editing component markup.

## 8. Technical implementation recommendations

### Recommended baseline

-   **Framework:** Next.js or React, depending on the existing project.
-   **Styling:** CSS Modules or Tailwind CSS; use one consistent styling
    approach.
-   **Motion:** CSS transitions for simple hover/focus; Framer Motion or
    GSAP for confirmed scroll-linked sequences.
-   **Illustrations:** original asset files whenever possible; optimize
    large images and serve responsive variants.
-   **Charts:** SVG/CSS for static illustrative charts; a chart library
    only when actual data behavior is required.
-   **Accessibility:** semantic landmarks, visible focus,
    keyboard-operable controls, adequate contrast, reduced-motion
    support.

### Choosing an animation tool

-   **CSS:** best for button states, simple fades, small transforms, and
    responsive styling.
-   **Framer Motion:** suitable for React component entrance/exit
    transitions and straightforward viewport reveals.
-   **GSAP + ScrollTrigger:** suitable if the original has pinned
    sections, coordinated multi-layer sequences, scrubbed scroll
    progress, or precise timelines.
-   **Canvas/WebGL:** consider only if the original illustration
    demonstrably renders as a live 3D scene. Do not introduce it just
    because the artwork looks three-dimensional.

Avoid installing multiple motion libraries until the behavior is
confirmed. Reproducing the same effect with CSS may be simpler and
faster.

## 9. Responsive behavior

The recording only establishes a desktop-like viewport. Mobile and
tablet behavior must be checked separately; the following are
implementation recommendations, not observed facts.

-   At tablet widths, reduce headline sizes and section padding; allow
    analytics cards to wrap.
-   At mobile widths, convert the nav to a menu, stack metric rows, and
    place descriptions below the metric.
-   Prevent decorative illustrations from covering headlines or CTAs.
-   Use `clamp()` for fluid type and spacing.
-   Set `overflow-x: clip` at the appropriate page wrapper if oversized
    artwork causes horizontal scroll, while ensuring focus rings and
    menus are not clipped.
-   Verify chart labels and small dashboard text remain legible on
    narrow screens.

## 10. Asset and measurement checklist

To improve fidelity, collect or measure these from the live site if
accessible:

-   [ ] Logo / wordmark SVG
-   [ ] Hero and feature illustrations (original source files if
    available)
-   [ ] Exact font family and font weights
-   [ ] Actual color values sampled from source or screenshots
-   [ ] Header height, container width, gutters, section spacing
-   [ ] Border radius and button dimensions
-   [ ] Exact navigation labels and CTA destinations
-   [ ] Animation trigger points and durations
-   [ ] Whether artwork is static image, video, canvas, or layered HTML
-   [ ] FAQ open/close behavior
-   [ ] Mobile navigation and responsive layouts
-   [ ] Reduced-motion behavior and keyboard focus states

## 11. Visual QA procedure

Use the same viewport size and scroll checkpoints for the reference and
recreation.

1.  Set browser viewport to approximately `1600 × 1200` for the first
    comparison.
2.  Capture screenshots at the top of the page and at each major
    section.
3.  Compare macro layout first: container width, section height,
    whitespace, headline line breaks, and artwork crop.
4.  Compare typography next: font shape, weight, line height, and text
    width.
5.  Compare color and surface treatment.
6.  Compare animation only after static screenshots are close.
7.  Record each discrepancy as **layout**, **type**, **asset**,
    **color**, or **motion**.
8.  Test the same scroll path at a consistent speed; otherwise motion
    comparisons will be misleading.
9.  Repeat at tablet and mobile sizes.
10. Test keyboard navigation and reduced-motion settings.

### Definition of done

-   Major sections appear in the same order and have matching
    proportions.
-   Headlines wrap similarly at the target viewport.
-   Illustration scale, crop, and position closely match.
-   Analytics panels and metric rows preserve the same visual hierarchy.
-   Sticky header behavior matches the original.
-   Any confirmed reveal/parallax/pinning behavior is reproduced without
    jank.
-   Links, CTAs, and FAQ interactions work and are keyboard accessible.
-   Mobile layout is intentional and no accidental horizontal scrolling
    remains.

## 12. Important limitations

This specification is based on a 29.45-second recording, not the
original DOM, CSS, assets, or a live interaction audit. It can document
the visible visual language and propose a strong recreation plan, but it
cannot reliably determine exact source values or hidden behavior. The
suggested color values, typography, spacing, motion tokens, and
component tree are starting points to validate against the live site.

For the highest-fidelity result, use the recording alongside the live
website (if available), screenshots at known viewport sizes, and
original assets. Do not treat inferred effects as confirmed facts until
tested.

# Motion and 3D

Status: installed (`lenis@1.3.27`, `motion@14.6.0`). Use this when the problem calls for a landing page or one real 3D moment.

## Decision first

| The problem has... | Use |
| --- | --- |
| No real 3D object | CSS 3D + Framer Motion + Lenis (default) |
| A real object or space to show | React Three Fiber, one scene, static fallback |
| A chat or working app screen | No Lenis, no WebGL; motion is feedback only |
| Low time or a weak demo laptop | CSS 3D + Framer Motion, skip Lenis |

Do not build a "3D website" by default. Build one 3D moment that carries the product's idea, surrounded by clean editorial layout.

## Stack

- `lenis` — smooth scroll on marketing pages only.
- `motion` (Framer Motion) — animation, gestures, scroll-linked transforms. `framer-motion` also works; install one, never both.
- `three`, `@react-three/fiber`, `@react-three/drei` — only for a real 3D object.

Installed in this repo: `lenis@1.3.27` and `motion@14.6.0`. The commands below are for a fresh clone.

```bash
npm install lenis motion
npm install three @react-three/fiber @react-three/drei
```

The motion packages are verified with React 19.3 and Next 16.4; the build passes. Check compatibility again before installing the 3D packages.

## Where it lives

```text
src/app/(marketing)/layout.tsx        SmoothScroll wrapper (client)
src/app/(marketing)/page.tsx          landing page
src/components/motion/smooth-scroll.tsx
src/components/motion/scene.tsx       optional R3F scene, dynamic import
```

Do not put Lenis in the root layout. The chat and dashboard keep native scrolling.

## Lenis setup

```tsx
"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
```

- `root` attaches Lenis to the window.
- If `useScroll` lags behind Lenis, drive a MotionValue from `lenis.on("scroll")` instead of rebuilding the page.
- Test anchor links, keyboard PageDown/Home/End, and trackpad scrolling.

## Framer Motion recipes

Hero entrance:

```tsx
"use client";

import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <motion.h1
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      ...
    </motion.h1>
  );
}
```

Scroll-linked 3D tilt:

```tsx
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export function Artifact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [12, -8]),
    { stiffness: 120, damping: 20 },
  );
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} style={{ perspective: 1200 }}>
      <motion.div style={{ rotateX, y, transformStyle: "preserve-3d" }}>
        ...
      </motion.div>
    </div>
  );
}
```

- Animate `transform` and `opacity` only.
- Use `useReducedMotion` and show the final state when motion is reduced.
- Do not animate width, height, top, or left.

## CSS 3D rules

- Parent: `perspective: 1000-1400px`.
- Child: `transform-style: preserve-3d`.
- Use `translateZ` for layers and `rotateX/Y` for tilt.
- Keep paragraphs on a flat layer; never tilt text.
- Fake depth with perspective and tone steps, not blur or glow.
- On mobile, reduce rotation and disable pointer tilt.

## React Three Fiber, only if needed

```tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./model";

export function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      frameloop="demand"
    >
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
```

- Load it with `next/dynamic` and `ssr: false` from a client wrapper.
- One scene, one model, low-poly and compressed.
- Cap DPR, pause when offscreen, and avoid heavy post-processing.
- Provide a static image fallback for mobile, reduced motion, and WebGL failure.
- Never put body copy inside the canvas.

## Reduced motion and accessibility

- Every animated component uses `useReducedMotion`.
- Lenis is disabled when reduced motion is on.
- Content and navigation work without JavaScript or 3D.
- The canvas is decorative: hide it from assistive tech or give it a text alternative.
- Never make 3D the only way to access content.
- Keyboard focus stays visible; no scroll hijacking.
- Test at 200% zoom and at 320px width.

## Performance budget

- Lazy-load the 3D scene; it must not block the first screen.
- Cap DPR at 1.5 and target 60fps on the demo laptop.
- One canvas per page; pause it when offscreen.
- Compress models and textures; no giant HDRs.
- Reserve the canvas size to avoid layout shift.
- Check the Performance panel, not just how it feels.

## Day-of checklist

- [ ] The problem actually needs a 3D moment.
- [ ] Lenis is only on marketing routes.
- [ ] There is one 3D moment, not one in every section.
- [ ] Reduced motion shows the final state immediately.
- [ ] Mobile fallback works.
- [ ] Anchor links and keyboard scrolling work.
- [ ] A static fallback exists if WebGL fails.
- [ ] Build and lint pass with no console errors.
- [ ] Tested on the demo laptop and a phone.

## Anti-patterns

- A spinning 3D logo as the main idea.
- Lenis on the chat or dashboard.
- WebGL behind body text.
- Scroll hijacking or pinned sections that trap the user.
- Heavy models and textures on a hackathon laptop.
- Gradients, glass, or blur used to fake depth.
- Animating layout properties.
- 3D-only navigation or 3D-only content.

## Open decisions

- Does the problem provide a real object to show?
- Is the landing page separate from the app?
- Do we install React Three Fiber or stay CSS-only?

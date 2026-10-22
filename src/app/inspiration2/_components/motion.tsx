"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger, useGSAP };

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      anchors: { offset: -84 },
      stopInertiaOnNavigate: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 500);
    document.fonts?.ready.then(refresh).catch(() => undefined);

    return () => {
      window.clearTimeout(timer);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

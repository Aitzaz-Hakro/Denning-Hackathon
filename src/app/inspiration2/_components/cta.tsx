"use client";

import { useRef } from "react";
import { ArrowRight, PieMark } from "./icons";
import { gsap, useGSAP } from "./motion";

export function FinalCta() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cs-cta-panel", {
          y: 36,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-cta-panel",
            start: "top 84%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section id="pricing" ref={scope} className="cs-cta-section">
      <div className="cs-cta-panel">
        <div className="cs-cta-mark" aria-hidden="true">
          <PieMark className="h-full w-full" />
        </div>

        <h2>Bring every part of your company into one place.</h2>
        <p>
          Start free, invite your team, and see the whole company in one calm
          workspace.
        </p>

        <div className="cs-cta-actions">
          <a
            className="cs-btn cs-btn-dark cs-btn-arrow"
            href="mailto:hello@compsups.com?subject=Compsups%20demo"
          >
            Get Started
            <span className="cs-btn-circle" aria-hidden="true">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
          <a className="cs-btn cs-btn-outline" href="#contact">
            Talk to us
          </a>
        </div>

        <span className="cs-cta-note">
          No credit card required · 14-day free trial
        </span>
      </div>
    </section>
  );
}

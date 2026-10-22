"use client";

import { useRef } from "react";
import { RibbonSculpture, SparkArt } from "./artwork";
import { gsap, useGSAP } from "./motion";

export function FinalCta() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wollo-cta-panel", {
          y: 44,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-cta-panel",
            start: "top 82%",
            once: true,
          },
        });

        gsap.to(".wollo-cta-art", {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: ".wollo-cta-panel",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".wollo-cta-spark", {
          yPercent: 22,
          rotate: 18,
          ease: "none",
          scrollTrigger: {
            trigger: ".wollo-cta-panel",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section id="pricing" ref={scope} className="wollo-cta-section">
      <div className="wollo-container">
        <div className="wollo-cta-panel">
          <div className="wollo-cta-copy">
            <h2>
              Reach More People and Grow Your Brand Awareness.
            </h2>
            <a className="wollo-btn wollo-btn-cta" href="/login">
              Start Free Trial
            </a>
          </div>

          <div className="wollo-cta-art" aria-hidden="true">
            <RibbonSculpture className="h-full w-full" idPrefix="cta-ribbon" />
          </div>

          <div className="wollo-cta-spark" aria-hidden="true">
            <SparkArt className="h-full w-full" idPrefix="cta-spark" />
          </div>
        </div>
      </div>
    </section>
  );
}

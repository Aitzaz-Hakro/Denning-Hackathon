"use client";

import { useRef } from "react";
import { HeartSculpture, OrbArt } from "./artwork";
import { gsap, useGSAP } from "./motion";

export function Statement() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const words = gsap.utils.toArray<HTMLElement>(
          ".wollo-statement .wollo-word",
          scope.current,
        );

        gsap.fromTo(
          words,
          { color: "#d8d5df" },
          {
            color: "#111114",
            stagger: 0.09,
            ease: "none",
            scrollTrigger: {
              trigger: ".wollo-statement",
              start: "top 80%",
              end: "bottom 58%",
              scrub: 0.6,
            },
          },
        );

        gsap.from(".wollo-statement-ornament", {
          scale: 0,
          rotate: -32,
          duration: 0.8,
          stagger: 0.18,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".wollo-statement",
            start: "top 70%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} className="wollo-section wollo-statement-section">
      <div className="wollo-container">
        <h2 className="sr-only">How Wollo works</h2>
        <p className="wollo-statement">
          <span className="wollo-word">Wollo&rsquo;s</span>{" "}
          <span className="wollo-word">Intelligent</span>{" "}
          <span className="wollo-word">Algorithms</span>{" "}
          <span className="wollo-word">Analyze</span>{" "}
          <span className="wollo-word">Social</span>{" "}
          <span className="wollo-word">Media</span>{" "}
          <span className="wollo-statement-ornament wollo-statement-heart" aria-hidden="true">
            <HeartSculpture className="h-full w-full" idPrefix="statement-heart" />
          </span>{" "}
          <span className="wollo-word">Data</span>{" "}
          <span className="wollo-word">in</span>{" "}
          <span className="wollo-word">Real-Time,</span>{" "}
          <span className="wollo-word">Offering</span>{" "}
          <span className="wollo-word">Actionable</span>{" "}
          <span className="wollo-word">Insights</span>{" "}
          <span className="wollo-statement-ornament wollo-statement-orb" aria-hidden="true">
            <OrbArt className="h-full w-full" idPrefix="statement-orb" />
          </span>{" "}
          <span className="wollo-word">and</span>{" "}
          <span className="wollo-word">Recommendations</span>
        </p>
      </div>
    </section>
  );
}

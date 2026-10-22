"use client";

import { useRef } from "react";
import { HeartSculpture, PaperPlaneArt, RibbonSculpture } from "./artwork";
import { PROCESS_CARDS } from "./content";
import { ArrowUpRight } from "./icons";
import { gsap, useGSAP } from "./motion";

const ART = {
  ribbon: <RibbonSculpture className="w-full" idPrefix="process-ribbon" />,
  heart: <HeartSculpture className="w-full" idPrefix="process-heart" />,
  plane: <PaperPlaneArt className="w-full" idPrefix="process-plane" />,
} as const;

export function Process() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wollo-process-item", {
          y: 44,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-process-grid",
            start: "top 82%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} className="wollo-section wollo-process">
      <div className="wollo-container">
        <h2 className="sr-only">What Wollo does</h2>
        <div className="wollo-process-grid">
          {PROCESS_CARDS.map((card) => (
            <article
              key={card.number}
              className={`wollo-process-item wollo-process-${card.tone}`}
            >
              <h3 className="wollo-process-title">{card.title}</h3>
              <div className="wollo-process-card">
                <span className="wollo-process-kicker">{card.kicker}</span>
                <span className="wollo-process-number" aria-hidden="true">
                  {card.number}
                </span>
                <span className="wollo-process-arrow" aria-hidden="true">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="wollo-process-art" aria-hidden="true">
                  {ART[card.art]}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

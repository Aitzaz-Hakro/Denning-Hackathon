"use client";

import { useRef } from "react";
import {
  HeartSculpture,
  MascotSphere,
  RibbonSculpture,
  SparkArt,
} from "./artwork";
import { METRICS } from "./content";
import { gsap, useGSAP } from "./motion";

const ART = {
  sphere: <MascotSphere className="w-full" idPrefix="metric-sphere" />,
  heart: <HeartSculpture className="w-full" idPrefix="metric-heart" />,
  ribbon: <RibbonSculpture className="w-full" idPrefix="metric-ribbon" />,
  spark: <SparkArt className="w-full" idPrefix="metric-spark" />,
} as const;

export function Metrics() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>(".wollo-metric-row", scope.current)
          .forEach((row) => {
            const art = row.querySelector<HTMLElement>(".wollo-metric-art");
            const badge = row.querySelector<HTMLElement>(".wollo-metric-badge");
            const value = row.querySelector<HTMLElement>(".wollo-metric-value");
            const copy = row.querySelector<HTMLElement>(".wollo-metric-copy");
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: row,
                start: "top 82%",
                once: true,
              },
            });

            if (art) {
              timeline.from(art, {
                y: 36,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            }
            if (badge) {
              timeline.from(
                badge,
                { y: 12, autoAlpha: 0, duration: 0.5, ease: "power2.out" },
                "-=0.5",
              );
            }
            if (value) {
              timeline.from(
                value,
                {
                  yPercent: 58,
                  autoAlpha: 0,
                  duration: 0.9,
                  ease: "power3.out",
                },
                "-=0.45",
              );
            }
            if (copy) {
              timeline.from(
                copy,
                { y: 20, autoAlpha: 0, duration: 0.7, ease: "power2.out" },
                "-=0.6",
              );
            }
          });

        gsap.utils
          .toArray<HTMLElement>(".wollo-metric-art", scope.current)
          .forEach((art, index) => {
            gsap.to(art, {
              yPercent: index % 2 === 0 ? -6 : 6,
              ease: "none",
              scrollTrigger: {
                trigger: art,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} className="wollo-section wollo-metrics">
      <div className="wollo-container">
        <h2 className="sr-only">Results</h2>
        <div className="wollo-metrics-list">
          {METRICS.map((metric) => (
            <article key={metric.value} className="wollo-metric-row">
              <div
                className={`wollo-metric-art wollo-metric-art-${metric.tone}`}
                aria-hidden="true"
              >
                {ART[metric.art]}
              </div>

              <div className="wollo-metric-main">
                <span
                  className={`wollo-metric-badge wollo-badge-${metric.badgeTone}`}
                >
                  {metric.badge}
                </span>
                <span className="wollo-metric-value">{metric.value}</span>
              </div>

              <p className="wollo-metric-copy">{metric.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { CreditCardArt, OrbArt, SparkArt } from "./artwork";
import { INTEGRATIONS } from "./content";
import { gsap, useGSAP } from "./motion";

export function Integrations() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wollo-integrations-title", {
          y: 54,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-integrations-stage",
            start: "top 76%",
            once: true,
          },
        });

        gsap.from(".wollo-integrations-tile", {
          scale: 0.78,
          rotate: -24,
          autoAlpha: 0,
          duration: 1.05,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: ".wollo-integrations-stage",
            start: "top 72%",
            once: true,
          },
        });

        gsap.from(".wollo-integrations-list li", {
          y: 14,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".wollo-integrations-list",
            start: "top 90%",
            once: true,
          },
        });

        gsap.to(".wollo-integrations-card", {
          y: -56,
          rotate: 9,
          ease: "none",
          scrollTrigger: {
            trigger: ".wollo-integrations",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".wollo-integrations-orb", {
          y: -34,
          rotate: 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".wollo-integrations",
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
    <section
      id="integrations"
      ref={scope}
      className="wollo-section wollo-integrations"
    >
      <div className="wollo-container">
        <div className="wollo-integrations-stage">
          <div className="wollo-integrations-card" aria-hidden="true">
            <CreditCardArt className="w-full" idPrefix="integrations-card" />
          </div>

          <h2 className="wollo-integrations-title">Integrations</h2>

          <div className="wollo-integrations-tile" aria-hidden="true">
            <span>wollo</span>
          </div>

          <div className="wollo-integrations-orb" aria-hidden="true">
            <OrbArt className="w-full" idPrefix="integrations-orb" />
          </div>
          <div className="wollo-integrations-spark" aria-hidden="true">
            <SparkArt className="w-full" idPrefix="integrations-spark" />
          </div>
        </div>

        <p className="wollo-integrations-sub">
          The tools you already post from, in one place.
        </p>
        <ul className="wollo-integrations-list" aria-label="Supported integrations">
          {INTEGRATIONS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

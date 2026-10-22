"use client";

import { useRef } from "react";
import { DashboardPreview } from "./dashboard";
import { BadgeRosette, ArrowRight, PieMark, PlayIcon } from "./icons";
import { gsap, useGSAP } from "./motion";
import { FeatureTabs } from "./tabs";

const GRID_CELLS = Array.from({ length: 8 }, (_, index) => index);

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .from(".cs-grid-cell", {
            autoAlpha: 0,
            scale: 0.98,
            duration: 0.8,
            stagger: 0.045,
          })
          .from(
            ".cs-badge",
            { y: 14, autoAlpha: 0, duration: 0.6 },
            "-=0.6",
          )
          .from(
            ".cs-hero-title .cs-line > span",
            { yPercent: 112, duration: 0.95, stagger: 0.08 },
            "-=0.35",
          )
          .from(
            ".cs-hero-sub",
            { y: 14, autoAlpha: 0, duration: 0.65 },
            "-=0.6",
          )
          .from(
            ".cs-hero-actions > *",
            { y: 12, autoAlpha: 0, duration: 0.55, stagger: 0.08 },
            "-=0.4",
          )
          .from(
            ".cs-tab",
            { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06 },
            "-=0.35",
          );

        const dashboardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".cs-dashboard",
            start: "top 88%",
            once: true,
          },
        });

        dashboardTimeline
          .from(".cs-dashboard", {
            y: 56,
            autoAlpha: 0,
            scale: 0.98,
            duration: 0.95,
            ease: "power3.out",
          })
          .from(
            ".cs-segment",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.7,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.35",
          )
          .from(
            ".cs-fin-bar",
            {
              scaleY: 0,
              transformOrigin: "bottom center",
              duration: 0.55,
              stagger: 0.015,
              ease: "power2.out",
            },
            "-=0.5",
          );
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section id="top" ref={scope} className="cs-hero">
      <div className="cs-hero-panel">
        <div className="cs-hero-grid" aria-hidden="true">
          {GRID_CELLS.map((cell) => (
            <span key={cell} className="cs-grid-cell" />
          ))}
        </div>

        <div className="cs-hero-content">
          <span className="cs-badge">
            <BadgeRosette className="h-4 w-4" />
            Best Company Management Platform
          </span>

          <h1 className="cs-hero-title">
            <span className="cs-line">
              <span>Let&rsquo;s Make Your Company</span>
            </span>
            <span className="cs-line">
              <span>
                Management{" "}
                <span className="cs-hero-mark" aria-hidden="true">
                  <PieMark className="h-full w-full" />
                </span>{" "}
                Easier
              </span>
            </span>
          </h1>

          <p className="cs-hero-sub">
            Effortlessly streamline &amp; optimize your company management in
            one platform.
          </p>

          <div className="cs-hero-actions">
            <a className="cs-btn cs-btn-dark cs-btn-arrow" href="#pricing">
              Get Started
              <span className="cs-btn-circle" aria-hidden="true">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              className="cs-btn cs-btn-play"
              href="#dashboard"
              aria-label="See the product dashboard preview"
            >
              <span className="cs-play-triangle" aria-hidden="true">
                <PlayIcon className="h-3 w-3" />
              </span>
              Play Video
            </a>
          </div>

          <FeatureTabs />
        </div>

        <div id="dashboard" className="cs-dashboard-wrap">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

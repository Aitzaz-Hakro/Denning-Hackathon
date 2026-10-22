"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "./motion";
import {
  ChatTablet,
  CubeArt,
  HeartSculpture,
  MascotSphere,
  OrbArt,
  PencilArt,
  SparkArt,
} from "./artwork";

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .from(".wollo-hero-title .wollo-line > span", {
            yPercent: 118,
            duration: 1.05,
            stagger: 0.09,
          })
          .from(
            ".wollo-hero-sub",
            { y: 18, autoAlpha: 0, duration: 0.7 },
            "-=0.65",
          )
          .from(
            ".wollo-hero-actions > *",
            { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.08 },
            "-=0.45",
          )
          .from(
            ".wollo-hero-art",
            { y: 90, autoAlpha: 0, scale: 0.975, duration: 1.15 },
            "-=0.62",
          );

        gsap.to(".wollo-hero-art", {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: ".wollo-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-w-parallax]").forEach((el) => {
          const depth = Number(el.dataset.wParallax || 0);
          gsap.to(el, {
            yPercent: depth * -2.4,
            ease: "none",
            scrollTrigger: {
              trigger: ".wollo-art-scene",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        gsap.to(".wollo-scene-lines", {
          rotate: 6,
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: ".wollo-art-scene",
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
    <section id="top" ref={scope} className="wollo-hero">
      <div className="wollo-container">
        <div className="wollo-hero-copy">
          <h1 className="wollo-hero-title">
            <span className="wollo-line">
              <span>Maximize Your Social</span>
            </span>
            <span className="wollo-line">
              <span>Media Presence</span>
            </span>
          </h1>
          <p className="wollo-hero-sub">
            Plan, publish, and understand every post from one calm workspace.
          </p>
          <div className="wollo-hero-actions">
            <a className="wollo-btn wollo-btn-primary" href="/login">
              Start Free Trial
            </a>
            <a className="wollo-btn wollo-btn-outline" href="/login">
              Create Free Account
            </a>
          </div>
        </div>
      </div>

      <div className="wollo-hero-art-frame">
        <div className="wollo-hero-art">
          <div className="wollo-art-back wollo-art-back-yellow" aria-hidden="true" />
          <div className="wollo-art-back wollo-art-back-pink" aria-hidden="true" />

          <div className="wollo-art-scene wollo-grain">
            <svg
              className="wollo-scene-lines"
              viewBox="0 0 1200 700"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g fill="none" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.4">
                <circle cx="300" cy="430" r="210" />
                <circle cx="300" cy="430" r="278" />
                <circle cx="300" cy="430" r="346" />
                <path d="M0 558C210 488 368 596 586 542s362-164 614-126" />
                <path d="M-40 626C210 548 398 664 638 602s390-142 622-118" />
                <path d="M690 80c128 26 226 98 282 214" />
              </g>
              <g fill="#ffffff" fillOpacity="0.5">
                <circle cx="300" cy="220" r="2.6" />
                <circle cx="542" cy="332" r="2" />
                <circle cx="112" cy="522" r="3.2" />
                <circle cx="1024" cy="162" r="2.4" />
                <circle cx="878" cy="560" r="2" />
              </g>
            </svg>

            <div className="wollo-scene-sphere" data-w-parallax="3">
              <MascotSphere className="w-full" idPrefix="hero-sphere" />
            </div>

            <div className="wollo-scene-pencil" data-w-parallax="5">
              <PencilArt className="w-full" idPrefix="hero-pencil" />
            </div>

            <div className="wollo-scene-tablet" data-w-parallax="7">
              <ChatTablet className="w-full" idPrefix="hero-tablet" />
            </div>

            <div className="wollo-scene-heart" data-w-parallax="4">
              <HeartSculpture className="w-full" idPrefix="hero-heart" />
            </div>

            <div className="wollo-scene-orb" data-w-parallax="6">
              <OrbArt className="w-full" idPrefix="hero-orb" />
            </div>

            <div className="wollo-scene-cube-a" data-w-parallax="8">
              <CubeArt className="w-full" idPrefix="hero-cube-a" />
            </div>
            <div className="wollo-scene-cube-b" data-w-parallax="2">
              <CubeArt className="w-full" idPrefix="hero-cube-b" />
            </div>

            <div className="wollo-scene-spark" data-w-parallax="9">
              <SparkArt className="w-full" idPrefix="hero-spark" />
            </div>

            <div className="wollo-bubble wollo-bubble-white" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="wollo-bubble wollo-bubble-pink" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="wollo-scene-pill" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

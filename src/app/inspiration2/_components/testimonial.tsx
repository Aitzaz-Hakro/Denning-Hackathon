"use client";

import { useRef } from "react";
import { TESTIMONIAL } from "./content";
import { QuoteMark } from "./icons";
import { gsap, useGSAP } from "./motion";

export function Testimonial() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cs-testimonial-panel", {
          y: 34,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-testimonial-panel",
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
    <section
      id="testimonials"
      ref={scope}
      className="cs-testimonial-section"
    >
      <div className="cs-testimonial-panel">
        <div className="cs-testimonial-intro">
          <h2>Good company runs from one place.</h2>
          <p>
            Fewer handoffs, clearer numbers, and a team that can see the whole
            picture.
          </p>
        </div>

        <figure className="cs-testimonial-quote">
          <QuoteMark className="cs-quote-mark" />
          <blockquote>{TESTIMONIAL.quote}</blockquote>
          <figcaption>
            <span className="cs-quote-avatar" aria-hidden="true">
              ME
            </span>
            <span>
              <strong>{TESTIMONIAL.name}</strong>
              <span>{TESTIMONIAL.role}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

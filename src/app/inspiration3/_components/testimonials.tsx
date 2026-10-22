"use client";

import { useRef } from "react";
import { TESTIMONIALS } from "./content";
import { gsap, useGSAP } from "./motion";

export function Testimonials() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wollo-testimonials-title", {
          y: 30,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-testimonials-title",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".wollo-quote", {
          y: 42,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-quote-grid",
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
      className="wollo-section wollo-testimonials"
    >
      <div className="wollo-container">
        <h2 className="wollo-section-title wollo-testimonials-title">
          <span>See What Our Clients</span>
          <span>Have To Say!</span>
        </h2>

        <div className="wollo-quote-grid">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="wollo-quote">
              <span className="wollo-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

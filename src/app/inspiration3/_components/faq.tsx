"use client";

import { useRef, useState } from "react";
import { FAQS } from "./content";
import { ChevronDown } from "./icons";
import { gsap, useGSAP } from "./motion";

export function Faq() {
  const scope = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".wollo-faq-title", {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wollo-faq-title",
            start: "top 82%",
            once: true,
          },
        });

        gsap.from(".wollo-faq-item", {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".wollo-faq-list",
            start: "top 86%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section id="faq" ref={scope} className="wollo-section wollo-faq">
      <div className="wollo-container">
        <h2 className="wollo-section-title wollo-faq-title">
          <span>Frequently Asked</span>
          <span>Questions</span>
        </h2>

        <div className="wollo-faq-list">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            const answerId = `wollo-faq-answer-${index}`;
            const buttonId = `wollo-faq-button-${index}`;

            return (
              <div key={faq.question} className="wollo-faq-item" data-open={open}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className="wollo-faq-chevron" />
                  </button>
                </h3>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="wollo-faq-answer"
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "./content";
import { ChevronDown, CompsupsLogo, MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        frame.current = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="cs-header" data-scrolled={scrolled}>
      <div className="cs-header-inner">
        <a className="cs-header-logo" href="#top" aria-label="Compsups home">
          <CompsupsLogo />
        </a>

        <nav className="cs-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="cs-header-actions">
          <a className="cs-btn cs-btn-dark cs-btn-sm" href="#contact">
            Contact Us
          </a>
          <button
            type="button"
            className="cs-menu-button"
            aria-expanded={open}
            aria-controls="cs-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="cs-mobile-nav" id="cs-mobile-nav" data-open={open}>
        <div>
          <nav aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </a>
            ))}
          </nav>
          <div className="cs-mobile-actions">
            <a className="cs-btn cs-btn-dark" href="#contact" onClick={() => setOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

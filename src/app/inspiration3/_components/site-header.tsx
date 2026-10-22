"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "./content";
import { CloseIcon, MenuIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 18);
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
    <header className="wollo-header" data-scrolled={scrolled}>
      <div className="wollo-container">
        <div className="wollo-header-inner">
          <a className="wollo-wordmark" href="#top" aria-label="Wollo, back to top">
            wollo
          </a>

          <nav className="wollo-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="wollo-header-actions">
            <a className="wollo-login" href="/login">
              Log in
            </a>
            <a className="wollo-btn wollo-btn-dark wollo-btn-sm" href="/login">
              Start Free Trial
            </a>
            <button
              type="button"
              className="wollo-menu-button"
              aria-expanded={open}
              aria-controls="wollo-mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div id="wollo-mobile-nav" className="wollo-mobile-nav" data-open={open}>
          <div>
            <nav aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="wollo-mobile-actions">
              <a className="wollo-btn wollo-btn-ghost" href="/login">
                Log in
              </a>
              <a className="wollo-btn wollo-btn-dark" href="/login">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

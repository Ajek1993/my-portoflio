"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function MobileMenu({ links, cta, ctaHref, openLabel, closeLabel }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        className="flex size-10 items-center justify-center rounded-full border border-border-strong text-fg"
      >
        <Icon name={open ? "close" : "menu"} className="size-5" />
      </button>

      <nav
        id="mobile-menu"
        aria-label="Menu"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-border bg-bg/95 px-4 pb-6 backdrop-blur-md"
      >
        <ul className="flex flex-col py-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3.5 text-lg text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={ctaHref}
          onClick={() => setOpen(false)}
          className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-accent font-medium text-accent-ink sm:hidden"
        >
          <Icon name="mail" className="size-4" />
          {cta}
        </a>
      </nav>
    </div>
  );
}

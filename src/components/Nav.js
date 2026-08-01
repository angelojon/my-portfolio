"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact me" },
];

// Brass underline that wipes in from the left on hover. Focus is left alone —
// the global :focus-visible ring is already brass, and doubling it up would
// spend the brass budget twice on one element.
const LINK =
  "relative text-body-sm text-bottle transition-colors duration-200 hover:text-ink " +
  "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left " +
  "after:scale-x-0 after:bg-brass after:transition-transform after:duration-200 " +
  "after:content-[''] hover:after:scale-x-100";

/**
 * Sticky site nav.
 *
 * Opaque `linen` rather than translucent: the hero's display type scrolls
 * underneath, and letting it ghost through would compete with the one moment
 * the page is meant to be remembered by.
 *
 * Below `sm` the link row collapses to a disclosure panel. The trigger is a
 * word, not a hamburger — small uppercase Inter is already the micro-label
 * voice of the site, and it says what pressing it does.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // Escape closes the panel and hands focus back to the trigger, so keyboard
  // users don't get dropped at the top of the document.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Widening past `sm` hides the panel in CSS. Without this the state stays
  // true, and the trigger would read as expanded when the panel is long gone.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sage/30 bg-linen">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="font-serif text-xl leading-none text-ink transition-colors duration-200 hover:text-bottle"
        >
          Jon Angelo Macaldo
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={LINK}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="nav-menu"
          // 44px minimum on both axes — a 12px label alone is nowhere near a
          // thumb-sized target. -mr-3 pulls the extra box back off the optical
          // edge so the label still lines up with the container.
          className="-mr-3 inline-flex min-h-11 min-w-11 items-center justify-center px-3 font-sans text-eyebrow uppercase text-bottle transition-colors duration-200 hover:text-ink sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul
          id="nav-menu"
          className="border-t border-sage/30 px-4 pb-2 sm:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.href} className="border-b border-sage/20 last:border-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-body text-bottle transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

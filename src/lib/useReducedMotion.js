"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * True when the user has asked their OS to reduce motion.
 *
 * Starts false (the server can't know the preference) and corrects on mount.
 * That one-frame window is covered by the CSS rule for [data-motion="safe"] in
 * globals.css, so reduced-motion users never see a frame of hidden content.
 * Reacts to the setting being changed while the page is open.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    setReduced(mql.matches);

    const onChange = (event) => setReduced(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

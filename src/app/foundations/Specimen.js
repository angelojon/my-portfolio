"use client";

import { useEffect, useRef, useState } from "react";

function useComputedFontSize(ref) {
  const [px, setPx] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const read = () => {
      const size = parseFloat(getComputedStyle(el).fontSize);
      setPx(Math.round(size * 10) / 10);
    };

    read();
    const observer = new ResizeObserver(read);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, [ref]);

  return px;
}

/**
 * One row of the type scale: the token name and clamp() formula on the left, the
 * live rendered size, and the specimen itself. The size readout updates as the
 * window resizes so the clamp() endpoints can be checked by hand.
 */
export function TypeSpecimen({ token, formula, className, children }) {
  const ref = useRef(null);
  const px = useComputedFontSize(ref);

  return (
    <div className="border-t border-sage/30 py-6">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <code className="text-body-sm text-bottle">text-{token}</code>
        <span className="eyebrow">{px === null ? "—" : `${px}px`}</span>
        <code className="text-body-sm text-sage">{formula}</code>
      </div>
      <div ref={ref} className={className}>
        {children}
      </div>
    </div>
  );
}

/** Pinned readout of the viewport width, for checking the 375px floor. */
export function ViewportReadout() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const read = () => setWidth(window.innerWidth);
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-10 rounded-full bg-bottle px-4 py-2">
      <span className="eyebrow text-linen">
        {width === null ? "measuring" : `${width}px`}
      </span>
    </div>
  );
}

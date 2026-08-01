"use client";

import { useState } from "react";
import MotionSafe from "@/components/MotionSafe";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Proof that the reduced-motion utility works. Toggle "reduce motion" in the OS
 * and reload: the status line flips, and replaying does nothing — the elements
 * are already in their final state rather than fading in faster.
 */
export default function MotionCheck() {
  const reduced = useReducedMotion();
  const [run, setRun] = useState(0);

  return (
    <div>
      <p className="mb-6 text-body text-bottle">
        This machine currently reports{" "}
        <strong className="font-semibold">
          {reduced ? "reduce motion" : "no motion preference"}
        </strong>
        .
      </p>

      <div key={run} className="mb-8">
        <MotionSafe
          as="p"
          className="eyebrow mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Eyebrow
        </MotionSafe>

        <MotionSafe
          as="p"
          className="mb-4 font-serif text-display-md text-ink"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Jon Angelo Macaldo
        </MotionSafe>

        <MotionSafe
          className="mb-4 h-px bg-brass"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />

        <MotionSafe
          as="p"
          className="max-w-measure text-body text-bottle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
        >
          Eyebrow, name, a brass rule drawing itself, then body copy. Roughly
          900ms end to end.
        </MotionSafe>
      </div>

      <button
        type="button"
        onClick={() => setRun((n) => n + 1)}
        className="rounded-sm border border-bottle px-4 py-2 text-body-sm text-bottle transition-colors hover:bg-bottle hover:text-linen"
      >
        Replay the sequence
      </button>
    </div>
  );
}

"use client";

import { MotionConfig } from "motion/react";

/**
 * Backstop for any raw <motion.*> element that isn't wrapped in <MotionSafe>.
 * reducedMotion="user" makes motion honour the OS setting by itself.
 */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

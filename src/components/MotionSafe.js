"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

// Props that only mean something to motion. When motion is off they'd land on a
// plain DOM node and React would warn about unknown attributes, so drop them.
const MOTION_ONLY_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "variants",
  "transition",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView",
  "viewport",
  "layout",
  "layoutId",
  "layoutDependency",
  "layoutScroll",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "custom",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onViewportEnter",
  "onViewportLeave",
]);

/**
 * Wrap any animation in this instead of reaching for <motion.*> directly.
 *
 *   <MotionSafe as="h1" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
 *
 * When the user prefers reduced motion this renders a plain <h1> with the motion
 * props removed — the element is simply there, in its final state, immediately.
 * Nothing is faded, nothing is delayed, and no content is hidden waiting for an
 * animation that will never run.
 */
export default function MotionSafe({ as = "div", children, ...props }) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Tag = as;
    const safeProps = {};
    for (const key of Object.keys(props)) {
      if (!MOTION_ONLY_PROPS.has(key)) safeProps[key] = props[key];
    }
    return <Tag {...safeProps}>{children}</Tag>;
  }

  const Animated = motion[as] ?? motion.div;
  // data-motion="safe" lets the CSS floor in globals.css force the final state
  // during the first frame, before the media query result reaches React.
  return (
    <Animated data-motion="safe" {...props}>
      {children}
    </Animated>
  );
}

"use client";

import { cn } from "@/lib/utils";
import {
  type TargetAndTransition,
  type Transition,
  motion,
} from "motion/react";
import { useTime, useWindowSize } from "@/lib/hooks";

const fadeIn: {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function Time({ className }: { className?: string }) {
  const time = useTime();

  return (
    <motion.div
      className={cn("z-50 text-xs tracking-wider", className)}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      {time}
    </motion.div>
  );
}

export function ScreenSize({ className }: { className?: string }) {
  const { width, height } = useWindowSize();

  return (
    <motion.div
      className={cn(
        "fixed bottom-4 left-4 z-50 font-x text-gray-600 text-xs tracking-wider dark:text-gray-300",
        className,
      )}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      {width} x {height}
    </motion.div>
  );
}

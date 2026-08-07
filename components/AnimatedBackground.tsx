"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* Aurora Orbs using highly performant radial gradients instead of expensive CSS blur */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] h-[60vw] w-[60vw] opacity-[0.2] dark:opacity-[0.25] will-change-transform"
        style={{ background: "radial-gradient(circle, var(--pitch) 0%, transparent 60%)" }}
        animate={{
          x: ["0%", "15%", "-5%", "0%"],
          y: ["0%", "10%", "20%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-[20%] right-[-10%] h-[50vw] w-[50vw] opacity-[0.15] dark:opacity-[0.2] will-change-transform"
        style={{ background: "radial-gradient(circle, var(--data) 0%, transparent 60%)" }}
        animate={{
          x: ["0%", "-20%", "10%", "0%"],
          y: ["0%", "15%", "-10%", "0%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] left-[20%] h-[70vw] w-[70vw] opacity-[0.15] dark:opacity-[0.2] will-change-transform"
        style={{ background: "radial-gradient(circle, var(--pitchsoft) 0%, transparent 60%)" }}
        animate={{
          x: ["0%", "25%", "-15%", "0%"],
          y: ["0%", "-20%", "15%", "0%"],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>
  );
}

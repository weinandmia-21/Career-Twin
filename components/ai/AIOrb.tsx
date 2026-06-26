"use client";

import { motion } from "framer-motion";

type AIOrbProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-14 w-14",
  md: "h-24 w-24",
  lg: "h-40 w-40",
};

export default function AIOrb({
  size = "md",
}: AIOrbProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute rounded-full bg-cyan-400/20 blur-3xl ${sizes[size]}`}
      />

      {/* Middle glow */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl ${sizes[size]}`}
      />

      {/* Core */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`relative rounded-full bg-gradient-to-br from-cyan-200 via-cyan-400 to-sky-500 shadow-[0_0_70px_rgba(34,211,238,.35)] ${sizes[size]}`}
      />
    </div>
  );
}
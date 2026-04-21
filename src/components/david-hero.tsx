"use client";

import { motion } from "framer-motion";

export function DavidHero() {
  return (
    <section className="hero-section">
      {/* Floating Background Glow (Subtle) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--color-orange-400)] rounded-full blur-[120px] pointer-events-none"
      />

      {/* Hero Content Layer */}
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hero-content-inner flex flex-col justify-center items-start px-8 md:px-[8vw] z-10">
          {/* Slanted Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50, skewX: -15 }}
            animate={{ opacity: 1, x: 0, skewX: -15 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0, 0.25, 1] }}
            className="banner mb-4"
          >
            <span className="banner-copy">
              WEB DEVELOPER
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.6, 0, 0.25, 1] }}
              className="hero-title"
            >
              ASSolution
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.6, 0, 0.25, 1] }}
            className="text-[var(--color-text-300)] text-lg md:text-xl max-w-sm font-medium leading-relaxed"
          >
            Building high-performance digital experiences with precision and speed.
          </motion.p>
        </div>
        
        {/* Right side for 3D padding/balance */}
        <div className="hidden md:block pointer-events-none" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 flex flex-col items-start gap-4 text-[var(--color-text-300)] opacity-40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-text-400)] to-transparent" />
      </motion.div>
    </section>
  );
}

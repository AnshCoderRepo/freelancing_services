"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.body.style.overflow = "hidden";
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
            onComplete();
          }, 200);
          return 100;
        }
        // Random increment for a more "realistic" feel
        const increment = Math.floor(Math.random() * 5) +2;
        return Math.min(prevProgress + increment, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative flex items-center justify-center">
            {/* Animated Background Pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: 0.15 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute w-96 h-96 bg-[var(--bright-blue)] rounded-full blur-[120px]"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[15vw] font-bold text-white tracking-tighter tabular-nums selection:bg-transparent"
            >
              {progress}
              <span className="text-[5vw] font-light text-white/40 ml-2">%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

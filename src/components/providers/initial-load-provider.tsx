"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Preloader } from "@/components/preloader";
import { motion } from "framer-motion";

const LoadingContext = createContext({ isLoaded: true });

export const useLoading = () => useContext(LoadingContext);

export default function InitialLoadProvider({ children }: { children: React.ReactNode }) {
  const [shouldAnimateInitial, setShouldAnimateInitial] = useState<boolean | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const hasVisited = sessionStorage.getItem("portfolio_has_visited") === "true";
      if (hasVisited) {
        setShouldAnimateInitial(false);
        setIsLoaded(true);
      } else {
        setShouldAnimateInitial(true);
      }
    } catch {
      // Fallback if sessionStorage is disabled/inaccessible
      setShouldAnimateInitial(false);
      setIsLoaded(true);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("portfolio_has_visited", "true");
    } catch {
      // ignore
    }
    setIsLoaded(true);
  };

  // If already visited or still determining on mount, render children directly without preloader
  if (shouldAnimateInitial === false) {
    return (
      <LoadingContext.Provider value={{ isLoaded: true }}>
        <div className="w-full relative">{children}</div>
      </LoadingContext.Provider>
    );
  }

  // Initial SSR / hydration frame before checking session storage
  if (shouldAnimateInitial === null) {
    return (
      <LoadingContext.Provider value={{ isLoaded: true }}>
        <div className="w-full relative">{children}</div>
      </LoadingContext.Provider>
    );
  }

  return (
    <LoadingContext.Provider value={{ isLoaded }}>
      <Preloader onComplete={handleComplete} />
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.1, 
          clipPath: "circle(20px at 50% 50%)",
          filter: "blur(20px)" 
        }}
        animate={isLoaded ? { 
          opacity: 1, 
          scale: 1, 
          clipPath: "circle(150% at 50% 50%)",
          filter: "blur(0px)",
          transition: {
            duration: 2, 
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 1.5 },
            clipPath: { duration: 2, ease: [0.65, 0, 0.35, 1] },
            scale: { duration: 2, ease: [0.16, 1, 0.3, 1] }
          }
        } : {}}
        className="w-full relative origin-center"
      >
        {children}
      </motion.div>
    </LoadingContext.Provider>
  );
}

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Preloader } from "@/components/preloader";
import { motion, AnimatePresence } from "framer-motion";

const LoadingContext = createContext({ isLoaded: false });

export const useLoading = () => useContext(LoadingContext);

export default function InitialLoadProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoaded }}>
      <Preloader onComplete={() => setIsLoaded(true)} />
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

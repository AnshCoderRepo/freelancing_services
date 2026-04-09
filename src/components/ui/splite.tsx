'use client'

import { Suspense, lazy, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <Suspense 
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 animate-pulse rounded-3xl" />
        }
      >
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: isLoaded ? 1 : 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className={className}
        >
          <Spline
            scene={scene}
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </Suspense>
    </div>
  )
}

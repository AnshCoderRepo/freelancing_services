'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'
import Link from 'next/link'

const SpiralEnter = () => {
  const [buttonVisible, setButtonVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonVisible(true)
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-black rounded-[32px] my-12 border border-white/5 group">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
        <SpiralAnimation />
      </div>

      {/* Enter Button Link */}
      <div className={`
        absolute inset-0 z-10 flex flex-col items-center justify-center gap-4
        transition-all duration-1000
        ${buttonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}>
        <p className="text-white/40 text-sm tracking-[0.4em] uppercase font-light">Explore the Vision</p>
        <Link 
          href="/about"
          className="
            text-white text-3xl md:text-4xl tracking-[0.4em] uppercase font-extralight
            transition-all duration-700 p-8 group/btn
          "
        >
          <span className="relative inline-block hover:tracking-[0.6em] transition-all duration-500">
            开始
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover/btn:w-full transition-all duration-500"></span>
          </span>
          <div className="mt-4 text-[10px] tracking-[0.8em] text-white/30 animate-pulse text-center">ENTER</div>
        </Link>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </div>
  )
}

export {SpiralEnter}

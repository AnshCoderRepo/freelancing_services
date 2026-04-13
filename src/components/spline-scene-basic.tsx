'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[400px] md:h-[570px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="mb-6 opacity-80">
            <Image 
              src="/freelancing_logo.png" 
              alt="Main Logo" 
              width={200} 
              height={100} 
              className="h-16 w-auto object-contain" 
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            ASSolutions
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg text-lg">
            Inspired by Technology & Driven by Innovation.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Right content - Replaced Spline with Static Image */}
        <div className="flex-1 relative flex items-center justify-center p-4">
          <div className="relative w-full h-[300px] md:h-[450px]">
            <Image
              src="/hero_ai_robot_minimal_1776118762179.png"
              alt="Future Tech"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  )
}


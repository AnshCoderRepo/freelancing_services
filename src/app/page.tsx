"use client";

import dynamic from "next/dynamic";

import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { OptimisticNewsletter } from "@/components/newsletter-form";
import { Suspense } from "react";
import { PortfolioFolderSection } from "@/components/ui/3d-folder";

const FocusRail = dynamic(() => import("@/components/ui/focus-rail").then(mod => mod.FocusRail), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-black/10 animate-pulse" />
});
import { TIMELINE_DATA } from "@/data/timeline";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const StackedCircularFooterDemo = dynamic(() => import("@/components/ui/stacked-circular-footer-demo").then(mod => mod.StackedCircularFooterDemo), {
  ssr: false
});

import { FOCUS_RAIL_ITEMS } from "@/data/portfolio";
import { DavidHero } from "@/components/david-hero";
import { SpiralEnter } from "@/components/ui/spiral-enter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f7] dark:bg-black overflow-x-hidden">
      <main className="flex flex-1 flex-col items-center justify-start w-full p-0">
        
        {/* New David Hckh Inspired Hero Section */}
        <DavidHero />

        {/* Spiral Enter Section (Links to /about) */}
        <section className="w-full px-4 md:px-6">
          <SpiralEnter />
        </section>


        {/* Orbital Timeline - High Performance Interactive Replacement */}
        <RadialOrbitalTimeline timelineData={TIMELINE_DATA} />

        {/* Interactive Gallery - Dark Section */}
        <section id="projects" className="w-full bg-black text-white py-24 md:py-32 flex flex-col items-center px-4 md:px-6">
          <div className="w-full max-w-[980px] text-center mb-16 px-6">
            <h2 className="text-[40px] md:text-[56px] apple-display mb-4 tracking-tighter">
              Built <span className="text-apple-blue italic">for Performance.</span>
            </h2>
            <p className="text-[#86868b] text-[17px] md:text-[21px] font-normal max-w-2xl mx-auto">
              Explore primary architectural works through high-performance focus rails.
            </p>
          </div>
          <div className="w-full">
            <Suspense fallback={<div className="h-[600px] bg-white/5 animate-pulse" />}>
              <FocusRail items={FOCUS_RAIL_ITEMS} autoPlay={false} loop={true} />
            </Suspense>
          </div>
        </section>

        {/* Service Deep Dive - Interactive Folder Showcase Restored */}
        <PortfolioFolderSection />


        {/* Newsletter - Light Tone */}
        <section className="w-full bg-[#fafafc] py-24 flex flex-col items-center px-4 md:px-6">
           <div className="w-full max-w-[600px]">
             <OptimisticNewsletter />
           </div>
        </section>

        <footer className="w-full py-12 bg-[#f5f5f7] border-t border-black/5 text-center px-6">
          <p className="text-[12px] text-[#86868b] font-normal tracking-tight">
            ASSolution &copy; 2026 • Optimized for speed and precision.
          </p>
        </footer>
      </main>

      {/* Social / Testimonials Section */}
      <section className="w-full bg-white border-t border-black/5">
        <TestimonialsSection />
      </section>

      <Suspense fallback={<div className="h-64 bg-black/10" />}>
        <StackedCircularFooterDemo />
      </Suspense>
    </div>
  )
}



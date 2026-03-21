"use client";

import dynamic from "next/dynamic";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";
import { PortfolioFolderSection } from "@/components/ui/3d-folder";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { Suspense } from "react";

// Lazy load heavy components for better initial loading time
const SplineSceneBasic = dynamic(() => import("@/components/spline-scene-basic").then(mod => mod.SplineSceneBasic), {
  ssr: false,
  loading: () => <div className="h-[570px] w-full bg-black/20 animate-pulse rounded-3xl" />
});

const HeroScrollDemo = dynamic(() => import("@/components/hero-scroll-demo").then(mod => mod.HeroScrollDemo), {
  ssr: false
});

const FocusRail = dynamic(() => import("@/components/ui/focus-rail").then(mod => mod.FocusRail), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-black/10 animate-pulse" />
});

const StackedCircularFooterDemo = dynamic(() => import("@/components/ui/stacked-circular-footer-demo").then(mod => mod.StackedCircularFooterDemo), {
  ssr: false
});

import type { FocusRailItem } from "@/components/ui/focus-rail";

const FOCUS_RAIL_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "SCOPE Platform",
    description: "Architected a MERN-based LMS platform with Razorpay and secure JWT auth for 1,000+ users.",
    meta: "Full Stack • Fintech",
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    href: "#scope",
  },
  {
    id: 2,
    title: "ChatX AI Suite",
    description: "Developed a real-time AI chat ecosystem with three custom OpenAI-powered bot personalities.",
    meta: "AI • Real-time",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    href: "#chatx",
  },
  {
    id: 3,
    title: "REFLECTO Dashboard",
    description: "Engineered high-performance enterprise feedback systems with 3D visualizations and Docker.",
    meta: "Systems • 3D",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    href: "#reflecto",
  },
  {
    id: 4,
    title: "LV Prasad Eye Inst.",
    description: "Optimized patient UI and built health recommendation systems improving efficiency by 30%.",
    meta: "Health • Internship",
    imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
    href: "#lvp",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black overflow-x-hidden">
      <main className="flex flex-1 flex-col items-center justify-start gap-12 md:gap-32 w-full p-0">
        
        {/* Hero Section */}
        <section className="w-full max-w-7xl pt-24 pb-12 px-4 md:px-8">
          <Suspense fallback={<div className="h-[570px] bg-black/20 rounded-3xl" />}>
            <SplineSceneBasic />
          </Suspense>
        </section>

        {/* Profile Block */}
        <section className="w-full max-w-7xl px-4 md:px-8">
          <GlassmorphismPortfolioBlock />
        </section>

        {/* Projects Rail */}
        <section className="w-full pb-20">
          <div className="mb-12 text-center px-6">
             <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-neutral-500 mb-4 block">Interactive Gallery</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4">
              Built <span className="text-primary italic">for Performance</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Explore my primary architectural works through the focus rail. Use your wheel or swipe to navigate.
            </p>
          </div>
          <Suspense fallback={<div className="h-[600px] bg-black/10" />}>
            <FocusRail items={FOCUS_RAIL_ITEMS} autoPlay={false} loop={true} />
          </Suspense>
        </section>

        {/* 3D Folder Section */}
        <section className="w-full bg-neutral-900/5 dark:bg-zinc-900/10 py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <PortfolioFolderSection />
          </div>
        </section>

        {/* Scroll Showcase */}
        <section className="w-full max-w-7xl py-12 md:py-32 px-4 md:px-8">
           <Suspense fallback={<div className="h-[800px] bg-black/10" />}>
            <HeroScrollDemo />
           </Suspense>
        </section>
        
        <div className="pb-24 text-center">
           <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            Ansh Adarsh &copy; 2026 • Crafted with precision
          </p>
        </div>
      </main>

      {/* Social / Testimonials Section */}
      <section className="w-full border-t border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl">
        <TestimonialsSection />
      </section>

      <Suspense fallback={<div className="h-64 bg-black/10" />}>
        <StackedCircularFooterDemo />
      </Suspense>
    </div>
  );
}

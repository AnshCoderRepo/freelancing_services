"use client";

import dynamic from "next/dynamic";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";

import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { OptimisticNewsletter } from "@/components/newsletter-form";
import { FlagshipProjectSection } from "@/components/flagship-project-section";
import { Suspense } from "react";
import { SimpleServices } from "@/components/simple-services";

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
    <div className="flex flex-col min-h-screen bg-[#f5f5f7] dark:bg-black overflow-x-hidden">
      <main className="flex flex-1 flex-col items-center justify-start w-full p-0 pt-20">
        
        {/* Profile Insight - Light Section */}
        <section id="about" className="w-full bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32 flex flex-col items-center px-4 md:px-6">
          <div className="w-full max-w-[980px]">
            <GlassmorphismPortfolioBlock />
          </div>
        </section>

        {/* Flagship Product Showcase - High Performance Replacement */}
        <FlagshipProjectSection />

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

        {/* Service Deep Dive - Lightweight Replacement */}
        <section id="details" className="w-full">
           <SimpleServices />
        </section>

        {/* Newsletter - Light Tone */}
        <section className="w-full bg-[#fafafc] py-24 flex flex-col items-center px-4 md:px-6">
           <div className="w-full max-w-[600px]">
             <OptimisticNewsletter />
           </div>
        </section>

        <footer className="w-full py-12 bg-[#f5f5f7] border-t border-black/5 text-center px-6">
          <p className="text-[12px] text-[#86868b] font-normal tracking-tight">
            Ansh Adarsh &copy; 2026 • Optimized for speed and precision.
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



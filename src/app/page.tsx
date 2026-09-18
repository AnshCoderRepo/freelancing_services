"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { DavidHero } from "@/components/david-hero";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { TIMELINE_DATA } from "@/data/timeline";
import { FOCUS_RAIL_ITEMS } from "@/data/portfolio";
import { PortfolioFolderSection } from "@/components/ui/3d-folder";
import { BucketSection } from "@/components/bucket-section";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { OptimisticNewsletter } from "@/components/newsletter-form";

const FocusRail = dynamic(
  () => import("@/components/ui/focus-rail").then((mod) => mod.FocusRail),
  {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-black/10 animate-pulse" />,
  }
);

const StackedCircularFooterDemo = dynamic(
  () =>
    import("@/components/ui/stacked-circular-footer-demo").then(
      (mod) => mod.StackedCircularFooterDemo
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <main className="flex flex-1 flex-col items-center justify-start w-full p-0">
        
        {/* 1. Hero Section & Interactive Terminal */}
        <section id="hero" className="w-full">
          <DavidHero />
        </section>

        {/* 2. Comprehensive About & Engineering Philosophy */}
        <AboutSection />

        {/* 3. Interactive Skills Circuit Ecosystem */}
        <SkillsSection />

        {/* 4. Dedicated Work Experience Breakdown */}
        <ExperienceSection />

        {/* 5. Interactive Orbital Timeline (Experience & Milestones) */}
        <section id="timeline" className="w-full">
          <RadialOrbitalTimeline timelineData={TIMELINE_DATA} />
        </section>

        {/* 4. Production Projects Showcase */}
        <section
          id="projects"
          className="w-full bg-black text-white py-24 md:py-32 flex flex-col items-center px-4 md:px-6 border-t border-white/10"
        >
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

        {/* 5. Interactive 3D Portfolio Folders */}
        <section className="w-full">
          <PortfolioFolderSection />
        </section>

        {/* 6. Engineering Excellence / Capabilities */}
        <section id="expertise" className="w-full">
          <BucketSection />
        </section>

        {/* 7. Social Proof & Testimonials */}
        <section id="testimonials" className="w-full bg-black border-t border-white/10">
          <TestimonialsSection />
        </section>

        {/* 8. Newsletter & Contact Section */}
        <section id="contact" className="w-full bg-[#0a0a0a] py-24 flex flex-col items-center px-4 md:px-6 border-t border-white/10">
          <div className="w-full max-w-[600px]">
            <OptimisticNewsletter />
          </div>
        </section>

        {/* Footer info bar */}
        <footer className="w-full py-12 bg-black border-t border-white/10 text-center px-6">
          <p className="text-[12px] text-[#86868b] font-normal tracking-tight font-mono">
            Ansh Adarsh &copy; 2026 • Optimized for speed and precision.
          </p>
        </footer>
      </main>

      {/* Interactive Stacked Circular Visual Footer */}
      <Suspense fallback={<div className="h-64 bg-black/10" />}>
        <StackedCircularFooterDemo />
      </Suspense>
    </div>
  );
}

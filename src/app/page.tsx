import dynamic from "next/dynamic";
import { Suspense } from "react";
import { DavidHero } from "@/components/david-hero";
import { AboutSection } from "@/components/about-section";
import { FOCUS_RAIL_ITEMS } from "@/data/portfolio";
import { SimpleContactFooter } from "@/components/simple-contact-footer";

const SkillsSection = dynamic(
  () => import("@/components/skills-section").then((mod) => mod.SkillsSection),
  {
    loading: () => <div className="h-[400px] w-full bg-white/5 animate-pulse" />,
  }
);

const ExperienceSection = dynamic(
  () => import("@/components/experience-section").then((mod) => mod.ExperienceSection),
  {
    loading: () => <div className="h-[500px] w-full bg-white/5 animate-pulse" />,
  }
);

const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  {
    loading: () => <div className="h-[600px] w-full bg-white/5 animate-pulse" />,
  }
);

const FocusRail = dynamic(
  () => import("@/components/ui/focus-rail").then((mod) => mod.FocusRail),
  {
    loading: () => <div className="h-[600px] w-full bg-black/10 animate-pulse" />,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/ui/testimonial-v2").then((mod) => mod.TestimonialsSection),
  {
    loading: () => <div className="h-[400px] w-full bg-white/5 animate-pulse" />,
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
          <RadialOrbitalTimeline />
        </section>

        {/* 4. Production Projects Showcase (Single Projects Section) */}
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

        {/* 5. Social Proof & Testimonials */}
        <section id="testimonials" className="w-full bg-black border-t border-white/10">
          <TestimonialsSection />
        </section>

      </main>

      {/* Direct Contact & Simple Footer */}
      <SimpleContactFooter />
    </div>
  );
}

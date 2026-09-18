"use client";

import React from "react";
import { Briefcase, Laptop } from "lucide-react";
import MacbookMockup from "@/components/ui/great-ui-macbook-mockup";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-24 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRODUCTION TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Work <span className="text-apple-blue italic">Experience.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interactive engineering workspace showcasing production deliverables, verification threads, and downloadable credentials.
          </p>
        </div>

        {/* Interactive MacBook Mockup Showcase */}
        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
            <Laptop className="w-3.5 h-3.5 text-cyan-400" />
            <span>Live Engineering Workspace & Credential Verification</span>
          </div>

          <div className="w-full max-w-5xl flex justify-center">
            <MacbookMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

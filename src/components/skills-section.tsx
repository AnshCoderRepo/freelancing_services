"use client";

import React from "react";
import { IntegrationCard, SkillsIntegrationCircuit } from "@/components/ui/integration-card";
import { Code2, Sparkles, Cpu, Layers, Database, Globe } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE COMPETENCIES & ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Technical <span className="text-apple-blue italic">Skills & Architecture.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Connected interactive circuit of languages, frameworks, databases, and DevOps tools engineered for scale.
          </p>
        </div>

        {/* Integration Card Showcase */}
        <div className="w-full flex justify-center">
          <IntegrationCard
            visual={<SkillsIntegrationCircuit />}
            title="Production-Proven Tech Matrix"
            description="Deep proficiency shipping full-stack applications with React 19, Next.js 16, TypeScript, Node.js, and containerized microservices."
            url="#projects"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

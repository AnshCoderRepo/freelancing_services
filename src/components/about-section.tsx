"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Database,
  Globe,
} from "lucide-react";
import { BRANDING, HIGHLIGHTS, SOCIAL_LINKS } from "@/data/branding";

export function AboutSection() {
  const PILLARS = [
    {
      icon: Layers,
      title: "Full-Stack Architecture",
      description: "Designing end-to-end web platforms in Next.js 16 & React 19 with type-safe APIs and optimized server-side rendering.",
      tag: "Next.js • TypeScript",
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
    },
    {
      icon: Cpu,
      title: "Scalable Backend Systems",
      description: "Building resilient microservices and REST endpoints in Node.js/Express with robust authentication and race-condition handling.",
      tag: "Node.js • Express • Docker",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    },
    {
      icon: Database,
      title: "Data & Cloud Infrastructure",
      description: "Schema design, query tuning, and index optimization across PostgreSQL and MongoDB databases, tested up to 1,000+ concurrent users.",
      tag: "PostgreSQL • MongoDB",
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
    },
    {
      icon: Globe,
      title: "Production Performance",
      description: "Consistently achieving 100/100 Lighthouse Web Vitals, sub-second TTFB, and cutting LCP by 35% through component modularity.",
      tag: "100/100 Vitals • SEO Boost",
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT & ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Crafting Scalable Code, <span className="text-apple-blue italic">Pixel by Pixel.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am a Software Development Engineer passionate about building scalable, high-performance web systems and intuitive user interfaces with modern full-stack technologies.
          </p>
        </div>

        {/* 2-Column Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bio & Track Record */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 space-y-6 shadow-2xl">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span>{BRANDING.name}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-mono font-semibold">
                    Available for SDE Roles
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  {BRANDING.role} • LIET Greater Noida (CGPA: 8.4)
                </p>
              </div>

              <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  As an SDE Intern at <strong className="text-white">Euroasiann</strong>, I engineered production marketing and corporate web platforms with Next.js, cutting initial page load times by 2 seconds and lowering First Contentful Paint by 35%.
                </p>
                <p>
                  Prior to Euroasiann, I served as a Data Science Intern at the <strong className="text-white">LV Prasad Eye Institute</strong>, where I redesigned the patient appointment portal and implemented recommendation algorithms that streamlined scheduling pathways.
                </p>
                <p>
                  I hold a B.Tech in Computer Science Engineering (2021–2025) with certified credentials in <strong className="text-cyan-300">Microsoft AI on Azure</strong> and <strong className="text-indigo-300">Coursera Java Programming</strong>.
                </p>
              </div>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono block">500+</span>
                  <span className="text-[10px] text-slate-400 block font-medium">DSA Solved</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-lg sm:text-xl font-bold text-emerald-400 font-mono block">100%</span>
                  <span className="text-[10px] text-slate-400 block font-medium">Lighthouse</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-lg sm:text-xl font-bold text-purple-400 font-mono block">8.4</span>
                  <span className="text-[10px] text-slate-400 block font-medium">B.Tech CGPA</span>
                </div>
              </div>

              {/* Action Jump Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all duration-300 shadow-lg"
                >
                  <span>Connect Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white/40 font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group space-y-3 shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br border ${pillar.color} shadow-sm`}>
                        <IconComp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {pillar.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Highlights Bar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-cyan-950/40 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-white font-bold block">Verified Certifications</span>
                  <span className="text-slate-400">Microsoft AI on Azure (2024) • Coursera Java Programming (2025)</span>
                </div>
              </div>
              <a
                href="#timeline"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0 font-medium"
              >
                <span>Full Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

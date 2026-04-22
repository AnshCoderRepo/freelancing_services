"use client";
import React from "react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Wrench, 
  Server, 
  Github, 
  Layout,
  Cpu
} from "lucide-react";

export function RadarSection() {
  return (
    <section className="w-full bg-black py-24 overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-[980px] text-center mb-16 px-6">
        <h2 className="text-[40px] md:text-[56px] apple-display mb-4 tracking-tighter text-white">
          Full Spectrum <span className="text-apple-blue italic">Capabilities.</span>
        </h2>
        <p className="text-[#86868b] text-[17px] md:text-[21px] font-normal max-w-2xl mx-auto">
          Scanning through our technical ecosystem to deliver end-to-end digital excellence.
        </p>
      </div>

      <div className="relative flex h-[500px] w-full max-w-3xl flex-col items-center justify-center space-y-4 px-4">
        {/* Row 1 */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Web Development"
              delay={0.2}
              icon={<Code2 className="h-6 w-6 text-slate-400" />}
            />
            <IconContainer
              delay={0.4}
              text="Mobile Apps"
              icon={<Smartphone className="h-6 w-6 text-slate-400" />}
            />
            <IconContainer
              text="Design Systems"
              delay={0.3}
              icon={<Palette className="h-6 w-6 text-slate-400" />}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Maintenance"
              delay={0.5}
              icon={<Wrench className="h-6 w-6 text-slate-400" />}
            />
            <IconContainer
              text="Server Infrastructure"
              delay={0.8}
              icon={<Server className="h-6 w-6 text-slate-400" />}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="GitHub CI/CD"
              icon={<Github className="h-6 w-6 text-slate-400" />}
            />
            <IconContainer
              delay={0.7}
              text="CMS Architecture"
              icon={<Layout className="h-6 w-6 text-slate-400" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </section>
  );
}

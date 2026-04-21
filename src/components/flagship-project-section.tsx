"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Shield, Zap, Globe, Sparkles, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FlagshipProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="flagship" ref={containerRef} className="relative w-full h-[90vh] bg-black flex flex-col items-center justify-center px-4 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-[980px] flex flex-col items-center text-center space-y-12"
      >
        <div className="space-y-4">
          <p className="text-[#f5f5f7] text-[17px] font-semibold tracking-tight">Our latest breakthrough.</p>
          <h2 className="text-[56px] md:text-[80px] apple-display text-white tracking-tighter">
            NEXUS <span className="italic">OS.</span>
          </h2>
          <p className="text-[#86868b] text-[21px] md:text-[24px] font-normal max-w-2xl mx-auto">
            A revolutionary AI-driven workspace designed for the next generation of creative professionals. 
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Button className="apple-pill-button bg-apple-blue hover:bg-[#0077ed] text-white text-[17px] h-auto py-3 px-8 font-normal shadow-none">
            Learn more
          </Button>
          <button className="flex items-center text-apple-blue hover:underline text-[17px] md:text-[21px] font-normal group">
            Explore case study
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Hero Image - Sculptural */}
        <div className="relative w-full aspect-[16/9] mt-12 rounded-[24px] overflow-hidden">
           <Image 
            src="/flagship_project_ui_1775934120167.png" 
            alt="Nexus OS Preview" 
            fill
            className="object-cover"
            priority
           />
           {/* Subtle bottom fade to blend with black */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </motion.div>
    </section>
  );
}



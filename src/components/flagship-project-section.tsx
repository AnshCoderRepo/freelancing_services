"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Shield, Zap, Globe, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FlagshipProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full px-4 md:px-8">
      {/* Sticky container */}
      <div className="sticky top-24 md:top-32 flex h-[80vh] items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="relative w-full max-w-7xl rounded-[40px] border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-950/80 p-1 backdrop-blur-3xl shadow-2xl"
        >
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-12 items-center">
            
            {/* Left: Project Details */}
            <motion.div 
               style={{ y }}
               className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/30 bg-primary/10 text-primary-foreground/80 tracking-[0.2em] uppercase text-[10px] font-bold">
                  Flagship Project
                </Badge>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white">
                  NEXUS <span className="text-primary italic">OS</span>
                </h2>
                <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed">
                  A revolutionary AI-driven operating system designed for the next generation of creative professionals. 
                </p>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-2 gap-6">
                 <div className="flex items-start gap-3">
                   <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                     <Zap className="w-5 h-5 text-yellow-500" />
                   </div>
                   <div>
                     <h4 className="text-zinc-900 dark:text-white font-bold text-sm">Real-time</h4>
                     <p className="text-xs text-neutral-500">Latency-free Sync</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                     <Shield className="w-5 h-5 text-blue-500" />
                   </div>
                   <div>
                     <h4 className="text-zinc-900 dark:text-white font-bold text-sm">Secure</h4>
                     <p className="text-xs text-neutral-500">End-to-end Auth</p>
                   </div>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 rounded-2xl gap-2 font-bold uppercase tracking-widest text-xs group shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)]">
                  Explore Case Study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 font-bold uppercase tracking-widest text-xs text-zinc-900 dark:text-white">
                  Live Preview
                </Button>
              </div>
            </motion.div>

            {/* Right: Project Visual */}
            <div className="relative aspect-square lg:aspect-auto h-full min-h-[350px] md:min-h-[450px] rounded-[32px] overflow-hidden border border-zinc-200 dark:border-white/5 shadow-inner">
               <Image 
                src="/flagship_project_ui_1775934120167.png" 
                alt="Nexus OS Preview" 
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 font-bold"
               />
               
               {/* Floating elements for "Impact" */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-12 right-12 p-4 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-zinc-200 dark:border-white/10 shadow-2xl hidden md:block"
               >
                 <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-widest uppercase">Global Scale</span>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-12 left-12 p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/20 shadow-2xl hidden md:block"
               >
                 <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-xs font-bold text-white tracking-widest uppercase">AI Powered</span>
                 </div>
               </motion.div>

               {/* Gradient overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}


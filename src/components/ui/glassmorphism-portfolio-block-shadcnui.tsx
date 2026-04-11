"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  ChevronRight,
} from "lucide-react";

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: Briefcase,
    title: "Current Role",
    description:
      "Software Engineer at EUROASIANN — leading the Web Tech Team to build full-stack portfolio platforms with Next.js, ShadcnUI, and modular components.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "B.Tech from Lloyd Institute of Engineering & Technology (GPA: 8.25 / 10.00) · Graduated May 2025 · Greater Noida, UP",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    description:
      "Java · JavaScript · Python · C++ · TypeScript · React · Next.js · Node.js · Express.js · MongoDB · PostgreSQL · Docker · Vue.js · REST APIs",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Full Stack Development — LIET  ·  Java Development — LIET",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "Ansh-Adarsh",
    href: "https://linkedin.com/in/Ansh-Adarsh",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "AnshCoderRepo",
    href: "https://github.com/AnshCoderRepo",
    icon: Github,
  },
  {
    label: "Email",
    handle: "anshk1126@gmail.com",
    href: "mailto:anshk1126@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    handle: "+91-7070410031",
    href: "tel:+917070410031",
    icon: Phone,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column: Copy */}
        <div className="space-y-12">
           <div className="space-y-6">
             <h2 className="text-[40px] md:text-[56px] apple-display text-[#1d1d1f] tracking-tighter leading-[1.07]">
               Ansh Adarsh. <br/>
               <span className="text-[#86868b]">Software Engineer.</span>
             </h2>
             <p className="text-[17px] md:text-[19px] text-[#1d1d1f] leading-[1.47] font-normal max-w-lg">
               Full-stack engineer passionate about architecting scalable platforms and crafting exceptional user experiences. Currently leading Web Tech at EUROASIANN — building with Next.js and end-to-end development workflows.
             </p>
           </div>

           <div className="grid sm:grid-cols-2 gap-8">
             {highlights.map((item) => {
               const Icon = item.icon;
               return (
                 <div key={item.title} className="space-y-3">
                    <div className="flex items-center gap-2">
                       <Icon className="h-5 w-5 text-[#86868b]" />
                       <span className="text-[14px] font-semibold uppercase tracking-widest text-[#86868b]">{item.title}</span>
                    </div>
                    <p className="text-[14px] text-[#1d1d1f] font-normal leading-relaxed opacity-80">
                      {item.description}
                    </p>
                 </div>
               );
             })}
           </div>

           <div className="flex flex-wrap gap-6 items-center pt-4">
              <Button className="apple-pill-button bg-apple-blue hover:bg-[#0077ed] text-white text-[17px] h-auto py-3 px-8 font-normal shadow-none">
                Get in touch
              </Button>
              <a href="#" className="flex items-center gap-1 text-apple-blue hover:underline text-[17px] font-normal">
                View curriculum vitae <ChevronRight size={18} />
              </a>
           </div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="relative">
           {/* Sculpture-like Profile Card */}
           <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto bg-white rounded-[24px] shadow-[rgba(0,0,0,0.1)_0px_20px_50px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] to-white" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center space-y-8">
                 {/* Avatar */}
                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-inner">
                    <span className="text-4xl font-bold text-white tracking-widest">AA</span>
                 </div>
                 
                 <div className="space-y-2">
                    <h3 className="text-[24px] font-semibold text-[#1d1d1f]">Ansh Adarsh</h3>
                    <p className="text-[14px] font-medium text-[#86868b] uppercase tracking-[0.2em]">Full-Stack Developer</p>
                 </div>

                 {/* Social links as small icons */}
                 <div className="flex gap-6">
                    {socialLinks.map((social) => {
                      const SocialIcon = social.icon;
                      return (
                        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-apple-blue transition-colors">
                           <SocialIcon size={20} />
                        </a>
                      );
                    })}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}


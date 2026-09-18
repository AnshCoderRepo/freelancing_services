"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useCallback, type MouseEvent, type ReactNode } from "react";
import HeroTerminal from "@/components/hero-terminal";

const TECH_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Java",
  "Python",
  "C++",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "REST APIs",
];

/* ─── Floating wireframe shapes ─── */
function FloatingShapes({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const shapes = useMemo(
    () => [
      { type: "cube", x: "75%", y: "20%", size: 60, rotSpeed: 25, delay: 0, depth: 0.3 },
      { type: "octa", x: "85%", y: "55%", size: 45, rotSpeed: 18, delay: 2, depth: 0.5 },
      { type: "ring", x: "70%", y: "70%", size: 80, rotSpeed: 30, delay: 1, depth: 0.2 },
      { type: "triangle", x: "88%", y: "35%", size: 35, rotSpeed: 22, delay: 3, depth: 0.4 },
      { type: "diamond", x: "65%", y: "45%", size: 50, rotSpeed: 20, delay: 1.5, depth: 0.35 },
      { type: "ring", x: "80%", y: "15%", size: 30, rotSpeed: 35, delay: 0.5, depth: 0.15 },
    ],
    []
  );

  const px = useTransform(mouseX, [-1, 1], [-15, 15]);
  const py = useTransform(mouseY, [-1, 1], [-10, 10]);
  const spx = useSpring(px, { stiffness: 60, damping: 20 });
  const spy = useSpring(py, { stiffness: 60, damping: 20 });

  const cubeSvg = (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none">
        <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="15" y1="30" x2="85" y2="70" />
        <line x1="85" y1="30" x2="15" y2="70" />
        <polygon points="50,10 85,30 50,50 15,30" fill="rgba(255,255,255,0.02)" />
      </g>
    </svg>
  );

  const octaSvg = (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g stroke="rgba(96,165,250,0.15)" strokeWidth="1" fill="none">
        <polygon points="50,5 80,30 80,70 50,95 20,70 20,30" />
        <line x1="50" y1="5" x2="50" y2="95" />
        <line x1="20" y1="30" x2="80" y2="70" />
        <line x1="80" y1="30" x2="20" y2="70" />
        <ellipse cx="50" cy="50" rx="30" ry="20" strokeDasharray="4 4" />
      </g>
    </svg>
  );

  const ringSvg = (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="30" strokeDasharray="6 6" />
        <circle cx="50" cy="50" r="20" strokeDasharray="3 3" />
        <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="2 4" />
        <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="2 4" />
      </g>
    </svg>
  );

  const triSvg = (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g stroke="rgba(139,92,246,0.15)" strokeWidth="1" fill="none">
        <polygon points="50,8 90,85 10,85" />
        <line x1="50" y1="8" x2="50" y2="85" strokeDasharray="3 3" />
        <polygon points="50,25 75,72 25,72" strokeDasharray="4 4" />
      </g>
    </svg>
  );

  const diamondSvg = (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g stroke="rgba(6,182,212,0.15)" strokeWidth="1" fill="none">
        <polygon points="50,5 90,50 50,95 10,50" />
        <line x1="50" y1="5" x2="50" y2="95" />
        <line x1="10" y1="50" x2="90" y2="50" />
        <polygon points="50,20 75,50 50,80 25,50" fill="rgba(6,182,212,0.03)" />
      </g>
    </svg>
  );

  const svgMap: Record<string, ReactNode> = {
    cube: cubeSvg,
    octa: octaSvg,
    ring: ringSvg,
    triangle: triSvg,
    diamond: diamondSvg,
  };

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {shapes.map((s, i) => (
        <FloatingShapeItem key={i} shape={s} spx={spx} spy={spy} svgMap={svgMap} />
      ))}
    </div>
  );
}

function FloatingShapeItem({
  shape,
  spx,
  spy,
  svgMap,
}: {
  shape: { type: string; x: string; y: string; size: number; rotSpeed: number; delay: number; depth: number };
  spx: any;
  spy: any;
  svgMap: Record<string, ReactNode>;
}) {
  const depthFactor = shape.depth * 2;
  const x = useTransform(spx, (v: number) => v * depthFactor);
  const y = useTransform(spy, (v: number) => v * depthFactor);

  return (
    <motion.div
      style={{
        left: shape.x,
        top: shape.y,
        width: shape.size,
        height: shape.size,
        x,
        y,
        perspective: 800,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        y: [0, -20, 0],
      }}
      transition={{
        rotateX: { duration: shape.rotSpeed, repeat: Infinity, ease: "linear" },
        rotateY: { duration: shape.rotSpeed * 1.3, repeat: Infinity, ease: "linear" },
        y: { duration: shape.rotSpeed * 0.6, repeat: Infinity, ease: "easeInOut", delay: shape.delay },
      }}
      className="absolute"
    >
      {svgMap[shape.type]}
    </motion.div>
  );
}

/* ─── Animated grid floor ─── */
function GridFloor({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const rotateX = useTransform(mouseY, [-1, 1], [65, 75]);
  const srx = useSpring(rotateX, { stiffness: 40, damping: 25 });

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none overflow-hidden opacity-[0.06]"
      style={{
        perspective: "600px",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          transformOrigin: "center bottom",
          rotateX: srx,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 90%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 90%)",
        }}
      />
    </motion.div>
  );
}

/* ─── Dramatic light streaks ─── */
function LightStreaks() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal light streak */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "200%", opacity: [0, 0.04, 0.04, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[35%] left-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-[1px]"
      />
      {/* Diagonal streak */}
      <motion.div
        initial={{ x: "-100%", y: "-50%", opacity: 0 }}
        animate={{ x: "250%", y: "50%", opacity: [0, 0.03, 0.03, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        className="absolute top-[20%] left-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent rotate-12 blur-[1px]"
      />
    </div>
  );
}

/* ─── Hero component ─── */
export function DavidHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 25, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const titleLetters = "ANSH ADARSH".split("");

  return (
    <section
      className="hero-section"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1200px" }}
    >
      {/* Perspective Grid Floor */}
      <GridFloor mouseX={mouseX} mouseY={mouseY} />

      {/* Dramatic Light Streaks */}
      <LightStreaks />

      {/* 3D Floating Wireframe Shapes */}
      <FloatingShapes mouseX={mouseX} mouseY={mouseY} />

      {/* Primary Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] bg-[#2563eb] rounded-full blur-[150px] pointer-events-none"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[-20%] left-[-15%] w-[45vw] h-[45vw] bg-[#7c3aed] rounded-full blur-[160px] pointer-events-none"
      />

      {/* Accent Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[25%] right-[10%] w-[30vw] h-[30vw] bg-[#06b6d4] rounded-full blur-[130px] pointer-events-none"
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── Main 3D Content Layer ─── */}
      <motion.div
        className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 z-10"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Column: Hero Information */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-start z-10">
            {/* Status & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium shadow-sm mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide">SOFTWARE DEVELOPMENT ENGINEER</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 mb-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Ansh Adarsh
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Full-Stack Systems & Web
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-300 text-sm sm:text-base max-w-lg font-normal leading-relaxed mb-6"
              style={{ transform: "translateZ(20px)" }}
            >
              Architecting production-grade digital platforms, resilient microservices, and interactive developer experiences with <strong className="text-white font-semibold">React 19</strong>, <strong className="text-white font-semibold">Next.js 16</strong>, <strong className="text-white font-semibold">TypeScript</strong>, and <strong className="text-white font-semibold">Node.js</strong>.
            </motion.p>

            {/* Metric Highlights Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-2.5 w-full max-w-md mb-6 font-mono text-center"
              style={{ transform: "translateZ(15px)" }}
            >
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs sm:text-sm font-bold text-cyan-400 block">Euroasiann</span>
                <span className="text-[10px] text-slate-400 block">SDE Intern</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs sm:text-sm font-bold text-emerald-400 block">100/100</span>
                <span className="text-[10px] text-slate-400 block">Lighthouse</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs sm:text-sm font-bold text-purple-400 block">500+</span>
                <span className="text-[10px] text-slate-400 block">LeetCode</span>
              </div>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-8"
              style={{ transform: "translateZ(15px)" }}
            >
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono tracking-wide uppercase font-medium rounded-lg border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-cyan-500/40 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 sm:gap-4"
              style={{ transform: "translateZ(25px)" }}
            >
              <a
                href="#projects"
                className="group relative px-6 py-2.5 sm:px-7 sm:py-3 text-xs font-mono font-semibold tracking-wider uppercase rounded-full bg-white text-black overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  Explore Work
                </span>
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 sm:px-7 sm:py-3 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border border-white/20 text-slate-300 hover:bg-white/5 hover:text-white hover:border-cyan-500/40 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Hero Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 w-full z-20"
            style={{ transform: "translateZ(30px)" }}
          >
            <HeroTerminal
              developerName="Ansh Adarsh"
              roleTitle="Software Development Engineer"
              defaultOpenToWork={true}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-mono font-bold text-center">
          Scroll Down
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-cyan-400/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}

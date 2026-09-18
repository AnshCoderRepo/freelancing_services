"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Terminal as TerminalIcon,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Cpu,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Clock,
  Flame,
  Zap,
  ShieldCheck,
  Layers,
  Globe,
  CornerDownLeft,
  RefreshCw,
  FolderGit2,
  User,
  Quote as QuoteIcon,
  Binary,
  MessageSquare,
  Award,
  Database,
  Server,
  Wrench,
  Compass,
  ArrowRight,
} from "lucide-react";
import {
  SiGithub,
  SiX,
  SiLeetcode,
  SiWhatsapp,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiOpenai,
  SiPython,
  SiCplusplus,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

// ---------------------------------------------------------------------------
// Types & Interfaces
// ---------------------------------------------------------------------------

export interface CommandOutput {
  id: string;
  command: string;
  timestamp: string;
  content: React.ReactNode;
  isError?: boolean;
}

export interface HeroTerminalProps {
  className?: string;
  defaultOpenToWork?: boolean;
  developerName?: string;
  roleTitle?: string;
  onCommandRun?: (command: string) => void;
}

// ---------------------------------------------------------------------------
// Quotes Database
// ---------------------------------------------------------------------------
const PROGRAMMING_QUOTES = [
  {
    quote: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    quote: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin (Uncle Bob)",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    quote: "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
  },
];

// ---------------------------------------------------------------------------
// Skills Data
// ---------------------------------------------------------------------------
const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: Code2, color: "from-red-500/20 to-orange-600/10 text-red-400 border-red-500/30" },
      { name: "Python", icon: SiPython, color: "from-emerald-500/20 to-teal-600/10 text-emerald-400 border-emerald-500/30" },
      { name: "C / C++", icon: SiCplusplus, color: "from-indigo-500/20 to-indigo-600/10 text-indigo-400 border-indigo-500/30" },
      { name: "TypeScript", icon: SiTypescript, color: "from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "from-yellow-500/20 to-amber-600/10 text-yellow-400 border-yellow-500/30" },
      { name: "SQL", icon: Database, color: "from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-500/30" },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: "React.js", icon: SiReact, color: "from-cyan-500/20 to-blue-600/10 text-cyan-300 border-cyan-500/30" },
      { name: "Next.js", icon: SiNextdotjs, color: "from-zinc-500/20 to-zinc-700/10 text-zinc-200 border-zinc-500/30" },
      { name: "Node.js", icon: SiNodedotjs, color: "from-green-500/20 to-emerald-600/10 text-green-400 border-green-500/30" },
      { name: "Express.js", icon: SiExpress, color: "from-stone-500/20 to-stone-700/10 text-stone-300 border-stone-500/30" },
      { name: "REST API Design", icon: Globe, color: "from-indigo-500/20 to-blue-600/10 text-indigo-300 border-indigo-500/30" },
    ],
  },
  {
    category: "Data & Cloud Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "from-sky-500/20 to-blue-700/10 text-sky-300 border-sky-500/30" },
      { name: "MongoDB", icon: SiMongodb, color: "from-emerald-500/20 to-green-700/10 text-emerald-400 border-emerald-500/30" },
      { name: "MySQL", icon: Database, color: "from-blue-500/20 to-cyan-600/10 text-blue-300 border-blue-500/30" },
      { name: "Redis", icon: Server, color: "from-rose-500/20 to-red-700/10 text-rose-400 border-rose-500/30" },
      { name: "Docker", icon: SiDocker, color: "from-blue-500/20 to-indigo-700/10 text-blue-400 border-blue-500/30" },
      { name: "AWS", icon: Globe, color: "from-amber-500/20 to-yellow-600/10 text-amber-400 border-amber-500/30" },
    ],
  },
  {
    category: "Core CS & Engineering Tools",
    skills: [
      { name: "DSA & System Design", icon: Cpu, color: "from-purple-500/20 to-indigo-600/10 text-purple-300 border-purple-500/30" },
      { name: "Git & GitHub", icon: FolderGit2, color: "from-orange-500/20 to-amber-600/10 text-orange-400 border-orange-500/30" },
      { name: "Postman", icon: Wrench, color: "from-orange-500/20 to-red-600/10 text-orange-400 border-orange-500/30" },
      { name: "OpenAI API", icon: SiOpenai, color: "from-teal-500/20 to-emerald-700/10 text-teal-300 border-teal-500/30" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects Data
// ---------------------------------------------------------------------------
const PROJECTS_DATA = [
  {
    title: "PartFinder & EuroasiannIT Portals",
    subtitle: "Enterprise Web Systems & Next.js Platforms",
    description: "Production marketing platforms & corporate web architectures built with Next.js SSR/SSG. Boosted SEO discoverability by 30–40% and reduced LCP load times by 35%.",
    tech: ["Next.js", "React", "TypeScript", "REST APIs", "Agile Scrum"],
    metrics: "35% Faster LCP • 30-40% SEO Boost",
    link: "https://github.com/AnshCoderRepo",
    featured: true,
  },
  {
    title: "Inventory Management System",
    subtitle: "Distributed Stock & Order Processing",
    description: "Engineered stock and order tracking platform independently, load-tested to 1,000+ concurrent users with zero performance degradation. Secured via Clerk role-based access and optimized backend queries cutting response times by ~30%.",
    tech: ["React", "Express.js", "MongoDB", "REST API", "Clerk Auth"],
    metrics: "1,000+ Concurrent Users • ~30% Faster Queries",
    link: "https://github.com/AnshCoderRepo",
    featured: true,
  },
  {
    title: "AI-Powered Chat Application",
    subtitle: "Contextual AI & High-Throughput Microservice",
    description: "Real-time chat platform serving 500+ simultaneous users with live messaging and OpenAI-powered contextual replies. Reduced latency ~25% through request batching and caching, containerized with Docker.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Docker"],
    metrics: "500+ Active Users • ~25% Lower Latency",
    link: "https://github.com/AnshCoderRepo",
    featured: true,
  },
  {
    title: "Role-Based Feedback & Job Portal",
    subtitle: "3-Role Hiring System & Scoring Engine",
    description: "Architected data model and REST API for 3-role hiring system (Admin, Recruiter, Applicant) with dedicated dashboards. Jest-tested feedback scoring engine in TypeScript, shipped via Docker.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Clerk", "Docker", "Jest"],
    metrics: "3-Role Isolation • 100% Docker Parity",
    link: "https://github.com/AnshCoderRepo",
    featured: false,
  },
  {
    title: "LV Prasad Eye Institute Portal",
    subtitle: "Healthcare Appointment & Recommendation Engine",
    description: "Redesigned patient-facing appointment UI using Next.js & Material UI for 1,000+ users, shortening booking flow by 2 steps. Built data-driven recommendation engine on patient records.",
    tech: ["Next.js", "Material UI", "Python", "Data Science", "REST APIs"],
    metrics: "Shortened Booking by 2 Steps",
    link: "https://github.com/AnshCoderRepo",
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Main Hero Terminal Component
// ---------------------------------------------------------------------------
export default function HeroTerminal({
  className = "",
  defaultOpenToWork = true,
  developerName = "Ansh Adarsh",
  roleTitle = "Software Development Engineer",
  onCommandRun,
}: HeroTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isMatrixMode, setIsMatrixMode] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [, startTransition] = useTransition();

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Available command quick pills
  const QUICK_COMMANDS = [
    { label: "help", desc: "Show command manual", icon: Compass },
    { label: "whoami", desc: "Developer profile", icon: User },
    { label: "skills", desc: "Tech stack breakdown", icon: Code2 },
    { label: "projects", desc: "Selected works", icon: FolderGit2 },
    { label: "stats", desc: "Engineering metrics", icon: Flame },
    { label: "contact", desc: "Get in touch", icon: Mail },
    { label: "socials", desc: "Network links", icon: Globe },
    { label: "quote", desc: "Inspiration", icon: QuoteIcon },
    { label: "matrix", desc: "Toggle cyberpunk mode", icon: Binary },
    { label: "clear", desc: "Clear console", icon: Trash2 },
  ];

  // Copy helper
  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  // ---------------------------------------------------------------------------
  // Initial Welcome Banner Element
  // ---------------------------------------------------------------------------
  const renderWelcomeBanner = () => (
    <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-300">
      {/* ASCII Logo / Stylized Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-cyan-500/20 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <TerminalIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                {developerName}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                v2.6.0-prod
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              {roleTitle} • Systems & Modern Web
            </p>
          </div>
        </div>

        {defaultOpenToWork && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-semibold tracking-wide uppercase font-sans">
              Open to SDE Roles
            </span>
          </div>
        )}
      </div>

      {/* Intro Description */}
      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
        <p className="mb-2">
          🚀 Welcome to my interactive portfolio terminal! Experience full-stack systems engineering, interactive works, and core proficiencies right here in your browser.
        </p>
        <p className="text-slate-400">
          💡 <span className="text-cyan-400 font-mono font-medium">Quick Start:</span> Type <span className="text-amber-300 font-mono bg-amber-950/50 px-1 py-0.5 rounded border border-amber-500/30">help</span>, use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">Tab</kbd> for autocomplete, or click any command pill below.
        </p>
      </div>
    </div>
  );

  const [outputs, setOutputs] = useState<CommandOutput[]>([
    {
      id: "initial-welcome",
      command: "init",
      timestamp: new Date().toLocaleTimeString(),
      content: renderWelcomeBanner(),
    },
  ]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [outputs]);

  // Focus input on click
  const handleTerminalContainerClick = () => {
    inputRef.current?.focus();
  };

  // ---------------------------------------------------------------------------
  // Command Output Generator Engine
  // ---------------------------------------------------------------------------
  const executeCommand = (cmdText: string) => {
    const rawTrimmed = cmdText.trim();
    if (!rawTrimmed) return;

    // Track in history
    setHistory((prev) => [...prev, rawTrimmed]);
    setHistoryIdx(-1);
    setInputVal("");

    onCommandRun?.(rawTrimmed);

    const parts = rawTrimmed.toLowerCase().split(" ");
    const mainCmd = parts[0];
    const timestamp = new Date().toLocaleTimeString();

    // CLEAR COMMAND
    if (mainCmd === "clear" || mainCmd === "cls") {
      setOutputs([]);
      return;
    }

    let resultNode: React.ReactNode;
    let isError = false;

    switch (mainCmd) {
      // 1. HELP / COMMANDS
      case "help":
      case "?":
      case "commands":
      case "man":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs border-b border-slate-800 pb-1.5">
              <Compass className="w-4 h-4" />
              <span>Available Commands Manual</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
              {/* Category: Profile & Info */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-2">
                <div className="text-indigo-400 font-semibold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" /> Identity & Background
                </div>
                <div className="space-y-1.5 font-mono">
                  <div
                    onClick={() => executeCommand("whoami")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-cyan-300 font-semibold group-hover:text-cyan-200">whoami / about</span>
                    <span className="text-slate-400 text-[11px] font-sans">Developer profile & philosophy</span>
                  </div>
                  <div
                    onClick={() => executeCommand("skills")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-cyan-300 font-semibold group-hover:text-cyan-200">skills / stack</span>
                    <span className="text-slate-400 text-[11px] font-sans">Languages, frameworks & tools</span>
                  </div>
                  <div
                    onClick={() => executeCommand("stats")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-cyan-300 font-semibold group-hover:text-cyan-200">stats / metrics</span>
                    <span className="text-slate-400 text-[11px] font-sans">Engineering metrics & achievements</span>
                  </div>
                </div>
              </div>

              {/* Category: Works & Code */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-2">
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <FolderGit2 className="w-3.5 h-3.5" /> Projects & Experience
                </div>
                <div className="space-y-1.5 font-mono">
                  <div
                    onClick={() => executeCommand("projects")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-emerald-300 font-semibold group-hover:text-emerald-200">projects / work</span>
                    <span className="text-slate-400 text-[11px] font-sans">Featured applications & code</span>
                  </div>
                  <div
                    onClick={() => executeCommand("experience")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-emerald-300 font-semibold group-hover:text-emerald-200">experience</span>
                    <span className="text-slate-400 text-[11px] font-sans">Euroasiann & LVPEI roles</span>
                  </div>
                  <div
                    onClick={() => executeCommand("education")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-emerald-300 font-semibold group-hover:text-emerald-200">education</span>
                    <span className="text-slate-400 text-[11px] font-sans">B.Tech CSE & Academics</span>
                  </div>
                </div>
              </div>

              {/* Category: Connect & Reach */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-2">
                <div className="text-amber-400 font-semibold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Outreach & Network
                </div>
                <div className="space-y-1.5 font-mono">
                  <div
                    onClick={() => executeCommand("contact")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-amber-300 font-semibold group-hover:text-amber-200">contact / hire</span>
                    <span className="text-slate-400 text-[11px] font-sans">Email, phone, & WhatsApp</span>
                  </div>
                  <div
                    onClick={() => executeCommand("socials")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-amber-300 font-semibold group-hover:text-amber-200">socials</span>
                    <span className="text-slate-400 text-[11px] font-sans">GitHub, LinkedIn, LeetCode</span>
                  </div>
                </div>
              </div>

              {/* Category: System & Fun */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-2">
                <div className="text-purple-400 font-semibold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Utilities & Extras
                </div>
                <div className="space-y-1.5 font-mono">
                  <div
                    onClick={() => executeCommand("quote")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-purple-300 font-semibold group-hover:text-purple-200">quote</span>
                    <span className="text-slate-400 text-[11px] font-sans">Inspirational developer quote</span>
                  </div>
                  <div
                    onClick={() => executeCommand("matrix")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-purple-300 font-semibold group-hover:text-purple-200">matrix</span>
                    <span className="text-slate-400 text-[11px] font-sans">Toggle cyberpunk terminal</span>
                  </div>
                  <div
                    onClick={() => executeCommand("date")}
                    className="group flex items-center justify-between p-1 rounded hover:bg-slate-800/80 cursor-pointer transition"
                  >
                    <span className="text-purple-300 font-semibold group-hover:text-purple-200">date / time</span>
                    <span className="text-slate-400 text-[11px] font-sans">Current localized clock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      // 2. WHOAMI / ABOUT
      case "whoami":
      case "about":
      case "bio":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{developerName}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      SDE & Web Architect
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    LIET Greater Noida (B.Tech CSE, 2021–2025 • CGPA: 8.4)
                  </p>
                </div>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Candidate</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Entry-level Software Development Engineer specializing in high-performance digital products, 
                scalable microservices, and slick user interfaces with React, Next.js, TypeScript, and Node.js. 
                SDE Intern at Euroasiann & former Data Science Intern at LV Prasad Eye Institute.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Core Focus</span>
                  <span className="text-xs font-semibold text-cyan-300 font-mono">Full-Stack & Systems</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Availability</span>
                  <span className="text-xs font-semibold text-emerald-300 font-mono">Immediate / Full-Time</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Location</span>
                  <span className="text-xs font-semibold text-indigo-300 font-mono">India (Remote/Onsite)</span>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      // 3. SKILLS / STACK
      case "skills":
      case "stack":
      case "tech":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Comprehensive Tech Matrix
              </span>
              <span className="text-slate-500 text-[11px]">Production & Scaled</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2 hover:border-slate-700 transition"
                >
                  <h5 className="font-semibold text-slate-200 text-xs flex items-center justify-between">
                    <span>{cat.category}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{cat.skills.length} techs</span>
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => {
                      const IconComp = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className={`flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r border text-[11px] font-mono font-medium shadow-sm ${skill.color}`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      // 4. PROJECTS / WORK
      case "projects":
      case "work":
      case "portfolio":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <FolderGit2 className="w-4 h-4" /> Production Deployments & Systems
              </span>
              <span className="text-slate-500 text-[11px]">Next.js • Node.js • Docker</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {PROJECTS_DATA.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition group space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition flex items-center gap-2">
                        {proj.title}
                        {proj.featured && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                            Featured
                          </span>
                        )}
                      </h5>
                      <span className="text-xs text-slate-400 font-sans block">{proj.subtitle}</span>
                    </div>

                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 px-2.5 py-1 rounded-md border border-cyan-500/30 transition self-start sm:self-auto"
                    >
                      <span>Code / Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      🚀 {proj.metrics}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      // 5. STATS / METRICS
      case "stats":
      case "metrics":
      case "achievements":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> Engineering Milestones & Key Stats
              </span>
              <span className="text-slate-500 text-[11px]">Continuous Growth</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-center">
                <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono block">500+</span>
                <span className="text-[11px] text-slate-400 block">LeetCode & DSA Solved</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-center">
                <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono block">100/100</span>
                <span className="text-[11px] text-slate-400 block">Lighthouse Web Vitals</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-center">
                <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono block">1,000+</span>
                <span className="text-[11px] text-slate-400 block">Tested Concurrent Users</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-center">
                <span className="text-xl sm:text-2xl font-bold text-purple-400 font-mono block">8.4 / 10</span>
                <span className="text-[11px] text-slate-400 block">B.Tech CSE CGPA</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200">
                  Certifications: <strong>AI on Azure (Microsoft)</strong> & <strong>Java Programming (Coursera)</strong>
                </span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">2024–2025</span>
            </div>
          </div>
        );
        break;

      // 6. CONTACT / HIRE
      case "contact":
      case "hire":
      case "reach":
      case "email":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> Direct Communication Channels
              </span>
              <span className="text-emerald-400 text-[11px]">● Fast Response Time</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              {/* Email */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Mail className="w-3.5 h-3.5" /> Email
                  </div>
                  <div className="text-slate-300 font-mono text-xs truncate">
                    anshk1126@gmail.com
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2">
                  <button
                    onClick={() => copyToClipboard("anshk1126@gmail.com", "email")}
                    className="flex-1 flex items-center justify-center gap-1 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition"
                  >
                    {copiedKey === "email" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:anshk1126@gmail.com"
                    className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-500/30 text-[11px] transition"
                  >
                    Open
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                    <Phone className="w-3.5 h-3.5" /> Phone / Call
                  </div>
                  <div className="text-slate-300 font-mono text-xs">
                    +91-7070410031
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2">
                  <button
                    onClick={() => copyToClipboard("+917070410031", "phone")}
                    className="flex-1 flex items-center justify-center gap-1 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition"
                  >
                    {copiedKey === "phone" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href="tel:+917070410031"
                    className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 hover:bg-indigo-900 border border-indigo-500/30 text-[11px] transition"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <SiWhatsapp className="w-3.5 h-3.5" /> WhatsApp
                  </div>
                  <div className="text-slate-300 font-mono text-xs">
                    Direct Instant Chat
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2">
                  <a
                    href="https://wa.me/917070410031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-1 rounded bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 text-[11px] transition"
                  >
                    <span>Message on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      // 7. SOCIALS
      case "socials":
      case "links":
      case "github":
      case "linkedin":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> Professional Networks & Repos
              </span>
              <span className="text-slate-500 text-[11px]">1-Click Jump</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <a
                href="https://github.com/AnshCoderRepo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 transition flex items-center gap-2.5 text-slate-200 group"
              >
                <SiGithub className="w-5 h-5 text-white group-hover:scale-110 transition" />
                <div>
                  <span className="font-semibold block text-xs">GitHub</span>
                  <span className="text-[10px] text-slate-400 font-mono">@AnshCoderRepo</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ansh-adarsh2021"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition flex items-center gap-2.5 text-slate-200 group"
              >
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition" />
                <div>
                  <span className="font-semibold block text-xs">LinkedIn</span>
                  <span className="text-[10px] text-slate-400 font-mono">ansh-adarsh2021</span>
                </div>
              </a>

              <a
                href="https://leetcode.com/u/AnshCoderRepo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition flex items-center gap-2.5 text-slate-200 group"
              >
                <SiLeetcode className="w-5 h-5 text-amber-400 group-hover:scale-110 transition" />
                <div>
                  <span className="font-semibold block text-xs">LeetCode</span>
                  <span className="text-[10px] text-slate-400 font-mono">500+ Solved</span>
                </div>
              </a>

              <a
                href="https://wa.me/917070410031"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition flex items-center gap-2.5 text-slate-200 group"
              >
                <SiWhatsapp className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
                <div>
                  <span className="font-semibold block text-xs">WhatsApp</span>
                  <span className="text-[10px] text-slate-400 font-mono">+91 7070410031</span>
                </div>
              </a>
            </div>
          </div>
        );
        break;

      // 8. EXPERIENCE
      case "experience":
      case "exp":
      case "history":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> Professional Experience Track
              </span>
              <span className="text-slate-500 text-[11px]">Internships & Production</span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-white text-xs sm:text-sm">
                    Software Development Engineer Intern • <span className="text-cyan-400">Euroasiann</span>
                  </h5>
                  <span className="text-[11px] font-mono text-slate-400">Recent</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Architected production interfaces for PartFinder and EuroasiannIT platforms in Next.js, 
                  improving page load time by 2 seconds and lowering First Contentful Paint by 35%. 
                  Collaborated closely via Agile methodologies and code review cycles.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-white text-xs sm:text-sm">
                    Data Science Intern • <span className="text-indigo-400">LV Prasad Eye Institute</span>
                  </h5>
                  <span className="text-[11px] font-mono text-slate-400">2024</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Redesigned patient appointment portal in Next.js & Material UI serving 1,000+ users. 
                  Built predictive eye-care scheduling pipelines in Python that shortened booking pathways.
                </p>
              </div>
            </div>
          </div>
        );
        break;

      // 9. EDUCATION
      case "education":
      case "edu":
        resultNode = (
          <div className="space-y-3 font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-purple-400 border-b border-slate-800 pb-1.5">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Academic Background
              </span>
              <span className="text-slate-500 text-[11px]">2021 – 2025</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h5 className="text-sm font-bold text-white">
                  Bachelor of Technology in Computer Science & Engineering
                </h5>
                <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  CGPA: 8.4 / 10
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Lloyd Institute of Engineering & Technology (LIET), Greater Noida, India
              </p>
              <p className="text-xs text-slate-300 pt-1">
                Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.
              </p>
            </div>
          </div>
        );
        break;

      // 10. QUOTE
      case "quote":
      case "inspire":
      case "wisdom": {
        const randomQuote = PROGRAMMING_QUOTES[Math.floor(Math.random() * PROGRAMMING_QUOTES.length)];
        resultNode = (
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/30 text-xs sm:text-sm font-sans space-y-2">
            <div className="flex items-start gap-2 text-purple-300">
              <QuoteIcon className="w-4 h-4 mt-0.5 shrink-0 text-purple-400" />
              <p className="italic text-slate-200">
                &ldquo;{randomQuote.quote}&rdquo;
              </p>
            </div>
            <div className="text-right font-mono text-xs text-purple-400 font-medium">
              — {randomQuote.author}
            </div>
          </div>
        );
        break;
      }

      // 11. MATRIX MODE
      case "matrix":
      case "cyberpunk": {
        const nextState = !isMatrixMode;
        setIsMatrixMode(nextState);
        resultNode = (
          <div className="font-mono text-xs text-emerald-400 space-y-1">
            <p className="flex items-center gap-1.5 font-bold">
              <Binary className="w-4 h-4 animate-spin" />
              <span>[MATRIX PROTOCOL] :: {nextState ? "ACTIVATED" : "DEACTIVATED"}</span>
            </p>
            <p className="text-slate-400 text-[11px]">
              {nextState
                ? "Neural link established. Phosphor green scanline CRT filter engaged. Type 'matrix' again to restore standard HUD."
                : "Standard dark glassmorphic interface restored."}
            </p>
          </div>
        );
        break;
      }

      // 12. DATE / TIME
      case "date":
      case "time":
      case "now":
      case "clock": {
        const now = new Date();
        resultNode = (
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Local System Time
            </div>
            <p className="text-slate-200">{now.toString()}</p>
            <p className="text-[11px] text-slate-500">ISO 8601: {now.toISOString()}</p>
          </div>
        );
        break;
      }

      // 13. SUDO / ROOT
      case "sudo":
      case "root":
      case "admin":
        resultNode = (
          <div className="font-mono text-xs text-amber-300 space-y-1">
            <p className="font-semibold text-amber-400">
              [sudo] Authentication check for visitor: *********
            </p>
            <p className="text-slate-300">
              ⚡ Nice try! You already have maximum guest permissions to explore everything in this terminal.
            </p>
          </div>
        );
        break;

      // 14. ECHO
      case "echo": {
        const msg = parts.slice(1).join(" ");
        resultNode = (
          <div className="font-mono text-xs text-slate-300">
            {msg || "(empty echo)"}
          </div>
        );
        break;
      }

      // 15. PWD / LS / CAT / UNAME
      case "pwd":
        resultNode = <div className="font-mono text-xs text-cyan-300">/home/ansh/portfolio/production</div>;
        break;

      case "ls":
      case "dir":
        resultNode = (
          <div className="font-mono text-xs text-slate-300 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <span className="text-blue-400 font-semibold">📁 about/</span>
            <span className="text-blue-400 font-semibold">📁 projects/</span>
            <span className="text-blue-400 font-semibold">📁 skills/</span>
            <span className="text-blue-400 font-semibold">📁 contact/</span>
            <span className="text-emerald-400">📄 resume.pdf</span>
            <span className="text-amber-400">📄 leetcode-stats.json</span>
            <span className="text-purple-400">📄 config.zsh</span>
            <span className="text-slate-400">📄 README.md</span>
          </div>
        );
        break;

      case "uname":
      case "version":
        resultNode = (
          <div className="font-mono text-xs text-slate-300">
            Linux portfolio-engine 6.8.0-ansh-x86_64 Next.js/16.1.6 React/19.2.3
          </div>
        );
        break;

      // DEFAULT / UNKNOWN
      default:
        isError = true;
        resultNode = (
          <div className="font-mono text-xs text-rose-400 space-y-1">
            <p>
              zsh: command not found: <span className="font-bold underline">{mainCmd}</span>
            </p>
            <p className="text-slate-400 text-[11px] font-sans">
              Type <span className="text-cyan-400 font-mono font-medium">help</span> or click any of the quick-action pills below to see available commands.
            </p>
          </div>
        );
        break;
    }

    const newOutput: CommandOutput = {
      id: Math.random().toString(36).substring(2, 9),
      command: rawTrimmed,
      timestamp,
      content: resultNode,
      isError,
    };

    setOutputs((prev) => [...prev, newOutput]);
  };

  // ---------------------------------------------------------------------------
  // Key Down Handling: Enter, Up/Down History, Tab Autocomplete
  // ---------------------------------------------------------------------------
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(history[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(-1);
        setInputVal("");
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const allCmdNames = QUICK_COMMANDS.map((c) => c.label).concat([
        "about",
        "stack",
        "work",
        "metrics",
        "hire",
        "experience",
        "education",
        "date",
        "time",
        "ls",
        "pwd",
        "clear",
      ]);
      const match = allCmdNames.find((name) => name.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <div
      className={`relative w-full transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-50 p-2 sm:p-6 bg-black/90 backdrop-blur-2xl flex items-center justify-center" : "my-6"
      } ${className}`}
    >
      {/* Outer Glow & Terminal Window Wrapper */}
      <div
        onClick={handleTerminalContainerClick}
        className={`relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden transition-all duration-300 border shadow-2xl flex flex-col cursor-text ${
          isMatrixMode
            ? "bg-[#051108]/95 border-emerald-500/40 shadow-[0_0_50px_-10px_rgba(16,185,129,0.35)] text-emerald-400"
            : "bg-[#0B0F17]/90 backdrop-blur-xl border-cyan-500/20 shadow-[0_0_50px_-12px_rgba(6,182,212,0.25)] text-slate-200"
        } ${isFullscreen ? "h-full max-h-[92vh]" : "h-auto"}`}
      >
        {/* CRT Scanline Overlay in Matrix Mode */}
        {isMatrixMode && (
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,100,0.04)_50%)] bg-[length:100%_4px] z-20" />
        )}

        {/* Ambient Top Glow */}
        <div
          className={`absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none ${
            isMatrixMode ? "via-emerald-400/80" : ""
          }`}
        />

        {/* ------------------------------------------------------------------ */}
        {/* macOS Style Window Header Bar */}
        {/* ------------------------------------------------------------------ */}
        <div
          className={`flex items-center justify-between px-4 py-3 border-b select-none transition-colors duration-300 ${
            isMatrixMode
              ? "bg-[#030d06] border-emerald-900/50"
              : "bg-[#0e1420]/90 border-slate-800/80"
          }`}
        >
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOutputs([]);
              }}
              title="Clear output (Red)"
              className="w-3 h-3 rounded-full bg-[#FF5F56] hover:opacity-80 transition cursor-pointer flex items-center justify-center group"
            >
              <span className="text-[7px] text-black font-bold opacity-0 group-hover:opacity-100 leading-none">×</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                executeCommand("help");
              }}
              title="Show help (Yellow)"
              className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:opacity-80 transition cursor-pointer flex items-center justify-center group"
            >
              <span className="text-[7px] text-black font-bold opacity-0 group-hover:opacity-100 leading-none">?</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(!isFullscreen);
              }}
              title="Toggle Fullscreen (Green)"
              className="w-3 h-3 rounded-full bg-[#27C93F] hover:opacity-80 transition cursor-pointer flex items-center justify-center group"
            >
              <span className="text-[7px] text-black font-bold opacity-0 group-hover:opacity-100 leading-none">+</span>
            </button>
          </div>

          {/* Terminal Title Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <TerminalIcon className={`w-3.5 h-3.5 ${isMatrixMode ? "text-emerald-400" : "text-cyan-400"}`} />
            <span className="font-medium tracking-tight text-slate-300">
              ansh@portfolio:<span className="text-cyan-400">~</span> (zsh)
            </span>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2">
            {/* Live Online Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-400 font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>

            {/* Matrix Toggle Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                executeCommand("matrix");
              }}
              className={`p-1.5 rounded-md border text-xs transition flex items-center gap-1 ${
                isMatrixMode
                  ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                  : "bg-slate-800/60 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border-slate-700"
              }`}
              title="Toggle Cyberpunk Matrix Mode"
            >
              <Binary className="w-3.5 h-3.5" />
            </button>

            {/* Clear Output Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOutputs([]);
              }}
              className="p-1.5 rounded-md bg-slate-800/60 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 hover:border-rose-500/40 border border-slate-700 text-xs transition"
              title="Clear Terminal (clear)"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Terminal Scrollable Body */}
        {/* ------------------------------------------------------------------ */}
        <div
          ref={terminalBodyRef}
          className={`p-4 sm:p-5 overflow-y-auto space-y-4 font-mono select-text transition-colors duration-300 ${
            isFullscreen ? "h-[calc(80vh-140px)]" : "h-[420px] sm:h-[480px]"
          } scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: isMatrixMode ? "#065f46 transparent" : "#334155 transparent",
          }}
        >
          {outputs.map((out) => (
            <div key={out.id} className="space-y-2">
              {/* Command Prompt Line (if not initial welcome) */}
              {out.command !== "init" && (
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">ansh@portfolio</span>
                  <span className="text-slate-600">:</span>
                  <span className="text-indigo-400">~</span>
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-semibold">{out.command}</span>
                  <span className="text-[10px] text-slate-600 ml-auto font-sans">{out.timestamp}</span>
                </div>
              )}

              {/* Rendered Command Output */}
              <div className="pl-0 sm:pl-2">{out.content}</div>
            </div>
          ))}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm">
            <span className="text-cyan-400 font-bold shrink-0">ansh@portfolio</span>
            <span className="text-slate-600 shrink-0">:</span>
            <span className="text-indigo-400 shrink-0">~</span>
            <span className="text-emerald-400 font-bold shrink-0">$</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or click pills..."
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm p-0 focus:ring-0"
              />
            </div>
            <button
              type="button"
              onClick={() => executeCommand(inputVal)}
              className="p-1 rounded bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 transition text-xs shrink-0"
              title="Run command (Enter)"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Quick Action Pill Bar */}
        {/* ------------------------------------------------------------------ */}
        <div
          className={`p-2.5 sm:p-3 border-t overflow-x-auto flex items-center gap-1.5 sm:gap-2 select-none no-scrollbar transition-colors duration-300 ${
            isMatrixMode
              ? "bg-[#030d06] border-emerald-900/50"
              : "bg-[#0e1420]/95 border-slate-800/80"
          }`}
        >
          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-500 shrink-0 pl-1 mr-1">
            Quick Exec:
          </span>

          {QUICK_COMMANDS.map((cmd) => {
            const IconComp = cmd.icon;
            return (
              <button
                key={cmd.label}
                type="button"
                onClick={() => executeCommand(cmd.label)}
                title={cmd.desc}
                className={`group shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer border ${
                  isMatrixMode
                    ? "bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border-emerald-800/60 hover:border-emerald-500/50"
                    : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border-slate-800 hover:border-cyan-500/40 shadow-sm"
                }`}
              >
                <IconComp className="w-3 h-3 text-cyan-400 group-hover:scale-110 transition shrink-0" />
                <span>{cmd.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

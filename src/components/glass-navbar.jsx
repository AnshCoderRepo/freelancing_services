"use client";

import React, { useState } from "react";
import { Menu, X, Terminal, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Timeline", href: "#timeline" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 bg-black/80 backdrop-blur-[20px] saturate-[180%] border-b border-white/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              ansh<span className="text-cyan-400">.dev</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </a>

        {/* Desktop Single-Page Anchor Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-mono text-slate-300 hover:text-white hover:text-cyan-300 transition-colors tracking-wide cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Icons & Hire Pill */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/AnshCoderRepo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/ansh-adarsh2021"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-blue-400 hover:text-blue-300 transition"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-cyan-300 transition-colors text-xs font-semibold font-mono tracking-tight cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-14 bg-black/95 backdrop-blur-2xl z-[99] flex flex-col items-center pt-8 px-6 space-y-4 md:hidden border-b border-white/10"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="w-full py-3 text-lg font-mono font-medium text-slate-200 hover:text-cyan-400 border-b border-white/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="w-full pt-4 flex items-center justify-center gap-4">
              <a
                href="https://github.com/AnshCoderRepo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ansh-adarsh2021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "Contact", href: "#contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
    <header className="w-full relative z-[100]">
      {/* Top Navbar Bar */}
      <nav className="h-14 w-full bg-black/90 backdrop-blur-xl saturate-[180%] border-b border-white/10 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-30">
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
                className="text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors tracking-wide cursor-pointer"
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
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} className="text-cyan-400" /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Dimmer (click outside to dismiss) */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-14 bg-black/80 backdrop-blur-sm md:hidden z-10"
            />

            {/* Solid, Fully Opaque Drawer Panel */}
            <motion.div
              key="mobile-drawer"
              data-lenis-prevent
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-x-0 top-14 h-[calc(100dvh-3.5rem)] md:hidden z-20 bg-[#06080d] border-b border-white/10 flex flex-col justify-between overflow-y-auto px-6 py-6 shadow-2xl"
            >
              {/* Menu Links */}
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.18 }}
                    className="group py-3.5 px-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-base font-mono font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA and Social Actions */}
              <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:brightness-110 active:scale-[0.99] transition"
                >
                  <span>Hire Me / Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/AnshCoderRepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ansh-adarsh2021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-blue-400 hover:text-blue-300 text-xs font-mono transition"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}


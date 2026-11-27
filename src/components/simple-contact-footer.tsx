"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Copy, Check, ArrowUpRight, Github, Linkedin } from "lucide-react";

export function SimpleContactFooter() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const email = "anshk1126@gmail.com";
  const phone = "+91 7070410031";
  const rawPhone = "7070410031";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <footer id="contact" className="w-full bg-[#05070b] border-t border-white/10 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR HIRE • SDE ROLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Let&apos;s Build <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Together.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an engineering role or project in mind? Reach out directly via email or mobile number below.
          </p>
        </div>

        {/* Contact Cards: Email & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#090d16] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(email, "email")}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <span className="text-lg font-mono font-bold text-white tracking-tight break-all">
                  {email}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-white/5 flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-lg active:scale-[0.98]"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile / WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#090d16] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(rawPhone, "phone")}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Direct Mobile & WhatsApp
                </span>
                <span className="text-lg font-mono font-bold text-white tracking-tight">
                  {phone}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-white/5 grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${rawPhone}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono font-semibold text-xs transition-colors active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/91${rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-semibold text-xs transition-colors active:scale-[0.98]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AnshCoderRepo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/ansh-adarsh2021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-blue-400 hover:text-blue-300 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <p className="text-slate-500">
            &copy; 2026 Ansh Adarsh • Software Development Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}

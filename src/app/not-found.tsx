import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 p-8 rounded-3xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
            HTTP 404 • ROUTE NOT FOUND
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight pt-2">
            Lost in the <span className="text-cyan-400">Terminal?</span>
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The requested route does not exist or has been relocated to another branch.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono transition-colors shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <Link
            href="/#hero"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Open Terminal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

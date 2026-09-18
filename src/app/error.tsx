"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("Uncaught application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 p-8 rounded-3xl bg-[#0B0F17]/90 backdrop-blur-xl border border-red-500/30 shadow-2xl">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300">
            APPLICATION RUNTIME ERROR
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-2">
            Something went wrong
          </h1>
          <p className="text-xs text-slate-400 font-mono bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-left truncate">
            {error.message || "An unexpected error occurred during execution."}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono transition-colors shadow-lg cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs font-mono transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

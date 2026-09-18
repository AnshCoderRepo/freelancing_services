import React from "react";
import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.4)]">
        <Terminal className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <p className="text-xs font-mono text-slate-400 tracking-wider">
          INITIALIZING ARCHITECTURE...
        </p>
      </div>
    </div>
  );
}

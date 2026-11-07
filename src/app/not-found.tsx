import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/10 max-w-md w-full text-center space-y-5">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="font-mono text-cyan-400 text-xs uppercase tracking-widest">
          HTTP 404 — Not Found
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Page or Route Not Located
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          The requested system route does not exist in this deployment.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Central Portfolio</span>
        </Link>
      </div>
    </div>
  );
}

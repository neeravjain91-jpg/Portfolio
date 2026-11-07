import React from "react";
import Link from "next/link";
import { Github, Mail, ShieldCheck, Terminal, Cpu } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#06080d] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Bio */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <span className="font-semibold text-white tracking-wide text-sm">
              Neerav Jain
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Applied Machine Learning Engineer & Systems Researcher. Building
            physics-informed neural networks, spatiotemporal forecasting systems,
            and reliable production AI platforms.
          </p>
          <div className="flex items-center gap-2 text-xs text-emerald-400 code-font">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            All live deployments verified active (HTTP 200)
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            Portfolio Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/#projects" className="hover:text-cyan-400 transition-colors">
                Featured Projects
              </Link>
            </li>
            <li>
              <Link href="/deployments" className="hover:text-cyan-400 transition-colors">
                Live Deployments Hub
              </Link>
            </li>
            <li>
              <Link href="/#philosophy" className="hover:text-cyan-400 transition-colors">
                Scientific Philosophy
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-cyan-400 transition-colors">
                Technical Tooling Matrix
              </Link>
            </li>
            <li>
              <Link href="/audit" className="hover:text-cyan-400 transition-colors">
                GitHub Repository Audit & Lineage
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Flagships */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            Flagship Systems
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/projects/aeropulse-x" className="hover:text-cyan-400 transition-colors">
                AeroPulse-X (UAV Digital Twin)
              </Link>
            </li>
            <li>
              <Link href="/projects/ocean-subsurface-ml" className="hover:text-cyan-400 transition-colors">
                Ocean Subsurface ML (B8 Net)
              </Link>
            </li>
            <li>
              <Link href="/projects/wildfire-intelligence" className="hover:text-cyan-400 transition-colors">
                Wildfire Spatiotemporal Intelligence
              </Link>
            </li>
            <li>
              <Link href="/projects/signature-vmake" className="hover:text-cyan-400 transition-colors">
                SYNAPSE / SIGNATURE VMAKE
              </Link>
            </li>
            <li>
              <Link href="/projects/bank-statement-extractor" className="hover:text-cyan-400 transition-colors">
                Bank Statement Table Extraction
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Scientific Protocol */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Integrity Standard
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Zero fabricated metrics. All benchmark numbers cite exact evaluation
            protocols, chronological holdouts with purge buffers, writer-disjoint
            cohorts, or LOGRO cross-validation.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/neeravjain91-jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:neeravjain91@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} Neerav Jain. All rights reserved. Built with Next.js 14, TypeScript & Tailwind CSS.
        </div>
        <div className="flex items-center gap-4 code-font">
          <span className="text-slate-400">Status: Production Deployed</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">Vercel Ready</span>
        </div>
      </div>
    </footer>
  );
};

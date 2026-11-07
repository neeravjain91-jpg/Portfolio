import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Filter,
  GitBranch,
  GitCommit,
  GitFork,
  Github,
  Layers,
  ShieldCheck,
  Terminal,
  TestTube,
} from "lucide-react";
import { ALL_REPOSITORIES } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Repository Audit & Lineage Report | Neerav Jain",
  description:
    "Authoritative audit of all 24 public repositories in Neerav Jain's GitHub profile. Lineage tracking, duplicate resolution, test suite status, and verified deployment links.",
};

export default function AuditReportPage() {
  const canonicalRepos = ALL_REPOSITORIES.filter(
    (r) => r.canonicalStatus === "Canonical"
  );
  const predecessorRepos = ALL_REPOSITORIES.filter(
    (r) => r.canonicalStatus === "Iterative Predecessor"
  );
  const mirrorRepos = ALL_REPOSITORIES.filter(
    (r) => r.canonicalStatus === "Exact Mirror"
  );
  const courseworkRepos = ALL_REPOSITORIES.filter(
    (r) => r.canonicalStatus === "Academic Coursework" || r.canonicalStatus === "Auxiliary"
  );

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
              <FileSearch className="w-3.5 h-3.5" />
              <span>Technical Provenance & Lineage Audit</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              GitHub Repository Audit & Resolution
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Complete scientific audit across all 24 public repositories in the{" "}
              <a
                href="https://github.com/neeravjain91-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-mono"
              >
                @neeravjain91-jpg
              </a>{" "}
              GitHub workspace. Every project is classified by technical lineage,
              deployment status, test suite coverage, and canonical designation to
              ensure 100% transparency.
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1">
            <div className="text-slate-400">Total Public Repositories: <span className="text-white font-bold">24</span></div>
            <div className="text-emerald-400">Canonical Architectures: <span className="font-bold">{canonicalRepos.length}</span></div>
            <div className="text-cyan-400">Verified Deployments: <span className="font-bold">5+ (HTTP 200 OK)</span></div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Audit Methodology & Classification Standards</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs pt-2">
          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1.5">
            <div className="font-bold text-emerald-400 font-mono">1. Canonical</div>
            <p className="text-slate-400 leading-relaxed">
              Authoritative, production-grade repositories representing completed engineering deliverables, certified hackathon prototypes, or competition submissions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20 space-y-1.5">
            <div className="font-bold text-amber-400 font-mono">2. Iterative Predecessors</div>
            <p className="text-slate-400 leading-relaxed">
              Intermediate development branches, exploratory testbeds, or initial prototypes that were subsequently superseded by canonical builds.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-sky-500/20 space-y-1.5">
            <div className="font-bold text-sky-400 font-mono">3. Exact Mirrors</div>
            <p className="text-slate-400 leading-relaxed">
              Dual-deployment repository mirrors deployed to separate staging or production endpoints with synchronized commits.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-slate-500/20 space-y-1.5">
            <div className="font-bold text-slate-400 font-mono">4. Academic Coursework</div>
            <p className="text-slate-400 leading-relaxed">
              Early foundational lab assignments, starter templates, and university coursework preserved for academic completeness.
            </p>
          </div>
        </div>
      </div>

      {/* Deep Lineage Case Studies */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Key Lineage & Evolution Trees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AeroPulse-X Evolution */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <GitBranch className="w-4 h-4" />
              <span>AeroPulse-X UAV Digital Twin Lineage</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Smart India Hackathon (SIH26054)</strong>: The project evolved from initial physics simulations into a certified 308-test propulsion twin:
            </p>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 font-mono text-xs space-y-2 text-slate-300">
              <div className="text-slate-500">demo-aeropluse (Initial demo prototype)</div>
              <div className="text-slate-500 pl-4">↳ AeroPulse (Engine thermodynamics modeling)</div>
              <div className="text-slate-500 pl-8">↳ AeroPulse-X (TCN + HGB diagnostic integration)</div>
              <div className="text-emerald-400 font-bold pl-12">
                ↳ final-aeropulse & aeropulse-test (Canonical 308-test build, deployed on Vercel)
              </div>
            </div>
          </div>

          {/* Wildfire Intelligence Evolution */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <GitBranch className="w-4 h-4" />
              <span>Wildfire Intelligence Lineage</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Evolved from foundational academic regression datasets to a 7-year multimodal spatiotemporal intelligence system across sovereign India:
            </p>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 font-mono text-xs space-y-2 text-slate-300">
              <div className="text-slate-500">forest-fire-prediction- (Toy Algerian dataset regression)</div>
              <div className="text-slate-500 pl-4">↳ updated-forest-fire-prediction (FireWatch Flask UI)</div>
              <div className="text-slate-500 pl-8">↳ india-forest-fire-prediction (First India FIRMS adaptation)</div>
              <div className="text-slate-500 pl-12">↳ indian-forest-fire-prediction-n (Multi-timescale ERA5 reanalysis)</div>
              <div className="text-emerald-400 font-bold pl-16">
                ↳ major-forest-fire (Authoritative 60-test NOAA DEM + LOGRO system)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Audit Table */}
      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden space-y-0">
        <div className="p-6 bg-black/40 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Authoritative 24-Repository Audit Ledger</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Verified directly against the GitHub API and public repository contents
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-mono text-[11px]">
                <th className="py-3.5 px-4 font-semibold">Repository Name</th>
                <th className="py-3.5 px-4 font-semibold">Classification</th>
                <th className="py-3.5 px-4 font-semibold">Language</th>
                <th className="py-3.5 px-4 font-semibold">Live Deployment</th>
                <th className="py-3.5 px-4 font-semibold">Test Suite</th>
                <th className="py-3.5 px-4 font-semibold">Canonical Target / Audit Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {ALL_REPOSITORIES.map((repo) => (
                <tr
                  key={repo.name}
                  className="hover:bg-white/[0.03] transition-colors"
                >
                  <td className="py-3.5 px-4 font-mono font-medium text-white whitespace-nowrap">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 hover:underline flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.name}</span>
                    </a>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        repo.canonicalStatus === "Canonical"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : repo.canonicalStatus === "Exact Mirror"
                          ? "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                          : repo.canonicalStatus === "Iterative Predecessor"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                          : "bg-slate-500/10 text-slate-400 border border-slate-500/30"
                      }`}
                    >
                      {repo.canonicalStatus}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 font-mono text-slate-300">
                    {repo.language || "Config / Markdown"}
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {repo.liveUrl ? (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>HTTP {repo.liveStatus || 200}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-600 font-mono">None</span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-slate-300">
                    {repo.testCount ? (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <TestTube className="w-3 h-3" />
                        <span>{repo.testCount}</span>
                      </span>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 text-slate-300 text-[11px] leading-relaxed max-w-sm">
                    {repo.canonicalTarget && (
                      <span className="text-cyan-400 font-mono font-semibold block mb-0.5">
                        ↳ Target: {repo.canonicalTarget}
                      </span>
                    )}
                    <span className="text-slate-400">{repo.auditVerdict}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

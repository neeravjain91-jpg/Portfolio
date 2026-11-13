import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FEATURED_PROJECTS,
  getProjectBySlug,
} from "@/data/projects";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCheck,
  Github,
  Layers,
  LineChart,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube,
  UserCheck,
} from "lucide-react";
import { LiveDeploymentBadge } from "@/components/LiveDeploymentBadge";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} — ${project.subtitle} | Neerav Jain`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Neerav Jain`,
      description: project.summary,
      url: `https://neerav-jain-portfolio.vercel.app/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Projects</span>
        </Link>
      </div>

      {/* Main Header */}
      <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Category & Status Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
              {project.tier}
            </span>
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              {project.status}
            </span>
          </div>

          {project.testSuite && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <TestTube className="w-3.5 h-3.5" />
              <span>{project.testSuite.passed} Automated Tests in Repository</span>
            </div>
          )}
        </div>

        {/* Title and Subtitle */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-cyan-400 font-medium mt-2">
            {project.subtitle}
          </p>
        </div>

        {/* Executive Summary */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
          {project.summary}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          {project.liveDeployment && (
            <LiveDeploymentBadge
              url={project.liveDeployment.url}
              status={project.liveDeployment.verifiedStatus}
              label={project.liveDeployment.label}
              className="text-sm px-4 py-2"
            />
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Repository ({project.canonicalRepo})</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Dedicated Section: My Individual Contribution */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 bg-cyan-950/10 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
          <UserCheck className="w-4 h-4" />
          <span>My Individual Contribution</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Role & Engineering Ownership
        </h2>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {project.myContribution}
        </p>
      </div>

      {/* Grid: Problem Statement vs Solution Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem Statement */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>The Engineering Problem</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Operational Constraints & Bottlenecks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Solution & Architecture */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>The Technical Solution</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            System Architecture & Pipeline
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            {project.solutionArchitecture}
          </div>
        </div>
      </div>

      {/* Architecture Diagram */}
      {project.architectureDiagram && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Data Flow & Component Interactions</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">ASCII Architecture Blueprint</span>
          </div>
          <pre className="text-xs font-mono text-slate-200 bg-black/60 p-5 rounded-xl border border-white/5 overflow-x-auto leading-relaxed">
            {project.architectureDiagram}
          </pre>
        </div>
      )}

      {/* Machine Learning Models & Algorithms */}
      {project.models && project.models.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>Machine Learning Models & Algorithms</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Evaluated & Deployed Architectures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.models.map((model, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-xs font-medium text-slate-200 leading-relaxed">
                  {model}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Datasets & Ground Truth Provenance */}
      {project.datasets && project.datasets.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>Datasets & Ground Truth Provenance</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Data Integrity & Scientific Sources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {project.datasets.map((ds, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2"
              >
                <div className="font-bold text-white text-xs sm:text-sm">
                  {ds.name}
                </div>
                <div className="text-[11px] font-mono text-cyan-400">
                  Source: {ds.source}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ds.description}
                </p>
                {ds.recordsOrCoverage && (
                  <div className="text-[10px] font-mono text-emerald-400/90 pt-1">
                    Coverage: {ds.recordsOrCoverage}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scientific Validation & Leakage Safe Protocol */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Scientific Protocol & Zero Data Leakage</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Partitioning & Experimental Hygiene
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.scientificValidationProtocol}
        </p>
      </div>

      {/* Empirical Evaluation & Benchmarks */}
      {project.benchmarksTable && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <LineChart className="w-4 h-4" />
            <span>Empirical Evaluation & Benchmarks</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.benchmarksTable.caption}
          </h2>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-mono text-[11px]">
                  {project.benchmarksTable.headers.map((h, i) => (
                    <th key={i} className="py-3 px-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {project.benchmarksTable.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-3 px-4 ${
                          cIdx === 0
                            ? "font-sans font-medium text-white"
                            : cIdx === row.length - 1 || cell.includes("%") || cell.includes("°C")
                            ? "text-cyan-300 font-bold"
                            : "text-slate-300"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Specialized Table: Depth-Wise Errors for Ocean Subsurface */}
      {project.depthWiseErrors && project.depthWiseErrors.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
            <LineChart className="w-4 h-4" />
            <span>Vertical Stratum Error Distribution (0–1000m)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Depth-Wise Reconstruction Performance vs. Daily Climatology
          </h2>
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-mono text-[11px]">
                  <th className="py-3 px-4 font-semibold">Oceanic Depth Strata</th>
                  <th className="py-3 px-4 font-semibold">B8 Test RMSE</th>
                  <th className="py-3 px-4 font-semibold">Relative Gain vs. Climatology (B1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {project.depthWiseErrors.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-white">{row.depth}</td>
                    <td className="py-3 px-4 text-cyan-300 font-bold">{row.rmse}</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">+{row.gainVsClimatology}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Specialized Table: Candidate Blocking vs Matching for Amazon ML */}
      {project.blockingVsMatching && project.blockingVsMatching.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-violet-400 font-bold text-sm uppercase tracking-wider">
            <LineChart className="w-4 h-4" />
            <span>Candidate Blocking vs. Pairwise Matching Metrics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Stage-by-Stage Search Space Reduction & Macro F0.5 Evolution
          </h2>
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-mono text-[11px]">
                  <th className="py-3 px-4 font-semibold">Pipeline Iteration</th>
                  <th className="py-3 px-4 font-semibold">Candidate Recall</th>
                  <th className="py-3 px-4 font-semibold">Pair Space Reduction</th>
                  <th className="py-3 px-4 font-semibold">Validation Macro F0.5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {project.blockingVsMatching.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-white">{row.stage}</td>
                    <td className="py-3 px-4 text-slate-200">{row.candidateRecall}</td>
                    <td className="py-3 px-4 text-emerald-400">{row.reductionRatio}</td>
                    <td className="py-3 px-4 text-cyan-300 font-bold">{row.f05}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Primary Metrics Summary */}
      {project.evaluationMetrics && project.evaluationMetrics.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <FileCheck className="w-4 h-4" />
            <span>Key Metric Specifications</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {project.evaluationMetrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] uppercase font-mono tracking-wider text-slate-400">
                    {m.metric}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 mt-1">
                    {m.value}
                  </div>
                  {m.baseline && (
                    <div className="text-[11px] text-slate-400 font-mono mt-1">
                      Baseline: {m.baseline}
                    </div>
                  )}
                </div>
                <div className="text-[10px] text-slate-500 font-mono pt-2 border-t border-white/5">
                  Protocol: {m.protocol}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Limitations and Failure Cases */}
      {project.limitationsAndFailureCases && project.limitationsAndFailureCases.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/30 bg-amber-950/10 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Limitations & Failure Modes</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Scientific Boundary Conditions & Failure Modes
          </h2>
          <ul className="space-y-3 pt-2">
            {project.limitationsAndFailureCases.map((lim, idx) => (
              <li
                key={idx}
                className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-slate-300"
              >
                <div className="w-5 h-5 rounded bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">{lim}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reproduction & Verification Instructions */}
      {project.reproductionInstructions && (
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Independent Reproduction Guide</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Self-Contained Verification</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            How to Clone, Install, and Run Tests
          </h2>
          <pre className="text-xs font-mono text-slate-200 bg-black/60 p-5 rounded-xl border border-white/5 overflow-x-auto leading-relaxed whitespace-pre-wrap">
            {project.reproductionInstructions}
          </pre>
        </div>
      )}

      {/* Highlights & Innovations */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>System Highlights & Key Innovations</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {project.highlights.map((h, idx) => (
            <li
              key={idx}
              className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-slate-300"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Technical Stack</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Repository Lineage & Audit Notes */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 bg-black/40">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          Repository Lineage & Audit Resolution
        </div>
        <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>Canonical Repository:</strong>{" "}
            <code className="text-cyan-400 font-mono">{project.canonicalRepo}</code>
          </p>
          {project.predecessors && project.predecessors.length > 0 && (
            <p>
              <strong>Predecessors / Development Iterations:</strong>{" "}
              {project.predecessors.map((p) => (
                <code key={p} className="text-slate-400 font-mono mr-2">
                  {p}
                </code>
              ))}
            </p>
          )}
          <p className="text-slate-400">{project.auditNotes}</p>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-surface to-blue-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">
            Experience the system or inspect the source
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Access verified deployments or inspect the codebase on GitHub.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.liveDeployment && (
            <a
              href={project.liveDeployment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-md shadow-cyan-500/20"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors flex items-center gap-2"
          >
            <Github className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}

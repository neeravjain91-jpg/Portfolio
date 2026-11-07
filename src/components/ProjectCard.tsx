"use client";

import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  TestTube,
} from "lucide-react";
import { LiveDeploymentBadge } from "./LiveDeploymentBadge";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getBadgeColors = (colorScheme: string) => {
    switch (colorScheme) {
      case "cyan":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      case "amber":
        return "text-amber-400 bg-amber-500/10 border-amber-500/30";
      case "violet":
        return "text-violet-400 bg-violet-500/10 border-violet-500/30";
      case "sky":
        return "text-sky-400 bg-sky-500/10 border-sky-500/30";
      default:
        return "text-slate-300 bg-slate-500/10 border-slate-500/30";
    }
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between transition-all duration-300 group border border-white/10 hover:border-cyan-500/30 relative overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />

      {/* Top Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getBadgeColors(
                project.colorScheme
              )}`}
            >
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
              {project.tier}
            </span>
          </div>

          {project.testSuite && (
            <div
              className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              title={`${project.testSuite.passed} passing tests`}
            >
              <TestTube className="w-3 h-3 text-emerald-400" />
              <span>{project.testSuite.passed} tests passed</span>
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight flex items-center justify-between">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="text-xs text-cyan-400/90 font-medium mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Summary */}
        <p className="text-xs text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Key Evaluation Metric if present */}
        {project.evaluationMetrics && project.evaluationMetrics.length > 0 && (
          <div className="mb-4 p-3 rounded-lg bg-black/40 border border-white/5">
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1">
              Primary Empirical Benchmark
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-slate-300 truncate max-w-[65%]">
                {project.evaluationMetrics[0].metric}
              </span>
              <span className="text-sm font-bold font-mono text-cyan-400">
                {project.evaluationMetrics[0].value}
              </span>
            </div>
            {project.evaluationMetrics[0].baseline && (
              <div className="text-[10px] text-slate-400 mt-1 font-mono">
                Baseline: {project.evaluationMetrics[0].baseline}
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.liveDeployment && (
            <LiveDeploymentBadge
              url={project.liveDeployment.url}
              status={project.liveDeployment.verifiedStatus}
              label="Live App"
            />
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5 transition-colors"
            title={`View GitHub Repository (${project.canonicalRepo})`}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
        >
          <span>Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

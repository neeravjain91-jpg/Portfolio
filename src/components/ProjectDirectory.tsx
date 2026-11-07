"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FEATURED_PROJECTS,
  ALL_REPOSITORIES,
  ProjectCategory,
  ProjectItem,
  RepositoryAuditRecord,
} from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import {
  CheckCircle2,
  ExternalLink,
  Filter,
  Github,
  Layers,
  Search,
  Sparkles,
  TestTube,
} from "lucide-react";

export const ProjectDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyLive, setOnlyLive] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"showcase" | "audit">("showcase");

  const categories: string[] = [
    "All",
    "AI/ML",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "Research",
    "Full Stack",
    "IoT/Edge",
  ];

  // Filter showcase projects
  const filteredProjects = useMemo(() => {
    return FEATURED_PROJECTS.filter((p) => {
      // Category match
      const matchesCat =
        selectedCategory === "All" ||
        p.category === selectedCategory ||
        (p.additionalCategories && p.additionalCategories.includes(selectedCategory as ProjectCategory));

      // Live match
      const matchesLive = !onlyLive || (p.liveDeployment !== null && p.liveDeployment.verifiedStatus === 200);

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.models.some((m) => m.toLowerCase().includes(q));

      return matchesCat && matchesLive && matchesSearch;
    });
  }, [selectedCategory, searchQuery, onlyLive]);

  // Filter full 24-repo audit directory
  const filteredRepositories = useMemo(() => {
    return ALL_REPOSITORIES.filter((r) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.language.toLowerCase().includes(q) ||
        r.auditVerdict.toLowerCase().includes(q);

      const matchesLive = !onlyLive || (r.liveStatus === 200);

      return matchesSearch && matchesLive;
    });
  }, [searchQuery, onlyLive]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-5">
        {/* Top Controls Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by model, technology, dataset, algorithm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080b11] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Toggle Live Only & View Mode */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors select-none">
              <input
                type="checkbox"
                checked={onlyLive}
                onChange={(e) => setOnlyLive(e.target.checked)}
                className="rounded border-slate-700 text-cyan-400 focus:ring-0"
              />
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Demos Only
              </span>
            </label>

            {/* View switcher */}
            <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
              <button
                onClick={() => setViewMode("showcase")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "showcase"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Major Showcase ({FEATURED_PROJECTS.length})
              </button>
              <button
                onClick={() => setViewMode("audit")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "audit"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Full 24-Repo Audit ({ALL_REPOSITORIES.length})
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills (for showcase view) */}
        {viewMode === "showcase" && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-[11px] font-mono text-slate-500 uppercase mr-1">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-400 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Grid: Showcase View */}
      {viewMode === "showcase" ? (
        <div>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400">
                No major projects matched your filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setOnlyLive(false);
                }}
                className="mt-3 text-xs text-cyan-400 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Full 24-Repo Audit View */
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-4 bg-black/40 border-b border-white/10 flex items-center justify-between">
            <div className="text-xs font-semibold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Full GitHub Repository Audit Ledger (24 Public Repositories)</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Showing {filteredRepositories.length} of {ALL_REPOSITORIES.length} repositories
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-mono text-[11px]">
                  <th className="py-3 px-4">Repository</th>
                  <th className="py-3 px-4">Lineage / Status</th>
                  <th className="py-3 px-4">Primary Language</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Live Deployment</th>
                  <th className="py-3 px-4">Tests</th>
                  <th className="py-3 px-4">Audit Resolution & Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredRepositories.map((repo) => (
                  <tr
                    key={repo.name}
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="py-3 px-4 font-mono font-medium text-white whitespace-nowrap">
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

                    <td className="py-3 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
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

                    <td className="py-3 px-4 font-mono text-slate-300">
                      {repo.language || "Config / Docs"}
                    </td>

                    <td className="py-3 px-4 text-slate-300">
                      {repo.category}
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      {repo.liveUrl ? (
                        <a
                          href={repo.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:underline"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>HTTP {repo.liveStatus || 200} OK</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[11px] text-slate-600 font-mono">None</span>
                      )}
                    </td>

                    <td className="py-3 px-4 font-mono text-slate-300">
                      {repo.testCount ? (
                        <span className="text-emerald-400 font-semibold">
                          {repo.testCount} passed
                        </span>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-slate-400 text-[11px] leading-relaxed max-w-xs">
                      {repo.auditVerdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

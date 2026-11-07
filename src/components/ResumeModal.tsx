"use client";

import React from "react";
import {
  Download,
  Mail,
  Printer,
  X,
  ExternalLink,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { FEATURED_PROJECTS } from "@/data/projects";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0c121e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080b11]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-semibold text-white tracking-wide">
              Curriculum Vitae — Neerav Jain
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Neerav_Jain_Resume.pdf"
              download="Neerav_Jain_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors shadow-sm"
              title="Download ATS-friendly 1-Page PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-md transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {PROFILE_DATA.role}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {PROFILE_DATA.location} • {PROFILE_DATA.degree}
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-1 text-xs code-font text-slate-300">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="hover:text-cyan-400 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PROFILE_DATA.email}</span>
              </a>
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>github.com/neeravjain91-jpg</span>
              </a>
              <span className="text-emerald-400">5+ Verified Live Deployments</span>
            </div>
          </div>

          {/* Research & Engineering Philosophy */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Engineering Philosophy & Experimental Standard
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROFILE_DATA.philosophy.map((item) => (
                <div key={item.principle} className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="font-semibold text-xs text-cyan-300 mb-1">{item.principle}</div>
                  <div className="text-[11px] text-slate-400 leading-normal">{item.explanation}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Education
            </h2>
            <div className="space-y-4">
              {PROFILE_DATA.education.map((edu) => (
                <div key={edu.degree} className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-white text-sm">
                      {edu.degree} — {edu.field}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">{edu.institution}, {edu.location}</div>
                  <ul className="list-disc list-inside text-xs text-slate-400 mt-1 space-y-0.5">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              Work & Industrial Experience
            </h2>
            <div className="space-y-5">
              {PROFILE_DATA.experience.map((exp) => (
                <div key={exp.role} className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-white text-sm">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {exp.organization} • {exp.location} ({exp.type})
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-400 mt-1 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Flagship Engineering Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              Flagship Engineering & Research Projects
            </h2>
            <div className="space-y-5">
              {FEATURED_PROJECTS.slice(0, 5).map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-white text-sm flex items-center gap-2">
                      {p.title}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {p.tier}
                      </span>
                    </span>
                    {p.testSuite && (
                      <span className="text-[11px] font-mono text-emerald-400">
                        {p.testSuite.passed} tests passed (100%)
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300">{p.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.summary}</p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                    {p.liveDeployment && (
                      <a
                        href={p.liveDeployment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live App ({p.liveDeployment.url.replace('https://', '')})</span>
                      </a>
                    )}
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1 font-mono text-[11px]"
                    >
                      <Github className="w-3 h-3" />
                      <span>{p.canonicalRepo}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 mb-3">
              Technical Tooling Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROFILE_DATA.skillCategories.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-lg bg-black/30 border border-white/5 space-y-1.5">
                  <div className="font-semibold text-slate-200">{cat.title}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#080b11] flex items-center justify-between text-xs text-slate-400">
          <span>Authoritative developer CV • Neerav Jain</span>
          <div className="flex items-center gap-3">
            <a
              href="/Neerav_Jain_Resume.pdf"
              download="Neerav_Jain_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-md text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

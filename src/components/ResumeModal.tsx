"use client";

import React, { useEffect, useRef } from "react";
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume_modal_title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0c121e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080b11]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h2 id="resume_modal_title" className="text-sm font-semibold text-white tracking-wide">
              Curriculum Vitae — Neerav Jain
            </h2>
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
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-md transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.1] rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body / Document Preview */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {PROFILE_DATA.name}
                </h1>
                <p className="text-sm font-medium text-cyan-400 mt-0.5">
                  B.Tech CSE (AI & ML) Student • Applied Machine Learning & Systems Research
                </p>
              </div>
              <div className="text-xs text-slate-400 space-y-1 sm:text-right font-mono">
                <div>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
                <div>{PROFILE_DATA.location}</div>
                <div className="text-cyan-300">
                  <a
                    href="https://github.com/neeravjain91-jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    <span>github.com/neeravjain91-jpg</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-2 leading-relaxed max-w-3xl">
              {PROFILE_DATA.bioSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </div>
            <div className="space-y-4">
              {PROFILE_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">
                      {edu.degree} — {edu.field}
                    </span>
                    <span className="text-xs font-mono text-cyan-300">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {edu.institution}, {edu.location}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pt-1">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
              <Briefcase className="w-4 h-4" />
              <span>Engineering Experience & Industrial Training</span>
            </div>
            <div className="space-y-4">
              {PROFILE_DATA.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-cyan-300">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {exp.organization} • {exp.location} ({exp.type})
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
              <Code2 className="w-4 h-4" />
              <span>Flagship Research & Systems Projects</span>
            </div>
            <div className="space-y-4">
              {FEATURED_PROJECTS.slice(0, 5).map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">
                      {project.title} — {project.subtitle}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                    <div>
                      {project.evaluationMetrics[0] && (
                        <span>
                          <strong className="text-cyan-300">
                            {project.evaluationMetrics[0].metric}:
                          </strong>{" "}
                          {project.evaluationMetrics[0].value}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.testSuite && (
                        <span className="text-emerald-400">
                          {project.testSuite.passed} tests
                        </span>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Tooling Matrix */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-cyan-400 uppercase">
              <Award className="w-4 h-4" />
              <span>Technical Skills Tooling Matrix</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {PROFILE_DATA.skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1.5"
                >
                  <div className="font-bold text-white text-xs">{cat.title}</div>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300"
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
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#080b11] text-xs text-slate-400 font-mono">
          <span>Authoritative developer CV • Neerav Jain</span>
          <div className="flex items-center gap-2">
            <a
              href="/Neerav_Jain_Resume.pdf"
              download="Neerav_Jain_Resume.pdf"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download 1-Page PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

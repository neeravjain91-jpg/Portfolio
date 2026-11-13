"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Flame,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Layers,
  LineChart,
  Mail,
  Plane,
  Radar,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  Waves,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { CENTRALIZED_DEPLOYMENTS, FEATURED_PROJECTS } from "@/data/projects";
import { ProjectDirectory } from "@/components/ProjectDirectory";
import { ContactForm } from "@/components/ContactForm";
import { ResumeModal } from "@/components/ResumeModal";
import { LiveDeploymentBadge } from "@/components/LiveDeploymentBadge";

const ICON_MAP: Record<string, any> = {
  "aeropulse-x": Plane,
  "ocean-subsurface-ml": Waves,
  "wildfire-intelligence": Flame,
  "signature-vmake": ShieldCheck,
  "bank-statement-extractor": Server,
};

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section id="overview" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-radial-hero pointer-events-none -z-10" />
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Authentic Academic & Role Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>B.Tech CSE (AI & ML) Student • ABES Engineering College</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">5+ Verified Live Deployments</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineering <span className="text-gradient-cyan">Reliable AI</span> & Physics-Informed Systems.
            </h1>

            {/* Sub-headline / Mission */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl leading-relaxed">
              Applied machine learning engineer and systems researcher. I build <strong>physics-informed neural modeling pipelines, spatiotemporal Earth observation systems, biometric computer vision architectures, and production-oriented AI platforms</strong> with verified live cloud deployments.
            </p>

            {/* Prominent Action Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Neerav_Jain_Resume.pdf"
                download="Neerav_Jain_Resume.pdf"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/deployments"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all flex items-center gap-2"
              >
                <Radar className="w-4 h-4 text-emerald-400" />
                <span>Live Deployments (5)</span>
              </Link>

              <a
                href="https://github.com/neeravjain91-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View CV</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Key Performance Indicators Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-10 mt-6 border-t border-white/10">
              <div className="glass-panel rounded-xl p-4 text-center border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                  5+
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Live Web Deployments
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                  HTTP 200 Verified
                </div>
              </div>

              <div className="glass-panel rounded-xl p-4 text-center border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                  568
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Repository Pytest Tests
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Across 5 Project Suites
                </div>
              </div>

              <div className="glass-panel rounded-xl p-4 text-center border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-sky-400">
                  0.98 °C
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Subsurface Ocean RMSE
                </div>
                <div className="text-[10px] text-sky-400/80 font-mono mt-0.5">
                  -22.11% vs Climatology
                </div>
              </div>

              <div className="glass-panel rounded-xl p-4 text-center border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
                  99.81%
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  UAV Twin Fault Accuracy
                </div>
                <div className="text-[10px] text-amber-400/80 font-mono mt-0.5">
                  Rotax 914 ODE Simulation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED LIVE DEPLOYMENTS SPOTLIGHT */}
      <section id="deployments" className="py-16 border-t border-white/10 bg-[#06090f]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-2">
                <Radar className="w-3.5 h-3.5" />
                <span>Verified Cloud Telemetry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Verified Live Deployments
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Every listed application is actively running in production on Vercel Fluid Compute with verified HTTP 200 OK health status.
              </p>
            </div>
            <Link
              href="/deployments"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View Deployments Command Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CENTRALIZED_DEPLOYMENTS.map((dep) => {
              const Icon = ICON_MAP[dep.slug] || Globe;
              return (
                <div
                  key={dep.title}
                  className="glass-panel rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <LiveDeploymentBadge
                        url={dep.url}
                        status={dep.status}
                        label="Active"
                      />
                    </div>
                    <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {dep.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 mb-3">
                      {dep.role}
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1 mb-4">
                      <div className="text-[11px] font-mono text-cyan-300">
                        {dep.empiricalMetric}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">
                        {dep.runtime} • {dep.latencyMs}ms
                      </div>
                    </div>
                  </div>

                  <a
                    href={dep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <span>Launch Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SCIENTIFIC & ENGINEERING PHILOSOPHY */}
      <section id="philosophy" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Rigorous Experimental Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering & Research Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Machine learning models in mission-critical domains (aerospace, geophysics, biometrics) must adhere to uncompromised experimental hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROFILE_DATA.philosophy.map((item, index) => (
              <div
                key={item.principle}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all relative group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">
                    0{index + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.principle}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>

          {/* Diagram flow */}
          <div className="mt-10 glass-panel rounded-2xl p-6 border border-white/10">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Authoritative Data & Model Execution Architecture</span>
            </div>
            <pre className="text-[11px] sm:text-xs font-mono text-slate-300 overflow-x-auto p-4 bg-black/50 rounded-xl border border-white/5 leading-relaxed">
{`Data Integrity & Ingestion (Check-gated, Causal Masking, Sensor Veto)
               ↓
Leakage-Safe Partitioning (Chronological Splits, Purge Buffers, Disjoint Grouping)
               ↓
Domain-Informed Modeling (Thermodynamic / Geophysical Physics + Deep Ensembles + Tree Baselines)
               ↓
Empirical Calibration & Validation (Platt Scaling, Block Bootstrap 95% CI, Adversarial Holdouts)
               ↓
Production Deployment & Systems Engineering (FastAPI / Next.js, WebGL Telemetry, Cryptographic Audit Ledgers)`}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS & DIRECTORY */}
      <section id="projects" className="py-20 border-t border-white/10 bg-[#06090f]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Central Project Directory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Projects & System Directory
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Explore deep technical architectures, verified live deployments, machine learning benchmarks, and the complete 24-repository audit ledger.
              </p>
            </div>
          </div>

          {/* Reusable Filterable Project Directory */}
          <ProjectDirectory />
        </div>
      </section>

      {/* 5. TECHNICAL SKILLS TOOLING MATRIX */}
      <section id="skills" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Full-Stack & ML Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Tooling Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Demonstrated competencies across theoretical modeling, deep learning architectures, geospatial data assimilation, and high-reliability systems engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE_DATA.skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all space-y-4"
              >
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-200 hover:border-cyan-500/30 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE & EDUCATION */}
      <section id="experience" className="py-20 border-t border-white/10 bg-[#06090f]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30">
                <Layers className="w-3.5 h-3.5" />
                <span>Industry Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Work History & Traineeships
              </h2>

              <div className="space-y-4">
                {PROFILE_DATA.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-white text-base">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {exp.organization} • {exp.location} ({exp.type})
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 pt-1">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Education & Research Focus
              </h2>

              <div className="space-y-4">
                {PROFILE_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-white text-base">
                        {edu.degree} — {edu.field}
                      </h3>
                      <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium">
                      {edu.institution}, {edu.location}
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 pt-1">
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & INQUIRIES */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Accessible Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

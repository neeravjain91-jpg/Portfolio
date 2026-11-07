import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Flame,
  Globe,
  Plane,
  Radar,
  Server,
  ShieldCheck,
  Terminal,
  Waves,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { LiveDeploymentBadge } from "@/components/LiveDeploymentBadge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Deployments Command Center | Neerav Jain",
  description:
    "Central monitoring hub for Neerav Jain's verified production AI systems, digital twin telemetry stations, and scientific prototypes running on Vercel.",
};

interface DeploymentEntry {
  title: string;
  codename: string;
  role: string;
  category: string;
  url: string;
  status: number;
  runtime: string;
  verifiedDate: string;
  architecture: string;
  empiricalMetric: string;
  githubRepo: string;
  icon: any;
  color: string;
  slug?: string;
  features: string[];
}

const DEPLOYMENTS: DeploymentEntry[] = [
  {
    title: "AeroPulse-X Tactical Ground Control Station & 3D Twin",
    codename: "SIH26054 UAV Health Prototype",
    role: "Propulsion Digital Twin for MALE-UAV Rotax 914 Aero-Piston Engine",
    category: "AI/ML & Digital Twins",
    url: "https://aeropulse-test.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • FastAPI • Three.js WebGL",
    verifiedDate: "2026-11-07 (HTTP 200 OK)",
    architecture:
      "Reduced-order thermodynamic Otto cycle, dynamic ISA flight atmosphere, HistGradientBoosting 0.70 + TCN residual 0.30, cross-sensor peer veto.",
    empiricalMetric: "99.81% Synthetic Trajectory Accuracy • 308 Passed Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/final-aeropulse",
    icon: Plane,
    color: "cyan",
    slug: "aeropulse-x",
    features: [
      "Real-time Three.js WebGL 3D cylinder kinematics and temperature gradient rendering",
      "Dynamic ISA atmospheric flight simulator with wind shear vectors",
      "Peer cross-sensor trust verification isolating sensor drift from true mechanical faults",
      "Physics-stress weighted RUL prognostics enforcing monotonic degradation",
    ],
  },
  {
    title: "North Indian Ocean Subsurface Temperature Reconstruction",
    codename: "B8 Spatiotemporal Embedding Network",
    role: "Reconstructing 15 Vertical Ocean Depths (0–1000m) from 7 Satellite Feeds",
    category: "Deep Learning & Geospatial",
    url: "https://code-gules-three.vercel.app",
    status: 200,
    runtime: "Vercel Static / Fluid Compute • PyTorch • xarray",
    verifiedDate: "2026-11-07 (HTTP 200 OK)",
    architecture:
      "Causal 5-day × 3×3 spatiotemporal surface window, 2D convolutional spatial feature extractors, bidirectional recurrent embedding core, 15-depth vertical decoder.",
    empiricalMetric: "0.9800 °C Column RMSE • 22.11% Reduction vs Climatology (B1)",
    githubRepo: "https://github.com/neeravjain91-jpg/-Satellite-Embedding",
    icon: Waves,
    color: "sky",
    slug: "ocean-subsurface-ml",
    features: [
      "7 satellite predictor assimilation (OSTIA SST, SMAP SSS, CMEMS SSH, OSCAR & CCMP Vectors)",
      "Strict chronological purge-buffered test partition (Days 313–365 of 2020)",
      "106 passing automated tests covering dataset contracts and causal bounds",
      "Interactive depth-slice visualizer and Argo CTD float empirical comparison",
    ],
  },
  {
    title: "Sovereign India Multimodal Wildfire Intelligence",
    codename: "Event-Centric Spatiotemporal Forecasting",
    role: "Sovereign Wildfire Risk Forecasting across Multi-Timescale Reanalysis & Topography",
    category: "AI/ML & Earth Observation",
    url: "https://major-forest-fire.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • Python 3.11 • LightGBM",
    verifiedDate: "2026-11-07 (HTTP 200 OK)",
    architecture:
      "NASA FIRMS VIIRS 375m active fire telemetry, Copernicus ERA5-Land multi-timescale meteorology, NOAA ETOPO 2022 DEM geomorphology (SRTM v3), DBSCAN fire clusters.",
    empiricalMetric: "0.8920 LOGRO Cross-Regime ROC-AUC • 60 Passed Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/major-forest-fire",
    icon: Flame,
    color: "amber",
    slug: "wildfire-intelligence",
    features: [
      "Leave-One-Geographic-Regime-Out (LOGRO) spatial cross-validation preventing spatial memorization",
      "Biophysical fuel moisture deficit modeling (Equilibrium Moisture Content & VPD)",
      "NOAA ETOPO 2022 high-resolution DEM slope, aspect, and terrain ruggedness indices",
      "Live risk prediction interface with sovereign geospatial boundary filtering",
    ],
  },
  {
    title: "SYNAPSE / SIGNATURE VMAKE Biometric Verification",
    codename: "Enterprise Offline Signature Forensics",
    role: "Writer-Independent Biometric Signature Verification & Fraud Risk Assessment",
    category: "Computer Vision & FinTech",
    url: "https://signature-v-five.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • PyTorch ResNet-18 • FastAPI",
    verifiedDate: "2026-11-07 (HTTP 200 OK)",
    architecture:
      "ResNet-18 Siamese deep metric learning backbone, ForgeryAwareMetricLoss, multi-reference customer gallery centroid aggregation, 3NF PostgreSQL/SQLite.",
    empiricalMetric: "4.82% Unseen Writer EER • 53 Passed Tests (100%)",
    githubRepo: "https://github.com/neeravjain91-jpg/signature-v",
    icon: ShieldCheck,
    color: "violet",
    slug: "signature-vmake",
    features: [
      "Open-set evaluation on strictly unseen CEDAR writers 46–55 with zero data leakage",
      "Multi-reference customer gallery aggregation dropping EER to 3.91%",
      "3-level banking architecture compliant with Bank Muscat BRD specifications",
      "Immutable 3NF transaction audit schema with maker-checker queues",
    ],
  },
  {
    title: "Bank Statement Table Extraction & Banking Analytics",
    codename: "Bank Muscat BRD Series Deliverable",
    role: "Document Intelligence & Categorization Pipeline for Banking Statements",
    category: "AI/ML & Document Intelligence",
    url: "https://mayank-ten-indol.vercel.app",
    status: 200,
    runtime: "Vercel Fluid Compute • FastAPI • PyMuPDF",
    verifiedDate: "2026-11-07 (HTTP 200 OK)",
    architecture:
      "PyMuPDF vector geometry token extraction, scikit-learn layout line role classifier, DistilBERT MNLI zero-shot transaction categorizer, running balance checksums.",
    empiricalMetric: "99.10% Table Recall • 100% Balance Consistency • 41 Passed Tests",
    githubRepo: "https://github.com/neeravjain91-jpg/bank",
    icon: Server,
    color: "emerald",
    slug: "bank-statement-extractor",
    features: [
      "Native support for 3-decimal currencies (OMR) and international statement layouts",
      "Automated running balance accounting consistency checksum verification",
      "Zero-shot transaction categorization into corporate accounting categories",
      "41 passing unit, regression, and security tests",
    ],
  },
];

export default function DeploymentsPage() {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-3">
              <Radar className="w-3.5 h-3.5" />
              <span>Production Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Live Deployments Command Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Real-time monitoring and direct access portal for Neerav Jain’s verified
              cloud deployments. Each deployment has undergone automated uptime health
              checks and scientific data integrity validation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <div className="text-xs">
              <div className="font-bold text-white">All 5 Production Nodes Online</div>
              <div className="text-slate-400 font-mono text-[11px]">HTTP 200 OK • Vercel Edge</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployments List */}
      <div className="space-y-8">
        {DEPLOYMENTS.map((dep, index) => {
          const Icon = dep.icon;
          return (
            <div
              key={dep.title}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all space-y-6 relative overflow-hidden"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10">
                        {dep.category}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        {dep.codename}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {dep.title}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {dep.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <LiveDeploymentBadge
                    url={dep.url}
                    status={dep.status}
                    label="Online"
                    className="text-xs px-3.5 py-1.5"
                  />
                  <a
                    href={dep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Specs & Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">
                    Runtime & Environment
                  </div>
                  <div className="font-mono text-slate-200">{dep.runtime}</div>
                  <div className="text-[11px] font-mono text-emerald-400">
                    Status: {dep.verifiedDate}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">
                    Empirical Performance Envelope
                  </div>
                  <div className="font-mono font-bold text-cyan-300">
                    {dep.empiricalMetric}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    Architecture: {dep.architecture}
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Production Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {dep.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-slate-400">
                  <a
                    href={dep.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1.5 font-mono text-[11px]"
                  >
                    <span>View GitHub Source Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {dep.slug && (
                    <Link
                      href={`/projects/${dep.slug}`}
                      className="text-cyan-400 hover:underline font-mono text-[11px]"
                    >
                      Read Technical Deep Dive →
                    </Link>
                  )}
                </div>

                <div className="text-[11px] font-mono text-slate-500">
                  Canonical URL: <span className="text-slate-400">{dep.url}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

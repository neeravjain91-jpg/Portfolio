import React from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface LiveDeploymentBadgeProps {
  url: string;
  status?: number | string;
  label?: string;
  verifiedAt?: string;
  className?: string;
}

export const LiveDeploymentBadge: React.FC<LiveDeploymentBadgeProps> = ({
  url,
  status = 200,
  label = "Live Deployment",
  verifiedAt,
  className = "",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all group ${className}`}
      title={`Verified Live: ${url} (HTTP ${status})`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="font-semibold tracking-wide flex items-center gap-1.5">
        {label}
        <span className="text-[10px] font-mono px-1 rounded bg-emerald-500/20 text-emerald-300">
          HTTP {status}
        </span>
      </span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
};

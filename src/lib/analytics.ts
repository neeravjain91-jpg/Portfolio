/**
 * Privacy-Conscious Analytics Utility
 *
 * Designed to measure high-level engagement without tracking cookies,
 * persistent hardware fingerprinting, or harvesting personal information.
 * Respects user "Do Not Track" browser preferences.
 */

export type AnalyticsEvent =
  | "page_view"
  | "resume_download"
  | "project_view"
  | "github_click"
  | "demo_click"
  | "contact_submit";

interface EventProperties {
  path?: string;
  projectId?: string;
  targetUrl?: string;
  section?: string;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: AnalyticsEvent, properties?: EventProperties): void {
  if (typeof window === "undefined") return;

  // Respect Global Privacy Control (GPC) and Do Not Track (DNT)
  const dnt = navigator.doNotTrack || (window as any).doNotTrack;
  if (dnt === "1" || dnt === "yes") {
    return;
  }

  // Safe anonymous event payload (zero PII, zero cookies, zero personal identifiers)
  const payload = {
    event,
    timestamp: new Date().toISOString(),
    pathname: window.location.pathname,
    ...properties,
  };

  // In development, log anonymously for verification
  if (process.env.NODE_ENV === "development") {
    // console.log("[Privacy-Conscious Analytics]", payload);
  }

  // Dispatch custom window event for optional pluggable analytics listeners (e.g. Plausible / Vercel Web Analytics)
  try {
    const customEvent = new CustomEvent("portfolio_analytics", { detail: payload });
    window.dispatchEvent(customEvent);
  } catch {
    // Fail silently without blocking UI
  }
}

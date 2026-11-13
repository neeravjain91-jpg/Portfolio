"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-bot honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation check
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          honeypot: honeypot.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Unable to deliver message. Please contact neeravjain91@gmail.com directly."
        );
      }

      // Successful server-side acceptance
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setHoneypot("");
    } catch (err: any) {
      console.error("Submission error:", err);
      // Preserve form field inputs on error; only update error banner
      setErrorMessage(
        err.message ||
          "Failed to deliver message via email provider. Please contact neeravjain91@gmail.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>Direct Channel</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Let’s collaborate on reliable AI & systems engineering
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Whether you’re interested in physics-informed neural networks,
                spatiotemporal forecasting architectures, edge computer vision,
                or applied machine learning internships, reach out directly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">
                    Primary Inbox
                  </div>
                  <a
                    href="mailto:neeravjain91@gmail.com"
                    className="font-medium text-white hover:text-cyan-400 transition-colors"
                  >
                    neeravjain91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">
                    GitHub Profile
                  </div>
                  <a
                    href="https://github.com/neeravjain91-jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-cyan-400 transition-colors"
                  >
                    github.com/neeravjain91-jpg
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Security & Privacy Protocol</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Submissions are validated with distributed atomic rate limiting, anti-spam honeypot detection,
                and HTML sanitization. Inquiries are relayed directly to{" "}
                <span className="text-slate-200 font-mono">neeravjain91@gmail.com</span>. No marketing cookies, tracking databases, or third-party advertising profiling are used.
              </p>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-3">
            {/* Live screen reader announcement */}
            <div aria-live="polite" className="sr-only">
              {isSuccess && "Your message was accepted by the email dispatch provider."}
              {errorMessage && `Form error: ${errorMessage}`}
            </div>

            {isSuccess ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your inquiry has been accepted by the email dispatch provider and forwarded directly to
                  Neerav’s primary inbox at <span className="font-mono text-cyan-300">neeravjain91@gmail.com</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Error Banner */}
                {errorMessage && (
                  <div
                    id="contact_error_banner"
                    role="alert"
                    className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300 animate-in fade-in"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                    <div className="flex-1 leading-relaxed">
                      <span>{errorMessage}</span>{" "}
                      <a
                        href={`mailto:neeravjain91@gmail.com?subject=${encodeURIComponent(
                          subject || "Portfolio Contact"
                        )}&body=${encodeURIComponent(message)}`}
                        className="underline text-rose-200 font-semibold hover:text-white"
                      >
                        Click here to email directly
                      </a>
                      .
                    </div>
                  </div>
                )}

                {/* Honeypot field (hidden from real users, caught by bots) */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="company_fax">Company Fax</label>
                  <input
                    id="company_fax"
                    type="text"
                    name="company_fax"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact_name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact_name"
                      type="text"
                      required
                      placeholder="e.g. Alex Wright"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={errorMessage ? "true" : "false"}
                      aria-describedby={errorMessage ? "contact_error_banner" : undefined}
                      className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact_email"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact_email"
                      type="email"
                      required
                      placeholder="alex@domain.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={errorMessage ? "true" : "false"}
                      aria-describedby={errorMessage ? "contact_error_banner" : undefined}
                      className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact_subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject / Project Context
                  </label>
                  <input
                    id="contact_subject"
                    type="text"
                    placeholder="e.g. UAV Digital Twin or Research Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact_message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact_message"
                    required
                    rows={5}
                    placeholder="Describe your technical inquiry, proposal, or feedback..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={errorMessage ? "true" : "false"}
                    aria-describedby={errorMessage ? "contact_error_banner" : undefined}
                    className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-slate-500">
                    * Required fields • Server-side spam & rate protected
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

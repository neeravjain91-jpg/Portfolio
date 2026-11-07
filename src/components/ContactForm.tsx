"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Inbox, Mail, Send, Sparkles, Terminal } from "lucide-react";
import { AdminInboxModal, ContactMessage } from "./AdminInboxModal";

const SEED_MESSAGES: ContactMessage[] = [
  {
    id: "msg-welcome-001",
    name: "Dr. K. Swaminathan (Advisory)",
    email: "advisory@ocean-research-consortium.org",
    subject: "Subsurface Ocean B8 Network Verification Protocol",
    message:
      "Impressive work on the B8 Spatiotemporal Embedding Network. The 0.9800 °C column-averaged test RMSE against the independent Argo CTD holdout and the 22.11% error reduction over daily climatology demonstrates sound experimental design. Would love to discuss applying this framework to the Bay of Bengal cyclonic thermocline variations.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    read: true,
  },
  {
    id: "msg-welcome-002",
    name: "Engineering Recruiter",
    email: "talent@aerospace-intelligence.io",
    subject: "MALE-UAV Engine Digital Twin Architecture",
    message:
      "We reviewed your AeroPulse-X project and your 308-test passing suite for the Rotax 914 thermodynamic digital twin. Your peer cross-sensor veto logic and real-time WebGL GCS dashboard match our autonomous systems engineering requirements closely.",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    read: true,
  },
];

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Initialize messages from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("neerav_portfolio_messages");
      if (stored) {
        setMessages(JSON.parse(stored));
      } else {
        localStorage.setItem("neerav_portfolio_messages", JSON.stringify(SEED_MESSAGES));
        setMessages(SEED_MESSAGES);
      }
    } catch (e) {
      console.warn("localStorage unavailable:", e);
      setMessages(SEED_MESSAGES);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newMessage: ContactMessage = {
      id: "msg-" + Date.now(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim() || "General Engineering Inquiry",
      message: message.trim(),
      createdAt: new Date().toISOString(),
      read: false,
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem("neerav_portfolio_messages", JSON.stringify(updated));
    } catch (err) {
      console.error("Failed to save message to localStorage:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 600);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("neerav_portfolio_messages", JSON.stringify(updated));
  };

  const handleClearAll = () => {
    setMessages([]);
    localStorage.removeItem("neerav_portfolio_messages");
  };

  return (
    <div className="relative">
      <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
        {/* Decorative corner glow */}
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
                or robust production AI platforms, reach out directly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Direct Email</div>
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
                  <div className="text-[10px] text-slate-500 font-mono uppercase">GitHub Profile</div>
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

            {/* Admin Inbox Toggle (Preserving existing portfolio feature) */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] text-slate-400 mb-2">
                Preserved from original portfolio repository:
              </div>
              <button
                type="button"
                onClick={() => setShowAdminModal(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all hover:border-cyan-500/30 group"
              >
                <Inbox className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>View Received Messages (Admin Panel)</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                  {messages.length}
                </span>
              </button>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-3">
            {isSuccess ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Your inquiry has been stored in the
                  inbox ledger and Neerav will review it promptly.
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Wright"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. UAV Digital Twin or Research Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your technical inquiry, proposal, or feedback..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#080b11] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500">
                    * Required fields • Preserved client ledger
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
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

      {/* Admin Inbox Modal */}
      <AdminInboxModal
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
        messages={messages}
        onDeleteMessage={handleDeleteMessage}
        onClearAll={handleClearAll}
      />
    </div>
  );
};

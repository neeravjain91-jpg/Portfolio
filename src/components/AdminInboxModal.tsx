"use client";

import React, { useState } from "react";
import { Download, Inbox, Mail, Trash2, X, CheckCircle, ShieldAlert } from "lucide-react";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
  read: boolean;
}

interface AdminInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ContactMessage[];
  onDeleteMessage: (id: string) => void;
  onClearAll: () => void;
}

export const AdminInboxModal: React.FC<AdminInboxModalProps> = ({
  isOpen,
  onClose,
  messages,
  onDeleteMessage,
  onClearAll,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filtered = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.subject && m.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `neerav_portfolio_inbox_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#0c121e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080b11]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Inbox className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                Inquiries Admin Panel
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                  {messages.length} Total
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Preserved admin inbox from original portfolio with offline persistence
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-white/[0.08]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 border-b border-white/5 bg-black/20 flex flex-wrap items-center justify-between gap-3">
          <input
            type="text"
            placeholder="Search messages by name, email, keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[200px] bg-[#080b11] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              disabled={messages.length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-md transition-colors disabled:opacity-40"
              title="Download all messages as a JSON backup"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <button
              onClick={onClearAll}
              disabled={messages.length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-md transition-colors disabled:opacity-40"
              title="Clear all messages from localStorage"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="overflow-y-auto p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              <Mail className="w-8 h-8 mx-auto text-slate-600 mb-2 opacity-50" />
              <p>No messages match your criteria.</p>
            </div>
          ) : (
            filtered.map((msg) => (
              <div
                key={msg.id}
                className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-all space-y-2 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-xs sm:text-sm">
                      {msg.name}
                    </span>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-xs text-cyan-400 hover:underline font-mono"
                    >
                      &lt;{msg.email}&gt;
                    </a>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
                </div>

                {msg.subject && (
                  <div className="text-xs font-medium text-slate-200">
                    Subject: {msg.subject}
                  </div>
                )}

                <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed bg-[#080b11]/60 p-3 rounded-lg border border-white/5 font-sans">
                  {msg.message}
                </p>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => onDeleteMessage(msg.id)}
                    className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#080b11] flex items-center justify-between text-xs text-slate-400">
          <span>Encrypted client-side storage active</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

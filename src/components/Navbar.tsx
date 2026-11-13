"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Boxes,
  Compass,
  FileText,
  Github,
  Mail,
  Menu,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Overview", href: "/#overview" },
    { name: "Projects", href: "/#projects" },
    { name: "Deployments", href: "/deployments", badge: "5 Live" },
    { name: "Philosophy", href: "/#philosophy" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Audit & Lineage", href: "/audit" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b11]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 via-sky-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-wide text-white flex items-center gap-1.5">
              Neerav Jain
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for engineering roles" />
            </span>
            <span className="text-[10px] text-slate-400 code-font tracking-tight">
              AI / ML & Systems
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-colors relative flex items-center gap-1.5 text-xs lg:text-sm font-medium ${
                  isActive
                    ? "text-cyan-400 bg-white/[0.04]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/neeravjain91-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="md:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-1 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05]"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2 border-t border-white/10 mt-3">
            <a
              href="https://github.com/neeravjain91-jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-200 bg-white/[0.04] border border-white/10"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (@neeravjain91-jpg)</span>
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Neerav</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

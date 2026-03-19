"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  { label: "Home",       href: "#home" },
  { label: "Features",   href: "#features" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#1a365d]/96 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4.5 h-4.5 text-white" />
          </div>
          <div className="leading-none">
            <p className="text-white font-bold text-sm">Master School</p>
            <p className="text-emerald-400 text-[10px] font-medium">North Karachi — 11-C</p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Apply Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#112240] border-t border-white/10"
          >
            <div className="px-5 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/75 hover:text-white text-base font-medium py-3 px-3 rounded-xl hover:bg-white/8 transition-colors min-h-[48px] flex items-center"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 mb-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-3 rounded-xl text-base text-center transition-colors min-h-[48px] flex items-center justify-center"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1f3c] text-white pt-14 pb-8">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Master School</p>
                <p className="text-emerald-400 text-[10px]">North Karachi · 11-C</p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Quality education since 2009. BSEK affiliated and Sindh Education Department approved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "Admissions 2026–27", "Fee Structure", "Results & Toppers", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Sector 11-C, North Karachi — 75850</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-white/50 hover:text-emerald-400 text-sm transition-colors">
                  0300-1234567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:admissions@masterschool.edu.pk" className="text-white/50 hover:text-emerald-400 text-sm transition-colors break-all">
                  admissions@masterschool.edu.pk
                </a>
              </li>
            </ul>
            <p className="mt-4 text-white/30 text-xs">Mon–Sat · 8:00 AM – 4:00 PM</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center text-white/25 text-xs">
          © {new Date().getFullYear()} Master School, North Karachi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

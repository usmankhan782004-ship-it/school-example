"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Users, Star, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "2,400+", label: "Students" },
  { icon: Star,  value: "A+",     label: "Board Rank" },
  { icon: Award, value: "15 yrs", label: "Experience" },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-bg min-h-[100svh] flex flex-col justify-center pt-16 pb-20 relative">

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-5 sm:px-8">

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-sm font-medium tracking-wide">
            North Karachi · Admissions Open 2026–27
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5"
        >
          Empowering the
          <br />
          <span className="text-emerald-400">Next Generation</span>
          <br />
          of North Karachi.
        </motion.h1>

        {/* Sub-headline — short and clear */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-white/65 text-base sm:text-lg leading-relaxed mb-9 max-w-lg"
        >
          Quality education from Pre-Primary to Matric — with real parent
          communication, campus-level results, and a secure environment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-emerald-900/30 min-h-[50px]"
          >
            Apply Online
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors min-h-[50px]"
          >
            <Download className="w-4 h-4 flex-shrink-0" />
            Download Fee Voucher
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap gap-6"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-white font-bold text-sm">{value}</span>
              <span className="text-white/45 text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 48" className="w-full block" preserveAspectRatio="none">
          <path d="M0 48L1440 48L1440 24C1080 48 720 0 360 24L0 0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

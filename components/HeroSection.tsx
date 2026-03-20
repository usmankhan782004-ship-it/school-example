"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Star, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "2,400+", label: "Happy Students" },
  { icon: Star,  value: "A+",     label: "Board Rank" },
  { icon: Award, value: "15 yrs", label: "Excellence" },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-bg min-h-[100svh] flex items-center pt-20 pb-16 relative">

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column (Text) */}
          <div className="max-w-xl">
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 mb-6 bg-white/60 border border-black/5 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-blue-950 text-xs font-bold tracking-wide">
                Admissions Open 2026–27
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-[1.1] mb-5"
            >
              Empowering the
              <br />
              <span className="text-emerald-600">Next Generation</span>
              <br />
              of North Karachi.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-9 font-medium"
            >
              A vibrant, safe, and modern learning environment from Pre-Primary to Matric. 
              We blend strong academics with real-world skills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-blue-600/20 min-h-[50px] shrink-0"
              >
                Apply Online
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#facilities"
                className="inline-flex items-center justify-center gap-2 bg-white/60 hover:bg-white/80 active:bg-white border border-gray-200 text-blue-950 font-semibold px-7 py-3.5 rounded-xl text-base transition-colors min-h-[50px] shadow-sm"
              >
                <PlayCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                Campus Tour
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-x-8 gap-y-4"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-blue-950 font-bold text-sm leading-none mb-1">{value}</p>
                    <p className="text-gray-500 font-medium text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] hidden sm:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-emerald-400 rounded-3xl transform rotate-2 opacity-30 blur-xl" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
              <Image 
                src="/hero-student-hq.jpg" 
                alt="Happy student from North Karachi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
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

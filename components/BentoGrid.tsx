"use client";

import { motion } from "framer-motion";
import { Bot, Camera, Stethoscope, BookOpen, Wifi } from "lucide-react";

const tiles = [
  {
    id: "robotics",
    tag: "🤖 STEM Ready",
    title: "Robotics & Coding Lab",
    desc: "Hands-on robotics from Grade 4 — preparing students for tomorrow's careers.",
    icon: Bot,
    span: "sm:col-span-2",
    bg: "bg-[#1a365d]",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    tagStyle: "bg-emerald-500/20 text-emerald-300",
  },
  {
    id: "cctv",
    tag: "🔴 Live",
    title: "CCTV Monitored",
    desc: "Full HD cameras across all classrooms and corridors. 24/7.",
    icon: Camera,
    span: "sm:col-span-1",
    bg: "bg-slate-800",
    iconBg: "bg-white/10",
    iconColor: "text-red-400",
    tagStyle: "bg-red-500/20 text-red-300",
  },
  {
    id: "staff",
    tag: "✅ Verified",
    title: "PMDC Licensed Staff",
    desc: "Every teacher is government-verified. No unqualified tutors.",
    icon: Stethoscope,
    span: "sm:col-span-1",
    bg: "bg-emerald-700",
    iconBg: "bg-white/15",
    iconColor: "text-white",
    tagStyle: "bg-white/20 text-white",
  },
  {
    id: "library",
    tag: "📚 Digital",
    title: "Library & E-Resources",
    desc: "Past papers, e-books, and curated study material — always accessible.",
    icon: BookOpen,
    span: "sm:col-span-2",
    bg: "bg-amber-600",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    tagStyle: "bg-white/25 text-white",
  },
];

export default function BentoGrid() {
  return (
    <section id="facilities" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Campus Facilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a365d]">
            Everything Your Child Deserves
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`bento-card ${t.span} ${t.bg} p-6 sm:p-7 flex flex-col gap-4 min-h-[180px]`}
            >
              {/* Tag */}
              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${t.tagStyle}`}>
                {t.tag}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <t.icon className={`w-5 h-5 ${t.iconColor}`} />
                </div>
                <h3 className="text-white font-bold text-base leading-snug">{t.title}</h3>
              </div>

              <p className="text-white/65 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

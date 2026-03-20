"use client";

import { motion } from "framer-motion";
import { Bot, Camera, Stethoscope, BookOpen } from "lucide-react";
import Image from "next/image";

const tiles = [
  {
    id: "robotics",
    tag: "🤖 STEM Ready",
    title: "Robotics & Coding Lab",
    desc: "Hands-on robotics from Grade 4 — preparing students for tomorrow's careers.",
    icon: Bot,
    span: "sm:col-span-2",
    imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    gradient: "from-blue-600/60 to-blue-900/90",
    tagStyle: "bg-blue-500/80 text-white backdrop-blur-md",
    iconColor: "text-blue-300",
  },
  {
    id: "cctv",
    tag: "🔴 Safe",
    title: "CCTV Monitored",
    desc: "HD cameras across all classrooms.",
    icon: Camera,
    span: "sm:col-span-1",
    imgUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600",
    gradient: "from-red-600/60 to-red-950/90",
    tagStyle: "bg-red-500/80 text-white backdrop-blur-md",
    iconColor: "text-red-300",
  },
  {
    id: "staff",
    tag: "✅ Trusted",
    title: "PMDC Staff",
    desc: "Verified, qualified teachers.",
    icon: Stethoscope,
    span: "sm:col-span-1",
    imgUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
    gradient: "from-emerald-600/60 to-emerald-950/90",
    tagStyle: "bg-emerald-500/80 text-white backdrop-blur-md",
    iconColor: "text-emerald-300",
  },
  {
    id: "library",
    tag: "📚 Digital",
    title: "Modern Library",
    desc: "Curated e-resources and thousands of books.",
    icon: BookOpen,
    span: "sm:col-span-2",
    imgUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    gradient: "from-amber-500/50 to-amber-900/90",
    tagStyle: "bg-amber-500/80 text-white backdrop-blur-md",
    iconColor: "text-amber-200",
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
          <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
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
              className={`bento-card relative ${t.span} p-6 sm:p-7 flex flex-col justify-end gap-3 min-h-[260px] cursor-pointer group`}
            >
              <Image 
                src={t.imgUrl} 
                alt={t.title} 
                fill 
                className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105" 
              />
              <div className={`absolute inset-0 z-0 bg-gradient-to-t ${t.gradient}`} />

              <div className="relative z-20 w-fit">
                <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${t.tagStyle}`}>
                  {t.tag}
                </span>
              </div>

              <div className="relative z-20 mt-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <t.icon className={`w-5 h-5 ${t.iconColor}`} />
                  <h3 className="text-white font-bold text-xl leading-snug">{t.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-sm">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

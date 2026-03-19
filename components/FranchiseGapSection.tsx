"use client";

import { motion } from "framer-motion";
import { MessageCircle, Trophy, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    label: "WhatsApp Updates",
    title: "Real-Time Parent Alerts",
    desc: "Get instant WhatsApp notifications for exam dates, results, and school announcements — directly on your phone.",
    chip: "Automated · No App Needed",
  },
  {
    icon: Trophy,
    color: "text-[#1a365d]",
    bg: "bg-blue-50",
    border: "border-blue-200",
    label: "Campus Results",
    title: "Our Students. Our Results.",
    desc: "We publish position holders and board toppers from the 11-C branch — not a franchise average.",
    chip: "11-C Branch Toppers",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    label: "Digital ID Cards",
    title: "QR-Based Attendance",
    desc: "Every student has a QR Smart Card. Parents can check attendance digitally — no manual registers.",
    chip: "Secure & Verified",
  },
];

export default function FranchiseGapSection() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
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
            Why Parents Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a365d]">
            Built for North Karachi Families
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className={`rounded-2xl border-2 ${f.border} p-6 flex flex-col gap-4 hover:shadow-md transition-shadow`}
            >
              <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  {f.label}
                </p>
                <h3 className="text-base font-bold text-[#1a365d] mb-1.5">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>

              <span className={`mt-auto self-start text-xs font-semibold px-2.5 py-1 rounded-full ${f.bg} ${f.color}`}>
                {f.chip}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

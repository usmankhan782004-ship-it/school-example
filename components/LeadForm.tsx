"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ChevronDown } from "lucide-react";

const GRADES = [
  "Pre-Junior (Nursery)",
  "Junior (KG)",
  "Grade 1", "Grade 2", "Grade 3",
  "Grade 4", "Grade 5", "Grade 6",
  "Grade 7", "Grade 8",
  "Grade 9 (Matric Part-I)",
  "Grade 10 (Matric Part-II)",
];

type FormData = { name: string; phone: string; grade: string };
type Errors   = Partial<FormData>;

function validate(f: FormData): Errors {
  const e: Errors = {};
  if (!f.name.trim())  e.name = "Please enter your name.";
  if (!/^03\d{9}$/.test(f.phone.trim())) e.phone = "Enter a valid number, e.g. 03001234567";
  if (!f.grade) e.grade = "Please select a grade.";
  return e;
}

export default function LeadForm() {
  const [form, setForm]       = useState<FormData>({ name: "", phone: "", grade: "" });
  const [errors, setErrors]   = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setDone(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left copy — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Admissions 2026–27
            </p>
            <h2 className="text-3xl font-extrabold text-[#1a365d] mb-4 leading-tight">
              Reserve Your Child&apos;s Seat Today
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Fill in your details and our admission coordinator will contact you on WhatsApp within 24 hours.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {[
                "Free academic counseling session",
                "Campus tour on request",
                "Scholarship check for eligible families",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2">Jazak Allah Khair!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Thank you, <strong>{form.name}</strong>. Our coordinator will WhatsApp you at{" "}
                      <span className="text-emerald-600 font-semibold">{form.phone}</span> shortly with
                      details for <strong>{form.grade}</strong>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a365d] mb-1.5">
                        Parent / Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Muhammad Ali"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors
                          focus:border-[#1a365d] placeholder:text-gray-350
                          ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a365d] mb-1.5">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="03001234567"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors
                          focus:border-[#1a365d] placeholder:text-gray-350
                          ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Grade */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a365d] mb-1.5">
                        Grade Applying For <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.grade}
                          onChange={(e) => setForm({ ...form, grade: e.target.value })}
                          className={`w-full px-4 py-3 pr-10 rounded-xl border text-sm outline-none appearance-none cursor-pointer transition-colors
                            focus:border-[#1a365d]
                            ${errors.grade ? "border-red-400 bg-red-50 text-gray-700" : "border-gray-200 bg-gray-50 focus:bg-white"}
                            ${!form.grade ? "text-gray-400" : "text-gray-800"}`}
                        >
                          <option value="" disabled>Select grade…</option>
                          {GRADES.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                      {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#1a365d] hover:bg-[#2a4a7f] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors mt-2"
                    >
                      {loading ? (
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {loading ? "Submitting…" : "Submit Enquiry"}
                    </button>

                    <p className="text-center text-gray-400 text-[11px]">
                      🔒 Your information is private and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

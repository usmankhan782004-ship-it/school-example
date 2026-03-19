"use client";

import { motion } from "framer-motion";

const WA_MESSAGE = encodeURIComponent(
  "Asalam-o-Alaikum, I'm interested in admissions for my child at your North Karachi campus."
);
const WA_NUMBER = "923001234567"; // Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppFAB() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 group"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 250 }}
        className="relative flex items-center"
      >
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#1a365d] text-white text-xs font-semibold whitespace-nowrap px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with Admissions
        </span>

        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] pulse-whatsapp" />

        {/* Icon button */}
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20c55a] rounded-full flex items-center justify-center shadow-xl transition-colors duration-200">
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.002 2C8.27 2 2 8.27 2 16.002c0 2.474.653 4.834 1.795 6.873L2 30l7.322-1.771A13.94 13.94 0 0 0 16.002 30C23.73 30 30 23.73 30 16.002 30 8.27 23.73 2 16.002 2zm0 25.455a11.41 11.41 0 0 1-5.915-1.653l-.423-.252-4.343 1.05 1.078-4.224-.278-.444A11.41 11.41 0 0 1 4.545 16c0-6.318 5.139-11.455 11.457-11.455S27.455 9.682 27.455 16 22.318 27.455 16 27.455zm6.283-8.57c-.344-.172-2.034-1.003-2.348-1.117-.316-.115-.545-.172-.775.172-.228.344-.887 1.117-1.087 1.346-.2.23-.4.258-.745.086-.344-.172-1.455-.536-2.77-1.71-1.025-.913-1.716-2.04-1.918-2.384-.2-.344-.021-.53.15-.702.154-.155.344-.4.516-.6.17-.2.228-.344.344-.574.115-.23.057-.43-.028-.602-.086-.172-.774-1.863-1.06-2.55-.28-.673-.563-.58-.774-.59-.2-.01-.43-.012-.66-.012s-.6.086-.917.43c-.315.344-1.202 1.175-1.202 2.867s1.23 3.327 1.402 3.557c.17.23 2.42 3.697 5.862 5.186.82.355 1.46.566 1.958.725.823.26 1.572.224 2.163.136.66-.098 2.034-.832 2.32-1.635.284-.802.284-1.49.2-1.633-.085-.143-.314-.23-.66-.4z" />
          </svg>
        </div>
      </motion.div>
    </a>
  );
}

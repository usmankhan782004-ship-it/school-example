import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FranchiseGapSection from "@/components/FranchiseGapSection";
import BentoGrid from "@/components/BentoGrid";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const WA_LINK =
  "https://wa.me/923001234567?text=Asalam-o-Alaikum%2C%20I%27m%20interested%20in%20admissions%20for%20my%20child%20at%20your%20North%20Karachi%20campus.";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FranchiseGapSection />
      <div className="section-divider" />
      <BentoGrid />

      {/* Admissions Banner */}
      <section id="admissions" className="bg-[#1a365d] py-14 sm:py-16">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Admissions Open · 2026–27
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
            Seats Are Limited — Apply Before They Fill Up.
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Our coordinator will reach you personally on WhatsApp to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors min-h-[48px]"
            >
              Fill Enquiry Form
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors min-h-[48px]"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366] flex-shrink-0">
                <path d="M12.001 2C6.477 2 2 6.477 2 12.001a9.95 9.95 0 0 0 1.347 5.019L2 22l5.118-1.328A9.957 9.957 0 0 0 12.001 22C17.523 22 22 17.523 22 12.001 22 6.477 17.524 2 12.001 2zm0 18.175a8.21 8.21 0 0 1-4.434-1.3l-.317-.188-3.037.797.813-2.965-.207-.33A8.174 8.174 0 0 1 3.826 12c0-4.507 3.668-8.175 8.175-8.175S20.175 7.493 20.175 12 16.507 20.175 12 20.175zm4.708-6.29c-.258-.13-1.525-.753-1.76-.838-.237-.086-.41-.13-.582.13-.172.258-.665.838-.814 1.01-.15.172-.3.194-.558.065-.258-.13-1.09-.402-2.077-1.282-.768-.685-1.286-1.53-1.437-1.788-.15-.258-.016-.397.113-.527.116-.114.258-.3.387-.45.13-.15.172-.258.258-.43.086-.172.043-.32-.022-.45-.065-.13-.582-1.4-.797-1.918-.21-.505-.423-.437-.582-.445l-.495-.008c-.172 0-.45.065-.686.322-.237.258-.904.883-.904 2.153s.925 2.497 1.054 2.67c.13.172 1.82 2.778 4.41 3.895.617.266 1.098.425 1.473.544.619.197 1.183.17 1.628.103.497-.075 1.525-.623 1.74-1.226.214-.602.214-1.118.15-1.226-.065-.108-.237-.172-.495-.3z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <LeadForm />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}

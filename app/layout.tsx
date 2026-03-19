import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Master School North Karachi — Admissions Open 2026–27",
  description:
    "Master School, Sector 11-C, North Karachi. Admissions open for 2026–27. BSEK affiliated, PMDC-qualified staff. Apply online today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}

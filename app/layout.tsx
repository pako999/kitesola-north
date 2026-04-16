import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kite Šola North | Kiteboarding Tečaji – Zadar, Hrvaška",
  description:
    "Naučite se kiteboarding v kristalno čisti Jadranski morji. Spoznavni tečaj €190, začetni tečaj €520. Lokacija Zadar-Nin-Ljubač. WhatsApp: +386 41 580 250.",
  keywords: "kiteboarding, kite šola, kite tečaj, Zadar, Nin, Hrvaška, naučiti kitesurfing",
  openGraph: {
    title: "Kite Šola North | Kiteboarding Tečaji – Zadar",
    description: "Začnite svojo kite avanturo v Zadar-Nin-Ljubač. Profesionalni inštruktorji, plitva voda, idealni pogoji.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-[#060E1A] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

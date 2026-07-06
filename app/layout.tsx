import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kite Šola North | Kiteboarding Tečaji – Zadar, Hrvaška",
  description:
    "Profesionalni kiteboarding tečaji na Jadranu. Plitva voda, odlični vetrovi, certicirani inštruktorji. Zadar-Nin-Ljubač, Hrvaška. Sezona julij–avgust.",
  keywords: "kiteboarding tečaj, kite šola, kitesurfing Zadar, Nin, Hrvaška",
  openGraph: {
    title: "Kite Šola North | Kiteboarding Zadar",
    description: "Začnite svojo kite avanturo. Spoznavni tečaj €190 · Začetni tečaj €720.",
    type: "website",
    locale: "sl_SI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

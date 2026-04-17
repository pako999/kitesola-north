"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/courses", label: "Tečaji" },
  { href: "/location", label: "Lokacija" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledOrInner = scrolled || !isHome;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        background: scrolledOrInner ? "rgba(11,32,53,0.97)" : "transparent",
        borderBottom: scrolledOrInner ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolledOrInner ? "0 1px 40px rgba(0,0,0,0.3)" : "none",
        backdropFilter: scrolledOrInner ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="https://www.kitesola-north.si/wp-content/uploads/2022/07/kitesola_north.png"
            alt="Kite Šola North — Kitesurf Šola"
            width={148}
            height={44}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)", height: "44px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: pathname === link.href ? "#C8922A" : "rgba(255,255,255,0.75)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/38641580250"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              background: "#C8922A",
              padding: "10px 22px",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background 0.2s",
            }}
          >
            Prijavi se
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}
          className="show-mobile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8"/>
                <line x1="3" y1="16" x2="21" y2="16"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(11,32,53,0.99)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px 28px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", fontFamily: "var(--font-inter)", fontSize: "1rem", fontWeight: 500, color: pathname === link.href ? "#C8922A" : "rgba(255,255,255,0.85)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/38641580250"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ display: "block", marginTop: "20px", padding: "14px", background: "#C8922A", color: "#fff", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.9375rem", textAlign: "center", textDecoration: "none", borderRadius: "4px" }}
          >
            Prijavi se →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}

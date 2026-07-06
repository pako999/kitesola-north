import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ocean)", color: "#fff" }}>
      {/* Top border accent */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #C8922A 0%, #E8B84B 50%, #C8922A 100%)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px" }} className="footer-grid">

          {/* Brand col */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                Kite Šola <span style={{ color: "#C8922A" }}>North</span>
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "260px" }}>
              Profesionalni kiteboarding tečaji na Jadranski obali — od prvega zmaja do samostojne vožnje.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
              <a
                href="https://wa.me/38641580250"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 14px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px", fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "border-color 0.2s" }}
              >
                WhatsApp
              </a>
              <a
                href="viber://chat?number=38641580250"
                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 14px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px", fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              >
                Viber
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8922A", marginBottom: "20px" }}>
              Navigacija
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { href: "/", label: "Domov" },
                { href: "/courses", label: "Tečaji & Cene" },
                { href: "/location", label: "Lokacija" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Kontakt & Prijava" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8922A", marginBottom: "20px" }}>
              Kontakt
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: "📍", text: "Zadar-Nin-Ljubač, Hrvaška\n15 km od centra Zadra" },
                { icon: "📱", text: "+386 41 580 250\nWhatsApp & Viber" },
                { icon: "📅", text: "Sezona: Julij – Avgust\nMaestral · Burja · Tramontana" },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.875rem", marginTop: "1px" }}>{item.icon}</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Kite Šola North. Vse pravice pridržane.
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Jadranska obala · Hrvaška
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}

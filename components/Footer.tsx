import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="font-sora font-bold text-xl text-white">
                Kite Šola <span className="text-cyan-400">North</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Profesionalna kite šola na Jadranski obali. Zadar-Nin-Ljubač, Hrvaška.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigacija</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Domov" },
                { href: "/courses", label: "Tečaji & Cene" },
                { href: "/location", label: "Lokacija" },
                { href: "/contact", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Zadar-Nin-Ljubač, Hrvaška<br />15 km od centra Zadra</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href="https://wa.me/38641580250"
                  className="hover:text-cyan-400 transition-colors"
                >
                  WhatsApp: +386 41 580 250
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href="viber://chat?number=38641580250"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Viber: +386 41 580 250
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Kite Šola North. Vse pravice pridržane.
          </p>
          <p className="text-white/30 text-xs">
            Sezona: Julij – Avgust · Maestral in Burja
          </p>
        </div>
      </div>
    </footer>
  );
}

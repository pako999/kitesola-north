import Image from "next/image";
import Link from "next/link";

/* ─── Real images from kitesola-north.si ────────────── */
const IMG = {
  bay:    "https://www.kitesola-north.si/wp-content/uploads/2022/07/13937767_10154288279987211_6400065277025921007_o.jpeg",
  rider:  "https://www.kitesola-north.si/wp-content/uploads/2022/07/456732_10150625772302211_1014554783_o-1024x681.jpeg",
  kite:   "https://www.kitesola-north.si/wp-content/uploads/2022/07/414444_10150772783877211_2131148202_o-1024x577.jpeg",
};

/* ─── Data ─────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Zadovoljnih učencev" },
  { value: "10+",  label: "Let izkušenj" },
  { value: "3",    label: "Kiteboarding lokacije" },
  { value: "12h",  label: "Skupaj v začetnem tečaju" },
];

const reasons = [
  {
    no: "01",
    title: "Plitva, varna voda",
    body: "Naši spoti so plitki do pasu — idealni za začetnike. Nobenega strahu pred globino, le uživanje v učenju.",
  },
  {
    no: "02",
    title: "Tri lokacije, en cilj",
    body: "Glede na napoved vetra izberemo najboljši spot v radiju 10 km. Vedno pihlja, vedno jadrate.",
  },
  {
    no: "03",
    title: "Certificirani inštruktorji",
    body: "Naša ekipa ima mednarodno licenco in leta izkušenj z vsemi nivoji — od otrok do odraslih.",
  },
  {
    no: "04",
    title: "Hiter napredek",
    body: "Plitva voda in idealni vetrovi pomenijo, da večina začetnikov stoji na deski že 1. dan.",
  },
];

const courses = [
  {
    slug: "spoznavni",
    label: "Spoznavni tečaj",
    duration: "3 ure",
    price: "€190",
    desc: "Idealen uvod v kiteboarding. Teorija, varnost in prvi koraki z zmajem.",
    img: IMG.bay,
  },
  {
    slug: "zacetni",
    label: "Začetni tečaj",
    duration: "4 dni · 12 ur",
    price: "€520",
    desc: "Od tal do samostojne vožnje. Naš najpopularnejši program.",
    img: IMG.rider,
    featured: true,
  },
  {
    slug: "zasebne",
    label: "Zasebne ure",
    duration: "1 ura",
    price: "€100/h",
    desc: "Individualen pristop, hiter napredek, fleksibilen urnik.",
    img: IMG.kite,
  },
];

/* ─── Page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>

      {/* ════════════════════════════════════════════
          HERO — full-bleed photo + editorial text
      ════════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "flex-end" }}>
        {/* Background photo */}
        <Image
          src={IMG.bay}
          alt="Kiteboarding na Jadranu — Zadar-Nin-Ljubač"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        {/* Gradient overlay — slightly stronger at top for navbar readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,32,53,0.45) 0%, rgba(11,32,53,0.25) 35%, rgba(11,32,53,0.80) 100%)" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px", width: "100%" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{ width: "32px", height: "1px", background: "#C8922A" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C8922A" }}>
              Zadar · Nin · Ljubač, Hrvaška
            </span>
          </div>

          {/* Headline */}
          <h1 className="display" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "#fff", maxWidth: "800px", marginBottom: "28px" }}>
            Čuti veter.<br />Osvoji valove.
          </h1>

          <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "rgba(255,255,255,0.75)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "44px" }}>
            Profesionalni kiteboarding tečaji v kristalno čistem Jadranskem morju.
            Plitva voda, odlični vetrovi, certicirani inštruktorji.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 36px",
                background: "#C8922A",
                color: "#fff",
                fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "1rem",
                borderRadius: "4px", textDecoration: "none", letterSpacing: "0.01em",
                border: "2px solid #C8922A",
                transition: "background 0.2s",
              }}
            >
              Prijavi se na tečaj →
            </Link>
            <Link
              href="/courses"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 36px",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "1rem",
                borderRadius: "4px", textDecoration: "none", letterSpacing: "0.01em",
                border: "2px solid rgba(255,255,255,0.6)",
                backdropFilter: "blur(4px)",
                transition: "background 0.2s, border-color 0.2s",
              }}
            >
              Oglej si tečaje
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, background: "rgba(11,32,53,0.9)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "22px 16px", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", textAlign: "center" }}>
                <div className="stat-number" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#C8922A" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "4px", letterSpacing: "0.02em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          INTRO — editorial split
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="split-grid">
          <div>
            <p className="label" style={{ marginBottom: "16px" }}>Zakaj Kite Šola North</p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--ocean)", marginBottom: "28px" }}>
              Idealno mesto za tvoj prvi — ali tisočiti — let.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "24px" }}>
              Zadar-Nin-Ljubač je eden redkih krajev na Jadranu, kjer pihajo vse tri smeri vetra —
              Maestral, Burja in Tramontana. To pomeni, da skoraj ni dneva brez vetra.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "40px" }}>
              Plitva, prozorna voda in peščene plaže ustvarjajo varno okolje za učenje.
              Tri lokacije v radiju 10 km zagotavljajo, da vedno najdemo perfektne pogoje.
            </p>
            <Link href="/location" className="btn-dark">
              Spoznaj lokacijo →
            </Link>
          </div>

          {/* Photo collage */}
          <div style={{ position: "relative", height: "500px" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: "20%", bottom: "20%", borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
              <Image
                src={IMG.bay}
                alt="Kiteboarding lokacija Zadar-Nin-Ljubač"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center 60%" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, left: "30%", top: "30%", borderRadius: "8px", overflow: "hidden", border: "5px solid var(--cream)", boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}>
              <Image
                src={IMG.rider}
                alt="Kitesurfer v akciji"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            </div>
            {/* Gold accent badge */}
            <div style={{ position: "absolute", top: "24px", right: "24px", background: "#C8922A", color: "#fff", padding: "10px 16px", borderRadius: "4px", fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "0.8125rem", zIndex: 2, letterSpacing: "0.02em" }}>
              Sezona 2025
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          WHY US — numbered list
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--ocean)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="label" style={{ marginBottom: "12px" }}>Naše prednosti</p>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff" }}>
                Štirje razlogi,<br />zakaj mi.
              </h2>
            </div>
            <Link href="/courses" className="btn-primary">
              Poglej tečaje →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "rgba(255,255,255,0.06)" }} className="reasons-grid">
            {reasons.map((r) => (
              <div
                key={r.no}
                style={{ background: "var(--ocean)", padding: "48px", display: "flex", gap: "24px", alignItems: "flex-start", transition: "background 0.2s" }}
              >
                <span style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "0.875rem", color: "#C8922A", marginTop: "4px", letterSpacing: "0.04em", flexShrink: 0 }}>
                  {r.no}
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          COURSES — photo cards
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="label" style={{ marginBottom: "12px" }}>Tečaji</p>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--ocean)" }}>
                Izberi svojo<br />avanturo.
              </h2>
            </div>
            <Link href="/courses" style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--muted)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              Vse o tečajih →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="courses-grid">
            {courses.map((c) => (
              <div
                key={c.slug}
                className="card"
                style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}
              >
                {/* Photo */}
                <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                  <Image
                    src={c.img}
                    alt={c.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(11,32,53,0.7) 100%)" }} />
                  {c.featured && (
                    <div style={{ position: "absolute", top: "16px", left: "16px", background: "#C8922A", color: "#fff", padding: "5px 12px", borderRadius: "3px", fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", zIndex: 2 }}>
                      Najpopularnejši
                    </div>
                  )}
                  {/* Price in photo */}
                  <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", zIndex: 2 }}>
                    <div className="stat-number" style={{ fontSize: "2rem", color: "#fff" }}>{c.price}</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{c.duration}</div>
                  </div>
                </div>

                {/* Text body */}
                <div style={{ padding: "28px" }}>
                  <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.125rem", color: "var(--ocean)", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {c.label}
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px" }}>
                    {c.desc}
                  </p>
                  <Link
                    href="/contact"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", fontWeight: 600, color: "#C8922A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    Prijavi se <span style={{ transition: "transform 0.2s" }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          FULL-BLEED QUOTE SECTION
      ════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
        <Image
          src={IMG.kite}
          alt="Kite v zraku nad Jadranom"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(11,32,53,0.72)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <svg width="48" height="36" viewBox="0 0 48 36" fill="none" style={{ marginBottom: "32px", opacity: 0.4 }}>
            <path d="M0 36V22C0 8 8 2 24 0l3 5C16 7 13 12 12 18h12V36H0zm24 0V22C24 8 32 2 48 0l3 5C40 7 37 12 36 18h12V36H24z" fill="white"/>
          </svg>
          <p className="display" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", color: "#fff", lineHeight: 1.3, marginBottom: "36px" }}>
            Maja K. iz Ljubljane po 4 dneh tečaja: &ldquo;Sama sem vozila po morju. Definitvno priporočam vsem!&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ width: "48px", height: "1px", background: "#C8922A" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", fontWeight: 500, color: "#C8922A", letterSpacing: "0.06em" }}>
              MAJA K. · LJUBLJANA
            </span>
            <div style={{ width: "48px", height: "1px", background: "#C8922A" }} />
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          TESTIMONIALS — card row
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--sand)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "12px", textAlign: "center" }}>Mnenja učencev</p>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--ocean)", textAlign: "center", marginBottom: "56px" }}>
            Kaj pravijo naši učenci
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="courses-grid">
            {[
              { name: "Maja K.", from: "Ljubljana", text: "Neverjeten tečaj! Inštruktor je bil potrpežljiv in strokoven. Po 4 dneh sem sama vozila po morju." },
              { name: "Rok P.", from: "Maribor", text: "Lokacija je čudovita — plitva, čista voda, odlični vetrovi. Naučil sem se hitreje, kot sem pričakoval." },
              { name: "Ana M.", from: "Koper", text: "Spoznavni tečaj je bil odlična izkušnja. Že naslednje leto se vrnem za začetni tečaj!" },
            ].map((t) => (
              <div key={t.name} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "36px" }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#C8922A"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "var(--ink)", lineHeight: 1.7, marginBottom: "24px", fontStyle: "italic" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--ocean)" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "var(--muted)", marginTop: "2px" }}>{t.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          CTA — final call
      ════════════════════════════════════════════ */}
      <section style={{ background: "var(--ocean)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <p className="label" style={{ marginBottom: "16px" }}>Sezona 2025</p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "#fff", marginBottom: "24px" }}>
            Mesta so omejena.<br />Rezerviraj danes.
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "480px", margin: "0 auto 48px" }}>
            Tečaji se zapolnijo hitro. Oddaj prijavo ali nas kontaktiraj na WhatsApp za hiter odgovor.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", padding: "16px 40px",
                background: "#C8922A", color: "#fff", border: "2px solid #C8922A",
                fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "1rem",
                borderRadius: "4px", textDecoration: "none",
              }}
            >
              Prijavi se na tečaj →
            </Link>
            <a
              href="https://wa.me/38641580250"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 40px",
                background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,0.5)",
                fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "1rem",
                borderRadius: "4px", textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; }
          .reasons-grid { grid-template-columns: 1fr !important; }
          .courses-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

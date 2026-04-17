import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const IMG = {
  bay:   "https://www.kitesola-north.si/wp-content/uploads/2022/07/13937767_10154288279987211_6400065277025921007_o.jpeg",
  rider: "https://www.kitesola-north.si/wp-content/uploads/2022/07/456732_10150625772302211_1014554783_o-1024x681.jpeg",
  kite:  "https://www.kitesola-north.si/wp-content/uploads/2022/07/414444_10150772783877211_2131148202_o-1024x577.jpeg",
};

export const metadata: Metadata = {
  title: "Lokacija Zadar-Nin-Ljubač | Kite Šola North",
  description: "Kiteboarding v Zadar-Nin-Ljubač, Hrvaška. 3 lokacije, plitva voda, Maestral in Burja. 4h od Ljubljane.",
};

const spots = [
  {
    no: "01",
    name: "Ljubač",
    tag: "Glavna lokacija",
    winds: ["Maestral (JZ)"],
    depth: "Do kolena",
    desc: "Ogromen zaliv dolg 1 km s plitko, prozorno vodo in peščeno plažo. Brezplačen parking tik ob vodi, lokal na plaži, varno okolje za družine z otroki. Idealna lokacija za vse nivoje — od začetnikov do izkušenih kiteboarderjev.",
    primary: true,
  },
  {
    no: "02",
    name: "Nin",
    tag: "Laguna",
    winds: ["Maestral (JZ)", "Burja (SV)", "Tramontana (S)"],
    depth: "Do pasu",
    desc: "Čudovita laguna ob zgodovinskem mestu Nin. Deluje za vse tri jadranske vetrove — Maestral, Burja in Tramontana. Idealna za začetnike in vmesne kiteboarderje, z dostopom do zgodovinskega mesta Nin.",
    primary: false,
  },
  {
    no: "03",
    name: "Zadar okolica",
    tag: "Rezervna lokacija",
    winds: ["Burja (SV)", "Jugo (J)"],
    depth: "Do prsi",
    desc: "Rezervna lokacija za dneve z burjo in jugom. Zavetišče za izkušene kiteboarderje z boljšo kontrolo zmaja.",
    primary: false,
  },
];

const winds = [
  { name: "Maestral", dir: "Jugozahodnik", months: "Junij – September", speed: "12–22 vozlov", desc: "Termalski veter, ki se razvije vsak popdan. Zanesljiv, predvidljiv — idealen za učenje vseh nivojev.", bar: "80%" },
  { name: "Burja", dir: "Severovzhodnik", months: "Celotno leto", speed: "15–35 vozlov", desc: "Sunkovit veter z gore. Primeren za izkušene kiteboarderje. Poleti pogosto manj intenziven.", bar: "55%" },
  { name: "Tramontana", dir: "Severnik", months: "Oktober – Maj", speed: "10–20 vozlov", desc: "Enakomeren, hladen severnik. Primeren za vse nivoje pri zmernih hitrostih.", bar: "40%" },
];

const howToGet = [
  { from: "Ljubljana", time: "~4 ure", note: "A1 do Rupe, nato jadransko" },
  { from: "Maribor", time: "~4 ure", note: "A1 skozi Slovenijo do Hrvaške" },
  { from: "Koper", time: "~3 ure", note: "Obmorska cesta do Zadra" },
  { from: "Zagreb", time: "~2 uri", note: "A1 avtocesta direktno do Zadra" },
];

export default function LocationPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "60vh", minHeight: "420px", display: "flex", alignItems: "flex-end" }}>
        <Image
          src={IMG.bay}
          alt="Kiteboarding lokacija Zadar-Nin-Ljubač"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(11,32,53,0.15), rgba(11,32,53,0.8))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "0 24px 60px", width: "100%" }}>
          <p className="label" style={{ marginBottom: "12px" }}>Lokacija</p>
          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#fff" }}>
            Zadar-Nin-Ljubač,<br />Hrvaška.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="split-grid">
          <div>
            <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--ocean)", marginBottom: "24px" }}>
              Tri lokacije, en inštruktor, brezhibni pogoji.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "20px" }}>
              Zadar-Nin-Ljubač je eden redkih krajev na Jadranu, kjer v sezoni pihata tako Maestral kot Burja.
              To pomeni, da skoraj ni dneva brez kite pogojev.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "var(--muted)", lineHeight: 1.75 }}>
              Plitva, prozorna voda sega v večini spotov do kolena ali pasu.
              Peščeno dno, brez skal, parkiranje tik ob plaži — idealni pogoji za učenje.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)" }}>
            {[
              { value: "3", label: "Lokacije" },
              { value: "10 km", label: "Skupni radij" },
              { value: "15 km", label: "Od centra Zadra" },
              { value: "4h", label: "Od Ljubljane" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", padding: "36px 28px", textAlign: "center" }}>
                <div className="stat-number" style={{ fontSize: "2.5rem", color: "var(--ocean)" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "var(--muted)", marginTop: "6px", letterSpacing: "0.02em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ background: "var(--sand)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)", height: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30000!2d15.15!3d44.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761e5c57bca70c7%3A0x2e4d0e93069a9f3c!2sNin%2C%20Croatia!5e0!3m2!1sen!2ssi!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* SPOTS */}
      <section style={{ background: "var(--sand)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "12px" }}>Naši spoti</p>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--ocean)", marginBottom: "48px" }}>
            Tri lokacije, vedno perfektni pogoji.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="courses-grid">
            {spots.map((s) => (
              <div
                key={s.name}
                style={{ background: s.primary ? "var(--ocean)" : "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "40px 36px", position: "relative" }}
              >
                <span style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "0.75rem", color: s.primary ? "#C8922A" : "var(--muted)", letterSpacing: "0.1em" }}>
                  {s.no}
                </span>
                {s.primary && (
                  <span style={{ marginLeft: "12px", fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 600, background: "#C8922A", color: "#fff", padding: "3px 10px", borderRadius: "2px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Glavna
                  </span>
                )}
                <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "1.75rem", color: s.primary ? "#fff" : "var(--ocean)", marginTop: "16px", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  {s.name}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: s.primary ? "rgba(255,255,255,0.6)" : "var(--muted)", lineHeight: 1.7, marginBottom: "28px" }}>
                  {s.desc}
                </p>
                <div style={{ borderTop: `1px solid ${s.primary ? "rgba(255,255,255,0.12)" : "var(--border)"}`, paddingTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Wind badges */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: s.primary ? "rgba(255,255,255,0.35)" : "var(--muted)", flexShrink: 0, paddingTop: "3px" }}>Veter</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "flex-end" }}>
                      {s.winds.map((w) => (
                        <span
                          key={w}
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: s.primary ? "#C8922A" : "var(--ocean)",
                            background: s.primary ? "rgba(200,146,42,0.15)" : "rgba(11,32,53,0.07)",
                            border: `1px solid ${s.primary ? "rgba(200,146,42,0.3)" : "rgba(11,32,53,0.15)"}`,
                            borderRadius: "3px",
                            padding: "3px 8px",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Depth */}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: s.primary ? "rgba(255,255,255,0.35)" : "var(--muted)" }}>Globina vode</span>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: s.primary ? "#C8922A" : "var(--ocean)" }}>{s.depth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIND */}
      <section style={{ background: "var(--ocean)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "12px" }}>Vetrovi</p>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#fff", marginBottom: "56px" }}>
            Jadranski vetrovi
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {winds.map((w) => (
              <div key={w.name} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "4px", padding: "36px 40px", display: "grid", gridTemplateColumns: "200px 1fr 160px", gap: "32px", alignItems: "center" }} className="wind-row">
                <div>
                  <div style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "1.5rem", color: "#C8922A", letterSpacing: "-0.02em" }}>{w.name}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>{w.dir}</div>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: "12px" }}>{w.desc}</p>
                  {/* Wind bar */}
                  <div style={{ height: "3px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: w.bar, background: "#C8922A", borderRadius: "2px" }} />
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.125rem", color: "#fff" }}>{w.speed}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>{w.months}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO GET + ACCOMMODATION */}
      <section style={{ background: "var(--cream)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }} className="split-grid">
          {/* Driving times */}
          <div>
            <p className="label" style={{ marginBottom: "12px" }}>Dostopnost</p>
            <h2 className="display" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "var(--ocean)", marginBottom: "40px" }}>
              Kako priti
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {howToGet.map((r, i) => (
                <div
                  key={r.from}
                  style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: i === 0 ? "8px 8px 0 0" : i === howToGet.length - 1 ? "0 0 8px 8px" : "0", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ocean)" }}>{r.from}</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "var(--muted)", marginTop: "2px" }}>{r.note}</div>
                  </div>
                  <div className="stat-number" style={{ fontSize: "1.5rem", color: "#C8922A", flexShrink: 0 }}>{r.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accommodation */}
          <div>
            <p className="label" style={{ marginBottom: "12px" }}>Nastanitev</p>
            <h2 className="display" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "var(--ocean)", marginBottom: "24px" }}>
              Spi tik ob morju
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "32px" }}>
              Opremljeni apartmaji v neposredni bližini šole — kuhinja, kopalnica, spalnica, TV, Wi-Fi.
              Vse kar potrebuješ za popoln kite dopust.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {[
                { v: "€10–15", l: "Cena / osebo" },
                { v: "€70 / noč", l: "Družinski apt." },
                { v: "3–5 oseb", l: "Kapaciteta" },
                { v: "~2 km", l: "Od plaže" },
              ].map((item) => (
                <div key={item.l} style={{ background: "var(--sand)", border: "1px solid var(--border)", borderRadius: "6px", padding: "20px", textAlign: "center" }}>
                  <div className="stat-number" style={{ fontSize: "1.5rem", color: "var(--ocean)" }}>{item.v}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--muted)", marginTop: "4px" }}>{item.l}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">
              Povpraši o nastanitve →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .courses-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .wind-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .wind-row > div:last-child { text-align: left !important; }
        }
      `}</style>
    </>
  );
}

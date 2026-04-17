import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const IMG = {
  bay:   "https://www.kitesola-north.si/wp-content/uploads/2022/07/13937767_10154288279987211_6400065277025921007_o.jpeg",
  rider: "https://www.kitesola-north.si/wp-content/uploads/2022/07/456732_10150625772302211_1014554783_o-1024x681.jpeg",
  kite:  "https://www.kitesola-north.si/wp-content/uploads/2022/07/414444_10150772783877211_2131148202_o-1024x577.jpeg",
};

export const metadata: Metadata = {
  title: "Tečaji & Cene | Kite Šola North",
  description: "Spoznavni tečaj €190 · Začetni tečaj €520 · Zasebne ure €100/h. Zadar-Nin-Ljubač.",
};

const courses = [
  {
    id: "spoznavni",
    label: "01 — Spoznavni tečaj",
    name: "Spoznavni tečaj",
    duration: "3 ure",
    price: "€190",
    img: IMG.bay,
    tag: "Idealno za začetek",
    lead: "Tvoj prvi stik z zmajem in morjem — varen, strukturiran in nepozaben.",
    description: "Idealen za vsakogar, ki želi spoznati kiteboarding brez dolgotrajnih obveznosti. V treh intenzivnih urah pridobiš trdne osnove, ki so predpogoj za vsak napredek.",
    includes: [
      "Teorija vetra in meteorologije",
      "Spoznavanje opreme (zmaj, bar, deska, trapez)",
      "Varnostni sistemi in procedure",
      "Vaja z manjšim trenerskim zmajem na kopnem",
      "Dviganje in pristajanje pravega zmaja",
      "Osnove upravljanja zmaja v vodi",
    ],
    note: "Ni potrebno predhodno znanje. Primerno od 14 let dalje.",
  },
  {
    id: "zacetni",
    label: "02 — Začetni tečaj",
    name: "Začetni tečaj",
    duration: "4 dni · 12 ur skupaj",
    price: "€520",
    img: IMG.rider,
    tag: "Najpopularnejši",
    featured: true,
    lead: "Od kopnega do samostojne vožnje po morju v štirih intenzivnih dneh.",
    description: "Naš celovit program te v 4 dneh popelje od popolnega začetnika do samostojnega deskarja. Vsak dan ~3 ure z inštruktorjem ob tebi v vodi.",
    includes: [
      "Vse vsebine spoznavnega tečaja",
      "Montaža in priprema opreme",
      "Dviganje in pristajanje na kopnem",
      "Body dragging (vlečenje z zmajem brez deske)",
      "Body dragging z desko v roki",
      "Samostopen vstop v vodo",
      "Vzpon na desko in prvi koraki",
      "Vožnja po vetru (downwind)",
    ],
    note: "Zahteva predhodni spoznavni tečaj ali enakovredno znanje.",
  },
  {
    id: "zasebne",
    label: "03 — Zasebne ure",
    name: "Zasebne ure",
    duration: "1 ura (min. 2 uri priporočeno)",
    price: "€100",
    priceNote: "/ ura",
    img: IMG.kite,
    tag: "1 na 1",
    lead: "Inštruktor se posveti izključno tebi — hiter napredek, prilagojen tvojemu ritmu.",
    description: "Idealno za povratnike, vmesne nivoje in vsakogar, ki želi pospešiti napredek z individualnim pristopom brez skupinskih tečajev.",
    includes: [
      "Prilagojeno tvojemu znanju in ciljem",
      "Takojšnje povratne informacije",
      "Fokus na specifičnih tehnikah",
      "Fleksibilen urnik",
      "Možnost naprednih manevrov",
      "Priporočljivo: vsaj 2 uri na sejo",
    ],
    note: "Ni starostne omejitve. Primerno za vse nivoje.",
  },
];

const faqs = [
  { q: "Kdaj je sezona?", a: "Glavna sezona je julij in avgust, ko pihajo stabilni maestralni vetrovi. Tečaje organiziramo glede na napoved vetra — skoraj vsak dan pihlja." },
  { q: "Kakšna je starostna omejitev?", a: "Sprejemamo udeležence od 14 let. Mlajši otroci samo z inštruktorskim soglasjem in ob prisotnosti staršev. Zgornje starostne omejitve ni." },
  { q: "Moram znati plavati?", a: "Da, osnovno znanje plavanja je pogoj. Voda v naših spotih je plitka (do pasu ali kolena), nosimo rešilne jopiče." },
  { q: "Ali zagotavljate opremo?", a: "Vso opremo (zmaj, bar, deska, trapez, rešilni jopič) zagotavljamo. Prinesite kopalke, brisačo in sončno kremo." },
  { q: "Kaj če vreme ni primerno?", a: "Tečaj prestavimo na naslednji dan brez doplačila. Vaša varnost je prioriteta — nikoli ne jadrate v nevarnih razmerah." },
  { q: "Ali nudite nastanitev?", a: "Da — opremljeni apartmaji tik ob šoli od €10–15/osebo ali €70/noč za 3–5 oseb (kuhinja, kopalnica, Wi-Fi)." },
];

export default function CoursesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{ background: "var(--ocean)", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <Image
            src={IMG.rider}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "14px" }}>Tečaji &amp; Cene</p>
          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff", maxWidth: "640px" }}>
            Trije programi, en cilj.
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", lineHeight: 1.7, marginTop: "24px" }}>
            Od prvega stika z zmajem do naprednih manevrov — izberemo pravi program za tvoj nivo.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {courses.map((course, idx) => (
            <div
              key={course.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              className="course-row"
            >
              {/* Image side — alternates left/right */}
              <div style={{ order: idx % 2 === 1 ? 2 : 0, position: "relative", minHeight: "400px" }}>
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                {course.featured && (
                  <div style={{ position: "absolute", top: "20px", left: "20px", background: "#C8922A", color: "#fff", padding: "6px 14px", borderRadius: "3px", fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Najpopularnejši
                  </div>
                )}
                {/* Price overlay */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(11,32,53,0.85))", padding: "40px 28px 28px" }}>
                  <div className="stat-number" style={{ fontSize: "3rem", color: "#fff" }}>{course.price}</div>
                  {course.priceNote && <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>{course.priceNote}</span>}
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{course.duration}</div>
                </div>
              </div>

              {/* Content side */}
              <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="label" style={{ marginBottom: "12px" }}>{course.tag}</p>
                <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "var(--ocean)", letterSpacing: "-0.02em", marginBottom: "12px" }}>
                  {course.name}
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", fontWeight: 500, color: "var(--ink)", marginBottom: "16px", lineHeight: 1.5 }}>
                  {course.lead}
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "32px" }}>
                  {course.description}
                </p>

                <div style={{ marginBottom: "32px" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "14px" }}>
                    Vključeno
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                    {course.includes.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "var(--ink)", lineHeight: 1.5 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: "2px", flexShrink: 0 }}>
                          <circle cx="8" cy="8" r="7" stroke="#C8922A" strokeWidth="1.5"/>
                          <path d="M5 8l2 2 4-4" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {course.note && (
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "var(--muted)", marginBottom: "28px", padding: "12px 16px", background: "var(--sand)", borderRadius: "4px", borderLeft: "3px solid #C8922A" }}>
                    {course.note}
                  </p>
                )}

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary">
                    Prijavi se →
                  </Link>
                  <a href="https://wa.me/38641580250" target="_blank" rel="noopener noreferrer" className="btn-dark">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--sand)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "12px", textAlign: "center" }}>Pogosta vprašanja</p>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", color: "var(--ocean)", textAlign: "center", marginBottom: "60px" }}>
            Vse kar moraš vedeti
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: i === 0 ? "8px 8px 0 0" : i === faqs.length - 1 ? "0 0 8px 8px" : "0", padding: "28px 32px" }}
              >
                <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ocean)", marginBottom: "10px" }}>
                  {faq.q}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <p style={{ fontFamily: "var(--font-inter)", color: "var(--muted)", marginBottom: "20px" }}>Še vedno imaš vprašanje?</p>
            <a href="https://wa.me/38641580250" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Pišite na WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .course-row { grid-template-columns: 1fr !important; }
          .course-row > div { order: unset !important; }
        }
      `}</style>
    </>
  );
}

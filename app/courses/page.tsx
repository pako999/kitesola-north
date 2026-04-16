import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tečaji & Cene | Kite Šola North",
  description: "Spoznavni tečaj €190 (3h), Začetni tečaj €520 (4 dni/12h), Zasebne ure €100/h. Zadar-Nin-Ljubač, Hrvaška.",
};

const courses = [
  {
    id: "spoznavni",
    name: "Spoznavni tečaj",
    subtitle: "Tvoj prvi korak v kiteboarding",
    duration: "3 ure",
    price: "€190",
    tag: "Idealno za začetek",
    color: "border-cyan-500/40",
    glow: "from-cyan-500/10",
    icon: "🪁",
    description:
      "Idealen za vsakogar, ki želi spoznati kiteboarding brez dolgotrajnih obveznosti. V treh intenzivnih urah boš pridobil prve izkušnje z zmajem in razumel osnove varnosti.",
    includes: [
      "Teorija vetra in meteorologije",
      "Spoznavanje vse opreme (zmaj, bar, deska, trapez)",
      "Varnostni sistemi in procedure",
      "Vaja z majhnim trenerskim zmajem na kopnem",
      "Dviganje in pristajanje pravega zmaja",
      "Osnove upravljanja zmaja v vodi",
    ],
    note: "Ni potrebno predhodno znanje. Tečaj je predpogoj za začetni tečaj.",
  },
  {
    id: "zacetni",
    name: "Začetni tečaj",
    subtitle: "Od tal do deskanja v 4 dneh",
    duration: "4 dni · 12 ur skupaj",
    price: "€520",
    tag: "Najpopularnejši",
    popular: true,
    color: "border-blue-500/50",
    glow: "from-blue-600/15",
    icon: "🏄",
    description:
      "Naš celovit program, ki te v 4 dneh popelje od popolnega začetnika do samostojnega deskarja. Vsak dan ~3 ure intenzivnega poučevanja z inštruktorjem.",
    includes: [
      "Vse vsebine spoznavnega tečaja",
      "Montaža in priprema opreme",
      "Dviganje in pristajanje zmaja na kopnem",
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
    name: "Zasebne ure",
    subtitle: "1 na 1 z inštruktorjem",
    duration: "1 ura",
    price: "€100",
    priceNote: "/ ura",
    tag: "Individualno",
    color: "border-indigo-500/40",
    glow: "from-indigo-500/10",
    icon: "🎯",
    description:
      "Za tiste, ki želijo hitrejši napredek, individualen pristop ali nadaljevanje po preteklem znanju. Inštruktor se posveti izključno tebi.",
    includes: [
      "Prilagojeno tvojemu nivoju",
      "Tekoča navodila in povratne informacije",
      "Fokus na specifičnih tehnikah",
      "Fleksibilen urnik",
      "Idealno za povratnike in vmesne nivoje",
      "Možnost naprednih manevrov",
    ],
    note: "Minimalno 2 uri priporočeno za eno sejo.",
  },
];

const faqs = [
  {
    q: "Kdaj je sezona?",
    a: "Naša glavna sezona je julij in avgust, ko pihajo stabilni maestralni vetrovi. Tečaje organiziramo glede na vremenske razmere.",
  },
  {
    q: "Kakšna je starostna omejitev?",
    a: "Za tečaje sprejemamo udeležence od 14 let naprej. Mlajši samo ob prisotnosti staršev. Ni zgornje starostne omejitve.",
  },
  {
    q: "Moram znati plavati?",
    a: "Da, osnovno znanje plavanja je pogoj. Vedno nosimo rešilni jopič, voda pa je plitva in varna.",
  },
  {
    q: "Ali zagotavljate opremo?",
    a: "Vso potrebno opremo zagotavljamo v sklopu tečaja. Prinesite le kopalke, brisačo in sončno kremo.",
  },
  {
    q: "Kaj če je vreme slabo?",
    a: "Tečaje organiziramo samo ob primernih pogojih. V primeru slabega vremena tečaj prestavimo brez doplačila.",
  },
  {
    q: "Ali nudite nastanitev?",
    a: "Da! Opremljeni apartmaji tik ob šoli od €10–15/osebo ali €70/noč za 3–5 oseb.",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#080F1E] to-[#060E1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Tečaji &amp; Cene
          </p>
          <h1 className="text-5xl md:text-6xl font-sora font-bold text-white mb-6">
            Nauči se leteti{" "}
            <span className="gradient-text">nad valovi</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Trije programi za vse nivoje — od prvega stika z zmajem do naprednih manevrov.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-16 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className={`glass-card rounded-3xl border ${course.color} overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left: price panel */}
                <div className={`bg-gradient-to-b ${course.glow} to-transparent p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10`}>
                  <div>
                    <div className="text-4xl mb-4">{course.icon}</div>
                    {course.popular && (
                      <span className="inline-block mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold">
                        ★ Najpopularnejši
                      </span>
                    )}
                    <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
                      {course.tag}
                    </div>
                    <h2 className="font-sora font-bold text-white text-3xl mb-1">
                      {course.name}
                    </h2>
                    <p className="text-white/50 text-sm mb-8">{course.subtitle}</p>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-sora font-bold text-white">{course.price}</span>
                      {course.priceNote && (
                        <span className="text-white/40 text-base">{course.priceNote}</span>
                      )}
                    </div>
                    <div className="text-white/40 text-sm">{course.duration}</div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Link
                      href="/contact"
                      className={`block w-full py-3.5 rounded-xl text-center font-semibold transition-all duration-200 ${
                        course.popular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-900/30"
                          : "border border-white/20 text-white hover:bg-white/5"
                      }`}
                    >
                      Prijavi se
                    </Link>
                    <a
                      href="https://wa.me/38641580250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3.5 rounded-xl text-center font-semibold text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Vprašaj na WhatsApp
                    </a>
                  </div>
                </div>

                {/* Right: details */}
                <div className="lg:col-span-2 p-10">
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    {course.description}
                  </p>

                  <h3 className="font-sora font-semibold text-white mb-4">
                    Kaj je vključeno:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {course.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <svg className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {course.note && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <svg className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-white/50 text-sm">{course.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-[#060E1A] to-[#080F1E]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Pogosta vprašanja
            </p>
            <h2 className="text-4xl font-sora font-bold text-white">
              Imaš vprašanje?
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-2xl p-6">
                <h3 className="font-sora font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Še vedno imaš vprašanje?</p>
            <a
              href="https://wa.me/38641580250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              Pišite nam na WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

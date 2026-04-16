import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lokacija Zadar-Nin-Ljubač | Kite Šola North",
  description: "Kiteboarding v Zadar-Nin-Ljubač, Hrvaška. Plitva voda, 3 lokacije, 4h od Ljubljane. Maestral, Burja in Tramontana.",
};

const spots = [
  {
    name: "Ljubač",
    tag: "Glavna lokacija",
    wind: "Maestral (JZ)",
    depth: "Koleni globoko",
    desc: "Naša primarna lokacija z ogromnim plitkim zalivom — idealna za vse nivoje. Peščeno dno, čista voda, parkiranje tik ob plaži.",
    highlight: true,
  },
  {
    name: "Nin",
    tag: "Historično mesto",
    wind: "Tramontana (S)",
    depth: "Pas globoko",
    desc: "Laguna blizu Ninskega zaliva, idealna za severnik. Možen ogled zgodovinskega mesta Nin po tečaju.",
    highlight: false,
  },
  {
    name: "Zadar okolica",
    tag: "Tretja lokacija",
    wind: "Burja (SV)",
    depth: "Pasu do prsi",
    desc: "Rezervna lokacija za dneve z močno burjo. Dobro zavetišče za vmesne in napredne kiteboarderje.",
    highlight: false,
  },
];

const winds = [
  {
    name: "Maestral",
    direction: "Jugozahodnik",
    months: "Junij – September",
    speed: "12–22 vozlov",
    desc: "Termalski veter, ki se razvije vsak popdan. Zanesljiv in predvidljiv — idealen za učenje.",
    color: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    name: "Burja",
    direction: "Severovzhodnik",
    months: "Celotno leto",
    speed: "15–35 vozlov",
    desc: "Sunkovit veter z gore. Primeren za izkušene kiteboarderje. Pogosto poleti blag.",
    color: "text-blue-400",
    dot: "bg-blue-400",
  },
  {
    name: "Tramontana",
    direction: "Severnik",
    months: "Oktober – Maj",
    speed: "10–20 vozlov",
    desc: "Hladen, enakomeren severnik. Primeren za vse nivoje, ko pihlja zmerno.",
    color: "text-indigo-400",
    dot: "bg-indigo-400",
  },
];

const howToGet = [
  { from: "Ljubljana", time: "~4 ure", via: "A1, nato A6 do Rupe, nato obmorska" },
  { from: "Maribor", time: "~4 ure", via: "A1, nato skozi Slovenijo do Hrvaške" },
  { from: "Koper", time: "~3 ure", via: "Obmorska cesta do Zadra" },
  { from: "Zagreb", time: "~2 uri", via: "A1 avtocesta do Zadra" },
];

export default function LocationPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#080F1E] to-[#060E1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Lokacija
          </p>
          <h1 className="text-5xl md:text-6xl font-sora font-bold text-white mb-6">
            Zadar-Nin-Ljubač,{" "}
            <span className="gradient-text">Hrvaška</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Jadransko morje na dosegu roke — 3 izjemne kiteboarding lokacije v radiju 10 km,
            15 km od centra Zadra.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="py-8 bg-[#060E1A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-white/10 h-96">
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
      <section className="py-24 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Naše lokacije
            </p>
            <h2 className="text-4xl font-sora font-bold text-white">
              3 odlični spoti
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Lokacijo izbiramo glede na napoved vetra — vedno iščemo najboljše pogoje za teboj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spots.map((spot) => (
              <div
                key={spot.name}
                className={`glass-card rounded-2xl p-8 flex flex-col ${
                  spot.highlight ? "border-cyan-500/40" : "border-white/10"
                }`}
              >
                {spot.highlight && (
                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30 self-start">
                    ★ {spot.tag}
                  </span>
                )}
                {!spot.highlight && (
                  <span className="inline-block mb-4 text-white/40 text-xs font-medium self-start">
                    {spot.tag}
                  </span>
                )}
                <h3 className="font-sora font-bold text-white text-2xl mb-3">{spot.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{spot.desc}</p>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">Veter</span>
                    <span className="text-cyan-400 font-medium">{spot.wind}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">Globina</span>
                    <span className="text-white/70">{spot.depth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIND CONDITIONS */}
      <section className="py-24 bg-gradient-to-b from-[#060E1A] to-[#080F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Vetrovi
            </p>
            <h2 className="text-4xl font-sora font-bold text-white">
              Vetrovi Jadranskega morja
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Zadar-Nin-Ljubač je eden redkih krajev, kjer pihajo vsi trije glavni jadranski vetrovi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winds.map((wind) => (
              <div key={wind.name} className="glass-card rounded-2xl p-8">
                <div className={`w-3 h-3 rounded-full ${wind.dot} mb-6`} />
                <h3 className={`font-sora font-bold text-2xl mb-1 ${wind.color}`}>
                  {wind.name}
                </h3>
                <p className="text-white/40 text-sm mb-4">{wind.direction}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{wind.desc}</p>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Hitrost</span>
                    <span className="text-white/70">{wind.speed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Sezona</span>
                    <span className="text-white/70">{wind.months}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO GET THERE */}
      <section className="py-24 bg-[#080F1E]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Kako priti
            </p>
            <h2 className="text-4xl font-sora font-bold text-white">
              Dostopnost
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {howToGet.map((route) => (
              <div key={route.from} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  🚗
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-sora font-semibold text-white">{route.from}</span>
                    <span className="text-cyan-400 font-bold">{route.time}</span>
                  </div>
                  <p className="text-white/40 text-sm">{route.via}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Accommodation */}
          <div className="glass-card rounded-3xl p-10 border border-cyan-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Nastanitev
                </p>
                <h3 className="font-sora font-bold text-white text-3xl mb-4">
                  Spi tik ob morju
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Nudimo opremljene apartmaje v neposredni bližini naše šole.
                  Kuhinja, kopalnica, spalnica, TV, Wi-Fi — vse kar potrebuješ za popoln kite oddih.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  Povpraši o nastanitve
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Cena/osebo", value: "€10–15" },
                  { label: "Družinski apt.", value: "€70/noč" },
                  { label: "Kapaciteta", value: "3–5 oseb" },
                  { label: "Razdalja od šole", value: "~2 km" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-sora font-bold text-cyan-400">{item.value}</div>
                    <div className="text-white/40 text-xs mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

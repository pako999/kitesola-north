import Link from "next/link";

const features = [
  {
    icon: "🌊",
    title: "Plitva voda",
    desc: "Idealna učna okolja s plitvo, prozorno vodo — varno in zaupanja vredno za začetnike.",
  },
  {
    icon: "💨",
    title: "Odlični vetrovi",
    desc: "Maestral, Burja in Tramontana zagotavljajo pogoje za vsakega kitesurferja cel dan.",
  },
  {
    icon: "👨‍🏫",
    title: "Certificirani inštruktorji",
    desc: "Naša ekipa ima mednarodno licenco in leta izkušenj z vsemi nivoji znanja.",
  },
  {
    icon: "🏖️",
    title: "3 lokacije",
    desc: "Izbiramo lokacijo glede na veter — vse v radiju 10 km, peščene plaže.",
  },
  {
    icon: "⚡",
    title: "Hitri napredek",
    desc: "Plitva voda omogoča izjemno hiter napredek — večina začetnikov stoji na deski 1. dan.",
  },
  {
    icon: "🏡",
    title: "Nastanitev",
    desc: "Opremljeni apartmaji tik ob šoli od €10–15/osebo ali €70/noč za družine.",
  },
];

const courses = [
  {
    name: "Spoznavni tečaj",
    duration: "3 ure",
    price: "€190",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    tag: "Idealno za začetek",
    highlights: [
      "Teorija vetra in varnosti",
      "Uvod v opremo",
      "Vaja z trenerskim zmajem",
      "Varnostni sistemi",
      "Dviganje in pristajanje pravega zmaja",
    ],
  },
  {
    name: "Začetni tečaj",
    duration: "4 dni / 12 ur",
    price: "€520",
    color: "from-blue-600/30 to-blue-600/5",
    border: "border-blue-500/40",
    tag: "Najpopularnejši",
    popular: true,
    highlights: [
      "Vse iz spoznavnega tečaja",
      "Montaža in dviganje na kopnem",
      "Body dragging v vodi",
      "Samostopen vstop v vodo",
      "Začetek na deski in vožnja",
    ],
  },
  {
    name: "Zasebne ure",
    duration: "1 ura",
    price: "€100",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/30",
    tag: "1 na 1",
    highlights: [
      "Individualni pristop",
      "Prilagojeno vašemu nivoju",
      "Hiter napredek",
      "Fleksibilen urnik",
      "Idealno za povratke",
    ],
  },
];

const testimonials = [
  {
    name: "Maja K.",
    from: "Ljubljana",
    text: "Neverjeten tečaj! Inštruktor je bil potrpežljiv in strokoven. Po 4 dneh sem sama vozila po morju. Definitvno priporočam!",
    stars: 5,
  },
  {
    name: "Rok P.",
    from: "Maribor",
    text: "Lokacija je čudovita — plitva, čista voda, odlični vetrovi. Naučil sem se hitreje, kot sem pričakoval.",
    stars: 5,
  },
  {
    name: "Ana M.",
    from: "Koper",
    text: "Spoznavni tečaj je bil odlična izkušnja. Že naslednje leto se vrnem za začetni tečaj!",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl" />
          {/* Wave lines */}
          <svg className="absolute bottom-0 left-0 right-0 w-full opacity-20" viewBox="0 0 1440 120" fill="none">
            <path d="M0 60 Q360 0 720 60 Q1080 120 1440 60 L1440 120 L0 120Z" fill="url(#waveGrad)" />
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0066CC" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Sezona 2025 — Julij &amp; Avgust · Zadar, Hrvaška
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-sora font-bold leading-tight mb-6">
            Čuti veter.{" "}
            <span className="gradient-text">Osvoji valove.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Profesionalna kite šola v kristalno čistem Jadranskem morju.
            Plitva voda, odlični vetrovi, certicirani inštruktorji.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl shadow-cyan-900/40 w-full sm:w-auto"
            >
              Prijavi se na tečaj
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-200 w-full sm:w-auto"
            >
              Oglej si tečaje →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "500+", label: "Zadovoljnih učencev" },
              { value: "10+", label: "Let izkušenj" },
              { value: "3", label: "Lokacije" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-sora font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Razišči</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-[#060E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Zakaj Kite Šola North
            </p>
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-4">
              Idealni pogoji za učenje
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Zadar-Nin-Ljubač nudi edinstveno kombinacijo naravnih danosti in profesionalne poučevanja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-sora font-semibold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="py-24 bg-gradient-to-b from-[#060E1A] to-[#080F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Naši tečaji
            </p>
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-4">
              Izberi svojo avanturo
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Od prvega stika z zmajem do samostojne vožnje — imamo tečaj za vsak nivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.name}
                className={`relative rounded-2xl border ${course.border} bg-gradient-to-b ${course.color} p-8 flex flex-col`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg">
                    ★ Najpopularnejši
                  </div>
                )}
                <div className="mb-6">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                    {course.tag}
                  </span>
                  <h3 className="font-sora font-bold text-white text-2xl mt-2 mb-1">
                    {course.name}
                  </h3>
                  <p className="text-white/40 text-sm">{course.duration}</p>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-sora font-bold text-white">{course.price}</span>
                  {course.name === "Zasebne ure" && (
                    <span className="text-white/40 text-sm ml-1">/ ura</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {course.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl text-center font-semibold text-sm transition-all duration-200 ${
                    course.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  Prijavi se
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Več o tečajih →
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION TEASER */}
      <section className="py-24 bg-[#080F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Lokacija
              </p>
              <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
                Zadar-Nin-Ljubač,{" "}
                <span className="gradient-text">Hrvaška</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Le 4 ure vožnje iz Ljubljane ali Maribora. Tri lokacije v radiju 10 km —
                plitva, peščena morja, idealna za začetnike in napredne kitesurferje.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "15 km od centra Zadra",
                  "Plitva voda, idealna za učenje",
                  "Parkiranje tik ob plaži",
                  "Apartmaji tik ob šoli",
                  "Samo 4h vožnje iz Ljubljane",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 font-medium"
              >
                Več o lokaciji →
              </Link>
            </div>

            {/* Map placeholder */}
            <div className="relative">
              <div className="glass-card rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45000!2d15.17!3d44.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761e5c57bca70c7%3A0x2e4d0e93069a9f3c!2sNin%2C%20Croatia!5e0!3m2!1sen!2ssi!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3 border border-cyan-500/30">
                <div className="text-cyan-400 font-bold text-lg">3</div>
                <div className="text-white/60 text-xs">kiteboarding lokacije</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-[#080F1E] to-[#060E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Mnenja
            </p>
            <h2 className="text-4xl font-sora font-bold text-white">
              Kaj pravijo naši učenci
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-[#060E1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16 border border-cyan-500/20 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-4">
                Pripravljeni na svojo{" "}
                <span className="gradient-text">kite avanturo?</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Mesta so omejena. Sezona 2025 se začne julija. Rezerviraj svoje mesto danes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl shadow-cyan-900/40 w-full sm:w-auto"
                >
                  Prijavi se zdaj
                </Link>
                <a
                  href="https://wa.me/38641580250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-200 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

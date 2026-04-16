"use client";

import { useState } from "react";

const courseOptions = [
  "Spoznavni tečaj (3h · €190)",
  "Začetni tečaj (4 dni/12h · €520)",
  "Zasebne ure (€100/h)",
  "Nastanitev",
  "Splošno vprašanje",
];

const monthOptions = [
  "Julij 2025",
  "Avgust 2025",
  "September 2025",
  "Drugo",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    month: "",
    people: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060E1A] px-6">
        <div className="text-center max-w-lg">
          <div className="text-7xl mb-6">🏄</div>
          <h1 className="font-sora font-bold text-4xl text-white mb-4">
            Prijava prejeta!
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Hvala, <strong className="text-white">{formData.name}</strong>! Kontaktirali te bomo
            v roku 24 ur na WhatsApp ali e-mail.
          </p>
          <div className="glass-card rounded-2xl p-6 text-left mb-8">
            <h3 className="font-semibold text-white mb-3">Tvoja prijava:</h3>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex justify-between">
                <span>Tečaj</span><span className="text-white">{formData.course}</span>
              </div>
              <div className="flex justify-between">
                <span>Mesec</span><span className="text-white">{formData.month}</span>
              </div>
              <div className="flex justify-between">
                <span>Osebe</span><span className="text-white">{formData.people}</span>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/38641580250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
          >
            Pišite nam takoj na WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-[#080F1E] to-[#060E1A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Kontakt &amp; Prijava
          </p>
          <h1 className="text-5xl md:text-6xl font-sora font-bold text-white mb-6">
            Rezerviraj svoje{" "}
            <span className="gradient-text">mesto</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">
            Mesta so omejena. Izpolni obrazec in kontaktirali te bomo v roku 24 ur.
          </p>
        </div>
      </section>

      {/* FORM + CONTACT */}
      <section className="py-16 pb-32 bg-[#060E1A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
                <h2 className="font-sora font-bold text-white text-2xl mb-2">
                  Prijavnica
                </h2>

                {/* Name */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">Ime in priimek *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Janez Novak"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 transition-all text-sm"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="janez@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Telefon / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+386 41 000 000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">Tečaj *</label>
                  <select
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 transition-all text-sm appearance-none"
                  >
                    <option value="" disabled className="bg-[#0A1628]">Izberi tečaj…</option>
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0A1628]">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Month + People */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Mesec *</label>
                    <select
                      name="month"
                      required
                      value={formData.month}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 transition-all text-sm appearance-none"
                    >
                      <option value="" disabled className="bg-[#0A1628]">Izberi mesec…</option>
                      {monthOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A1628]">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Število oseb</label>
                    <select
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/60 transition-all text-sm appearance-none"
                    >
                      {["1", "2", "3", "4", "5+"].map((n) => (
                        <option key={n} value={n} className="bg-[#0A1628]">{n} {n === "1" ? "oseba" : "osebe/oseb"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/60 text-sm mb-2">Sporočilo (neobvezno)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Dodaj morebitna vprašanja ali posebne zahteve…"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/60 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-xl shadow-cyan-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Pošiljanje…
                    </span>
                  ) : (
                    "Pošlji prijavo"
                  )}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Z oddajo obrazca soglašate z nami, da vas kontaktiramo glede rezervacije.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct contact */}
              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-sora font-semibold text-white text-lg mb-5">
                  Direkten kontakt
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/38641580250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-green-400">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-green-400 font-semibold text-sm">WhatsApp</div>
                      <div className="text-white/70 text-sm">+386 41 580 250</div>
                    </div>
                  </a>

                  <a
                    href="viber://chat?number=38641580250"
                    className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/15 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg">
                      V
                    </div>
                    <div>
                      <div className="text-purple-400 font-semibold text-sm">Viber</div>
                      <div className="text-white/70 text-sm">+386 41 580 250</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Season info */}
              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-sora font-semibold text-white text-lg mb-4">
                  Sezonske informacije
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Glavna sezona", value: "Julij – Avgust" },
                    { label: "Čas odgovora", value: "Do 24 ur" },
                    { label: "Rezervacija", value: "Vsaj 1 teden prej" },
                    { label: "Odpoved", value: "Brezplačno do 48h prej" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-white/40">{item.label}</span>
                      <span className="text-white/80">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-sora font-semibold text-white text-lg mb-3">
                  Lokacija
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Zadar-Nin-Ljubač, Hrvaška<br />
                  15 km od centra Zadra<br />
                  ~4 ure od Ljubljane
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

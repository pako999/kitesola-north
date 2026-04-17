"use client";

import { useState } from "react";

const courseOptions = [
  "Spoznavni tečaj (3h · €190)",
  "Začetni tečaj (4 dni/12h · €520)",
  "Zasebne ure (€100/h)",
  "Nastanitev",
  "Splošno vprašanje",
];

const monthOptions = ["Julij 2025", "Avgust 2025", "September 2025", "Drugo"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", month: "", people: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div style={{ minHeight: "100svh", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: "520px", textAlign: "center" }}>
          <div style={{ width: "72px", height: "72px", background: "var(--ocean)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "2.5rem", color: "var(--ocean)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Prijava prejeta!
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "40px" }}>
            Hvala, <strong style={{ color: "var(--ink)" }}>{form.name}</strong>. Kontaktirali vas bomo v roku 24 ur na WhatsApp ali e-mail.
          </p>
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "28px", textAlign: "left", marginBottom: "36px" }}>
            {[
              { k: "Tečaj", v: form.course },
              { k: "Mesec", v: form.month },
              { k: "Osebe", v: form.people },
            ].map((r) => (
              <div key={r.k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "var(--muted)" }}>{r.k}</span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)" }}>{r.v}</span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/38641580250" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex" }}>
            Pišite nam takoj na WhatsApp →
          </a>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <>
      {/* HEADER */}
      <section style={{ background: "var(--ocean)", padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "14px" }}>Kontakt &amp; Prijava</p>
          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff", maxWidth: "640px" }}>
            Rezerviraj svoje mesto.
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem", color: "rgba(255,255,255,0.5)", marginTop: "20px", maxWidth: "440px", lineHeight: 1.7 }}>
            Mesta so omejena. Izpolni obrazec — odgovorimo v 24 urah.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: "var(--cream)", padding: "64px 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "48px", alignItems: "start" }} className="contact-grid">

          {/* ── Form card ── */}
          <form onSubmit={submit} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "48px" }}>
            <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.5rem", color: "var(--ocean)", marginBottom: "36px", letterSpacing: "-0.01em" }}>
              Prijavnica
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Name */}
              <div>
                <label style={lbl}>Ime in priimek *</label>
                <input name="name" required value={form.name} onChange={set} placeholder="Janez Novak" style={inp} />
              </div>

              {/* Email + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="two-col">
                <div>
                  <label style={lbl}>E-mail *</label>
                  <input name="email" type="email" required value={form.email} onChange={set} placeholder="janez@email.com" style={inp} />
                </div>
                <div>
                  <label style={lbl}>Telefon / WhatsApp *</label>
                  <input name="phone" type="tel" required value={form.phone} onChange={set} placeholder="+386 41 000 000" style={inp} />
                </div>
              </div>

              {/* Course */}
              <div>
                <label style={lbl}>Tečaj *</label>
                <select name="course" required value={form.course} onChange={set} style={{ ...inp, appearance: "none" as const }}>
                  <option value="" disabled>Izberi tečaj…</option>
                  {courseOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {/* Month + People */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="two-col">
                <div>
                  <label style={lbl}>Mesec *</label>
                  <select name="month" required value={form.month} onChange={set} style={{ ...inp, appearance: "none" as const }}>
                    <option value="" disabled>Izberi mesec…</option>
                    {monthOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Število oseb</label>
                  <select name="people" value={form.people} onChange={set} style={{ ...inp, appearance: "none" as const }}>
                    {["1","2","3","4","5+"].map((n) => (
                      <option key={n} value={n}>{n} {n === "1" ? "oseba" : "osebe/oseb"}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={lbl}>Sporočilo (neobvezno)</label>
                <textarea name="message" value={form.message} onChange={set} rows={4} placeholder="Vprašanja, posebne zahteve, predhodne izkušnje…" style={{ ...inp, resize: "none" as const }} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{ padding: "16px 32px", background: "#C8922A", color: "#fff", border: "none", borderRadius: "4px", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                {loading ? "Pošiljanje…" : "Pošlji prijavo →"}
              </button>
            </div>
          </form>

          {/* ── Sidebar ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* WhatsApp */}
            <a
              href="https://wa.me/38641580250"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "16px", background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", textDecoration: "none", transition: "border-color 0.2s" }}
            >
              <div style={{ width: "48px", height: "48px", background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ocean)" }}>WhatsApp</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "var(--muted)", marginTop: "2px" }}>+386 41 580 250</div>
              </div>
            </a>

            {/* Viber */}
            <a
              href="viber://chat?number=38641580250"
              style={{ display: "flex", alignItems: "center", gap: "16px", background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", textDecoration: "none" }}
            >
              <div style={{ width: "48px", height: "48px", background: "#7360F2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-sora)", fontWeight: 800, color: "#fff", fontSize: "1.125rem" }}>V</div>
              <div>
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ocean)" }}>Viber</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "var(--muted)", marginTop: "2px" }}>+386 41 580 250</div>
              </div>
            </a>

            {/* Info box */}
            <div style={{ background: "var(--ocean)", borderRadius: "8px", padding: "28px 24px" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C8922A", marginBottom: "18px" }}>
                Sezonske informacije
              </p>
              {[
                { k: "Sezona", v: "Julij – Avgust 2025" },
                { k: "Odgovor", v: "Do 24 ur" },
                { k: "Rezervacija", v: "Vsaj 7 dni prej" },
                { k: "Odpoved", v: "Brezplačno do 48h" },
              ].map((r) => (
                <div key={r.k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{r.k}</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#fff" }}>{r.v}</span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px" }}>Lokacija</div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "var(--ink)", lineHeight: 1.6 }}>
                Zadar-Nin-Ljubač<br />
                <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>15 km od centra Zadra · ~4h od Ljubljane</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #C8922A !important; }
      `}</style>
    </>
  );
}

/* ── Shared input styles ── */
const lbl: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter)",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "#4B4B4B",
  marginBottom: "8px",
  letterSpacing: "0.01em",
};

const inp: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "var(--cream)",
  border: "1px solid var(--border)",
  borderRadius: "4px",
  fontFamily: "var(--font-inter)",
  fontSize: "0.9375rem",
  color: "var(--ink)",
  transition: "border-color 0.15s",
};

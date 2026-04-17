import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog – Kiteboarding Nasveti & Vodič | Kite Šola North",
  description: "Nasveti za kiteboarding začetnike, vodič po lokacijah, cenik tečajev, oprema in varnost. Blog Kite Šola North, Zadar-Nin-Ljubač.",
  keywords: "kiteboarding blog slovenija, kite nasveti, kitesurfanje začetniki, kite šola hrvaška",
};

const categoryColors: Record<string, string> = {
  Nasveti:  "#0B2035",
  Lokacija: "#1D6A3A",
  Oprema:   "#7C3E0C",
  Varnost:  "#7C0C1A",
  Tečaji:   "#C8922A",
};

export default function BlogIndex() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      {/* Header */}
      <section style={{ background: "var(--ocean)", padding: "120px 24px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="label" style={{ marginBottom: "14px" }}>Blog</p>
          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", maxWidth: "640px", marginBottom: "20px" }}>
            Kiteboarding nasveti,<br />vodič & znanje.
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem", color: "rgba(255,255,255,0.5)", maxWidth: "480px", lineHeight: 1.7 }}>
            Vse kar morate vedeti o kiteboarding — od prvega tečaja do naprednih tehnik.
            V slovenščini.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--cream)", padding: "64px 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            style={{ textDecoration: "none", display: "block", marginBottom: "48px" }}
          >
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="featured-grid">
              {/* Left: text */}
              <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: categoryColors[featured.category] ?? "#0B2035", color: "#fff", padding: "4px 10px", borderRadius: "3px" }}>
                    {featured.category}
                  </span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--muted)" }}>
                    {featured.readMinutes} min branja
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--ocean)", letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.2 }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "28px" }}>
                  {featured.intro.slice(0, 160)}…
                </p>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", fontWeight: 600, color: "#C8922A" }}>
                  Preberi več →
                </span>
              </div>
              {/* Right: accent panel */}
              <div style={{ background: "var(--ocean)", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px", minHeight: "320px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "4rem", color: "#C8922A", lineHeight: 1 }}>
                    #1
                  </div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", marginTop: "12px" }}>
                    Najpogosteje brani članek
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Category filter label */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap" }}>
              Vsi članki
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          {/* Post grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="blog-grid">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
              >
                <article
                  style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden", flex: 1, display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }}
                >
                  {/* Category stripe */}
                  <div style={{ height: "4px", background: categoryColors[post.category] ?? "#0B2035" }} />

                  <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: categoryColors[post.category] ?? "#0B2035" }}>
                        {post.category}
                      </span>
                      <span style={{ color: "var(--border)" }}>·</span>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--muted)" }}>
                        {post.readMinutes} min
                      </span>
                    </div>

                    <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ocean)", letterSpacing: "-0.01em", lineHeight: 1.35, marginBottom: "12px" }}>
                      {post.title}
                    </h2>

                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "24px", flex: 1 }}>
                      {post.intro.slice(0, 120)}…
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "var(--muted)" }}>
                        {new Date(post.publishDate).toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#C8922A" }}>
                        Preberi →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ocean)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#fff", marginBottom: "16px" }}>
            Pripravljeni na tečaj?
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", color: "rgba(255,255,255,0.5)", marginBottom: "32px", lineHeight: 1.7 }}>
            Branje je dobro — toda pravo znanje pride z izkušnjo na vodi.
          </p>
          <Link href="/contact" className="btn-primary">
            Prijavi se na tečaj →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

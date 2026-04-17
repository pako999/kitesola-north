import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, getAllSlugs } from "@/lib/posts";

/* ── Static generation ───────────────────────────────── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Kite Šola North`,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      locale: "sl_SI",
    },
  };
}

const categoryColors: Record<string, string> = {
  Nasveti:  "#0B2035",
  Lokacija: "#1D6A3A",
  Oprema:   "#7C3E0C",
  Varnost:  "#7C0C1A",
  Tečaji:   "#C8922A",
};

/* ── Page ─────────────────────────────────────────────── */
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const catColor = categoryColors[post.category] ?? "#0B2035";

  return (
    <>
      {/* Article header */}
      <section style={{ background: "var(--ocean)", padding: "120px 24px 64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Domov</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>{post.category}</span>
          </div>

          {/* Category + read time */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: catColor, color: "#fff", padding: "5px 12px", borderRadius: "3px" }}>
              {post.category}
            </span>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
              {post.readMinutes} min branja
            </span>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
              · {new Date(post.publishDate).toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "24px" }}>
            {post.title}
          </h1>

          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
            {post.intro}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: "var(--cream)", padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Keywords */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "48px" }}>
            {post.keywords.map((kw) => (
              <span key={kw} style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "var(--muted)", background: "var(--sand)", border: "1px solid var(--border)", borderRadius: "3px", padding: "4px 10px" }}>
                {kw}
              </span>
            ))}
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {post.sections.map((s, i) => (
              <div
                key={i}
                style={{ paddingBottom: "40px", marginBottom: "40px", borderBottom: i < post.sections.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.375rem", color: "var(--ocean)", letterSpacing: "-0.015em", marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <span style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "0.875rem", color: catColor, marginTop: "4px", flexShrink: 0, letterSpacing: "0.04em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.0625rem", color: "#3D3D3D", lineHeight: 1.8 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA box */}
          <div style={{ background: "var(--ocean)", borderRadius: "8px", padding: "40px 44px", marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: "6px" }}>
                {post.cta}
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)" }}>
                Kite Šola North · Zadar-Nin-Ljubač · +386 41 580 250
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
              Prijavi se →
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ background: "var(--sand)", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="label" style={{ marginBottom: "10px" }}>Sorodne vsebine</p>
            <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.75rem", color: "var(--ocean)", marginBottom: "36px" }}>
              Morda vas zanima še
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="blog-grid">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ height: "3px", background: categoryColors[rp.category] ?? "#0B2035" }} />
                    <div style={{ padding: "24px" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: categoryColors[rp.category] ?? "#0B2035" }}>
                        {rp.category}
                      </span>
                      <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1rem", color: "var(--ocean)", marginTop: "10px", lineHeight: 1.35 }}>
                        {rp.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#C8922A", marginTop: "16px" }}>
                        Preberi →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div style={{ background: "var(--cream)", padding: "32px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", fontWeight: 500, color: "var(--muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            ← Nazaj na blog
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

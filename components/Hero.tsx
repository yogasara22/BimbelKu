"use client";
import { MessageCircle, Star, Users, Award, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #EBF5FF 0%, #DBEAFE 40%, #F0FDF4 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 70,
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "4rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left Content */}
        <div style={{ animation: "fadeInUp 0.7s ease forwards" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(26,86,219,0.08)",
              border: "1px solid rgba(26,86,219,0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <Star size={14} color="#F59E0B" fill="#F59E0B" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1A56DB" }}>
              #1 Bimbel Terpercaya di Kota Anda
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#0F172A",
              marginBottom: 24,
              lineHeight: 1.15,
            }}
          >
            Wujudkan Prestasi{" "}
            <span
              style={{
                color: "#1A56DB",
                position: "relative",
                display: "inline-block",
              }}
            >
              Terbaik
              <svg
                style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }}
                height="6"
                viewBox="0 0 200 6"
              >
                <path d="M0,5 Q50,0 100,4 Q150,8 200,3" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Anak Anda
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            Program bimbingan belajar komprehensif — les privat, kursus bahasa Inggris, calistung, hingga persiapan SD/SMP — dengan pengajar berpengalaman dan metode teruji.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20program%20bimbel"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#25D366",
                color: "white",
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 16,
                boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(37,211,102,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.35)";
              }}
            >
              <MessageCircle size={20} />
              Konsultasi Gratis
            </a>
            <a
              href="#program"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "white",
                color: "#1A56DB",
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                border: "2px solid #1A56DB",
                transition: "background 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1A56DB";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1A56DB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Lihat Program
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid rgba(0,0,0,0.08)",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <Users size={18} />, number: "500+", label: "Siswa Aktif" },
              { icon: <Award size={18} />, number: "95%", label: "Nilai Meningkat" },
              { icon: <Star size={18} fill="#F59E0B" color="#F59E0B" />, number: "4.9/5", label: "Rating Orang Tua" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(26,86,219,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1A56DB",
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "Merriweather, serif", fontWeight: 900, fontSize: 18, color: "#0F172A" }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748B", fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Floating Card Visual */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              background: "white",
              borderRadius: 24,
              padding: 32,
              boxShadow: "0 32px 64px -16px rgba(0,0,0,0.15)",
              maxWidth: 380,
              width: "100%",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #1A56DB, #60A5FA)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 24 }}>🎓</span>
              </div>
              <div>
                <div style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: 16 }}>Program Unggulan</div>
                <div style={{ fontSize: 13, color: "#64748B" }}>Pilih sesuai kebutuhan</div>
              </div>
            </div>

            {[
              { emoji: "📚", name: "Bimbel SD/SMP", tag: "Populer", color: "#1A56DB" },
              { emoji: "🌍", name: "Kursus Bahasa Inggris", tag: "Terlaris", color: "#F59E0B" },
              { emoji: "✏️", name: "Calistung (TK-SD Awal)", tag: "Baru", color: "#10B981" },
              { emoji: "👤", name: "Les Privat", tag: "Fleksibel", color: "#8B5CF6" },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: i < 3 ? "1px solid #F1F5F9" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{p.emoji}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{p.name}</span>
                </div>
                <span
                  style={{
                    background: p.color + "18",
                    color: p.color,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: 100,
                  }}
                >
                  {p.tag}
                </span>
              </div>
            ))}

            <a
              href="#program"
              style={{
                display: "block",
                marginTop: 20,
                background: "#1A56DB",
                color: "white",
                padding: "12px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                textAlign: "center",
                transition: "background 0.2s",
              }}
            >
              Lihat Semua Program →
            </a>
          </div>

          {/* Floating badges */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: -10,
              background: "white",
              borderRadius: 12,
              padding: "10px 14px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              animation: "float 3.5s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <span style={{ fontSize: 16 }}>⭐</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0F172A" }}>Nilai Naik!</div>
              <div style={{ fontSize: 11, color: "#64748B" }}>95% siswa</div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: -20,
              background: "white",
              borderRadius: 12,
              padding: "10px 14px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              animation: "float 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <span style={{ fontSize: 16 }}>👩‍🏫</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0F172A" }}>30+ Pengajar</div>
              <div style={{ fontSize: 11, color: "#64748B" }}>Berpengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          color: "#94A3B8",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1 }}>SCROLL</span>
        <ChevronDown size={16} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

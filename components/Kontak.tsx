"use client";
import { MapPin, Phone, Clock, MessageCircle, Mail, Share2, Users } from "lucide-react";

export default function Kontak() {
  return (
    <section id="kontak" style={{ padding: "80px 0", background: "#0F172A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        {/* CTA Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #1A56DB 0%, #3B82F6 50%, #60A5FA 100%)",
            borderRadius: 24,
            padding: "48px 40px",
            textAlign: "center",
            marginBottom: 64,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -30, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 900, color: "white", marginBottom: 16 }}>
              Mulai Perjalanan Belajar Anak Anda Hari Ini!
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
              Dapatkan konsultasi gratis dan sesi trial tanpa syarat. Kami siap membantu anak Anda mencapai potensi terbaik.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20dan%20trial%20gratis%20di%20BimbelKu"
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
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, opacity 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <MessageCircle size={20} />
                Chat WhatsApp Sekarang
              </a>
              <a
                href="tel:+6281234567890"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 16,
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
              >
                <Phone size={18} />
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                }}
              >
                📚
              </div>
              <span style={{ fontFamily: "Merriweather, serif", fontWeight: 900, fontSize: 20, color: "white" }}>
                Bimbel<span style={{ color: "#60A5FA" }}>Ku</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, marginBottom: 20 }}>
              Lembaga bimbingan belajar terpercaya dengan lebih dari 500 siswa aktif dan pengajar berpengalaman.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: <Share2 size={16} />, href: "#", label: "Instagram" },
                { icon: <Users size={16} />, href: "#", label: "Facebook" },
                { icon: <MessageCircle size={16} />, href: "https://wa.me/6281234567890", label: "WhatsApp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1A56DB";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 style={{ color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
              Program
            </h4>
            {["Bimbel SD / SMP", "Kursus Bahasa Inggris", "Kursus Calistung", "Les Privat"].map((p) => (
              <a
                key={p}
                href="#program"
                style={{
                  display: "block",
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: 14,
                  marginBottom: 10,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#60A5FA"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8"; }}
              >
                → {p}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
              Hubungi Kami
            </h4>
            {[
              { icon: <MapPin size={15} />, text: "Jl. Pendidikan No. 123, Kota Anda" },
              { icon: <Phone size={15} />, text: "0812-3456-7890" },
              { icon: <Mail size={15} />, text: "info@bimbelku.id" },
              { icon: <Clock size={15} />, text: "Senin–Sabtu, 07.00–20.00 WIB" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12, color: "#94A3B8", fontSize: 14 }}>
                <span style={{ color: "#60A5FA", marginTop: 1, flexShrink: 0 }}>{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div>
            <h4 style={{ color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
              Lokasi Kami
            </h4>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onClick={() => window.open("https://maps.google.com", "_blank")}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              <MapPin size={28} color="#60A5FA" />
              <span style={{ fontSize: 13, color: "#94A3B8" }}>Klik untuk buka Maps</span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "#64748B" }}>
            © 2025 BimbelKu. Semua hak cipta dilindungi.
          </p>
          <p style={{ fontSize: 13, color: "#64748B" }}>
            Dibuat dengan ❤️ untuk pendidikan Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}

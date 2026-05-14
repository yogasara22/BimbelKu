"use client";
import { GraduationCap, Star } from "lucide-react";

const teachers = [
  {
    name: "Kak Rina Puspitasari",
    subject: "Matematika & IPA",
    level: "SD - SMP",
    edu: "S1 Pendidikan Matematika – UNPAD",
    exp: "7 tahun pengalaman",
    rating: 4.9,
    emoji: "👩‍🏫",
    color: "#1A56DB",
  },
  {
    name: "Kak Ahmad Fauzi",
    subject: "Bahasa Inggris",
    level: "TK - SMP",
    edu: "S1 Sastra Inggris – UNPAD",
    exp: "5 tahun pengalaman",
    rating: 4.8,
    emoji: "👨‍🏫",
    color: "#F59E0B",
  },
  {
    name: "Kak Sari Dewi",
    subject: "Calistung & Tematik SD",
    level: "TK - SD Kelas 3",
    edu: "S1 PGSD – UPI Bandung",
    exp: "6 tahun pengalaman",
    rating: 5.0,
    emoji: "👩‍🎓",
    color: "#10B981",
  },
  {
    name: "Kak Budi Santoso",
    subject: "IPS, B.Indo & PKn",
    level: "SD - SMP",
    edu: "S1 Pendidikan IPS – UPI",
    exp: "4 tahun pengalaman",
    rating: 4.7,
    emoji: "👨‍🎓",
    color: "#8B5CF6",
  },
];

export default function Pengajar() {
  return (
    <section id="pengajar" style={{ padding: "80px 0", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "#EBF5FF",
              color: "#1A56DB",
              fontSize: 13,
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: 100,
              marginBottom: 16,
            }}
          >
            TIM PENGAJAR
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#0F172A", marginBottom: 16 }}>
            Belajar dari Pengajar Terbaik
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Semua pengajar kami telah melalui seleksi ketat dan memiliki sertifikasi, pengalaman mengajar, serta rekam jejak yang terbukti.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {teachers.map((t, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 36,
                  border: `3px solid ${t.color}33`,
                }}
              >
                {t.emoji}
              </div>

              <h3
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: 4,
                }}
              >
                {t.name}
              </h3>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 12 }}>
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>{t.rating}</span>
                <span style={{ fontSize: 13, color: "#94A3B8" }}>/ 5.0</span>
              </div>

              {/* Subject badge */}
              <div
                style={{
                  display: "inline-block",
                  background: `${t.color}15`,
                  color: t.color,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 100,
                  marginBottom: 16,
                }}
              >
                {t.subject}
              </div>

              {/* Info */}
              <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", marginBottom: 6 }}>
                  <GraduationCap size={13} color="#64748B" />
                  <span style={{ fontSize: 12.5, color: "#64748B" }}>{t.edu}</span>
                </div>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.exp} · {t.level}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            padding: "20px",
            background: "white",
            borderRadius: 16,
            border: "1px dashed #CBD5E1",
          }}
        >
          <p style={{ color: "#64748B", fontSize: 15 }}>
            Dan <strong>26+ pengajar</strong> lainnya siap membimbing putra-putri Anda 🎓
          </p>
        </div>
      </div>
    </section>
  );
}

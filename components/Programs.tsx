"use client";
import { Clock, Users, CheckCircle, MessageCircle } from "lucide-react";

const programs = [
  {
    emoji: "📚",
    name: "Bimbel SD / SMP",
    tagline: "Persiapan ujian & penguatan mata pelajaran",
    color: "#1A56DB",
    bgColor: "#EBF5FF",
    features: [
      "Semua mata pelajaran (Mat, IPA, IPS, B.Indo)",
      "Latihan soal & tryout rutin",
      "Persiapan ujian sekolah & TKA",
      "Rapor perkembangan siswa bulanan",
    ],
    duration: "2x seminggu",
    students: "Maks. 8 siswa/kelas",
    price: "Mulai Rp 250.000/bulan",
    popular: true,
  },
  {
    emoji: "🌍",
    name: "Kursus Bahasa Inggris",
    tagline: "Speaking, listening, reading & writing",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    features: [
      "Kelas berdasarkan level (Starter - Advanced)",
      "Fokus conversation & grammar",
      "Materi sesuai kurikulum sekolah",
      "Native-like pronunciation training",
    ],
    duration: "3x seminggu",
    students: "Maks. 6 siswa/kelas",
    price: "Mulai Rp 300.000/bulan",
    popular: false,
  },
  {
    emoji: "✏️",
    name: "Kursus Calistung",
    tagline: "Baca, tulis, hitung — fondasi belajar anak",
    color: "#10B981",
    bgColor: "#ECFDF5",
    features: [
      "Untuk anak TK hingga kelas 2 SD",
      "Metode fun & interaktif",
      "Modul bergambar menarik",
      "Laporan mingguan untuk orang tua",
    ],
    duration: "3x seminggu",
    students: "Maks. 5 siswa/kelas",
    price: "Mulai Rp 200.000/bulan",
    popular: false,
  },
  {
    emoji: "👤",
    name: "Les Privat",
    tagline: "Satu guru, satu siswa — fokus maksimal",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    features: [
      "Jadwal fleksibel di rumah / kelas",
      "Materi disesuaikan kebutuhan siswa",
      "Semua jenjang (SD, SMP, SMA)",
      "Bisa online via Zoom/Google Meet",
    ],
    duration: "Sesuai kesepakatan",
    students: "1-on-1 privat",
    price: "Mulai Rp 100.000/sesi",
    popular: false,
  },
];

export default function Programs() {
  return (
    <section id="program" style={{ padding: "80px 0", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section Header */}
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
              letterSpacing: 0.5,
            }}
          >
            PROGRAM KAMI
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#0F172A", marginBottom: 16 }}>
            Pilihan Program Belajar Lengkap
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Dirancang untuk memenuhi kebutuhan belajar anak di setiap jenjang, dengan metode yang teruji dan pengajar berpengalaman.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 24,
          }}
        >
          {programs.map((program, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                border: program.popular ? `2px solid ${program.color}` : "2px solid transparent",
                position: "relative",
              }}
            >
              {/* Popular badge */}
              {program.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: program.color,
                    color: "white",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                    letterSpacing: 0.5,
                  }}
                >
                  TERPOPULER
                </div>
              )}

              {/* Card Header */}
              <div style={{ background: program.bgColor, padding: "28px 28px 24px" }}>
                <span style={{ fontSize: 40 }}>{program.emoji}</span>
                <h3
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0F172A",
                    marginTop: 12,
                    marginBottom: 6,
                  }}
                >
                  {program.name}
                </h3>
                <p style={{ fontSize: 14, color: "#64748B" }}>{program.tagline}</p>
              </div>

              {/* Card Body */}
              <div style={{ padding: "24px 28px" }}>
                {/* Features */}
                <ul style={{ listStyle: "none", marginBottom: 20 }}>
                  {program.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: 10,
                        fontSize: 14,
                        color: "#475569",
                      }}
                    >
                      <CheckCircle size={15} color={program.color} style={{ marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Meta info */}
                <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B" }}>
                    <Clock size={13} />
                    {program.duration}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B" }}>
                    <Users size={13} />
                    {program.students}
                  </div>
                </div>

                {/* Price */}
                <div
                  style={{
                    background: program.bgColor,
                    borderRadius: 10,
                    padding: "10px 14px",
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 800, color: program.color }}>
                    {program.price}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20program%20${encodeURIComponent(program.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "12px",
                    background: program.color,
                    color: "white",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <MessageCircle size={15} />
                  Daftar via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

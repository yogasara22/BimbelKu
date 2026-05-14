"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Ratna Sari",
    role: "Orang tua Dinda (Kelas 5 SD)",
    text: "Nilai matematika Dinda meningkat drastis dari 60 menjadi 87 hanya dalam 2 bulan! Pengajarnya sabar dan metodenya menyenangkan. Dinda malah minta tambah jam les!",
    rating: 5,
    program: "Bimbel SD",
    emoji: "👩",
    color: "#1A56DB",
  },
  {
    name: "Bapak Hendri Kusuma",
    role: "Orang tua Aldi (SMP Kelas 7)",
    text: "Sangat terbantu dengan laporan perkembangan mingguan. Saya bisa tahu persis di mana kelemahan Aldi dan pengajar langsung fokus memperbaikinya. Recommended!",
    rating: 5,
    program: "Bimbel SMP",
    emoji: "👨",
    color: "#10B981",
  },
  {
    name: "Ibu Maya Pratiwi",
    role: "Orang tua Rafa (TK B)",
    text: "Rafa bisa baca dan nulis dalam 3 bulan ikut kursus calistung di sini. Guru-gurunya kreatif, anaknya jadi semangat belajar dan tidak takut sekolah lagi.",
    rating: 5,
    program: "Kursus Calistung",
    emoji: "👩",
    color: "#F59E0B",
  },
  {
    name: "Ibu Sinta Dewi",
    role: "Orang tua Nayla (SD Kelas 3)",
    text: "Kursus bahasa Inggrisnya bagus banget! Nayla sekarang sudah berani ngobrol bahasa Inggris dan nilainya naik signifikan. Harganya terjangkau untuk kualitas seperti ini.",
    rating: 5,
    program: "Kursus B. Inggris",
    emoji: "👩",
    color: "#8B5CF6",
  },
  {
    name: "Bapak Doni Firmansyah",
    role: "Orang tua Farhan (SMP Kelas 9)",
    text: "Les privat yang sangat personal. Pengajar benar-benar fokus ke kebutuhan Farhan untuk persiapan ujian. Jadwal fleksibel sangat membantu karena kesibukan Farhan ikut ekskul.",
    rating: 5,
    program: "Les Privat",
    emoji: "👨",
    color: "#EC4899",
  },
  {
    name: "Ibu Wulandari",
    role: "Orang tua Zara (SD Kelas 6)",
    text: "Tryout rutin yang diadakan sangat membantu Zara terbiasa dengan format ujian. Hasilnya dia masuk SMP favorit pilihan pertama! Terima kasih BimbelKu!",
    rating: 5,
    program: "Bimbel SD",
    emoji: "👩",
    color: "#06B6D4",
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" style={{ padding: "80px 0", background: "#F8FAFC" }}>
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
            TESTIMONI
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#0F172A", marginBottom: 16 }}>
            Kata Orang Tua Siswa Kami
          </h2>
          {/* Overall rating */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={20} fill="#F59E0B" color="#F59E0B" />
            ))}
            <span style={{ fontWeight: 700, fontSize: 18, color: "#0F172A" }}>4.9 / 5.0</span>
            <span style={{ color: "#64748B", fontSize: 14 }}>dari 200+ ulasan</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                position: "relative",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  color: `${t.color}30`,
                }}
              >
                <Quote size={32} fill={t.color} />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7, marginBottom: 20 }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `${t.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    border: `2px solid ${t.color}30`,
                  }}
                >
                  {t.emoji}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{t.role}</div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <span
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {t.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

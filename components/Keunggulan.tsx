"use client";
import { ShieldCheck, BookOpen, BarChart2, Calendar, Smile, PhoneCall } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Pengajar Terverifikasi",
    desc: "Semua tenaga pengajar telah melalui seleksi ketat dan memiliki latar belakang pendidikan yang sesuai.",
    color: "#1A56DB",
    bg: "#EBF5FF",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Laporan Perkembangan",
    desc: "Orang tua dapat memantau perkembangan nilai dan kemajuan belajar anak secara berkala.",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Kurikulum Terkini",
    desc: "Materi disesuaikan dengan kurikulum sekolah terbaru (Kurikulum Merdeka dan KTSP).",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: <Calendar size={28} />,
    title: "Jadwal Fleksibel",
    desc: "Pilih hari dan jam belajar yang sesuai dengan aktivitas anak tanpa mengorbankan kegiatan lain.",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: <Smile size={28} />,
    title: "Metode Menyenangkan",
    desc: "Belajar tidak harus membosankan. Kami gunakan permainan edukatif dan media visual yang menarik.",
    color: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    icon: <PhoneCall size={28} />,
    title: "Konsultasi Orang Tua",
    desc: "Komunikasi terbuka antara pengajar dan orang tua untuk memastikan perkembangan optimal anak.",
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" style={{ padding: "80px 0", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="feature-grid">
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#EBF5FF",
                color: "#1A56DB",
                fontSize: 13,
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              KEUNGGULAN KAMI
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 900,
                color: "#0F172A",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Mengapa Memilih{" "}
              <span style={{ color: "#1A56DB" }}>BimbelKu?</span>
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
              Kami berkomitmen memberikan pengalaman belajar terbaik yang tidak hanya meningkatkan nilai akademik, tetapi juga membangun kepercayaan diri anak.
            </p>

            {/* Big stat */}
            <div
              style={{
                background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
                borderRadius: 20,
                padding: "28px 32px",
                color: "white",
                display: "flex",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 56, fontFamily: "Merriweather, serif", fontWeight: 900, lineHeight: 1 }}>
                95<span style={{ fontSize: 28 }}>%</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Siswa Mengalami Peningkatan Nilai</div>
                <div style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.5 }}>
                  Dalam 3 bulan pertama belajar di BimbelKu, berdasarkan data siswa aktif 2024–2025.
                </div>
              </div>
            </div>
          </div>

          {/* Right: feature grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "20px",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: f.bg,
                    color: f.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {f.icon}
                </div>
                <h4
                  style={{
                    fontSize: 15,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: 8,
                  }}
                >
                  {f.title}
                </h4>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

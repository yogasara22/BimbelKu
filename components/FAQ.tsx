"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa usia minimal anak untuk bisa mendaftar?",
    a: "Program calistung kami menerima anak mulai usia 4 tahun (TK A/B). Untuk bimbel reguler, kami menerima dari kelas 1 SD hingga kelas 9 SMP. Program les privat terbuka untuk semua jenjang termasuk SMA.",
  },
  {
    q: "Apakah ada sesi trial/percobaan sebelum mendaftar?",
    a: "Ya! Kami menyediakan 1 sesi trial GRATIS untuk semua program. Anak Anda bisa mencoba belajar bersama pengajar kami sebelum memutuskan untuk mendaftar. Hubungi kami via WhatsApp untuk reservasi.",
  },
  {
    q: "Bagaimana sistem laporan perkembangan anak?",
    a: "Orang tua akan menerima laporan perkembangan bulanan yang mencakup nilai, kehadiran, dan catatan pengajar. Untuk paket Premium, laporan diberikan setiap minggu. Orang tua juga bisa konsultasi langsung dengan pengajar kapan saja.",
  },
  {
    q: "Apakah bisa les online atau hanya tatap muka?",
    a: "Kami menyediakan kedua opsi. Tatap muka di tempat kami atau di rumah siswa (untuk les privat). Untuk online, kami menggunakan Zoom atau Google Meet yang sudah familiar bagi siswa dan orang tua.",
  },
  {
    q: "Bagaimana jika anak tidak cocok dengan pengajar?",
    a: "Kepuasan siswa adalah prioritas kami. Jika anak Anda merasa tidak cocok dengan pengajar yang ditugaskan, kami akan mengganti pengajar tanpa biaya tambahan. Cukup hubungi admin kami.",
  },
  {
    q: "Apakah ada diskon untuk lebih dari 1 anak?",
    a: "Tentu! Kami memberikan diskon 15% untuk pendaftaran anak kedua dan seterusnya dari keluarga yang sama. Hubungi kami untuk informasi promo keluarga dan promo lainnya yang sedang berjalan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ padding: "80px 0", background: "white" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            FAQ
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#0F172A" }}>
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${openIndex === i ? "#1A56DB" : "#E2E8F0"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: openIndex === i ? "#EBF5FF" : "white",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                  transition: "background 0.2s",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 15, color: "#0F172A", lineHeight: 1.5 }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  color="#1A56DB"
                  style={{
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                />
              </button>
              {openIndex === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    background: "white",
                  }}
                >
                  <div style={{ height: 1, background: "#E2E8F0", marginBottom: 16 }} />
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

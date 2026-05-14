"use client";
import { CheckCircle, X, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Cocok untuk mulai coba",
    price: "200.000",
    period: "/bulan",
    color: "#64748B",
    bgColor: "#F8FAFC",
    borderColor: "#E2E8F0",
    features: [
      { text: "1 mata pelajaran pilihan", included: true },
      { text: "2x pertemuan/minggu", included: true },
      { text: "Kelas kelompok (maks 10 siswa)", included: true },
      { text: "Modul belajar digital", included: true },
      { text: "Laporan bulanan", included: true },
      { text: "Tryout bulanan", included: false },
      { text: "Konsultasi orang tua", included: false },
      { text: "Akses video rekaman", included: false },
    ],
    cta: "Pilih Starter",
    popular: false,
  },
  {
    name: "Reguler",
    subtitle: "Paling banyak dipilih",
    price: "400.000",
    period: "/bulan",
    color: "#1A56DB",
    bgColor: "#1A56DB",
    borderColor: "#1A56DB",
    features: [
      { text: "Semua mata pelajaran", included: true },
      { text: "3x pertemuan/minggu", included: true },
      { text: "Kelas kecil (maks 8 siswa)", included: true },
      { text: "Modul belajar digital + cetak", included: true },
      { text: "Laporan bulanan", included: true },
      { text: "Tryout bulanan gratis", included: true },
      { text: "Konsultasi orang tua", included: true },
      { text: "Akses video rekaman", included: false },
    ],
    cta: "Pilih Reguler",
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Untuk hasil maksimal",
    price: "700.000",
    period: "/bulan",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    borderColor: "#F59E0B",
    features: [
      { text: "Semua mata pelajaran", included: true },
      { text: "Jadwal bebas (fleksibel)", included: true },
      { text: "Les privat 1-on-1", included: true },
      { text: "Modul premium + workbook", included: true },
      { text: "Laporan mingguan", included: true },
      { text: "Tryout 2x/bulan", included: true },
      { text: "Konsultasi orang tua prioritas", included: true },
      { text: "Akses video rekaman", included: true },
    ],
    cta: "Pilih Premium",
    popular: false,
  },
];

export default function Biaya() {
  return (
    <section id="biaya" style={{ padding: "80px 0", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
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
            PAKET BIAYA
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#0F172A", marginBottom: 16 }}>
            Harga Terjangkau, Hasil Nyata
          </h2>
          <p style={{ fontSize: 17, color: "#64748B", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket termasuk jaminan kepuasan.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `2px solid ${plan.borderColor}`,
                boxShadow: plan.popular ? "0 24px 48px -12px rgba(26,86,219,0.3)" : "0 4px 16px rgba(0,0,0,0.06)",
                transform: plan.popular ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = "translateY(-6px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: plan.popular ? plan.bgColor : plan.bgColor,
                  padding: "28px 28px 24px",
                  borderBottom: `1px solid ${plan.borderColor}33`,
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.25)",
                      color: "white",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 100,
                      marginBottom: 12,
                      letterSpacing: 0.5,
                    }}
                  >
                    ⭐ TERPOPULER
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "Merriweather, serif",
                    fontSize: 22,
                    fontWeight: 900,
                    color: plan.popular ? "white" : "#0F172A",
                    marginBottom: 4,
                  }}
                >
                  {plan.name}
                </div>
                <div style={{ fontSize: 13, color: plan.popular ? "rgba(255,255,255,0.8)" : "#64748B", marginBottom: 16 }}>
                  {plan.subtitle}
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: plan.popular ? "rgba(255,255,255,0.8)" : "#64748B", marginBottom: 6 }}>
                    Rp
                  </span>
                  <span
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontSize: 36,
                      fontWeight: 900,
                      color: plan.popular ? "white" : "#0F172A",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 13, color: plan.popular ? "rgba(255,255,255,0.7)" : "#94A3B8", marginBottom: 4 }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div style={{ padding: "24px 28px", background: "white" }}>
                <ul style={{ listStyle: "none", marginBottom: 24 }}>
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 10,
                        fontSize: 14,
                        color: f.included ? "#334155" : "#CBD5E1",
                      }}
                    >
                      {f.included ? (
                        <CheckCircle size={15} color="#10B981" style={{ marginTop: 2, flexShrink: 0 }} />
                      ) : (
                        <X size={15} color="#CBD5E1" style={{ marginTop: 2, flexShrink: 0 }} />
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mendaftar%20paket%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "13px",
                    background: plan.popular ? "#1A56DB" : "white",
                    color: plan.popular ? "white" : plan.color,
                    border: `2px solid ${plan.color}`,
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = plan.color;
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = plan.popular ? "#1A56DB" : "white";
                    e.currentTarget.style.color = plan.popular ? "white" : plan.color;
                  }}
                >
                  <MessageCircle size={15} />
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "#94A3B8" }}>
          💡 Semua harga belum termasuk biaya pendaftaran Rp 50.000 (sekali bayar). Harga dapat berubah sewaktu-waktu. Hubungi kami untuk promo terkini.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  );
}

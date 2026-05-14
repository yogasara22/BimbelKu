"use client";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#program", label: "Program" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#pengajar", label: "Pengajar" },
    { href: "#biaya", label: "Biaya" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #1A56DB, #3B82F6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(26,86,219,0.3)",
            }}
          >
            <BookOpen size={20} color="white" />
          </div>
          <span style={{ fontFamily: "Merriweather, serif", fontWeight: 900, fontSize: 20, color: "#0F172A" }}>
            Bimbel<span style={{ color: "#1A56DB" }}>Ku</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                textDecoration: "none",
                color: "#334155",
                fontWeight: 500,
                fontSize: 15,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A56DB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20program%20bimbel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1A56DB",
              color: "white",
              padding: "10px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1044B2";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1A56DB";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Phone size={14} />
            Daftar Sekarang
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#0F172A",
            display: "none",
          }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #E2E8F0",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                textDecoration: "none",
                color: "#334155",
                fontWeight: 500,
                borderBottom: "1px solid #F1F5F9",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: 16,
              background: "#1A56DB",
              color: "white",
              padding: "12px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Daftar Sekarang
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

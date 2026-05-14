"use client";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWA() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20informasi%20lebih%20lanjut%20tentang%20BimbelKu"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#25D366",
        color: "white",
        padding: hover ? "12px 20px" : "14px",
        borderRadius: 100,
        textDecoration: "none",
        boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hover ? "scale(1.05)" : "scale(1)",
        overflow: "hidden",
        maxWidth: hover ? 200 : 52,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={22} style={{ flexShrink: 0 }} />
      <span
        style={{
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          opacity: hover ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        Chat Kami
      </span>
    </a>
  );
}

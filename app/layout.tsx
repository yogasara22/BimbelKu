import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BimbelKu - Bimbingan Belajar Terpercaya",
  description: "Bimbel lokal terpercaya dengan tenaga pengajar berpengalaman. Les privat, kursus bahasa Inggris, calistung, dan program SD/SMP tersedia.",
  keywords: "bimbel, les privat, kursus bahasa inggris, calistung, bimbingan belajar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

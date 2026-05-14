import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Keunggulan from "@/components/Keunggulan";
import Pengajar from "@/components/Pengajar";
import Biaya from "@/components/Biaya";
import Testimoni from "@/components/Testimoni";
import FAQ from "@/components/FAQ";
import Kontak from "@/components/Kontak";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Keunggulan />
        <Pengajar />
        <Biaya />
        <Testimoni />
        <FAQ />
        <Kontak />
      </main>
      <FloatingWA />
    </>
  );
}

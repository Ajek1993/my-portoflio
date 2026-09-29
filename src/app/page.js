import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import HowIWork from "@/components/sections/HowIWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="tresc">
        <Hero />
        <WhatIDo />
        <HowIWork />
      </main>
      <Footer />
    </>
  );
}

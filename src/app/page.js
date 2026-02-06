"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import Introduction from "@/components/Introduction/Introduction";
import Header from "@/components/Header";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div className="xl:container mx-auto">
          <Introduction />
          <AboutMe />
        </div>
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

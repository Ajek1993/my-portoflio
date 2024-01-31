"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import Introduction from "@/components/Introduction/Introduction";
import Header from "@/components/Header";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="xl:container">
      <header>
        <Header />
      </header>
      <main>
        <Introduction />
        <AboutMe />
        <Projects />
        <Technologies />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

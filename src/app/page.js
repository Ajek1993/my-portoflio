"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import Introduction from "@/components/Introduction/Introduction";
import Header from "@/components/Header";

import Aos from "aos"; //Library for Animations
import "aos/dist/aos.css";

import { useEffect } from "react";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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

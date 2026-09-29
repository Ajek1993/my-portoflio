import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import HowIWork from "@/components/sections/HowIWork";
import Projects from "@/components/sections/Projects";
import MoreProjects from "@/components/sections/MoreProjects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main id="tresc">
        <Hero />
        <WhatIDo />
        <HowIWork />
        <Projects />
        <MoreProjects />
        <About />
        <Contact />
      </main>
    </>
  );
}

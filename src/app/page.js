"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "@/components/Header/Header";

import Aos from "aos"; //Library for Animations
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <AboutMe />
    </>
  );
}

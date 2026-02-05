"use client";

import { HeroUIProvider } from "@heroui/react";

import Aos from "aos"; //Library for Animations
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function NextProvider({ children }) {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

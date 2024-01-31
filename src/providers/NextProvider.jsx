"use client";

import { NextUIProvider } from "@nextui-org/react";

import Aos from "aos"; //Library for Animations
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function NextProvider({ children }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <NextUIProvider>{children}</NextUIProvider>;
}

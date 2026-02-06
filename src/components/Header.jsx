"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const menuItems = [
    { key: "home", label: t("header.home"), href: "/#home" },
    { key: "aboutme", label: t("header.aboutme"), href: "/#aboutme" },
    { key: "projects", label: t("header.projects"), href: "/#projects" },
    { key: "contact", label: t("header.contact"), href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0f172a]/80 backdrop-blur-md">
      <nav className="xl:container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image src="/rocket-solid.svg" width={40} height={40} alt="Logo" className="invert" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              className="hover:text-primary text-lg md:text-xl hover-link text-text-main"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => changeLanguage("pl")}
              className={`px-2 py-1 text-sm font-bold hover-link ${
                language === "pl"
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              PL
            </button>
            <span className="text-text-secondary">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 text-sm font-bold hover-link ${
                language === "en"
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className={`block h-[2px] w-5 bg-text-main transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-5 bg-text-main transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-text-main transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#0f172a]/95 backdrop-blur-md px-4 pb-6 pt-2 border-t border-border">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              className="block hover:text-primary text-xl py-3 hover-link text-text-main"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-3">
            <button
              onClick={() => changeLanguage("pl")}
              className={`px-3 py-1 text-sm font-bold hover-link ${
                language === "pl"
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              PL
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 text-sm font-bold hover-link ${
                language === "en"
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

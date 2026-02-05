"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useLanguage } from "@/context/LanguageContext";

// Hamburger icon SVG
const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Close icon SVG
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

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
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="pt-4 bg-inherit border-solid border-b-2 border-primary sm:border-none"
      position="static"
    >
      {/* Logo - lewa strona */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image src="/rocket-solid.svg" width={40} height={40} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      {/* Linki nawigacyjne + język - prawa strona (desktop) */}
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link
              className="hover:text-primary text-2xl hover-link"
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
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
        </NavbarItem>
      </NavbarContent>

      {/* Menu mobilne */}
      <NavbarMenu className="mt-4 bg-inherit">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link
              className="hover:text-primary w-full text-xl py-2 hover-link"
              color="foreground"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex gap-4 pt-2">
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
        </NavbarMenuItem>
      </NavbarMenu>

      {/* Hamburger toggle - mobile */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      >
        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </NavbarMenuToggle>
    </Navbar>
  );
}

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
} from "@heroui/react";
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
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="pt-4 bg-inherit border-solid border-b-2 border-primary sm:border-none"
      position="static"
    >
      <NavbarContent>
        <NavbarBrand>
          <Image src="/rocket-solid.svg" width={40} height={40} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link
              className="hover:text-primary text-2xl"
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex gap-2">
            <button
              onClick={() => changeLanguage("pl")}
              className={`px-2 py-1 text-sm font-bold ${
                language === "pl"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground-500 hover:text-primary"
              }`}
            >
              PL
            </button>
            <span className="text-foreground-500">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 text-sm font-bold ${
                language === "en"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground-500 hover:text-primary"
              }`}
            >
              EN
            </button>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-4 bg-inherit">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link
              className="hover:text-primary w-full text-xl py-2"
              color="foreground"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
}

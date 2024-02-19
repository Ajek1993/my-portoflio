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
} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About me", "Projects", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="pt-4 bg-inherit border-solid border-b-2 border-primary sm:border-none"
    >
      <NavbarContent>
        <NavbarBrand>
          <Image src="/rocket-solid.svg" width={40} height={40} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => {
          const sectionNAme = item.toLocaleLowerCase().replace(" ", "");
          return (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className="hover:text-primary text-2xl"
                color="foreground"
                href={`/#${sectionNAme}`}
              >
                {item}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu className="mt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="hover:text-primary w-full text-xl py-2"
              color="foreground"
              href="#"
              size="lg"
            >
              {item}
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

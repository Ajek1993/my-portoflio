"use client";

import React from "react";
import Link from "next/link";
import Heading from "../Heading/Heading";
import { contactIcons } from "../Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-alt py-12">
      <Heading title={t("contact.title")} />
      <ul
        className="text-center py-8 flex justify-center gap-4"
        data-aos="fade-up"
      >
        {contactIcons.map((contactIcon) => (
          <li key={contactIcon.link}>
            <Link
              className="flex justify-center items-center w-14 h-14 border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md text-text-main"
              href={contactIcon.link}
              target="_blank"
            >
              {contactIcon.IconBig}
            </Link>
          </li>
        ))}
      </ul>
      <p
        className="px-6 py-6 mx-auto sm:w-2/3 md:w-1/2 text-sm md:text-base text-text-secondary leading-6 text-center"
        data-aos="fade-up"
      >
        {t("contact.text")}
      </p>
    </section>
  );
}
